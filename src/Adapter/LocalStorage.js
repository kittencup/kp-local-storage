import AbstractAdapter from './AbstractAdapter.js';
import Util from '../Unit/Util.js';

class LocalStorage extends AbstractAdapter {

    constructor(options = {}) {
        super(options);
    }

    getName(){
        return 'LocalStorage';
    }

    isSupported() {
        try {
            let supported = ('localStorage' in window && window.localStorage !== null);

            // safari (OS X or iOS) is in private browsing mode
            if (supported) {
                let key = this._containerName + '__' + Math.round(Math.random() * 1e7);
                let storage = window.localStorage;
                storage.setItem(key, '');
                storage.removeItem(key);
            }
            return supported;
        } catch (e) {
            return false;
        }
    }

    setContainer(container) {
        let containerJson = Util.toJson(container);
        try {
            window.localStorage.setItem(this._containerName, containerJson);
        } catch (e) {
            // @todo error 可能存满了？
        }
        return this;
    }

    getContainer() {
        let containerJson = window.localStorage.getItem(this._containerName);

        if (!containerJson) {
            return {};
        }

        return Util.jsonTo(containerJson);
    }

    removeContainer() {
        window.localStorage.removeItem(this._containerName);
        return this;
    }

}

export default LocalStorage;
