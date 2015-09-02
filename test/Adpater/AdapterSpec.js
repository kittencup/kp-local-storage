import ArrayStorage from '../../src/Adapter/ArrayStorage.js';
import CookieStorage from '../../src/Adapter/CookieStorage.js';
import SessionStorage from '../../src/Adapter/SessionStorage.js';
import LocalStorage from '../../src/Adapter/LocalStorage.js';

let adapters = [
    LocalStorage,
    SessionStorage,
    CookieStorage,
    ArrayStorage
];

describe('Adapter Test', () => {

    adapters.forEach((adapterClass)=>{
        let time = +new Date();
        let storage = new adapterClass();
        let adapterName = storage.getName();// test getName()
        let key = adapterName + '_key_' + time;
        let item = {};
        for (let i = 0; i < 10; i++) {
            let randomKey = Math.random() * 1000;
            item[randomKey] = [Math.random() * 500];
        }

        it(adapterName + ' isSupported()', ()=> {
            expect(storage.isSupported()).toBe(true);
        });


        it(adapterName + ' setItem(),getItem()', ()=> {
            expect(storage.setItem(key, item)).toEqual(storage);
            expect(storage.getItem(key)).toEqual(item);
        });

        it(adapterName + ' removeItem()', ()=> {
            expect(storage.removeItem(key)).toEqual(storage);
            expect(storage.getItem(key)).toEqual(null);
        });

    });

});

