import AbstractAdapter from "./AbstractAdapter.js";
import Util from "../Unit/Util.js";

class LocalStorage extends AbstractAdapter {

    isSupported() {
        try {
            let supported = ("localStorage" in window && window.localStorage !== null);

            // safari (OS X or iOS) is in private browsing mode
            if (supported) {
                let key = this._containerName + "__" + Math.round(Math.random() * 1e7);
                let storage = window.localStorage;
                storage.setItem(key, "");
                storage.removeItem(key);
            }
            return supported;
        } catch (e) {
            return false;
        }
    }

    setContainer(container) {
        if (this._isSupported) {
            let containerJson = Util.toJson(container);
            try {
                window.localStorage.setItem(this._containerName, containerJson);
            } catch (e) {
                // @todo error 可能存满了？
            }
        } else {
            // @todo error
        }
        return this;
    }

    getContainer() {
        if (this._isSupported) {

            let containerJson = window.localStorage.getItem(this._containerName);

            if (!containerJson) {
                return {};
            }

            return Util.jsonTo(containerJson);
        } else {
            // @todo error;
        }
    }

    removeContainer() {
        if (this.isSupported) {
            window.localStorage.removeItem(this._containerName);
        }
        return this;
    }

}

export default LocalStorage;
