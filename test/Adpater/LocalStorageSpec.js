import LocalStorage from '../../src/Adapter/LocalStorage.js';

var localStorage = new LocalStorage();
var containerName = 'LocalStorage_container_name_' + (+new Date());
var key = 'LocalStorage_key' + (+new Date());

describe("LocalStorageAdapter", () => {

    it("isSupported", ()=> {
        expect(localStorage.isSupported()).toBe(true);
    });

    it("setContainerName,getContainerName", ()=> {
        expect(localStorage.setContainerName(containerName)).toEqual(localStorage);
        expect(containerName).toEqual(localStorage.getContainerName());
    });

    var container = {
        username: 1,
        password: 2
    };

    it("setContainer,getContainer", ()=> {
        expect(localStorage.setContainer(container)).toEqual(localStorage);
        expect(localStorage.getContainer()).toEqual(container);
    });

    var mockData = [];
    mockData.push({
        name: +new Date()
    });

    it("setItem,getItem", ()=> {
        expect(localStorage.setItem(key, mockData)).toEqual(localStorage);
        expect(mockData).toEqual(localStorage.getItem(key));
    });

    it("removeItem", ()=> {
        expect(localStorage.removeItem(key)).toEqual(localStorage);
        expect(localStorage.getContainer()).toEqual(container);
    });

    it("keys", ()=> {
        expect(localStorage.keys()).toEqual(['username', 'password']);
    });

    it("removeContainer", ()=> {
        expect(localStorage.removeContainer()).toEqual(localStorage);
        expect(localStorage.getContainer()).toEqual({});
    });

});
