const changelog = require('conventional-changelog')
const parseUrl = require('github-url-from-git')

module.exports = function (pluginConfig, options, cb) {
  const repository = options.pkg.repository ? parseUrl(options.pkg.repository.url) : null

  changelog({
    version: options.pkg.version,
    repository: repository,
    file: false
  }, cb)
}
