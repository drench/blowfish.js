blowfish.js
===========

Please visit [the blowfish.js home page](http://dren.ch/js_blowfish/) for more information.

```
  var padding = '\u0006';
  var bf = new Blowfish('this is the key', padding);
  // var bf = new Blowfish('this is the key'); // default padding is '\u0000'
  
  var encoding = bf.encrypt('what is that');
  console.log(encoding);
  console.log(bf.decrypt(encoding));
```
