'use strict'

module.exports = () => !/(stag|prod|test)/.test(process.env.NODE_ENV)
