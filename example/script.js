import OutlinerJS from './../init.js';

let outliner_List = [];
let i = 0;

document.addEventListener('DOMContentLoaded', function() {
  const outliner = new OutlinerJS(document.getElementById('navigatorjs_content'));

  outliner_List.push({
    type: "graph",
    name: "Название элемента",
    id: "id_element01",
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
        id: "id_element02",
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
            id: "id_element03",
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
            id: "id_element04",
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
        id: "id_element05",
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
  })

  outliner.setValue(outliner_List);

  outliner.getValue();

  document.getElementById('new').addEventListener('click', function(){
    outliner_List.push({
      type: "object",
      name: "Название элемента " + ++i,
      id: "id_element" + i,
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
      list: [],
    })

    outliner.setValue(outliner_List);
    outliner.getValue();
  })

  document.getElementById('new2').addEventListener('click', function () {

    let g = [{
      type: "object",
      name: "Название элемента " + ++i,
      id: "id_element" + i,
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
      list: [],
    }];

    outliner.appendValue(g);

    outliner_List = [...outliner_List, ...g]
  })

})