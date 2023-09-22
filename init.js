/**
 * @file init.js
 * @description
 * @since v.1.0.0
 * @version v.1.0.0
 * @author Roman Zhuzhgov
 * @license MIT
 */

/**
 * @requires templates/templates
 */
import templates from './templates/templates.js';

/**
 * @class OutlinerJS
 * @description Класс для работы с навигатором
 */
export default class OutlinerJS {

  #array = [];

  /**
   * Инициализация навигатора по переданному селектору или элементу
   * @param {string|HTMLElement} selector Селектор или элемент где будет инициализирован навигатор
   * @returns {void} 
   */
  constructor(selector) {
    this.templates = new templates();  
    
    this.#createNavigator(selector);
  }
 

  #createNavigator(selector) {
  
    if (!(selector instanceof HTMLElement || typeof selector === 'string')) return console.error('Переданный селектор не является HTMLElement или строкой');

    if (selector instanceof HTMLElement){
      selector.appendChild(this.templates.container);
    }
    
    else if(document.querySelectorAll(selector).length > 0) {
      document.querySelectorAll(selector).forEach(element => {
        selector.appendChild(this.templates.container);
      });
    }

  }

  /**
   * Устанавливает значение навигатора для дерева объектов переданного в виде массива объектов
   * @param {*} array 
   */
  setValue(array) {
    this.#array = array;
  }

  /**
   * Инициализация навигатора по переданному селектору или элементу
   * @param {string|HTMLElement} selector Селектор или элемент где будет инициализировано дерево объектов
   */
  getValue(){
    const items = this.#getListItems(this.#array)
    items.forEach(item => {
      document.getElementById(this.templates.container.getAttribute('id')).appendChild(item);
    });
  }

  #getListItems(items){
    
    let out = [];

    for (const key in items) {
      const line = items[key];

      // let itemsList = [];
      // let btns = [];
      // if (line.list && line.list.length > 0) {
      //   itemsList.push(this.#getListItems(line.list));
      // } 

      // for (const key2 in line['buttons']) {
      //   const btn = line['buttons'][key2];

      //   if (btn.type == undefined) btn.type = 'default';

      //   if (btn.click == undefined) btn.click = () => { };

      //   btns.push(this.templates.createButton(btn.icons.enabled, btn.type, btn.click));
      // }

      Object.assign(line, {
        container: document.getElementById(this.templates.container.getAttribute('id')),
      })

      out.push(this.templates.createItem(line));

    }

    return out;
    
  }


};