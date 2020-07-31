function createWhenTs (params) {
  return Boolean(params.typescript)
}

function notToChangeExt () {
  return {
    changeExt: false
  }
}

const handler = {
  '/client/global.d.ts': createWhenTs,
  '/client/tsconfig.json': createWhenTs,
  '/client/config/dev.js': notToChangeExt,
  '/client/config/index.js': notToChangeExt,
  '/client/config/prod.js': notToChangeExt,
  '/client/src/pages/index/index.js' ({ pageName }) {
    return { setPageName: `/client/src/pages/${pageName}/${pageName}.js` }
  },
  '/client/src/pages/index/index.css' ({ pageName}) {
    return { setPageName: `/client/src/pages/${pageName}/${pageName}.css` }
  }
}

const basePageFiles = [
  '/client/src/pages/index/index.js',
  '/client/src/pages/index/index.css'
]

module.exports = {
  handler,
  basePageFiles,
  platforms: ['react', 'nerv', 'vue', 'vue3']
}
