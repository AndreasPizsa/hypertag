const attrPattern = /([\w\-_]+)\s*(:?=\s*((?:(['"])(.*?)\4)|[^\s>]+))?/ms

module.exports = parse
Object.assign(module.exports, {
  parse,
  parseAttrs,
  stripComments,
  extend,
})

function extend(tags, options) {
  options = {...options}
  return source => parse(source, tags, options)
}

function parse(source, tags, options) {
  tags = Array.isArray(tags) ? tags : [tags]
  tags = tags.map(tag => tag === '*' ? '[^/\\s>]+' : tag)
  options = {
    tagKey: '<',
    ...options,
  }

  const pattern = new RegExp(`<(?:${tags.join('|')})(?:\\s+(.*?))?>`, 'igms')
  return (stripComments(source).match(pattern) || [])
    .map(tag => parseAttrs(tag, options.tagKey))
    .filter(x => x)
}

function parseAttrs(htmlTagText, tagKey = '<') {
  const attrs = {}

  const matchPattern = new RegExp(attrPattern, 'gims')
  let match = matchPattern.exec(htmlTagText)
  if (!match) {
    return
  }
  attrs[tagKey] = match[1]

  while ((match = matchPattern.exec(htmlTagText)) !== null) {
    const key = match[1]
    attrs[key]
    = match[5] !== undefined
        ? match[5]
        : (match[3] !== undefined
          ? match[3]
          : true)
  }
  return attrs
}

function stripComments(html) {
  // eslint-disable-next-line unicorn/better-regex
  return html.replace(/<!--[\s\S]*?(?:-->)/gms, '')
}
