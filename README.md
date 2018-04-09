# Framer-iOS11-components
This repository includes modules of iOS11 components.

## Usage
Copy and paste **iOS11Kit.coffee** and **iOS11KitComponents folder** into Framer's modules folder.

Write a require request and create a new component from the iOS11Kit like that

```coffeescript
iOS11Kit = require 'iOS11Kit'

statusBar = new iOS11Kit.StatusBariPhoneX
```

## List of components

### StatusBar for iPhoneX

Demo: https://framer.cloud/BvjhT

```coffeescript
statusBar = new iOS11Kit.StatusBariPhoneX
  updateTime: true #enable time updating
  
statusBar.switchMode(switchSpeed) 
#function will switch modes between dark and light
  
```
