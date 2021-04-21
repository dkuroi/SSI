parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"F2Py":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.str=exports.bins=exports.hexs=exports.ints=void 0;var r={fromString:function(r){return r.split("").map(function(r){return r.charCodeAt(0)})},fromHexs:function(r){return Array.isArray(r)?r.map(function(r){return"string"==typeof r?parseInt(r,16):r}):parseInt(r,16)},fromBins:function(r){return Array.isArray(r)?r.map(function(r){return parseInt(r,2)}):parseInt(r,2)}};exports.ints=r;var t={fromInts:function(r,t){return Array.isArray(r)?r.map(function(r){return r.toString(16).length<2?"0"+r.toString(16):r.toString(16)}):"number"==t?r.toString(16).length<2?Number("0x0".concat(r.toString(16))):Number("0x".concat(r.toString(16))):r.toString(16).length<2?"0".concat(r.toString(16)):"".concat(r.toString(16))},fromString:function(t){return this.fromInts(r.fromString(t))},fromBins:function(t){return this.fromInts(r.fromBins(t))}};exports.hexs=t;var n={fromInts:function(r){return Array.isArray(r)?r.map(function(r){return"0".repeat(8-r.toString(2).length)+r.toString(2)}):"0".repeat(8-r.toString(2).length)+r.toString(2)},fromString:function(t){return this.fromInts(r.fromString(t))},fromHexs:function(t){return this.fromInts(r.fromHexs(t))}};exports.bins=n;var o={fromInts:function(r){return Array.isArray(r)?r.map(function(r,t){return String.fromCharCode(r)}):String.fromCharCode(r)},fromHexs:function(t){return this.fromInts(r.fromHexs(t))},fromBins:function(t){return this.fromInts(r.fromBins(t))}};exports.str=o;
},{}],"J9sS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("../utils/transforms");function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function i(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}var s=function(){function n(i,s,r){e(this,n),alert("Este algoritmo no se asegura de repetir la clave para cubrir todo el mensaje, asegúrate de darle la misma dimensión."),"srt"==i&&(this.intsMsg=t.ints.fromString(s)),"hex"==i&&(this.intsMsg=t.ints.fromHexs(s)),"bin"==i&&(this.intsMsg=t.ints.fromBins(s)),this.key=t.bins.fromString(r),this.generate_key(),this.intskey=t.ints.fromString(t.str.fromBins(this.key).join("")),this.msgbin=t.bins.fromString(s),this.res=t.ints.fromString(s),console.log('"'.concat(s,'":'),this.msgbin.join(""),this.msgbin.join("").length),console.log('"'.concat(t.str.fromBins(this.key).join(""),'":'),this.key.join(""),this.key.join("").length)}return i(n,[{key:"encrypt",value:function(){var t=this;return this.res.map(function(e,n){return e^t.intskey[n]})}},{key:"generate_key",value:function(){var e=[],n="";this.intsMsg.map(function(t,i){n="";for(var s=0;s<8;s++)n+=Math.round(Math.random()).toString();e.push(n)}),$("#manual").is(":checked")&&!$("#cipherkey").val()&&(this.key=e,$("#cipherkey").html(t.str.fromBins(this.key)))}},{key:"render",value:function(){$("#res-plaintext").html(t.str.fromInts(this.res)),$("#res-bin").html(t.bins.fromInts(this.res).join(", ")),$("#res-hex").html(t.hexs.fromInts(this.res).join(", ")),$("#res-int").html(this.res.join(", "))}}]),n}();exports.default=s;
},{"../utils/transforms":"F2Py"}],"GVtL":[function(require,module,exports) {
module.exports={alph:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]};
},{}],"FiS8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("../utils/transforms"),e=require("../utils/alph-p2.json");function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}var r=function(){function i(t,e,s){n(this,i),alert("Importante: Este algoritmo ignora los espacios"),this.msg=e.toUpperCase(),this.cond=this.msg.replace(/\s/g,""),this.intsCond=this.intsInAlph(this.cond),this.key=s.toUpperCase(),this.lkey=this.lengthenKey(),this.intsLkey=this.intsInAlph(this.lkey),console.log(this.cond,this.intsCond),console.log(this.lkey,this.intsLkey)}return s(i,[{key:"lengthenKey",value:function(){var t=this,e="",n=0;return this.cond.split("").map(function(i,s){e+=t.key[n],n==t.key.length-1?n=0:n++}),e}},{key:"encrypt",value:function(){var t=this;return this.intsCond.map(function(e,n){return(e+t.intsLkey[n])%26})}},{key:"decrypt",value:function(){var t=this;return this.intsCond.map(function(e,n){return e+26-t.intsLkey[n]>=26?(e+26)%26-t.intsLkey[n]:e+26-t.intsLkey[n]})}},{key:"intsInAlph",value:function(t){var e=this;return t.split("").map(function(t){if(" "!=t)return e.char2int(t)}).filter(function(t){return null!=t})}},{key:"toMessage",value:function(t){return t.map(function(t){return e.alph[t]}).join("")}},{key:"char2int",value:function(t){var n;return e.alph.map(function(e,i){if(e===t)return n=i}).find(function(t){return t===n})}},{key:"render",value:function(){$("#res-plaintext").html(this.toMessage(this.res)),$("#res-bin").html(t.bins.fromString(this.toMessage(this.res)).join(", ")),$("#res-hex").html(t.hexs.fromString(this.toMessage(this.res)).join(", ")),$("#res-int").html(t.ints.fromString(this.toMessage(this.res)).join(", "))}}]),i}();exports.default=r;
},{"../utils/transforms":"F2Py","../utils/alph-p2.json":"GVtL"}],"eFz7":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=function t(o,n,a){e(this,t)};exports.default=t;
},{}],"snop":[function(require,module,exports) {
"use strict";function t(t){return n(t)||o(t)||e(t)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function e(t,r){if(t){if("string"==typeof t)return i(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?i(t,r):void 0}}function o(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function n(t){if(Array.isArray(t))return i(t)}function i(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,o=new Array(r);e<r;e++)o[e]=t[e];return o}Object.defineProperty(exports,"__esModule",{value:!0}),exports.ByteMultiplier=exports.MainLog=void 0;var s=function(){this.factors=[],this.results=[]};exports.MainLog=s;var a=function(r){this.algorithmByte=r,this.mainLog=new s,this.subLog=[],this.multiply=function(r,e){this.mainLog=new s,this.subLog=[];var o=this.decomposeByte(e);this.mainLog.factors=t(o);for(var n=0,i=0;i<o.length;i++){var a=this.multiplyByFactor(r,o[i]);this.mainLog.results.push(a),n^=a}return n},this.decomposeByte=function(t){var r=[];return t.toByteBits().forEach(function(t,e){if(1===t){var o=new Array(8).fill(0);o[e]=1,r.unshift(o)}}),r.map(function(t){return t.toByte()})},this.multiplyByFactor=function(t,e){if(1===e)return t;for(var o=t.toByteBits(),n=7-e.toByteBits().indexOf(1),i=[t.toByteBits().join("")],s=0;s<n;s++)if(1===o[0]){o.rotateLeft();var a="".concat(o.join("")," + ").concat(r.toByteBits().join("")," = ");o=this.xorByteBits(o,r.toByteBits()),a+="".concat(o.join("")),i.push({operation:"rotate & add",result:a})}else o.rotateLeft(),i.push({operation:"rotate",result:o.join("")});return this.subLog.push(i),o.toByte()},this.xorByteBits=function(t,r){return(parseInt(t.join(""),2)^parseInt(r.join(""),2)).toByteBits()},Number.prototype.toByteBits=function(){return(255&this).toString(2).padStart(8,"0").split("").map(function(t){return parseInt(t)})},Array.prototype.toByte=function(){return parseInt(this.join(""),2)},Array.prototype.rotateLeft=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.shift(),this.push(t)}};exports.ByteMultiplier=a;
},{}],"JF78":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Aes=void 0;var t=require("./byte-multipliers.js");function s(t){return n(t)||r(t)||e(t)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function e(t,s){if(t){if("string"==typeof t)return h(t,s);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?h(t,s):void 0}}function r(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function n(t){if(Array.isArray(t))return h(t)}function h(t,s){(null==s||s>t.length)&&(s=t.length);for(var i=0,e=new Array(s);i<s;i++)e[i]=t[i];return e}var u=function(){this.byteMultiplier=new t.ByteMultiplier(27),this.Nb=4,this.numOfRounds=10,this.state=[],this.Sbox=[99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],this.RC=[[1,0,0,0],[2,0,0,0],[4,0,0,0],[8,0,0,0],[16,0,0,0],[32,0,0,0],[64,0,0,0],[128,0,0,0],[27,0,0,0],[54,0,0,0]],this.mixColumnMatrix=[[2,3,1,1],[1,2,3,1],[1,1,2,3],[3,1,1,2]],this.log=[],this.toMatrix=function(t){for(var s=[],i=0,e=0;i<4;i++){s.push([]);for(var r=0;r<this.Nb;r++)s[i].push(t[e++])}return s},this.transposeMatrix=function(t){return t[0].map(function(s,i){return t.map(function(t){return t[i]})})},this.XORmultiplyMatrixByColumn=function(t,s){for(var i=[],e=0;e<4;e++){i.push([]);for(var r=0;r<this.Nb;r++)i[e].push(this.byteMultiplier.multiply(t[e][r],s[r]))}return i.map(function(t){return t.reduce(function(t,s){return t^s})})},this.AddRoundKey=function(t,s){var i=this;return t.map(function(t,e){return i.xor(t,s[e])})},this.ByteSub=function(t){return this.Sbox[t]},this.ShiftRow=function(t){for(var i=t.map(function(t){return s(t)}),e=0;e<this.Nb;e++)i[e].roundLeft(e);return i},this.MixColumn=function(t){for(var s=[],i=this.transposeMatrix(t),e=0;e<this.mixColumnMatrix.length;e++)s.push(this.XORmultiplyMatrixByColumn(this.mixColumnMatrix,i[e]));return this.transposeMatrix(s)},this.xor=function(t,s){return t.map(function(t,i){return t^s[i]})},this.expandKey=function(t,i){var e=this,r=[],n=this.transposeMatrix(t),h=s(n[n.length-1]);n[n.length-1].roundLeft(),n[n.length-1]=n[t.length-1].map(function(t){return e.ByteSub(t)}),r.push(this.xor(this.xor(n[0],n[n.length-1]),this.RC[i])),n[n.length-1]=h;for(var u=1;u<4;u++)r.push(this.xor(n[u],r[u-1]));return this.transposeMatrix(r)},this.getSubkeys=function(t){for(var i=[s(t)],e=0;e<this.numOfRounds;e++)i.push(this.expandKey(i[e],e));return i},Array.prototype.roundLeft=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,s=0;s<t;s++)this.push(this.shift())},this.cipher=function(t,s){var i=this,e=this.transposeMatrix(this.toMatrix(t)),r=this.getSubkeys(e);this.state=this.AddRoundKey(e,this.transposeMatrix(this.toMatrix(s))),this.log=[],this.log.push({subkey:r[0],state:this.state});for(var n=1;n<this.numOfRounds;n++)this.state=this.state.map(function(t){return t.map(function(t){return i.ByteSub(t)})}),this.state=this.ShiftRow(this.state),this.state=this.MixColumn(this.state),this.state=this.AddRoundKey(this.state,r[n]),this.log.push({subkey:r[n],state:this.state});return this.state=this.state.map(function(t){return t.map(function(t){return i.ByteSub(t)})}),this.state=this.ShiftRow(this.state),this.state=this.AddRoundKey(this.state,r[r.length-1]),this.log.push({subkey:r[10],state:this.state}),this.transposeMatrix(this.state).flat(1/0)},this.decrypt=function(t,s){var i=this,e=this.transposeMatrix(this.toMatrix(t)),r=this.getSubkeys(e);this.state=this.AddRoundKey(e,this.transposeMatrix(this.toMatrix(s))),this.log=[],this.log.push({subkey:r[0],state:this.state}),this.state=this.AddRoundKey(this.state,r[r.length-1]),this.state=this.ShiftRow(this.state),this.state=this.state.map(function(t){return t.map(function(t){return i.ByteSub(t)})}),this.log.push({subkey:r[10],state:this.state});for(var n=1;n<this.numOfRounds;n++)this.state=this.AddRoundKey(this.state,r[n]),this.state=this.MixColumn(this.state),this.state=this.ShiftRow(this.state),this.state=this.state.map(function(t){return t.map(function(t){return i.ByteSub(t)})}),this.log.push({subkey:r[n],state:this.state});return this.transposeMatrix(this.state).flat(1/0)}};exports.Aes=u;
},{"./byte-multipliers.js":"snop"}],"DXYv":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("../utils/transforms"),s=require("../utils/rijndael");function e(t,s){if(!(t instanceof s))throw new TypeError("Cannot call a class as a function")}function i(t,s){for(var e=0;e<s.length;e++){var i=s[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,s,e){return s&&i(t.prototype,s),e&&i(t,e),t}Array.prototype.swap=function(t,s){return this[t]=this.splice(s,1,this[t])[0],this};var r=function(){function i(s,n,r){e(this,i),"srt"==s&&(this.iv=prompt("Introduce el IV","AAAAAAAAAAAAAAAA"),this.intsMsg=t.ints.fromString(n),this.key=t.ints.fromString(r),this.iv=t.ints.fromString(this.iv)),"hex"==s&&(this.iv=prompt("Introduce el IV","00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00"),this.intsMsg=t.ints.fromHexs(n.split(",")),this.key=t.ints.fromHexs(r.split(",")),this.iv=t.ints.fromHexs(this.iv.split(","))),"bin"==s&&(this.iv=prompt("Introduce el IV","000000,000000,000000,000000,000000,000000,000000,000000,000000,000000,000000,000000,000000,000000,000000,000000,000000,"),this.intsMsg=t.ints.fromBins(n.split(",")),this.key=t.ints.fromBins(r.split(",")),this.iv=t.ints.fromBins(this.iv.split(","))),this.bloques=this.separarEnBloques(n),console.log("Clave",this.key),console.log("IV",this.iv),this.bloques.map(function(t,s){console.log("Plaintext B".concat(s),t)}),this.res=t.ints.fromHexs(n)}return n(i,[{key:"encrypt",value:function(){var e=this,i=new s.Aes,n=[],r=[],o=this.key;return this.bloques.map(function(s,l){if(n=[],0==l)n=t.ints.fromHexs(s).map(function(t,s){return t^e.iv[s]}),r.push(i.cipher(o,n));else if(16==s.length)n=t.ints.fromHexs(s).map(function(t,s){return t^r[l-1][s]}),r.push(i.cipher(o,n));else{var u=e.cypherStealing(l,r[l-1]);n=t.ints.fromHexs(u).map(function(t,s){return t^r[l-1][s]}),r.push(i.cipher(o,n)),r.swap(l,l-1)}}),console.log(r),[].concat.apply([],r)}},{key:"separarEnBloques",value:function(t){var s=this,e=[],i=[];return this.intsMsg.map(function(t,n){e.push(t),n%16!=15&&n+1!=s.intsMsg.length||(i.push(e),e=[])}),i}},{key:"decrypt",value:function(){var t,e,i=this,n=new s.Aes,r=this.key,o=[];return this.bloques.map(function(s,l){t=0==l?i.iv:i.bloques[l-1],e=t.map(function(s){return s^n.decrypt(r,t)}),o.push(e)}),[].concat.apply([],o)}},{key:"cypherStealing",value:function(t,s){for(var e=this.bloques[t].length,i=s.length-e,n=s.slice(e,e+i),r=0;r<i;r++)s.pop();return[].concat.apply(this.bloques[t],n)}},{key:"render",value:function(){$("#res-plaintext").html(t.str.fromInts(this.res)),$("#res-bin").html(t.bins.fromInts(this.res).join(", ")),$("#res-hex").html(t.hexs.fromInts(this.res).join(", ")),$("#res-int").html(this.res.join(", "))}}]),i}();exports.default=r;
},{"../utils/transforms":"F2Py","../utils/rijndael":"JF78"}],"joD8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,Number.prototype.mod=function(t){return(this%t+t)%t};var t={expRapida:function(t,e,r){for(var u=1,o=t%r;e>0&&o>1;)1&e?(u=u*o%r,e-=1):(o=o*o%r,e/=2);return u},euclidExt:function(t,e){for(var r=[null,Math.max(t,e),Math.min(t,e)],u=[0,1],o=2;0!=r[o];o++)r.push(r[o-1]%r[o]),u.push((-Math.trunc(r[o-1]/r[o])*u[o-1]+u[o-2]).mod(r[1]));return u[o-2]}},e=t;exports.default=e;
},{}],"nsWm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.DyH=void 0;var e=a(require("./ModExpontentes"));function a(e){return e&&e.__esModule?e:{default:e}}var r=function(a,r,t,u){var d=e.default.expRapida(t,a,u),o=e.default.expRapida(t,r,u),p=e.default.expRapida(o,a,u);return p!=e.default.expRapida(d,r,u)&&alert("Error las claves K no son iguales"),{K:p,A:d,B:o}};exports.DyH=r;
},{"./ModExpontentes":"joD8"}],"JkbK":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../utils/diffie-Hellman.js"),t=i(require("../utils/ModExpontentes"));function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function r(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}var u=function(){function i(t,n,r){s(this,i),this.secretos=JSON.parse(r),this.elcomuns=JSON.parse(n);var u=(0,e.DyH)(this.secretos.k,this.secretos.x,this.elcomuns.a,this.elcomuns.p);return this.K=u.K,this.y_A=u.A,this.y_B=u.B,this.C=this.encrypt(),this.M=this.decrypt(),t}return r(i,[{key:"encrypt",value:function(){return this.K*this.elcomuns.m%this.p}},{key:"decrypt",value:function(){return this.invK=t.default.euclidExt(this.K,this.elcomuns.p),this.invK*this.K*this.elcomuns.m%this.elcomuns.p}},{key:"render",value:function(){$("#res-plaintext").html(JSON.stringify({yA:this.y_A,yB:this.y_B,K:this.K,C:this.C,"K⁻¹":this.invK,M:this.M}).replace(/[\r,]/g,",  "))}}]),i}();exports.default=u;
},{"../utils/diffie-Hellman.js":"nsWm","../utils/ModExpontentes":"joD8"}],"QvaY":[function(require,module,exports) {
"use strict";var e=require("./utils/transforms"),t=g(require("./alg/0-0-vernam")),a=g(require("./alg/1-0-vigenere")),r=g(require("./alg/2-0-rc4")),i=g(require("./alg/2-1-a5-1")),l=g(require("./alg/3-0-chacha20")),c=g(require("./alg/4-0-gen-e0")),d=g(require("./alg/4-1-gen-ca-gps")),n=g(require("./alg/5-0-multi-snow3g-y-aes")),o=g(require("./alg/6-0-rijndael")),s=g(require("./alg/7-0-cbc")),p=g(require("./alg/7-1-fiat-shamir")),m=g(require("./alg/8-0-elgamal")),h=g(require("./alg/9-0-rsa")),u=g(require("./alg/10-0-diffle&hellman(elgamal elíptico)")),f=g(require("./alg/10-1-gamal-eliptico"));function g(e){return e&&e.__esModule?e:{default:e}}b(1,1,1,1,1,1);var k=[0,t.default,a.default,r.default,i.default,l.default,c.default,d.default,n.default,o.default,s.default,p.default,m.default,h.default,u.default,f.default];function b(e,t,a,r,i,l){e&&$("#formato").attr("disabled","disabled"),t&&$("#plaintext").attr("disabled","disabled"),a&&$("#cipherkey").attr("disabled","disabled"),r&&$("#encrypt").attr("disabled","disabled"),i&&$("#decrypt").attr("disabled","disabled"),l&&$(".form-check-input").attr("disabled","disabled")}function y(e,t,a,r,i,l){e&&$("#formato").removeAttr("disabled"),t&&$("#plaintext").removeAttr("disabled"),a&&$("#cipherkey").removeAttr("disabled"),r&&$("#encrypt").removeAttr("disabled"),i&&$("#decrypt").removeAttr("disabled"),l&&$(".form-check-input").removeAttr("disabled")}function v(e,t){$("#encrypt").click(function(){if($("#algoritmo option:selected").text()==t){console.clear();var a=new e($("#formato option:selected").val(),$("#plaintext").val(),$("#cipherkey").val());a.res=a.encrypt(),a.render()}})}function j(e,t){$("#decrypt").click(function(){if($("#algoritmo option:selected").text()==t){var a=new e($("#formato option:selected").val(),$("#plaintext").val(),$("#cipherkey").val());a.res=a.decrypt(),a.render()}})}$("#algoritmo").children().map(function(e){return v(k[e],$("#algoritmo").children()[e].innerHTML)}),$("#algoritmo").children().map(function(e){return j(k[e],$("#algoritmo").children()[e].innerHTML)}),$("#ej1").is(":checked")&&$("#ej2").attr("disabled","disabled"),$("#algoritmo").change(function(){switch($("#algoritmo option:selected").val()){case"0":y(1,1,1,1,1,1),b(1,0,1,0,0,0),$("#formato").val("srt"),$("#ejemplos").change(function(){"0"==$("#algoritmo option:selected").val()&&($("#ej1").is(":checked")&&($("#plaintext").html("SOL"),$("#cipherkey").html(e.str.fromBins(["00111100","00011000","01110011"]).join(""))),$("#ej2").is(":checked")&&($("#plaintext").html("[t"),$("#cipherkey").html(e.str.fromBins(["00001111","00100001"]).join(""))))});break;case"1":y(1,1,1,1,1,1),b(0,0,0,0,0,0),$("#formato").val("srt"),$("#ej2").attr("disabled","disabled"),$("#ejemplos").change(function(){"1"==$("#algoritmo option:selected").val()&&$("#ej1").is(":checked")&&($("#plaintext").html("ESTE MENSAJE SE AUTODESTRUIRA"),$("#cipherkey").html("MISION"))});break;case"2":case"3":case"4":case"5":case"6":case"7":case"8":break;case"9":y(1,1,1,1,1,1),b(1,0,0,0,0,0),$("#formato").val("hex"),$("#ejemplos").change(function(){"9"==$("#algoritmo option:selected").val()&&($("#ej1").is(":checked")&&(b(0,0,1,0,0,0),$("#plaintext").html(["00","11","22","33","44","55","66","77","88","99","AA","BB","CC","DD","EE","FF","00","00","00","00","00","00","00","00","00","00","00","00","00","00","00","00"].join(", ")),$("#cipherkey").html(["00","01","02","03","04","05","06","07","08","09","0A","0B","0C","0D","0E","0F"].join(", "))),$("#ej2").is(":checked")&&(b(0,0,1,0,0,0),$("#plaintext").html(["00","11","22","33","44","55","66","77","88","99","AA","BB","CC","DD","EE","FF","00","00","00","00","00","00","00","00","00","00","00","00","00","00","00"].join(", ")),$("#cipherkey").html(["00","01","02","03","04","05","06","07","08","09","0A","0B","0C","0D","0E","0F"].join(", "))),$("#manual").is(":checked")&&y(0,0,1,0,0,0))});break;case"10":break;case"11":y(1,1,1,1,1,1),b(1,0,0,0,0,0),$("#plaintext").html(JSON.stringify({p:13,a:4,m:8}).replace(/[\r,]/g,",  ")),$("#cipherkey").html(JSON.stringify({k:5,x:2}).replace(/[\r,]/g,",  ")),$("#ejemplos").change(function(){"11"==$("#algoritmo option:selected").val()&&($("#ej1").is(":checked")&&(b(1,1,1,0,0,0),$("#plaintext").html(JSON.stringify({p:43,a:23,m:18}).replace(/[\r,]/g,",  ")),$("#cipherkey").html(JSON.stringify({k:25,x:33}).replace(/[\r,]/g,",  "))),$("#ej2").is(":checked")&&(b(1,1,1,0,0,0),$("#plaintext").html(JSON.stringify({p:113,a:43,m:28}).replace(/[\r,]/g,",  ")),$("#cipherkey").html(JSON.stringify({k:54,x:71}).replace(/[\r,]/g,",  "))),$("#manual").is(":checked")&&(y(1,1,1,1,1,1),b(1,0,0,0,0,0),$("#plaintext").html(JSON.stringify({p:13,a:4,m:8}).replace(/[\r,]/g,",  ")),$("#cipherkey").html(JSON.stringify({k:5,x:2}).replace(/[\r,]/g,",  "))))});break;case"12":case"13":case"14":break;default:$("#cipherkey").attr("disabled","disabled"),$("#plaintext").attr("disabled","disabled"),$("#encrypt").attr("disabled","disabled")}});
},{"./utils/transforms":"F2Py","./alg/0-0-vernam":"J9sS","./alg/1-0-vigenere":"FiS8","./alg/2-0-rc4":"eFz7","./alg/2-1-a5-1":"eFz7","./alg/3-0-chacha20":"eFz7","./alg/4-0-gen-e0":"eFz7","./alg/4-1-gen-ca-gps":"eFz7","./alg/5-0-multi-snow3g-y-aes":"eFz7","./alg/6-0-rijndael":"eFz7","./alg/7-0-cbc":"DXYv","./alg/7-1-fiat-shamir":"eFz7","./alg/8-0-elgamal":"JkbK","./alg/9-0-rsa":"eFz7","./alg/10-0-diffle&hellman(elgamal elíptico)":"eFz7","./alg/10-1-gamal-eliptico":"eFz7"}]},{},["QvaY"], null)
//# sourceMappingURL=/SSI/js.1d69d727.js.map