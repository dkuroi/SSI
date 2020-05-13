parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"m56i":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.str=exports.bins=exports.hexs=exports.ints=void 0;var r={fromString:function(r){return r.split("").map(function(r){return r.charCodeAt(0)})},fromHexs:function(r){return Array.isArray(r)?r.map(function(r){return parseInt(r,16)}):parseInt(r,16)},fromBins:function(r){return Array.isArray(r)?r.map(function(r){return parseInt(r,2)}):parseInt(r,2)}};exports.ints=r;var t={fromInts:function(r,t){return Array.isArray(r)?r.map(function(r){return r.toString(16).length<2?"0"+r.toString(16):r.toString(16)}):"number"==t?r.toString(16).length<2?Number("0x0".concat(r.toString(16))):Number("0x".concat(r.toString(16))):r.toString(16).length<2?"0".concat(r.toString(16)):"".concat(r.toString(16))},fromString:function(t){return this.fromInts(r.fromString(t))},fromBins:function(t){return this.fromInts(r.fromBins(t))}};exports.hexs=t;var n={fromInts:function(r){return Array.isArray(r)?r.map(function(r){return"0".repeat(8-r.toString(2).length)+r.toString(2)}):"0".repeat(8-r.toString(2).length)+r.toString(2)},fromString:function(t){return this.fromInts(r.fromString(t))},fromHexs:function(t){return this.fromInts(r.fromHexs(t))}};exports.bins=n;var o={fromInts:function(r){return Array.isArray(r)?r.map(function(r,t){return String.fromCharCode(r)}):String.fromCharCode(r)},fromHexs:function(t){return this.fromInts(r.fromHexs(t))},fromBins:function(t){return this.fromInts(r.fromBins(t))}};exports.str=o;
},{}],"TK2v":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("./transforms");function n(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function e(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function i(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}var s=function(){function e(i,s,r){n(this,e),"srt"==i&&(this.msg=t.ints.fromString(s)),"hex"==i&&(this.msg=t.ints.fromHexs(s)),"bin"==i&&(this.msg=t.ints.fromBins(s)),this.key=t.bins.fromString(r),this.intskey=t.ints.fromString(r),this.msgbin=t.bins.fromString(s),this.res=t.ints.fromString(s),this.res=this.encrypt(),console.log('"'.concat(s,'":'),this.msgbin.join(""),this.msgbin.join("").length),console.log('"'.concat(r,'":'),this.key.join(""),this.key.join("").length),$("#res-plaintext").html(t.str.fromInts(this.res)),$("#res-bin").html(t.bins.fromInts(this.res).join(", ")),$("#res-hex").html(t.hexs.fromInts(this.res).join(", ")),$("#res-int").html(this.res.join(", "))}return i(e,[{key:"encrypt",value:function(){var t=this;return this.res.map(function(n,e){return t.intskey[e],n^t.intskey[e]})}},{key:"generate_key",value:function(){}}]),e}();exports.default=s;
},{"./transforms":"m56i"}],"kdLZ":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=function t(o,n){e(this,t)};exports.default=t;
},{}],"rXVM":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=function t(o,n,a){e(this,t)};exports.default=t;
},{}],"QvaY":[function(require,module,exports) {
"use strict";var e=require("./transforms"),t=f(require("./p1-vernam")),a=f(require("./p2-vigenere")),r=f(require("./p3-rc4")),i=f(require("./p4-a5-1")),l=f(require("./p5-gen-e0")),d=f(require("./p6-multi-snow3g-y-aes")),n=f(require("./p7-rijndael")),o=f(require("./p8-cbc")),c=f(require("./p9-diffle-hellman")),s=f(require("./p10-fiat-shamir")),u=f(require("./p11-rsa")),p=f(require("./p12-gamal-eliptico"));function f(e){return e&&e.__esModule?e:{default:e}}g(1,1,1,1);var m=[0,t.default,a.default,r.default,i.default,l.default,d.default,n.default,o.default,c.default,s.default,u.default,p.default],b=document.getElementById("algoritmo"),h=b.options[b.selectedIndex].text;function g(e,t,a,r){e&&$("#formato").attr("disabled","disabled"),t&&$("#plaintext").attr("disabled","disabled"),a&&$("#cipherkey").attr("disabled","disabled"),r&&$("#encrypt").attr("disabled","disabled")}function q(e,t,a,r){e&&$("#formato").removeAttr("disabled"),t&&$("#plaintext").removeAttr("disabled"),a&&$("#cipherkey").removeAttr("disabled"),r&&$("#encrypt").removeAttr("disabled")}function P(e,t){$("#encrypt").click(function(){$("#algoritmo option:selected").text()==t&&new e($("#formato option:selected").val(),$("#plaintext").val(),$("#cipherkey").val())})}$("#algoritmo").children().map(function(e){return P(m[e],$("#algoritmo").children()[e].innerHTML)}),$("#algoritmo").change(function(){switch(alert("hello world! 1"),"P1  - Vernam"==h&&alert("hello world! 2"),$("#algoritmo option:selected").text()){case"P1  - Vernam":q(1,1,1,1),g(0,0,1,0),$("#cipherkey").html(e.str.fromBins(["00111100","00011000","01110011"]).join(""));break;case"P2  - Vigenere":case"P3  - RC4":case"P4  - A5-1":case"P5  - Generador E0 de Bluetooth":case"P6  - Multiplicación Snow3G y AES":case"P7  - Rijndael":case"P8  - CBC":case"P9  - Diffle-Hellman":case"P10 - Fiat-Shamir":case"P11 - RSA":case"P12 - Gamal Elíptico":q(1,1,1,1),g(0,0,1,0);break;default:$("#cipherkey").attr("disabled","disabled"),$("#plaintext").attr("disabled","disabled"),$("#encrypt").attr("disabled","disabled")}});
},{"./transforms":"m56i","./p1-vernam":"TK2v","./p2-vigenere":"kdLZ","./p3-rc4":"rXVM","./p4-a5-1":"rXVM","./p5-gen-e0":"rXVM","./p6-multi-snow3g-y-aes":"rXVM","./p7-rijndael":"rXVM","./p8-cbc":"rXVM","./p9-diffle-hellman":"rXVM","./p10-fiat-shamir":"rXVM","./p11-rsa":"rXVM","./p12-gamal-eliptico":"rXVM"}]},{},["QvaY"], null)
//# sourceMappingURL=/SSI/js.5569f76e.js.map