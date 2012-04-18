

/**
 * Точка входа в приложение.
 *
 * @param {!Node} body Базовый узел страницы приложения. Обычно
 * <code>document.body</code>.
 */
window['main'] = function(body) {

    // Установка движка CSS-селекторов.
    tuna.dom.setSelectorEngine(Sizzle);

    // Установка класса изолирующее вложенные модули отображения.
    tuna.ui.addIsolator('j-isolator');

    // Инициализация логики приложения.
    tuna.control.init(body);
};
