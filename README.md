# 🖥️ outlinerJS (Навигационное меню)

## Пример использования
Интерактивный пример находится в файле проекта example/index.html

### Подключение библиотеки
```javascript
import OutlinerJS from './../init.js';
```

### Инициализация класса
```javascript
const outliner = new OutlinerJS(document.body);
```
Параметр инициализации отвечает, за то место, где будет развернуто навигационное меню

### Пример создания навигационного меню
```javascript
outliner.setValue([
  {
    type: "graph",
    name: "Название элемента",
    id: "id_element",
    buttons: [
      {
        icons: {
          enabled: "icons-download",
          disabled: "icons-upload",
        },
        value: true,
        type: "folder",
        click: (value, elementId, element, e) => {
          console.log(value, elementId, element, e);
        },
      },
      {
        icons: {
          enabled: "icons-eye",
          disabled: "icons-eye-none",
        },
        value: true,
        type: "visibled",
        click: (value, elementId, element, e) => {
          console.log(value, elementId, element, e);
        },
      },
      {
        icons: {
          enabled: "icons-stop",
          disabled: "icons-circle",
        },
        value: true,
        type: "locked",
        click: (value, elementId, element, e) => {
          console.log(value, elementId, element, e);
        },
      },
    ],
    click: (value, elementId, element, e) => {
      console.log('click', value, elementId, element, e);
    },
    selected: (elementId, element, elementsId, e) => {
      console.log('selected', elementId, element, elementsId, e);
    },
    select: false,
    rename: (value, elementId, element, e) => {
      console.log('rename', value, elementId, element, e);
    },
    list: [
      {
        type: "line",
        name: "Название элемента",
        id: "id_element",
        click: () => {},
        rename: () => {},
        buttons: [
          {
            icons: {
              enabled: "icons-eye",
              disabled: "icons-eye-none",
            },
            value: false,
            type: "visibled",
            click: (e) => {
              console.log(e);
            },
          },
          {
            icons: {
              enabled: "icons-stop",
              disabled: "icons-circle",
            },
            value: false,
            type: "locked",
            click: (value) => {},
          },
        ],
        list: [
          {
            type: "line",
            name: "Название элемента",
            id: "id_element",
            click: () => {},
            rename: () => {},
            list: [],
            buttons: [
              {
                icons: {
                  enabled: "icons-eye",
                  disabled: "icons-eye-none",
                },
                value: false,
                type: "visibled",
                click: (e) => {
                  console.log(e);
                },
              },
              {
                icons: {
                  enabled: "icons-stop",
                  disabled: "icons-circle",
                },
                value: false,
                type: "locked",
                click: (value) => {},
              },
            ],
          },
          {
            type: "line",
            name: "Название элемента",
            id: "id_element",
            click: () => {},
            rename: () => {},
            list: [],
            buttons: [
              {
                icons: {
                  enabled: "icons-eye",
                  disabled: "icons-eye-none",
                },
                value: false,
                type: "visibled",
                click: (e) => {
                  console.log(e);
                },
              },
              {
                icons: {
                  enabled: "icons-stop",
                  disabled: "icons-circle",
                },
                value: false,
                type: "locked",
                click: (value) => {},
              },
            ],
          },
        ],
      },
      {
        type: "object",
        name: "Название элемента",
        id: "id_element",
        click: () => {},
        rename: () => {},
        list: [],
        buttons: [
          {
            icons: {
              enabled: "icons-eye",
              disabled: "icons-eye-none",
            },
            value: false,
            type: "visibled",
            click: (e) => {
              console.log(e);
            },
          },
          {
            icons: {
              enabled: "icons-stop",
              disabled: "icons-circle",
            },
            value: false,
            type: "locked",
            click: (value) => {},
          },
        ],
      },
    ],
  },
]);
```

#### ! Все поля являются не обязательными к заполнению

#### Определение полей
1. `type` - Определяет тип картинки (значение по умолчанию: `object`)
2. `name` - Определяет название элемента (значение по умолчанию: `Без имени`)
3. `id` - Определяет уникальный идентификатор свойства (значение по умолчанию: случайная строка)
4. `select` - Определяет будет ли значение выделено (значение по умолчанию: `false`)
5. `buttons` - Определяет массив кнопок для текущего элемента (значение по умолчанию: пустой массив)<br>
   - `icons.enabled` - Определяет класс иконки в состоянии вкл<br>
   - `icons.disabled` - Определяет класс иконки в состоянии выкл<br>
   - `value` - Определяет значние по умолчанию<br>
   - `type` - Определяет тип для кнопки (есть 2 заранее определенных типа: visibled и locked), можно указать любое значение<br>
   - `click` - Это callback функция, которая будет вызвана в момент нажатие на кнопку<br>
     #### Параметры у функции click:
     - `value` - Текущее значение для кнопки
     - `elementId` - ID элемента к которому привязана кнопка
     - `element` - HTMLElement кнопки
     - `e` - Данные о событии
7. `click` - Это callback функция, которая будет вызвана в момент нажатие на элемент
   - `value` - Текущее значение для кнопки
   - `elementId` - ID элемента к которому привязана кнопка
   - `element` - HTMLElement кнопки
   - `e` - Данные о событии
8. `selected` - Это callback функция, которая будет вызвана в момент выбора элемента
   - `elementId` - ID элемента к которому привязана кнопка
   - `element` - HTMLElement кнопки
   - `elementsId` - Массив всех выбранных значений (массив ID)
   - `e` - Данные о событии
9. `rename` - Это callback функция, которая будет вызвана в момент изменения имени у элемента (не сработает если имя не изменилось)
   - `value` - Новое имя для элемента
   - `elementId` - ID элемента к которому привязана кнопка
   - `element` - HTMLElement кнопки
   - `e` - Данные о событии
11. `list` - Массив принимающий вложения (Значение по умолчанию: пустой массив). Структура выглядит точно так же как и описано выше.

### Пример вывода навигационного меню
```javascript
outliner.getValue();
```

![Иллюстрация к проекту](https://github.com/official-inso/outlinerJS/raw/main/exaple/image.png)

Желаю вам удачи в использовании данной библиотеки! 🔥
