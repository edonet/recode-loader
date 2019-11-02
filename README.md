# recode-loader
A recode module loader for webpack

## Install
``` shell
$ yarn add recode-loader
```

## Usage
`webpack.config.js`
``` javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.config.js$/i,
        use: ['recode-loader'],
      },
    ],
  },
};
```

`app.js`
``` javascript
import { files } from './files.config.js';

console.log(files);
```

`./files.config.js`
``` javascript
import fs from 'fs';

export const files = fs.readdirSync(__dirname);
```
