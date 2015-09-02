import AbstractAdapter from './AbstractAdapter.js';

class ArrayStorage extends AbstractAdapter {

    constructor(options = {}) {
        super(options);
        this._storage = {};
    }

    getName() {
        return 'ArrayStorage';
    }

    isSupported() {
        return true;
    }

    getItem(key) {
        return this._storage[key] || null;
    }

    setItem(key, item) {
        this._storage[key] = item;
        return this;
    }

    removeItem(key) {
        delete this._storage[key];
        return this;
    }
}

export default ArrayStorage;
