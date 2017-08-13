'use strict'

const test = require('tap').test

const generateNotes = require('../..')

test('smoket test', (t) => {
  generateNotes({}, function (error, log) {
    t.error(error)
    t.ok(/<a name="0.0.0-development"><\/a>/.test(log), 'adds anchor link')
    t.end()
  })
})

test('accepts additioal options argument', (t) => {
  generateNotes({}, {}, function (error, log) {
    t.error(error)
    t.end()
  })
})
