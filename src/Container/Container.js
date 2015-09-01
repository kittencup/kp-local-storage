import LocalStorage from '../Adapter/LocalStorage.js';

class Container {

    constructor(name, adapter) {
        this.name = name;

        if (adapter) {
            this.setAdapter(adapter);
        } else {
            this.setAdapter(new LocalStorage());
        }

    }

    setName(name) {
        this.name = name;
        return this;
    }

    getName() {
        return this.name;
    }

    setAdapter(adapter) {
        this.adapter = adapter;
        this.adapter.setContainerName(this.name);
        return this;
    }

    getAdapter() {
        return this.adapter;
    }

    keys() {
        return this.adapter.keys();
    }

    getItem(key) {
        return this.adapter.getItem(key);
    }

    setItem(key, item) {
        this.adapter.setItem(key, item);
        return this;
    }

    getContainer() {
        return this.adapter.getContainer();
    }

    removeItem(key) {
        this.adapter.removeItem(key);
        return this;
    }

    removeContainer(){
        this.adapter.removeContainer();
        return this;
    }

}

export default Container;
