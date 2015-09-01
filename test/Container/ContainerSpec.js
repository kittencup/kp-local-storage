import Container from '../../src/Container/Container.js';

describe('Container Test', () => {

    let name = 'Container_name_' + (+new Date());
    let container = new Container(name);
    var keys = [];
    let key = 'key_' + (+new Date());
    let item = 'item_' + (+new Date());
    var adapterContainter = {};
    adapterContainter[key] = item;

    it('setName(),getName()', ()=> {
        expect(container.setName(name)).toEqual(container);
        expect(container.getName()).toBe(name);
    });

    it('setAdapter(),getAdapter()', ()=> {
        let defaultAdapter = container.getAdapter();
        expect(container.setAdapter(defaultAdapter)).toEqual(container);
        expect(container.getAdapter()).toEqual(defaultAdapter);
    });

    it('getItem(),setItem()', ()=> {
        expect(container.setItem(key, item)).toEqual(container);
        expect(container.getItem(key)).toEqual(item);
    });

    it('keys()' ,()=>{
        expect(container.keys().length).toEqual(1);
    });

    it('getContainer()' ,()=>{
        expect(container.getContainer()).toEqual(adapterContainter);
    });

    it('removeItem()' ,()=>{
        expect(container.removeItem(key)).toEqual(container);
    });

    it('removeContainer()' ,()=>{
        expect(container.removeContainer()).toEqual(container);
        expect(container.getContainer()).toEqual({});
    });


});

