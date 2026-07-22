/*! cubing.js v0.63.3 (https://js.cubing.net/cubing/) — bundled <twisty-player>. License: MPL-2.0 (dual MPL-2.0 OR GPL-3.0-or-later). Source: https://github.com/cubing/cubing.js */
(()=>{var PS=Object.defineProperty;var A=(t,e,i)=>()=>{if(i)throw i[0];try{return t&&(e=t(t=0)),e}catch(r){throw i=[r],r}};var kS=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(i){throw e=0,i}},zr=(t,e)=>{for(var i in e)PS(t,i,{get:e[i],enumerable:!0})};function FS(t,e=!0){if(!e)return t;switch(t){case 1:return-1;case-1:return 1}}function mc(t,e){return e===-1?Array.from(t).reverse():t}function OS(t){return Array.from(t).reverse()}function*Ph(t,e){e===-1?yield*zS(t):yield*t}function*zS(t){for(let e of Array.from(t).reverse())yield e}function ma(t,e){return t?parseInt(t,10):e}function Oh(t){return new gc().parseAlg(t)}function jS(t){return new gc().parseMove(t)}function YS(t){return new gc().parseQuantumMove(t)}function kt(t,e,i){let r=t;return r[hi]=e,r[Oi]=i,r}function KS(t,e){return hi in t&&(e[hi]=t[hi]),Oi in t&&(e[Oi]=t[Oi]),e}function zh(t){Lh.has(t)||(console.warn(t),Lh.add(t))}function yr(t,e){return t instanceof e}function QS(t){return yr(t,Ut)||yr(t,pn)||yr(t,fi)||yr(t,Wt)||yr(t,b)||yr(t,Sr)||yr(t,Ft)}function JS(t,e){return t*Math.sign(e.amount)>=0}function yc(t,e,i=0){return((t-i)%e+e)%e+i}function Sc(t,e,i){let r=new Bh(i),n=Array.from(t.childAlgNodes()),s=[e];function o(){return new he([...n,...s])}function a(l){if(r.cancelPuzzleSpecificModWrap()==="none")return l;let c=r.puzzleSpecificSimplifyOptions()?.quantumMoveOrder;if(!c)return l;let f=c(e.quantum),h;switch(r.cancelPuzzleSpecificModWrap()){case"gravity":{h=-Math.floor((f-(l.amount<0?0:1))/2);break}case"canonical-centered":{h=-Math.floor((f-1)/2);break}case"canonical-positive":{h=0;break}case"preserve-sign":{h=l.amount<0?1-f:0;break}default:throw new Error("Unknown mod wrap")}let u=yc(l.amount,f,h);return l.modified({amount:u})}if(r.cancelAny()){let l,c=r.puzzleSpecificSimplifyOptions()?.axis;if(c)l=d=>c.areQuantumMovesSameAxis(e.quantum,d.quantum);else{let d=e.quantum.toString();l=y=>y.quantum.toString()===d}let f=r.cancelQuantum()==="same-direction",h=new Map;h.set(e.quantum.toString(),Math.sign(e.amount));let u;for(u=n.length-1;u>=0;u--){let d=n[u].as(b);if(!d||!l(d))break;let y=d.quantum.toString();if(f){let g=h.get(y);if(g&&!JS(g,d))break;h.set(y,Math.sign(d.amount))}}let p=[...n.splice(u+1),e];if(c)s=c.simplifySameAxisMoves(p,r.cancelPuzzleSpecificModWrap()!=="none");else{let d=p.reduce((y,g)=>y+g.amount,0);if(h.size!==1)throw new Error("Internal error: multiple quantums when one was expected");s=[new b(e.quantum,d)]}}return s=s.map(l=>a(l)).filter(l=>l.amount!==0),o()}function ev(t,e,i){let r=e.as(b);return r?Sc(t,r,i):new he([...t.childAlgNodes(),e])}function Gh(t,e,i){if(e.is(Ut))return t.traverseGrouping(e,i);if(e.is(b))return t.traverseMove(e,i);if(e.is(fi))return t.traverseCommutator(e,i);if(e.is(Wt))return t.traverseConjugate(e,i);if(e.is(Ft))return t.traversePause(e,i);if(e.is(Sr))return t.traverseNewline(e,i);if(e.is(pn))return t.traverseLineComment(e,i);throw new Error("unknown AlgNode")}function Vh(t){if(t.is(Ut)||t.is(b)||t.is(fi)||t.is(Wt)||t.is(Ft)||t.is(Sr)||t.is(pn))return t;throw new Error("internal error: expected AlgNode")}function Ot(t,e){let i=new t(...e??[]);return i.traverseAlg.bind(i)}function Nh(t){if(!t)return[];if(yr(t,he))return t.childAlgNodes();if(typeof t=="string")return Oh(t).childAlgNodes();let e=t;if(typeof e[Symbol.iterator]=="function")return e;throw new Error("Invalid AlgNode")}function no(t){return yr(t,he)?t:new he(t)}function rv(t,e){return t.is(Sr)||e.is(Sr)||e.as(Ut)?.experimentalNISSPlaceholder?"":t.is(pn)&&!e.is(Sr)?`
`:" "}var US,Ih,Br,fi,Wt,hc,dc,BS,ga,pn,Sr,Ft,GS,Dh,VS,HS,WS,XS,qS,hi,Oi,gc,Lh,uc,ke,b,ZS,lc,Ut,$S,Bh,ir,vr,tv,iv,he,LM,xr=A(()=>{US=!1,Ih=class{is(t){return this instanceof t}as(t){return this instanceof t?this:null}},Br=class extends Ih{constructor(){super(),US&&Object.defineProperty(this,"_debugStr",{get:()=>this.toString()})}get log(){return console.log.bind(console,this,this.toString())}};fi=class cc extends Br{#e;#t;constructor(e,i){super(),this.#e=no(e),this.#t=no(i)}get A(){return this.#e}get B(){return this.#t}isIdentical(e){let i=e.as(cc);return!!(i?.A.isIdentical(this.A)&&i?.B.isIdentical(this.B))}invert(){return new cc(this.#t,this.#e)}*experimentalExpand(e=1,i){i??=1/0,i===0?yield e===1?this:this.invert():e===1?(yield*this.A.experimentalExpand(1,i-1),yield*this.B.experimentalExpand(1,i-1),yield*this.A.experimentalExpand(-1,i-1),yield*this.B.experimentalExpand(-1,i-1)):(yield*this.B.experimentalExpand(1,i-1),yield*this.A.experimentalExpand(1,i-1),yield*this.B.experimentalExpand(-1,i-1),yield*this.A.experimentalExpand(-1,i-1))}toString(e){return`[${this.#e.toString(e)}, ${this.#t.toString(e)}]`}},Wt=class fc extends Br{#e;#t;constructor(e,i){super(),this.#e=no(e),this.#t=no(i)}get A(){return this.#e}get B(){return this.#t}isIdentical(e){let i=e.as(fc);return!!(i?.A.isIdentical(this.A)&&i?.B.isIdentical(this.B))}invert(){return new fc(this.#e,this.#t.invert())}*experimentalExpand(e,i){i??=1/0,i===0?yield e===1?this:this.invert():(yield*this.A.experimentalExpand(1,i-1),yield*this.B.experimentalExpand(e,i-1),yield*this.A.experimentalExpand(-1,i-1))}toString(e){return`[${this.A.toString(e)}: ${this.B.toString(e)}]`}},hc=2147483647,dc="2^31 - 1",BS=-2147483648,ga=class{#e=[];push(t){this.#e.push(t)}experimentalPushAlg(t){for(let e of t.childAlgNodes())this.push(e)}experimentalNumAlgNodes(){return this.#e.length}toAlg(){return new he(this.#e)}reset(){this.#e=[]}},pn=class kh extends Br{#e;constructor(e){if(super(),e.includes(`
`)||e.includes("\r"))throw new Error("LineComment cannot contain newline");this.#e=e}get text(){return this.#e}isIdentical(e){let i=e;return e.is(kh)&&this.#e===i.#e}invert(){return this}*experimentalExpand(e=1,i=1/0){yield this}toString(e){return`//${this.#e}`}},Sr=class Uh extends Br{toString(e){return`
`}isIdentical(e){return e.is(Uh)}invert(){return this}*experimentalExpand(e=1,i=1/0){yield this}},Ft=class Fh extends Br{experimentalNISSGrouping;toString(e){return"."}isIdentical(e){return e.is(Fh)}invert(){return this}*experimentalExpand(e=1,i=1/0){yield this}},GS={caretNISSNotationEnabled:!0};Dh=/^(\d+)?('?)/,VS=/^[_\dA-Za-z]/,HS=/^((([1-9]\d*)-)?([1-9]\d*))?([_A-Za-z]+)/,WS=/^[^\n]*/,XS=/^(-?\d+), ?/,qS=/^(-?\d+)\)/;hi=Symbol("startCharIndex"),Oi=Symbol("endCharIndex");gc=class{#e="";#t=0;#i=[];parseAlg(t){this.#e=t,this.#t=0;let e=this.parseAlgWithStopping([]);this.mustBeAtEndOfInput();let i=Array.from(e.childAlgNodes());if(this.#i.length>0)for(let o of this.#i.reverse())i.push(o);let r=new he(i),{[hi]:n,[Oi]:s}=e;return kt(r,n,s),r}parseMove(t){this.#e=t,this.#t=0;let e=this.parseMoveImpl();return this.mustBeAtEndOfInput(),e}parseQuantumMove(t){this.#e=t,this.#t=0;let e=this.parseQuantumMoveImpl();return this.mustBeAtEndOfInput(),e}mustBeAtEndOfInput(){if(this.#t!==this.#e.length)throw new Error("parsing unexpectedly ended early")}parseAlgWithStopping(t){let e=this.#t,i=this.#t,r=new ga,n=!1,s=o=>{if(n)throw new Error(`Unexpected character at index ${o}. Are you missing a space?`)};for(;this.#t<this.#e.length;){let o=this.#t;if(t.includes(this.#e[this.#t]))return kt(r.toAlg(),e,i);if(this.tryConsumeNext(" "))n=!1,r.experimentalNumAlgNodes()===0&&(e=this.#t);else if(VS.test(this.#e[this.#t])){s(o);let a=this.parseMoveImpl();r.push(a),n=!0,i=this.#t}else if(this.tryConsumeNext("(")){s(o);let a=this.tryRegex(XS);if(a){let l=a[1],c=this.#t,f=this.parseRegex(qS),h=kt(new b(new ke("U_SQ_"),parseInt(l,10)),o+1,o+1+l.length),u=kt(new b(new ke("D_SQ_"),parseInt(f[1],10)),c,this.#t-1),p=kt(new he([h,u]),o+1,this.#t-1);r.push(kt(new Ut(p),o,this.#t)),n=!0,i=this.#t}else{let l=this.parseAlgWithStopping([")"]);this.mustConsumeNext(")");let c=this.parseAmount();r.push(kt(new Ut(l,c),o,this.#t)),n=!0,i=this.#t}}else if(this.tryConsumeNext("^")){if(!GS.caretNISSNotationEnabled)throw new Error("Alg contained a caret but caret NISS notation is not enabled.");this.mustConsumeNext("(");let a=this.parseAlgWithStopping([")"]);this.popNext();let l=new Ut(a,-1),c=new Ft;l.experimentalNISSPlaceholder=c,c.experimentalNISSGrouping=l,this.#i.push(l),r.push(c)}else if(this.tryConsumeNext("[")){s(o);let a=this.parseAlgWithStopping([",",":"]),l=this.popNext(),c=this.parseAlgWithStopping(["]"]);this.mustConsumeNext("]");let f;switch(l){case":":{f=kt(new Wt(a,c),o,this.#t),n=!0,i=this.#t;break}case",":{f=kt(new fi(a,c),o,this.#t),n=!0,i=this.#t;break}default:throw new Error("unexpected parsing error")}let h=this.#t,u=this.parseAmount();if(u===1)r.push(f);else{let p=kt(new he([f]),o,h),d=kt(new Ut(p,u),o,this.#t);r.push(d)}n=!0,i=this.#t}else if(this.tryConsumeNext(`
`))r.push(kt(new Sr,o,this.#t)),n=!1,i=this.#t;else if(this.tryConsumeNext("/"))if(this.tryConsumeNext("/")){s(o);let[a]=this.parseRegex(WS);r.push(kt(new pn(a),o,this.#t)),n=!1,i=this.#t}else r.push(kt(new b("_SLASH_"),o,this.#t)),n=!0,i=this.#t;else if(this.tryConsumeNext("."))s(o),r.push(kt(new Ft,o,this.#t)),n=!0,i=this.#t;else throw new Error(`Unexpected character: ${this.popNext()}`)}if(this.#t!==this.#e.length)throw new Error("did not finish parsing?");if(t.length>0)throw new Error("expected stopping");return kt(r.toAlg(),e,i)}parseQuantumMoveImpl(){let[,,,t,e,i]=this.parseRegex(HS);return new ke(i,ma(e,void 0),ma(t,void 0))}parseMoveImpl(){let t=this.#t;if(this.tryConsumeNext("/"))return kt(new b("_SLASH_"),t,this.#t);let e=this.parseQuantumMoveImpl(),[i,r]=this.parseAmountAndTrackEmptyAbsAmount(),n=this.parseMoveSuffix();if(n){if(i<0)throw new Error("uh-oh");if((n==="++"||n==="--")&&i!==1)throw new Error("Pochmann ++ or -- moves cannot have an amount other than 1.");if((n==="++"||n==="--")&&!r)throw new Error("Pochmann ++ or -- moves cannot have an amount written as a number.");if((n==="+"||n==="-")&&r)throw new Error("Clock dial moves must have an amount written as a natural number followed by + or -.");n.startsWith("+")&&(e=e.modified({family:`${e.family}_${n==="+"?"PLUS":"PLUSPLUS"}_`})),n.startsWith("-")&&(e=e.modified({family:`${e.family}_${n==="-"?"PLUS":"PLUSPLUS"}_`}),i*=-1)}return kt(new b(e,i),t,this.#t)}parseMoveSuffix(){return this.tryConsumeNext("+")?this.tryConsumeNext("+")?"++":"+":this.tryConsumeNext("-")?this.tryConsumeNext("-")?"--":"-":null}parseAmountAndTrackEmptyAbsAmount(){let t=this.#t,[,e,i]=this.parseRegex(Dh);if(e?.startsWith("0")&&e!=="0")throw new Error(`Error at char index ${t}: An amount can only start with 0 if it's exactly the digit 0.`);return[ma(e,1)*(i==="'"?-1:1),!e]}parseAmount(){let t=this.#t,[,e,i]=this.parseRegex(Dh);if(e?.startsWith("0")&&e!=="0")throw new Error(`Error at char index ${t}: An amount number can only start with 0 if it's exactly the digit 0.`);return ma(e,1)*(i==="'"?-1:1)}parseRegex(t){let e=t.exec(this.remaining());if(e===null)throw new Error("internal parsing error");return this.#t+=e[0].length,e}tryRegex(t){let e=t.exec(this.remaining());return e===null?null:(this.#t+=e[0].length,e)}remaining(){return this.#e.slice(this.#t)}popNext(){let t=this.#e[this.#t];return this.#t++,t}tryConsumeNext(t){return this.#e[this.#t]===t?(this.#t++,!0):!1}mustConsumeNext(t){let e=this.popNext();if(e!==t)throw new Error(`expected \`${t}\` while parsing, encountered ${e}`);return e}},Lh=new Set;uc=class{quantum;amount;constructor(t,e=1){if(this.quantum=t,this.amount=e,!Number.isInteger(this.amount)||this.amount<BS||this.amount>hc)throw new Error(`AlgNode amount absolute value must be a non-negative integer below ${dc}.`)}suffix(){let t="",e=Math.abs(this.amount);return e!==1&&(t+=e),this.amount<0&&(t+="'"),t}isIdentical(t){return this.quantum.isIdentical(t.quantum)&&this.amount===t.amount}*experimentalExpand(t,e){let i=Math.abs(this.amount),r=FS(t,this.amount<0);for(let n=0;n<i;n++)yield*this.quantum.experimentalExpand(r,e)}},ke=class pc extends Ih{#e;#t;#i;constructor(e,i,r){if(super(),this.#e=e,this.#t=i??null,this.#i=r??null,Object.freeze(this),this.#t!==null&&(!Number.isInteger(this.#t)||this.#t<1||this.#t>hc))throw new Error(`QuantumMove inner layer must be a positive integer below ${dc}.`);if(this.#i!==null&&(!Number.isInteger(this.#i)||this.#i<1||this.#i>hc))throw new Error(`QuantumMove outer layer must be a positive integer below ${dc}.`);if(this.#i!==null&&this.#t!==null&&this.#t<=this.#i)throw new Error("QuantumMove outer layer must be smaller than inner layer.");if(this.#i!==null&&this.#t===null)throw new Error("QuantumMove with an outer layer must have an inner layer")}static fromString(e){return YS(e)}modified(e){return new pc(e.family??this.#e,e.innerLayer??this.#t,e.outerLayer??this.#i)}isIdentical(e){let i=e;return e.is(pc)&&this.#e===i.#e&&this.#t===i.#t&&this.#i===i.#i}get family(){return this.#e}get outerLayer(){return this.#i}get innerLayer(){return this.#t}experimentalExpand(){throw new Error("experimentalExpand() cannot be called on a `QuantumMove` directly.")}toString(e){let i=this.#e;return this.#t!==null&&(i=String(this.#t)+i,this.#i!==null&&(i=`${String(this.#i)}-${i}`)),i}},b=class Wn extends Br{#e;constructor(...e){if(super(),typeof e[0]=="string")if(e[1]??null){this.#e=new uc(ke.fromString(e[0]),e[1]);return}else return Wn.fromString(e[0]);this.#e=new uc(e[0],e[1])}isIdentical(e){let i=e.as(Wn);return!!i&&this.#e.isIdentical(i.#e)}invert(){return KS(this,new Wn(this.#e.quantum,this.#i()?this.amount:-this.amount))}*experimentalExpand(e=1){e===1?yield this:yield this.modified({amount:-this.amount})}get quantum(){return this.#e.quantum}modified(e){return new Wn(this.#e.quantum.modified(e),e.amount??this.amount)}static fromString(e){return jS(e)}get amount(){return this.#e.amount}get type(){return zh("deprecated: type"),"blockMove"}get family(){return this.#e.quantum.family??void 0}get outerLayer(){return this.#e.quantum.outerLayer??void 0}get innerLayer(){return this.#e.quantum.innerLayer??void 0}#t;#i(){return this.isIdentical(this.#t??=new Wn("_SLASH_"))}toString(e){if(e?.notation!=="LGN"){if(this.#i())return"/";if(this.family.endsWith("_PLUS_"))return this.#e.quantum.toString().slice(0,-6)+Math.abs(this.amount)+(this.amount<0?"-":"+");if(this.family.endsWith("_PLUSPLUS_")){let i=Math.abs(this.amount);return this.#e.quantum.toString().slice(0,-10)+(i===1?"":i)+(this.amount<0?"--":"++")}}return this.#e.quantum.toString(e)+this.#e.suffix()}},ZS=class{quantumU_SQ_=null;quantumD_SQ_=null;format(t,e){if(e?.notation==="LGN"||t.amount!==1)return null;let i=this.tuple(t);return i?`(${i.map(r=>r.amount).join(", ")})`:null}tuple(t){if(t.amount!==1)return null;this.quantumU_SQ_||=new ke("U_SQ_"),this.quantumD_SQ_||=new ke("D_SQ_");let e=t.alg;if(e.experimentalNumChildAlgNodes()===2){let[i,r]=e.childAlgNodes();if(i.as(b)?.quantum.isIdentical(this.quantumU_SQ_)&&r.as(b)?.quantum.isIdentical(this.quantumD_SQ_))return[i,r]}return null}},lc=new ZS,Ut=class ro extends Br{#e;experimentalNISSPlaceholder;constructor(e,i){super();let r=no(e);this.#e=new uc(r,i)}isIdentical(e){let i=e;return e.is(ro)&&this.#e.isIdentical(i.#e)}get alg(){return this.#e.quantum}get amount(){return this.#e.amount}modified(e){return new ro(e.alg??this.alg,e.amount??this.amount)}get experimentalRepetitionSuffix(){return this.#e.suffix()}invert(){let e=lc.tuple(this);if(e){let[i,r]=e;return new ro(new he([i.invert(),r.invert()]))}return new ro(this.#e.quantum,-this.#e.amount)}*experimentalExpand(e=1,i){i??=1/0,i===0?yield e===1?this:this.invert():yield*this.#e.experimentalExpand(e,i-1)}static fromString(){throw new Error("unimplemented")}#t(e){let i=this.#e.quantum.toString(e),r=this.alg.childAlgNodes(),{value:n}=r.next();return r.next().done&&(n?.is(fi)||n?.is(Wt))?i:`(${i})`}toString(e){return lc.format(this,e)??`${this.#t(e)}${this.#e.suffix()}`}experimentalAsSquare1Tuple(){return lc.tuple(this)}};$S="any-direction",Bh=class{constructor(t={}){this.config=t}cancelQuantum(){let{cancel:t}=this.config;return t===!0?$S:t===!1?"none":t?.directional??"none"}cancelAny(){return this.config.cancel&&this.cancelQuantum()!=="none"}cancelPuzzleSpecificModWrap(){let{cancel:t}=this.config;return t===!0||t===!1?"canonical-centered":t?.puzzleSpecificModWrap?t?.puzzleSpecificModWrap:t?.directional==="same-direction"?"preserve-sign":"canonical-centered"}puzzleSpecificSimplifyOptions(){return this.config.puzzleLoader?.puzzleSpecificSimplifyOptions??this.config.puzzleSpecificSimplifyOptions}};ir=class{traverseAlgNode(t,e){return Gh(this,t,e)}traverseIntoAlgNode(t,e){return Vh(this.traverseAlgNode(t,e))}},vr=class extends ir{traverseAlgNode(t){return Gh(this,t,void 0)}traverseIntoAlgNode(t){return Vh(this.traverseAlgNode(t))}};tv=class extends ir{#e;#t(){return this.#e??=new Map}#i(t){return{...t,depth:t.depth?t.depth-1:null}}*traverseAlg(t,e){if(e.depth===0){yield*t.childAlgNodes();return}let i=[],r=this.#i(e);for(let n of t.childAlgNodes())for(let s of this.traverseAlgNode(n,r))i=Array.from(ev(new he(i),s,r).childAlgNodes());for(let n of i)yield n}*traverseGrouping(t,e){if(e.depth===0){yield t;return}if(t.amount===0)return;let i=new Ut(this.traverseAlg(t.alg,this.#i(e)),t.amount);if(i.alg.experimentalIsEmpty())return;let r=this.#t().get(t);r&&(i.experimentalNISSPlaceholder=r,r.experimentalNISSGrouping=i),yield i}*traverseMove(t,e){yield t}#r(t,e,i){if(t.experimentalNumChildAlgNodes()===1&&e.experimentalNumChildAlgNodes()===1){let r=Array.from(t.childAlgNodes())[0]?.as(b),n=Array.from(e.childAlgNodes())[0]?.as(b);if(!(r&&n))return!1;if(n.quantum.isIdentical(r.quantum)||new Bh(i).puzzleSpecificSimplifyOptions()?.axis?.areQuantumMovesSameAxis(r.quantum,n.quantum))return!0}return!1}*traverseCommutator(t,e){if(e.depth===0){yield t;return}let i=this.#i(e),r=new fi(this.traverseAlg(t.A,i),this.traverseAlg(t.B,i));r.A.experimentalIsEmpty()||r.B.experimentalIsEmpty()||r.A.isIdentical(r.B)||r.A.isIdentical(r.B.invert())||this.#r(r.A,r.B,e)||(yield r)}*traverseConjugate(t,e){if(e.depth===0){yield t;return}let i=this.#i(e),r=new Wt(this.traverseAlg(t.A,i),this.traverseAlg(t.B,i));if(!r.B.experimentalIsEmpty()){if(r.A.experimentalIsEmpty()||r.A.isIdentical(r.B)||r.A.isIdentical(r.B.invert())||this.#r(r.A,r.B,e)){yield*t.B.childAlgNodes();return}yield r}}*traversePause(t,e){if(t.experimentalNISSGrouping){let i=new Ft;this.#t().set(t.experimentalNISSGrouping,i),yield i}else yield t}*traverseNewline(t,e){yield t}*traverseLineComment(t,e){yield t}},iv=Ot(tv);he=class Xn extends Br{#e;constructor(e){super(),this.#e=Array.from(Nh(e));for(let i of this.#e)if(!QS(i))throw new Error("An alg can only contain alg nodes.")}isIdentical(e){let i=e;if(!e.is(Xn))return!1;let r=Array.from(this.#e),n=Array.from(i.#e);if(r.length!==n.length)return!1;for(let s=0;s<r.length;s++)if(!r[s].isIdentical(n[s]))return!1;return!0}invert(){return new Xn(OS(Array.from(this.#e).map(e=>e.invert())))}*experimentalExpand(e=1,i){i??=1/0;for(let r of mc(this.#e,e))yield*r.experimentalExpand(e,i)}expand(e){return new Xn(this.experimentalExpand(1,e?.depth??1/0))}*experimentalLeafMoves(){for(let e of this.experimentalExpand())e.is(b)&&(yield e)}concat(e){return new Xn(Array.from(this.#e).concat(Array.from(Nh(e))))}experimentalIsEmpty(){for(let e of this.#e)return!1;return!0}static fromString(e){return Oh(e)}units(){return this.childAlgNodes()}*childAlgNodes(){for(let e of this.#e)yield e}experimentalNumUnits(){return this.experimentalNumChildAlgNodes()}experimentalNumChildAlgNodes(){return Array.from(this.#e).length}get type(){return zh("deprecated: type"),"sequence"}toString(e){let i="",r=null;for(let n of this.#e){r&&(i+=rv(r,n));let s=n.as(Ft)?.experimentalNISSGrouping;if(s){if(s.amount!==-1)throw new Error("Invalid NISS Grouping amount!");i+=`^(${s.alg.toString(e)})`}else n.as(Ut)?.experimentalNISSPlaceholder||(i+=n.toString(e));r=n}return i}experimentalSimplify(e){return new Xn(iv(this,e??{}))}simplify(e){return this.experimentalSimplify(e)}};LM={Sune:new he([new b("R",1),new b("U",1),new b("R",-1),new b("U",1),new b("R",1),new b("U",-2),new b("R",-1)]),AntiSune:new he([new b("R",1),new b("U",2),new b("R",-1),new b("U",-1),new b("R",1),new b("U",-1),new b("R",-1)]),SuneCommutator:new he([new fi(new he([new b("R",1),new b("U",1),new b("R",-2)]),new he([new Wt(new he([new b("R",1)]),new he([new b("U",1)]))]))]),Niklas:new he([new b("R",1),new b("U",-1),new b("L",-1),new b("U",1),new b("R",-1),new b("U",-1),new b("L",1),new b("U",1)]),EPerm:new he([new b("x",-1),new fi(new he([new Wt(new he([new b("R",1)]),new he([new b("U",-1)]))]),new he([new b("D",1)])),new fi(new he([new Wt(new he([new b("R",1)]),new he([new b("U",1)]))]),new he([new b("D",1)])),new b("x",1)]),FURURFCompact:new he([new Wt(new he([new b("F",1)]),new he([new fi(new he([new b("U",1)]),new he([new b("R",1)]))]))]),APermCompact:new he([new Wt(new he([new b("R",2)]),new he([new fi(new he([new b("F",2)]),new he([new b("R",-1),new b("B",-1),new b("R",1)]))]))]),FURURFMoves:new he([new b("F",1),new b("U",1),new b("R",1),new b("U",-1),new b("R",-1),new b("F",-1)]),TPerm:new he([new b("R",1),new b("U",1),new b("R",-1),new b("U",-1),new b("R",-1),new b("F",1),new b("R",2),new b("U",-1),new b("R",-1),new b("U",-1),new b("R",1),new b("U",1),new b("R",-1),new b("F",-1)]),HeadlightSwaps:new he([new Wt(new he([new b("F",1)]),new he([new Ut(new he([new fi(new he([new b("R",1)]),new he([new b("U",1)]))]),3)]))]),TriplePause:new he([new Ft,new Ft,new Ft])}});function vc(t,e,i){let r={};for(let n of t.orbits){let s=e[n.orbitName],o=i[n.orbitName];if(Sa(n.numOrientations,o))r[n.orbitName]=s;else if(Sa(n.numOrientations,s))r[n.orbitName]=o;else{let a=new Array(n.numPieces);if(n.numOrientations===1){for(let l=0;l<n.numPieces;l++)a[l]=s.permutation[o.permutation[l]];r[n.orbitName]={permutation:a,orientationDelta:s.orientationDelta}}else{let l=new Array(n.numPieces);for(let c=0;c<n.numPieces;c++)l[c]=(s.orientationDelta[o.permutation[c]]+o.orientationDelta[c])%n.numOrientations,a[c]=s.permutation[o.permutation[c]];r[n.orbitName]={permutation:a,orientationDelta:l}}}}return r}function Hh(t,e,i){let r={};for(let n of t.orbits){let s=e[n.orbitName],o=i[n.orbitName];if(Sa(n.numOrientations,o))r[n.orbitName]=s;else{let a=new Array(n.numPieces);if(n.numOrientations===1){for(let c=0;c<n.numPieces;c++)a[c]=s.pieces[o.permutation[c]];let l={pieces:a,orientation:s.orientation};r[n.orbitName]=l}else{let l=new Array(n.numPieces),c=s.orientationMod?new Array(n.numPieces):void 0;for(let h=0;h<n.numPieces;h++){let u=o.permutation[h],p=n.numOrientations;if(s.orientationMod){let d=s.orientationMod[u];c[h]=d,p=d||n.numOrientations}l[h]=(s.orientation[u]+o.orientationDelta[h])%p,a[h]=s.pieces[u]}let f={pieces:a,orientation:l};c&&(f.orientationMod=c),r[n.orbitName]=f}}}return r}function nv(t){let e=Wh.get(t);if(e)return e;let i=new Array(t),r=new Array(t);for(let s=0;s<t;s++)i[s]=s,r[s]=0;let n={permutation:i,orientationDelta:r};return Xh&&(Object.freeze(i),Object.freeze(r),Object.freeze(n)),Wh.set(t,n),n}function sv(t){let e={};for(let i of t.orbits)e[i.orbitName]=nv(i.numPieces);return Xh&&Object.freeze(e),e}function ov(t,e){function i(n,s){let o=n.toString(),a=t.definition.moves[o];if(a)return jn(t,a,s);let l=t.definition.derivedMoves?.[o];if(l)return jn(t,t.algToTransformation(l).transformationData,s)}let r=i(e.quantum,e.amount)??i(e,1)??i(e.invert,-1);if(r)return r;throw new Error(`Invalid move for KPuzzle (${t.name()}): ${e}`)}function Sa(t,e){e.permutation||console.log(e);let{permutation:i}=e,r=i.length;for(let n=0;n<r;n++)if(i[n]!==n)return!1;if(t>1){let{orientationDelta:n}=e;for(let s=0;s<r;s++)if(n[s]!==0)return!1}return!0}function av(t,e,i,r={}){for(let n=0;n<t.numPieces;n++)if(!r?.ignorePieceOrientations&&e.orientationDelta[n]!==i.orientationDelta[n]||!r?.ignorePiecePermutation&&e.permutation[n]!==i.permutation[n])return!1;return!0}function lv(t,e,i){for(let r of t.definition.orbits)if(!av(r,e[r.orbitName],i[r.orbitName]))return!1;return!0}function cv(t,e,i,r={}){for(let n=0;n<t.numPieces;n++)if(!r?.ignorePieceOrientations&&(e.orientation[n]!==i.orientation[n]||(e.orientationMod?.[n]??0)!==(i.orientationMod?.[n]??0))||!r?.ignorePieceIndices&&e.pieces[n]!==i.pieces[n])return!1;return!0}function fv(t,e,i){for(let r of t.definition.orbits)if(!cv(r,e[r.orbitName],i[r.orbitName]))return!1;return!0}function qh(t,e){let i={};for(let r of t.definition.orbits){let n=e[r.orbitName];if(Sa(r.numOrientations,n))i[r.orbitName]=n;else if(r.numOrientations===1){let s=new Array(r.numPieces);for(let o=0;o<r.numPieces;o++)s[n.permutation[o]]=o;i[r.orbitName]={permutation:s,orientationDelta:n.orientationDelta}}else{let s=new Array(r.numPieces),o=new Array(r.numPieces);for(let a=0;a<r.numPieces;a++){let l=n.permutation[a];s[l]=a,o[l]=(r.numOrientations-n.orientationDelta[a]+r.numOrientations)%r.numOrientations}i[r.orbitName]={permutation:s,orientationDelta:o}}}return i}function jn(t,e,i){if(i===1)return e;if(i<0)return jn(t,qh(t,e),-i);if(i===0){let{transformationData:s}=t.identityTransformation();return s}let r=e;i!==2&&(r=jn(t,e,Math.floor(i/2)));let n=vc(t.definition,r,r);return i%2===0?n:vc(t.definition,e,n)}function xc(t,e){return e?xc(e,t%e):t}function uv(t,e){let i=1;for(let r of t.orbits){let n=e.transformationData[r.orbitName],s=new Array(r.numPieces);for(let o=0;o<r.numPieces;o++)if(!s[o]){let a=o,l=0,c=0;for(;s[a]=!0,l=l+n.orientationDelta[a],c=c+1,a=n.permutation[a],a!==o;);l!==0&&(c=c*r.numOrientations/xc(r.numOrientations,Math.abs(l))),i=i*c/xc(i,c)}}return i}var Xh,Wh,qn,hv,dv,va,zi,so=A(()=>{xr();Xh=!1,Wh=new Map;qn=class mn{constructor(e,i){this.kpuzzle=e,this.transformationData=i}toJSON(){return{experimentalPuzzleName:this.kpuzzle.name(),transformationData:this.transformationData}}invert(){return new mn(this.kpuzzle,qh(this.kpuzzle,this.transformationData))}#e;isIdentityTransformation(){return this.#e??=this.isIdentical(this.kpuzzle.identityTransformation())}static experimentalConstructIdentity(e){let i=new mn(e,sv(e.definition));return i.#e=!0,i}isIdentical(e){return lv(this.kpuzzle,this.transformationData,e.transformationData)}apply(e){return this.applyTransformation(this.kpuzzle.toTransformation(e))}applyTransformation(e){if(this.kpuzzle!==e.kpuzzle)throw new Error(`Tried to apply a transformation for a KPuzzle (${e.kpuzzle.name()}) to a different KPuzzle (${this.kpuzzle.name()}).`);return this.#e?new mn(this.kpuzzle,e.transformationData):e.#e?new mn(this.kpuzzle,this.transformationData):new mn(this.kpuzzle,vc(this.kpuzzle.definition,this.transformationData,e.transformationData))}applyMove(e){return this.applyTransformation(this.kpuzzle.moveToTransformation(e))}applyAlg(e){return this.applyTransformation(this.kpuzzle.algToTransformation(e))}toKPattern(){return va.fromTransformation(this)}repetitionOrder(){return uv(this.kpuzzle.definition,this)}selfMultiply(e){return new mn(this.kpuzzle,jn(this.kpuzzle,this.transformationData,e))}};hv=class extends ir{traverseAlg(t,e){let i=null;for(let r of t.childAlgNodes())i?i=i.applyTransformation(this.traverseAlgNode(r,e)):i=this.traverseAlgNode(r,e);return i??e.identityTransformation()}traverseGrouping(t,e){let i=this.traverseAlg(t.alg,e);return new qn(e,jn(e,i.transformationData,t.amount))}traverseMove(t,e){return e.moveToTransformation(t)}traverseCommutator(t,e){let i=this.traverseAlg(t.A,e),r=this.traverseAlg(t.B,e);return i.applyTransformation(r).applyTransformation(i.invert()).applyTransformation(r.invert())}traverseConjugate(t,e){let i=this.traverseAlg(t.A,e),r=this.traverseAlg(t.B,e);return i.applyTransformation(r).applyTransformation(i.invert())}traversePause(t,e){return e.identityTransformation()}traverseNewline(t,e){return e.identityTransformation()}traverseLineComment(t,e){return e.identityTransformation()}},dv=Ot(hv);va=class ya{constructor(e,i){this.kpuzzle=e,this.patternData=i}toJSON(){return{experimentalPuzzleName:this.kpuzzle.name(),patternData:this.patternData}}static fromTransformation(e){let i=Hh(e.kpuzzle.definition,e.kpuzzle.definition.defaultPattern,e.transformationData);return new ya(e.kpuzzle,i)}apply(e){return this.applyTransformation(this.kpuzzle.toTransformation(e))}applyTransformation(e){if(e.isIdentityTransformation())return new ya(this.kpuzzle,this.patternData);let i=Hh(this.kpuzzle.definition,this.patternData,e.transformationData);return new ya(this.kpuzzle,i)}applyMove(e){return this.applyTransformation(this.kpuzzle.moveToTransformation(e))}applyAlg(e){return this.applyTransformation(this.kpuzzle.algToTransformation(e))}isIdentical(e){return fv(this.kpuzzle,this.patternData,e.patternData)}experimentalToTransformation(){if(!this.kpuzzle.canConvertDefaultPatternToUniqueTransformation())return null;let e={};for(let[i,r]of Object.entries(this.patternData)){let n={permutation:r.pieces,orientationDelta:r.orientation};e[i]=n}return new qn(this.kpuzzle,e)}experimentalIsSolved(e){if(!this.kpuzzle.definition.experimentalIsPatternSolved)throw new Error("`KPattern.experimentalIsPatternSolved()` is not supported for this puzzle at the moment.");return this.kpuzzle.definition.experimentalIsPatternSolved(this,e)}},zi=class{constructor(t,e){this.definition=t,this.experimentalPGNotation=e?.experimentalPGNotation}experimentalPGNotation;#e;lookupOrbitDefinition(t){return this.#e||=(()=>{let e={};for(let i of this.definition.orbits)e[i.orbitName]=i;return e})(),this.#e[t]}name(){return this.definition.name}identityTransformation(){return qn.experimentalConstructIdentity(this)}#t=new Map;moveToTransformation(t){typeof t=="string"&&(t=new b(t));let e=t.toString(),i=this.#t.get(e);if(i)return new qn(this,i);if(this.experimentalPGNotation){let n=this.experimentalPGNotation.lookupMove(t);if(!n)throw new Error(`could not map to internal move: ${t}`);return this.#t.set(e,n),new qn(this,n)}let r=ov(this,t);return this.#t.set(e,r),new qn(this,r)}algToTransformation(t){return typeof t=="string"&&(t=new he(t)),dv(t,this)}toTransformation(t){return typeof t=="string"?this.algToTransformation(t):t?.is?.(he)?this.algToTransformation(t):t?.is?.(b)?this.moveToTransformation(t):t}defaultPattern(){return new va(this,this.definition.defaultPattern)}#i;canConvertDefaultPatternToUniqueTransformation(){return this.#i??=(()=>{for(let t of this.definition.orbits){let e=new Array(t.numPieces).fill(!1);for(let i of this.definition.defaultPattern[t.orbitName].pieces)e[i]=!0;for(let i of e)if(!i)return!1}return!0})()}}});var Kn={};zr(Kn,{EXPERIMENTAL_PUZZLE_BASE_SHAPES:()=>Kv,EXPERIMENTAL_PUZZLE_CUT_TYPES:()=>Zv,ExperimentalPGNotation:()=>ex,PuzzleGeometry:()=>gd,Quat:()=>vt,getPG3DNamedPuzzles:()=>jv,getPuzzleDescriptionString:()=>Yv,getPuzzleGeometryByDesc:()=>md,getPuzzleGeometryByName:()=>Qv,parsePuzzleDescription:()=>pd,schreierSims:()=>ud});function pv(){return{4:{F:"#44ee00",D:"#f4f400",L:"#ff0000",R:"#2266ff"},6:{U:"#ffffff",F:"#44ee00",R:"#ff0000",D:"#f4f400",B:"#2266ff",L:"#ff8000"},8:{U:"#ffffff",F:"#44ee00",R:"#ff0000",D:"#f4f400",BB:"#2266ff",L:"#8800dd",BL:"#ff8000",BR:"#888888"},12:{U:"#ffffff",F:"#008800",R:"#ff0000",C:"#e8d0a0",A:"#3399ff",L:"#8800dd",E:"#ff66cc",BF:"#99ff00",BR:"#0000ff",BL:"#f4f400",I:"#ff8000",D:"#888888"},20:{R:"#f4f400",C:"#d41f69",F:"#008800",E:"#5c5c5c",L:"#8800dd",U:"#ffffff",A:"#007a89",G:"#ff0000",I:"#7d3b11",S:"#b9a1ff",H:"#3399ff",J:"#5ec4b6",B:"#44ee00",K:"#e8d0a0",D:"#aaaaaa",M:"#ff66cc",O:"#292929",P:"#ff8000",N:"#980000",Q:"#0000ff"}}}function Rv(t,e){let i={...t,moves:{}};for(let[r,n]of Object.entries(t.moves)){let s=r,o="";["v","w"].includes(r.at(-1))&&(s=r.slice(0,-1),o=r.slice(-1));let a=e.notationToExternal(b.fromString(s));if(!a)continue;let l=a+o;if(!l)throw new Error(`Missing external move name for: ${r.toString()}`);i.moves[l.toString()]=n}return i}function yn(t){if(!Rc[t]){let e=Array(t);for(let i=0;i<t;i++)e[i]=0;Rc[t]=e}return Rc[t]}function Gr(t){if(!bc[t]){let e=Array(t);for(let i=0;i<t;i++)e[i]=i;bc[t]=e}return bc[t]}function Cv(t){return new oo(Gr(t))}function Av(t){let e=BigInt(1);for(;t>1;)e*=BigInt(t),t--;return e}function Tv(t,e){if(t>e){let i=t;t=e,e=i}for(;t>0;){let i=e%t;e=t,t=i}return e}function od(t,e){return t/Tv(t,e)*e}function Ma(t,e){let i=b.fromString(e),r=t.notationToExternal(i);return r===null||i===r?e:r.toString()}function Lv(t,e){let i=t.moveops.length;if(i>30)throw new Error("Canon info too big for bitmask");let r=[],n=[];for(let o=0;o<i;o++){let a=t.moveops[o];r.push(a.order());let l=0;for(let c=0;c<i;c++){if(c===o)continue;let f=t.moveops[c];a.mul(f).equal(f.mul(a))&&(l|=1<<c)}n.push(l)}let s={};s[0]=1;for(let o=0;o<100;o++){let a=0,l={},c=0;for(let f in s){let h=+f,u=s[h];a+=u,c++;for(let p=0;p<r.length;p++)if((h>>p&1)===0&&(h&n[p]&(1<<p)-1)===0){let d=h&n[p]|1<<p;l[d]===void 0&&(l[d]=0),l[d]+=(r[p]-1)*u}}e(`${o}: canonseq ${a} states ${c}`),s=l}}function Cc(t){let e=new vt(0,0,0,0);for(let i=0;i<t.length;i++)e=e.sum(t[i]);return e.smul(1/t.length)}function Nv(t,e,i,r){let n=r[t].intersect3(r[e],r[i]);if(!n)return n;for(let s=0;s<r.length;s++)if(s!==t&&s!==e&&s!==i){let o=r[s].b*n.b+r[s].c*n.c+r[s].d*n.d;if(r[s].a>0&&o>r[s].a||r[s].a<0&&o<r[s].a)return!1}return n}function Iv(){let t=Math.sqrt(.5);return[new vt(t,t,0,0),new vt(t,0,t,0)]}function Pv(){return[new vt(.5,.5,.5,.5),new vt(.5,.5,.5,-.5)]}function kv(){let t=2*Math.PI/10,e=.5+.3*Math.sqrt(5),i=.5+.1*Math.sqrt(5),r=Math.sqrt(e*e+i*i);return e/=r,i/=r,[new vt(Math.cos(t),e*Math.sin(t),i*Math.sin(t),0),new vt(.5,.5,.5,.5)]}function Uv(){let t=.16666666666666666+Math.sqrt(5)/6,e=2/3+Math.sqrt(5)/3,i=Math.sqrt(t*t+e*e);t/=i,e/=i;let r=2*Math.PI/6;return[new vt(Math.cos(r),t*Math.sin(r),e*Math.sin(r),0),new vt(Math.cos(r),-t*Math.sin(r),e*Math.sin(r),0)]}function Fv(){let t=Math.sqrt(.5);return[new vt(.5,.5,.5,.5),new vt(t,0,0,t)]}function Ov(t){let e=[new vt(1,0,0,0)];for(let i=0;i<e.length;i++)for(let r=0;r<t.length;r++){let n=t[r].mul(e[i]),s=n.smul(-1),o=!1;for(let a=0;a<e.length;a++)if(n.dist(e[a])<Ra||s.dist(e[a])<Ra){o=!0;break}o||e.push(n)}return e}function id(t,e){let i=[],r=[];for(let n=0;n<e.length;n++){let s=t.rotateplane(e[n]),o=!1;for(let a=0;a<i.length;a++)if(s.dist(i[a])<Ra){o=!0;break}o||(i.push(s),r.push(e[n]))}return r}function rd(t){let e=[];for(let i=1;i<t.length;i++)for(let r=i+1;r<t.length;r++){let n=Nv(0,i,r,t);if(n){let s=!1;for(let o=0;o<e.length;o++)if(n.dist(e[o])<Ra){s=!0;break}s||e.push(n)}}for(;;){let i=!1;for(let r=0;r<e.length;r++){let n=(r+1)%e.length;if(t[0].dot(e[r].cross(e[n]))<0){let s=e[r];e[r]=e[n],e[n]=s,i=!0}}if(!i)break}return e}function ud(t,e){let i=t[0].p.length,r=Cv(i),n=[],s=[],o=[],a=[],l=[];function c(p){for(let d=p.p.length-1;d>=0;d--){let y=p.p[d];if(y!==d){if(!n[d][y])return!1;p=p.mul(s[d][y])}}return!0}function f(p,d,y){a[p].push(d),l[p].push(y);for(let g=0;g<n[p].length;g++)n[p][g]&&h(p,n[p][g].mul(d),y+o[p][g])}function h(p,d,y){let g=d.p[p];if(!n[p][g]){n[p][g]=d,s[p][g]=d.inv(),o[p][g]=y;for(let w=0;w<a[p].length;w++)h(p,d.mul(a[p][w]),y+l[p][w]);return}let m=d.mul(s[p][g]);c(m)||f(p-1,m,y+o[p][g])}function u(){n=[],s=[],a=[],o=[],l=[];for(let y=0;y<i;y++)n.push([]),s.push([]),o.push([]),a.push([]),l.push([]),n[y][y]=r,s[y][y]=r,o[y][y]=0;let p=0,d=BigInt(1);for(let y=0;y<t.length;y++){f(i-1,t[y],1),d=BigInt(1);let g=0,m=0,w=[],M=new zv;for(let x=0;x<i;x++){let P=0,T=0;for(let L=0;L<i;L++)n[x][L]&&(P++,T+=o[x][L],x!==L&&p++);g+=a[x].length,d*=BigInt(P),P>1&&M.multiply(P);let C=T/P;w.push(C),m+=C}e(`${y}: sz ${d} T ${g} sol ${m} none ${p} mults ${M.toString()}`)}return d}return u()}function Gv(t,e){let i=[];for(let r of t)for(let n of e)i.push(n.rotate(r));return i}function Wv(){return{4:[["F","D","L","R"]],6:[["F","D","L","U","R"],["R","F","","B",""]],8:[["F","D","L","R"],["D","F","BR",""],["BR","D","","BB"],["BB","BR","U","BL"]],12:[["U","F","","","",""],["F","U","R","C","A","L"],["R","F","","","E",""],["E","R","","BF","",""],["BF","E","BR","BL","I","D"]],20:[["R","C","F","E"],["F","R","L","U"],["L","F","A",""],["E","R","G","I"],["I","E","S","H"],["S","I","J","B"],["B","S","K","D"],["K","B","M","O"],["O","K","P","N"],["P","O","Q",""]]}}function qv(){return{4:[["FLR",[0,1,0]],["F",[0,0,1]]],6:[["U",[0,1,0]],["F",[0,0,1]]],8:[["U",[0,1,0]],["F",[0,0,1]]],12:[["U",[0,1,0]],["F",[0,0,1]]],20:[["GUQMJ",[0,1,0]],["F",[0,0,1]]]}}function xa(t,e){for(let i=0;i<t.length;i++)if(t[i][0].dist(e)<Et)return i;throw Error("Element not found")}function jv(){return Ic}function Yv(t){return Ic[t]}function pd(t){let e=t.split(/ /).filter(Boolean);if(e.length%2===0)return null;let i=e[0];if(i!=="o"&&i!=="c"&&i!=="i"&&i!=="d"&&i!=="t")return null;let r=[];for(let n=1;n<e.length;n+=2){if(e[n]!=="f"&&e[n]!=="v"&&e[n]!=="e")return null;r.push({cutType:e[n],distance:parseFloat(e[n+1])})}return{shape:i,cuts:r}}function md(t,e={}){let i=pd(t);if(i===null)throw Error("Could not parse the puzzle description");let r=new gd(i,Object.assign({},{allMoves:!0},e));return r.allstickers(),r.genperms(),r}function Qv(t,e){return md(Ic[t],e)}function $v(t,e,i){let r=!1;i-e[1]<e[0]&&(t=[t[2],t[3],t[0],t[1]],e=[i-e[1],i-e[0]],r=!0);let n=t[0],s="";if(e[0]===0&&e[1]===i)n=`${n}v`;else if(e[0]===e[1])e[1]>0&&(s=String(e[1]+1));else if(e[0]===0)n=n.toLowerCase(),e[1]>1&&(s=String(e[1]+1));else throw Error(`We only support slice and outer block moves right now. ${e}`);return[s+n,r]}function Jv(t,e){let i=[],r=0;for(;r<t.length;){r>0&&r<t.length&&t[r]==="_"&&r++;let n="";for(let s of e)t.substr(r).startsWith(s[1])&&s[1].length>n.length&&(n=s[1]);if(n!=="")i.push(n),r+=n.length;else throw Error(`Could not split ${t} into face names.`)}return i}function wa(t,e){return[t.b/e,-t.c/e,t.d/e]}function Ac(t,e){let i=[],r=t.length;for(let n=0;n<r;n++){let s=wa(t.get(r-n-1),e);i[3*n]=s[0],i[3*n+1]=s[1],i[3*n+2]=s[2]}return i}var Ec,jh,mv,gv,nd,yv,Sv,vv,Yh,Kh,Zh,sd,xv,Qh,_c,$h,Ev,wc,Jh,_v,Mc,ed,wv,Mv,bv,Rc,bc,oo,Tc,Dv,ad,Yn,cd,fd,hd,td,gn,vt,Ra,Ic,zv,Dc,Bv,Et,Vv,Hv,Xv,Kv,Zv,gd,ex,Zn=A(()=>{xr();Ec=class{constructor(t,e){this.facenames=t,e&&(this.gripnames=e);for(let i=0;this.prefixFree&&i<t.length;i++)for(let r=0;this.prefixFree&&r<t.length;r++)i!==r&&t[i].startsWith(t[r])&&(this.prefixFree=!1)}prefixFree=!0;gripnames=[];setGripNames(t){this.gripnames=t}splitByFaceNames(t){let e=[],i=0;for(;i<t.length;){i>0&&i<t.length&&t[i]==="_"&&i++;let r=-1;for(let n=0;n<this.facenames.length;n++)t.substr(i).startsWith(this.facenames[n])&&(r<0||this.facenames[n].length>this.facenames[r].length)&&(r=n);if(r>=0)e.push(r),i+=this.facenames[r].length;else throw new Error(`Could not split ${t} into face names.`)}return e}joinByFaceIndices(t){let e="",i=[];for(let r=0;r<t.length;r++)i.push(e),i.push(this.facenames[t[r]]),this.prefixFree||(e="_");return i.join("")}spinmatch(t,e){if(t===e)return!0;try{let i=this.splitByFaceNames(t),r=this.splitByFaceNames(e);if(i.length!==r.length&&i.length<3)return!1;for(let n=0;n<i.length;n++){for(let o=0;o<n;o++)if(i[n]===i[o])return!1;let s=!1;for(let o=0;o<r.length;o++)if(i[n]===r[o]){s=!0;break}if(!s)return!1}return!0}catch{return!1}}spinmatchv(t,e){return t.endsWith("v")&&e.endsWith("v")?this.spinmatch(t.slice(0,t.length-1),e.slice(0,e.length-1)):this.spinmatch(t,e)}unswizzle(t){(t.endsWith("v")||t.endsWith("w"))&&t[0]<="Z"&&(t=t.slice(0,t.length-1));let e=t.toUpperCase();for(let i=0;i<this.gripnames.length;i++){let r=this.gripnames[i];if(this.spinmatch(e,r))return r}return t}},jh=class{constructor(t,e){this.internalNames=t,this.externalNames=e}convertString(t,e,i){let r="";(t.endsWith("v")||t.endsWith("v"))&&t<="_"&&(r=t.slice(t.length-1),t=t.slice(0,t.length-1));let n=t.toUpperCase(),s=!1;return t!==n&&(s=!0,t=n),t=i.joinByFaceIndices(e.splitByFaceNames(t)),s&&(t=t.toLowerCase()),t+r}convert(t,e,i){let r=t.family,n=this.convertString(r,e,i);return r===n?t:new b(new ke(n,t.innerLayer,t.outerLayer),t.amount)}notationToInternal(t){return this.convert(t,this.externalNames,this.internalNames)}notationToExternal(t){return this.convert(t,this.internalNames,this.externalNames)}},mv=class{constructor(t,e){this.child=t,this.sw=e}notationToInternal(t){return t.family==="T"&&t.innerLayer===void 0&&t.outerLayer===void 0?new b(new ke("FLRv",t.innerLayer,t.outerLayer),t.amount):this.child.notationToInternal(t)}notationToExternal(t){let e=t.family;return e.length>0&&e[e.length-1]==="v"&&(e=e.substring(0,e.length-1)),this.sw.spinmatch(e,"FLUR")?new b(new ke("T",t.innerLayer,t.outerLayer),t.amount):this.child.notationToExternal(t)}},gv=class{constructor(t){this.child=t}notationToInternal(t){if(t.innerLayer===void 0&&t.outerLayer===void 0){if(Math.abs(t.amount)===1){if(t.family==="R++")return new b(new ke("L",3,2),-2*t.amount);if(t.family==="R--")return new b(new ke("L",3,2),2*t.amount);if(t.family==="D++")return new b(new ke("U",3,2),-2*t.amount);if(t.family==="D--")return new b(new ke("U",3,2),2*t.amount);if(t.family==="R_PLUSPLUS_")return new b(new ke("L",3,2),-2*t.amount);if(t.family==="D_PLUSPLUS_")return new b(new ke("U",3,2),-2*t.amount)}if(t.family==="y")return new b("Uv",t.amount);if(t.family==="x"&&Math.abs(t.amount)===2)return new b("ERv",t.amount/2)}return this.child.notationToInternal(t)}notationToExternal(t){return t.family==="ERv"&&Math.abs(t.amount)===1?new b(new ke("x",t.innerLayer,t.outerLayer),t.amount*2):t.family==="ILv"&&Math.abs(t.amount)===1?new b(new ke("x",t.innerLayer,t.outerLayer),-t.amount*2):t.family==="Uv"?new b(new ke("y",t.innerLayer,t.outerLayer),t.amount):t.family==="Dv"?new b("y",-t.amount):this.child.notationToExternal(t)}},nd=class{notationToInternal(t){return t}notationToExternal(t){return t}},yv=class{constructor(t){this.slices=t}notationToInternal(t){let e=t.family;return t.innerLayer||t.outerLayer||(e==="x"?t=new b("Rv",t.amount):e==="y"?t=new b("Uv",t.amount):e==="z"&&(t=new b("Fv",t.amount)),(this.slices&1)===1&&(e==="E"?t=new b(new ke("D",(this.slices+1)/2),t.amount):e==="M"?t=new b(new ke("L",(this.slices+1)/2),t.amount):e==="S"&&(t=new b(new ke("F",(this.slices+1)/2),t.amount))),this.slices>2&&(e==="e"?t=new b(new ke("D",this.slices-1,2),t.amount):e==="m"?t=new b(new ke("L",this.slices-1,2),t.amount):e==="s"&&(t=new b(new ke("F",this.slices-1,2),t.amount)))),t}notationToExternal(t){let e=t.family;if(!(t.innerLayer||t.outerLayer)){if(e==="Rv")return new b("x",t.amount);if(e==="Uv")return new b("y",t.amount);if(e==="Fv")return new b("z",t.amount);if(e==="Lv")return new b("x",-t.amount);if(e==="Dv")return new b("y",-t.amount);if(e==="Bv")return new b("z",-t.amount)}return t}},Sv={U:"frl",L:"fld",R:"fdr",B:"dlr",u:"FRL",l:"FLD",r:"FDR",b:"DLR",Uv:"FRLv",Lv:"FLDv",Rv:"FDRv",Bv:"DLRv",D:"D",F:"F",BL:"L",BR:"R"},vv={U:"FRL",L:"FLD",R:"FDR",B:"DLR",u:"frl",l:"fld",r:"fdr",b:"dlr",Uv:"FRLv",Lv:"FLDv",Rv:"FDRv",Bv:"DLRv",D:"D",F:"F",BL:"L",BR:"R",d:"d",f:"f",bl:"l",br:"r"},Yh={U:"FRL",L:"FLD",R:"FDR",B:"DLR"},Kh=new ke("y"),Zh=new ke("Dv"),sd=class{constructor(t){this.child=t}wcaHack=!1;map=Sv;notationToInternal(t){if(this.wcaHack&&t.innerLayer===2&&t.outerLayer===null){let i=Yh[t.family];if(i)return new b(new ke(i,t.innerLayer,t.outerLayer),t.amount)}let e=this.map[t.family];return e?new b(new ke(e,t.innerLayer,t.outerLayer),t.amount):Kh.isIdentical(t.quantum)?new b(Zh,-t.amount):null}notationToExternal(t){if(this.wcaHack&&t.innerLayer===2&&t.outerLayer===null){for(let[e,i]of Object.entries(Yh))if(this.child.spinmatch(t.family,i))return new b(new ke(e,t.innerLayer,t.outerLayer),t.amount)}for(let[e,i]of Object.entries(this.map))if(this.child.spinmatch(t.family,i))return new b(new ke(e,t.innerLayer,t.outerLayer),t.amount);return Zh.isIdentical(t.quantum)?new b(Kh,-t.amount):null}},xv=class extends sd{wcaHack=!0;constructor(t){super(t),this.map=vv}},Qh={U:"UBL",UL:"ULF",F:"UFR",UR:"URB",B:"DBL",D:"DFR",L:"DLF",R:"DRB",Uv:"UBLv",ULv:"ULFv",Fv:"UFRv",URv:"URBv",Bv:"DBLv",Dv:"DFRv",Lv:"DLFv",Rv:"DRBv"},_c=new ke("x"),$h=new ke("Rv"),Ev=new ke("Lv"),wc=new ke("y"),Jh=new ke("Uv"),_v=new ke("Dv"),Mc=new ke("z"),ed=new ke("Fv"),wv=new ke("Bv"),Mv=class{constructor(t){this.child=t}notationToInternal(t){if(t.innerLayer||t.outerLayer)return null;let e=Qh[t.family];return e?new b(new ke(e,t.outerLayer,t.innerLayer),t.amount):_c.isIdentical(t.quantum)?new b($h,t.amount):wc.isIdentical(t.quantum)?new b(Jh,t.amount):Mc.isIdentical(t.quantum)?new b(ed,t.amount):null}notationToExternal(t){for(let[e,i]of Object.entries(Qh))if(this.child.spinmatchv(t.family,i))return new b(new ke(e,t.innerLayer,t.outerLayer),t.amount);return $h.isIdentical(t.quantum)?new b(_c,t.amount):Ev.isIdentical(t.quantum)?new b(_c,-t.amount):Jh.isIdentical(t.quantum)?new b(wc,t.amount):_v.isIdentical(t.quantum)?new b(wc,-t.amount):ed.isIdentical(t.quantum)?new b(Mc,t.amount):wv.isIdentical(t.quantum)?new b(Mc,-t.amount):null}};bv=class{verbosity=0;allMoves=!1;outerBlockMoves=!1;vertexMoves=!1;addRotations=!1;moveList=null;fixedOrientation=!1;fixedPieceType=null;orientCenters=!1;includeCornerOrbits=!0;includeCenterOrbits=!0;includeEdgeOrbits=!0;excludeOrbits=[];optimizeOrbits=!1;grayCorners=!1;grayCenters=!1;grayEdges=!1;puzzleOrientation=null;puzzleOrientations=null;scrambleAmount=0;constructor(t={}){let e=Object.fromEntries(Object.entries(t).filter(([i,r])=>typeof r<"u"));Object.assign(this,e)}},Rc=[],bc=[];oo=class Ea{n;p;constructor(e){this.n=e.length,this.p=e}toString(){return`Perm[${this.p.join(" ")}]`}mul(e){let i=Array(this.n);for(let r=0;r<this.n;r++)i[r]=e.p[this.p[r]];return new Ea(i)}rmul(e){let i=Array(this.n);for(let r=0;r<this.n;r++)i[r]=this.p[e.p[r]];return new Ea(i)}inv(){let e=Array(this.n);for(let i=0;i<this.n;i++)e[this.p[i]]=i;return new Ea(e)}compareTo(e){for(let i=0;i<this.n;i++)if(this.p[i]!==e.p[i])return this.p[i]-e.p[i];return 0}toGap(){let e=[],i=new Array(this.n);for(let r=0;r<this.p.length;r++){if(i[r]||this.p[r]===r)continue;let n=[];for(let s=this.p[r];!i[s];s=this.p[s])n.push(1+s),i[s]=!0;e.push(`(${n.reverse().join(",")})`)}return e.join("")}toMathematica(){let e=[],i=new Array(this.n);for(let r=0;r<this.p.length;r++){if(i[r]||this.p[r]===r)continue;let n=[];for(let s=this.p[r];!i[s];s=this.p[s])n.push(1+s),i[s]=!0;e.push(`{${n.reverse().join(",")}}`)}return`Cycles[{${e.join(",")}}]`}order(){let e=1,i=new Array(this.n);for(let r=0;r<this.p.length;r++){if(i[r]||this.p[r]===r)continue;let n=0;for(let s=r;!i[s];s=this.p[s])n++,i[s]=!0;e=od(e,n)}return e}},Tc=class{constructor(t,e){this.size=t,this.mod=e}reassemblySize(){return Av(this.size)*BigInt(this.mod)**BigInt(this.size)}},Dv=0;ad=class ld{constructor(e,i,r,n,s,o,a){this.orbitnames=e,this.orbitdefs=i,this.solved=r,this.movenames=n,this.moveops=s,this.isRotation=o,this.forcenames=a}toKTransformationData(e){let i={};for(let r=0;r<this.orbitnames.length;r++)i[this.orbitnames[r]]=e.orbits[r].toKTransformationOrbitData();return i}toKPatternData(e){let i={};for(let r=0;r<this.orbitnames.length;r++)i[this.orbitnames[r]]=e.orbits[r].toKPatternOrbitData();return i}static transformToKTransformationData(e,i){let r={};for(let n=0;n<e.length;n++)r[e[n]]=i.orbits[n].toKTransformationOrbitData();return r}describeSet(e,i,r){let n=this.orbitdefs[e].size,s=new Array(n);for(let o=0;o<n;o++)s[o]=[];for(let o=0;o<this.movenames.length;o++){if(this.isRotation[o])continue;let a=this.movenames[o];this.forcenames[o]||(a=Ma(r,a),a[a.length-1]==="'"&&(a=a.substring(0,a.length-1)));let l=this.moveops[o].orbits[e];for(let c=0;c<n;c++)(l.perm[c]!==c||l.ori[c]!==0)&&s[c].push(a)}for(let o=0;o<n;o++)i.push(`# ${o+1} ${s[o].join(" ")}`)}toKsolve(e,i=new nd){let r=[];r.push(`Name ${e}`),r.push("");for(let n=0;n<this.orbitnames.length;n++)r.push(`Set ${this.orbitnames[n]} ${this.orbitdefs[n].size} ${this.orbitdefs[n].mod}`),this.describeSet(n,r,i);r.push(""),r.push("Solved");for(let n=0;n<this.orbitnames.length;n++)this.solved.orbits[n].appendDefinition(r,this.orbitnames[n],!1,!1);r.push("End");for(let n=0;n<this.movenames.length;n++){r.push("");let s=this.movenames[n];this.forcenames[n]||(s=Ma(i,this.movenames[n]));let o=!1;s[s.length-1]==="'"&&(o=!0,s=s.substring(0,s.length-1)),r.push(`Move ${s}`);for(let a=0;a<this.orbitnames.length;a++)o?this.moveops[n].orbits[a].inv().appendDefinition(r,this.orbitnames[a],!0):this.moveops[n].orbits[a].appendDefinition(r,this.orbitnames[a],!0);r.push("End")}return r}toKPuzzleDefinition(e){let i=[],r={};for(let s=0;s<this.orbitnames.length;s++){i.push({orbitName:this.orbitnames[s],numPieces:this.orbitdefs[s].size,numOrientations:this.orbitdefs[s].mod});let o=this.solved.orbits[s].toKTransformationOrbitData();r[this.orbitnames[s]]={pieces:o.permutation,orientation:o.orientationDelta}}let n={};if(e)for(let s=0;s<this.movenames.length;s++)n[this.movenames[s]]=this.toKTransformationData(this.moveops[s]);return{name:`PG3D #${++Dv}`,orbits:i,defaultPattern:r,moves:n}}optimize(){let e=[],i=[],r=[],n=[];for(let s=0;s<this.moveops.length;s++)n.push([]);for(let s=0;s<this.orbitdefs.length;s++){let o=this.orbitdefs[s].mod,a=this.orbitdefs[s].size,l=new td(a),c=new Array(this.orbitdefs[s].size);for(let p=0;p<a;p++)c[p]=!1;for(let p=0;p<this.moveops.length;p++)for(let d=0;d<a;d++)(this.moveops[p].orbits[s].perm[d]!==d||this.moveops[p].orbits[s].ori[d]!==0)&&(this.isRotation[p]||(c[d]=!0),l.union(d,this.moveops[p].orbits[s].perm[d]));let f=!0;if(o>1){f=!1;let p=new td(this.orbitdefs[s].size*o);for(let d=0;d<this.moveops.length;d++)for(let y=0;y<a;y++)if(this.moveops[d].orbits[s].perm[y]!==y||this.moveops[d].orbits[s].ori[y]!==0)for(let g=0;g<o;g++)p.union(y*o+g,this.moveops[d].orbits[s].perm[y]*o+(g+this.moveops[d].orbits[s].ori[y])%o);for(let d=0;!f&&d<a;d++)for(let y=1;y<o;y++)p.find(d*o)===p.find(d*o+y)&&(f=!0);for(let d=0;!f&&d<a;d++)for(let y=0;y<d;y++)this.solved.orbits[s].perm[d]===this.solved.orbits[s].perm[y]&&(f=!0)}let h=-1,u=!1;for(let p=0;p<this.orbitdefs[s].size;p++)if(c[p]){let d=l.find(p);h<0?h=d:h!==d&&(u=!0)}for(let p=0;p<this.orbitdefs[s].size;p++){if(!c[p]||l.find(p)!==p)continue;let y=[],g=[],m=0;for(let w=0;w<this.orbitdefs[s].size;w++)l.find(w)===p&&(y[m]=w,g[w]=m,m++);if(u?e.push(`${this.orbitnames[s]}_p${p}`):e.push(this.orbitnames[s]),f){i.push(new Tc(m,this.orbitdefs[s].mod)),r.push(this.solved.orbits[s].remapVS(y,m));for(let w=0;w<this.moveops.length;w++)n[w].push(this.moveops[w].orbits[s].remap(y,g,m))}else{i.push(new Tc(m,1)),r.push(this.solved.orbits[s].remapVS(y,m).killOri());for(let w=0;w<this.moveops.length;w++)n[w].push(this.moveops[w].orbits[s].remap(y,g,m).killOri())}}}return new ld(e,i,new hd(r),this.movenames,n.map(s=>new fd(s)),this.isRotation,this.forcenames)}scramble(e){this.solved=this.solved.mul(this.getScrambleTransformation(e))}getScrambleTransformation(e){e<100&&(e=100);let i=[];for(let n=0;n<this.moveops.length;n++)i[n]=this.moveops[n];for(let n=0;n<i.length;n++){let s=Math.floor(Math.random()*i.length),o=i[n];i[n]=i[s],i[s]=o}e<i.length&&(e=i.length);for(let n=0;n<e;n++){let s=Math.floor(Math.random()*i.length),o=Math.floor(Math.random()*i.length),a=Math.floor(Math.random()*this.moveops.length);i[s]=i[s].mul(i[o]).mul(this.moveops[a]),Math.random()<.1&&(i[s]=i[s].mul(this.moveops[a]))}let r=i[0];for(let n=1;n<i.length;n++)r=r.mul(i[n]);return r}reassemblySize(){let e=BigInt(1);for(let i=0;i<this.orbitdefs.length;i++)e*=this.orbitdefs[i].reassemblySize();return e}},Yn=class rr{constructor(e,i,r){this.perm=e,this.ori=i,this.orimod=r}static ktransformationCache=[];static e(e,i){return new rr(Gr(e),yn(e),i)}mul(e){let i=this.perm.length,r=new Array(i);if(this.orimod===1){for(let n=0;n<i;n++)r[n]=this.perm[e.perm[n]];return new rr(r,this.ori,this.orimod)}else{let n=new Array(i);for(let s=0;s<i;s++)r[s]=this.perm[e.perm[s]],n[s]=(this.ori[e.perm[s]]+e.ori[s])%this.orimod;return new rr(r,n,this.orimod)}}inv(){let e=this.perm.length,i=new Array(e),r=new Array(e);for(let n=0;n<e;n++)i[this.perm[n]]=n,r[this.perm[n]]=(this.orimod-this.ori[n])%this.orimod;return new rr(i,r,this.orimod)}equal(e){let i=this.perm.length;for(let r=0;r<i;r++)if(this.perm[r]!==e.perm[r]||this.ori[r]!==e.ori[r])return!1;return!0}killOri(){let e=this.perm.length;for(let i=0;i<e;i++)this.ori[i]=0;return this.orimod=1,this}toPerm(){let e=this.orimod;if(e===1)return new oo(this.perm);let i=this.perm.length,r=new Array(i*e);for(let n=0;n<i;n++)for(let s=0;s<e;s++)r[n*e+s]=e*this.perm[n]+(this.ori[n]+s)%e;return new oo(r)}identicalPieces(){let e=[],i=this.perm.length,r=[];for(let n=0;n<i;n++){let s=this.perm[n];if(e[s]===void 0){let o=[n];e[s]=!0;for(let a=n+1;a<i;a++)this.perm[a]===s&&o.push(a);r.push(o)}}return r}order(){return this.toPerm().order()}isIdentity(){let e=this.perm.length;if(this.perm===Gr(e)&&this.ori===yn(e))return!0;for(let i=0;i<e;i++)if(this.perm[i]!==i||this.ori[i]!==0)return!1;return!0}zeroOris(){let e=this.perm.length;if(this.ori===yn(e))return!0;for(let i=0;i<e;i++)if(this.ori[i]!==0)return!1;return!0}remap(e,i,r){let n=new Array(r),s=new Array(r);for(let o=0;o<r;o++)n[o]=i[this.perm[e[o]]],s[o]=this.ori[e[o]];return new rr(n,s,this.orimod)}remapVS(e,i){let r=new Array(i),n=new Array(i),s=0,o=[];for(let a=0;a<i;a++){let l=this.perm[e[a]];o[l]===void 0&&(o[l]=s++),r[a]=o[l],n[a]=this.ori[e[a]]}return new rr(r,n,this.orimod)}appendDefinition(e,i,r,n=!0){if(!(n&&this.isIdentity())&&(e.push(i),e.push(this.perm.map(s=>s+1).join(" ")),!this.zeroOris()))if(r){let s=new Array(this.ori.length);for(let o=0;o<s.length;o++)s[this.perm[o]]=this.ori[o];e.push(s.join(" "))}else e.push(this.ori.join(" "))}toKTransformationOrbitData(){let e=this.perm.length;return this.isIdentity()?(rr.ktransformationCache[e]||(rr.ktransformationCache[e]={permutation:Gr(e),orientationDelta:yn(e)}),rr.ktransformationCache[e]):{permutation:this.perm,orientationDelta:this.ori}}toKPatternOrbitData(){let e=this.perm.length;return{pieces:this.perm,orientation:this.ori,orientationMod:yn(e)}}},cd=class{constructor(t){this.orbits=t}internalMul(t){let e=[];for(let i=0;i<this.orbits.length;i++)e.push(this.orbits[i].mul(t.orbits[i]));return e}internalInv(){let t=[];for(let e of this.orbits)t.push(e.inv());return t}equal(t){for(let e=0;e<this.orbits.length;e++)if(!this.orbits[e].equal(t.orbits[e]))return!1;return!0}killOri(){for(let t of this.orbits)t.killOri();return this}toPerm(){let t=[],e=0;for(let r of this.orbits){let n=r.toPerm();t.push(n),e+=n.n}let i=new Array(e);e=0;for(let r of t){for(let n=0;n<r.n;n++)i[e+n]=e+r.p[n];e+=r.n}return new oo(i)}identicalPieces(){let t=[],e=0;for(let i of this.orbits){let r=i.orimod,n=i.identicalPieces();for(let s=0;s<n.length;s++)t.push(n[s].map(o=>o*r+e));e+=r*i.perm.length}return t}order(){let t=1;for(let e of this.orbits)t=od(t,e.order());return t}},fd=class _a extends cd{mul(e){return new _a(this.internalMul(e))}mulScalar(e){if(e===0)return this.e();let i=this;for(e<0&&(i=i.inv(),e=-e);(e&1)===0;)i=i.mul(i),e>>=1;if(e===1)return i;let r=i,n=this.e();for(;e>0;)e&1&&(n=n.mul(r)),e>1&&(r=r.mul(r)),e>>=1;return n}inv(){return new _a(this.internalInv())}e(){return new _a(this.orbits.map(e=>Yn.e(e.perm.length,e.orimod)))}},hd=class dd extends cd{mul(e){return new dd(this.internalMul(e))}},td=class{constructor(t){this.n=t,this.heads=new Array(t);for(let e=0;e<t;e++)this.heads[e]=e}heads;find(t){let e=this.heads[t];return this.heads[e]===e||(e=this.find(this.heads[e]),this.heads[t]=e),e}union(t,e){let i=this.find(t),r=this.find(e);i<r?this.heads[r]=i:i>r&&(this.heads[i]=r)}};gn=1e-9;vt=class Xt{constructor(e,i,r,n){this.a=e,this.b=i,this.c=r,this.d=n}mul(e){return new Xt(this.a*e.a-this.b*e.b-this.c*e.c-this.d*e.d,this.a*e.b+this.b*e.a+this.c*e.d-this.d*e.c,this.a*e.c-this.b*e.d+this.c*e.a+this.d*e.b,this.a*e.d+this.b*e.c-this.c*e.b+this.d*e.a)}toString(){return`Q[${this.a},${this.b},${this.c},${this.d}]`}dist(e){return Math.hypot(this.a-e.a,this.b-e.b,this.c-e.c,this.d-e.d)}len(){return Math.hypot(this.a,this.b,this.c,this.d)}cross(e){return new Xt(0,this.c*e.d-this.d*e.c,this.d*e.b-this.b*e.d,this.b*e.c-this.c*e.b)}dot(e){return this.b*e.b+this.c*e.c+this.d*e.d}normalize(){let e=Math.sqrt(this.dot(this));return new Xt(this.a/e,this.b/e,this.c/e,this.d/e)}makenormal(){return new Xt(0,this.b,this.c,this.d).normalize()}normalizeplane(){let e=Math.hypot(this.b,this.c,this.d);return new Xt(this.a/e,this.b/e,this.c/e,this.d/e)}smul(e){return new Xt(this.a*e,this.b*e,this.c*e,this.d*e)}sum(e){return new Xt(this.a+e.a,this.b+e.b,this.c+e.c,this.d+e.d)}sub(e){return new Xt(this.a-e.a,this.b-e.b,this.c-e.c,this.d-e.d)}angle(){return 2*Math.acos(this.a)}invrot(){return new Xt(this.a,-this.b,-this.c,-this.d)}det3x3(e,i,r,n,s,o,a,l,c){return e*(s*c-o*l)+i*(o*a-n*c)+r*(n*l-s*a)}rotateplane(e){let i=e.mul(new Xt(0,this.b,this.c,this.d)).mul(e.invrot());return i.a=this.a,i}orthogonal(){let e=Math.abs(this.b),i=Math.abs(this.c),r=Math.abs(this.d);return e<i&&e<r?this.cross(new Xt(0,1,0,0)).normalize():i<e&&i<r?this.cross(new Xt(0,0,1,0)).normalize():this.cross(new Xt(0,0,0,1)).normalize()}pointrotation(e){let i=this.normalize();if(e=e.normalize(),i.sub(e).len()<gn)return new Xt(1,0,0,0);let r=i.sum(e);r.len()<gn?r=r.orthogonal():r=r.normalize();let n=i.cross(r);return n.a=i.dot(r),n}unproject(e){return this.sum(e.smul(-this.dot(e)/(this.len()*e.len())))}rotatepoint(e){return e.mul(this).mul(e.invrot())}rotateface(e){return e.map(i=>i.rotatepoint(this))}intersect3(e,i){let r=this.det3x3(this.b,this.c,this.d,e.b,e.c,e.d,i.b,i.c,i.d);return Math.abs(r)<gn?!1:new Xt(0,this.det3x3(this.a,this.c,this.d,e.a,e.c,e.d,i.a,i.c,i.d)/r,this.det3x3(this.b,this.a,this.d,e.b,e.a,e.d,i.b,i.a,i.d)/r,this.det3x3(this.b,this.c,this.a,e.b,e.c,e.a,i.b,i.c,i.a)/r)}side(e){return e>gn?1:e<-gn?-1:0}cutface(e){let i=this.a,r=0,n=null;for(let s=0;s<e.length;s++)r|=1<<this.side(e[s].dot(this)-i)+1;if((r&5)===5){n=[];let s=e.map(o=>this.side(o.dot(this)-i));for(let o=-1;o<=1;o+=2){let a=[];for(let l=0;l<e.length;l++){(s[l]===o||s[l]===0)&&a.push(e[l]);let c=(l+1)%e.length;if(s[l]+s[c]===0&&s[l]!==0){let f=e[l].dot(this)-i,h=e[c].dot(this)-i,u=f/(f-h),p=e[l].smul(1-u).sum(e[c].smul(u));a.push(p)}}n.push(a)}}return n}cutfaces(e){let i=[];for(let r=0;r<e.length;r++){let n=e[r],s=this.cutface(n);s?(i.push(s[0]),i.push(s[1])):i.push(n)}return i}faceside(e){let i=this.a;for(let r=0;r<e.length;r++){let n=this.side(e[r].dot(this)-i);if(n!==0)return n}throw new Error("Could not determine side of plane in faceside")}sameplane(e){let i=this.normalize(),r=e.normalize();return i.dist(r)<gn||i.dist(r.smul(-1))<gn}makecut(e){return new Xt(e,this.b,this.c,this.d)}},Ra=1e-9;Ic={"2x2x2":"c f 0","3x3x3":"c f 0.333333333333333","4x4x4":"c f 0.5 f 0","5x5x5":"c f 0.6 f 0.2","6x6x6":"c f 0.666666666666667 f 0.333333333333333 f 0","7x7x7":"c f 0.714285714285714 f 0.428571428571429 f 0.142857142857143","8x8x8":"c f 0.75 f 0.5 f 0.25 f 0","9x9x9":"c f 0.777777777777778 f 0.555555555555556 f 0.333333333333333 f 0.111111111111111","10x10x10":"c f 0.8 f 0.6 f 0.4 f 0.2 f 0","11x11x11":"c f 0.818181818181818 f 0.636363636363636 f 0.454545454545455 f 0.272727272727273 f 0.0909090909090909","12x12x12":"c f 0.833333333333333 f 0.666666666666667 f 0.5 f 0.333333333333333 f 0.166666666666667 f 0","13x13x13":"c f 0.846153846153846 f 0.692307692307692 f 0.538461538461538 f 0.384615384615385 f 0.230769230769231 f 0.0769230769230769","20x20x20":"c f 0 f .1 f .2 f .3 f .4 f .5 f .6 f .7 f .8 f .9","30x30x30":"c f 0 f .066667 f .133333 f .2 f .266667 f .333333 f .4 f .466667 f .533333 f .6 f .666667 f .733333 f .8 f .866667 f .933333","40x40x40":"c f 0 f .05 f .1 f .15 f .2 f .25 f .3 f .35 f .4 f .45 f .5 f .55 f .6 f .65 f .7 f .75 f .8 f .85 f .9 f .95",skewb:"c v 0","master skewb":"c v 0.275","professor skewb":"c v 0 v 0.38","compy cube":"c v 0.915641442663986",helicopter:"c e 0.707106781186547","curvy copter":"c e 0.83",dino:"c v 0.577350269189626","little chop":"c e 0",pyramorphix:"t e 0",mastermorphix:"t e 0.346184634065199",pyraminx:"t v 0.333333333333333 v 1.66666666666667",tetraminx:"t v 0.333333333333333","master pyraminx":"t v 0 v 1 v 2","master tetraminx":"t v 0 v 1","professor pyraminx":"t v -0.2 v 0.6 v 1.4 v 2.2","professor tetraminx":"t v -0.2 v 0.6 v 1.4","royal pyraminx":"t v -0.333333333333333 v 0.333333333333333 v 1 v 1.66666666666667 v 2.33333333333333","royal tetraminx":"t v -0.333333333333333 v 0.333333333333333 v 1 v 1.66666666666667","emperor pyraminx":"t v -0.428571428571429 v 0.142857142857143 v 0.714285714285714 v 1.28571428571429 v 1.85714285714286 v 2.42857142857143","emperor tetraminx":"t v -0.428571428571429 v 0.142857142857143 v 0.714285714285714 v 1.28571428571429 v 1.85714285714286","Jing pyraminx":"t f 0","master pyramorphix":"t e 0.866025403784437",megaminx:"d f 0.7",gigaminx:"d f 0.64 f 0.82",teraminx:"d f 0.64 f 0.76 f 0.88",petaminx:"d f 0.64 f 0.73 f 0.82 f 0.91",examinx:"d f 0.64 f 0.712 f 0.784 f 0.856 f 0.928",zetaminx:"d f 0.64 f 0.7 f 0.76 f 0.82 f 0.88 f 0.94",yottaminx:"d f 0.64 f 0.6914 f 0.7429 f 0.7943 f 0.8457 f 0.8971 f 0.9486",pentultimate:"d f 0","master pentultimate":"d f 0.1","elite pentultimate":"d f 0 f 0.145905",starminx:"d v 0.937962370425399","starminx 2":"d f 0.23606797749979","pyraminx crystal":"d f 0.447213595499989",chopasaurus:"d v 0","big chop":"d e 0","skewb diamond":"o f 0",FTO:"o f 0.333333333333333","master FTO":"o f 0.5 f 0","Christopher's jewel":"o v 0.577350269189626",octastar:"o e 0","Trajber's octahedron":"o v 0.433012701892219","radio chop":"i f 0",icosamate:"i v 0","Regular Astrominx":"i v 0.18759247376021","Regular Astrominx + Big Chop":"i v 0.18759247376021 e 0",Redicosahedron:"i v 0.794654472291766","Redicosahedron with centers":"i v 0.84",Icosaminx:"i v 0.73","Eitan's star":"i f 0.61803398874989","2x2x2 + dino":"c f 0 v 0.577350269189626","2x2x2 + little chop":"c f 0 e 0","dino + little chop":"c v 0.577350269189626 e 0","2x2x2 + dino + little chop":"c f 0 v 0.577350269189626 e 0","megaminx + chopasaurus":"d f 0.61803398875 v 0","starminx combo":"d f 0.23606797749979 v 0.937962370425399"},zv=class{mult;constructor(){this.mult=[]}multiply(t){for(let e=2;e*e<=t;e++)for(;t%e===0;)this.mult[e]!==void 0?this.mult[e]++:this.mult[e]=1,t/=e;t>1&&(this.mult[t]!==void 0?this.mult[t]++:this.mult[t]=1)}toString(){let t="";for(let e=0;e<this.mult.length;e++)this.mult[e]!==void 0&&(t!==""&&(t+="*"),t+=e,this.mult[e]>1&&(t+=`^${this.mult[e]}`));return t}};Dc=class Lc{coords;length;constructor(e){this.coords=new Array(e.length*3);for(let i=0;i<e.length;i++)this.coords[3*i]=e[i].b,this.coords[3*i+1]=e[i].c,this.coords[3*i+2]=e[i].d;this.length=e.length}get(e){return new vt(0,this.coords[3*e],this.coords[3*e+1],this.coords[3*e+2])}centermass(){let e=0,i=0,r=0;for(let n=0;n<this.length;n++)e+=this.coords[3*n],i+=this.coords[3*n+1],r+=this.coords[3*n+2];return new vt(0,e/this.length,i/this.length,r/this.length)}rotate(e){let i=[];for(let r=0;r<this.length;r++)i.push(this.get(r).rotatepoint(e));return new Lc(i)}rotateforward(){let e=[];for(let i=1;i<this.length;i++)e.push(this.get(i));return e.push(this.get(0)),new Lc(e)}},Bv=class Nc{constructor(e,i,r){this.face=e,this.left=i,this.right=r}split(e){let i=e.cutface(this.face);return i!==null&&(this.left===void 0?(this.left=new Nc(i[0]),this.right=new Nc(i[1])):(this.left=this.left?.split(e),this.right=this.right?.split(e))),this}collect(e,i){return this.left===void 0?e.push(new Dc(this.face)):i?(this.left?.collect(e,!1),this.right?.collect(e,!0)):(this.right?.collect(e,!1),this.left?.collect(e,!0)),e}};Et=1e-9,Vv="PuzzleGeometry 0.1 Copyright 2018 Tomas Rokicki.",Hv=!1;Xv={4:{v:["DFR","DLF","DRL","FLR"],e:["FR","LF","DF","DL","RD","RL"],c:["DF","FD","RL","LR"]},6:{v:["URF","UBR","ULB","UFL","DFR","DRB","DBL","DLF"],e:["UF","UR","UB","UL","DF","DR","DB","DL","FR","FL","BR","BL"],c:["UB","LU","FU","RU","BU","DF"]},8:{v:["UBBBRR","URFL","ULBLBB","DBRBBBL","DBLLF","DFRBR"],e:["UL","UBB","UR","BRD","BLD","FD","BRR","FR","FL","BLL","BLBB","BRBB"],c:["BBU","LU","RU","BRD","FD","BLD","DF","UBB"]},12:{v:["URF","UFL","ULBL","UBLBR","UBRR","DEBF","DBFI","DIA","DAC","DCE","LAI","ALF","FCA","CFR","REC","ERBR","BRBFE","BFBRBL","BLIBF","IBLL"],e:["UF","UR","UBR","UBL","UL","ER","EBR","EBF","ED","EC","IBF","IBL","IL","IA","ID","AC","CF","FA","BFBR","BRBL","BLBF","CD","AD","AL","FL","FR","CR","BFD","BRR","BLL"],c:["UF","FU","DBF","BFD","AD","CD","BRU","BLU","LA","RA","EBR","IBL"]},20:{v:["FLPQU","FUGER","FRCAL","HCREI","ISBDH","JSIEG","BSJMK","MQPOK","ONDBK","NOPLA","UQMJG","DNACH"],e:["FU","FL","FR","EG","ER","EI","SJ","SI","SB","KM","KB","KO","PQ","PO","PL","UG","JG","MQ","UQ","HC","HD","ND","NA","JM","CA","AL","CR","HI","DB","NO"],c:["FU","UF","GE","EG","JS","SJ","MK","KM","QP","PQ","LA","AL","RC","CR","IH","HI","BD","DB","ON","NO"]}};Kv=["c","t","o","d","i"],Zv=["f","v","e"];gd=class{constructor(t,e){this.puzzleDescription=t;let i="genperms";this.options=new bv(e),this.options.verbosity>0&&console.log(this.header("# "));let{shape:r,cuts:n}=t;this.movePlanes=[],this.movePlanesFiltered=[],this.faces=[],this.cubies=[];let s=null;switch(r){case"c":{s=Iv();break}case"o":{s=Fv();break}case"i":{s=Uv();break}case"t":{s=Pv();break}case"d":{s=kv();break}default:throw Error(`Bad shape argument: ${r}`)}this.rotations=Ov(s),this.options.verbosity&&console.log(`# Rotations: ${this.rotations.length}`);let o=s[0];this.basePlaneRotations=id(o,this.rotations);let a=this.basePlaneRotations.map(O=>o.rotateplane(O));this.basePlanes=a,this.baseFaceCount=a.length;let l=Wv()[a.length];this.net=l,this.colors=pv()[a.length],this.options.verbosity>0&&console.log(`# Base planes: ${a.length}`);let c=rd(a),f=new vt(0,0,0,0);this.options.verbosity>0&&console.log(`# Face vertices: ${c.length}`);let h=a[0].makenormal(),u=c[0].sum(c[1]).makenormal(),p=c[0].makenormal(),d=new vt(1,h.b,h.c,h.d);this.options.verbosity>0&&console.log(`# Boundary is ${d}`);let g=id(d,this.rotations).map(O=>d.rotateplane(O)),m=rd(g);this.edgeDistance=m[0].sum(m[1]).smul(.5).dist(f),this.vertexDistance=m[0].dist(f);let w=[],M=[],x=!1,P=!1,T=!1;for(let O of n){let te=null,ue=0;switch(O.cutType){case"f":{te=h,ue=1,x=!0;break}case"v":{te=p,ue=this.vertexDistance,T=!0;break}case"e":{te=u,ue=this.edgeDistance,P=!0;break}default:throw Error(`Bad cut argument: ${O.cutType}`)}w.push(te.makecut(O.distance)),M.push(O.distance<ue)}this.options.addRotations&&(x||w.push(h.makecut(10)),T||w.push(p.makecut(10)),P||w.push(u.makecut(10))),this.baseFaces=[];for(let O of this.basePlaneRotations){let te=O.rotateface(m);this.baseFaces.push(new Dc(te))}let C=[],L=[],S=[],v=[],D=m.length;function U(O,te,ue){for(let se of O)if(se[0].dist(te)<Et){se.push(ue);return}O.push([te,ue])}for(let O=0;O<this.basePlaneRotations.length;O++){let te=this.basePlaneRotations[O].rotateface(m);for(let ue=0;ue<te.length;ue++){let se=(ue+1)%te.length,we=te[ue].sum(te[se]).smul(.5);U(v,we,O)}}let I=[];for(let O=0;O<this.basePlaneRotations.length;O++){let te=this.basePlaneRotations[O].rotateface(m),ue=[];for(let se=0;se<te.length;se++){let we=(se+1)%te.length,N=te[se].sum(te[we]).smul(.5),rt=v[xa(v,N)];if(O===rt[1])ue.push(rt[2]);else if(O===rt[2])ue.push(rt[1]);else throw Error("Could not find edge")}I.push(ue)}let V={},q=[];q.push(l[0][0]),V[l[0][0]]=0,q[I[0][0]]=l[0][1],V[l[0][1]]=I[0][0];for(let O of l){let te=O[0],ue=V[te];if(ue===void 0)throw Error("Bad edge description; first edge not connected");let se=-1;for(let we=0;we<I[ue].length;we++){let N=q[I[ue][we]];if(N!==void 0&&N===O[1]){se=we;break}}if(se<0)throw Error("First element of a net not known");for(let we=2;we<O.length;we++){if(O[we]==="")continue;let N=I[ue][(we+se-1)%D],rt=q[N];if(rt!==void 0&&rt!==O[we])throw Error("Face mismatch in net");q[N]=O[we],V[O[we]]=N}}for(let O=0;O<this.basePlaneRotations.length;O++){let te=this.basePlaneRotations[O].rotateface(m),ue=d.rotateplane(this.basePlaneRotations[O]),se=q[O];C.push([te,se]),L.push([ue,se])}for(let O=0;O<this.basePlaneRotations.length;O++){let te=this.basePlaneRotations[O].rotateface(m),ue=q[O];for(let se=0;se<te.length;se++){let we=(se+1)%te.length,N=te[se].sum(te[we]).smul(.5),rt=(se+2)%te.length,Ke=te[we].sum(te[rt]).smul(.5),Ze=xa(v,N),De=xa(v,Ke);U(S,te[we],[ue,De,Ze])}}this.swizzler=new Ec(C.map(O=>O[1]));let H=this.swizzler.prefixFree?"":"_",Z=Xv[this.baseFaceCount],G=[];for(let O=0;O<this.baseFaceCount;O++)G[1<<O]=O;{let O=Z.v;for(let te of O){let ue=this.swizzler.splitByFaceNames(te),se=0;for(let we of ue)se|=1<<we;G[se]=ue[0]}}{let O=Z.e;for(let te of O){let ue=this.swizzler.splitByFaceNames(te),se=0;for(let we of ue)se|=1<<we;G[se]=ue[0]}}{let O=Z.c;for(let te of O){let ue=this.swizzler.splitByFaceNames(te),se=1<<ue[0]|1<<this.baseFaceCount;G[se]=ue[1]}}for(let O=0;O<v.length;O++){if(v[O].length!==3)throw Error(`Bad length in edge names ${v[O]}`);let te=v[O][1],ue=v[O][2],se=q[te],we=q[ue],N=1<<te|1<<ue;G[N]===te?se=se+H+we:se=we+H+se,v[O]=[v[O][0],se]}for(let O=0;O<S.length;O++){let te=0;if(S[O].length<4)throw Error("Bad length in vertex names");for(let N=1;N<S[O].length;N++)te|=1<<V[S[O][N][0]];let ue=G[te],se=-1;for(let N=1;N<S[O].length;N++)ue===V[S[O][N][0]]&&(se=N);if(se<0)throw Error("Internal error; couldn't find face name when fixing corners");let we="";for(let N=1;N<S[O].length;N++){N===1?we=S[O][se][0]:we=we+H+S[O][se][0];for(let rt=1;rt<S[O].length;rt++)if(S[O][se][1]===S[O][rt][2]){se=rt;break}}S[O]=[S[O][0],we]}this.markedFaceLookup=G,this.options.verbosity>1&&(console.log(`# Face names: ${C.map(O=>O[1]).join(" ")}`),console.log(`# Edge names: ${v.map(O=>O[1]).join(" ")}`),console.log(`# Vertex names: ${S.map(O=>O[1]).join(" ")}`));let $=[];for(let O of L)$.push([O[0].makenormal(),O[1],"f"]);for(let O of v)$.push([O[0].makenormal(),O[1],"e"]);for(let O of S)$.push([O[0].makenormal(),O[1],"v"]);this.faceNames=C,this.facePlanes=L,this.edgeNames=v,this.vertexNames=S,this.geometryNormals=$;let ne=$.map(O=>O[1]);this.swizzler.setGripNames(ne),this.options.verbosity>0&&console.log(`# Distances: face 1 edge ${this.edgeDistance} vertex ${this.vertexDistance}`);for(let O=0;O<w.length;O++)for(let te of this.rotations){let ue=w[O].rotateplane(te),se=!1;for(let we of this.movePlanes)if(ue.sameplane(we)){se=!0;break}se||(this.movePlanes.push(ue),M[O]&&this.movePlanesFiltered.push(ue))}let Se=new Bv(m),Ce=this.movePlanesFiltered.slice(),Oe=31;for(let O=0;O<Ce.length;O++){let te=O+Math.floor((Ce.length-O)*(Oe/65536));Se=Se.split(Ce[te]),Ce[te]=Ce[O],Oe=(Oe*1657+101)%65536}let Y=Se.collect([],!0);this.faces=Y,this.options.verbosity>0&&console.log(`# Faces is now ${Y.length}`),this.stickersPerFace=Y.length;let re=[],le=Cc(m);for(let O of this.rotations){let te=O.rotateface(m);le.dist(Cc(te))<Et&&re.push(O)}let ce=new Array(Y.length),_e=[];for(let O=0;O<Y.length;O++){let te=Y[O].centermass();_e.push([le.dist(te),te,O])}_e.sort((O,te)=>O[0]-te[0]);for(let O=0;O<Y.length;O++){let te=_e[O][2];if(!ce[te]){ce[te]=!0;for(let ue of re){let se=Y[te].rotate(ue),we=se.centermass();for(let N=O+1;N<Y.length&&!(_e[N][0]-_e[O][0]>Et);N++){let rt=_e[N][2];if(!ce[rt]&&we.dist(_e[N][1])<Et){ce[rt]=!0,Y[rt]=se;break}}}}}this.shortestEdge=1e99;for(let O of Y)for(let te=0;te<O.length;te++){let ue=(te+1)%O.length,se=O.get(te).dist(O.get(ue));se<this.shortestEdge&&(this.shortestEdge=se)}this.options.verbosity>0&&console.log(`# Short edge is ${this.shortestEdge}`),r==="c"&&x&&!P&&!T&&(this.addNotationMapper="NxNxNCubeMapper",this.setReidOrSpeffzOrder=!0),r==="c"&&T&&!x&&!P&&(this.addNotationMapper="SkewbMapper"),r==="t"&&(T||x)&&!P&&(this.addNotationMapper="PyraminxOrTetraminxMapper"),r==="o"&&x&&(this.notationMapper=new jh(this.swizzler,new Ec(["F","D","L","BL","R","U","BR","B"])),P||T||(this.addNotationMapper="FTOMapper")),r==="d"&&x&&(this.addNotationMapper="MegaminxMapper",this.notationMapper=new jh(this.swizzler,new Ec(["U","F","L","BL","BR","R","FR","FL","DL","B","DR","D"])))}rotations;basePlaneRotations;basePlanes;faceNames;facePlanes;edgeNames;vertexNames;geometryNormals;movePlanes;movePlanesFiltered;movePlaneSets;movePlaneNormals;movesetorders;movesetgeos;baseFaces;faces;faceCenterMass;baseFaceCount;stickersPerFace;shortestEdge;markedFaceLookup;cubies;vertexDistance;edgeDistance;faceToCubie;faceToCubieOrd;moveRotations;faceListHash;cubieSetNames;cubieOrbitSizes;cubieSetNums;cubieOrdNums;orbitOrientations;cubieValueMap;cubieSetCubies;cmovesBySlice=[];parsedMoveList;duplicatedFaces=[];duplicatedCubies=[];fixedCubie=-1;net=[];colors=[];swizzler;notationMapper=new nd;addNotationMapper="";setReidOrSpeffzOrder=!1;options;keyface(t){return this.keyface2(t.centermass())}keyface2(t){let e="",i=String.fromCharCode;for(let r of this.movePlaneSets)if(r.length>0){let n=t.dot(r[0]),s=0,o=1;for(;o*2<=r.length;)o*=2;for(;o>0;o>>=1)s+o<=r.length&&n>r[s+o-1].a&&(s+=o);if(s<47)e=e+i(33+s);else if(s<2256)e=e+i(80+Math.floor(s/47)-1)+i(33+s%47);else if(s<2256+2209*47)e=e+i(80+Math.floor((s-47)/2209-1))+i(80+Math.floor((s-47)/47)%47)+i(33+s%47);else throw Error("Too many slices for cubie encoding")}return e}keyface3(t){let e=t.centermass(),i=[];for(let r of this.movePlaneSets)if(r.length>0){let n=e.dot(r[0]),s=0,o=1;for(;o*2<=r.length;)o*=2;for(;o>0;o>>=1)s+o<=r.length&&n>r[s+o-1].a&&(s+=o);i.push(s)}return i}findface(t){let e=this.keyface2(t),i=this.faceListHash.get(e);if(i.length===1)return i[0];for(let r=0;r+1<i.length;r++){let n=this.faceListHash.get(e)[r];if(Math.abs(t.dist(this.faceCenterMass[n]))<Et)return n}return i[i.length-1]}project2d(t,e,i){let r=this.faceNames[t][0],n=(e+1)%r.length,s=this.basePlanes[t],o=r[n].sub(r[e]),a=o.len();o=o.normalize();let l=o.cross(s).normalize(),c=i[1].sub(i[0]),f=c.len()/a;c=c.normalize();let h=c.b,u=c.c,p=o.smul(h).sub(l.smul(u)).smul(f),d=l.smul(h).sum(o.smul(u)).smul(f),y=new vt(0,i[0].b-p.dot(r[e]),i[0].c-d.dot(r[e]),0);return[p,d,y]}upperStringToBitSet(t){let e=0;for(let i=0;i<t.length;i++)e|=1<<t.charCodeAt(i)-65;return e}allstickers(){let t="allstickers";this.faces=Gv(this.basePlaneRotations,this.faces),this.options.verbosity>0&&console.log(`# Total stickers is now ${this.faces.length}`),this.faceCenterMass=new Array(this.faces.length);for(let S=0;S<this.faces.length;S++)this.faceCenterMass[S]=this.faces[S].centermass();let e=[],i=[];for(let S of this.movePlanes){let v=S.makenormal(),D=!1;for(let U of i)v.sameplane(U.makenormal())&&(D=!0);D||(i.push(v),e.push([]))}for(let S of this.movePlanesFiltered){let v=S.makenormal();for(let D=0;D<i.length;D++)if(v.sameplane(i[D])){e[D].push(S);break}}for(let S=0;S<e.length;S++){let v=e[S].map(U=>U.normalizeplane()),D=i[S];for(let U=0;U<v.length;U++)v[U].makenormal().dist(D)>Et&&(v[U]=v[U].smul(-1));v.sort((U,I)=>U.a-I.a),e[S]=v}this.movePlaneSets=e,this.movePlaneNormals=i;let r=e.map(S=>S.length);this.options.verbosity>0&&console.log(`# Move plane sets: ${r}`);let n=[];for(let S=0;S<e.length;S++)n.push([]);for(let S of this.rotations){if(Math.abs(Math.abs(S.a)-1)<Et)continue;let v=S.makenormal();for(let D=0;D<e.length;D++)if(v.sameplane(i[D])){n[D].push(S);break}}this.moveRotations=n;for(let S=0;S<n.length;S++){let v=n[S],D=v[0].makenormal();for(let U=0;U<v.length;U++)D.dist(v[U].makenormal())>Et&&(v[U]=v[U].smul(-1));v.sort((U,I)=>U.angle()-I.angle()),n[S][0].dot(i[S])<0&&v.reverse()}let s=n.map(S=>1+S.length);this.movesetorders=s;let o=[],a="?";for(let S=0;S<e.length;S++){let v=i[S],D=null,U=null;for(let I of this.geometryNormals){let V=v.dot(I[0]);Math.abs(V-1)<Et?(U=[I[1],I[2]],a=I[2]):Math.abs(V+1)<Et&&(D=[I[1],I[2]],a=I[2])}if(U===null||D===null)throw Error("Saw positive or negative sides as null");o.push([U[0],U[1],D[0],D[1],1+e[S].length]),this.addNotationMapper==="NxNxNCubeMapper"&&a==="f"&&(this.notationMapper=new yv(1+e[S].length),this.addNotationMapper=""),this.addNotationMapper==="SkewbMapper"&&e[0].length===1&&(this.notationMapper=new Mv(this.swizzler),this.addNotationMapper=""),this.addNotationMapper==="PyraminxOrTetraminxMapper"&&(e[0].length===2&&e[0][0].a===.333333333333333&&e[0][1].a===1.66666666666667?(this.notationMapper=new sd(this.swizzler),this.addNotationMapper=""):(this.notationMapper=new xv(this.swizzler),this.addNotationMapper="")),this.addNotationMapper==="MegaminxMapper"&&a==="f"&&(1+e[S].length===3&&(this.notationMapper=new gv(this.notationMapper)),this.addNotationMapper=""),this.addNotationMapper==="FTOMapper"&&a==="f"&&(1+e[S].length===3&&(this.notationMapper=new mv(this.notationMapper,this.swizzler)),this.addNotationMapper="")}this.movesetgeos=o;let l=new Map,c=this.faces;for(let S=0;S<c.length;S++){let v=c[S],D=this.keyface(v);if(!l.get(D))l.set(D,[S]);else{let U=l.get(D);if(U.push(S),U.length===this.baseFaceCount){this.options.verbosity>0&&console.log("# Splitting core.");for(let I=0;I<U.length;I++){let V=`${D} ${I}`;l.set(V,[U[I]])}}}}this.faceListHash=l,this.options.verbosity>0&&console.log(`# Cubies: ${l.size}`);let f=[],h=[],u=[];for(let S of l.values())if(S.length!==this.baseFaceCount){if(S.length>1){let v=S.map(q=>c[q].centermass()),D=Cc(v);for(let q=0;S.length>2;q++){let H=!1;for(let Z=0;Z<S.length;Z++){let G=(Z+1)%S.length;if(D.dot(v[Z].cross(v[G]))<0){let $=v[Z];v[Z]=v[G],v[G]=$;let ne=S[Z];S[Z]=S[G],S[G]=ne,H=!0}}if(!H)break;if(q>1e3)throw Error("Bad epsilon math; too close to border")}let U=0;for(let q of S)U|=1<<Math.floor(q/this.stickersPerFace);let I=this.markedFaceLookup[U],V=-1;for(let q=0;q<S.length;q++)Math.floor(S[q]/this.stickersPerFace)===I&&(V=q);if(V<0)throw Error("Could not find marked face in list");if(V!==0){let q=S.slice();for(let H=0;H<S.length;H++)S[H]=q[(V+H)%S.length]}}for(let v=0;v<S.length;v++){let D=S[v];h[D]=f.length,u[D]=v}f.push(S)}this.cubies=f,this.faceToCubie=h,this.faceToCubieOrd=u;let p=["?","CENTERS","EDGES","CORNERS","C4RNER","C5RNER"],d=[],y=[0,0,0,0,0,0],g=[],m=[],w=0,M=[],x=[],P=[],T=[],C=S=>f[S].map(v=>this.getfaceindex(v)).join(" "),L=[];for(let S=0;S<f.length;S++){let v=f[S];if(v.length===0||m[S])continue;let D={},U=0;P.push(0),L.push([]);let I=v.length,V=y[I]++,q=p[I];(q===void 0||I===this.baseFaceCount)&&(q="CORE"),q=q+(V===0?"":V+1),d[w]=q,g[w]=I;let H=[S],Z=0;for(m[S]=!0;Z<H.length;){let G=H[Z++],$=C(G);if((v.length>1||D[$]===void 0)&&(D[$]=U++),T[G]=D[$],M[G]=w,L[w].push(G),x[G]=P[w]++,H.length<this.rotations.length){let ne=this.faceCenterMass[f[G][0]];for(let Se of n){let Ce=this.faceToCubie[this.findface(ne.rotatepoint(Se[0]))];m[Ce]||(H.push(Ce),m[Ce]=!0)}}}w++}if(this.setReidOrSpeffzOrder&&4<=this.stickersPerFace){let S=[["UF","UR","UB","UL","DF","DR","DB","DL","FR","FL","BR","BL"],["UFR","URB","UBL","ULF","DRF","DFL","DLB","DBR"],["U","L","F","R","B","D"]],v=["U","L","F","R","B","D"],D=["UBL","URB","UFR","ULF","UBL","ULF","DFL","DLB","ULF","UFR","DRF","DFL","UFR","URB","DBR","DRF","URB","UBL","DLB","DBR","DFL","DRF","DBR","DLB"],U={};for(let Z of S)for(let G=0;G<Z.length;G++)U[this.upperStringToBitSet(Z[G])]=G;let I={},V={},q=[],H=[-1,0,1,0,2,-1,1,-1,3,3,-1,-1,2,-1,-1,-1];if(this.stickersPerFace>9){for(let Z of this.vertexNames)I[this.upperStringToBitSet(Z[1])]=Z[0];for(let Z=0;Z<6;Z++)V[v[Z]]=Z;for(let Z of D)q.push(I[this.upperStringToBitSet(Z)])}for(let Z of L)for(let G of Z)if(f[G].length===3||this.stickersPerFace<=9){let $=0;for(let ne of f[G])$|=1<<this.faceNames[this.getfaceindex(ne)][1].charCodeAt(0)-65;x[G]=U[$]}else if(f[G].length<=2){let $=[];for(let ne=0;ne<f[G].length;ne++){let Se=f[G][ne],Ce=V[this.faceNames[this.getfaceindex(Se)][1]],Oe=1e20,Y=this.faces[Se].centermass(),re=0;for(let le=0;le<4;le++){let ce=Y.dist(q[4*Ce+le]);ce+Et<Oe?(Oe=ce,re=1<<le):ce<Oe+Et&&(re|=1<<le)}if(re=H[re],re>=0){let le=4*Ce+re;$.push([le,D[le]])}}if($.length>0){if(f[G].length===1)x[G]=$[0][0];else if($.length===2&&$[0][1]===$[1][1]){let ne=0,Se=v[$[0][0]>>2],Ce=v[$[1][0]>>2],Oe=$[0][1];for(;ne<3&&(Se===Oe.charAt(ne)||Ce===Oe.charAt(ne));)ne++;if(ne===3)throw Error("Internal error (2) in Speffz");if(ne=(ne+1)%3,Se===Oe.charAt(ne))x[G]=$[0][0];else if(Ce===Oe.charAt(ne))x[G]=$[1][0];else throw console.log(Se,Ce,Oe,ne,$),Error("Internal error (3) in Speffz")}}}}if(this.cubieSetNums=M,this.cubieOrdNums=x,this.cubieSetNames=d,this.cubieOrbitSizes=P,this.orbitOrientations=g,this.cubieValueMap=T,this.cubieSetCubies=L,this.options.fixedPieceType!==null){for(let S=0;S<f.length;S++)if(this.options.fixedPieceType==="v"&&f[S].length>2||this.options.fixedPieceType==="e"&&f[S].length===2||this.options.fixedPieceType==="f"&&f[S].length===1){this.fixedCubie=S;break}if(this.fixedCubie<0)throw Error(`Could not find a cubie of type ${this.options.fixedPieceType} to fix.`)}this.options.verbosity>0&&console.log(`# Cubie orbit sizes ${P}`)}unswizzle(t){let e=this.notationMapper.notationToInternal(t);return e===null?null:e.modified({family:this.swizzler.unswizzle(e.family)})}stringToBlockMove(t){let e=/^(([0-9]+)-)?([0-9]+)?([^0-9]+)([0-9]+'?)?$/,i=t.match(e);if(i===null)throw Error(`Bad move passed ${t}`);let r=i[4],n,s;if(i[2]!==void 0){if(i[3]===void 0)throw Error("Missing second number in range");n=parseInt(i[2],10)}i[3]!==void 0&&(s=parseInt(i[3],10));let o="1",a=1;return i[5]!==void 0&&(o=i[5],o[0]==="'"&&(o=`-${o.substring(1)}`),a=parseInt(o,10)),new b(new ke(r,s,n),a)}parseMove(t){let e=this.notationMapper.notationToInternal(t);if(e===null)throw Error(`Bad move ${t.family}`);t=e;let i=t.family,r=!1;if(i.endsWith("v")&&i[0]<="Z"){if(t.innerLayer!==void 0||t.outerLayer!==void 0)throw Error("Cannot use a prefix with full cube rotations");i=i.slice(0,-1),r=!0}i.endsWith("w")&&i[0]<="Z"&&(i=i.slice(0,-1).toLowerCase());let n,s=-1,o=this.swizzler.unswizzle(i),a=!1;for(let h=0;h<this.movesetgeos.length;h++){let u=this.movesetgeos[h];o===u[0]&&(a=!0,n=u,s=h),o===u[2]&&(a=!1,n=u,s=h)}let l=1,c=1;if(i.toUpperCase()!==i&&(c=2),n===void 0)throw Error(`Bad grip in move ${t.family}`);t.outerLayer!==void 0&&(l=t.outerLayer),t.innerLayer!==void 0&&(t.outerLayer===void 0?(c=t.innerLayer,i<="Z"?l=c:l=1):c=t.innerLayer),l--,c--;let f=this.movePlaneSets;if(r&&(l=0,c=f[s].length),l<0||l>f[s].length||c<0||c>f[s].length)throw Error(`Bad slice spec ${l} ${c} vs ${f[s].length}`);if(!Hv&&l===0&&c===f[s].length&&!r)throw Error("! full puzzle rotations must be specified with v suffix.");return[void 0,s,l,c,a,t.amount]}parsemove(t){t instanceof b&&(t=t.toString());let e=this.parseMove(this.stringToBlockMove(t));return e[0]=t,e}genperms(){let t="genperms";if(this.cmovesBySlice.length>0)return;let e=[];if(this.options.orientCenters){for(let i=0;i<this.cubies.length;i++)if(this.cubies[i].length===1){let r=this.cubies[i][0],n=this.getfaceindex(r),s=this.baseFaces[n].centermass();if(s.dist(this.faceCenterMass[r])<Et){let o=1<<n|1<<this.baseFaceCount,a=this.markedFaceLookup[o],l=this.basePlanes[a].makenormal(),c=-1,f=-1;for(let p=0;p<this.faces[r].length;p++){let d=this.faces[r].get(p),y=l.dot(d.sub(s));y>c&&(c=y,f=p)}let h=(f+1)%this.faces[r].length;if(Math.abs(l.dot(this.faces[r].get(h).sub(s))-c)<Et&&(f=h),f!==0){let p=[];for(let d=0;d<this.faces[r].length;d++)p.push(this.faces[r].get((d+f)%this.faces[r].length));this.faces[r]=new Dc(p)}let u=this.baseFaces[n].length;for(let p=1;p<u;p++)this.cubies[i].push(this.cubies[i][p-1]);this.duplicatedFaces[r]=u,this.duplicatedCubies[i]=u,this.orbitOrientations[this.cubieSetNums[i]]=u}}}for(let i=0;i<this.movePlaneSets.length;i++){let r=this.movePlaneSets[i],n=[],s=[r.length+1,0],o=1;for(;o*2<=r.length;)o*=2;for(let c=0;c<this.faces.length;c++){let f=0;if(r.length>0){let h=this.faceCenterMass[c].dot(r[0]);for(let u=o;u>0;u>>=1)f+u<=r.length&&h>r[f+u-1].a&&(f+=u);f=r.length-f}for(n.push(f);s.length<=f;)s.push(0);s[f]++}let a=new Array(s.length);for(let c=0;c<s.length;c++)a[c]=[];let l=[];for(let c=0;c<this.faces.length;c++){if(n[c]<0)continue;let f=[this.faceToCubie[c],this.faceToCubieOrd[c]],h=this.faceCenterMass[c],u=h,p=c,d=n[p];for(;;){n[p]=-1;let y=h.rotatepoint(this.moveRotations[i][0]);if(y.dist(u)<Et)break;p=this.findface(y),f.push(this.faceToCubie[p],this.faceToCubieOrd[p]),h=y}if(f.length>2&&this.options.orientCenters&&(this.cubies[f[0]].length===1||this.duplicatedCubies[f[0]]>1)&&this.faceCenterMass[c].dist(this.baseFaces[this.getfaceindex(c)].centermass())<Et){let y=this.faces[this.cubies[f[0]][0]];for(let g=0;g<f.length;g+=2){let m=this.faces[this.cubies[f[g]][0]],w=-1;for(let M=0;M<y.length;M++)if(m.get(M).dist(y.get(0))<Et){w=M;break}if(w<0)throw Error("Couldn't find rotation of center faces; ignoring for now.");f[g+1]=w,y=y.rotate(this.moveRotations[i][0])}}if(f.length===2&&this.options.orientCenters){let y=this.faceCenterMass[c].dot(this.movePlaneNormals[i]);for(let g=1;g<this.movesetorders[i];g++)y>0?f.push(f[0],g):f.push(f[0],(this.movesetorders[i]-g)%this.movesetorders[i])}if(f.length>2&&!l[f[0]]){if(f.length!==2*this.movesetorders[i])throw Error("Bad length in perm gen");for(let y of f)a[d].push(y)}for(let y=0;y<f.length;y+=2)l[f[y]]=!0}for(let c=0;c<a.length;c++)a[c]=a[c].slice();e.push(a)}if(this.cmovesBySlice=e,this.options.moveList){let i=[];for(let r of this.options.moveList)i.push(this.parsemove(r));this.parsedMoveList=i}this.faceListHash.clear(),this.faceCenterMass=[]}getboundarygeometry(){return{baseplanes:this.basePlanes,facenames:this.faceNames,faceplanes:this.facePlanes,vertexnames:this.vertexNames,edgenames:this.edgeNames,geonormals:this.geometryNormals}}getmovesets(t){let e=this.movePlaneSets[t].length,i=[];if(this.parsedMoveList!==void 0)for(let r of this.parsedMoveList)r[1]===t&&(r[4]?i.push([r[2],r[3]]):i.push([e-r[3],e-r[2]]),i.push(r[5]));else{let r=this.movesetgeos[t],n=r[1]!==r[3];if(this.options.vertexMoves&&n&&!this.options.allMoves){if(r[1]!==r[3])for(let s=0;s<e;s++)r[1]!=="v"?(this.options.outerBlockMoves?i.push([s+1,e]):i.push([s+1,s+1]),i.push(1)):(this.options.outerBlockMoves?i.push([0,s]):i.push([s,s]),i.push(1))}else for(let s=0;s<=e;s++)!this.options.allMoves&&s+s===e||(this.options.outerBlockMoves?s+s>e?i.push([s,e]):i.push([0,s]):i.push([s,s]),i.push(1))}if(this.fixedCubie>=0){let r=this.keyface3(this.faces[this.cubies[this.fixedCubie][0]])[t],n=[];for(let s=0;s<i.length;s+=2){let o=i[s];if(r>=o[0]&&r<=o[1])if(o[0]===0)o=[o[1]+1,e];else if(e===o[1])o=[0,o[0]-1];else throw Error("fixed cubie option would disconnect move");let a=!1;for(let l=0;l<n.length;l+=2)if(n[l][0]===o[0]&&n[l][1]===o[1]&&n[l+1]===i[s+1]){a=!0;break}a||(n.push(o),n.push(i[s+1]))}i=n}return i}graybyori(t){let e=this.cubies[t].length;return this.duplicatedCubies[t]&&(e=1),e===1&&(this.options.grayCenters||!this.options.includeCenterOrbits)||e===2&&(this.options.grayEdges||!this.options.includeEdgeOrbits)||e>2&&(this.options.grayCorners||!this.options.includeCornerOrbits)}skipbyori(t){let e=this.cubies[t].length;return this.duplicatedCubies[t]&&(e=1),e===1&&!this.options.includeCenterOrbits||e===2&&!this.options.includeEdgeOrbits||e>2&&!this.options.includeCornerOrbits}skipcubie(t){return this.skipbyori(t)}header(t){return`${t+Vv}
${t}
`}writegap(){let t=this.getOrbitsDef(!1),e=[],i=[];for(let n=0;n<t.moveops.length;n++){let s=t.movenames[n];t.forcenames[n]||(s=`M_${Ma(this.notationMapper,s)}`),s=`M_${s}`;let o=!1;s[s.length-1]==="'"&&(s=s.substring(0,s.length-1),o=!0),i.push(s),o?e.push(`${s}:=${t.moveops[n].toPerm().inv().toGap()};`):e.push(`${s}:=${t.moveops[n].toPerm().toGap()};`)}e.push("Gen:=["),e.push(i.join(",")),e.push("];");let r=t.solved.identicalPieces();return e.push(`ip:=[${r.map(n=>`[${n.map(s=>s+1).join(",")}]`).join(",")}];`),e.push("# Size(Group(Gen));"),e.push("# Size(Stabilizer(Group(Gen), ip, OnTuplesSets));"),e.push(""),this.header("# ")+e.join(`
`)}writemathematica(){let t=this.getOrbitsDef(!1),e=[],i=[];e.push(`(* ${this.header("").trim()} *)`);for(let r=0;r<t.moveops.length;r++){let n=`m${Ma(this.notationMapper,t.movenames[r])}`,s=!1;n[n.length-1]==="'"&&(n=n.substring(0,n.length-1),s=!0),i.push(n),s?e.push(`${n}=${t.moveops[r].toPerm().inv().toMathematica()};`):e.push(`${n}=${t.moveops[r].toPerm().toMathematica()};`)}return e.push(`gen={${i.join(",")}};`),e.join(`
`)}writeksolve(t="PuzzleGeometryPuzzle"){let e=this.getOrbitsDef(!1);return this.header("# ")+e.toKsolve(t,this.notationMapper).join(`
`)}getKPuzzleDefinition(t=!0,e=!0){let r=this.getOrbitsDef(t,e).toKPuzzleDefinition(e);if(r.experimentalPuzzleDescription=this.puzzleDescription,!r)throw Error("Missing definition!");return r}getMoveFromBits(t,e,i,r,n,s){let o=[],a=[],l=[];for(let h of this.cubieOrbitSizes)a.push(Gr(h)),l.push(yn(h));for(let h=t[0];h<=t[1];h++){let u=r[h];for(let p=0;p<u.length;p+=2*s){let d=u.slice(p,p+2*s),y=this.cubieSetNums[d[0]];for(let w=0;w<d.length;w+=2)d[w]=this.cubieOrdNums[d[w]];let g=2,m=3;i&&(g=d.length-2,m=d.length-1),a[y]===Gr(this.cubieOrbitSizes[y])&&(a[y]=a[y].slice(),this.orbitOrientations[y]>1&&!this.options.fixedOrientation&&(l[y]=l[y].slice()));for(let w=0;w<d.length;w+=2)a[y][d[(w+g)%d.length]]=d[w],this.orbitOrientations[y]>1&&!this.options.fixedOrientation&&(l[y][d[w]]=(d[(w+m)%d.length]-d[(w+1)%d.length]+2*this.orbitOrientations[y])%this.orbitOrientations[y])}}let c=new Yn(Gr(24),yn(24),1);for(let h=0;h<this.cubieSetNames.length;h++)if(!(n&&!n[h]))if(this.orbitOrientations[h]===1||this.options.fixedOrientation)a[h]===Gr(c.perm.length)?(a[h]!==c.perm&&(c=new Yn(a[h],l[h],1)),o.push(c)):o.push(new Yn(a[h],l[h],1));else{let u=new Array(l[h].length);for(let p=0;p<a[h].length;p++)u[p]=l[h][a[h][p]];o.push(new Yn(a[h],u,this.orbitOrientations[h]))}let f=new fd(o);return e!==1&&(f=f.mulScalar(e)),f}omitSet(t){for(let e of this.options.excludeOrbits)if(e===t)return!0;return!1}diffmvsets(t,e,i,r){for(let n=0;n<t.length;n+=2){let s=!1;for(let o=0;!s&&o<e.length;o+=2)r?t[n][0]+e[o][1]===i&&t[n][1]+e[o][0]===i&&t[n+1]===e[o+1]&&(s=!0):t[n][0]===e[o][0]&&t[n][1]===e[o][1]&&t[n+1]===e[o+1]&&(s=!0);if(!s)return!0}return!1}getOrbitsDef(t,e=!0){let i=[];if(t)for(let d=0;d<this.cubieSetNames.length;d++)i.push(1);let r=[],n=[],s=[],o=[];for(let d=0;d<this.movePlaneSets.length;d++){let y=this.getmovesets(d);s.push(y),this.options.addRotations?o.push(1):o.push(0)}let a=[];for(let d=0;d<this.movePlaneSets.length;d++){let y=this.movePlaneSets[d].length,g=!1,m=s[d];for(let w=0;w<m.length;w+=2)m[w][0]===0&&m[w][1]===y&&(g=!0);a[d]=g}if(this.options.addRotations&&(this.options.moveList||this.options.fixedPieceType!==null)){for(let d=0;d<this.moveRotations.length;d++)o[d]=0;for(let d=0;d<this.movePlaneSets.length;d++){if(a[d]){o[d]=3;continue}for(let y=0;y<this.moveRotations.length;y++){let g=this.movePlaneNormals[d];for(let m=1;m*2<=this.movesetorders[y];m++){if(g=g.rotatepoint(this.moveRotations[y][0]),o[y]&m)continue;let w=-1,M=!1;for(let P=0;P<this.movePlaneNormals.length;P++)if(g.dist(this.movePlaneNormals[P])<Et){w=P;break}else if(g.dist(this.movePlaneNormals[P].smul(-1))<Et){w=P,M=!0;break}if(w<0)throw Error("Could not find rotation");let x=s[w];(x.length!==s[d].length||this.movePlaneSets[d].length!==this.movePlaneSets[w].length||this.diffmvsets(x,s[d],this.movePlaneSets[w].length,M))&&(o[y]|=m)}}}for(let d=0;d<this.moveRotations.length;d++)if(o[d]===0)o[d]=1;else if(o[d]===1)this.movesetorders[d]>3?o[d]=2:o[d]=0;else if(o[d]===3)o[d]=0;else throw Error("Impossible addrot val")}for(let d=0;d<this.movePlaneSets.length;d++)o[d]!==0&&!a[d]&&(s[d].push([0,this.movePlaneSets[d].length]),s[d].push(o[d]));for(let d=0;d<this.movePlaneSets.length;d++){let y=s[d],g=this.movesetorders[d];for(let M=0;M<y.length;M+=2)for(let x=0;x<M;x+=2)if(y[M][0]===y[x][0]&&y[M][1]===y[x][1])throw Error("Redundant moves in moveset.");let m=[];for(let M=0;M<y.length;M+=2)for(let x=y[M][0];x<=y[M][1];x++)m[x]=1;let w=this.cmovesBySlice[d];for(let M=0;M<w.length;M++){if(m[M]!==1)continue;let x=w[M];for(let P=0;P<x.length;P+=2*g){if(this.skipcubie(x[P]))continue;let T=this.cubieSetNums[x[P]];i[T]=1}}}for(let d=0;d<this.cubieSetNames.length;d++)if(i[d]){if(this.omitSet(this.cubieSetNames[d])){i[d]=0;continue}r.push(this.cubieSetNames[d]),n.push(new Tc(this.cubieOrbitSizes[d],this.options.fixedOrientation?1:this.orbitOrientations[d]))}let l=[];for(let d=0;d<this.cubieSetNames.length;d++){if(!i[d]||this.omitSet(this.cubieSetNames[d]))continue;let y=Array(this.cubieOrbitSizes[d]).fill(-1),g=[];for(let m=0;m<this.cubieOrbitSizes[d];m++){if(t)y[m]=m;else{let w=this.cubieSetCubies[d][m];y[this.cubieOrdNums[w]]=this.cubieValueMap[w]}g.push(0)}l.push(new Yn(y,g,this.options.fixedOrientation?1:this.orbitOrientations[d]))}let c=[],f=[],h=[],u=[];if(e)for(let d=0;d<this.movePlaneSets.length;d++){let g=this.movePlaneSets[d].length,m=s[d],w=this.movesetgeos[d];for(let M=0;M<m.length;M+=2){let x=m[M],P,T=!1;if(this.parsedMoveList!==void 0)for(let L of this.parsedMoveList){if(L[1]!==d)continue;let S=[];L[4]?S=[L[2],L[3]]:S=[g-L[3],g-L[2]],S[0]===x[0]&&S[1]===x[1]&&(P=L[0],T=!L[4])}if(P)c.push(P),f.push(!0);else{let L=$v(w,x,g);T=L[1];let S=L[0];m[M+1]===1?c.push(S):c.push(S+m[M+1]),f.push(!1)}u.push(x[0]===0&&x[1]===g);let C=this.getMoveFromBits(x,m[M+1],T,this.cmovesBySlice[d],i,this.movesetorders[d]);h.push(C)}}let p=new ad(r,n,new hd(l),c,h,u,f);return this.options.optimizeOrbits&&(p=p.optimize()),this.options.scrambleAmount!==0&&p.scramble(this.options.scrambleAmount),p}getScramble(t=0){let e=this.getOrbitsDef(!1);return e.toKTransformationData(e.getScrambleTransformation(t))}getMovesAsPerms(){return this.getOrbitsDef(!1).moveops.map(t=>t.toPerm())}showcanon(t){Lv(this.getOrbitsDef(!1),t)}getsolved(){let t=[];for(let e=0;e<this.baseFaceCount;e++)for(let i=0;i<this.stickersPerFace;i++)t.push(e);return new oo(t)}getOrientationRotation(t){let[e,[i,r,n]]=t[0],s=new vt(0,i,-r,n),[o,[a,l,c]]=t[1],f=new vt(0,a,-l,c),h=null,u=null,p=this.swizzler.unswizzle(e),d=this.swizzler.unswizzle(o);for(let w of this.geometryNormals)p===w[1]&&(h=w[0]),d===w[1]&&(u=w[0]);if(!h)throw Error(`Could not find feature ${e}`);if(!u)throw Error(`Could not find feature ${o}`);let y=h.pointrotation(s);return u.rotatepoint(y).unproject(s).pointrotation(f.unproject(s)).mul(y)}getInitial3DRotation(){let t=this.baseFaceCount,e=null;if(this.options.puzzleOrientation?e=this.options.puzzleOrientation:this.options.puzzleOrientations&&(e=this.options.puzzleOrientations[t]),e||(e=qv()[t]),!e)throw Error("No default orientation?");return this.getOrientationRotation(e)}generate2dmapping(t=800,e=500,i=10,r=!1,n=.92){t-=2*i,e-=2*i;function s(U,I){let V=U[1][0]-U[0][0],q=U[1][1]-U[0][1],H=2*Math.PI/I,Z=Math.cos(H),G=Math.sin(H);for(let $=2;$<I;$++){let ne=V*Z+q*G;q=q*Z-V*G,V=ne,U.push([U[$-1][0]+V,U[$-1][1]+q])}}this.genperms();let l=this.getboundarygeometry().facenames[0][0].length,c=this.net;if(c===null)throw Error("No net?");let f={},h=0,u=0,p=1,d=0;f[c[0][0]]=[[1,0],[0,0]],s(f[c[0][0]],l);for(let U of c){let I=U[0];if(!f[I])throw Error("Bad edge description; first edge not connected.");for(let V=1;V<U.length;V++){let q=U[V];q===""||f[q]||(f[q]=[f[I][V%l],f[I][(V+l-1)%l]],s(f[q],l))}}for(let U in f){let I=f[U];for(let V of I)h=Math.min(h,V[0]),p=Math.max(p,V[0]),u=Math.min(u,V[1]),d=Math.max(d,V[1])}let y=Math.min(t/(p-h),e/(d-u)),g=.5*(t-y*(p+h)),m=.5*(e-y*(d+u)),w={},M=this.getboundarygeometry(),x={},P=[[y+g,m],[g,m]];x[c[0][0]]=P,s(x[c[0][0]],l),w[this.faceNames[0][1]]=this.project2d(0,0,[new vt(0,P[0][0],P[0][1],0),new vt(0,P[1][0],P[1][1],0)]);let T=[];T[0]=0;for(let U of c){let I=U[0];if(!x[I])throw Error("Bad edge description; first edge not connected.");let V=-1;for(let H=0;H<M.facenames.length;H++)if(I===M.facenames[H][1]){V=H;break}if(V<0)throw Error(`Could not find first face name ${I}`);let q=M.facenames[V][0];for(let H=1;H<U.length;H++){let Z=U[H];if(Z===""||x[Z])continue;x[Z]=[x[I][H%l],x[I][(H+l-1)%l]],s(x[Z],l);let G=T[V],$=q[(G+H)%l].sum(q[(G+H+l-1)%l]).smul(.5),ne=xa(M.edgenames,$),Se=M.edgenames[ne][1],Ce=Jv(Se,this.faceNames),Oe=Ce[I===Ce[0]?1:0],Y=-1;for(let le=0;le<M.facenames.length;le++)if(Oe===M.facenames[le][1]){Y=le;break}if(Y<0)throw Error("Could not find second face name");let re=M.facenames[Y][0];for(let le=0;le<re.length;le++)if(re[le].sum(re[(le+1)%l]).smul(.5).dist($)<=Et){let _e=x[I][(H+l-1)%l],O=x[I][H%l];T[Y]=le,w[Oe]=this.project2d(Y,le,[new vt(0,O[0],O[1],0),new vt(0,_e[0],_e[1],0)]);break}}}let C=0,L=0,S=this.getInitial3DRotation();for(let U of this.faces){r&&(U=U.rotate(S));for(let I=0;I<U.length;I++)C=Math.max(C,Math.abs(U.get(I).b)),L=Math.max(L,Math.abs(U.get(I).c))}let v=Math.min(e/L/2,(t-i)/C/4);return(U,I)=>{if(r){I=I.rotatepoint(S);let V=.5*i+.25*t,q=this.basePlanes[U].rotateplane(S).d<0?1:-1;return[i+t*.5+q*(V-I.b*v),i+e*.5+I.c*v]}else{let V=w[this.faceNames[U][1]];return[i+n*I.dot(V[0])+V[2].b,i+e-n*I.dot(V[1])-V[2].c]}}}generatesvg(t=800,e=500,i=10,r=!1){let n=this.generate2dmapping(t,e,i,r);function s(h,u,p){return`<polygon id="${h}" class="sticker" style="fill: ${p}" points="${u.map(d=>`${d[0]} ${d[1]}`).join(" ")}"/>
`}let o=this.getsolved(),a=[],l=[];for(let h=0;h<this.baseFaceCount;h++)a[h]=this.colors[this.faceNames[h][1]];for(let h=0;h<this.faces.length;h++){let u=this.faces[h],p=Math.floor(h/this.stickersPerFace),d=[];for(let y=0;y<u.length;y++)d.push(n(p,u.get(y)));l.push(d)}let c=[];for(let h=0;h<this.baseFaceCount;h++){c.push("<g>"),c.push(`<title>${this.faceNames[h][1]}</title>
`);for(let u=0;u<this.stickersPerFace;u++){let p=h*this.stickersPerFace+u,d=this.faceToCubie[p],y=this.faceToCubieOrd[p],g=this.cubieSetNums[d],m=this.cubieOrdNums[d],w=this.graybyori(d)?"#808080":a[o.p[p]],M=`${this.cubieSetNames[g]}-l${m}-o${y}`;if(c.push(s(M,l[p],w)),this.duplicatedFaces[p])for(let x=1;x<this.duplicatedFaces[p];x++)M=`${this.cubieSetNames[g]}-l${m}-o${x}`,c.push(s(M,l[p],w))}c.push("</g>")}return`<svg id="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 500">
<style type="text/css"><![CDATA[.sticker { stroke: #000000; stroke-width: 1px; }]]></style>
${c.join("")}</svg>`}get3d(t){let e=[],i=this.getInitial3DRotation(),r=[],n=.52*this.baseFaces[0].get(0).len();for(let l=0;l<this.baseFaces.length;l++){let c=this.baseFaces[l].rotate(i),f=this.faceNames[l][1];r.push({coords:Ac(c,n),name:f})}for(let l=0;l<this.faces.length;l++){let c=Math.floor(l/this.stickersPerFace),f=this.faceToCubie[l],h=this.faceToCubieOrd[l],u=this.cubieSetNums[f],p=this.cubieOrdNums[f],d=this.graybyori(f)?t?.darkIgnoredOrbits?"#222222":"#808080":this.colors[this.faceNames[c][1]];t?.stickerColors&&(d=t.stickerColors[l]);let y=this.faces[l].rotate(i);e.push({coords:Ac(y,n),color:d,orbit:this.cubieSetNames[u],ord:p,ori:h,face:c});let g=y;if(this.duplicatedFaces[l]){let m=g.length/this.duplicatedFaces[l];for(let w=1;w<this.duplicatedFaces[l];w++){for(let M=0;M<m;M++)g=g.rotateforward();e.push({coords:Ac(g,n),color:d,orbit:this.cubieSetNames[u],ord:p,ori:w,face:c,isDup:!0})}}}let s=[];for(let l=0;l<this.movesetgeos.length;l++){let c=this.movesetgeos[l],f=this.movesetorders[l];for(let h of this.geometryNormals)c[0]===h[1]&&c[1]===h[2]&&(s.push({coordinates:wa(h[0].rotatepoint(i),1),quantumMove:new b(c[0]),order:f}),s.push({coordinates:wa(h[0].rotatepoint(i).smul(-1),1),quantumMove:new b(c[2]),order:f}))}let o=this.generate2dmapping(2880,2160,0,!1,1),a=(()=>{let l=i.invrot();return(c,f)=>{let h=new vt(0,f[0]*n,-f[1]*n,f[2]*n);h=h.rotatepoint(l);let u=o(c,h);return u[0]/=2880,u[1]=1-u[1]/2160,u}})().bind(this);return{stickers:e,faces:r,axis:s,unswizzle:this.unswizzle.bind(this),notationMapper:this.notationMapper,textureMapper:{getuv:a}}}getGeoNormal(t){let e=this.getInitial3DRotation(),i=this.swizzler.unswizzle(t);for(let r of this.geometryNormals)if(i===r[1]){let n=wa(r[0].rotatepoint(e),1);return Math.abs(n[0])<Et&&Math.abs(n[2])<Et&&(n[0]=0,n[2]=1e-6),n}}getfaceindex(t){let e=this.stickersPerFace;return Math.floor(t/e)}textForTwizzleExplorer(){return`Faces ${this.basePlaneRotations.length}
Stickers per face ${this.stickersPerFace}
Short edge ${this.shortestEdge}
Cubies ${this.cubies.length}
Edge distance ${this.edgeDistance}
Vertex distance ${this.vertexDistance}`}writeSchreierSims(t){let i=this.getOrbitsDef(!1).reassemblySize();t(`Reassembly size is ${i}`);let r=ud(this.getMovesAsPerms(),t),n=i/r;t(`Ratio is ${n}`)}},ex=class{constructor(t,e){this.pg=t,this.orbitNames=e.orbitnames}orbitNames;lookupMove(t){let e=this.pg.parseMove(t);if(this.pg.parsedMoveList){let s=!1;for(let o of this.pg.parsedMoveList)o[1]===e[1]&&o[2]===e[2]&&o[3]===e[3]&&o[4]===e[4]&&(s=!0);if(!s)return null}let i=[e[2],e[3]];if(!e[4]){let s=this.pg.movePlaneSets[e[1]].length;i=[s-e[3],s-e[2]]}let r=this.pg.getMoveFromBits(i,e[5],!e[4],this.pg.cmovesBySlice[e[1]],void 0,this.pg.movesetorders[e[1]]);return ad.transformToKTransformationData(this.orbitNames,r)}remapKPuzzleDefinition(t){return Rv(t,this.pg.notationMapper)}}});var xd={};zr(xd,{experimentalIsBigCubeSolved:()=>ix,normalizeBigCubeOrientation:()=>vd,puzzleOrientationBigCubeCache:()=>Sd,puzzleOrientationBigCubeIdx:()=>Pc});function Pc(t){let e=t.patternData.CORNERS.pieces[0],i=t.patternData.CORNERS.orientation[0];return[e,i]}function Sd(t){if(!tx){let e=["","y","y2","y'","x2","x2 y","x2 y2","x2 y'"].map(r=>he.fromString(r)),i=new he("Rv Uv");for(let r of e){let n=t.algToTransformation(r);for(let s=0;s<4;s++){let[o,a]=Pc(n.toKPattern());if(yd[o][a]=new he([...r.childAlgNodes(),new Ut(i,s)]).invert(),s===3)break;n=n.applyAlg(i)}}}return yd}function vd(t){let[e,i]=Pc(t),r=Sd(t.kpuzzle)[e][i];return t.applyAlg(r)}function ix(t,e){return e.ignorePuzzleOrientation&&(t=vd(t)),t.isIdentical(t.kpuzzle.defaultPattern())}var yd,tx,Ed=A(()=>{xr();yd=new Array(8).fill(0).map(()=>new Array(3)),tx=!1});var ba={};zr(ba,{cube3x3x3LLFaceSVG:()=>sx,cube3x3x3LLSVG:()=>nx,cube3x3x3SVG:()=>rx});var rx,nx,sx,Ca=A(()=>{rx=`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN"
       "http://www.w3.org/TR/2001/REC-SVG-20050904/DTD/svg11.dtd">
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 518 440" preserveAspectRatio="xMidYMid meet">
  <title>3x3x3</title>
  <defs>
    <g id="sticker">
        <rect x="0" y="0" width="1" height="1" stroke="black" stroke-width="0.04px" />
    </g>
    <g id="sticker-thin-v">
        <rect x="0" y="0" width="0.5" height="1" stroke="black" stroke-width="0.04px" style="opacity: 0.3;" />
    </g>
    <g id="sticker-thin-h">
        <rect x="0" y="0" width="1" height="0.5" stroke="black" stroke-width="0.04px" style="opacity: 0.3;" />
    </g>
  </defs>
  <g id="puzzle" transform="translate(5,40) scale(40)">
    <g class="hint-facelet">
      <use data-copy-id="CORNERS-l0-o1" href="#sticker-thin-v" transform="translate(6.5,2.1)" style="fill: red"/>
      <use data-copy-id="EDGES-l1-o1"   href="#sticker-thin-v" transform="translate(6.5,1.1)" style="fill: red"/>
      <use data-copy-id="CORNERS-l1-o2" href="#sticker-thin-v" transform="translate(6.5,0.1)" style="fill: red"/>

      <use data-copy-id="CORNERS-l2-o2" href="#sticker-thin-h" transform="translate(3.3,-0.6)" style="fill: #26f"/>
      <use data-copy-id="EDGES-l2-o1"   href="#sticker-thin-h" transform="translate(4.3,-0.6)" style="fill: #26f"/>
      <use data-copy-id="CORNERS-l1-o1" href="#sticker-thin-h" transform="translate(5.3,-0.6)" style="fill: #26f"/>

      <use data-copy-id="CORNERS-l3-o2" href="#sticker-thin-v" transform="translate(2.6,2.1)" style="fill: orange"/>
      <use data-copy-id="EDGES-l3-o1"   href="#sticker-thin-v" transform="translate(2.6,1.1)" style="fill: orange"/>
      <use data-copy-id="CORNERS-l2-o1" href="#sticker-thin-v" transform="translate(2.6,0.1)" style="fill: orange"/>
    </g>

    <!-- CORNERS -->
    <use id="CORNERS-l0-o0" href="#sticker" transform="translate(5.3,2.1)" style="fill: white"/>
    <use id="CORNERS-l0-o1" href="#sticker" transform="translate(6.5,3.3)" style="fill: red"/>
    <use id="CORNERS-l0-o2" href="#sticker" transform="translate(5.3,3.3)" style="fill: limegreen"/>

    <use id="CORNERS-l1-o0" href="#sticker" transform="translate(5.3,0.1)" style="fill: white"/>
    <use id="CORNERS-l1-o1" href="#sticker" transform="translate(9.7,3.3)" style="fill: #26f"/>
    <use id="CORNERS-l1-o2" href="#sticker" transform="translate(8.5,3.3)" style="fill: red"/>

    <use id="CORNERS-l2-o0" href="#sticker" transform="translate(3.3,0.1)" style="fill: white"/>
    <use id="CORNERS-l2-o1" href="#sticker" transform="translate(0.1,3.3)" style="fill: orange"/>
    <use id="CORNERS-l2-o2" href="#sticker" transform="translate(11.7,3.3)" style="fill: #26f"/>

    <use id="CORNERS-l3-o0" href="#sticker" transform="translate(3.3,2.1)" style="fill: white"/>
    <use id="CORNERS-l3-o1" href="#sticker" transform="translate(3.3,3.3)" style="fill: limegreen"/>
    <use id="CORNERS-l3-o2" href="#sticker" transform="translate(2.1,3.3)" style="fill: orange"/>

    <use id="CORNERS-l4-o0" href="#sticker" transform="translate(5.3,6.5)" style="fill: yellow"/>
    <use id="CORNERS-l4-o1" href="#sticker" transform="translate(5.3,5.3)" style="fill: limegreen"/>
    <use id="CORNERS-l4-o2" href="#sticker" transform="translate(6.5,5.3)" style="fill: red"/>

    <use id="CORNERS-l5-o0" href="#sticker" transform="translate(3.3,6.5)" style="fill: yellow"/>
    <use id="CORNERS-l5-o1" href="#sticker" transform="translate(2.1,5.3)" style="fill: orange"/>
    <use id="CORNERS-l5-o2" href="#sticker" transform="translate(3.3,5.3)" style="fill: limegreen"/>

    <use id="CORNERS-l6-o0" href="#sticker" transform="translate(3.3,8.5)" style="fill: yellow"/>
    <use id="CORNERS-l6-o1" href="#sticker" transform="translate(11.7,5.3)" style="fill: #26f"/>
    <use id="CORNERS-l6-o2" href="#sticker" transform="translate(0.1,5.3)"  style="fill: orange"/>

    <use id="CORNERS-l7-o0" href="#sticker" transform="translate(5.3,8.5)" style="fill: yellow"/>
    <use id="CORNERS-l7-o1" href="#sticker" transform="translate(8.5,5.3)" style="fill: red"/>
    <use id="CORNERS-l7-o2" href="#sticker" transform="translate(9.7,5.3)" style="fill: #26f"/>

    <!-- EDGES -->
    <use id="EDGES-l0-o0"  href="#sticker" transform="translate(4.3,2.1)" style="fill: white"/>
    <use id="EDGES-l0-o1"  href="#sticker" transform="translate(4.3,3.3)" style="fill: limegreen"/>

    <use id="EDGES-l1-o0"  href="#sticker" transform="translate(5.3,1.1)" style="fill: white"/>
    <use id="EDGES-l1-o1"  href="#sticker" transform="translate(7.5,3.3)" style="fill: red"/>

    <use id="EDGES-l2-o0"  href="#sticker" transform="translate(4.3,0.1)" style="fill: white"/>
    <use id="EDGES-l2-o1"  href="#sticker" transform="translate(10.7,3.3)" style="fill: #26f"/>

    <use id="EDGES-l3-o0"  href="#sticker" transform="translate(3.3,1.1)" style="fill: white"/>
    <use id="EDGES-l3-o1"  href="#sticker" transform="translate(1.1,3.3)" style="fill: orange"/>

    <use id="EDGES-l4-o0"  href="#sticker" transform="translate(4.3,6.5)" style="fill: yellow"/>
    <use id="EDGES-l4-o1"  href="#sticker" transform="translate(4.3,5.3)" style="fill: limegreen"/>

    <use id="EDGES-l5-o0" href="#sticker" transform="translate(5.3,7.5)" style="fill: yellow"/>
    <use id="EDGES-l5-o1" href="#sticker" transform="translate(7.5,5.3)" style="fill: red"/>

    <use id="EDGES-l6-o0" href="#sticker" transform="translate(4.3,8.5)" style="fill: yellow"/>
    <use id="EDGES-l6-o1" href="#sticker" transform="translate(10.7,5.3)" style="fill: #26f"/>

    <use id="EDGES-l7-o0"  href="#sticker" transform="translate(3.3,7.5)" style="fill: yellow"/>
    <use id="EDGES-l7-o1"  href="#sticker" transform="translate(1.1,5.3)" style="fill: orange"/>

    <use id="EDGES-l8-o0"  href="#sticker" transform="translate(5.3,4.3)" style="fill: limegreen"/>
    <use id="EDGES-l8-o1"  href="#sticker" transform="translate(6.5,4.3)" style="fill: red"/>

    <use id="EDGES-l9-o0"  href="#sticker" transform="translate(3.3,4.3)" style="fill: limegreen"/>
    <use id="EDGES-l9-o1"  href="#sticker" transform="translate(2.1,4.3)" style="fill: orange"/>

    <use id="EDGES-l10-o0" href="#sticker" transform="translate(9.7,4.3)" style="fill: #26f"/>
    <use id="EDGES-l10-o1" href="#sticker" transform="translate(8.5,4.3)" style="fill: red"/>

    <use id="EDGES-l11-o0" href="#sticker" transform="translate(11.7,4.3)" style="fill: #26f"/>
    <use id="EDGES-l11-o1" href="#sticker" transform="translate(0.1,4.3)" style="fill: orange"/>

    <!-- CENTERS -->
    <!-- TODO: Allow the same sticker to be reused for multiple orientations -->
    <use id="CENTERS-l0-o0" href="#sticker" transform="translate(4.3,1.1)" style="fill: white"/>
    <use id="CENTERS-l0-o1" href="#sticker" transform="translate(4.3,1.1)" style="fill: white"/>
    <use id="CENTERS-l0-o2" href="#sticker" transform="translate(4.3,1.1)" style="fill: white"/>
    <use id="CENTERS-l0-o3" href="#sticker" transform="translate(4.3,1.1)" style="fill: white"/>

    <use id="CENTERS-l1-o0" href="#sticker" transform="translate(1.1,4.3)" style="fill: orange"/>
    <use id="CENTERS-l1-o1" href="#sticker" transform="translate(1.1,4.3)" style="fill: orange"/>
    <use id="CENTERS-l1-o2" href="#sticker" transform="translate(1.1,4.3)" style="fill: orange"/>
    <use id="CENTERS-l1-o3" href="#sticker" transform="translate(1.1,4.3)" style="fill: orange"/>

    <use id="CENTERS-l2-o0" href="#sticker" transform="translate(4.3,4.3)" style="fill: limegreen"/>
    <use id="CENTERS-l2-o1" href="#sticker" transform="translate(4.3,4.3)" style="fill: limegreen"/>
    <use id="CENTERS-l2-o2" href="#sticker" transform="translate(4.3,4.3)" style="fill: limegreen"/>
    <use id="CENTERS-l2-o3" href="#sticker" transform="translate(4.3,4.3)" style="fill: limegreen"/>

    <use id="CENTERS-l3-o0" href="#sticker" transform="translate(7.5,4.3)" style="fill: red"/>
    <use id="CENTERS-l3-o1" href="#sticker" transform="translate(7.5,4.3)" style="fill: red"/>
    <use id="CENTERS-l3-o2" href="#sticker" transform="translate(7.5,4.3)" style="fill: red"/>
    <use id="CENTERS-l3-o3" href="#sticker" transform="translate(7.5,4.3)" style="fill: red"/>

    <use id="CENTERS-l4-o0" href="#sticker" transform="translate(10.7,4.3)" style="fill: #26f"/>
    <use id="CENTERS-l4-o1" href="#sticker" transform="translate(10.7,4.3)" style="fill: #26f"/>
    <use id="CENTERS-l4-o2" href="#sticker" transform="translate(10.7,4.3)" style="fill: #26f"/>
    <use id="CENTERS-l4-o3" href="#sticker" transform="translate(10.7,4.3)" style="fill: #26f"/>

    <use id="CENTERS-l5-o0" href="#sticker" transform="translate(4.3,7.5)" style="fill: yellow"/>
    <use id="CENTERS-l5-o1" href="#sticker" transform="translate(4.3,7.5)" style="fill: yellow"/>
    <use id="CENTERS-l5-o2" href="#sticker" transform="translate(4.3,7.5)" style="fill: yellow"/>
    <use id="CENTERS-l5-o3" href="#sticker" transform="translate(4.3,7.5)" style="fill: yellow"/>
  </g>

</svg>
`,nx=`<?xml version="1.0" encoding="UTF-8"?>
<svg width="288px" height="288px" viewBox="-16 -16 288 288" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <title>3x3x3 LL</title>
  <defs>
    <g id="sticker">
        <rect x="-10" y="-10" width="1" height="1" stroke="black" stroke-width="0.04px" />
    </g>
  </defs>
  <g id="3x3x3-LL" stroke="none" stroke-width="4" style="none" stroke-linejoin="round">
    <rect id="CENTERS-l0-o0" stroke="#000000" style="fill: white" x="96" y="96" width="64" height="64"></rect>
    <rect id="CENTERS-l0-o1" stroke="#000000" style="fill: white" x="96" y="96" width="64" height="64"></rect>
    <rect id="CENTERS-l0-o2" stroke="#000000" style="fill: white" x="96" y="96" width="64" height="64"></rect>
    <rect id="CENTERS-l0-o3" stroke="#000000" style="fill: white" x="96" y="96" width="64" height="64"></rect>

    <rect    id="CORNERS-l0-o0" stroke="#000000" style="fill: white" x="160" y="160" width="64" height="64"></rect>
    <polygon id="CORNERS-l0-o1" stroke="#000000" style="fill: red" points="224 160 252 160 252 252 224 224"></polygon>
    <polygon id="CORNERS-l0-o2" stroke="#000000" style="fill: limegreen" transform="translate(206, 238) scale(1, -1) rotate(-90) translate(-206, -238) " points="192 192 220 192 220 284 192 256"></polygon>
    <rect    id="CORNERS-l1-o0" stroke="#000000" style="fill: white" x="160" y="32" width="64" height="64"></rect>
    <polygon id="CORNERS-l1-o1" stroke="#000000" style="fill: #26f" transform="translate(206, 18) rotate(-90) translate(-206, -18) " points="192 -28 220 -28 220 64 192 36"></polygon>
    <polygon id="CORNERS-l1-o2" stroke="#000000" style="fill: red" transform="translate(238, 50) scale(1, -1) translate(-238, -50) " points="224 4 252 4 252 96 224 68"></polygon>
    <rect    id="CORNERS-l2-o0" stroke="#000000" style="fill: white" x="32" y="32" width="64" height="64"></rect>
    <polygon id="CORNERS-l2-o1" stroke="#000000" style="fill: orange" transform="translate(18, 50) scale(-1, -1) translate(-18, -50) " points="4 4 32 4 32 96 4 68"></polygon>
    <polygon id="CORNERS-l2-o2" stroke="#000000" style="fill: #26f" transform="translate(50, 18) scale(1, -1) rotate(90) translate(-50, -18) " points="36 -28 64 -28 64 64 36 36"></polygon>
    <rect    id="CORNERS-l3-o0" stroke="#000000" style="fill: white" x="32" y="160" width="64" height="64"></rect>
    <polygon id="CORNERS-l3-o1" stroke="#000000" style="fill: limegreen" transform="translate(50, 238) rotate(90) translate(-50, -238) " points="36 192 64 192 64 284 36 256"></polygon>
    <polygon id="CORNERS-l3-o2" stroke="#000000" style="fill: orange" transform="translate(18, 206) scale(-1, 1) translate(-18, -206) " points="4 160 32 160 32 252 4 224"></polygon>

    <rect id="EDGES-l0-o0" stroke="#000000" style="fill: white" x="96" y="160" width="64" height="64"></rect>
    <rect id="EDGES-l0-o1" stroke="#000000" style="fill: limegreen" transform="translate(128, 238) scale(1, -1) rotate(90) translate(-128, -238) " x="114" y="206" width="28" height="64"></rect>
    <rect id="EDGES-l1-o0" stroke="#000000" style="fill: white" x="160" y="96" width="64" height="64"></rect>
    <rect id="EDGES-l1-o1" stroke="#000000" style="fill: red" x="224" y="96" width="28" height="64"></rect>
    <rect id="EDGES-l2-o0" stroke="#000000" style="fill: white" x="96" y="32" width="64" height="64"></rect>
    <rect id="EDGES-l2-o1" stroke="#000000" style="fill: #26f" transform="translate(128, 18) scale(1, -1) rotate(90) translate(-128, -18) " x="114" y="-14" width="28" height="64"></rect>
    <rect id="EDGES-l3-o0" stroke="#000000" style="fill: white" x="32" y="96" width="64" height="64"></rect>
    <rect id="EDGES-l3-o1" stroke="#000000" style="fill: orange" x="4" y="96" width="28" height="64"></rect>

  </g>
  <g style="opacity: 0">
    <!-- CORNERS -->
    <use id="CORNERS-l4-o0" href="#sticker" style="fill: yellow"/>
    <use id="CORNERS-l4-o1" href="#sticker" style="fill: limegreen"/>
    <use id="CORNERS-l4-o2" href="#sticker" style="fill: red"/>

    <use id="CORNERS-l5-o0" href="#sticker" style="fill: yellow"/>
    <use id="CORNERS-l5-o1" href="#sticker" style="fill: orange"/>
    <use id="CORNERS-l5-o2" href="#sticker" style="fill: limegreen"/>

    <use id="CORNERS-l6-o0" href="#sticker" style="fill: yellow"/>
    <use id="CORNERS-l6-o1" href="#sticker" style="fill: #26f"/>
    <use id="CORNERS-l6-o2" href="#sticker"  style="fill: orange"/>

    <use id="CORNERS-l7-o0" href="#sticker" style="fill: yellow"/>
    <use id="CORNERS-l7-o1" href="#sticker" style="fill: red"/>
    <use id="CORNERS-l7-o2" href="#sticker" style="fill: #26f"/>

    <!-- EDGES -->
    <use id="EDGES-l4-o0"  href="#sticker" style="fill: yellow"/>
    <use id="EDGES-l4-o1"  href="#sticker" style="fill: limegreen"/>

    <use id="EDGES-l5-o0" href="#sticker" style="fill: yellow"/>
    <use id="EDGES-l5-o1" href="#sticker" style="fill: red"/>

    <use id="EDGES-l6-o0" href="#sticker" style="fill: yellow"/>
    <use id="EDGES-l6-o1" href="#sticker" style="fill: #26f"/>

    <use id="EDGES-l7-o0"  href="#sticker" style="fill: yellow"/>
    <use id="EDGES-l7-o1"  href="#sticker" style="fill: orange"/>

    <use id="EDGES-l8-o0"  href="#sticker" style="fill: limegreen"/>
    <use id="EDGES-l8-o1"  href="#sticker" style="fill: red"/>

    <use id="EDGES-l9-o0"  href="#sticker" style="fill: limegreen"/>
    <use id="EDGES-l9-o1"  href="#sticker" style="fill: orange"/>

    <use id="EDGES-l10-o0" href="#sticker" style="fill: #26f"/>
    <use id="EDGES-l10-o1" href="#sticker" style="fill: red"/>

    <use id="EDGES-l11-o0" href="#sticker" style="fill: #26f"/>
    <use id="EDGES-l11-o1" href="#sticker" style="fill: orange"/>

    <!-- CENTERS -->
    <!-- TODO: Allow the same sticker to be reused for multiple orientations -->
    <use id="CENTERS-l1-o0" href="#sticker" style="fill: orange"/>
    <use id="CENTERS-l1-o1" href="#sticker" style="fill: orange"/>
    <use id="CENTERS-l1-o2" href="#sticker" style="fill: orange"/>
    <use id="CENTERS-l1-o3" href="#sticker" style="fill: orange"/>

    <use id="CENTERS-l2-o0" href="#sticker" style="fill: limegreen"/>
    <use id="CENTERS-l2-o1" href="#sticker" style="fill: limegreen"/>
    <use id="CENTERS-l2-o2" href="#sticker" style="fill: limegreen"/>
    <use id="CENTERS-l2-o3" href="#sticker" style="fill: limegreen"/>

    <use id="CENTERS-l3-o0" href="#sticker" style="fill: red"/>
    <use id="CENTERS-l3-o1" href="#sticker" style="fill: red"/>
    <use id="CENTERS-l3-o2" href="#sticker" style="fill: red"/>
    <use id="CENTERS-l3-o3" href="#sticker" style="fill: red"/>

    <use id="CENTERS-l4-o0" href="#sticker" style="fill: #26f"/>
    <use id="CENTERS-l4-o1" href="#sticker" style="fill: #26f"/>
    <use id="CENTERS-l4-o2" href="#sticker" style="fill: #26f"/>
    <use id="CENTERS-l4-o3" href="#sticker" style="fill: #26f"/>

    <use id="CENTERS-l5-o0" href="#sticker" style="fill: yellow"/>
    <use id="CENTERS-l5-o1" href="#sticker" style="fill: yellow"/>
    <use id="CENTERS-l5-o2" href="#sticker" style="fill: yellow"/>
    <use id="CENTERS-l5-o3" href="#sticker" style="fill: yellow"/>
  </g>
</svg>`,sx=`<?xml version="1.0" encoding="UTF-8"?>
<svg width="204px" height="204px" viewBox="30 30 196 196" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <title>3x3x3 LL</title>
  <defs>
    <g id="sticker">
        <rect x="-10" y="-10" width="1" height="1" stroke="black" stroke-width="0.04px" />
    </g>
  </defs>
  <g id="3x3x3-LL" stroke="none" stroke-width="4" style="none" stroke-linejoin="round">
    <rect x="32" y="32" width="192" height="192" stroke="black" stroke-width="16px" />
    <rect id="CENTERS-l0-o0" stroke="#000000" style="fill: white" x="96" y="96" width="64" height="64"></rect>
    <rect id="CENTERS-l0-o1" stroke="#000000" style="fill: white" x="96" y="96" width="64" height="64"></rect>
    <rect id="CENTERS-l0-o2" stroke="#000000" style="fill: white" x="96" y="96" width="64" height="64"></rect>
    <rect id="CENTERS-l0-o3" stroke="#000000" style="fill: white" x="96" y="96" width="64" height="64"></rect>

    <rect id="CORNERS-l0-o0" stroke="#000000" style="fill: white" x="160" y="160" width="64" height="64"></rect>
    <rect id="CORNERS-l1-o0" stroke="#000000" style="fill: white" x="160" y="32" width="64" height="64"></rect>
    <rect id="CORNERS-l2-o0" stroke="#000000" style="fill: white" x="32" y="32" width="64" height="64"></rect>
    <rect id="CORNERS-l3-o0" stroke="#000000" style="fill: white" x="32" y="160" width="64" height="64"></rect>

    <rect id="EDGES-l0-o0" stroke="#000000" style="fill: white" x="96" y="160" width="64" height="64"></rect>
    <rect id="EDGES-l1-o0" stroke="#000000" style="fill: white" x="160" y="96" width="64" height="64"></rect>
    <rect id="EDGES-l2-o0" stroke="#000000" style="fill: white" x="96" y="32" width="64" height="64"></rect>
    <rect id="EDGES-l3-o0" stroke="#000000" style="fill: white" x="32" y="96" width="64" height="64"></rect>
  </g>
  <g style="opacity: 0">
    <polygon id="CORNERS-l0-o1" stroke="#000000" style="fill: red" points="224 160 252 160 252 252 224 224"></polygon>
    <polygon id="CORNERS-l0-o2" stroke="#000000" style="fill: limegreen" transform="translate(206, 238) scale(1, -1) rotate(-90) translate(-206, -238) " points="192 192 220 192 220 284 192 256"></polygon>
    <polygon id="CORNERS-l1-o1" stroke="#000000" style="fill: #26f" transform="translate(206, 18) rotate(-90) translate(-206, -18) " points="192 -28 220 -28 220 64 192 36"></polygon>
    <polygon id="CORNERS-l1-o2" stroke="#000000" style="fill: red" transform="translate(238, 50) scale(1, -1) translate(-238, -50) " points="224 4 252 4 252 96 224 68"></polygon>
    <polygon id="CORNERS-l2-o1" stroke="#000000" style="fill: orange" transform="translate(18, 50) scale(-1, -1) translate(-18, -50) " points="4 4 32 4 32 96 4 68"></polygon>
    <polygon id="CORNERS-l2-o2" stroke="#000000" style="fill: #26f" transform="translate(50, 18) scale(1, -1) rotate(90) translate(-50, -18) " points="36 -28 64 -28 64 64 36 36"></polygon>
    <polygon id="CORNERS-l3-o1" stroke="#000000" style="fill: limegreen" transform="translate(50, 238) rotate(90) translate(-50, -238) " points="36 192 64 192 64 284 36 256"></polygon>
    <polygon id="CORNERS-l3-o2" stroke="#000000" style="fill: orange" transform="translate(18, 206) scale(-1, 1) translate(-18, -206) " points="4 160 32 160 32 252 4 224"></polygon>

    <rect id="EDGES-l0-o1" stroke="#000000" style="fill: limegreen" transform="translate(128, 238) scale(1, -1) rotate(90) translate(-128, -238) " x="114" y="206" width="28" height="64"></rect>
    <rect id="EDGES-l1-o1" stroke="#000000" style="fill: red" x="224" y="96" width="28" height="64"></rect>
    <rect id="EDGES-l2-o1" stroke="#000000" style="fill: #26f" transform="translate(128, 18) scale(1, -1) rotate(90) translate(-128, -18) " x="114" y="-14" width="28" height="64"></rect>
    <rect id="EDGES-l3-o1" stroke="#000000" style="fill: orange" x="4" y="96" width="28" height="64"></rect>

    <!-- CORNERS -->
    <use id="CORNERS-l4-o0" href="#sticker" style="fill: yellow"/>
    <use id="CORNERS-l4-o1" href="#sticker" style="fill: limegreen"/>
    <use id="CORNERS-l4-o2" href="#sticker" style="fill: red"/>

    <use id="CORNERS-l5-o0" href="#sticker" style="fill: yellow"/>
    <use id="CORNERS-l5-o1" href="#sticker" style="fill: orange"/>
    <use id="CORNERS-l5-o2" href="#sticker" style="fill: limegreen"/>

    <use id="CORNERS-l6-o0" href="#sticker" style="fill: yellow"/>
    <use id="CORNERS-l6-o1" href="#sticker" style="fill: #26f"/>
    <use id="CORNERS-l6-o2" href="#sticker"  style="fill: orange"/>

    <use id="CORNERS-l7-o0" href="#sticker" style="fill: yellow"/>
    <use id="CORNERS-l7-o1" href="#sticker" style="fill: red"/>
    <use id="CORNERS-l7-o2" href="#sticker" style="fill: #26f"/>

    <!-- EDGES -->
    <use id="EDGES-l4-o0"  href="#sticker" style="fill: yellow"/>
    <use id="EDGES-l4-o1"  href="#sticker" style="fill: limegreen"/>

    <use id="EDGES-l5-o0" href="#sticker" style="fill: yellow"/>
    <use id="EDGES-l5-o1" href="#sticker" style="fill: red"/>

    <use id="EDGES-l6-o0" href="#sticker" style="fill: yellow"/>
    <use id="EDGES-l6-o1" href="#sticker" style="fill: #26f"/>

    <use id="EDGES-l7-o0"  href="#sticker" style="fill: yellow"/>
    <use id="EDGES-l7-o1"  href="#sticker" style="fill: orange"/>

    <use id="EDGES-l8-o0"  href="#sticker" style="fill: limegreen"/>
    <use id="EDGES-l8-o1"  href="#sticker" style="fill: red"/>

    <use id="EDGES-l9-o0"  href="#sticker" style="fill: limegreen"/>
    <use id="EDGES-l9-o1"  href="#sticker" style="fill: orange"/>

    <use id="EDGES-l10-o0" href="#sticker" style="fill: #26f"/>
    <use id="EDGES-l10-o1" href="#sticker" style="fill: red"/>

    <use id="EDGES-l11-o0" href="#sticker" style="fill: #26f"/>
    <use id="EDGES-l11-o1" href="#sticker" style="fill: orange"/>

    <!-- CENTERS -->
    <!-- TODO: Allow the same sticker to be reused for multiple orientations -->
    <use id="CENTERS-l1-o0" href="#sticker" style="fill: orange"/>
    <use id="CENTERS-l1-o1" href="#sticker" style="fill: orange"/>
    <use id="CENTERS-l1-o2" href="#sticker" style="fill: orange"/>
    <use id="CENTERS-l1-o3" href="#sticker" style="fill: orange"/>

    <use id="CENTERS-l2-o0" href="#sticker" style="fill: limegreen"/>
    <use id="CENTERS-l2-o1" href="#sticker" style="fill: limegreen"/>
    <use id="CENTERS-l2-o2" href="#sticker" style="fill: limegreen"/>
    <use id="CENTERS-l2-o3" href="#sticker" style="fill: limegreen"/>

    <use id="CENTERS-l3-o0" href="#sticker" style="fill: red"/>
    <use id="CENTERS-l3-o1" href="#sticker" style="fill: red"/>
    <use id="CENTERS-l3-o2" href="#sticker" style="fill: red"/>
    <use id="CENTERS-l3-o3" href="#sticker" style="fill: red"/>

    <use id="CENTERS-l4-o0" href="#sticker" style="fill: #26f"/>
    <use id="CENTERS-l4-o1" href="#sticker" style="fill: #26f"/>
    <use id="CENTERS-l4-o2" href="#sticker" style="fill: #26f"/>
    <use id="CENTERS-l4-o3" href="#sticker" style="fill: #26f"/>

    <use id="CENTERS-l5-o0" href="#sticker" style="fill: yellow"/>
    <use id="CENTERS-l5-o1" href="#sticker" style="fill: yellow"/>
    <use id="CENTERS-l5-o2" href="#sticker" style="fill: yellow"/>
    <use id="CENTERS-l5-o3" href="#sticker" style="fill: yellow"/>
  </g>
</svg>`});function Ta(t){return new Cd(e=>{e(t())})}function kc(t,e,i,r,n){let o=t.orbits[e].pieces[i];if(o===null)return bi;let a=o.facelets?.[r];return a===null?bi:typeof a=="string"?a:n?a.hintMask??a.mask:(console.log(a),a.mask)}function Uc(t){return ax[t]}async function Jn(t,e){return(await cx(t,e)).toStickeringMask()}async function cx(t,e){let i=await t.kpuzzle(),r=new Fc(i),n=new Oc(i),s=()=>n.move("U"),o=()=>n.or(n.moves(["U","D"])),a=()=>n.or(n.moves(["L","R"])),l=()=>n.not(a()),c=()=>n.not(s()),f=()=>n.orbitPrefix("CENTER"),h=L=>n.and([n.move(L),f()]),u=()=>n.orbitPrefix("EDGE"),p=L=>n.and([n.and(n.moves(L)),u()]),d=()=>n.or([n.orbitPrefix("CORNER"),n.orbitPrefix("C4RNER"),n.orbitPrefix("C5RNER")]),y=()=>n.or([l(),n.and([s(),u()])]),g=()=>n.and([s(),f()]),m=()=>n.and([n.and(n.moves(["F","R"])),u()]),w=()=>n.and([n.and(n.moves(["F","R"])),d(),n.not(s())]),M=()=>n.or([w(),m()]);function x(){r.set(c(),"Dim")}function P(){r.set(s(),"PermuteNonPrimary"),r.set(g(),"Dim")}function T(){r.set(s(),"IgnoreNonPrimary"),r.set(g(),"Regular")}function C(){r.set(s(),"Ignoriented"),r.set(g(),"Dim")}switch(e){case"full":break;case"PLL":{x(),P();break}case"CLS":{x(),r.set(w(),"Regular"),r.set(s(),"Ignoriented"),r.set(n.and([s(),f()]),"Dim"),r.set(n.and([s(),d()]),"IgnoreNonPrimary");break}case"OLL":{x(),T();break}case"EOLL":{x(),T(),r.set(n.and([s(),d()]),"Ignored");break}case"COLL":{x(),r.set(n.and([s(),u()]),"Ignoriented"),r.set(n.and([s(),f()]),"Dim"),r.set(n.and([s(),d()]),"Regular");break}case"OCLL":{x(),C(),r.set(n.and([s(),d()]),"IgnoreNonPrimary");break}case"CPLL":{x(),r.set(n.and([d(),s()]),"PermuteNonPrimary"),r.set(n.and([n.not(d()),s()]),"Dim");break}case"CLL":{x(),r.set(n.not(n.and([d(),s()])),"Dim");break}case"EPLL":{x(),r.set(s(),"Dim"),r.set(n.and([s(),u()]),"PermuteNonPrimary");break}case"ELL":{x(),r.set(s(),"Dim"),r.set(n.and([s(),u()]),"Regular");break}case"ELS":{x(),T(),r.set(n.and([s(),d()]),"Ignored"),r.set(m(),"Regular"),r.set(w(),"Ignored");break}case"LL":{x();break}case"F2L":{r.set(s(),"Ignored");break}case"ZBLL":{x(),r.set(s(),"PermuteNonPrimary"),r.set(g(),"Dim"),r.set(n.and([s(),d()]),"Regular");break}case"ZBLS":{x(),r.set(M(),"Regular"),T(),r.set(n.and([s(),d()]),"Ignored");break}case"VLS":{x(),r.set(M(),"Regular"),T();break}case"WVLS":{x(),r.set(M(),"Regular"),r.set(n.and([s(),u()]),"Ignoriented"),r.set(n.and([s(),f()]),"Dim"),r.set(n.and([s(),d()]),"IgnoreNonPrimary");break}case"LS":{x(),r.set(M(),"Regular"),r.set(s(),"Ignored"),r.set(g(),"Dim");break}case"LSOLL":{x(),T(),r.set(M(),"Regular");break}case"LSOCLL":{x(),C(),r.set(n.and([s(),d()]),"IgnoreNonPrimary"),r.set(M(),"Regular");break}case"EO":{r.set(d(),"Ignored"),r.set(u(),"OrientationWithoutPermutation");break}case"EOline":{r.set(d(),"Ignored"),r.set(u(),"OrientationWithoutPermutation"),r.set(n.and(n.moves(["D","M"])),"Regular");break}case"EOcross":{r.set(u(),"OrientationWithoutPermutation"),r.set(n.move("D"),"Regular"),r.set(d(),"Ignored");break}case"CMLL":{r.set(c(),"Dim"),r.set(y(),"Ignored"),r.set(n.and([s(),d()]),"Regular");break}case"L10P":{r.set(n.not(y()),"Dim"),r.set(n.and([d(),s()]),"Regular");break}case"L6E":{r.set(n.not(y()),"Dim");break}case"L6EO":{r.set(n.not(y()),"Dim"),r.set(y(),"ExperimentalOrientationWithoutPermutation2"),r.set(n.and([f(),o()]),"ExperimentalOrientationWithoutPermutation2"),r.set(n.and([n.move("M"),n.move("E")]),"Ignored");break}case"Daisy":{r.set(n.all(),"Ignored"),r.set(f(),"Dim"),r.set(n.and([n.move("D"),f()]),"Regular"),r.set(n.and([n.move("U"),u()]),"IgnoreNonPrimary");break}case"Cross":{r.set(n.all(),"Ignored"),r.set(f(),"Dim"),r.set(n.and([n.move("D"),f()]),"Regular"),r.set(n.and([n.move("D"),u()]),"Regular");break}case"2x2x2":{r.set(n.or(n.moves(["U","F","R"])),"Ignored"),r.set(n.and([n.or(n.moves(["U","F","R"])),f()]),"Dim");break}case"2x2x3":{r.set(n.all(),"Dim"),r.set(n.or(n.moves(["U","F","R"])),"Ignored"),r.set(n.and([n.or(n.moves(["U","F","R"])),f()]),"Dim"),r.set(n.and([n.move("F"),n.not(n.or(n.moves(["U","R"])))]),"Regular");break}case"G1":{r.set(n.all(),"ExperimentalOrientationWithoutPermutation2"),r.set(n.or(n.moves(["E"])),"OrientationWithoutPermutation"),r.set(n.and(n.moves(["E","S"])),"Ignored");break}case"L2C":{r.set(n.or(n.moves(["L","R","B","D"])),"Dim"),r.set(n.not(f()),"Ignored");break}case"PBL":{r.set(n.all(),"Ignored"),r.set(n.or(n.moves(["U","D"])),"PermuteNonPrimary");break}case"FirstBlock":{r.set(n.not(n.and([n.and(n.moves(["L"])),n.not(s())])),"Ignored"),r.set(h("R"),"Dim");break}case"SecondBlock":{r.set(n.not(n.and([n.and(n.moves(["L"])),n.not(s())])),"Ignored"),r.set(n.and([n.and(n.moves(["L"])),n.not(s())]),"Dim"),r.set(n.and([n.and(n.moves(["R"])),n.not(s())]),"Regular");break}case"EODF":{x(),r.set(n.or([w(),n.and([s(),d()])]),"Ignored"),r.set(n.or([n.and([s(),u()]),m()]),"OrientationWithoutPermutation"),r.set(p(["D","F"]),"Regular"),r.set(h("F"),"Regular");break}case"Void Cube":{r.set(f(),"Invisible");break}case"picture":case"invisible":{r.set(n.all(),"Invisible");break}case"centers-only":{r.set(n.not(f()),"Ignored");break}case"opposite-centers":{r.set(n.not(n.and([f(),n.or(n.moves(["U","D"]))])),"Ignored");break}case"OBL":{r.set(n.or(n.moves(["U","D"])),"IgnoreNonPrimary");break}default:console.warn(`Unsupported stickering for ${t.id}: ${e}. Setting all pieces to dim.`),r.set(n.and(n.moves([])),"Dim")}return r}async function fo(t,e){let i=[],r=[];for(let[n,s]of Object.entries(lx))s.groups&&(t in s.groups?i.push(n):e?.use3x3x3Fallbacks&&"3x3x3"in s.groups&&r.push(n));return i.concat(r)}function ct(t){let e=null;return()=>e??=t()}async function Da(t){return(await Promise.resolve().then(()=>(Zn(),Kn))).getPuzzleGeometryByName(t,{allMoves:!0,orientCenters:!0,addRotations:!0})}async function fx(t){return(await Promise.resolve().then(()=>(Zn(),Kn))).getPuzzleGeometryByName(t)}async function Ad(t,e,i){let r=await t,n=r.getKPuzzleDefinition(!0);n.name=e;let s=await Promise.resolve().then(()=>(Zn(),Kn)),o=new s.ExperimentalPGNotation(r,r.getOrbitsDef(!0));if(i){let a=new Set(i);for(let[l,c]of Object.entries(n.defaultPattern))a.has(l)&&(c.orientationMod=new Array(c.pieces.length).fill(1))}return new zi(o.remapKPuzzleDefinition(n),{experimentalPGNotation:o})}function Td(t){return new Cd(async e=>{let i=await t();e({quantumMoveOrder:r=>i.moveToTransformation(new b(r)).repetitionOrder()})})}function Dd(t){let e=t.patternData.CENTERS.pieces[0],i=t.patternData.CENTERS.pieces[5],r=t.patternData.CENTERS.pieces[1],n=r;return e<r&&n--,i<r&&n--,[e,n]}function dx(){if(!hx){let t=["","z","x","z'","x'","x2"].map(i=>he.fromString(i)),e=new he("y");for(let i of t){let r=kd.algToTransformation(i);for(let n=0;n<4;n++){r=r.applyAlg(e);let[s,o]=Dd(r.toKPattern());Md[s][o]=r.invert()}}}return Md}function ux(t){let[e,i]=Dd(t),r=dx()[e][i];return t.applyTransformation(r)}function px(t,e){return e.ignorePuzzleOrientation&&(t=ux(t)),e.ignoreCenterOrientation&&(t=new va(t.kpuzzle,{EDGES:t.patternData.EDGES,CORNERS:t.patternData.CORNERS,CENTERS:{pieces:t.patternData.CENTERS.pieces,orientation:new Array(6).fill(0)}})),!!t.experimentalToTransformation()?.isIdentityTransformation()}async function Ld(t){let e=await(t.puzzleSpecificSimplifyOptions??t.puzzleSpecificSimplifyOptionsPromise);return e?{puzzleLoader:{puzzleSpecificSimplifyOptions:e}}:{}}async function $n(t,e){return(await Promise.resolve().then(()=>(Zn(),Kn))).getPuzzleGeometryByDesc(t,{allMoves:e?.allMoves??!0,orientCenters:e?.orientCenters??!0,addRotations:e?.addRotations??!0,...e})}async function zc(t,e){let i=$n(t,e);return Ad(i,`description: ${t}`)}function Nd(t,e){let i=gx++,r=null,n=async()=>r??=zc(t),s={id:`custom-${i}`,fullName:e?.fullName??`Custom Puzzle (instance #${i})`,kpuzzle:n,svg:async()=>(await $n(t)).generatesvg(),pg:async()=>$n(t),basePG:async()=>$n(t,{allMoves:!1,orientCenters:!1,addRotations:!1}),puzzleSpecificSimplifyOptionsPromise:Td(n)};return e?.inventedBy&&(s.inventedBy=e.inventedBy),e?.inventionYear&&(s.inventionYear=e.inventionYear),s}function Id(t){let i=t.experimentalToTransformation().invert().transformationData.CORNERS;return i.permutation[6]*3+i.orientationDelta[6]}function Sx(t){if(!yx){let e=["","z","x","z'","x'","x2"].map(r=>he.fromString(r)),i=new he("y");for(let r of e){let n=t.algToTransformation(r);for(let s=0;s<4;s++){n=n.applyAlg(i);let o=Id(n.toKPattern());Rd[o]={transformation:n.invert(),alg:r.concat(i)}}}}return Rd}function vx(t){let e=Id(t),{transformation:i,alg:r}=Sx(t.kpuzzle)[e];return{normalizedPattern:t.applyTransformation(i),normalizationAlg:r.invert()}}function Pd(t,e){return e.ignorePuzzleOrientation&&(t=vx(t).normalizedPattern),!!t.experimentalToTransformation().isIdentityTransformation()}function zt(t,e,i,r){let n=[];for(let s of t){let o=b.fromString(s),{family:a,amount:l}=o;if(![-1,1].includes(l))throw new Error("Invalid config move");n.push({family:a,direction:l,type:e,from:i,to:r})}return n}function bd(t,e){let i=Ud[t][e]?.[0];if(!i)throw new Error(`Could not find a reference move (axis: ${t}, move source type: ${e})`);return i}function Ex(t,e,i,r){if(e+1===i){let u=Fd[t].get(e);if(u)return new b(new ke(u.family),r*u.direction)}let n=xn[t],{sliceDiameter:s}=n;if(e===0&&i===s){let u=bd(t,5);return new b(new ke(u.family),r*u.direction)}let o=e+i>s;o&&([e,i]=[s-i,s-e]);let a=e+1,l=i,c=a===l;c&&(l=null),a===1&&(a=null),c&&a===1&&(l=null),!c&&l===2&&(l=null);let h=bd(t,c?o?1:0:o?3:2);return new b(new ke(h.family,l,a),r*h.direction)}function _x(t,e=!0){if(t.length===0)return[];let i=co[t[0].family].axis,r=xn[i],{sliceDiameter:n}=r,s=new Map,o=null;function a(u,p){let d=(s.get(u)??0)+p;e&&(d=d%4+5%4-1),d===0?s.delete(u):s.set(u,d)}let l=0;for(let u of Array.from(t).reverse()){l++;let{moveSourceInfo:p}=co[u.family],d=u.amount*p.direction;switch(p.type){case 0:{let y=(u.innerLayer??1)-1;a(y,d),a(y+1,-d);break}case 1:{let y=n-(u.innerLayer??1);a(y,d),a(y+1,-d);break}case 2:{a((u.outerLayer??1)-1,d),a(u.innerLayer??2,-d);break}case 3:{a(n-(u.innerLayer??2),d),a(n-((u.outerLayer??1)-1),-d);break}case 4:{a(p.from,d),a(p.to,-d);break}case 5:{a(0,d),a(n,-d);break}}[0,2].includes(s.size)&&(o={suffixLength:l,sliceDeltas:new Map(s)})}if(s.size===0)return[];if(!o)return t;let[c,f]=o.sliceDeltas.keys();c>f&&([c,f]=[f,c]);let h=o.sliceDeltas.get(c);return[...t.slice(0,-o.suffixLength),...h!==0?[Ex(i,c,f,h)]:[]]}var Cd,vn,bi,bt,Qn,ox,ao,Sn,lo,ax,Fc,Oc,_d,wd,Bi,Vr,lx,Gi,es,ho,Md,hx,mx,uR,gx,Rd,yx,kd,Bc,Gc,xn,co,Ud,Fd,xx,wx,La,En,ts=A(()=>{so();xr();Cd=class Aa extends Promise{constructor(e){super(i=>{i()}),this._executor=e}static from(e){return new Aa(i=>{i(e())})}static resolve(e){return new Aa(i=>{i(e)})}static reject(e){return new Aa((i,r)=>{r(e)})}then(e,i){return this._promise=this._promise||new Promise(this._executor),this._promise.then(e,i)}catch(e){return this._promise=this._promise||new Promise(this._executor),this._promise.catch(e)}};vn=class{stickerings=new Map;constructor(t,e){for(let i of t.definition.orbits)this.stickerings.set(i.orbitName,new Array(i.numPieces).fill(e))}},bi="regular",bt="ignored",Qn="oriented",ox="experimentalOriented2",ao="invisible",Sn="dim",lo="mystery",ax={Regular:{facelets:[bi,bi,bi,bi,bi]},Ignored:{facelets:[bt,bt,bt,bt,bt]},OrientationStickers:{facelets:[Qn,Qn,Qn,Qn,Qn]},IgnoreNonPrimary:{facelets:[bi,bt,bt,bt,bt]},Invisible:{facelets:[ao,ao,ao,ao,ao]},PermuteNonPrimary:{facelets:[Sn,bi,bi,bi,bi]},Dim:{facelets:[Sn,Sn,Sn,Sn,Sn]},Ignoriented:{facelets:[Sn,bt,bt,bt,bt]},OrientationWithoutPermutation:{facelets:[Qn,bt,bt,bt,bt]},ExperimentalOrientationWithoutPermutation2:{facelets:[ox,bt,bt,bt,bt]},Mystery:{facelets:[lo,lo,lo,lo,lo]}};Fc=class extends vn{constructor(t){super(t,"Regular")}set(t,e){for(let[i,r]of this.stickerings.entries())for(let n=0;n<r.length;n++)t.stickerings.get(i)[n]&&(r[n]=e);return this}toStickeringMask(){let t={orbits:{}};for(let[e,i]of this.stickerings.entries()){let r=[],n={pieces:r};t.orbits[e]=n;for(let s of i)r.push(Uc(s))}return t}},Oc=class{constructor(t){this.kpuzzle=t}and(t){let e=new vn(this.kpuzzle,!1);for(let i of this.kpuzzle.definition.orbits)e:for(let r=0;r<i.numPieces;r++){e.stickerings.get(i.orbitName)[r]=!0;for(let n of t)if(!n.stickerings.get(i.orbitName)[r]){e.stickerings.get(i.orbitName)[r]=!1;continue e}}return e}or(t){let e=new vn(this.kpuzzle,!1);for(let i of this.kpuzzle.definition.orbits)e:for(let r=0;r<i.numPieces;r++){e.stickerings.get(i.orbitName)[r]=!1;for(let n of t)if(n.stickerings.get(i.orbitName)[r]){e.stickerings.get(i.orbitName)[r]=!0;continue e}}return e}not(t){let e=new vn(this.kpuzzle,!1);for(let i of this.kpuzzle.definition.orbits)for(let r=0;r<i.numPieces;r++)e.stickerings.get(i.orbitName)[r]=!t.stickerings.get(i.orbitName)[r];return e}all(){return this.and(this.moves([]))}move(t){let e=this.kpuzzle.moveToTransformation(t),i=new vn(this.kpuzzle,!1);for(let r of this.kpuzzle.definition.orbits)for(let n=0;n<r.numPieces;n++)(e.transformationData[r.orbitName].permutation[n]!==n||e.transformationData[r.orbitName].orientationDelta[n]!==0)&&(i.stickerings.get(r.orbitName)[n]=!0);return i}moves(t){return t.map(e=>this.move(e))}orbits(t){let e=new vn(this.kpuzzle,!1);for(let i of t)e.stickerings.get(i).fill(!0);return e}orbitPrefix(t){let e=new vn(this.kpuzzle,!1);for(let i of this.kpuzzle.definition.orbits)i.orbitName.startsWith(t)&&e.stickerings.get(i.orbitName).fill(!0);return e}},_d="Last Layer",wd="Last Slot",Bi={"3x3x3":_d,megaminx:_d},Vr={"3x3x3":wd,megaminx:wd},lx={full:{groups:{"3x3x3":"Stickering",megaminx:"Stickering"}},OLL:{groups:Bi},PLL:{groups:Bi},LL:{groups:Bi},EOLL:{groups:Bi},COLL:{groups:Bi},OCLL:{groups:Bi},CPLL:{groups:Bi},CLL:{groups:Bi},EPLL:{groups:Bi},ELL:{groups:Bi},ZBLL:{groups:Bi},LS:{groups:Vr},LSOLL:{groups:Vr},LSOCLL:{groups:Vr},ELS:{groups:Vr},CLS:{groups:Vr},ZBLS:{groups:Vr},VLS:{groups:Vr},WVLS:{groups:Vr},F2L:{groups:{"3x3x3":"CFOP (Fridrich)"}},Daisy:{groups:{"3x3x3":"CFOP (Fridrich)"}},Cross:{groups:{"3x3x3":"CFOP (Fridrich)"}},EO:{groups:{"3x3x3":"ZZ"}},EOline:{groups:{"3x3x3":"ZZ"}},EOcross:{groups:{"3x3x3":"ZZ"}},FirstBlock:{groups:{"3x3x3":"Roux"}},SecondBlock:{groups:{"3x3x3":"Roux"}},CMLL:{groups:{"3x3x3":"Roux"}},L10P:{groups:{"3x3x3":"Roux"}},L6E:{groups:{"3x3x3":"Roux"}},L6EO:{groups:{"3x3x3":"Roux"}},"2x2x2":{groups:{"3x3x3":"Petrus"}},"2x2x3":{groups:{"3x3x3":"Petrus"}},EODF:{groups:{"3x3x3":"Nautilus"}},G1:{groups:{"3x3x3":"FMC"}},L2C:{groups:{"4x4x4":"Reduction","5x5x5":"Reduction","6x6x6":"Reduction"}},OBL:{groups:{"2x2x2":"General"}},PBL:{groups:{"2x2x2":"Ortega"}},"Void Cube":{groups:{"3x3x3":"Miscellaneous"}},invisible:{groups:{"3x3x3":"Miscellaneous"}},picture:{groups:{"3x3x3":"Miscellaneous"}},"centers-only":{groups:{"3x3x3":"Miscellaneous"}},"opposite-centers":{groups:{"4x4x4":"Reduction"}},"experimental-centers-U":{},"experimental-centers-U-D":{},"experimental-centers-U-L-D":{},"experimental-centers-U-L-B-D":{},"experimental-centers":{},"experimental-fto-fc":{groups:{fto:"Bencisco"}},"experimental-fto-f2t":{groups:{fto:"Bencisco"}},"experimental-fto-sc":{groups:{fto:"Bencisco"}},"experimental-fto-l2c":{groups:{fto:"Bencisco"}},"experimental-fto-lbt":{groups:{fto:"Bencisco"}},"experimental-fto-l3t":{groups:{fto:"Bencisco"}}};Gi=class{pgId;id;fullName;inventedBy;inventionYear;#e;constructor(t){this.pgId=t.pgID,this.id=t.id,this.fullName=t.fullName,this.inventedBy=t.inventedBy,this.inventionYear=t.inventionYear,this.#e=t.setOrientationModTo1ForPiecesOfOrbits}#t;pg(){return this.#t??=Da(this.pgId??this.id)}#i;basePG(){return this.#i??=fx(this.pgId??this.id)}#r;kpuzzle(){return this.#r??=Ad(this.pg(),this.id,this.#e)}#s;svg(){return this.#s??=(async()=>(await this.pg()).generatesvg())()}puzzleSpecificSimplifyOptionsPromise=Td(this.kpuzzle.bind(this))},es=class extends Gi{stickeringMask(t){return Jn(this,t)}stickerings=()=>fo(this.id,{use3x3x3Fallbacks:!0});algTransformData=La};ho={name:"3x3x3",orbits:[{orbitName:"EDGES",numPieces:12,numOrientations:2},{orbitName:"CORNERS",numPieces:8,numOrientations:3},{orbitName:"CENTERS",numPieces:6,numOrientations:4}],defaultPattern:{EDGES:{pieces:[0,1,2,3,4,5,6,7,8,9,10,11],orientation:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{pieces:[0,1,2,3,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{pieces:[0,1,2,3,4,5],orientation:[0,0,0,0,0,0],orientationMod:[1,1,1,1,1,1]}},moves:{U:{EDGES:{permutation:[1,2,3,0,4,5,6,7,8,9,10,11],orientationDelta:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{permutation:[1,2,3,0,4,5,6,7],orientationDelta:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,1,2,3,4,5],orientationDelta:[1,0,0,0,0,0]}},y:{EDGES:{permutation:[1,2,3,0,5,6,7,4,10,8,11,9],orientationDelta:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[1,2,3,0,7,4,5,6],orientationDelta:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,2,3,4,1,5],orientationDelta:[1,0,0,0,0,3]}},x:{EDGES:{permutation:[4,8,0,9,6,10,2,11,5,7,1,3],orientationDelta:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[4,0,3,5,7,6,2,1],orientationDelta:[2,1,2,1,1,2,1,2]},CENTERS:{permutation:[2,1,5,3,0,4],orientationDelta:[0,3,0,1,2,2]}},L:{EDGES:{permutation:[0,1,2,11,4,5,6,9,8,3,10,7],orientationDelta:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{permutation:[0,1,6,2,4,3,5,7],orientationDelta:[0,0,2,1,0,2,1,0]},CENTERS:{permutation:[0,1,2,3,4,5],orientationDelta:[0,1,0,0,0,0]}},F:{EDGES:{permutation:[9,1,2,3,8,5,6,7,0,4,10,11],orientationDelta:[1,0,0,0,1,0,0,0,1,1,0,0]},CORNERS:{permutation:[3,1,2,5,0,4,6,7],orientationDelta:[1,0,0,2,2,1,0,0]},CENTERS:{permutation:[0,1,2,3,4,5],orientationDelta:[0,0,1,0,0,0]}},R:{EDGES:{permutation:[0,8,2,3,4,10,6,7,5,9,1,11],orientationDelta:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{permutation:[4,0,2,3,7,5,6,1],orientationDelta:[2,1,0,0,1,0,0,2]},CENTERS:{permutation:[0,1,2,3,4,5],orientationDelta:[0,0,0,1,0,0]}},B:{EDGES:{permutation:[0,1,10,3,4,5,11,7,8,9,6,2],orientationDelta:[0,0,1,0,0,0,1,0,0,0,1,1]},CORNERS:{permutation:[0,7,1,3,4,5,2,6],orientationDelta:[0,2,1,0,0,0,2,1]},CENTERS:{permutation:[0,1,2,3,4,5],orientationDelta:[0,0,0,0,1,0]}},D:{EDGES:{permutation:[0,1,2,3,7,4,5,6,8,9,10,11],orientationDelta:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{permutation:[0,1,2,3,5,6,7,4],orientationDelta:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,1,2,3,4,5],orientationDelta:[0,0,0,0,0,1]}},z:{EDGES:{permutation:[9,3,11,7,8,1,10,5,0,4,2,6],orientationDelta:[1,1,1,1,1,1,1,1,1,1,1,1]},CORNERS:{permutation:[3,2,6,5,0,4,7,1],orientationDelta:[1,2,1,2,2,1,2,1]},CENTERS:{permutation:[1,5,2,0,4,3],orientationDelta:[1,1,1,1,3,1]}},M:{EDGES:{permutation:[2,1,6,3,0,5,4,7,8,9,10,11],orientationDelta:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[0,1,2,3,4,5,6,7],orientationDelta:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[4,1,0,3,5,2],orientationDelta:[2,0,0,0,2,0]}},E:{EDGES:{permutation:[0,1,2,3,4,5,6,7,9,11,8,10],orientationDelta:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[0,1,2,3,4,5,6,7],orientationDelta:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,4,1,2,3,5],orientationDelta:[0,0,0,0,0,0]}},S:{EDGES:{permutation:[0,3,2,7,4,1,6,5,8,9,10,11],orientationDelta:[0,1,0,1,0,1,0,1,0,0,0,0]},CORNERS:{permutation:[0,1,2,3,4,5,6,7],orientationDelta:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[1,5,2,0,4,3],orientationDelta:[1,1,0,1,0,1]}},u:{EDGES:{permutation:[1,2,3,0,4,5,6,7,10,8,11,9],orientationDelta:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[1,2,3,0,4,5,6,7],orientationDelta:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,2,3,4,1,5],orientationDelta:[1,0,0,0,0,0]}},l:{EDGES:{permutation:[2,1,6,11,0,5,4,9,8,3,10,7],orientationDelta:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[0,1,6,2,4,3,5,7],orientationDelta:[0,0,2,1,0,2,1,0]},CENTERS:{permutation:[4,1,0,3,5,2],orientationDelta:[2,1,0,0,2,0]}},f:{EDGES:{permutation:[9,3,2,7,8,1,6,5,0,4,10,11],orientationDelta:[1,1,0,1,1,1,0,1,1,1,0,0]},CORNERS:{permutation:[3,1,2,5,0,4,6,7],orientationDelta:[1,0,0,2,2,1,0,0]},CENTERS:{permutation:[1,5,2,0,4,3],orientationDelta:[1,1,1,1,0,1]}},r:{EDGES:{permutation:[4,8,0,3,6,10,2,7,5,9,1,11],orientationDelta:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[4,0,2,3,7,5,6,1],orientationDelta:[2,1,0,0,1,0,0,2]},CENTERS:{permutation:[2,1,5,3,0,4],orientationDelta:[0,0,0,1,2,2]}},b:{EDGES:{permutation:[0,5,10,1,4,7,11,3,8,9,6,2],orientationDelta:[0,1,1,1,0,1,1,1,0,0,1,1]},CORNERS:{permutation:[0,7,1,3,4,5,2,6],orientationDelta:[0,2,1,0,0,0,2,1]},CENTERS:{permutation:[3,0,2,5,4,1],orientationDelta:[3,3,0,3,1,3]}},d:{EDGES:{permutation:[0,1,2,3,7,4,5,6,9,11,8,10],orientationDelta:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[0,1,2,3,5,6,7,4],orientationDelta:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,4,1,2,3,5],orientationDelta:[0,0,0,0,0,1]}}},derivedMoves:{Uw:"u",Lw:"l",Fw:"f",Rw:"r",Bw:"b",Dw:"d",Uv:"y",Lv:"x'",Fv:"z",Rv:"x",Bv:"z'",Dv:"y'","2U":"u U'","2L":"l L'","2F":"f F'","2R":"r R'","2B":"b B'","2D":"d D'"}};Md=new Array(6).fill(0).map(()=>new Array(6)),hx=!1;mx=class extends ir{traverseAlg(t,e){let i=[];for(let r of t.childAlgNodes())i.push(this.traverseAlgNode(r,e));return new he(i)}traverseGrouping(t,e){return t.modified({alg:this.traverseAlg(t.alg,e)})}traverseMove(t,e){let i=(()=>{let{invertExceptByFamily:r}=e;return r?!r.has(t.family):!1})();return t.modified({amount:i?-t.amount:t.amount,family:e.replaceMovesByFamily[t.family]??t.family})}traverseCommutator(t,e){return new fi(this.traverseAlg(t.A,e),this.traverseAlg(t.B,e))}traverseConjugate(t,e){return new Wt(this.traverseAlg(t.A,e),this.traverseAlg(t.B,e))}traversePause(t,e){return t}traverseNewline(t,e){return t}traverseLineComment(t,e){return t}},uR=Ot(mx);gx=1;Rd=new Array(24),yx=!1;kd=new zi(ho);ho.experimentalIsPatternSolved=px;Bc=ct(()=>Promise.resolve().then(()=>(Ed(),xd))),Gc={KeyI:new b("R"),KeyK:new b("R'"),KeyW:new b("B"),KeyO:new b("B'"),KeyS:new b("D"),KeyL:new b("D'"),KeyD:new b("L"),KeyE:new b("L'"),KeyJ:new b("U"),KeyF:new b("U'"),KeyH:new b("F"),KeyG:new b("F'"),KeyC:new b("l"),KeyR:new b("l'"),KeyU:new b("r"),KeyM:new b("r'"),KeyX:new b("d"),Comma:new b("d'"),KeyT:new b("x"),KeyY:new b("x"),KeyV:new b("x'"),KeyN:new b("x'"),Semicolon:new b("y"),KeyA:new b("y'"),KeyP:new b("z"),KeyQ:new b("z'"),KeyZ:new b("M'"),KeyB:new b("M"),Period:new b("M'"),Backquote:new Ft};xn={"x axis":{sliceDiameter:3,extendsThroughEntirePuzzle:!0,moveSourceInfos:[...zt(["R"],0,0,3),...zt(["L'"],1,0,3),...zt(["r","Rw"],2,0,2),...zt(["l'","Lw'"],3,0,2),...zt(["M'"],4,1,2),...zt(["x","Uv","Dv'"],5,0,3)]},"y axis":{sliceDiameter:3,extendsThroughEntirePuzzle:!0,moveSourceInfos:[...zt(["U"],0,0,3),...zt(["D'"],1,0,3),...zt(["u","Uw"],2,0,2),...zt(["d'","Dw'"],3,0,2),...zt(["E'"],4,1,2),...zt(["y","Uv","Dv'"],5,0,3)]},"z axis":{sliceDiameter:3,extendsThroughEntirePuzzle:!0,moveSourceInfos:[...zt(["F"],0,0,3),...zt(["B'"],1,0,3),...zt(["f","Fw"],2,0,3),...zt(["b'","Bw'"],3,0,3),...zt(["S"],4,1,2),...zt(["z","Fv","Bv'"],5,0,3)]}},co={};for(let[t,e]of Object.entries(xn))for(let i of e.moveSourceInfos)co[i.family]={axis:t,moveSourceInfo:i};Ud={};for(let t of Object.keys(xn)){let e={};Ud[t]=e;for(let i of xn[t].moveSourceInfos)(e[i.type]??=[]).push(i)}Fd={};for(let t of Object.keys(xn)){let e=new Map;Fd[t]=e;for(let i of xn[t].moveSourceInfos)e.get(i.from)||e.set(i.from,i)}xx=(t,e)=>co[t.family].axis===co[e.family].axis;wx={quantumMoveOrder:()=>4,axis:{areQuantumMovesSameAxis:xx,simplifySameAxisMoves:_x}},La={"\u2194 Mirror (M)":{replaceMovesByFamily:{L:"R",R:"L",l:"r",r:"l",Lw:"Rw",Rw:"Lw",Lv:"Rv",Rv:"Lv"},invertExceptByFamily:new Set(["x","M","m"])},"\u2922 Mirror (S)":{replaceMovesByFamily:{F:"B",B:"F",f:"b",b:"f",Fw:"Bw",Bw:"Fw",Fv:"Bv",Bv:"Fv"},invertExceptByFamily:new Set(["z","S","s"])},"\u2195 Mirror (E)":{replaceMovesByFamily:{U:"D",D:"U",u:"d",d:"u",Uw:"Dw",Dw:"Uw",Uv:"Dv",Dv:"Uv"},invertExceptByFamily:new Set(["y","E","e"])}},En={id:"3x3x3",fullName:"3\xD73\xD73 Cube",inventedBy:["Ern\u0151 Rubik"],inventionYear:1974,kpuzzle:ct(async()=>kd),svg:ct(async()=>(await Promise.resolve().then(()=>(Ca(),ba))).cube3x3x3SVG),llSVG:ct(async()=>(await Promise.resolve().then(()=>(Ca(),ba))).cube3x3x3LLSVG),llFaceSVG:ct(async()=>(await Promise.resolve().then(()=>(Ca(),ba))).cube3x3x3LLFaceSVG),pg:ct(async()=>Da("3x3x3")),stickeringMask:t=>Jn(En,t),stickerings:()=>fo("3x3x3"),puzzleSpecificSimplifyOptions:wx,keyMapping:async()=>Gc,algTransformData:La}});var yi={};zr(yi,{clockJSON:()=>Cx,clockSVG:()=>Ax,cube2x2x2JSON:()=>Mx,cube2x2x2LLSVG:()=>bx,cube2x2x2SVG:()=>Rx,melindas2x2x2x2OrbitJSON:()=>Dx,melindas2x2x2x2OrbitSVG:()=>Lx,pyraminxSVG:()=>Nx,sq1HyperOrbitJSON:()=>Ix,sq1HyperOrbitSVG:()=>Px,triQuadJSON:()=>kx,triQuadSVG:()=>Ux});var Mx,Rx,bx,_n,Hr,is,Cx,Ax,Bt,Tx,Dx,Lx,Nx,Ix,Px,kx,Ux,Si=A(()=>{Mx={name:"2x2x2",orbits:[{orbitName:"CORNERS",numPieces:8,numOrientations:3}],defaultPattern:{CORNERS:{pieces:[0,1,2,3,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]}},moves:{U:{CORNERS:{permutation:[1,2,3,0,4,5,6,7],orientationDelta:[0,0,0,0,0,0,0,0]}},x:{CORNERS:{permutation:[4,0,3,5,7,6,2,1],orientationDelta:[2,1,2,1,1,2,1,2]}},y:{CORNERS:{permutation:[1,2,3,0,7,4,5,6],orientationDelta:[0,0,0,0,0,0,0,0]}}},derivedMoves:{z:"[x: y]",L:"[z: U]",F:"[x: U]",R:"[z': U]",B:"[x': U]",D:"[x2: U]",Uv:"y",Lv:"x'",Fv:"z",Rv:"x",Bv:"z'",Dv:"y'"}},Rx=`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN"
       "http://www.w3.org/TR/2001/REC-SVG-20050904/DTD/svg11.dtd">
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 530 394" preserveAspectRatio="xMidYMid meet">
  <title>2x2x2</title>
  <defs>
    <g id="sticker">
        <rect x="0" y="0" width="1" height="1" stroke="black" stroke-width="0.04px" />
    </g>
  </defs>
  <g id="puzzle" transform="translate(5, 5) scale(60)">
    <use id="CORNERS-l0-o0" href="#sticker" transform="translate(3.2, 1)" style="fill: white"/>
    <use id="CORNERS-l0-o1" href="#sticker" transform="translate(4.4, 2.2)" style="fill: red"/>
    <use id="CORNERS-l0-o2" href="#sticker" transform="translate(3.2, 2.2)" style="fill: limegreen"/>

    <use id="CORNERS-l1-o0" href="#sticker" transform="translate(3.2, 0)" style="fill: white"/>
    <use id="CORNERS-l1-o1" href="#sticker" transform="translate(6.6, 2.2)" style="fill: #26f"/>
    <use id="CORNERS-l1-o2" href="#sticker" transform="translate(5.4, 2.2)" style="fill: red"/>

    <use id="CORNERS-l2-o0" href="#sticker" transform="translate(2.2, 0)" style="fill: white"/>
    <use id="CORNERS-l2-o1" href="#sticker" transform="translate(0, 2.2)" style="fill: orange"/>
    <use id="CORNERS-l2-o2" href="#sticker" transform="translate(7.6, 2.2)" style="fill: #26f"/>

    <use id="CORNERS-l3-o0" href="#sticker" transform="translate(2.2, 1)" style="fill: white"/>
    <use id="CORNERS-l3-o1" href="#sticker" transform="translate(2.2, 2.2)" style="fill: limegreen"/>
    <use id="CORNERS-l3-o2" href="#sticker" transform="translate(1, 2.2)" style="fill: orange"/>

    <use id="CORNERS-l4-o0" href="#sticker" transform="translate(3.2, 4.4)" style="fill: yellow"/>
    <use id="CORNERS-l4-o1" href="#sticker" transform="translate(3.2, 3.2)" style="fill: limegreen"/>
    <use id="CORNERS-l4-o2" href="#sticker" transform="translate(4.4, 3.2)" style="fill: red"/>

    <use id="CORNERS-l5-o0" href="#sticker" transform="translate(2.2, 4.4)" style="fill: yellow"/>
    <use id="CORNERS-l5-o1" href="#sticker" transform="translate(1, 3.2)" style="fill: orange"/>
    <use id="CORNERS-l5-o2" href="#sticker" transform="translate(2.2, 3.2)" style="fill: limegreen"/>

    <use id="CORNERS-l6-o0" href="#sticker" transform="translate(2.2, 5.4)" style="fill: yellow"/>
    <use id="CORNERS-l6-o1" href="#sticker" transform="translate(7.6, 3.2)" style="fill: #26f"/>
    <use id="CORNERS-l6-o2" href="#sticker" transform="translate(0, 3.2)"  style="fill: orange"/>

    <use id="CORNERS-l7-o0" href="#sticker" transform="translate(3.2, 5.4)" style="fill: yellow"/>
    <use id="CORNERS-l7-o1" href="#sticker" transform="translate(5.4, 3.2)" style="fill: red"/>
    <use id="CORNERS-l7-o2" href="#sticker" transform="translate(6.6, 3.2)" style="fill: #26f"/>
  </g>

</svg>`,bx=`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN"
       "http://www.w3.org/TR/2001/REC-SVG-20050904/DTD/svg11.dtd">
    <svg width="288px" height="288px" viewBox="-16 -16 288 288" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
       <title>2x2x2 LL</title>
  <defs>
    <g id="sticker">
        <rect x="0" y="0" width="1" height="1" stroke="black" stroke-width="0.04px" />
    </g>
  </defs>
  <g id="2x2x2-LL" stroke="#000000" stroke-width="4" style="none" stroke-linejoin="round">
    <rect    id="CORNERS-l0-o0" style="fill: white" x="128" y="128" width="76" height="76"></rect>
    <polygon id="CORNERS-l0-o1" style="fill: red" points="204 128 252 128 252 252 204 204"></polygon>
    <polygon id="CORNERS-l0-o2" style="fill: limegreen" transform="translate(206, 238) scale(1, -1) rotate(-90) translate(-206, -238) " points="172 160 220 160 220 284 172 236"></polygon>
    <rect    id="CORNERS-l1-o0" style="fill: white" x="128" y="52" width="76" height="76"></rect>
    <polygon id="CORNERS-l1-o1" style="fill: #26f" transform="translate(206, 18) rotate(-90) translate(-206, -18) " points="172 -60 220 -60 220 64 172 16"></polygon>
    <polygon id="CORNERS-l1-o2" style="fill: red" transform="translate(238, 50) scale(1, -1) translate(-238, -50) " points="204 -28 252 -28 252 96 204 48"></polygon>
    <rect    id="CORNERS-l2-o0" style="fill: white" x="52" y="52" width="76" height="76"></rect>
    <polygon id="CORNERS-l2-o1" style="fill: orange" transform="translate(18, 50) scale(-1, -1) translate(-18, -50) " points="-16 -28 32 -28 32 96 -16 48"></polygon>
    <polygon id="CORNERS-l2-o2" style="fill: #26f" transform="translate(50, 18) scale(1, -1) rotate(90) translate(-50, -18) " points="16 -60 64 -60 64 64 16 16"></polygon>
    <rect    id="CORNERS-l3-o0" style="fill: white" x="52" y="128" width="76" height="76"></rect>
    <polygon id="CORNERS-l3-o1" style="fill: limegreen" transform="translate(50, 238) rotate(90) translate(-50, -238) " points="16 160 64 160 64 284 16 236"></polygon>
    <polygon id="CORNERS-l3-o2" style="fill: orange" transform="translate(18, 206) scale(-1, 1) translate(-18, -206) " points="-16 128 32 128 32 252 -16 204"></polygon>
  </g>
  <g style="opacity: 0">
    <use id="CORNERS-l4-o0" href="#sticker" style="fill: yellow"/>
    <use id="CORNERS-l4-o1" href="#sticker" style="fill: limegreen"/>
    <use id="CORNERS-l4-o2" href="#sticker" style="fill: red"/>

    <use id="CORNERS-l5-o0" href="#sticker" style="fill: yellow"/>
    <use id="CORNERS-l5-o1" href="#sticker" style="fill: orange"/>
    <use id="CORNERS-l5-o2" href="#sticker" style="fill: limegreen"/>

    <use id="CORNERS-l6-o0" href="#sticker" style="fill: yellow"/>
    <use id="CORNERS-l6-o1" href="#sticker" style="fill: #26f"/>
    <use id="CORNERS-l6-o2" href="#sticker"  style="fill: orange"/>

    <use id="CORNERS-l7-o0" href="#sticker" style="fill: yellow"/>
    <use id="CORNERS-l7-o1" href="#sticker" style="fill: red"/>
    <use id="CORNERS-l7-o2" href="#sticker" style="fill: #26f"/>
  </g>
</svg>`,_n=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],Hr=new Array(18).fill(0),is={permutation:_n,orientationDelta:Hr},Cx={name:"clock",orbits:[{orbitName:"DIALS",numPieces:18,numOrientations:12},{orbitName:"FACES",numPieces:18,numOrientations:1},{orbitName:"FRAME",numPieces:1,numOrientations:2},{orbitName:"HOUR_MARKS",numPieces:18,numOrientations:4}],defaultPattern:{DIALS:{pieces:_n,orientation:Hr},FACES:{pieces:_n,orientation:Hr},FRAME:{pieces:[0],orientation:[0]},HOUR_MARKS:{pieces:_n,orientation:Hr}},moves:{UL_PLUS_:{DIALS:{permutation:_n,orientationDelta:[1,1,0,1,1,0,0,0,0,0,0,11,0,0,0,0,0,0]},FACES:is,FRAME:{permutation:[0],orientationDelta:[0]},HOUR_MARKS:is},U_PLUS_:{DIALS:{permutation:_n,orientationDelta:[1,1,1,1,1,1,0,0,0,11,0,11,0,0,0,0,0,0]},FACES:is,FRAME:{permutation:[0],orientationDelta:[0]},HOUR_MARKS:is},ALL_PLUS_:{DIALS:{permutation:_n,orientationDelta:[1,1,1,1,1,1,1,1,1,11,0,11,0,0,0,11,0,11]},FACES:is,FRAME:{permutation:[0],orientationDelta:[0]},HOUR_MARKS:is},y2:{DIALS:{permutation:[9,10,11,12,13,14,15,16,17,0,1,2,3,4,5,6,7,8],orientationDelta:Hr},FACES:{permutation:[9,10,11,12,13,14,15,16,17,0,1,2,3,4,5,6,7,8],orientationDelta:Hr},FRAME:{permutation:[0],orientationDelta:[1]},HOUR_MARKS:{permutation:[9,10,11,12,13,14,15,16,17,0,1,2,3,4,5,6,7,8],orientationDelta:Hr}},z:{DIALS:{permutation:[6,3,0,7,4,1,8,5,2,11,14,17,10,13,16,9,12,15],orientationDelta:[3,3,3,3,3,3,3,3,3,9,9,9,9,9,9,9,9,9]},FACES:{permutation:[6,3,0,7,4,1,8,5,2,11,14,17,10,13,16,9,12,15],orientationDelta:Hr},FRAME:{permutation:[0],orientationDelta:[0]},HOUR_MARKS:{permutation:[6,3,0,7,4,1,8,5,2,11,14,17,10,13,16,9,12,15],orientationDelta:[1,1,1,1,1,1,1,1,1,-1,-1,-1,-1,-1,-1,-1,-1,-1]}}},derivedMoves:{UR_PLUS_:"[z': UL_PLUS_]",DR_PLUS_:"[z2: UL_PLUS_]",DL_PLUS_:"[z: UL_PLUS_]",R_PLUS_:"[z': U_PLUS_]",D_PLUS_:"[z2: U_PLUS_]",L_PLUS_:"[z: U_PLUS_]",F_PLUS_:"ALL_PLUS_",x2:"y2 z2",ULw_PLUS_:"U_PLUS_ L_PLUS_ UL_PLUS_'",URw_PLUS_:"U_PLUS_ R_PLUS_ UR_PLUS_'",DLw_PLUS_:"D_PLUS_ L_PLUS_ DL_PLUS_'",DRw_PLUS_:"D_PLUS_ R_PLUS_ DR_PLUS_'",BULw_PLUS_:"[y2: URw_PLUS_']",BURw_PLUS_:"[y2: ULw_PLUS_']",BDLw_PLUS_:"[y2: DRw_PLUS_']",BDRw_PLUS_:"[y2: DLw_PLUS_']",B_PLUS_:"[y2: ALL_PLUS_']",BU_PLUS_:"[y2: U_PLUS_']",BR_PLUS_:"[y2: L_PLUS_']",BD_PLUS_:"[y2: D_PLUS_']",BL_PLUS_:"[y2: R_PLUS_']",BUR_PLUS_:"[y2: UL_PLUS_']",BUL_PLUS_:"[y2: UR_PLUS_']",BDL_PLUS_:"[y2: DR_PLUS_']",BDR_PLUS_:"[y2: DL_PLUS_']",MUL_PLUS_:"UR_PLUS_' DL_PLUS_' U_PLUS_ R_PLUS_ D_PLUS_ L_PLUS_ ALL_PLUS_'",MUR_PLUS_:"UL_PLUS_' DR_PLUS_' U_PLUS_ L_PLUS_ D_PLUS_ R_PLUS_ ALL_PLUS_'",MDR_PLUS_:"MUL_PLUS_",MDL_PLUS_:"MUR_PLUS_",BMUL_PLUS_:"[y2: MUR_PLUS_']",BMUR_PLUS_:"[y2: MUL_PLUS_']",BMDR_PLUS_:"[y2: MDL_PLUS_']",BMDL_PLUS_:"[y2: MDR_PLUS_']",UL:".",UR:".",DL:".",DR:"."}},Ax=`<?xml version="1.0" encoding="UTF-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 480 240" preserveAspectRatio="xMidYMid meet">
  <title>clock</title>
  <defs>
    <g id="hand" transform="translate(-20, -20)">
      <path d="M19.9995197,2.22079449 L23.8791657,19.0203611 C23.9580836,19.3338406 24,19.6620253 24,20 C24,22.209139 22.209139,24 20,24 C17.790861,24 16,22.209139 16,20 C16,19.6620253 16.0419164,19.3338406 16.1208343,19.0203611 L19.9995197,2.22079449 Z"></path>
    </g>
    <g id="cardinal_hour">
      <circle cx="0" cy="-24" r="3"></circle>
    </g>
    <g id="background_cardinal_hours" style="fill: #77889999">
      <circle cx="0" cy="24" r="1.5"></circle>
      <circle cx="-24" cy="0" r="1.5"></circle>
      <circle cx="24" cy="0" r="1.5"></circle>
      <circle cx="0" cy="-24" r="1.5"></circle>
    </g>
    <g id="background_face_hours">
      <g>
        <use href="#background_cardinal_hours"/>
      </g>
      <g transform="rotate(30)">
        <use href="#background_cardinal_hours"/>
      </g>
      <g  transform="rotate(60)">
        <use href="#background_cardinal_hours"/>
      </g>
    </g>
    <g id="peg">
      <circle id="PEG4" cx="0" cy="0" r="8"></circle>
    </g>
    <g id="frame" transform="translate(-24, -24)">
      <path stroke="#000000" d="M120,20 C137.495665,20 153.941932,24.4930026 168.247913,32.3881183 C171.855881,30.8514056 175.828512,30 180,30 C196.568542,30 210,43.4314575 210,60 C210,64.1714878 209.148594,68.1441192 207.610077,71.7536009 C215.506997,86.0580678 220,102.504335 220,120 C220,137.495665 215.506997,153.941932 207.611882,168.247913 C209.148594,171.855881 210,175.828512 210,180 C210,196.568542 196.568542,210 180,210 C175.828512,210 171.855881,209.148594 168.246399,207.610077 C153.941932,215.506997 137.495665,220 120,220 C102.504335,220 86.0580678,215.506997 71.7520869,207.611882 C68.1441192,209.148594 64.1714878,210 60,210 C43.4314575,210 30,196.568542 30,180 C30,175.828512 30.8514056,171.855881 32.3899234,168.246399 C24.4930026,153.941932 20,137.495665 20,120 C20,102.504335 24.4930026,86.0580678 32.3881183,71.7520869 C30.8514056,68.1441192 30,64.1714878 30,60 C30,43.4314575 43.4314575,30 60,30 C64.1714878,30 68.1441192,30.8514056 71.7536009,32.3899234 C86.0580678,24.4930026 102.504335,20 120,20 Z"></path>
    </g>
  </defs>
  <g>
    <g transform="translate(24, 24)">
      <use href="#frame" id="FRAME-l0-o0" style="fill: #113366"/>
      <use href="#peg" transform="translate(66, 66)" style="fill: #446699"/>
      <use href="#peg" transform="translate(126, 66)" style="fill: #446699"/>
      <use href="#peg" transform="translate(126, 126)" style="fill: #446699"/>
      <use href="#peg" transform="translate(66, 126)" style="fill: #446699"/>

      <g transform="translate(36, 36)">
        <circle id="FACES-l0-o0" stroke="#000000" style="fill: #CCDDEE" r="20"></circle>
        <use href="#background_face_hours"/>
        <g>
          <use id="HOUR_MARKS-l0-o0" href="#cardinal_hour" transform="rotate(0)" style="fill: #FFCC44"/>
          <use id="HOUR_MARKS-l0-o1" href="#cardinal_hour" transform="rotate(90)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l0-o2" href="#cardinal_hour" transform="rotate(180)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l0-o3" href="#cardinal_hour" transform="rotate(270)" style="fill: #0000"/>
        </g>
        <g>
          <use id="DIALS-l0-o0"  href="#hand" transform="rotate(0)" style="fill: #CC0000"/>
          <use id="DIALS-l0-o1"  href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l0-o2"  href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l0-o3"  href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l0-o4"  href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l0-o5"  href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l0-o6"  href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l0-o7"  href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l0-o8"  href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l0-o9"  href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l0-o10" href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l0-o11" href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(96, 36)">
        <circle id="FACES-l1-o0" stroke="#000000" style="fill: #CCDDEE" r="20"></circle>
        <use href="#background_face_hours"/>
        <g>
          <use id="HOUR_MARKS-l1-o0" href="#cardinal_hour" transform="rotate(0)" style="fill: #FFCC44"/>
          <use id="HOUR_MARKS-l1-o1" href="#cardinal_hour" transform="rotate(90)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l1-o2" href="#cardinal_hour" transform="rotate(180)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l1-o3" href="#cardinal_hour" transform="rotate(270)" style="fill: #0000"/>
        </g>
        <g>
          <use id="DIALS-l1-o0"  href="#hand" transform="rotate(0)" style="fill: #CC0000"/>
          <use id="DIALS-l1-o1"  href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l1-o2"  href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l1-o3"  href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l1-o4"  href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l1-o5"  href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l1-o6"  href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l1-o7"  href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l1-o8"  href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l1-o9"  href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l1-o10" href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l1-o11" href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(156, 36)">
        <circle id="FACES-l2-o0" stroke="#000000" style="fill: #CCDDEE" r="20"></circle>
        <use href="#background_face_hours"/>
        <g>
          <use id="HOUR_MARKS-l2-o0" href="#cardinal_hour" transform="rotate(0)" style="fill: #FFCC44"/>
          <use id="HOUR_MARKS-l2-o1" href="#cardinal_hour" transform="rotate(90)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l2-o2" href="#cardinal_hour" transform="rotate(180)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l2-o3" href="#cardinal_hour" transform="rotate(270)" style="fill: #0000"/>
        </g>
        <g>
          <use id="DIALS-l2-o0"  href="#hand" transform="rotate(0)" style="fill: #CC0000"/>
          <use id="DIALS-l2-o1"  href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l2-o2"  href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l2-o3"  href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l2-o4"  href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l2-o5"  href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l2-o6"  href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l2-o7"  href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l2-o8"  href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l2-o9"  href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l2-o10" href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l2-o11" href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(36, 96)">
        <circle id="FACES-l3-o0" stroke="#000000" style="fill: #CCDDEE" r="20"></circle>
        <use href="#background_face_hours"/>
        <g>
          <use id="HOUR_MARKS-l3-o0" href="#cardinal_hour" transform="rotate(0)" style="fill: #FFCC44"/>
          <use id="HOUR_MARKS-l3-o1" href="#cardinal_hour" transform="rotate(90)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l3-o2" href="#cardinal_hour" transform="rotate(180)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l3-o3" href="#cardinal_hour" transform="rotate(270)" style="fill: #0000"/>
        </g>
        <g>
          <use id="DIALS-l3-o0"  href="#hand" transform="rotate(0)" style="fill: #CC0000"/>
          <use id="DIALS-l3-o1"  href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l3-o2"  href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l3-o3"  href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l3-o4"  href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l3-o5"  href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l3-o6"  href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l3-o7"  href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l3-o8"  href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l3-o9"  href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l3-o10" href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l3-o11" href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(96, 96)">
        <circle id="FACES-l4-o0" stroke="#000000" style="fill: #CCDDEE" r="20"></circle>
        <use href="#background_face_hours"/>
        <g>
          <use id="HOUR_MARKS-l4-o0" href="#cardinal_hour" transform="rotate(0)" style="fill: #FFCC44"/>
          <use id="HOUR_MARKS-l4-o1" href="#cardinal_hour" transform="rotate(90)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l4-o2" href="#cardinal_hour" transform="rotate(180)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l4-o3" href="#cardinal_hour" transform="rotate(270)" style="fill: #0000"/>
        </g>
        <g>
          <use id="DIALS-l4-o0"  href="#hand" transform="rotate(0)" style="fill: #CC0000"/>
          <use id="DIALS-l4-o1"  href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l4-o2"  href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l4-o3"  href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l4-o4"  href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l4-o5"  href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l4-o6"  href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l4-o7"  href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l4-o8"  href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l4-o9"  href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l4-o10" href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l4-o11" href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(156, 96)">
        <circle id="FACES-l5-o0" stroke="#000000" style="fill: #CCDDEE" r="20"></circle>
        <use href="#background_face_hours"/>
        <g>
          <use id="HOUR_MARKS-l5-o0" href="#cardinal_hour" transform="rotate(0)" style="fill: #FFCC44"/>
          <use id="HOUR_MARKS-l5-o1" href="#cardinal_hour" transform="rotate(90)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l5-o2" href="#cardinal_hour" transform="rotate(180)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l5-o3" href="#cardinal_hour" transform="rotate(270)" style="fill: #0000"/>
        </g>
        <g>
          <use id="DIALS-l5-o0"  href="#hand" transform="rotate(0)" style="fill: #CC0000"/>
          <use id="DIALS-l5-o1"  href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l5-o2"  href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l5-o3"  href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l5-o4"  href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l5-o5"  href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l5-o6"  href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l5-o7"  href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l5-o8"  href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l5-o9"  href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l5-o10" href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l5-o11" href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(36, 156)">
        <circle id="FACES-l6-o0" stroke="#000000" style="fill: #CCDDEE" r="20"></circle>
        <use href="#background_face_hours"/>
        <g>
          <use id="HOUR_MARKS-l6-o0" href="#cardinal_hour" transform="rotate(0)" style="fill: #FFCC44"/>
          <use id="HOUR_MARKS-l6-o1" href="#cardinal_hour" transform="rotate(90)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l6-o2" href="#cardinal_hour" transform="rotate(180)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l6-o3" href="#cardinal_hour" transform="rotate(270)" style="fill: #0000"/>
        </g>
        <g>
          <use id="DIALS-l6-o0"  href="#hand" transform="rotate(0)" style="fill: #CC0000"/>
          <use id="DIALS-l6-o1"  href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l6-o2"  href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l6-o3"  href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l6-o4"  href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l6-o5"  href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l6-o6"  href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l6-o7"  href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l6-o8"  href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l6-o9"  href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l6-o10" href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l6-o11" href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(96, 156)">
        <circle id="FACES-l7-o0" stroke="#000000" style="fill: #CCDDEE" r="20"></circle>
        <use href="#background_face_hours"/>
        <g>
          <use id="HOUR_MARKS-l7-o0" href="#cardinal_hour" transform="rotate(0)" style="fill: #FFCC44"/>
          <use id="HOUR_MARKS-l7-o1" href="#cardinal_hour" transform="rotate(90)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l7-o2" href="#cardinal_hour" transform="rotate(180)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l7-o3" href="#cardinal_hour" transform="rotate(270)" style="fill: #0000"/>
        </g>
        <g>
          <use id="DIALS-l7-o0"  href="#hand" transform="rotate(0)" style="fill: #CC0000"/>
          <use id="DIALS-l7-o1"  href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l7-o2"  href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l7-o3"  href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l7-o4"  href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l7-o5"  href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l7-o6"  href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l7-o7"  href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l7-o8"  href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l7-o9"  href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l7-o10" href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l7-o11" href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(156, 156)">
        <circle id="FACES-l8-o0" stroke="#000000" style="fill: #CCDDEE" r="20"></circle>
        <use href="#background_face_hours"/>
        <g>
          <use id="HOUR_MARKS-l8-o0" href="#cardinal_hour" transform="rotate(0)" style="fill: #FFCC44"/>
          <use id="HOUR_MARKS-l8-o1" href="#cardinal_hour" transform="rotate(90)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l8-o2" href="#cardinal_hour" transform="rotate(180)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l8-o3" href="#cardinal_hour" transform="rotate(270)" style="fill: #0000"/>
        </g>
        <g>
          <use id="DIALS-l8-o0"  href="#hand" transform="rotate(0)" style="fill: #CC0000"/>
          <use id="DIALS-l8-o1"  href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l8-o2"  href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l8-o3"  href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l8-o4"  href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l8-o5"  href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l8-o6"  href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l8-o7"  href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l8-o8"  href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l8-o9"  href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l8-o10" href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l8-o11" href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
    </g>
    <g transform="translate(264, 24) scale(0.8)" transform-origin="96 96">
      <g transform="translate(32, 200)">
        <rect width="128" height="24" fill="#D9D9D9"/>
        <path d="M25.965 19.16C25.2317 19.16 24.4917 19.1333 23.745 19.08C22.9983 19.04 22.345 18.9467 21.785 18.8V5.34C22.0783 5.28667 22.3917 5.24 22.725 5.2C23.0583 5.14667 23.3983 5.10667 23.745 5.08C24.0917 5.05333 24.4317 5.03333 24.765 5.02C25.1117 5.00667 25.4383 5 25.745 5C26.585 5 27.365 5.06667 28.085 5.2C28.805 5.32 29.425 5.52667 29.945 5.82C30.4783 6.11333 30.8917 6.5 31.185 6.98C31.4783 7.46 31.625 8.05333 31.625 8.76C31.625 9.41333 31.465 9.97333 31.145 10.44C30.8383 10.9067 30.405 11.28 29.845 11.56C30.685 11.84 31.305 12.2533 31.705 12.8C32.105 13.3467 32.305 14.04 32.305 14.88C32.305 16.3067 31.785 17.38 30.745 18.1C29.705 18.8067 28.1117 19.16 25.965 19.16ZM24.265 12.76V16.98C24.545 17.0067 24.845 17.0267 25.165 17.04C25.485 17.0533 25.7783 17.06 26.045 17.06C26.565 17.06 27.045 17.0267 27.485 16.96C27.9383 16.8933 28.325 16.78 28.645 16.62C28.9783 16.4467 29.2383 16.22 29.425 15.94C29.625 15.66 29.725 15.3 29.725 14.86C29.725 14.0733 29.4383 13.5267 28.865 13.22C28.2917 12.9133 27.4983 12.76 26.485 12.76H24.265ZM24.265 10.78H26.045C27.005 10.78 27.7583 10.6467 28.305 10.38C28.8517 10.1 29.125 9.60667 29.125 8.9C29.125 8.23333 28.8383 7.76 28.265 7.48C27.705 7.2 26.9717 7.06 26.065 7.06C25.6783 7.06 25.3317 7.06667 25.025 7.08C24.7317 7.09333 24.4783 7.11333 24.265 7.14V10.78ZM41.9735 19C41.8562 18.616 41.7229 18.2213 41.5735 17.816C41.4349 17.4107 41.2962 17.0053 41.1575 16.6H36.8375C36.6989 17.0053 36.5549 17.4107 36.4055 17.816C36.2669 18.2213 36.1389 18.616 36.0215 19H33.4295C33.8455 17.8053 34.2402 16.7013 34.6135 15.688C34.9869 14.6747 35.3495 13.72 35.7015 12.824C36.0642 11.928 36.4162 11.08 36.7575 10.28C37.1095 9.46933 37.4722 8.68 37.8455 7.912H40.2295C40.5922 8.68 40.9495 9.46933 41.3015 10.28C41.6535 11.08 42.0055 11.928 42.3575 12.824C42.7202 13.72 43.0882 14.6747 43.4615 15.688C43.8349 16.7013 44.2295 17.8053 44.6455 19H41.9735ZM38.9815 10.424C38.9282 10.584 38.8482 10.8027 38.7415 11.08C38.6349 11.3573 38.5122 11.6773 38.3735 12.04C38.2349 12.4027 38.0802 12.8027 37.9095 13.24C37.7495 13.6773 37.5842 14.136 37.4135 14.616H40.5655C40.3949 14.136 40.2295 13.6773 40.0695 13.24C39.9095 12.8027 39.7549 12.4027 39.6055 12.04C39.4669 11.6773 39.3442 11.3573 39.2375 11.08C39.1309 10.8027 39.0455 10.584 38.9815 10.424ZM50.7305 19.224C48.9279 19.224 47.5519 18.7227 46.6025 17.72C45.6639 16.7173 45.1945 15.2933 45.1945 13.448C45.1945 12.5307 45.3385 11.7147 45.6265 11C45.9145 10.2747 46.3092 9.66667 46.8105 9.176C47.3119 8.67467 47.9092 8.296 48.6025 8.04C49.2959 7.784 50.0479 7.656 50.8585 7.656C51.3279 7.656 51.7545 7.69333 52.1385 7.768C52.5225 7.832 52.8585 7.912 53.1465 8.008C53.4345 8.09333 53.6745 8.184 53.8665 8.28C54.0585 8.376 54.1972 8.45067 54.2825 8.504L53.5625 10.52C53.2212 10.3387 52.8212 10.184 52.3625 10.056C51.9145 9.928 51.4025 9.864 50.8265 9.864C50.4425 9.864 50.0639 9.928 49.6905 10.056C49.3279 10.184 49.0025 10.392 48.7145 10.68C48.4372 10.9573 48.2132 11.32 48.0425 11.768C47.8719 12.216 47.7865 12.76 47.7865 13.4C47.7865 13.912 47.8399 14.392 47.9465 14.84C48.0639 15.2773 48.2452 15.656 48.4905 15.976C48.7465 16.296 49.0772 16.552 49.4825 16.744C49.8879 16.9253 50.3785 17.016 50.9545 17.016C51.3172 17.016 51.6425 16.9947 51.9305 16.952C52.2185 16.9093 52.4745 16.8613 52.6985 16.808C52.9225 16.744 53.1199 16.6747 53.2905 16.6C53.4612 16.5253 53.6159 16.456 53.7545 16.392L54.4425 18.392C54.0905 18.6053 53.5945 18.7973 52.9545 18.968C52.3145 19.1387 51.5732 19.224 50.7305 19.224ZM62.5935 19C62.3695 18.6373 62.1029 18.248 61.7935 17.832C61.4949 17.4053 61.1642 16.984 60.8015 16.568C60.4495 16.1413 60.0815 15.736 59.6975 15.352C59.3135 14.9573 58.9295 14.6107 58.5455 14.312V19H56.0495V7.912H58.5455V12.104C59.1962 11.4213 59.8469 10.712 60.4975 9.976C61.1589 9.22933 61.7722 8.54133 62.3375 7.912H65.2975C64.5402 8.808 63.7775 9.672 63.0095 10.504C62.2522 11.336 61.4522 12.1733 60.6095 13.016C61.4949 13.752 62.3482 14.6267 63.1695 15.64C64.0015 16.6533 64.7962 17.7733 65.5535 19H62.5935ZM75.5317 17.12C76.4384 17.12 77.0984 16.9667 77.5117 16.66C77.9251 16.3533 78.1317 15.92 78.1317 15.36C78.1317 15.0267 78.0584 14.74 77.9117 14.5C77.7784 14.26 77.5784 14.0467 77.3117 13.86C77.0584 13.66 76.7451 13.48 76.3717 13.32C75.9984 13.1467 75.5717 12.98 75.0917 12.82C74.6117 12.6467 74.1451 12.46 73.6917 12.26C73.2517 12.0467 72.8584 11.7867 72.5117 11.48C72.1784 11.1733 71.9051 10.8067 71.6917 10.38C71.4917 9.95333 71.3917 9.44 71.3917 8.84C71.3917 7.58667 71.8251 6.60667 72.6917 5.9C73.5584 5.18 74.7384 4.82 76.2317 4.82C77.0984 4.82 77.8651 4.92 78.5317 5.12C79.2117 5.30667 79.7451 5.51333 80.1317 5.74L79.3517 7.78C78.8984 7.52667 78.3984 7.33333 77.8517 7.2C77.3184 7.06667 76.7651 7 76.1917 7C75.5117 7 74.9784 7.14 74.5917 7.42C74.2184 7.7 74.0317 8.09333 74.0317 8.6C74.0317 8.90667 74.0917 9.17333 74.2117 9.4C74.3451 9.61333 74.5251 9.80667 74.7517 9.98C74.9917 10.1533 75.2651 10.3133 75.5717 10.46C75.8917 10.6067 76.2384 10.7467 76.6117 10.88C77.2651 11.12 77.8451 11.3667 78.3517 11.62C78.8717 11.86 79.3051 12.1533 79.6517 12.5C80.0117 12.8333 80.2851 13.2333 80.4717 13.7C80.6584 14.1533 80.7517 14.7067 80.7517 15.36C80.7517 16.6133 80.3051 17.5867 79.4117 18.28C78.5317 18.96 77.2384 19.3 75.5317 19.3C74.9584 19.3 74.4317 19.26 73.9517 19.18C73.4851 19.1133 73.0651 19.0267 72.6917 18.92C72.3317 18.8133 72.0184 18.7067 71.7517 18.6C71.4851 18.48 71.2717 18.3733 71.1117 18.28L71.8517 16.22C72.2117 16.42 72.6984 16.62 73.3117 16.82C73.9251 17.02 74.6651 17.12 75.5317 17.12ZM82.5925 7.912H85.0885V19H82.5925V7.912ZM90.151 16.968C90.2683 16.9787 90.4017 16.9893 90.551 17C90.711 17 90.8977 17 91.111 17C92.359 17 93.2817 16.6853 93.879 16.056C94.487 15.4267 94.791 14.5573 94.791 13.448C94.791 12.2853 94.503 11.4053 93.927 10.808C93.351 10.2107 92.439 9.912 91.191 9.912C91.0203 9.912 90.8443 9.91733 90.663 9.928C90.4817 9.928 90.311 9.93867 90.151 9.96V16.968ZM97.367 13.448C97.367 14.408 97.2177 15.2453 96.919 15.96C96.6203 16.6747 96.1937 17.2667 95.639 17.736C95.095 18.2053 94.4283 18.5573 93.639 18.792C92.8497 19.0267 91.9643 19.144 90.983 19.144C90.535 19.144 90.0123 19.1227 89.415 19.08C88.8177 19.048 88.231 18.9733 87.655 18.856V8.056C88.231 7.94933 88.8283 7.88 89.447 7.848C90.0763 7.80533 90.615 7.784 91.063 7.784C92.0123 7.784 92.871 7.89067 93.639 8.104C94.4177 8.31733 95.0843 8.65333 95.639 9.112C96.1937 9.57067 96.6203 10.1573 96.919 10.872C97.2177 11.5867 97.367 12.4453 97.367 13.448ZM99.4519 19V7.912H106.94V10.008H101.948V12.184H106.38V14.232H101.948V16.904H107.308V19H99.4519Z" fill="black"/>
      </g>
      <use href="#frame" id="FRAME-l0-o1" style="fill: #CCDDEE"/>

      <use href="#peg" transform="translate(66, 66)" style="fill: #88AACC"/>
      <use href="#peg" transform="translate(126, 66)" style="fill: #88AACC"/>
      <use href="#peg" transform="translate(126, 126)" style="fill: #88AACC"/>
      <use href="#peg" transform="translate(66, 126)" style="fill: #88AACC"/>

      <g transform="translate(36, 36)">
        <circle id="FACES-l9-o0" stroke="#000000" style="fill: #113366" r="20"></circle>
        <use href="#background_face_hours"/>
        <g>
          <use id="HOUR_MARKS-l9-o0" href="#cardinal_hour" transform="rotate(0)" style="fill: #CC6600"/>
          <use id="HOUR_MARKS-l9-o1" href="#cardinal_hour" transform="rotate(90)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l9-o2" href="#cardinal_hour" transform="rotate(180)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l9-o3" href="#cardinal_hour" transform="rotate(270)" style="fill: #0000"/>
        </g>
        <g>
          <use id="DIALS-l9-o0"  href="#hand" transform="rotate(0)" style="fill: #FFCC44"/>
          <use id="DIALS-l9-o1"  href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l9-o2"  href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l9-o3"  href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l9-o4"  href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l9-o5"  href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l9-o6"  href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l9-o7"  href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l9-o8"  href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l9-o9"  href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l9-o10" href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l9-o11" href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(96, 36)">
        <circle id="FACES-l10-o0" stroke="#000000" style="fill: #113366" r="20"></circle>
        <use href="#background_face_hours"/>
        <g>
          <use id="HOUR_MARKS-l10-o0" href="#cardinal_hour" transform="rotate(0)" style="fill: #CC6600"/>
          <use id="HOUR_MARKS-l10-o1" href="#cardinal_hour" transform="rotate(90)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l10-o2" href="#cardinal_hour" transform="rotate(180)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l10-o3" href="#cardinal_hour" transform="rotate(270)" style="fill: #0000"/>
        </g>
        <g>
          <use id="DIALS-l10-o0"  href="#hand" transform="rotate(0)" style="fill: #FFCC44"/>
          <use id="DIALS-l10-o1"  href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l10-o2"  href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l10-o3"  href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l10-o4"  href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l10-o5"  href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l10-o6"  href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l10-o7"  href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l10-o8"  href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l10-o9"  href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l10-o10" href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l10-o11" href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(156, 36)">
        <circle id="FACES-l11-o0" stroke="#000000" style="fill: #113366" r="20"></circle>
        <use href="#background_face_hours"/>
        <g>
          <use id="HOUR_MARKS-l11-o0" href="#cardinal_hour" transform="rotate(0)" style="fill: #CC6600"/>
          <use id="HOUR_MARKS-l11-o1" href="#cardinal_hour" transform="rotate(90)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l11-o2" href="#cardinal_hour" transform="rotate(180)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l11-o3" href="#cardinal_hour" transform="rotate(270)" style="fill: #0000"/>
        </g>
        <g>
          <use id="DIALS-l11-o0"  href="#hand" transform="rotate(0)" style="fill: #FFCC44"/>
          <use id="DIALS-l11-o1"  href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l11-o2"  href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l11-o3"  href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l11-o4"  href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l11-o5"  href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l11-o6"  href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l11-o7"  href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l11-o8"  href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l11-o9"  href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l11-o10" href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l11-o11" href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(36, 96)">
        <circle id="FACES-l12-o0" stroke="#000000" style="fill: #113366" r="20"></circle>
        <use href="#background_face_hours"/>
        <g>
          <use id="HOUR_MARKS-l12-o0" href="#cardinal_hour" transform="rotate(0)" style="fill: #CC6600"/>
          <use id="HOUR_MARKS-l12-o1" href="#cardinal_hour" transform="rotate(90)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l12-o2" href="#cardinal_hour" transform="rotate(180)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l12-o3" href="#cardinal_hour" transform="rotate(270)" style="fill: #0000"/>
        </g>
        <g>
          <use id="DIALS-l12-o0"  href="#hand" transform="rotate(0)" style="fill: #FFCC44"/>
          <use id="DIALS-l12-o1"  href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l12-o2"  href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l12-o3"  href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l12-o4"  href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l12-o5"  href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l12-o6"  href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l12-o7"  href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l12-o8"  href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l12-o9"  href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l12-o10" href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l12-o11" href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(96, 96)">
        <circle id="FACES-l13-o0" stroke="#000000" style="fill: #113366" r="20"></circle>
        <use href="#background_face_hours"/>
        <g>
          <use id="HOUR_MARKS-l13-o0" href="#cardinal_hour" transform="rotate(0)" style="fill: #CC6600"/>
          <use id="HOUR_MARKS-l13-o1" href="#cardinal_hour" transform="rotate(90)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l13-o2" href="#cardinal_hour" transform="rotate(180)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l13-o3" href="#cardinal_hour" transform="rotate(270)" style="fill: #0000"/>
        </g>
        <g>
          <use id="DIALS-l13-o0"  href="#hand" transform="rotate(0)" style="fill: #FFCC44"/>
          <use id="DIALS-l13-o1"  href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l13-o2"  href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l13-o3"  href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l13-o4"  href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l13-o5"  href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l13-o6"  href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l13-o7"  href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l13-o8"  href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l13-o9"  href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l13-o10" href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l13-o11" href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(156, 96)">
        <circle id="FACES-l14-o0" stroke="#000000" style="fill: #113366" r="20"></circle>
        <use href="#background_face_hours"/>
        <g>
          <use id="HOUR_MARKS-l14-o0" href="#cardinal_hour" transform="rotate(0)" style="fill: #CC6600"/>
          <use id="HOUR_MARKS-l14-o1" href="#cardinal_hour" transform="rotate(90)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l14-o2" href="#cardinal_hour" transform="rotate(180)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l14-o3" href="#cardinal_hour" transform="rotate(270)" style="fill: #0000"/>
        </g>
        <g>
          <use id="DIALS-l14-o0"  href="#hand" transform="rotate(0)" style="fill: #FFCC44"/>
          <use id="DIALS-l14-o1"  href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l14-o2"  href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l14-o3"  href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l14-o4"  href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l14-o5"  href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l14-o6"  href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l14-o7"  href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l14-o8"  href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l14-o9"  href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l14-o10" href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l14-o11" href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(36, 156)">
        <circle id="FACES-l15-o0" stroke="#000000" style="fill: #113366" r="20"></circle>
        <use href="#background_face_hours"/>
        <g>
          <use id="HOUR_MARKS-l15-o0" href="#cardinal_hour" transform="rotate(0)" style="fill: #CC6600"/>
          <use id="HOUR_MARKS-l15-o1" href="#cardinal_hour" transform="rotate(90)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l15-o2" href="#cardinal_hour" transform="rotate(180)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l15-o3" href="#cardinal_hour" transform="rotate(270)" style="fill: #0000"/>
        </g>
        <g>
          <use id="DIALS-l15-o0"  href="#hand" transform="rotate(0)" style="fill: #FFCC44"/>
          <use id="DIALS-l15-o1"  href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l15-o2"  href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l15-o3"  href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l15-o4"  href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l15-o5"  href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l15-o6"  href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l15-o7"  href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l15-o8"  href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l15-o9"  href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l15-o10" href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l15-o11" href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(96, 156)">
        <circle id="FACES-l16-o0" stroke="#000000" style="fill: #113366" r="20"></circle>
        <use href="#background_face_hours"/>
        <g>
          <use id="HOUR_MARKS-l16-o0" href="#cardinal_hour" transform="rotate(0)" style="fill: #CC6600"/>
          <use id="HOUR_MARKS-l16-o1" href="#cardinal_hour" transform="rotate(90)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l16-o2" href="#cardinal_hour" transform="rotate(180)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l16-o3" href="#cardinal_hour" transform="rotate(270)" style="fill: #0000"/>
        </g>
        <g>
          <use id="DIALS-l16-o0"  href="#hand" transform="rotate(0)" style="fill: #FFCC44"/>
          <use id="DIALS-l16-o1"  href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l16-o2"  href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l16-o3"  href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l16-o4"  href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l16-o5"  href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l16-o6"  href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l16-o7"  href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l16-o8"  href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l16-o9"  href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l16-o10" href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l16-o11" href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(156, 156)">
        <circle id="FACES-l17-o0" stroke="#000000" style="fill: #113366" r="20"></circle>
        <use href="#background_face_hours"/>
        <g>
          <use id="HOUR_MARKS-l17-o0" href="#cardinal_hour" transform="rotate(0)" style="fill: #CC6600"/>
          <use id="HOUR_MARKS-l17-o1" href="#cardinal_hour" transform="rotate(90)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l17-o2" href="#cardinal_hour" transform="rotate(180)" style="fill: #0000"/>
          <use id="HOUR_MARKS-l17-o3" href="#cardinal_hour" transform="rotate(270)" style="fill: #0000"/>
        </g>
        <g>
          <use id="DIALS-l17-o0"  href="#hand" transform="rotate(0)" style="fill: #FFCC44"/>
          <use id="DIALS-l17-o1"  href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l17-o2"  href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l17-o3"  href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l17-o4"  href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l17-o5"  href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l17-o6"  href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l17-o7"  href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l17-o8"  href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l17-o9"  href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l17-o10" href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l17-o11" href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
    </g>
  </g>
</svg>`,Bt=new Array(64).fill(0),Tx=Bt.map((t,e)=>e),Dx={name:"Melinda's 2x2x2x2",orbits:[{orbitName:"CORNERS",numPieces:64,numOrientations:1}],defaultPattern:{CORNERS:{pieces:Tx,orientation:Bt}},moves:{Rx:{CORNERS:{permutation:[16,19,17,18,20,22,23,21,4,7,5,6,0,2,3,1,28,30,31,29,24,27,25,26,8,10,11,9,12,15,13,14,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63],orientationDelta:Bt}},Ry:{CORNERS:{permutation:[12,13,14,15,0,1,2,3,4,5,6,7,8,9,10,11,28,29,30,31,16,17,18,19,20,21,22,23,24,25,26,27,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63],orientationDelta:Bt}},Rz:{CORNERS:{permutation:[4,6,7,5,20,23,21,22,24,26,27,25,8,11,9,10,0,3,1,2,16,18,19,17,28,31,29,30,12,14,15,13,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63],orientationDelta:Bt}},Lx:{CORNERS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,48,51,49,50,52,54,55,53,36,39,37,38,32,34,35,33,60,62,63,61,56,59,57,58,40,42,43,41,44,47,45,46],orientationDelta:Bt}},Ly:{CORNERS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,44,45,46,47,32,33,34,35,36,37,38,39,40,41,42,43,60,61,62,63,48,49,50,51,52,53,54,55,56,57,58,59],orientationDelta:Bt}},Lz:{CORNERS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,36,38,39,37,52,55,53,54,56,58,59,57,40,43,41,42,32,35,33,34,48,50,51,49,60,63,61,62,44,46,47,45],orientationDelta:Bt}},Mx:{CORNERS:{permutation:[0,1,2,3,20,22,23,21,4,7,5,6,12,13,14,15,16,17,18,19,24,27,25,26,8,10,11,9,28,29,30,31,48,51,49,50,36,37,38,39,40,41,42,43,32,34,35,33,60,62,63,61,52,53,54,55,56,57,58,59,44,47,45,46],orientationDelta:Bt}},My:{CORNERS:{permutation:[0,1,2,3,9,8,11,10,45,44,47,46,12,13,14,15,16,17,18,19,25,24,27,26,61,60,63,62,28,29,30,31,5,4,7,6,36,37,38,39,40,41,42,43,33,32,35,34,21,20,23,22,52,53,54,55,56,57,58,59,49,48,51,50],orientationDelta:Bt}},Mz:{CORNERS:{permutation:[0,1,2,3,34,33,35,32,47,45,44,46,12,13,14,15,16,17,18,19,7,5,4,6,10,9,11,8,28,29,30,31,51,49,48,50,36,37,38,39,40,41,42,43,62,61,63,60,22,21,23,20,52,53,54,55,56,57,58,59,27,25,24,26],orientationDelta:Bt}},Ox:{CORNERS:{permutation:[16,19,17,18,4,5,6,7,8,9,10,11,0,2,3,1,28,30,31,29,20,21,22,23,24,25,26,27,12,15,13,14,32,33,34,35,52,54,55,53,36,39,37,38,44,45,46,47,48,49,50,51,56,59,57,58,40,42,43,41,60,61,62,63],orientationDelta:Bt}},Oy:{CORNERS:{permutation:[37,36,39,38,4,5,6,7,8,9,10,11,1,0,3,2,53,52,55,54,20,21,22,23,24,25,26,27,17,16,19,18,32,33,34,35,41,40,43,42,13,12,15,14,44,45,46,47,48,49,50,51,57,56,59,58,29,28,31,30,60,61,62,63],orientationDelta:Bt}},Oz:{CORNERS:{permutation:[19,17,16,18,4,5,6,7,8,9,10,11,30,29,31,28,54,53,55,52,20,21,22,23,24,25,26,27,59,57,56,58,32,33,34,35,2,1,3,0,15,13,12,14,44,45,46,47,48,49,50,51,39,37,36,38,42,41,43,40,60,61,62,63],orientationDelta:Bt}},U2:{CORNERS:{permutation:[40,41,42,43,44,45,46,47,32,33,34,35,36,37,38,39,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,8,9,10,11,12,13,14,15,0,1,2,3,4,5,6,7,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63],orientationDelta:Bt}},D2:{CORNERS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,56,57,58,59,60,61,62,63,48,49,50,51,52,53,54,55,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,24,25,26,27,28,29,30,31,16,17,18,19,20,21,22,23],orientationDelta:Bt}},F2:{CORNERS:{permutation:[52,53,54,55,48,49,50,51,8,9,10,11,12,13,14,15,36,37,38,39,32,33,34,35,24,25,26,27,28,29,30,31,20,21,22,23,16,17,18,19,40,41,42,43,44,45,46,47,4,5,6,7,0,1,2,3,56,57,58,59,60,61,62,63],orientationDelta:Bt}},B2:{CORNERS:{permutation:[0,1,2,3,4,5,6,7,60,61,62,63,56,57,58,59,16,17,18,19,20,21,22,23,44,45,46,47,40,41,42,43,32,33,34,35,36,37,38,39,28,29,30,31,24,25,26,27,48,49,50,51,52,53,54,55,12,13,14,15,8,9,10,11],orientationDelta:Bt}}},derivedMoves:{x:"Lx Rx",y2:"U2 D2",z2:"F2 B2"}},Lx=`<?xml version="1.0" encoding="UTF-8"?>
<svg viewBox="0 0 180 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<title>melindas2x2x2x2</title>
<defs>
  <g id="sticker-UL">
    <path d="m 0,0 10,0 -10,10 z" stroke-width="0.75px" stroke="black" stroke-linecap="butt" stroke-linejoin="round" />
  </g>
  <g id="sticker-UR">
    <path d="m 0,0 10,0 0,10 z" stroke-width="0.75px" stroke="black" stroke-linecap="butt" stroke-linejoin="round" />
  </g>
  <g id="sticker-DR">
    <path d="m 10,0 0,10 -10,0 z" stroke-width="0.75px" stroke="black" stroke-linecap="butt" stroke-linejoin="round" />
  </g>
  <g id="sticker-DL">
    <path d="m 00,0 10,10 -10,0 z" stroke-width="0.75px" stroke="black" stroke-linecap="butt" stroke-linejoin="round" />
  </g>
  <g id="squished-sticker-UL">
    <path d="m 0,0 5,0 -5,10 z" stroke-width="0.75px" stroke="black" stroke-linecap="butt" stroke-linejoin="round" />
  </g>
  <g id="squished-sticker-UR">
    <path d="m 0,0 5,0 0,10 z" stroke-width="0.75px" stroke="black" stroke-linecap="butt" stroke-linejoin="round" />
  </g>
  <g id="squished-sticker-DR">
    <path d="m 5,0 0,10 -5,0 z" stroke-width="0.75px" stroke="black" stroke-linecap="butt" stroke-linejoin="round" />
  </g>
  <g id="squished-sticker-DL">
    <path d="m 00,0 5,10 -5,0 z" stroke-width="0.75px" stroke="black" stroke-linecap="butt" stroke-linejoin="round" />
  </g>
</defs>
<g>
<g id="UL" transform="translate(45, 10)">
  <use id="CORNERS-l40-o0" href="#sticker-UL" transform="translate( 0,  0)" style="fill: orange"/>
  <use id="CORNERS-l41-o0" href="#sticker-DR" transform="translate( 0,  0)" style="fill: white"/>
  <use id="CORNERS-l45-o0" href="#sticker-DL" transform="translate(10,  0)" style="fill: white"/>
  <use id="CORNERS-l44-o0" href="#sticker-UR" transform="translate(10,  0)" style="fill: orange"/>
  <use id="CORNERS-l36-o0" href="#sticker-DL" transform="translate( 0, 10)" style="fill: orange"/>
  <use id="CORNERS-l37-o0" href="#sticker-UR" transform="translate( 0, 10)" style="fill: white"/>
  <use id="CORNERS-l33-o0" href="#sticker-UL" transform="translate(10, 10)" style="fill: white"/>
  <use id="CORNERS-l32-o0" href="#sticker-DR" transform="translate(10, 10)" style="fill: orange"/>
</g>
<g id="UR" transform="translate(65, 10)">
  <use id="CORNERS-l8-o0" href="#sticker-UL" transform="translate( 0,  0)" style="fill: red"/>
  <use id="CORNERS-l9-o0" href="#sticker-DR" transform="translate( 0,  0)" style="fill: white"/>
  <use id="CORNERS-l13-o0" href="#sticker-DL" transform="translate(10,  0)" style="fill: white"/>
  <use id="CORNERS-l12-o0" href="#sticker-UR" transform="translate(10,  0)" style="fill: red"/>
  <use id="CORNERS-l4-o0" href="#sticker-DL" transform="translate( 0, 10)" style="fill: red"/>
  <use id="CORNERS-l5-o0" href="#sticker-UR" transform="translate( 0, 10)" style="fill: white"/>
  <use id="CORNERS-l1-o0" href="#sticker-UL" transform="translate(10, 10)" style="fill: white"/>
  <use id="CORNERS-l0-o0" href="#sticker-DR" transform="translate(10, 10)" style="fill: red"/>
</g>

<g id="L" transform="translate(10, 35)">
  <use data-copy-id="CORNERS-l40-o0" href="#sticker-UL" transform="translate( 0,  0)" style="fill: orange"/>
  <use id="CORNERS-l43-o0" href="#sticker-DR" transform="translate( 0,  0)" style="fill: pink"/>
  <use id="CORNERS-l38-o0" href="#sticker-DL" transform="translate(10,  0)" style="fill: pink"/>
  <use data-copy-id="CORNERS-l36-o0" href="#sticker-UR" transform="translate(10,  0)" style="fill: orange"/>
  <use id="CORNERS-l56-o0" href="#sticker-DL" transform="translate( 0, 10)" style="fill: orange"/>
  <use id="CORNERS-l58-o0" href="#sticker-UR" transform="translate( 0, 10)" style="fill: pink"/>
  <use id="CORNERS-l55-o0" href="#sticker-UL" transform="translate(10, 10)" style="fill: pink"/>
  <use id="CORNERS-l52-o0" href="#sticker-DR" transform="translate(10, 10)" style="fill: orange"/>
</g>

<g id="FL" transform="translate(35, 35)">
  <use data-copy-id="CORNERS-l36-o0" href="#sticker-UL" transform="translate( 0,  0)" style="fill: orange"/>
  <use id="CORNERS-l39-o0" href="#sticker-DR" transform="translate( 0,  0)" style="fill: limegreen"/>
  <use id="CORNERS-l34-o0" href="#sticker-DL" transform="translate(10,  0)" style="fill: limegreen"/>
  <use data-copy-id="CORNERS-l32-o0" href="#sticker-UR" transform="translate(10,  0)" style="fill: orange"/>
  <use data-copy-id="CORNERS-l52-o0" href="#sticker-DL" transform="translate( 0, 10)" style="fill: orange"/>
  <use id="CORNERS-l54-o0" href="#sticker-UR" transform="translate( 0, 10)" style="fill: limegreen"/>
  <use id="CORNERS-l51-o0" href="#sticker-UL" transform="translate(10, 10)" style="fill: limegreen"/>
  <use id="CORNERS-l48-o0" href="#sticker-DR" transform="translate(10, 10)" style="fill: orange"/>
</g>
<g id="FR" transform="translate(75, 35)">
  <use data-copy-id="CORNERS-l4-o0" href="#sticker-UL" transform="translate( 0,  0)" style="fill: red"/>
  <use id="CORNERS-l7-o0" href="#sticker-DR" transform="translate( 0,  0)" style="fill: limegreen"/>
  <use id="CORNERS-l2-o0" href="#sticker-DL" transform="translate(10,  0)" style="fill: limegreen"/>
  <use data-copy-id="CORNERS-l0-o0" href="#sticker-UR" transform="translate(10,  0)" style="fill: red"/>
  <use id="CORNERS-l20-o0" href="#sticker-DL" transform="translate( 0, 10)" style="fill: red"/>
  <use id="CORNERS-l22-o0" href="#sticker-UR" transform="translate( 0, 10)" style="fill: limegreen"/>
  <use id="CORNERS-l19-o0" href="#sticker-UL" transform="translate(10, 10)" style="fill: limegreen"/>
  <use id="CORNERS-l16-o0" href="#sticker-DR" transform="translate(10, 10)" style="fill: red"/>
</g>

<g id="R" transform="translate(100, 35)">
  <use data-copy-id="CORNERS-l0-o0" href="#sticker-UL" transform="translate( 0,  0)" style="fill: red"/>
  <use id="CORNERS-l3-o0" href="#sticker-DR" transform="translate( 0,  0)" style="fill: pink"/>
  <use id="CORNERS-l14-o0" href="#sticker-DL" transform="translate(10,  0)" style="fill: pink"/>
  <use data-copy-id="CORNERS-l12-o0" href="#sticker-UR" transform="translate(10,  0)" style="fill: red"/>
  <use data-copy-id="CORNERS-l16-o0" href="#sticker-DL" transform="translate( 0, 10)" style="fill: red"/>
  <use id="CORNERS-l18-o0" href="#sticker-UR" transform="translate( 0, 10)" style="fill: pink"/>
  <use id="CORNERS-l31-o0" href="#sticker-UL" transform="translate(10, 10)" style="fill: pink"/>
  <use id="CORNERS-l28-o0" href="#sticker-DR" transform="translate(10, 10)" style="fill: red"/>
</g>

<g id="BR" transform="translate(125, 35)">
  <use data-copy-id="CORNERS-l12-o0" href="#sticker-UL" transform="translate( 0,  0)" style="fill: red"/>
  <use id="CORNERS-l15-o0" href="#sticker-DR" transform="translate( 0,  0)" style="fill: #26f"/>
  <use id="CORNERS-l10-o0" href="#sticker-DL" transform="translate(10,  0)" style="fill: #26f"/>
  <use data-copy-id="CORNERS-l8-o0" href="#sticker-UR" transform="translate(10,  0)" style="fill: red"/>
  <use data-copy-id="CORNERS-l28-o0" href="#sticker-DL" transform="translate( 0, 10)" style="fill: red"/>
  <use id="CORNERS-l30-o0" href="#sticker-UR" transform="translate( 0, 10)" style="fill: #26f"/>
  <use id="CORNERS-l27-o0" href="#sticker-UL" transform="translate(10, 10)" style="fill: #26f"/>
  <use id="CORNERS-l24-o0" href="#sticker-DR" transform="translate(10, 10)" style="fill: red"/>
</g>
<g id="BL" transform="translate(145, 35)">
  <use data-copy-id="CORNERS-l44-o0" href="#sticker-UL" transform="translate( 0,  0)" style="fill: orange"/>
  <use id="CORNERS-l47-o0" href="#sticker-DR" transform="translate( 0,  0)" style="fill: #26f"/>
  <use id="CORNERS-l42-o0" href="#sticker-DL" transform="translate(10,  0)" style="fill: #26f"/>
  <use data-copy-id="CORNERS-l40-o0" href="#sticker-UR" transform="translate(10,  0)" style="fill: orange"/>
  <use id="CORNERS-l60-o0" href="#sticker-DL" transform="translate( 0, 10)" style="fill: orange"/>
  <use id="CORNERS-l62-o0" href="#sticker-UR" transform="translate( 0, 10)" style="fill: #26f"/>
  <use id="CORNERS-l59-o0" href="#sticker-UL" transform="translate(10, 10)" style="fill: #26f"/>
  <use data-copy-id="CORNERS-l56-o0" href="#sticker-DR" transform="translate(10, 10)" style="fill: orange"/>
</g>

<g id="DL" transform="translate(45, 60)">
  <use data-copy-id="CORNERS-l52-o0" href="#sticker-UL" transform="translate( 0,  0)" style="fill: orange"/>
  <use id="CORNERS-l53-o0" href="#sticker-DR" transform="translate( 0,  0)" style="fill: yellow"/>
  <use id="CORNERS-l49-o0" href="#sticker-DL" transform="translate(10,  0)" style="fill: yellow"/>
  <use data-copy-id="CORNERS-l48-o0" href="#sticker-UR" transform="translate(10,  0)" style="fill: orange"/>
  <use data-copy-id="CORNERS-l56-o0" href="#sticker-DL" transform="translate( 0, 10)" style="fill: orange"/>
  <use id="CORNERS-l57-o0" href="#sticker-UR" transform="translate( 0, 10)" style="fill: yellow"/>
  <use id="CORNERS-l61-o0" href="#sticker-UL" transform="translate(10, 10)" style="fill: yellow"/>
  <use data-copy-id="CORNERS-l60-o0" href="#sticker-DR" transform="translate(10, 10)" style="fill: orange"/>
</g>
<g id="DR" transform="translate(65, 60)">
  <use data-copy-id="CORNERS-l20-o0" href="#sticker-UL" transform="translate( 0,  0)" style="fill: red"/>
  <use id="CORNERS-l21-o0" href="#sticker-DR" transform="translate( 0,  0)" style="fill: yellow"/>
  <use id="CORNERS-l17-o0" href="#sticker-DL" transform="translate(10,  0)" style="fill: yellow"/>
  <use data-copy-id="CORNERS-l16-o0" href="#sticker-UR" transform="translate(10,  0)" style="fill: red"/>
  <use data-copy-id="CORNERS-l24-o0" href="#sticker-DL" transform="translate( 0, 10)" style="fill: red"/>
  <use id="CORNERS-l25-o0" href="#sticker-UR" transform="translate( 0, 10)" style="fill: yellow"/>
  <use id="CORNERS-l29-o0" href="#sticker-UL" transform="translate(10, 10)" style="fill: yellow"/>
  <use data-copy-id="CORNERS-l28-o0" href="#sticker-DR" transform="translate(10, 10)" style="fill: red"/>
</g>

<g style="opacity: 0.3;">
<g id="IL" transform="translate(55, 35)">
  <use data-copy-id="CORNERS-l32-o0" href="#squished-sticker-UL" transform="translate( 0,  0)" style="fill: orange"/>
  <use id="CORNERS-l35-o0" href="#squished-sticker-DR" transform="translate( 0,  0)" style="fill: purple"/>
  <use id="CORNERS-l46-o0" href="#squished-sticker-DL" transform="translate(5,  0)" style="fill: purple"/>
  <use data-copy-id="CORNERS-l44-o0" href="#squished-sticker-UR" transform="translate(5,  0)" style="fill: orange"/>
  <use data-copy-id="CORNERS-l48-o0" href="#squished-sticker-DL" transform="translate( 0, 10)" style="fill: orange"/>
  <use id="CORNERS-l50-o0" href="#squished-sticker-UR" transform="translate( 0, 10)" style="fill: purple"/>
  <use id="CORNERS-l63-o0" href="#squished-sticker-UL" transform="translate(5, 10)" style="fill: purple"/>
  <use data-copy-id="CORNERS-l60-o0" href="#squished-sticker-DR" transform="translate(5, 10)" style="fill: orange"/>
</g>
<g id="IR" transform="translate(65, 35)">
  <use data-copy-id="CORNERS-l8-o0" href="#squished-sticker-UL" transform="translate( 0,  0)" style="fill: red"/>
  <use id="CORNERS-l11-o0" href="#squished-sticker-DR" transform="translate( 0,  0)" style="fill: purple"/>
  <use id="CORNERS-l6-o0" href="#squished-sticker-DL" transform="translate(5,  0)" style="fill: purple"/>
  <use data-copy-id="CORNERS-l4-o0" href="#squished-sticker-UR" transform="translate(5,  0)" style="fill: red"/>
  <use data-copy-id="CORNERS-l24-o0" href="#squished-sticker-DL" transform="translate( 0, 10)" style="fill: red"/>
  <use id="CORNERS-l26-o0" href="#squished-sticker-UR" transform="translate( 0, 10)" style="fill: purple"/>
  <use id="CORNERS-l23-o0" href="#squished-sticker-UL" transform="translate(5, 10)" style="fill: purple"/>
  <use data-copy-id="CORNERS-l20-o0" href="#squished-sticker-DR" transform="translate(5, 10)" style="fill: red"/>
</g>
</g>
</g>
</svg>`,Nx=`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN"
       "http://www.w3.org/TR/2001/REC-SVG-20050904/DTD/svg11.dtd">
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-20 -20 546 480" preserveAspectRatio="xMidYMid meet">
  <defs>
  </defs>
  <title>pyraminx</title>
  <defs>
    <g id="stickerA" transform="scale(1, 0.577350269)">
      <path
         d="m 0,1.732050808 1,-1.732050808 1,1.732050808 z"
         stroke="black" stroke-width="0.04px" stroke-linecap="butt" stroke-linejoin="round"
      />
    </g>
    <g id="stickerV" transform="scale(1, 0.577350269)">
      <path
         d="m 0,0 1,1.732050808 1,-1.732050808 z"
         stroke="black" stroke-width="0.04px" stroke-linecap="butt" stroke-linejoin="round"
      />
    </g>
  </defs>

<!--        0 1 2 3 4 5 6 7 8 9 10   -->
<!--        | | | | | | | | | | |    -->
<!--    0 - L L L L L F R R R R R    -->
<!--    1 -   L L L F F F R R R      -->
<!--    2 -     L F F F F F R        -->
<!--    3 -       D D D D D          -->
<!--    4 -         D D D            -->
<!--    5 -           D              -->

  <g id="puzzle" transform="translate(5, 5) scale(40, 69.28203232)">
    <!-- CORNERS -->
    <use id="CORNERS-l0-o0" href="#stickerV" transform="translate(5.2, 1.066666667)" style="fill: limegreen"/>
    <use id="CORNERS-l0-o1" href="#stickerA" transform="translate(3, 0)" style="fill: red"/>
    <use id="CORNERS-l0-o2" href="#stickerA" transform="translate(7.4, 0)" style="fill: #26f"/>

    <use id="CORNERS-l3-o0" href="#stickerA" transform="translate(4.2, 3.2)" style="fill: yellow"/>
    <use id="CORNERS-l3-o1" href="#stickerA" transform="translate(2, 1)" style="fill: red"/>
    <use id="CORNERS-l3-o2" href="#stickerV" transform="translate(4.2, 2.066666667)" style="fill: limegreen"/>

    <use id="CORNERS-l2-o0" href="#stickerA" transform="translate(6.2, 3.2)" style="fill: yellow"/>
    <use id="CORNERS-l2-o1" href="#stickerV" transform="translate(6.2, 2.066666667)" style="fill: limegreen"/>
    <use id="CORNERS-l2-o2" href="#stickerA" transform="translate(8.4, 1)" style="fill: #26f"/>

    <use id="CORNERS-l1-o1" href="#stickerA" transform="translate(9.4, 0)" style="fill: #26f"/>
    <use id="CORNERS-l1-o2" href="#stickerA" transform="translate(1, 0)" style="fill: red"/>
    <use id="CORNERS-l1-o0" href="#stickerA" transform="translate(5.2, 4.2)" style="fill: yellow"/>

    <!-- "TIPS" -->
    <!-- CORNERS2 -->
    <use id="CORNERS2-l0-o0" href="#stickerA" transform="translate(5.2, 0.066666667)" style="fill: limegreen"/>
    <use id="CORNERS2-l0-o1" href="#stickerV" transform="translate(4, 0)" style="fill: red"/>
    <use id="CORNERS2-l0-o2" href="#stickerV" transform="translate(6.4, 0)" style="fill: #26f"/>

    <use id="CORNERS2-l3-o0" href="#stickerV" transform="translate(3.2, 3.2)" style="fill: yellow"/>
    <use id="CORNERS2-l3-o1" href="#stickerV" transform="translate(2, 2)" style="fill: red"/>
    <use id="CORNERS2-l3-o2" href="#stickerA" transform="translate(3.2, 2.066666667)" style="fill: limegreen"/>

    <use id="CORNERS2-l2-o0" href="#stickerV" transform="translate(7.2, 3.2)" style="fill: yellow"/>
    <use id="CORNERS2-l2-o1" href="#stickerA" transform="translate(7.2, 2.066666667)" style="fill: limegreen"/>
    <use id="CORNERS2-l2-o2" href="#stickerV" transform="translate(8.4, 2)" style="fill: #26f"/>

    <use id="CORNERS2-l1-o1" href="#stickerV" transform="translate(10.4,0)" style="fill: #26f"/>
    <use id="CORNERS2-l1-o2" href="#stickerV" transform="translate(0, 0)" style="fill: red"/>
    <use id="CORNERS2-l1-o0" href="#stickerV" transform="translate(5.2, 5.2)" style="fill: yellow"/>

    <!-- EDGES -->
    <use id="EDGES-l0-o0" href="#stickerV" transform="translate(3, 1)" style="fill: red"/>
    <use id="EDGES-l0-o1" href="#stickerA" transform="translate(4.2, 1.066666667)" style="fill: limegreen"/>

    <use id="EDGES-l5-o0" href="#stickerA" transform="translate(6.2, 1.066666667)" style="fill: limegreen"/>
    <use id="EDGES-l5-o1" href="#stickerV" transform="translate(7.4, 1)" style="fill: #26f"/>

    <use id="EDGES-l1-o0" href="#stickerV" transform="translate(8.4, 0)" style="fill: #26f"/>
    <use id="EDGES-l1-o1" href="#stickerV" transform="translate(2, 0)" style="fill: red"/>

    <use id="EDGES-l2-o0" href="#stickerV" transform="translate(5.2, 3.2)" style="fill: yellow"/>
    <use id="EDGES-l2-o1" href="#stickerA" transform="translate(5.2, 2.066666667)" style="fill: limegreen"/>

    <use id="EDGES-l3-o0" href="#stickerV" transform="translate(9.4, 1)" style="fill: #26f"/>
    <use id="EDGES-l3-o1" href="#stickerV" transform="translate(6.2, 4.2)" style="fill: yellow"/>

    <use id="EDGES-l4-o0" href="#stickerV" transform="translate(4.2, 4.2)" style="fill: yellow"/>
    <use id="EDGES-l4-o1" href="#stickerV" transform="translate(1, 1)" style="fill: red"/>
  </g>

</svg>`,Ix={name:"Square-1",orbits:[{orbitName:"WEDGES",numPieces:24,numOrientations:9},{orbitName:"EQUATOR",numPieces:2,numOrientations:6}],defaultPattern:{WEDGES:{pieces:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},EQUATOR:{pieces:[0,1],orientation:[0,0]}},moves:{U_SQ_:{WEDGES:{permutation:[11,0,1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18,19,20,21,22,23],orientationDelta:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},EQUATOR:{permutation:[0,1],orientationDelta:[0,0]}},D_SQ_:{WEDGES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,23,12,13,14,15,16,17,18,19,20,21,22],orientationDelta:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},EQUATOR:{permutation:[0,1],orientationDelta:[0,0]}},_SLASH_:{WEDGES:{permutation:[0,1,2,3,4,5,12,13,14,15,16,17,6,7,8,9,10,11,18,19,20,21,22,23],orientationDelta:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},EQUATOR:{permutation:[0,1],orientationDelta:[0,3]}}}},Px=`<?xml version="1.0" encoding="UTF-8"?>
<svg width="360px" height="552px" viewBox="0 0 360 552" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 59.1 (86144) - https://sketch.com -->
    <title>sq1-fancy</title>
    <desc>Created with Sketch.</desc>
    <!-- stroke="none" -->
    <g id="sq1-fancy" stroke="#888" stroke-width="0.25" fill="none" fill-rule="evenodd">
        <g id="EQUATOR" transform="translate(24.000000, 264.000000)">
            <rect id="EQUATOR-l1-o3" style="fill: red" x="168" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l1-o4" style="fill: red" x="192" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l1-o5" style="fill: limegreen" x="216" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l1-o2" style="fill: limegreen" x="240" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l1-o1" style="fill: limegreen" x="264" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l1-o0" style="fill: orange" x="288" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l0-o3" style="fill: orange" x="0" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l0-o4" style="fill: orange" x="24" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l0-o5" style="fill: #26f" x="48" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l0-o2" style="fill: #26f" x="72" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l0-o1" style="fill: #26f" x="96" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l0-o0" style="fill: red" x="120" y="0" width="24" height="24"></rect>
        </g>
        <g id="BOTTOM" transform="translate(41.000000, 257.000000)" stroke-linejoin="round">
            <g id="WEDGES-23" transform="translate(130.000000, 88.588457) rotate(120.000000) translate(-130.000000, -88.588457) translate(82.000000, 22.588457)">
                <polygon id="WEDGES-l23-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l23-o7" style="fill: red" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l23-o6" style="fill: red" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l23-o5" style="fill: red" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l23-o4" style="fill: red" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l23-o3" style="fill: white" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l23-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l23-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l23-o0" style="fill: red" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-22" transform="translate(97.157677, 115.157677) rotate(90.000000) translate(-97.157677, -115.157677) translate(49.157677, 49.157677)">
                <polygon id="WEDGES-l22-o8" style="fill: #26f" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l22-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l22-o6" style="fill: #26f" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l22-o5" style="fill: #26f" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l22-o4" style="fill: white" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l22-o3" style="fill: #26f" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l22-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l22-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l22-o0" style="fill: #26f" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-21" transform="translate(82.000000, 154.588457) rotate(60.000000) translate(-82.000000, -154.588457) translate(34.000000, 88.588457)">
                <polygon id="WEDGES-l21-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l21-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l21-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l21-o5" style="fill: #26f" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l21-o4" style="fill: #26f" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l21-o3" style="fill: #26f" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l21-o2" style="fill: #26f" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l21-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l21-o0" style="fill: #26f" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-20" transform="translate(88.588457, 196.315353) rotate(30.000000) translate(-88.588457, -196.315353) translate(40.588457, 130.315353)">
                <polygon id="WEDGES-l20-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l20-o7" style="fill: #26f" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l20-o6" style="fill: #26f" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l20-o5" style="fill: #26f" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l20-o4" style="fill: #26f" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l20-o3" style="fill: white" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l20-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l20-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l20-o0" style="fill: #26f" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-19" transform="translate(67.157677, 163.157677)">
                <polygon id="WEDGES-l19-o8" style="fill: orange" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l19-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l19-o6" style="fill: orange" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l19-o5" style="fill: orange" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l19-o4" style="fill: white" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l19-o3" style="fill: orange" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l19-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l19-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l19-o0" style="fill: orange" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-18" transform="translate(154.588457, 244.315353) scale(-1, -1) rotate(150.000000) translate(-154.588457, -244.315353) translate(106.588457, 178.315353)">
                <polygon id="WEDGES-l18-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l18-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l18-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l18-o5" style="fill: orange" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l18-o4" style="fill: orange" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l18-o3" style="fill: orange" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l18-o2" style="fill: orange" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l18-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l18-o0" style="fill: orange" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-17" transform="translate(196.315353, 237.726896) scale(-1, -1) rotate(120.000000) translate(-196.315353, -237.726896) translate(148.315353, 171.726896)">
                <polygon id="WEDGES-l17-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l17-o7" style="fill: orange" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l17-o6" style="fill: orange" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l17-o5" style="fill: orange" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l17-o4" style="fill: orange" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l17-o3" style="fill: white" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l17-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l17-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l17-o0" style="fill: orange" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-16" transform="translate(229.157677, 211.157677) scale(-1, -1) rotate(90.000000) translate(-229.157677, -211.157677) translate(181.157677, 145.157677)">
                <polygon id="WEDGES-l16-o8" style="fill: limegreen" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l16-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l16-o6" style="fill: limegreen" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l16-o5" style="fill: limegreen" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l16-o4" style="fill: white" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l16-o3" style="fill: limegreen" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l16-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l16-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l16-o0" style="fill: limegreen" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-15" transform="translate(244.315353, 171.726896) scale(-1, -1) rotate(60.000000) translate(-244.315353, -171.726896) translate(196.315353, 105.726896)">
                <polygon id="WEDGES-l15-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l15-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l15-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l15-o5" style="fill: limegreen" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l15-o4" style="fill: limegreen" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l15-o3" style="fill: limegreen" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l15-o2" style="fill: limegreen" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l15-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l15-o0" style="fill: limegreen" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-14" transform="translate(237.726896, 130.000000) scale(-1, -1) rotate(30.000000) translate(-237.726896, -130.000000) translate(189.726896, 64.000000)">
                <polygon id="WEDGES-l14-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l14-o7" style="fill: limegreen" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l14-o6" style="fill: limegreen" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l14-o5" style="fill: limegreen" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l14-o4" style="fill: limegreen" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l14-o3" style="fill: white" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l14-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l14-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l14-o0" style="fill: limegreen" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-13" transform="translate(211.157677, 97.157677) scale(-1, -1) translate(-211.157677, -97.157677) translate(163.157677, 31.157677)">
                <polygon id="WEDGES-l13-o8" style="fill: red" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l13-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l13-o6" style="fill: red" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l13-o5" style="fill: red" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l13-o4" style="fill: white" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l13-o3" style="fill: red" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l13-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l13-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l13-o0" style="fill: red" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-12" transform="translate(171.726896, 82.000000) rotate(150.000000) translate(-171.726896, -82.000000) translate(123.726896, 16.000000)">
                <polygon id="WEDGES-l12-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l12-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l12-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l12-o5" style="fill: red" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l12-o4" style="fill: red" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l12-o3" style="fill: red" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l12-o2" style="fill: red" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l12-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l12-o0" style="fill: red" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
        </g>
        <g id="TOP" transform="translate(41.000000, -31.000000)" stroke-linejoin="round">
            <g id="WEDGES-11" transform="translate(154.588457, 244.315353) scale(-1, -1) rotate(150.000000) translate(-154.588457, -244.315353) translate(106.588457, 178.315353)">
                <polygon id="WEDGES-l11-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l11-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l11-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l11-o5" style="fill: red" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l11-o4" style="fill: red" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l11-o3" style="fill: red" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l11-o2" style="fill: red" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l11-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l11-o0" style="fill: red" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-10" transform="translate(196.315353, 237.726896) scale(-1, -1) rotate(120.000000) translate(-196.315353, -237.726896) translate(148.315353, 171.726896)">
                <polygon id="WEDGES-l10-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l10-o7" style="fill: red" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l10-o6" style="fill: red" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l10-o5" style="fill: red" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l10-o4" style="fill: red" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l10-o3" style="fill: yellow" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l10-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l10-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l10-o0" style="fill: red" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-9" transform="translate(229.157677, 211.157677) scale(-1, -1) rotate(90.000000) translate(-229.157677, -211.157677) translate(181.157677, 145.157677)">
                <polygon id="WEDGES-l9-o8" style="fill: limegreen" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l9-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l9-o6" style="fill: limegreen" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l9-o5" style="fill: limegreen" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l9-o4" style="fill: yellow" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l9-o3" style="fill: limegreen" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l9-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l9-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l9-o0" style="fill: limegreen" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-8" transform="translate(244.315353, 171.726896) scale(-1, -1) rotate(60.000000) translate(-244.315353, -171.726896) translate(196.315353, 105.726896)">
                <polygon id="WEDGES-l8-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l8-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l8-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l8-o5" style="fill: limegreen" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l8-o4" style="fill: limegreen" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l8-o3" style="fill: limegreen" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l8-o2" style="fill: limegreen" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l8-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l8-o0" style="fill: limegreen" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-7" transform="translate(237.726896, 130.000000) scale(-1, -1) rotate(30.000000) translate(-237.726896, -130.000000) translate(189.726896, 64.000000)">
                <polygon id="WEDGES-l7-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l7-o7" style="fill: limegreen" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l7-o6" style="fill: limegreen" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l7-o5" style="fill: limegreen" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l7-o4" style="fill: limegreen" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l7-o3" style="fill: yellow" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l7-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l7-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l7-o0" style="fill: limegreen" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-6" transform="translate(211.157677, 97.157677) scale(-1, -1) translate(-211.157677, -97.157677) translate(163.157677, 31.157677)">
                <polygon id="WEDGES-l6-o8" style="fill: orange" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l6-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l6-o6" style="fill: orange" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l6-o5" style="fill: orange" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l6-o4" style="fill: yellow" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l6-o3" style="fill: orange" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l6-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l6-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l6-o0" style="fill: orange" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-5" transform="translate(171.726896, 82.000000) rotate(150.000000) translate(-171.726896, -82.000000) translate(123.726896, 16.000000)">
                <polygon id="WEDGES-l5-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l5-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l5-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l5-o5" style="fill: orange" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l5-o4" style="fill: orange" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l5-o3" style="fill: orange" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l5-o2" style="fill: orange" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l5-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l5-o0" style="fill: orange" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-4" transform="translate(130.000000, 88.588457) rotate(120.000000) translate(-130.000000, -88.588457) translate(82.000000, 22.588457)">
                <polygon id="WEDGES-l4-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l4-o7" style="fill: orange" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l4-o6" style="fill: orange" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l4-o5" style="fill: orange" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l4-o4" style="fill: orange" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l4-o3" style="fill: yellow" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l4-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l4-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l4-o0" style="fill: orange" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-3" transform="translate(97.157677, 115.157677) rotate(90.000000) translate(-97.157677, -115.157677) translate(49.157677, 49.157677)">
                <polygon id="WEDGES-l3-o8" style="fill: #26f" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l3-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l3-o6" style="fill: #26f" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l3-o5" style="fill: #26f" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l3-o4" style="fill: yellow" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l3-o3" style="fill: #26f" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l3-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l3-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l3-o0" style="fill: #26f" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-2" transform="translate(82.000000, 154.588457) rotate(60.000000) translate(-82.000000, -154.588457) translate(34.000000, 88.588457)">
                <polygon id="WEDGES-l2-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l2-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l2-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l2-o5" style="fill: #26f" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l2-o4" style="fill: #26f" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l2-o3" style="fill: #26f" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l2-o2" style="fill: #26f" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l2-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l2-o0" style="fill: #26f" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-1" transform="translate(88.588457, 196.315353) rotate(30.000000) translate(-88.588457, -196.315353) translate(40.588457, 130.315353)">
                <polygon id="WEDGES-l1-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l1-o7" style="fill: #26f" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l1-o6" style="fill: #26f" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l1-o5" style="fill: #26f" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l1-o4" style="fill: #26f" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l1-o3" style="fill: yellow" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l1-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l1-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l1-o0" style="fill: #26f" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-0" transform="translate(67.157677, 163.157677)">
                <polygon id="WEDGES-l0-o8" style="fill: red" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l0-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l0-o6" style="fill: red" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l0-o5" style="fill: red" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l0-o4" style="fill: yellow" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l0-o3" style="fill: red" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l0-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l0-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l0-o0" style="fill: red" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
        </g>
        <g id="DIAGONALS" transform="translate(168.861561, 1.019238)" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <line x1="0" y1="287.842323" x2="70.2768775" y2="550.119201" id="BOTTOM"></line>
            <line x1="0.15767665" y1="262.276878" x2="70.4345542" y2="2.27488928e-16" id="TOP"></line>
        </g>
    </g>
</svg>`,kx={name:"tri_quad",orbits:[{orbitName:"CORNERS",numPieces:5,numOrientations:3},{orbitName:"CORNER_U",numPieces:1,numOrientations:4},{orbitName:"CORNER_R",numPieces:1,numOrientations:3},{orbitName:"EDGES",numPieces:8,numOrientations:2},{orbitName:"BIG_CENTERS",numPieces:6,numOrientations:1},{orbitName:"SMALL_CENTERS",numPieces:13,numOrientations:3}],defaultPattern:{CORNERS:{pieces:[0,1,2,3,4],orientation:[0,0,0,0,0]},CORNER_U:{pieces:[0],orientation:[0]},CORNER_R:{pieces:[0],orientation:[0]},EDGES:{pieces:[0,1,2,3,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]},BIG_CENTERS:{pieces:[0,1,2,3,4,5],orientation:[0,0,0,0,0,0]},SMALL_CENTERS:{pieces:[0,1,2,3,4,5,6,7,8,9,10,11,12],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0]}},moves:{U:{CORNERS:{permutation:[1,2,3,0,4],orientationDelta:[0,0,0,0,0]},CORNER_U:{permutation:[0],orientationDelta:[3]},CORNER_R:{permutation:[0],orientationDelta:[0]},EDGES:{permutation:[1,2,3,0,4,5,6,7],orientationDelta:[0,0,0,0,0,0,0,0]},BIG_CENTERS:{permutation:[1,2,3,0,4,5],orientationDelta:[0,0,0,0,0,0]},SMALL_CENTERS:{permutation:[2,3,4,5,6,7,0,1,8,9,10,11,12],orientationDelta:[0,0,0,0,0,0,0,0,0,0,0,0,0]}},R:{CORNERS:{permutation:[4,0,2,3,1],orientationDelta:[2,2,0,0,2]},CORNER_U:{permutation:[0],orientationDelta:[0]},CORNER_R:{permutation:[0],orientationDelta:[2]},EDGES:{permutation:[5,4,2,3,6,7,1,0],orientationDelta:[0,0,0,0,0,0,0,0]},BIG_CENTERS:{permutation:[4,1,2,3,5,0],orientationDelta:[0,0,0,0,0,0]},SMALL_CENTERS:{permutation:[9,8,7,3,4,5,6,12,10,11,1,0,2],orientationDelta:[0,0,0,0,0,0,0,0,0,0,0,0,0]}}}},Ux=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg
   width="320"
   height="250"
   viewBox="0 0 84.666665 66.145831"
   version="1.1"
   id="svg5"
   inkscape:version="1.2.2 (b0a84865, 2022-12-01)"
   sodipodi:docname="TriQuad.svg"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <sodipodi:namedview
     id="namedview7"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1"
     inkscape:document-units="mm"
     showgrid="false"
     inkscape:zoom="2.8284271"
     inkscape:cx="202.93965"
     inkscape:cy="135.23417"
     inkscape:window-width="1728"
     inkscape:window-height="945"
     inkscape:window-x="0"
     inkscape:window-y="38"
     inkscape:window-maximized="0"
     inkscape:current-layer="layer1" />
  <defs
     id="defs2" />
  <g stroke="black" stroke-width="0.36px" >
    <rect
       style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       id="rect15738"
       width="11.707812"
       height="4.0348959"
       x="24.27552"
       y="16.734896" />
    <rect
       style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       id="rect15740"
       width="11.90625"
       height="3.6380208"
       x="24.606249"
       y="44.846874" />
    <rect
       style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       id="rect15742"
       width="3.96875"
       height="11.641666"
       x="43.65625"
       y="27.516666" />
    <rect
       style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       id="rect15744"
       width="10.318749"
       height="7.4744792"
       x="63.63229"
       y="42.664062" />
    <rect
       style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       id="rect15746"
       width="10.583333"
       height="8.2020836"
       x="65.021355"
       y="16.536459" />
    <rect
       style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       id="rect15736"
       width="5.8869791"
       height="10.847917"
       x="13.295312"
       y="27.252083" />
    <path
       style="fill:#ffff00;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 26.625856,38.003684 8.676292,0.11123 -3.89321,-5.33926 z"
       id="CORNER_U-l0-o3" />
    <path
       id="BIG_CENTERS-l3-o0"
       style="fill:#ffff00;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="M 35.191134 37.892261 L 26.514661 38.22609 L 26.796297 45.144014 A 1.4187645 1.4461632 0 0 1 26.980782 45.131095 A 1.4187645 1.4461632 0 0 1 28.3993 46.577002 A 1.4187645 1.4461632 0 0 1 26.980782 48.023425 A 1.4187645 1.4461632 0 0 1 26.913603 48.020841 L 27.293424 57.358256 L 32.187699 57.469877 L 33.669263 47.813619 A 1.4187645 1.4461632 0 0 1 33.666679 47.812585 A 1.4187645 1.4461632 0 0 1 33.468758 47.726286 A 1.4187645 1.4461632 0 0 1 33.464624 47.723702 A 1.4187645 1.4461632 0 0 1 33.281689 47.606913 A 1.4187645 1.4461632 0 0 1 33.278589 47.604329 A 1.4187645 1.4461632 0 0 1 33.113741 47.458602 A 1.4187645 1.4461632 0 0 1 32.973698 47.28962 A 1.4187645 1.4461632 0 0 1 32.970597 47.284969 A 1.4187645 1.4461632 0 0 1 32.861043 47.100484 A 1.4187645 1.4461632 0 0 1 32.855876 47.091182 A 1.4187645 1.4461632 0 0 1 32.775777 46.892745 A 1.4187645 1.4461632 0 0 1 32.773193 46.88396 A 1.4187645 1.4461632 0 0 1 32.724618 46.678288 A 1.4187645 1.4461632 0 0 1 32.722034 46.663818 A 1.4187645 1.4461632 0 0 1 32.705497 46.44471 A 1.4187645 1.4461632 0 0 1 32.725651 46.205448 A 1.4187645 1.4461632 0 0 1 32.729785 46.184261 A 1.4187645 1.4461632 0 0 1 32.78818 45.962052 A 1.4187645 1.4461632 0 0 1 32.792314 45.950167 A 1.4187645 1.4461632 0 0 1 32.892049 45.728992 A 1.4187645 1.4461632 0 0 1 33.030025 45.52487 A 1.4187645 1.4461632 0 0 1 33.032609 45.522286 A 1.4187645 1.4461632 0 0 1 33.19849 45.350203 A 1.4187645 1.4461632 0 0 1 33.206759 45.342969 A 1.4187645 1.4461632 0 0 1 33.401579 45.201375 A 1.4187645 1.4461632 0 0 1 33.857365 45.025675 A 1.4187645 1.4461632 0 0 1 34.100761 44.999837 L 35.191134 37.892261 z " />
    <path
       style="fill:#ffff00;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 32.410048,57.136014 5.89543,0.44494 2.8921,-12.5695 -7.00778,-1.44605 z"
       id="SMALL_CENTERS-l7-o0" />
    <path
       style="fill:#ffff00;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 35.524618,38.337384 -1.00111,5.00555 6.67407,1.55729 z"
       id="EDGES-l0-o1" />
    <path
       style="fill:#ffff00;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 38.305478,57.247244 3.00333,-11.79085 4.78308,5.78419 z"
       id="CORNERS-l0-o2" />
    <path
       style="fill:#ffff00;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 22.51018,57.358484 -3.003333,-12.5695 7.119009,-1.44605 0.667406,14.23802 z"
       id="SMALL_CENTERS-l6-o0" />
    <path
       style="fill:#ffff00;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="M 16.442944,47.349782 22.51018,57.358484 19.395614,44.900224 Z"
       id="CORNERS-l3-o1"
       sodipodi:nodetypes="cccc" />
    <path
       style="fill:#ffff00;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 19.506848,44.566524 6.896539,-6.67407 -0.111236,5.56172 z"
       id="EDGES-l3-o0" />
    <path
       style="fill:#ffff00;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 29.295488,64.255014 -6.674074,-6.89653 h 9.677404 l 0.3337,4.11567 z"
       id="path999"
       sodipodi:nodetypes="ccccc" />
    <path
       style="fill:#ffff00;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 32.521288,61.362924 -0.11124,-3.89321 5.45049,0.11124 z"
       id="EDGES-l4-o0"
       sodipodi:nodetypes="cccc" />
    <path
       style="fill:#8800dd;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 26.848325,27.509764 8.676293,-0.11123 -3.89321,5.33926 z"
       id="CORNER_U-l0-o1" />
    <path
       id="BIG_CENTERS-l1-o0"
       style="fill:#8800dd;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="M 32.409908 8.0439535 L 27.515633 8.1550578 L 27.124959 17.753955 A 1.4187645 1.4461632 0 0 1 28.3993 19.192627 A 1.4187645 1.4461632 0 0 1 27.007654 20.638017 L 26.736869 27.287223 L 35.413342 27.621053 L 34.305916 20.403923 A 1.4187645 1.4461632 0 0 1 33.99224 20.440613 A 1.4187645 1.4461632 0 0 1 32.573206 18.994189 A 1.4187645 1.4461632 0 0 1 33.868734 17.553967 L 32.409908 8.0439535 z " />
    <path
       style="fill:#8800dd;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 32.632518,8.3774337 5.89543,-0.44494 2.8921,12.5695003 -7.00778,1.44605 z"
       id="SMALL_CENTERS-l2-o0" />
    <path
       style="fill:#8800dd;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 35.747088,27.176064 -1.00111,-5.00555 6.67407,-1.55729 z"
       id="EDGES-l1-o0" />
    <path
       style="fill:#8800dd;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 38.527948,8.2662037 3.00333,11.7908503 4.78308,-5.78419 z"
       id="CORNERS-l1-o1" />
    <path
       style="fill:#8800dd;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 22.732649,8.1549637 -3.003333,12.5695003 7.119009,1.44605 0.667403,-14.2380203 z"
       id="SMALL_CENTERS-l3-o0" />
    <path
       style="fill:#8800dd;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="M 16.665413,18.631388 22.732649,8.1549637 19.618083,21.548667 Z"
       id="CORNERS-l2-o2"
       sodipodi:nodetypes="cccc" />
    <path
       style="fill:#8800dd;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 19.729317,20.946924 6.896539,6.67407 -0.111236,-5.56172 z"
       id="EDGES-l2-o1" />
    <path
       style="fill:#8800dd;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="M 29.517958,1.2584335 22.843883,8.154963 h 9.677405 l 0.3337,-4.1156695 z"
       id="path1220"
       sodipodi:nodetypes="ccccc" />
    <path
       style="fill:#8800dd;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 32.743758,4.1505235 -0.11124,3.8932095 5.45049,-0.11124 z"
       id="EDGES-l7-o1"
       sodipodi:nodetypes="cccc" />
    <path
       style="fill:#ffa500;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 25.457888,37.131548 -0.11123,-8.676293 5.33926,3.89321 z"
       id="CORNER_U-l0-o2" />
    <path
       id="BIG_CENTERS-l2-o0"
       style="fill:#ffa500;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="M 25.568982 28.566732 L 17.670239 29.778544 A 1.4187645 1.4461632 0 0 1 17.683675 29.974398 A 1.4187645 1.4461632 0 0 1 16.265157 31.420821 A 1.4187645 1.4461632 0 0 1 14.865759 30.208492 L 5.9918823 31.569649 L 6.1029867 36.463924 L 15.111739 36.830827 A 1.4187645 1.4461632 0 0 1 16.52974 35.407658 A 1.4187645 1.4461632 0 0 1 17.948258 36.853564 A 1.4187645 1.4461632 0 0 1 17.944641 36.946065 L 25.235669 37.242688 L 25.568982 28.566732 z " />
    <path
       style="fill:#ffa500;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 6.3255586,31.347355 -0.44494,-5.89543 12.5694994,-2.8921 1.44605,7.00778 z"
       id="SMALL_CENTERS-l4-o0" />
    <path
       style="fill:#ffa500;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 25.124188,28.232785 -5.00555,1.00111 -1.55729,-6.67407 z"
       id="EDGES-l2-o0" />
    <path
       style="fill:#ffa500;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="M 6.2143286,25.451925 19.12771,21.980873 16.804661,19.255769 Z"
       id="CORNERS-l2-o1"
       sodipodi:nodetypes="cccc" />
    <path
       style="fill:#ffa500;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="M 6.1030886,41.247224 18.672588,44.250557 20.118638,37.131548 5.8806186,36.464145 Z"
       id="SMALL_CENTERS-l5-o0" />
    <path
       style="fill:#ffa500;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="M 16.766601,46.846738 6.1030886,41.247224 18.561348,44.36179 Z"
       id="CORNERS-l3-o2"
       sodipodi:nodetypes="cccc" />
    <path
       style="fill:#ffa500;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 18.895048,44.250556 6.67407,-6.896539 -5.56172,0.111236 z"
       id="EDGES-l3-o1" />
    <path
       style="fill:#ff0000;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 37.339636,37.020296 0.11123,-8.676293 -5.33926,3.89321 z"
       id="CORNER_U-l0-o0" />
    <path
       id="BIG_CENTERS-l0-o0"
       style="fill:#ff0000;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="M 37.228219 28.455111 L 37.562048 37.131584 L 44.151827 36.863383 A 1.4187645 1.4461632 0 0 1 44.148726 36.787419 A 1.4187645 1.4461632 0 0 1 45.567761 35.341512 A 1.4187645 1.4461632 0 0 1 46.985763 36.748145 L 56.694214 36.35282 L 56.805835 31.458545 L 46.577519 29.889132 A 1.4187645 1.4461632 0 0 1 45.170886 31.156238 A 1.4187645 1.4461632 0 0 1 43.751851 29.709814 A 1.4187645 1.4461632 0 0 1 43.774072 29.459184 L 37.228219 28.455111 z " />
    <path
       style="fill:#ff0000;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 56.471966,31.236103 0.44494,-5.89543 -12.5695,-2.8921 -1.44605,7.00778 z"
       id="SMALL_CENTERS-l1-o0" />
    <path
       style="fill:#ff0000;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 37.673336,28.121533 5.00555,1.00111 1.55729,-6.67407 z"
       id="EDGES-l1-o1" />
    <path
       style="fill:#ff0000;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 56.583196,25.340673 -11.79085,-3.00333 5.78419,-4.78308 z"
       id="CORNERS-l1-o2" />
    <path
       style="fill:#ff0000;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 56.694436,41.135972 -12.5695,3.003333 -1.44605,-7.119009 14.23802,-0.667403 z"
       id="SMALL_CENTERS-l0-o0" />
    <path
       style="fill:#ff0000;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 48.463076,48.699917 8.23136,-7.563945 -12.45826,3.114566 z"
       id="CORNERS-l0-o1" />
    <path
       style="fill:#ff0000;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 43.902476,44.139304 -6.67407,-6.896539 5.56172,0.111236 z"
       id="EDGES-l0-o0" />
    <path
       id="BIG_CENTERS-l4-o0"
       style="fill:#00ff00;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="M 66.084338 35.995219 L 61.806047 38.374919 L 65.131942 46.747534 A 1.4187645 1.4461632 0 0 1 65.411511 46.718595 A 1.4187645 1.4461632 0 0 1 66.830029 48.164502 A 1.4187645 1.4461632 0 0 1 66.177873 49.380448 L 69.118262 56.782064 L 76.433577 52.105347 L 72.678251 46.259709 A 1.4187645 1.4461632 0 0 1 71.893803 46.502071 A 1.4187645 1.4461632 0 0 1 70.474768 45.055648 A 1.4187645 1.4461632 0 0 1 71.124858 43.841252 L 66.084338 35.995219 z " />
    <path
       style="fill:#00ff00;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 61.782948,38.775304 -5.31064,2.5983 3.8633,12.30575 6.77659,-2.29738 z"
       id="SMALL_CENTERS-l8-o0" />
    <path
       style="fill:#00ff00;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 68.605258,56.567014 -1.6684,-4.82433 -6.54498,2.03262 z"
       id="EDGES-l4-o1" />
    <path
       style="fill:#00ff00;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 56.641118,41.661474 3.37348,11.69033 -7.05188,-2.57016 z"
       id="CORNERS-l0-o0" />
    <path
       style="fill:#00ff00;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 70.210328,33.575674 8.94888,9.32363 -5.4096,4.84846 -7.77783,-11.94454 z"
       id="SMALL_CENTERS-l9-o0" />
    <path
       style="fill:#00ff00;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 76.864042,34.005903 -6.653714,-0.430229 8.98856,9.1714 z"
       id="CORNERS-l4-o2"
       sodipodi:nodetypes="cccc" />
    <path
       style="fill:#00ff00;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 79.271738,43.091204 -2.57317,9.24577 -2.71737,-4.85397 z"
       id="EDGES-l5-o0" />
    <path
       id="BIG_CENTERS-l5-o0"
       style="fill:#2266ff;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="M 71.530001 11.491805 L 68.202039 17.076994 A 1.4187645 1.4461632 0 0 1 68.814404 18.266585 A 1.4187645 1.4461632 0 0 1 67.395886 19.713009 A 1.4187645 1.4461632 0 0 1 66.731844 19.54351 L 61.728015 27.941447 L 65.766528 30.70872 L 72.055033 23.685893 A 1.4187645 1.4461632 0 0 1 71.533101 22.566064 A 1.4187645 1.4461632 0 0 1 72.952136 21.120158 A 1.4187645 1.4461632 0 0 1 73.964478 21.553206 L 78.979159 15.953031 L 71.530001 11.491805 z " />
    <path
       style="fill:#2266ff;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 66.135278,30.550754 4.69448,3.59388 9.29012,-8.94709 -5.0791,-5.04011 z"
       id="SMALL_CENTERS-l10-o0" />
    <path
       style="fill:#2266ff;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 79.015288,16.508154 -3.57346,3.64529 4.73882,4.95094 z"
       id="EDGES-l6-o1" />
    <path
       style="fill:#2266ff;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 71.012098,33.865134 8.95782,-8.23416 -3.12323,8.383912 z"
       id="CORNERS-l4-o1"
       sodipodi:nodetypes="cccc" />
    <path
       style="fill:#2266ff;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 57.722308,25.327844 4.35253,-12.16831 6.75248,2.67868 -7.2206,12.2894 z"
       id="SMALL_CENTERS-l11-o0" />
    <path
       style="fill:#2266ff;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 55.884858,14.300954 1.83745,11.02689 4.19858,-12.13592 z"
       id="CORNERS-l1-o0" />
    <path
       style="fill:#2266ff;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 62.196388,12.973214 9.42272,-1.82149 -3.13206,4.59732 z"
       id="EDGES-l7-o0" />
    <path
       style="fill:#ff0000;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 56.881638,40.784544 4.33814,-7.34148 -4.11567,-7.78641 z"
       id="CORNER_R-l0-o0" />
    <path
       style="fill:#00ff00;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 57.01393,41.025095 13.215848,-7.359561 -9.01,-0.3337 z"
       id="CORNER_R-l0-o1"
       sodipodi:nodetypes="cccc" />
    <path
       style="fill:#2266ff;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 57.549048,25.879124 3.44826,7.00777 8.89876,0.55617 z"
       id="CORNER_R-l0-o2" />
    <path
       style="fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 76.795311,34.065104 3.241146,-8.73125 -0.79375,17.396354 z"
       id="CORNERS-l4-o0" />
    <path
       style="fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 79.176561,42.531771 3.704167,1.653645 0.926041,-19.446874 -3.836458,0.727604 z"
       id="SMALL_CENTERS-l12-o0" />
    <path
       style="fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 79.176561,42.664062 -2.315104,9.855729 6.151562,-8.334375 z"
       id="EDGES-l5-o1"
       sodipodi:nodetypes="cccc" />
    <path
       style="fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="m 80.168749,25.333854 -0.727604,-8.665104 4.43177,8.003646 z"
       id="EDGES-l6-o0"
       sodipodi:nodetypes="cccc" />
    <path
       style="fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="M 22.357291,57.546875 16.594008,46.956087 6.4258814,41.831092 Z"
       id="CORNERS-l3-o0"
       sodipodi:nodetypes="cccc" />
    <path
       style="fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="M 22.555729,7.8713541 5.9581597,25.268988 16.594008,18.891116 Z"
       id="CORNERS-l2-o0"
       sodipodi:nodetypes="cccc" />
    <path
       style="fill:#ffa500;fill-opacity:1;stroke:#000000;stroke-width:0.35269;stroke-opacity:0.994007"
       d="M 5.8869791,25.598438 V 41.076562 L 1.0583333,33.866667 Z"
       id="path15317" />
    <path
       id="SMALL_CENTERS-l7-o2"
       style="fill:#000000"
       d="M 34.124532 44.998804 A 1.4187645 1.4461632 0 0 0 34.001025 45.004488 L 33.634123 47.8007 A 1.4187645 1.4461632 0 0 0 34.124532 47.891134 A 1.4187645 1.4461632 0 0 0 35.54305 46.44471 A 1.4187645 1.4461632 0 0 0 34.124532 44.998804 z " />
    <path
       id="SMALL_CENTERS-l7-o1"
       style="fill:#ffff00"
       d="M 32.906002 53.353333 L 32.530314 56.217757 A 1.4187645 1.4461632 0 0 0 32.669324 56.225509 A 1.4187645 1.4461632 0 0 0 34.087842 54.779085 A 1.4187645 1.4461632 0 0 0 32.906002 53.353333 z " />
    <path
       id="SMALL_CENTERS-l6-o1"
       style="fill:#000000"
       d="M 26.711031 45.158484 A 1.4187645 1.4461632 0 0 0 25.561747 46.577002 A 1.4187645 1.4461632 0 0 0 26.844873 48.015674 L 26.711031 45.158484 z " />
    <path
       id="SMALL_CENTERS-l6-o2"
       style="fill:#ffff00"
       d="M 27.072766 52.873775 A 1.4187645 1.4461632 0 0 0 25.760185 54.316064 A 1.4187645 1.4461632 0 0 0 27.17922 55.762488 A 1.4187645 1.4461632 0 0 0 27.208158 55.761454 L 27.072766 52.873775 z " />
    <path
       id="SMALL_CENTERS-l5-o1"
       style="fill:#ffa500"
       d="M 7.4383057 36.536788 A 1.4187645 1.4461632 0 0 0 8.8568237 37.969259 A 1.4187645 1.4461632 0 0 0 10.267074 36.669596 L 7.4383057 36.536788 z " />
    <path
       id="SMALL_CENTERS-l5-o2"
       style="fill:#000000"
       d="M 15.112256 36.896973 A 1.4187645 1.4461632 0 0 0 16.52974 38.299988 A 1.4187645 1.4461632 0 0 0 17.93689 37.029264 L 15.112256 36.896973 z " />
    <path
       id="SMALL_CENTERS-l4-o1"
       style="fill:#000000"
       d="M 16.265157 28.528491 A 1.4187645 1.4461632 0 0 0 14.846122 29.974398 A 1.4187645 1.4461632 0 0 0 14.86886 30.227096 L 17.679024 29.858643 A 1.4187645 1.4461632 0 0 0 16.265157 28.528491 z " />
    <path
       id="SMALL_CENTERS-l4-o2"
       style="fill:#ffa500"
       d="M 8.9229696 29.586825 A 1.4187645 1.4461632 0 0 0 7.5039347 31.032731 A 1.4187645 1.4461632 0 0 0 7.5137533 31.191895 L 10.325985 30.822925 A 1.4187645 1.4461632 0 0 0 8.9229696 29.586825 z " />
    <path
       id="SMALL_CENTERS-l3-o2"
       style="fill:#000000"
       d="M 26.980782 17.74672 A 1.4187645 1.4461632 0 0 0 25.561747 19.192627 A 1.4187645 1.4461632 0 0 0 26.920321 20.636466 L 27.055713 17.748271 A 1.4187645 1.4461632 0 0 0 26.980782 17.74672 z " />
    <path
       id="SMALL_CENTERS-l3-o1"
       style="fill:#8800dd"
       d="M 27.377657 9.7430745 A 1.4187645 1.4461632 0 0 0 25.958622 11.188981 A 1.4187645 1.4461632 0 0 0 27.295492 12.632304 L 27.430884 9.7435913 A 1.4187645 1.4461632 0 0 0 27.377657 9.7430745 z " />
    <path
       id="SMALL_CENTERS-l2-o2"
       style="fill:#8800dd"
       d="M 32.867761 9.8092204 A 1.4187645 1.4461632 0 0 0 32.820736 9.8107707 L 33.194356 12.661759 A 1.4187645 1.4461632 0 0 0 34.286279 11.255127 A 1.4187645 1.4461632 0 0 0 32.867761 9.8092204 z " />
    <path
       id="SMALL_CENTERS-l2-o1"
       style="fill:#000000"
       d="M 33.99224 17.548283 A 1.4187645 1.4461632 0 0 0 33.836694 17.557585 L 34.212382 20.422526 A 1.4187645 1.4461632 0 0 0 35.410758 18.994189 A 1.4187645 1.4461632 0 0 0 33.99224 17.548283 z " />
    <path
       id="SMALL_CENTERS-l1-o2"
       style="fill:#000000"
       d="M 45.170886 28.263908 A 1.4187645 1.4461632 0 0 0 43.759603 29.569255 L 46.571318 29.937708 A 1.4187645 1.4461632 0 0 0 46.589404 29.709814 A 1.4187645 1.4461632 0 0 0 45.170886 28.263908 z " />
    <path
       id="SMALL_CENTERS-l1-o1"
       style="fill:#ff0000"
       d="M 53.505261 29.322241 A 1.4187645 1.4461632 0 0 0 52.090361 30.661694 L 54.898975 31.030147 A 1.4187645 1.4461632 0 0 0 54.923779 30.768148 A 1.4187645 1.4461632 0 0 0 53.505261 29.322241 z " />
    <path
       id="SMALL_CENTERS-l0-o2"
       style="fill:#ff0000"
       d="M 55.642082 36.412764 L 52.842769 36.544023 A 1.4187645 1.4461632 0 0 0 54.232865 37.704675 A 1.4187645 1.4461632 0 0 0 55.642082 36.412764 z " />
    <path
       id="SMALL_CENTERS-l0-o1"
       style="fill:#000000"
       d="M 46.985246 36.818424 L 44.159062 36.951233 A 1.4187645 1.4461632 0 0 0 45.567761 38.233842 A 1.4187645 1.4461632 0 0 0 46.985246 36.818424 z " />
    <path
       id="SMALL_CENTERS-l8-o1"
       style="fill:#00ff00"
       d="M 62.328495 40.066288 A 1.4187645 1.4461632 0 0 0 61.412789 41.417627 A 1.4187645 1.4461632 0 0 0 62.831824 42.86405 A 1.4187645 1.4461632 0 0 0 63.449874 42.71884 L 62.328495 40.066288 z " />
    <path
       id="SMALL_CENTERS-l8-o2"
       style="fill:#000000"
       d="M 65.151579 46.743917 A 1.4187645 1.4461632 0 0 0 63.992476 48.164502 A 1.4187645 1.4461632 0 0 0 65.411511 49.610925 A 1.4187645 1.4461632 0 0 0 66.246086 49.332389 L 65.151579 46.743917 z " />
    <path
       id="SMALL_CENTERS-l9-o1"
       style="fill:#000000"
       d="M 71.893803 43.609741 A 1.4187645 1.4461632 0 0 0 71.182218 43.805078 L 72.747498 46.209066 A 1.4187645 1.4461632 0 0 0 73.312321 45.055648 A 1.4187645 1.4461632 0 0 0 71.893803 43.609741 z " />
    <path
       id="SMALL_CENTERS-l9-o2"
       style="fill:#00ff00"
       d="M 67.858907 37.259741 A 1.4187645 1.4461632 0 0 0 67.076526 37.500037 L 68.644906 39.908675 A 1.4187645 1.4461632 0 0 0 69.277425 38.705648 A 1.4187645 1.4461632 0 0 0 67.858907 37.259741 z " />
    <path
       id="SMALL_CENTERS-l10-o1"
       style="fill:#2266ff"
       d="M 68.77203 27.473258 L 66.907544 29.649353 A 1.4187645 1.4461632 0 0 0 67.792761 29.965613 A 1.4187645 1.4461632 0 0 0 69.211279 28.519189 A 1.4187645 1.4461632 0 0 0 68.77203 27.473258 z " />
    <path
       id="SMALL_CENTERS-l10-o2"
       style="fill:#000000"
       d="M 73.899365 21.489644 L 72.033329 23.667289 A 1.4187645 1.4461632 0 0 0 72.952136 24.012488 A 1.4187645 1.4461632 0 0 0 74.370654 22.566064 A 1.4187645 1.4461632 0 0 0 73.899365 21.489644 z " />
    <path
       id="SMALL_CENTERS-l11-o1"
       style="fill:#000000"
       d="M 67.395886 16.820679 A 1.4187645 1.4461632 0 0 0 65.976851 18.266585 A 1.4187645 1.4461632 0 0 0 66.670349 19.508887 L 68.128141 17.027901 A 1.4187645 1.4461632 0 0 0 67.395886 16.820679 z " />
    <path
       id="SMALL_CENTERS-l11-o2"
       style="fill:#2266ff"
       d="M 63.096407 24.361304 A 1.4187645 1.4461632 0 0 0 61.677372 25.80721 A 1.4187645 1.4461632 0 0 0 62.276819 26.986983 L 63.72996 24.513749 A 1.4187645 1.4461632 0 0 0 63.096407 24.361304 z " />
    <path
       id="SMALL_CENTERS-l12-o1"
       style="fill:#ffffff"
       d="M 83.706002 26.853658 A 1.2100496 1.2568218 0 0 0 82.512276 28.109912 A 1.2100496 1.2568218 0 0 0 83.586629 29.358415 L 83.706002 26.853658 z " />
    <path
       id="SMALL_CENTERS-l12-o2"
       style="fill:#ffffff"
       d="M 83.135494 38.833805 A 1.2100496 1.2568218 0 0 0 82.044604 40.083858 A 1.2100496 1.2568218 0 0 0 83.017155 41.315308 L 83.135494 38.833805 z " />
  </g>
</svg>
`});var Od={};zr(Od,{cube4x4x4LLSVG:()=>Fx});var Fx,zd=A(()=>{Fx=`<svg
  height="256"
  viewBox="0 0 256 256"
  width="256"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>
  <g fill="none" fill-rule="nonzero" stroke="#000">
    <g stroke-linejoin="round" stroke-width="3" transform="translate(17 17)">
      <!-- U -->
      <path id="CORNERS-l1-o0" d="m184.6 147.8v36.8h-36.8v-36.8z" style="fill: white" />
      <path id="EDGES-l10-o0" d="m147.8 184.6h-36.8v-36.8h36.8z" style="fill: white" />
      <path id="EDGES-l0-o0" d="m111 147.8v36.8h-36.8v-36.8z" style="fill: white" />
      <path id="CORNERS-l0-o0" d="m74.2 184.6h-36.8v-36.8h36.8z" style="fill: white" />
      <path id="EDGES-l6-o0" d="m37.4 147.8v-36.8h36.8v36.8z" style="fill: white" />
      <path id="CENTERS-l10-o0" d="m74.2 111h36.8v36.8h-36.8z" style="fill: white" />
      <path id="CENTERS-l21-o0" d="m111 147.8v-36.8h36.8v36.8z" style="fill: white" />
      <path id="EDGES-l2-o0" d="m147.8 111h36.8v36.8h-36.8z" style="fill: white" />
      <path id="EDGES-l21-o0" d="m184.6 74.2v36.8h-36.8v-36.8z" style="fill: white" />
      <path id="CENTERS-l15-o0" d="m147.8 111h-36.8v-36.8h36.8z" style="fill: white" />
      <path id="CENTERS-l6-o0" d="m111 74.2v36.8h-36.8v-36.8z" style="fill: white" />
      <path id="EDGES-l22-o0" d="m74.2 111h-36.8v-36.8h36.8z" style="fill: white" />
      <path id="CORNERS-l6-o0" d="m37.4 74.2v-36.8h36.8v36.8z" style="fill: white" />
      <path id="EDGES-l15-o0" d="m74.2 37.4h36.8v36.8h-36.8z" style="fill: white" />
      <path id="EDGES-l18-o0" d="m111 74.2v-36.8h36.8v36.8z" style="fill: white" />
      <path id="CORNERS-l3-o0" d="m147.8 37.4h36.8v36.8h-36.8z" style="fill: white" />

      <path id="CORNERS-l0-o1" d="m.6000061 221.399997 36.7999939-36.8h36.8v36.8z" style="fill: limegreen" />
      <path id="EDGES-l0-o1" d="m74.2 184.599997h36.8v36.8h-36.8z" style="fill: limegreen" />
      <path id="EDGES-l10-o1" d="m111 221.399997v-36.8h36.8v36.8z" style="fill: limegreen" />
      <path id="CORNERS-l1-o2" d="m147.8 184.599997h36.8l36.799994 36.8h-73.599994z" style="fill: limegreen" />

      <path id="CORNERS-l0-o2" d="m-17.7999969 166.2h36.8l36.7999938 36.8h-73.5999938z" style="fill: orange" transform="matrix(0 1 -1 0 203.600003 165.599997)" />
      <path id="EDGES-l6-o1" d="m.60000305 147.8v-36.8h36.80000005v36.8z" style="fill: orange" transform="matrix(0 1 -1 0 148.400003 110.399997)" />
      <path id="EDGES-l22-o1" d="m.60000305 74.2h36.80000005v36.8h-36.80000005z" style="fill: orange" transform="matrix(0 1 -1 0 111.600003 73.599997)" />
      <path id="CORNERS-l6-o1" d="m-17.7999966 55.8 36.7999997-36.8h36.8v36.8z" style="fill: orange" transform="matrix(0 1 -1 0 56.400003 18.399997)" />

      <path id="CORNERS-l3-o1" d="m147.800006 37.3999992 36.799994-36.79999996h36.8v36.79999996z" style="fill: #26f" transform="matrix(-1 0 0 -1 369.2 37.999998)" />
      <path id="EDGES-l18-o1" d="m111 .59999924h36.8v36.79999996h-36.8z" style="fill: #26f" transform="matrix(-1 0 0 -1 258.8 37.999998)" />
      <path id="EDGES-l15-o1" d="m74.2 37.3999992v-36.79999996h36.8v36.79999996z" style="fill: #26f" transform="matrix(-1 0 0 -1 185.2 37.999998)" />
      <path id="CORNERS-l6-o2" d="m.6.59999924h36.8l36.7999939 36.79999996h-73.5999939z" style="fill: #26f" transform="matrix(-1 0 0 -1 74.8 37.999998)" />

      <path id="CORNERS-l1-o1" d="m166.200018 203 36.799994-36.8h36.8v36.8z" style="fill: red" transform="matrix(0 -1 1 0 18.400012 387.600012)" />
      <path id="EDGES-l2-o1" d="m184.600012 111h36.8v36.8h-36.8z" style="fill: red" transform="matrix(0 -1 1 0 73.600012 332.400012)" />
      <path id="EDGES-l21-o1" d="m184.600012 111v-36.8h36.8v36.8z" style="fill: red" transform="matrix(0 -1 1 0 110.400012 295.600012)" />
      <path id="CORNERS-l3-o2" d="m166.200012 19h36.8l36.8 36.8h-73.6z" style="fill: red" transform="matrix(0 -1 1 0 165.600012 240.400012)" />
    </g>
    <g opacity="0" transform="translate(17 242)">
      <path id="EDGES-l1-o0" d="m12 0v1h-1v-1z" style="fill: limegreen" />
      <path id="CENTERS-l0-o0" d="m10 1h-1v-1h1z" style="fill: limegreen" />
      <path id="CENTERS-l23-o0" d="m9 0v1h-1v-1z" style="fill: limegreen" />
      <path id="EDGES-l20-o0" d="m7 1h-1v-1h1z" style="fill: limegreen" />
      <path id="EDGES-l23-o0" d="m6 2v-1h1v1z" style="fill: limegreen" />
      <path id="CENTERS-l14-o0" d="m8 1h1v1h-1z" style="fill: limegreen" />
      <path id="CENTERS-l1-o0" d="m9 2v-1h1v1z" style="fill: limegreen" />
      <path id="EDGES-l7-o0" d="m11 1h1v1h-1z" style="fill: limegreen" />
      <path id="CORNERS-l4-o1" d="m12 3v1h-1v-1z" style="fill: limegreen" />
      <path id="EDGES-l14-o1" d="m10 4h-1v-1h1z" style="fill: limegreen" />
      <path id="EDGES-l3-o1" d="m9 3v1h-1v-1z" style="fill: limegreen" />
      <path id="CORNERS-l2-o2" d="m7 4h-1v-1h1z" style="fill: limegreen" />

      <path id="CORNERS-l2-o0" d="m6 6v-1h1v1z" style="fill: yellow"/>
      <path id="EDGES-l3-o0" d="m8 5h1v1h-1z" style="fill: yellow"/>
      <path id="EDGES-l14-o0" d="m9 6v-1h1v1z" style="fill: yellow"/>
      <path id="CORNERS-l4-o0" d="m11 5h1v1h-1z" style="fill: yellow"/>
      <path id="EDGES-l5-o0" d="m12 7v1h-1v-1z" style="fill: yellow"/>
      <path id="CENTERS-l3-o0" d="m10 8h-1v-1h1z" style="fill: yellow"/>
      <path id="CENTERS-l16-o0" d="m9 7v1h-1v-1z" style="fill: yellow"/>
      <path id="EDGES-l9-o0" d="m7 8h-1v-1h1z" style="fill: yellow"/>
      <path id="EDGES-l16-o0" d="m6 9v-1h1v1z" style="fill: yellow"/>
      <path id="CENTERS-l8-o0" d="m8 8h1v1h-1z" style="fill: yellow"/>
      <path id="CENTERS-l5-o0" d="m9 9v-1h1v1z" style="fill: yellow"/>
      <path id="EDGES-l12-o0" d="m11 8h1v1h-1z" style="fill: yellow"/>
      <path id="CORNERS-l5-o0" d="m12 10v1h-1v-1z" style="fill: yellow"/>
      <path id="EDGES-l8-o0" d="m10 11h-1v-1h1z" style="fill: yellow"/>
      <path id="EDGES-l19-o0" d="m9 10v1h-1v-1z" style="fill: yellow"/>
      <path id="CORNERS-l7-o0" d="m7 11h-1v-1h1z" style="fill: yellow"/>

      <path id="EDGES-l9-o1" d="m5 0v1h-1v-1z" style="fill: orange" />
      <path id="CENTERS-l20-o0" d="m4 1h1v1h-1z" style="fill: orange" />
      <path id="CENTERS-l22-o0" d="m5 3v1h-1v-1z" style="fill: orange" />
      <path id="EDGES-l20-o1" d="m4 4h-1v-1h1z" style="fill: orange" />
      <path id="EDGES-l23-o1" d="m3 2v-1h1v1z" style="fill: orange" />
      <path id="CENTERS-l17-o0" d="m4 1h-1v-1h1z" style="fill: orange" />
      <path id="CENTERS-l9-o0" d="m2 0v1h-1v-1z" style="fill: orange" />
      <path id="EDGES-l16-o1" d="m1 1h1v1h-1z" style="fill: orange" />
      <path id="CORNERS-l7-o2" d="m2 3v1h-1v-1z" style="fill: orange" />
      <path id="EDGES-l17-o1" d="m1 4h-1v-1h1z" style="fill: orange" />
      <path id="EDGES-l13-o1" d="m0 2v-1h1v1z" style="fill: orange" />
      <path id="CORNERS-l2-o1" d="m1 1h-1v-1h1z" style="fill: orange" />

      <path id="EDGES-l11-o0" d="m25 3v1h-1v-1z" style="fill: #26f" />
      <path id="CENTERS-l19-o0" d="m23 4h-1v-1h1z" style="fill: #26f" />
      <path id="CENTERS-l13-o0" d="m22 3v1h-1v-1z" style="fill: #26f" />
      <path id="EDGES-l17-o0" d="m20 4h-1v-1h1z" style="fill: #26f" />
      <path id="EDGES-l13-o0" d="m19 2v-1h1v1z" style="fill: #26f" />
      <path id="CENTERS-l18-o0" d="m21 1h1v1h-1z" style="fill: #26f" />
      <path id="CENTERS-l11-o0" d="m22 2v-1h1v1z" style="fill: #26f" />
      <path id="EDGES-l4-o0" d="m24 1h1v1h-1z" style="fill: #26f" />
      <path id="CORNERS-l7-o1" d="m25 0v1h-1v-1z" style="fill: #26f" />
      <path id="EDGES-l19-o1" d="m23 1h-1v-1h1z" style="fill: #26f" />
      <path id="EDGES-l8-o1" d="m22 0v1h-1v-1z" style="fill: #26f" />
      <path id="CORNERS-l5-o2" d="m20 1h-1v-1h1z" style="fill: #26f" />

      <path id="EDGES-l7-o1" d="m14 4h-1v-1h1z" style="fill: red" />
      <path id="CENTERS-l7-o0" d="m13 2v-1h1v1z" style="fill: red" />
      <path id="CENTERS-l12-o0" d="m14 1h-1v-1h1z" style="fill: red" />
      <path id="EDGES-l5-o1" d="m15 0v1h-1v-1z" style="fill: red" />
      <path id="EDGES-l12-o1" d="m14 1h1v1h-1z" style="fill: red" />
      <path id="CENTERS-l4-o0" d="m15 3v1h-1v-1z" style="fill: red" />
      <path id="CENTERS-l2-o0" d="m17 4h-1v-1h1z" style="fill: red" />
      <path id="EDGES-l1-o1" d="m16 2v-1h1v1z" style="fill: red" />
      <path id="CORNERS-l4-o2" d="m17 1h-1v-1h1z" style="fill: red" />
      <path id="EDGES-l4-o1" d="m18 0v1h-1v-1z" style="fill: red" />
      <path id="EDGES-l11-o1" d="m17 1h1v1h-1z" style="fill: red" />
      <path id="CORNERS-l5-o1" d="m18 3v1h-1v-1z" style="fill: red" />
    </g>
  </g>
</svg>`});var Wr={};zr(Wr,{babyFTOSVG:()=>Ox,ftoSVG:()=>zx,kilominxSVG:()=>Bx,loopoverJSON:()=>Gx,loopoverSVG:()=>Vx,rediCubeJSON:()=>Hx,rediCubeSVG:()=>Wx});var Ox,zx,Bx,Vi,Gx,Vx,Hx,Wx,Xr=A(()=>{Ox=`<?xml version="1.0" encoding="UTF-8"?>
<svg width="1348px" height="556px" viewBox="210 210 1588 796" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>fto</title>
    <g id="fto" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linejoin="round">
      <g transform="translate(-360, 0)">
        <g id="BL" transform="translate(2020, 608) scale(-1, -1) rotate(90) translate(-2040, -608) translate(1560, 368)" stroke="#000000" stroke-width="12">
            <polygon id="C4RNER-l4-o3" style="fill: #ff8000;" points="480 0 640 160 320 160"></polygon>
            <polygon id="C4RNER-l5-o2" style="fill: #ff8000;" points="640 160 800 320 480 320"></polygon>
            <polygon id="CENTERS-l2-o0" style="fill: #ff8000;" transform="translate(480, 240) scale(1, -1) translate(-480, -240) " points="480 160 640 320 320 320"></polygon>
            <polygon id="C4RNER-l3-o1" style="fill: #ff8000;" points="320 160 480 320 160 320"></polygon>
        </g>
        <g id="D" transform="translate(1280, 628)" stroke="#000000" stroke-width="12">
            <polygon id="C4RNER-l4-o0" style="fill: #f4f400;" points="480 0 640 160 320 160"></polygon>
            <polygon id="C4RNER-l3-o0" style="fill: #f4f400;" points="640 160 800 320 480 320"></polygon>
            <polygon id="CENTERS-l4-o0" style="fill: #f4f400;" transform="translate(480, 240) scale(1, -1) translate(-480, -240) " points="480 160 640 320 320 320"></polygon>
            <polygon id="C4RNER-l1-o0" style="fill: #f4f400;" points="320 160 480 320 160 320"></polygon>
        </g>
        <g id="BR" transform="translate(1500, 608) scale(1, -1) rotate(90) translate(-1480, -608) translate(1000, 368)" stroke="#000000" stroke-width="12">
            <polygon id="C4RNER-l4-o1" style="fill: #aaaaaa;" points="480 0 640 160 320 160"></polygon>
            <polygon id="C4RNER-l2-o2" style="fill: #aaaaaa;" points="640 160 800 320 480 320"></polygon>
            <polygon id="CENTERS-l1-o0" style="fill: #aaaaaa;" transform="translate(480, 240) scale(1, -1) translate(-480, -240) " points="480 160 640 320 320 320"></polygon>
            <polygon id="C4RNER-l1-o3" style="fill: #aaaaaa;" points="320 160 480 320 160 320"></polygon>
        </g>
        <g id="B" transform="translate(1760, 348) scale(1, -1) translate(-1760, -328) translate(1280, 88)" stroke="#000000" stroke-width="12">
            <polygon id="C4RNER-l4-o2" style="fill: #2266ff;" points="480 0 640 160 320 160"></polygon>
            <polygon id="C4RNER-l5-o3" style="fill: #2266ff;" points="640 160 800 320 480 320"></polygon>
            <polygon id="CENTERS-l6-o0" style="fill: #2266ff;" transform="translate(480, 240) scale(1, -1) translate(-480, -240) " points="480 160 640 320 320 320"></polygon>
            <polygon id="C4RNER-l2-o1" style="fill: #2266ff;" points="320 160 480 320 160 320"></polygon>
        </g>
      </g>
      <g id="R" transform="translate(868, 608) scale(-1, -1) rotate(90) translate(-888, -608) translate(408, 368)" stroke="#000000" stroke-width="12">
          <polygon id="C4RNER-l0-o1" style="fill: red;" points="480 0 640 160 320 160"></polygon>
          <polygon id="C4RNER-l2-o3" style="fill: red;" points="640 160 800 320 480 320"></polygon>
          <polygon id="CENTERS-l3-o0" style="fill: red;" transform="translate(480, 240) scale(1, -1) translate(-480, -240) " points="480 160 640 320 320 320"></polygon>
          <polygon id="C4RNER-l1-o2" style="fill: red;" points="320 160 480 320 160 320"></polygon>
      </g>
      <g id="F" transform="translate(128, 628)" stroke="#000000" stroke-width="12">
          <polygon id="C4RNER-l0-o2" style="fill: #44ee00;" points="480 0 640 160 320 160"></polygon>
          <polygon id="C4RNER-l1-o1" style="fill: #44ee00;" points="640 160 800 320 480 320"></polygon>
          <polygon id="CENTERS-l0-o0" style="fill: #44ee00;" transform="translate(480, 240) scale(1, -1) translate(-480, -240) " points="480 160 640 320 320 320"></polygon>
          <polygon id="C4RNER-l3-o3" style="fill: #44ee00;" points="320 160 480 320 160 320"></polygon>
      </g>
      <g id="L" transform="translate(348, 608) scale(1, -1) rotate(90) translate(-328, -608) translate(-152, 368)" stroke="#000000" stroke-width="12">
          <polygon id="C4RNER-l0-o3" style="fill: #8800dd;" points="480 0 640 160 320 160"></polygon>
          <polygon id="C4RNER-l5-o1" style="fill: #8800dd;" points="640 160 800 320 480 320"></polygon>
          <polygon id="CENTERS-l5-o0" style="fill: #8800dd;" transform="translate(480, 240) scale(1, -1) translate(-480, -240) " points="480 160 640 320 320 320"></polygon>
          <polygon id="C4RNER-l3-o2" style="fill: #8800dd;" points="320 160 480 320 160 320"></polygon>
      </g>
      <g id="U" transform="translate(608, 348) scale(1, -1) translate(-608, -328) translate(128, 88)" stroke="#000000" stroke-width="12">
          <polygon id="C4RNER-l0-o0" style="fill: #ffffff;" points="480 0 640 160 320 160"></polygon>
          <polygon id="C4RNER-l2-o0" style="fill: #ffffff;" points="640 160 800 320 480 320"></polygon>
          <polygon id="CENTERS-l7-o0" style="fill: #ffffff;" transform="translate(480, 240) scale(1, -1) translate(-480, -240) " points="480 160 640 320 320 320"></polygon>
          <polygon id="C4RNER-l5-o0" style="fill: #ffffff;" points="320 160 480 320 160 320"></polygon>
      </g>
    </g>
</svg>
`,zx=`<?xml version="1.0" encoding="UTF-8"?>
<svg width="2368px" height="1216px" viewBox="0 0 2368 1216" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>fto</title>
    <g id="fto" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linejoin="round">
        <g id="BL" transform="translate(2040.000000, 608.000000) scale(-1, -1) rotate(90.000000) translate(-2040.000000, -608.000000) translate(1560.000000, 368.000000)" stroke="#000000" stroke-width="12">
            <polygon id="C4RNER-l4-o3" style="fill: #ff8000;" points="480 0 640 160 320 160"></polygon>
            <polygon id="EDGES-l9-o0" style="fill: #ff8000;" points="640 160 800 320 480 320"></polygon>
            <polygon id="CENTERS-l16-o0" style="fill: #ff8000;" transform="translate(480.000000, 240.000000) scale(1, -1) translate(-480.000000, -240.000000) " points="480 160 640 320 320 320"></polygon>
            <polygon id="EDGES-l3-o0" style="fill: #ff8000;" points="320 160 480 320 160 320"></polygon>
            <polygon id="C4RNER-l3-o2" style="fill: #ff8000;" points="800 320 960 480 640 480"></polygon>
            <polygon id="CENTERS-l19-o0" style="fill: #ff8000;" transform="translate(640.000000, 400.000000) scale(1, -1) translate(-640.000000, -400.000000) " points="640 320 800 480 480 480"></polygon>
            <polygon id="EDGES-l7-o0" style="fill: #ff8000;" points="480 320 640 480 320 480"></polygon>
            <polygon id="CENTERS-l3-o0" style="fill: #ff8000;" transform="translate(320.000000, 400.000000) scale(1, -1) translate(-320.000000, -400.000000) " points="320 320 480 480 160 480"></polygon>
            <polygon id="C4RNER-l0-o1" style="fill: #ff8000;" points="160 320 320 480 0 480"></polygon>
        </g>
        <g id="D" transform="translate(1280.000000, 648.000000)" stroke="#000000" stroke-width="12">
            <polygon id="C4RNER-l4-o0" style="fill: #f4f400;" points="480 0 640 160 320 160"></polygon>
            <polygon id="EDGES-l3-o1" style="fill: #f4f400;" points="640 160 800 320 480 320"></polygon>
            <polygon id="CENTERS-l8-o0" style="fill: #f4f400;" transform="translate(480.000000, 240.000000) scale(1, -1) translate(-480.000000, -240.000000) " points="480 160 640 320 320 320"></polygon>
            <polygon id="EDGES-l5-o1" style="fill: #f4f400;" points="320 160 480 320 160 320"></polygon>
            <polygon id="C4RNER-l0-o0" style="fill: #f4f400;" points="800 320 960 480 640 480"></polygon>
            <polygon id="CENTERS-l17-o0" style="fill: #f4f400;" transform="translate(640.000000, 400.000000) scale(1, -1) translate(-640.000000, -400.000000) " points="640 320 800 480 480 480"></polygon>
            <polygon id="EDGES-l1-o1" style="fill: #f4f400;" points="480 320 640 480 320 480"></polygon>
            <polygon id="CENTERS-l6-o0" style="fill: #f4f400;" transform="translate(320.000000, 400.000000) scale(1, -1) translate(-320.000000, -400.000000) " points="320 320 480 480 160 480"></polygon>
            <polygon id="C4RNER-l2-o0" style="fill: #f4f400;" points="160 320 320 480 0 480"></polygon>
        </g>
        <g id="BR" transform="translate(1480.000000, 608.000000) scale(1, -1) rotate(90.000000) translate(-1480.000000, -608.000000) translate(1000.000000, 368.000000)" stroke="#000000" stroke-width="12">
            <polygon id="C4RNER-l4-o1" style="fill: #aaaaaa;" points="480 0 640 160 320 160"></polygon>
            <polygon id="EDGES-l2-o0" style="fill: #aaaaaa;" points="640 160 800 320 480 320"></polygon>
            <polygon id="CENTERS-l15-o0" style="fill: #aaaaaa;" transform="translate(480.000000, 240.000000) scale(1, -1) translate(-480.000000, -240.000000) " points="480 160 640 320 320 320"></polygon>
            <polygon id="EDGES-l5-o0" style="fill: #aaaaaa;" points="320 160 480 320 160 320"></polygon>
            <polygon id="C4RNER-l5-o2" style="fill: #aaaaaa;" points="800 320 960 480 640 480"></polygon>
            <polygon id="CENTERS-l2-o0" style="fill: #aaaaaa;" transform="translate(640.000000, 400.000000) scale(1, -1) translate(-640.000000, -400.000000) " points="640 320 800 480 480 480"></polygon>
            <polygon id="EDGES-l4-o0" style="fill: #aaaaaa;" points="480 320 640 480 320 480"></polygon>
            <polygon id="CENTERS-l4-o0" style="fill: #aaaaaa;" transform="translate(320.000000, 400.000000) scale(1, -1) translate(-320.000000, -400.000000) " points="320 320 480 480 160 480"></polygon>
            <polygon id="C4RNER-l2-o3" style="fill: #aaaaaa;" points="160 320 320 480 0 480"></polygon>
        </g>
        <g id="B" transform="translate(1760.000000, 328.000000) scale(1, -1) translate(-1760.000000, -328.000000) translate(1280.000000, 88.000000)" stroke="#000000" stroke-width="12">
            <polygon id="C4RNER-l4-o2" style="fill: #2266ff;" points="480 0 640 160 320 160"></polygon>
            <polygon id="EDGES-l9-o1" style="fill: #2266ff;" points="640 160 800 320 480 320"></polygon>
            <polygon id="CENTERS-l13-o0" style="fill: #2266ff;" transform="translate(480.000000, 240.000000) scale(1, -1) translate(-480.000000, -240.000000) " points="480 160 640 320 320 320"></polygon>
            <polygon id="EDGES-l2-o1" style="fill: #2266ff;" points="320 160 480 320 160 320"></polygon>
            <polygon id="C4RNER-l3-o3" style="fill: #2266ff;" points="800 320 960 480 640 480"></polygon>
            <polygon id="CENTERS-l12-o0" style="fill: #2266ff;" transform="translate(640.000000, 400.000000) scale(1, -1) translate(-640.000000, -400.000000) " points="640 320 800 480 480 480"></polygon>
            <polygon id="EDGES-l8-o1" style="fill: #2266ff;" points="480 320 640 480 320 480"></polygon>
            <polygon id="CENTERS-l10-o0" style="fill: #2266ff;" transform="translate(320.000000, 400.000000) scale(1, -1) translate(-320.000000, -400.000000) " points="320 320 480 480 160 480"></polygon>
            <polygon id="C4RNER-l5-o1" style="fill: #2266ff;" points="160 320 320 480 0 480"></polygon>
        </g>
        <g id="R" transform="translate(888.000000, 608.000000) scale(-1, -1) rotate(90.000000) translate(-888.000000, -608.000000) translate(408.000000, 368.000000)" stroke="#000000" stroke-width="12">
            <polygon id="C4RNER-l1-o1" style="fill: red;" points="480 0 640 160 320 160"></polygon>
            <polygon id="EDGES-l6-o1" style="fill: red;" points="640 160 800 320 480 320"></polygon>
            <polygon id="CENTERS-l7-o0" style="fill: red;" transform="translate(480.000000, 240.000000) scale(1, -1) translate(-480.000000, -240.000000) " points="480 160 640 320 320 320"></polygon>
            <polygon id="EDGES-l0-o1" style="fill: red;" points="320 160 480 320 160 320"></polygon>
            <polygon id="C4RNER-l5-o3" style="fill: red;" points="800 320 960 480 640 480"></polygon>
            <polygon id="CENTERS-l5-o0" style="fill: red;" transform="translate(640.000000, 400.000000) scale(1, -1) translate(-640.000000, -400.000000) " points="640 320 800 480 480 480"></polygon>
            <polygon id="EDGES-l4-o1" style="fill: red;" points="480 320 640 480 320 480"></polygon>
            <polygon id="CENTERS-l11-o0" style="fill: red;" transform="translate(320.000000, 400.000000) scale(1, -1) translate(-320.000000, -400.000000) " points="320 320 480 480 160 480"></polygon>
            <polygon id="C4RNER-l2-o2" style="fill: red;" points="160 320 320 480 0 480"></polygon>
        </g>
        <g id="F" transform="translate(128.000000, 648.000000)" stroke="#000000" stroke-width="12">
            <polygon id="C4RNER-l1-o2" style="fill: #44ee00;" points="480 0 640 160 320 160"></polygon>
            <polygon id="EDGES-l0-o0" style="fill: #44ee00;" points="640 160 800 320 480 320"></polygon>
            <polygon id="CENTERS-l0-o0" style="fill: #44ee00;" transform="translate(480.000000, 240.000000) scale(1, -1) translate(-480.000000, -240.000000) " points="480 160 640 320 320 320"></polygon>
            <polygon id="EDGES-l10-o0" style="fill: #44ee00;" points="320 160 480 320 160 320"></polygon>
            <polygon id="C4RNER-l2-o1" style="fill: #44ee00;" points="800 320 960 480 640 480"></polygon>
            <polygon id="CENTERS-l1-o0" style="fill: #44ee00;" transform="translate(640.000000, 400.000000) scale(1, -1) translate(-640.000000, -400.000000) " points="640 320 800 480 480 480"></polygon>
            <polygon id="EDGES-l1-o0" style="fill: #44ee00;" points="480 320 640 480 320 480"></polygon>
            <polygon id="CENTERS-l14-o0" style="fill: #44ee00;" transform="translate(320.000000, 400.000000) scale(1, -1) translate(-320.000000, -400.000000) " points="320 320 480 480 160 480"></polygon>
            <polygon id="C4RNER-l0-o3" style="fill: #44ee00;" points="160 320 320 480 0 480"></polygon>
        </g>
        <g id="L" transform="translate(328.000000, 608.000000) scale(1, -1) rotate(90.000000) translate(-328.000000, -608.000000) translate(-152.000000, 368.000000)" stroke="#000000" stroke-width="12">
            <polygon id="C4RNER-l1-o3" style="fill: #8800dd;" points="480 0 640 160 320 160"></polygon>
            <polygon id="EDGES-l11-o1" style="fill: #8800dd;" points="640 160 800 320 480 320"></polygon>
            <polygon id="CENTERS-l21-o0" style="fill: #8800dd;" transform="translate(480.000000, 240.000000) scale(1, -1) translate(-480.000000, -240.000000) " points="480 160 640 320 320 320"></polygon>
            <polygon id="EDGES-l10-o1" style="fill: #8800dd;" points="320 160 480 320 160 320"></polygon>
            <polygon id="C4RNER-l3-o1" style="fill: #8800dd;" points="800 320 960 480 640 480"></polygon>
            <polygon id="CENTERS-l18-o0" style="fill: #8800dd;" transform="translate(640.000000, 400.000000) scale(1, -1) translate(-640.000000, -400.000000) " points="640 320 800 480 480 480"></polygon>
            <polygon id="EDGES-l7-o1" style="fill: #8800dd;" points="480 320 640 480 320 480"></polygon>
            <polygon id="CENTERS-l9-o0" style="fill: #8800dd;" transform="translate(320.000000, 400.000000) scale(1, -1) translate(-320.000000, -400.000000) " points="320 320 480 480 160 480"></polygon>
            <polygon id="C4RNER-l0-o2" style="fill: #8800dd;" points="160 320 320 480 0 480"></polygon>
        </g>
        <g id="U" transform="translate(608.000000, 328.000000) scale(1, -1) translate(-608.000000, -328.000000) translate(128.000000, 88.000000)" stroke="#000000" stroke-width="12">
            <polygon id="C4RNER-l1-o0" style="fill: #ffffff;" points="480 0 640 160 320 160"></polygon>
            <polygon id="EDGES-l6-o0" style="fill: #ffffff;" points="640 160 800 320 480 320"></polygon>
            <polygon id="CENTERS-l20-o0" style="fill: #ffffff;" transform="translate(480.000000, 240.000000) scale(1, -1) translate(-480.000000, -240.000000) " points="480 160 640 320 320 320"></polygon>
            <polygon id="EDGES-l11-o0" style="fill: #ffffff;" points="320 160 480 320 160 320"></polygon>
            <polygon id="C4RNER-l5-o0" style="fill: #ffffff;" points="800 320 960 480 640 480"></polygon>
            <polygon id="CENTERS-l23-o0" style="fill: #ffffff;" transform="translate(640.000000, 400.000000) scale(1, -1) translate(-640.000000, -400.000000) " points="640 320 800 480 480 480"></polygon>
            <polygon id="EDGES-l8-o0" style="fill: #ffffff;" points="480 320 640 480 320 480"></polygon>
            <polygon id="CENTERS-l22-o0" style="fill: #ffffff;" transform="translate(320.000000, 400.000000) scale(1, -1) translate(-320.000000, -400.000000) " points="320 320 480 480 160 480"></polygon>
            <polygon id="C4RNER-l3-o0" style="fill: #ffffff;" points="160 320 320 480 0 480"></polygon>
        </g>
    </g>
</svg>
`,Bx=`<svg id="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 500">
<style type="text/css"><![CDATA[.sticker { stroke: #000000; stroke-width: 1px; }]]></style>
<g><title>U</title>
<polygon id="CORNERS-l7-o0" class="sticker" style="fill: #ffffff" points="247.941 89.861 283.500 115.696 269.918 157.499 212.382 138.805"/>
<polygon id="CORNERS-l1-o0" class="sticker" style="fill: #ffffff" points="154.845 157.499 141.263 115.696 176.822 89.861 212.382 138.805"/>
<polygon id="CORNERS-l6-o0" class="sticker" style="fill: #ffffff" points="176.822 89.861 212.381 64.025 247.941 89.861 212.382 138.805"/>
<polygon id="CORNERS-l0-o0" class="sticker" style="fill: #ffffff" points="212.381 199.301 168.427 199.301 154.845 157.499 212.382 138.805"/>
<polygon id="CORNERS-l2-o0" class="sticker" style="fill: #ffffff" points="269.918 157.499 256.335 199.301 212.381 199.301 212.382 138.805"/>
</g><g><title>F</title>
<polygon id="CORNERS-l8-o0" class="sticker" style="fill: #008800" points="247.941 319.263 212.381 345.098 176.822 319.263 212.382 270.32"/>
<polygon id="CORNERS-l2-o2" class="sticker" style="fill: #008800" points="212.381 209.823 256.335 209.823 269.918 251.625 212.382 270.32"/>
<polygon id="CORNERS-l19-o1" class="sticker" style="fill: #008800" points="269.918 251.625 283.500 293.428 247.941 319.263 212.382 270.32"/>
<polygon id="CORNERS-l0-o1" class="sticker" style="fill: #008800" points="154.845 251.625 168.427 209.823 212.381 209.823 212.382 270.32"/>
<polygon id="CORNERS-l3-o2" class="sticker" style="fill: #008800" points="176.822 319.263 141.263 293.428 154.845 251.625 212.382 270.32"/>
</g><g><title>L</title>
<polygon id="CORNERS-l4-o0" class="sticker" style="fill: #8800dd" points="87.302 290.176 43.349 290.176 29.766 248.374 87.303 229.68"/>
<polygon id="CORNERS-l0-o2" class="sticker" style="fill: #8800dd" points="122.862 180.736 158.421 206.571 144.839 248.374 87.303 229.68"/>
<polygon id="CORNERS-l3-o1" class="sticker" style="fill: #8800dd" points="144.839 248.374 131.256 290.176 87.302 290.176 87.303 229.68"/>
<polygon id="CORNERS-l1-o1" class="sticker" style="fill: #8800dd" points="51.743 180.736 87.302 154.901 122.862 180.736 87.303 229.68"/>
<polygon id="CORNERS-l5-o2" class="sticker" style="fill: #8800dd" points="29.766 248.374 16.184 206.571 51.743 180.736 87.303 229.68"/>
</g><g><title>BL</title>
<polygon id="CORNERS-l10-o0" class="sticker" style="fill: #ffff00" points="700.480 172.224 664.921 198.059 629.361 172.224 664.921 123.281"/>
<polygon id="CORNERS-l1-o2" class="sticker" style="fill: #ffff00" points="664.921 62.784 708.874 62.784 722.457 104.586 664.921 123.281"/>
<polygon id="CORNERS-l5-o1" class="sticker" style="fill: #ffff00" points="722.457 104.586 736.039 146.389 700.480 172.224 664.921 123.281"/>
<polygon id="CORNERS-l6-o1" class="sticker" style="fill: #ffff00" points="607.384 104.586 620.967 62.784 664.921 62.784 664.921 123.281"/>
<polygon id="CORNERS-l11-o2" class="sticker" style="fill: #ffff00" points="629.361 172.224 593.802 146.389 607.384 104.586 664.921 123.281"/>
</g><g><title>BR</title>
<polygon id="CORNERS-l13-o0" class="sticker" style="fill: #0000ff" points="545.874 172.224 510.315 198.059 474.755 172.224 510.315 123.281"/>
<polygon id="CORNERS-l6-o2" class="sticker" style="fill: #0000ff" points="510.315 62.784 554.269 62.784 567.851 104.586 510.315 123.281"/>
<polygon id="CORNERS-l11-o1" class="sticker" style="fill: #0000ff" points="567.851 104.586 581.433 146.389 545.874 172.224 510.315 123.281"/>
<polygon id="CORNERS-l7-o1" class="sticker" style="fill: #0000ff" points="452.779 104.586 466.361 62.784 510.315 62.784 510.315 123.281"/>
<polygon id="CORNERS-l12-o2" class="sticker" style="fill: #0000ff" points="474.755 172.224 439.196 146.389 452.779 104.586 510.315 123.281"/>
</g><g><title>R</title>
<polygon id="CORNERS-l12-o1" class="sticker" style="fill: #ff0000" points="373.019 180.736 408.579 206.571 394.996 248.374 337.461 229.68"/>
<polygon id="CORNERS-l2-o1" class="sticker" style="fill: #ff0000" points="279.924 248.374 266.341 206.571 301.901 180.736 337.461 229.68"/>
<polygon id="CORNERS-l7-o2" class="sticker" style="fill: #ff0000" points="301.901 180.736 337.460 154.901 373.019 180.736 337.461 229.68"/>
<polygon id="CORNERS-l19-o2" class="sticker" style="fill: #ff0000" points="337.460 290.176 293.506 290.176 279.924 248.374 337.461 229.68"/>
<polygon id="CORNERS-l14-o0" class="sticker" style="fill: #ff0000" points="394.996 248.374 381.414 290.176 337.460 290.176 337.461 229.68"/>
</g><g><title>FR</title>
<polygon id="CORNERS-l16-o1" class="sticker" style="fill: #ffffd0" points="347.220 395.413 333.638 437.215 289.684 437.215 289.685 376.719"/>
<polygon id="CORNERS-l19-o0" class="sticker" style="fill: #ffffd0" points="254.125 327.775 289.684 301.940 325.244 327.775 289.685 376.719"/>
<polygon id="CORNERS-l14-o2" class="sticker" style="fill: #ffffd0" points="325.244 327.775 360.803 353.610 347.220 395.413 289.685 376.719"/>
<polygon id="CORNERS-l8-o1" class="sticker" style="fill: #ffffd0" points="232.148 395.413 218.566 353.610 254.125 327.775 289.685 376.719"/>
<polygon id="CORNERS-l17-o2" class="sticker" style="fill: #ffffd0" points="289.684 437.215 245.730 437.215 232.148 395.413 289.685 376.719"/>
</g><g><title>FL</title>
<polygon id="CORNERS-l17-o1" class="sticker" style="fill: #3399ff" points="192.615 395.413 179.032 437.215 135.078 437.215 135.079 376.719"/>
<polygon id="CORNERS-l3-o0" class="sticker" style="fill: #3399ff" points="99.519 327.775 135.078 301.940 170.638 327.775 135.079 376.719"/>
<polygon id="CORNERS-l8-o2" class="sticker" style="fill: #3399ff" points="170.638 327.775 206.197 353.610 192.615 395.413 135.079 376.719"/>
<polygon id="CORNERS-l4-o1" class="sticker" style="fill: #3399ff" points="77.542 395.413 63.960 353.610 99.519 327.775 135.079 376.719"/>
<polygon id="CORNERS-l9-o2" class="sticker" style="fill: #3399ff" points="135.078 437.215 91.125 437.215 77.542 395.413 135.079 376.719"/>
</g><g><title>DL</title>
<polygon id="CORNERS-l18-o2" class="sticker" style="fill: #ff6633" points="677.137 319.263 641.578 293.428 655.160 251.625 712.697 270.32"/>
<polygon id="CORNERS-l4-o2" class="sticker" style="fill: #ff6633" points="770.233 251.625 783.815 293.428 748.256 319.263 712.697 270.32"/>
<polygon id="CORNERS-l9-o1" class="sticker" style="fill: #ff6633" points="748.256 319.263 712.697 345.098 677.137 319.263 712.697 270.32"/>
<polygon id="CORNERS-l5-o0" class="sticker" style="fill: #ff6633" points="712.697 209.823 756.650 209.823 770.233 251.625 712.697 270.32"/>
<polygon id="CORNERS-l10-o1" class="sticker" style="fill: #ff6633" points="655.160 251.625 668.743 209.823 712.697 209.823 712.697 270.32"/>
</g><g><title>B</title>
<polygon id="CORNERS-l15-o2" class="sticker" style="fill: #99ff00" points="587.618 290.176 543.664 290.176 530.081 248.374 587.618 229.68"/>
<polygon id="CORNERS-l10-o2" class="sticker" style="fill: #99ff00" points="623.177 180.736 658.736 206.571 645.154 248.374 587.618 229.68"/>
<polygon id="CORNERS-l18-o1" class="sticker" style="fill: #99ff00" points="645.154 248.374 631.572 290.176 587.618 290.176 587.618 229.68"/>
<polygon id="CORNERS-l11-o0" class="sticker" style="fill: #99ff00" points="552.058 180.736 587.618 154.901 623.177 180.736 587.618 229.68"/>
<polygon id="CORNERS-l13-o1" class="sticker" style="fill: #99ff00" points="530.081 248.374 516.499 206.571 552.058 180.736 587.618 229.68"/>
</g><g><title>DR</title>
<polygon id="CORNERS-l16-o2" class="sticker" style="fill: #ff66cc" points="498.098 319.263 462.539 345.098 426.980 319.263 462.539 270.32"/>
<polygon id="CORNERS-l13-o2" class="sticker" style="fill: #ff66cc" points="462.539 209.823 506.493 209.823 520.075 251.625 462.539 270.32"/>
<polygon id="CORNERS-l15-o1" class="sticker" style="fill: #ff66cc" points="520.075 251.625 533.658 293.428 498.098 319.263 462.539 270.32"/>
<polygon id="CORNERS-l12-o0" class="sticker" style="fill: #ff66cc" points="405.003 251.625 418.585 209.823 462.539 209.823 462.539 270.32"/>
<polygon id="CORNERS-l14-o1" class="sticker" style="fill: #ff66cc" points="426.980 319.263 391.420 293.428 405.003 251.625 462.539 270.32"/>
</g><g><title>D</title>
<polygon id="CORNERS-l18-o0" class="sticker" style="fill: #999999" points="587.618 300.698 631.572 300.698 645.154 342.500 587.618 361.195"/>
<polygon id="CORNERS-l16-o0" class="sticker" style="fill: #999999" points="552.058 410.138 516.499 384.303 530.081 342.500 587.618 361.195"/>
<polygon id="CORNERS-l15-o0" class="sticker" style="fill: #999999" points="530.081 342.500 543.664 300.698 587.618 300.698 587.618 361.195"/>
<polygon id="CORNERS-l17-o0" class="sticker" style="fill: #999999" points="623.177 410.138 587.618 435.974 552.058 410.138 587.618 361.195"/>
<polygon id="CORNERS-l9-o0" class="sticker" style="fill: #999999" points="645.154 342.500 658.736 384.303 623.177 410.138 587.618 361.195"/>
</g></svg>
`,Vi=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],Gx={name:"2x2x2",orbits:[{orbitName:"SQUARES",numPieces:25,numOrientations:3}],defaultPattern:{SQUARES:{pieces:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],orientation:Vi}},moves:{U:{SQUARES:{permutation:[1,2,3,4,0,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],orientationDelta:Vi}},"2U":{SQUARES:{permutation:[0,1,2,3,4,6,7,8,9,5,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],orientationDelta:Vi}},"3U":{SQUARES:{permutation:[0,1,2,3,4,5,6,7,8,9,11,12,13,14,10,15,16,17,18,19,20,21,22,23,24],orientationDelta:Vi}},"4U":{SQUARES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,16,17,18,19,15,20,21,22,23,24],orientationDelta:Vi}},"5U":{SQUARES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,21,22,23,24,20],orientationDelta:Vi}},R:{SQUARES:{permutation:[0,1,2,3,9,5,6,7,8,14,10,11,12,13,19,15,16,17,18,24,20,21,22,23,4],orientationDelta:Vi}},"2R":{SQUARES:{permutation:[0,1,2,8,4,5,6,7,13,9,10,11,12,18,14,15,16,17,23,19,20,21,22,3,24],orientationDelta:Vi}},"3R":{SQUARES:{permutation:[0,1,7,3,4,5,6,12,8,9,10,11,17,13,14,15,16,22,18,19,20,21,2,23,24],orientationDelta:Vi}},"4R":{SQUARES:{permutation:[0,6,2,3,4,5,11,7,8,9,10,16,12,13,14,15,21,17,18,19,20,1,22,23,24],orientationDelta:Vi}},"5R":{SQUARES:{permutation:[5,1,2,3,4,10,6,7,8,9,15,11,12,13,14,20,16,17,18,19,0,21,22,23,24],orientationDelta:Vi}}},derivedMoves:{L:"5R'","2L":"4R'","3L":"3R'","4L":"2R'","5L":"R'",D:"5U'","2D":"4U'","3D":"3U'","4D":"2U'","5D":"U'",E:"3D",M:"3L"}},Vx=`<?xml version="1.0" encoding="UTF-8"?>
<svg width="600px" height="600px" viewBox="-50 -50 600 600" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <title>3x3x3 LL</title>
  <defs>
    <g id="sticker">
        <rect x="0" y="0" width="100" height="100" stroke="black" stroke-width="0.5px" />
    </g>
  </defs>
  <g id="3x3x3-LL" stroke="none" stroke-width="4" style="none" stroke-linejoin="round">
    <use id="SQUARES-l0-o0" href="#sticker" transform="translate( 00, 00)" style="fill: #E23424"/>
    <use id="SQUARES-l1-o0" href="#sticker" transform="translate(100, 00)" style="fill: #AC2A3C"/>
    <use id="SQUARES-l2-o0" href="#sticker" transform="translate(200, 00)" style="fill: #762668"/>
    <use id="SQUARES-l3-o0" href="#sticker" transform="translate(300, 00)" style="fill: #412798"/>
    <use id="SQUARES-l4-o0" href="#sticker" transform="translate(400, 00)" style="fill: #152DC9"/>

    <use id="SQUARES-l5-o0" href="#sticker" transform="translate( 00,100)" style="fill: #E34F27"/>
    <use id="SQUARES-l6-o0" href="#sticker" transform="translate(100,100)" style="fill: #AD4D3E"/>
    <use id="SQUARES-l7-o0" href="#sticker" transform="translate(200,100)" style="fill: #794E6A"/>
    <use id="SQUARES-l8-o0" href="#sticker" transform="translate(300,100)" style="fill: #485399"/>
    <use id="SQUARES-l9-o0" href="#sticker" transform="translate(400,100)" style="fill: #2758CA"/>

    <use id="SQUARES-l10-o0" href="#sticker" transform="translate( 00,200)" style="fill: #E67A30"/>
    <use id="SQUARES-l11-o0" href="#sticker" transform="translate(100,200)" style="fill: #B17A44"/>
    <use id="SQUARES-l12-o0" href="#sticker" transform="translate(200,200)" style="fill: #7F7B6D"/>
    <use id="SQUARES-l13-o0" href="#sticker" transform="translate(300,200)" style="fill: #547F9B"/>
    <use id="SQUARES-l14-o0" href="#sticker" transform="translate(400,200)" style="fill: #3B83CB"/>

    <use id="SQUARES-l15-o0" href="#sticker" transform="translate( 00,300)" style="fill: #EAA93C"/>
    <use id="SQUARES-l16-o0" href="#sticker" transform="translate(100,300)" style="fill: #B8A94C"/>
    <use id="SQUARES-l17-o0" href="#sticker" transform="translate(200,300)" style="fill: #89AA72"/>
    <use id="SQUARES-l18-o0" href="#sticker" transform="translate(300,300)" style="fill: #63AB9E"/>
    <use id="SQUARES-l19-o0" href="#sticker" transform="translate(400,300)" style="fill: #50ADCD"/>

    <use id="SQUARES-l20-o0" href="#sticker" transform="translate( 00,400)" style="fill: #F1DA49"/>
    <use id="SQUARES-l21-o0" href="#sticker" transform="translate(100,400)" style="fill: #C1D957"/>
    <use id="SQUARES-l22-o0" href="#sticker" transform="translate(200,400)" style="fill: #95D878"/>
    <use id="SQUARES-l23-o0" href="#sticker" transform="translate(300,400)" style="fill: #74D7A2"/>
    <use id="SQUARES-l24-o0" href="#sticker" transform="translate(400,400)" style="fill: #64D8D0"/>
  </g>
</svg>`,Hx={name:"redi_cube",orbits:[{orbitName:"EDGES",numPieces:12,numOrientations:2},{orbitName:"CORNERS",numPieces:8,numOrientations:3}],defaultPattern:{EDGES:{pieces:[0,1,2,3,4,5,6,7,8,9,10,11],orientation:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{pieces:[0,1,2,3,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]}},moves:{F:{EDGES:{permutation:[8,0,2,3,4,5,6,7,1,9,10,11],orientationDelta:[0,1,0,0,0,0,0,0,1,0,0,0]},CORNERS:{permutation:[0,1,2,3,4,5,6,7],orientationDelta:[1,0,0,0,0,0,0,0]}},x:{EDGES:{permutation:[4,8,0,9,6,10,2,11,5,7,1,3],orientationDelta:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[4,0,3,5,7,6,2,1],orientationDelta:[2,1,2,1,1,2,1,2]}},y:{EDGES:{permutation:[1,2,3,0,5,6,7,4,10,8,11,9],orientationDelta:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[1,2,3,0,7,4,5,6],orientationDelta:[0,0,0,0,0,0,0,0]}}},derivedMoves:{z:"[x: y]",UR:"[y: F]",U:"[y2: F]",UL:"[y': F]",D:"[x: F]",L:"[z2: F]",R:"[x2: F]",B:"[y2 x: F]"}},Wx=`<?xml version="1.0" encoding="UTF-8"?>
<svg width="546px" height="418px" viewBox="-20 -20 546 418" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<title>redi-cube</title>
<g istroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
  <g transform="translate(1.000000, 1.000000)" fill-rule="nonzero" stroke="#000000" stroke-width="1.6">
    <g id="CORNERS-l0-o0" transform="translate(208.000000, 80.000000)" style="fill: #FFFFFF;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l0-o1" transform="translate(256.000000, 128.000000)" style="fill: #FF0000;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l0-o2" transform="translate(208.000000, 128.000000)" style="fill: #32CD32;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l1-o0" transform="translate(208.000000, 0.000000)" style="fill: #FFFFFF;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l1-o1" transform="translate(384.000000, 128.000000)" style="fill: #2266FF;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l1-o2" transform="translate(336.000000, 128.000000)" style="fill: #FF0000;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l2-o0" transform="translate(128.000000, 0.000000)" style="fill: #FFFFFF;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l2-o1" transform="translate(0.000000, 128.000000)" style="fill: #FFA500;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l2-o2" transform="translate(464.000000, 128.000000)" style="fill: #2266FF;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l3-o0" transform="translate(128.000000, 80.000000)" style="fill: #FFFFFF;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l3-o1" transform="translate(128.000000, 128.000000)" style="fill: #32CD32;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l3-o2" transform="translate(80.000000, 128.000000)" style="fill: #FFA500;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l4-o0" transform="translate(208.000000, 256.000000)" style="fill: #FFFF00;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l4-o1" transform="translate(208.000000, 208.000000)" style="fill: #32CD32;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l4-o2" transform="translate(256.000000, 208.000000)" style="fill: #FF0000;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l5-o0" transform="translate(128.000000, 256.000000)" style="fill: #FFFF00;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l5-o1" transform="translate(80.000000, 208.000000)" style="fill: #FFA500;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l5-o2" transform="translate(128.000000, 208.000000)" style="fill: #32CD32;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l6-o0" transform="translate(128.000000, 336.000000)" style="fill: #FFFF00;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l6-o1" transform="translate(464.000000, 208.000000)" style="fill: #2266FF;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l6-o2" transform="translate(0.000000, 208.000000)" style="fill: #FFA500;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l7-o0" transform="translate(208.000000, 336.000000)" style="fill: #FFFF00;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l7-o1" transform="translate(336.000000, 208.000000)" style="fill: #FF0000;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l7-o2" transform="translate(384.000000, 208.000000)" style="fill: #2266FF;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="EDGES-l0-o0" transform="translate(168.000000, 60.000000)" style="fill: #FFFFFF;">
      <polygon id="Rectangle" points="0 20 20 -8.8817842e-16 40 20 40 60 0 60"></polygon>
    </g>
    <g id="EDGES-l0-o1" transform="translate(168.000000, 128.000000)" style="fill: #32CD32;">
      <polygon id="Rectangle" points="0 0 40 0 40 40 20 60 0 40"></polygon>
    </g>
    <g id="EDGES-l1-o0" transform="translate(188.000000, 40.000000)" style="fill: #FFFFFF;">
      <polygon id="Rectangle" points="20 0 60 0 60 40 20 40 0 20"></polygon>
    </g>
    <g id="EDGES-l1-o1" transform="translate(296.000000, 128.000000)" style="fill: #FF0000;">
      <polygon id="Rectangle" points="0 0 40 0 40 40 20 60 0 40"></polygon>
    </g>
    <g id="EDGES-l2-o0" transform="translate(168.000000, 0.000000)" style="fill: #FFFFFF;">
      <polygon id="Rectangle" points="0 0 40 0 40 40 20 60 0 40"></polygon>
    </g>
    <g id="EDGES-l2-o1" transform="translate(424.000000, 128.000000)" style="fill: #2266FF;">
      <polygon id="Rectangle" points="0 0 40 0 40 40 20 60 0 40"></polygon>
    </g>
    <g id="EDGES-l3-o0" transform="translate(128.000000, 40.000000)" style="fill: #FFFFFF;">
      <polygon id="Rectangle" points="0 0 40 0 60 20 40 40 0 40"></polygon>
    </g>
    <g id="EDGES-l3-o1" transform="translate(40.000000, 128.000000)" style="fill: #FFA500;">
      <polygon id="Rectangle" points="0 0 40 0 40 40 20 60 0 40"></polygon>
    </g>
    <g id="EDGES-l4-o0" transform="translate(168.000000, 256.000000)" style="fill: #FFFF00;">
      <polygon id="Rectangle" points="0 0 40 0 40 40 20 60 0 40"></polygon>
    </g>
    <g id="EDGES-l4-o1" transform="translate(168.000000, 188.000000)" style="fill: #32CD32;">
      <polygon id="Rectangle" points="0 20 20 0 40 20 40 60 0 60"></polygon>
    </g>
    <g id="EDGES-l5-o0" transform="translate(188.000000, 296.000000)" style="fill: #FFFF00;">
      <polygon id="Rectangle" points="20 0 60 0 60 40 20 40 0 20"></polygon>
    </g>
    <g id="EDGES-l5-o1" transform="translate(296.000000, 188.000000)" style="fill: #FF0000;">
      <polygon id="Rectangle" points="0 20 20 0 40 20 40 60 0 60"></polygon>
    </g>
    <g id="EDGES-l6-o0" transform="translate(168.000000, 316.000000)" style="fill: #FFFF00;">
      <polygon id="Rectangle" points="0 20 20 -5.32907052e-14 40 20 40 60 0 60"></polygon>
    </g>
    <g id="EDGES-l6-o1" transform="translate(424.000000, 188.000000)" style="fill: #2266FF;">
      <polygon id="Rectangle" points="0 20 20 -1.77635684e-15 40 20 40 60 0 60"></polygon>
    </g>
    <g id="EDGES-l7-o0" transform="translate(128.000000, 296.000000)" style="fill: #FFFF00;">
      <polygon id="Rectangle" points="0 0 40 0 60 20 40 40 0 40"></polygon>
    </g>
    <g id="EDGES-l7-o1" transform="translate(40.000000, 188.000000)" style="fill: #FFA500;">
      <polygon id="Rectangle" points="0 20 20 0 40 20 40 60 0 60"></polygon>
    </g>
    <g id="EDGES-l8-o0" transform="translate(188.000000, 168.000000)" style="fill: #32CD32;">
      <polygon id="Rectangle" points="20 0 60 0 60 40 20 40 2.66453526e-14 20"></polygon>
    </g>
    <g id="EDGES-l8-o1" transform="translate(256.000000, 168.000000)" style="fill: #FF0000;">
      <polygon id="Rectangle" points="0 0 40 0 60 20 40 40 0 40"></polygon>
    </g>
    <g id="EDGES-l9-o0" transform="translate(128.000000, 168.000000)" style="fill: #32CD32;">
      <polygon id="Rectangle" points="0 0 40 0 60 20 40 40 0 40"></polygon>
    </g>
    <g id="EDGES-l9-o1" transform="translate(60.000000, 168.000000)" style="fill: #FFA500;">
      <polygon id="Rectangle" points="20 0 60 0 60 40 20 40 0 20"></polygon>
    </g>
    <g id="EDGES-l10-o0" transform="translate(384.000000, 168.000000)" style="fill: #2266FF;">
      <polygon id="Rectangle" points="0 0 40 0 60 20 40 40 0 40"></polygon>
    </g>
    <g id="EDGES-l10-o1" transform="translate(316.000000, 168.000000)" style="fill: #FF0000;">
      <polygon id="Rectangle" points="20 0 60 0 60 40 20 40 5.32907052e-14 20"></polygon>
    </g>
    <g id="EDGES-l11-o0" transform="translate(444.000000, 168.000000)" style="fill: #2266FF;">
      <polygon id="Rectangle" points="20 0 60 0 60 40 20 40 -3.55271368e-15 20"></polygon>
    </g>
    <g id="EDGES-l11-o1" transform="translate(0.000000, 168.000000)" style="fill: #FFA500;">
      <polygon id="Rectangle" points="0 0 40 0 60 20 40 40 0 40"></polygon>
    </g>
  </g>
</g>
</svg>
`});var Bd={};zr(Bd,{megaminxLLSVG:()=>Xx});var Xx,Gd=A(()=>{Xx=`<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="360px" height="343px" viewBox="0 0 360 343" version="1.1">
  <title>Megaminx LL</title>
  <defs>
    <g id="bogus">
        <rect x="-10" y="-10" width="1" height="1" stroke="black" stroke-width="0.04px" />
    </g>
  </defs>
  <g fill="none" fill-rule="nonzero" stroke="#000">
    <g style="stroke: black; stroke-width: 6; stroke-linecap: butt; stroke-linejoin: round;">
      <path id="CENTERS-l0-o0" style="fill: white;" d="M 179.5 143.480469 L 137.082031 174.296875 L 153.285156 224.164062 L 205.714844 224.164062 L 221.917969 174.296875 Z M 179.5 143.480469 "/>  />

      <path id="CORNERS-l6-o0" style="fill: white;" d="M 140.175781 92.605469 L 179.5 143.480469 L 218.824219 92.605469 L 179.5 64.035156 Z M 140.175781 92.605469 "/>  />
      <path id="CORNERS-l6-o1" style="fill: yellow;" d="M 125.15625 46.378906 L 140.175781 92.605469 L 179.5 64.035156 L 179.5 6.894531 Z M 125.15625 46.378906 "/> />
      <path id="CORNERS-l6-o2" style="fill: rgb(34, 102, 255);" d="M 179.5 64.035156 L 218.824219 92.605469 L 233.84375 46.378906 L 179.5 6.894531 Z M 179.5 64.035156 "/>  />

      <path id="EDGES-l26-o0" style="fill: white;" d="M 100.851562 121.175781 L 137.082031 174.296875 L 179.5 143.480469 L 140.175781 92.605469 Z M 100.851562 121.175781 "/> />
      <path id="EDGES-l26-o1" style="fill: yellow;" d="M 61.527344 92.605469 L 100.851562 121.175781 L 140.175781 92.605469 L 125.15625 46.378906 Z M 61.527344 92.605469 "/> />

      <path id="CORNERS-l1-o0" style="fill: white;" d="M 76.546875 195.976562 L 137.082031 174.296875 L 100.851562 121.175781 L 61.527344 149.75 Z M 76.546875 195.976562 "/> />
      <path id="CORNERS-l1-o1" style="fill: purple;" d="M 27.9375 195.976562 L 76.546875 195.976562 L 61.527344 149.75 L 7.179688 132.089844 Z M 27.9375 195.976562 "/>  />
      <path id="CORNERS-l1-o2" style="fill: yellow;" d="M 61.527344 149.75 L 100.851562 121.175781 L 61.527344 92.605469 L 7.179688 132.089844 Z M 61.527344 149.75 "/> />

      <path id="EDGES-l1-o0" style="fill: white;" d="M 91.566406 242.207031 L 153.285156 224.164062 L 137.082031 174.296875 L 76.546875 195.976562 Z M 91.566406 242.207031 "/> />
      <path id="EDGES-l1-o1" style="fill: purple;" d="M 52.242188 270.777344 L 91.566406 242.207031 L 76.546875 195.976562 L 27.9375 195.976562 Z M 52.242188 270.777344 "/> />

      <path id="CORNERS-l0-o0" style="fill: white;" d="M 155.195312 288.4375 L 153.285156 224.164062 L 91.566406 242.207031 L 106.585938 288.4375 Z M 155.195312 288.4375 "/> />
      <path id="CORNERS-l0-o1" style="fill: limegreen;" d="M 140.175781 334.664062 L 155.195312 288.4375 L 106.585938 288.4375 L 73 334.664062 Z M 140.175781 334.664062 "/>  />
      <path id="CORNERS-l0-o2" style="fill: purple;" d="M 106.585938 288.4375 L 91.566406 242.207031 L 52.242188 270.777344 L 73 334.664062 Z M 106.585938 288.4375 "/>  />

      <path id="EDGES-l0-o0" style="fill: white;" d="M 203.804688 288.4375 L 205.714844 224.164062 L 153.285156 224.164062 L 155.195312 288.4375 Z M 203.804688 288.4375 "/>  />
      <path id="EDGES-l0-o1" style="fill: limegreen;" d="M 218.824219 334.664062 L 203.804688 288.4375 L 155.195312 288.4375 L 140.175781 334.664062 Z M 218.824219 334.664062 "/>  />

      <path id="CORNERS-l2-o0" style="fill: white;" d="M 267.433594 242.207031 L 205.714844 224.164062 L 203.804688 288.4375 L 252.414062 288.4375 Z M 267.433594 242.207031 "/>  />
      <path id="CORNERS-l2-o1" style="fill: red;" d="M 306.757812 270.777344 L 267.433594 242.207031 L 252.414062 288.4375 L 286 334.664062 Z M 306.757812 270.777344 "/> />
      <path id="CORNERS-l2-o2" style="fill: limegreen;" d="M 252.414062 288.4375 L 203.804688 288.4375 L 218.824219 334.664062 L 286 334.664062 Z M 252.414062 288.4375 "/> />

      <path id="EDGES-l7-o0" style="fill: white;" d="M 282.453125 195.976562 L 221.917969 174.296875 L 205.714844 224.164062 L 267.433594 242.207031 Z M 282.453125 195.976562 "/>  />
      <path id="EDGES-l7-o1" style="fill: red;" d="M 331.0625 195.976562 L 282.453125 195.976562 L 267.433594 242.207031 L 306.757812 270.777344 Z M 331.0625 195.976562 "/>  />

      <path id="CORNERS-l7-o0" style="fill: white;" d="M 258.148438 121.175781 L 221.917969 174.296875 L 282.453125 195.976562 L 297.472656 149.75 Z M 258.148438 121.175781 "/>  />
      <path id="CORNERS-l7-o1" style="fill: rgb(34, 102, 255);" d="M 297.472656 92.605469 L 258.148438 121.175781 L 297.472656 149.75 L 351.820312 132.089844 Z M 297.472656 92.605469 "/>  />
      <path id="CORNERS-l7-o2" style="fill: red;" d="M 297.472656 149.75 L 282.453125 195.976562 L 331.0625 195.976562 L 351.820312 132.089844 Z M 297.472656 149.75 "/>  />

      <path id="EDGES-l6-o0" style="fill: white;" d="M 218.824219 92.605469 L 179.5 143.480469 L 221.917969 174.296875 L 258.148438 121.175781 Z M 218.824219 92.605469 "/> />
      <path id="EDGES-l6-o1" style="fill: rgb(34, 102, 255);" d="M 233.84375 46.378906 L 218.824219 92.605469 L 258.148438 121.175781 L 297.472656 92.605469 Z M 233.84375 46.378906 "/>  />
    </g>
    <g opacity="0">
      <g><title>U</title>
      <polygon id="CENTERS-l0-o1" href="#bogus" style="fill: white"/>
      <polygon id="CENTERS-l0-o2" href="#bogus" style="fill: white"/>
      <polygon id="CENTERS-l0-o3" href="#bogus" style="fill: white"/>
      <polygon id="CENTERS-l0-o4" href="#bogus" style="fill: white"/>
      </g><g><title>F</title>
      <polygon id="EDGES-l8-o0" href="#bogus" style="fill: limegreen"/>
      <polygon id="EDGES-l2-o0" href="#bogus" style="fill: limegreen"/>
      <polygon id="CENTERS-l2-o0" href="#bogus" style="fill: limegreen"/>
      <polygon id="CENTERS-l2-o1" href="#bogus" style="fill: limegreen"/>
      <polygon id="CENTERS-l2-o2" href="#bogus" style="fill: limegreen"/>
      <polygon id="CENTERS-l2-o3" href="#bogus" style="fill: limegreen"/>
      <polygon id="CENTERS-l2-o4" href="#bogus" style="fill: limegreen"/>
      <polygon id="EDGES-l27-o1" href="#bogus" style="fill: limegreen"/>
      <polygon id="CORNERS-l19-o1" href="#bogus" style="fill: limegreen"/>
      <polygon id="CORNERS-l8-o0" href="#bogus" style="fill: limegreen"/>
      <polygon id="EDGES-l3-o0" href="#bogus" style="fill: limegreen"/>
      <polygon id="CORNERS-l3-o2" href="#bogus" style="fill: limegreen"/>
      </g><g><title>L</title>
      <polygon id="EDGES-l5-o1" href="#bogus" style="fill: #660099"/>
      <polygon id="EDGES-l8-o1" href="#bogus" style="fill: #660099"/>
      <polygon id="CENTERS-l3-o0" href="#bogus" style="fill: #660099"/>
      <polygon id="CENTERS-l3-o1" href="#bogus" style="fill: #660099"/>
      <polygon id="CENTERS-l3-o2" href="#bogus" style="fill: #660099"/>
      <polygon id="CENTERS-l3-o3" href="#bogus" style="fill: #660099"/>
      <polygon id="CENTERS-l3-o4" href="#bogus" style="fill: #660099"/>
      <polygon id="EDGES-l4-o1" href="#bogus" style="fill: #660099"/>
      <polygon id="CORNERS-l3-o1" href="#bogus" style="fill: #660099"/>
      <polygon id="CORNERS-l4-o0" href="#bogus" style="fill: #660099"/>
      <polygon id="EDGES-l10-o1" href="#bogus" style="fill: #660099"/>
      <polygon id="CORNERS-l5-o2" href="#bogus" style="fill: #660099"/>
      </g><g><title>BL</title>
      <polygon id="EDGES-l14-o1" href="#bogus" style="fill: yellow"/>
      <polygon id="EDGES-l5-o0" href="#bogus" style="fill: yellow"/>
      <polygon id="CENTERS-l4-o0" href="#bogus" style="fill: yellow"/>
      <polygon id="CENTERS-l4-o1" href="#bogus" style="fill: yellow"/>
      <polygon id="CENTERS-l4-o2" href="#bogus" style="fill: yellow"/>
      <polygon id="CENTERS-l4-o3" href="#bogus" style="fill: yellow"/>
      <polygon id="CENTERS-l4-o4" href="#bogus" style="fill: yellow"/>
      <polygon id="EDGES-l12-o1" href="#bogus" style="fill: yellow"/>
      <polygon id="CORNERS-l5-o1" href="#bogus" style="fill: yellow"/>
      <polygon id="CORNERS-l10-o0" href="#bogus" style="fill: yellow"/>
      <polygon id="EDGES-l16-o0" href="#bogus" style="fill: yellow"/>
      <polygon id="CORNERS-l11-o2" href="#bogus" style="fill: yellow"/>
      </g><g><title>BR</title>
      <polygon id="EDGES-l21-o0" href="#bogus" style="fill: rgb(34, 102, 255)"/>
      <polygon id="EDGES-l14-o0" href="#bogus" style="fill: rgb(34, 102, 255)"/>
      <polygon id="CENTERS-l5-o0" href="#bogus" style="fill: rgb(34, 102, 255)"/>
      <polygon id="CENTERS-l5-o1" href="#bogus" style="fill: rgb(34, 102, 255)"/>
      <polygon id="CENTERS-l5-o2" href="#bogus" style="fill: rgb(34, 102, 255)"/>
      <polygon id="CENTERS-l5-o3" href="#bogus" style="fill: rgb(34, 102, 255)"/>
      <polygon id="CENTERS-l5-o4" href="#bogus" style="fill: rgb(34, 102, 255)"/>
      <polygon id="EDGES-l18-o1" href="#bogus" style="fill: rgb(34, 102, 255)"/>
      <polygon id="CORNERS-l11-o1" href="#bogus" style="fill: rgb(34, 102, 255)"/>
      <polygon id="CORNERS-l13-o0" href="#bogus" style="fill: rgb(34, 102, 255)"/>
      <polygon id="EDGES-l28-o1" href="#bogus" style="fill: rgb(34, 102, 255)"/>
      <polygon id="CORNERS-l12-o2" href="#bogus" style="fill: rgb(34, 102, 255)"/>
      </g><g><title>R</title>
      <polygon id="CORNERS-l19-o2" href="#bogus" style="fill: red"/>
      <polygon id="EDGES-l19-o1" href="#bogus" style="fill: red"/>
      <polygon id="CENTERS-l1-o0" href="#bogus" style="fill: red"/>
      <polygon id="CENTERS-l1-o1" href="#bogus" style="fill: red"/>
      <polygon id="CENTERS-l1-o2" href="#bogus" style="fill: red"/>
      <polygon id="CENTERS-l1-o3" href="#bogus" style="fill: red"/>
      <polygon id="CENTERS-l1-o4" href="#bogus" style="fill: red"/>
      <polygon id="EDGES-l2-o1" href="#bogus" style="fill: red"/>
      <polygon id="EDGES-l21-o1" href="#bogus" style="fill: red"/>
      <polygon id="CORNERS-l12-o1" href="#bogus" style="fill: red"/>
      <polygon id="EDGES-l15-o1" href="#bogus" style="fill: red"/>
      <polygon id="CORNERS-l14-o0" href="#bogus" style="fill: red"/>
      </g><g><title>C</title>
      <polygon id="CORNERS-l8-o1" href="#bogus" style="fill: #ffffd0"/>
      <polygon id="EDGES-l9-o1" href="#bogus" style="fill: #ffffd0"/>
      <polygon id="CORNERS-l19-o0" href="#bogus" style="fill: #ffffd0"/>
      <polygon id="EDGES-l19-o0" href="#bogus" style="fill: #ffffd0"/>
      <polygon id="CENTERS-l6-o0" href="#bogus" style="fill: #ffffd0"/>
      <polygon id="CENTERS-l6-o1" href="#bogus" style="fill: #ffffd0"/>
      <polygon id="CENTERS-l6-o2" href="#bogus" style="fill: #ffffd0"/>
      <polygon id="CENTERS-l6-o3" href="#bogus" style="fill: #ffffd0"/>
      <polygon id="CENTERS-l6-o4" href="#bogus" style="fill: #ffffd0"/>
      <polygon id="EDGES-l27-o0" href="#bogus" style="fill: #ffffd0"/>
      <polygon id="EDGES-l29-o1" href="#bogus" style="fill: #ffffd0"/>
      <polygon id="CORNERS-l14-o2" href="#bogus" style="fill: #ffffd0"/>
      <polygon id="CORNERS-l16-o1" href="#bogus" style="fill: #ffffd0"/>
      <polygon id="EDGES-l22-o0" href="#bogus" style="fill: #ffffd0"/>
      <polygon id="CORNERS-l17-o2" href="#bogus" style="fill: #ffffd0"/>
      </g><g><title>A</title>
      <polygon id="CORNERS-l4-o1" href="#bogus" style="fill: #3399ff"/>
      <polygon id="EDGES-l13-o1" href="#bogus" style="fill: #3399ff"/>
      <polygon id="CORNERS-l3-o0" href="#bogus" style="fill: #3399ff"/>
      <polygon id="EDGES-l3-o1" href="#bogus" style="fill: #3399ff"/>
      <polygon id="CENTERS-l7-o0" href="#bogus" style="fill: #3399ff"/>
      <polygon id="CENTERS-l7-o1" href="#bogus" style="fill: #3399ff"/>
      <polygon id="CENTERS-l7-o2" href="#bogus" style="fill: #3399ff"/>
      <polygon id="CENTERS-l7-o3" href="#bogus" style="fill: #3399ff"/>
      <polygon id="CENTERS-l7-o4" href="#bogus" style="fill: #3399ff"/>
      <polygon id="EDGES-l4-o0" href="#bogus" style="fill: #3399ff"/>
      <polygon id="EDGES-l9-o0" href="#bogus" style="fill: #3399ff"/>
      <polygon id="CORNERS-l8-o2" href="#bogus" style="fill: #3399ff"/>
      <polygon id="CORNERS-l17-o1" href="#bogus" style="fill: #3399ff"/>
      <polygon id="EDGES-l11-o0" href="#bogus" style="fill: #3399ff"/>
      <polygon id="CORNERS-l9-o2" href="#bogus" style="fill: #3399ff"/>
      </g><g><title>I</title>
      <polygon id="CORNERS-l5-o0" href="#bogus" style="fill: #ff6633"/>
      <polygon id="EDGES-l12-o0" href="#bogus" style="fill: #ff6633"/>
      <polygon id="CORNERS-l4-o2" href="#bogus" style="fill: #ff6633"/>
      <polygon id="EDGES-l13-o0" href="#bogus" style="fill: #ff6633"/>
      <polygon id="CENTERS-l8-o0" href="#bogus" style="fill: #ff6633"/>
      <polygon id="CENTERS-l8-o1" href="#bogus" style="fill: #ff6633"/>
      <polygon id="CENTERS-l8-o2" href="#bogus" style="fill: #ff6633"/>
      <polygon id="CENTERS-l8-o3" href="#bogus" style="fill: #ff6633"/>
      <polygon id="CENTERS-l8-o4" href="#bogus" style="fill: #ff6633"/>
      <polygon id="EDGES-l10-o0" href="#bogus" style="fill: #ff6633"/>
      <polygon id="EDGES-l23-o0" href="#bogus" style="fill: #ff6633"/>
      <polygon id="CORNERS-l9-o1" href="#bogus" style="fill: #ff6633"/>
      <polygon id="CORNERS-l18-o2" href="#bogus" style="fill: #ff6633"/>
      <polygon id="EDGES-l17-o0" href="#bogus" style="fill: #ff6633"/>
      <polygon id="CORNERS-l10-o1" href="#bogus" style="fill: #ff6633"/>
      </g><g><title>BF</title>
      <polygon id="CORNERS-l11-o0" href="#bogus" style="fill: #99ff00"/>
      <polygon id="EDGES-l18-o0" href="#bogus" style="fill: #99ff00"/>
      <polygon id="CORNERS-l10-o2" href="#bogus" style="fill: #99ff00"/>
      <polygon id="EDGES-l17-o1" href="#bogus" style="fill: #99ff00"/>
      <polygon id="CENTERS-l10-o0" href="#bogus" style="fill: #99ff00"/>
      <polygon id="CENTERS-l10-o1" href="#bogus" style="fill: #99ff00"/>
      <polygon id="CENTERS-l10-o2" href="#bogus" style="fill: #99ff00"/>
      <polygon id="CENTERS-l10-o3" href="#bogus" style="fill: #99ff00"/>
      <polygon id="CENTERS-l10-o4" href="#bogus" style="fill: #99ff00"/>
      <polygon id="EDGES-l16-o1" href="#bogus" style="fill: #99ff00"/>
      <polygon id="EDGES-l20-o0" href="#bogus" style="fill: #99ff00"/>
      <polygon id="CORNERS-l18-o1" href="#bogus" style="fill: #99ff00"/>
      <polygon id="CORNERS-l15-o2" href="#bogus" style="fill: #99ff00"/>
      <polygon id="EDGES-l24-o1" href="#bogus" style="fill: #99ff00"/>
      <polygon id="CORNERS-l13-o1" href="#bogus" style="fill: #99ff00"/>
      </g><g><title>E</title>
      <polygon id="CORNERS-l12-o0" href="#bogus" style="fill: #ff66cc"/>
      <polygon id="EDGES-l15-o0" href="#bogus" style="fill: #ff66cc"/>
      <polygon id="CORNERS-l13-o2" href="#bogus" style="fill: #ff66cc"/>
      <polygon id="EDGES-l24-o0" href="#bogus" style="fill: #ff66cc"/>
      <polygon id="CENTERS-l9-o0" href="#bogus" style="fill: #ff66cc"/>
      <polygon id="CENTERS-l9-o1" href="#bogus" style="fill: #ff66cc"/>
      <polygon id="CENTERS-l9-o2" href="#bogus" style="fill: #ff66cc"/>
      <polygon id="CENTERS-l9-o3" href="#bogus" style="fill: #ff66cc"/>
      <polygon id="CENTERS-l9-o4" href="#bogus" style="fill: #ff66cc"/>
      <polygon id="EDGES-l28-o0" href="#bogus" style="fill: #ff66cc"/>
      <polygon id="EDGES-l25-o0" href="#bogus" style="fill: #ff66cc"/>
      <polygon id="CORNERS-l15-o1" href="#bogus" style="fill: #ff66cc"/>
      <polygon id="CORNERS-l16-o2" href="#bogus" style="fill: #ff66cc"/>
      <polygon id="EDGES-l29-o0" href="#bogus" style="fill: #ff66cc"/>
      <polygon id="CORNERS-l14-o1" href="#bogus" style="fill: #ff66cc"/>
      </g><g><title>D</title>
      <polygon id="CORNERS-l17-o0" href="#bogus" style="fill: #999999"/>
      <polygon id="EDGES-l11-o1" href="#bogus" style="fill: #999999"/>
      <polygon id="CORNERS-l16-o0" href="#bogus" style="fill: #999999"/>
      <polygon id="EDGES-l25-o1" href="#bogus" style="fill: #999999"/>
      <polygon id="CENTERS-l11-o0" href="#bogus" style="fill: #999999"/>
      <polygon id="CENTERS-l11-o1" href="#bogus" style="fill: #999999"/>
      <polygon id="CENTERS-l11-o2" href="#bogus" style="fill: #999999"/>
      <polygon id="CENTERS-l11-o3" href="#bogus" style="fill: #999999"/>
      <polygon id="CENTERS-l11-o4" href="#bogus" style="fill: #999999"/>
      <polygon id="EDGES-l22-o1" href="#bogus" style="fill: #999999"/>
      <polygon id="EDGES-l20-o1" href="#bogus" style="fill: #999999"/>
      <polygon id="CORNERS-l15-o0" href="#bogus" style="fill: #999999"/>
      <polygon id="CORNERS-l18-o0" href="#bogus" style="fill: #999999"/>
      <polygon id="EDGES-l23-o1" href="#bogus" style="fill: #999999"/>
      <polygon id="CORNERS-l9-o0" href="#bogus" style="fill: #999999"/>
      </g>
    </g>
  </g>
</svg>
`});async function Xd(t,e){let i=await t.kpuzzle(),r=new Fc(i),n=new Oc(i),s=()=>n.and([n.move("U"),n.not(n.or(n.moves(["F","BL","BR"])))]),o=()=>n.and([n.move("U"),n.not(n.move("F"))]),a=()=>n.or([o(),n.and([n.move("F"),n.not(n.or(n.moves(["U","BL","BR"])))])]),l=()=>n.not(n.or([n.and([n.move("U"),n.move("F")]),n.and([n.move("F"),n.move("BL")]),n.and([n.move("F"),n.move("BR")]),n.and([n.move("BL"),n.move("BR")])])),c=()=>n.not(n.or([n.and([n.move("F"),n.move("BL")]),n.and([n.move("F"),n.move("BR")]),n.and([n.move("BL"),n.move("BR")])]));switch(e){case"full":break;case"experimental-fto-fc":{r.set(n.not(s()),"Ignored");break}case"experimental-fto-f2t":{r.set(n.not(o()),"Ignored"),r.set(s(),"Dim");break}case"experimental-fto-sc":{r.set(n.not(a()),"Ignored"),r.set(o(),"Dim");break}case"experimental-fto-l2c":{r.set(n.not(l()),"Ignored"),r.set(a(),"Dim");break}case"experimental-fto-lbt":{r.set(n.not(c()),"Ignored"),r.set(l(),"Dim");break}case"experimental-fto-l3t":{r.set(c(),"Dim");break}default:console.warn(`Unsupported stickering for ${t.id}: ${e}. Setting all pieces to dim.`),r.set(n.and(n.moves([])),"Dim")}return r.toStickeringMask()}async function jx(){return["full","experimental-fto-fc","experimental-fto-f2t","experimental-fto-sc","experimental-fto-l2c","experimental-fto-lbt","experimental-fto-l3t"]}async function tE(t,e){return(await jd()).includes(e)?Jn(t,e):(console.warn(`Unsupported stickering for ${t.id}: ${e}. Setting all pieces to dim.`),Jn(t,"full"))}function jd(){return iE}var qx,MR,Hd,Wd,uo,Na,qd,Yx,Kx,Zx,Qx,$x,Vd,Jx,eE,iE,rE,nE,sE,oE,aE,lE,cE,fE,hE,Vc,Hc=A(()=>{ts();so();xr();qx={333:{puzzleID:"3x3x3",eventName:"3x3x3 Cube",scramblesImplemented:"random-state"},222:{puzzleID:"2x2x2",eventName:"2x2x2 Cube",scramblesImplemented:"random-state"},444:{puzzleID:"4x4x4",eventName:"4x4x4 Cube",scramblesImplemented:"random-state"},555:{puzzleID:"5x5x5",eventName:"5x5x5 Cube",scramblesImplemented:"random-moves"},666:{puzzleID:"6x6x6",eventName:"6x6x6 Cube",scramblesImplemented:"random-moves"},777:{puzzleID:"7x7x7",eventName:"7x7x7 Cube",scramblesImplemented:"random-moves"},"333bf":{puzzleID:"3x3x3",eventName:"3x3x3 Blindfolded",scramblesImplemented:"random-state"},"333fm":{puzzleID:"3x3x3",eventName:"3x3x3 Fewest Moves",scramblesImplemented:"random-state"},"333oh":{puzzleID:"3x3x3",eventName:"3x3x3 One-Handed",scramblesImplemented:"random-state"},clock:{puzzleID:"clock",eventName:"Clock",scramblesImplemented:"random-state"},minx:{puzzleID:"megaminx",eventName:"Megaminx",scramblesImplemented:"random-moves"},pyram:{puzzleID:"pyraminx",eventName:"Pyraminx",scramblesImplemented:"random-state"},skewb:{puzzleID:"skewb",eventName:"Skewb",scramblesImplemented:"random-state"},sq1:{puzzleID:"square1",eventName:"Square-1",scramblesImplemented:"random-state"},"444bf":{puzzleID:"4x4x4",eventName:"4x4x4 Blindfolded",scramblesImplemented:"random-state"},"555bf":{puzzleID:"5x5x5",eventName:"5x5x5 Blindfolded",scramblesImplemented:"random-moves"},"333mbf":{puzzleID:"3x3x3",eventName:"3x3x3 Multi-Blind",scramblesImplemented:"random-state"}},MR={...qx,fto:{puzzleID:"fto",eventName:"Face-Turning Octahedron",scramblesImplemented:"random-state"},master_tetraminx:{puzzleID:"master_tetraminx",eventName:"Master Tetraminx",scramblesImplemented:"random-state"},kilominx:{puzzleID:"kilominx",eventName:"Kilominx",scramblesImplemented:"random-state"},redi_cube:{puzzleID:"redi_cube",eventName:"Redi Cube",scramblesImplemented:"random-state"},baby_fto:{puzzleID:"baby_fto",eventName:"Baby FTO",scramblesImplemented:"random-state"},loopover:{puzzleID:"loopover",eventName:"Loopover",scramblesImplemented:null}},Hd={id:"2x2x2",fullName:"2\xD72\xD72 Cube",kpuzzle:ct(async()=>{let t=new zi((await Promise.resolve().then(()=>(Si(),yi))).cube2x2x2JSON);return t.definition.experimentalIsPatternSolved=Pd,t}),svg:async()=>(await Promise.resolve().then(()=>(Si(),yi))).cube2x2x2SVG,llSVG:ct(async()=>(await Promise.resolve().then(()=>(Si(),yi))).cube2x2x2LLSVG),pg:ct(async()=>Da("2x2x2")),stickeringMask:t=>Jn(Hd,t),stickerings:()=>fo("2x2x2",{use3x3x3Fallbacks:!0}),algTransformData:La},Wd={...Gc,KeyZ:new b("m'"),KeyB:new b("m"),Period:new b("m'")},uo=new es({id:"4x4x4",fullName:"4\xD74\xD74 Cube",inventedBy:["Peter Sebest\xE9ny"],inventionYear:1981});uo.llSVG=ct(async()=>(await Promise.resolve().then(()=>(zd(),Od))).cube4x4x4LLSVG);uo.keyMapping=async()=>Wd;uo.kpuzzle=ct(async()=>{let t=await Gi.prototype.kpuzzle.call(uo);t.definition.defaultPattern.CENTERS.pieces=[0,0,0,0,4,4,4,4,8,8,8,8,12,12,12,12,16,16,16,16,20,20,20,20];let{experimentalIsBigCubeSolved:e}=await Bc();return t.definition.experimentalIsPatternSolved=e,t});Na=new es({id:"5x5x5",fullName:"5\xD75\xD75 Cube",inventedBy:["Udo Krell"],inventionYear:1981});Na.keyMapping=async()=>Wd;Na.kpuzzle=ct(async()=>{let t=await Gi.prototype.kpuzzle.call(Na),e=[0,0,0,0,4,4,4,4,8,8,8,8,12,12,12,12,16,16,16,16,20,20,20,20];t.definition.defaultPattern.CENTERS.pieces=e,t.definition.defaultPattern.CENTERS2.pieces=e,t.definition.defaultPattern.CENTERS3.orientationMod=new Array(6).fill(1);let{experimentalIsBigCubeSolved:i}=await Bc();return t.definition.experimentalIsPatternSolved=i,t});qd={KeyI:new b("R"),KeyK:new b("R'"),KeyW:new b("B"),KeyO:new b("B'"),KeyS:new b("D"),KeyL:new b("D'"),KeyD:new b("L"),KeyE:new b("L'"),KeyJ:new b("U"),KeyF:new b("U'"),KeyH:new b("F"),KeyG:new b("F'"),KeyN:new b("Rv'"),KeyC:new b("l"),KeyR:new b("l'"),KeyU:new b("r"),KeyM:new b("r'"),KeyX:new b("d"),Comma:new b("d'"),KeyT:new b("Lv'"),KeyY:new b("Rv"),KeyV:new b("Lv"),Semicolon:new b("Uv"),KeyA:new b("Uv'"),KeyP:new b("BR'"),KeyQ:new b("BL"),KeyZ:new b("BL'"),KeyB:new b("T"),Period:new b("BR"),Backquote:new Ft},Yx=class extends Gi{constructor(){super({pgID:"skewb diamond",id:"baby_fto",fullName:"Baby FTO",inventedBy:["Uwe M\xE8ffert"],setOrientationModTo1ForPiecesOfOrbits:["CENTERS"]})}stickeringMask(t){return Xd(this,t)}svg=ct(async()=>(await Promise.resolve().then(()=>(Xr(),Wr))).babyFTOSVG);keyMapping=async()=>qd},Kx=new Yx,Zx={id:"clock",fullName:"Clock",inventedBy:["Christopher C. Wiggs","Christopher J. Taylor"],inventionYear:1988,kpuzzle:ct(async()=>new zi((await Promise.resolve().then(()=>(Si(),yi))).clockJSON)),svg:ct(async()=>(await Promise.resolve().then(()=>(Si(),yi))).clockSVG)},Qx=class extends Gi{constructor(){super({pgID:"FTO",id:"fto",fullName:"Face-Turning Octahedron",inventedBy:["Karl Rohrbach","David Pitcher"],inventionYear:1983})}stickeringMask(t){return Xd(this,t)}stickerings=jx;svg=ct(async()=>(await Promise.resolve().then(()=>(Xr(),Wr))).ftoSVG);keyMapping=async()=>qd;algTransformData={"\u2194 Mirror (x)":{replaceMovesByFamily:{L:"R",R:"L",l:"r",r:"l",Lw:"Rw",Rw:"Lw",Lv:"Rv",Rv:"Lv",BL:"BR",BR:"BL",bl:"br",br:"bl",BLw:"BRw",BRw:"BLw",BLv:"BRv",BRv:"BLv"},invertExceptByFamily:new Set(["x"])}}},$x=new Qx,Vd="d f 0.56",Jx={id:"kilominx",fullName:"Kilominx",kpuzzle:ct(()=>zc(Vd,{includeCenterOrbits:!1,includeEdgeOrbits:!1})),pg:()=>$n(Vd,{includeCenterOrbits:!1,includeEdgeOrbits:!1}),svg:ct(async()=>(await Promise.resolve().then(()=>(Xr(),Wr))).kilominxSVG)},eE={id:"loopover",fullName:"Loopover",inventedBy:["Cary Huang"],inventionYear:2018,kpuzzle:ct(async()=>new zi((await Promise.resolve().then(()=>(Xr(),Wr))).loopoverJSON)),svg:async()=>(await Promise.resolve().then(()=>(Xr(),Wr))).loopoverSVG};iE=Ta(()=>fo("megaminx"));rE={KeyI:new b("R"),KeyK:new b("R'"),KeyW:new b("B"),KeyO:new b("B'"),KeyS:new b("FR"),KeyL:new b("FR'"),KeyD:new b("L"),KeyE:new b("L'"),KeyJ:new b("U"),KeyF:new b("U'"),KeyH:new b("F"),KeyG:new b("F'"),KeyC:new b("Lw"),KeyR:new b("Lw'"),KeyU:new b("Rw"),KeyM:new b("Rw'"),KeyX:new b("d"),Comma:new b("d'"),KeyT:new b("Rv"),KeyY:new b("Rv"),KeyV:new b("Rv'"),KeyN:new b("Rv'"),Semicolon:new b("y"),KeyA:new b("y'"),KeyP:new b("z"),KeyQ:new b("z'"),KeyZ:new b("2L'"),KeyB:new b("2R"),Period:new b("2R'"),Backquote:new Ft},nE=class extends Gi{constructor(){super({id:"megaminx",fullName:"Megaminx",inventionYear:1981})}stickeringMask(t){return tE(this,t)}stickerings=jd;llSVG=ct(async()=>(await Promise.resolve().then(()=>(Gd(),Bd))).megaminxLLSVG);keyMapping=async()=>rE},sE=new nE,oE={id:"melindas2x2x2x2",fullName:"Melinda's 2\xD72\xD72\xD72",inventedBy:["Melinda Green"],kpuzzle:ct(async()=>new zi((await Promise.resolve().then(()=>(Si(),yi))).melindas2x2x2x2OrbitJSON)),svg:ct(async()=>(await Promise.resolve().then(()=>(Si(),yi))).melindas2x2x2x2OrbitSVG)},aE=class extends Gi{constructor(){super({id:"pyraminx",fullName:"Pyraminx",inventedBy:["Uwe Meffert"]})}svg=ct(async()=>(await Promise.resolve().then(()=>(Si(),yi))).pyraminxSVG);algTransformData={"\u2194 Mirror (x)":{replaceMovesByFamily:{L:"R",R:"L",l:"r",r:"l",Lw:"Rw",Rw:"Lw",Lv:"Rv",Rv:"Lv"},invertExceptByFamily:new Set([])}}},lE=new aE,cE={id:"redi_cube",fullName:"Redi Cube",inventedBy:["Oskar van Deventer"],inventionYear:2009,kpuzzle:ct(async()=>new zi((await Promise.resolve().then(()=>(Xr(),Wr))).rediCubeJSON)),svg:async()=>(await Promise.resolve().then(()=>(Xr(),Wr))).rediCubeSVG},fE={id:"square1",fullName:"Square-1",inventedBy:["Karel Hr\u0161el","Vojtech Kopsk\xFD"],inventionYear:1990,kpuzzle:ct(async()=>new zi((await Promise.resolve().then(()=>(Si(),yi))).sq1HyperOrbitJSON)),svg:ct(async()=>(await Promise.resolve().then(()=>(Si(),yi))).sq1HyperOrbitSVG)},hE={id:"tri_quad",fullName:"TriQuad",inventedBy:["Bram Cohen","Carl Hoff"],inventionYear:2018,kpuzzle:ct(async()=>new zi((await Promise.resolve().then(()=>(Si(),yi))).triQuadJSON)),svg:ct(async()=>(await Promise.resolve().then(()=>(Si(),yi))).triQuadSVG)},Vc={"3x3x3":En,"2x2x2":Hd,"4x4x4":uo,"5x5x5":Na,"6x6x6":new es({id:"6x6x6",fullName:"6\xD76\xD76 Cube"}),"7x7x7":new es({id:"7x7x7",fullName:"7\xD77\xD77 Cube"}),"40x40x40":new es({id:"40x40x40",fullName:"40\xD740\xD740 Cube"}),clock:Zx,megaminx:sE,pyraminx:lE,skewb:new Gi({id:"skewb",fullName:"Skewb",inventedBy:["Tony Durham"]}),square1:fE,fto:$x,gigaminx:new Gi({id:"gigaminx",fullName:"Gigaminx",inventedBy:["Tyler Fox"],inventionYear:2006}),master_tetraminx:new Gi({pgID:"master tetraminx",id:"master_tetraminx",fullName:"Master Tetraminx",inventedBy:["Katsuhiko Okamoto"],inventionYear:2002}),kilominx:Jx,redi_cube:cE,melindas2x2x2x2:oE,loopover:eE,tri_quad:hE,baby_fto:Kx}});var Yd,Wc,Kd,Ia,Zd,Hi,Lt,nt,qt,Ci,Er,Xc,qc,jc,Qd,_r,$d,Jd,eu,tu,iu,ru,nu,su,po,mo,ou,au,lu,cu,fu,hu,du,uu,pu,Pa,ka,Ua,qr,Fa,Oa,za,Ba,Ga,mu,gu,Ai,yu,Su,vu,xu,Eu,_u,wu,Yc,Wi,nr,go,yo,jr,So,Xi,vo,Zt,Mu,xo,ii,Va,qi,Qt,Ha,Wa,wr,rs,vi,ri,sr,ns,ss,ji,Xa,qa,ja,Gt,Ya,Ka,or,ar,Za,os,Qa,as,ls,cs,fs,hs,ds,Eo,_o,wo,Mo,Ro,bo,Co,Ao,To,Do,Lo,No,Io,Po,ko,Uo,Fo,Oo,zo,Bo,Go,us,Vo,Ho,$a,Wo,Xo,qo,Ru,bu,Cu,Au,Ti,ni,Yi,wn,$e,Mn,Kc,Tu,Du,Lu,Ja,Nu,Iu,Pu,ku,Zc,Qc,di,Rn,je=A(()=>{Yd=0,Wc=1,Kd=2,Ia=1,Zd=2,Hi=3,Lt=0,nt=1,qt=2,Ci=0,Er=1,Xc=2,qc=3,jc=4,Qd=5,_r=100,$d=101,Jd=102,eu=103,tu=104,iu=200,ru=201,nu=202,su=203,po=204,mo=205,ou=206,au=207,lu=208,cu=209,fu=210,hu=211,du=212,uu=213,pu=214,Pa=0,ka=1,Ua=2,qr=3,Fa=4,Oa=5,za=6,Ba=7,Ga=0,mu=1,gu=2,Ai=0,yu=1,Su=2,vu=3,xu=4,Eu=5,_u=6,wu=7,Yc=300,Wi=301,nr=302,go=303,yo=304,jr=306,So=1e3,Xi=1001,vo=1002,Zt=1003,Mu=1004,xo=1005,ii=1006,Va=1007,qi=1008,Qt=1009,Ha=1010,Wa=1011,wr=1012,rs=1013,vi=1014,ri=1015,sr=1016,ns=1017,ss=1018,ji=1020,Xa=35902,qa=1021,ja=1022,Gt=1023,Ya=1024,Ka=1025,or=1026,ar=1027,Za=1028,os=1029,Qa=1030,as=1031,ls=1033,cs=33776,fs=33777,hs=33778,ds=33779,Eo=35840,_o=35841,wo=35842,Mo=35843,Ro=36196,bo=37492,Co=37496,Ao=37808,To=37809,Do=37810,Lo=37811,No=37812,Io=37813,Po=37814,ko=37815,Uo=37816,Fo=37817,Oo=37818,zo=37819,Bo=37820,Go=37821,us=36492,Vo=36494,Ho=36495,$a=36283,Wo=36284,Xo=36285,qo=36286,Ru=3200,bu=3201,Cu=0,Au=1,Ti="",ni="srgb",Yi="srgb-linear",wn="linear",$e="srgb",Mn=7680,Kc=519,Tu=512,Du=513,Lu=514,Ja=515,Nu=516,Iu=517,Pu=518,ku=519,Zc=35044,Qc="300 es",di=2e3,Rn=2001});function lr(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return($t[t&255]+$t[t>>8&255]+$t[t>>16&255]+$t[t>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[i&63|128]+$t[i>>8&255]+"-"+$t[i>>16&255]+$t[i>>24&255]+$t[r&255]+$t[r>>8&255]+$t[r>>16&255]+$t[r>>24&255]).toLowerCase()}function Ct(t,e,i){return Math.max(e,Math.min(i,t))}function Uu(t,e){return(t%e+e)%e}function tl(t,e,i){return(1-i)*t+i*e}function ps(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function si(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}var $t,el,jo,oi=A(()=>{$t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],el=Math.PI/180,jo=180/Math.PI});var Di,Yo=A(()=>{oi();Di=class{constructor(e=0,i=0,r=0,n=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=n}static slerpFlat(e,i,r,n,s,o,a){let l=r[n+0],c=r[n+1],f=r[n+2],h=r[n+3],u=s[o+0],p=s[o+1],d=s[o+2],y=s[o+3];if(a===0){e[i+0]=l,e[i+1]=c,e[i+2]=f,e[i+3]=h;return}if(a===1){e[i+0]=u,e[i+1]=p,e[i+2]=d,e[i+3]=y;return}if(h!==y||l!==u||c!==p||f!==d){let g=1-a,m=l*u+c*p+f*d+h*y,w=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){let P=Math.sqrt(M),T=Math.atan2(P,m*w);g=Math.sin(g*T)/P,a=Math.sin(a*T)/P}let x=a*w;if(l=l*g+u*x,c=c*g+p*x,f=f*g+d*x,h=h*g+y*x,g===1-a){let P=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=P,c*=P,f*=P,h*=P}}e[i]=l,e[i+1]=c,e[i+2]=f,e[i+3]=h}static multiplyQuaternionsFlat(e,i,r,n,s,o){let a=r[n],l=r[n+1],c=r[n+2],f=r[n+3],h=s[o],u=s[o+1],p=s[o+2],d=s[o+3];return e[i]=a*d+f*h+l*p-c*u,e[i+1]=l*d+f*u+c*h-a*p,e[i+2]=c*d+f*p+a*u-l*h,e[i+3]=f*d-a*h-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,n){return this._x=e,this._y=i,this._z=r,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){let r=e._x,n=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(r/2),f=a(n/2),h=a(s/2),u=l(r/2),p=l(n/2),d=l(s/2);switch(o){case"XYZ":this._x=u*f*h+c*p*d,this._y=c*p*h-u*f*d,this._z=c*f*d+u*p*h,this._w=c*f*h-u*p*d;break;case"YXZ":this._x=u*f*h+c*p*d,this._y=c*p*h-u*f*d,this._z=c*f*d-u*p*h,this._w=c*f*h+u*p*d;break;case"ZXY":this._x=u*f*h-c*p*d,this._y=c*p*h+u*f*d,this._z=c*f*d+u*p*h,this._w=c*f*h-u*p*d;break;case"ZYX":this._x=u*f*h-c*p*d,this._y=c*p*h+u*f*d,this._z=c*f*d-u*p*h,this._w=c*f*h+u*p*d;break;case"YZX":this._x=u*f*h+c*p*d,this._y=c*p*h+u*f*d,this._z=c*f*d-u*p*h,this._w=c*f*h-u*p*d;break;case"XZY":this._x=u*f*h-c*p*d,this._y=c*p*h-u*f*d,this._z=c*f*d+u*p*h,this._w=c*f*h+u*p*d;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){let r=i/2,n=Math.sin(r);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){let i=e.elements,r=i[0],n=i[4],s=i[8],o=i[1],a=i[5],l=i[9],c=i[2],f=i[6],h=i[10],u=r+a+h;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(o-n)*p}else if(r>a&&r>h){let p=2*Math.sqrt(1+r-a-h);this._w=(f-l)/p,this._x=.25*p,this._y=(n+o)/p,this._z=(s+c)/p}else if(a>h){let p=2*Math.sqrt(1+a-r-h);this._w=(s-c)/p,this._x=(n+o)/p,this._y=.25*p,this._z=(l+f)/p}else{let p=2*Math.sqrt(1+h-r-a);this._w=(o-n)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,i){let r=this.angleTo(e);if(r===0)return this;let n=Math.min(1,i/r);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){let r=e._x,n=e._y,s=e._z,o=e._w,a=i._x,l=i._y,c=i._z,f=i._w;return this._x=r*f+o*a+n*c-s*l,this._y=n*f+o*l+s*a-r*c,this._z=s*f+o*c+r*l-n*a,this._w=o*f-r*a-n*l-s*c,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);let r=this._x,n=this._y,s=this._z,o=this._w,a=o*e._w+r*e._x+n*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=r,this._y=n,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-i;return this._w=p*o+i*this._w,this._x=p*r+i*this._x,this._y=p*n+i*this._y,this._z=p*s+i*this._z,this.normalize(),this}let c=Math.sqrt(l),f=Math.atan2(c,a),h=Math.sin((1-i)*f)/c,u=Math.sin(i*f)/c;return this._w=o*h+this._w*u,this._x=r*h+this._x*u,this._y=n*h+this._y*u,this._z=s*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){let e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),n=Math.sqrt(1-r),s=Math.sqrt(r);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(i),s*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}});var F,$c,Fu,xt=A(()=>{oi();Yo();F=class t{constructor(e=0,i=0,r=0){t.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Fu.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Fu.setFromAxisAngle(e,i))}applyMatrix3(e){let i=this.x,r=this.y,n=this.z,s=e.elements;return this.x=s[0]*i+s[3]*r+s[6]*n,this.y=s[1]*i+s[4]*r+s[7]*n,this.z=s[2]*i+s[5]*r+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let i=this.x,r=this.y,n=this.z,s=e.elements,o=1/(s[3]*i+s[7]*r+s[11]*n+s[15]);return this.x=(s[0]*i+s[4]*r+s[8]*n+s[12])*o,this.y=(s[1]*i+s[5]*r+s[9]*n+s[13])*o,this.z=(s[2]*i+s[6]*r+s[10]*n+s[14])*o,this}applyQuaternion(e){let i=this.x,r=this.y,n=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*n-a*r),f=2*(a*i-s*n),h=2*(s*r-o*i);return this.x=i+l*c+o*h-a*f,this.y=r+l*f+a*c-s*h,this.z=n+l*h+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let i=this.x,r=this.y,n=this.z,s=e.elements;return this.x=s[0]*i+s[4]*r+s[8]*n,this.y=s[1]*i+s[5]*r+s[9]*n,this.z=s[2]*i+s[6]*r+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){let r=e.x,n=e.y,s=e.z,o=i.x,a=i.y,l=i.z;return this.x=n*l-s*a,this.y=s*o-r*l,this.z=r*a-n*o,this}projectOnVector(e){let i=e.lengthSq();if(i===0)return this.set(0,0,0);let r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return $c.copy(this).projectOnVector(e),this.sub($c)}reflect(e){return this.sub($c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(e)/i;return Math.acos(Ct(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let i=this.x-e.x,r=this.y-e.y,n=this.z-e.z;return i*i+r*r+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){let n=Math.sin(i)*e;return this.x=n*Math.sin(r),this.y=Math.cos(i)*e,this.z=n*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){let i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){let i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=n,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},$c=new F,Fu=new Di});var Ue,ai=A(()=>{oi();Ue=class t{constructor(e=0,i=0){t.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let i=this.x,r=this.y,n=e.elements;return this.x=n[0]*i+n[3]*r+n[6],this.y=n[1]*i+n[4]*r+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(e)/i;return Math.acos(Ct(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){let r=Math.cos(i),n=Math.sin(i),s=this.x-e.x,o=this.y-e.y;return this.x=s*r-o*n+e.x,this.y=s*n+o*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}});var Dt,il,_t,ms,gs,Li,Mr=A(()=>{xt();ai();oi();je();Dt=new F,il=new Ue,_t=class{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Zc,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=i.array[r+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)il.fromBufferAttribute(this,i),il.applyMatrix3(e),this.setXY(i,il.x,il.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)Dt.fromBufferAttribute(this,i),Dt.applyMatrix3(e),this.setXYZ(i,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)Dt.fromBufferAttribute(this,i),Dt.applyMatrix4(e),this.setXYZ(i,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)Dt.fromBufferAttribute(this,i),Dt.applyNormalMatrix(e),this.setXYZ(i,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)Dt.fromBufferAttribute(this,i),Dt.transformDirection(e),this.setXYZ(i,Dt.x,Dt.y,Dt.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=ps(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=si(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=ps(i,this.array)),i}setX(e,i){return this.normalized&&(i=si(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=ps(i,this.array)),i}setY(e,i){return this.normalized&&(i=si(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=ps(i,this.array)),i}setZ(e,i){return this.normalized&&(i=si(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=ps(i,this.array)),i}setW(e,i){return this.normalized&&(i=si(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=si(i,this.array),r=si(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,n){return e*=this.itemSize,this.normalized&&(i=si(i,this.array),r=si(r,this.array),n=si(n,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=n,this}setXYZW(e,i,r,n,s){return e*=this.itemSize,this.normalized&&(i=si(i,this.array),r=si(r,this.array),n=si(n,this.array),s=si(s,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zc&&(e.usage=this.usage),e}},ms=class extends _t{constructor(e,i,r){super(new Uint16Array(e),i,r)}},gs=class extends _t{constructor(e,i,r){super(new Uint32Array(e),i,r)}},Li=class extends _t{constructor(e,i,r){super(new Float32Array(e),i,r)}}});function Jc(t,e,i,r,n){for(let s=0,o=t.length-3;s<=o;s+=3){Cn.fromArray(t,s);let a=n.x*Math.abs(Cn.x)+n.y*Math.abs(Cn.y)+n.z*Math.abs(Cn.z),l=e.dot(Cn),c=i.dot(Cn),f=r.dot(Cn);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}var br,Rr,Ki,rl,ys,Ss,vs,Yr,Kr,bn,Ko,nl,sl,Cn,ef=A(()=>{xt();br=class{constructor(e=new F(1/0,1/0,1/0),i=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ki.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ki.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){let r=Ki.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);let r=e.geometry;if(r!==void 0){let s=r.getAttribute("position");if(i===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ki):Ki.fromBufferAttribute(s,o),Ki.applyMatrix4(e.matrixWorld),this.expandByPoint(Ki);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),rl.copy(r.boundingBox)),rl.applyMatrix4(e.matrixWorld),this.union(rl)}let n=e.children;for(let s=0,o=n.length;s<o;s++)this.expandByObject(n[s],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ki),Ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ko),nl.subVectors(this.max,Ko),ys.subVectors(e.a,Ko),Ss.subVectors(e.b,Ko),vs.subVectors(e.c,Ko),Yr.subVectors(Ss,ys),Kr.subVectors(vs,Ss),bn.subVectors(ys,vs);let i=[0,-Yr.z,Yr.y,0,-Kr.z,Kr.y,0,-bn.z,bn.y,Yr.z,0,-Yr.x,Kr.z,0,-Kr.x,bn.z,0,-bn.x,-Yr.y,Yr.x,0,-Kr.y,Kr.x,0,-bn.y,bn.x,0];return!Jc(i,ys,Ss,vs,nl)||(i=[1,0,0,0,1,0,0,0,1],!Jc(i,ys,Ss,vs,nl))?!1:(sl.crossVectors(Yr,Kr),i=[sl.x,sl.y,sl.z],Jc(i,ys,Ss,vs,nl))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Rr=[new F,new F,new F,new F,new F,new F,new F,new F],Ki=new F,rl=new br,ys=new F,Ss=new F,vs=new F,Yr=new F,Kr=new F,bn=new F,Ko=new F,nl=new F,sl=new F,Cn=new F});var ui,An=A(()=>{ui=class{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});let r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;let r=this._listeners;return r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let s=n.indexOf(i);s!==-1&&n.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let r=this._listeners[e.type];if(r!==void 0){e.target=this;let n=r.slice(0);for(let s=0,o=n.length;s<o;s++)n[s].call(this,e);e.target=null}}}});var dE,Zo,tf,Zr,ol=A(()=>{ef();xt();dE=new br,Zo=new F,tf=new F,Zr=class{constructor(e=new F,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){let r=this.center;i!==void 0?r.copy(i):dE.setFromPoints(e).getCenter(r);let n=0;for(let s=0,o=e.length;s<o;s++)n=Math.max(n,r.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){let r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zo.subVectors(e,this.center);let i=Zo.lengthSq();if(i>this.radius*this.radius){let r=Math.sqrt(i),n=(r-this.radius)*.5;this.center.addScaledVector(Zo,n/r),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zo.copy(e.center).add(tf)),this.expandByPoint(Zo.copy(e.center).sub(tf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}});var Ye,xs,Zi,uE,pE,Qr,al,xi,Ni=A(()=>{je();xt();Ye=class t{constructor(e,i,r,n,s,o,a,l,c,f,h,u,p,d,y,g){t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,n,s,o,a,l,c,f,h,u,p,d,y,g)}set(e,i,r,n,s,o,a,l,c,f,h,u,p,d,y,g){let m=this.elements;return m[0]=e,m[4]=i,m[8]=r,m[12]=n,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=f,m[10]=h,m[14]=u,m[3]=p,m[7]=d,m[11]=y,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){let i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){let i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){let i=this.elements,r=e.elements,n=1/xs.setFromMatrixColumn(e,0).length(),s=1/xs.setFromMatrixColumn(e,1).length(),o=1/xs.setFromMatrixColumn(e,2).length();return i[0]=r[0]*n,i[1]=r[1]*n,i[2]=r[2]*n,i[3]=0,i[4]=r[4]*s,i[5]=r[5]*s,i[6]=r[6]*s,i[7]=0,i[8]=r[8]*o,i[9]=r[9]*o,i[10]=r[10]*o,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){let i=this.elements,r=e.x,n=e.y,s=e.z,o=Math.cos(r),a=Math.sin(r),l=Math.cos(n),c=Math.sin(n),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let u=o*f,p=o*h,d=a*f,y=a*h;i[0]=l*f,i[4]=-l*h,i[8]=c,i[1]=p+d*c,i[5]=u-y*c,i[9]=-a*l,i[2]=y-u*c,i[6]=d+p*c,i[10]=o*l}else if(e.order==="YXZ"){let u=l*f,p=l*h,d=c*f,y=c*h;i[0]=u+y*a,i[4]=d*a-p,i[8]=o*c,i[1]=o*h,i[5]=o*f,i[9]=-a,i[2]=p*a-d,i[6]=y+u*a,i[10]=o*l}else if(e.order==="ZXY"){let u=l*f,p=l*h,d=c*f,y=c*h;i[0]=u-y*a,i[4]=-o*h,i[8]=d+p*a,i[1]=p+d*a,i[5]=o*f,i[9]=y-u*a,i[2]=-o*c,i[6]=a,i[10]=o*l}else if(e.order==="ZYX"){let u=o*f,p=o*h,d=a*f,y=a*h;i[0]=l*f,i[4]=d*c-p,i[8]=u*c+y,i[1]=l*h,i[5]=y*c+u,i[9]=p*c-d,i[2]=-c,i[6]=a*l,i[10]=o*l}else if(e.order==="YZX"){let u=o*l,p=o*c,d=a*l,y=a*c;i[0]=l*f,i[4]=y-u*h,i[8]=d*h+p,i[1]=h,i[5]=o*f,i[9]=-a*f,i[2]=-c*f,i[6]=p*h+d,i[10]=u-y*h}else if(e.order==="XZY"){let u=o*l,p=o*c,d=a*l,y=a*c;i[0]=l*f,i[4]=-h,i[8]=c*f,i[1]=u*h+y,i[5]=o*f,i[9]=p*h-d,i[2]=d*h-p,i[6]=a*f,i[10]=y*h+u}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uE,e,pE)}lookAt(e,i,r){let n=this.elements;return xi.subVectors(e,i),xi.lengthSq()===0&&(xi.z=1),xi.normalize(),Qr.crossVectors(r,xi),Qr.lengthSq()===0&&(Math.abs(r.z)===1?xi.x+=1e-4:xi.z+=1e-4,xi.normalize(),Qr.crossVectors(r,xi)),Qr.normalize(),al.crossVectors(xi,Qr),n[0]=Qr.x,n[4]=al.x,n[8]=xi.x,n[1]=Qr.y,n[5]=al.y,n[9]=xi.y,n[2]=Qr.z,n[6]=al.z,n[10]=xi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){let r=e.elements,n=i.elements,s=this.elements,o=r[0],a=r[4],l=r[8],c=r[12],f=r[1],h=r[5],u=r[9],p=r[13],d=r[2],y=r[6],g=r[10],m=r[14],w=r[3],M=r[7],x=r[11],P=r[15],T=n[0],C=n[4],L=n[8],S=n[12],v=n[1],D=n[5],U=n[9],I=n[13],V=n[2],q=n[6],H=n[10],Z=n[14],G=n[3],$=n[7],ne=n[11],Se=n[15];return s[0]=o*T+a*v+l*V+c*G,s[4]=o*C+a*D+l*q+c*$,s[8]=o*L+a*U+l*H+c*ne,s[12]=o*S+a*I+l*Z+c*Se,s[1]=f*T+h*v+u*V+p*G,s[5]=f*C+h*D+u*q+p*$,s[9]=f*L+h*U+u*H+p*ne,s[13]=f*S+h*I+u*Z+p*Se,s[2]=d*T+y*v+g*V+m*G,s[6]=d*C+y*D+g*q+m*$,s[10]=d*L+y*U+g*H+m*ne,s[14]=d*S+y*I+g*Z+m*Se,s[3]=w*T+M*v+x*V+P*G,s[7]=w*C+M*D+x*q+P*$,s[11]=w*L+M*U+x*H+P*ne,s[15]=w*S+M*I+x*Z+P*Se,this}multiplyScalar(e){let i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){let e=this.elements,i=e[0],r=e[4],n=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],h=e[6],u=e[10],p=e[14],d=e[3],y=e[7],g=e[11],m=e[15];return d*(+s*l*h-n*c*h-s*a*u+r*c*u+n*a*p-r*l*p)+y*(+i*l*p-i*c*u+s*o*u-n*o*p+n*c*f-s*l*f)+g*(+i*c*h-i*a*p-s*o*h+r*o*p+s*a*f-r*c*f)+m*(-n*a*f-i*l*h+i*a*u+n*o*h-r*o*u+r*l*f)}transpose(){let e=this.elements,i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=i,n[14]=r),this}invert(){let e=this.elements,i=e[0],r=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=e[9],u=e[10],p=e[11],d=e[12],y=e[13],g=e[14],m=e[15],w=h*g*c-y*u*c+y*l*p-a*g*p-h*l*m+a*u*m,M=d*u*c-f*g*c-d*l*p+o*g*p+f*l*m-o*u*m,x=f*y*c-d*h*c+d*a*p-o*y*p-f*a*m+o*h*m,P=d*h*l-f*y*l-d*a*u+o*y*u+f*a*g-o*h*g,T=i*w+r*M+n*x+s*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/T;return e[0]=w*C,e[1]=(y*u*s-h*g*s-y*n*p+r*g*p+h*n*m-r*u*m)*C,e[2]=(a*g*s-y*l*s+y*n*c-r*g*c-a*n*m+r*l*m)*C,e[3]=(h*l*s-a*u*s-h*n*c+r*u*c+a*n*p-r*l*p)*C,e[4]=M*C,e[5]=(f*g*s-d*u*s+d*n*p-i*g*p-f*n*m+i*u*m)*C,e[6]=(d*l*s-o*g*s-d*n*c+i*g*c+o*n*m-i*l*m)*C,e[7]=(o*u*s-f*l*s+f*n*c-i*u*c-o*n*p+i*l*p)*C,e[8]=x*C,e[9]=(d*h*s-f*y*s-d*r*p+i*y*p+f*r*m-i*h*m)*C,e[10]=(o*y*s-d*a*s+d*r*c-i*y*c-o*r*m+i*a*m)*C,e[11]=(f*a*s-o*h*s-f*r*c+i*h*c+o*r*p-i*a*p)*C,e[12]=P*C,e[13]=(f*y*n-d*h*n+d*r*u-i*y*u-f*r*g+i*h*g)*C,e[14]=(d*a*n-o*y*n-d*r*l+i*y*l+o*r*g-i*a*g)*C,e[15]=(o*h*n-f*a*n+f*r*l-i*h*l-o*r*u+i*a*u)*C,this}scale(e){let i=this.elements,r=e.x,n=e.y,s=e.z;return i[0]*=r,i[4]*=n,i[8]*=s,i[1]*=r,i[5]*=n,i[9]*=s,i[2]*=r,i[6]*=n,i[10]*=s,i[3]*=r,i[7]*=n,i[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,n))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){let i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){let i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){let i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){let r=Math.cos(i),n=Math.sin(i),s=1-r,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+r,c*a-n*l,c*l+n*a,0,c*a+n*l,f*a+r,f*l-n*o,0,c*l-n*a,f*l+n*o,s*l*l+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,n,s,o){return this.set(1,r,s,0,e,1,o,0,i,n,1,0,0,0,0,1),this}compose(e,i,r){let n=this.elements,s=i._x,o=i._y,a=i._z,l=i._w,c=s+s,f=o+o,h=a+a,u=s*c,p=s*f,d=s*h,y=o*f,g=o*h,m=a*h,w=l*c,M=l*f,x=l*h,P=r.x,T=r.y,C=r.z;return n[0]=(1-(y+m))*P,n[1]=(p+x)*P,n[2]=(d-M)*P,n[3]=0,n[4]=(p-x)*T,n[5]=(1-(u+m))*T,n[6]=(g+w)*T,n[7]=0,n[8]=(d+M)*C,n[9]=(g-w)*C,n[10]=(1-(u+y))*C,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,i,r){let n=this.elements,s=xs.set(n[0],n[1],n[2]).length(),o=xs.set(n[4],n[5],n[6]).length(),a=xs.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],Zi.copy(this);let c=1/s,f=1/o,h=1/a;return Zi.elements[0]*=c,Zi.elements[1]*=c,Zi.elements[2]*=c,Zi.elements[4]*=f,Zi.elements[5]*=f,Zi.elements[6]*=f,Zi.elements[8]*=h,Zi.elements[9]*=h,Zi.elements[10]*=h,i.setFromRotationMatrix(Zi),r.x=s,r.y=o,r.z=a,this}makePerspective(e,i,r,n,s,o,a=di){let l=this.elements,c=2*s/(i-e),f=2*s/(r-n),h=(i+e)/(i-e),u=(r+n)/(r-n),p,d;if(a===di)p=-(o+s)/(o-s),d=-2*o*s/(o-s);else if(a===Rn)p=-o/(o-s),d=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=d,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,i,r,n,s,o,a=di){let l=this.elements,c=1/(i-e),f=1/(r-n),h=1/(o-s),u=(i+e)*c,p=(r+n)*f,d,y;if(a===di)d=(o+s)*h,y=-2*h;else if(a===Rn)d=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-d,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let i=this.elements,r=e.elements;for(let n=0;n<16;n++)if(i[n]!==r[n])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){let r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}},xs=new F,Zi=new Ye,uE=new F(0,0,0),pE=new F(1,1,1),Qr=new F,al=new F,xi=new F});var Ou,zu,wt,$r=A(()=>{Yo();Ni();oi();Ou=new Ye,zu=new Di,wt=class t{constructor(e=0,i=0,r=0,n=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,n=this._order){return this._x=e,this._y=i,this._z=r,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){let n=e.elements,s=n[0],o=n[4],a=n[8],l=n[1],c=n[5],f=n[9],h=n[2],u=n[6],p=n[10];switch(i){case"XYZ":this._y=Math.asin(Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Ou.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ou,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return zu.setFromEuler(this),this.setFromQuaternion(zu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};wt.DEFAULT_ORDER="XYZ"});var Jr,ll=A(()=>{Jr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}});var Ne,rf,fr=A(()=>{Ne=class t{constructor(e,i,r,n,s,o,a,l,c){t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,n,s,o,a,l,c)}set(e,i,r,n,s,o,a,l,c){let f=this.elements;return f[0]=e,f[1]=n,f[2]=a,f[3]=i,f[4]=s,f[5]=l,f[6]=r,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){let r=e.elements,n=i.elements,s=this.elements,o=r[0],a=r[3],l=r[6],c=r[1],f=r[4],h=r[7],u=r[2],p=r[5],d=r[8],y=n[0],g=n[3],m=n[6],w=n[1],M=n[4],x=n[7],P=n[2],T=n[5],C=n[8];return s[0]=o*y+a*w+l*P,s[3]=o*g+a*M+l*T,s[6]=o*m+a*x+l*C,s[1]=c*y+f*w+h*P,s[4]=c*g+f*M+h*T,s[7]=c*m+f*x+h*C,s[2]=u*y+p*w+d*P,s[5]=u*g+p*M+d*T,s[8]=u*m+p*x+d*C,this}multiplyScalar(e){let i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){let e=this.elements,i=e[0],r=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return i*o*f-i*a*c-r*s*f+r*a*l+n*s*c-n*o*l}invert(){let e=this.elements,i=e[0],r=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=f*o-a*c,u=a*l-f*s,p=c*s-o*l,d=i*h+r*u+n*p;if(d===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/d;return e[0]=h*y,e[1]=(n*c-f*r)*y,e[2]=(a*r-n*o)*y,e[3]=u*y,e[4]=(f*i-n*l)*y,e[5]=(n*s-a*i)*y,e[6]=p*y,e[7]=(r*l-c*i)*y,e[8]=(o*i-r*s)*y,this}transpose(){let e,i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,n,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(r*l,r*c,-r*(l*o+c*a)+o+e,-n*c,n*l,-n*(-c*o+l*a)+a+i,0,0,1),this}scale(e,i){return this.premultiply(rf.makeScale(e,i)),this}rotate(e){return this.premultiply(rf.makeRotation(-e)),this}translate(e,i){return this.premultiply(rf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){let i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){let i=this.elements,r=e.elements;for(let n=0;n<9;n++)if(i[n]!==r[n])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){let r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}},rf=new Ne});var mE,Bu,Es,Cr,cl,Qo,gE,yE,Gu,Vu,Hu,Wu,SE,_s,nf,At,Ar=A(()=>{Yo();xt();Ni();An();$r();ll();fr();oi();mE=0,Bu=new F,Es=new Di,Cr=new Ye,cl=new F,Qo=new F,gE=new F,yE=new Di,Gu=new F(1,0,0),Vu=new F(0,1,0),Hu=new F(0,0,1),Wu={type:"added"},SE={type:"removed"},_s={type:"childadded",child:null},nf={type:"childremoved",child:null},At=class t extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mE++}),this.uuid=lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new F,i=new wt,r=new Di,n=new F(1,1,1);function s(){r.setFromEuler(i,!1)}function o(){i.setFromQuaternion(r,void 0,!1)}i._onChange(s),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ye},normalMatrix:{value:new Ne}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Es.setFromAxisAngle(e,i),this.quaternion.multiply(Es),this}rotateOnWorldAxis(e,i){return Es.setFromAxisAngle(e,i),this.quaternion.premultiply(Es),this}rotateX(e){return this.rotateOnAxis(Gu,e)}rotateY(e){return this.rotateOnAxis(Vu,e)}rotateZ(e){return this.rotateOnAxis(Hu,e)}translateOnAxis(e,i){return Bu.copy(e).applyQuaternion(this.quaternion),this.position.add(Bu.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Gu,e)}translateY(e){return this.translateOnAxis(Vu,e)}translateZ(e){return this.translateOnAxis(Hu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cr.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?cl.copy(e):cl.set(e,i,r);let n=this.parent;this.updateWorldMatrix(!0,!1),Qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cr.lookAt(Qo,cl,this.up):Cr.lookAt(cl,Qo,this.up),this.quaternion.setFromRotationMatrix(Cr),n&&(Cr.extractRotation(n.matrixWorld),Es.setFromRotationMatrix(Cr),this.quaternion.premultiply(Es.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wu),_s.child=e,this.dispatchEvent(_s),_s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(SE),nf.child=e,this.dispatchEvent(nf),nf.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wu),_s.child=e,this.dispatchEvent(_s),_s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,n=this.children.length;r<n;r++){let o=this.children[r].getObjectByProperty(e,i);if(o!==void 0)return o}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,e,gE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,yE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);let i=this.children;for(let r=0,n=i.length;r<n;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let i=this.children;for(let r=0,n=i.length;r<n;r++)i[r].traverseVisible(e)}traverseAncestors(e){let i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let i=this.children;for(let r=0,n=i.length;r<n;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(e){let i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));n.material=a}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];n.animations.push(s(e.animations,l))}}if(i){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),h=o(e.shapes),u=o(e.skeletons),p=o(e.animations),d=o(e.nodes);a.length>0&&(r.geometries=a),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),f.length>0&&(r.images=f),h.length>0&&(r.shapes=h),u.length>0&&(r.skeletons=u),p.length>0&&(r.animations=p),d.length>0&&(r.nodes=d)}return r.object=n,r;function o(a){let l=[];for(let c in a){let f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){let n=e.children[r];this.add(n.clone())}return this}};At.DEFAULT_UP=new F(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0});function fl(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function en(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function qu(){let t=en("canvas");return t.style.display="block",t}function Tn(t){t in Xu||(Xu[t]=!0,console.warn(t))}function ju(t,e,i){return new Promise(function(r,n){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:n();break;case t.TIMEOUT_EXPIRED:setTimeout(s,i);break;default:r()}}setTimeout(s,i)})}function Yu(t){let e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ku(t){let e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Xu,tn=A(()=>{Xu={}});var vE,Ii,sf,ws,Ei,$o,Vt,jt,rn=A(()=>{xt();ai();ef();An();Mr();ol();Ar();Ni();fr();oi();tn();vE=0,Ii=new Ye,sf=new At,ws=new F,Ei=new br,$o=new br,Vt=new F,jt=class t extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vE++}),this.uuid=lr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fl(e)?gs:ms)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let s=new Ne().getNormalMatrix(e);r.applyNormalMatrix(s),r.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ii.makeRotationFromQuaternion(e),this.applyMatrix4(Ii),this}rotateX(e){return Ii.makeRotationX(e),this.applyMatrix4(Ii),this}rotateY(e){return Ii.makeRotationY(e),this.applyMatrix4(Ii),this}rotateZ(e){return Ii.makeRotationZ(e),this.applyMatrix4(Ii),this}translate(e,i,r){return Ii.makeTranslation(e,i,r),this.applyMatrix4(Ii),this}scale(e,i,r){return Ii.makeScale(e,i,r),this.applyMatrix4(Ii),this}lookAt(e){return sf.lookAt(e),sf.updateMatrix(),this.applyMatrix4(sf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(e){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let n=0,s=e.length;n<s;n++){let o=e[n];r.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Li(r,3))}else{for(let r=0,n=i.count;r<n;r++){let s=e[r];i.setXYZ(r,s.x,s.y,s.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new br);let e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,n=i.length;r<n;r++){let s=i[r];Ei.setFromBufferAttribute(s),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,Ei.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,Ei.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(Ei.min),this.boundingBox.expandByPoint(Ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zr);let e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let r=this.boundingSphere.center;if(Ei.setFromBufferAttribute(e),i)for(let s=0,o=i.length;s<o;s++){let a=i[s];$o.setFromBufferAttribute(a),this.morphTargetsRelative?(Vt.addVectors(Ei.min,$o.min),Ei.expandByPoint(Vt),Vt.addVectors(Ei.max,$o.max),Ei.expandByPoint(Vt)):(Ei.expandByPoint($o.min),Ei.expandByPoint($o.max))}Ei.getCenter(r);let n=0;for(let s=0,o=e.count;s<o;s++)Vt.fromBufferAttribute(e,s),n=Math.max(n,r.distanceToSquared(Vt));if(i)for(let s=0,o=i.length;s<o;s++){let a=i[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Vt.fromBufferAttribute(a,c),l&&(ws.fromBufferAttribute(e,c),Vt.add(ws)),n=Math.max(n,r.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,n=i.normal,s=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _t(new Float32Array(4*r.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<r.count;L++)a[L]=new F,l[L]=new F;let c=new F,f=new F,h=new F,u=new Ue,p=new Ue,d=new Ue,y=new F,g=new F;function m(L,S,v){c.fromBufferAttribute(r,L),f.fromBufferAttribute(r,S),h.fromBufferAttribute(r,v),u.fromBufferAttribute(s,L),p.fromBufferAttribute(s,S),d.fromBufferAttribute(s,v),f.sub(c),h.sub(c),p.sub(u),d.sub(u);let D=1/(p.x*d.y-d.x*p.y);isFinite(D)&&(y.copy(f).multiplyScalar(d.y).addScaledVector(h,-p.y).multiplyScalar(D),g.copy(h).multiplyScalar(p.x).addScaledVector(f,-d.x).multiplyScalar(D),a[L].add(y),a[S].add(y),a[v].add(y),l[L].add(g),l[S].add(g),l[v].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let L=0,S=w.length;L<S;++L){let v=w[L],D=v.start,U=v.count;for(let I=D,V=D+U;I<V;I+=3)m(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let M=new F,x=new F,P=new F,T=new F;function C(L){P.fromBufferAttribute(n,L),T.copy(P);let S=a[L];M.copy(S),M.sub(P.multiplyScalar(P.dot(S))).normalize(),x.crossVectors(T,S);let D=x.dot(l[L])<0?-1:1;o.setXYZW(L,M.x,M.y,M.z,D)}for(let L=0,S=w.length;L<S;++L){let v=w[L],D=v.start,U=v.count;for(let I=D,V=D+U;I<V;I+=3)C(e.getX(I+0)),C(e.getX(I+1)),C(e.getX(I+2))}}computeVertexNormals(){let e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new _t(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let u=0,p=r.count;u<p;u++)r.setXYZ(u,0,0,0);let n=new F,s=new F,o=new F,a=new F,l=new F,c=new F,f=new F,h=new F;if(e)for(let u=0,p=e.count;u<p;u+=3){let d=e.getX(u+0),y=e.getX(u+1),g=e.getX(u+2);n.fromBufferAttribute(i,d),s.fromBufferAttribute(i,y),o.fromBufferAttribute(i,g),f.subVectors(o,s),h.subVectors(n,s),f.cross(h),a.fromBufferAttribute(r,d),l.fromBufferAttribute(r,y),c.fromBufferAttribute(r,g),a.add(f),l.add(f),c.add(f),r.setXYZ(d,a.x,a.y,a.z),r.setXYZ(y,l.x,l.y,l.z),r.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,p=i.count;u<p;u+=3)n.fromBufferAttribute(i,u+0),s.fromBufferAttribute(i,u+1),o.fromBufferAttribute(i,u+2),f.subVectors(o,s),h.subVectors(n,s),f.cross(h),r.setXYZ(u+0,f.x,f.y,f.z),r.setXYZ(u+1,f.x,f.y,f.z),r.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Vt.fromBufferAttribute(e,i),Vt.normalize(),e.setXYZ(i,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(a,l){let c=a.array,f=a.itemSize,h=a.normalized,u=new c.constructor(l.length*f),p=0,d=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*f;for(let m=0;m<f;m++)u[d++]=c[p++]}return new _t(u,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new t,r=this.index.array,n=this.attributes;for(let a in n){let l=n[a],c=e(l,r);i.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let f=0,h=c.length;f<h;f++){let u=c[f],p=e(u,r);l.push(p)}i.morphAttributes[a]=l}i.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];i.addGroup(c.start,c.count,c.materialIndex)}return i}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let l in r){let c=r[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let h=0,u=c.length;h<u;h++){let p=c[h];f.push(p.toJSON(e.data))}f.length>0&&(n[l]=f,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=e.name;let r=e.index;r!==null&&this.setIndex(r.clone(i));let n=e.attributes;for(let c in n){let f=n[c];this.setAttribute(c,f.clone(i))}let s=e.morphAttributes;for(let c in s){let f=[],h=s[c];for(let u=0,p=h.length;u<p;u++)f.push(h[u].clone(i));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,f=o.length;c<f;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}});var hr,Jo=A(()=>{rn();Mr();xt();hr=class t extends jt{constructor(e=1,i=1,r=1,n=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:n,heightSegments:s,depthSegments:o};let a=this;n=Math.floor(n),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],f=[],h=[],u=0,p=0;d("z","y","x",-1,-1,r,i,e,o,s,0),d("z","y","x",1,-1,r,i,-e,o,s,1),d("x","z","y",1,1,e,r,i,n,o,2),d("x","z","y",1,-1,e,r,-i,n,o,3),d("x","y","z",1,-1,e,i,r,n,s,4),d("x","y","z",-1,-1,e,i,-r,n,s,5),this.setIndex(l),this.setAttribute("position",new Li(c,3)),this.setAttribute("normal",new Li(f,3)),this.setAttribute("uv",new Li(h,2));function d(y,g,m,w,M,x,P,T,C,L,S){let v=x/C,D=P/L,U=x/2,I=P/2,V=T/2,q=C+1,H=L+1,Z=0,G=0,$=new F;for(let ne=0;ne<H;ne++){let Se=ne*D-I;for(let Ce=0;Ce<q;Ce++){let Oe=Ce*v-U;$[y]=Oe*w,$[g]=Se*M,$[m]=V,c.push($.x,$.y,$.z),$[y]=0,$[g]=0,$[m]=T>0?1:-1,f.push($.x,$.y,$.z),h.push(Ce/C),h.push(1-ne/L),Z+=1}}for(let ne=0;ne<L;ne++)for(let Se=0;Se<C;Se++){let Ce=u+Se+q*ne,Oe=u+Se+q*(ne+1),Y=u+(Se+1)+q*(ne+1),re=u+(Se+1)+q*ne;l.push(Ce,Oe,re),l.push(Oe,Y,re),G+=6}a.addGroup(p,G,S),p+=G,u+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}});var of,Zu=A(()=>{of={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}}});var af,Qu,$u=A(()=>{af=class{constructor(e,i,r){let n=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=r,this.itemStart=function(f){a++,s===!1&&n.onStart!==void 0&&n.onStart(f,o,a),s=!0},this.itemEnd=function(f){o++,n.onProgress!==void 0&&n.onProgress(f,o,a),o===a&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(f){n.onError!==void 0&&n.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,h){return c.push(f,h),this},this.removeHandler=function(f){let h=c.indexOf(f);return h!==-1&&c.splice(h,2),this},this.getHandler=function(f){for(let h=0,u=c.length;h<u;h+=2){let p=c[h],d=c[h+1];if(p.global&&(p.lastIndex=0),p.test(f))return d}return null}}},Qu=new af});var Dn,lf=A(()=>{$u();Dn=class{constructor(e){this.manager=e!==void 0?e:Qu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){let r=this;return new Promise(function(n,s){r.load(e,n,i,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Dn.DEFAULT_MATERIAL_NAME="__DEFAULT"});var hl,Ju=A(()=>{Zu();lf();tn();hl=class extends Dn{constructor(e){super(e)}load(e,i,r,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=of.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){i&&i(o),s.manager.itemEnd(e)},0),o;let a=en("img");function l(){f(),of.add(e,this),i&&i(this),s.manager.itemEnd(e)}function c(h){f(),n&&n(h),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}});function Qi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ln(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var He,e0,t0,i0,r0,n0,dr=A(()=>{je();fr();He={enabled:!0,workingColorSpace:Yi,spaces:{},convert:function(t,e,i){return this.enabled===!1||e===i||!e||!i||(this.spaces[e].transfer===$e&&(t.r=Qi(t.r),t.g=Qi(t.g),t.b=Qi(t.b)),this.spaces[e].primaries!==this.spaces[i].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[i].fromXYZ)),this.spaces[i].transfer===$e&&(t.r=Ln(t.r),t.g=Ln(t.g),t.b=Ln(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===Ti?wn:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,i){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[i].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};e0=[.64,.33,.3,.6,.15,.06],t0=[.2126,.7152,.0722],i0=[.3127,.329],r0=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),n0=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);He.define({[Yi]:{primaries:e0,whitePoint:i0,transfer:wn,toXYZ:r0,fromXYZ:n0,luminanceCoefficients:t0,workingColorSpaceConfig:{unpackColorSpace:ni},outputColorSpaceConfig:{drawingBufferColorSpace:ni}},[ni]:{primaries:e0,whitePoint:i0,transfer:$e,toXYZ:r0,fromXYZ:n0,luminanceCoefficients:t0,outputColorSpaceConfig:{drawingBufferColorSpace:ni}}})});var Ms,dl,s0=A(()=>{tn();dr();dl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ms===void 0&&(Ms=en("canvas")),Ms.width=e.width,Ms.height=e.height;let r=Ms.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ms}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let i=en("canvas");i.width=e.width,i.height=e.height;let r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);let n=r.getImageData(0,0,e.width,e.height),s=n.data;for(let o=0;o<s.length;o++)s[o]=Qi(s[o]/255)*255;return r.putImageData(n,0,0),i}else if(e.data){let i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Qi(i[r]/255)*255):i[r]=Qi(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}});function cf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?dl.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var xE,Rs,ff=A(()=>{s0();oi();xE=0,Rs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xE++}),this.uuid=lr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let r={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?s.push(cf(n[o].image)):s.push(cf(n[o]))}else s=cf(n);r.url=s}return i||(e.images[this.uuid]=r),r}}});var EE,Tt,Tr=A(()=>{An();je();oi();ai();fr();ff();EE=0,Tt=class t extends ui{constructor(e=t.DEFAULT_IMAGE,i=t.DEFAULT_MAPPING,r=Xi,n=Xi,s=ii,o=qi,a=Gt,l=Qt,c=t.DEFAULT_ANISOTROPY,f=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:EE++}),this.uuid=lr(),this.name="",this.source=new Rs(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=n,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case So:e.x=e.x-Math.floor(e.x);break;case Xi:e.x=e.x<0?0:1;break;case vo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case So:e.y=e.y-Math.floor(e.y);break;case Xi:e.y=e.y<0?0:1;break;case vo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=Yc;Tt.DEFAULT_ANISOTROPY=1});var bs,hf=A(()=>{Ju();Tr();lf();bs=class extends Dn{constructor(e){super(e)}load(e,i,r,n){let s=new Tt,o=new hl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,i!==void 0&&i(s)},r,n),s}}});function df(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(e-t)*6*i:i<1/2?e:i<2/3?t+(e-t)*6*(2/3-i):t}var o0,nn,ul,Ie,Jt,Pi=A(()=>{oi();dr();je();o0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nn={h:0,s:0,l:0},ul={h:0,s:0,l:0};Ie=class{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,He.toWorkingColorSpace(this,i),this}setRGB(e,i,r,n=He.workingColorSpace){return this.r=e,this.g=i,this.b=r,He.toWorkingColorSpace(this,n),this}setHSL(e,i,r,n=He.workingColorSpace){if(e=Uu(e,1),i=Ct(i,0,1),r=Ct(r,0,1),i===0)this.r=this.g=this.b=r;else{let s=r<=.5?r*(1+i):r+i-r*i,o=2*r-s;this.r=df(o,s,e+1/3),this.g=df(o,s,e),this.b=df(o,s,e-1/3)}return He.toWorkingColorSpace(this,n),this}setStyle(e,i=ni){function r(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,i);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,i);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=n[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,i);if(o===6)return this.setHex(parseInt(s,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ni){let r=o0[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=Ln(e.r),this.g=Ln(e.g),this.b=Ln(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ni){return He.fromWorkingColorSpace(Jt.copy(this),e),Math.round(Ct(Jt.r*255,0,255))*65536+Math.round(Ct(Jt.g*255,0,255))*256+Math.round(Ct(Jt.b*255,0,255))}getHexString(e=ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=He.workingColorSpace){He.fromWorkingColorSpace(Jt.copy(this),i);let r=Jt.r,n=Jt.g,s=Jt.b,o=Math.max(r,n,s),a=Math.min(r,n,s),l,c,f=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=f<=.5?h/(o+a):h/(2-o-a),o){case r:l=(n-s)/h+(n<s?6:0);break;case n:l=(s-r)/h+2;break;case s:l=(r-n)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,i=He.workingColorSpace){return He.fromWorkingColorSpace(Jt.copy(this),i),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=ni){He.fromWorkingColorSpace(Jt.copy(this),e);let i=Jt.r,r=Jt.g,n=Jt.b;return e!==ni?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(n*255)})`}offsetHSL(e,i,r){return this.getHSL(nn),this.setHSL(nn.h+e,nn.s+i,nn.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(nn),e.getHSL(ul);let r=tl(nn.h,ul.h,i),n=tl(nn.s,ul.s,i),s=tl(nn.l,ul.l,i);return this.setHSL(r,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let i=this.r,r=this.g,n=this.b,s=e.elements;return this.r=s[0]*i+s[3]*r+s[6]*n,this.g=s[1]*i+s[4]*r+s[7]*n,this.b=s[2]*i+s[5]*r+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Jt=new Ie;Ie.NAMES=o0});var _E,ur,ea=A(()=>{Pi();An();je();oi();_E=0,ur=class extends ui{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_E++}),this.uuid=lr(),this.name="",this.blending=Er,this.side=Lt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=po,this.blendDst=mo,this.blendEquation=_r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mn,this.stencilZFail=Mn,this.stencilZPass=Mn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let i in e){let r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}let n=this[i];if(n===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(r):n&&n.isVector3&&r&&r.isVector3?n.copy(r):this[i]=r}}toJSON(e){let i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});let r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Er&&(r.blending=this.blending),this.side!==Lt&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==po&&(r.blendSrc=this.blendSrc),this.blendDst!==mo&&(r.blendDst=this.blendDst),this.blendEquation!==_r&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==qr&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kc&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mn&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Mn&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Mn&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function n(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(i){let s=n(e.textures),o=n(e.images);s.length>0&&(r.textures=s),o.length>0&&(r.images=o)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let i=e.clippingPlanes,r=null;if(i!==null){let n=i.length;r=new Array(n);for(let s=0;s!==n;++s)r[s]=i[s].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}});var st,ta=A(()=>{ea();je();Pi();$r();st=class extends ur{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wt,this.combine=Ga,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}});var $i,pl=A(()=>{Ar();$i=class extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}});var Dr,uf,ml,sn,pf,gl,mf,Cs,gf=A(()=>{xt();Dr=new F,uf=new F,ml=new F,sn=new F,pf=new F,gl=new F,mf=new F,Cs=class{constructor(e=new F,i=new F(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Dr)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);let r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let i=Dr.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Dr.copy(this.origin).addScaledVector(this.direction,i),Dr.distanceToSquared(e))}distanceSqToSegment(e,i,r,n){uf.copy(e).add(i).multiplyScalar(.5),ml.copy(i).sub(e).normalize(),sn.copy(this.origin).sub(uf);let s=e.distanceTo(i)*.5,o=-this.direction.dot(ml),a=sn.dot(this.direction),l=-sn.dot(ml),c=sn.lengthSq(),f=Math.abs(1-o*o),h,u,p,d;if(f>0)if(h=o*l-a,u=o*a-l,d=s*f,h>=0)if(u>=-d)if(u<=d){let y=1/f;h*=y,u*=y,p=h*(h+o*u+2*a)+u*(o*h+u+2*l)+c}else u=s,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;else u=-s,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;else u<=-d?(h=Math.max(0,-(-o*s+a)),u=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+u*(u+2*l)+c):u<=d?(h=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(h=Math.max(0,-(o*s+a)),u=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+u*(u+2*l)+c);else u=o>0?-s:s,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(uf).addScaledVector(ml,u),p}intersectSphere(e,i){Dr.subVectors(e.center,this.origin);let r=Dr.dot(this.direction),n=Dr.dot(Dr)-r*r,s=e.radius*e.radius;if(n>s)return null;let o=Math.sqrt(s-n),a=r-o,l=r+o;return l<0?null:a<0?this.at(l,i):this.at(a,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;let r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){let r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){let i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,n,s,o,a,l,c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(r=(e.min.x-u.x)*c,n=(e.max.x-u.x)*c):(r=(e.max.x-u.x)*c,n=(e.min.x-u.x)*c),f>=0?(s=(e.min.y-u.y)*f,o=(e.max.y-u.y)*f):(s=(e.max.y-u.y)*f,o=(e.min.y-u.y)*f),r>o||s>n||((s>r||isNaN(r))&&(r=s),(o<n||isNaN(n))&&(n=o),h>=0?(a=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(a=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),r>l||a>n)||((a>r||r!==r)&&(r=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(r>=0?r:n,i)}intersectsBox(e){return this.intersectBox(e,Dr)!==null}intersectTriangle(e,i,r,n,s){pf.subVectors(i,e),gl.subVectors(r,e),mf.crossVectors(pf,gl);let o=this.direction.dot(mf),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;sn.subVectors(this.origin,e);let l=a*this.direction.dot(gl.crossVectors(sn,gl));if(l<0)return null;let c=a*this.direction.dot(pf.cross(sn));if(c<0||l+c>o)return null;let f=-a*sn.dot(mf);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}});var ht,on=A(()=>{ht=class t{constructor(e=0,i=0,r=0,n=1){t.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,n){return this.x=e,this.y=i,this.z=r,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let i=this.x,r=this.y,n=this.z,s=this.w,o=e.elements;return this.x=o[0]*i+o[4]*r+o[8]*n+o[12]*s,this.y=o[1]*i+o[5]*r+o[9]*n+o[13]*s,this.z=o[2]*i+o[6]*r+o[10]*n+o[14]*s,this.w=o[3]*i+o[7]*r+o[11]*n+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,n,s,l=e.elements,c=l[0],f=l[4],h=l[8],u=l[1],p=l[5],d=l[9],y=l[2],g=l[6],m=l[10];if(Math.abs(f-u)<.01&&Math.abs(h-y)<.01&&Math.abs(d-g)<.01){if(Math.abs(f+u)<.1&&Math.abs(h+y)<.1&&Math.abs(d+g)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let M=(c+1)/2,x=(p+1)/2,P=(m+1)/2,T=(f+u)/4,C=(h+y)/4,L=(d+g)/4;return M>x&&M>P?M<.01?(r=0,n=.707106781,s=.707106781):(r=Math.sqrt(M),n=T/r,s=C/r):x>P?x<.01?(r=.707106781,n=0,s=.707106781):(n=Math.sqrt(x),r=T/n,s=L/n):P<.01?(r=.707106781,n=.707106781,s=0):(s=Math.sqrt(P),r=C/s,n=L/s),this.set(r,n,s,i),this}let w=Math.sqrt((g-d)*(g-d)+(h-y)*(h-y)+(u-f)*(u-f));return Math.abs(w)<.001&&(w=1),this.x=(g-d)/w,this.y=(h-y)/w,this.z=(u-f)/w,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){let i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}});var Ji,Lr,yf,Nr,As,Ts,a0,Sf,vf,xf,Ef,_f,wf,an,l0=A(()=>{xt();on();Ji=new F,Lr=new F,yf=new F,Nr=new F,As=new F,Ts=new F,a0=new F,Sf=new F,vf=new F,xf=new F,Ef=new ht,_f=new ht,wf=new ht,an=class t{constructor(e=new F,i=new F,r=new F){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,n){n.subVectors(r,i),Ji.subVectors(e,i),n.cross(Ji);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,i,r,n,s){Ji.subVectors(n,i),Lr.subVectors(r,i),yf.subVectors(e,i);let o=Ji.dot(Ji),a=Ji.dot(Lr),l=Ji.dot(yf),c=Lr.dot(Lr),f=Lr.dot(yf),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;let u=1/h,p=(c*l-a*f)*u,d=(o*f-a*l)*u;return s.set(1-p-d,d,p)}static containsPoint(e,i,r,n){return this.getBarycoord(e,i,r,n,Nr)===null?!1:Nr.x>=0&&Nr.y>=0&&Nr.x+Nr.y<=1}static getInterpolation(e,i,r,n,s,o,a,l){return this.getBarycoord(e,i,r,n,Nr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Nr.x),l.addScaledVector(o,Nr.y),l.addScaledVector(a,Nr.z),l)}static getInterpolatedAttribute(e,i,r,n,s,o){return Ef.setScalar(0),_f.setScalar(0),wf.setScalar(0),Ef.fromBufferAttribute(e,i),_f.fromBufferAttribute(e,r),wf.fromBufferAttribute(e,n),o.setScalar(0),o.addScaledVector(Ef,s.x),o.addScaledVector(_f,s.y),o.addScaledVector(wf,s.z),o}static isFrontFacing(e,i,r,n){return Ji.subVectors(r,i),Lr.subVectors(e,i),Ji.cross(Lr).dot(n)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,n){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,i,r,n){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ji.subVectors(this.c,this.b),Lr.subVectors(this.a,this.b),Ji.cross(Lr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return t.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,n,s){return t.getInterpolation(e,this.a,this.b,this.c,i,r,n,s)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){let r=this.a,n=this.b,s=this.c,o,a;As.subVectors(n,r),Ts.subVectors(s,r),Sf.subVectors(e,r);let l=As.dot(Sf),c=Ts.dot(Sf);if(l<=0&&c<=0)return i.copy(r);vf.subVectors(e,n);let f=As.dot(vf),h=Ts.dot(vf);if(f>=0&&h<=f)return i.copy(n);let u=l*h-f*c;if(u<=0&&l>=0&&f<=0)return o=l/(l-f),i.copy(r).addScaledVector(As,o);xf.subVectors(e,s);let p=As.dot(xf),d=Ts.dot(xf);if(d>=0&&p<=d)return i.copy(s);let y=p*c-l*d;if(y<=0&&c>=0&&d<=0)return a=c/(c-d),i.copy(r).addScaledVector(Ts,a);let g=f*d-p*h;if(g<=0&&h-f>=0&&p-d>=0)return a0.subVectors(s,n),a=(h-f)/(h-f+(p-d)),i.copy(n).addScaledVector(a0,a);let m=1/(g+y+u);return o=y*m,a=u*m,i.copy(r).addScaledVector(As,o).addScaledVector(Ts,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}});function wE(t,e,i,r,n,s,o,a){let l;if(e.side===nt?l=r.intersectTriangle(o,s,n,!0,a):l=r.intersectTriangle(n,s,o,e.side===Lt,a),l===null)return null;_l.copy(a),_l.applyMatrix4(t.matrixWorld);let c=i.ray.origin.distanceTo(_l);return c<i.near||c>i.far?null:{distance:c,point:_l.clone(),object:t}}function wl(t,e,i,r,n,s,o,a,l,c){t.getVertexPosition(a,Sl),t.getVertexPosition(l,vl),t.getVertexPosition(c,xl);let f=wE(t,e,i,r,Sl,vl,xl,h0);if(f){let h=new F;an.getBarycoord(h0,Sl,vl,xl,h),n&&(f.uv=an.getInterpolatedAttribute(n,a,l,c,h,new Ue)),s&&(f.uv1=an.getInterpolatedAttribute(s,a,l,c,h,new Ue)),o&&(f.normal=an.getInterpolatedAttribute(o,a,l,c,h,new F),f.normal.dot(r.direction)>0&&f.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new F,materialIndex:0};an.getNormal(Sl,vl,xl,u.normal),f.face=u,f.barycoord=h}return f}var c0,Nn,yl,f0,Sl,vl,xl,Mf,El,h0,_l,Mt,ln=A(()=>{xt();ai();ol();gf();Ni();Ar();l0();je();ta();rn();c0=new Ye,Nn=new Cs,yl=new Zr,f0=new F,Sl=new F,vl=new F,xl=new F,Mf=new F,El=new F,h0=new F,_l=new F,Mt=class extends At{constructor(e=new jt,i=new st){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){let n=i[r[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){let a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,i){let r=this.geometry,n=r.attributes.position,s=r.morphAttributes.position,o=r.morphTargetsRelative;i.fromBufferAttribute(n,e);let a=this.morphTargetInfluences;if(s&&a){El.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let f=a[l],h=s[l];f!==0&&(Mf.fromBufferAttribute(h,e),o?El.addScaledVector(Mf,f):El.addScaledVector(Mf.sub(i),f))}i.add(El)}return i}raycast(e,i){let r=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),yl.copy(r.boundingSphere),yl.applyMatrix4(s),Nn.copy(e.ray).recast(e.near),!(yl.containsPoint(Nn.origin)===!1&&(Nn.intersectSphere(yl,f0)===null||Nn.origin.distanceToSquared(f0)>(e.far-e.near)**2))&&(c0.copy(s).invert(),Nn.copy(e.ray).applyMatrix4(c0),!(r.boundingBox!==null&&Nn.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Nn)))}_computeIntersections(e,i,r){let n,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,u=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let d=0,y=u.length;d<y;d++){let g=u[d],m=o[g.materialIndex],w=Math.max(g.start,p.start),M=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let x=w,P=M;x<P;x+=3){let T=a.getX(x),C=a.getX(x+1),L=a.getX(x+2);n=wl(this,m,e,r,c,f,h,T,C,L),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=g.materialIndex,i.push(n))}}else{let d=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let g=d,m=y;g<m;g+=3){let w=a.getX(g),M=a.getX(g+1),x=a.getX(g+2);n=wl(this,o,e,r,c,f,h,w,M,x),n&&(n.faceIndex=Math.floor(g/3),i.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let d=0,y=u.length;d<y;d++){let g=u[d],m=o[g.materialIndex],w=Math.max(g.start,p.start),M=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let x=w,P=M;x<P;x+=3){let T=x,C=x+1,L=x+2;n=wl(this,m,e,r,c,f,h,T,C,L),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=g.materialIndex,i.push(n))}}else{let d=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let g=d,m=y;g<m;g+=3){let w=g,M=g+1,x=g+2;n=wl(this,o,e,r,c,f,h,w,M,x),n&&(n.faceIndex=Math.floor(g/3),i.push(n))}}}}});var Ds,Rf=A(()=>{je();Ni();Ar();Ds=class extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=di}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}});var cn,d0,u0,Nt,Ls=A(()=>{Rf();oi();ai();xt();cn=new F,d0=new Ue,u0=new Ue,Nt=class extends Ds{constructor(e=50,i=1,r=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=n,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let i=.5*this.getFilmHeight()/e;this.fov=jo*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(el*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jo*2*Math.atan(Math.tan(el*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){cn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(cn.x,cn.y).multiplyScalar(-e/cn.z),cn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(cn.x,cn.y).multiplyScalar(-e/cn.z)}getViewSize(e,i){return this.getViewBounds(e,d0,u0),i.subVectors(u0,d0)}setViewOffset(e,i,r,n,s,o){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,i=e*Math.tan(el*.5*this.fov)/this.zoom,r=2*i,n=this.aspect*r,s=-.5*n,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*n/l,i-=o.offsetY*r/c,n*=o.width/l,r*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}});function m0(t,e){return t.distance-e.distance}function bf(t,e,i,r){let n=!0;if(t.layers.test(e.layers)&&t.raycast(e,i)===!1&&(n=!1),n===!0&&r===!0){let s=t.children;for(let o=0,a=s.length;o<a;o++)bf(s[o],e,i,!0)}}var p0,Ml,g0=A(()=>{Ni();gf();ll();p0=new Ye,Ml=class{constructor(e,i,r=0,n=1/0){this.ray=new Cs(e,i),this.near=r,this.far=n,this.camera=null,this.layers=new Jr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return p0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(p0),this}intersectObject(e,i=!0,r=[]){return bf(e,this,r,i),r.sort(m0),r}intersectObjects(e,i=!0,r=[]){for(let n=0,s=e.length;n<s;n++)bf(e[n],this,r,i);return r.sort(m0),r}}});var Rl,y0=A(()=>{oi();Rl=class{constructor(e=1,i=0,r=0){return this.radius=e,this.phi=i,this.theta=r,this}set(e,i,r){return this.radius=e,this.phi=i,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,r){return this.radius=Math.sqrt(e*e+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Ct(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}});var Cf,ME,RE,er,Af=A(()=>{fr();xt();Cf=new F,ME=new F,RE=new Ne,er=class{constructor(e=new F(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,n){return this.normal.set(e,i,r),this.constant=n,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){let n=Cf.subVectors(r,i).cross(ME.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){let r=e.delta(Cf),n=this.normal.dot(r);if(n===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:i.copy(e.start).addScaledVector(r,s)}intersectsLine(e){let i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){let r=i||RE.getNormalMatrix(e),n=this.coplanarPoint(Cf).applyMatrix4(e),s=this.normal.applyMatrix3(r).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}});var In,bl,Ns,Tf=A(()=>{je();xt();ol();Af();In=new Zr,bl=new F,Ns=class{constructor(e=new er,i=new er,r=new er,n=new er,s=new er,o=new er){this.planes=[e,i,r,n,s,o]}set(e,i,r,n,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(i),a[2].copy(r),a[3].copy(n),a[4].copy(s),a[5].copy(o),this}copy(e){let i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=di){let r=this.planes,n=e.elements,s=n[0],o=n[1],a=n[2],l=n[3],c=n[4],f=n[5],h=n[6],u=n[7],p=n[8],d=n[9],y=n[10],g=n[11],m=n[12],w=n[13],M=n[14],x=n[15];if(r[0].setComponents(l-s,u-c,g-p,x-m).normalize(),r[1].setComponents(l+s,u+c,g+p,x+m).normalize(),r[2].setComponents(l+o,u+f,g+d,x+w).normalize(),r[3].setComponents(l-o,u-f,g-d,x-w).normalize(),r[4].setComponents(l-a,u-h,g-y,x-M).normalize(),i===di)r[5].setComponents(l+a,u+h,g+y,x+M).normalize();else if(i===Rn)r[5].setComponents(a,h,y,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),In.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),In.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(In)}intersectsSprite(e){return In.center.set(0,0,0),In.radius=.7071067811865476,In.applyMatrix4(e.matrixWorld),this.intersectsSphere(In)}intersectsSphere(e){let i=this.planes,r=e.center,n=-e.radius;for(let s=0;s<6;s++)if(i[s].distanceToPoint(r)<n)return!1;return!0}intersectsBox(e){let i=this.planes;for(let r=0;r<6;r++){let n=i[r];if(bl.x=n.normal.x>0?e.max.x:e.min.x,bl.y=n.normal.y>0?e.max.y:e.min.y,bl.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(bl)<0)return!1}return!0}containsPoint(e){let i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}});function Cl(){let t=null,e=!1,i=null,r=null;function n(s,o){i(s,o),r=t.requestAnimationFrame(n)}return{start:function(){e!==!0&&i!==null&&(r=t.requestAnimationFrame(n),e=!0)},stop:function(){t.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(s){i=s},setContext:function(s){t=s}}}var Df=A(()=>{});function S0(t){let e=new WeakMap;function i(a,l){let c=a.array,f=a.usage,h=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,f),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function r(a,l,c){let f=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,f);else{h.sort((p,d)=>p.start-d.start);let u=0;for(let p=1;p<h.length;p++){let d=h[u],y=h[p];y.start<=d.start+d.count+1?d.count=Math.max(d.count,y.start+y.count-d.start):(++u,h[u]=y)}h.length=u+1;for(let p=0,d=h.length;p<d;p++){let y=h[p];t.bufferSubData(c,y.start*f.BYTES_PER_ELEMENT,f,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,i(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,a,l),c.version=a.version}}return{get:n,remove:s,update:o}}var v0=A(()=>{});var Is,Lf=A(()=>{rn();Mr();Is=class t extends jt{constructor(e=1,i=1,r=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:n};let s=e/2,o=i/2,a=Math.floor(r),l=Math.floor(n),c=a+1,f=l+1,h=e/a,u=i/l,p=[],d=[],y=[],g=[];for(let m=0;m<f;m++){let w=m*u-o;for(let M=0;M<c;M++){let x=M*h-s;d.push(x,-w,0),y.push(0,0,1),g.push(M/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let w=0;w<a;w++){let M=w+c*m,x=w+c*(m+1),P=w+1+c*(m+1),T=w+1+c*m;p.push(M,x,T),p.push(x,P,T)}this.setIndex(p),this.setAttribute("position",new Li(d,3)),this.setAttribute("normal",new Li(y,3)),this.setAttribute("uv",new Li(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}}});function Ir(t){let e={};for(let i in t){e[i]={};for(let r in t[i]){let n=t[i][r];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=n.clone():Array.isArray(n)?e[i][r]=n.slice():e[i][r]=n}}return e}function ei(t){let e={};for(let i=0;i<t.length;i++){let r=Ir(t[i]);for(let n in r)e[n]=r[n]}return e}function x0(t){let e=[];for(let i=0;i<t.length;i++)e.push(t[i].clone());return e}function Al(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:He.workingColorSpace}var E0,Pn=A(()=>{dr();E0={clone:Ir,merge:ei}});var _0,w0=A(()=>{_0=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`});var M0,R0=A(()=>{M0=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`});var li,Ps=A(()=>{ea();Pn();w0();R0();li=class extends ur{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_0,this.fragmentShader=M0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ir(e.uniforms),this.uniformsGroups=x0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(let n in this.uniforms){let o=this.uniforms[n].value;o&&o.isTexture?i.uniforms[n]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?i.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?i.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?i.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?i.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?i.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?i.uniforms[n]={type:"m4",value:o.toArray()}:i.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;let r={};for(let n in this.extensions)this.extensions[n]===!0&&(r[n]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}});var b0,C0=A(()=>{b0=`
#ifdef USE_ALPHAHASH

	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;

#endif
`});var A0,T0=A(()=>{A0=`
#ifdef USE_ALPHAHASH

	/**
	 * See: https://casual-effects.com/research/Wyman2017Hashed/index.html
	 */

	const float ALPHA_HASH_SCALE = 0.05; // Derived from trials only, and may be changed.

	float hash2D( vec2 value ) {

		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );

	}

	float hash3D( vec3 value ) {

		return hash2D( vec2( hash2D( value.xy ), value.z ) );

	}

	float getAlphaHashThreshold( vec3 position ) {

		// Find the discretized derivatives of our coordinates
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );

		// Find two nearest log-discretized noise scales
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);

		// Compute alpha thresholds at our two noise scales
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);

		// Factor to interpolate lerp with
		float lerpFactor = fract( log2( pixScale ) );

		// Interpolate alpha threshold from noise at two scales
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;

		// Pass into CDF to compute uniformly distrib threshold
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);

		// Find our final, uniformly distributed alpha threshold (\u03B1\u03C4)
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;

		// Avoids \u03B1\u03C4 == 0. Could also do \u03B1\u03C4 =1-\u03B1\u03C4
		return clamp( threshold , 1.0e-6, 1.0 );

	}

#endif
`});var D0,L0=A(()=>{D0=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;

#endif
`});var N0,I0=A(()=>{N0=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`});var P0,k0=A(()=>{P0=`
#ifdef USE_ALPHATEST

	#ifdef ALPHA_TO_COVERAGE

	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;

	#else

	if ( diffuseColor.a < alphaTest ) discard;

	#endif

#endif
`});var U0,F0=A(()=>{U0=`
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`});var O0,z0=A(()=>{O0=`
#ifdef USE_AOMAP

	// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;

	reflectedLight.indirectDiffuse *= ambientOcclusion;

	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif

	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif

	#if defined( USE_ENVMAP ) && defined( STANDARD )

		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );

		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );

	#endif

#endif
`});var B0,G0=A(()=>{B0=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`});var V0,H0=A(()=>{V0=`
#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif

	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {

		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );

	}

	float getIndirectIndex( const in int i ) {

		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );

	}

#endif

#ifdef USE_BATCHING_COLOR

	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {

		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;

	}

#endif
`});var W0,X0=A(()=>{W0=`
#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif
`});var q0,j0=A(()=>{q0=`
vec3 transformed = vec3( position );

#ifdef USE_ALPHAHASH

	vPosition = vec3( position );

#endif
`});var Y0,K0=A(()=>{Y0=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`});var Z0,Q0=A(()=>{Z0=`

float G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {

	// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)
	return 0.25;

}

float D_BlinnPhong( const in float shininess, const in float dotNH ) {

	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );

}

vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = F_Schlick( specularColor, 1.0, dotVH );

	float G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );

	float D = D_BlinnPhong( shininess, dotNH );

	return F * ( G * D );

} // validated

`});var $0,J0=A(()=>{$0=`

#ifdef USE_IRIDESCENCE

	// XYZ to linear-sRGB color space
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);

	// Assume air interface for top
	// Note: We don't handle the case fresnel0 == 1
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {

		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );

	}

	// Conversion FO/IOR
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {

		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );

	}

	// ior is a value between 1.0 and 3.0. 1.0 is air interface
	float IorToFresnel0( float transmittedIor, float incidentIor ) {

		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));

	}

	// Fresnel equations for dielectric/dielectric interfaces.
	// Ref: https://belcour.github.io/blog/research/2017/05/01/brdf-thin-film.html
	// Evaluation XYZ sensitivity curves in Fourier space
	vec3 evalSensitivity( float OPD, vec3 shift ) {

		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );

		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;

		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;

	}

	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {

		vec3 I;

		// Force iridescenceIOR -> outsideIOR when thinFilmThickness -> 0.0
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		// Evaluate the cosTheta on the base layer (Snell law)
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );

		// Handle TIR:
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {

			return vec3( 1.0 );

		}

		float cosTheta2 = sqrt( cosTheta2Sq );

		// First interface
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;

		// Second interface
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) ); // guard against 1.0
		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;

		// Phase shift
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;

		// Compound terms
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );

		// Reflectance term for m = 0 (DC term amplitude)
		vec3 C0 = R12 + Rs;
		I = C0;

		// Reflectance term for m > 0 (pairs of diracs)
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {

			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;

		}

		// Since out of gamut colors might be produced, negative color values are clamped to 0.
		return max( I, vec3( 0.0 ) );

	}

#endif

`});var ep,tp=A(()=>{ep=`
#ifdef USE_BUMPMAP

	uniform sampler2D bumpMap;
	uniform float bumpScale;

	// Bump Mapping Unparametrized Surfaces on the GPU by Morten S. Mikkelsen
	// https://mmikk.github.io/papers3d/mm_sfgrad_bump.pdf

	// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)

	vec2 dHdxy_fwd() {

		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );

		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;

		return vec2( dBx, dBy );

	}

	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {

		// normalize is done to ensure that the bump map looks the same regardless of the texture's scale
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm; // normalized

		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );

		float fDet = dot( vSigmaX, R1 ) * faceDirection;

		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );

	}

#endif
`});var ip,rp=A(()=>{ip=`
#if NUM_CLIPPING_PLANES > 0

	vec4 plane;

	#ifdef ALPHA_TO_COVERAGE

		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;

		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {

			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );

			if ( clipOpacity == 0.0 ) discard;

		}
		#pragma unroll_loop_end

		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES

			float unionClipOpacity = 1.0;

			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {

				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );

			}
			#pragma unroll_loop_end

			clipOpacity *= 1.0 - unionClipOpacity;

		#endif

		diffuseColor.a *= clipOpacity;

		if ( diffuseColor.a == 0.0 ) discard;

	#else

		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {

			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;

		}
		#pragma unroll_loop_end

		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES

			bool clipped = true;

			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {

				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;

			}
			#pragma unroll_loop_end

			if ( clipped ) discard;

		#endif

	#endif

#endif
`});var np,sp=A(()=>{np=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`});var op,ap=A(()=>{op=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`});var lp,cp=A(()=>{lp=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`});var fp,hp=A(()=>{fp=`
#if defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#elif defined( USE_COLOR )

	diffuseColor.rgb *= vColor;

#endif
`});var dp,up=A(()=>{dp=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR )

	varying vec3 vColor;

#endif
`});var pp,mp=A(()=>{pp=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )

	varying vec3 vColor;

#endif
`});var gp,yp=A(()=>{gp=`
#if defined( USE_COLOR_ALPHA )

	vColor = vec4( 1.0 );

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )

	vColor = vec3( 1.0 );

#endif

#ifdef USE_COLOR

	vColor *= color;

#endif

#ifdef USE_INSTANCING_COLOR

	vColor.xyz *= instanceColor.xyz;

#endif

#ifdef USE_BATCHING_COLOR

	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );

	vColor.xyz *= batchingColor.xyz;

#endif
`});var Sp,vp=A(()=>{Sp=`
#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6

#ifndef saturate
// <tonemapping_pars_fragment> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )

float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }

// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.
// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand( const in vec2 uv ) {

	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );

	return fract( sin( sn ) * c );

}

#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif

struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};

struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};

#ifdef USE_ALPHAHASH

	varying vec3 vPosition;

#endif

vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

}

vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {

	// dir can be either a direction vector or a normal vector
	// upper-left 3x3 of matrix is assumed to be orthogonal

	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );

}

mat3 transposeMat3( const in mat3 m ) {

	mat3 tmp;

	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );

	return tmp;

}

bool isPerspectiveMatrix( mat4 m ) {

	return m[ 2 ][ 3 ] == - 1.0;

}

vec2 equirectUv( in vec3 dir ) {

	// dir is assumed to be unit length

	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;

	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;

	return vec2( u, v );

}

vec3 BRDF_Lambert( const in vec3 diffuseColor ) {

	return RECIPROCAL_PI * diffuseColor;

} // validated

vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated

float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated
`});var xp,Ep=A(()=>{xp=`
#ifdef ENVMAP_TYPE_CUBE_UV

	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0

	// These shader functions convert between the UV coordinates of a single face of
	// a cubemap, the 0-5 integer index of a cube face, and the direction vector for
	// sampling a textureCube (not generally normalized ).

	float getFace( vec3 direction ) {

		vec3 absDirection = abs( direction );

		float face = - 1.0;

		if ( absDirection.x > absDirection.z ) {

			if ( absDirection.x > absDirection.y )

				face = direction.x > 0.0 ? 0.0 : 3.0;

			else

				face = direction.y > 0.0 ? 1.0 : 4.0;

		} else {

			if ( absDirection.z > absDirection.y )

				face = direction.z > 0.0 ? 2.0 : 5.0;

			else

				face = direction.y > 0.0 ? 1.0 : 4.0;

		}

		return face;

	}

	// RH coordinate system; PMREM face-indexing convention
	vec2 getUV( vec3 direction, float face ) {

		vec2 uv;

		if ( face == 0.0 ) {

			uv = vec2( direction.z, direction.y ) / abs( direction.x ); // pos x

		} else if ( face == 1.0 ) {

			uv = vec2( - direction.x, - direction.z ) / abs( direction.y ); // pos y

		} else if ( face == 2.0 ) {

			uv = vec2( - direction.x, direction.y ) / abs( direction.z ); // pos z

		} else if ( face == 3.0 ) {

			uv = vec2( - direction.z, direction.y ) / abs( direction.x ); // neg x

		} else if ( face == 4.0 ) {

			uv = vec2( - direction.x, direction.z ) / abs( direction.y ); // neg y

		} else {

			uv = vec2( direction.x, direction.y ) / abs( direction.z ); // neg z

		}

		return 0.5 * ( uv + 1.0 );

	}

	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {

		float face = getFace( direction );

		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );

		mipInt = max( mipInt, cubeUV_minMipLevel );

		float faceSize = exp2( mipInt );

		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0; // #25071

		if ( face > 2.0 ) {

			uv.y += faceSize;

			face -= 3.0;

		}

		uv.x += face * faceSize;

		uv.x += filterInt * 3.0 * cubeUV_minTileSize;

		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );

		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;

		#ifdef texture2DGradEXT

			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb; // disable anisotropic filtering

		#else

			return texture2D( envMap, uv ).rgb;

		#endif

	}

	// These defines must match with PMREMGenerator

	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0

	float roughnessToMip( float roughness ) {

		float mip = 0.0;

		if ( roughness >= cubeUV_r1 ) {

			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;

		} else if ( roughness >= cubeUV_r4 ) {

			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;

		} else if ( roughness >= cubeUV_r5 ) {

			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;

		} else if ( roughness >= cubeUV_r6 ) {

			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;

		} else {

			mip = - 2.0 * log2( 1.16 * roughness ); // 1.16 = 1.79^0.25
		}

		return mip;

	}

	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {

		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );

		float mipF = fract( mip );

		float mipInt = floor( mip );

		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );

		if ( mipF == 0.0 ) {

			return vec4( color0, 1.0 );

		} else {

			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );

			return vec4( mix( color0, color1, mipF ), 1.0 );

		}

	}

#endif
`});var _p,wp=A(()=>{_p=`

vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT

	vec3 transformedTangent = objectTangent;

#endif

#ifdef USE_BATCHING

	// this is in lieu of a per-instance normal-matrix
	// shear transforms in the instance matrix are not supported

	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;

	#ifdef USE_TANGENT

		transformedTangent = bm * transformedTangent;

	#endif

#endif

#ifdef USE_INSTANCING

	// this is in lieu of a per-instance normal-matrix
	// shear transforms in the instance matrix are not supported

	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;

	#ifdef USE_TANGENT

		transformedTangent = im * transformedTangent;

	#endif

#endif

transformedNormal = normalMatrix * transformedNormal;

#ifdef FLIP_SIDED

	transformedNormal = - transformedNormal;

#endif

#ifdef USE_TANGENT

	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;

	#ifdef FLIP_SIDED

		transformedTangent = - transformedTangent;

	#endif

#endif
`});var Mp,Rp=A(()=>{Mp=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`});var bp,Cp=A(()=>{bp=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );

#endif
`});var Ap,Tp=A(()=>{Ap=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );

	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		emissiveColor = sRGBTransferEOTF( emissiveColor );

	#endif

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`});var Dp,Lp=A(()=>{Dp=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`});var Np,Ip=A(()=>{Np=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`});var Pp,kp=A(()=>{Pp=`

vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}

vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}

vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

`});var Up,Fp=A(()=>{Up=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vec3 cameraToFrag;

		if ( isOrthographic ) {

			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToFrag = normalize( vWorldPosition - cameraPosition );

		}

		// Transforming Normal Vectors with the Inverse Transformation
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vec3 reflectVec = reflect( cameraToFrag, worldNormal );

		#else

			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );

		#endif

	#else

		vec3 reflectVec = vReflect;

	#endif

	#ifdef ENVMAP_TYPE_CUBE

		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );

	#else

		vec4 envColor = vec4( 0.0 );

	#endif

	#ifdef ENVMAP_BLENDING_MULTIPLY

		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_MIX )

		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_ADD )

		outgoingLight += envColor.xyz * specularStrength * reflectivity;

	#endif

#endif
`});var Op,zp=A(()=>{Op=`
#ifdef USE_ENVMAP

	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;

	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif
`});var Bp,Gp=A(()=>{Bp=`
#ifdef USE_ENVMAP

	uniform float reflectivity;

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif

#endif
`});var Vp,Hp=A(()=>{Vp=`
#ifdef USE_ENVMAP

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;

	#else

		varying vec3 vReflect;
		uniform float refractionRatio;

	#endif

#endif
`});var Wp,Xp=A(()=>{Wp=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vWorldPosition = worldPosition.xyz;

	#else

		vec3 cameraToVertex;

		if ( isOrthographic ) {

			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );

		}

		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vReflect = reflect( cameraToVertex, worldNormal );

		#else

			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );

		#endif

	#endif

#endif
`});var qp,jp=A(()=>{qp=`
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`});var Yp,Kp=A(()=>{Yp=`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`});var Zp,Qp=A(()=>{Zp=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`});var $p,Jp=A(()=>{$p=`
#ifdef USE_FOG

	uniform vec3 fogColor;
	varying float vFogDepth;

	#ifdef FOG_EXP2

		uniform float fogDensity;

	#else

		uniform float fogNear;
		uniform float fogFar;

	#endif

#endif
`});var em,tm=A(()=>{em=`

#ifdef USE_GRADIENTMAP

	uniform sampler2D gradientMap;

#endif

vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {

	// dotNL will be from -1.0 to 1.0
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );

	#ifdef USE_GRADIENTMAP

		return vec3( texture2D( gradientMap, coord ).r );

	#else

		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );

	#endif

}
`});var im,rm=A(()=>{im=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`});var nm,sm=A(()=>{nm=`
LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;
`});var om,am=A(()=>{om=`
varying vec3 vViewPosition;

struct LambertMaterial {

	vec3 diffuseColor;
	float specularStrength;

};

void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
`});var lm,cm=A(()=>{lm=`
uniform bool receiveShadow;
uniform vec3 ambientLightColor;

#if defined( USE_LIGHT_PROBES )

	uniform vec3 lightProbe[ 9 ];

#endif

// get the irradiance (radiance convolved with cosine lobe) at the point 'normal' on the unit sphere
// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {

	// normal is assumed to have unit length

	float x = normal.x, y = normal.y, z = normal.z;

	// band 0
	vec3 result = shCoefficients[ 0 ] * 0.886227;

	// band 1
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;

	// band 2
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );

	return result;

}

vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {

	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );

	return irradiance;

}

vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {

	vec3 irradiance = ambientLightColor;

	return irradiance;

}

float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {

	// based upon Frostbite 3 Moving to Physically-based Rendering
	// page 32, equation 26: E[window1]
	// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );

	if ( cutoffDistance > 0.0 ) {

		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

	}

	return distanceFalloff;

}

float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {

	return smoothstep( coneCosine, penumbraCosine, angleCosine );

}

#if NUM_DIR_LIGHTS > 0

	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};

	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];

	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {

		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;

	}

#endif


#if NUM_POINT_LIGHTS > 0

	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};

	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {

		vec3 lVector = pointLight.position - geometryPosition;

		light.direction = normalize( lVector );

		float lightDistance = length( lVector );

		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );

	}

#endif


#if NUM_SPOT_LIGHTS > 0

	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};

	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {

		vec3 lVector = spotLight.position - geometryPosition;

		light.direction = normalize( lVector );

		float angleCos = dot( light.direction, spotLight.direction );

		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );

		if ( spotAttenuation > 0.0 ) {

			float lightDistance = length( lVector );

			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );

		} else {

			light.color = vec3( 0.0 );
			light.visible = false;

		}

	}

#endif


#if NUM_RECT_AREA_LIGHTS > 0

	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};

	// Pre-computed values of LinearTransformedCosine approximation of BRDF
	// BRDF approximation Texture is 64x64
	uniform sampler2D ltc_1; // RGBA Float
	uniform sampler2D ltc_2; // RGBA Float

	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];

#endif


#if NUM_HEMI_LIGHTS > 0

	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};

	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];

	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {

		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;

		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );

		return irradiance;

	}

#endif
`});var fm,hm=A(()=>{fm=`
#ifdef USE_ENVMAP

	vec3 getIBLIrradiance( const in vec3 normal ) {

		#ifdef ENVMAP_TYPE_CUBE_UV

			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );

			return PI * envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {

		#ifdef ENVMAP_TYPE_CUBE_UV

			vec3 reflectVec = reflect( - viewDir, normal );

			// Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );

			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );

			return envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	#ifdef USE_ANISOTROPY

		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {

			#ifdef ENVMAP_TYPE_CUBE_UV

			  // https://google.github.io/filament/Filament.md.html#lighting/imagebasedlights/anisotropy
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );

				return getIBLRadiance( viewDir, bentNormal, roughness );

			#else

				return vec3( 0.0 );

			#endif

		}

	#endif

#endif
`});var dm,um=A(()=>{dm=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`});var pm,mm=A(()=>{pm=`
varying vec3 vViewPosition;

struct ToonMaterial {

	vec3 diffuseColor;

};

void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
`});var gm,ym=A(()=>{gm=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`});var Sm,vm=A(()=>{Sm=`
varying vec3 vViewPosition;

struct BlinnPhongMaterial {

	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;

};

void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;

}

void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
`});var xm,Em=A(()=>{xm=`
PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );

vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );

material.roughness = max( roughnessFactor, 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );

#ifdef IOR

	material.ior = ior;

	#ifdef USE_SPECULAR

		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;

		#ifdef USE_SPECULAR_COLORMAP

			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;

		#endif

		#ifdef USE_SPECULAR_INTENSITYMAP

			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;

		#endif

		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );

	#else

		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;

	#endif

	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );

#else

	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;

#endif

#ifdef USE_CLEARCOAT

	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;

	#ifdef USE_CLEARCOATMAP

		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;

	#endif

	#ifdef USE_CLEARCOAT_ROUGHNESSMAP

		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;

	#endif

	material.clearcoat = saturate( material.clearcoat ); // Burley clearcoat model
	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );

#endif

#ifdef USE_DISPERSION

	material.dispersion = dispersion;

#endif

#ifdef USE_IRIDESCENCE

	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;

	#ifdef USE_IRIDESCENCEMAP

		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;

	#endif

	#ifdef USE_IRIDESCENCE_THICKNESSMAP

		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;

	#else

		material.iridescenceThickness = iridescenceThicknessMaximum;

	#endif

#endif

#ifdef USE_SHEEN

	material.sheenColor = sheenColor;

	#ifdef USE_SHEEN_COLORMAP

		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;

	#endif

	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );

	#ifdef USE_SHEEN_ROUGHNESSMAP

		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;

	#endif

#endif

#ifdef USE_ANISOTROPY

	#ifdef USE_ANISOTROPYMAP

		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;

	#else

		vec2 anisotropyV = anisotropyVector;

	#endif

	material.anisotropy = length( anisotropyV );

	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}

	// Roughness along the anisotropy bitangent is the material roughness, while the tangent roughness increases with anisotropy.
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );

	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;

#endif
`});var _m,wm=A(()=>{_m=`

struct PhysicalMaterial {

	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;

	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif

	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif

	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif

	#ifdef IOR
		float ior;
	#endif

	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif

	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif

};

// temporary
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );

vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );

    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}

// Moving Frostbite to Physically Based Rendering 3.0 - page 12, listing 2
// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {

	float a2 = pow2( alpha );

	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );

	return 0.5 / max( gv + gl, EPSILON );

}

// Microfacet Models for Refraction through Rough Surfaces - equation (33)
// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
// alpha is "roughness squared" in Disney\u2019s reparameterization
float D_GGX( const in float alpha, const in float dotNH ) {

	float a2 = pow2( alpha );

	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1

	return RECIPROCAL_PI * a2 / pow2( denom );

}

// https://google.github.io/filament/Filament.md.html#materialsystem/anisotropicmodel/anisotropicspecularbrdf
#ifdef USE_ANISOTROPY

	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {

		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );

		return saturate(v);

	}

	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {

		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;

		return RECIPROCAL_PI * a2 * pow2 ( w2 );

	}

#endif

#ifdef USE_CLEARCOAT

	// GGX Distribution, Schlick Fresnel, GGX_SmithCorrelated Visibility
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {

		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;

		float alpha = pow2( roughness ); // UE4's roughness

		vec3 halfDir = normalize( lightDir + viewDir );

		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );

		vec3 F = F_Schlick( f0, f90, dotVH );

		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );

		float D = D_GGX( alpha, dotNH );

		return F * ( V * D );

	}

#endif

vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {

	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;

	float alpha = pow2( roughness ); // UE4's roughness

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = F_Schlick( f0, f90, dotVH );

	#ifdef USE_IRIDESCENCE

		F = mix( F, material.iridescenceFresnel, material.iridescence );

	#endif

	#ifdef USE_ANISOTROPY

		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );

		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );

		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );

	#else

		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );

		float D = D_GGX( alpha, dotNH );

	#endif

	return F * ( V * D );

}

// Rect Area Light

// Real-Time Polygonal-Light Shading with Linearly Transformed Cosines
// by Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt
// code: https://github.com/selfshadow/ltc_code/

vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	float dotNV = saturate( dot( N, V ) );

	// texture parameterized by sqrt( GGX alpha ) and sqrt( 1 - cos( theta ) )
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );

	uv = uv * LUT_SCALE + LUT_BIAS;

	return uv;

}

float LTC_ClippedSphereFormFactor( const in vec3 f ) {

	// Real-Time Area Lighting: a Journey from Research to Production (p.102)
	// An approximation of the form factor of a horizon-clipped rectangle.

	float l = length( f );

	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );

}

vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {

	float x = dot( v1, v2 );

	float y = abs( x );

	// rational polynomial approximation to theta / sin( theta ) / 2PI
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;

	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;

	return cross( v1, v2 ) * theta_sintheta;

}

vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {

	// bail if point is on back side of plane of light
	// assumes ccw winding order of light vertices
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );

	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );

	// construct orthonormal basis around N
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 ); // negated from paper; possibly due to a different handedness of world coordinate system

	// compute transform
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );

	// transform rect
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );

	// project rect onto sphere
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );

	// calculate vector form factor
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );

	// adjust for horizon clipping
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );

/*
	// alternate method of adjusting for horizon clipping (see referece)
	// refactoring required
	float len = length( vectorFormFactor );
	float z = vectorFormFactor.z / len;

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	// tabulated horizon-clipped sphere, apparently...
	vec2 uv = vec2( z * 0.5 + 0.5, len );
	uv = uv * LUT_SCALE + LUT_BIAS;

	float scale = texture2D( ltc_2, uv ).w;

	float result = len * scale;
*/

	return vec3( result );

}

// End Rect Area Light

#if defined( USE_SHEEN )

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float D_Charlie( float roughness, float dotNH ) {

	float alpha = pow2( roughness );

	// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF"
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 ); // 2^(-14/2), so sin2h^2 > 0 in fp16

	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );

}

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float V_Neubelt( float dotNV, float dotNL ) {

	// Neubelt and Pettineo 2013, "Crafting a Next-gen Material Pipeline for The Order: 1886"
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );

}

vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );

	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );

	return sheenColor * ( D * V );

}

#endif

// This is a curve-fit approxmation to the "Charlie sheen" BRDF integrated over the hemisphere from 
// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF". The analysis can be found
// in the Sheen section of https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	float r2 = roughness * roughness;

	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;

	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;

	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );

	return saturate( DG * RECIPROCAL_PI );

}

// Analytical approximation of the DFG LUT, one half of the
// split-sum approximation used in indirect specular lighting.
// via 'environmentBRDF' from "Physically Based Shading on Mobile"
// https://www.unrealengine.com/blog/physically-based-shading-on-mobile
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );

	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );

	vec4 r = roughness * c0 + c1;

	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;

	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;

	return fab;

}

vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {

	vec2 fab = DFGApprox( normal, viewDir, roughness );

	return specularColor * fab.x + specularF90 * fab.y;

}

// Fdez-Ag\xFCera's "Multiple-Scattering Microfacet Model for Real-Time Image Based Lighting"
// Approximates multiscattering in order to preserve energy.
// http://www.jcgt.org/published/0008/01/03/
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif

	vec2 fab = DFGApprox( normal, viewDir, roughness );

	#ifdef USE_IRIDESCENCE

		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );

	#else

		vec3 Fr = specularColor;

	#endif

	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;

	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;

	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619; // 1/21
	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );

	singleScatter += FssEss;
	multiScatter += Fms * Ems;

}

#if NUM_RECT_AREA_LIGHTS > 0

	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;

		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight; // counterclockwise; light shines in local neg z direction
		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;

		vec2 uv = LTC_Uv( normal, viewDir, roughness );

		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );

		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);

		// LTC Fresnel Approximation by Stephen Hill
		// http://blog.selfshadow.com/publications/s2016-advances/s2016_ltc_fresnel.pdf
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );

		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );

		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );

	}

#endif

void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );

	vec3 irradiance = dotNL * directLight.color;

	#ifdef USE_CLEARCOAT

		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );

		vec3 ccIrradiance = dotNLcc * directLight.color;

		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );

	#endif

	#ifdef USE_SHEEN

		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );

	#endif

	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}

void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {

	#ifdef USE_CLEARCOAT

		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );

	#endif

	#ifdef USE_SHEEN

		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );

	#endif

	// Both indirect specular and indirect diffuse light accumulate here

	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;

	#ifdef USE_IRIDESCENCE

		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );

	#else

		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );

	#endif

	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );

	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;

	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;

}

#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical

// ref: https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {

	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );

}
`});var Mm,Rm=A(()=>{Mm=`
/**
 * This is a template that can be used to light a material, it uses pluggable
 * RenderEquations (RE)for specific lighting scenarios.
 *
 * Instructions for use:
 * - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined
 * - Create a material parameter that is to be passed as the third parameter to your lighting functions.
 *
 * TODO:
 * - Add area light support.
 * - Add sphere light support.
 * - Add diffuse light probe (irradiance cubemap) support.
 */

vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

vec3 geometryClearcoatNormal = vec3( 0.0 );

#ifdef USE_CLEARCOAT

	geometryClearcoatNormal = clearcoatNormal;

#endif

#ifdef USE_IRIDESCENCE

	float dotNVi = saturate( dot( normal, geometryViewDir ) );

	if ( material.iridescenceThickness == 0.0 ) {

		material.iridescence = 0.0;

	} else {

		material.iridescence = saturate( material.iridescence );

	}

	if ( material.iridescence > 0.0 ) {

		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );

		// Iridescence F0 approximation
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );

	}

#endif

IncidentLight directLight;

#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		pointLight = pointLights[ i ];

		getPointLightInfo( pointLight, geometryPosition, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;

	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];

		getSpotLightInfo( spotLight, geometryPosition, directLight );

		// spot lights are ordered [shadows with maps, shadows without maps, maps without shadows, none]
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif

		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif

		#undef SPOT_LIGHT_MAP_INDEX

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];

		getDirectionalLightInfo( directionalLight, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if defined( RE_IndirectDiffuse )

	vec3 iblIrradiance = vec3( 0.0 );

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	#if defined( USE_LIGHT_PROBES )

		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );

	#endif

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );

		}
		#pragma unroll_loop_end

	#endif

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`});var bm,Cm=A(()=>{bm=`
#if defined( RE_IndirectDiffuse )

	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;

		irradiance += lightMapIrradiance;

	#endif

	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )

		iblIrradiance += getIBLIrradiance( geometryNormal );

	#endif

#endif

#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )

	#ifdef USE_ANISOTROPY

		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );

	#else

		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );

	#endif

	#ifdef USE_CLEARCOAT

		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );

	#endif

#endif
`});var Am,Tm=A(()=>{Am=`
#if defined( RE_IndirectDiffuse )

	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif
`});var Dm,Lm=A(()=>{Dm=`
#if defined( USE_LOGDEPTHBUF )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`});var Nm,Im=A(()=>{Nm=`
#if defined( USE_LOGDEPTHBUF )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`});var Pm,km=A(()=>{Pm=`
#ifdef USE_LOGDEPTHBUF

	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`});var Um,Fm=A(()=>{Um=`
#ifdef USE_LOGDEPTHBUF

	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );

#endif
`});var Om,zm=A(()=>{Om=`
#ifdef USE_MAP

	vec4 sampledDiffuseColor = texture2D( map, vMapUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );

	#endif

	diffuseColor *= sampledDiffuseColor;

#endif
`});var Bm,Gm=A(()=>{Bm=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`});var Vm,Hm=A(()=>{Vm=`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

	#if defined( USE_POINTS_UV )

		vec2 uv = vUv;

	#else

		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;

	#endif

#endif

#ifdef USE_MAP

	diffuseColor *= texture2D( map, uv );

#endif

#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, uv ).g;

#endif
`});var Wm,Xm=A(()=>{Wm=`
#if defined( USE_POINTS_UV )

	varying vec2 vUv;

#else

	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

		uniform mat3 uvTransform;

	#endif

#endif

#ifdef USE_MAP

	uniform sampler2D map;

#endif

#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`});var qm,jm=A(()=>{qm=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`});var Ym,Km=A(()=>{Ym=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`});var Zm,Qm=A(()=>{Zm=`
#ifdef USE_INSTANCING_MORPH

	float morphTargetInfluences[ MORPHTARGETS_COUNT ];

	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;

	}
#endif
`});var $m,Jm=A(()=>{$m=`
#if defined( USE_MORPHCOLORS )

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	vColor *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		#if defined( USE_COLOR_ALPHA )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];

		#elif defined( USE_COLOR )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];

		#endif

	}

#endif
`});var e1,t1=A(()=>{e1=`
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	objectNormal *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`});var i1,r1=A(()=>{i1=`
#ifdef USE_MORPHTARGETS

	#ifndef USE_INSTANCING_MORPH

		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];

	#endif

	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;

	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {

		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;

		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );

	}

#endif
`});var n1,s1=A(()=>{n1=`
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	transformed *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`});var o1,a1=A(()=>{o1=`
float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;

#ifdef FLAT_SHADED

	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );

#else

	vec3 normal = normalize( vNormal );

	#ifdef DOUBLE_SIDED

		normal *= faceDirection;

	#endif

#endif

#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )

	#ifdef USE_TANGENT

		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

	#else

		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);

	#endif

	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;

	#endif

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	#ifdef USE_TANGENT

		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

	#else

		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );

	#endif

	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;

	#endif

#endif

// non perturbed normal for clearcoat among others

vec3 nonPerturbedNormal = normal;

`});var l1,c1=A(()=>{l1=`

#ifdef USE_NORMALMAP_OBJECTSPACE

	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

	#ifdef FLIP_SIDED

		normal = - normal;

	#endif

	#ifdef DOUBLE_SIDED

		normal = normal * faceDirection;

	#endif

	normal = normalize( normalMatrix * normal );

#elif defined( USE_NORMALMAP_TANGENTSPACE )

	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;

	normal = normalize( tbn * mapN );

#elif defined( USE_BUMPMAP )

	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );

#endif
`});var f1,h1=A(()=>{f1=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`});var d1,u1=A(()=>{d1=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`});var p1,m1=A(()=>{p1=`
#ifndef FLAT_SHADED // normal is computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

	#endif

#endif
`});var g1,y1=A(()=>{g1=`
#ifdef USE_NORMALMAP

	uniform sampler2D normalMap;
	uniform vec2 normalScale;

#endif

#ifdef USE_NORMALMAP_OBJECTSPACE

	uniform mat3 normalMatrix;

#endif

#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )

	// Normal Mapping Without Precomputed Tangents
	// http://www.thetenthplanet.de/archives/1180

	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {

		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );

		vec3 N = surf_norm; // normalized

		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );

		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;

		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );

		return mat3( T * scale, B * scale, N );

	}

#endif
`});var S1,v1=A(()=>{S1=`
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = nonPerturbedNormal;

#endif
`});var x1,E1=A(()=>{x1=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	clearcoatNormal = normalize( tbn2 * clearcoatMapN );

#endif
`});var _1,w1=A(()=>{_1=`

#ifdef USE_CLEARCOATMAP

	uniform sampler2D clearcoatMap;

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;

#endif

#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform sampler2D clearcoatRoughnessMap;

#endif
`});var M1,R1=A(()=>{M1=`

#ifdef USE_IRIDESCENCEMAP

	uniform sampler2D iridescenceMap;

#endif

#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform sampler2D iridescenceThicknessMap;

#endif
`});var b1,C1=A(()=>{b1=`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`});var A1,T1=A(()=>{A1=`
vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}

vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}

const float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)
const float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)
const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;

const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );

const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );

vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}

vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	// the 0.9999 tweak is unimportant, very tiny empirical improvement
	// return vec3( vuf * Inv255, gf * PackUpscale, bf * 0.9999 );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}

vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}

float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}

float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}

float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}

vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}

vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}

// NOTE: viewZ, the z-coordinate in camera space, is negative for points in front of the camera

float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	// -near maps to 0; -far maps to 1
	return ( viewZ + near ) / ( near - far );
}

float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	// maps orthographic depth in [ 0, 1 ] to viewZ
	return depth * ( near - far ) - near;
}

// NOTE: https://twitter.com/gonnavis/status/1377183786949959682

float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	// -near maps to 0; -far maps to 1
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}

float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	// maps perspective depth in [ 0, 1 ] to viewZ
	return ( near * far ) / ( ( far - near ) * depth - far );
}
`});var D1,L1=A(()=>{D1=`
#ifdef PREMULTIPLIED_ALPHA

	// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.
	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`});var N1,I1=A(()=>{N1=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_BATCHING

	mvPosition = batchingMatrix * mvPosition;

#endif

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`});var P1,k1=A(()=>{P1=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`});var U1,F1=A(()=>{U1=`
#ifdef DITHERING

	// based on https://www.shadertoy.com/view/MslGR8
	vec3 dithering( vec3 color ) {
		//Calculate grid position
		float grid_position = rand( gl_FragCoord.xy );

		//Shift the individual colors differently, thus making it even harder to see the dithering pattern
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );

		//modify shift according to grid position.
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );

		//shift the color by dither_shift
		return color + dither_shift_RGB;
	}

#endif
`});var O1,z1=A(()=>{O1=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`});var B1,G1=A(()=>{B1=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`});var V1,H1=A(()=>{V1=`
#if NUM_SPOT_LIGHT_COORDS > 0

	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];

#endif

#if NUM_SPOT_LIGHT_MAPS > 0

	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];

#endif

#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];

		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): create uniforms for area light shadows

	#endif
	*/

	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {

		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );

	}

	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {

		return unpackRGBATo2Half( texture2D( shadow, uv ) );

	}

	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){

		float occlusion = 1.0;

		vec2 distribution = texture2DDistribution( shadow, uv );

		float hard_shadow = step( compare , distribution.x ); // Hard Shadow

		if (hard_shadow != 1.0 ) {

			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance ); // Chebeyshevs inequality
			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 ); // 0.3 reduces light bleed
			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );

		}
		return occlusion;

	}

	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {

		float shadow = 1.0;

		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;

		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;

		if ( frustumTest ) {

		#if defined( SHADOWMAP_TYPE_PCF )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;

			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;

			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );

		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;

			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;

			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );

		#elif defined( SHADOWMAP_TYPE_VSM )

			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );

		#else // no percentage-closer filtering:

			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );

		#endif

		}

		return mix( 1.0, shadow, shadowIntensity );

	}

	// cubeToUV() maps a 3D direction vector suitable for cube texture mapping to a 2D
	// vector suitable for 2D texture mapping. This code uses the following layout for the
	// 2D texture:
	//
	// xzXZ
	//  y Y
	//
	// Y - Positive y direction
	// y - Negative y direction
	// X - Positive x direction
	// x - Negative x direction
	// Z - Positive z direction
	// z - Negative z direction
	//
	// Source and test bed:
	// https://gist.github.com/tschw/da10c43c467ce8afd0c4

	vec2 cubeToUV( vec3 v, float texelSizeY ) {

		// Number of texels to avoid at the edge of each square

		vec3 absV = abs( v );

		// Intersect unit cube

		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;

		// Apply scale to avoid seams

		// two texels less per square (one texel will do for NEAREST)
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );

		// Unwrap

		// space: -1 ... 1 range for each square
		//
		// #X##		dim    := ( 4 , 2 )
		//  # #		center := ( 1 , 1 )

		vec2 planar = v.xy;

		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;

		if ( absV.z >= almostOne ) {

			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;

		} else if ( absV.x >= almostOne ) {

			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;

		} else if ( absV.y >= almostOne ) {

			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;

		}

		// Transform to UV space

		// scale := 0.5 / dim
		// translate := ( center + 0.5 ) / dim
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );

	}

	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {

		float shadow = 1.0;

		// for point lights, the uniform @vShadowCoord is re-purposed to hold
		// the vector from the light to the world-space position of the fragment.
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );

		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {

			// dp = normalized distance from light to fragment position
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear ); // need to clamp?
			dp += shadowBias;

			// bd3D = base direction 3D
			vec3 bd3D = normalize( lightToPosition );

			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );

			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )

				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;

				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );

			#else // no percentage-closer filtering

				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );

			#endif

		}

		return mix( 1.0, shadow, shadowIntensity );

	}

#endif
`});var W1,X1=A(()=>{W1=`

#if NUM_SPOT_LIGHT_COORDS > 0

	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];

#endif

#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): uniforms for area light shadows

	#endif
	*/

#endif
`});var q1,j1=A(()=>{q1=`

#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )

	// Offsetting the position used for querying occlusion along the world normal can be used to reduce shadow acne.
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;

#endif

#if defined( USE_SHADOWMAP )

	#if NUM_DIR_LIGHT_SHADOWS > 0

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;

		}
		#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;

		}
		#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update vAreaShadowCoord with area light info

	#endif
	*/

#endif

// spot lights can be evaluated without active shadow mapping (when SpotLight.map is used)

#if NUM_SPOT_LIGHT_COORDS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {

		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;

	}
	#pragma unroll_loop_end

#endif


`});var Y1,K1=A(()=>{Y1=`
float getShadowMask() {

	float shadow = 1.0;

	#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

	DirectionalLightShadow directionalLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

	SpotLightShadow spotLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {

		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

	PointLightShadow pointLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update shadow for Area light

	#endif
	*/

	#endif

	return shadow;

}
`});var Z1,Q1=A(()=>{Z1=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`});var $1,J1=A(()=>{$1=`
#ifdef USE_SKINNING

	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;

	uniform highp sampler2D boneTexture;

	mat4 getBoneMatrix( const in float i ) {

		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );

		return mat4( v1, v2, v3, v4 );

	}

#endif
`});var eg,tg=A(()=>{eg=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`});var ig,rg=A(()=>{ig=`
#ifdef USE_SKINNING

	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;

	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;

	#ifdef USE_TANGENT

		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;

	#endif

#endif
`});var ng,sg=A(()=>{ng=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`});var og,ag=A(()=>{og=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`});var lg,cg=A(()=>{lg=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`});var fg,hg=A(()=>{fg=`
#ifndef saturate
// <common> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif

uniform float toneMappingExposure;

// exposure only
vec3 LinearToneMapping( vec3 color ) {

	return saturate( toneMappingExposure * color );

}

// source: https://www.cs.utah.edu/docs/techreports/2002/pdf/UUCS-02-001.pdf
vec3 ReinhardToneMapping( vec3 color ) {

	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );

}

// source: http://filmicworlds.com/blog/filmic-tonemapping-operators/
vec3 CineonToneMapping( vec3 color ) {

	// filmic operator by Jim Hejl and Richard Burgess-Dawson
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );

}

// source: https://github.com/selfshadow/ltc_code/blob/master/webgl/shaders/ltc/ltc_blit.fs
vec3 RRTAndODTFit( vec3 v ) {

	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;

}

// this implementation of ACES is modified to accommodate a brighter viewing environment.
// the scale factor of 1/0.6 is subjective. see discussion in #19621.

vec3 ACESFilmicToneMapping( vec3 color ) {

	// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ), // transposed from source
		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);

	// ODT_SAT => XYZ => D60_2_D65 => sRGB
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ), // transposed from source
		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);

	color *= toneMappingExposure / 0.6;

	color = ACESInputMat * color;

	// Apply RRT and ODT
	color = RRTAndODTFit( color );

	color = ACESOutputMat * color;

	// Clamp to [0, 1]
	return saturate( color );

}

// Matrices for rec 2020 <> rec 709 color space conversion
// matrix provided in row-major order so it has been transposed
// https://www.itu.int/pub/R-REP-BT.2407-2017
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);

const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);

// https://iolite-engine.com/blog_posts/minimal_agx_implementation
// Mean error^2: 3.6705141e-06
vec3 agxDefaultContrastApprox( vec3 x ) {

	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;

	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;

}

// AgX Tone Mapping implementation based on Filament, which in turn is based
// on Blender's implementation using rec 2020 primaries
// https://github.com/google/filament/pull/7236
// Inputs and outputs are encoded as Linear-sRGB.

vec3 AgXToneMapping( vec3 color ) {

	// AgX constants
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);

	// explicit AgXOutsetMatrix generated from Filaments AgXOutsetMatrixInv
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);

	// LOG2_MIN      = -10.0
	// LOG2_MAX      =  +6.5
	// MIDDLE_GRAY   =  0.18
	const float AgxMinEv = - 12.47393;  // log2( pow( 2, LOG2_MIN ) * MIDDLE_GRAY )
	const float AgxMaxEv = 4.026069;    // log2( pow( 2, LOG2_MAX ) * MIDDLE_GRAY )

	color *= toneMappingExposure;

	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;

	color = AgXInsetMatrix * color;

	// Log2 encoding
	color = max( color, 1e-10 ); // avoid 0 or negative numbers for log2
	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );

	color = clamp( color, 0.0, 1.0 );

	// Apply sigmoid
	color = agxDefaultContrastApprox( color );

	// Apply AgX look
	// v = agxLook(v, look);

	color = AgXOutsetMatrix * color;

	// Linearize
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );

	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;

	// Gamut mapping. Simple clamp for now.
	color = clamp( color, 0.0, 1.0 );

	return color;

}

// https://modelviewer.dev/examples/tone-mapping

vec3 NeutralToneMapping( vec3 color ) {

	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;

	color *= toneMappingExposure;

	float x = min( color.r, min( color.g, color.b ) );

	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;

	color -= offset;

	float peak = max( color.r, max( color.g, color.b ) );

	if ( peak < StartCompression ) return color;

	float d = 1. - StartCompression;

	float newPeak = 1. - d * d / ( peak + d - StartCompression );

	color *= newPeak / peak;

	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );

	return mix( color, vec3( newPeak ), g );

}

vec3 CustomToneMapping( vec3 color ) { return color; }
`});var dg,ug=A(()=>{dg=`
#ifdef USE_TRANSMISSION

	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;

	#ifdef USE_TRANSMISSIONMAP

		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;

	#endif

	#ifdef USE_THICKNESSMAP

		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;

	#endif

	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );

	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );

	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );

	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );

#endif
`});var pg,mg=A(()=>{pg=`
#ifdef USE_TRANSMISSION

	// Transmission code is based on glTF-Sampler-Viewer
	// https://github.com/KhronosGroup/glTF-Sample-Viewer

	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;

	#ifdef USE_TRANSMISSIONMAP

		uniform sampler2D transmissionMap;

	#endif

	#ifdef USE_THICKNESSMAP

		uniform sampler2D thicknessMap;

	#endif

	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;

	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;

	varying vec3 vWorldPosition;

	// Mipped Bicubic Texture Filtering by N8
	// https://www.shadertoy.com/view/Dl2SDW

	float w0( float a ) {

		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );

	}

	float w1( float a ) {

		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );

	}

	float w2( float a ){

		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );

	}

	float w3( float a ) {

		return ( 1.0 / 6.0 ) * ( a * a * a );

	}

	// g0 and g1 are the two amplitude functions
	float g0( float a ) {

		return w0( a ) + w1( a );

	}

	float g1( float a ) {

		return w2( a ) + w3( a );

	}

	// h0 and h1 are the two offset functions
	float h0( float a ) {

		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );

	}

	float h1( float a ) {

		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );

	}

	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {

		uv = uv * texelSize.zw + 0.5;

		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );

		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );

		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;

		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );

	}

	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {

		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );

	}

	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {

		// Direction of refracted light.
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );

		// Compute rotation-independant scaling of the model matrix.
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );

		// The thickness is specified in local space.
		return normalize( refractionVector ) * thickness * modelScale;

	}

	float applyIorToRoughness( const in float roughness, const in float ior ) {

		// Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
		// an IOR of 1.5 results in the default amount of microfacet refraction.
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );

	}

	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {

		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );

	}

	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {

		if ( isinf( attenuationDistance ) ) {

			// Attenuation distance is +\u221E, i.e. the transmitted color is not attenuated at all.
			return vec3( 1.0 );

		} else {

			// Compute light attenuation using Beer's law.
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law
			return transmittance;

		}

	}

	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {

		vec4 transmittedLight;
		vec3 transmittance;

		#ifdef USE_DISPERSION

			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );

			for ( int i = 0; i < 3; i ++ ) {

				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				// Sample framebuffer to get pixel the refracted ray hits.
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;

				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];

			}

			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;

			// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;

			// Sample framebuffer to get pixel the refracted ray hits.
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif

		vec3 attenuatedColor = transmittance * transmittedLight.rgb;

		// Get the specular component.
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );

		// As less light is transmitted, the opacity should be increased. This simple approximation does a decent job 
		// of modulating a CSS background, and has no effect when the buffer is opaque, due to a solid object or clear color.
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;

		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );

	}
#endif
`});var gg,yg=A(()=>{gg=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	varying vec2 vUv;

#endif
#ifdef USE_MAP

	varying vec2 vMapUv;

#endif
#ifdef USE_ALPHAMAP

	varying vec2 vAlphaMapUv;

#endif
#ifdef USE_LIGHTMAP

	varying vec2 vLightMapUv;

#endif
#ifdef USE_AOMAP

	varying vec2 vAoMapUv;

#endif
#ifdef USE_BUMPMAP

	varying vec2 vBumpMapUv;

#endif
#ifdef USE_NORMALMAP

	varying vec2 vNormalMapUv;

#endif
#ifdef USE_EMISSIVEMAP

	varying vec2 vEmissiveMapUv;

#endif
#ifdef USE_METALNESSMAP

	varying vec2 vMetalnessMapUv;

#endif
#ifdef USE_ROUGHNESSMAP

	varying vec2 vRoughnessMapUv;

#endif
#ifdef USE_ANISOTROPYMAP

	varying vec2 vAnisotropyMapUv;

#endif
#ifdef USE_CLEARCOATMAP

	varying vec2 vClearcoatMapUv;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	varying vec2 vClearcoatNormalMapUv;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	varying vec2 vClearcoatRoughnessMapUv;

#endif
#ifdef USE_IRIDESCENCEMAP

	varying vec2 vIridescenceMapUv;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	varying vec2 vIridescenceThicknessMapUv;

#endif
#ifdef USE_SHEEN_COLORMAP

	varying vec2 vSheenColorMapUv;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	varying vec2 vSheenRoughnessMapUv;

#endif
#ifdef USE_SPECULARMAP

	varying vec2 vSpecularMapUv;

#endif
#ifdef USE_SPECULAR_COLORMAP

	varying vec2 vSpecularColorMapUv;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	varying vec2 vSpecularIntensityMapUv;

#endif
#ifdef USE_TRANSMISSIONMAP

	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;

#endif
#ifdef USE_THICKNESSMAP

	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;

#endif
`});var Sg,vg=A(()=>{Sg=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	varying vec2 vUv;

#endif
#ifdef USE_MAP

	uniform mat3 mapTransform;
	varying vec2 vMapUv;

#endif
#ifdef USE_ALPHAMAP

	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;

#endif
#ifdef USE_LIGHTMAP

	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;

#endif
#ifdef USE_AOMAP

	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;

#endif
#ifdef USE_BUMPMAP

	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;

#endif
#ifdef USE_NORMALMAP

	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;

#endif
#ifdef USE_DISPLACEMENTMAP

	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;

#endif
#ifdef USE_EMISSIVEMAP

	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;

#endif
#ifdef USE_METALNESSMAP

	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;

#endif
#ifdef USE_ROUGHNESSMAP

	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;

#endif
#ifdef USE_ANISOTROPYMAP

	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;

#endif
#ifdef USE_CLEARCOATMAP

	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;

#endif
#ifdef USE_SHEEN_COLORMAP

	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;

#endif
#ifdef USE_IRIDESCENCEMAP

	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;

#endif
#ifdef USE_SPECULARMAP

	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;

#endif
#ifdef USE_SPECULAR_COLORMAP

	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;

#endif
#ifdef USE_TRANSMISSIONMAP

	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;

#endif
#ifdef USE_THICKNESSMAP

	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;

#endif
`});var xg,Eg=A(()=>{xg=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	vUv = vec3( uv, 1 ).xy;

#endif
#ifdef USE_MAP

	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;

#endif
#ifdef USE_ALPHAMAP

	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_LIGHTMAP

	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_AOMAP

	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_BUMPMAP

	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_NORMALMAP

	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_DISPLACEMENTMAP

	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_EMISSIVEMAP

	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_METALNESSMAP

	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_ROUGHNESSMAP

	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_ANISOTROPYMAP

	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOATMAP

	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_IRIDESCENCEMAP

	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SHEEN_COLORMAP

	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULARMAP

	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULAR_COLORMAP

	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_TRANSMISSIONMAP

	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_THICKNESSMAP

	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;

#endif
`});var _g,wg=A(()=>{_g=`
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0

	vec4 worldPosition = vec4( transformed, 1.0 );

	#ifdef USE_BATCHING

		worldPosition = batchingMatrix * worldPosition;

	#endif

	#ifdef USE_INSTANCING

		worldPosition = instanceMatrix * worldPosition;

	#endif

	worldPosition = modelMatrix * worldPosition;

#endif
`});var Mg,Rg,bg=A(()=>{Mg=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,Rg=`
uniform sampler2D t2D;
uniform float backgroundIntensity;

varying vec2 vUv;

void main() {

	vec4 texColor = texture2D( t2D, vUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_APLHA8 with video textures

		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );

	#endif

	texColor.rgb *= backgroundIntensity;

	gl_FragColor = texColor;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`});var Cg,Ag,Tg=A(()=>{Cg=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,Ag=`

#ifdef ENVMAP_TYPE_CUBE

	uniform samplerCube envMap;

#elif defined( ENVMAP_TYPE_CUBE_UV )

	uniform sampler2D envMap;

#endif

uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;

varying vec3 vWorldDirection;

#include <cube_uv_reflection_fragment>

void main() {

	#ifdef ENVMAP_TYPE_CUBE

		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );

	#elif defined( ENVMAP_TYPE_CUBE_UV )

		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );

	#else

		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );

	#endif

	texColor.rgb *= backgroundIntensity;

	gl_FragColor = texColor;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`});var Dg,Lg,Ng=A(()=>{Dg=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,Lg=`
uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;

varying vec3 vWorldDirection;

void main() {

	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );

	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`});var Ig,Pg,kg=A(()=>{Ig=`
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

// This is used for computing an equivalent of gl_FragCoord.z that is as high precision as possible.
// Some platforms compute gl_FragCoord at a lower precision which makes the manually computed value better for
// depth-based postprocessing effects. Reproduced on iPad with A10 processor / iPadOS 13.3.1.
varying vec2 vHighPrecisionZW;

void main() {

	#include <uv_vertex>

	#include <batching_vertex>
	#include <skinbase_vertex>

	#include <morphinstance_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vHighPrecisionZW = gl_Position.zw;

}
`,Pg=`
#if DEPTH_PACKING == 3200

	uniform float opacity;

#endif

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

varying vec2 vHighPrecisionZW;

void main() {

	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>

	#if DEPTH_PACKING == 3200

		diffuseColor.a = opacity;

	#endif

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	#include <logdepthbuf_fragment>

	// Higher precision equivalent of gl_FragCoord.z. This assumes depthRange has been left to its default values.
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;

	#if DEPTH_PACKING == 3200

		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );

	#elif DEPTH_PACKING == 3201

		gl_FragColor = packDepthToRGBA( fragCoordZ );

	#elif DEPTH_PACKING == 3202

		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );

	#elif DEPTH_PACKING == 3203

		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );

	#endif

}
`});var Ug,Fg,Og=A(()=>{Ug=`
#define DISTANCE

varying vec3 vWorldPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <batching_vertex>
	#include <skinbase_vertex>

	#include <morphinstance_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>

	vWorldPosition = worldPosition.xyz;

}
`,Fg=`
#define DISTANCE

uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>

void main () {

	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist ); // clamp to [ 0, 1 ]

	gl_FragColor = packDepthToRGBA( dist );

}
`});var zg,Bg,Gg=A(()=>{zg=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,Bg=`
uniform sampler2D tEquirect;

varying vec3 vWorldDirection;

#include <common>

void main() {

	vec3 direction = normalize( vWorldDirection );

	vec2 sampleUV = equirectUv( direction );

	gl_FragColor = texture2D( tEquirect, sampleUV );

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`});var Vg,Hg,Wg=A(()=>{Vg=`
uniform float scale;
attribute float lineDistance;

varying float vLineDistance;

#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	vLineDistance = scale * lineDistance;

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,Hg=`
uniform vec3 diffuse;
uniform float opacity;

uniform float dashSize;
uniform float totalSize;

varying float vLineDistance;

#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	if ( mod( vLineDistance, totalSize ) > dashSize ) {

		discard;

	}

	vec3 outgoingLight = vec3( 0.0 );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>

	outgoingLight = diffuseColor.rgb; // simple shader

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`});var Xg,qg,jg=A(()=>{Xg=`
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>

}
`,qg=`
uniform vec3 diffuse;
uniform float opacity;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );

	// accumulation (baked indirect lighting only)
	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;

	#else

		reflectedLight.indirectDiffuse += vec3( 1.0 );

	#endif

	// modulation
	#include <aomap_fragment>

	reflectedLight.indirectDiffuse *= diffuseColor.rgb;

	vec3 outgoingLight = reflectedLight.indirectDiffuse;

	#include <envmap_fragment>

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`});var Yg,Kg,Zg=A(()=>{Yg=`
#define LAMBERT

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,Kg=`
#define LAMBERT

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`});var Qg,$g,Jg=A(()=>{Qg=`
#define MATCAP

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>

#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

	vViewPosition = - mvPosition.xyz;

}
`,$g=`
#define MATCAP

uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;

varying vec3 vViewPosition;

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks

	#ifdef USE_MATCAP

		vec4 matcapColor = texture2D( matcap, uv );

	#else

		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 ); // default if matcap is missing

	#endif

	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`});var e2,t2,i2=A(()=>{e2=`
#define NORMAL

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

	varying vec3 vViewPosition;

#endif

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

	vViewPosition = - mvPosition.xyz;

#endif

}
`,t2=`
#define NORMAL

uniform float opacity;

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

	varying vec3 vViewPosition;

#endif

#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );

	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );

	#ifdef OPAQUE

		gl_FragColor.a = 1.0;

	#endif

}
`});var r2,n2,s2=A(()=>{r2=`
#define PHONG

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,n2=`
#define PHONG

uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`});var o2,a2,l2=A(()=>{o2=`
#define STANDARD

varying vec3 vViewPosition;

#ifdef USE_TRANSMISSION

	varying vec3 vWorldPosition;

#endif

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

#ifdef USE_TRANSMISSION

	vWorldPosition = worldPosition.xyz;

#endif
}
`,a2=`
#define STANDARD

#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef IOR
	uniform float ior;
#endif

#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;

	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif

	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif

#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif

#ifdef USE_DISPERSION
	uniform float dispersion;
#endif

#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif

#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;

	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif

	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif

#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;

	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif

varying vec3 vViewPosition;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;

	#include <transmission_fragment>

	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;

	#ifdef USE_SHEEN

		// Sheen energy compensation approximation calculation can be found at the end of
		// https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );

		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;

	#endif

	#ifdef USE_CLEARCOAT

		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );

		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );

		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;

	#endif

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`});var c2,f2,h2=A(()=>{c2=`
#define TOON

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,f2=`
#define TOON

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`});var d2,u2,p2=A(()=>{d2=`
uniform float size;
uniform float scale;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

#ifdef USE_POINTS_UV

	varying vec2 vUv;
	uniform mat3 uvTransform;

#endif

void main() {

	#ifdef USE_POINTS_UV

		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	#endif

	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>

	gl_PointSize = size;

	#ifdef USE_SIZEATTENUATION

		bool isPerspective = isPerspectiveMatrix( projectionMatrix );

		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );

	#endif

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>

}
`,u2=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );

	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`});var m2,g2,y2=A(()=>{m2=`
#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>

void main() {

	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,g2=`
uniform vec3 color;
uniform float opacity;

#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>

void main() {

	#include <logdepthbuf_fragment>

	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );

	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>

}
`});var S2,v2,x2=A(()=>{S2=`
uniform float rotation;
uniform vec2 center;

#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	vec4 mvPosition = modelViewMatrix[ 3 ];

	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );

	#ifndef USE_SIZEATTENUATION

		bool isPerspective = isPerspectiveMatrix( projectionMatrix );

		if ( isPerspective ) scale *= - mvPosition.z;

	#endif

	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;

	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;

	mvPosition.xy += rotatedPosition;

	gl_Position = projectionMatrix * mvPosition;

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,v2=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>

}
`});var Be,Nf=A(()=>{C0();T0();L0();I0();k0();F0();z0();G0();H0();X0();j0();K0();Q0();J0();tp();rp();sp();ap();cp();hp();up();mp();yp();vp();Ep();wp();Rp();Cp();Tp();Lp();Ip();kp();Fp();zp();Gp();Hp();Xp();jp();Kp();Qp();Jp();tm();rm();sm();am();cm();hm();um();mm();ym();vm();Em();wm();Rm();Cm();Tm();Lm();Im();km();Fm();zm();Gm();Hm();Xm();jm();Km();Qm();Jm();t1();r1();s1();a1();c1();h1();u1();m1();y1();v1();E1();w1();R1();C1();T1();L1();I1();k1();F1();z1();G1();H1();X1();j1();K1();Q1();J1();tg();rg();sg();ag();cg();hg();ug();mg();yg();vg();Eg();wg();bg();Tg();Ng();kg();Og();Gg();Wg();jg();Zg();Jg();i2();s2();l2();h2();p2();y2();x2();Be={alphahash_fragment:b0,alphahash_pars_fragment:A0,alphamap_fragment:D0,alphamap_pars_fragment:N0,alphatest_fragment:P0,alphatest_pars_fragment:U0,aomap_fragment:O0,aomap_pars_fragment:B0,batching_pars_vertex:V0,batching_vertex:W0,begin_vertex:q0,beginnormal_vertex:Y0,bsdfs:Z0,iridescence_fragment:$0,bumpmap_pars_fragment:ep,clipping_planes_fragment:ip,clipping_planes_pars_fragment:np,clipping_planes_pars_vertex:op,clipping_planes_vertex:lp,color_fragment:fp,color_pars_fragment:dp,color_pars_vertex:pp,color_vertex:gp,common:Sp,cube_uv_reflection_fragment:xp,defaultnormal_vertex:_p,displacementmap_pars_vertex:Mp,displacementmap_vertex:bp,emissivemap_fragment:Ap,emissivemap_pars_fragment:Dp,colorspace_fragment:Np,colorspace_pars_fragment:Pp,envmap_fragment:Up,envmap_common_pars_fragment:Op,envmap_pars_fragment:Bp,envmap_pars_vertex:Vp,envmap_physical_pars_fragment:fm,envmap_vertex:Wp,fog_vertex:qp,fog_pars_vertex:Yp,fog_fragment:Zp,fog_pars_fragment:$p,gradientmap_pars_fragment:em,lightmap_pars_fragment:im,lights_lambert_fragment:nm,lights_lambert_pars_fragment:om,lights_pars_begin:lm,lights_toon_fragment:dm,lights_toon_pars_fragment:pm,lights_phong_fragment:gm,lights_phong_pars_fragment:Sm,lights_physical_fragment:xm,lights_physical_pars_fragment:_m,lights_fragment_begin:Mm,lights_fragment_maps:bm,lights_fragment_end:Am,logdepthbuf_fragment:Dm,logdepthbuf_pars_fragment:Nm,logdepthbuf_pars_vertex:Pm,logdepthbuf_vertex:Um,map_fragment:Om,map_pars_fragment:Bm,map_particle_fragment:Vm,map_particle_pars_fragment:Wm,metalnessmap_fragment:qm,metalnessmap_pars_fragment:Ym,morphinstance_vertex:Zm,morphcolor_vertex:$m,morphnormal_vertex:e1,morphtarget_pars_vertex:i1,morphtarget_vertex:n1,normal_fragment_begin:o1,normal_fragment_maps:l1,normal_pars_fragment:f1,normal_pars_vertex:d1,normal_vertex:p1,normalmap_pars_fragment:g1,clearcoat_normal_fragment_begin:S1,clearcoat_normal_fragment_maps:x1,clearcoat_pars_fragment:_1,iridescence_pars_fragment:M1,opaque_fragment:b1,packing:A1,premultiplied_alpha_fragment:D1,project_vertex:N1,dithering_fragment:P1,dithering_pars_fragment:U1,roughnessmap_fragment:O1,roughnessmap_pars_fragment:B1,shadowmap_pars_fragment:V1,shadowmap_pars_vertex:W1,shadowmap_vertex:q1,shadowmask_pars_fragment:Y1,skinbase_vertex:Z1,skinning_pars_vertex:$1,skinning_vertex:eg,skinnormal_vertex:ig,specularmap_fragment:ng,specularmap_pars_fragment:og,tonemapping_fragment:lg,tonemapping_pars_fragment:fg,transmission_fragment:dg,transmission_pars_fragment:pg,uv_pars_fragment:gg,uv_pars_vertex:Sg,uv_vertex:xg,worldpos_vertex:_g,background_vert:Mg,background_frag:Rg,backgroundCube_vert:Cg,backgroundCube_frag:Ag,cube_vert:Dg,cube_frag:Lg,depth_vert:Ig,depth_frag:Pg,distanceRGBA_vert:Ug,distanceRGBA_frag:Fg,equirect_vert:zg,equirect_frag:Bg,linedashed_vert:Vg,linedashed_frag:Hg,meshbasic_vert:Xg,meshbasic_frag:qg,meshlambert_vert:Yg,meshlambert_frag:Kg,meshmatcap_vert:Qg,meshmatcap_frag:$g,meshnormal_vert:e2,meshnormal_frag:t2,meshphong_vert:r2,meshphong_frag:n2,meshphysical_vert:o2,meshphysical_frag:a2,meshtoon_vert:c2,meshtoon_frag:f2,points_vert:d2,points_frag:u2,shadow_vert:m2,shadow_frag:g2,sprite_vert:S2,sprite_frag:v2}});var fe,If=A(()=>{Pi();ai();fr();fe={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}}});var ki,Pf=A(()=>{Nf();Pn();ai();xt();If();Pi();fr();ki={basic:{uniforms:ei([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:ei([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:ei([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:ei([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:ei([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:ei([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:ei([fe.points,fe.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:ei([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:ei([fe.common,fe.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:ei([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:ei([fe.sprite,fe.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:ei([fe.common,fe.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:ei([fe.lights,fe.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};ki.physical={uniforms:ei([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag}});function E2(t,e,i,r,n,s,o){let a=new Ie(0),l=s===!0?0:1,c,f,h=null,u=0,p=null;function d(w){let M=w.isScene===!0?w.background:null;return M&&M.isTexture&&(M=(w.backgroundBlurriness>0?i:e).get(M)),M}function y(w){let M=!1,x=d(w);x===null?m(a,l):x&&x.isColor&&(m(x,1),M=!0);let P=t.xr.getEnvironmentBlendMode();P==="additive"?r.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,o),(t.autoClear||M)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(w,M){let x=d(M);x&&(x.isCubeTexture||x.mapping===jr)?(f===void 0&&(f=new Mt(new hr(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:Ir(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:nt,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(P,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(f)),kn.copy(M.backgroundRotation),kn.x*=-1,kn.y*=-1,kn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(kn.y*=-1,kn.z*=-1),f.material.uniforms.envMap.value=x,f.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(HE.makeRotationFromEuler(kn)),f.material.toneMapped=He.getTransfer(x.colorSpace)!==$e,(h!==x||u!==x.version||p!==t.toneMapping)&&(f.material.needsUpdate=!0,h=x,u=x.version,p=t.toneMapping),f.layers.enableAll(),w.unshift(f,f.geometry,f.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Mt(new Is(2,2),new li({name:"BackgroundMaterial",uniforms:Ir(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=He.getTransfer(x.colorSpace)!==$e,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||u!==x.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=x,u=x.version,p=t.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function m(w,M){w.getRGB(Tl,Al(t)),r.buffers.color.setClear(Tl.r,Tl.g,Tl.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(w,M=1){a.set(w),l=M,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,m(a,l)},render:y,addToRenderList:g}}var Tl,kn,HE,_2=A(()=>{je();Jo();Lf();Ps();Pi();dr();$r();Ni();ln();Pf();Pn();Tl={r:0,b:0,g:0},kn=new wt,HE=new Ye});function w2(t,e){let i=t.getParameter(t.MAX_VERTEX_ATTRIBS),r={},n=u(null),s=n,o=!1;function a(v,D,U,I,V){let q=!1,H=h(I,U,D);s!==H&&(s=H,c(s.object)),q=p(v,I,U,V),q&&d(v,I,U,V),V!==null&&e.update(V,t.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,x(v,D,U,I),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return t.createVertexArray()}function c(v){return t.bindVertexArray(v)}function f(v){return t.deleteVertexArray(v)}function h(v,D,U){let I=U.wireframe===!0,V=r[v.id];V===void 0&&(V={},r[v.id]=V);let q=V[D.id];q===void 0&&(q={},V[D.id]=q);let H=q[I];return H===void 0&&(H=u(l()),q[I]=H),H}function u(v){let D=[],U=[],I=[];for(let V=0;V<i;V++)D[V]=0,U[V]=0,I[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:U,attributeDivisors:I,object:v,attributes:{},index:null}}function p(v,D,U,I){let V=s.attributes,q=D.attributes,H=0,Z=U.getAttributes();for(let G in Z)if(Z[G].location>=0){let ne=V[G],Se=q[G];if(Se===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(Se=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(Se=v.instanceColor)),ne===void 0||ne.attribute!==Se||Se&&ne.data!==Se.data)return!0;H++}return s.attributesNum!==H||s.index!==I}function d(v,D,U,I){let V={},q=D.attributes,H=0,Z=U.getAttributes();for(let G in Z)if(Z[G].location>=0){let ne=q[G];ne===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(ne=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(ne=v.instanceColor));let Se={};Se.attribute=ne,ne&&ne.data&&(Se.data=ne.data),V[G]=Se,H++}s.attributes=V,s.attributesNum=H,s.index=I}function y(){let v=s.newAttributes;for(let D=0,U=v.length;D<U;D++)v[D]=0}function g(v){m(v,0)}function m(v,D){let U=s.newAttributes,I=s.enabledAttributes,V=s.attributeDivisors;U[v]=1,I[v]===0&&(t.enableVertexAttribArray(v),I[v]=1),V[v]!==D&&(t.vertexAttribDivisor(v,D),V[v]=D)}function w(){let v=s.newAttributes,D=s.enabledAttributes;for(let U=0,I=D.length;U<I;U++)D[U]!==v[U]&&(t.disableVertexAttribArray(U),D[U]=0)}function M(v,D,U,I,V,q,H){H===!0?t.vertexAttribIPointer(v,D,U,V,q):t.vertexAttribPointer(v,D,U,I,V,q)}function x(v,D,U,I){y();let V=I.attributes,q=U.getAttributes(),H=D.defaultAttributeValues;for(let Z in q){let G=q[Z];if(G.location>=0){let $=V[Z];if($===void 0&&(Z==="instanceMatrix"&&v.instanceMatrix&&($=v.instanceMatrix),Z==="instanceColor"&&v.instanceColor&&($=v.instanceColor)),$!==void 0){let ne=$.normalized,Se=$.itemSize,Ce=e.get($);if(Ce===void 0)continue;let Oe=Ce.buffer,Y=Ce.type,re=Ce.bytesPerElement,le=Y===t.INT||Y===t.UNSIGNED_INT||$.gpuType===rs;if($.isInterleavedBufferAttribute){let ce=$.data,_e=ce.stride,O=$.offset;if(ce.isInstancedInterleavedBuffer){for(let te=0;te<G.locationSize;te++)m(G.location+te,ce.meshPerAttribute);v.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let te=0;te<G.locationSize;te++)g(G.location+te);t.bindBuffer(t.ARRAY_BUFFER,Oe);for(let te=0;te<G.locationSize;te++)M(G.location+te,Se/G.locationSize,Y,ne,_e*re,(O+Se/G.locationSize*te)*re,le)}else{if($.isInstancedBufferAttribute){for(let ce=0;ce<G.locationSize;ce++)m(G.location+ce,$.meshPerAttribute);v.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ce=0;ce<G.locationSize;ce++)g(G.location+ce);t.bindBuffer(t.ARRAY_BUFFER,Oe);for(let ce=0;ce<G.locationSize;ce++)M(G.location+ce,Se/G.locationSize,Y,ne,Se*re,Se/G.locationSize*ce*re,le)}}else if(H!==void 0){let ne=H[Z];if(ne!==void 0)switch(ne.length){case 2:t.vertexAttrib2fv(G.location,ne);break;case 3:t.vertexAttrib3fv(G.location,ne);break;case 4:t.vertexAttrib4fv(G.location,ne);break;default:t.vertexAttrib1fv(G.location,ne)}}}}w()}function P(){L();for(let v in r){let D=r[v];for(let U in D){let I=D[U];for(let V in I)f(I[V].object),delete I[V];delete D[U]}delete r[v]}}function T(v){if(r[v.id]===void 0)return;let D=r[v.id];for(let U in D){let I=D[U];for(let V in I)f(I[V].object),delete I[V];delete D[U]}delete r[v.id]}function C(v){for(let D in r){let U=r[D];if(U[v.id]===void 0)continue;let I=U[v.id];for(let V in I)f(I[V].object),delete I[V];delete U[v.id]}}function L(){S(),o=!0,s!==n&&(s=n,c(s.object))}function S(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:L,resetDefaultState:S,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:g,disableUnusedAttributes:w}}var M2=A(()=>{je()});function R2(t,e,i){let r;function n(c){r=c}function s(c,f){t.drawArrays(r,c,f),i.update(f,r,1)}function o(c,f,h){h!==0&&(t.drawArraysInstanced(r,c,f,h),i.update(f,r,h))}function a(c,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,c,0,f,0,h);let p=0;for(let d=0;d<h;d++)p+=f[d];i.update(p,r,1)}function l(c,f,h,u){if(h===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<c.length;d++)o(c[d],f[d],u[d]);else{p.multiDrawArraysInstancedWEBGL(r,c,0,f,0,u,0,h);let d=0;for(let y=0;y<h;y++)d+=f[y]*u[y];i.update(d,r,1)}}this.setMode=n,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}var b2=A(()=>{});function C2(t,e,i,r){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");n=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(C){return!(C!==Gt&&r.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let L=C===sr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Qt&&r.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ri&&!L)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=i.precision!==void 0?i.precision:"highp",f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let h=i.logarithmicDepthBuffer===!0,u=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),w=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=d>0,T=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:d,maxTextureSize:y,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:w,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:P,maxSamples:T}}var A2=A(()=>{je()});function T2(t){let e=this,i=null,r=0,n=!1,s=!1,o=new er,a=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let p=h.length!==0||u||r!==0||n;return n=u,r=h.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){i=f(h,u,0)},this.setState=function(h,u,p){let d=h.clippingPlanes,y=h.clipIntersection,g=h.clipShadows,m=t.get(h);if(!n||d===null||d.length===0||s&&!g)s?f(null):c();else{let w=s?0:r,M=w*4,x=m.clippingState||null;l.value=x,x=f(d,u,M,p);for(let P=0;P!==M;++P)x[P]=i[P];m.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==i&&(l.value=i,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function f(h,u,p,d){let y=h!==null?h.length:0,g=null;if(y!==0){if(g=l.value,d!==!0||g===null){let m=p+y*4,w=u.matrixWorldInverse;a.getNormalMatrix(w),(g===null||g.length<m)&&(g=new Float32Array(m));for(let M=0,x=p;M!==y;++M,x+=4)o.copy(h[M]).applyMatrix4(w,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}var D2=A(()=>{fr();Af()});var Dl,L2=A(()=>{An();Tr();je();on();ff();Dl=class extends ui{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new ht(0,0,e,i),this.scissorTest=!1,this.viewport=new ht(0,0,e,i);let n={width:e,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);let s=new Tt(n,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);s.flipY=!1,s.generateMipmaps=r.generateMipmaps,s.internalFormat=r.internalFormat,this.textures=[];let o=r.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=i,this.textures[n].image.depth=r;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,n=e.textures.length;r<n;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;let i=Object.assign({},e.texture.image);return this.texture.source=new Rs(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}});var pi,ks=A(()=>{L2();pi=class extends Dl{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}});var Us,Fs,Ll,N2=A(()=>{je();Ar();Ls();Us=-90,Fs=1,Ll=class extends At{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Nt(Us,Fs,e,i);n.layers=this.layers,this.add(n);let s=new Nt(Us,Fs,e,i);s.layers=this.layers,this.add(s);let o=new Nt(Us,Fs,e,i);o.layers=this.layers,this.add(o);let a=new Nt(Us,Fs,e,i);a.layers=this.layers,this.add(a);let l=new Nt(Us,Fs,e,i);l.layers=this.layers,this.add(l);let c=new Nt(Us,Fs,e,i);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,i=this.children.concat(),[r,n,s,o,a,l]=i;for(let c of i)this.remove(c);if(e===di)r.up.set(0,1,0),r.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Rn)r.up.set(0,-1,0),r.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of i)this.add(c),c.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();let{renderTarget:r,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,f]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),d=e.xr.enabled;e.xr.enabled=!1;let y=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,n),e.render(i,s),e.setRenderTarget(r,1,n),e.render(i,o),e.setRenderTarget(r,2,n),e.render(i,a),e.setRenderTarget(r,3,n),e.render(i,l),e.setRenderTarget(r,4,n),e.render(i,c),r.texture.generateMipmaps=y,e.setRenderTarget(r,5,n),e.render(i,f),e.setRenderTarget(h,u,p),e.xr.enabled=d,r.texture.needsPMREMUpdate=!0}}});var Os,kf=A(()=>{Tr();je();Os=class extends Tt{constructor(e,i,r,n,s,o,a,l,c,f){e=e!==void 0?e:[],i=i!==void 0?i:Wi,super(e,i,r,n,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}});var Nl,I2=A(()=>{je();ln();Jo();Ps();Pn();ks();N2();kf();Nl=class extends pi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;let r={width:e,height:e,depth:1},n=[r,r,r,r,r,r];this.texture=new Os(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:ii}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;let r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new hr(5,5,5),s=new li({name:"CubemapFromEquirect",uniforms:Ir(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:nt,blending:Ci});s.uniforms.tEquirect.value=i;let o=new Mt(n,s),a=i.minFilter;return i.minFilter===qi&&(i.minFilter=ii),new Ll(1,10,this).update(e,o),i.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,i,r,n){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(i,r,n);e.setRenderTarget(s)}}});function P2(t){let e=new WeakMap;function i(o,a){return a===go?o.mapping=Wi:a===yo&&(o.mapping=nr),o}function r(o){if(o&&o.isTexture){let a=o.mapping;if(a===go||a===yo)if(e.has(o)){let l=e.get(o).texture;return i(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Nl(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",n),i(c.texture,o.mapping)}else return null}}return o}function n(o){let a=o.target;a.removeEventListener("dispose",n);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:r,dispose:s}}var k2=A(()=>{je();I2()});var Il,U2=A(()=>{Rf();Il=class extends Ds{constructor(e=-1,i=1,r=1,n=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=n,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,n,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=r-e,o=r+e,a=n+i,l=n-i;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}});function WE(t){let e=[],i=[],r=[],n=t,s=t-Bs+1+F2.length;for(let o=0;o<s;o++){let a=Math.pow(2,n);i.push(a);let l=1/a;o>t-Bs?l=F2[o-t+Bs-1]:o===0&&(l=0),r.push(l);let c=1/(a-2),f=-c,h=1+c,u=[f,f,h,f,h,h,f,f,h,h,f,h],p=6,d=6,y=3,g=2,m=1,w=new Float32Array(y*d*p),M=new Float32Array(g*d*p),x=new Float32Array(m*d*p);for(let T=0;T<p;T++){let C=T%3*2/3-1,L=T>2?0:-1,S=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];w.set(S,y*d*T),M.set(u,g*d*T);let v=[T,T,T,T,T,T];x.set(v,m*d*T)}let P=new jt;P.setAttribute("position",new _t(w,y)),P.setAttribute("uv",new _t(M,g)),P.setAttribute("faceIndex",new _t(x,m)),e.push(P),n>Bs&&n--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function B2(t,e,i){let r=new pi(t,e,i);return r.texture.mapping=jr,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Pl(t,e,i,r,n){t.viewport.set(e,i,r,n),t.scissor.set(e,i,r,n)}function XE(t,e,i){let r=new Float32Array(Fn),n=new F(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:Fn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Gf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function G2(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function V2(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Gf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var Bs,F2,Fn,Uf,O2,Ff,Of,zf,Bf,Un,zs,z2,ia,H2=A(()=>{je();Mr();rn();ln();U2();Ls();Ps();xt();Pi();ks();ta();Jo();Bs=4,F2=[.125,.215,.35,.446,.526,.582],Fn=20,Uf=new Il,O2=new Ie,Ff=null,Of=0,zf=0,Bf=!1,Un=(1+Math.sqrt(5))/2,zs=1/Un,z2=[new F(-Un,zs,0),new F(Un,zs,0),new F(-zs,0,Un),new F(zs,0,Un),new F(0,Un,-zs),new F(0,Un,zs),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],ia=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,n=100){Ff=this._renderer.getRenderTarget(),Of=this._renderer.getActiveCubeFace(),zf=this._renderer.getActiveMipmapLevel(),Bf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,r,n,s),i>0&&this._blur(s,0,0,i),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=V2(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=G2(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ff,Of,zf),this._renderer.xr.enabled=Bf,e.scissorTest=!1,Pl(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Wi||e.mapping===nr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ff=this._renderer.getRenderTarget(),Of=this._renderer.getActiveCubeFace(),zf=this._renderer.getActiveMipmapLevel(),Bf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:ii,minFilter:ii,generateMipmaps:!1,type:sr,format:Gt,colorSpace:Yi,depthBuffer:!1},n=B2(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=B2(e,i,r);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=WE(s)),this._blurMaterial=XE(s,e,i)}return n}_compileMaterial(e){let i=new Mt(this._lodPlanes[0],e);this._renderer.compile(i,Uf)}_sceneToCubeUV(e,i,r,n){let a=new Nt(90,1,i,r),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,u=f.toneMapping;f.getClearColor(O2),f.toneMapping=Ai,f.autoClear=!1;let p=new st({name:"PMREM.Background",side:nt,depthWrite:!1,depthTest:!1}),d=new Mt(new hr,p),y=!1,g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,y=!0):(p.color.copy(O2),y=!0);for(let m=0;m<6;m++){let w=m%3;w===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):w===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let M=this._cubeSize;Pl(n,w*M,m>2?M:0,M,M),f.setRenderTarget(n),y&&f.render(d,a),f.render(e,a)}d.geometry.dispose(),d.material.dispose(),f.toneMapping=u,f.autoClear=h,e.background=g}_textureToCubeUV(e,i){let r=this._renderer,n=e.mapping===Wi||e.mapping===nr;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=V2()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=G2());let s=n?this._cubemapMaterial:this._equirectMaterial,o=new Mt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;Pl(i,0,0,3*l,2*l),r.setRenderTarget(i),r.render(o,Uf)}_applyPMREM(e){let i=this._renderer,r=i.autoClear;i.autoClear=!1;let n=this._lodPlanes.length;for(let s=1;s<n;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=z2[(n-s-1)%z2.length];this._blur(e,s-1,s,o,a)}i.autoClear=r}_blur(e,i,r,n,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,i,r,n,"latitudinal",s),this._halfBlur(o,e,r,r,n,"longitudinal",s)}_halfBlur(e,i,r,n,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let f=3,h=new Mt(this._lodPlanes[n],c),u=c.uniforms,p=this._sizeLods[r]-1,d=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Fn-1),y=s/d,g=isFinite(s)?1+Math.floor(f*y):Fn;g>Fn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Fn}`);let m=[],w=0;for(let C=0;C<Fn;++C){let L=C/y,S=Math.exp(-L*L/2);m.push(S),C===0?w+=S:C<g&&(w+=2*S)}for(let C=0;C<m.length;C++)m[C]=m[C]/w;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=m,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:M}=this;u.dTheta.value=d,u.mipInt.value=M-r;let x=this._sizeLods[n],P=3*x*(n>M-Bs?n-M+Bs:0),T=4*(this._cubeSize-x);Pl(i,P,T,3*x,2*x),l.setRenderTarget(i),l.render(h,Uf)}}});function W2(t){let e=new WeakMap,i=null;function r(a){if(a&&a.isTexture){let l=a.mapping,c=l===go||l===yo,f=l===Wi||l===nr;if(c||f){let h=e.get(a),u=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return i===null&&(i=new ia(t)),h=c?i.fromEquirectangular(a,h):i.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let p=a.image;return c&&p&&p.height>0||f&&p&&n(p)?(i===null&&(i=new ia(t)),h=c?i.fromEquirectangular(a):i.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function n(a){let l=0,c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:o}}var X2=A(()=>{je();H2()});function q2(t){let e={};function i(r){if(e[r]!==void 0)return e[r];let n;switch(r){case"WEBGL_depth_texture":n=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=t.getExtension(r)}return e[r]=n,n}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let n=i(r);return n===null&&Tn("THREE.WebGLRenderer: "+r+" extension not supported."),n}}}var j2=A(()=>{tn()});function Y2(t,e,i,r){let n={},s=new WeakMap;function o(h){let u=h.target;u.index!==null&&e.remove(u.index);for(let d in u.attributes)e.remove(u.attributes[d]);for(let d in u.morphAttributes){let y=u.morphAttributes[d];for(let g=0,m=y.length;g<m;g++)e.remove(y[g])}u.removeEventListener("dispose",o),delete n[u.id];let p=s.get(u);p&&(e.remove(p),s.delete(u)),r.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,i.memory.geometries--}function a(h,u){return n[u.id]===!0||(u.addEventListener("dispose",o),n[u.id]=!0,i.memory.geometries++),u}function l(h){let u=h.attributes;for(let d in u)e.update(u[d],t.ARRAY_BUFFER);let p=h.morphAttributes;for(let d in p){let y=p[d];for(let g=0,m=y.length;g<m;g++)e.update(y[g],t.ARRAY_BUFFER)}}function c(h){let u=[],p=h.index,d=h.attributes.position,y=0;if(p!==null){let w=p.array;y=p.version;for(let M=0,x=w.length;M<x;M+=3){let P=w[M+0],T=w[M+1],C=w[M+2];u.push(P,T,T,C,C,P)}}else if(d!==void 0){let w=d.array;y=d.version;for(let M=0,x=w.length/3-1;M<x;M+=3){let P=M+0,T=M+1,C=M+2;u.push(P,T,T,C,C,P)}}else return;let g=new(fl(u)?gs:ms)(u,1);g.version=y;let m=s.get(h);m&&e.remove(m),s.set(h,g)}function f(h){let u=s.get(h);if(u){let p=h.index;p!==null&&u.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:f}}var K2=A(()=>{Mr();tn()});function Z2(t,e,i){let r;function n(u){r=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,p){t.drawElements(r,p,s,u*o),i.update(p,r,1)}function c(u,p,d){d!==0&&(t.drawElementsInstanced(r,p,s,u*o,d),i.update(p,r,d))}function f(u,p,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,p,0,s,u,0,d);let g=0;for(let m=0;m<d;m++)g+=p[m];i.update(g,r,1)}function h(u,p,d,y){if(d===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<u.length;m++)c(u[m]/o,p[m],y[m]);else{g.multiDrawElementsInstancedWEBGL(r,p,0,s,u,0,y,0,d);let m=0;for(let w=0;w<d;w++)m+=p[w]*y[w];i.update(m,r,1)}}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}var Q2=A(()=>{});function $2(t){let e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(s,o,a){switch(i.calls++,o){case t.TRIANGLES:i.triangles+=a*(s/3);break;case t.LINES:i.lines+=a*(s/2);break;case t.LINE_STRIP:i.lines+=a*(s-1);break;case t.LINE_LOOP:i.lines+=a*s;break;case t.POINTS:i.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:n,update:r}}var J2=A(()=>{});var Gs,Vf=A(()=>{Tr();je();Gs=class extends Tt{constructor(e=null,i=1,r=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:n},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}});function ey(t,e,i){let r=new WeakMap,n=new ht;function s(o,a,l){let c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0,u=r.get(a);if(u===void 0||u.count!==h){let S=function(){C.dispose(),r.delete(a),a.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();let p=a.morphAttributes.position!==void 0,d=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],M=0;p===!0&&(M=1),d===!0&&(M=2),y===!0&&(M=3);let x=a.attributes.position.count*M,P=1;x>e.maxTextureSize&&(P=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let T=new Float32Array(x*P*4*h),C=new Gs(T,x,P,h);C.type=ri,C.needsUpdate=!0;let L=M*4;for(let v=0;v<h;v++){let D=g[v],U=m[v],I=w[v],V=x*P*4*v;for(let q=0;q<D.count;q++){let H=q*L;p===!0&&(n.fromBufferAttribute(D,q),T[V+H+0]=n.x,T[V+H+1]=n.y,T[V+H+2]=n.z,T[V+H+3]=0),d===!0&&(n.fromBufferAttribute(U,q),T[V+H+4]=n.x,T[V+H+5]=n.y,T[V+H+6]=n.z,T[V+H+7]=0),y===!0&&(n.fromBufferAttribute(I,q),T[V+H+8]=n.x,T[V+H+9]=n.y,T[V+H+10]=n.z,T[V+H+11]=I.itemSize===4?n.w:1)}}u={count:h,texture:C,size:new Ue(x,P)},r.set(a,u),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,i);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];let d=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",d),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,i),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}var ty=A(()=>{je();Vf();on();ai()});function iy(t,e,i,r){let n=new WeakMap;function s(l){let c=r.render.frame,f=l.geometry,h=e.get(l,f);if(n.get(h)!==c&&(e.update(h),n.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.get(l)!==c&&(i.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&i.update(l.instanceColor,t.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;n.get(u)!==c&&(u.update(),n.set(u,c))}return h}function o(){n=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),i.remove(c.instanceMatrix),c.instanceColor!==null&&i.remove(c.instanceColor)}return{update:s,dispose:o}}var ry=A(()=>{});var kl,ny=A(()=>{Tr();je();kl=class extends Tt{constructor(e=null,i=1,r=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:n},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}});var Vs,Hf=A(()=>{Tr();je();Vs=class extends Tt{constructor(e,i,r,n,s,o,a,l,c,f=or){if(f!==or&&f!==ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&f===or&&(r=vi),r===void 0&&f===ar&&(r=ji),super(null,n,s,o,a,l,f,r,c),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=a!==void 0?a:Zt,this.minFilter=l!==void 0?l:Zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}});function Hs(t,e,i){let r=t[0];if(r<=0||r>0)return t;let n=e*i,s=oy[n];if(s===void 0&&(s=new Float32Array(n),oy[n]=s),e!==0){r.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=i,t[o].toArray(s,a)}return s}function It(t,e){if(t.length!==e.length)return!1;for(let i=0,r=t.length;i<r;i++)if(t[i]!==e[i])return!1;return!0}function Pt(t,e){for(let i=0,r=e.length;i<r;i++)t[i]=e[i]}function Ul(t,e){let i=ay[e];i===void 0&&(i=new Int32Array(e),ay[e]=i);for(let r=0;r!==e;++r)i[r]=t.allocateTextureUnit();return i}function qE(t,e){let i=this.cache;i[0]!==e&&(t.uniform1f(this.addr,e),i[0]=e)}function jE(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(It(i,e))return;t.uniform2fv(this.addr,e),Pt(i,e)}}function YE(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(It(i,e))return;t.uniform3fv(this.addr,e),Pt(i,e)}}function KE(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(It(i,e))return;t.uniform4fv(this.addr,e),Pt(i,e)}}function ZE(t,e){let i=this.cache,r=e.elements;if(r===void 0){if(It(i,e))return;t.uniformMatrix2fv(this.addr,!1,e),Pt(i,e)}else{if(It(i,r))return;fy.set(r),t.uniformMatrix2fv(this.addr,!1,fy),Pt(i,r)}}function QE(t,e){let i=this.cache,r=e.elements;if(r===void 0){if(It(i,e))return;t.uniformMatrix3fv(this.addr,!1,e),Pt(i,e)}else{if(It(i,r))return;cy.set(r),t.uniformMatrix3fv(this.addr,!1,cy),Pt(i,r)}}function $E(t,e){let i=this.cache,r=e.elements;if(r===void 0){if(It(i,e))return;t.uniformMatrix4fv(this.addr,!1,e),Pt(i,e)}else{if(It(i,r))return;ly.set(r),t.uniformMatrix4fv(this.addr,!1,ly),Pt(i,r)}}function JE(t,e){let i=this.cache;i[0]!==e&&(t.uniform1i(this.addr,e),i[0]=e)}function e4(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(It(i,e))return;t.uniform2iv(this.addr,e),Pt(i,e)}}function t4(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(It(i,e))return;t.uniform3iv(this.addr,e),Pt(i,e)}}function i4(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(It(i,e))return;t.uniform4iv(this.addr,e),Pt(i,e)}}function r4(t,e){let i=this.cache;i[0]!==e&&(t.uniform1ui(this.addr,e),i[0]=e)}function n4(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(It(i,e))return;t.uniform2uiv(this.addr,e),Pt(i,e)}}function s4(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(It(i,e))return;t.uniform3uiv(this.addr,e),Pt(i,e)}}function o4(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(It(i,e))return;t.uniform4uiv(this.addr,e),Pt(i,e)}}function a4(t,e,i){let r=this.cache,n=i.allocateTextureUnit();r[0]!==n&&(t.uniform1i(this.addr,n),r[0]=n);let s;this.type===t.SAMPLER_2D_SHADOW?(sy.compareFunction=Ja,s=sy):s=dy,i.setTexture2D(e||s,n)}function l4(t,e,i){let r=this.cache,n=i.allocateTextureUnit();r[0]!==n&&(t.uniform1i(this.addr,n),r[0]=n),i.setTexture3D(e||py,n)}function c4(t,e,i){let r=this.cache,n=i.allocateTextureUnit();r[0]!==n&&(t.uniform1i(this.addr,n),r[0]=n),i.setTextureCube(e||my,n)}function f4(t,e,i){let r=this.cache,n=i.allocateTextureUnit();r[0]!==n&&(t.uniform1i(this.addr,n),r[0]=n),i.setTexture2DArray(e||uy,n)}function h4(t){switch(t){case 5126:return qE;case 35664:return jE;case 35665:return YE;case 35666:return KE;case 35674:return ZE;case 35675:return QE;case 35676:return $E;case 5124:case 35670:return JE;case 35667:case 35671:return e4;case 35668:case 35672:return t4;case 35669:case 35673:return i4;case 5125:return r4;case 36294:return n4;case 36295:return s4;case 36296:return o4;case 35678:case 36198:case 36298:case 36306:case 35682:return a4;case 35679:case 36299:case 36307:return l4;case 35680:case 36300:case 36308:case 36293:return c4;case 36289:case 36303:case 36311:case 36292:return f4}}function d4(t,e){t.uniform1fv(this.addr,e)}function u4(t,e){let i=Hs(e,this.size,2);t.uniform2fv(this.addr,i)}function p4(t,e){let i=Hs(e,this.size,3);t.uniform3fv(this.addr,i)}function m4(t,e){let i=Hs(e,this.size,4);t.uniform4fv(this.addr,i)}function g4(t,e){let i=Hs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,i)}function y4(t,e){let i=Hs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,i)}function S4(t,e){let i=Hs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,i)}function v4(t,e){t.uniform1iv(this.addr,e)}function x4(t,e){t.uniform2iv(this.addr,e)}function E4(t,e){t.uniform3iv(this.addr,e)}function _4(t,e){t.uniform4iv(this.addr,e)}function w4(t,e){t.uniform1uiv(this.addr,e)}function M4(t,e){t.uniform2uiv(this.addr,e)}function R4(t,e){t.uniform3uiv(this.addr,e)}function b4(t,e){t.uniform4uiv(this.addr,e)}function C4(t,e,i){let r=this.cache,n=e.length,s=Ul(i,n);It(r,s)||(t.uniform1iv(this.addr,s),Pt(r,s));for(let o=0;o!==n;++o)i.setTexture2D(e[o]||dy,s[o])}function A4(t,e,i){let r=this.cache,n=e.length,s=Ul(i,n);It(r,s)||(t.uniform1iv(this.addr,s),Pt(r,s));for(let o=0;o!==n;++o)i.setTexture3D(e[o]||py,s[o])}function T4(t,e,i){let r=this.cache,n=e.length,s=Ul(i,n);It(r,s)||(t.uniform1iv(this.addr,s),Pt(r,s));for(let o=0;o!==n;++o)i.setTextureCube(e[o]||my,s[o])}function D4(t,e,i){let r=this.cache,n=e.length,s=Ul(i,n);It(r,s)||(t.uniform1iv(this.addr,s),Pt(r,s));for(let o=0;o!==n;++o)i.setTexture2DArray(e[o]||uy,s[o])}function L4(t){switch(t){case 5126:return d4;case 35664:return u4;case 35665:return p4;case 35666:return m4;case 35674:return g4;case 35675:return y4;case 35676:return S4;case 5124:case 35670:return v4;case 35667:case 35671:return x4;case 35668:case 35672:return E4;case 35669:case 35673:return _4;case 5125:return w4;case 36294:return M4;case 36295:return R4;case 36296:return b4;case 35678:case 36198:case 36298:case 36306:case 35682:return C4;case 35679:case 36299:case 36307:return A4;case 35680:case 36300:case 36308:case 36293:return T4;case 36289:case 36303:case 36311:case 36292:return D4}}function hy(t,e){t.seq.push(e),t.map[e.id]=e}function N4(t,e,i){let r=t.name,n=r.length;for(Wf.lastIndex=0;;){let s=Wf.exec(r),o=Wf.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){hy(i,c===void 0?new Xf(a,t,e):new qf(a,t,e));break}else{let h=i.map[a];h===void 0&&(h=new jf(a),hy(i,h)),i=h}}}var dy,sy,uy,py,my,oy,ay,ly,cy,fy,Xf,qf,jf,Wf,fn,Yf=A(()=>{kf();Tr();Vf();ny();Hf();je();dy=new Tt,sy=new Vs(1,1),uy=new Gs,py=new kl,my=new Os,oy=[],ay=[],ly=new Float32Array(16),cy=new Float32Array(9),fy=new Float32Array(4);Xf=class{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=h4(i.type)}},qf=class{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=L4(i.type)}},jf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){let n=this.seq;for(let s=0,o=n.length;s!==o;++s){let a=n[s];a.setValue(e,i[a.id],r)}}},Wf=/(\w+)(\])?(\[|\.)?/g;fn=class{constructor(e,i){this.seq=[],this.map={};let r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let n=0;n<r;++n){let s=e.getActiveUniform(i,n),o=e.getUniformLocation(i,s.name);N4(s,o,this)}}setValue(e,i,r,n){let s=this.map[i];s!==void 0&&s.setValue(e,r,n)}setOptional(e,i,r){let n=i[r];n!==void 0&&this.setValue(e,r,n)}static upload(e,i,r,n){for(let s=0,o=i.length;s!==o;++s){let a=i[s],l=r[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,n)}}static seqWithValue(e,i){let r=[];for(let n=0,s=e.length;n!==s;++n){let o=e[n];o.id in i&&r.push(o)}return r}}});function Kf(t,e,i){let r=t.createShader(e);return t.shaderSource(r,i),t.compileShader(r),r}var gy=A(()=>{});function k4(t,e){let i=t.split(`
`),r=[],n=Math.max(e-6,0),s=Math.min(e+6,i.length);for(let o=n;o<s;o++){let a=o+1;r.push(`${a===e?">":" "} ${a}: ${i[o]}`)}return r.join(`
`)}function U4(t){He._getMatrix(yy,He.workingColorSpace,t);let e=`mat3( ${yy.elements.map(i=>i.toFixed(4))} )`;switch(He.getTransfer(t)){case wn:return[e,"LinearTransferOETF"];case $e:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Sy(t,e,i){let r=t.getShaderParameter(e,t.COMPILE_STATUS),n=t.getShaderInfoLog(e).trim();if(r&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let o=parseInt(s[1]);return i.toUpperCase()+`

`+n+`

`+k4(t.getShaderSource(e),o)}else return n}function F4(t,e){let i=U4(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function O4(t,e){let i;switch(e){case yu:i="Linear";break;case Su:i="Reinhard";break;case vu:i="Cineon";break;case xu:i="ACESFilmic";break;case _u:i="AgX";break;case wu:i="Neutral";break;case Eu:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+t+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function z4(){He.getLuminanceCoefficients(Fl);let t=Fl.x.toFixed(4),e=Fl.y.toFixed(4),i=Fl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function B4(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ra).join(`
`)}function G4(t){let e=[];for(let i in t){let r=t[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function V4(t,e){let i={},r=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let n=0;n<r;n++){let s=t.getActiveAttrib(e,n),o=s.name,a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),i[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return i}function ra(t){return t!==""}function vy(t,e){let i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xy(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Zf(t){return t.replace(H4,X4)}function X4(t,e){let i=Be[e];if(i===void 0){let r=W4.get(e);if(r!==void 0)i=Be[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Zf(i)}function Ey(t){return t.replace(q4,j4)}function j4(t,e,i,r){let n="";for(let s=parseInt(e);s<parseInt(i);s++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function _y(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Y4(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Ia?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Zd?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Hi&&(e="SHADOWMAP_TYPE_VSM"),e}function K4(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Wi:case nr:e="ENVMAP_TYPE_CUBE";break;case jr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Z4(t){let e="ENVMAP_MODE_REFLECTION";return t.envMap&&t.envMapMode===nr&&(e="ENVMAP_MODE_REFRACTION"),e}function Q4(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Ga:e="ENVMAP_BLENDING_MULTIPLY";break;case mu:e="ENVMAP_BLENDING_MIX";break;case gu:e="ENVMAP_BLENDING_ADD";break}return e}function $4(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function wy(t,e,i,r){let n=t.getContext(),s=i.defines,o=i.vertexShader,a=i.fragmentShader,l=Y4(i),c=K4(i),f=Z4(i),h=Q4(i),u=$4(i),p=B4(i),d=G4(s),y=n.createProgram(),g,m,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,d].filter(ra).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,d].filter(ra).join(`
`),m.length>0&&(m+=`
`)):(g=[_y(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,d,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+f:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ra).join(`
`),m=[_y(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,d,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.envMap?"#define "+f:"",i.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ai?"#define TONE_MAPPING":"",i.toneMapping!==Ai?Be.tonemapping_pars_fragment:"",i.toneMapping!==Ai?O4("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,F4("linearToOutputTexel",i.outputColorSpace),z4(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ra).join(`
`)),o=Zf(o),o=vy(o,i),o=xy(o,i),a=Zf(a),a=vy(a,i),a=xy(a,i),o=Ey(o),a=Ey(a),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",i.glslVersion===Qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=w+g+o,x=w+m+a,P=Kf(n,n.VERTEX_SHADER,M),T=Kf(n,n.FRAGMENT_SHADER,x);n.attachShader(y,P),n.attachShader(y,T),i.index0AttributeName!==void 0?n.bindAttribLocation(y,0,i.index0AttributeName):i.morphTargets===!0&&n.bindAttribLocation(y,0,"position"),n.linkProgram(y);function C(D){if(t.debug.checkShaderErrors){let U=n.getProgramInfoLog(y).trim(),I=n.getShaderInfoLog(P).trim(),V=n.getShaderInfoLog(T).trim(),q=!0,H=!0;if(n.getProgramParameter(y,n.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(n,y,P,T);else{let Z=Sy(n,P,"vertex"),G=Sy(n,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(y,n.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+U+`
`+Z+`
`+G)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(I===""||V==="")&&(H=!1);H&&(D.diagnostics={runnable:q,programLog:U,vertexShader:{log:I,prefix:g},fragmentShader:{log:V,prefix:m}})}n.deleteShader(P),n.deleteShader(T),L=new fn(n,y),S=V4(n,y)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let v=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=n.getProgramParameter(y,I4)),v},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(y),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=P4++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=P,this.fragmentShader=T,this}var I4,P4,yy,Fl,H4,W4,q4,My=A(()=>{Yf();gy();Nf();je();dr();xt();fr();I4=37297,P4=0;yy=new Ne;Fl=new F;H4=/^[ \t]*#include +<([\w\d./]+)>/gm;W4=new Map;q4=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g});var J4,Ol,Qf,Ry=A(()=>{J4=0,Ol=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let i=e.vertexShader,r=e.fragmentShader,n=this._getShaderStage(i),s=this._getShaderStage(r),o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let i=this.materialCache.get(e);for(let r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let i=this.materialCache,r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){let i=this.shaderCache,r=i.get(e);return r===void 0&&(r=new Qf(e),i.set(e,r)),r}},Qf=class{constructor(e){this.id=J4++,this.code=e,this.usedTimes=0}}});function by(t,e,i,r,n,s,o){let a=new Jr,l=new Ol,c=new Set,f=[],h=n.logarithmicDepthBuffer,u=n.vertexTextures,p=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,v,D,U,I){let V=U.fog,q=I.geometry,H=S.isMeshStandardMaterial?U.environment:null,Z=(S.isMeshStandardMaterial?i:e).get(S.envMap||H),G=Z&&Z.mapping===jr?Z.image.height:null,$=d[S.type];S.precision!==null&&(p=n.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let ne=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Se=ne!==void 0?ne.length:0,Ce=0;q.morphAttributes.position!==void 0&&(Ce=1),q.morphAttributes.normal!==void 0&&(Ce=2),q.morphAttributes.color!==void 0&&(Ce=3);let Oe,Y,re,le;if($){let lt=ki[$];Oe=lt.vertexShader,Y=lt.fragmentShader}else Oe=S.vertexShader,Y=S.fragmentShader,l.update(S),re=l.getVertexShaderID(S),le=l.getFragmentShaderID(S);let ce=t.getRenderTarget(),_e=t.state.buffers.depth.getReversed(),O=I.isInstancedMesh===!0,te=I.isBatchedMesh===!0,ue=!!S.map,se=!!S.matcap,we=!!Z,N=!!S.aoMap,rt=!!S.lightMap,Ke=!!S.bumpMap,Ze=!!S.normalMap,De=!!S.displacementMap,gt=!!S.emissiveMap,Le=!!S.metalnessMap,R=!!S.roughnessMap,E=S.anisotropy>0,W=S.clearcoat>0,J=S.dispersion>0,ie=S.iridescence>0,Q=S.sheen>0,Ae=S.transmission>0,pe=E&&!!S.anisotropyMap,ve=W&&!!S.clearcoatMap,et=W&&!!S.clearcoatNormalMap,oe=W&&!!S.clearcoatRoughnessMap,xe=ie&&!!S.iridescenceMap,Pe=ie&&!!S.iridescenceThicknessMap,Fe=Q&&!!S.sheenColorMap,Ee=Q&&!!S.sheenRoughnessMap,Qe=!!S.specularMap,We=!!S.specularColorMap,dt=!!S.specularIntensityMap,k=Ae&&!!S.transmissionMap,de=Ae&&!!S.thicknessMap,K=!!S.gradientMap,ee=!!S.alphaMap,ye=S.alphaTest>0,me=!!S.alphaHash,Ge=!!S.extensions,Rt=Ai;S.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(Rt=t.toneMapping);let Kt={shaderID:$,shaderType:S.type,shaderName:S.name,vertexShader:Oe,fragmentShader:Y,defines:S.defines,customVertexShaderID:re,customFragmentShaderID:le,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:te,batchingColor:te&&I._colorsTexture!==null,instancing:O,instancingColor:O&&I.instanceColor!==null,instancingMorph:O&&I.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ce===null?t.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Yi,alphaToCoverage:!!S.alphaToCoverage,map:ue,matcap:se,envMap:we,envMapMode:we&&Z.mapping,envMapCubeUVHeight:G,aoMap:N,lightMap:rt,bumpMap:Ke,normalMap:Ze,displacementMap:u&&De,emissiveMap:gt,normalMapObjectSpace:Ze&&S.normalMapType===Au,normalMapTangentSpace:Ze&&S.normalMapType===Cu,metalnessMap:Le,roughnessMap:R,anisotropy:E,anisotropyMap:pe,clearcoat:W,clearcoatMap:ve,clearcoatNormalMap:et,clearcoatRoughnessMap:oe,dispersion:J,iridescence:ie,iridescenceMap:xe,iridescenceThicknessMap:Pe,sheen:Q,sheenColorMap:Fe,sheenRoughnessMap:Ee,specularMap:Qe,specularColorMap:We,specularIntensityMap:dt,transmission:Ae,transmissionMap:k,thicknessMap:de,gradientMap:K,opaque:S.transparent===!1&&S.blending===Er&&S.alphaToCoverage===!1,alphaMap:ee,alphaTest:ye,alphaHash:me,combine:S.combine,mapUv:ue&&y(S.map.channel),aoMapUv:N&&y(S.aoMap.channel),lightMapUv:rt&&y(S.lightMap.channel),bumpMapUv:Ke&&y(S.bumpMap.channel),normalMapUv:Ze&&y(S.normalMap.channel),displacementMapUv:De&&y(S.displacementMap.channel),emissiveMapUv:gt&&y(S.emissiveMap.channel),metalnessMapUv:Le&&y(S.metalnessMap.channel),roughnessMapUv:R&&y(S.roughnessMap.channel),anisotropyMapUv:pe&&y(S.anisotropyMap.channel),clearcoatMapUv:ve&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:et&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&y(S.sheenRoughnessMap.channel),specularMapUv:Qe&&y(S.specularMap.channel),specularColorMapUv:We&&y(S.specularColorMap.channel),specularIntensityMapUv:dt&&y(S.specularIntensityMap.channel),transmissionMapUv:k&&y(S.transmissionMap.channel),thicknessMapUv:de&&y(S.thicknessMap.channel),alphaMapUv:ee&&y(S.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Ze||E),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!q.attributes.uv&&(ue||ee),fog:!!V,useFog:S.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:_e,skinning:I.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Ce,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:Rt,decodeVideoTexture:ue&&S.map.isVideoTexture===!0&&He.getTransfer(S.map.colorSpace)===$e,decodeVideoTextureEmissive:gt&&S.emissiveMap.isVideoTexture===!0&&He.getTransfer(S.emissiveMap.colorSpace)===$e,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===qt,flipSided:S.side===nt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ge&&S.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&S.extensions.multiDraw===!0||te)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Kt.vertexUv1s=c.has(1),Kt.vertexUv2s=c.has(2),Kt.vertexUv3s=c.has(3),c.clear(),Kt}function m(S){let v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(let D in S.defines)v.push(D),v.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(w(v,S),M(v,S),v.push(t.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function w(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function M(S,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){let v=d[S.type],D;if(v){let U=ki[v];D=E0.clone(U.uniforms)}else D=S.uniforms;return D}function P(S,v){let D;for(let U=0,I=f.length;U<I;U++){let V=f[U];if(V.cacheKey===v){D=V,++D.usedTimes;break}}return D===void 0&&(D=new wy(t,v,S,s),f.push(D)),D}function T(S){if(--S.usedTimes===0){let v=f.indexOf(S);f[v]=f[f.length-1],f.pop(),S.destroy()}}function C(S){l.remove(S)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:x,acquireProgram:P,releaseProgram:T,releaseShaderCache:C,programs:f,dispose:L}}var Cy=A(()=>{je();ll();My();Ry();Pf();Pn();dr()});function Ay(){let t=new WeakMap;function e(o){return t.has(o)}function i(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function r(o){t.delete(o)}function n(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:i,remove:r,update:n,dispose:s}}var Ty=A(()=>{});function e_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Dy(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ly(){let t=[],e=0,i=[],r=[],n=[];function s(){e=0,i.length=0,r.length=0,n.length=0}function o(h,u,p,d,y,g){let m=t[e];return m===void 0?(m={id:h.id,object:h,geometry:u,material:p,groupOrder:d,renderOrder:h.renderOrder,z:y,group:g},t[e]=m):(m.id=h.id,m.object=h,m.geometry=u,m.material=p,m.groupOrder=d,m.renderOrder=h.renderOrder,m.z=y,m.group=g),e++,m}function a(h,u,p,d,y,g){let m=o(h,u,p,d,y,g);p.transmission>0?r.push(m):p.transparent===!0?n.push(m):i.push(m)}function l(h,u,p,d,y,g){let m=o(h,u,p,d,y,g);p.transmission>0?r.unshift(m):p.transparent===!0?n.unshift(m):i.unshift(m)}function c(h,u){i.length>1&&i.sort(h||e_),r.length>1&&r.sort(u||Dy),n.length>1&&n.sort(u||Dy)}function f(){for(let h=e,u=t.length;h<u;h++){let p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:i,transmissive:r,transparent:n,init:s,push:a,unshift:l,finish:f,sort:c}}function Ny(){let t=new WeakMap;function e(r,n){let s=t.get(r),o;return s===void 0?(o=new Ly,t.set(r,[o])):n>=s.length?(o=new Ly,s.push(o)):o=s[n],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var Iy=A(()=>{});function t_(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new F,color:new Ie};break;case"SpotLight":i={position:new F,direction:new F,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new F,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":i={direction:new F,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":i={color:new Ie,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=i,i}}}function i_(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=i,i}}}function n_(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Py(t){let e=new t_,i=i_(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new F);let n=new F,s=new Ye,o=new Ye;function a(c){let f=0,h=0,u=0;for(let S=0;S<9;S++)r.probe[S].set(0,0,0);let p=0,d=0,y=0,g=0,m=0,w=0,M=0,x=0,P=0,T=0,C=0;c.sort(n_);for(let S=0,v=c.length;S<v;S++){let D=c[S],U=D.color,I=D.intensity,V=D.distance,q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=U.r*I,h+=U.g*I,u+=U.b*I;else if(D.isLightProbe){for(let H=0;H<9;H++)r.probe[H].addScaledVector(D.sh.coefficients[H],I);C++}else if(D.isDirectionalLight){let H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Z=D.shadow,G=i.get(D);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,r.directionalShadow[p]=G,r.directionalShadowMap[p]=q,r.directionalShadowMatrix[p]=D.shadow.matrix,w++}r.directional[p]=H,p++}else if(D.isSpotLight){let H=e.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(U).multiplyScalar(I),H.distance=V,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,r.spot[y]=H;let Z=D.shadow;if(D.map&&(r.spotLightMap[P]=D.map,P++,Z.updateMatrices(D),D.castShadow&&T++),r.spotLightMatrix[y]=Z.matrix,D.castShadow){let G=i.get(D);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,r.spotShadow[y]=G,r.spotShadowMap[y]=q,x++}y++}else if(D.isRectAreaLight){let H=e.get(D);H.color.copy(U).multiplyScalar(I),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),r.rectArea[g]=H,g++}else if(D.isPointLight){let H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),H.distance=D.distance,H.decay=D.decay,D.castShadow){let Z=D.shadow,G=i.get(D);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,G.shadowCameraNear=Z.camera.near,G.shadowCameraFar=Z.camera.far,r.pointShadow[d]=G,r.pointShadowMap[d]=q,r.pointShadowMatrix[d]=D.shadow.matrix,M++}r.point[d]=H,d++}else if(D.isHemisphereLight){let H=e.get(D);H.skyColor.copy(D.color).multiplyScalar(I),H.groundColor.copy(D.groundColor).multiplyScalar(I),r.hemi[m]=H,m++}}g>0&&(t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_FLOAT_1,r.rectAreaLTC2=fe.LTC_FLOAT_2):(r.rectAreaLTC1=fe.LTC_HALF_1,r.rectAreaLTC2=fe.LTC_HALF_2)),r.ambient[0]=f,r.ambient[1]=h,r.ambient[2]=u;let L=r.hash;(L.directionalLength!==p||L.pointLength!==d||L.spotLength!==y||L.rectAreaLength!==g||L.hemiLength!==m||L.numDirectionalShadows!==w||L.numPointShadows!==M||L.numSpotShadows!==x||L.numSpotMaps!==P||L.numLightProbes!==C)&&(r.directional.length=p,r.spot.length=y,r.rectArea.length=g,r.point.length=d,r.hemi.length=m,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=x,r.spotShadowMap.length=x,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=x+P-T,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=T,r.numLightProbes=C,L.directionalLength=p,L.pointLength=d,L.spotLength=y,L.rectAreaLength=g,L.hemiLength=m,L.numDirectionalShadows=w,L.numPointShadows=M,L.numSpotShadows=x,L.numSpotMaps=P,L.numLightProbes=C,r.version=r_++)}function l(c,f){let h=0,u=0,p=0,d=0,y=0,g=f.matrixWorldInverse;for(let m=0,w=c.length;m<w;m++){let M=c[m];if(M.isDirectionalLight){let x=r.directional[h];x.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(n),x.direction.transformDirection(g),h++}else if(M.isSpotLight){let x=r.spot[p];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(n),x.direction.transformDirection(g),p++}else if(M.isRectAreaLight){let x=r.rectArea[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),o.identity(),s.copy(M.matrixWorld),s.premultiply(g),o.extractRotation(s),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),d++}else if(M.isPointLight){let x=r.point[u];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),u++}else if(M.isHemisphereLight){let x=r.hemi[y];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(g),y++}}}return{setup:a,setupView:l,state:r}}var r_,ky=A(()=>{Pi();Ni();ai();xt();If();r_=0});function Uy(t){let e=new Py(t),i=[],r=[];function n(f){c.camera=f,i.length=0,r.length=0}function s(f){i.push(f)}function o(f){r.push(f)}function a(){e.setup(i)}function l(f){e.setupView(i,f)}let c={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Fy(t){let e=new WeakMap;function i(n,s=0){let o=e.get(n),a;return o===void 0?(a=new Uy(t),e.set(n,[a])):s>=o.length?(a=new Uy(t),o.push(a)):a=o[s],a}function r(){e=new WeakMap}return{get:i,dispose:r}}var Oy=A(()=>{ky()});var zl,zy=A(()=>{ea();je();zl=class extends ur{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ru,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}});var Bl,By=A(()=>{ea();Bl=class extends ur{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}});var Gy,Vy,Hy=A(()=>{Gy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,Vy=`
uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;

#include <packing>

void main() {

	const float samples = float( VSM_SAMPLES );

	float mean = 0.0;
	float squared_mean = 0.0;

	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {

		float uvOffset = uvStart + i * uvStride;

		#ifdef HORIZONTAL_PASS

			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;

		#else

			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;

		#endif

	}

	mean = mean / samples;
	squared_mean = squared_mean / samples;

	float std_dev = sqrt( squared_mean - mean * mean );

	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );

}
`});function Wy(t,e,i){let r=new Ns,n=new Ue,s=new Ue,o=new ht,a=new zl({depthPacking:bu}),l=new Bl,c={},f=i.maxTextureSize,h={[Lt]:nt,[nt]:Lt,[qt]:qt},u=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:Gy,fragmentShader:Vy}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let d=new jt;d.setAttribute("position",new _t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Mt(d,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ia;let m=this.type;this.render=function(T,C,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;let S=t.getRenderTarget(),v=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),U=t.state;U.setBlending(Ci),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let I=m!==Hi&&this.type===Hi,V=m===Hi&&this.type!==Hi;for(let q=0,H=T.length;q<H;q++){let Z=T[q],G=Z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;n.copy(G.mapSize);let $=G.getFrameExtents();if(n.multiply($),s.copy(G.mapSize),(n.x>f||n.y>f)&&(n.x>f&&(s.x=Math.floor(f/$.x),n.x=s.x*$.x,G.mapSize.x=s.x),n.y>f&&(s.y=Math.floor(f/$.y),n.y=s.y*$.y,G.mapSize.y=s.y)),G.map===null||I===!0||V===!0){let Se=this.type!==Hi?{minFilter:Zt,magFilter:Zt}:{};G.map!==null&&G.map.dispose(),G.map=new pi(n.x,n.y,Se),G.map.texture.name=Z.name+".shadowMap",G.camera.updateProjectionMatrix()}t.setRenderTarget(G.map),t.clear();let ne=G.getViewportCount();for(let Se=0;Se<ne;Se++){let Ce=G.getViewport(Se);o.set(s.x*Ce.x,s.y*Ce.y,s.x*Ce.z,s.y*Ce.w),U.viewport(o),G.updateMatrices(Z,Se),r=G.getFrustum(),x(C,L,G.camera,Z,this.type)}G.isPointLightShadow!==!0&&this.type===Hi&&w(G,L),G.needsUpdate=!1}m=this.type,g.needsUpdate=!1,t.setRenderTarget(S,v,D)};function w(T,C){let L=e.update(y);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new pi(n.x,n.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(C,null,L,u,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(C,null,L,p,y,null)}function M(T,C,L,S){let v=null,D=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)v=D;else if(v=L.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let U=v.uuid,I=C.uuid,V=c[U];V===void 0&&(V={},c[U]=V);let q=V[I];q===void 0&&(q=v.clone(),V[I]=q,C.addEventListener("dispose",P)),v=q}if(v.visible=C.visible,v.wireframe=C.wireframe,S===Hi?v.side=C.shadowSide!==null?C.shadowSide:C.side:v.side=C.shadowSide!==null?C.shadowSide:h[C.side],v.alphaMap=C.alphaMap,v.alphaTest=C.alphaTest,v.map=C.map,v.clipShadows=C.clipShadows,v.clippingPlanes=C.clippingPlanes,v.clipIntersection=C.clipIntersection,v.displacementMap=C.displacementMap,v.displacementScale=C.displacementScale,v.displacementBias=C.displacementBias,v.wireframeLinewidth=C.wireframeLinewidth,v.linewidth=C.linewidth,L.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let U=t.properties.get(v);U.light=L}return v}function x(T,C,L,S,v){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===Hi)&&(!T.frustumCulled||r.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);let I=e.update(T),V=T.material;if(Array.isArray(V)){let q=I.groups;for(let H=0,Z=q.length;H<Z;H++){let G=q[H],$=V[G.materialIndex];if($&&$.visible){let ne=M(T,$,S,v);T.onBeforeShadow(t,T,C,L,I,ne,G),t.renderBufferDirect(L,null,I,ne,T,G),T.onAfterShadow(t,T,C,L,I,ne,G)}}}else if(V.visible){let q=M(T,V,S,v);T.onBeforeShadow(t,T,C,L,I,q,null),t.renderBufferDirect(L,null,I,q,T,null),T.onAfterShadow(t,T,C,L,I,q,null)}}let U=T.children;for(let I=0,V=U.length;I<V;I++)x(U[I],C,L,S,v)}function P(T){T.target.removeEventListener("dispose",P);for(let L in c){let S=c[L],v=T.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}var Xy=A(()=>{je();ks();zy();By();Ps();Mr();rn();ln();on();ai();Tf();Hy()});function qy(t,e){function i(){let k=!1,de=new ht,K=null,ee=new ht(0,0,0,0);return{setMask:function(ye){K!==ye&&!k&&(t.colorMask(ye,ye,ye,ye),K=ye)},setLocked:function(ye){k=ye},setClear:function(ye,me,Ge,Rt,Kt){Kt===!0&&(ye*=Rt,me*=Rt,Ge*=Rt),de.set(ye,me,Ge,Rt),ee.equals(de)===!1&&(t.clearColor(ye,me,Ge,Rt),ee.copy(de))},reset:function(){k=!1,K=null,ee.set(-1,0,0,0)}}}function r(){let k=!1,de=!1,K=null,ee=null,ye=null;return{setReversed:function(me){if(de!==me){let Ge=e.get("EXT_clip_control");de?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT);let Rt=ye;ye=null,this.setClear(Rt)}de=me},getReversed:function(){return de},setTest:function(me){me?ce(t.DEPTH_TEST):_e(t.DEPTH_TEST)},setMask:function(me){K!==me&&!k&&(t.depthMask(me),K=me)},setFunc:function(me){if(de&&(me=o_[me]),ee!==me){switch(me){case Pa:t.depthFunc(t.NEVER);break;case ka:t.depthFunc(t.ALWAYS);break;case Ua:t.depthFunc(t.LESS);break;case qr:t.depthFunc(t.LEQUAL);break;case Fa:t.depthFunc(t.EQUAL);break;case Oa:t.depthFunc(t.GEQUAL);break;case za:t.depthFunc(t.GREATER);break;case Ba:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ee=me}},setLocked:function(me){k=me},setClear:function(me){ye!==me&&(de&&(me=1-me),t.clearDepth(me),ye=me)},reset:function(){k=!1,K=null,ee=null,ye=null,de=!1}}}function n(){let k=!1,de=null,K=null,ee=null,ye=null,me=null,Ge=null,Rt=null,Kt=null;return{setTest:function(lt){k||(lt?ce(t.STENCIL_TEST):_e(t.STENCIL_TEST))},setMask:function(lt){de!==lt&&!k&&(t.stencilMask(lt),de=lt)},setFunc:function(lt,Ui,mr){(K!==lt||ee!==Ui||ye!==mr)&&(t.stencilFunc(lt,Ui,mr),K=lt,ee=Ui,ye=mr)},setOp:function(lt,Ui,mr){(me!==lt||Ge!==Ui||Rt!==mr)&&(t.stencilOp(lt,Ui,mr),me=lt,Ge=Ui,Rt=mr)},setLocked:function(lt){k=lt},setClear:function(lt){Kt!==lt&&(t.clearStencil(lt),Kt=lt)},reset:function(){k=!1,de=null,K=null,ee=null,ye=null,me=null,Ge=null,Rt=null,Kt=null}}}let s=new i,o=new r,a=new n,l=new WeakMap,c=new WeakMap,f={},h={},u=new WeakMap,p=[],d=null,y=!1,g=null,m=null,w=null,M=null,x=null,P=null,T=null,C=new Ie(0,0,0),L=0,S=!1,v=null,D=null,U=null,I=null,V=null,q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,Z=0,G=t.getParameter(t.VERSION);G.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(G)[1]),H=Z>=1):G.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),H=Z>=2);let $=null,ne={},Se=t.getParameter(t.SCISSOR_BOX),Ce=t.getParameter(t.VIEWPORT),Oe=new ht().fromArray(Se),Y=new ht().fromArray(Ce);function re(k,de,K,ee){let ye=new Uint8Array(4),me=t.createTexture();t.bindTexture(k,me),t.texParameteri(k,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(k,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ge=0;Ge<K;Ge++)k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY?t.texImage3D(de,0,t.RGBA,1,1,ee,0,t.RGBA,t.UNSIGNED_BYTE,ye):t.texImage2D(de+Ge,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ye);return me}let le={};le[t.TEXTURE_2D]=re(t.TEXTURE_2D,t.TEXTURE_2D,1),le[t.TEXTURE_CUBE_MAP]=re(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[t.TEXTURE_2D_ARRAY]=re(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),le[t.TEXTURE_3D]=re(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ce(t.DEPTH_TEST),o.setFunc(qr),Ke(!1),Ze(Wc),ce(t.CULL_FACE),N(Ci);function ce(k){f[k]!==!0&&(t.enable(k),f[k]=!0)}function _e(k){f[k]!==!1&&(t.disable(k),f[k]=!1)}function O(k,de){return h[k]!==de?(t.bindFramebuffer(k,de),h[k]=de,k===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=de),k===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=de),!0):!1}function te(k,de){let K=p,ee=!1;if(k){K=u.get(de),K===void 0&&(K=[],u.set(de,K));let ye=k.textures;if(K.length!==ye.length||K[0]!==t.COLOR_ATTACHMENT0){for(let me=0,Ge=ye.length;me<Ge;me++)K[me]=t.COLOR_ATTACHMENT0+me;K.length=ye.length,ee=!0}}else K[0]!==t.BACK&&(K[0]=t.BACK,ee=!0);ee&&t.drawBuffers(K)}function ue(k){return d!==k?(t.useProgram(k),d=k,!0):!1}let se={[_r]:t.FUNC_ADD,[$d]:t.FUNC_SUBTRACT,[Jd]:t.FUNC_REVERSE_SUBTRACT};se[eu]=t.MIN,se[tu]=t.MAX;let we={[iu]:t.ZERO,[ru]:t.ONE,[nu]:t.SRC_COLOR,[po]:t.SRC_ALPHA,[fu]:t.SRC_ALPHA_SATURATE,[lu]:t.DST_COLOR,[ou]:t.DST_ALPHA,[su]:t.ONE_MINUS_SRC_COLOR,[mo]:t.ONE_MINUS_SRC_ALPHA,[cu]:t.ONE_MINUS_DST_COLOR,[au]:t.ONE_MINUS_DST_ALPHA,[hu]:t.CONSTANT_COLOR,[du]:t.ONE_MINUS_CONSTANT_COLOR,[uu]:t.CONSTANT_ALPHA,[pu]:t.ONE_MINUS_CONSTANT_ALPHA};function N(k,de,K,ee,ye,me,Ge,Rt,Kt,lt){if(k===Ci){y===!0&&(_e(t.BLEND),y=!1);return}if(y===!1&&(ce(t.BLEND),y=!0),k!==Qd){if(k!==g||lt!==S){if((m!==_r||x!==_r)&&(t.blendEquation(t.FUNC_ADD),m=_r,x=_r),lt)switch(k){case Er:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Xc:t.blendFunc(t.ONE,t.ONE);break;case qc:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case jc:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Er:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Xc:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case qc:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case jc:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}w=null,M=null,P=null,T=null,C.set(0,0,0),L=0,g=k,S=lt}return}ye=ye||de,me=me||K,Ge=Ge||ee,(de!==m||ye!==x)&&(t.blendEquationSeparate(se[de],se[ye]),m=de,x=ye),(K!==w||ee!==M||me!==P||Ge!==T)&&(t.blendFuncSeparate(we[K],we[ee],we[me],we[Ge]),w=K,M=ee,P=me,T=Ge),(Rt.equals(C)===!1||Kt!==L)&&(t.blendColor(Rt.r,Rt.g,Rt.b,Kt),C.copy(Rt),L=Kt),g=k,S=!1}function rt(k,de){k.side===qt?_e(t.CULL_FACE):ce(t.CULL_FACE);let K=k.side===nt;de&&(K=!K),Ke(K),k.blending===Er&&k.transparent===!1?N(Ci):N(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),s.setMask(k.colorWrite);let ee=k.stencilWrite;a.setTest(ee),ee&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),gt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ce(t.SAMPLE_ALPHA_TO_COVERAGE):_e(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(k){v!==k&&(k?t.frontFace(t.CW):t.frontFace(t.CCW),v=k)}function Ze(k){k!==Yd?(ce(t.CULL_FACE),k!==D&&(k===Wc?t.cullFace(t.BACK):k===Kd?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):_e(t.CULL_FACE),D=k}function De(k){k!==U&&(H&&t.lineWidth(k),U=k)}function gt(k,de,K){k?(ce(t.POLYGON_OFFSET_FILL),(I!==de||V!==K)&&(t.polygonOffset(de,K),I=de,V=K)):_e(t.POLYGON_OFFSET_FILL)}function Le(k){k?ce(t.SCISSOR_TEST):_e(t.SCISSOR_TEST)}function R(k){k===void 0&&(k=t.TEXTURE0+q-1),$!==k&&(t.activeTexture(k),$=k)}function E(k,de,K){K===void 0&&($===null?K=t.TEXTURE0+q-1:K=$);let ee=ne[K];ee===void 0&&(ee={type:void 0,texture:void 0},ne[K]=ee),(ee.type!==k||ee.texture!==de)&&($!==K&&(t.activeTexture(K),$=K),t.bindTexture(k,de||le[k]),ee.type=k,ee.texture=de)}function W(){let k=ne[$];k!==void 0&&k.type!==void 0&&(t.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function J(){try{t.compressedTexImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ie(){try{t.compressedTexImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Q(){try{t.texSubImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ae(){try{t.texSubImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ve(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function et(){try{t.texStorage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function oe(){try{t.texStorage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xe(){try{t.texImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pe(){try{t.texImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Fe(k){Oe.equals(k)===!1&&(t.scissor(k.x,k.y,k.z,k.w),Oe.copy(k))}function Ee(k){Y.equals(k)===!1&&(t.viewport(k.x,k.y,k.z,k.w),Y.copy(k))}function Qe(k,de){let K=c.get(de);K===void 0&&(K=new WeakMap,c.set(de,K));let ee=K.get(k);ee===void 0&&(ee=t.getUniformBlockIndex(de,k.name),K.set(k,ee))}function We(k,de){let ee=c.get(de).get(k);l.get(de)!==ee&&(t.uniformBlockBinding(de,ee,k.__bindingPointIndex),l.set(de,ee))}function dt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},$=null,ne={},h={},u=new WeakMap,p=[],d=null,y=!1,g=null,m=null,w=null,M=null,x=null,P=null,T=null,C=new Ie(0,0,0),L=0,S=!1,v=null,D=null,U=null,I=null,V=null,Oe.set(0,0,t.canvas.width,t.canvas.height),Y.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ce,disable:_e,bindFramebuffer:O,drawBuffers:te,useProgram:ue,setBlending:N,setMaterial:rt,setFlipSided:Ke,setCullFace:Ze,setLineWidth:De,setPolygonOffset:gt,setScissorTest:Le,activeTexture:R,bindTexture:E,unbindTexture:W,compressedTexImage2D:J,compressedTexImage3D:ie,texImage2D:xe,texImage3D:Pe,updateUBOMapping:Qe,uniformBlockBinding:We,texStorage2D:et,texStorage3D:oe,texSubImage2D:Q,texSubImage3D:Ae,compressedTexSubImage2D:pe,compressedTexSubImage3D:ve,scissor:Fe,viewport:Ee,reset:dt}}var o_,jy=A(()=>{je();Pi();on();o_={[Pa]:ka,[Ua]:za,[Fa]:Ba,[qr]:Oa,[ka]:Pa,[za]:Ua,[Ba]:Fa,[Oa]:qr}});function $f(t,e,i,r){let n=a_(r);switch(i){case qa:return t*e;case Ya:return t*e;case Ka:return t*e*2;case Za:return t*e/n.components*n.byteLength;case os:return t*e/n.components*n.byteLength;case Qa:return t*e*2/n.components*n.byteLength;case as:return t*e*2/n.components*n.byteLength;case ja:return t*e*3/n.components*n.byteLength;case Gt:return t*e*4/n.components*n.byteLength;case ls:return t*e*4/n.components*n.byteLength;case cs:case fs:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case hs:case ds:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case _o:case Mo:return Math.max(t,16)*Math.max(e,8)/4;case Eo:case wo:return Math.max(t,8)*Math.max(e,8)/2;case Ro:case bo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Co:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ao:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case To:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Do:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case No:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Io:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Po:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case ko:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Uo:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Fo:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Oo:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case zo:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Bo:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Go:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case us:case Vo:case Ho:return Math.ceil(t/4)*Math.ceil(e/4)*16;case $a:case Wo:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Xo:case qo:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function a_(t){switch(t){case Qt:case Ha:return{byteLength:1,components:1};case wr:case Wa:case sr:return{byteLength:2,components:1};case ns:case ss:return{byteLength:2,components:4};case vi:case rs:case ri:return{byteLength:4,components:1};case Xa:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}var Yy=A(()=>{je()});function Ky(t,e,i,r,n,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,f=new WeakMap,h,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(R,E){return p?new OffscreenCanvas(R,E):en("canvas")}function y(R,E,W){let J=1,ie=Le(R);if((ie.width>W||ie.height>W)&&(J=W/Math.max(ie.width,ie.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let Q=Math.floor(J*ie.width),Ae=Math.floor(J*ie.height);h===void 0&&(h=d(Q,Ae));let pe=E?d(Q,Ae):h;return pe.width=Q,pe.height=Ae,pe.getContext("2d").drawImage(R,0,0,Q,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Q+"x"+Ae+")."),pe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),R;return R}function g(R){return R.generateMipmaps}function m(R){t.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(R,E,W,J,ie=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Q=E;if(E===t.RED&&(W===t.FLOAT&&(Q=t.R32F),W===t.HALF_FLOAT&&(Q=t.R16F),W===t.UNSIGNED_BYTE&&(Q=t.R8)),E===t.RED_INTEGER&&(W===t.UNSIGNED_BYTE&&(Q=t.R8UI),W===t.UNSIGNED_SHORT&&(Q=t.R16UI),W===t.UNSIGNED_INT&&(Q=t.R32UI),W===t.BYTE&&(Q=t.R8I),W===t.SHORT&&(Q=t.R16I),W===t.INT&&(Q=t.R32I)),E===t.RG&&(W===t.FLOAT&&(Q=t.RG32F),W===t.HALF_FLOAT&&(Q=t.RG16F),W===t.UNSIGNED_BYTE&&(Q=t.RG8)),E===t.RG_INTEGER&&(W===t.UNSIGNED_BYTE&&(Q=t.RG8UI),W===t.UNSIGNED_SHORT&&(Q=t.RG16UI),W===t.UNSIGNED_INT&&(Q=t.RG32UI),W===t.BYTE&&(Q=t.RG8I),W===t.SHORT&&(Q=t.RG16I),W===t.INT&&(Q=t.RG32I)),E===t.RGB_INTEGER&&(W===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),W===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),W===t.UNSIGNED_INT&&(Q=t.RGB32UI),W===t.BYTE&&(Q=t.RGB8I),W===t.SHORT&&(Q=t.RGB16I),W===t.INT&&(Q=t.RGB32I)),E===t.RGBA_INTEGER&&(W===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),W===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),W===t.UNSIGNED_INT&&(Q=t.RGBA32UI),W===t.BYTE&&(Q=t.RGBA8I),W===t.SHORT&&(Q=t.RGBA16I),W===t.INT&&(Q=t.RGBA32I)),E===t.RGB&&W===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),E===t.RGBA){let Ae=ie?wn:He.getTransfer(J);W===t.FLOAT&&(Q=t.RGBA32F),W===t.HALF_FLOAT&&(Q=t.RGBA16F),W===t.UNSIGNED_BYTE&&(Q=Ae===$e?t.SRGB8_ALPHA8:t.RGBA8),W===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),W===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function x(R,E){let W;return R?E===null||E===vi||E===ji?W=t.DEPTH24_STENCIL8:E===ri?W=t.DEPTH32F_STENCIL8:E===wr&&(W=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===vi||E===ji?W=t.DEPTH_COMPONENT24:E===ri?W=t.DEPTH_COMPONENT32F:E===wr&&(W=t.DEPTH_COMPONENT16),W}function P(R,E){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==Zt&&R.minFilter!==ii?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function T(R){let E=R.target;E.removeEventListener("dispose",T),L(E),E.isVideoTexture&&f.delete(E)}function C(R){let E=R.target;E.removeEventListener("dispose",C),v(E)}function L(R){let E=r.get(R);if(E.__webglInit===void 0)return;let W=R.source,J=u.get(W);if(J){let ie=J[E.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&S(R),Object.keys(J).length===0&&u.delete(W)}r.remove(R)}function S(R){let E=r.get(R);t.deleteTexture(E.__webglTexture);let W=R.source,J=u.get(W);delete J[E.__cacheKey],o.memory.textures--}function v(R){let E=r.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),r.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(E.__webglFramebuffer[J]))for(let ie=0;ie<E.__webglFramebuffer[J].length;ie++)t.deleteFramebuffer(E.__webglFramebuffer[J][ie]);else t.deleteFramebuffer(E.__webglFramebuffer[J]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[J])}else{if(Array.isArray(E.__webglFramebuffer))for(let J=0;J<E.__webglFramebuffer.length;J++)t.deleteFramebuffer(E.__webglFramebuffer[J]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let J=0;J<E.__webglColorRenderbuffer.length;J++)E.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[J]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let W=R.textures;for(let J=0,ie=W.length;J<ie;J++){let Q=r.get(W[J]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),o.memory.textures--),r.remove(W[J])}r.remove(R)}let D=0;function U(){D=0}function I(){let R=D;return R>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+n.maxTextures),D+=1,R}function V(R){let E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function q(R,E){let W=r.get(R);if(R.isVideoTexture&&De(R),R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){let J=R.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(W,R,E);return}}i.bindTexture(t.TEXTURE_2D,W.__webglTexture,t.TEXTURE0+E)}function H(R,E){let W=r.get(R);if(R.version>0&&W.__version!==R.version){Y(W,R,E);return}i.bindTexture(t.TEXTURE_2D_ARRAY,W.__webglTexture,t.TEXTURE0+E)}function Z(R,E){let W=r.get(R);if(R.version>0&&W.__version!==R.version){Y(W,R,E);return}i.bindTexture(t.TEXTURE_3D,W.__webglTexture,t.TEXTURE0+E)}function G(R,E){let W=r.get(R);if(R.version>0&&W.__version!==R.version){re(W,R,E);return}i.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture,t.TEXTURE0+E)}let $={[So]:t.REPEAT,[Xi]:t.CLAMP_TO_EDGE,[vo]:t.MIRRORED_REPEAT},ne={[Zt]:t.NEAREST,[Mu]:t.NEAREST_MIPMAP_NEAREST,[xo]:t.NEAREST_MIPMAP_LINEAR,[ii]:t.LINEAR,[Va]:t.LINEAR_MIPMAP_NEAREST,[qi]:t.LINEAR_MIPMAP_LINEAR},Se={[Tu]:t.NEVER,[ku]:t.ALWAYS,[Du]:t.LESS,[Ja]:t.LEQUAL,[Lu]:t.EQUAL,[Pu]:t.GEQUAL,[Nu]:t.GREATER,[Iu]:t.NOTEQUAL};function Ce(R,E){if(E.type===ri&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===ii||E.magFilter===Va||E.magFilter===xo||E.magFilter===qi||E.minFilter===ii||E.minFilter===Va||E.minFilter===xo||E.minFilter===qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,$[E.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,$[E.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,$[E.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,ne[E.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,ne[E.minFilter]),E.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Se[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Zt||E.minFilter!==xo&&E.minFilter!==qi||E.type===ri&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,n.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Oe(R,E){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",T));let J=E.source,ie=u.get(J);ie===void 0&&(ie={},u.set(J,ie));let Q=V(E);if(Q!==R.__cacheKey){ie[Q]===void 0&&(ie[Q]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ie[Q].usedTimes++;let Ae=ie[R.__cacheKey];Ae!==void 0&&(ie[R.__cacheKey].usedTimes--,Ae.usedTimes===0&&S(E)),R.__cacheKey=Q,R.__webglTexture=ie[Q].texture}return W}function Y(R,E,W){let J=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(J=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(J=t.TEXTURE_3D);let ie=Oe(R,E),Q=E.source;i.bindTexture(J,R.__webglTexture,t.TEXTURE0+W);let Ae=r.get(Q);if(Q.version!==Ae.__version||ie===!0){i.activeTexture(t.TEXTURE0+W);let pe=He.getPrimaries(He.workingColorSpace),ve=E.colorSpace===Ti?null:He.getPrimaries(E.colorSpace),et=E.colorSpace===Ti||pe===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let oe=y(E.image,!1,n.maxTextureSize);oe=gt(E,oe);let xe=s.convert(E.format,E.colorSpace),Pe=s.convert(E.type),Fe=M(E.internalFormat,xe,Pe,E.colorSpace,E.isVideoTexture);Ce(J,E);let Ee,Qe=E.mipmaps,We=E.isVideoTexture!==!0,dt=Ae.__version===void 0||ie===!0,k=Q.dataReady,de=P(E,oe);if(E.isDepthTexture)Fe=x(E.format===ar,E.type),dt&&(We?i.texStorage2D(t.TEXTURE_2D,1,Fe,oe.width,oe.height):i.texImage2D(t.TEXTURE_2D,0,Fe,oe.width,oe.height,0,xe,Pe,null));else if(E.isDataTexture)if(Qe.length>0){We&&dt&&i.texStorage2D(t.TEXTURE_2D,de,Fe,Qe[0].width,Qe[0].height);for(let K=0,ee=Qe.length;K<ee;K++)Ee=Qe[K],We?k&&i.texSubImage2D(t.TEXTURE_2D,K,0,0,Ee.width,Ee.height,xe,Pe,Ee.data):i.texImage2D(t.TEXTURE_2D,K,Fe,Ee.width,Ee.height,0,xe,Pe,Ee.data);E.generateMipmaps=!1}else We?(dt&&i.texStorage2D(t.TEXTURE_2D,de,Fe,oe.width,oe.height),k&&i.texSubImage2D(t.TEXTURE_2D,0,0,0,oe.width,oe.height,xe,Pe,oe.data)):i.texImage2D(t.TEXTURE_2D,0,Fe,oe.width,oe.height,0,xe,Pe,oe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){We&&dt&&i.texStorage3D(t.TEXTURE_2D_ARRAY,de,Fe,Qe[0].width,Qe[0].height,oe.depth);for(let K=0,ee=Qe.length;K<ee;K++)if(Ee=Qe[K],E.format!==Gt)if(xe!==null)if(We){if(k)if(E.layerUpdates.size>0){let ye=$f(Ee.width,Ee.height,E.format,E.type);for(let me of E.layerUpdates){let Ge=Ee.data.subarray(me*ye/Ee.data.BYTES_PER_ELEMENT,(me+1)*ye/Ee.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,me,Ee.width,Ee.height,1,xe,Ge)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,Ee.width,Ee.height,oe.depth,xe,Ee.data)}else i.compressedTexImage3D(t.TEXTURE_2D_ARRAY,K,Fe,Ee.width,Ee.height,oe.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?k&&i.texSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,Ee.width,Ee.height,oe.depth,xe,Pe,Ee.data):i.texImage3D(t.TEXTURE_2D_ARRAY,K,Fe,Ee.width,Ee.height,oe.depth,0,xe,Pe,Ee.data)}else{We&&dt&&i.texStorage2D(t.TEXTURE_2D,de,Fe,Qe[0].width,Qe[0].height);for(let K=0,ee=Qe.length;K<ee;K++)Ee=Qe[K],E.format!==Gt?xe!==null?We?k&&i.compressedTexSubImage2D(t.TEXTURE_2D,K,0,0,Ee.width,Ee.height,xe,Ee.data):i.compressedTexImage2D(t.TEXTURE_2D,K,Fe,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?k&&i.texSubImage2D(t.TEXTURE_2D,K,0,0,Ee.width,Ee.height,xe,Pe,Ee.data):i.texImage2D(t.TEXTURE_2D,K,Fe,Ee.width,Ee.height,0,xe,Pe,Ee.data)}else if(E.isDataArrayTexture)if(We){if(dt&&i.texStorage3D(t.TEXTURE_2D_ARRAY,de,Fe,oe.width,oe.height,oe.depth),k)if(E.layerUpdates.size>0){let K=$f(oe.width,oe.height,E.format,E.type);for(let ee of E.layerUpdates){let ye=oe.data.subarray(ee*K/oe.data.BYTES_PER_ELEMENT,(ee+1)*K/oe.data.BYTES_PER_ELEMENT);i.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ee,oe.width,oe.height,1,xe,Pe,ye)}E.clearLayerUpdates()}else i.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,xe,Pe,oe.data)}else i.texImage3D(t.TEXTURE_2D_ARRAY,0,Fe,oe.width,oe.height,oe.depth,0,xe,Pe,oe.data);else if(E.isData3DTexture)We?(dt&&i.texStorage3D(t.TEXTURE_3D,de,Fe,oe.width,oe.height,oe.depth),k&&i.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,xe,Pe,oe.data)):i.texImage3D(t.TEXTURE_3D,0,Fe,oe.width,oe.height,oe.depth,0,xe,Pe,oe.data);else if(E.isFramebufferTexture){if(dt)if(We)i.texStorage2D(t.TEXTURE_2D,de,Fe,oe.width,oe.height);else{let K=oe.width,ee=oe.height;for(let ye=0;ye<de;ye++)i.texImage2D(t.TEXTURE_2D,ye,Fe,K,ee,0,xe,Pe,null),K>>=1,ee>>=1}}else if(Qe.length>0){if(We&&dt){let K=Le(Qe[0]);i.texStorage2D(t.TEXTURE_2D,de,Fe,K.width,K.height)}for(let K=0,ee=Qe.length;K<ee;K++)Ee=Qe[K],We?k&&i.texSubImage2D(t.TEXTURE_2D,K,0,0,xe,Pe,Ee):i.texImage2D(t.TEXTURE_2D,K,Fe,xe,Pe,Ee);E.generateMipmaps=!1}else if(We){if(dt){let K=Le(oe);i.texStorage2D(t.TEXTURE_2D,de,Fe,K.width,K.height)}k&&i.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,Pe,oe)}else i.texImage2D(t.TEXTURE_2D,0,Fe,xe,Pe,oe);g(E)&&m(J),Ae.__version=Q.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function re(R,E,W){if(E.image.length!==6)return;let J=Oe(R,E),ie=E.source;i.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+W);let Q=r.get(ie);if(ie.version!==Q.__version||J===!0){i.activeTexture(t.TEXTURE0+W);let Ae=He.getPrimaries(He.workingColorSpace),pe=E.colorSpace===Ti?null:He.getPrimaries(E.colorSpace),ve=E.colorSpace===Ti||Ae===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let et=E.isCompressedTexture||E.image[0].isCompressedTexture,oe=E.image[0]&&E.image[0].isDataTexture,xe=[];for(let ee=0;ee<6;ee++)!et&&!oe?xe[ee]=y(E.image[ee],!0,n.maxCubemapSize):xe[ee]=oe?E.image[ee].image:E.image[ee],xe[ee]=gt(E,xe[ee]);let Pe=xe[0],Fe=s.convert(E.format,E.colorSpace),Ee=s.convert(E.type),Qe=M(E.internalFormat,Fe,Ee,E.colorSpace),We=E.isVideoTexture!==!0,dt=Q.__version===void 0||J===!0,k=ie.dataReady,de=P(E,Pe);Ce(t.TEXTURE_CUBE_MAP,E);let K;if(et){We&&dt&&i.texStorage2D(t.TEXTURE_CUBE_MAP,de,Qe,Pe.width,Pe.height);for(let ee=0;ee<6;ee++){K=xe[ee].mipmaps;for(let ye=0;ye<K.length;ye++){let me=K[ye];E.format!==Gt?Fe!==null?We?k&&i.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye,0,0,me.width,me.height,Fe,me.data):i.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye,Qe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?k&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye,0,0,me.width,me.height,Fe,Ee,me.data):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye,Qe,me.width,me.height,0,Fe,Ee,me.data)}}}else{if(K=E.mipmaps,We&&dt){K.length>0&&de++;let ee=Le(xe[0]);i.texStorage2D(t.TEXTURE_CUBE_MAP,de,Qe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(oe){We?k&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,xe[ee].width,xe[ee].height,Fe,Ee,xe[ee].data):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Qe,xe[ee].width,xe[ee].height,0,Fe,Ee,xe[ee].data);for(let ye=0;ye<K.length;ye++){let Ge=K[ye].image[ee].image;We?k&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye+1,0,0,Ge.width,Ge.height,Fe,Ee,Ge.data):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye+1,Qe,Ge.width,Ge.height,0,Fe,Ee,Ge.data)}}else{We?k&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Fe,Ee,xe[ee]):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Qe,Fe,Ee,xe[ee]);for(let ye=0;ye<K.length;ye++){let me=K[ye];We?k&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye+1,0,0,Fe,Ee,me.image[ee]):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye+1,Qe,Fe,Ee,me.image[ee])}}}g(E)&&m(t.TEXTURE_CUBE_MAP),Q.__version=ie.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function le(R,E,W,J,ie,Q){let Ae=s.convert(W.format,W.colorSpace),pe=s.convert(W.type),ve=M(W.internalFormat,Ae,pe,W.colorSpace),et=r.get(E),oe=r.get(W);if(oe.__renderTarget=E,!et.__hasExternalTextures){let xe=Math.max(1,E.width>>Q),Pe=Math.max(1,E.height>>Q);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?i.texImage3D(ie,Q,ve,xe,Pe,E.depth,0,Ae,pe,null):i.texImage2D(ie,Q,ve,xe,Pe,0,Ae,pe,null)}i.bindFramebuffer(t.FRAMEBUFFER,R),Ze(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,ie,oe.__webglTexture,0,Ke(E)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,J,ie,oe.__webglTexture,Q),i.bindFramebuffer(t.FRAMEBUFFER,null)}function ce(R,E,W){if(t.bindRenderbuffer(t.RENDERBUFFER,R),E.depthBuffer){let J=E.depthTexture,ie=J&&J.isDepthTexture?J.type:null,Q=x(E.stencilBuffer,ie),Ae=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=Ke(E);Ze(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,pe,Q,E.width,E.height):W?t.renderbufferStorageMultisample(t.RENDERBUFFER,pe,Q,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Q,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ae,t.RENDERBUFFER,R)}else{let J=E.textures;for(let ie=0;ie<J.length;ie++){let Q=J[ie],Ae=s.convert(Q.format,Q.colorSpace),pe=s.convert(Q.type),ve=M(Q.internalFormat,Ae,pe,Q.colorSpace),et=Ke(E);W&&Ze(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,et,ve,E.width,E.height):Ze(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,et,ve,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ve,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function _e(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(t.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=r.get(E.depthTexture);J.__renderTarget=E,(!J.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),q(E.depthTexture,0);let ie=J.__webglTexture,Q=Ke(E);if(E.depthTexture.format===or)Ze(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0);else if(E.depthTexture.format===ar)Ze(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function O(R){let E=r.get(R),W=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){let J=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),J){let ie=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,J.removeEventListener("dispose",ie)};J.addEventListener("dispose",ie),E.__depthDisposeCallback=ie}E.__boundDepthTexture=J}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");_e(E.__webglFramebuffer,R)}else if(W){E.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(i.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[J]),E.__webglDepthbuffer[J]===void 0)E.__webglDepthbuffer[J]=t.createRenderbuffer(),ce(E.__webglDepthbuffer[J],R,!1);else{let ie=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=E.__webglDepthbuffer[J];t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,Q)}}else if(i.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),ce(E.__webglDepthbuffer,R,!1);else{let J=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ie),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,ie)}i.bindFramebuffer(t.FRAMEBUFFER,null)}function te(R,E,W){let J=r.get(R);E!==void 0&&le(J.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),W!==void 0&&O(R)}function ue(R){let E=R.texture,W=r.get(R),J=r.get(E);R.addEventListener("dispose",C);let ie=R.textures,Q=R.isWebGLCubeRenderTarget===!0,Ae=ie.length>1;if(Ae||(J.__webglTexture===void 0&&(J.__webglTexture=t.createTexture()),J.__version=E.version,o.memory.textures++),Q){W.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[pe]=[];for(let ve=0;ve<E.mipmaps.length;ve++)W.__webglFramebuffer[pe][ve]=t.createFramebuffer()}else W.__webglFramebuffer[pe]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let pe=0;pe<E.mipmaps.length;pe++)W.__webglFramebuffer[pe]=t.createFramebuffer()}else W.__webglFramebuffer=t.createFramebuffer();if(Ae)for(let pe=0,ve=ie.length;pe<ve;pe++){let et=r.get(ie[pe]);et.__webglTexture===void 0&&(et.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&Ze(R)===!1){W.__webglMultisampledFramebuffer=t.createFramebuffer(),W.__webglColorRenderbuffer=[],i.bindFramebuffer(t.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let pe=0;pe<ie.length;pe++){let ve=ie[pe];W.__webglColorRenderbuffer[pe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,W.__webglColorRenderbuffer[pe]);let et=s.convert(ve.format,ve.colorSpace),oe=s.convert(ve.type),xe=M(ve.internalFormat,et,oe,ve.colorSpace,R.isXRRenderTarget===!0),Pe=Ke(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Pe,xe,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,W.__webglColorRenderbuffer[pe])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=t.createRenderbuffer(),ce(W.__webglDepthRenderbuffer,R,!0)),i.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){i.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),Ce(t.TEXTURE_CUBE_MAP,E);for(let pe=0;pe<6;pe++)if(E.mipmaps&&E.mipmaps.length>0)for(let ve=0;ve<E.mipmaps.length;ve++)le(W.__webglFramebuffer[pe][ve],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ve);else le(W.__webglFramebuffer[pe],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);g(E)&&m(t.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ae){for(let pe=0,ve=ie.length;pe<ve;pe++){let et=ie[pe],oe=r.get(et);i.bindTexture(t.TEXTURE_2D,oe.__webglTexture),Ce(t.TEXTURE_2D,et),le(W.__webglFramebuffer,R,et,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,0),g(et)&&m(t.TEXTURE_2D)}i.unbindTexture()}else{let pe=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),i.bindTexture(pe,J.__webglTexture),Ce(pe,E),E.mipmaps&&E.mipmaps.length>0)for(let ve=0;ve<E.mipmaps.length;ve++)le(W.__webglFramebuffer[ve],R,E,t.COLOR_ATTACHMENT0,pe,ve);else le(W.__webglFramebuffer,R,E,t.COLOR_ATTACHMENT0,pe,0);g(E)&&m(pe),i.unbindTexture()}R.depthBuffer&&O(R)}function se(R){let E=R.textures;for(let W=0,J=E.length;W<J;W++){let ie=E[W];if(g(ie)){let Q=w(R),Ae=r.get(ie).__webglTexture;i.bindTexture(Q,Ae),m(Q),i.unbindTexture()}}}let we=[],N=[];function rt(R){if(R.samples>0){if(Ze(R)===!1){let E=R.textures,W=R.width,J=R.height,ie=t.COLOR_BUFFER_BIT,Q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ae=r.get(R),pe=E.length>1;if(pe)for(let ve=0;ve<E.length;ve++)i.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,null),i.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,null,0);i.bindFramebuffer(t.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let ve=0;ve<E.length;ve++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),pe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[ve]);let et=r.get(E[ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,et,0)}t.blitFramebuffer(0,0,W,J,0,0,W,J,ie,t.NEAREST),l===!0&&(we.length=0,N.length=0,we.push(t.COLOR_ATTACHMENT0+ve),R.depthBuffer&&R.resolveDepthBuffer===!1&&(we.push(Q),N.push(Q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,N)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,we))}if(i.bindFramebuffer(t.READ_FRAMEBUFFER,null),i.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),pe)for(let ve=0;ve<E.length;ve++){i.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[ve]);let et=r.get(E[ve]).__webglTexture;i.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,et,0)}i.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let E=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function Ke(R){return Math.min(n.maxSamples,R.samples)}function Ze(R){let E=r.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function De(R){let E=o.render.frame;f.get(R)!==E&&(f.set(R,E),R.update())}function gt(R,E){let W=R.colorSpace,J=R.format,ie=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||W!==Yi&&W!==Ti&&(He.getTransfer(W)===$e?(J!==Gt||ie!==Qt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),E}function Le(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=U,this.setTexture2D=q,this.setTexture2DArray=H,this.setTexture3D=Z,this.setTextureCube=G,this.rebindTextures=te,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=O,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Ze}var Zy=A(()=>{je();tn();dr();ai();Yy()});function Qy(t,e){function i(r,n=Ti){let s,o=He.getTransfer(n);if(r===Qt)return t.UNSIGNED_BYTE;if(r===ns)return t.UNSIGNED_SHORT_4_4_4_4;if(r===ss)return t.UNSIGNED_SHORT_5_5_5_1;if(r===Xa)return t.UNSIGNED_INT_5_9_9_9_REV;if(r===Ha)return t.BYTE;if(r===Wa)return t.SHORT;if(r===wr)return t.UNSIGNED_SHORT;if(r===rs)return t.INT;if(r===vi)return t.UNSIGNED_INT;if(r===ri)return t.FLOAT;if(r===sr)return t.HALF_FLOAT;if(r===qa)return t.ALPHA;if(r===ja)return t.RGB;if(r===Gt)return t.RGBA;if(r===Ya)return t.LUMINANCE;if(r===Ka)return t.LUMINANCE_ALPHA;if(r===or)return t.DEPTH_COMPONENT;if(r===ar)return t.DEPTH_STENCIL;if(r===Za)return t.RED;if(r===os)return t.RED_INTEGER;if(r===Qa)return t.RG;if(r===as)return t.RG_INTEGER;if(r===ls)return t.RGBA_INTEGER;if(r===cs||r===fs||r===hs||r===ds)if(o===$e)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===cs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===fs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===hs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ds)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===cs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===fs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===hs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ds)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Eo||r===_o||r===wo||r===Mo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===Eo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===_o)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===wo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Mo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ro||r===bo||r===Co)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(r===Ro||r===bo)return o===$e?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===Co)return o===$e?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ao||r===To||r===Do||r===Lo||r===No||r===Io||r===Po||r===ko||r===Uo||r===Fo||r===Oo||r===zo||r===Bo||r===Go)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(r===Ao)return o===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===To)return o===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Do)return o===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Lo)return o===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===No)return o===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Io)return o===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Po)return o===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ko)return o===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Uo)return o===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Fo)return o===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Oo)return o===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===zo)return o===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Bo)return o===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Go)return o===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===us||r===Vo||r===Ho)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(r===us)return o===$e?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Vo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ho)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===$a||r===Wo||r===Xo||r===qo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(r===us)return s.COMPRESSED_RED_RGTC1_EXT;if(r===Wo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Xo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===qo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ji?t.UNSIGNED_INT_24_8:t[r]!==void 0?t[r]:null}return{convert:i}}var $y=A(()=>{je();dr()});var Gl,Jy=A(()=>{Ls();Gl=class extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}});var l_,Ws,e3=A(()=>{xt();pl();l_={type:"move"},Ws=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let i=this._hand;if(i)for(let r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let n=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let g=i.getJointPose(y,r),m=this._getHandJoint(c,y);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=f.position.distanceTo(h.position),p=.02,d=.005;c.inputState.pinching&&u>p+d?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-d&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=i.getPose(e.gripSpace,r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=i.getPose(e.targetRaySpace,r),n===null&&s!==null&&(n=s),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(l_)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){let r=new $i;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}});var c_,f_,Vl,t3=A(()=>{Lf();Ps();ln();Tr();c_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,f_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Vl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){let n=new Tt,s=e.properties.get(n);s.__webglTexture=i.texture,(i.depthNear!=r.depthNear||i.depthFar!=r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let i=e.cameras[0].viewport,r=new li({vertexShader:c_,fragmentShader:f_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Mt(new Is(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}});var Hl,i3=A(()=>{Jy();An();Ls();ai();xt();on();oi();Df();ks();e3();Hf();je();t3();Hl=class extends ui{constructor(e,i){super();let r=this,n=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,h=null,u=null,p=null,d=null,y=new Vl,g=i.getContextAttributes(),m=null,w=null,M=[],x=[],P=new Ue,T=null,C=new Nt;C.viewport=new ht;let L=new Nt;L.viewport=new ht;let S=[C,L],v=new Gl,D=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let re=M[Y];return re===void 0&&(re=new Ws,M[Y]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Y){let re=M[Y];return re===void 0&&(re=new Ws,M[Y]=re),re.getGripSpace()},this.getHand=function(Y){let re=M[Y];return re===void 0&&(re=new Ws,M[Y]=re),re.getHandSpace()};function I(Y){let re=x.indexOf(Y.inputSource);if(re===-1)return;let le=M[re];le!==void 0&&(le.update(Y.inputSource,Y.frame,c||o),le.dispatchEvent({type:Y.type,data:Y.inputSource}))}function V(){n.removeEventListener("select",I),n.removeEventListener("selectstart",I),n.removeEventListener("selectend",I),n.removeEventListener("squeeze",I),n.removeEventListener("squeezestart",I),n.removeEventListener("squeezeend",I),n.removeEventListener("end",V),n.removeEventListener("inputsourceschange",q);for(let Y=0;Y<M.length;Y++){let re=x[Y];re!==null&&(x[Y]=null,M[Y].disconnect(re))}D=null,U=null,y.reset(),e.setRenderTarget(m),p=null,u=null,h=null,n=null,w=null,Oe.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(P.width,P.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h},this.getFrame=function(){return d},this.getSession=function(){return n},this.setSession=async function(Y){if(n=Y,n!==null){if(m=e.getRenderTarget(),n.addEventListener("select",I),n.addEventListener("selectstart",I),n.addEventListener("selectend",I),n.addEventListener("squeeze",I),n.addEventListener("squeezestart",I),n.addEventListener("squeezeend",I),n.addEventListener("end",V),n.addEventListener("inputsourceschange",q),g.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(P),n.renderState.layers===void 0){let re={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(n,i,re),n.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new pi(p.framebufferWidth,p.framebufferHeight,{format:Gt,type:Qt,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let re=null,le=null,ce=null;g.depth&&(ce=g.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,re=g.stencil?ar:or,le=g.stencil?ji:vi);let _e={colorFormat:i.RGBA8,depthFormat:ce,scaleFactor:s};h=new XRWebGLBinding(n,i),u=h.createProjectionLayer(_e),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),w=new pi(u.textureWidth,u.textureHeight,{format:Gt,type:Qt,depthTexture:new Vs(u.textureWidth,u.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),Oe.setContext(n),Oe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function q(Y){for(let re=0;re<Y.removed.length;re++){let le=Y.removed[re],ce=x.indexOf(le);ce>=0&&(x[ce]=null,M[ce].disconnect(le))}for(let re=0;re<Y.added.length;re++){let le=Y.added[re],ce=x.indexOf(le);if(ce===-1){for(let O=0;O<M.length;O++)if(O>=x.length){x.push(le),ce=O;break}else if(x[O]===null){x[O]=le,ce=O;break}if(ce===-1)break}let _e=M[ce];_e&&_e.connect(le)}}let H=new F,Z=new F;function G(Y,re,le){H.setFromMatrixPosition(re.matrixWorld),Z.setFromMatrixPosition(le.matrixWorld);let ce=H.distanceTo(Z),_e=re.projectionMatrix.elements,O=le.projectionMatrix.elements,te=_e[14]/(_e[10]-1),ue=_e[14]/(_e[10]+1),se=(_e[9]+1)/_e[5],we=(_e[9]-1)/_e[5],N=(_e[8]-1)/_e[0],rt=(O[8]+1)/O[0],Ke=te*N,Ze=te*rt,De=ce/(-N+rt),gt=De*-N;if(re.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(gt),Y.translateZ(De),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),_e[10]===-1)Y.projectionMatrix.copy(re.projectionMatrix),Y.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{let Le=te+De,R=ue+De,E=Ke-gt,W=Ze+(ce-gt),J=se*ue/R*Le,ie=we*ue/R*Le;Y.projectionMatrix.makePerspective(E,W,J,ie,Le,R),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function $(Y,re){re===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(re.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(n===null)return;let re=Y.near,le=Y.far;y.texture!==null&&(y.depthNear>0&&(re=y.depthNear),y.depthFar>0&&(le=y.depthFar)),v.near=L.near=C.near=re,v.far=L.far=C.far=le,(D!==v.near||U!==v.far)&&(n.updateRenderState({depthNear:v.near,depthFar:v.far}),D=v.near,U=v.far),C.layers.mask=Y.layers.mask|2,L.layers.mask=Y.layers.mask|4,v.layers.mask=C.layers.mask|L.layers.mask;let ce=Y.parent,_e=v.cameras;$(v,ce);for(let O=0;O<_e.length;O++)$(_e[O],ce);_e.length===2?G(v,C,L):v.projectionMatrix.copy(C.projectionMatrix),ne(Y,v,ce)};function ne(Y,re,le){le===null?Y.matrix.copy(re.matrixWorld):(Y.matrix.copy(le.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(re.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(re.projectionMatrix),Y.projectionMatrixInverse.copy(re.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=jo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(v)};let Se=null;function Ce(Y,re){if(f=re.getViewerPose(c||o),d=re,f!==null){let le=f.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let ce=!1;le.length!==v.cameras.length&&(v.cameras.length=0,ce=!0);for(let O=0;O<le.length;O++){let te=le[O],ue=null;if(p!==null)ue=p.getViewport(te);else{let we=h.getViewSubImage(u,te);ue=we.viewport,O===0&&(e.setRenderTargetTextures(w,we.colorTexture,u.ignoreDepthValues?void 0:we.depthStencilTexture),e.setRenderTarget(w))}let se=S[O];se===void 0&&(se=new Nt,se.layers.enable(O),se.viewport=new ht,S[O]=se),se.matrix.fromArray(te.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(te.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(ue.x,ue.y,ue.width,ue.height),O===0&&(v.matrix.copy(se.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ce===!0&&v.cameras.push(se)}let _e=n.enabledFeatures;if(_e&&_e.includes("depth-sensing")){let O=h.getDepthInformation(le[0]);O&&O.isValid&&O.texture&&y.init(e,O,n.renderState)}}for(let le=0;le<M.length;le++){let ce=x[le],_e=M[le];ce!==null&&_e!==void 0&&_e.update(ce,re,c||o)}Se&&Se(Y,re),re.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:re}),d=null}let Oe=new Cl;Oe.setAnimationLoop(Ce),this.setAnimationLoop=function(Y){Se=Y},this.dispose=function(){}}}});function r3(t,e){function i(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function r(g,m){m.color.getRGB(g.fogColor.value,Al(t)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function n(g,m,w,M,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),h(g,m)):m.isMeshPhongMaterial?(s(g,m),f(g,m)):m.isMeshStandardMaterial?(s(g,m),u(g,m),m.isMeshPhysicalMaterial&&p(g,m,x)):m.isMeshMatcapMaterial?(s(g,m),d(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),y(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,w,M):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,i(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,i(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,i(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===nt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,i(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===nt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,i(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,i(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,i(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let w=e.get(m),M=w.envMap,x=w.envMapRotation;M&&(g.envMap.value=M,On.copy(x),On.x*=-1,On.y*=-1,On.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(On.y*=-1,On.z*=-1),g.envMapRotation.value.setFromMatrix4(h_.makeRotationFromEuler(On)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,i(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,i(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,i(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,w,M){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*w,g.scale.value=M*.5,m.map&&(g.map.value=m.map,i(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,i(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,i(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,i(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function f(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,i(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,i(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,w){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,i(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,i(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,i(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,i(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,i(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===nt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,i(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,i(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,i(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,i(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,i(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,i(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,i(m.specularIntensityMap,g.specularIntensityMapTransform))}function d(g,m){m.matcap&&(g.matcap.value=m.matcap)}function y(g,m){let w=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:n}}var On,h_,n3=A(()=>{je();Pn();$r();Ni();On=new wt,h_=new Ye});function s3(t,e,i,r){let n={},s={},o=[],a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,M){let x=M.program;r.uniformBlockBinding(w,x)}function c(w,M){let x=n[w.id];x===void 0&&(d(w),x=f(w),n[w.id]=x,w.addEventListener("dispose",g));let P=M.program;r.updateUBOMapping(w,P);let T=e.render.frame;s[w.id]!==T&&(u(w),s[w.id]=T)}function f(w){let M=h();w.__bindingPointIndex=M;let x=t.createBuffer(),P=w.__size,T=w.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,P,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,M,x),x}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(w){let M=n[w.id],x=w.uniforms,P=w.__cache;t.bindBuffer(t.UNIFORM_BUFFER,M);for(let T=0,C=x.length;T<C;T++){let L=Array.isArray(x[T])?x[T]:[x[T]];for(let S=0,v=L.length;S<v;S++){let D=L[S];if(p(D,T,S,P)===!0){let U=D.__offset,I=Array.isArray(D.value)?D.value:[D.value],V=0;for(let q=0;q<I.length;q++){let H=I[q],Z=y(H);typeof H=="number"||typeof H=="boolean"?(D.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,U+V,D.__data)):H.isMatrix3?(D.__data[0]=H.elements[0],D.__data[1]=H.elements[1],D.__data[2]=H.elements[2],D.__data[3]=0,D.__data[4]=H.elements[3],D.__data[5]=H.elements[4],D.__data[6]=H.elements[5],D.__data[7]=0,D.__data[8]=H.elements[6],D.__data[9]=H.elements[7],D.__data[10]=H.elements[8],D.__data[11]=0):(H.toArray(D.__data,V),V+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,U,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(w,M,x,P){let T=w.value,C=M+"_"+x;if(P[C]===void 0)return typeof T=="number"||typeof T=="boolean"?P[C]=T:P[C]=T.clone(),!0;{let L=P[C];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return P[C]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function d(w){let M=w.uniforms,x=0,P=16;for(let C=0,L=M.length;C<L;C++){let S=Array.isArray(M[C])?M[C]:[M[C]];for(let v=0,D=S.length;v<D;v++){let U=S[v],I=Array.isArray(U.value)?U.value:[U.value];for(let V=0,q=I.length;V<q;V++){let H=I[V],Z=y(H),G=x%P,$=G%Z.boundary,ne=G+$;x+=$,ne!==0&&P-ne<Z.storage&&(x+=P-ne),U.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=Z.storage}}}let T=x%P;return T>0&&(x+=P-T),w.__size=x,w.__cache={},this}function y(w){let M={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(M.boundary=4,M.storage=4):w.isVector2?(M.boundary=8,M.storage=8):w.isVector3||w.isColor?(M.boundary=16,M.storage=12):w.isVector4?(M.boundary=16,M.storage=16):w.isMatrix3?(M.boundary=48,M.storage=48):w.isMatrix4?(M.boundary=64,M.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),M}function g(w){let M=w.target;M.removeEventListener("dispose",g);let x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(n[M.id]),delete n[M.id],delete s[M.id]}function m(){for(let w in n)t.deleteBuffer(n[w]);o=[],n={},s={}}return{bind:l,update:c,dispose:m}}var o3=A(()=>{});var Wl,a3=A(()=>{je();Pi();Tf();Ni();xt();on();Df();v0();_2();M2();b2();A2();D2();k2();X2();j2();K2();Q2();J2();ty();ry();Cy();Ty();Iy();Oy();ks();Xy();jy();Zy();Yf();$y();i3();n3();o3();tn();dr();Wl=class{constructor(e={}){let{canvas:i=qu(),context:r=null,depth:n=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let p;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=r.getContextAttributes().alpha}else p=o;let d=new Uint32Array(4),y=new Int32Array(4),g=null,m=null,w=[],M=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ni,this.toneMapping=Ai,this.toneMappingExposure=1;let x=this,P=!1,T=0,C=0,L=null,S=-1,v=null,D=new ht,U=new ht,I=null,V=new Ie(0),q=0,H=i.width,Z=i.height,G=1,$=null,ne=null,Se=new ht(0,0,H,Z),Ce=new ht(0,0,H,Z),Oe=!1,Y=new Ns,re=!1,le=!1,ce=new Ye,_e=new Ye,O=new F,te=new ht,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},se=!1;function we(){return L===null?G:1}let N=r;function rt(_,z){return i.getContext(_,z)}try{let _={alpha:!0,depth:n,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${"170"}`),i.addEventListener("webglcontextlost",ee,!1),i.addEventListener("webglcontextrestored",ye,!1),i.addEventListener("webglcontextcreationerror",me,!1),N===null){let z="webgl2";if(N=rt(z,_),N===null)throw rt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let Ke,Ze,De,gt,Le,R,E,W,J,ie,Q,Ae,pe,ve,et,oe,xe,Pe,Fe,Ee,Qe,We,dt,k;function de(){Ke=new q2(N),Ke.init(),We=new Qy(N,Ke),Ze=new C2(N,Ke,e,We),De=new qy(N,Ke),Ze.reverseDepthBuffer&&u&&De.buffers.depth.setReversed(!0),gt=new $2(N),Le=new Ay,R=new Ky(N,Ke,De,Le,Ze,We,gt),E=new P2(x),W=new W2(x),J=new S0(N),dt=new w2(N,J),ie=new Y2(N,J,gt,dt),Q=new iy(N,ie,J,gt),Fe=new ey(N,Ze,R),oe=new T2(Le),Ae=new by(x,E,W,Ke,Ze,dt,oe),pe=new r3(x,Le),ve=new Ny,et=new Fy(Ke),Pe=new E2(x,E,W,De,Q,p,l),xe=new Wy(x,Q,Ze),k=new s3(N,gt,Ze,De),Ee=new R2(N,Ke,gt),Qe=new Z2(N,Ke,gt),gt.programs=Ae.programs,x.capabilities=Ze,x.extensions=Ke,x.properties=Le,x.renderLists=ve,x.shadowMap=xe,x.state=De,x.info=gt}de();let K=new Hl(x,N);this.xr=K,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let _=Ke.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=Ke.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(_){_!==void 0&&(G=_,this.setSize(H,Z,!1))},this.getSize=function(_){return _.set(H,Z)},this.setSize=function(_,z,X=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=_,Z=z,i.width=Math.floor(_*G),i.height=Math.floor(z*G),X===!0&&(i.style.width=_+"px",i.style.height=z+"px"),this.setViewport(0,0,_,z)},this.getDrawingBufferSize=function(_){return _.set(H*G,Z*G).floor()},this.setDrawingBufferSize=function(_,z,X){H=_,Z=z,G=X,i.width=Math.floor(_*X),i.height=Math.floor(z*X),this.setViewport(0,0,_,z)},this.getCurrentViewport=function(_){return _.copy(D)},this.getViewport=function(_){return _.copy(Se)},this.setViewport=function(_,z,X,j){_.isVector4?Se.set(_.x,_.y,_.z,_.w):Se.set(_,z,X,j),De.viewport(D.copy(Se).multiplyScalar(G).round())},this.getScissor=function(_){return _.copy(Ce)},this.setScissor=function(_,z,X,j){_.isVector4?Ce.set(_.x,_.y,_.z,_.w):Ce.set(_,z,X,j),De.scissor(U.copy(Ce).multiplyScalar(G).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(_){De.setScissorTest(Oe=_)},this.setOpaqueSort=function(_){$=_},this.setTransparentSort=function(_){ne=_},this.getClearColor=function(_){return _.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(_=!0,z=!0,X=!0){let j=0;if(_){let B=!1;if(L!==null){let ae=L.texture.format;B=ae===ls||ae===as||ae===os}if(B){let ae=L.texture.type,ge=ae===Qt||ae===vi||ae===wr||ae===ji||ae===ns||ae===ss,Me=Pe.getClearColor(),Re=Pe.getClearAlpha(),ze=Me.r,Ve=Me.g,be=Me.b;ge?(d[0]=ze,d[1]=Ve,d[2]=be,d[3]=Re,N.clearBufferuiv(N.COLOR,0,d)):(y[0]=ze,y[1]=Ve,y[2]=be,y[3]=Re,N.clearBufferiv(N.COLOR,0,y))}else j|=N.COLOR_BUFFER_BIT}z&&(j|=N.DEPTH_BUFFER_BIT),X&&(j|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ee,!1),i.removeEventListener("webglcontextrestored",ye,!1),i.removeEventListener("webglcontextcreationerror",me,!1),ve.dispose(),et.dispose(),Le.dispose(),E.dispose(),W.dispose(),Q.dispose(),dt.dispose(),k.dispose(),Ae.dispose(),K.dispose(),K.removeEventListener("sessionstart",_h),K.removeEventListener("sessionend",wh),un.stop()};function ee(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let _=gt.autoReset,z=xe.enabled,X=xe.autoUpdate,j=xe.needsUpdate,B=xe.type;de(),gt.autoReset=_,xe.enabled=z,xe.autoUpdate=X,xe.needsUpdate=j,xe.type=B}function me(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function Ge(_){let z=_.target;z.removeEventListener("dispose",Ge),Rt(z)}function Rt(_){Kt(_),Le.remove(_)}function Kt(_){let z=Le.get(_).programs;z!==void 0&&(z.forEach(function(X){Ae.releaseProgram(X)}),_.isShaderMaterial&&Ae.releaseShaderCache(_))}this.renderBufferDirect=function(_,z,X,j,B,ae){z===null&&(z=ue);let ge=B.isMesh&&B.matrixWorld.determinant()<0,Me=LS(_,z,X,j,B);De.setMaterial(j,ge);let Re=X.index,ze=1;if(j.wireframe===!0){if(Re=ie.getWireframeAttribute(X),Re===void 0)return;ze=2}let Ve=X.drawRange,be=X.attributes.position,it=Ve.start*ze,ut=(Ve.start+Ve.count)*ze;ae!==null&&(it=Math.max(it,ae.start*ze),ut=Math.min(ut,(ae.start+ae.count)*ze)),Re!==null?(it=Math.max(it,0),ut=Math.min(ut,Re.count)):be!=null&&(it=Math.max(it,0),ut=Math.min(ut,be.count));let yt=ut-it;if(yt<0||yt===1/0)return;dt.setup(B,j,Me,X,Re);let ci,ot=Ee;if(Re!==null&&(ci=J.get(Re),ot=Qe,ot.setIndex(ci)),B.isMesh)j.wireframe===!0?(De.setLineWidth(j.wireframeLinewidth*we()),ot.setMode(N.LINES)):ot.setMode(N.TRIANGLES);else if(B.isLine){let Te=j.linewidth;Te===void 0&&(Te=1),De.setLineWidth(Te*we()),B.isLineSegments?ot.setMode(N.LINES):B.isLineLoop?ot.setMode(N.LINE_LOOP):ot.setMode(N.LINE_STRIP)}else B.isPoints?ot.setMode(N.POINTS):B.isSprite&&ot.setMode(N.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)ot.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))ot.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Te=B._multiDrawStarts,gr=B._multiDrawCounts,at=B._multiDrawCount,Fi=Re?J.get(Re).bytesPerElement:1,Hn=Le.get(j).currentProgram.getUniforms();for(let gi=0;gi<at;gi++)Hn.setValue(N,"_gl_DrawID",gi),ot.render(Te[gi]/Fi,gr[gi])}else if(B.isInstancedMesh)ot.renderInstances(it,yt,B.count);else if(X.isInstancedBufferGeometry){let Te=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,gr=Math.min(X.instanceCount,Te);ot.renderInstances(it,yt,gr)}else ot.render(it,yt)};function lt(_,z,X){_.transparent===!0&&_.side===qt&&_.forceSinglePass===!1?(_.side=nt,_.needsUpdate=!0,pa(_,z,X),_.side=Lt,_.needsUpdate=!0,pa(_,z,X),_.side=qt):pa(_,z,X)}this.compile=function(_,z,X=null){X===null&&(X=_),m=et.get(X),m.init(z),M.push(m),X.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),_!==X&&_.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights();let j=new Set;return _.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let ae=B.material;if(ae)if(Array.isArray(ae))for(let ge=0;ge<ae.length;ge++){let Me=ae[ge];lt(Me,X,B),j.add(Me)}else lt(ae,X,B),j.add(ae)}),M.pop(),m=null,j},this.compileAsync=function(_,z,X=null){let j=this.compile(_,z,X);return new Promise(B=>{function ae(){if(j.forEach(function(ge){Le.get(ge).currentProgram.isReady()&&j.delete(ge)}),j.size===0){B(_);return}setTimeout(ae,10)}Ke.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Ui=null;function mr(_){Ui&&Ui(_)}function _h(){un.stop()}function wh(){un.start()}let un=new Cl;un.setAnimationLoop(mr),typeof self<"u"&&un.setContext(self),this.setAnimationLoop=function(_){Ui=_,K.setAnimationLoop(_),_===null?un.stop():un.start()},K.addEventListener("sessionstart",_h),K.addEventListener("sessionend",wh),this.render=function(_,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(z),z=K.getCamera()),_.isScene===!0&&_.onBeforeRender(x,_,z,L),m=et.get(_,M.length),m.init(z),M.push(m),_e.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Y.setFromProjectionMatrix(_e),le=this.localClippingEnabled,re=oe.init(this.clippingPlanes,le),g=ve.get(_,w.length),g.init(),w.push(g),K.enabled===!0&&K.isPresenting===!0){let ae=x.xr.getDepthSensingMesh();ae!==null&&ac(ae,z,-1/0,x.sortObjects)}ac(_,z,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort($,ne),se=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,se&&Pe.addToRenderList(g,_),this.info.render.frame++,re===!0&&oe.beginShadows();let X=m.state.shadowsArray;xe.render(X,_,z),re===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();let j=g.opaque,B=g.transmissive;if(m.setupLights(),z.isArrayCamera){let ae=z.cameras;if(B.length>0)for(let ge=0,Me=ae.length;ge<Me;ge++){let Re=ae[ge];Rh(j,B,_,Re)}se&&Pe.render(_);for(let ge=0,Me=ae.length;ge<Me;ge++){let Re=ae[ge];Mh(g,_,Re,Re.viewport)}}else B.length>0&&Rh(j,B,_,z),se&&Pe.render(_),Mh(g,_,z);L!==null&&(R.updateMultisampleRenderTarget(L),R.updateRenderTargetMipmap(L)),_.isScene===!0&&_.onAfterRender(x,_,z),dt.resetDefaultState(),S=-1,v=null,M.pop(),M.length>0?(m=M[M.length-1],re===!0&&oe.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,w.pop(),w.length>0?g=w[w.length-1]:g=null};function ac(_,z,X,j){if(_.visible===!1)return;if(_.layers.test(z.layers)){if(_.isGroup)X=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(z);else if(_.isLight)m.pushLight(_),_.castShadow&&m.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||Y.intersectsSprite(_)){j&&te.setFromMatrixPosition(_.matrixWorld).applyMatrix4(_e);let ge=Q.update(_),Me=_.material;Me.visible&&g.push(_,ge,Me,X,te.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||Y.intersectsObject(_))){let ge=Q.update(_),Me=_.material;if(j&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),te.copy(_.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),te.copy(ge.boundingSphere.center)),te.applyMatrix4(_.matrixWorld).applyMatrix4(_e)),Array.isArray(Me)){let Re=ge.groups;for(let ze=0,Ve=Re.length;ze<Ve;ze++){let be=Re[ze],it=Me[be.materialIndex];it&&it.visible&&g.push(_,ge,it,X,te.z,be)}}else Me.visible&&g.push(_,ge,Me,X,te.z,null)}}let ae=_.children;for(let ge=0,Me=ae.length;ge<Me;ge++)ac(ae[ge],z,X,j)}function Mh(_,z,X,j){let B=_.opaque,ae=_.transmissive,ge=_.transparent;m.setupLightsView(X),re===!0&&oe.setGlobalState(x.clippingPlanes,X),j&&De.viewport(D.copy(j)),B.length>0&&ua(B,z,X),ae.length>0&&ua(ae,z,X),ge.length>0&&ua(ge,z,X),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function Rh(_,z,X,j){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[j.id]===void 0&&(m.state.transmissionRenderTarget[j.id]=new pi(1,1,{generateMipmaps:!0,type:Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float")?sr:Qt,minFilter:qi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:He.workingColorSpace}));let ae=m.state.transmissionRenderTarget[j.id],ge=j.viewport||D;ae.setSize(ge.z,ge.w);let Me=x.getRenderTarget();x.setRenderTarget(ae),x.getClearColor(V),q=x.getClearAlpha(),q<1&&x.setClearColor(16777215,.5),x.clear(),se&&Pe.render(X);let Re=x.toneMapping;x.toneMapping=Ai;let ze=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),m.setupLightsView(j),re===!0&&oe.setGlobalState(x.clippingPlanes,j),ua(_,X,j),R.updateMultisampleRenderTarget(ae),R.updateRenderTargetMipmap(ae),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let be=0,it=z.length;be<it;be++){let ut=z[be],yt=ut.object,ci=ut.geometry,ot=ut.material,Te=ut.group;if(ot.side===qt&&yt.layers.test(j.layers)){let gr=ot.side;ot.side=nt,ot.needsUpdate=!0,bh(yt,X,j,ci,ot,Te),ot.side=gr,ot.needsUpdate=!0,Ve=!0}}Ve===!0&&(R.updateMultisampleRenderTarget(ae),R.updateRenderTargetMipmap(ae))}x.setRenderTarget(Me),x.setClearColor(V,q),ze!==void 0&&(j.viewport=ze),x.toneMapping=Re}function ua(_,z,X){let j=z.isScene===!0?z.overrideMaterial:null;for(let B=0,ae=_.length;B<ae;B++){let ge=_[B],Me=ge.object,Re=ge.geometry,ze=j===null?ge.material:j,Ve=ge.group;Me.layers.test(X.layers)&&bh(Me,z,X,Re,ze,Ve)}}function bh(_,z,X,j,B,ae){_.onBeforeRender(x,z,X,j,B,ae),_.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),B.onBeforeRender(x,z,X,j,_,ae),B.transparent===!0&&B.side===qt&&B.forceSinglePass===!1?(B.side=nt,B.needsUpdate=!0,x.renderBufferDirect(X,z,j,B,_,ae),B.side=Lt,B.needsUpdate=!0,x.renderBufferDirect(X,z,j,B,_,ae),B.side=qt):x.renderBufferDirect(X,z,j,B,_,ae),_.onAfterRender(x,z,X,j,B,ae)}function pa(_,z,X){z.isScene!==!0&&(z=ue);let j=Le.get(_),B=m.state.lights,ae=m.state.shadowsArray,ge=B.state.version,Me=Ae.getParameters(_,B.state,ae,z,X),Re=Ae.getProgramCacheKey(Me),ze=j.programs;j.environment=_.isMeshStandardMaterial?z.environment:null,j.fog=z.fog,j.envMap=(_.isMeshStandardMaterial?W:E).get(_.envMap||j.environment),j.envMapRotation=j.environment!==null&&_.envMap===null?z.environmentRotation:_.envMapRotation,ze===void 0&&(_.addEventListener("dispose",Ge),ze=new Map,j.programs=ze);let Ve=ze.get(Re);if(Ve!==void 0){if(j.currentProgram===Ve&&j.lightsStateVersion===ge)return Ah(_,Me),Ve}else Me.uniforms=Ae.getUniforms(_),_.onBeforeCompile(Me,x),Ve=Ae.acquireProgram(Me,Re),ze.set(Re,Ve),j.uniforms=Me.uniforms;let be=j.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(be.clippingPlanes=oe.uniform),Ah(_,Me),j.needsLights=IS(_),j.lightsStateVersion=ge,j.needsLights&&(be.ambientLightColor.value=B.state.ambient,be.lightProbe.value=B.state.probe,be.directionalLights.value=B.state.directional,be.directionalLightShadows.value=B.state.directionalShadow,be.spotLights.value=B.state.spot,be.spotLightShadows.value=B.state.spotShadow,be.rectAreaLights.value=B.state.rectArea,be.ltc_1.value=B.state.rectAreaLTC1,be.ltc_2.value=B.state.rectAreaLTC2,be.pointLights.value=B.state.point,be.pointLightShadows.value=B.state.pointShadow,be.hemisphereLights.value=B.state.hemi,be.directionalShadowMap.value=B.state.directionalShadowMap,be.directionalShadowMatrix.value=B.state.directionalShadowMatrix,be.spotShadowMap.value=B.state.spotShadowMap,be.spotLightMatrix.value=B.state.spotLightMatrix,be.spotLightMap.value=B.state.spotLightMap,be.pointShadowMap.value=B.state.pointShadowMap,be.pointShadowMatrix.value=B.state.pointShadowMatrix),j.currentProgram=Ve,j.uniformsList=null,Ve}function Ch(_){if(_.uniformsList===null){let z=_.currentProgram.getUniforms();_.uniformsList=fn.seqWithValue(z.seq,_.uniforms)}return _.uniformsList}function Ah(_,z){let X=Le.get(_);X.outputColorSpace=z.outputColorSpace,X.batching=z.batching,X.batchingColor=z.batchingColor,X.instancing=z.instancing,X.instancingColor=z.instancingColor,X.instancingMorph=z.instancingMorph,X.skinning=z.skinning,X.morphTargets=z.morphTargets,X.morphNormals=z.morphNormals,X.morphColors=z.morphColors,X.morphTargetsCount=z.morphTargetsCount,X.numClippingPlanes=z.numClippingPlanes,X.numIntersection=z.numClipIntersection,X.vertexAlphas=z.vertexAlphas,X.vertexTangents=z.vertexTangents,X.toneMapping=z.toneMapping}function LS(_,z,X,j,B){z.isScene!==!0&&(z=ue),R.resetTextureUnits();let ae=z.fog,ge=j.isMeshStandardMaterial?z.environment:null,Me=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Yi,Re=(j.isMeshStandardMaterial?W:E).get(j.envMap||ge),ze=j.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ve=!!X.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),be=!!X.morphAttributes.position,it=!!X.morphAttributes.normal,ut=!!X.morphAttributes.color,yt=Ai;j.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(yt=x.toneMapping);let ci=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ot=ci!==void 0?ci.length:0,Te=Le.get(j),gr=m.state.lights;if(re===!0&&(le===!0||_!==v)){let Ri=_===v&&j.id===S;oe.setState(j,_,Ri)}let at=!1;j.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==gr.state.version||Te.outputColorSpace!==Me||B.isBatchedMesh&&Te.batching===!1||!B.isBatchedMesh&&Te.batching===!0||B.isBatchedMesh&&Te.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Te.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Te.instancing===!1||!B.isInstancedMesh&&Te.instancing===!0||B.isSkinnedMesh&&Te.skinning===!1||!B.isSkinnedMesh&&Te.skinning===!0||B.isInstancedMesh&&Te.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Te.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Te.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Te.instancingMorph===!1&&B.morphTexture!==null||Te.envMap!==Re||j.fog===!0&&Te.fog!==ae||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==oe.numPlanes||Te.numIntersection!==oe.numIntersection)||Te.vertexAlphas!==ze||Te.vertexTangents!==Ve||Te.morphTargets!==be||Te.morphNormals!==it||Te.morphColors!==ut||Te.toneMapping!==yt||Te.morphTargetsCount!==ot)&&(at=!0):(at=!0,Te.__version=j.version);let Fi=Te.currentProgram;at===!0&&(Fi=pa(j,z,B));let Hn=!1,gi=!1,to=!1,St=Fi.getUniforms(),tr=Te.uniforms;if(De.useProgram(Fi.program)&&(Hn=!0,gi=!0,to=!0),j.id!==S&&(S=j.id,gi=!0),Hn||v!==_){De.buffers.depth.getReversed()?(ce.copy(_.projectionMatrix),Yu(ce),Ku(ce),St.setValue(N,"projectionMatrix",ce)):St.setValue(N,"projectionMatrix",_.projectionMatrix),St.setValue(N,"viewMatrix",_.matrixWorldInverse);let Fr=St.map.cameraPosition;Fr!==void 0&&Fr.setValue(N,O.setFromMatrixPosition(_.matrixWorld)),Ze.logarithmicDepthBuffer&&St.setValue(N,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&St.setValue(N,"isOrthographic",_.isOrthographicCamera===!0),v!==_&&(v=_,gi=!0,to=!0)}if(B.isSkinnedMesh){St.setOptional(N,B,"bindMatrix"),St.setOptional(N,B,"bindMatrixInverse");let Ri=B.skeleton;Ri&&(Ri.boneTexture===null&&Ri.computeBoneTexture(),St.setValue(N,"boneTexture",Ri.boneTexture,R))}B.isBatchedMesh&&(St.setOptional(N,B,"batchingTexture"),St.setValue(N,"batchingTexture",B._matricesTexture,R),St.setOptional(N,B,"batchingIdTexture"),St.setValue(N,"batchingIdTexture",B._indirectTexture,R),St.setOptional(N,B,"batchingColorTexture"),B._colorsTexture!==null&&St.setValue(N,"batchingColorTexture",B._colorsTexture,R));let io=X.morphAttributes;if((io.position!==void 0||io.normal!==void 0||io.color!==void 0)&&Fe.update(B,X,Fi),(gi||Te.receiveShadow!==B.receiveShadow)&&(Te.receiveShadow=B.receiveShadow,St.setValue(N,"receiveShadow",B.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(tr.envMap.value=Re,tr.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&z.environment!==null&&(tr.envMapIntensity.value=z.environmentIntensity),gi&&(St.setValue(N,"toneMappingExposure",x.toneMappingExposure),Te.needsLights&&NS(tr,to),ae&&j.fog===!0&&pe.refreshFogUniforms(tr,ae),pe.refreshMaterialUniforms(tr,j,G,Z,m.state.transmissionRenderTarget[_.id]),fn.upload(N,Ch(Te),tr,R)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(fn.upload(N,Ch(Te),tr,R),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&St.setValue(N,"center",B.center),St.setValue(N,"modelViewMatrix",B.modelViewMatrix),St.setValue(N,"normalMatrix",B.normalMatrix),St.setValue(N,"modelMatrix",B.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let Ri=j.uniformsGroups;for(let Fr=0,Or=Ri.length;Fr<Or;Fr++){let Th=Ri[Fr];k.update(Th,Fi),k.bind(Th,Fi)}}return Fi}function NS(_,z){_.ambientLightColor.needsUpdate=z,_.lightProbe.needsUpdate=z,_.directionalLights.needsUpdate=z,_.directionalLightShadows.needsUpdate=z,_.pointLights.needsUpdate=z,_.pointLightShadows.needsUpdate=z,_.spotLights.needsUpdate=z,_.spotLightShadows.needsUpdate=z,_.rectAreaLights.needsUpdate=z,_.hemisphereLights.needsUpdate=z}function IS(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(_,z,X){Le.get(_.texture).__webglTexture=z,Le.get(_.depthTexture).__webglTexture=X;let j=Le.get(_);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=X===void 0,j.__autoAllocateDepthBuffer||Ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(_,z){let X=Le.get(_);X.__webglFramebuffer=z,X.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(_,z=0,X=0){L=_,T=z,C=X;let j=!0,B=null,ae=!1,ge=!1;if(_){let Re=Le.get(_);if(Re.__useDefaultFramebuffer!==void 0)De.bindFramebuffer(N.FRAMEBUFFER,null),j=!1;else if(Re.__webglFramebuffer===void 0)R.setupRenderTarget(_);else if(Re.__hasExternalTextures)R.rebindTextures(_,Le.get(_.texture).__webglTexture,Le.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let be=_.depthTexture;if(Re.__boundDepthTexture!==be){if(be!==null&&Le.has(be)&&(_.width!==be.image.width||_.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(_)}}let ze=_.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(ge=!0);let Ve=Le.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Ve[z])?B=Ve[z][X]:B=Ve[z],ae=!0):_.samples>0&&R.useMultisampledRTT(_)===!1?B=Le.get(_).__webglMultisampledFramebuffer:Array.isArray(Ve)?B=Ve[X]:B=Ve,D.copy(_.viewport),U.copy(_.scissor),I=_.scissorTest}else D.copy(Se).multiplyScalar(G).floor(),U.copy(Ce).multiplyScalar(G).floor(),I=Oe;if(De.bindFramebuffer(N.FRAMEBUFFER,B)&&j&&De.drawBuffers(_,B),De.viewport(D),De.scissor(U),De.setScissorTest(I),ae){let Re=Le.get(_.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+z,Re.__webglTexture,X)}else if(ge){let Re=Le.get(_.texture),ze=z||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Re.__webglTexture,X||0,ze)}S=-1},this.readRenderTargetPixels=function(_,z,X,j,B,ae,ge){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Le.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ge!==void 0&&(Me=Me[ge]),Me){De.bindFramebuffer(N.FRAMEBUFFER,Me);try{let Re=_.texture,ze=Re.format,Ve=Re.type;if(!Ze.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ze.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=_.width-j&&X>=0&&X<=_.height-B&&N.readPixels(z,X,j,B,We.convert(ze),We.convert(Ve),ae)}finally{let Re=L!==null?Le.get(L).__webglFramebuffer:null;De.bindFramebuffer(N.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(_,z,X,j,B,ae,ge){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Le.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ge!==void 0&&(Me=Me[ge]),Me){let Re=_.texture,ze=Re.format,Ve=Re.type;if(!Ze.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ze.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=_.width-j&&X>=0&&X<=_.height-B){De.bindFramebuffer(N.FRAMEBUFFER,Me);let be=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,be),N.bufferData(N.PIXEL_PACK_BUFFER,ae.byteLength,N.STREAM_READ),N.readPixels(z,X,j,B,We.convert(ze),We.convert(Ve),0);let it=L!==null?Le.get(L).__webglFramebuffer:null;De.bindFramebuffer(N.FRAMEBUFFER,it);let ut=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await ju(N,ut,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,be),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ae),N.deleteBuffer(be),N.deleteSync(ut),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(_,z=null,X=0){_.isTexture!==!0&&(Tn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,_=arguments[1]);let j=Math.pow(2,-X),B=Math.floor(_.image.width*j),ae=Math.floor(_.image.height*j),ge=z!==null?z.x:0,Me=z!==null?z.y:0;R.setTexture2D(_,0),N.copyTexSubImage2D(N.TEXTURE_2D,X,0,0,ge,Me,B,ae),De.unbindTexture()},this.copyTextureToTexture=function(_,z,X=null,j=null,B=0){_.isTexture!==!0&&(Tn("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,_=arguments[1],z=arguments[2],B=arguments[3]||0,X=null);let ae,ge,Me,Re,ze,Ve,be,it,ut,yt=_.isCompressedTexture?_.mipmaps[B]:_.image;X!==null?(ae=X.max.x-X.min.x,ge=X.max.y-X.min.y,Me=X.isBox3?X.max.z-X.min.z:1,Re=X.min.x,ze=X.min.y,Ve=X.isBox3?X.min.z:0):(ae=yt.width,ge=yt.height,Me=yt.depth||1,Re=0,ze=0,Ve=0),j!==null?(be=j.x,it=j.y,ut=j.z):(be=0,it=0,ut=0);let ci=We.convert(z.format),ot=We.convert(z.type),Te;z.isData3DTexture?(R.setTexture3D(z,0),Te=N.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(R.setTexture2DArray(z,0),Te=N.TEXTURE_2D_ARRAY):(R.setTexture2D(z,0),Te=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,z.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,z.unpackAlignment);let gr=N.getParameter(N.UNPACK_ROW_LENGTH),at=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Fi=N.getParameter(N.UNPACK_SKIP_PIXELS),Hn=N.getParameter(N.UNPACK_SKIP_ROWS),gi=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,yt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,yt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Re),N.pixelStorei(N.UNPACK_SKIP_ROWS,ze),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ve);let to=_.isDataArrayTexture||_.isData3DTexture,St=z.isDataArrayTexture||z.isData3DTexture;if(_.isRenderTargetTexture||_.isDepthTexture){let tr=Le.get(_),io=Le.get(z),Ri=Le.get(tr.__renderTarget),Fr=Le.get(io.__renderTarget);De.bindFramebuffer(N.READ_FRAMEBUFFER,Ri.__webglFramebuffer),De.bindFramebuffer(N.DRAW_FRAMEBUFFER,Fr.__webglFramebuffer);for(let Or=0;Or<Me;Or++)to&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Le.get(_).__webglTexture,B,Ve+Or),_.isDepthTexture?(St&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Le.get(z).__webglTexture,B,ut+Or),N.blitFramebuffer(Re,ze,ae,ge,be,it,ae,ge,N.DEPTH_BUFFER_BIT,N.NEAREST)):St?N.copyTexSubImage3D(Te,B,be,it,ut+Or,Re,ze,ae,ge):N.copyTexSubImage2D(Te,B,be,it,ut+Or,Re,ze,ae,ge);De.bindFramebuffer(N.READ_FRAMEBUFFER,null),De.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else St?_.isDataTexture||_.isData3DTexture?N.texSubImage3D(Te,B,be,it,ut,ae,ge,Me,ci,ot,yt.data):z.isCompressedArrayTexture?N.compressedTexSubImage3D(Te,B,be,it,ut,ae,ge,Me,ci,yt.data):N.texSubImage3D(Te,B,be,it,ut,ae,ge,Me,ci,ot,yt):_.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,B,be,it,ae,ge,ci,ot,yt.data):_.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,B,be,it,yt.width,yt.height,ci,yt.data):N.texSubImage2D(N.TEXTURE_2D,B,be,it,ae,ge,ci,ot,yt);N.pixelStorei(N.UNPACK_ROW_LENGTH,gr),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,at),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Fi),N.pixelStorei(N.UNPACK_SKIP_ROWS,Hn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,gi),B===0&&z.generateMipmaps&&N.generateMipmap(Te),De.unbindTexture()},this.copyTextureToTexture3D=function(_,z,X=null,j=null,B=0){return _.isTexture!==!0&&(Tn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,j=arguments[1]||null,_=arguments[2],z=arguments[3],B=arguments[4]||0),Tn('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(_,z,X,j,B)},this.initRenderTarget=function(_){Le.get(_).__webglFramebuffer===void 0&&R.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?R.setTextureCube(_,0):_.isData3DTexture?R.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?R.setTexture2DArray(_,0):R.setTexture2D(_,0),De.unbindTexture()},this.resetState=function(){T=0,C=0,L=null,De.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let i=this.getContext();i.drawingBufferColorspace=He._getDrawingBufferColorSpace(e),i.unpackColorSpace=He._getUnpackColorSpace()}}});var Xl,l3=A(()=>{Ar();$r();Xl=class extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wt,this.environmentIntensity=1,this.environmentRotation=new wt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}});var y3={};zr(y3,{Cube3D:()=>p3,PG3D:()=>g3,ThreePerspectiveCamera:()=>Nt,ThreeRaycaster:()=>Ml,ThreeScene:()=>Xl,ThreeSpherical:()=>Rl,ThreeTextureLoader:()=>bs,ThreeVector2:()=>Ue,ThreeVector3:()=>F,ThreeWebGLRenderer:()=>Wl,Twisty3DScene:()=>G_,cube3DShim:()=>V_,pg3dShim:()=>H_});function u3(t){return t*t*t*(10-t*(15-6*t))}function f3(t){return typeof t.faceletScale>"u"||t.faceletScale==="auto"?M_:t.faceletScale}function Xe(t,e){return new Di().setFromAxisAngle(t,_i*e/4)}function A_(){return h3??(h3=new hr(pr.foundationWidth,pr.foundationWidth,pr.foundationWidth))}function ih(){let t=new jt,e=.5;return t.setAttribute("position",new _t(new Float32Array([e,e,0,-e,e,0,e,-e,0,-e,e,0,-e,-e,0,e,-e,0]),3)),t.setAttribute("uv",new _t(new Float32Array([1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1]),2)),t}function D_(){return T_??=ih()}function th(t,e,i){return Math.hypot(t[3*e]-t[3*i],t[3*e+1]-t[3*i+1],t[3*e+2]-t[3*i+2])}function L_(t,e,i,r){let n=th(t,e,i),s=th(t,i,r),o=th(t,e,r),a=(n+s+o)/2;return Math.sqrt(a*(a-n)*(a-s)*(a-o))}function N_(t){let e=0;for(let i=2;3*i<t.length;i++)e+=L_(t,0,1,i);return e}function I_(t){let e=Math.hypot(t[0],t[1],t[2]);return t[0]/=e,t[1]/=e,t[2]/=e,t}function P_(t,e){let i=new Array(3);return i[0]=t[1]*e[2]-t[2]*e[1],i[1]=t[2]*e[0]-t[0]*e[2],i[2]=t[0]*e[1]-t[1]*e[0],i}function k_(t){let e=[t[3]-t[0],t[4]-t[1],t[5]-t[2]],i=[t[6]-t[3],t[7]-t[4],t[8]-t[5]],r=P_(e,i);return I_(r)}function U_(t,e){let i=[],r=new Array(3),n=new Array(3);for(let s=1;s<10;s++){for(let a=0;a<t.length;a+=3){let l=(a+t.length-3)%t.length,c=(a+3)%t.length;for(let d=0;d<3;d++)r[d]=t[l+d]-t[a+d],n[d]=t[c+d]-t[a+d];let f=Math.hypot(r[0],r[1],r[2]),h=Math.hypot(n[0],n[1],n[2]);for(let d=0;d<3;d++)r[d]/=f,n[d]/=h;let u=r[0]*n[0]+r[1]*n[1]+r[2]*n[2],p=e/Math.sqrt(1-u*u);for(let d=0;d<3;d++)i[a+d]=t[a+d]+(r[d]+n[d])*p}let o=!0;for(let a=0;o&&a<i.length;a+=3){let l=(a+3)%t.length,c=0;for(let f=0;f<3;f++){let h=t[l+f]-t[a+f],u=i[l+f]-i[a+f];c+=h*u}c<=0&&(o=!1)}if(o)return i;e/=2}return t}async function V_(t,e){return new p3(await En.kpuzzle(),t,e)}async function H_(t,e,i,r,n){return new g3(t,await e.kpuzzle(),(await e.pg()).get3d({darkIgnoredOrbits:n}),!0,i==="floating",void 0,r)}var c3,u_,p_,Yl,m_,g_,y_,S_,v_,x_,Xs,Pr,Je,E_,pr,__,w_,M_,R_,b_,pt,qe,jl,C_,Jf,na,eh,ql,h3,T_,p3,d3,hn,sa,m3,F_,O_,z_,B_,kr,g3,G_,S3=A(()=>{rh();Hc();ts();so();xr();je();Mr();rn();Ar();Jo();hf();ta();Pi();$r();Ni();Yo();ai();xt();pl();ln();je();Mr();rn();Ar();ta();Pi();$r();xt();pl();ln();Ls();g0();hf();y0();ai();xt();a3();l3();c3=new bs,u_=new st({color:new Ie(6710886).convertLinearToSRGB()}),p_=new st({color:new Ie(13421772).convertLinearToSRGB(),side:nt,transparent:!0,opacity:.75}),Yl=new st({visible:!1}),m_=new st({color:4513228}),g_=new st({color:4513228,side:nt,transparent:!0,opacity:.5}),y_=new st({color:16776618}),S_=new st({color:16775545,side:nt,transparent:!0,opacity:.5}),v_=new st({color:15911883}),x_=new st({color:15911883,side:nt,transparent:!0,opacity:.5}),Xs=class{constructor(t,e,i,r,n,s){this.vector=t,this.fromZ=e,this.color=i,this.dimColor=r,this.hintOpacityScale=n;let o=new Ie(i).convertLinearToSRGB(),a=new Ie(r).convertLinearToSRGB();this.stickerMaterial={regular:new st({color:o,side:Lt}),dim:new st({color:a,side:Lt}),oriented:m_,experimentalOriented2:y_,ignored:u_,invisible:Yl,mystery:v_},this.hintStickerMaterial={regular:new st({color:new Ie(s?.hintColor??i).convertLinearToSRGB(),side:nt,transparent:!0,opacity:.5*n}),dim:new st({color:new Ie(s?.hintDimColor??r).convertLinearToSRGB(),side:nt,transparent:!0,opacity:.5*n}),oriented:g_,experimentalOriented2:S_,ignored:p_,invisible:Yl,mystery:x_}}stickerMaterial;hintStickerMaterial},Pr=[new Xs(new F(0,1,0),new wt(-_i/4,0,0),16777215,14540253,1.25),new Xs(new F(-1,0,0),new wt(0,-_i/4,0),16750848,8934656,1,{hintDimColor:8930304}),new Xs(new F(0,0,1),new wt(0,0,0),65280,34816,1,{hintDimColor:39168}),new Xs(new F(1,0,0),new wt(0,_i/4,0),16711680,6684672,1,{hintDimColor:6684672}),new Xs(new F(0,0,-1),new wt(0,_i/2,0),2254591,1127304,.75,{hintDimColor:6246}),new Xs(new F(0,-1,0),new wt(_i/4,0,0),16776960,8947712,1.25,{hintDimColor:14540032})],Je={U:0,L:1,F:2,R:3,B:4,D:5},E_={U:Je.U,u:Je.U,Uw:Je.U,Uv:Je.U,y:Je.U,L:Je.L,l:Je.L,Lw:Je.L,Lv:Je.L,M:Je.L,F:Je.F,f:Je.F,Fw:Je.F,Fv:Je.F,S:Je.F,z:Je.F,R:Je.R,r:Je.R,Rw:Je.R,Rv:Je.R,x:Je.R,B:Je.B,b:Je.B,Bw:Je.B,Bv:Je.B,D:Je.D,d:Je.D,Dw:Je.D,Dv:Je.D,E:Je.D},pr={stickerElevation:.503,foundationWidth:1,defaultHintStickerElevation:1.45},__=2,w_={showMainStickers:!0,hintFacelets:"floating",showFoundation:!0,experimentalStickeringMask:void 0,foundationSprite:null,hintSprite:null,initialHintFaceletsAnimation:"auto",faceletScale:"auto",hintFaceletsElevation:"auto"},M_=.85;R_=new st({color:0,opacity:1,transparent:!0}),b_=new st({color:0,opacity:.3,transparent:!0}),pt=class{constructor(t,e,i){this.orbit=t;let r=typeof e=="string"?e.split(""):e;this.stickerFaces=r.map(n=>Je[n]),this.matrix=new Ye,this.matrix.setPosition(jl[t]),this.matrix.premultiply(new Ye().makeRotationFromQuaternion(i))}matrix;stickerFaces};qe={O:new F(0,0,0),U:new F(0,-1,0),L:new F(1,0,0),F:new F(0,0,-1),R:new F(-1,0,0),B:new F(0,0,1),D:new F(0,1,0)},jl={EDGES:new F(0,1,1),CORNERS:new F(1,1,1),CENTERS:new F(0,1,0)},C_={EDGES:[0,1].map(t=>new Ye().makeRotationAxis(jl.EDGES.clone().normalize(),-t*_i/2)),CORNERS:[0,1,2].map(t=>new Ye().makeRotationAxis(jl.CORNERS.clone().normalize(),-t*_i/3)),CENTERS:[0,1,2,3].map(t=>new Ye().makeRotationAxis(jl.CENTERS.clone().normalize(),-t*_i/4))},Jf=[Je.U,Je.F,Je.R],na={EDGES:[new pt("EDGES","UF",Xe(qe.O,0)),new pt("EDGES","UR",Xe(qe.U,3)),new pt("EDGES","UB",Xe(qe.U,2)),new pt("EDGES","UL",Xe(qe.U,1)),new pt("EDGES","DF",Xe(qe.F,2)),new pt("EDGES","DR",Xe(qe.F,2).premultiply(Xe(qe.D,1))),new pt("EDGES","DB",Xe(qe.F,2).premultiply(Xe(qe.D,2))),new pt("EDGES","DL",Xe(qe.F,2).premultiply(Xe(qe.D,3))),new pt("EDGES","FR",Xe(qe.U,3).premultiply(Xe(qe.R,3))),new pt("EDGES","FL",Xe(qe.U,1).premultiply(Xe(qe.R,3))),new pt("EDGES","BR",Xe(qe.U,3).premultiply(Xe(qe.R,1))),new pt("EDGES","BL",Xe(qe.U,1).premultiply(Xe(qe.R,1)))],CORNERS:[new pt("CORNERS","UFR",Xe(qe.O,0)),new pt("CORNERS","URB",Xe(qe.U,3)),new pt("CORNERS","UBL",Xe(qe.U,2)),new pt("CORNERS","ULF",Xe(qe.U,1)),new pt("CORNERS","DRF",Xe(qe.F,2).premultiply(Xe(qe.D,1))),new pt("CORNERS","DFL",Xe(qe.F,2).premultiply(Xe(qe.D,0))),new pt("CORNERS","DLB",Xe(qe.F,2).premultiply(Xe(qe.D,3))),new pt("CORNERS","DBR",Xe(qe.F,2).premultiply(Xe(qe.D,2)))],CENTERS:[new pt("CENTERS","U",Xe(qe.O,0)),new pt("CENTERS","L",Xe(qe.R,3).premultiply(Xe(qe.U,1))),new pt("CENTERS","F",Xe(qe.R,3)),new pt("CENTERS","R",Xe(qe.R,3).premultiply(Xe(qe.D,1))),new pt("CENTERS","B",Xe(qe.R,3).premultiply(Xe(qe.D,2))),new pt("CENTERS","D",Xe(qe.R,2))]},eh=1/3,ql={EDGES:[[[0,4,6],[0,4,5]],[[3,5,7],[0,7,5]],[[2,4,8],[0,10,5]],[[1,3,7],[0,1,5]],[[2,4,2],[2,4,3]],[[3,5,1],[2,7,3]],[[0,4,0],[2,10,3]],[[1,3,1],[2,1,3]],[[3,5,4],[3,6,4]],[[1,3,4],[1,2,4]],[[1,9,4],[1,8,4]],[[3,11,4],[3,0,4]]],CORNERS:[[[0,5,6],[0,5,5],[0,6,5]],[[3,5,8],[0,8,5],[0,9,5]],[[2,3,8],[0,11,5],[0,0,5]],[[1,3,6],[0,2,5],[0,3,5]],[[3,5,2],[2,6,3],[2,5,3]],[[2,3,2],[2,3,3],[2,2,3]],[[1,3,0],[2,0,3],[2,11,3]],[[0,5,0],[2,9,3],[2,8,3]]],CENTERS:[[[0,4,7]],[[0,1,4]],[[0,4,4]],[[0,7,4]],[[0,10,4]],[[0,4,1]]]},h3=null;p3=class extends At{constructor(t,e,i={}){if(super(),this.kpuzzle=t,this.scheduleRenderCallback=e,this.options={...w_},Object.assign(this.options,i),this.kpuzzle.name()!=="3x3x3")throw new Error(`Invalid puzzle for this Cube3D implementation: ${this.kpuzzle.name()}`);i.foundationSprite&&this.setSprite(i.foundationSprite),i.hintSprite&&this.setHintSprite(i.hintSprite),this.kpuzzleFaceletInfo={};for(let r in na){let n=[];this.kpuzzleFaceletInfo[r]=n,this.pieces[r]=na[r].map(this.createCubie.bind(this,r,n))}this.scale.set(eh,eh,eh),this.options.experimentalStickeringMask&&this.setStickeringMask(this.options.experimentalStickeringMask),this.#l(),this.options.faceletScale&&this.experimentalSetFaceletScale(this.options.faceletScale),typeof this.options.hintFaceletsElevation<"u"&&(this.#s=this.options.hintFaceletsElevation)}kpuzzleFaceletInfo;pieces={};options;experimentalHintStickerMeshes=[];experimentalFoundationMeshes=[];#e;sprite=new Promise(t=>{this.#e=e=>{c3.load(e,t)}});setSprite(t){this.sprite=t}#t;hintSprite=new Promise(t=>{this.#t=e=>{c3.load(e,t)}});setHintSprite(t){this.hintSprite=t}#i;#r(){return this.#i??=ih()}#s;setHintFaceletsElevation(t){t!==this.#s&&(this.#a=!0,this.#o(typeof t=="number"?t:pr.defaultHintStickerElevation),this.#s=t)}#n=0;#o(t){this.#r().translate(0,0,t-this.#n),this.#n=t}#a=!1;async#l(){if(this.options.initialHintFaceletsAnimation==="none"||this.options.initialHintFaceletsAnimation!=="always"&&v3())return;let e=(typeof this.options.hintFaceletsElevation<"u"&&this.options.hintFaceletsElevation!=="auto"?this.options.hintFaceletsElevation:pr.defaultHintStickerElevation)-pr.stickerElevation;this.#o(pr.stickerElevation),await new Promise(o=>setTimeout(o,500));let i=performance.now(),r=1e3;function n(o){return o*(2-o)}let s=()=>{if(this.#a)return;let o=performance.now()-i,a=Math.min(o/r,1),l=n(a)*e+pr.stickerElevation;this.#o(l),this.scheduleRenderCallback?.(),o<r&&requestAnimationFrame(s)};s()}experimentalSetStickerSpriteURL(t){this.#e?.(t)}experimentalSetHintStickerSpriteURL(t){this.#t?.(t)}setStickeringMask(t){if(t.specialBehaviour==="picture"){for(let e of Object.values(this.kpuzzleFaceletInfo))for(let i of e)for(let r of i){r.facelet.material=Yl;let{hintFacelet:n}=r;n&&(n.material=Yl)}return}this.options.experimentalStickeringMask=t;for(let[e,i]of Object.entries(t.orbits))for(let r=0;r<i.pieces.length;r++){let n=i.pieces[r];if(n){let s=this.kpuzzleFaceletInfo[e][r];for(let o=0;o<s.length;o++){let a=n.facelets[o];if(a){let l=s[o],c=typeof a=="string"?a:a?.mask;l.facelet.material=Pr[l.faceIdx].stickerMaterial[c];let f=typeof a=="string"?c:a.hintMask??c;l.hintFacelet&&(l.hintFacelet.material=Pr[l.faceIdx].hintStickerMaterial[f])}}}}this.scheduleRenderCallback&&this.scheduleRenderCallback()}experimentalUpdateOptions(t){if("showMainStickers"in t)throw new Error("Unimplemented");let e=t.showFoundation;if(typeof e<"u"&&this.options.showFoundation!==e){this.options.showFoundation=e;for(let o of this.experimentalFoundationMeshes)o.visible=e}let i=t.hintFacelets;if(typeof i<"u"&&this.options.hintFacelets!==i&&Kl[i]){this.options.hintFacelets=i;for(let o of this.experimentalHintStickerMeshes)o.visible=i==="floating";this.scheduleRenderCallback()}let{experimentalStickeringMask:r}=t;typeof r<"u"&&(this.options.experimentalStickeringMask=r,this.setStickeringMask(r),this.scheduleRenderCallback());let{faceletScale:n}=t;typeof n<"u"&&this.experimentalSetFaceletScale(n);let{hintFaceletsElevation:s}=t;typeof s<"u"&&this.setHintFaceletsElevation(s)}onPositionChange(t){let e=t.pattern;for(let i in na){let r=na[i];for(let n=0;n<r.length;n++){let s=e.patternData[i].pieces[n];this.pieces[i][s].matrix.copy(na[i][n].matrix),this.pieces[i][s].matrix.multiply(C_[i][e.patternData[i].orientation[n]])}for(let n of t.movesInProgress){let s=n.move,o=Pr[E_[s.family]].vector,a=new Ye().makeRotationAxis(o,-this.ease(n.fraction)*n.direction*s.amount*_i/4);for(let l=0;l<r.length;l++){let c=this.kpuzzle.moveToTransformation(s.modified({amount:1})),f=c.transformationData[i].permutation[l];if(l!==f||c.transformationData[i].orientationDelta[l]!==0){let h=e.patternData[i].pieces[l];this.pieces[i][h].matrix.premultiply(a)}}}}this.scheduleRenderCallback()}createCubie(t,e,i,r){let n=[];e.push(n);let s=new $i;if(this.options.showFoundation){let o=this.createCubieFoundation();s.add(o),this.experimentalFoundationMeshes.push(o)}for(let o=0;o<i.stickerFaces.length;o++){let a=this.createSticker(Pr[Jf[o]],Pr[i.stickerFaces[o]],!1),l={faceIdx:i.stickerFaces[o],facelet:a};if(s.add(a),this.options.hintFacelets==="floating"){let c=this.createSticker(Pr[Jf[o]],Pr[i.stickerFaces[o]],!0);s.add(c),l.hintFacelet=c,this.experimentalHintStickerMeshes.push(c)}if(this.options.experimentalStickeringMask?.specialBehaviour==="picture"&&ql[t]&&ql[t][r]&&ql[t][r][o]){let[c,f,h]=ql[t][r][o];(async()=>{let u=async p=>{let d=await(p?this.hintSprite:this.sprite),y=this.createSticker(Pr[Jf[o]],Pr[i.stickerFaces[o]],p);y.material=new st({map:d,side:p?nt:qt,transparent:!0});let g=f/12,m=(f+1)/12,w=h/9,M=(h+1)/9,x=new Ue(g,w),P=new Ue(g,M),T=new Ue(m,M),C=new Ue(m,w);switch(c){case 1:{[x,P,T,C]=[P,T,C,x];break}case 2:{[x,P,T,C]=[T,C,x,P];break}case 3:{[x,P,T,C]=[C,x,P,T];break}}y.geometry.setAttribute("uv",new _t(new Float32Array([T.x,T.y,P.x,P.y,C.x,C.y,P.x,P.y,x.x,x.y,C.x,C.y]),2)),s.add(y)};u(!0),u(!1)})()}n.push(l)}return s.matrix.copy(i.matrix),s.matrixAutoUpdate=!1,this.add(s),s}createCubieFoundation(){let t=A_();return new Mt(t,this.options.experimentalStickeringMask?.specialBehaviour==="picture"?R_:b_)}createSticker(t,e,i){let r=this.options.experimentalStickeringMask?.specialBehaviour==="picture"?ih():i?this.#r():D_(),n=new Mt(r,i?e.hintStickerMaterial.regular:e.stickerMaterial.regular);n.setRotationFromEuler(t.fromZ),n.position.copy(t.vector);let s=i?typeof this.options.hintFaceletsElevation=="number"?this.options.hintFaceletsElevation:this.options.experimentalStickeringMask?.specialBehaviour==="picture"?__:pr.defaultHintStickerElevation:pr.stickerElevation;i&&(this.#n=s);let o=f3(this.options);return n.scale.setX(o),n.scale.setY(o),n.translateZ(s-1),n}experimentalSetFoundationOpacity(t){this.experimentalFoundationMeshes[0].material.opacity=t}experimentalSetFaceletScale(t){this.options.faceletScale=t;for(let e of Object.values(this.kpuzzleFaceletInfo))for(let i of e)for(let r of i){let n=f3(this.options);r.facelet.scale.setX(n),r.facelet.scale.setY(n),r.hintFacelet?.scale.setX(n),r.hintFacelet?.scale.setY(n)}}ease(t){return u3(t)}},d3=new st({side:qt,color:0}),hn=new st({visible:!1}),sa=new st({vertexColors:!0});m3=class{constructor(t,e){this.sz=t,this.tm=e,this.vertices=new Float32Array(9*t),this.uvs=void 0,this.colors=new Uint8Array(18*t),this.ind=new Uint8Array(t),this.pos=0,this.ipos=0}pos;ipos;vertices;colors;uvs;ind;add(t,e,i){this.vertices[this.pos]=t[3*e+0],this.vertices[this.pos+1]=t[3*e+1],this.vertices[this.pos+2]=t[3*e+2],this.colors[this.pos]=i>>16,this.colors[this.pos+1]=i>>8&255,this.colors[this.pos+2]=i&255,this.pos+=3}addUncolored(t,e){this.vertices[this.pos]=t[3*e+0],this.vertices[this.pos+1]=t[3*e+1],this.vertices[this.pos+2]=t[3*e+2],this.pos+=3}setind(t){this.ind[this.ipos++]=t}makePoly(t,e,i){let r=t;for(let n=1;3*(n+1)<r.length;n++)this.add(r,0,e),this.add(r,n,e),this.add(r,n+1,e),this.setind(i)}setAttributes(t){t.setAttribute("position",new _t(this.vertices,3));let e=this.colors.subarray(0,9*this.sz);t.setAttribute("color",new _t(e,3,!0))}makeGroups(t){t.clearGroups();for(let e=0;e<this.ipos;){let i=e++,r=this.ind[i];for(;this.ind[e]===r;)e++;t.addGroup(3*i,3*(e-i),r)}}saveOriginalColors(){this.colors.copyWithin(this.pos,0,this.pos)}},F_=class{origColor;origColorStickeringMask;faceColor;texturePtr=void 0;twistVal=-1;stickerStart;stickerEnd;hintStart;hintEnd;foundationStart;foundationEnd;isDup;faceNum;constructor(t,e,i,r){this.isDup=!!e.isDup,this.faceNum=e.face,this.stickerStart=t.ipos;let n=new Ie(e.color).getHex();this.origColor=n,this.origColorStickeringMask=n,r?.stickeringMask&&this.setStickeringMask(t,r.stickeringMask),this.faceColor=n;let s=this.stickerCoords(e.coords,i);t.makePoly(s,this.faceColor,this.isDup?4:0),this.stickerEnd=t.ipos}stickerCoords(t,e){return U_(t.slice(),e)}hintCoords(t,e,i,r){t=this.stickerCoords(t,i),r=r.slice();for(let s=0;s<3;s++)r[s]*=.5*e;let n=new Array(t.length);for(let s=0;3*s<t.length;s++){let o=t.length/3-1-s;n[3*s]=t[3*o]+r[0],n[3*s+1]=t[3*o+1]+r[1],n[3*s+2]=t[3*o+2]+r[2]}return n}foundationCoords(t){let e=t.slice();for(let i=0;i<t.length;i++)e[i]=t[i]*.999;return e}addHint(t,e,i,r,n,s){this.hintStart=t.ipos;let o=this.hintCoords(e.coords,r,n,s);t.makePoly(o,this.faceColor,i&&!this.isDup?2:4),this.hintEnd=t.ipos}addFoundation(t,e,i){this.foundationStart=t.ipos;let r=this.foundationCoords(e.coords);t.makePoly(r,i,this.isDup?4:6),this.foundationEnd=t.ipos}setHintStickers(t,e){let i=this.isDup||!e?4:2;for(let r=this.hintStart;r<this.hintEnd;r++)t.ind[r]=i|t.ind[r]&1}setStickeringMask(t,e){let i=0;switch(e){case"regular":{i=this.origColor;break}case"dim":{this.origColor===16777215?i=14540253:i=new Ie(this.origColor).multiplyScalar(.5).getHex();break}case"oriented":{i=4513228;break}case"experimentalOriented2":{i=16776618;break}case"ignored":{i=4473924;break}case"mystery":{i=15911883;break}case"invisible":i=this.origColor}this.origColorStickeringMask=i;for(let r=9*this.stickerStart;r<9*this.stickerEnd;r+=3)t.colors[t.pos+r]=i>>16,t.colors[t.pos+r+1]=i>>8&255,t.colors[t.pos+r+2]=i&255;for(let r=9*this.hintStart;r<9*this.hintEnd;r+=3)t.colors[t.pos+r]=i>>16,t.colors[t.pos+r+1]=i>>8&255,t.colors[t.pos+r+2]=i&255;this.setHintStickers(t,e!=="invisible"&&!this.isDup)}addUVs(t){let e=t.uvs,i=t.vertices,r=new Array(3);for(let n=3*this.stickerStart;n<3*this.stickerEnd;n++){r[0]=i[3*n],r[1]=i[3*n+1],r[2]=i[3*n+2];let s=t.tm.getuv(this.faceNum,r);e[2*n]=s[0],e[2*n+1]=s[1]}for(let n=3*this.hintStart;n<3*this.hintEnd;n++){r[0]=i[3*n],r[1]=i[3*n+1],r[2]=i[3*n+2];let s=t.tm.getuv(this.faceNum,r);e[2*n]=s[0],e[2*n+1]=s[1]}}setTexture(t,e){if(this.texturePtr===e)return 0;this.texturePtr=e;let i=6*t.sz;return t.uvs.copyWithin(6*this.stickerStart,6*e.stickerStart+i,6*e.stickerEnd+i),t.uvs.copyWithin(6*this.hintStart,6*e.hintStart+i,6*e.hintEnd+i),1}setColor(t,e){let i=e.origColorStickeringMask;if(this.faceColor!==i){this.faceColor=i;let r=t.pos;return t.colors.copyWithin(9*this.stickerStart,9*e.stickerStart+r,9*e.stickerEnd+r),t.colors.copyWithin(9*this.hintStart,9*e.hintStart+r,9*e.hintEnd+r),1}else return 0}},O_=class{cubie;geo;constructor(t,e,i){this.cubie=new $i;let r=t.coords,n=new m3(r.length/3-2,e);for(let o=1;3*o+3<r.length;o++)n.addUncolored(r,0),n.addUncolored(r,o),n.addUncolored(r,o+1);this.geo=new jt,n.setAttributes(this.geo);let s=new Mt(this.geo,hn);s.userData.quantumMove=i.notationMapper.notationToExternal(new b(t.name)),this.cubie.scale.setScalar(.99),this.cubie.add(s)}},z_=class{axis;order;constructor(t){let e=t.coordinates;this.axis=new F(e[0],e[1],e[2]),this.order=t.order}},B_=.71,kr=.5,g3=class extends At{constructor(t,e,i,r=!1,n=!1,s=1,o=1,a={}){if(super(),this.scheduleRenderCallback=t,this.kpuzzle=e,this.stickerDat=i,this.faceletScale=o,this.params=a,i.stickers.length===0)throw Error("Reuse of stickerdat from pg; please don't do that.");this.hintMaterial=new st({vertexColors:!0,transparent:!0,opacity:.5}),this.hintMaterialDisposable=!0,this.stickerMaterial=sa,this.stickerMaterialDisposable=!1,this.axesInfo={};let l=this.stickerDat.axis;for(let C of l)this.axesInfo[C.quantumMove.family]=new z_(C);let c=this.stickerDat.stickers;this.stickers={},this.materialArray1=new Array(8),this.materialArray2=new Array(8),this.showFoundation(r),r=!0;let f=0,h=3;for(let C of c){let L=C.coords.length/3;f+=h*(L-2)}let u=new m3(f,i.textureMapper),p=0,d=[],y=0;for(let C of i.faces)d.push(k_(C.coords)),y+=N_(C.coords);let g=o!=="auto"?o*o:B_,m=0;for(let C of c)C.isDup||m++;let w=Math.sqrt(y/m)*(1-Math.sqrt(g))/2;for(let C of c){let L=C.orbit,S=C.ord,v=C.ori;this.stickers[L]||(this.stickers[L]=[]),this.stickers[L][v]||(this.stickers[L][v]=[]);let D={};a.stickeringMask&&(D.stickeringMask=kc(a.stickeringMask,L,S,v,!1));let U=new F_(u,C,w,D);this.stickers[L][v][S]=U}this.showHintStickers=n,n=!0;for(let C of c){let L=C.orbit,S=C.ord,v=C.ori;this.stickers[L][v][S].addHint(u,C,n,s,w,d[C.face])}this.foundationBound=u.ipos;for(let C of c){let L=C.orbit,S=C.ord,v=C.ori;r&&this.stickers[L][v][S].addFoundation(u,C,p)}let M=new jt;u.setAttributes(M),u.makeGroups(M);let x=new Mt(M,this.materialArray1);x.scale.set(kr,kr,kr),this.add(x);let P=new Mt(M,this.materialArray2);P.scale.set(kr,kr,kr),this.add(P);let T=this.stickerDat.faces;this.movingObj=P,this.fixedGeo=M,this.filler=u;for(let C of T){let L=new O_(C,i.textureMapper,this.stickerDat);L.cubie.scale.set(kr,kr,kr),this.add(L.cubie),this.controlTargets.push(L.cubie.children[0])}u.saveOriginalColors(),i.stickers=[],this.updateMaterialArrays()}stickers;axesInfo;stickerTargets=[];controlTargets=[];movingObj;filler;foundationBound;fixedGeo;lastPos;lastMoveTransformation;hintMaterial;stickerMaterial;materialArray1;materialArray2;textured=!1;showHintStickers=!1;showFoundations=!1;hintMaterialDisposable;stickerMaterialDisposable;#e=!1;dispose(){this.fixedGeo&&this.fixedGeo.dispose(),this.stickerMaterialDisposable&&(this.stickerMaterial.dispose(),this.stickerMaterial=sa,this.stickerMaterialDisposable=!1),this.hintMaterialDisposable&&(this.hintMaterial.dispose(),this.hintMaterial=sa,this.hintMaterialDisposable=!1)}experimentalGetStickerTargets(){return this.stickerTargets}experimentalGetControlTargets(){return this.controlTargets}#t(t){try{return this.kpuzzle.moveToTransformation(t),!0}catch{return!1}}getClosestMoveToAxis(t,e){let i=null,r=0,n=o=>o;switch(e.depth){case"secondSlice":{n=o=>o.modified({innerLayer:2});break}case"rotation":{n=o=>o.modified({family:`${o.family}v`});break}}for(let o of this.stickerDat.axis){let a=t.dot(new F(...o.coordinates));if(a>r){let l=this.stickerDat.notationMapper.notationToExternal(n(o.quantumMove));if(!l||(console.log(l.family),l.family==="T"&&e.depth==="none"))continue;this.#t(l)&&(r=a,i=l)}}if(!i)return null;e.invert&&(i=i.invert());let s=this.kpuzzle.moveToTransformation(i).repetitionOrder();return{move:i,order:s}}setStickeringMask(t){if(this.params.stickeringMask=t,t.specialBehaviour!=="picture")for(let e of this.kpuzzle.definition.orbits){let{numPieces:i,numOrientations:r}=e;for(let n=0;n<i;n++)for(let s=0;s<r;s++){let o=kc(t,e.orbitName,n,s,!1),a=this.stickers[e.orbitName][s][n];this.textured&&this.hintMaterialDisposable&&o==="invisible"||a.setStickeringMask(this.filler,o)}}this.#e=!0,this.lastPos&&this.onPositionChange(this.lastPos)}onPositionChange(t){let{pattern:e}=t,i=new wt;this.movingObj.rotation.copy(i);let r=0,n=this.filler,s=n.ind;if(!this.lastPos||this.#e||!this.lastPos.pattern.isIdentical(e)){for(let a in this.stickers){let l=this.stickers[a],c=e.patternData[a],f=l.length;if(f===1){let h=l[0];for(let u=0;u<h.length;u++){let p=c.pieces[u];this.textured?r+=h[u].setTexture(n,h[p]):r+=h[u].setColor(n,h[p])}}else for(let h=0;h<f;h++){let u=l[h];for(let p=0;p<u.length;p++){let d=(h+f-c.orientation[p])%f,y=c.pieces[p];this.textured?r+=u[p].setTexture(n,l[d][y]):r+=u[p].setColor(n,l[d][y])}}}this.lastPos=t}let o=0;for(let a of t.movesInProgress){let l=a.move,c=this.stickerDat.unswizzle(l);if(!c)return;let f=l,h;try{h=this.kpuzzle.moveToTransformation(f.modified({amount:1}))}catch(y){let g=this.stickerDat.notationMapper.notationToInternal(f);if(g){let m=this.stickerDat.notationMapper.notationToExternal(g.modified({amount:1}));m&&(h=this.kpuzzle.moveToTransformation(m))}if(!h)throw console.log(y),y}let u=this.axesInfo[c.family],p=u.axis,d=-this.ease(a.fraction)*a.direction*c.amount*_i/u.order;if(this.movingObj.rotateOnAxis(p,d),this.lastMoveTransformation!==h){for(let y in this.stickers){let g=this.stickers[y],m=g.length,w=h.transformationData[y];for(let M=0;M<m;M++){let x=g[M];for(let P=0;P<x.length;P++){let T=x[P],C=w.permutation[P],L=0;if((C!==P||w.orientationDelta[P]!==0)&&(L=1),L!==T.twistVal){if(L){for(let S=T.stickerStart;S<T.stickerEnd;S++)s[S]|=1;for(let S=T.hintStart;S<T.hintEnd;S++)s[S]|=1;for(let S=T.foundationStart;S<T.foundationEnd;S++)s[S]|=1}else{for(let S=T.stickerStart;S<T.stickerEnd;S++)s[S]&=-2;for(let S=T.hintStart;S<T.hintEnd;S++)s[S]&=-2;for(let S=T.foundationStart;S<T.foundationEnd;S++)s[S]&=-2}T.twistVal=L,o++}}}}this.lastMoveTransformation=h}}(this.#e||o)&&this.filler.makeGroups(this.fixedGeo),(this.#e||r)&&(this.textured&&(this.fixedGeo.getAttribute("uv").addUpdateRange(0,6*this.foundationBound),this.fixedGeo.getAttribute("uv").needsUpdate=!0),(this.#e||!this.textured)&&(this.fixedGeo.getAttribute("color").addUpdateRange(0,9*this.foundationBound),this.fixedGeo.getAttribute("color").needsUpdate=!0)),this.scheduleRenderCallback(),this.#e=!1}ease(t){return u3(t)}showHintFacelets(t){this.showHintStickers=t}updateMaterialArrays(){for(let t=0;t<8;t++)this.materialArray1[t]=hn,this.materialArray2[t]=hn;this.materialArray1[0]=this.stickerMaterial,this.materialArray2[1]=this.stickerMaterial,this.showHintStickers?(this.materialArray1[2]=this.hintMaterial,this.materialArray2[3]=this.hintMaterial):(this.materialArray1[2]=hn,this.materialArray2[3]=hn),this.showFoundations?(this.materialArray1[6]=d3,this.materialArray2[7]=d3):(this.materialArray1[6]=hn,this.materialArray2[7]=hn)}showFoundation(t){this.showFoundations=t}setHintStickerOpacity(t){this.hintMaterialDisposable&&(this.hintMaterial.dispose(),this.hintMaterialDisposable=!1),t===0?this.hintMaterial=hn:t===1?this.hintMaterial=this.stickerMaterial:(this.hintMaterial=new st({vertexColors:!0,transparent:!0,opacity:t}),this.hintMaterialDisposable=!0)}experimentalUpdateOptions(t){t.hintFacelets!==void 0&&this.showHintFacelets(t.hintFacelets!=="none"),t.showFoundation!==void 0&&this.showFoundation(t.showFoundation),t.hintStickerOpacity!==void 0&&this.setHintStickerOpacity(t.hintStickerOpacity),this.#e=!0,this.lastPos&&this.onPositionChange(this.lastPos),typeof t.faceletScale<"u"&&t.faceletScale!==this.faceletScale&&console.warn("Dynamic facelet scale is not yet supported for PG3D. For now, re-create the TwistyPlayer to change the facelet scale."),this.updateMaterialArrays(),this.scheduleRenderCallback()}adduvs(){let t=this.filler;if(t.uvs)return;this.filler.uvs=new Float32Array(12*t.sz);for(let i in this.stickers){let r=this.stickers[i],n=r.length;for(let s=0;s<n;s++){let o=r[s];for(let a of o)a.addUVs(this.filler)}}t.uvs.copyWithin(6*t.sz,0,6*t.sz);let e=t.uvs.subarray(0,6*t.sz);this.fixedGeo.setAttribute("uv",new _t(e,2,!0))}experimentalUpdateTexture(t,e,i){e||(t=!1),t&&!this.filler.uvs&&this.adduvs(),this.textured=t,this.stickerMaterialDisposable&&(this.stickerMaterial.dispose(),this.stickerMaterialDisposable=!1),t?(this.stickerMaterial=new st({map:e,side:Lt,transparent:!1}),this.stickerMaterialDisposable=!0):this.stickerMaterial=sa,this.hintMaterialDisposable&&(this.hintMaterial.dispose(),this.hintMaterialDisposable=!1),t?(this.hintMaterial=new st({map:i,side:Lt,transparent:!0}),this.hintMaterialDisposable=!0):this.hintMaterial=sa,t&&this.showHintFacelets(i!==null),this.updateMaterialArrays(),this.#e=!0,this.lastPos&&this.onPositionChange(this.lastPos),this.scheduleRenderCallback()}},G_=class{renderTargets=new Set;twisty3Ds=new Set;threeJSScene=(async()=>new(await wi()).ThreeScene)();addRenderTarget(t){this.renderTargets.add(t)}scheduleRender(){for(let t of this.renderTargets)t.scheduleRender()}async addTwisty3DPuzzle(t){this.twisty3Ds.add(t),(await this.threeJSScene).add(t)}async removeTwisty3DPuzzle(t){this.twisty3Ds.delete(t),(await this.threeJSScene).remove(t)}async clearPuzzles(){for(let t of this.twisty3Ds)(await this.threeJSScene).remove(t);this.twisty3Ds.clear()}}});async function wi(){return Y_??=Promise.resolve().then(()=>(S3(),y3))}function lh(){return K_??(devicePixelRatio||1)}async function ch(t,e,i,r){aa.length===0&&aa.push(fh());let n=await aa[0];return n.setSize(t,e),n.render(i,r),n.domElement}async function Q_(t,e,i,r,n){if(t===0||e===0)return;aa.length===0&&aa.push(fh());let s=await ch(t,e,r,n),o=i.getContext("2d");o.clearRect(0,0,i.width,i.height),o.drawImage(s,0,0)}async function fh(){let t=(await wi()).ThreeWebGLRenderer,e=new t({antialias:!0,alpha:!0});return e.outputColorSpace=$_,e.setPixelRatio(lh()),e}function M3(t){return(Math.exp(1-t)-(1-t))/(1-Math.E)+1}async function hh(t,e,i=!1){let r=new(await wi()).ThreeSpherical(e.distance,(90-(i?-1:1)*e.latitude)/Zs,((i?180:0)+e.longitude)/Zs);r.makeSafe(),t.position.setFromSpherical(r),t.lookAt(0,0,0)}function s6(){return Zl.shareAllNewRenderers!=="auto"?(Zl.shareAllNewRenderers||ah++,Zl.shareAllNewRenderers!=="never"):ah<n6?(ah++,!1):(T3=!0,!0)}function v3(){return T3}var Zl,la,R3,b3,Ur,ft,Qs,mt,$s,W_,Ks,X_,Yt,mi,q_,Mi,Bn,Kl,C3,_i,Zs,oa,j_,ti,nh,x3,E3,_3,qs,zn,js,Ys,sh,Y_,K_,w3,Z_,aa,$_,A3,J_,oh,e6,t6,i6,r6,ah,n6,T3,Ql,rh=A(()=>{ts();Zl={shareAllNewRenderers:"auto",showRenderStats:!1},la=class{#e=0;#t=0;queue(t){return new Promise(async(e,i)=>{try{let r=++this.#e,n=await t;r>this.#t&&(this.#t=r,e(n))}catch(r){i(r)}})}},R3=0,b3=class{canReuse(t,e){return t===e||this.canReuseValue(t,e)}canReuseValue(t,e){return!1}debugGetChildren(){return Array.from(this.#e.values())}#e=new Set;addChild(t){this.#e.add(t)}removeChild(t){this.#e.delete(t)}lastSourceGeneration=0;markStale(t){if(t.detail.generation!==R3)throw new Error("A TwistyProp was marked stale too late!");if(this.lastSourceGeneration!==t.detail.generation){this.lastSourceGeneration=t.detail.generation;for(let e of this.#e)e.markStale(t);this.#i()}}#t=new Set;addRawListener(t,e){this.#t.add(t),e?.initial&&t()}removeRawListener(t){this.#t.delete(t)}#i(){this.#r||(this.#r=!0,setTimeout(()=>this.#s(),0))}#r=!1;#s(){if(!this.#r)throw new Error("Invalid dispatch state!");for(let t of this.#t)t();this.#r=!1}#n=new Map;addFreshListener(t){let e=new la,i=null,r=async()=>{let n=await e.queue(this.get());i!==null&&this.canReuse(i,n)||(i=n,t(n))};this.#n.set(t,r),this.addRawListener(r,{initial:!0})}removeFreshListener(t){this.removeRawListener(this.#n.get(t)),this.#n.delete(t)}},Ur=class extends b3{#e;constructor(t){super(),this.#e=Ta(()=>this.getDefaultValue()),t&&(this.#e=this.deriveFromPromiseOrValue(t,this.#e))}set(t){this.#e=this.deriveFromPromiseOrValue(t,this.#e);let e={sourceProp:this,value:this.#e,generation:++R3};this.markStale(new CustomEvent("stale",{detail:e}))}async get(){return this.#e}async deriveFromPromiseOrValue(t,e){return this.derive(await t,e)}},ft=class extends Ur{derive(t){return t}},Qs=Symbol("no value"),mt=class extends b3{constructor(t,e){super(),this.userVisibleErrorTracker=e,this.#e=t;for(let i of Object.values(t))i.addChild(this)}#e;#t=null;#i=null;async get(){let t=this.lastSourceGeneration;if(this.#i?.generation===t)return this.#i.output;let e={generation:t,output:this.#s(this.#r(),t,this.#t)};return this.#i=e,this.userVisibleErrorTracker?.reset(),e.output}async#r(){let t={};for(let[i,r]of Object.entries(this.#e))t[i]=r.get();let e={};for(let i in this.#e)e[i]=await t[i];return e}async#s(t,e,i=null){let r=await t,n=o=>(this.#t={inputs:r,output:Promise.resolve(o),generation:e},o);if(!i)return n(await this.derive(r));let s=i.inputs;for(let o in this.#e)if(!this.#e[o].canReuse(r[o],s[o]))return n(await this.derive(r));return i.output}},$s=class{#e=[];addListener(t,e){let i=!1,r=n=>{i||e(n)};t.addFreshListener(r),this.#e.push(()=>{t.removeFreshListener(r),i=!0})}addMultiListener3(t,e){this.addMultiListener(t,e)}addMultiListener(t,e){let i=!1,r=t.length-1,n=async s=>{if(r>0){r--;return}if(i)return;let o=t.map(l=>l.get()),a=await Promise.all(o);e(a)};for(let s of t)s.addFreshListener(n);this.#e.push(()=>{for(let s of t)s.removeFreshListener(n);i=!0})}disconnect(){for(let t of this.#e)t()}},W_=class{};globalThis.HTMLElement?Ks=globalThis.HTMLElement:Ks=W_;X_=class{define(){}};globalThis.customElements?Yt=globalThis.customElements:Yt=new X_;q_=class{replaceSync(){}};globalThis.CSSStyleSheet?mi=globalThis.CSSStyleSheet:mi=q_;Mi=class extends Ks{shadow;contentWrapper;constructor(t){super(),this.shadow=this.attachShadow({mode:t?.mode??"closed"}),this.contentWrapper=document.createElement("div"),this.contentWrapper.classList.add("wrapper"),this.shadow.appendChild(this.contentWrapper)}addCSS(t){this.shadow.adoptedStyleSheets.push(t)}removeCSS(t){let e=this.shadow.adoptedStyleSheets.indexOf(t);typeof e<"u"&&this.shadow.adoptedStyleSheets.splice(e,e+1)}addElement(t){return this.contentWrapper.appendChild(t)}prependElement(t){this.contentWrapper.prepend(t)}removeElement(t){return this.contentWrapper.removeChild(t)}};Yt.define("twisty-managed-custom-element",Mi);Bn=class{constructor(t){this.callback=t}animFrameID=null;animFrame=this.animFrameWrapper.bind(this);requestIsPending(){return!!this.animFrameID}requestAnimFrame(){this.animFrameID||(this.animFrameID=requestAnimationFrame(this.animFrame))}cancelAnimFrame(){this.animFrameID&&(cancelAnimationFrame(this.animFrameID),this.animFrameID=0)}animFrameWrapper(t){this.animFrameID=0,this.callback(t)}},Kl={floating:!0,none:!0},C3=class extends ft{getDefaultValue(){return"auto"}},_i=Math.PI*2,Zs=360/_i,oa=globalThis.performance,j_=class{mode=0;dom=document.createElement("div");constructor(){this.dom.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",this.dom.addEventListener("click",t=>{t.preventDefault(),this.showPanel(++this.mode%this.dom.children.length)},!1),this.showPanel(0)}addPanel(t){return this.dom.appendChild(t.dom),t}showPanel(t){for(let e=0;e<this.dom.children.length;e++)this.dom.children[e].style.display=e===t?"block":"none";this.mode=t}beginTime=(oa||Date).now();prevTime=this.beginTime;frames=0;fpsPanel=this.addPanel(new sh("FPS","#0ff","#002"));msPanel=this.addPanel(new sh("MS","#0f0","#020"));memPanel=oa?.memory?this.addPanel(new sh("MB","#f08","#201")):null;REVISION=16;begin(){this.beginTime=(oa||Date).now()}end(){this.frames++;let t=(oa||Date).now();if(this.msPanel.update(t-this.beginTime,200),t>=this.prevTime+1e3&&(this.fpsPanel.update(this.frames*1e3/(t-this.prevTime),100),this.prevTime=t,this.frames=0,this.memPanel)){let e=oa.memory;this.memPanel.update(e.usedJSHeapSize/1048576,e.jsHeapSizeLimit/1048576)}return t}update(){this.beginTime=this.end()}},ti=Math.round(globalThis?.window?.devicePixelRatio??1),nh=80*ti,x3=48*ti,E3=3*ti,_3=2*ti,qs=3*ti,zn=15*ti,js=74*ti,Ys=30*ti,sh=class{constructor(t,e,i){this.name=t,this.fg=e,this.bg=i,this.dom.width=nh,this.dom.height=x3,this.dom.style.cssText="width:80px;height:48px",this.context.font=`bold ${9*ti}px Helvetica,Arial,sans-serif`,this.context.textBaseline="top",this.context.fillStyle=i,this.context.fillRect(0,0,nh,x3),this.context.fillStyle=e,this.context.fillText(t,E3,_3),this.context.fillRect(qs,zn,js,Ys),this.context.fillStyle=i,this.context.globalAlpha=.9,this.context.fillRect(qs,zn,js,Ys)}min=1/0;max=0;dom=document.createElement("canvas");context=this.dom.getContext("2d");update(t,e){this.min=Math.min(this.min,t),this.max=Math.max(this.max,t),this.context.fillStyle=this.bg,this.context.globalAlpha=1,this.context.fillRect(0,0,nh,zn),this.context.fillStyle=this.fg,this.context.fillText(`${Math.round(t)} ${this.name} (${Math.round(this.min)}-${Math.round(this.max)})`,E3,_3),this.context.drawImage(this.dom,qs+ti,zn,js-ti,Ys,qs,zn,js-ti,Ys),this.context.fillRect(qs+js-ti,zn,ti,Ys),this.context.fillStyle=this.bg,this.context.globalAlpha=.9,this.context.fillRect(qs+js-ti,zn,ti,Math.round((1-t/e)*Ys))}},Y_=null;K_=null;w3=.1,Z_=class extends EventTarget{constructor(t){super(),this.target=t}#e=new Map;start(){this.addTargetListener("pointerdown",this.onPointerDown.bind(this)),this.addTargetListener("contextmenu",t=>{t.preventDefault()}),this.addTargetListener("touchmove",t=>t.preventDefault()),this.addTargetListener("dblclick",t=>t.preventDefault())}stop(){for(let[t,e]of this.#t.entries())this.target.removeEventListener(t,e);this.#t.clear(),this.#i=!1}#t=new Map;addTargetListener(t,e){this.#t.has(t)||(this.target.addEventListener(t,e),this.#t.set(t,e))}#i=!1;#r(){this.#i||(this.addTargetListener("pointermove",this.onPointerMove.bind(this)),this.addTargetListener("pointerup",this.onPointerUp.bind(this)),this.#i=!0)}#s(t){this.#e.delete(t.pointerId)}#n(t){let e=this.#e.get(t.pointerId);if(!e)return{movementInfo:null,hasMoved:!1};let i;return(t.movementX??0)!==0||(t.movementY??0)!==0?i={attachedInfo:e.attachedInfo,movementX:t.movementX,movementY:t.movementY,elapsedMs:t.timeStamp-e.lastTimeStamp}:i={attachedInfo:e.attachedInfo,movementX:t.clientX-e.lastClientX,movementY:t.clientY-e.lastClientY,elapsedMs:t.timeStamp-e.lastTimeStamp},e.lastClientX=t.clientX,e.lastClientY=t.clientY,e.lastTimeStamp=t.timeStamp,Math.abs(i.movementX)<w3&&Math.abs(i.movementY)<w3?{movementInfo:null,hasMoved:e.hasMoved}:(e.hasMoved=!0,{movementInfo:i,hasMoved:e.hasMoved})}onPointerDown(t){this.#r();let e={attachedInfo:{},hasMoved:!1,lastClientX:t.clientX,lastClientY:t.clientY,lastTimeStamp:t.timeStamp};this.#e.set(t.pointerId,e),this.target.setPointerCapture(t.pointerId)}onPointerMove(t){let e=this.#n(t).movementInfo;e&&(t.preventDefault(),this.dispatchEvent(new CustomEvent("move",{detail:e})))}onPointerUp(t){let e=this.#n(t),i=this.#e.get(t.pointerId);this.#s(t),this.target.releasePointerCapture(t.pointerId);let r;if(e.hasMoved)r=new CustomEvent("up",{detail:{attachedInfo:i.attachedInfo}});else{let{altKey:n,ctrlKey:s,metaKey:o,shiftKey:a}=t;r=new CustomEvent("press",{detail:{normalizedX:t.offsetX/this.target.offsetWidth*2-1,normalizedY:1-t.offsetY/this.target.offsetHeight*2,rightClick:!!(t.button&2),keys:{altKey:n,ctrlOrMetaKey:s||o,shiftKey:a}}})}this.dispatchEvent(r)}},aa=[];$_="srgb-linear";A3=new mi;A3.replaceSync(`
:host {
  width: 384px;
  height: 256px;
  display: grid;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
  place-content: center;
  contain: strict;
}

.loading {
  width: 4em;
  height: 4em;
  border-radius: 2.5em;
  border: 0.5em solid rgba(0, 0, 0, 0);
  border-top: 0.5em solid rgba(0, 0, 0, 0.7);
  border-right: 0.5em solid rgba(0, 0, 0, 0.7);
  animation: fade-in-delayed 4s, rotate 1s linear infinite;
}

@keyframes fade-in-delayed {
  0% { opacity: 0; }
  25% {opacity: 0; }
  100% { opacity: 1; }
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* TODO: This is due to stats hack. Replace with \`canvas\`. */
.wrapper > canvas {
  max-width: 100%;
  max-height: 100%;
  animation: fade-in 0.25s ease-in;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.wrapper.invisible {
  opacity: 0;
}

.wrapper.drag-input-enabled > canvas {
  cursor: grab;
}

.wrapper.drag-input-enabled > canvas:active {
  cursor: grabbing;
}
`);J_=!0,oh=500,e6=50,t6=.75;i6=class{constructor(t,e,i,r){this.startTimestamp=t,this.momentumX=e,this.momentumY=i,this.callback=r,this.scheduler.requestAnimFrame(),this.lastTimestamp=t}scheduler=new Bn(this.render.bind(this));lastTimestamp;render(t){let e=(this.lastTimestamp-this.startTimestamp)/oh,i=Math.min(1,(t-this.startTimestamp)/oh);if(e===0&&i>e6/oh)return;let r=M3(i)-M3(e);this.callback(this.momentumX*r*1e3,this.momentumY*r*1e3),i<1&&this.scheduler.requestAnimFrame(),this.lastTimestamp=t}},r6=class{constructor(t,e,i,r){this.model=t,this.mirror=e,this.canvas=i,this.dragTracker=r,this.dragTracker.addEventListener("move",this.onMove.bind(this)),this.dragTracker.addEventListener("up",this.onUp.bind(this))}experimentalInertia=J_;onMovementBound=this.onMovement.bind(this);experimentalHasBeenMoved=!1;temperMovement(t){return Math.sign(t)*Math.log(Math.abs(t*10)+1)/6}onMove(t){t.detail.attachedInfo??={};let{temperedX:e,temperedY:i}=this.onMovement(t.detail.movementX,t.detail.movementY),r=t.detail.attachedInfo;r.lastTemperedX=e*10,r.lastTemperedY=i*10,r.timestamp=t.timeStamp}onMovement(t,e){let i=this.mirror?-1:1,r=Math.min(this.canvas.offsetWidth,this.canvas.offsetHeight),n=this.temperMovement(t/r),s=this.temperMovement(e/r*t6);return this.model.twistySceneModel.orbitCoordinatesRequest.set((async()=>{let o=await this.model.twistySceneModel.orbitCoordinates.get();return{latitude:o.latitude+2*s*Zs*i,longitude:o.longitude-2*n*Zs}})()),{temperedX:n,temperedY:s}}onUp(t){t.preventDefault(),"lastTemperedX"in t.detail.attachedInfo&&"lastTemperedY"in t.detail.attachedInfo&&"timestamp"in t.detail.attachedInfo&&t.timeStamp-t.detail.attachedInfo.timestamp<60&&new i6(t.timeStamp,t.detail.attachedInfo.lastTemperedX,t.detail.attachedInfo.lastTemperedY,this.onMovementBound)}};ah=0,n6=2,T3=!1;Ql=class extends Mi{constructor(t,e,i){super(),this.model=t,this.options=i,this.scene=e??null,this.loadingElement=this.addElement(document.createElement("div")),this.loadingElement.classList.add("loading"),Zl.showRenderStats&&(this.stats=new j_,this.stats.dom.style.position="absolute",this.contentWrapper.appendChild(this.stats.dom))}scene=null;stats=null;rendererIsShared=s6();loadingElement=null;async connectedCallback(){this.addCSS(A3),this.addElement((await this.canvasInfo()).canvas),this.#s(),new ResizeObserver(this.#s.bind(this)).observe(this.contentWrapper),this.orbitControls(),this.#e(),this.scheduleRender()}async#e(){(await this.#l()).addEventListener("press",(async e=>{await this.model.twistySceneModel.movePressInput.get()==="basic"&&this.dispatchEvent(new CustomEvent("press",{detail:{pressInfo:e.detail,cameraPromise:this.camera()}}))}))}#t=new la;async clearCanvas(){if(this.rendererIsShared){let t=await this.canvasInfo();t.context.clearRect(0,0,t.canvas.width,t.canvas.height)}else{let e=(await this.renderer()).getContext();e.clear(e.COLOR_BUFFER_BIT)}}#i=0;#r=0;async#s(){let t=await this.#t.queue(this.camera()),e=this.contentWrapper.clientWidth,i=this.contentWrapper.clientHeight;this.#i=e,this.#r=i;let r=0,n=0,s=0;if(i>e&&(s=i-e,n=-Math.floor(.5*s)),t.aspect=e/i,t.setViewOffset(e,i-s,r,n,e,i),t.updateProjectionMatrix(),this.clearCanvas(),this.rendererIsShared){let o=await this.canvasInfo();o.canvas.width=e*lh(),o.canvas.height=i*lh(),o.canvas.style.width=`${e.toString()}px`,o.canvas.style.height=`${i.toString()}px`}else(await this.renderer()).setSize(e,i,!0);this.scheduleRender()}#n=null;async renderer(){if(this.rendererIsShared)throw new Error("renderer expected to be shared.");return this.#n??=fh()}#o=null;async canvasInfo(){return this.#o??=(async()=>{let t;if(this.rendererIsShared)t=this.addElement(document.createElement("canvas"));else{let i=await this.renderer();t=this.addElement(i.domElement)}this.loadingElement?.remove();let e=t.getContext("2d");return{canvas:t,context:e}})()}#a=null;async#l(){return this.#a??=(async()=>{let t=new Z_((await this.canvasInfo()).canvas);return this.model?.twistySceneModel.dragInput.addFreshListener(e=>{let i=!1;switch(e){case"auto":{t.start(),i=!0;break}case"none":{t.stop();break}}this.contentWrapper.classList.toggle("drag-input-enabled",i)}),t})()}#f=null;async camera(){return this.#f??=(async()=>{let t=new(await wi()).ThreePerspectiveCamera(20,1,.1,20);return t.position.copy(new(await wi()).ThreeVector3(2,4,4).multiplyScalar(this.options?.backView?-1:1)),t.lookAt(0,0,0),t})()}#h=null;async orbitControls(){return this.#h??=(async()=>{let t=new r6(this.model,!!this.options?.backView,(await this.canvasInfo()).canvas,await this.#l());return this.model&&this.addListener(this.model.twistySceneModel.orbitCoordinates,async e=>{let i=await this.camera();hh(i,e,this.options?.backView),this.scheduleRender()}),t})()}addListener(t,e){t.addFreshListener(e),this.#c.push(()=>{t.removeFreshListener(e)})}#c=[];disconnect(){for(let t of this.#c)t();this.#c=[]}#d=null;experimentalNextRenderFinishedCallback(t){this.#d=t}async render(){if(!this.scene)throw new Error("Attempted to render without a scene");this.stats?.begin();let[t,e,i]=await Promise.all([this.scene.scene(),this.camera(),this.canvasInfo()]);this.rendererIsShared?await Q_(this.#i,this.#r,i.canvas,t,e):(await this.renderer()).render(t,e),this.stats?.end(),this.#d?.(),this.#d=null}#u=new Bn(this.render.bind(this));scheduleRender(){this.#u.requestAnimFrame()}};Yt.define("twisty-3d-vantage",Ql)});function a6(t){return t.endsWith("v")||["x","y","z"].includes(t)?"Rotation":t.startsWith("2")||["M","E","S"].includes(t)?"Inner":"Outer"}function l6(){if(ca)return ca;ca={};let t=[...Object.keys(ho.moves),...Object.keys(ho.derivedMoves)];for(let e of t)ca[e]=a6(e);return ca}function c6(t,e){let i=L3[t];if(!i)throw new Error(`Invalid metric for 3x3x3: ${t}`);let r=l6(),n=e.quantum.toString();if(!(n in r))throw new Error(`Invalid move for 3x3x3 ${t}: ${n}`);let s=r[n],{constantFactor:o,amountFactor:a,zeroAmount:l}=i[s];return e.amount===0?l:o+a*Math.abs(e.amount)}function N3(t){return"A"<=t&&t<="Z"}function h6(t){let e=t.family;return N3(e[0])&&e[e.length-1]==="v"||e==="x"||e==="y"||e==="z"||e==="T"?0:1}function d6(t){return 1}function I3(t){let e=t.family;return N3(e[0])&&e[e.length-1]==="v"||e==="x"||e==="y"||e==="z"||e==="T"?0:1}function u6(t){return Math.abs(t.amount)*I3(t)}function k3(t,e,i){if(t.id==="3x3x3"){if(e in L3)return Ot(fa,[r=>c6(e,r)])(i)}else switch(e){case"ETM":return p6(i);case"RBTM":{if(t.pg)return g6(i);break}case"RBQTM":{if(t.pg)return m6(i);break}}throw new Error("Unsupported puzzle or metric.")}var o6,D3,ca,L3,fa,f6,WI,p6,m6,g6,P3,U3=A(()=>{ts();xr();o6=class extends vr{traverseAlg(t){let e=0;for(let i of t.childAlgNodes())e+=this.traverseAlgNode(i);return e}traverseGrouping(t){return this.traverseAlg(t.alg)*Math.abs(t.amount)}traverseMove(t){return 1}traverseCommutator(t){return 2*(this.traverseAlg(t.A)+this.traverseAlg(t.B))}traverseConjugate(t){return 2*this.traverseAlg(t.A)+this.traverseAlg(t.B)}traversePause(t){return 1}traverseNewline(t){return 0}traverseLineComment(t){return 0}},D3=Ot(o6);L3={OBTM:{Rotation:{constantFactor:0,amountFactor:0,zeroAmount:0},Outer:{constantFactor:1,amountFactor:0,zeroAmount:0},Inner:{constantFactor:2,amountFactor:0,zeroAmount:0}},RBTM:{Rotation:{constantFactor:0,amountFactor:0,zeroAmount:0},Outer:{constantFactor:1,amountFactor:0,zeroAmount:0},Inner:{constantFactor:1,amountFactor:0,zeroAmount:0}},OBQTM:{Rotation:{constantFactor:0,amountFactor:0,zeroAmount:0},Outer:{constantFactor:0,amountFactor:1,zeroAmount:0},Inner:{constantFactor:0,amountFactor:2,zeroAmount:0}},RBQTM:{Rotation:{constantFactor:0,amountFactor:0,zeroAmount:0},Outer:{constantFactor:0,amountFactor:1,zeroAmount:0},Inner:{constantFactor:0,amountFactor:1,zeroAmount:0}},ETM:{Rotation:{constantFactor:1,amountFactor:0,zeroAmount:1},Outer:{constantFactor:1,amountFactor:0,zeroAmount:1},Inner:{constantFactor:1,amountFactor:0,zeroAmount:1}}};fa=class extends vr{constructor(t){super(),this.metric=t}traverseAlg(t){let e=0;for(let i of t.childAlgNodes())e+=this.traverseAlgNode(i);return e}traverseGrouping(t){let e=t.alg;return this.traverseAlg(e)*Math.abs(t.amount)}traverseMove(t){return this.metric(t)}traverseCommutator(t){return 2*(this.traverseAlg(t.A)+this.traverseAlg(t.B))}traverseConjugate(t){return 2*this.traverseAlg(t.A)+this.traverseAlg(t.B)}traversePause(t){return 0}traverseNewline(t){return 0}traverseLineComment(t){return 0}},f6=class extends vr{traverseAlg(t){let e=0;for(let i of t.childAlgNodes())e+=this.traverseAlgNode(i);return e}traverseGrouping(t){let e=t.alg;return this.traverseAlg(e)*Math.abs(t.amount)}traverseMove(t){return 1}traverseCommutator(t){return 2*(this.traverseAlg(t.A)+this.traverseAlg(t.B))}traverseConjugate(t){return 2*this.traverseAlg(t.A)+this.traverseAlg(t.B)}traversePause(t){return 1}traverseNewline(t){return 1}traverseLineComment(t){return 1}};WI=Ot(fa,[h6]),p6=Ot(fa,[d6]),m6=Ot(fa,[u6]),g6=Ot(fa,[I3]),P3=Ot(f6,[])});function Vn(t){switch(Math.abs(t)){case 0:return 0;case 1:return 1e3;case 2:return 1500;default:return 2e3}}function E6(t,e){let i=new ga,r=new ga;for(let n of t.childAlgNodes())r.push(n),r.experimentalNumAlgNodes()>=e&&(i.push(new Ut(r.toAlg())),r.reset());return i.push(new Ut(r.toAlg())),i.toAlg()}function R6(){return z3+=1,`svg${z3.toString()}`}function gh(t,e){if(t===e)return!0;if(t.length!==e.length)return!1;for(let i=0;i<t.length;i++)if(t[i]!==e[i])return!1;return!0}function B3(t,e,i){if(t===e)return!0;if(t.length!==e.length)return!1;for(let r=0;r<t.length;r++)if(!i(t[r],e[r]))return!1;return!0}function yh(t,e,i){return yc(t,i-e,e)}function k6(){return document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen()}function G3(){return document.fullscreenElement?document.fullscreenElement:document.webkitFullscreenElement??null}function U6(t){return t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullscreen()}function mS(t){vh=t.pageY}async function X3(t,e){let[{ThreePerspectiveCamera:i,ThreeScene:r},n,s,o,a,l,c]=await Promise.all([(async()=>{let{ThreePerspectiveCamera:M,ThreeScene:x}=await wi();return{ThreePerspectiveCamera:M,ThreeScene:x}})(),await t.puzzleLoader.get(),await t.visualizationStrategy.get(),await t.twistySceneModel.stickeringRequest.get(),await t.twistySceneModel.stickeringMaskRequest.get(),await t.legacyPosition.get(),await t.twistySceneModel.orbitCoordinates.get()]),f=e?.width??2048,h=e?.height??2048,u=f/h,p=B6??=await(async()=>new i(20,u,.1,20))(),d=new r,y=new cS(t,{scheduleRender:()=>{}},n,s);d.add(await y.twisty3DPuzzle()),await hh(p,c);let m=(await ch(f,h,d,p)).toDataURL(),w=await yS(t);return{dataURL:m,download:async M=>{SS(m,M??w)}}}async function yS(t){let[e,i]=await Promise.all([t.puzzleID.get(),t.alg.get()]);return`[${e}]${i.alg.experimentalNumChildAlgNodes()===0?"":` ${i.alg.toString()}`}`}function SS(t,e,i="png"){let r=document.createElement("a");r.href=t,r.download=`${e}.${i}`,r.click()}function ES(t){try{let e=he.fromString(t),i=[];return e.toString()!==t&&i.push("Alg is non-canonical!"),{alg:e,issues:new ha({warnings:i})}}catch(e){return{alg:new he,issues:new ha({errors:[`Malformed alg: ${e.toString()}`]})}}}function G6(t,e){return t.alg.isIdentical(e.alg)&&gh(t.issues.warnings,e.issues.warnings)&&gh(t.issues.errors,e.issues.errors)}function K6(t,e){return Y3[t.family[0].toLowerCase()]===Y3[e.family[0].toLowerCase()]}function $6(t){let e=0;return Q6(t).map(r=>{let n={animLeaf:r.animLeafAlgNode,start:e,end:e+r.duration};return e+=r.msUntilNext,n})}async function Cw(){return bw??=new(await wi()).ThreeTextureLoader}async function Tw(t){let{definition:e}=await t.kpuzzle(),i={orbits:{}};for(let r of e.orbits)i.orbits[r.orbitName]={pieces:new Array(r.numPieces).fill(Aw)};return i}function Nw(t){let e={orbits:{}},i=t.split(",");for(let r of i){let[n,s,...o]=r.split(":");if(o.length>0)throw new Error(`Invalid serialized orbit stickering mask (too many colons): \`${r}\``);let a=[];e.orbits[n]={pieces:a};for(let l of s){let c=Lw[l];a.push(Uc(c))}}return e}function _S(t,e){return t.latitude===e.latitude&&t.longitude===e.longitude&&t.distance===e.distance}function $3(t,e){if(t[1]==="x")return e==="Cube3D"?jw:Q3;switch(t){case"megaminx":case"gigaminx":return Yw;case"pyraminx":case"master_tetraminx":return Kw;case"skewb":return Q3;default:return qw}}function tt(t){return new Error(`Cannot get \`.${t}\` directly from a \`TwistyPlayer\`.`)}function nM(t){J3??=new IntersectionObserver((e,i)=>{for(let r of e)r.isIntersecting&&r.intersectionRect.height>0&&(r.target[wS](),i.unobserve(r.target))}),J3.observe(t)}function mM(t){try{return he.fromString(t)}catch{return null}}function MS(t,e){let i=t.indexOf(e);return i===-1?[t,""]:[t.slice(0,i),t.slice(i)]}function eS(t){let e=[];for(let i of t.split(`
`)){let[r,n]=MS(i,pM);r=r.replaceAll("\u2019","'"),e.push(r+n)}return e.join(`
`)}function gM(t,e){let{value:i}=t,{selectionStart:r,selectionEnd:n}=t,s=i.slice(0,r),o=i.slice(n);e=e.replaceAll(`\r
`,`
`);let a=s.match(/\/\/[^\n]*$/),l=i[r-1]==="/"&&e[0]==="/",c=a||l,f=e.match(/\/\/[^\n]*$/),h=e;if(c){let[g,m]=MS(e,`
`);h=g+eS(m)}else h=eS(e);let u=!c&&r!==0&&![`
`," "].includes(h[0])&&![`
`," "].includes(i[r-1]),p=!f&&n!==i.length&&![`
`," "].includes(h.at(-1))&&![`
`," "].includes(i[n]);function d(g,m){let w=g+h+m,M=!!mM(s+w+o);return M&&(h=w),M}u&&p&&d(" "," ")||u&&d(" ","")||p&&d(""," "),dn?.execCommand("insertText",!1,h)||t.setRangeText(h,r,n,"end")}async function SM(t){return new Promise((e,i)=>{try{let r=document.getElementById(t);r&&e(r);let n=new MutationObserver(s=>{for(let o of s)o.attributeName==="id"&&o.target instanceof Element&&o.target.getAttribute("id")===t&&(e(o.target),n.disconnect())});n.observe(document.body,{attributeFilter:["id"],subtree:!0})}catch(r){i(r)}})}function xM(t){return t===1?-1:1}function EM(t,e){return e<0?xM(t):t}function CS(t,e){if(e===1)return t;let i=Array.from(t);return i.reverse(),i}function RM(t="",e=location.href){let i={alg:"alg","setup-alg":"experimental-setup-alg","setup-anchor":"experimental-setup-anchor",puzzle:"puzzle",stickering:"experimental-stickering","puzzle-description":"experimental-puzzle-description",title:"experimental-title","video-url":"experimental-video-url",competition:"experimental-competition-id"},r=new URL(e).searchParams,n={};for(let[s,o]of Object.entries(i)){let a=r.get(t+s);if(a!==null){let l=sc[o];n[l]=a}}return n}function AM(t,e=document.createElement("span")){async function i(){let[r,n]=await Promise.all([t.puzzleAlg.get(),t.puzzleLoader.get()]);if(r.issues.errors.length!==0){e.textContent="";return}let s=!0;function o(a){s?s=!1:e.append(")(");let l=e.appendChild(document.createElement("span")),c=k3(n,a,r.alg);l.append(`${bM[a]}: `);let f=l.appendChild(document.createElement("span"));f.textContent=c.toString(),f.classList.add("move-number"),l.setAttribute("data-before",rS[a]??""),l.setAttribute("title",rS[a]??"")}e.textContent="(",n.id==="3x3x3"?(o("OBTM"),o("OBQTM"),o("RBTM")):n.pg&&(o("RBTM"),o("RBQTM")),o("ETM"),e.append(")")}return t.puzzleAlg.addFreshListener(i),t.puzzleID.addFreshListener(i),e}var nS,y6,Gn,S6,Ht,v6,x6,_6,w6,F3,M6,$l,O3,z3,b6,C6,da,A6,T6,D6,L6,N6,Eh,sS,oS,I6,aS,lS,cS,Sh,dn,P6,F6,O6,fS,hS,V3,dS,uS,pS,z6,nc,vh,ic,H3,W3,dh,uh,gS,B6,vS,q3,xh,ha,j3,V6,H6,W6,X6,q6,j6,Y6,Y3,Z6,Q6,ph,J6,ew,tw,iw,rw,nw,K3,sw,ow,aw,lw,cw,fw,hw,dw,uw,pw,mw,gw,yw,Sw,vw,xw,Ew,_w,ww,Mw,Rw,bw,Z3,Aw,Dw,Lw,Iw,Pw,kw,Uw,Fw,Ow,zw,Bw,Gw,Vw,Hw,Ww,Xw,qw,jw,Q3,Yw,Kw,Zw,Qw,$w,Jw,eM,tM,mh,sc,iM,rM,J3,wS,oc,sM,oM,aM,lM,cM,fM,hM,dM,uM,pM,RS,Jl,tS,iS,yM,bS,vM,Js,eo,_M,wM,MM,AS,rc,TS,ec,tc,rS,bM,CM,DS=A(()=>{rh();U3();Hc();ts();so();xr();nS=class extends vr{constructor(t=Vn){super(),this.durationForAmount=t}traverseAlg(t){let e=0;for(let i of t.childAlgNodes())e+=this.traverseAlgNode(i);return e}traverseGrouping(t){return t.amount*this.traverseAlg(t.alg)}traverseMove(t){return this.durationForAmount(t.amount)}traverseCommutator(t){return 2*(this.traverseAlg(t.A)+this.traverseAlg(t.B))}traverseConjugate(t){return 2*this.traverseAlg(t.A)+this.traverseAlg(t.B)}traversePause(t){return this.durationForAmount(1)}traverseNewline(t){return this.durationForAmount(1)}traverseLineComment(t){return this.durationForAmount(0)}},y6=class{constructor(t,e){this.kpuzzle=t,this.moves=new he(e.experimentalExpand())}moves;durationFn=new nS(Vn);getAnimLeaf(t){return Array.from(this.moves.childAlgNodes())[t]}indexToMoveStartTimestamp(t){let e=new he(Array.from(this.moves.childAlgNodes()).slice(0,t));return this.durationFn.traverseAlg(e)}timestampToIndex(t){let e=0,i;for(i=0;i<this.numAnimatedLeaves();i++)if(e+=this.durationFn.traverseMove(this.getAnimLeaf(i)),e>=t)return i;return i}patternAtIndex(t){return this.kpuzzle.defaultPattern().applyTransformation(this.transformationAtIndex(t))}transformationAtIndex(t){let e=this.kpuzzle.identityTransformation();for(let i of Array.from(this.moves.childAlgNodes()).slice(0,t))e=e.applyMove(i);return e}algDuration(){return this.durationFn.traverseAlg(this.moves)}numAnimatedLeaves(){return D3(this.moves)}moveDuration(t){return this.durationFn.traverseMove(this.getAnimLeaf(t))}},Gn=class{constructor(t,e,i,r,n=[]){this.moveCount=t,this.duration=e,this.forward=i,this.backward=r,this.children=n}},S6=class extends vr{constructor(t){super(),this.kpuzzle=t,this.identity=t.identityTransformation(),this.dummyLeaf=new Gn(0,0,this.identity,this.identity,[])}identity;dummyLeaf;durationFn=new nS(Vn);cache={};traverseAlg(t){let e=0,i=0,r=this.identity,n=[];for(let s of t.childAlgNodes()){let o=this.traverseAlgNode(s);e+=o.moveCount,i+=o.duration,r===this.identity?r=o.forward:r=r.applyTransformation(o.forward),n.push(o)}return new Gn(e,i,r,r.invert(),n)}traverseGrouping(t){let e=this.traverseAlg(t.alg);return this.mult(e,t.amount,[e])}traverseMove(t){let e=t.toString(),i=this.cache[e];if(i)return i;let r=this.kpuzzle.moveToTransformation(t);return i=new Gn(1,this.durationFn.traverseAlgNode(t),r,r.invert()),this.cache[e]=i,i}traverseCommutator(t){let e=this.traverseAlg(t.A),i=this.traverseAlg(t.B),r=e.forward.applyTransformation(i.forward),n=e.backward.applyTransformation(i.backward),s=r.applyTransformation(n),o=new Gn(2*(e.moveCount+i.moveCount),2*(e.duration+i.duration),s,s.invert(),[e,i]);return this.mult(o,1,[o,e,i])}traverseConjugate(t){let e=this.traverseAlg(t.A),i=this.traverseAlg(t.B),n=e.forward.applyTransformation(i.forward).applyTransformation(e.backward),s=new Gn(2*e.moveCount+i.moveCount,2*e.duration+i.duration,n,n.invert(),[e,i]);return this.mult(s,1,[s,e,i])}traversePause(t){return t.experimentalNISSGrouping?this.dummyLeaf:new Gn(1,this.durationFn.traverseAlgNode(t),this.identity,this.identity)}traverseNewline(t){return this.dummyLeaf}traverseLineComment(t){return this.dummyLeaf}mult(t,e,i){let r=Math.abs(e),n=t.forward.selfMultiply(e);return new Gn(t.moveCount*r,t.duration*r,n,n.invert(),i)}},Ht=class{constructor(t,e){this.apd=t,this.back=e}},v6=class extends ir{constructor(t,e,i){super(),this.kpuzzle=t,this.algOrAlgNode=e,this.apd=i,this.i=-1,this.dur=-1,this.goalIndex=-1,this.goalDuration=-1,this.move=void 0,this.back=!1,this.moveDuration=0,this.st=this.kpuzzle.identityTransformation(),this.root=new Ht(this.apd,!1)}move;moveDuration;back;st;root;i;dur;goalIndex;goalDuration;moveByIndex(t){return this.i>=0&&this.i===t?this.move!==void 0:this.dosearch(t,1/0)}moveByDuration(t){return this.dur>=0&&this.dur<t&&this.dur+this.moveDuration>=t?this.move!==void 0:this.dosearch(1/0,t)}dosearch(t,e){return this.goalIndex=t,this.goalDuration=e,this.i=0,this.dur=0,this.move=void 0,this.moveDuration=0,this.back=!1,this.st=this.kpuzzle.identityTransformation(),this.algOrAlgNode.is(he)?this.traverseAlg(this.algOrAlgNode,this.root):this.traverseAlgNode(this.algOrAlgNode,this.root)}traverseAlg(t,e){if(!this.firstcheck(e))return!1;let i=e.back?t.experimentalNumChildAlgNodes()-1:0;for(let r of Ph(t.childAlgNodes(),e.back?-1:1)){if(this.traverseAlgNode(r,new Ht(e.apd.children[i],e.back)))return!0;i+=e.back?-1:1}return!1}traverseGrouping(t,e){if(!this.firstcheck(e))return!1;let i=this.domult(e,t.amount);return this.traverseAlg(t.alg,new Ht(e.apd.children[0],i))}traverseMove(t,e){return this.firstcheck(e)?(this.move=t,this.moveDuration=e.apd.duration,this.back=e.back,!0):!1}traverseCommutator(t,e){if(!this.firstcheck(e))return!1;let i=this.domult(e,1);return i?this.traverseAlg(t.B,new Ht(e.apd.children[2],!i))||this.traverseAlg(t.A,new Ht(e.apd.children[1],!i))||this.traverseAlg(t.B,new Ht(e.apd.children[2],i))||this.traverseAlg(t.A,new Ht(e.apd.children[1],i)):this.traverseAlg(t.A,new Ht(e.apd.children[1],i))||this.traverseAlg(t.B,new Ht(e.apd.children[2],i))||this.traverseAlg(t.A,new Ht(e.apd.children[1],!i))||this.traverseAlg(t.B,new Ht(e.apd.children[2],!i))}traverseConjugate(t,e){if(!this.firstcheck(e))return!1;let i=this.domult(e,1);return i?this.traverseAlg(t.A,new Ht(e.apd.children[1],!i))||this.traverseAlg(t.B,new Ht(e.apd.children[2],i))||this.traverseAlg(t.A,new Ht(e.apd.children[1],i)):this.traverseAlg(t.A,new Ht(e.apd.children[1],i))||this.traverseAlg(t.B,new Ht(e.apd.children[2],i))||this.traverseAlg(t.A,new Ht(e.apd.children[1],!i))}traversePause(t,e){return this.firstcheck(e)?(this.move=t,this.moveDuration=e.apd.duration,this.back=e.back,!0):!1}traverseNewline(t,e){return!1}traverseLineComment(t,e){return!1}firstcheck(t){return t.apd.moveCount+this.i<=this.goalIndex&&t.apd.duration+this.dur<this.goalDuration?this.keepgoing(t):!0}domult(t,e){let i=t.back;if(e===0)return i;e<0&&(i=!i,e=-e);let r=t.apd.children[0],n=Math.min(Math.floor((this.goalIndex-this.i)/r.moveCount),Math.ceil((this.goalDuration-this.dur)/r.duration-1));return n>0&&this.keepgoing(new Ht(r,i),n),i}keepgoing(t,e=1){return this.i+=e*t.apd.moveCount,this.dur+=e*t.apd.duration,e!==1?t.back?this.st=this.st.applyTransformation(t.apd.backward.selfMultiply(e)):this.st=this.st.applyTransformation(t.apd.forward.selfMultiply(e)):t.back?this.st=this.st.applyTransformation(t.apd.backward):this.st=this.st.applyTransformation(t.apd.forward),!1}},x6=16;_6=class extends vr{traverseAlg(t){let e=t.experimentalNumChildAlgNodes();return e<x6?t:E6(t,Math.ceil(Math.sqrt(e)))}traverseGrouping(t){return new Ut(this.traverseAlg(t.alg),t.amount)}traverseMove(t){return t}traverseCommutator(t){return new Wt(this.traverseAlg(t.A),this.traverseAlg(t.B))}traverseConjugate(t){return new Wt(this.traverseAlg(t.A),this.traverseAlg(t.B))}traversePause(t){return t}traverseNewline(t){return t}traverseLineComment(t){return t}},w6=Ot(_6),F3=class{constructor(t,e){this.kpuzzle=t;let i=new S6(this.kpuzzle),r=w6(e);this.decoration=i.traverseAlg(r),this.walker=new v6(this.kpuzzle,r,this.decoration)}decoration;walker;getAnimLeaf(t){if(this.walker.moveByIndex(t)){if(!this.walker.move)throw new Error("`this.walker.mv` missing");let e=this.walker.move;return this.walker.back?e.invert():e}return null}indexToMoveStartTimestamp(t){if(this.walker.moveByIndex(t)||this.walker.i===t)return this.walker.dur;throw new Error(`Out of algorithm: index ${t}`)}indexToMovesInProgress(t){if(this.walker.moveByIndex(t)||this.walker.i===t)return this.walker.dur;throw new Error(`Out of algorithm: index ${t}`)}patternAtIndex(t,e){return this.walker.moveByIndex(t),(e??this.kpuzzle.defaultPattern()).applyTransformation(this.walker.st)}transformationAtIndex(t){return this.walker.moveByIndex(t),this.walker.st}numAnimatedLeaves(){return this.decoration.moveCount}timestampToIndex(t){return this.walker.moveByDuration(t),this.walker.i}algDuration(){return this.decoration.duration}moveDuration(t){return this.walker.moveByIndex(t),this.walker.moveDuration}},M6=class extends ft{getDefaultValue(){return"auto"}},$l="http://www.w3.org/2000/svg",O3="data-copy-id",z3=0;b6={dim:{white:"#dddddd",orange:"#884400",limegreen:"#008800",red:"#660000","rgb(34, 102, 255)":"#000088",yellow:"#888800","rgb(102, 0, 153)":"rgb(50, 0, 76)",purple:"#3f003f"},oriented:"#44ddcc",ignored:"#555555",invisible:"#00000000"},C6=class{constructor(t,e,i,r=!1){if(this.kpuzzle=t,this.showUnknownOrientations=r,!e)throw new Error(`No SVG definition for puzzle type: ${t.name()}`);this.svgID=R6(),this.wrapperElement=document.createElement("div"),this.wrapperElement.classList.add("svg-wrapper"),this.wrapperElement.innerHTML=e;let n=this.wrapperElement.querySelector("svg");if(!n)throw new Error("Could not get SVG element");if(this.svgElement=n,$l!==n.namespaceURI)throw new Error("Unexpected XML namespace");n.style.maxWidth="100%",n.style.maxHeight="100%",this.gradientDefs=document.createElementNS($l,"defs"),n.insertBefore(this.gradientDefs,n.firstChild);for(let s of t.definition.orbits)for(let o=0;o<s.numPieces;o++)for(let a=0;a<s.numOrientations;a++){let l=this.elementID(s.orbitName,o,a),c=this.elementByID(l),f=c?.style.fill;i?(()=>{let h=i.orbits;if(!h)return;let u=h[s.orbitName];if(!u)return;let p=u.pieces[o];if(!p)return;let d=p.facelets[a];if(!d)return;let y=typeof d=="string"?d:d?.mask,g=b6[y];typeof g=="string"?f=g:g&&(f=g[f])})():f=c?.style.fill,this.originalColors[l]=f,this.gradients[l]=this.newGradient(l,f),this.gradientDefs.appendChild(this.gradients[l]),c?.setAttribute("style",`fill: url(#grad-${this.svgID}-${l})`)}for(let s of Array.from(n.querySelectorAll(`[${O3}]`))){let o=s.getAttribute(O3);s.setAttribute("style",`fill: url(#grad-${this.svgID}-${o})`)}this.showUnknownOrientations&&this.drawPattern(this.kpuzzle.defaultPattern())}wrapperElement;svgElement;gradientDefs;originalColors={};gradients={};svgID;drawPattern(t,e,i){this.draw(t,e,i)}draw(t,e,i){let r=e?.experimentalToTransformation();if(!t)throw new Error("Distinguishable pieces are not handled for SVG yet!");for(let n of t.kpuzzle.definition.orbits){let s=t.patternData[n.orbitName],o=r?r.transformationData[n.orbitName]:null;for(let a=0;a<n.numPieces;a++)for(let l=0;l<n.numOrientations;l++){let c=this.elementID(n.orbitName,a,l),f=this.elementID(n.orbitName,s.pieces[a],(n.numOrientations-s.orientation[a]+l)%n.numOrientations),h=!1;if(o){let u=this.elementID(n.orbitName,o.permutation[a],(n.numOrientations-o.orientationDelta[a]+l)%n.numOrientations);f===u&&(h=!0),i=i||0;let p=100*(1-i*i*(2-i*i));this.gradients[c].children[0].setAttribute("stop-color",this.originalColors[f]),this.gradients[c].children[0].setAttribute("offset",`${Math.max(p-5,0)}%`),this.gradients[c].children[1].setAttribute("offset",`${Math.max(p-5,0)}%`),this.gradients[c].children[2].setAttribute("offset",`${p}%`),this.gradients[c].children[3].setAttribute("offset",`${p}%`),this.gradients[c].children[3].setAttribute("stop-color",this.originalColors[u])}else h=!0;h&&(this.showUnknownOrientations&&s.orientationMod?.[a]===1?(this.gradients[c].children[0].setAttribute("stop-color","#000"),this.gradients[c].children[0].setAttribute("offset","5%"),this.gradients[c].children[1].setAttribute("offset","5%"),this.gradients[c].children[2].setAttribute("offset","20%"),this.gradients[c].children[3].setAttribute("offset","20%"),this.gradients[c].children[3].setAttribute("stop-color",this.originalColors[f])):(this.gradients[c].children[0].setAttribute("stop-color",this.originalColors[f]),this.gradients[c].children[0].setAttribute("offset","100%"),this.gradients[c].children[1].setAttribute("offset","100%"),this.gradients[c].children[2].setAttribute("offset","100%"),this.gradients[c].children[3].setAttribute("offset","100%")))}}}newGradient(t,e){let i=document.createElementNS($l,"radialGradient");i.setAttribute("id",`grad-${this.svgID}-${t}`),i.setAttribute("r","70.7107%");let r=[{offset:0,color:e},{offset:0,color:"black"},{offset:0,color:"black"},{offset:0,color:e}];for(let n of r){let s=document.createElementNS($l,"stop");s.setAttribute("offset",`${n.offset}%`),s.setAttribute("stop-color",n.color),s.setAttribute("stop-opacity","1"),i.appendChild(s)}return i}elementID(t,e,i){return`${t}-l${e}-o${i}`}elementByID(t){return this.wrapperElement.querySelector(`#${t}`)}},da=class{constructor(t,e,i){this.elem=t,this.prefix=e,this.validSuffixes=i}#e=null;clearValue(){this.#e&&this.elem.contentWrapper.classList.remove(this.#e),this.#e=null}setValue(t){if(!this.validSuffixes.includes(t))throw new Error(`Invalid suffix: ${t}`);let e=`${this.prefix}${t}`,i=this.#e!==e;return i&&(this.clearValue(),this.elem.contentWrapper.classList.add(e),this.#e=e),i}};A6=class{constructor(t){this.model=t,t.tempoScale.addFreshListener(e=>{this.tempoScale=e})}catchingUp=!1;pendingFrame=!1;tempoScale=1;scheduler=new Bn(this.animFrame.bind(this));start(){this.catchingUp||(this.lastTimestamp=performance.now()),this.catchingUp=!0,this.pendingFrame=!0,this.scheduler.requestAnimFrame()}stop(){this.catchingUp=!1,this.scheduler.cancelAnimFrame()}catchUpMs=500;lastTimestamp=0;animFrame(t){this.scheduler.requestAnimFrame();let e=this.tempoScale*(t-this.lastTimestamp)/this.catchUpMs;this.lastTimestamp=t,this.model.catchUpMove.set((async()=>{let i=await this.model.catchUpMove.get();if(i.move===null)return i;let r=i.amount+e;return r>=1?(this.pendingFrame=!0,this.stop(),this.model.timestampRequest.set("end"),{move:null,amount:0}):(this.pendingFrame=!1,{move:i.move,amount:r})})())}},T6=class{constructor(t,e){this.delegate=e,this.model=t,this.lastTimestampPromise=this.#e(),this.model.playingInfo.addFreshListener(this.onPlayingProp.bind(this)),this.catchUpHelper=new A6(this.model),this.model.catchUpMove.addFreshListener(this.onCatchUpMoveProp.bind(this))}playing=!1;direction=1;catchUpHelper;model;lastDatestamp=0;lastTimestampPromise;scheduler=new Bn(this.animFrame.bind(this));async onPlayingProp(t){t.playing!==this.playing&&(t.playing?this.play(t):this.pause())}async onCatchUpMoveProp(t){let e=t.move!==null;e!==this.catchUpHelper.catchingUp&&(e?this.catchUpHelper.start():this.catchUpHelper.stop()),this.scheduler.requestAnimFrame()}async#e(){return(await this.model.detailedTimelineInfo.get()).timestamp}jumpToStart(t){this.model.timestampRequest.set("start"),this.pause(),t?.flash&&this.delegate.flash()}jumpToEnd(t){this.model.timestampRequest.set("end"),this.pause(),t?.flash&&this.delegate.flash()}playPause(){this.playing?this.pause():this.play()}play(t){(async()=>{let e=t?.direction??1,i=await this.model.coarseTimelineInfo.get();(t?.autoSkipToOtherEndIfStartingAtBoundary??!0)&&(e===1&&i.atEnd&&(this.model.timestampRequest.set("start"),this.delegate.flash()),e===-1&&i.atStart&&(this.model.timestampRequest.set("end"),this.delegate.flash())),this.model.playingInfo.set({playing:!0,direction:e,untilBoundary:t?.untilBoundary??"entire-timeline",loop:t?.loop??!1}),this.playing=!0,this.lastDatestamp=performance.now(),this.lastTimestampPromise=this.#e(),this.scheduler.requestAnimFrame()})()}pause(){this.playing=!1,this.scheduler.cancelAnimFrame(),this.model.playingInfo.set({playing:!1,untilBoundary:"entire-timeline"})}#t=new la;async animFrame(t){this.playing&&this.scheduler.requestAnimFrame();let e=this.lastDatestamp,i=await this.#t.queue(Promise.all([this.model.playingInfo.get(),this.lastTimestampPromise,this.model.timeRange.get(),this.model.tempoScale.get(),this.model.currentMoveInfo.get()])),[r,n,s,o,a]=i;if(!r.playing){this.playing=!1;return}let l=a.earliestEnd;(a.currentMoves.length===0||r.untilBoundary==="entire-timeline")&&(l=s.end);let c=a.latestStart;(a.currentMoves.length===0||r.untilBoundary==="entire-timeline")&&(c=s.start);let f=(t-e)*this.direction*o;f=Math.max(f,1),f*=r.direction;let h=n+f,u=null;h>=l?r.loop?h=yh(h,s.start,s.end):(h===s.end?u="end":h=l,this.playing=!1,this.model.playingInfo.set({playing:!1})):h<=c&&(r.loop?h=yh(h,s.start,s.end):(h===s.start?u="start":h=c,this.playing=!1,this.model.playingInfo.set({playing:!1}))),this.lastDatestamp=t,this.lastTimestampPromise=Promise.resolve(h),this.model.timestampRequest.set(u??h)}},D6=class{constructor(t,e){this.model=t,this.animationController=new T6(t,e)}animationController;jumpToStart(t){this.animationController.jumpToStart(t)}jumpToEnd(t){this.animationController.jumpToEnd(t)}togglePlay(t){typeof t>"u"&&this.animationController.playPause(),t?this.animationController.play():this.animationController.pause()}async visitTwizzleLink(){let t=document.createElement("a");t.href=await this.model.twizzleLink(),t.target="_blank",t.click()}},L6={"bottom-row":!0,none:!0},N6=class extends ft{getDefaultValue(){return"auto"}},Eh=new mi;Eh.replaceSync(`
:host {
  width: 384px;
  height: 256px;
  display: grid;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
}

.wrapper > * {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.wrapper.back-view-side-by-side {
  grid-template-columns: 1fr 1fr;
}

.wrapper.back-view-top-right {
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr 3fr;
}

.wrapper.back-view-top-right > :nth-child(1) {
  grid-row: 1 / 3;
  grid-column: 1 / 3;
}

.wrapper.back-view-top-right > :nth-child(2) {
  grid-row: 1 / 2;
  grid-column: 2 / 3;
}
`);sS=new mi;sS.replaceSync(`
:host {
  width: 384px;
  height: 256px;
  display: grid;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
}

.svg-wrapper,
twisty-2d-svg,
svg {
  width: 100%;
  height: 100%;
  display: grid;
  min-height: 0;
}

svg {
  animation: fade-in 0.25s ease-in;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.hint-facelets-none .hint-facelet {
  display: none;
}
`);oS=class extends Mi{constructor(t,e,i,r,n){super(),this.model=t,this.kpuzzle=e,this.svgSource=i,this.options=r,this.puzzleLoader=n,this.addCSS(sS),this.resetSVG(),this.#t.addListener(this.model.puzzleID,s=>{n?.id!==s&&this.disconnect()}),this.#t.addListener(this.model.twistySceneModel.hintFacelet,s=>{this.setHintFacelet(s)}),this.#t.addListener(this.model.legacyPosition,this.onPositionChange.bind(this)),this.options?.experimentalStickeringMask&&this.experimentalSetStickeringMask(this.options.experimentalStickeringMask)}svgWrapper;scheduler=new Bn(this.render.bind(this));#e=null;#t=new $s;disconnect(){this.#t.disconnect()}onPositionChange(t){try{if(t.movesInProgress.length>0){let e=t.movesInProgress[0].move,i=e;t.movesInProgress[0].direction===-1&&(i=e.invert());let r=t.pattern.applyMove(i);this.svgWrapper?.draw(t.pattern,r,t.movesInProgress[0].fraction)}else this.svgWrapper?.draw(t.pattern),this.#e=t}catch(e){console.warn("Bad position (this doesn't necessarily mean something is wrong). Pre-emptively disconnecting:",this.puzzleLoader?.id,e),this.disconnect()}}scheduleRender(){this.scheduler.requestAnimFrame()}experimentalSetStickeringMask(t){this.resetSVG(t)}resetSVG(t){this.svgWrapper&&this.removeElement(this.svgWrapper.wrapperElement),this.kpuzzle&&(this.svgWrapper=new C6(this.kpuzzle,this.svgSource,t),this.addElement(this.svgWrapper.wrapperElement),this.#e&&this.onPositionChange(this.#e))}hintFaceletsClassListManager=new da(this,"hint-facelets-",Object.keys(Kl));setHintFacelet(t){this.hintFaceletsClassListManager.setValue(t==="auto"?"floating":t)}render(){}};Yt.define("twisty-2d-puzzle",oS);I6=class{constructor(t,e,i,r){this.model=t,this.schedulable=e,this.puzzleLoader=i,this.effectiveVisualization=r,this.twisty2DPuzzle(),this.#e.addListener(this.model.twistySceneModel.stickeringMask,async n=>{(await this.twisty2DPuzzle()).experimentalSetStickeringMask(n)})}#e=new $s;disconnect(){this.#e.disconnect()}scheduleRender(){}#t=null;async twisty2DPuzzle(){return this.#t??=(async()=>{let t=this.effectiveVisualization==="experimental-2D-LL-face"?this.puzzleLoader.llFaceSVG():this.effectiveVisualization==="experimental-2D-LL"?this.puzzleLoader.llSVG():this.puzzleLoader.svg();return new oS(this.model,await this.puzzleLoader.kpuzzle(),await t,{},this.puzzleLoader)})()}},aS=class extends Mi{constructor(t,e){super(),this.model=t,this.effectiveVisualization=e}#e=new $s;disconnect(){this.#e.disconnect()}async connectedCallback(){this.addCSS(Eh),this.model&&this.#e.addListener(this.model.twistyPlayerModel.puzzleLoader,this.onPuzzleLoader.bind(this))}#t;async scene(){return this.#t??=(async()=>new(await wi()).ThreeScene)()}scheduleRender(){this.#i?.scheduleRender()}#i;currentTwisty2DPuzzleWrapper(){return this.#i}async setCurrentTwisty2DPuzzleWrapper(t){let e=this.#i;this.#i=t,e?.disconnect();let i=t.twisty2DPuzzle();this.contentWrapper.textContent="",this.addElement(await i)}async onPuzzleLoader(t){this.#i?.disconnect();let e=new I6(this.model.twistyPlayerModel,this,t,this.effectiveVisualization);this.setCurrentTwisty2DPuzzleWrapper(e)}};Yt.define("twisty-2d-scene-wrapper",aS);lS=class{#e;reject;promise;constructor(){this.promise=new Promise((t,e)=>{this.#e=t,this.reject=e})}handleNewValue(t){this.#e(t)}},cS=class extends EventTarget{constructor(t,e,i,r){super(),this.model=t,this.schedulable=e,this.puzzleLoader=i,this.visualizationStrategy=r,this.twisty3DPuzzle(),this.#e.addListener(this.model.puzzleLoader,n=>{this.puzzleLoader.id!==n.id&&this.disconnect()}),this.#e.addListener(this.model.legacyPosition,async n=>{try{(await this.twisty3DPuzzle()).onPositionChange(n),this.scheduleRender()}catch{this.disconnect()}}),this.#e.addListener(this.model.twistySceneModel.hintFacelet,async n=>{(await this.twisty3DPuzzle()).experimentalUpdateOptions({hintFacelets:n==="auto"?"floating":n}),this.scheduleRender()}),this.#e.addListener(this.model.twistySceneModel.foundationDisplay,async n=>{(await this.twisty3DPuzzle()).experimentalUpdateOptions({showFoundation:n!=="none"}),this.scheduleRender()}),this.#e.addListener(this.model.twistySceneModel.stickeringMask,async n=>{(await this.twisty3DPuzzle()).setStickeringMask(n),this.scheduleRender()}),this.#e.addListener(this.model.twistySceneModel.faceletScale,async n=>{(await this.twisty3DPuzzle()).experimentalUpdateOptions({faceletScale:n}),this.scheduleRender()}),this.#e.addListener(this.model.twistySceneModel.hintFaceletsElevation,async n=>{(await this.twisty3DPuzzle()).experimentalUpdateOptions({hintFaceletsElevation:n}),this.scheduleRender()}),this.#e.addMultiListener3([this.model.twistySceneModel.stickeringMask,this.model.twistySceneModel.foundationStickerSprite,this.model.twistySceneModel.hintStickerSprite],async n=>{"experimentalUpdateTexture"in await this.twisty3DPuzzle()&&((await this.twisty3DPuzzle()).experimentalUpdateTexture(n[0].specialBehaviour==="picture",n[1],n[2]),this.scheduleRender())})}#e=new $s;disconnect(){this.#e.disconnect()}scheduleRender(){this.schedulable.scheduleRender(),this.dispatchEvent(new CustomEvent("render-scheduled"))}#t=null;async twisty3DPuzzle(){return this.#t??=(async()=>{let t=wi();if(this.puzzleLoader.id==="3x3x3"&&this.visualizationStrategy==="Cube3D"){let[e,i,r,n,s,o]=await Promise.all([this.model.twistySceneModel.foundationStickerSprite.get(),this.model.twistySceneModel.hintStickerSprite.get(),this.model.twistySceneModel.stickeringMask.get(),this.model.twistySceneModel.initialHintFaceletsAnimation.get(),this.model.twistySceneModel.faceletScale.get(),this.model.twistySceneModel.hintFaceletsElevation.get()]);return(await t).cube3DShim(()=>this.schedulable.scheduleRender(),{foundationSprite:e,hintSprite:i,experimentalStickeringMask:r,initialHintFaceletsAnimation:n,faceletScale:s,hintFaceletsElevation:o})}else{let[e,i,r,n]=await Promise.all([this.model.twistySceneModel.hintFacelet.get(),this.model.twistySceneModel.foundationStickerSprite.get(),this.model.twistySceneModel.hintStickerSprite.get(),this.model.twistySceneModel.faceletScale.get()]),s=(await t).pg3dShim(()=>this.schedulable.scheduleRender(),this.puzzleLoader,e==="auto"?"floating":e,n,this.puzzleLoader.id==="kilominx");return s.then(o=>o.experimentalUpdateTexture(!0,i??void 0,r??void 0)),s}})()}async raycastMove(t,e){let i=await this.twisty3DPuzzle();if(!("experimentalGetControlTargets"in i)){console.info("not PG3D! skipping raycast");return}let r=i.experimentalGetControlTargets(),[n,s]=await Promise.all([t,this.model.twistySceneModel.movePressCancelOptions.get()]),o=n.intersectObjects(r);if(o.length>0){let a=i.getClosestMoveToAxis(o[0].point,e);a?this.model.experimentalAddMove(a.move,{cancel:s}):console.info("Skipping move!")}}},Sh=class extends Mi{constructor(t){super(),this.model=t}#e=new da(this,"back-view-",["auto","none","side-by-side","top-right"]);#t=new $s;disconnect(){this.#t.disconnect()}async connectedCallback(){this.addCSS(Eh);let t=new Ql(this.model,this);this.addVantage(t),this.model&&(this.#t.addMultiListener([this.model.puzzleLoader,this.model.visualizationStrategy],this.onPuzzle.bind(this)),this.#t.addListener(this.model.backView,this.setBackView.bind(this))),this.scheduleRender()}#i=null;setBackView(t){let e=["side-by-side","top-right"].includes(t),i=this.#i!==null;this.#e.setValue(t),e?i||(this.#i=new Ql(this.model,this,{backView:!0}),this.addVantage(this.#i),this.scheduleRender()):this.#i&&(this.removeVantage(this.#i),this.#i=null)}async onPress(t){let e=this.#n;if(!e){console.info("no wrapper; skipping scene wrapper press!");return}let i=(async()=>{let[r,{ThreeRaycaster:n,ThreeVector2:s}]=await Promise.all([t.detail.cameraPromise,(async()=>{let{ThreeRaycaster:l,ThreeVector2:c}=await wi();return{ThreeRaycaster:l,ThreeVector2:c}})()]),o=new n,a=new s(t.detail.pressInfo.normalizedX,t.detail.pressInfo.normalizedY);return o.setFromCamera(a,r),o})();e.raycastMove(i,{invert:!t.detail.pressInfo.rightClick,depth:t.detail.pressInfo.keys.ctrlOrMetaKey?"rotation":t.detail.pressInfo.keys.shiftKey?"secondSlice":"none"})}#r;async scene(){return this.#r??=(async()=>new(await wi()).ThreeScene)()}#s=new Set;addVantage(t){t.addEventListener("press",this.onPress.bind(this)),this.#s.add(t),this.contentWrapper.appendChild(t)}removeVantage(t){this.#s.delete(t),t.remove(),t.disconnect(),this.#n?.disconnect()}experimentalVantages(){return this.#s.values()}scheduleRender(){for(let t of this.#s)t.scheduleRender()}#n=null;async setCurrentTwisty3DPuzzleWrapper(t,e){let i=this.#n;try{this.#n=e,i?.disconnect(),t.add(await e.twisty3DPuzzle())}finally{i&&t.remove(await i.twisty3DPuzzle())}this.#o.handleNewValue(e)}#o=new lS;async experimentalTwisty3DPuzzleWrapper(){return this.#n||this.#o.promise}#a=new la;async onPuzzle(t){if(t[1]==="2D")return;this.#n?.disconnect();let[e,i]=await this.#a.queue(Promise.all([this.scene(),new cS(this.model,this,t[0],t[1])]));this.setCurrentTwisty3DPuzzleWrapper(e,i)}};Yt.define("twisty-3d-scene-wrapper",Sh);dn=typeof document>"u"?null:document,P6=dn?.fullscreenEnabled||!!dn?.webkitFullscreenEnabled;F6=["skip-to-start","skip-to-end","step-forward","step-backward","pause","play","enter-fullscreen","exit-fullscreen","twizzle-tw"],O6=class extends mt{derive(t){return{fullscreen:{enabled:P6,icon:document.fullscreenElement===null?"enter-fullscreen":"exit-fullscreen",title:"Enter fullscreen"},"jump-to-start":{enabled:!t.coarseTimelineInfo.atStart,icon:"skip-to-start",title:"Restart"},"play-step-backwards":{enabled:!t.coarseTimelineInfo.atStart,icon:"step-backward",title:"Step backward"},"play-pause":{enabled:!(t.coarseTimelineInfo.atStart&&t.coarseTimelineInfo.atEnd),icon:t.coarseTimelineInfo.playing?"pause":"play",title:t.coarseTimelineInfo.playing?"Pause":"Play"},"play-step":{enabled:!t.coarseTimelineInfo.atEnd,icon:"step-forward",title:"Step forward"},"jump-to-end":{enabled:!t.coarseTimelineInfo.atEnd,icon:"skip-to-end",title:"Skip to End"},"twizzle-link":{enabled:!0,icon:"twizzle-tw",title:"View at Twizzle",hidden:t.viewerLink==="none"}}}},fS=new mi;fS.replaceSync(`
:host {
  width: 384px;
  height: 24px;
  display: grid;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

.wrapper {
  grid-auto-flow: column;
}

.viewer-link-none .twizzle-link-button {
  display: none;
}

.wrapper twisty-button,
.wrapper twisty-control-button {
  width: inherit;
  height: inherit;
}
`);hS=new mi;hS.replaceSync(`
:host:not([hidden]) {
  display: grid;
}

:host {
  width: 48px;
  height: 24px;
}

.wrapper {
  width: 100%;
  height: 100%;
}

button {
  width: 100%;
  height: 100%;
  border: none;
  
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  background-color: rgba(196, 196, 196, 0.75);
}

button:enabled {
  background-color: rgba(196, 196, 196, 0.75)
}

.dark-mode button:enabled {
  background-color: #88888888;
}

button:disabled {
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0.25;
  pointer-events: none;
}

.dark-mode button:disabled {
  background-color: #ffffff44;
}

button:enabled:hover {
  background-color: rgba(255, 255, 255, 0.75);
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.25);
  cursor: pointer;
}

/* TODO: fullscreen icons have too much padding?? */
.svg-skip-to-start button,
button.svg-skip-to-start {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNjQzIDEwMzdxMTktMTkgMzItMTN0MTMgMzJ2MTQ3MnEwIDI2LTEzIDMydC0zMi0xM2wtNzEwLTcxMHEtOS05LTEzLTE5djcxMHEwIDI2LTEzIDMydC0zMi0xM2wtNzEwLTcxMHEtOS05LTEzLTE5djY3OHEwIDI2LTE5IDQ1dC00NSAxOUg5NjBxLTI2IDAtNDUtMTl0LTE5LTQ1VjEwODhxMC0yNiAxOS00NXQ0NS0xOWgxMjhxMjYgMCA0NSAxOXQxOSA0NXY2NzhxNC0xMSAxMy0xOWw3MTAtNzEwcTE5LTE5IDMyLTEzdDEzIDMydjcxMHE0LTExIDEzLTE5eiIvPjwvc3ZnPg==");
}

.svg-skip-to-end button,
button.svg-skip-to-end {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik05NDEgMjU0N3EtMTkgMTktMzIgMTN0LTEzLTMyVjEwNTZxMC0yNiAxMy0zMnQzMiAxM2w3MTAgNzEwcTggOCAxMyAxOXYtNzEwcTAtMjYgMTMtMzJ0MzIgMTNsNzEwIDcxMHE4IDggMTMgMTl2LTY3OHEwLTI2IDE5LTQ1dDQ1LTE5aDEyOHEyNiAwIDQ1IDE5dDE5IDQ1djE0MDhxMCAyNi0xOSA0NXQtNDUgMTloLTEyOHEtMjYgMC00NS0xOXQtMTktNDV2LTY3OHEtNSAxMC0xMyAxOWwtNzEwIDcxMHEtMTkgMTktMzIgMTN0LTEzLTMydi03MTBxLTUgMTAtMTMgMTl6Ii8+PC9zdmc+");
}

.svg-step-forward button,
button.svg-step-forward {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNjg4IDE1NjhxMCAyNi0xOSA0NWwtNTEyIDUxMnEtMTkgMTktNDUgMTl0LTQ1LTE5cS0xOS0xOS0xOS00NXYtMjU2aC0yMjRxLTk4IDAtMTc1LjUgNnQtMTU0IDIxLjVxLTc2LjUgMTUuNS0xMzMgNDIuNXQtMTA1LjUgNjkuNXEtNDkgNDIuNS04MCAxMDF0LTQ4LjUgMTM4LjVxLTE3LjUgODAtMTcuNSAxODEgMCA1NSA1IDEyMyAwIDYgMi41IDIzLjV0Mi41IDI2LjVxMCAxNS04LjUgMjV0LTIzLjUgMTBxLTE2IDAtMjgtMTctNy05LTEzLTIydC0xMy41LTMwcS03LjUtMTctMTAuNS0yNC0xMjctMjg1LTEyNy00NTEgMC0xOTkgNTMtMzMzIDE2Mi00MDMgODc1LTQwM2gyMjR2LTI1NnEwLTI2IDE5LTQ1dDQ1LTE5cTI2IDAgNDUgMTlsNTEyIDUxMnExOSAxOSAxOSA0NXoiLz48L3N2Zz4=");
}

.svg-step-backward button,
button.svg-step-backward {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNjg4IDIwNDhxMCAxNjYtMTI3IDQ1MS0zIDctMTAuNSAyNHQtMTMuNSAzMHEtNiAxMy0xMyAyMi0xMiAxNy0yOCAxNy0xNSAwLTIzLjUtMTB0LTguNS0yNXEwLTkgMi41LTI2LjV0Mi41LTIzLjVxNS02OCA1LTEyMyAwLTEwMS0xNy41LTE4MXQtNDguNS0xMzguNXEtMzEtNTguNS04MC0xMDF0LTEwNS41LTY5LjVxLTU2LjUtMjctMTMzLTQyLjV0LTE1NC0yMS41cS03Ny41LTYtMTc1LjUtNmgtMjI0djI1NnEwIDI2LTE5IDQ1dC00NSAxOXEtMjYgMC00NS0xOWwtNTEyLTUxMnEtMTktMTktMTktNDV0MTktNDVsNTEyLTUxMnExOS0xOSA0NS0xOXQ0NSAxOXExOSAxOSAxOSA0NXYyNTZoMjI0cTcxMyAwIDg3NSA0MDMgNTMgMTM0IDUzIDMzM3oiLz48L3N2Zz4=");
}

.svg-pause button,
button.svg-pause {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNTYwIDEwODh2MTQwOHEwIDI2LTE5IDQ1dC00NSAxOWgtNTEycS0yNiAwLTQ1LTE5dC0xOS00NVYxMDg4cTAtMjYgMTktNDV0NDUtMTloNTEycTI2IDAgNDUgMTl0MTkgNDV6bS04OTYgMHYxNDA4cTAgMjYtMTkgNDV0LTQ1IDE5aC01MTJxLTI2IDAtNDUtMTl0LTE5LTQ1VjEwODhxMC0yNiAxOS00NXQ0NS0xOWg1MTJxMjYgMCA0NSAxOXQxOSA0NXoiLz48L3N2Zz4=");
}

.svg-play button,
button.svg-play {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNDcyLjUgMTgyM2wtMTMyOCA3MzhxLTIzIDEzLTM5LjUgM3QtMTYuNS0zNlYxMDU2cTAtMjYgMTYuNS0zNnQzOS41IDNsMTMyOCA3MzhxMjMgMTMgMjMgMzF0LTIzIDMxeiIvPjwvc3ZnPg==");
}

.svg-enter-fullscreen button,
button.svg-enter-fullscreen {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgd2lkdGg9IjI4Ij48cGF0aCBkPSJNMiAyaDI0djI0SDJ6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTkgMTZIN3Y1aDV2LTJIOXYtM3ptLTItNGgyVjloM1Y3SDd2NXptMTIgN2gtM3YyaDV2LTVoLTJ2M3pNMTYgN3YyaDN2M2gyVjdoLTV6Ii8+PC9zdmc+");
}

.svg-exit-fullscreen button,
button.svg-exit-fullscreen {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgd2lkdGg9IjI4Ij48cGF0aCBkPSJNMiAyaDI0djI0SDJ6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTcgMThoM3YzaDJ2LTVIN3Yyem0zLThIN3YyaDVWN2gtMnYzem02IDExaDJ2LTNoM3YtMmgtNXY1em0yLTExVjdoLTJ2NWg1di0yaC0zeiIvPjwvc3ZnPg==");
}

.svg-twizzle-tw button,
button.svg-twizzle-tw {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODY0IiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzk3LjU4MSAxNTEuMTh2NTcuMDg0aC04OS43MDN2MjQwLjM1MmgtNjYuOTU1VjIwOC4yNjRIMTUxLjIydi01Ny4wODNoMjQ2LjM2MXptNTQuMzEgNzEuNjc3bDcuNTEyIDMzLjY5MmMyLjcxOCAxMi4xNiA1LjU4IDI0LjY4IDguNTg0IDM3LjU1NWEyMTgwLjc3NSAyMTgwLjc3NSAwIDAwOS40NDIgMzguODQzIDEyNjYuMyAxMjY2LjMgMCAwMDEwLjA4NiAzNy41NTVjMy43Mi0xMi41OSA3LjM2OC0yNS40NjYgMTAuOTQ1LTM4LjYyOCAzLjU3Ni0xMy4xNjIgNy4wMS0yNi4xMSAxMC4zLTM4Ljg0M2w1Ljc2OS0yMi40NTZjMS4yNDgtNC44ODcgMi40NzItOS43MDUgMy42NzQtMTQuNDU1IDMuMDA0LTExLjg3NSA1LjY1MS0yMi45NjIgNy45NC0zMy4yNjNoNDYuMzU0bDIuMzg0IDEwLjU2M2EyMDAwLjc3IDIwMDAuNzcgMCAwMDMuOTM1IDE2LjgyOGw2LjcxMSAyNy43MWMxLjIxMyA0Ljk1NiAyLjQ1IDkuOTggMy43MDkgMTUuMDczYTMxMTkuNzc3IDMxMTkuNzc3IDAgMDA5Ljg3MSAzOC44NDMgMTI0OS4yMjcgMTI0OS4yMjcgMCAwMDEwLjczIDM4LjYyOCAxOTA3LjYwNSAxOTA3LjYwNSAwIDAwMTAuMzAxLTM3LjU1NSAxMzk3Ljk0IDEzOTcuOTQgMCAwMDkuNjU3LTM4Ljg0M2w0LjQtMTkuMDQ2Yy43MTUtMy4xMyAxLjQyMS02LjIzNiAyLjExOC05LjMyMWw5LjU3Ny00Mi44OGg2Ni41MjZhMjk4OC43MTggMjk4OC43MTggMCAwMS0xOS41MjkgNjYuMzExbC01LjcyOCAxOC40ODJhMzIzNy40NiAzMjM3LjQ2IDAgMDEtMTQuMDE1IDQzLjc1MmMtNi40MzggMTkuNi0xMi43MzMgMzcuNjk4LTE4Ljg4NSA1NC4yOTRsLTMuMzA2IDguODI1Yy00Ljg4NCAxMi44OTgtOS40MzMgMjQuMjYzLTEzLjY0NyAzNC4wOTVoLTQ5Ljc4N2E4NDE3LjI4OSA4NDE3LjI4OSAwIDAxLTIxLjAzMS02NC44MDkgMTI4OC42ODYgMTI4OC42ODYgMCAwMS0xOC44ODUtNjQuODEgMTk3Mi40NDQgMTk3Mi40NDQgMCAwMS0xOC4yNCA2NC44MSAyNTc5LjQxMiAyNTc5LjQxMiAwIDAxLTIwLjM4OCA2NC44MWgtNDkuNzg3Yy00LjY4Mi0xMC45MjYtOS43Mi0yMy43NDMtMTUuMTEtMzguNDUxbC0xLjYyOS00LjQ3Yy01LjI1OC0xNC41MjEtMTAuNjgtMzAuMTkyLTE2LjI2Ni00Ny4wMTRsLTIuNDA0LTcuMjhjLTYuNDM4LTE5LjYtMTMuMDItNDAuMzQ0LTE5Ljc0My02Mi4yMzRhMjk4OC43MDcgMjk4OC43MDcgMCAwMS0xOS41MjktNjYuMzExaDY3LjM4NXoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvc3ZnPg==");
}
`);V3={fullscreen:!0,"jump-to-start":!0,"play-step-backwards":!0,"play-pause":!0,"play-step":!0,"jump-to-end":!0,"twizzle-link":!0},dS=class extends Mi{constructor(t,e,i){super(),this.model=t,this.controller=e,this.defaultFullscreenElement=i}buttons=null;connectedCallback(){this.addCSS(fS);let t={};for(let e in V3){let i=new uS;t[e]=i,i.htmlButton.addEventListener("click",()=>this.#e(e)),this.addElement(i)}this.buttons=t,this.model?.buttonAppearance.addFreshListener(this.update.bind(this)),this.model?.twistySceneModel.colorScheme.addFreshListener(this.updateColorScheme.bind(this))}#e(t){switch(t){case"fullscreen":{this.onFullscreenButton();break}case"jump-to-start":{this.controller?.jumpToStart({flash:!0});break}case"play-step-backwards":{this.controller?.animationController.play({direction:-1,untilBoundary:"move"});break}case"play-pause":{this.controller?.togglePlay();break}case"play-step":{this.controller?.animationController.play({direction:1,untilBoundary:"move"});break}case"jump-to-end":{this.controller?.jumpToEnd({flash:!0});break}case"twizzle-link":{this.controller?.visitTwizzleLink();break}default:throw new Error("Missing command")}}async onFullscreenButton(){if(!this.defaultFullscreenElement)throw new Error("Attempted to go fullscreen without an element.");if(G3()===this.defaultFullscreenElement)k6();else{this.buttons?.fullscreen.setIcon("exit-fullscreen"),U6(await this.model?.twistySceneModel.fullscreenElement.get()??this.defaultFullscreenElement);let t=()=>{G3()!==this.defaultFullscreenElement&&(this.buttons?.fullscreen.setIcon("enter-fullscreen"),globalThis.removeEventListener("fullscreenchange",t))};globalThis.addEventListener("fullscreenchange",t)}}async update(t){for(let e in V3){let i=this.buttons[e],r=t[e];i.htmlButton.disabled=!r.enabled,i.htmlButton.title=r.title,i.setIcon(r.icon),i.hidden=!!r.hidden}}updateColorScheme(t){for(let e of Object.values(this.buttons??{}))e.updateColorScheme(t)}};Yt.define("twisty-buttons",dS);uS=class extends Mi{htmlButton=document.createElement("button");updateColorScheme(t){this.contentWrapper.classList.toggle("dark-mode",t==="dark")}connectedCallback(){this.addCSS(hS),this.addElement(this.htmlButton)}#e=new da(this,"svg-",F6);setIcon(t){this.#e.setValue(t)}};Yt.define("twisty-button",uS);pS=new mi;pS.replaceSync(`
:host {
  width: 384px;
  height: 16px;
  display: grid;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  background: rgba(196, 196, 196, 0.75);
}

input:not(:disabled) {
  cursor: ew-resize;
}

.wrapper.dark-mode {
  background: #666666;
}
`);z6=!1,nc=!1;dn?.addEventListener("mousedown",t=>{t.which&&(nc=!0)},!0);dn?.addEventListener("mouseup",t=>{t.which&&(nc=!1)},!0);vh=0,ic=0;dn?.addEventListener("mousedown",()=>{ic++},!1);dn?.addEventListener("mousemove",mS,!1);dn?.addEventListener("mouseenter",mS,!1);H3=0,W3=0,dh=!1,uh=0,gS=class extends Mi{constructor(t,e){super(),this.model=t,this.controller=e}async onDetailedTimelineInfo(t){let e=await this.inputElem();e.min=t.timeRange.start.toString(),e.max=t.timeRange.end.toString(),e.disabled=e.min===e.max,e.value=t.timestamp.toString()}async connectedCallback(){this.addCSS(pS),this.addElement(await this.inputElem()),this.model?.twistySceneModel.colorScheme.addFreshListener(this.updateColorScheme.bind(this))}updateColorScheme(t){this.contentWrapper.classList.toggle("dark-mode",t==="dark")}#e=null;async inputElem(){return this.#e??=(async()=>{let t=document.createElement("input");return t.type="range",t.disabled=!0,this.model?.detailedTimelineInfo.addFreshListener(this.onDetailedTimelineInfo.bind(this)),t.addEventListener("input",this.onInput.bind(this)),t.addEventListener("keydown",this.onKeypress.bind(this)),t})()}async onInput(t){if(dh)return;let e=await this.inputElem();await this.slowDown(t,e);let i=parseInt(e.value,10);this.model?.playingInfo.set({playing:!1}),this.model?.timestampRequest.set(i)}onKeypress(t){switch(t.key){case"ArrowLeft":case"ArrowRight":{this.controller?.animationController.play({direction:t.key==="ArrowLeft"?-1:1,untilBoundary:"move"}),t.preventDefault();break}case" ":{this.controller?.togglePlay(),t.preventDefault();break}}}async slowDown(t,e){if(z6&&nc){let i=e.getBoundingClientRect(),r=i.top+i.height/2;console.log(r,t,vh,nc);let n=Math.abs(r-vh),s=1;n>64&&(s=Math.max(2**(-(n-64)/64),1/32));let o=parseInt(e.value,10);if(console.log("cl",uh,ic,o),uh===ic){let a=(o-W3)*s;console.log("delta",a,n),dh=!0;let l=o;l=H3+a*s+(o-H3)*Math.min(1,(1/2)**(n*n/64)),e.value=l.toString(),console.log(s),dh=!1,this.contentWrapper.style.opacity=s.toString()}else uh=ic;W3=o}}};Yt.define("twisty-scrubber",gS);B6=null;vS=new mi;vS.replaceSync(`
:host {
  width: 384px;
  height: 256px;
  display: grid;

  -webkit-user-select: none;
  user-select: none;
}

.wrapper {
  display: grid;
  overflow: hidden;
  contain: size;
  grid-template-rows: 7fr minmax(1.5em, 0.5fr) minmax(2em, 1fr);
}

.wrapper > * {
  width: inherit;
  height: inherit;
  overflow: hidden;
}

.wrapper.controls-none {
  grid-template-rows: 7fr;
}

.wrapper.controls-none twisty-scrubber,
.wrapper.controls-none twisty-control-button-panel ,
.wrapper.controls-none twisty-scrubber,
.wrapper.controls-none twisty-buttons {
  display: none;
}

twisty-scrubber {
  background: rgba(196, 196, 196, 0.5);
}

.wrapper.checkered,
.wrapper.checkered-transparent {
  background-color: #EAEAEA;
  background-image: linear-gradient(45deg, #DDD 25%, transparent 25%, transparent 75%, #DDD 75%, #DDD),
    linear-gradient(45deg, #DDD 25%, transparent 25%, transparent 75%, #DDD 75%, #DDD);
  background-size: 32px 32px;
  background-position: 0 0, 16px 16px;
}

.wrapper.checkered-transparent {
  background-color: #F4F4F4;
  background-image: linear-gradient(45deg, #DDDDDD88 25%, transparent 25%, transparent 75%, #DDDDDD88 75%, #DDDDDD88),
    linear-gradient(45deg, #DDDDDD88 25%, transparent 25%, transparent 75%, #DDDDDD88 75%, #DDDDDD88);
}

.wrapper.dark-mode {
  background-color: #444;
  background-image: linear-gradient(45deg, #DDDDDD0b 25%, transparent 25%, transparent 75%, #DDDDDD0b 75%, #DDDDDD0b),
    linear-gradient(45deg, #DDDDDD0b 25%, transparent 25%, transparent 75%, #DDDDDD0b 75%, #DDDDDD0b);
}

.visualization-wrapper > * {
  width: 100%;
  height: 100%;
}

.error-elem {
  width: 100%;
  height: 100%;
  display: none;
  place-content: center;
  font-family: sans-serif;
  box-shadow: inset 0 0 2em rgb(255, 0, 0);
  color: red;
  text-shadow: 0 0 0.2em white;
  background: rgba(255, 255, 255, 0.25);
}

.wrapper.error .visualization-wrapper {
  display: none;
}

.wrapper.error .error-elem {
  display: grid;
}
`);q3=class extends ft{getDefaultValue(){return null}},xh=class extends Ur{getDefaultValue(){return null}derive(t){return typeof t=="string"?new URL(t,location.href):t}},ha=class xS{warnings;errors;constructor(e){this.warnings=Object.freeze(e?.warnings??[]),this.errors=Object.freeze(e?.errors??[]),Object.freeze(this)}add(e){return new xS({warnings:this.warnings.concat(e?.warnings??[]),errors:this.errors.concat(e?.errors??[])})}log(){this.errors.length>0?console.error(`\u{1F6A8} ${this.errors[0]}`):this.warnings.length>0?console.warn(`\u26A0\uFE0F ${this.warnings[0]}`):console.info("\u{1F60E} No issues!")}};j3=class extends Ur{getDefaultValue(){return{alg:new he,issues:new ha}}canReuseValue(t,e){return G6(t,e)}async derive(t){return typeof t=="string"?ES(t):{alg:t,issues:new ha}}},V6=class extends mt{derive(t){return t.kpuzzle.algToTransformation(t.setupAlg.alg)}},H6=class extends mt{derive(t){if(t.setupTransformation)return t.setupTransformation;switch(t.setupAnchor){case"start":return t.setupAlgTransformation;case"end":{let i=t.indexer.transformationAtIndex(t.indexer.numAnimatedLeaves()).invert();return t.setupAlgTransformation.applyTransformation(i)}default:throw new Error("Unimplemented!")}}},W6=class extends ft{getDefaultValue(){return null}},X6=class extends ft{getDefaultValue(){return{move:null,amount:0}}canReuseValue(t,e){return t.move===e.move&&t.amount===e.amount}},q6=class extends mt{derive(t){return{patternIndex:t.currentMoveInfo.patternIndex,movesFinishing:t.currentMoveInfo.movesFinishing.map(e=>e.move),movesFinished:t.currentMoveInfo.movesFinished.map(e=>e.move)}}canReuseValue(t,e){return t.patternIndex===e.patternIndex&&B3(t.movesFinishing,e.movesFinishing,(i,r)=>i.isIdentical(r))&&B3(t.movesFinished,e.movesFinished,(i,r)=>i.isIdentical(r))}},j6=class extends mt{derive(t){function e(i){return t.detailedTimelineInfo.atEnd&&t.catchUpMove.move!==null&&i.currentMoves.push({move:t.catchUpMove.move,direction:-1,fraction:1-t.catchUpMove.amount,startTimestamp:-1,endTimestamp:-1}),i}if(t.indexer.currentMoveInfo)return e(t.indexer.currentMoveInfo(t.detailedTimelineInfo.timestamp));{let i=t.indexer.timestampToIndex(t.detailedTimelineInfo.timestamp),r={patternIndex:i,currentMoves:[],movesFinishing:[],movesFinished:[],movesStarting:[],latestStart:-1/0,earliestEnd:1/0};if(t.indexer.numAnimatedLeaves()>0){let n=t.indexer.getAnimLeaf(i)?.as(b);if(!n)return e(r);let s=t.indexer.indexToMoveStartTimestamp(i),o=t.indexer.moveDuration(i),a=o?(t.detailedTimelineInfo.timestamp-s)/o:0,l=s+o,c={move:n,direction:1,fraction:a,startTimestamp:s,endTimestamp:l};a===0?r.movesStarting.push(c):a===1?r.movesFinishing.push(c):(r.currentMoves.push(c),r.latestStart=Math.max(r.latestStart,s),r.earliestEnd=Math.min(r.earliestEnd,l))}return e(r)}}},Y6=class extends mt{derive(t){let e=t.indexer.transformationAtIndex(t.currentLeavesSimplified.patternIndex);e=t.anchoredStart.applyTransformation(e);for(let i of t.currentLeavesSimplified.movesFinishing)e=e.applyMove(i);for(let i of t.currentLeavesSimplified.movesFinished)e=e.applyMove(i);return e.toKPattern()}},Y3={u:"y",l:"x",f:"z",r:"x",b:"z",d:"y",m:"x",e:"y",s:"z",x:"x",y:"y",z:"z"};Z6=class extends vr{traverseAlg(t){let e=[];for(let i of t.childAlgNodes())e.push(this.traverseAlgNode(i));return Array.prototype.concat(...e)}traverseGroupingOnce(t){if(t.experimentalIsEmpty())return[];let e=[];for(let n of t.childAlgNodes()){if(!(n.is(b)||n.is(pn)||n.is(Sr)))return this.traverseAlg(t);let s=n.as(b);s&&e.push(s)}let i=Vn(e[0].amount);for(let n=0;n<e.length-1;n++){for(let s=1;s<e.length;s++)if(!K6(e[n],e[s]))return this.traverseAlg(t);i=Math.max(i,Vn(e[n].amount))}let r=e.map(n=>({animLeafAlgNode:n,msUntilNext:0,duration:i}));return r[r.length-1].msUntilNext=i,r}traverseGrouping(t){let e=[],i=t.amount>0?t.alg:t.alg.invert();for(let r=0;r<Math.abs(t.amount);r++)e.push(this.traverseGroupingOnce(i));return Array.prototype.concat(...e)}traverseMove(t){let e=Vn(t.amount);return[{animLeafAlgNode:t,msUntilNext:e,duration:e}]}traverseCommutator(t){let e=[],i=[t.A,t.B,t.A.invert(),t.B.invert()];for(let r of i)e.push(this.traverseGroupingOnce(r));return Array.prototype.concat(...e)}traverseConjugate(t){let e=[],i=[t.A,t.B,t.A.invert()];for(let r of i)e.push(this.traverseGroupingOnce(r));return Array.prototype.concat(...e)}traversePause(t){if(t.experimentalNISSGrouping)return[];let e=Vn(1);return[{animLeafAlgNode:t,msUntilNext:e,duration:e}]}traverseNewline(t){return[]}traverseLineComment(t){return[]}},Q6=Ot(Z6);ph=class{constructor(t,e,i){this.kpuzzle=t,this.animLeaves=i?.animationTimelineLeaves??$6(e)}animLeaves;getAnimLeaf(t){return this.animLeaves[Math.min(t,this.animLeaves.length-1)]?.animLeaf??null}getAnimationTimelineLeaf(t){return this.animLeaves[Math.min(t,this.animLeaves.length-1)]}indexToMoveStartTimestamp(t){let e=0;return this.animLeaves.length>0&&(e=this.animLeaves[Math.min(t,this.animLeaves.length-1)].start),e}timestampToIndex(t){let e=0;for(e=0;e<this.animLeaves.length;e++)if(this.animLeaves[e].start>=t)return Math.max(0,e-1);return Math.max(0,e-1)}timestampToPosition(t,e){let i=this.currentMoveInfo(t),r=e??this.kpuzzle.identityTransformation().toKPattern();for(let n of this.animLeaves.slice(0,i.patternIndex)){let s=n.animLeaf.as(b);s!==null&&(r=r.applyMove(s))}return{pattern:r,movesInProgress:i.currentMoves}}currentMoveInfo(t){let e=1/0;for(let c of this.animLeaves)if(c.start<=t&&c.end>=t)e=Math.min(e,c.start);else if(c.start>t)break;let i=[],r=[],n=[],s=[],o=-1/0,a=1/0,l=0;for(let c of this.animLeaves)if(c.end<=e){if(!isFinite(e)&&c.start>t)break;l++}else{if(c.start>t)break;{let f=c.animLeaf.as(b);if(f!==null){let h=(t-c.start)/(c.end-c.start),u=!1;h>1&&(h=1,u=!0);let p={move:f,direction:1,fraction:h,startTimestamp:c.start,endTimestamp:c.end};switch(h){case 0:{r.push(p);break}case 1:{u?s.push(p):n.push(p);break}default:i.push(p),o=Math.max(o,c.start),a=Math.min(a,c.end)}}}}return{patternIndex:l,currentMoves:i,latestStart:o,earliestEnd:a,movesStarting:r,movesFinishing:n,movesFinished:s}}patternAtIndex(t,e){let i=e??this.kpuzzle.defaultPattern();for(let r=0;r<this.animLeaves.length&&r<t;r++){let s=this.animLeaves[r].animLeaf.as(b);s!==null&&(i=i.applyMove(s))}return i}transformationAtIndex(t){let e=this.kpuzzle.identityTransformation();for(let i of this.animLeaves.slice(0,t)){let r=i.animLeaf.as(b);r!==null&&(e=e.applyMove(r))}return e}algDuration(){let t=0;for(let e of this.animLeaves)t=Math.max(t,e.end);return t}numAnimatedLeaves(){return this.animLeaves.length}moveDuration(t){let e=this.getAnimationTimelineLeaf(t);return e.end-e.start}},J6=1024,ew=class extends mt{derive(t){switch(t.indexerConstructorRequest){case"auto":return t.animationTimelineLeaves!==null||P3(t.alg.alg)<=J6&&t.puzzle==="3x3x3"&&t.visualizationStrategy==="Cube3D"?ph:F3;case"tree":return F3;case"simple":return y6;case"simultaneous":return ph;default:throw new Error("Invalid indexer request!")}}},tw=class extends ft{getDefaultValue(){return"auto"}},iw=class extends mt{derive(t){return new t.indexerConstructor(t.kpuzzle,t.algWithIssues.alg,{animationTimelineLeaves:t.animationTimelineLeaves})}},rw=class extends mt{derive(t){return{pattern:t.currentPattern,movesInProgress:t.currentMoveInfo.currentMoves}}},nw=!0,K3=class extends mt{async derive(t){try{return nw&&t.kpuzzle.algToTransformation(t.algWithIssues.alg),t.algWithIssues}catch(e){return{alg:new he,issues:new ha({errors:[`Invalid alg for puzzle: ${e.toString()}`]})}}}},sw=class extends ft{getDefaultValue(){return"start"}},ow=class extends ft{getDefaultValue(){return null}},aw=class extends mt{async derive(t){return t.puzzleLoader.kpuzzle()}},lw=class extends ft{getDefaultValue(){return Qs}},cw=class extends mt{async derive(t){return t.puzzleLoader.id}},fw=class extends ft{getDefaultValue(){return Qs}},hw=class extends mt{derive(t){if(t.puzzleIDRequest&&t.puzzleIDRequest!==Qs){let e=Vc[t.puzzleIDRequest];return e||this.userVisibleErrorTracker.set({errors:[`Invalid puzzle ID: ${t.puzzleIDRequest}`]}),e}return t.puzzleDescriptionRequest&&t.puzzleDescriptionRequest!==Qs?Nd(t.puzzleDescriptionRequest):En}},dw=class extends mt{derive(t){return{playing:t.playingInfo.playing,atStart:t.detailedTimelineInfo.atStart,atEnd:t.detailedTimelineInfo.atEnd}}canReuseValue(t,e){return t.playing===e.playing&&t.atStart===e.atStart&&t.atEnd===e.atEnd}},uw=class extends mt{derive(t){let e=this.#e(t),i=!1,r=!1;return e>=t.timeRange.end&&(r=!0,e=Math.min(t.timeRange.end,e)),e<=t.timeRange.start&&(i=!0,e=Math.max(t.timeRange.start,e)),{timestamp:e,timeRange:t.timeRange,atStart:i,atEnd:r}}#e(t){switch(t.timestampRequest){case"auto":return t.setupAnchor==="start"&&t.setupAlg.alg.experimentalIsEmpty()?t.timeRange.end:t.timeRange.start;case"start":return t.timeRange.start;case"end":return t.timeRange.end;case"anchor":return t.setupAnchor==="start"?t.timeRange.start:t.timeRange.end;case"opposite-anchor":return t.setupAnchor==="start"?t.timeRange.end:t.timeRange.start;default:return t.timestampRequest}}canReuseValue(t,e){return t.timestamp===e.timestamp&&t.timeRange.start===e.timeRange.start&&t.timeRange.end===e.timeRange.end&&t.atStart===e.atStart&&t.atEnd===e.atEnd}},pw=class extends Ur{async getDefaultValue(){return{direction:1,playing:!1,untilBoundary:"entire-timeline",loop:!1}}async derive(t,e){let i=await e,r=Object.assign({},i);return Object.assign(r,t),r}canReuseValue(t,e){return t.direction===e.direction&&t.playing===e.playing&&t.untilBoundary===e.untilBoundary&&t.loop===e.loop}},mw=class extends Ur{getDefaultValue(){return 1}derive(t){return t<0?1:t}},gw={auto:!0,start:!0,end:!0,anchor:!0,"opposite-anchor":!0},yw=class extends ft{getDefaultValue(){return"auto"}set(t){let e=this.get();super.set((async()=>this.validInput(await t)?t:e)())}validInput(t){return!!(typeof t=="number"||gw[t])}},Sw=class extends mt{derive(t){return{start:0,end:t.indexer.algDuration()}}},vw=class extends ft{getDefaultValue(){return"auto"}},xw=class extends ft{getDefaultValue(){return"auto"}},Ew=class extends mt{derive(t){switch(t.puzzleID){case"clock":case"square1":case"redi_cube":case"melindas2x2x2x2":case"tri_quad":case"loopover":return"2D";case"3x3x3":switch(t.visualizationRequest){case"auto":case"3D":return"Cube3D";default:return t.visualizationRequest}default:switch(t.visualizationRequest){case"auto":case"3D":return"PG3D";case"experimental-2D-LL":case"experimental-2D-LL-face":return["2x2x2","4x4x4","megaminx"].includes(t.puzzleID)?"experimental-2D-LL":"2D";default:return t.visualizationRequest}}}},_w=class extends ft{getDefaultValue(){return"auto"}},ww=class extends ft{getDefaultValue(){return"auto"}},Mw=class extends ft{getDefaultValue(){return"auto"}},Rw=class extends ft{getDefaultValue(){return"auto"}},bw=null;Z3=class extends mt{async derive(t){let{spriteURL:e}=t;return e===null?null:new Promise(async(i,r)=>{let n=()=>{console.warn("Could not load sprite:",e.toString()),i(null)};try{(await Cw()).load(e.toString(),i,n,n)}catch{n()}})}},Aw={facelets:["regular","regular","regular","regular","regular"]};Dw=class extends mt{getDefaultValue(){return{orbits:{}}}async derive(t){return t.stickeringMaskRequest?t.stickeringMaskRequest:t.stickeringRequest==="picture"?{specialBehaviour:"picture",orbits:{}}:t.puzzleLoader.stickeringMask?.(t.stickeringRequest??"full")??Tw(t.puzzleLoader)}},Lw={"-":"Regular",D:"Dim",I:"Ignored",X:"Invisible",O:"IgnoreNonPrimary",P:"PermuteNonPrimary",o:"Ignoriented","?":"OrientationWithoutPermutation",M:"Mystery","@":"Regular"};Iw=class extends Ur{getDefaultValue(){return null}derive(t){return t===null?null:typeof t=="string"?Nw(t):t}},Pw=class extends ft{getDefaultValue(){return null}},kw=class extends ft{getDefaultValue(){return"auto"}},Uw=class extends ft{getDefaultValue(){return{}}},Fw=class extends ft{getDefaultValue(){return"auto"}},Ow=class extends ft{getDefaultValue(){return"auto"}},zw=class extends mt{derive(t){return t.colorSchemeRequest==="dark"?"dark":"light"}},Bw=class extends ft{getDefaultValue(){return"auto"}},Gw=class extends ft{getDefaultValue(){return null}},Vw=35,Hw=class extends ft{getDefaultValue(){return Vw}};Ww=class extends Ur{getDefaultValue(){return"auto"}canReuseValue(t,e){return t===e||_S(t,e)}async derive(t,e){if(t==="auto")return"auto";let i=await e;i==="auto"&&(i={});let r=Object.assign({},i);return Object.assign(r,t),typeof r.latitude<"u"&&(r.latitude=Math.min(Math.max(r.latitude,-90),90)),typeof r.longitude<"u"&&(r.longitude=yh(r.longitude,180,-180)),r}},Xw=class extends mt{canReuseValue(t,e){return _S(t,e)}async derive(t){if(t.orbitCoordinatesRequest==="auto")return $3(t.puzzleID,t.strategy);let e=Object.assign(Object.assign({},$3(t.puzzleID,t.strategy),t.orbitCoordinatesRequest));if(Math.abs(e.latitude)<=t.latitudeLimit)return e;{let{latitude:i,longitude:r,distance:n}=e;return{latitude:t.latitudeLimit*Math.sign(i),longitude:r,distance:n}}}},qw={latitude:31.717474411461005,longitude:0,distance:5.877852522924731},jw={latitude:35,longitude:30,distance:6},Q3={latitude:35,longitude:30,distance:6.25},Yw={latitude:Math.atan(1/2)*Zs,longitude:0,distance:6.7},Kw={latitude:26.56505117707799,longitude:0,distance:6};Zw=class{constructor(t){this.twistyPlayerModel=t,this.orbitCoordinates=new Xw({orbitCoordinatesRequest:this.orbitCoordinatesRequest,latitudeLimit:this.latitudeLimit,puzzleID:t.puzzleID,strategy:t.visualizationStrategy}),this.stickeringMask=new Dw({stickeringMaskRequest:this.stickeringMaskRequest,stickeringRequest:this.stickeringRequest,puzzleLoader:t.puzzleLoader})}background=new Ow;colorSchemeRequest=new Bw;dragInput=new kw;foundationDisplay=new ww;foundationStickerSpriteURL=new xh;fullscreenElement=new Gw;hintFacelet=new C3;hintStickerSpriteURL=new xh;initialHintFaceletsAnimation=new Rw;hintFaceletsElevation=new Mw;latitudeLimit=new Hw;movePressInput=new Fw;movePressCancelOptions=new Uw;orbitCoordinatesRequest=new Ww;stickeringMaskRequest=new Iw;stickeringRequest=new Pw;faceletScale=new _w;colorScheme=new zw({colorSchemeRequest:this.colorSchemeRequest});foundationStickerSprite=new Z3({spriteURL:this.foundationStickerSpriteURL});hintStickerSprite=new Z3({spriteURL:this.hintStickerSpriteURL});orbitCoordinates;stickeringMask},Qw={errors:[]},$w=class extends ft{getDefaultValue(){return Qw}reset(){this.set(this.getDefaultValue())}canReuseValue(t,e){return gh(t.errors,e.errors)}},Jw=class{userVisibleErrorTracker=new $w;alg=new j3;backView=new M6;controlPanel=new N6;catchUpMove=new X6;indexerConstructorRequest=new tw;playingInfo=new pw;puzzleDescriptionRequest=new lw;puzzleIDRequest=new fw;setupAnchor=new sw;setupAlg=new j3;setupTransformation=new ow;tempoScale=new mw;timestampRequest=new yw;viewerLink=new vw;visualizationFormat=new xw;title=new q3;videoURL=new xh;competitionID=new q3;animationTimelineLeavesRequest=new W6;puzzleLoader=new hw({puzzleIDRequest:this.puzzleIDRequest,puzzleDescriptionRequest:this.puzzleDescriptionRequest},this.userVisibleErrorTracker);kpuzzle=new aw({puzzleLoader:this.puzzleLoader});puzzleID=new cw({puzzleLoader:this.puzzleLoader});puzzleAlg=new K3({algWithIssues:this.alg,kpuzzle:this.kpuzzle});puzzleSetupAlg=new K3({algWithIssues:this.setupAlg,kpuzzle:this.kpuzzle});visualizationStrategy=new Ew({visualizationRequest:this.visualizationFormat,puzzleID:this.puzzleID});indexerConstructor=new ew({alg:this.alg,puzzle:this.puzzleID,visualizationStrategy:this.visualizationStrategy,indexerConstructorRequest:this.indexerConstructorRequest,animationTimelineLeaves:this.animationTimelineLeavesRequest});setupAlgTransformation=new V6({setupAlg:this.puzzleSetupAlg,kpuzzle:this.kpuzzle});indexer=new iw({indexerConstructor:this.indexerConstructor,algWithIssues:this.puzzleAlg,kpuzzle:this.kpuzzle,animationTimelineLeaves:this.animationTimelineLeavesRequest});anchorTransformation=new H6({setupTransformation:this.setupTransformation,setupAnchor:this.setupAnchor,setupAlgTransformation:this.setupAlgTransformation,indexer:this.indexer});timeRange=new Sw({indexer:this.indexer});detailedTimelineInfo=new uw({timestampRequest:this.timestampRequest,timeRange:this.timeRange,setupAnchor:this.setupAnchor,setupAlg:this.setupAlg});coarseTimelineInfo=new dw({detailedTimelineInfo:this.detailedTimelineInfo,playingInfo:this.playingInfo});currentMoveInfo=new j6({indexer:this.indexer,detailedTimelineInfo:this.detailedTimelineInfo,catchUpMove:this.catchUpMove});buttonAppearance=new O6({coarseTimelineInfo:this.coarseTimelineInfo,viewerLink:this.viewerLink});currentLeavesSimplified=new q6({currentMoveInfo:this.currentMoveInfo});currentPattern=new Y6({anchoredStart:this.anchorTransformation,currentLeavesSimplified:this.currentLeavesSimplified,indexer:this.indexer});legacyPosition=new rw({currentMoveInfo:this.currentMoveInfo,currentPattern:this.currentPattern});twistySceneModel=new Zw(this);async twizzleLink(){let[t,e,i,r,n,s,o,a]=await Promise.all([this.viewerLink.get(),this.puzzleID.get(),this.puzzleDescriptionRequest.get(),this.alg.get(),this.setupAlg.get(),this.setupAnchor.get(),this.twistySceneModel.stickeringRequest.get(),this.twistySceneModel.twistyPlayerModel.title.get()]),l=t==="experimental-twizzle-explorer",c=new URL(`https://alpha.twizzle.net/${l?"explore":"edit"}/`);return r.alg.experimentalIsEmpty()||c.searchParams.set("alg",r.alg.toString()),n.alg.experimentalIsEmpty()||c.searchParams.set("setup-alg",n.alg.toString()),s!=="start"&&c.searchParams.set("setup-anchor",s),o!=="full"&&o!==null&&c.searchParams.set("experimental-stickering",o),l&&i!==Qs?c.searchParams.set("puzzle-description",i):e!=="3x3x3"&&c.searchParams.set("puzzle",e),a&&c.searchParams.set("title",a),c.toString()}experimentalAddAlgLeaf(t,e){let i=t.as(b);i?this.experimentalAddMove(i,e):this.alg.set((async()=>{let n=(await this.alg.get()).alg.concat(new he([t]));return this.timestampRequest.set("end"),n})())}experimentalAddMove(t,e){let i=typeof t=="string"?new b(t):t;this.alg.set((async()=>{let[{alg:r},n]=await Promise.all([this.alg.get(),this.puzzleLoader.get()]),s=Sc(r,i,{...e,...await Ld(n)});return this.timestampRequest.set("end"),this.catchUpMove.set({move:i,amount:0}),s})())}experimentalRemoveFinalChild(){this.alg.set((async()=>{let t=(await this.alg.get()).alg,e=Array.from(t.childAlgNodes()),[i]=e.splice(-1);if(!i)return t;this.timestampRequest.set("end");let r=i.as(b);return r&&this.catchUpMove.set({move:r.invert(),amount:0}),new he(e)})())}};eM=class extends Mi{experimentalModel=new Jw;set alg(t){this.experimentalModel.alg.set(t)}get alg(){throw tt("alg")}set experimentalSetupAlg(t){this.experimentalModel.setupAlg.set(t)}get experimentalSetupAlg(){throw tt("setup")}set experimentalSetupAnchor(t){this.experimentalModel.setupAnchor.set(t)}get experimentalSetupAnchor(){throw tt("anchor")}set puzzle(t){this.experimentalModel.puzzleIDRequest.set(t)}get puzzle(){throw tt("puzzle")}set experimentalPuzzleDescription(t){this.experimentalModel.puzzleDescriptionRequest.set(t)}get experimentalPuzzleDescription(){throw tt("experimentalPuzzleDescription")}set timestamp(t){this.experimentalModel.timestampRequest.set(t)}get timestamp(){throw tt("timestamp")}set hintFacelets(t){this.experimentalModel.twistySceneModel.hintFacelet.set(t)}get hintFacelets(){throw tt("hintFacelets")}set experimentalStickering(t){this.experimentalModel.twistySceneModel.stickeringRequest.set(t)}get experimentalStickering(){throw tt("experimentalStickering")}set experimentalStickeringMaskOrbits(t){this.experimentalModel.twistySceneModel.stickeringMaskRequest.set(t)}get experimentalStickeringMaskOrbits(){throw tt("experimentalStickeringMaskOrbits")}set experimentalFaceletScale(t){this.experimentalModel.twistySceneModel.faceletScale.set(t)}get experimentalFaceletScale(){throw tt("experimentalFaceletScale")}set backView(t){this.experimentalModel.backView.set(t)}get backView(){throw tt("backView")}set background(t){this.experimentalModel.twistySceneModel.background.set(t)}get background(){throw tt("background")}set colorScheme(t){this.experimentalModel.twistySceneModel.colorSchemeRequest.set(t)}get colorScheme(){throw tt("colorScheme")}set controlPanel(t){this.experimentalModel.controlPanel.set(t)}get controlPanel(){throw tt("controlPanel")}set visualization(t){this.experimentalModel.visualizationFormat.set(t)}get visualization(){throw tt("visualization")}set experimentalTitle(t){this.experimentalModel.title.set(t)}get experimentalTitle(){throw tt("experimentalTitle")}set experimentalVideoURL(t){this.experimentalModel.videoURL.set(t)}get experimentalVideoURL(){throw tt("experimentalVideoURL")}set experimentalCompetitionID(t){this.experimentalModel.competitionID.set(t)}get experimentalCompetitionID(){throw tt("experimentalCompetitionID")}set viewerLink(t){this.experimentalModel.viewerLink.set(t)}get viewerLink(){throw tt("viewerLink")}set experimentalMovePressInput(t){this.experimentalModel.twistySceneModel.movePressInput.set(t)}get experimentalMovePressInput(){throw tt("experimentalMovePressInput")}set experimentalMovePressCancelOptions(t){this.experimentalModel.twistySceneModel.movePressCancelOptions.set(t)}get experimentalMovePressCancelOptions(){throw tt("experimentalMovePressCancelOptions")}set cameraLatitude(t){this.experimentalModel.twistySceneModel.orbitCoordinatesRequest.set({latitude:t})}get cameraLatitude(){throw tt("cameraLatitude")}set cameraLongitude(t){this.experimentalModel.twistySceneModel.orbitCoordinatesRequest.set({longitude:t})}get cameraLongitude(){throw tt("cameraLongitude")}set cameraDistance(t){this.experimentalModel.twistySceneModel.orbitCoordinatesRequest.set({distance:t})}get cameraDistance(){throw tt("cameraDistance")}set cameraLatitudeLimit(t){this.experimentalModel.twistySceneModel.latitudeLimit.set(t)}get cameraLatitudeLimit(){throw tt("cameraLatitudeLimit")}set indexer(t){this.experimentalModel.indexerConstructorRequest.set(t)}get indexer(){throw tt("indexer")}set tempoScale(t){this.experimentalModel.tempoScale.set(t)}get tempoScale(){throw tt("tempoScale")}set experimentalSprite(t){this.experimentalModel.twistySceneModel.foundationStickerSpriteURL.set(t)}get experimentalSprite(){throw tt("experimentalSprite")}set experimentalHintSprite(t){this.experimentalModel.twistySceneModel.hintStickerSpriteURL.set(t)}get experimentalHintSprite(){throw tt("experimentalHintSprite")}set fullscreenElement(t){this.experimentalModel.twistySceneModel.fullscreenElement.set(t)}get fullscreenElement(){throw tt("fullscreenElement")}set experimentalInitialHintFaceletsAnimation(t){this.experimentalModel.twistySceneModel.initialHintFaceletsAnimation.set(t)}get experimentalInitialHintFaceletsAnimation(){throw tt("experimentalInitialHintFaceletsAnimation")}set experimentalHintFaceletsElevation(t){this.experimentalModel.twistySceneModel.hintFaceletsElevation.set(t)}get experimentalHintFaceletsElevation(){throw tt("experimentalHintFaceletsElevation")}set experimentalDragInput(t){this.experimentalModel.twistySceneModel.dragInput.set(t)}get experimentalDragInput(){throw tt("experimentalDragInput")}experimentalGet=new tM(this.experimentalModel)},tM=class{constructor(t){this.model=t}async alg(){return(await this.model.alg.get()).alg}async setupAlg(){return(await this.model.setupAlg.get()).alg}puzzleID(){return this.model.puzzleID.get()}async timestamp(){return(await this.model.detailedTimelineInfo.get()).timestamp}},mh="data-",sc={alg:"alg","experimental-setup-alg":"experimentalSetupAlg","experimental-setup-anchor":"experimentalSetupAnchor",puzzle:"puzzle","experimental-puzzle-description":"experimentalPuzzleDescription",visualization:"visualization","hint-facelets":"hintFacelets","experimental-stickering":"experimentalStickering","experimental-stickering-mask-orbits":"experimentalStickeringMaskOrbits",background:"background","color-scheme":"colorScheme","control-panel":"controlPanel","back-view":"backView","experimental-facelet-scale":"experimentalFaceletScale","experimental-initial-hint-facelets-animation":"experimentalInitialHintFaceletsAnimation","experimental-hint-facelets-elevation":"experimentalHintFaceletsElevation","viewer-link":"viewerLink","experimental-move-press-input":"experimentalMovePressInput","experimental-drag-input":"experimentalDragInput","experimental-title":"experimentalTitle","experimental-video-url":"experimentalVideoURL","experimental-competition-id":"experimentalCompetitionID","camera-latitude":"cameraLatitude","camera-longitude":"cameraLongitude","camera-distance":"cameraDistance","camera-latitude-limit":"cameraLatitudeLimit","tempo-scale":"tempoScale","experimental-sprite":"experimentalSprite","experimental-hint-sprite":"experimentalHintSprite"},iM=Object.fromEntries(Object.values(sc).map(t=>[t,!0])),rM={experimentalMovePressCancelOptions:!0},wS=Symbol("intersectedCallback");oc=class extends eM{controller=new D6(this.experimentalModel,this);buttons;experimentalCanvasClickCallback=()=>{};constructor(t={}){super();for(let[e,i]of Object.entries(t)){if(!(iM[e]||rM[e])){console.warn(`Invalid config passed to TwistyPlayer: ${e}`);break}this[e]=i}}#e=new da(this,"controls-",["auto"].concat(Object.keys(L6)));#t=document.createElement("div");#i=document.createElement("div");#r=!1;connectedCallback(){this.addCSS(vS),nM(this)}async[wS](){if(this.#r)return;this.#r=!0,this.addElement(this.#t).classList.add("visualization-wrapper"),this.addElement(this.#i).classList.add("error-elem"),this.#i.textContent="Error",this.experimentalModel.userVisibleErrorTracker.addFreshListener(e=>{let i=e.errors[0]??null;this.contentWrapper.classList.toggle("error",!!i),i&&(this.#i.textContent=i)});let t=new gS(this.experimentalModel,this.controller);this.contentWrapper.appendChild(t),this.buttons=new dS(this.experimentalModel,this.controller,this),this.contentWrapper.appendChild(this.buttons),this.experimentalModel.twistySceneModel.background.addFreshListener(e=>{this.contentWrapper.classList.toggle("checkered",["auto","checkered"].includes(e)),this.contentWrapper.classList.toggle("checkered-transparent",e==="checkered-transparent")}),this.experimentalModel.twistySceneModel.colorScheme.addFreshListener(e=>{this.contentWrapper.classList.toggle("dark-mode",["dark"].includes(e))}),this.experimentalModel.controlPanel.addFreshListener(e=>{this.#e.setValue(e)}),this.experimentalModel.visualizationStrategy.addFreshListener(this.#l.bind(this)),this.experimentalModel.puzzleID.addFreshListener(this.flash.bind(this))}#s="auto";experimentalSetFlashLevel(t){this.#s=t}flash(){this.#s==="auto"&&this.#n?.animate([{opacity:.25},{opacity:1}],{duration:250,easing:"ease-out"})}#n=null;#o=new lS;#a=null;#l(t){if(t!==this.#a){this.#n?.remove(),this.#n?.disconnect();let e;switch(t){case"2D":case"experimental-2D-LL":case"experimental-2D-LL-face":{e=new aS(this.experimentalModel.twistySceneModel,t);break}case"Cube3D":case"PG3D":{e=new Sh(this.experimentalModel),this.#o.handleNewValue(e);break}default:throw new Error("Invalid visualization")}this.#t.appendChild(e),this.#n=e,this.#a=t}}async experimentalCurrentVantages(){this.connectedCallback();let t=this.#n;return t instanceof Sh?t.experimentalVantages():[]}async experimentalCurrentCanvases(){let t=await this.experimentalCurrentVantages(),e=[];for(let i of t)e.push((await i.canvasInfo()).canvas);return e}async experimentalCurrentThreeJSPuzzleObject(t){this.connectedCallback();let i=await(await this.#o.promise).experimentalTwisty3DPuzzleWrapper(),r=i.twisty3DPuzzle(),n=(async()=>{await r,await new Promise(s=>setTimeout(s,0))})();if(t){let s=new Bn(async()=>{});i.addEventListener("render-scheduled",async()=>{s.requestIsPending()||(s.requestAnimFrame(),await n,t())})}return r}jumpToStart(t){this.controller.jumpToStart(t)}jumpToEnd(t){this.controller.jumpToEnd(t)}play(){this.controller.togglePlay(!0)}pause(){this.controller.togglePlay(!1)}togglePlay(t){this.controller.togglePlay(t)}experimentalAddMove(t,e){this.experimentalModel.experimentalAddMove(t,e)}experimentalAddAlgLeaf(t,e){this.experimentalModel.experimentalAddAlgLeaf(t,e)}static get observedAttributes(){let t=[];for(let e of Object.keys(sc))t.push(e,mh+e);return t}experimentalRemoveFinalChild(){this.experimentalModel.experimentalRemoveFinalChild()}attributeChangedCallback(t,e,i){t.startsWith(mh)&&(t=t.slice(mh.length));let r=sc[t];r&&(this[r]=i)}async experimentalScreenshot(t){return(await X3(this.experimentalModel,t)).dataURL}async experimentalDownloadScreenshot(t){if(["2D","experimental-2D-LL","experimental-2D-LL-face"].includes(await this.experimentalModel.visualizationStrategy.get())){let i=await this.#n.currentTwisty2DPuzzleWrapper().twisty2DPuzzle(),r=new XMLSerializer().serializeToString(i.svgWrapper.svgElement),n=URL.createObjectURL(new Blob([r]));SS(n,t??await yS(this.experimentalModel),"svg")}else await(await X3(this.experimentalModel)).download(t)}};Yt.define("twisty-player",oc);sM=class extends ir{traverseAlg(t,e){let i=[],r=0;for(let n of t.childAlgNodes()){let s=this.traverseAlgNode(n,{numMovesSoFar:e.numMovesSoFar+r});i.push(s.tokens),r+=s.numLeavesInside}return{tokens:Array.prototype.concat(...i),numLeavesInside:r}}traverseGrouping(t,e){let i=this.traverseAlg(t.alg,e);return{tokens:i.tokens,numLeavesInside:i.numLeavesInside*t.amount}}traverseMove(t,e){return{tokens:[{leaf:t,idx:e.numMovesSoFar}],numLeavesInside:1}}traverseCommutator(t,e){let i=this.traverseAlg(t.A,e),r=this.traverseAlg(t.B,{numMovesSoFar:e.numMovesSoFar+i.numLeavesInside});return{tokens:i.tokens.concat(r.tokens),numLeavesInside:i.numLeavesInside*2+r.numLeavesInside}}traverseConjugate(t,e){let i=this.traverseAlg(t.A,e),r=this.traverseAlg(t.B,{numMovesSoFar:e.numMovesSoFar+i.numLeavesInside});return{tokens:i.tokens.concat(r.tokens),numLeavesInside:i.numLeavesInside*2+r.numLeavesInside*2}}traversePause(t,e){return{tokens:[{leaf:t,idx:e.numMovesSoFar}],numLeavesInside:1}}traverseNewline(t,e){return{tokens:[],numLeavesInside:0}}traverseLineComment(t,e){return{tokens:[],numLeavesInside:0}}},oM=Ot(sM),aM=class extends ft{getDefaultValue(){return""}},lM=class extends mt{derive(t){return ES(t.value)}},cM=class extends Ur{getDefaultValue(){return{selectionStart:0,selectionEnd:0,endChangedMostRecently:!1}}async derive(t,e){let{selectionStart:i,selectionEnd:r}=t,n=await e,s=t.selectionStart===n.selectionStart&&t.selectionEnd!==(await e).selectionEnd;return{selectionStart:i,selectionEnd:r,endChangedMostRecently:s}}},fM=class extends mt{derive(t){return t.selectionInfo.endChangedMostRecently?t.selectionInfo.selectionEnd:t.selectionInfo.selectionStart}},hM=class extends mt{derive(t){return oM(t.algWithIssues.alg,{numMovesSoFar:0}).tokens}},dM=class extends mt{derive(t){function e(r){if(r===null)return null;let n;return t.targetChar<r.leaf[hi]?n="before":t.targetChar===r.leaf[hi]?n="start":t.targetChar<r.leaf[Oi]?n="inside":t.targetChar===r.leaf[Oi]?n="end":n="after",{leafInfo:r,where:n}}let i=null;for(let r of t.leafTokens){if(t.targetChar<r.leaf[hi]&&i!==null)return e(i);if(t.targetChar<=r.leaf[Oi])return e(r);i=r}return e(i)}},uM=class{valueProp=new aM;selectionProp=new cM;targetCharProp=new fM({selectionInfo:this.selectionProp});algEditorAlgWithIssues=new lM({value:this.valueProp});leafTokensProp=new hM({algWithIssues:this.algEditorAlgWithIssues});leafToHighlight=new dM({leafTokens:this.leafTokensProp,targetChar:this.targetCharProp})},pM="//";RS=new mi;RS.replaceSync(`
:host {
  width: 384px;
  display: grid;
}

.wrapper {
  /*overflow: hidden;
  resize: horizontal;*/

  background: var(--background, none);
  display: grid;
}

textarea, .carbon-copy {
  grid-area: 1 / 1 / 2 / 2;

  width: 100%;
  font-family: sans-serif;
  line-height: 1.2em;

  font-size: var(--font-size, inherit);
  font-family: var(--font-family, sans-serif);

  box-sizing: border-box;

  padding: var(--padding, 0.5em);
  /* Prevent horizontal growth. */
  overflow-x: hidden;
}

textarea {
  resize: none;
  background: none;
  z-index: 2;
  border: 1px solid var(--border-color, rgba(0, 0, 0, 0.25));
  overflow: hidden;
}

.carbon-copy {
  white-space: pre-wrap;
  word-wrap: break-word;
  color: transparent;
  user-select: none;
  pointer-events: none;

  z-index: 1;
}

.carbon-copy .highlight {
  background: var(--highlight-color, rgba(255, 128, 0, 0.5));
  padding: 0.1em 0.2em;
  margin: -0.1em -0.2em;
  border-radius: 0.2em;
}

.wrapper.issue-warning textarea,
.wrapper.valid-for-puzzle-warning textarea {
  outline: none;
  border: 1px solid rgba(200, 200, 0, 0.5);
  background: rgba(255, 255, 0, 0.1);
}

.wrapper.issue-error textarea,
.wrapper.valid-for-puzzle-error textarea {
  outline: none;
  border: 1px solid red;
  background: rgba(255, 0, 0, 0.1);
}
`);Jl="for-twisty-player",tS="placeholder",iS="twisty-player-prop",yM=class extends Mi{model=new uM;#e=document.createElement("textarea");#t=document.createElement("div");#i=document.createElement("span");#r=document.createElement("span");#s=document.createElement("span");#n=new da(this,"valid-for-puzzle-",["none","warning","error"]);#o=null;#a;get#l(){return this.#o===null?null:this.#o.experimentalModel[this.#a]}debugNeverRequestTimestamp=!1;constructor(t){super(),this.#t.classList.add("carbon-copy"),this.addElement(this.#t),this.#e.rows=1,this.addElement(this.#e),this.#i.classList.add("prefix"),this.#t.appendChild(this.#i),this.#r.classList.add("highlight"),this.#t.appendChild(this.#r),this.#s.classList.add("suffix"),this.#t.appendChild(this.#s),this.#e.placeholder="Alg",this.#e.setAttribute("spellcheck","false"),this.addCSS(RS),this.#e.addEventListener("input",()=>{this.#f=!0,this.onInput()}),this.#e.addEventListener("blur",()=>this.onBlur()),document.addEventListener("selectionchange",()=>this.onSelectionChange()),t?.twistyPlayer&&(this.twistyPlayer=t.twistyPlayer),this.#a=t?.twistyPlayerProp??"alg",t?.twistyPlayerProp==="alg"&&this.model.leafToHighlight.addFreshListener(e=>{e&&this.highlightLeaf(e.leafInfo.leaf)})}connectedCallback(){this.#e.addEventListener("paste",t=>{let e=t.clipboardData?.getData("text");e&&(gM(this.#e,e),t.preventDefault(),this.onInput())})}set algString(t){this.#e.value=t,this.onInput()}get algString(){return this.#e.value}set placeholder(t){this.#e.placeholder=t}#f=!1;onInput(){this.#r.hidden=!0,this.highlightLeaf(null);let t=this.#e.value.trimEnd();this.model.valueProp.set(t),this.#l?.set(t)}async onSelectionChange(){if(document.activeElement!==this||this.shadow.activeElement!==this.#e||this.#a!=="alg")return;let{selectionStart:t,selectionEnd:e}=this.#e;this.model.selectionProp.set({selectionStart:t,selectionEnd:e})}async onBlur(){}setAlgIssueClassForPuzzle(t){this.#n.setValue(t)}#h(t){return t.endsWith(`
`)?`${t} `:t}#c=null;highlightLeaf(t){if(t===null){this.#i.textContent="",this.#r.textContent="",this.#s.textContent=this.#h(this.#e.value);return}t!==this.#c&&(this.#c=t,this.#i.textContent=this.#e.value.slice(0,t[hi]),this.#r.textContent=this.#e.value.slice(t[hi],t[Oi]),this.#s.textContent=this.#h(this.#e.value.slice(t[Oi])),this.#r.hidden=!1)}get twistyPlayer(){return this.#o}set twistyPlayer(t){if(this.#o){console.warn("twisty-player reassignment/clearing is not supported");return}this.#o=t,t&&((async()=>this.algString=this.#l?(await this.#l.get()).alg.toString():"")(),this.#a==="alg"&&(this.#o?.experimentalModel.puzzleAlg.addFreshListener(e=>{if(e.issues.errors.length===0){this.setAlgIssueClassForPuzzle(e.issues.warnings.length===0?"none":"warning");let i=e.alg,r=he.fromString(this.algString);i.isIdentical(r)||(this.algString=i.toString(),this.onInput())}else this.setAlgIssueClassForPuzzle("error")}),this.model.leafToHighlight.addFreshListener(async e=>{if(e===null)return;let[i,r]=await Promise.all([await t.experimentalModel.indexer.get(),await t.experimentalModel.timestampRequest.get()]);if(r==="auto"&&!this.#f)return;let n=i.indexToMoveStartTimestamp(e.leafInfo.idx),s=i.moveDuration(e.leafInfo.idx),o;switch(e.where){case"before":{o=n;break}case"start":case"inside":{o=n+s/4;break}case"end":case"after":{o=n+s;break}default:throw console.log("invalid where"),new Error("Invalid where!")}this.debugNeverRequestTimestamp||t.experimentalModel.timestampRequest.set(o)}),t.experimentalModel.currentLeavesSimplified.addFreshListener(async e=>{let r=(await t.experimentalModel.indexer.get()).getAnimLeaf(e.patternIndex);this.highlightLeaf(r)})))}attributeChangedCallback(t,e,i){switch(t){case Jl:{let r=document.getElementById(i);if(!r){console.warn(`${Jl}= elem does not exist`);return}if(!(r instanceof oc)){console.warn(`${Jl}=is not a twisty-player`);return}this.twistyPlayer=r;return}case tS:{this.placeholder=i;return}case iS:{if(this.#o)throw console.log("cannot set prop"),new Error("cannot set prop after twisty player");this.#a=i;return}}}static get observedAttributes(){return[Jl,tS,iS]}};Yt.define("twisty-alg-editor",yM);bS=new mi;bS.replaceSync(`
:host {
  display: inline;
}

.wrapper {
  display: inline;
}

a:not(:hover) {
  color: inherit;
  text-decoration: none;
}

twisty-alg-leaf-elem.twisty-alg-comment {
  color: rgba(0, 0, 0, 0.4);
}

.wrapper.current-move {
  background: rgba(66, 133, 244, 0.3);
  margin-left: -0.1em;
  margin-right: -0.1em;
  padding-left: 0.1em;
  padding-right: 0.1em;
  border-radius: 0.1em;
}
`);vM=.25,Js=class extends Mi{constructor(t,e,i,r,n,s){if(super({mode:"open"}),this.algOrAlgNode=r,this.classList.add(t),this.addCSS(bS),s){let o=this.contentWrapper.appendChild(document.createElement("a"));o.href="#",o.textContent=e,o.addEventListener("click",a=>{a.preventDefault(),i.twistyAlgViewer.jumpToIndex(i.earliestMoveIndex,n)})}else this.contentWrapper.appendChild(document.createElement("span")).textContent=e}pathToIndex(t){return[]}setCurrentMove(t){this.contentWrapper.classList.toggle("current-move",t)}};Yt.define("twisty-alg-leaf-elem",Js);eo=class extends Ks{constructor(t,e){super(),this.algOrAlgNode=e,this.classList.add(t)}queue=[];addString(t){this.queue.push(document.createTextNode(t))}addElem(t){return this.queue.push(t.element),t.moveCount}flushQueue(t=1){for(let e of CS(this.queue,t))this.append(e);this.queue=[]}pathToIndex(t){return[]}};Yt.define("twisty-alg-wrapper-elem",eo);_M=class extends ir{traverseAlg(t,e){let i=0,r=new eo("twisty-alg-alg",t),n=!0;for(let s of mc(t.childAlgNodes(),e.direction))n||r.addString(" "),n=!1,s.as(Ft)?.experimentalNISSGrouping&&r.addString("^("),s.as(Ut)?.experimentalNISSPlaceholder||(i+=r.addElem(this.traverseAlgNode(s,{earliestMoveIndex:e.earliestMoveIndex+i,twistyAlgViewer:e.twistyAlgViewer,direction:e.direction}))),s.as(Ft)?.experimentalNISSGrouping&&r.addString(")");return r.flushQueue(e.direction),{moveCount:i,element:r}}traverseGrouping(t,e){let i=t.experimentalAsSquare1Tuple(),r=EM(e.direction,t.amount),n=0,s=new eo("twisty-alg-grouping",t);return s.addString("("),i?(n+=s.addElem({moveCount:1,element:new Js("twisty-alg-move",i[0].amount.toString(),e,i[0],!0,!0)}),s.addString(", "),n+=s.addElem({moveCount:1,element:new Js("twisty-alg-move",i[1].amount.toString(),e,i[1],!0,!0)})):n+=s.addElem(this.traverseAlg(t.alg,{earliestMoveIndex:e.earliestMoveIndex+n,twistyAlgViewer:e.twistyAlgViewer,direction:r})),s.addString(`)${t.experimentalRepetitionSuffix}`),s.flushQueue(),{moveCount:n*Math.abs(t.amount),element:s}}traverseMove(t,e){let i=new Js("twisty-alg-move",t.toString(),e,t,!0,!0);return e.twistyAlgViewer.highlighter.addMove(t[hi],i),{moveCount:1,element:i}}traverseCommutator(t,e){let i=0,r=new eo("twisty-alg-commutator",t);r.addString("["),r.flushQueue();let[n,s]=CS([t.A,t.B],e.direction);return i+=r.addElem(this.traverseAlg(n,{earliestMoveIndex:e.earliestMoveIndex+i,twistyAlgViewer:e.twistyAlgViewer,direction:e.direction})),r.addString(", "),i+=r.addElem(this.traverseAlg(s,{earliestMoveIndex:e.earliestMoveIndex+i,twistyAlgViewer:e.twistyAlgViewer,direction:e.direction})),r.flushQueue(e.direction),r.addString("]"),r.flushQueue(),{moveCount:i*2,element:r}}traverseConjugate(t,e){let i=0,r=new eo("twisty-alg-conjugate",t);r.addString("[");let n=r.addElem(this.traverseAlg(t.A,{earliestMoveIndex:e.earliestMoveIndex+i,twistyAlgViewer:e.twistyAlgViewer,direction:e.direction}));return i+=n,r.addString(": "),i+=r.addElem(this.traverseAlg(t.B,{earliestMoveIndex:e.earliestMoveIndex+i,twistyAlgViewer:e.twistyAlgViewer,direction:e.direction})),r.addString("]"),r.flushQueue(),{moveCount:i+n,element:r}}traversePause(t,e){return t.experimentalNISSGrouping?this.traverseAlg(t.experimentalNISSGrouping.alg,e):{moveCount:1,element:new Js("twisty-alg-pause",".",e,t,!0,!0)}}traverseNewline(t,e){let i=new eo("twisty-alg-newline",t);return i.append(document.createElement("br")),{moveCount:0,element:i}}traverseLineComment(t,e){return{moveCount:0,element:new Js("twisty-alg-line-comment",`//${t.text}`,e,t,!1,!1)}}},wM=Ot(_M),MM=class{moveCharIndexMap=new Map;currentElem=null;addMove(t,e){this.moveCharIndexMap.set(t,e)}set(t){let e=t?this.moveCharIndexMap.get(t[hi])??null:null;this.currentElem!==e&&(this.currentElem?.classList.remove("twisty-alg-current-move"),this.currentElem?.setCurrentMove(!1),e?.classList.add("twisty-alg-current-move"),e?.setCurrentMove(!0),this.currentElem=e)}},AS=class extends Ks{highlighter=new MM;#e;#t=null;lastClickTimestamp=null;constructor(t){super(),t?.twistyPlayer&&(this.twistyPlayer=t?.twistyPlayer)}connectedCallback(){}setAlg(t){this.#e=wM(t,{earliestMoveIndex:0,twistyAlgViewer:this,direction:1}).element,this.textContent="",this.appendChild(this.#e)}get twistyPlayer(){return this.#t}set twistyPlayer(t){this.#i(t)}async#i(t){if(this.#t){console.warn("twisty-player reassignment is not supported");return}if(t===null)throw new Error("clearing twistyPlayer is not supported");this.#t=t,this.#t.experimentalModel.alg.addFreshListener(r=>{this.setAlg(r.alg)});let e=(await this.#t.experimentalModel.alg.get()).alg,i=hi in e?e:he.fromString(e.toString());this.setAlg(i),t.experimentalModel.currentMoveInfo.addFreshListener(r=>{let n=r.currentMoves[0];if(n??=r.movesStarting[0],n??=r.movesFinishing[0],!n)this.highlighter.set(null);else{let s=n.move;this.highlighter.set(s)}}),t.experimentalModel.detailedTimelineInfo.addFreshListener(r=>{r.timestamp!==this.lastClickTimestamp&&(this.lastClickTimestamp=null)})}async jumpToIndex(t,e){let i=this.#t;if(i){i.pause();let r=(async()=>{let n=await i.experimentalModel.indexer.get(),s=e?n.moveDuration(t)*vM:0;return n.indexToMoveStartTimestamp(t)+n.moveDuration(t)-s})();i.experimentalModel.timestampRequest.set(await r),this.lastClickTimestamp===await r?(i.play(),this.lastClickTimestamp=null):this.lastClickTimestamp=await r}}async attributeChangedCallback(t,e,i){if(t==="for"){let r=document.getElementById(i);if(r||console.info("for= elem does not exist, waiting for one"),await customElements.whenDefined("twisty-player"),r=await SM(i),!(r instanceof oc)){console.warn("for= elem is not a twisty-player");return}this.twistyPlayer=r}}static get observedAttributes(){return["for"]}};Yt.define("twisty-alg-viewer",AS);rc=new mi;rc.replaceSync(`
.wrapper {
  background: rgb(255, 245, 235);
  border: 1px solid rgba(0, 0, 0, 0.25);

  /* Workaround from https://stackoverflow.com/questions/40010597/how-do-i-apply-opacity-to-a-css-color-variable */
  --text-color: 0, 0, 0;
  --heading-background: 255, 230, 210;

  color: rgb(var(--text-color));
}

.setup-alg, twisty-alg-viewer {
  padding: 0.5em 1em;
}

.heading {
  background: rgba(var(--heading-background), 1);
  color: rgba(var(--text-color), 1);
  font-weight: bold;
  padding: 0.25em 0.5em;
  display: grid;
  grid-template-columns: auto 1fr;

  /* For the move count hover elems. */
  position: sticky;
}

.heading.title {
  background: rgb(255, 245, 235);
  font-size: 150%;
  white-space: pre-wrap;
}

.heading .move-count {
  font-weight: initial;
  text-align: right;
  color: rgba(var(--text-color), 0.4);
}

.wrapper.dark-mode .heading .move-count {
  color: rgba(var(--text-color), 0.7);
}

.heading a {
  text-decoration: none;
  color: inherit;
}

twisty-player {
  width: 100%;
  min-height: 128px;
  height: 288px;
  resize: vertical;
  overflow-y: hidden;
}

twisty-player + .heading {
  padding-top: 0.5em;
}

twisty-alg-viewer {
  display: inline-block;
}

.wrapper {
  container-type: inline-size;
}

.scrollable-region {
  border-top: 1px solid rgba(0, 0, 0, 0.25);
}

.scrollable-region {
  max-height: 18em;
  overflow-y: auto;
}

@container (min-width: 512px) {
  .responsive-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  twisty-player {
    height: 320px
  }
  .scrollable-region {
    border-top: none;
    border-left: 1px solid rgba(0, 0, 0, 0.25);
    contain: strict;
    max-height: 100cqh;
  }
}

.wrapper:fullscreen,
.wrapper:fullscreen .responsive-wrapper {
  width: 100%;
  height: 100%;
}

.wrapper:fullscreen twisty-player,
.wrapper:fullscreen .scrollable-region {
  height: 50%;
}

@container (min-width: 512px) {
  .wrapper:fullscreen twisty-player,
  .wrapper:fullscreen .scrollable-region {
    height: 100%;
  }
}

/* TODO: dedup with Twizzle Editor */
.move-count > span:hover:before {
  background-color: rgba(var(--heading-background), 1);
  color: rgba(var(--text-color), 1);
  backdrop-filter: blur(4px);
  z-index: 100;
  position: absolute;
  padding: 0.5em;
  top: 1.5em;
  right: 0;
  content: attr(data-before);
  white-space: pre-wrap;
  text-align: left;
}

.move-count > span:hover {
  color: rgba(var(--text-color), 1);
  cursor: help;
}
`);TS=new mi;TS.replaceSync(`
.wrapper {
  background: white;
  --heading-background: 232, 239, 253
}

.wrapper.dark-mode {
  --text-color: 236, 236, 236;
  --heading-background: 29, 29, 29;
}

.scrollable-region {
  overflow-y: auto;
}

.wrapper.dark-mode {
  background: #262626;
  --text-color: 142, 142, 142;
  border-color: #FFFFFF44;
  color-scheme: dark;
}

.wrapper.dark-mode .heading:not(.title) {
  background: #1d1d1d;
}

.heading.title {
  background: none;
}
`);ec="outer block moves (e.g. R, Rw, or 4r)",tc="inner block moves (e.g. M or 2-5r)",rS={OBTM:`HTM = OBTM ("Outer Block Turn Metric"):
\u2022 ${tc} count as 2 turns
\u2022 ${ec} count as 1 turn
\u2022 rotations (e.g. x) count as 0 turns`,OBQTM:`QTM = OBQTM ("Outer Block Quantum Turn Metric"):
\u2022 ${tc} count as 2 turns per quantum (e.g. M2 counts as 4)
\u2022 ${ec} count as 1 turn per quantum (e.g. R2 counts as 2)
\u2022 rotations (e.g. x) count as 0 turns`,RBTM:`STM = RBTM ("Range Block Turn Metric"):
\u2022 ${tc} count as 1 turn
\u2022 ${ec} count as 1 turn
\u2022 rotations (e.g. x) count as 0 turns`,RBQTM:`SQTM = RBQTM ("Range Block Quantum Turn Metric"):
\u2022 ${tc} count as 1 turn per quantum (e.g. M2 counts as 2)
\u2022 ${ec} count as 1 turn per quantum (e.g. R2 counts as 2)
\u2022 rotations (e.g. x) count as 0 turns`,ETM:`ETM ("Execution Turn Metric"):
\u2022 all moves (including rotations) count as 1 turn`},bM={OBTM:"OB",OBQTM:"OBQ",RBTM:"RB",RBQTM:"RBQ",ETM:"E"},CM=class extends Mi{constructor(t){super({mode:"open"}),this.options=t}twistyPlayer=null;a=null;#e(){if(this.contentWrapper.textContent="",this.a){let e=this.contentWrapper.appendChild(document.createElement("span"));e.textContent="\u2757\uFE0F",e.title="Could not show a player for link",this.addElement(this.a)}this.removeCSS(rc);let t=this.shadow.adoptedStyleSheets.indexOf(rc);typeof t<"u"&&this.shadow.adoptedStyleSheets.splice(t,t+1),this.#t?.remove()}#t;#i;#r;#s;async connectedCallback(){if(this.#r=this.addElement(document.createElement("div")),this.#r.classList.add("responsive-wrapper"),this.options?.colorScheme==="dark"&&this.contentWrapper.classList.add("dark-mode"),this.addCSS(rc),this.options?.cdnForumTweaks&&this.addCSS(TS),this.a=this.querySelector("a"),!this.a)return;let t=RM("",this.a.href),e=this.a?.href,{hostname:i,pathname:r}=new URL(e);if(i!=="alpha.twizzle.net"){this.#e();return}if(["/edit/","/explore/"].includes(r)){let n=r==="/explore/";if(t.puzzle&&!(t.puzzle in Vc)){let a=(await Promise.resolve().then(()=>(Zn(),Kn))).getPuzzleDescriptionString(t.puzzle);delete t.puzzle,t.experimentalPuzzleDescription=a}if(this.twistyPlayer=this.#r.appendChild(new oc({background:this.options?.cdnForumTweaks?"checkered-transparent":"checkered",colorScheme:this.options?.colorScheme==="dark"?"dark":"light",...t,viewerLink:n?"experimental-twizzle-explorer":"auto"})),this.twistyPlayer.fullscreenElement=this.contentWrapper,t.experimentalTitle&&(this.twistyPlayer.experimentalTitle=t.experimentalTitle),this.#i=this.#r.appendChild(document.createElement("div")),this.#i.classList.add("scrollable-region"),t.experimentalTitle&&this.#n(t.experimentalTitle).classList.add("title"),t.experimentalSetupAlg){this.#n("Setup",async()=>(await this.twistyPlayer?.experimentalModel.setupAlg.get())?.alg.toString()??null);let a=this.#i.appendChild(document.createElement("div"));a.classList.add("setup-alg"),a.textContent=new he(t.experimentalSetupAlg).toString()}let s=this.#n("Moves",async()=>(await this.twistyPlayer?.experimentalModel.alg.get())?.alg.toString()??null);this.#s=s.appendChild(AM(this.twistyPlayer.experimentalModel)),this.#s.classList.add("move-count"),this.#i.appendChild(new AS({twistyPlayer:this.twistyPlayer})).part.add("twisty-alg-viewer")}else this.#e()}#n(t,e){let i=this.#i.appendChild(document.createElement("div"));i.classList.add("heading");let r=i.appendChild(document.createElement("span"));if(r.textContent=t,e){r.textContent+=" ";let n=r.appendChild(document.createElement("a"));n.textContent="\u{1F4CB}",n.href="#",n.title="Copy to clipboard";async function s(o){n.textContent=o,await new Promise(a=>setTimeout(a,2e3)),n.textContent===o&&(n.textContent="\u{1F4CB}")}n.addEventListener("click",async o=>{o.preventDefault(),n.textContent="\u{1F4CB}\u2026";let a=await e();if(a)try{await navigator.clipboard.writeText(a),s("\u{1F4CB}\u2705")}catch(l){throw s("\u{1F4CB}\u274C"),l}else s("\u{1F4CB}\u274C")})}return i}};Yt.define("twizzle-link",CM)});var TM=kS(()=>{DS()});TM();})();
