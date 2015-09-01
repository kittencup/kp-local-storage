import AbstractAdapter from './AbstractAdapter.js';
import Util from '../Unit/Util.js';

class SessionStorage extends AbstractAdapter {

    constructor(options = {}) {
        super(options);
    }

    getName(){
        return 'SessionStorage';
    }

    isSupported() {
        try {
            let supported = ('sessionStorage' in window && window.sessionStorage !== null);

            // safari (OS X or iOS) is in private browsing mode
            if (supported) {
                let key = this._containerName + '__' + Math.round(Math.random() * 1e7);
                let storage = window.sessionStorage;
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
            window.sessionStorage.setItem(this._containerName, containerJson);
        } catch (e) {
            // @todo error 可能存满了？
        }
        return this;
    }

    getContainer() {
        let containerJson = window.sessionStorage.getItem(this._containerName);

        if (!containerJson) {
            return {};
        }

        return Util.jsonTo(containerJson);
    }

    removeContainer() {
        window.sessionStorage.removeItem(this._containerName);
        return this;
    }

}

export default SessionStorage;
