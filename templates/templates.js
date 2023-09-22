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
export default class templates{

  #container = undefined;

  /**
   * Элемент item для навигатора
   * @type {HTMLElement}
   * @private
   */
  #item

  /**
   * Контейнер для навигатора
   * @type {HTMLElement}
   * @private
   */
  #_container;

  /**
   * Конструктор класса templates
   * @constructor
   * @returns {void}
   */
  constructor(){
    // this.#item = this.#createItem();
    this.#container = this.#randomString();  
    // this.#_container = this.#createContainer(this.#container);
  }

  #randomString = (n = 30, alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789') => "id" + Array(n).fill(alphabet).map(x => x[Math.floor(Math.random() * x.length)]).join('');

  /**
   * Создает элемент item для навигатора и возвращает его в виде строки с замененными полями
   * @returns 
   */
  createItem(prop = {}){
    
    console.log(prop)

    // Создаем элементы
    let item = document.createElement('item');
    let item_list = document.createElement('div');
    let item_list_container = document.createElement('div');
    let item_elem = document.createElement('div');
    let item_ico = document.createElement('button');
    let item_ico2 = document.createElement('div');
    let item_name = document.createElement('input');
    let item_elem_left = document.createElement('div');
    let item_elem_right = document.createElement('div');

    const generateId = this.#randomString();

    // Создаем атрибуты для элемента item
    item.setAttribute('visibled', prop.visibled != undefined ? prop.visibled : true);
    item.setAttribute('selected', prop.selected != undefined ? prop.selected : false);
    item.setAttribute('isGroup', prop.list && prop.list.length > 0);
    item.setAttribute('open', prop.open != undefined ? prop.open : true);
    item.setAttribute('id', this.#randomString());

    // Указываем классы и атрибуты для элементов item_list и item_list_container
    item_list.classList.add('navigaor__item__list');
    item_list_container.classList.add('navigaor__item__list__container');

    if (prop.list && prop.list.length > 0) {
      for (const key in prop.list) {
        const newLine = prop.list[key];
        item_list_container.appendChild(this.createItem(newLine))
      }
    }

    // Указываем классы и атрибуты для элемента item_elem
    item_elem.classList.add('navigator__item__elem');
    item_elem.setAttribute('data-id', prop.id != undefined ? prop.id : generateId);

    // Указываем классы и атрибуты для элемента item_elem_left
    item_elem_left.classList.add('navigator__item__elem__left');

    // Указываем классы и атрибуты для элемента item_ico
    item_ico.classList.add('navigator__item_ico');
    item_ico.classList.add('icons-right');

    // Указываем классы и атрибуты для элемента item_ico2
    item_ico2.classList.add('navigator__item_ico2');
    item_ico2.setAttribute('type', prop.type != undefined ? prop.type : 'default');

    // Указываем классы и атрибуты для элемента item_name
    item_name.setAttribute('type', 'text');
    item_name.setAttribute('value', prop.name != undefined ? prop.name : 'Без имени');
    item_name.setAttribute('rename', prop.renameEdit != undefined ? prop.renameEdit : false);
    item_name.setAttribute('disabled', 'disabled');
    item_name.setAttribute('initial-value', prop.name != undefined ? prop.name : 'Без имени');
    item_name.classList.add('navigator__item__name');

    item_elem_right.classList.add('navigator__item__elem__right');

    if(prop.buttons && prop.buttons.length > 0){
      for (const key in prop.buttons) {
        const btn = prop.buttons[key];
        if (btn.type == undefined) btn.type = 'default';
        if (btn.click == undefined) btn.click = () => { };
        item_elem_right.appendChild(this.createButton(btn.icons.enabled, btn.type, btn.click, generateId));
      }
    }

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

    return item
  }

  /**
   * Создает контейнер для навигатора и возвращает его в виде строки с замененными полями
   * @returns Возвращает контейнер для навигатора в виде строки с замененными полями
   */
  #createContainer(id){
    let navigator = document.createElement('navigatorJS');
    navigator.classList.add('outliner__navigator');
    navigator.setAttribute('id', id);

    return navigator;
  }

  /**
   * Создает кнопку с иконкой и типом кнопки
   * @param {*} iconsClass Класс иконки
   * @param {*} type Тип кнопки
   * @returns {HTMLElement} Кнопка с иконкой и типом кнопки
   */
  createButton(iconsClass, type, callback, id) {
    let button = document.createElement('button');
    button.classList.add(iconsClass);
    button.setAttribute('type', type);

    if (callback != undefined) button.addEventListener('click', (e) => {
      let pElement = e.target.parentElement.parentElement.parentElement;
      callback(pElement.getAttribute('visibled') == 'false', id, button, e)
    });

    if (type == 'eye') {
      this.eyeButton(button, callback);
    }

    return button;
  }

  eyeButton(element, callback){
    if (callback != undefined) element.addEventListener('click', (e) => {
      let pElement = e.target.parentElement.parentElement.parentElement;

      e.target.classList.remove('icons-eye-none');
      e.target.classList.remove('icons-eye');

      if (pElement.getAttribute('visibled') == 'true') {
        e.target.classList.add('icons-eye-none');
        pElement.setAttribute('visibled', 'false');
      } else {
        e.target.classList.add('icons-eye');
        pElement.setAttribute('visibled', 'true');
      }
    });
  }

  setPropery(element, propery){
    console.log(element, propery);

    element.querySelector('input').setAttribute('value', propery.name);
    return element;
  }

  /**
   * Создает контейнер для навигатора и возвращает его в виде строки с замененными полями
   * @returns Возвращает контейнер для навигатора в виде строки с замененными полями
   */
  get container(){
    let f = this.#createContainer(this.#container);
    return f
  }


};