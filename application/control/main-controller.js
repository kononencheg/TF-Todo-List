


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
    this._modules = [ 'form', 'button' ];
};

tuna.utils.extend(MainController, tuna.control.ViewController);

/**
 * @inheritDoc
 */
MainController.prototype._initActions = function() {
    var addTaskForm =
        this._container.getModuleInstanceByName('form', 'add-task');

    addTaskForm.addEventListener('submit', function(event) {
        alert('Задание: ' + addTaskForm.getValue('task'));

        event.preventDefault();
    });

    var removeDoneTasksButton =
        this._container.getModuleInstanceByName('button', 'remove-done-tasks');

    removeDoneTasksButton.addEventListener('click', function() {
        alert('Ура!');
    });
};

tuna.control.setMainController(new MainController());
