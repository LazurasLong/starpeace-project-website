const fs = require('fs')
const webpack = require('webpack')

const is_development = process.env.NODE_ENV === 'development'

module.exports = {
  css: [
    { src: '~/assets/stylesheets/bulma-starpeace.sass', lang: 'sass' }
  ],
  head: {
    title: 'STARPEACE Project',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'STARPEACE Project: a Community for players and developers of the STARPEACE economic simulation and multiplayer game' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans|Varela+Round' }
    ]
  },
  render: {
    resourceHints: false
  },
  generate: {
    fallback: false
  },
  build: {
    // analyze: true,
    publicPath: '/assets/',
    vendor: [],
    extend (config, { isDev, isClient }) {
      config.module.rules.push({
        test: /\.coffee$/,
        use: 'coffee-loader',
        exclude: /(node_modules)/
      });
      config.module.rules.push({
        test: /\.haml$/,
        use: 'haml',
        exclude: /(node_modules)/
      });
    }
  },
  modules: [
    '@nuxtjs/moment', ['@nuxtjs/google-analytics', { id: 'UA-123879676-1', debug: { sendHitTask: !is_development } }]
  ],
  plugins: [
    { src: '~/plugins/font-awesome', ssr: false }
  ]
}
