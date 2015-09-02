import Container from '../../src/Container/Container.js';
import LocalStorage from '../../src/Adapter/LocalStorage.js';

describe('Container Test', () => {

    let time = +new Date();
    let name = 'container_name_' + (+new Date());
    let container = new Container(name);
    let adapter = new LocalStorage();
    let itemContainer = {
        __type__: 'itemContainer'
    };
    let key = 'container_key_' + time;
    let item = {};
    for (let i = 0; i < 10; i++) {
        let randomKey = Math.random() * 1000;
        item[randomKey] = [Math.random() * 500];
    }

    it('isItemContainer()', ()=> {
        expect(container.isItemContainer(itemContainer)).toBe(true);
    });

    it('createItemContainer()', ()=> {
        expect(container.createItemContainer()).toEqual(itemContainer);
    });

    it('isSupported()', ()=> {
        expect(container.isSupported()).toBe(true);
    });

    it('setName(),getName()',()=>{
        expect(container.setName(name)).toEqual(container);
        expect(container.getName()).toEqual(name);
    });

    it('setAdapter(),getAdapter()',()=>{
        expect(container.setAdapter(adapter)).toEqual(container);
        expect(container.getAdapter()).toEqual(adapter);
    });

    it('setItem(),getItem()', ()=> {
        expect(container.setItem(key, item)).toEqual(container);
        expect(container.getItem(key)).toEqual(item);
    });

    it('keys()', ()=> {
        expect(container.keys()).toEqual([key]);
    });

    it('removeItem()', ()=> {
        expect(container.removeItem(key)).toEqual(container);
        expect(container.getItem(key)).toEqual(null);
    });

    it('setItemContainer(),getItemContainer()', ()=> {
        expect(container.setItemContainer(item)).toEqual(container);
        expect(container.getItemContainer()).toEqual(item);
    });

    it('removeItemContainer()', ()=> {
        expect(container.removeItemContainer()).toEqual(container);
        expect(container.getItemContainer()).toEqual(null);
    });
});

