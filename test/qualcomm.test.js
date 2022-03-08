const {readFileSync} = require('node:fs')
const {resolve} = require('node:path')
const test = require('ava')
const parse = require('../hypertag.js')
const {stripComments} = require('../hypertag.js')

const html = readFileSync(resolve(__dirname, './fixture-qualcomm.html'), 'utf-8')

test('it can strip comments from developer.qualcomm.com', t => {
  t.notThrows(() => stripComments(html))
})

test('it can parse developer.qualcomm.com', t => {
  t.notThrows(() => parse(html))
})
