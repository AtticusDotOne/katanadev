const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
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
 
  plugins: ['@/plugins/vuetify'],
  */
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
  }
}
