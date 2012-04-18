


/**
 * Класс основного контроллера логики приложения.
 *
 * @constructor
 * @extends {tuna.control.ViewController}
 */
var MainController = function() {
    tuna.control.ViewController.call(this);

    /**
     * Список модулей-компонентов отображения, которые необходимо
     * проинициализировать в контейнере соответствующему данному контроллеру
     * отображения.
     *
     * Основному контроллеру отображения соотвествует базовый узел страницы
     * приложения.
     *
     * @type {!Array.<string>}
     * @protected
     */
    this._modules = [ 'popup' ];
};

tuna.utils.extend(MainController, tuna.control.ViewController);

// Установка экземпляра класса <code>MainController</code> как основного
// контроллера отображения.
tuna.control.setMainController(new MainController());
