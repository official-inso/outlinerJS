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
            enabled: "icons-eye",
            disabled: "icons-eye-none",
          },
          type: "eye",
          click: (value, elementId, element, e) => {
            console.log(value, elementId, element, e);
          },
        },
        {
          icons: {
            enabled: "icons-lock",
            disabled: "icons-eye-none",
          },
          type: "lock",
          click: (value) => { },
        }
      ],
      click: () => {},
      rename: () => { },
      lockOrUnlock: () => { },
      hiddenOrVisible: () => { },
      list: [
        {
          type: "line",
          name: "тест",
          id: "global_trhyfg1",
          click: () => { },
          rename: () => { },
          lockOrUnlock: () => { },
          hiddenOrVisible: () => { },
          buttons: [
            {
              icons: {
                enabled: "icons-eye",
                disabled: "icons-eye-none",
              },
              type: "eye",
              click: (e) => {
                console.log(e);
              },
            },
            {
              icons: {
                enabled: "icons-lock",
                disabled: "icons-eye-none",
              },
              type: "lock",
              click: (value) => { },
            }
          ],
          list: [
            {
              type: "line",
              name: "тест",
              id: "global_trhyfg1",
              click: () => { },
              rename: () => { },
              lockOrUnlock: () => { },
              hiddenOrVisible: () => { },
              list: [],
              buttons: [
                {
                  icons: {
                    enabled: "icons-eye",
                    disabled: "icons-eye-none",
                  },
                  type: "eye",
                  click: (e) => {
                    console.log(e);
                  },
                },
                {
                  icons: {
                    enabled: "icons-lock",
                    disabled: "icons-eye-none",
                  },
                  type: "lock",
                  click: (value) => { },
                }
              ],
            },
            {
              type: "line",
              name: "тест",
              id: "global_trhyfg1",
              click: () => { },
              rename: () => { },
              lockOrUnlock: () => { },
              hiddenOrVisible: () => { },
              list: [],
              buttons: [
                {
                  icons: {
                    enabled: "icons-eye",
                    disabled: "icons-eye-none",
                  },
                  type: "eye",
                  click: (e) => {
                    console.log(e);
                  },
                },
                {
                  icons: {
                    enabled: "icons-lock",
                    disabled: "icons-eye-none",
                  },
                  type: "lock",
                  click: (value) => { },
                }
              ],
            },
          ],
        },
        {
          type: "object",
          name: "тест",
          id: "global_trhyfg2",
          click: () => { },
          rename: () => { },
          lockOrUnlock: () => { },
          hiddenOrVisible: () => { },
          list: [],
          buttons: [
            {
              icons: {
                enabled: "icons-eye",
                disabled: "icons-eye-none",
              },
              type: "eye",
              click: (e) => {
                console.log(e);
              },
            },
            {
              icons: {
                enabled: "icons-lock",
                disabled: "icons-eye-none",
              },
              type: "lock",
              click: (value) => { },
            }
          ],
        },
      ],
    },
  ]);

  outliner.getValue();
})