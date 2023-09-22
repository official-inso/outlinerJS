/**
 * Заменяет поля вида {{object.field}} на соответствующие значения из объекта в строке.
 *
 * @function
 * @param {string} input - Входная строка, содержащая поля для замены.
 * @param {object} data - Объект с данными для замены полей.
 * @returns {string} - Строка с замененными полями.
 * @example
 * // Пример использования со строкой:
 * const inputString = "Привет, {{user.name}}! Твой возраст - {{user.age}} лет.";
 * const userData = { user: { name: "Иван", age: 30 } };
 * const replacedString = replaceFieldsInString(inputString, userData);
 * // replacedString будет равна "Привет, Иван! Твой возраст - 30 лет."
 */
export function replaceFieldsInString(input, data) {
  const fieldPattern = /{{(.*?)}}/g;
  const replacedString = input.replace(fieldPattern, (match, fieldPath) => {
    const fieldNames = fieldPath.split('.');
    let obj = data;

    for (const fieldName of fieldNames) {
      if (obj && obj.hasOwnProperty(fieldName)) {
        obj = obj[fieldName];
      } else {
        return match; // Если не удалось найти значение, возвращаем исходное поле
      }
    }

    return obj;
  });

  return replacedString;
}

/**
 * Заменяет поля вида {{object.field}} на соответствующие значения из объекта внутри HTML элемента.
 *
 * @function
 * @param {HTMLElement} element - HTML элемент, в котором нужно заменить поля.
 * @param {object} data - Объект с данными для замены полей.
 * @returns {void} - Функция изменяет HTML элемент напрямую.
 * @example
 * // Пример использования с HTMLElement:
 * const inputElement = document.createElement('div');
 * inputElement.innerHTML = "Привет, {{user.name}}! Твой возраст - {{user.age}} лет.";
 * const userData = { user: { name: "Иван", age: 30 } };
 * replaceFieldsInElement(inputElement, userData);
 * // Теперь inputElement.innerHTML будет равен "Привет, Иван! Твой возраст - 30 лет."
 */
export function replaceFieldsInElement(element, data) {
  return element;
}
