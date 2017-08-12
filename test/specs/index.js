const test = require('tap').test
const proxyquire = require('proxyquire')

const releaseNoteGenerator = proxyquire('../../lib', {
  'conventional-changelog': (options, cb) => {
    cb(null, options)
  }
})

test('get release notes', (group) => {
  group.test('pass well formed options on to conventional-changelog', (t) => {
    t.plan(4)

    releaseNoteGenerator({}, {
      pkg: {
        version: '1.2.3',
        repository: {
          url: 'git+https://github.com/semantic-release/release-notes-generator.git'
        }
      }
    }, (err, options) => {
      t.error(err)
      t.is(options.version, '1.2.3')
      t.is(options.repository, 'https://github.com/semantic-release/release-notes-generator')
      t.is(options.file, false)
    })
  })

  group.test('pass options missing repository field', (t) => {
    t.plan(4)

    releaseNoteGenerator({}, {
      pkg: {
        version: '1.2.3'
      }
    }, (err, options) => {
      t.error(err)
      t.is(options.version, '1.2.3')
      t.is(options.repository, null)
      t.is(options.file, false)
    })
  })

  group.end()
})
