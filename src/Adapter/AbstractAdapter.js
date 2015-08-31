class AbstractAdapter {

    _isSupported;
    _containerName;

    constructor() {
        this._isSupported = this.isSupported();
    }

    isSupported() {
        throw new Error("This method is abstract");
    }

    setContainer(container) {
        throw new Error("This method is abstract");
    }

    getContainer() {
        throw new Error("This method is abstract");
    }

    removeContainer() {
        throw new Error("This method is abstract");
    }

    getItem(key) {
        return this.getContainer()[key];
    }

    setItem(key, item) {
        let container = this.getContainer();
        container[key] = item;
        this.setContainer(container);
        return this;
    }

    removeItem(key) {
        let container = this.getContainer();
        delete container[key];
        this.setContainer(container);
        return this;
    }

    keys() {
        let container = this.getContainer();
        let keys = [];
        for (let key in container) {
            if (container.hasOwnProperty(key)) {
                keys.push(key);
            }
        }
        return keys;
    }

    setContainerName(containerName) {
        this._containerName = containerName;
        return this;
    }

    getContainerName() {
        return this._containerName;
    }
}

export default AbstractAdapter;
