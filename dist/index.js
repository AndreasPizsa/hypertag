var e=/(\w+)\s*(:?=\s*((?:(['"])(.*?)\4)|(?:[^\s>]+)))?/ms;function n(e,n,s){n=Array.isArray(n)?n:[n],s=Object.assign({},{tagKey:"<"},s);var i=new RegExp("<(?:"+n.join("|")+")(?:\\s+(.*?))?>","igms");return(t(e).match(i)||[]).map(function(e){return r(e,s.tagKey)}).filter(function(e){return e})}function r(n,r){void 0===r&&(r="<");var t={},s=new RegExp(e,"gims"),i=s.exec(n);if(i){for(t[r]=i[1];null!==(i=s.exec(n));){t[i[1]]=null!==i[5]&&i[5]||null!==i[3]&&i[3]||!0}return t}}function t(e){return e.replace(/<!--(?:[\s]|.)*?-->/gim,"")}module.exports=n,Object.assign(module.exports,{getTags:n,parseAttrs:r,stripComments:t,extend:function(e,r){return r=Object.assign({},r),function(t){return n(t,e,r)}}});
//# sourceMappingURL=index.js.map