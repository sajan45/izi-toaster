# izi-toaster

> Nuxt module for izitoast

## Setup

1. Add `izi-toaster` dependency to your project

```bash
yarn add izi-toaster # or npm install izi-toaster
```

2. Add `izi-toaster` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    'izi-toaster'
  ]
}
```

## Usage

You can use $toaster in almost any context using app.$toaster or this.$toaster (Including store actions).

See [toasted official docs](https://izitoast.marcelodolza.com/) for more usage information.

```js
export default {
   methods:{
     async login() {
         try {
             this.$toaster.show('Logging in...')
             await this.$axios.$post('auth/login')
             this.$toaster.success('Successfully authenticated')
         } catch(e){
             this.$toaster.error('Error while authenticating')
         }
     }  
   }
}
```

## License

[MIT License](./LICENSE)

Copyright (c) sajan <sajan.sahu@live.com>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/izi-toaster/latest.svg
[npm-version-href]: https://npmjs.com/package/izi-toaster

[npm-downloads-src]: https://img.shields.io/npm/dt/izi-toaster.svg
[npm-downloads-href]: https://npmjs.com/package/izi-toaster

[github-actions-ci-src]: https://github.com/https://github.com/sajan45/izi-toaster/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/https://github.com/sajan45/izi-toaster/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/https://github.com/sajan45/izi-toaster.svg
[codecov-href]: https://codecov.io/gh/https://github.com/sajan45/izi-toaster

[license-src]: https://img.shields.io/npm/l/izi-toaster.svg
[license-href]: https://npmjs.com/package/izi-toaster
