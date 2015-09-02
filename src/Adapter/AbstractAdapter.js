class AbstractAdapter {

    constructor() {

    }

    getName() {
        throw new Error('This method is abstract');
    }

    isSupported() {
        throw new Error('This method is abstract');
    }

    getItem() {
        throw new Error('This method is abstract');
    }

    setItem() {
        throw new Error('This method is abstract');
    }

    removeItem() {
        throw new Error('This method is abstract');
    }
}

export default AbstractAdapter;
