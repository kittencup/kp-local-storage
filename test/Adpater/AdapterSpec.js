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
        let containerName = adapterName + '_container_name_' + time;
        let key = adapterName + '_key_' + time;
        let item = adapterName + '_item_' + time;
        let keys = [];
        let container = {};
        for (let i = 0; i < 10; i++) {
            let randomKey = Math.random() * 1000;
            container[randomKey] = [Math.random() * 500];
            keys.push(randomKey);
        }

        it(adapterName + ' isSupported()', ()=> {
            expect(storage.isSupported()).toBe(true);
        });

        it(adapterName + ' setContainerName(),getContainerName()', ()=> {
            expect(storage.setContainerName(containerName)).toEqual(storage);
            expect(containerName).toEqual(storage.getContainerName());
        });

        it(adapterName + ' setContainer(),getContainer()', ()=> {
            expect(storage.setContainer(container)).toEqual(storage);
            expect(storage.getContainer()).toEqual(container);
        });

        it(adapterName + 'setItem(),getItem()', ()=> {
            expect(storage.setItem(key, item)).toEqual(storage);
            expect(item).toEqual(storage.getItem(key));
        });

        it(adapterName + 'removeItem()', ()=> {
            expect(storage.removeItem(key)).toEqual(storage);
            expect(storage.getContainer()).toEqual(container);
        });

        it(adapterName + 'keys()', ()=> {
            expect(storage.keys().length).toEqual(keys.length);
        });

        it(adapterName + 'removeContainer()', ()=> {
            expect(storage.removeContainer()).toEqual(storage);
            expect(storage.getContainer()).toEqual({});
        });
    });

});

