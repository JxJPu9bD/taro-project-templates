function createWhenTs (params) {
  return params.typescript ? true : false
}

const handler = {
  '/global.d.ts': createWhenTs,
  '/tsconfig.json': createWhenTs,
  '/src/pages/index/index.jsx' ({ pageName }) {
    return { setPageName: `/src/pages/${pageName}/index.jsx` }
  },
  '/src/pages/index/index.css' ({ pageName }) {
    return { setPageName: `/src/pages/${pageName}/index.css` }
  },
  '/src/pages/index/index.config.js' ({ pageName}) {
    return { setPageName: `/src/pages/${pageName}/index.config.js` }
  }
}

const basePageFiles = [
  '/src/pages/index/index.jsx',
  '/src/pages/index/index.css',
  '/src/pages/index/index.config.js'
]

module.exports = {
  desc: '使用 NutUI React 的模板',
  handler,
  basePageFiles,
  platforms: ['react']
}
