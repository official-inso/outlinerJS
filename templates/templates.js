/**
 * @module templates/templates
 * @requires methods/replaceField
 * @description Модуль для работы с шаблонами
 * @since v.1.0.0
 * @version v.1.0.0
 * @author Roman Zhuzhgov
 * @license MIT
 * @example <caption>Пример использования</caption>
 * import templates from './templates/templates.js';
 */
import { replaceFieldsInString, replaceFieldsInElement } from "../methods/replaceField.js";

/**
 * Класс для работы с шаблонами
 * @class
 * @property {HTMLElement} #item Элемент item для навигатора
 * @property {HTMLElement} #_container Контейнер для навигатора
 */
export default class templates {
  #container = undefined;

  /**
   * Элемент item для навигатора
   * @type {HTMLElement}
   * @private
   */
  #item;

  /**
   * Контейнер для навигатора
   * @type {HTMLElement}
   * @private
   */
  #_container;

  #arr_opened = [];

  /**
   * Конструктор класса templates
   * @constructor
   * @returns {void}
   */
  constructor() {
    // this.#item = this.#createItem();
    this.#container = this.#randomString();
    // this.#_container = this.#createContainer(this.#container);
  }

  #randomString = (
    n = 30,
    alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  ) =>
    "id" +
    Array(n)
      .fill(alphabet)
      .map((x) => x[Math.floor(Math.random() * x.length)])
      .join("");

  /**
   * Создает элемент item для навигатора и возвращает его в виде строки с замененными полями
   * @returns
   */
  createItem(prop = {}) {
    // Создаем элементы
    let item = document.createElement("item");
    let item_list = document.createElement("div");
    let item_list_container = document.createElement("div");
    let item_elem = document.createElement("div");
    let item_ico = document.createElement("button");
    let item_ico2 = document.createElement("div");
    let item_name = document.createElement("input");
    let item_elem_left = document.createElement("div");
    let item_elem_right = document.createElement("div");

    let isDoubleClick = false;

    const generateId = this.#randomString();

    // Создаем атрибуты для элемента item
    item.setAttribute(
      "visibled",
      prop.visibled != undefined ? prop.visibled : true
    );
    item.setAttribute(
      "selected",
      prop.select != undefined ? prop.select : false
    );
    item.setAttribute("isGroup", prop.list && prop.list.length > 0);

    if (this.#arr_opened.includes(prop.id)){
      item.setAttribute("open", true);
    } else {
      item.setAttribute("open", prop.open != undefined ? prop.open : false);
    }
    
    item.setAttribute("id", this.#randomString());
    item.setAttribute("locked", prop.locked != undefined ? prop.locked : false);

    // Указываем классы и атрибуты для элементов item_list и item_list_container
    item_list.classList.add("navigaor__item__list");
    item_list_container.classList.add("navigaor__item__list__container");

    if (prop.list && prop.list.length > 0) {
      for (const key in prop.list) {
        const newLine = prop.list[key];
        item_list_container.appendChild(this.createItem(newLine));
      }
    }

    // Указываем классы и атрибуты для элемента item_elem
    item_elem.classList.add("navigator__item__elem");
    item_elem.setAttribute(
      "data-id",
      prop.id != undefined ? prop.id : generateId
    );

    // Указываем классы и атрибуты для элемента item_elem_left
    item_elem_left.classList.add("navigator__item__elem__left");

    // Указываем классы и атрибуты для элемента item_ico
    item_ico.classList.add("navigator__item_ico");

    if (prop.list && prop.list.length > 0){
      item_ico.classList.add("icons-right");
    } else {
      item_ico.innerHTML = '•';
      item_ico.style.opacity = '0.5'
    }
    

    // Указываем классы и атрибуты для элемента item_ico2
    item_ico2.classList.add("navigator__item_ico2");
    item_ico2.setAttribute(
      "type",
      prop.type != undefined ? prop.type : "default"
    );

    // Указываем классы и атрибуты для элемента item_name
    item_name.setAttribute("type", "text");
    item_name.setAttribute(
      "value",
      prop.name != undefined ? prop.name : "Без имени"
    );
    item_name.setAttribute(
      "rename",
      prop.renameEdit != undefined ? prop.renameEdit : false
    );
    item_name.setAttribute("disabled", "disabled");
    item_name.setAttribute(
      "initial-value",
      prop.name != undefined ? prop.name : "Без имени"
    );
    item_name.classList.add("navigator__item__name");

    item_elem_right.classList.add("navigator__item__elem__right");

    if (prop.buttons && prop.buttons.length > 0) {
      for (const key in prop.buttons) {
        const btn = prop.buttons[key];
        if (btn.type == undefined) btn.type = "default";
        if (btn.click == undefined) btn.click = () => {};
        item_elem_right.appendChild(
          this.createButton(
            btn.icons,
            btn.type,
            btn.click,
            prop.id != undefined ? prop.id : generateId,
            btn.value,
            item
          )
        );
      }
    }

    if (prop.click != undefined) {
      item_elem.addEventListener("click", (e) => {

        if(isDoubleClick) clearTimeout(isDoubleClick);

        isDoubleClick = setTimeout(() => {
          if (e.target.classList.contains('navigator__item_ico')) return;
          if (e.target.parentElement.classList.contains('navigator__item__elem__right')) return;
          prop.click(
            prop.id != undefined ? prop.id : generateId,
            item,
            e
          );

          this.#selected(item, prop, e)
        }, 300);

      });
    }

    if(prop.rename != undefined){
      item_elem.addEventListener('dblclick', (e) => {

        if (isDoubleClick) { // отменить ждущий клик
          clearTimeout(isDoubleClick);
        }

        if (item_name.getAttribute('disabled') == 'disabled') {
          item_name.removeAttribute('disabled');
          item_name.focus();
        }

      })

      item_name.addEventListener('blur', (e) => {
        if (item_name.getAttribute("initial-value") != item_name.value) {
          item_name.setAttribute("value", item_name.value);
          item_name.setAttribute("initial-value", item_name.value);
          prop.rename(
            item_name.value,
            prop.id != undefined ? prop.id : generateId,
            item_name,
            e
          );
        }
        item_name.setAttribute("disabled", "disabled");
      });
    }

    item_ico.addEventListener('click', (e) => {
      if (item.getAttribute('open') == 'true') {
        item.setAttribute('open', 'false');
        const i = this.#arr_opened.indexOf(prop.id);
        this.#arr_opened.splice(i, 1);
      } else {
        item.setAttribute('open', 'true');
        this.#arr_opened.push(prop.id)
      }
    });

    // Добавляем элементы в DOM дерево элемента item_elem_left
    item_elem_left.appendChild(item_ico);
    item_elem_left.appendChild(item_ico2);
    item_elem_left.appendChild(item_name);

    // Добавляем элементы в DOM дерево элемента item_elem
    item_elem.appendChild(item_elem_left);

    // Добавляем элементы в DOM дерево элемента item_elem
    item_elem.appendChild(item_elem_right);

    // Добавляем элементы в DOM дерево элемента item_list
    item_list.appendChild(item_list_container);

    // Добавляем элементы в DOM дерево элемента item
    item.appendChild(item_elem);
    item.appendChild(item_list);

    return item;
  }

  /**
   * Создает контейнер для навигатора и возвращает его
   * @returns Возвращает контейнер для навигатора
   */
  #createContainer(id) {
    let navigator = document.createElement("navigatorJS");
    navigator.classList.add("outliner__navigator");
    navigator.setAttribute("id", id);

    return navigator;
  }

  #selected(element, prop, e) {

    if (!e.ctrlKey) document.querySelectorAll('item').forEach(item => {
      if (item != element) {
        item.removeAttribute('selected');
      }
    });

    if (element.getAttribute('selected') == 'true') {
      element.setAttribute('selected', 'false');
    } else {
      element.setAttribute('selected', 'true');
    }

    const id = element.querySelector('.navigator__item__elem').getAttribute('data-id');
    const ids = [];

    document.querySelectorAll('item[selected="true"] > .navigator__item__elem').forEach(item => {
      ids.push(item.getAttribute('data-id'));
    });

    if (prop.selected != undefined) prop.selected(id, element, ids, e);
  }

  /**
   * Создает кнопку с иконкой и типом кнопки
   * @param {*} iconsClass Класс иконки
   * @param {*} type Тип кнопки
   * @returns {HTMLElement} Кнопка с иконкой и типом кнопки
   */
  createButton(iconsClass, type, callback, id, value, item) {
    let button = document.createElement("button");
    button.setAttribute("type", type);

    button.setAttribute("enabled", value ? 'enabled' : 'disabled');

    button.classList.add(value ? iconsClass.enabled : iconsClass.disabled);
    
    if (callback != undefined){
      button.addEventListener("click", (e) => {
        let this_value = button.getAttribute('enabled') == 'enabled';

        if (this_value){
          button.setAttribute("enabled", 'disabled');
          button.classList.remove(iconsClass.enabled);
          button.classList.add(iconsClass.disabled);
        } else {
          button.setAttribute("enabled", 'enabled');
          button.classList.remove(iconsClass.disabled);
          button.classList.add(iconsClass.enabled);
        }
        callback(this_value, id, button, e);
      });
    }

    if (type.match(/^(visibled|locked)$/ui)) {
      
      button.addEventListener("click", (e) => {
        let this_value = button.getAttribute('enabled') == 'enabled';
        item.setAttribute(type, this_value);
      });
      item.setAttribute(type, value);
    }

    return button;
  }

  /**
   * Создает контейнер для навигатора и возвращает его в виде строки с замененными полями
   * @returns Возвращает контейнер для навигатора в виде строки с замененными полями
   */
  get container() {
    let f = this.#createContainer(this.#container);
    return f;
  }
};