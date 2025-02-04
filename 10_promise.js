
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */

const sleep = () => {
        setTimeout(() => {
            console.log('Hello');
        }, 2000);
    }
sleep();
module.exports = {sleep};