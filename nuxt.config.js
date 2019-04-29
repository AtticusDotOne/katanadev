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
        href: '/css/reset.css'
      },
      {
        href: '/css/base.css',
        rel: 'stylesheet',
        type: 'text/css'
      },
      {
        href: '/css/fire.css',
        rel: 'stylesheet',
        type: 'text/css'
      },
      {
        href: '/css/sections.css',
        rel: 'stylesheet',
        type: 'text/css'
      },
      {
        href: '/css/forms.css',
        rel: 'stylesheet',
        type: 'text/css'
      },
      {
        href: '/css/navs.css',
        rel: 'stylesheet',
        type: 'text/css'
      },
      {
        href: '/css/lists.css',
        rel: 'stylesheet',
        type: 'text/css'
      },
      {
        href: '/css/theme.css',
        rel: 'stylesheet',
        type: 'text/css'
      },
      {
        href: 'https://pro.fontawesome.com/releases/v5.8.1/css/fontawesome.css',
        rel: 'stylesheet',
        type: 'text/css',
        crossorigin: 'anonymos',
        integrity:
          'sha384-4HqGlagEHMyfaDQVabl1wx7GCtGw6hDl3sKJEhqQjOCrXrvizhaA2j4hK8Piewtr'
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css',
        integrity:
          'sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf',
        crossorigin: 'anonymous'
      },
      {
        href: 'https://pro.fontawesome.com/releases/v5.8.1/css/light.css',
        rel: 'stylesheet',
        type: 'text/css',
        crossorigin: 'anonymos',
        integrity:
          'sha384-3SMOAKCN8LYSMjkWz1ChDg4pHSLtD+LuKXaZoHxE1oyDneLR6Ebjm3XHMHO9fWu3'
      }
    ],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TweenMax.min.js'
      },
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/plugins/ScrollToPlugin.min.js'
      },
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.6/plugins/animation.gsap.min.js'
      },
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/easing/EasePack.min.js'
      },
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.6/ScrollMagic.min.js'
      },
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.6/plugins/debug.addIndicators.min.js'
      },
      {
        src: '/js/jquery.js'
      },
      {
        src: '/js/smooth.js'
      },
      {
        src: '/js/scroll.js'
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
  plugins: [{ src: '~plugins/ga.js', ssr: false }],

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
