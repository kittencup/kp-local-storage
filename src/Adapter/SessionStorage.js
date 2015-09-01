import LocalStorage from './LocalStorage.js';
import Util from '../Unit/Util.js';

class SessionStorage extends LocalStorage {

    constructor(options = {}) {
        super(options);

        this._type = 'sessionStorage';
    }

    getName() {
        return 'SessionStorage';
    }

}

export default SessionStorage;
