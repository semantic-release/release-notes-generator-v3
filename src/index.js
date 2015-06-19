const changelog = require('conventional-changelog')
const parseUrl = require('github-url-from-git')

module.exports = function (options, pkg, cb) {
  const repository = pkg.repository ? parseUrl(pkg.repository.url) : null

  changelog({
    version: pkg.version,
    repository: repository,
    file: false
  }, cb)
}
