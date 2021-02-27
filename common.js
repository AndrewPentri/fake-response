/**
 * Модуль хранит общие функции
 * */

/**
 * Функция выполняет проверку на отсутствие свойств данного объекта
 * @param {Object} item - объект
 * */
const isObjectEmpty = item => Object.keys( item ).length === 0;

module.exports = {
    isObjectEmpty
}