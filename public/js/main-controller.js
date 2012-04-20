

// Класс основного контроллера логики приложения.
/**
 * @constructor
 * @extends {tuna.control.ViewController}
 */
var MainController = function() {

    // Вызов конструктора родительского класса.
    tuna.control.ViewController.call(this);


    // Список модулей отображения. В данном приложении используются следующие
    // модули отображения:
    //
    //  - `form` - для управления формой добаления задачи;
    //  - `button` - для обрабтки нажатия кнопок управления списком задач, таких
    //    как кнопка удаления выполненных задач и отметки всех задач
    //    выполненными;
    //  - `button-group` - для обработки нажатия кнопок управления задачи в
    //    списке, например, для удаления задачи и отмтки ее выполнения.
    //  - `template-transformer` - для отображения текущего состояния данных
    //    приложения.
    this._modules = [ 'form',
                      'button',
                      'button-group',
                      'template-transformer' ];


    // Объект управления трансформацией отображения списка задач.
    this.__todoListTransformer = null;


    // Массив объеков задач следующего вида:
    //
    // <pre><code>{
    //      'text': 'Купить хлеб', // Текст задачи
    //      'isDone': false        // Флаг выполнения задачи
    // }</code></pre>
    this.__tasksList = [];
};

tuna.utils.extend(MainController, tuna.control.ViewController);



// Инициализация логики приложения.
MainController.prototype._initActions = function() {
    // Получение экземпляра модуля управления трансформацией и первичное
    // обновление отображения.
    this.__todoListTransformer =
        this._container.getModuleInstanceByName
            ('template-transformer', 'todo-list');

    this.__updateView();

    // Инициализация функционала формы добавления задачи, кнопок управления
    // списком задач и кнопок управления каждой задачей.
    this.__initAddTaskForm();
    this.__initTodoControls();
    this.__initTaskControls();
};

// Метод инициализации формы добавления задачи.
MainController.prototype.__initAddTaskForm = function() {
    var self = this;

    // Получение экземпляра модуля формы. Экземпляры модуля формы являются
    // объектами класса `tuna.ui.forms.Form` и установка обработчика отправки
    // формы.
    var addTaskForm =
        this._container.getModuleInstanceByName('form', 'add-task');

    addTaskForm.addEventListener('submit', function(event) {
        // Если текст задачи задан, поле ввода текста задачи очищается вызовом
        // метода `setValue` объекта `addTaskForm`, добавляется новое задание в
        // список и перерисовывается его отображение. При этом предотвращается
        // отправка формы вызовом `event.preventDefault()`
        event.preventDefault();

        var text = addTaskForm.getValue('task');
        if (text.length > 0) {
            addTaskForm.setValue('task', '');

            self.__tasksList.push({ 'text': text, 'isDone': false });
            self.__updateView();
        }
    });
};

// Метод инициализации кнопок управления списком задач.
MainController.prototype.__initTodoControls = function() {
    var self = this;

    // Получение экземпляра кнопки установки всех задач в сосотояние _сделано_,
    // а также добавление обрабочика нажатия.
    var allDoneButton =
        this._container.getModuleInstanceByName('button', 'all-done');

    allDoneButton.addEventListener('click', function() {
        // Установка всем задачам флаг `isDone` равным `true` и обновление
        // отображения.
        var i = self.__tasksList.length - 1;
        while (i >= 0) {
            self.__tasksList[i]['isDone'] = true;
            i--;
        }

        self.__updateView();
    });

    // Получение экземпляра кнопки удаления сделанных задач и добавление
    // обрабочика нажатия.
    var removeDoneTasksButton =
        this._container.getModuleInstanceByName('button', 'remove-done-tasks');

    removeDoneTasksButton.addEventListener('click', function() {
        // Удаление из массива всех задач, флаг `isDone` которых равен `true` и
        // обновление отображения.
        var i = self.__tasksList.length - 1;
        while (i >= 0) {
            if (self.__tasksList[i]['isDone'] === true) {
                self.__tasksList.splice(i, 1);
            }

            i--;
        }

        self.__updateView();
    });
};

// Метод инициализации кнопок управления каждой задачей.
MainController.prototype.__initTaskControls = function() {
    var self = this;

    // Получение экземпляра модуля _группа кнопок_, который обрабатывает нажатия
    // на DOM-элементы имеющие соответствующий CSS-класс (кнопки) внутри
    // целевого DOM-элемента экземпляра модуля _группа кнопок_.
    // И установка слушателей действий внутренних кнопок модуля _группа кнопок_.
    // Действие кнопки указывается в аттрибуте `data-action` DOM-элемента
    // кнопки.
    var taskControls =
        this._container.getModuleInstanceByName('button-group', 'task-controls');

    // Событие `done`, например, будет случаться при нажатии на DOM-элемент с
    // классом `j-button` и атрибутом `data-action` со значением `done`.
    taskControls.addEventListener(
        'done',
        // Сопутствующие событию данные передаются во втором аргументе
        // обработчика события. Для событий модуля `button-group`,
        // вторым аргументом является экземпляр класса `tuna.ui.buttons.Button`
        function(event, button) {

            // Чтобы определить кнопка какой задачи была нажата, для каждой
            // такой кнопки устанавливается индекс задачи в аттрибут
            // `data-task-index`. Для того тчобы получить данные аттрибута
            // используется метод `getOption` и его вариации.
            var taskIndex = button.getNumberOption('task-index');

            // Установка соответсвующей задачи противоположное состояние и
            // обнление отображения.
            var isDone = self.__tasksList[taskIndex]['isDone'];
            self.__tasksList[taskIndex]['isDone'] = !isDone;

            self.__updateView();
        }
    );

    // Аналогично предыдущему устанавливается обработчик удаления задачи.
    taskControls.addEventListener('remove', function(event, button) {
        var taskIndex = button.getNumberOption('task-index');
        self.__tasksList.splice(taskIndex, 1);

        self.__updateView();
    });

};

// Метод обновления отображения.
MainController.prototype.__updateView = function() {

    // Пересчет количества задач помеченных как сделанные.
    var doneCount = 0;
    var i = this.__tasksList.length - 1;
    while (i >= 0) {
        if (this.__tasksList[i]['isDone'] === true) {
            doneCount++;
        }
        
        i--;
    }

    // Вызов трансформации отображения списка зачач методом `applyTransform` и
    // передача набора данных, обработка которого описана в шаблоне
    // трансформации
    this.__todoListTransformer.applyTransform({
        'list': this.__tasksList,
        'doneCount': doneCount,
        'newCount': this.__tasksList.length - doneCount
    });
};

// Устновка класса `MainController` как основного контроллера отображения.
tuna.control.setMainController(new MainController());
