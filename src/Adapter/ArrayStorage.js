import AbstractAdapter from './AbstractAdapter.js';

class ArrayStorage extends AbstractAdapter {

    constructor(options = {}) {
        super(options);
        this._container = {};
    }

    getName() {
        return 'ArrayStorage';
    }

    isSupported() {
        return true;
    }

    setContainer(container) {
        this._container = container;
        return this;
    }

    getContainer() {
        return this._container;
    }

    removeContainer() {

        this._container = {};

        return this;
    }
}

export default ArrayStorage;
