# vue-cli-demo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### snowpack.config.json
```
{
  "extends": "@snowpack/app-scripts-vue",
  "plugins": [
    "snowpack-plugin-vue-2"
  ],
  "scripts": {
    "build:css": "postcss",
    "mount:@/": "mount @/ --to /src",
    "mount:vue": "mount @/ --to /node_modules"
  },
  "installOptions": {
    "alias": {
      "vue": "vue/dist/vue.esm.js"
    }
  }
}
```
### snowpack
```
2020.07.08
加载vue2 template ✅
```

### snowpack-plugin-vue2
```
cd snowpack-plugin-vue2
npm pack
```
