function r(){return r=Object.assign||function(r){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(r[e]=t[e])}return r},r.apply(this,arguments)}var n=/([\w\-_]+)\s*(:?=\s*((?:(['"])([\s\S]*?)\4)|[^\s>]+))?/m;function t(n,t,s){t=(t=Array.isArray(t)?t:[t]).map(function(r){return"*"===r?"[^/\\s>]+":r}),s=r({tagKey:"<"},s);var i=new RegExp("<(?:"+t.join("|")+")(?:\\s+(.*?))?>","igms");return(u(n).match(i)||[]).map(function(r){return e(r,s.tagKey)}).filter(function(r){return r})}function e(r,t){void 0===t&&(t="<");var e={},u=new RegExp(n,"gims"),s=u.exec(r);if(s){for(e[t]=s[1];null!==(s=u.exec(r));)e[s[1]]=null!==s[5]&&s[5]||null!==s[3]&&s[3]||!0;return e}}function u(r){return r.replace(/<!\x2D\x2D([\s]|[\s\S])*?\x2D\x2D>/gim,"")}module.exports=t,Object.assign(module.exports,{parse:t,parseAttrs:e,stripComments:u,extend:function(n,e){return e=r({},e),function(r){return t(r,n,e)}}});
//# sourceMappingURL=index.mjs.map
