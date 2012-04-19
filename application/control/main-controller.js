


/**
 * Класс основного контроллера логики приложения.
 *
 * @constructor
 * @extends {tuna.control.ViewController}
 */
var MainController = function() {
    tuna.control.ViewController.call(this);

    /**
     * @inheritDoc
     */
    this._modules = [ 'form', 'button', 'template-transformer',
                      'button-group' ];

    // >>

    /**
     * @type {tuna.ui.transformers.ITransformer|tuna.ui.ModuleInstance}
     * @private
     */
    this.__todoListTransformer = null;

    /**
     * @type {Array}
     * @private
     */
    this.__tasksList = [];

    // <<
};

tuna.utils.extend(MainController, tuna.control.ViewController);

/**
 * @inheritDoc
 */
MainController.prototype._initActions = function() {
    this.__todoListTransformer =
        this._container.getModuleInstanceByName
            ('template-transformer', 'todo-list');

    var self = this;

    var addTaskForm =
        this._container.getModuleInstanceByName('form', 'add-task');

    addTaskForm.addEventListener('submit', function(event) {
        var text = addTaskForm.getValue('task');
        if (text.length > 0) {
            addTaskForm.setValue('task', '');

            self.__tasksList.push({ 'text': text, 'isDone': false });
            self.__updateView();
        }

        event.preventDefault();
    });

    var allDoneButton =
        this._container.getModuleInstanceByName('button', 'all-done');

    allDoneButton.addEventListener('click', function() {
        var i = self.__tasksList.length - 1;
        while (i >= 0) {
            self.__tasksList[i]['isDone'] = true;
            i--;
        }

        self.__updateView();
    });

    var removeDoneTasksButton =
        this._container.getModuleInstanceByName('button', 'remove-done-tasks');

    removeDoneTasksButton.addEventListener('click', function() {
        var i = self.__tasksList.length - 1;
        while (i >= 0) {
            if (self.__tasksList[i]['isDone'] === true) {
                self.__tasksList.splice(i, 1);
            }
            
            i--;
        }
    
        self.__updateView();
    });

    var taskControls =
        this._container.getModuleInstanceByName('button-group', 'task-controls');

    taskControls.addEventListener('done', function(event, button) {
        var taskIndex = button.getNumberOption('task-index');
        var isDone = self.__tasksList[taskIndex]['isDone'];

        self.__tasksList[taskIndex]['isDone'] = !isDone;

        self.__updateView();
    });

    taskControls.addEventListener('remove', function(event, button) {
        var taskIndex = button.getNumberOption('task-index');
        self.__tasksList.splice(taskIndex, 1);
        self.__updateView();
    });

    this.__updateView();
};

/**
 * @private
 */
MainController.prototype.__updateView = function() {
    var doneCount = 0;
    var i = this.__tasksList.length - 1;
    while (i >= 0) {
        if (this.__tasksList[i]['isDone'] === true) {
            doneCount++;
        }
        
        i--;
    }
    
    this.__todoListTransformer.applyTransform({
        'list': this.__tasksList,
        'doneCount': doneCount,
        'newCount': this.__tasksList.length - doneCount
    });
};

tuna.control.setMainController(new MainController());
