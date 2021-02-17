/**
 * returns a preview of a description text
 * @param {string} str string to reduce
 * @param {number} num number from which the string will be reduced
 * @return string
 */
function truncate(str, num){
    return Array.from(str).slice(0, num).join('') + '...';
}