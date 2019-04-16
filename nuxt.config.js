const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    script: [],
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Alice'
      },
      {
        rel: 'stylesheet',
        href: 'css/reset.css'
      },
      {
        href: 'css/base.css',
        rel: 'stylesheet',
        type: 'text/css'
      },
      {
        href: 'css/fire.css',
        rel: 'stylesheet',
        type: 'text/css'
      },
      {
        href: 'css/sections.css',
        rel: 'stylesheet',
        type: 'text/css'
      },
      {
        href: 'css/forms.css',
        rel: 'stylesheet',
        type: 'text/css'
      },
      {
        href: 'css/navs.css',
        rel: 'stylesheet',
        type: 'text/css'
      },
      {
        href: 'css/lists.css',
        rel: 'stylesheet',
        type: 'text/css'
      },
      {
        href: 'css/theme.css',
        rel: 'stylesheet',
        type: 'text/css'
      },
      {
        href: 'https://pro.fontawesome.com/releases/v5.8.1/css/light.css',
        rel: 'stylesheet',
        type: 'text/css',
        crossorigin: 'anonymos',
        integrity:
          'sha384-3SMOAKCN8LYSMjkWz1ChDg4pHSLtD+LuKXaZoHxE1oyDneLR6Ebjm3XHMHO9fWu3',
        defered: true
      },
      {
        href:
          'hhttps://pro.fontawesome.com/releases/v5.8.1/css/fontawesome.css',
        rel: 'stylesheet',
        type: 'text/css',
        crossorigin: 'anonymos',
        integrity:
          'sha384-4HqGlagEHMyfaDQVabl1wx7GCtGw6hDl3sKJEhqQjOCrXrvizhaA2j4hK8Piewtr',
        defered: true
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
  
  css: ['~/assets/style/app.styl'], */

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    transpile: [],
    plugins: [],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          exclude: /(node_modules)/
        })
      }
    }
  }
}
