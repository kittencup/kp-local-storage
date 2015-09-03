[![npm](https://img.shields.io/badge/npm-1.0.0-blue.svg)](https://www.npmjs.com/package/kp-localstorage)
[![Bower](https://img.shields.io/badge/bower-1.0.0-red.svg)](https://github.com/kittencup/kp-localstorage)
[![Build Status](https://travis-ci.org/kittencup/kp-local-storage.svg?branch=master)](https://travis-ci.org/kittencup/kp-local-storage)
# How To Use

#### Adapter

```
var adapter = new KpLocalStorage.Adapter.LocalStorage(options);
var adapter = new KpLocalStorage.Adapter.CookieStorage(options);
var adapter = new KpLocalStorage.Adapter.SessionStorage(options);
var adapter = new KpLocalStorage.Adapter.ArrayStorage(options);
```

#### Container

```
var container = new KpLocalStorage.Container(name,adapter);

container.setName(name);
container.getName();
container.setAdapter(adapter);
container.getAdapter();
container.setItem(key,item);
container.getItem(key)
container.removeItem(key);
container.getItemContainer();
container.removeItemContainer();
container.setItemContainer();
container.keys();
container.isSupported();
```

#### ContainerFactory

```
var container = KpLocalStorage.ContainerFactory({
    name:string,
    adapter:{
        name:string,// LocalStorage,CookieStorage,SessionStorage,ArrayStorage
        options:{}
    }
})
```


# How To Test And Dev

`npm install`


```
// test
karma start

// dev
webpack --watch
```
