const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains ) {
  let res = {};
    for (let str of domains) {
      let arrDom = str.split('.').reverse();
      let curDom = '';
      for (let str1 of arrDom) {
        str1 = '.' + str1;
        curDom += str1;
        if (res[curDom] === undefined) {
            res[curDom] = 1;
        } else {
            res[curDom] += 1;
        }
      }
    }
    return res;
}

module.exports = {
  getDNSStats
};
