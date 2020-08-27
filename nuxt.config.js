const env = require('dotenv').config();

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'galaxies',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'test task for ITernal group company' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap' },
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  css: [
    '~/assets/scss/variables.scss',
    '~/assets/scss/normalize.scss',
  ],
/*
** Include Preprocessor files (@nuxtjs/style-resources)
*/
styleResources: {
  scss: [
    './assets/scss/variables.scss',
    './assets/scss/normalize.scss',
  ],
},
/*
** Env file
*/
env: env.parsed,
  /*
  ** Build configuration
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/style-resources',
  ],
  axios: {
    proxy: true
  },
  proxy: {
    '/api': {
      target: process.env.API_URL,
      pathRewrite: {
        '^/api' : ''
        },
      changeOrigin: true,
      }
  },  

  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

