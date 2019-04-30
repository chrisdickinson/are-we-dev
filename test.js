const assert = require('assert')
const isDev = require('.')
delete process.env.NODE_ENV
assert.equal(isDev(), true)

process.env.NODE_ENV = 'development'
assert.equal(isDev(), true)

process.env.NODE_ENV = 'dev'
assert.equal(isDev(), true)

process.env.NODE_ENV = 'stag'
assert.equal(isDev(), false)

process.env.NODE_ENV = 'staging'
assert.equal(isDev(), false)

process.env.NODE_ENV = 'prod'
assert.equal(isDev(), false)

process.env.NODE_ENV = 'production'
assert.equal(isDev(), false)

process.env.NODE_ENV = 'test'
assert.equal(isDev(), false)

process.env.NODE_ENV = 'testing'
assert.equal(isDev(), false)
