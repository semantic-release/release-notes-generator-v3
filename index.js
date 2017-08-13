'use strict'

const conventionalChangelog = require('conventional-changelog')

// pluginConfig are passed to all semantic-release plugins but are not used
// optios have been used in an earlier version but are currently not used.
// We leave them in as we expect to need them again in future and try to
// avoid breaking changes
module.exports = function (pluginConfig, options, callback) {
  if (typeof options === 'function') {
    callback = options
  }

  let content = ''
  conventionalChangelog({
    preset: 'angular'
  })
    .on('error', callback)
    .on('data', (buffer) => {
      content += buffer.toString()
    })
    .on('end', () => {
      callback(null, content.trim())
    })
}
