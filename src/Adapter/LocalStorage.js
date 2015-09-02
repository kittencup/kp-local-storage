import AbstractAdapter from './AbstractAdapter.js';
import Util from '../Unit/Util.js';

class LocalStorage extends AbstractAdapter {

    constructor(options = {}) {
        super(options);
        this._type = 'localStorage';
    }

    getName() {
        return 'LocalStorage';
    }

    isSupported() {
        try {
            let supported = (this._type in window && window[this._type] !== null);

            // safari (OS X or iOS) is in private browsing mode
            if (supported) {
                let key = this._containerName + '__' + Math.round(Math.random() * 1e7);
                let storage = window[this._type];
                storage.setItem(key, '');
                storage.removeItem(key);
            }
            return supported;
        } catch (e) {
            return false;
        }
    }

    getItem(key) {
        let itemJson = window[this._type].getItem(key);

        if (!itemJson) {
            return null;
        }

        return Util.jsonTo(itemJson);
    }

    setItem(key, item) {
        let itemJson = Util.toJson(item);
        try {
            window[this._type].setItem(key, itemJson);
        } catch (e) {
            // @todo error 可能存满了？
        }
        return this;
    }

    removeItem(key) {
        window[this._type].removeItem(key);
        return this;
    }
}

export default LocalStorage;
