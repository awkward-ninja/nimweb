/* Generated by the Nim Compiler v0.17.0 */
/*   (c) 2017 Andreas Rumpf */

var framePtr = null;
var excHandler = 0;
var lastJSError = null;
if (typeof Int8Array === 'undefined') Int8Array = Array;
if (typeof Int16Array === 'undefined') Int16Array = Array;
if (typeof Int32Array === 'undefined') Int32Array = Array;
if (typeof Uint8Array === 'undefined') Uint8Array = Array;
if (typeof Uint16Array === 'undefined') Uint16Array = Array;
if (typeof Uint32Array === 'undefined') Uint32Array = Array;
if (typeof Float32Array === 'undefined') Float32Array = Array;
if (typeof Float64Array === 'undefined') Float64Array = Array;
var NTI3440 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI104 = {size: 0,kind: 31,base: null,node: null,finalizer: null};
var NTI13009 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI3408 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI138 = {size: 0,kind: 28,base: null,node: null,finalizer: null};
var NTI140 = {size: 0,kind: 29,base: null,node: null,finalizer: null};
var NTI3487 = {size: 0,kind: 22,base: null,node: null,finalizer: null};
var NTI3424 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI3438 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI3442 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NNI3442 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI3442.node = NNI3442;
var NNI3438 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI3438.node = NNI3438;
NTI3487.base = NTI3424;
var NNI3424 = {kind: 2, len: 4, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "parent", len: 0, typ: NTI3487, name: "parent", sons: null}, 
{kind: 1, offset: "name", len: 0, typ: NTI140, name: "name", sons: null}, 
{kind: 1, offset: "message", len: 0, typ: NTI138, name: "msg", sons: null}, 
{kind: 1, offset: "trace", len: 0, typ: NTI138, name: "trace", sons: null}]};
NTI3424.node = NNI3424;
var NNI3408 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI3408.node = NNI3408;
NTI3424.base = NTI3408;
NTI3438.base = NTI3424;
NTI3442.base = NTI3438;
var NNI13009 = {kind: 2, len: 2, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "Field0", len: 0, typ: NTI140, name: "Field0", sons: null}, 
{kind: 1, offset: "Field1", len: 0, typ: NTI104, name: "Field1", sons: null}]};
NTI13009.node = NNI13009;
var NNI3440 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI3440.node = NNI3440;
NTI3440.base = NTI3438;
function makeNimstrLit(c_14003) {

    var ln = c_14003.length;
    var result = new Array(ln + 1);
    var i = 0;
    for (; i < ln; ++i) {
      result[i] = c_14003.charCodeAt(i);
    }
    result[i] = 0; // terminating zero
    return result;
    }
function setConstr() {

      var result = {};
      for (var i = 0; i < arguments.length; ++i) {
        var x = arguments[i];
        if (typeof(x) == "object") {
          for (var j = x[0]; j <= x[1]; ++j) {
            result[j] = true;
          }
        } else {
          result[x] = true;
        }
      }
      return result;
    }
var ConstSet1 = setConstr(17, 16, 4, 18, 27, 19, 23, 22, 21);
function nimCopy(dest_19217, src_19218, ti_19219) {

var result_19629 = null;
switch (ti_19219.kind) {
case 21: case 22: case 23: case 5: if (!(isFatPointer_19201(ti_19219))) {
result_19629 = src_19218;
}
else {
result_19629 = [src_19218[0], src_19218[1]];}


break;
case 19:       if (dest_19217 === null || dest_19217 === undefined) {
        dest_19217 = {};
      }
      else {
        for (var key in dest_19217) { delete dest_19217[key]; }
      }
      for (var key in src_19218) { dest_19217[key] = src_19218[key]; }
      result_19629 = dest_19217;
    
break;
case 18: case 17: if (!((ti_19219.base == null))) {
result_19629 = nimCopy(dest_19217, src_19218, ti_19219.base);
}
else {
if ((ti_19219.kind == 17)) {
result_19629 = (dest_19217 === null || dest_19217 === undefined) ? {m_type: ti_19219} : dest_19217;}
else {
result_19629 = (dest_19217 === null || dest_19217 === undefined) ? {} : dest_19217;}
}
nimCopyAux(result_19629, src_19218, ti_19219.node);

break;
case 24: case 4: case 27: case 16:       if (src_19218 === null) {
        result_19629 = null;
      }
      else {
        if (dest_19217 === null || dest_19217 === undefined) {
          dest_19217 = new Array(src_19218.length);
        }
        else {
          dest_19217.length = src_19218.length;
        }
        result_19629 = dest_19217;
        for (var i = 0; i < src_19218.length; ++i) {
          result_19629[i] = nimCopy(result_19629[i], src_19218[i], ti_19219.base);
        }
      }
    
break;
case 28:       if (src_19218 !== null) {
        result_19629 = src_19218.slice(0);
      }
    
break;
default: 
result_19629 = src_19218;
break;
}
return result_19629;
}
function eqStrings(a_16603, b_16604) {

    if (a_16603 == b_16604) return true;
    if ((!a_16603) || (!b_16604)) return false;
    var alen = a_16603.length;
    if (alen != b_16604.length) return false;
    for (var i = 0; i < alen; ++i)
      if (a_16603[i] != b_16604[i]) return false;
    return true;
  }
function arrayConstr(len_19664, value_19665, typ_19666) {

      var result = new Array(len_19664);
      for (var i = 0; i < len_19664; ++i) result[i] = nimCopy(null, value_19665, typ_19666);
      return result;
    }
function cstrToNimstr(c_14203) {

  var ln = c_14203.length;
  var result = new Array(ln);
  var r = 0;
  for (var i = 0; i < ln; ++i) {
    var ch = c_14203.charCodeAt(i);

    if (ch < 128) {
      result[r] = ch;
    }
    else if((ch > 127) && (ch < 2048)) {
      result[r] = (ch >> 6) | 192;
      ++r;
      result[r] = (ch & 63) | 128;
    }
    else {
      result[r] = (ch >> 12) | 224;
      ++r;
      result[r] = ((ch >> 6) & 63) | 128;
      ++r;
      result[r] = (ch & 63) | 128;
    }
    ++r;
  }
  result[r] = 0; // terminating zero
  return result;
  }
function toJSStr(s_14403) {

    var len = s_14403.length-1;
    var asciiPart = new Array(len);
    var fcc = String.fromCharCode;
    var nonAsciiPart = null;
    var nonAsciiOffset = 0;
    for (var i = 0; i < len; ++i) {
      if (nonAsciiPart !== null) {
        var offset = (i - nonAsciiOffset) * 2;
        var code = s_14403[i].toString(16);
        if (code.length == 1) {
          code = "0"+code;
        }
        nonAsciiPart[offset] = "%";
        nonAsciiPart[offset + 1] = code;
      }
      else if (s_14403[i] < 128)
        asciiPart[i] = fcc(s_14403[i]);
      else {
        asciiPart.length = i;
        nonAsciiOffset = i;
        nonAsciiPart = new Array((len - i) * 2);
        --i;
      }
    }
    asciiPart = asciiPart.join("");
    return (nonAsciiPart === null) ?
        asciiPart : asciiPart + decodeURIComponent(nonAsciiPart.join(""));
  }
function raiseException(e_13406, ename_13407) {

e_13406.name = ename_13407;
if ((excHandler == 0)) {
unhandledException(e_13406);
}

e_13406.trace = nimCopy(null, rawWriteStackTrace_13228(), NTI138);
throw e_13406;}
var nimvm_5887 = false;
var nim_program_result = 0;
var globalRaiseHook_11005 = [null];
var localRaiseHook_11010 = [null];
var outOfMemHook_11013 = [null];
function isFatPointer_19201(ti_19203) {

var result_19204 = false;
BeforeRet: do {
result_19204 = !((ConstSet1[ti_19203.base.kind] != undefined));
break BeforeRet;
} while (false); 
return result_19204;
}
function nimCopyAux(dest_19222, src_19223, n_19225) {

switch (n_19225.kind) {
case 0: 
break;
case 1:       dest_19222[n_19225.offset] = nimCopy(dest_19222[n_19225.offset], src_19223[n_19225.offset], n_19225.typ);
    
break;
case 2: L1: do {
var i_19615 = 0;
var colontmp__19617 = 0;
colontmp__19617 = (n_19225.len - 1);
var res_19620 = 0;
L2: do {
L3: while (true) {
if (!(res_19620 <= colontmp__19617)) break L3;
i_19615 = res_19620;
nimCopyAux(dest_19222, src_19223, n_19225.sons[i_19615]);
res_19620 += 1;
}
} while(false);
} while(false);

break;
case 3:       dest_19222[n_19225.offset] = nimCopy(dest_19222[n_19225.offset], src_19223[n_19225.offset], n_19225.typ);
      for (var i = 0; i < n_19225.sons.length; ++i) {
        nimCopyAux(dest_19222, src_19223, n_19225.sons[i][1]);
      }
    
break;
}
}
function add_11029(x_11032, x_11032_Idx, y_11033) {

        var len = x_11032[0].length-1;
        for (var i = 0; i < y_11033.length; ++i) {
          x_11032[0][len] = y_11033.charCodeAt(i);
          ++len;
        }
        x_11032[0][len] = 0
      }
function auxWriteStackTrace_13004(f_13006) {

var Tmp3;
var result_13007 = [null];
var it_13015 = f_13006;
var i_13016 = 0;
var total_13017 = 0;
var tempFrames_13021 = arrayConstr(64, {Field0: null, Field1: 0}, NTI13009);
L1: do {
L2: while (true) {
if (!!((it_13015 == null))) Tmp3 = false; else {Tmp3 = (i_13016 <= 63); }if (!Tmp3) break L2;
tempFrames_13021[i_13016].Field0 = it_13015.procname;
tempFrames_13021[i_13016].Field1 = it_13015.line;
i_13016 += 1;
total_13017 += 1;
it_13015 = it_13015.prev;
}
} while(false);
L4: do {
L5: while (true) {
if (!!((it_13015 == null))) break L5;
total_13017 += 1;
it_13015 = it_13015.prev;
}
} while(false);
result_13007[0] = nimCopy(null, makeNimstrLit(""), NTI138);
if (!((total_13017 == i_13016))) {
if (result_13007[0] != null) { result_13007[0] = (result_13007[0].slice(0, -1)).concat(makeNimstrLit("(")); } else { result_13007[0] = makeNimstrLit("(");};
if (result_13007[0] != null) { result_13007[0] = (result_13007[0].slice(0, -1)).concat(cstrToNimstr(((total_13017 - i_13016))+"")); } else { result_13007[0] = cstrToNimstr(((total_13017 - i_13016))+"");};
if (result_13007[0] != null) { result_13007[0] = (result_13007[0].slice(0, -1)).concat(makeNimstrLit(" calls omitted) ...\x0A")); } else { result_13007[0] = makeNimstrLit(" calls omitted) ...\x0A");};
}

L6: do {
var j_13215 = 0;
var colontmp__13221 = 0;
colontmp__13221 = (i_13016 - 1);
var res_13224 = colontmp__13221;
L7: do {
L8: while (true) {
if (!(0 <= res_13224)) break L8;
j_13215 = res_13224;
add_11029(result_13007, 0, tempFrames_13021[j_13215].Field0);
if ((0 < tempFrames_13021[j_13215].Field1)) {
if (result_13007[0] != null) { result_13007[0] = (result_13007[0].slice(0, -1)).concat(makeNimstrLit(", line: ")); } else { result_13007[0] = makeNimstrLit(", line: ");};
if (result_13007[0] != null) { result_13007[0] = (result_13007[0].slice(0, -1)).concat(cstrToNimstr((tempFrames_13021[j_13215].Field1)+"")); } else { result_13007[0] = cstrToNimstr((tempFrames_13021[j_13215].Field1)+"");};
}

if (result_13007[0] != null) { result_13007[0] = (result_13007[0].slice(0, -1)).concat(makeNimstrLit("\x0A")); } else { result_13007[0] = makeNimstrLit("\x0A");};
res_13224 -= 1;
}
} while(false);
} while(false);
return result_13007[0];
}
function rawWriteStackTrace_13228() {

var result_13230 = null;
if (!((framePtr == null))) {
result_13230 = nimCopy(null, (makeNimstrLit("Traceback (most recent call last)\x0A").slice(0,-1)).concat(auxWriteStackTrace_13004(framePtr)), NTI138);
}
else {
result_13230 = nimCopy(null, makeNimstrLit("No stack traceback available\x0A"), NTI138);
}

return result_13230;
}
function unhandledException(e_13253) {

var Tmp1;
var buf_13254 = /**/[makeNimstrLit("")];
if (!!(eqStrings(e_13253.message, null))) Tmp1 = false; else {Tmp1 = !((e_13253.message[0] == 0)); }if (Tmp1) {
if (buf_13254[0] != null) { buf_13254[0] = (buf_13254[0].slice(0, -1)).concat(makeNimstrLit("Error: unhandled exception: ")); } else { buf_13254[0] = makeNimstrLit("Error: unhandled exception: ");};
if (buf_13254[0] != null) { buf_13254[0] = (buf_13254[0].slice(0, -1)).concat(e_13253.message); } else { buf_13254[0] = e_13253.message;};
}
else {
if (buf_13254[0] != null) { buf_13254[0] = (buf_13254[0].slice(0, -1)).concat(makeNimstrLit("Error: unhandled exception")); } else { buf_13254[0] = makeNimstrLit("Error: unhandled exception");};
}

if (buf_13254[0] != null) { buf_13254[0] = (buf_13254[0].slice(0, -1)).concat(makeNimstrLit(" [")); } else { buf_13254[0] = makeNimstrLit(" [");};
add_11029(buf_13254, 0, e_13253.name);
if (buf_13254[0] != null) { buf_13254[0] = (buf_13254[0].slice(0, -1)).concat(makeNimstrLit("]\x0A")); } else { buf_13254[0] = makeNimstrLit("]\x0A");};
if (buf_13254[0] != null) { buf_13254[0] = (buf_13254[0].slice(0, -1)).concat(rawWriteStackTrace_13228()); } else { buf_13254[0] = rawWriteStackTrace_13228();};
var cbuf_13401 = toJSStr(buf_13254[0]);
framePtr = null;
  if (typeof(Error) !== "undefined") {
    throw new Error(cbuf_13401);
  }
  else {
    throw cbuf_13401;
  }
  }
function raiseOverflow() {

var e_13840 = null;
e_13840 = {m_type: NTI3442, parent: null, name: null, message: null, trace: null};
e_13840.message = nimCopy(null, makeNimstrLit("over- or underflow"), NTI138);
e_13840.parent = null;
raiseException(e_13840, "OverflowError");
}
function raiseDivByZero() {

var e_13858 = null;
e_13858 = {m_type: NTI3440, parent: null, name: null, message: null, trace: null};
e_13858.message = nimCopy(null, makeNimstrLit("division by zero"), NTI138);
e_13858.parent = null;
raiseException(e_13858, "DivByZeroError");
}
function h_32001(tag_32003) {

var result_32004 = null;
var F={procname:"main.h",prev:framePtr,filename:"main.nim",line:0};
framePtr = F;
F.line = 4;
result_32004 = document.createElement(tag_32003);
F.line = 5;
document.body.appendChild(result_32004);
framePtr = F.prev;
return result_32004;
}
var input1_32005 = h_32001("input");
input1_32005.size = 32;
input1_32005.setAttribute("style", "display: block");
var input2_32008 = h_32001("input");
input2_32008.size = 32;
input2_32008.setAttribute("style", "display: block");
function colonanonymous__32010(event_32012) {

var F={procname:"main.:anonymous",prev:framePtr,filename:"main.nim",line:0};
framePtr = F;
F.line = 16;
input2_32008.value = "YOU PRESSED A KEY";
framePtr = F.prev;
}
onkeydown = colonanonymous__32010;
function colonanonymous__32013(event_32015) {

var F={procname:"main.:anonymous",prev:framePtr,filename:"main.nim",line:0};
framePtr = F;
F.line = 19;
input2_32008.value = "YOU PRESSED A MOUSE";
framePtr = F.prev;
}
onmousedown = colonanonymous__32013;
function greet_32016(msg_32018) {

var F={procname:"main.greet",prev:framePtr,filename:"main.nim",line:0};
framePtr = F;
F.line = 22;
input1_32005.value = toJSStr((cstrToNimstr(msg_32018).slice(0,-1)).concat(makeNimstrLit(" from ").slice(0,-1),cstrToNimstr(location.hostname)));
framePtr = F.prev;
}
function colonanonymous__32019() {

var F={procname:"main.:anonymous",prev:framePtr,filename:"main.nim",line:0};
framePtr = F;
F.line = 25;
greet_32016(window.atob("SGVsbG8gV29ybGQh"));
framePtr = F.prev;
}
window.setTimeout(colonanonymous__32019, 1000);
