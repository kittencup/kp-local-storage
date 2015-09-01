import ContainerFactory from '../../src/Container/ContainerFactory.js';
import Container from '../../src/Container/Container.js';

describe('ContainerFactory Test', () => {

    let name = 'ContainerFactory_name_' + (+new Date());

    it('Call containerFactory() success', ()=> {
        let container = ContainerFactory({
            name: name,
            adapter: {
                name: 'localStorage'
            }
        });

        expect(container instanceof Container).toBe(true);
    });

    it('Call containerFactory() set does not exist adapter name', ()=> {
        try{
            let container = ContainerFactory({
                name: name,
                adapter: {
                    name:'aaa'
                }
            });
            expect(false).toBe(true);
        }catch (e){
            expect(true).toBe(true);
        }
    });


    it('Call containerFactory() not set name', ()=> {
        try{
            let container = ContainerFactory({});
            expect(false).toBe(true);
        }catch (e){
            expect(true).toBe(true);
        }
    });

});