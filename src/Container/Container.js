class Container {

    adapter;
    name;

    constructor(name, adapter) {
        this.name = name;

        if (adapter) {
            this.setAdapter(adapter);
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

    removeItem(key) {
        this.adapter.removeItem(key);
        return this;
    }

}

export default Container;
