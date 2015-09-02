[![npm](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/kp-localstorage)
[![Bower](https://img.shields.io/bower/v/bootstrap.svg)](https://github.com/kittencup/kp-localstorage)
[![Github Releases](https://img.shields.io/github/downloads/atom/atom/latest/total.svg)](https://github.com/kittencup/kp-localstorage)

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
