configureWebpack: {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            'vue-style-loader',
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    },
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/sass/app.scss";`
      }
    }
  }