import Container from './Container.js';
import ArrayStorage from '../Adapter/ArrayStorage.js';
import CookieStorage from '../Adapter/CookieStorage.js';
import SessionStorage from '../Adapter/SessionStorage.js';
import LocalStorage from '../Adapter/LocalStorage.js';
import AbstractAdapter from '../Adapter/AbstractAdapter.js';

let adapters = {
    localstorage: LocalStorage,
    sessionstorage: SessionStorage,
    cookiestorage: CookieStorage,
    arraystorage: ArrayStorage
};

function ContainerFactory(options) {

    'use strict';

    let name = options.name;
    let adapter = options.adapter;

    if (!name || typeof name !== 'string') {
        throw new Error('name is required and string type');
    }

    if (!(adapter instanceof AbstractAdapter)) {
        if (typeof adapter === 'object') {

            let adapterName = adapter.name;

            if(typeof adapterName !== 'string'){
                throw new Error('Adapter name invalid. String expected');
            }

            adapterName = adapter.name.toLowerCase();

            if(!adapters[adapterName]){
                throw new Error('The '+adapterName+' was not found in the Adapters');
            }

            adapter = new adapters[adapterName](adapter.options || {});
        }
    }

    return new Container(name, adapter);

}

export default ContainerFactory;
