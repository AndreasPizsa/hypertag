function e(){return e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.apply(this,arguments)}const t=/([\w\-_]+)\s*(:?=\s*((?:(['"])([\s\S]*?)\4)|[^\s>]+))?/m;function n(t,n,o){n=(n=Array.isArray(n)?n:[n]).map(e=>"*"===e?"[^/\\s>]+":e),o=e({tagKey:"<"},o);const a=new RegExp(`<(?:${n.join("|")})(?:\\s+(.*?))?>`,"igms");return(s(t).match(a)||[]).map(e=>r(e,o.tagKey)).filter(e=>e)}function r(e,n="<"){const r={},s=new RegExp(t,"gims");let o=s.exec(e);if(o){for(r[n]=o[1];null!==(o=s.exec(e));)r[o[1]]=null!==o[5]&&o[5]||null!==o[3]&&o[3]||!0;return r}}function s(e){return e.replace(/<!\x2D\x2D([\s]|[\s\S])*?\x2D\x2D>/gim,"")}module.exports=n,Object.assign(module.exports,{parse:n,parseAttrs:r,stripComments:s,extend:function(t,r){return r=e({},r),e=>n(e,t,r)}});
//# sourceMappingURL=index.modern.js.map