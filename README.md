# mimetype-magic

Use command `file -bE --mime-type` to detect mime type.

If file gives out `text/plain` or `application/octet-stream`,
then use `mime.getType`.

```js
const magic = require('mimetype-magic');

magic(path, type => {
    ...
});
````
