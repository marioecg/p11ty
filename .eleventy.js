const htmlmin = require('html-minifier')

module.exports = config => {
  config.addWatchTarget('./assets')
  config.addWatchTarget('./scripts')
  config.addWatchTarget('./styles')

  config.addPassthroughCopy({ './assets': '/assets' })
  config.addPassthroughCopy({ './scripts': '/scripts' })
  config.addPassthroughCopy({ './styles': '/styles' })

  config.addTransform('htmlmin', (content, outputPath) => {
    if (outputPath && outputPath.endsWith('.html')) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      })

      return minified
    }

    return content
  })

  return {
    dir: {
      input: 'templates',
      includes: 'includes',
      layouts: 'layouts',
    },
  }
}
