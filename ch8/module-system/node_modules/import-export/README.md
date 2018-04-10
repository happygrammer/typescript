##What is this?

This module lets you use ES6 modules (import/export syntax) in nodejs modules.

##How to use

In your main file require the module:

```
// index.js

require('import-export');

require('./some-other-file1.js');
require('./some-other-file2.js');
...
```

Then inside your other files you require you can use ES6 module syntax:

```
// some-other-file1.js

import Duck from './Duck.js';
import { Food, Pond } from 'Duck.js';
```

and:

```
// Duck.js

export default class Duck {
  ...
}

export class Pond {
  ...
}

export class Food {
  ...
}
``` 
