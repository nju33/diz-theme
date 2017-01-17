# diz-theme

Basic of the Diz theme

[![Build Status](https://travis-ci.org/nju33/diz-theme.svg?branch=master)](https://travis-ci.org/nju33/diz-theme) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

## Install

```bash
$ yarn add -D diz-theme
$ npm i -D diz-theme
```

## Example (When using [React](https://github.com/facebook/react))

```js
import React from 'react'
import {render} from 'react-dom';
import {renderToString} from 'react-dom/server';
import Theme from 'diz-theme';
import JSX from 'path/to/jsx.jsx'

class YourThemeName extends Theme {
  // Path to node_mdoules under development of this project.
  // If you are using yarn link, for example,
  // this project's dependency package can not be seen from diz
  static nodeModulesPath = path.join(__dirname, '../node_modules/');

  // To add to the entry of `webpack.entry`
  static path = __filename;

  constructor(props, propsStr) {
    super();
    this.props = props
    this.propsStr = propsStr
    // ...
  }

  render() {
    if (YourThemeName.isBrowser()) {
      // Processing on browser side
      render(<YourThemeName {...this.props}/>, document.getElementById('blog'));
    } else {
      // Processing on client side
      const contents = renderToString(<YourThemeName {...this.props}/>);
      return this.wrapMain(contents);
      // return <!doctype HTML>...
      // The returned HTML becomes the contents of the file
    }
  }
}

if (YourThemeName.isBrowser()) {
  window.__DIZ__ = {};
  // This function execution statement should be kept in the client side
  // when creating HTML. For example, `this.wrapMain` method.
  //
  // In the following, props are passing,
  // but I write object values using propsStr in `this.wrapMain`
  window.__DIZ__.render = props => {
    const renderer = new YourThemeName(props);
    renderer.render();
  };
}

```

## License

The MIT License (MIT)
Copyright (c) 2016 nju33 <nju33.ki@gmail.com>
