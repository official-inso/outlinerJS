import OutlinerJS from './../init.js';

document.addEventListener('DOMContentLoaded', function() {
  const outliner = new OutlinerJS(document.body);

  outliner.setValue([
    {
      type: "graph",
      name: "тест",
      id: "global_trhyfgh",
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
          name: "тест",
          id: "global_trhyfg1",
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
              name: "тест",
              id: "global_trhyfg1",
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
              name: "тест",
              id: "global_trhyfg1",
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
          name: "тест",
          id: "global_trhyfg2",
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

  outliner.getValue();
})