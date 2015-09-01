import Container from './Container/Container.js';
import LocalStorage from './Adapter/LocalStorage.js';
import SessionStorage from './Adapter/SessionStorage.js';
import CookieStorage from './Adapter/CookieStorage.js';
import ArrayStorage from './Adapter/ArrayStorage.js';
import ContainerFactory from './Container/ContainerFactory.js';
import Util from './Unit/Util.js';

export default {
    Adapter: {
        LocalStorage: LocalStorage,
        SessionStorage: SessionStorage,
        CookieStorage: CookieStorage,
        ArrayStorage: ArrayStorage
    },
    Container: Container,
    Util: Util,
    ContainerFactory: ContainerFactory
};
