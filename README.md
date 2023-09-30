# 🖥️ outlinerJS (Навигационное меню)

## Общее описание
1. <b>OutlinerJS</b> - это мощная JavaScript библиотека для создания интерактивных иерархических списков и древовидных структур, позволяющая легко управлять элементами и добавлять пользовательские действия.
2. Библиотека OutlinerJS предоставляет разработчикам инструменты для быстрого создания интерфейсов с древовидной структурой, обогащенными множеством возможностей для пользовательского взаимодействия и настройки.
3. OutlinerJS обеспечивает легкую интеграцию в веб-приложения и предоставляет гибкий API для управления данными и событиями, что делает ее отличным выбором для создания меню, навигационных панелей и других иерархических элементов интерфейса.
4. Эта библиотека предоставляет интуитивно понятный способ создания и настройки интерактивных списков, снабженных разнообразными кнопками и обработчиками событий, что делает OutlinerJS идеальным инструментом для создания удобных и функциональных пользовательских интерфейсов.

<br>

<b>OutlinerJS</b> - это универсальная JavaScript библиотека для создания древовидных иерархических списков с обширными возможностями пользовательской настройки и интерактивности.

<br>

![Иллюстрация к проекту](https://raw.githubusercontent.com/official-inso/outlinerJS/main/example/assets/screen.png)

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
    click: (elementId, element, e) => {
      console.log('click', elementId, element, e);
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
        type: "folder",
        name: "Название папки",
        id: "id_element",
        click: (elementId, element, e) => {
          console.log('click', elementId, element, e);
        },
        selected: (elementId, element, elementsId, e) => {
          console.log('selected', elementId, element, elementsId, e);
        },
        select: false,
        rename: (value, elementId, element, e) => {
          console.log('rename', value, elementId, element, e);
        },
        buttons: [
          {
            icons: {
              enabled: "icons-eye",
              disabled: "icons-eye-none",
            },
            value: false,
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
            value: false,
            type: "locked",
            click: (value, elementId, element, e) => {
              console.log(value, elementId, element, e);
            },
          },
        ],
        list: [
          {
            type: "line",
            name: "Название элемента",
            id: "id_element",
            click: (elementId, element, e) => {
              console.log('click', elementId, element, e);
            },
            selected: (elementId, element, elementsId, e) => {
              console.log('selected', elementId, element, elementsId, e);
            },
            select: false,
            rename: (value, elementId, element, e) => {
              console.log('rename', value, elementId, element, e);
            },
            list: [],
            buttons: [
              {
                icons: {
                  enabled: "icons-eye",
                  disabled: "icons-eye-none",
                },
                value: false,
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
                value: false,
                type: "locked",
                click: (value, elementId, element, e) => {
                  console.log(value, elementId, element, e);
                },
              },
            ],
          },
          {
            type: "line",
            name: "Название элемента",
            id: "id_element",
            click: (elementId, element, e) => {
              console.log('click', elementId, element, e);
            },
            selected: (elementId, element, elementsId, e) => {
              console.log('selected', elementId, element, elementsId, e);
            },
            select: false,
            rename: (value, elementId, element, e) => {
              console.log('rename', value, elementId, element, e);
            },
            list: [],
            buttons: [
              {
                icons: {
                  enabled: "icons-eye",
                  disabled: "icons-eye-none",
                },
                value: false,
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
                value: false,
                type: "locked",
                click: (value, elementId, element, e) => {
                  console.log(value, elementId, element, e);
                },
              },
            ],
          },
        ],
      },
      {
        type: "object",
        name: "Название элемента",
        id: "id_element",
        click: (elementId, element, e) => {
          console.log('click', elementId, element, e);
        },
        selected: (elementId, element, elementsId, e) => {
          console.log('selected', elementId, element, elementsId, e);
        },
        select: false,
        rename: (value, elementId, element, e) => {
          console.log('rename', value, elementId, element, e);
        },
        list: [],
        buttons: [
          {
            icons: {
              enabled: "icons-eye",
              disabled: "icons-eye-none",
            },
            value: false,
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
            value: false,
            type: "locked",
            click: (value, elementId, element, e) => {
              console.log(value, elementId, element, e);
            },
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

### Пример вывода навигационного меню (Способ №1)
Добавляение происходит путем удаление предыдущих значений и добавления всех значений к текущему DOM объекту
```javascript
outliner.getValue();
```

### Пример вывода навигационного меню (Способ №2)
Добавляение происходит путем добавления новых значений к текущему DOM объекту
```javascript
outliner.appendValue({...arrayItems});
```

![Иллюстрация к проекту](https://raw.githubusercontent.com/official-inso/outlinerJS/9330041ac8f6eccab91cf2583b2a4e463b8893a1/example/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202023-09-23%20215304.png)

## 🔥 Желаю вам удачи в использовании данной библиотеки! 🔥
