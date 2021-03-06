/**
 * @module Regular
 */

import regularList from "../DB/regular/regularTemplate";

/**
 * Проверка является ли переданная строка E-Mail адресом
 * @param email {string} - E-Mail адрес
 * @returns {boolean}
 */
const isEmail = (email: string): boolean => {
	return new RegExp(regularList.email, "").test(email);
};

/**
 *  Проверка является ли переданная строка IPv4 адресом
 * @param address {string} - IPv4 адрес
 * @returns {boolean}
 */
const isIPv4 = (address: string): boolean => {
	return new RegExp(regularList.IPv4, "").test(address);
};

/**
 *  Проверка является ли переданная строка IPv6 адресом
 * @param address {string} - IPv6 адрес
 * @returns {boolean}
 */
const isIPv6 = (address: string): boolean => {
	return new RegExp(regularList.IPv6, "").test(address);
};

/**
 *  Проверка является ли переданная строка IP адресом
 * @param address {string} - IP адрес
 * @returns {boolean}
 */
const isIP = (address: string): boolean => {
	return new RegExp(regularList.ip, "").test(address);
};

/**
 *  Проверка является ли переданная строка ccылкой
 * @param url {string} - URL
 * @returns {boolean}
 */
const isURL = (url: string): boolean => {
	return new RegExp(regularList.url, "").test(url);
};

/**
 * Проверка является ли переданная строка номером
 * @param email {string} - E-Mail адрес
 * @returns {boolean}
 */
const isNumber = (number: string): boolean => {
	return new RegExp(regularList.number, "i").test(number);
};

/**
 * @namespace
 * @description Шаблоны для создания своих регулярных выражений при помощи конструктора RegExp
 * @example
 * // => RegEx
 * new RegExp(regular.list.email, "g");
 */
const list = {
	/**
	 * Шаблон для E-Mail адресов
	 */
	email: regularList.email,
	/**
	 * Шаблон для IPv4 адресов
	 */
	IPv4: regularList.IPv4,
	/**
	 * Шаблон для IPv6 адресов
	 */
	IPv6: regularList.IPv6,
	/**
	 * Шаблон для любых IP адресов
	 */
	ip: regularList.ip,
	/**
	 * Шаблон для ссылок
	 */
	url: regularList.url,
	/**
	 * Шаблон для номеров
	 */
	number: regularList.email,
};

export { list, isIPv4, isIPv6, isIP, isEmail, isURL, isNumber };
