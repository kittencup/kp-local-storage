import LocalStorage from '../Adapter/LocalStorage.js';

class Container {

    constructor(name, adapter) {

        this._name = name;

        if (adapter) {
            this._adapter = adapter;
        } else {
            this._adapter = new LocalStorage();
        }

    }

    isSupported() {
        return this._adapter.isSupported();
    }

    setName(name) {
        this._name = name;
        return this;
    }

    getName() {
        return this._name;
    }

    setAdapter(adapter) {
        this._adapter = adapter;
        return this;
    }

    getAdapter() {
        return this._adapter;
    }

    keys() {
        let itemContainer = this.getItemContainer();
        let keys = [];

        for (var key in itemContainer) {
            if (itemContainer.hasOwnProperty(key)) {
                keys.push(key);
            }
        }

        return keys;
    }

    getItem(key) {

        let itemContainer = this.getItemContainer();

        if (itemContainer) {
            return itemContainer[key] || null;
        }

        return null;

    }

    setItem(key, item) {

        let itemContainer = this.getItemContainer();

        if (!itemContainer) {
            itemContainer = {};
        }

        itemContainer[key] = item;

        this.setItemContainer(itemContainer);

        return this;
    }

    removeItem(key) {

        let itemContainer = this.getItemContainer();

        if (itemContainer) {
            delete itemContainer[key];
            this.setItemContainer(itemContainer);
        }

        return this;
    }

    getItemContainer() {
        return this._adapter.getItem(this._name);
    }

    removeItemContainer() {
        this._adapter.removeItem(this._name);
        return this;
    }

    setItemContainer(itemContainer) {
        this._adapter.setItem(this._name, itemContainer);
        return this;
    }

}

export default Container;
