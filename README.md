# are-we-dev

```javascript
const isDev = require('are-we-dev')
console.log(isDev()) // true or false
```

The answer is "yes" if you aren't staging, production, or test, because many
dev boxes don't have `NODE_ENV` set by default.

You may prefer [is-development](https://www.npmjs.com/package/is-development) or [is-dev](https://www.npmjs.com/package/is-dev)
if you want to specifically check for "dev" or "development."

License is MIT.
