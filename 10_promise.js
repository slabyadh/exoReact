
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */

let ms = 2000;
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
sleep(ms);
module.exports = {sleep};