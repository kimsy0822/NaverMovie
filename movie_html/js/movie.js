var CONSTANTS={sLoginUrl:"https://nid.naver.com/nidlogin.login?mode=form&url=",sLoginMessage:"로그인이 필요한 서비스입니다.\n로그인 하시겠습니까?",sErrorMessage:"오류가 발생했습니다. 잠시 후 다시 시도해주세요.",sTimeoutMessage:"처리가 지연되고 있습니다. 다시 시도해주세요.",nRecommendScoreNormal:40,nRecommendScoreHigh:75};
if(typeof String.prototype.trim!=="function"){String.prototype.trim=function(){return this.replace(/(^\s*)|(\s*$)/g,"")
}
}common={checkLogin:function(login){if(login==false){if(confirm("로그인이 필요합니다. 로그인 하시겠습니까?")){top.location.href=CONSTANTS.sLoginUrl+encodeURIComponent(top.location.href)
}return false
}return true
},checkRealName:function(realName){if(realName==false){if(confirm("정보통신망법에 따라 게시판에 글 작성 시 실명확인이 필요합니다. 실명확인을 하시겠습니까?")){top.location.href="https://nid.naver.com/cert.nhn?todo=cert_start&rurl="+encodeURIComponent(top.location.href)
}return false
}return true
},report:function(readOnlyService,writerId,encryptedId,title,nid,boardId,login){var url="/movie/board/common/report.nhn";
if(common.checkLogin(login)==false){return
}else{if(typeof readOnlyService!="undefined"&&readOnlyService=="true"){alert("서비스 점검 중입니다.");
return
}else{var reportForm=document.getElementById("reportForm");
var formInput1=common.createReportHiddenParameter("writerId",writerId);
var formInput2=common.createReportHiddenParameter("nid",nid);
var formInput3=common.createReportHiddenParameter("boardId",boardId);
var formInput4=common.createReportHiddenParameter("title",title);
var formInput5=common.createReportHiddenParameter("enc","UTF-8");
var formInput6=common.createReportHiddenParameter("encryptedId",encryptedId);
reportForm.appendChild(formInput1);
reportForm.appendChild(formInput2);
reportForm.appendChild(formInput3);
reportForm.appendChild(formInput4);
reportForm.appendChild(formInput5);
reportForm.appendChild(formInput6);
window.open("","report","status=yes, width=650, height=550");
reportForm.action=url;
reportForm.target="report";
reportForm.submit();
reportForm.removeChild(formInput1);
reportForm.removeChild(formInput2);
reportForm.removeChild(formInput3);
reportForm.removeChild(formInput4);
reportForm.removeChild(formInput5);
reportForm.removeChild(formInput6)
}}},createReportHiddenParameter:function(name,value){var input=document.createElement("input");
input.type="hidden";
input.name=name;
input.value=value;
return input
},calc_strlen:function(str){var len=0;
for(var i=0;
i<str.length;
i++){var n=str.charCodeAt(i);
if((n>=0)&&(n<256)){len++
}else{len+=2
}}return len
},isBlankHTML:function(value){if(value.replace(/<(?!table|img|div|embed|iframe)[^>]*>|&nbsp;|\s*/gi,"")){return false
}return true
},wopen_main:function(url,width,height,top,left){if(top>0){var width1=(screen.width/2)-width+left;
var height1=(screen.height/2)-height+top;
window.open(url,"","status=yes, toolbar=no,directories=no width="+width+" height="+height+" top="+height1+" left= "+width1)
}else{window.open(url,"","status=yes, toolbar=no,directories=no width="+width+" height="+height)
}},rwopen:function(url,width,height){window.open(url,"","status=no, toolbar=no, scrollbars=yes, resizable=yes, width="+width+", height="+height)
},iwopen:function(movieCode){window.open("/movie/bi/mi/photoViewPopup.nhn?movieCode="+movieCode,"photo_slide_view","status=no, toolbar=no, left=0, top=0, resizable=yes, scrollbars=yes")
}};function openNotify(writeAuth,reason){if(writeAuth=="N"){window.open("/notify.nhn","notify","status=no, toolbar=no, resizable=no, scrollbars=no, left=300, top=200, width=500, height=190")
}else{alert(reason)
}}function showMessage(msg){if(msg.trim()!=""){alert(msg)
}};if(typeof window!="undefined"&&window.nhn===undefined){window.nhn={}
}if(typeof window!="undefined"){if(window.jindo===undefined){window.jindo={}
}}else{if(!jindo){jindo={}
}}var _j_ag=navigator.userAgent;
var _JINDO_IS_IE=_j_ag.indexOf("MSIE")>-1;
var _JINDO_IS_FF=_j_ag.indexOf("Firefox")>-1;
var _JINDO_IS_OP=_j_ag.indexOf("Opera")>-1;
var _JINDO_IS_SP=_j_ag.indexOf("Safari")>-1;
var _JINDO_IS_SF=_j_ag.indexOf("Apple")>-1;
var _JINDO_IS_CH=_j_ag.indexOf("Chrome")>-1;
var _JINDO_IS_WK=_j_ag.indexOf("WebKit")>-1;
var _JINDO_IS_MO=/(iPad|Mobile|Android|Nokia|webOS|BlackBerry|Opera Mini)/.test(_j_ag);
jindo.$Jindo=function(){var cl=arguments.callee;
var cc=cl._cached;
if(cc){return cc
}if(!(this instanceof cl)){return new cl()
}if(!cc){cl._cached=this
}this.version="2.1.0"
};
jindo.$Jindo.compatible=function(){return false
};
var _objToString=Object.prototype.toString;
var _slice=Array.prototype.slice;
jindo.$Error=function(sMessage,sMethod){this.message="\tmethod : "+sMethod+"\n\tmessage : "+sMessage;
this.type="Jindo Custom Error";
this.toString=function(){return this.message+"\n\t"+this.type
}
};
jindo.$Except={CANNOT_USE_OPTION:"해당 옵션은 사용할 수 없습니다.",CANNOT_USE_HEADER:"type이 jsonp일때 header메서드는 사용할 수 없습니다.",PARSE_ERROR:"파싱중 에러가 발생했습니다.",NOT_FOUND_ARGUMENT:"파라메터가 없습니다.",NOT_STANDARD_QUERY:"css셀렉터가 정상적이지 않습니다.",INVALID_DATE:"날짜 포멧이 아닙니다.",REQUIRE_AJAX:"가 없습니다.",NOT_FOUND_ELEMENT:"엘리먼트가 없습니다.",HAS_FUNCTION_FOR_GROUP:"그룹으로 지우지 않는 경우 detach할 함수가 있어야 합니다.",NONE_ELEMENT:"에 해당하는 엘리먼트가 없습니다.",NOT_SUPPORT_SELECTOR:"는 지원하지 않는 selector입니다.",NOT_SUPPORT_METHOD:"desktop에서 지원하지 않는 메서드 입니다.",JSON_MUST_HAVE_ARRAY_HASH:"get메서드는 json타입이 hash나 array타입만 가능합니다.",MUST_APPEND_DOM:"document에 붙지 않은 엘리먼트를 기준 엘리먼트로 사용할 수 없습니다.",NOT_USE_CSS:"는 css를 사용 할수 없습니다.",NOT_WORK_DOMREADY:"domready이벤트는 iframe안에서 사용할 수 없습니다."};
function _toArray(aArray){return _slice.apply(aArray)
}try{_slice.apply(document.documentElement.childNodes)
}catch(e){_toArray=function(aArray){var returnArray=[];
var leng=aArray.length;
for(var i=0;
i<leng;
i++){returnArray.push(aArray[i])
}return returnArray
}
}jindo.$Jindo.isNumeric=function(nNum){return !isNaN(parseFloat(nNum))&&!jindo.$Jindo.isArray(nNum)&&isFinite(nNum)
};
(function(){var oType={Element:1,Document:9};
for(var i in oType){jindo.$Jindo["is"+i]=(function(sType,nNodeNumber){return function(oObj){if(new RegExp(sType).test(_objToString.call(oObj))){return true
}else{if(_objToString.call(oObj)=="[object Object]"&&oObj!==null&&oObj!==undefined&&oObj.nodeType==nNodeNumber){return true
}}return false
}
})(i,oType[i])
}var _$type=["Function","Array","String","Boolean","Date","RegExp"];
for(var i=0,l=_$type.length;
i<l;
i++){jindo.$Jindo["is"+_$type[i]]=(function(type){return function(oObj){return _objToString.call(oObj)=="[object "+type+"]"
}
})(_$type[i])
}})();
jindo.$Jindo.isNode=function(eEle){try{return !!(eEle&&eEle.nodeType)
}catch(e){return false
}};
jindo.$Jindo.isHash=function(oObj){return _objToString.call(oObj)=="[object Object]"&&oObj!==null&&oObj!==undefined&&!!!oObj.nodeType&&!jindo.$Jindo.isWindow(oObj)
};
jindo.$Jindo.isNull=function(oObj){return oObj===null
};
jindo.$Jindo.isUndefined=function(oObj){return oObj===undefined
};
jindo.$Jindo.isWindow=function(oObj){return oObj==window||oObj==window.top
};
jindo.$Jindo.Break=function(){if(!(this instanceof arguments.callee)){throw new arguments.callee
}};
jindo.$Jindo.Continue=function(){if(!(this instanceof arguments.callee)){throw new arguments.callee
}};
jindo.$Jindo._F=function(sKeyType){return sKeyType
};
jindo.$Jindo._warn=function(sMessage){window.console&&((console.warn&&console.warn(sMessage),true)||(console.log&&console.log(sMessage),true))
};
jindo.$Jindo._maxWarn=function(nCurrentLength,nMaxLength,sMessage){if(nCurrentLength>nMaxLength){jindo.$Jindo._warn("추가적인 파라메터가 있습니다. : "+sMessage)
}};
jindo.$Jindo.checkVarType=function(aArgs,oRules,sFuncName){var sFuncName=sFuncName||aArgs.callee.name||"anonymous";
var $Jindo=jindo.$Jindo;
var bCompat=$Jindo.compatible();
var fpChecker=aArgs.callee["_checkVarType_"+bCompat];
if(fpChecker){return fpChecker(aArgs,oRules,sFuncName)
}var aPrependCode=[];
aPrependCode.push("var nArgsLen = aArgs.length;");
aPrependCode.push("var $Jindo = jindo.$Jindo;");
if(bCompat){aPrependCode.push("var nMatchScore;");
aPrependCode.push("var nMaxMatchScore = -1;");
aPrependCode.push("var oFinalRet = null;")
}var aBodyCode=[];
var nMaxRuleLen=0;
for(var sType in oRules){if(oRules.hasOwnProperty(sType)){nMaxRuleLen=Math.max(oRules[sType].length,nMaxRuleLen)
}}for(var sType in oRules){if(oRules.hasOwnProperty(sType)){var aRule=oRules[sType];
var nRuleLen=aRule.length;
var aBodyPrependCode=[];
var aBodyIfCode=[];
var aBodyThenCode=[];
if(!bCompat){if(nRuleLen<nMaxRuleLen){aBodyIfCode.push("nArgsLen === "+nRuleLen)
}else{aBodyIfCode.push("nArgsLen >= "+nRuleLen)
}}aBodyThenCode.push("var oRet = new $Jindo._varTypeRetObj();");
var nTypeCount=nRuleLen;
for(var i=0;
i<nRuleLen;
++i){/^([^:]+):([^\+]*)(\+?)$/.test(aRule[i]);
var sVarName=RegExp.$1;
var sVarType=RegExp.$2;
var bAutoCast=RegExp.$3?true:false;
if(sVarType==="Variant"){if(bCompat){aBodyIfCode.push(i+" in aArgs")
}aBodyThenCode.push('oRet["'+sVarName+'"] = aArgs['+i+"];");
nTypeCount--
}else{if($Jindo._varTypeList[sVarType]){var vVar="tmp"+sVarType+"_"+i;
aBodyPrependCode.push("var "+vVar+" = $Jindo._varTypeList."+sVarType+"(aArgs["+i+"], "+bAutoCast+");");
aBodyIfCode.push(vVar+" !== jindo.$Jindo.VARTYPE_NOT_MATCHED");
aBodyThenCode.push('oRet["'+sVarName+'"] = '+vVar+";")
}else{if(/^\$/.test(sVarType)&&jindo[sVarType]){var sOR="";
var sNativeVarType;
if(bAutoCast){sNativeVarType=({$Fn:"Function",$S:"String",$A:"Array",$H:"Hash",$ElementList:"Array"})[sVarType]||sVarType.replace(/^\$/,"");
if(jindo.$Jindo["is"+sNativeVarType]){sOR=" || $Jindo.is"+sNativeVarType+"(vNativeArg_"+i+")"
}}aBodyIfCode.push("(aArgs["+i+"] instanceof jindo."+sVarType+sOR+")");
aBodyThenCode.push('oRet["'+sVarName+'"] = jindo.'+sVarType+"(aArgs["+i+"]);")
}else{if(jindo.$Jindo["is"+sVarType]){var sOR="";
var sWrapedVarType;
if(bAutoCast){sWrapedVarType=({Function:"$Fn",String:"$S",Array:"$A",Hash:"$H"})[sVarType]||"$"+sVarType;
if(jindo[sWrapedVarType]){sOR=" || aArgs["+i+"] instanceof jindo."+sWrapedVarType
}}aBodyIfCode.push("($Jindo.is"+sVarType+"(aArgs["+i+"])"+sOR+")");
aBodyThenCode.push('oRet["'+sVarName+'"] = vNativeArg_'+i+";")
}else{throw new Error("VarType("+sVarType+") Not Found")
}}}}}aBodyThenCode.push('oRet.__type = "'+sType+'";');
if(bCompat){aBodyThenCode.push("nMatchScore = "+(nRuleLen*1000+nTypeCount*10)+" + (nArgsLen === "+nRuleLen+" ? 1 : 0);");
aBodyThenCode.push("if (nMatchScore > nMaxMatchScore) {");
aBodyThenCode.push("	nMaxMatchScore = nMatchScore;");
aBodyThenCode.push("	oFinalRet = oRet;");
aBodyThenCode.push("}")
}else{aBodyThenCode.push("return oRet;")
}aBodyCode.push(aBodyPrependCode.join("\n"));
if(aBodyIfCode.length){aBodyCode.push("if ("+aBodyIfCode.join(" && ")+") {")
}aBodyCode.push(aBodyThenCode.join("\n"));
if(aBodyIfCode.length){aBodyCode.push("}")
}}}aPrependCode.push("	$Jindo._maxWarn(nArgsLen,"+nMaxRuleLen+',"'+sFuncName+'");');
for(var i=0;
i<nMaxRuleLen;
++i){var sArg="aArgs["+i+"]";
aPrependCode.push(["var vNativeArg_",i," = ",sArg," && ",sArg,".$value ? ",sArg,".$value() : ",sArg+";"].join(""))
}if(!bCompat){aBodyCode.push("$Jindo.checkVarType._throwException(aArgs, oRules, sFuncName);")
}aBodyCode.push("return oFinalRet;");
aArgs.callee["_checkVarType_"+bCompat]=fpChecker=new Function("aArgs,oRules,sFuncName",aPrependCode.join("\n")+aBodyCode.join("\n"));
return fpChecker(aArgs,oRules,sFuncName)
};
jindo.$Jindo._varTypeRetObj=function(){};
jindo.$Jindo._varTypeRetObj.prototype.toString=function(){return this.__type
};
jindo.$Jindo.checkVarType._throwException=function(aArgs,oRules,sFuncName){var fpGetType=function(vArg){for(var sKey in jindo){if(jindo.hasOwnProperty(sKey)){var oConstructor=jindo[sKey];
if(typeof oConstructor!=="function"){continue
}if(vArg instanceof oConstructor){return sKey
}}}var $Jindo=jindo.$Jindo;
for(var sKey in $Jindo){if($Jindo.hasOwnProperty(sKey)){if(!/^is(.+)$/.test(sKey)){continue
}var sType=RegExp.$1;
var fpMethod=$Jindo[sKey];
if(fpMethod(vArg)){return sType
}}}return"Unknown"
};
var fpErrorMessage=function(sUsed,aSuggs,sURL){var aMsg=["잘못된 파라미터입니다.",""];
if(sUsed){aMsg.push("호출한 형태 :");
aMsg.push("\t"+sUsed);
aMsg.push("")
}if(aSuggs.length){aMsg.push("사용 가능한 형태 :");
for(var i=0,nLen=aSuggs.length;
i<nLen;
i++){aMsg.push("\t"+aSuggs[i])
}aMsg.push("")
}if(sURL){aMsg.push("매뉴얼 페이지 :");
aMsg.push("\t"+sURL);
aMsg.push("")
}aMsg.unshift();
return aMsg.join("\n")
};
var aArgName=[];
for(var i=0,ic=aArgs.length;
i<ic;
++i){try{aArgName.push(fpGetType(aArgs[i]))
}catch(e){aArgName.push("Unknown")
}}var sUsed=sFuncName+"("+aArgName.join(", ")+")";
var aSuggs=[];
for(var sKey in oRules){if(oRules.hasOwnProperty(sKey)){var aRule=oRules[sKey];
aSuggs.push(""+sFuncName+"("+aRule.join(", ").replace(/(^|,\s)[^:]+:/g,"$1")+")")
}}var sURL;
if(/(\$\w+)(#\w+)?/.test(sFuncName)){sURL="http://jindo.nhncorp.com/docs/jindo/archive/Jindo2-2.1.0/desktop/ko/symbols/"+encodeURIComponent(RegExp.$1)+".html"+RegExp.$2
}throw new TypeError(fpErrorMessage(sUsed,aSuggs,sURL))
};
jindo.$Jindo.varType=function(){var oArgs=this.checkVarType(arguments,{s4str:["sTypeName:String+","fpFunc:Function+"],s4obj:["oTypeLists:Hash+"],g:["sTypeName:String+"]});
var sDenyTypeListComma=jindo.$Jindo._denyTypeListComma;
switch(oArgs+""){case"s4str":var sTypeNameComma=","+oArgs.sTypeName.replace(/\+$/,"")+",";
if(sDenyTypeListComma.indexOf(sTypeNameComma)>-1){throw new Error("Not allowed Variable Type")
}this._varTypeList[oArgs.sTypeName]=oArgs.fpFunc;
return this;
case"s4obj":var oTypeLists=oArgs.oTypeLists;
for(var sTypeName in oTypeLists){if(oTypeLists.hasOwnProperty(sTypeName)){fpFunc=oTypeLists[sTypeName];
arguments.callee.call(this,sTypeName,fpFunc)
}}return this;
case"g":return this._varTypeList[oArgs.sTypeName]
}};
jindo.$Jindo.VARTYPE_NOT_MATCHED={};
(function(){var oVarTypeList=jindo.$Jindo._varTypeList={};
var ___jindo=jindo.$Jindo;
var ___notMatched=___jindo.VARTYPE_NOT_MATCHED;
oVarTypeList.Numeric=function(v){if(___jindo.isNumeric(v)){return v*1
}return ___notMatched
};
oVarTypeList.Hash=function(val,bAutoCast){if(bAutoCast&&jindo.$H&&val instanceof jindo.$H){return val.$value()
}else{if(___jindo.isHash(val)){return val
}}return ___notMatched
};
oVarTypeList["$Class"]=function(val,bAutoCast){if((!___jindo.isFunction(val))||!val.extend){return ___notMatched
}return val
};
var aDenyTypeList=[];
for(var sTypeName in ___jindo){if(___jindo.hasOwnProperty(sTypeName)){if(/^is(.+)$/.test(sTypeName)){aDenyTypeList.push(RegExp.$1)
}}}___jindo._denyTypeListComma=aDenyTypeList.join(",");
___jindo.varType("ArrayStyle",function(val,bAutoCast){if(!val){return ___notMatched
}if(/(Arguments|NodeList|HTMLCollection|global|Window)/.test(_objToString.call(val))||/Object/.test(_objToString.call(val))&&___jindo.isNumeric(val.length)){return _toArray(val)
}return ___notMatched
});
___jindo.varType("Form",function(val,bAutoCast){if(!val){return ___notMatched
}if(bAutoCast&&val.$value){val=val.$value()
}if(val.tagName&&val.tagName.toUpperCase()=="FORM"){return val
}return ___notMatched
})
})();
jindo.$=function(sID){if(!arguments.length){throw new jindo.$Error(jindo.$Except.NOT_FOUND_ARGUMENT,"$")
}var ret=[],arg=arguments,nArgLeng=arg.length,lastArgument=arg[nArgLeng-1],doc=document,el=null;
var reg=/^<([a-z]+|h[1-5])>$/i;
var reg2=/^<([a-z]+|h[1-5])(\s+[^>]+)?>/i;
if(nArgLeng>1&&typeof lastArgument!="string"&&lastArgument.body){arg=Array.prototype.slice.apply(arg,[0,nArgLeng-1]);
doc=lastArgument
}for(var i=0;
i<nArgLeng;
i++){el=arg[i]&&arg[i].$value?arg[i].$value():arg[i];
if(jindo.$Jindo.isString(el)||jindo.$Jindo.isNumeric(el)){el+="";
el=el.replace(/^\s+|\s+$/g,"");
if(el.indexOf("<")>-1){if(reg.test(el)){el=doc.createElement(RegExp.$1)
}else{if(reg2.test(el)){var p={thead:"table",tbody:"table",tr:"tbody",td:"tr",dt:"dl",dd:"dl",li:"ul",legend:"fieldset",option:"select"};
var tag=RegExp.$1.toLowerCase();
var ele=jindo._createEle(p[tag],el,doc);
for(var i=0,leng=ele.length;
i<leng;
i++){ret.push(ele[i])
}el=null
}}}else{el=jindo._getElementById(doc,el)
}}if(el&&el.nodeType){ret[ret.length]=el
}}return ret.length>1?ret:(ret[0]||null)
};
jindo._getElementById=function(doc,id){docEle=doc.documentElement;
var sCheckId="jindo"+(new Date()).getTime();
var eDiv=doc.createElement("div");
eDiv.style.display="none";
eDiv.innerHTML="<input title='jindoCheck' type='input' name='"+sCheckId+"'/>";
docEle.insertBefore(eDiv,docEle.firstChild);
if(doc.getElementById(sCheckId)){jindo._getElementById=function(doc,id){var eId=doc.getElementById(id);
if(eId==null){return eId
}if(eId.attributes.id&&eId.attributes.id.value==id){return eId
}var aEl=doc.all[id];
for(var i=1;
i<aEl.length;
i++){if(aEl[i].attributes.id&&aEl[i].attributes.id.value==id){return aEl[i]
}}}
}else{jindo._getElementById=function(doc,id){return doc.getElementById(id)
}
}return jindo._getElementById(doc,id)
};
jindo._createEle=function(sParentTag,sHTML,oDoc,bWantParent){var sId="R"+new Date().getTime()+parseInt(Math.random()*100000,10);
var oDummy=oDoc.createElement("div");
switch(sParentTag){case"select":case"table":case"dl":case"ul":case"fieldset":oDummy.innerHTML="<"+sParentTag+' class="'+sId+'">'+sHTML+"</"+sParentTag+">";
break;
case"thead":case"tbody":case"col":oDummy.innerHTML="<table><"+sParentTag+' class="'+sId+'">'+sHTML+"</"+sParentTag+"></table>";
break;
case"tr":oDummy.innerHTML='<table><tbody><tr class="'+sId+'">'+sHTML+"</tr></tbody></table>";
break;
default:oDummy.innerHTML='<div class="'+sId+'">'+sHTML+"</div>"
}var oFound;
for(oFound=oDummy.firstChild;
oFound;
oFound=oFound.firstChild){if(oFound.className==sId){break
}}return bWantParent?oFound:oFound.childNodes
};
jindo.$Class=function(oDef){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4obj":["oDef:Hash+"]},"$Class");
function typeClass(){var t=this;
var a=[];
var superFunc=function(m,superClass,func){if(m!="constructor"&&func.toString().indexOf("$super")>-1){var funcArg=func.toString().replace(/function\s*\(([^\)]*)[\w\W]*/g,"$1").split(",");
var funcStr=func.toString().replace(/function[^{]*{/,"").replace(/(\w|\.?)(this\.\$super|this)/g,function(m,m2,m3){if(!m2){return m3+".$super"
}return m
});
funcStr=funcStr.substr(0,funcStr.length-1);
func=superClass[m]=eval("false||function("+funcArg.join(",")+"){"+funcStr+"}")
}return function(){var f=this.$this[m];
var t=this.$this;
var r=(t[m]=func).apply(t,arguments);
t[m]=f;
return r
}
};
while(t._$superClass!==undefined){t.$super=new Object;
t.$super.$this=this;
for(var x in t._$superClass.prototype){if(t._$superClass.prototype.hasOwnProperty(x)){if(this[x]===undefined&&x!="$init"){this[x]=t._$superClass.prototype[x]
}if(x!="constructor"&&x!="_$superClass"&&typeof t._$superClass.prototype[x]=="function"){t.$super[x]=superFunc(x,t._$superClass,t._$superClass.prototype[x])
}else{t.$super[x]=t._$superClass.prototype[x]
}}}if(typeof t.$super.$init=="function"){a[a.length]=t
}t=t.$super
}for(var i=a.length-1;
i>-1;
i--){a[i].$super.$init.apply(a[i].$super,arguments)
}if(typeof this.$init=="function"){this.$init.apply(this,arguments)
}}if(oDef.$static!==undefined){var i=0,x;
for(x in oDef){if(oDef.hasOwnProperty(x)){x=="$static"||i++
}}for(x in oDef.$static){if(oDef.$static.hasOwnProperty(x)){typeClass[x]=oDef.$static[x]
}}if(!i){return oDef.$static
}delete oDef.$static
}typeClass.prototype=oDef;
typeClass.prototype.constructor=typeClass;
typeClass.prototype.kindOf=function(oClass){return _kindOf(this.constructor.prototype,oClass.prototype)
};
typeClass.extend=jindo.$Class.extend;
return typeClass
};
function _kindOf(oThis,oClass){if(oThis!=oClass){if(oThis._$superClass){return _kindOf(oThis._$superClass.prototype,oClass)
}else{return false
}}else{return true
}}jindo.$Class.extend=function(superClass){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4obj":["oDef:$Class"]},"<static> $Class#extend");
this.prototype._$superClass=superClass;
for(var x in superClass){if(superClass.hasOwnProperty(x)){if(x=="prototype"){continue
}this[x]=superClass[x]
}}return this
};
jindo.$$=jindo.cssquery=(function(){var sVersion="3.0";
var debugOption={repeat:1};
var UID=1;
var cost=0;
var validUID={};
var bSupportByClassName=document.getElementsByClassName?true:false;
var safeHTML=false;
var getUID4HTML=function(oEl){var nUID=safeHTML?(oEl._cssquery_UID&&oEl._cssquery_UID[0]):oEl._cssquery_UID;
if(nUID&&validUID[nUID]==oEl){return nUID
}nUID=UID++;
oEl._cssquery_UID=safeHTML?[nUID]:nUID;
validUID[nUID]=oEl;
return nUID
};
function GEBID(oBase,sId,oDoc){if(oBase.nodeType===9||oBase.parentNode&&oBase.parentNode.tagName){return jindo._getElementById(oDoc,sId)
}else{var aEle=oBase.getElementsByTagName("*");
for(var i=0,l=aEle.length;
i<l;
i++){if(aEle[i].id===sId){return aEle[i]
}}}}var getUID4XML=function(oEl){var oAttr=oEl.getAttribute("_cssquery_UID");
var nUID=safeHTML?(oAttr&&oAttr[0]):oAttr;
if(!nUID){nUID=UID++;
oEl.setAttribute("_cssquery_UID",safeHTML?[nUID]:nUID)
}return nUID
};
var getUID=getUID4HTML;
var uniqid=function(sPrefix){return(sPrefix||"")+new Date().getTime()+parseInt(Math.random()*100000000,10)
};
function getElementsByClass(searchClass,node,tag){var classElements=new Array();
if(node==null){node=document
}if(tag==null){tag="*"
}var els=node.getElementsByTagName(tag);
var elsLen=els.length;
var pattern=new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
for(i=0,j=0;
i<elsLen;
i++){if(pattern.test(els[i].className)){classElements[j]=els[i];
j++
}}return classElements
}var getChilds_dontShrink=function(oEl,sTagName,sClassName){if(bSupportByClassName&&sClassName){if(oEl.getElementsByClassName){return oEl.getElementsByClassName(sClassName)
}if(oEl.querySelectorAll){return oEl.querySelectorAll(sClassName)
}return getElementsByClass(sClassName,oEl,sTagName)
}else{if(sTagName=="*"){return oEl.all||oEl.getElementsByTagName(sTagName)
}}return oEl.getElementsByTagName(sTagName)
};
var clearKeys=function(){backupKeys._keys={}
};
var oDocument_dontShrink=document;
var bXMLDocument=false;
var backupKeys=function(sQuery){var oKeys=backupKeys._keys;
sQuery=sQuery.replace(/'(\\'|[^'])*'/g,function(sAll){var uid=uniqid("QUOT");
oKeys[uid]=sAll;
return uid
});
sQuery=sQuery.replace(/"(\\"|[^"])*"/g,function(sAll){var uid=uniqid("QUOT");
oKeys[uid]=sAll;
return uid
});
sQuery=sQuery.replace(/\[(.*?)\]/g,function(sAll,sBody){if(sBody.indexOf("ATTR")==0){return sAll
}var uid="["+uniqid("ATTR")+"]";
oKeys[uid]=sAll;
return uid
});
var bChanged;
do{bChanged=false;
sQuery=sQuery.replace(/\(((\\\)|[^)|^(])*)\)/g,function(sAll,sBody){if(sBody.indexOf("BRCE")==0){return sAll
}var uid="_"+uniqid("BRCE");
oKeys[uid]=sAll;
bChanged=true;
return uid
})
}while(bChanged);
return sQuery
};
var restoreKeys=function(sQuery,bOnlyAttrBrace){var oKeys=backupKeys._keys;
var bChanged;
var rRegex=bOnlyAttrBrace?/(\[ATTR[0-9]+\])/g:/(QUOT[0-9]+|\[ATTR[0-9]+\])/g;
do{bChanged=false;
sQuery=sQuery.replace(rRegex,function(sKey){if(oKeys[sKey]){bChanged=true;
return oKeys[sKey]
}return sKey
})
}while(bChanged);
sQuery=sQuery.replace(/_BRCE[0-9]+/g,function(sKey){return oKeys[sKey]?oKeys[sKey]:sKey
});
return sQuery
};
var restoreString=function(sKey){var oKeys=backupKeys._keys;
var sOrg=oKeys[sKey];
if(!sOrg){return sKey
}return eval(sOrg)
};
var wrapQuot=function(sStr){return'"'+sStr.replace(/"/g,'\\"')+'"'
};
var getStyleKey=function(sKey){if(/^@/.test(sKey)){return sKey.substr(1)
}return null
};
var getCSS=function(oEl,sKey){if(oEl.currentStyle){if(sKey=="float"){sKey="styleFloat"
}return oEl.currentStyle[sKey]||oEl.style[sKey]
}else{if(window.getComputedStyle){return oDocument_dontShrink.defaultView.getComputedStyle(oEl,null).getPropertyValue(sKey.replace(/([A-Z])/g,"-$1").toLowerCase())||oEl.style[sKey]
}}if(sKey=="float"&&_JINDO_IS_IE){sKey="styleFloat"
}return oEl.style[sKey]
};
var oCamels={accesskey:"accessKey",cellspacing:"cellSpacing",cellpadding:"cellPadding","class":"className",colspan:"colSpan","for":"htmlFor",maxlength:"maxLength",readonly:"readOnly",rowspan:"rowSpan",tabindex:"tabIndex",valign:"vAlign"};
var getDefineCode=function(sKey){var sVal;
var sStyleKey;
if(bXMLDocument){sVal='oEl.getAttribute("'+sKey+'",2)'
}else{if(sStyleKey=getStyleKey(sKey)){sKey="$$"+sStyleKey;
sVal='getCSS(oEl, "'+sStyleKey+'")'
}else{switch(sKey){case"checked":sVal='oEl.checked + ""';
break;
case"disabled":sVal='oEl.disabled + ""';
break;
case"enabled":sVal='!oEl.disabled + ""';
break;
case"readonly":sVal='oEl.readOnly + ""';
break;
case"selected":sVal='oEl.selected + ""';
break;
default:if(oCamels[sKey]){sVal="oEl."+oCamels[sKey]
}else{sVal='oEl.getAttribute("'+sKey+'",2)'
}}}}return"_"+sKey.replace(/\-/g,"_")+" = "+sVal
};
var getReturnCode=function(oExpr){var sStyleKey=getStyleKey(oExpr.key);
var sVar="_"+(sStyleKey?"$$"+sStyleKey:oExpr.key);
sVar=sVar.replace(/\-/g,"_");
var sVal=oExpr.val?wrapQuot(oExpr.val):"";
switch(oExpr.op){case"~=":return"("+sVar+' && (" " + '+sVar+' + " ").indexOf(" " + '+sVal+' + " ") > -1)';
case"^=":return"("+sVar+" && "+sVar+".indexOf("+sVal+") == 0)";
case"$=":return"("+sVar+" && "+sVar+".substr("+sVar+".length - "+oExpr.val.length+") == "+sVal+")";
case"*=":return"("+sVar+" && "+sVar+".indexOf("+sVal+") > -1)";
case"!=":return"("+sVar+" != "+sVal+")";
case"=":return"("+sVar+" == "+sVal+")"
}return"("+sVar+")"
};
var getNodeIndex=function(oEl){var nUID=getUID(oEl);
var nIndex=oNodeIndexes[nUID]||0;
if(nIndex==0){for(var oSib=(oEl.parentNode||oEl._IE5_parentNode).firstChild;
oSib;
oSib=oSib.nextSibling){if(oSib.nodeType!=1){continue
}nIndex++;
setNodeIndex(oSib,nIndex)
}nIndex=oNodeIndexes[nUID]
}return nIndex
};
var oNodeIndexes={};
var setNodeIndex=function(oEl,nIndex){var nUID=getUID(oEl);
oNodeIndexes[nUID]=nIndex
};
var unsetNodeIndexes=function(){setTimeout(function(){oNodeIndexes={}
},0)
};
var oPseudoes_dontShrink={contains:function(oEl,sOption){return(oEl.innerText||oEl.textContent||"").indexOf(sOption)>-1
},"last-child":function(oEl,sOption){for(oEl=oEl.nextSibling;
oEl;
oEl=oEl.nextSibling){if(oEl.nodeType==1){return false
}}return true
},"first-child":function(oEl,sOption){for(oEl=oEl.previousSibling;
oEl;
oEl=oEl.previousSibling){if(oEl.nodeType==1){return false
}}return true
},"only-child":function(oEl,sOption){var nChild=0;
for(var oChild=(oEl.parentNode||oEl._IE5_parentNode).firstChild;
oChild;
oChild=oChild.nextSibling){if(oChild.nodeType==1){nChild++
}if(nChild>1){return false
}}return nChild?true:false
},empty:function(oEl,_){return oEl.firstChild?false:true
},"nth-child":function(oEl,nMul,nAdd){var nIndex=getNodeIndex(oEl);
return nIndex%nMul==nAdd
},"nth-last-child":function(oEl,nMul,nAdd){var oLast=(oEl.parentNode||oEl._IE5_parentNode).lastChild;
for(;
oLast;
oLast=oLast.previousSibling){if(oLast.nodeType==1){break
}}var nTotal=getNodeIndex(oLast);
var nIndex=getNodeIndex(oEl);
var nLastIndex=nTotal-nIndex+1;
return nLastIndex%nMul==nAdd
},checked:function(oEl){return !!oEl.checked
},selected:function(oEl){return !!oEl.selected
},enabled:function(oEl){return !oEl.disabled
},disabled:function(oEl){return !!oEl.disabled
}};
var getExpression=function(sBody){var oRet={defines:"",returns:"true"};
var sBody=restoreKeys(sBody,true);
var aExprs=[];
var aDefineCode=[],aReturnCode=[];
var sId,sTagName;
var sBody=sBody.replace(/:([\w-]+)(\(([^)]*)\))?/g,function(_1,sType,_2,sOption){switch(sType){case"not":var oInner=getExpression(sOption);
var sFuncDefines=oInner.defines;
var sFuncReturns=oInner.returnsID+oInner.returnsTAG+oInner.returns;
aReturnCode.push("!(function() { "+sFuncDefines+" return "+sFuncReturns+" })()");
break;
case"nth-child":case"nth-last-child":sOption=restoreString(sOption);
if(sOption=="even"){sOption="2n"
}else{if(sOption=="odd"){sOption="2n+1"
}}var nMul,nAdd;
var matchstr=sOption.match(/([0-9]*)n([+-][0-9]+)*/);
if(matchstr){nMul=matchstr[1]||1;
nAdd=matchstr[2]||0
}else{nMul=Infinity;
nAdd=parseInt(sOption,10)
}aReturnCode.push("oPseudoes_dontShrink["+wrapQuot(sType)+"](oEl, "+nMul+", "+nAdd+")");
break;
case"first-of-type":case"last-of-type":sType=(sType=="first-of-type"?"nth-of-type":"nth-last-of-type");
sOption=1;
case"nth-of-type":case"nth-last-of-type":sOption=restoreString(sOption);
if(sOption=="even"){sOption="2n"
}else{if(sOption=="odd"){sOption="2n+1"
}}var nMul,nAdd;
if(/([0-9]*)n([+-][0-9]+)*/.test(sOption)){nMul=parseInt(RegExp.$1,10)||1;
nAdd=parseInt(RegExp.$2,20)||0
}else{nMul=Infinity;
nAdd=parseInt(sOption,10)
}oRet.nth=[nMul,nAdd,sType];
break;
default:sOption=sOption?restoreString(sOption):"";
aReturnCode.push("oPseudoes_dontShrink["+wrapQuot(sType)+"](oEl, "+wrapQuot(sOption)+")")
}return""
});
var sBody=sBody.replace(/\[(@?[\w-]+)(([!^~$*]?=)([^\]]*))?\]/g,function(_1,sKey,_2,sOp,sVal){sKey=restoreString(sKey);
sVal=restoreString(sVal);
if(sKey=="checked"||sKey=="disabled"||sKey=="enabled"||sKey=="readonly"||sKey=="selected"){if(!sVal){sOp="=";
sVal="true"
}}aExprs.push({key:sKey,op:sOp,val:sVal});
return""
});
var sClassName=null;
var sBody=sBody.replace(/\.([\w-]+)/g,function(_,sClass){aExprs.push({key:"class",op:"~=",val:sClass});
if(!sClassName){sClassName=sClass
}return""
});
var sBody=sBody.replace(/#([\w-]+)/g,function(_,sIdValue){if(bXMLDocument){aExprs.push({key:"id",op:"=",val:sIdValue})
}else{sId=sIdValue
}return""
});
sTagName=sBody=="*"?"":sBody;
var oVars={};
for(var i=0,oExpr;
oExpr=aExprs[i];
i++){var sKey=oExpr.key;
if(!oVars[sKey]){aDefineCode.push(getDefineCode(sKey))
}aReturnCode.unshift(getReturnCode(oExpr));
oVars[sKey]=true
}if(aDefineCode.length){oRet.defines="var "+aDefineCode.join(",")+";"
}if(aReturnCode.length){oRet.returns=aReturnCode.join("&&")
}oRet.quotID=sId?wrapQuot(sId):"";
oRet.quotTAG=sTagName?wrapQuot(bXMLDocument?sTagName:sTagName.toUpperCase()):"";
if(bSupportByClassName){oRet.quotCLASS=sClassName?wrapQuot(sClassName):""
}oRet.returnsID=sId?"oEl.id == "+oRet.quotID+" && ":"";
oRet.returnsTAG=sTagName&&sTagName!="*"?"oEl.tagName == "+oRet.quotTAG+" && ":"";
return oRet
};
var splitToParts=function(sQuery){var aParts=[];
var sRel=" ";
var sBody=sQuery.replace(/(.*?)\s*(!?[+>~ ]|!)\s*/g,function(_,sBody,sRelative){if(sBody){aParts.push({rel:sRel,body:sBody})
}sRel=sRelative.replace(/\s+$/g,"")||" ";
return""
});
if(sBody){aParts.push({rel:sRel,body:sBody})
}return aParts
};
var isNth_dontShrink=function(oEl,sTagName,nMul,nAdd,sDirection){var nIndex=0;
for(var oSib=oEl;
oSib;
oSib=oSib[sDirection]){if(oSib.nodeType==1&&(!sTagName||sTagName==oSib.tagName)){nIndex++
}}return nIndex%nMul==nAdd
};
var compileParts=function(aParts){var aPartExprs=[];
for(var i=0,oPart;
oPart=aParts[i];
i++){aPartExprs.push(getExpression(oPart.body))
}var sFunc="";
var sPushCode="aRet.push(oEl); if (oOptions.single) { bStop = true; }";
for(var i=aParts.length-1,oPart;
oPart=aParts[i];
i--){var oExpr=aPartExprs[i];
var sPush=(debugOption.callback?"cost++;":"")+oExpr.defines;
var sReturn="if (bStop) {"+(i==0?"return aRet;":"return;")+"}";
if(oExpr.returns=="true"){sPush+=(sFunc?sFunc+"(oEl);":sPushCode)+sReturn
}else{sPush+="if ("+oExpr.returns+") {"+(sFunc?sFunc+"(oEl);":sPushCode)+sReturn+"}"
}var sCheckTag="oEl.nodeType != 1";
if(oExpr.quotTAG){sCheckTag="oEl.tagName != "+oExpr.quotTAG
}var sTmpFunc="(function(oBase"+(i==0?", oOptions) { var bStop = false; var aRet = [];":") {");
if(oExpr.nth){sPush="if (isNth_dontShrink(oEl, "+(oExpr.quotTAG?oExpr.quotTAG:"false")+","+oExpr.nth[0]+","+oExpr.nth[1]+',"'+(oExpr.nth[2]=="nth-of-type"?"previousSibling":"nextSibling")+'")) {'+sPush+"}"
}switch(oPart.rel){case" ":if(oExpr.quotID){sTmpFunc+="var oEl = GEBID(oBase,"+oExpr.quotID+",oDocument_dontShrink);var oCandi = oEl;for (; oCandi; oCandi = (oCandi.parentNode || oCandi._IE5_parentNode)) {if (oCandi == oBase) break;}if (!oCandi || "+sCheckTag+") return aRet;"+sPush
}else{sTmpFunc+="var aCandi = getChilds_dontShrink(oBase, "+(oExpr.quotTAG||'"*"')+", "+(oExpr.quotCLASS||"null")+");for (var i = 0, oEl; oEl = aCandi[i]; i++) {"+(oExpr.quotCLASS?"if ("+sCheckTag+") continue;":"")+sPush+"}"
}break;
case">":if(oExpr.quotID){sTmpFunc+="var oEl = GEBID(oBase,"+oExpr.quotID+",oDocument_dontShrink);if ((oEl.parentNode || oEl._IE5_parentNode) != oBase || "+sCheckTag+") return aRet;"+sPush
}else{sTmpFunc+="for (var oEl = oBase.firstChild; oEl; oEl = oEl.nextSibling) {if ("+sCheckTag+") { continue; }"+sPush+"}"
}break;
case"+":if(oExpr.quotID){sTmpFunc+="var oEl = GEBID(oBase,"+oExpr.quotID+",oDocument_dontShrink);var oPrev;for (oPrev = oEl.previousSibling; oPrev; oPrev = oPrev.previousSibling) { if (oPrev.nodeType == 1) break; }if (!oPrev || oPrev != oBase || "+sCheckTag+") return aRet;"+sPush
}else{sTmpFunc+="for (var oEl = oBase.nextSibling; oEl; oEl = oEl.nextSibling) { if (oEl.nodeType == 1) break; }if (!oEl || "+sCheckTag+") { return aRet; }"+sPush
}break;
case"~":if(oExpr.quotID){sTmpFunc+="var oEl = GEBID(oBase,"+oExpr.quotID+",oDocument_dontShrink);var oCandi = oEl;for (; oCandi; oCandi = oCandi.previousSibling) { if (oCandi == oBase) break; }if (!oCandi || "+sCheckTag+") return aRet;"+sPush
}else{sTmpFunc+="for (var oEl = oBase.nextSibling; oEl; oEl = oEl.nextSibling) {if ("+sCheckTag+") { continue; }if (!markElement_dontShrink(oEl, "+i+")) { break; }"+sPush+"}"
}break;
case"!":if(oExpr.quotID){sTmpFunc+="var oEl = GEBID(oBase,"+oExpr.quotID+",oDocument_dontShrink);for (; oBase; oBase = (oBase.parentNode || oBase._IE5_parentNode)) { if (oBase == oEl) break; }if (!oBase || "+sCheckTag+") return aRet;"+sPush
}else{sTmpFunc+="for (var oEl = (oBase.parentNode || oBase._IE5_parentNode); oEl; oEl = (oEl.parentNode || oEl._IE5_parentNode)) {if ("+sCheckTag+") { continue; }"+sPush+"}"
}break;
case"!>":if(oExpr.quotID){sTmpFunc+="var oEl = GEBID(oBase,"+oExpr.quotID+",oDocument_dontShrink);var oRel = (oBase.parentNode || oBase._IE5_parentNode);if (!oRel || oEl != oRel || ("+sCheckTag+")) return aRet;"+sPush
}else{sTmpFunc+="var oEl = (oBase.parentNode || oBase._IE5_parentNode);if (!oEl || "+sCheckTag+") { return aRet; }"+sPush
}break;
case"!+":if(oExpr.quotID){sTmpFunc+="var oEl = GEBID(oBase,"+oExpr.quotID+",oDocument_dontShrink);var oRel;for (oRel = oBase.previousSibling; oRel; oRel = oRel.previousSibling) { if (oRel.nodeType == 1) break; }if (!oRel || oEl != oRel || ("+sCheckTag+")) return aRet;"+sPush
}else{sTmpFunc+="for (oEl = oBase.previousSibling; oEl; oEl = oEl.previousSibling) { if (oEl.nodeType == 1) break; }if (!oEl || "+sCheckTag+") { return aRet; }"+sPush
}break;
case"!~":if(oExpr.quotID){sTmpFunc+="var oEl = GEBID(oBase,"+oExpr.quotID+",oDocument_dontShrink);var oRel;for (oRel = oBase.previousSibling; oRel; oRel = oRel.previousSibling) { if (oRel.nodeType != 1) { continue; }if (oRel == oEl) { break; }}if (!oRel || ("+sCheckTag+")) return aRet;"+sPush
}else{sTmpFunc+="for (oEl = oBase.previousSibling; oEl; oEl = oEl.previousSibling) {if ("+sCheckTag+") { continue; }if (!markElement_dontShrink(oEl, "+i+")) { break; }"+sPush+"}"
}}sTmpFunc+=(i==0?"return aRet;":"")+"})";
sFunc=sTmpFunc
}eval("var fpCompiled = "+sFunc+";");
return fpCompiled
};
var parseQuery=function(sQuery){var sCacheKey=sQuery;
var fpSelf=arguments.callee;
var fpFunction=fpSelf._cache[sCacheKey];
if(!fpFunction){sQuery=backupKeys(sQuery);
var aParts=splitToParts(sQuery);
fpFunction=fpSelf._cache[sCacheKey]=compileParts(aParts);
fpFunction.depth=aParts.length
}return fpFunction
};
parseQuery._cache={};
var parseTestQuery=function(sQuery){var fpSelf=arguments.callee;
var aSplitQuery=backupKeys(sQuery).split(/\s*,\s*/);
var aResult=[];
var nLen=aSplitQuery.length;
var aFunc=[];
for(var i=0;
i<nLen;
i++){aFunc.push((function(sQuery){var sCacheKey=sQuery;
var fpFunction=fpSelf._cache[sCacheKey];
if(!fpFunction){sQuery=backupKeys(sQuery);
var oExpr=getExpression(sQuery);
eval("fpFunction = function(oEl) { "+oExpr.defines+"return ("+oExpr.returnsID+oExpr.returnsTAG+oExpr.returns+"); };")
}return fpFunction
})(restoreKeys(aSplitQuery[i])))
}return aFunc
};
parseTestQuery._cache={};
var distinct=function(aList){var aDistinct=[];
var oDummy={};
for(var i=0,oEl;
oEl=aList[i];
i++){var nUID=getUID(oEl);
if(oDummy[nUID]){continue
}aDistinct.push(oEl);
oDummy[nUID]=true
}return aDistinct
};
var markElement_dontShrink=function(oEl,nDepth){var nUID=getUID(oEl);
if(cssquery._marked[nDepth][nUID]){return false
}cssquery._marked[nDepth][nUID]=true;
return true
};
var oResultCache=null;
var bUseResultCache=false;
var bExtremeMode=false;
var old_cssquery=function(sQuery,oParent,oOptions){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["sQuery:String+"],"4var":["sQuery:String+","oParent:Variant"],"4var2":["sQuery:String+","oParent:Variant","oOptions:Variant"]},"cssquery");
oParent=oParent&&oParent.$value?oParent.$value():oParent;
oOptions=oOptions&&oOptions.$value?oOptions.$value():oOptions;
if(jindo.$Jindo.isString(oParent)){try{oParent=document.getElementById(oParent)
}catch(e){oParent=document
}}if(!oParent){oParent=document
}oParent=oParent||oParent.ownerDocument||oParent.document;
if(typeof sQuery=="object"){var oResult={};
for(var k in sQuery){if(sQuery.hasOwnProperty(k)){oResult[k]=arguments.callee(sQuery[k],oParent,oOptions)
}}return oResult
}cost=0;
var executeTime=new Date().getTime();
var aRet;
for(var r=0,rp=debugOption.repeat;
r<rp;
r++){aRet=(function(sQuery,oParent,oOptions){if(oOptions){if(!oOptions.oneTimeOffCache){oOptions.oneTimeOffCache=false
}}else{oOptions={oneTimeOffCache:false}
}cssquery.safeHTML(oOptions.oneTimeOffCache);
if(!oParent){oParent=document
}oDocument_dontShrink=oParent.ownerDocument||oParent.document||oParent;
if(/\bMSIE\s([0-9]+(\.[0-9]+)*);/.test(_j_ag)&&parseFloat(RegExp.$1,10)<6){try{oDocument_dontShrink.location
}catch(e){oDocument_dontShrink=document
}oDocument_dontShrink.firstChild=oDocument_dontShrink.getElementsByTagName("html")[0];
oDocument_dontShrink.firstChild._IE5_parentNode=oDocument_dontShrink
}bXMLDocument=(typeof XMLDocument!=="undefined")?(oDocument_dontShrink.constructor===XMLDocument):(!oDocument_dontShrink.location);
getUID=bXMLDocument?getUID4XML:getUID4HTML;
clearKeys();
var aSplitQuery=backupKeys(sQuery).split(/\s*,\s*/);
var aResult=[];
var nLen=aSplitQuery.length;
for(var i=0;
i<nLen;
i++){aSplitQuery[i]=restoreKeys(aSplitQuery[i])
}for(var i=0;
i<nLen;
i++){var sSingleQuery=aSplitQuery[i];
var aSingleQueryResult=null;
var sResultCacheKey=sSingleQuery+(oOptions.single?"_single":"");
var aCache=bUseResultCache?oResultCache[sResultCacheKey]:null;
if(aCache){for(var j=0,oCache;
oCache=aCache[j];
j++){if(oCache.parent==oParent){aSingleQueryResult=oCache.result;
break
}}}if(!aSingleQueryResult){var fpFunction=parseQuery(sSingleQuery);
cssquery._marked=[];
for(var j=0,nDepth=fpFunction.depth;
j<nDepth;
j++){cssquery._marked.push({})
}aSingleQueryResult=distinct(fpFunction(oParent,oOptions));
if(bUseResultCache&&!oOptions.oneTimeOffCache){if(!(oResultCache[sResultCacheKey] instanceof Array)){oResultCache[sResultCacheKey]=[]
}oResultCache[sResultCacheKey].push({parent:oParent,result:aSingleQueryResult})
}}aResult=aResult.concat(aSingleQueryResult)
}unsetNodeIndexes();
return aResult
})(sQuery,oParent,oOptions)
}executeTime=new Date().getTime()-executeTime;
if(debugOption.callback){debugOption.callback(sQuery,cost,executeTime)
}return aRet
};
var cssquery;
if(document.querySelectorAll){function _isNonStandardQueryButNotException(sQuery){return/\[\s*(?:checked|selected|disabled)/.test(sQuery)
}function _commaRevise(sQuery,sChange){return sQuery.replace(/\,/gi,sChange)
}function _startCombinator(sQuery){return/^[~>+]/.test(sQuery)
}var _div=document.createElement("div");
cssquery=function(sQuery,oParent,oOptions){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["sQuery:String+"],"4var":["sQuery:String+","oParent:Variant"],"4var2":["sQuery:String+","oParent:Variant","oOptions:Variant"]},"cssquery");
oParent=oParent&&oParent.$value?oParent.$value():oParent;
oOptions=oOptions&&oOptions.$value?oOptions.$value():oOptions;
if(jindo.$Jindo.isString(oParent)){oParent=document.getElementById(oParent)
}var sTempId,aRet;
if(!oParent){oParent=document
}oParent=oParent||oParent.ownerDocument||oParent.document;
var nNodeType=oParent.nodeType;
var oldID,oOldParent,id,_clone;
try{if(_isNonStandardQueryButNotException(sQuery)){return old_cssquery(sQuery,oParent,oOptions)
}var sTagName=(oParent.tagName||"").toUpperCase();
if(nNodeType!==9&&sTagName!="HTML"){if(nNodeType===11){oParent=oParent.cloneNode(true);
_clone=_div.cloneNode(true);
_clone.appendChild(oParent);
oParent=_clone;
_clone=null
}if(oParent.id){oldID=oParent.id
}oParent.setAttribute("id",("C"+new Date().getTime()+Math.floor(Math.random()*1000000)));
if(sTagName==="BODY"||jindo.$Element._contain((oParent.ownerDocument||oParent.document).body,oParent)){id=oParent.id;
var _parent=oParent.parentNode;
oOldParent=oParent;
oParent=_parent
}else{_clone=_div.cloneNode(true);
id=oParent.id;
oOldParent=oParent;
_clone.appendChild(oOldParent);
oParent=_clone
}sQuery=_commaRevise("#"+id+" "+sQuery,", #"+id)
}else{oParent=(oParent.ownerDocument||oParent.document||oParent);
if(_startCombinator(sQuery)){return[]
}}if(oOptions&&oOptions.single){aRet=[oParent.querySelector(sQuery)]
}else{aRet=_toArray(oParent.querySelectorAll(sQuery))
}}catch(e){aRet=old_cssquery(sQuery,oParent,oOptions)
}if(oOldParent){if(oldID){oOldParent.id=oldID
}else{oOldParent.removeAttribute("id")
}_clone=null
}return aRet
}
}else{cssquery=old_cssquery
}cssquery.test=function(oEl,sQuery){clearKeys();
try{var oArgs=jindo.$Jindo.checkVarType(arguments,{"4ele":["oEl:Element+","sQuery:String+"],"4doc":["oEl:Document+","sQuery:String+"]},"<static> cssquery#test");
eEl=oArgs.oEl;
sQuery=oArgs.sQuery
}catch(e){return false
}var aFunc=parseTestQuery(sQuery);
for(var i=0,nLen=aFunc.length;
i<nLen;
i++){if(aFunc[i](oEl)){return true
}}return false
};
cssquery.useCache=function(bFlag){if(bFlag!==undefined){bUseResultCache=bFlag;
cssquery.clearCache()
}return bUseResultCache
};
cssquery.clearCache=function(){oResultCache={}
};
cssquery.getSingle=function(sQuery,oParent,oOptions){oOptions=oOptions&&oOptions.$value?oOptions.$value():oOptions;
return cssquery(sQuery,oParent,{single:true,oneTimeOffCache:oOptions?(!!oOptions.oneTimeOffCache):false})[0]||null
};
cssquery.xpath=function(sXPath,oParent){sXPath=sXPath&&sXPath.$value?sXPath.$value():sXPath;
sXPath=sXPath.replace(/\/(\w+)(\[([0-9]+)\])?/g,function(_1,sTag,_2,sTh){sTh=sTh||"1";
return">"+sTag+":nth-of-type("+sTh+")"
});
return old_cssquery(sXPath,oParent)
};
cssquery.debug=function(fpCallback,nRepeat){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4fun":["fpCallback:Function+"],"4fun2":["fpCallback:Function+","nRepeat:Numeric"]},"<static> cssquery#debug");
debugOption.callback=oArgs.fpCallback;
debugOption.repeat=oArgs.nRepeat||1
};
cssquery.safeHTML=function(bFlag){if(arguments.length>0){safeHTML=bFlag&&_JINDO_IS_IE
}return safeHTML||!_JINDO_IS_IE
};
cssquery.version=sVersion;
cssquery.release=function(){if(_JINDO_IS_IE){delete validUID;
validUID={};
if(bUseResultCache){cssquery.clearCache()
}}};
cssquery._getCacheInfo=function(){return{uidCache:validUID,eleCache:oResultCache}
};
cssquery._resetUID=function(){UID=0
};
cssquery.extreme=function(bExtreme){if(arguments.length==0){bExtreme=true
}bExtremeMode=bExtreme
};
return cssquery
})();
jindo.$Agent=function(){var cl=arguments.callee;
var cc=cl._cached;
if(cc){return cc
}if(!(this instanceof cl)){return new cl
}if(!cc){cl._cached=this
}this._navigator=navigator;
this._dm=document.documentMode
};
jindo.$Agent.prototype.navigator=function(){var info={},ver=-1,nativeVersion=-1,u=this._navigator.userAgent,v=this._navigator.vendor||"",dm=this._dm;
function f(s,h){return((h||"").indexOf(s)>-1)
}info.getName=function(){var name="";
for(var x in info){if(typeof info[x]=="boolean"&&info[x]&&info.hasOwnProperty(x)){name=x
}}return name
};
info.webkit=f("WebKit",u);
info.opera=(window.opera!==undefined)||f("Opera",u);
info.ie=!info.opera&&(f("MSIE",u)||f("Trident",u));
info.chrome=info.webkit&&f("Chrome",u);
info.safari=info.webkit&&!info.chrome&&f("Apple",v);
info.firefox=f("Firefox",u);
info.mozilla=f("Gecko",u)&&!info.safari&&!info.chrome&&!info.firefox&&!info.ie;
info.camino=f("Camino",v);
info.netscape=f("Netscape",u);
info.omniweb=f("OmniWeb",u);
info.icab=f("iCab",v);
info.konqueror=f("KDE",v);
info.mobile=(f("Mobile",u)||f("Android",u)||f("Nokia",u)||f("webOS",u)||f("Opera Mini",u)||f("BlackBerry",u)||(f("Windows",u)&&f("PPC",u))||f("Smartphone",u)||f("IEMobile",u))&&!f("iPad",u);
info.msafari=(!f("IEMobile",u)&&f("Mobile",u))||(f("iPad",u)&&f("Safari",u));
info.mopera=f("Opera Mini",u);
info.mie=f("PPC",u)||f("Smartphone",u)||f("IEMobile",u);
try{if(info.ie){if(dm>0){ver=dm;
if(u.match(/(?:Trident)\/([0-9.]+)/)){var nTridentNum=parseFloat(RegExp.$1,10);
if(nTridentNum>3){nativeVersion=nTridentNum+4
}}else{nativeVersion=ver
}}else{nativeVersion=ver=u.match(/(?:MSIE) ([0-9.]+)/)[1]
}}else{if(info.safari||info.msafari){ver=parseFloat(u.match(/Safari\/([0-9.]+)/)[1]);
if(ver==100){ver=1.1
}else{if(u.match(/Version\/([0-9.]+)/)){ver=RegExp.$1
}else{ver=[1,1.2,-1,1.3,2,3][Math.floor(ver/100)]
}}}else{if(info.mopera){ver=u.match(/(?:Opera\sMini)\/([0-9.]+)/)[1]
}else{if(info.firefox||info.opera||info.omniweb){ver=u.match(/(?:Firefox|Opera|OmniWeb)\/([0-9.]+)/)[1]
}else{if(info.mozilla){ver=u.match(/rv:([0-9.]+)/)[1]
}else{if(info.icab){ver=u.match(/iCab[ \/]([0-9.]+)/)[1]
}else{if(info.chrome){ver=u.match(/Chrome[ \/]([0-9.]+)/)[1]
}}}}}}}info.version=parseFloat(ver);
info.nativeVersion=parseFloat(nativeVersion);
if(isNaN(info.version)){info.version=-1
}}catch(e){info.version=-1
}this.navigator=function(){return info
};
return info
};
jindo.$Agent.prototype.os=function(){var info={};
var u=this._navigator.userAgent;
var p=this._navigator.platform;
var f=function(s,h){return(h.indexOf(s)>-1)
};
info.getName=function(){var name="";
for(x in info){if(info[x]===true&&info.hasOwnProperty(x)){name=x
}}return name
};
info.win=f("Win",p);
info.mac=f("Mac",p);
info.linux=f("Linux",p);
info.win2000=info.win&&(f("NT 5.0",u)||f("2000",u));
info.winxp=info.win&&f("NT 5.1",u);
info.xpsp2=info.winxp&&f("SV1",u);
info.vista=info.win&&f("NT 6.0",u);
info.win7=info.win&&f("NT 6.1",u);
info.ipad=f("iPad",u);
info.iphone=f("iPhone",u)&&!info.ipad;
info.android=f("Android",u);
info.nokia=f("Nokia",u);
info.webos=f("webOS",u);
info.blackberry=f("BlackBerry",u);
info.mwin=f("PPC",u)||f("Smartphone",u)||f("IEMobile",u);
this.os=function(){return info
};
return info
};
jindo.$Agent.prototype.flash=function(){var info={};
var p=this._navigator.plugins;
var m=this._navigator.mimeTypes;
var f=null;
info.installed=false;
info.version=-1;
if(!jindo.$Jindo.isUndefined(p)&&p.length){f=p["Shockwave Flash"];
if(f){info.installed=true;
if(f.description){info.version=parseFloat(f.description.match(/[0-9.]+/)[0],10)
}}if(p["Shockwave Flash 2.0"]){info.installed=true;
info.version=2
}}else{if(!jindo.$Jindo.isUndefined(m)&&m.length){f=m["application/x-shockwave-flash"];
info.installed=(f&&f.enabledPlugin)
}else{try{info.version=parseFloat(new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").match(/(.\d?),/)[1],10);
info.installed=true
}catch(e){}}}this.flash=function(){return info
};
this.info=this.flash;
return info
};
jindo.$Agent.prototype.silverlight=function(){var info=new Object;
var p=this._navigator.plugins;
var s=null;
info.installed=false;
info.version=-1;
if(!jindo.$Jindo.isUndefined(p)&&p.length){s=p["Silverlight Plug-In"];
if(s){info.installed=true;
info.version=parseInt(s.description.split(".")[0],10);
if(s.description=="1.0.30226.2"){info.version=2
}}}else{try{s=new ActiveXObject("AgControl.AgControl");
info.installed=true;
if(s.isVersionSupported("3.0")){info.version=3
}else{if(s.isVersionSupported("2.0")){info.version=2
}else{if(s.isVersionSupported("1.0")){info.version=1
}}}}catch(e){}}this.silverlight=function(){return info
};
return info
};
jindo.$A=function(array){var cl=arguments.callee;
if(array instanceof cl){return array
}if(!(this instanceof cl)){try{jindo.$Jindo._maxWarn(arguments.length,1,"$A");
return new cl(array)
}catch(e){if(e instanceof TypeError){return null
}throw e
}}var oArgs=jindo.$Jindo.checkVarType(arguments,{"4voi":[],"4arr":["aPram:Array+"],"4nul":["oNull:Null"],"4und":["oUndefined:Undefined"],arrt:["aPram:ArrayStyle"]},"$A");
if(oArgs==null){array=[]
}switch(oArgs+""){case"arrt":case"4arr":array=oArgs.aPram;
break;
case"4nul":case"4und":case"4voi":array=[]
}this._array=[];
for(var i=0;
i<array.length;
i++){this._array[this._array.length]=array[i]
}};
jindo.$A.checkVarTypeObj={"4fun":["fCallback:Function+"],"4thi":["fCallback:Function+","oThis:Variant"]};
jindo.$A.prototype.toString=function(){return this._array.toString()
};
jindo.$A.prototype.get=function(nIndex){jindo.$Jindo.checkVarType(arguments,{"4num":["nIndex:Numeric"]},"$A#get");
return this._array[nIndex]
};
jindo.$A.prototype.set=function(nIndex,vValue){jindo.$Jindo.checkVarType(arguments,{"4num":["nIndex:Numeric","vValue:Variant"]},"$A#set");
this._array[nIndex]=vValue;
return this
};
jindo.$A.prototype.length=function(nLen,oValue){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4num":[jindo.$Jindo._F("nLen:Numeric")],sv:["nLen:Numeric","vValue:Variant"],"4voi":[]},"$A#length");
switch(oArgs+""){case"4num":this._array.length=oArgs.nLen;
return this;
case"sv":var l=this._array.length;
this._array.length=oArgs.nLen;
for(var i=l;
i<nLen;
i++){this._array[i]=oArgs.vValue
}return this;
case"4voi":return this._array.length
}};
jindo.$A.prototype.has=function(oValue){return(this.indexOf(oValue)>-1)
};
jindo.$A.prototype.indexOf=function(oValue){if(this._array.indexOf){jindo.$A.prototype.indexOf=function(oValue){return this._array.indexOf(oValue)
}
}else{jindo.$A.prototype.indexOf=function(oValue){for(var i=0;
i<this._array.length;
i++){if(this._array[i]==oValue){return i
}}return -1
}
}return this.indexOf(oValue)
};
jindo.$A.prototype.$value=function(){return this._array
};
jindo.$A.prototype.push=function(oValue1){return this._array.push.apply(this._array,_toArray(arguments))
};
jindo.$A.prototype.pop=function(){return this._array.pop()
};
jindo.$A.prototype.shift=function(){return this._array.shift()
};
jindo.$A.prototype.unshift=function(oValue1){this._array.unshift.apply(this._array,_toArray(arguments));
return this._array.length
};
jindo.$A.prototype.forEach=function(fCallback,oThis){function forEachBody(fpEach){return function(fCallback,oThis){var oArgs=jindo.$Jindo.checkVarType(arguments,jindo.$A.checkVarTypeObj,"$A#forEach");
var that=this;
function f(v,i,a){try{fCallback.apply(oThis||that,_slice.call(arguments))
}catch(e){if(!(e instanceof that.constructor.Continue)){throw e
}}}fpEach(this,f);
return this
}
}if(this._array.forEach){jindo.$A.prototype.forEach=forEachBody(function(scope,fp){try{scope._array.forEach(fp)
}catch(e){if(!(e instanceof scope.constructor.Break)){throw e
}}})
}else{jindo.$A.prototype.forEach=forEachBody(function(scope,fp){var arr=scope._array;
for(var i=0,l=arr.length;
i<l;
i++){try{fp(arr[i],i,arr)
}catch(e){if(e instanceof scope.constructor.Break){break
}throw e
}}})
}return this.forEach.apply(this,_slice.call(arguments))
};
jindo.$A.prototype.slice=function(nStart,nEnd){var a=this._array.slice.call(this._array,nStart,nEnd);
return jindo.$A(a)
};
jindo.$A.prototype.splice=function(nIndex,nHowMany){var a=this._array.splice.apply(this._array,_toArray(arguments));
return jindo.$A(a)
};
jindo.$A.prototype.shuffle=function(){this._array.sort(function(a,b){return Math.random()>Math.random()?1:-1
});
return this
};
jindo.$A.prototype.reverse=function(){this._array.reverse();
return this
};
jindo.$A.prototype.empty=function(){this._array.length=0;
return this
};
jindo.$A.Break=jindo.$Jindo.Break;
jindo.$A.Continue=jindo.$Jindo.Continue;
jindo.$A.prototype.map=function(fCallback,oThis){function mapBody(fpEach){return function(fCallback,oThis){var oArgs=jindo.$Jindo.checkVarType(arguments,jindo.$A.checkVarTypeObj,"$A#map");
if(oArgs==null){return this
}var returnArr=[];
var that=this;
function f(v,i,a){try{returnArr.push(fCallback.apply(oThis||that,_toArray(arguments)))
}catch(e){if(e instanceof that.constructor.Continue){returnArr.push(v)
}else{throw e
}}}fpEach(this,f);
return jindo.$A(returnArr)
}
}if(this._array.map){jindo.$A.prototype.map=mapBody(function(scope,fp){scope.forEach(fp)
})
}else{jindo.$A.prototype.map=mapBody(function(scope,fp){var arr=scope._array;
for(var i=0,l=scope._array.length;
i<l;
i++){try{fp(arr[i],i,arr)
}catch(e){if(e instanceof scope.constructor.Break){break
}else{throw e
}}}})
}return this.map.apply(this,_toArray(arguments))
};
jindo.$A.prototype.filter=function(fCallback,oThis){function filterBody(fpEach){return function(fCallback,oThis){var oArgs=jindo.$Jindo.checkVarType(arguments,jindo.$A.checkVarTypeObj,"$A#filter");
if(oArgs==null){return this
}var returnArr=[];
var that=this;
function f(v,i,a){try{if(fCallback.apply(oThis||that,_toArray(arguments))){returnArr.push(v)
}}catch(e){if(!(e instanceof that.constructor.Continue)){throw e
}}}fpEach(this,f);
return jindo.$A(returnArr)
}
}if(this._array.filter){jindo.$A.prototype.filter=filterBody(function(scope,fp){try{scope.forEach(fp)
}catch(e){if(!(e instanceof scope.constructor.Break)){throw e
}}})
}else{jindo.$A.prototype.filter=filterBody(function(scope,fp){var arr=scope._array;
for(var i=0,l=scope._array.length;
i<l;
i++){try{fp(arr[i],i,arr)
}catch(e){if(e instanceof scope.constructor.Break){break
}else{throw e
}}}})
}return this.filter.apply(this,_toArray(arguments))
};
jindo.$A.prototype.every=function(fCallback,oThis){var ___checkVarType=jindo.$Jindo.checkVarType;
var ___checkObj=jindo.$A.checkVarTypeObj;
if(this._array.every){jindo.$A.prototype.every=function(fCallback,oThis){___checkVarType(arguments,___checkObj,"$A#every");
return this._array.every(fCallback,oThis||this)
}
}else{jindo.$A.prototype.every=function(fCallback,oThis){___checkVarType(arguments,___checkObj,"$A#every");
var result=true;
var arr=this._array;
for(var i=0,l=arr.length;
i<l;
i++){if(fCallback.call(oThis||this,arr[i],i,arr)===false){result=false;
break
}}return result
}
}return this.every.apply(this,_toArray(arguments))
};
jindo.$A.prototype.some=function(fCallback,oThis){var ___checkVarType=jindo.$Jindo.checkVarType;
var ___checkObj=jindo.$A.checkVarTypeObj;
if(this._array.some){jindo.$A.prototype.some=function(fCallback,oThis){___checkVarType(arguments,___checkObj,"$A#some");
return this._array.some(fCallback,oThis||this)
}
}else{jindo.$A.prototype.some=function(fCallback,oThis){___checkVarType(arguments,___checkObj,"$A#some");
var result=false;
var arr=this._array;
for(var i=0,l=arr.length;
i<l;
i++){if(fCallback.call(oThis||this,arr[i],i,arr)===true){result=true;
break
}}return result
}
}return this.some.apply(this,_toArray(arguments))
};
jindo.$A.prototype.refuse=function(oValue1){var a=jindo.$A(_slice.apply(arguments));
return this.filter(function(v,i){return !(a.indexOf(v)>-1)
})
};
jindo.$A.prototype.unique=function(){var a=this._array,b=[],l=a.length;
var i,j;
for(i=0;
i<l;
i++){for(j=0;
j<b.length;
j++){if(a[i]==b[j]){break
}}if(j>=b.length){b[j]=a[i]
}}this._array=b;
return this
};
jindo.$Ajax=function(url,option){var cl=arguments.callee;
if(!(this instanceof cl)){try{jindo.$Jindo._maxWarn(arguments.length,2,"$Ajax");
return new cl(url,option||{})
}catch(e){if(e instanceof TypeError){return null
}throw e
}}var ___ajax=jindo.$Ajax;
var ___error=jindo.$Error;
var ___except=jindo.$Except;
var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["sURL:String+"],"4obj":["sURL:String+","oOption:Hash+"]},"$Ajax");
if(oArgs+""=="for_string"){oArgs.oOption={}
}function _getXHR(){if(window.XMLHttpRequest){return new XMLHttpRequest()
}else{if(ActiveXObject){try{return new ActiveXObject("MSXML2.XMLHTTP")
}catch(e){return new ActiveXObject("Microsoft.XMLHTTP")
}return null
}}}var loc=location.toString();
var domain="";
try{domain=loc.match(/^https?:\/\/([a-z0-9_\-\.]+)/i)[1]
}catch(e){}this._status=0;
this._url=oArgs.sURL;
this._headers={};
this._options={type:"xhr",method:"post",proxy:"",timeout:0,onload:function(req){},onerror:null,ontimeout:function(req){},jsonp_charset:"utf-8",callbackid:"",callbackname:"",sendheader:true,async:true,decode:true,postBody:false};
this._options=___ajax._setProperties(oArgs.oOption,this);
___ajax._validationOption(this._options,"$Ajax");
if(___ajax.CONFIG){this.option(___ajax.CONFIG)
}var _opt=this._options;
_opt.type=_opt.type.toLowerCase();
_opt.method=_opt.method.toLowerCase();
if(window.__jindo2_callback===undefined){window.__jindo2_callback=[]
}var t=this;
switch(_opt.type){case"put":case"delete":case"get":case"post":_opt.method=_opt.type;
case"xhr":this._request=_getXHR();
break;
case"flash":if(!___ajax.SWFRequest){throw new ___error("jindo.$Ajax.SWFRequest"+___except.REQUIRE_AJAX,"$Ajax")
}this._request=new ___ajax.SWFRequest(function(name,value){return t.option.apply(t,arguments)
});
break;
case"jsonp":if(!___ajax.JSONPRequest){throw new ___error("jindo.$Ajax.JSONPRequest"+___except.REQUIRE_AJAX,"$Ajax")
}this._request=new ___ajax.JSONPRequest(function(name,value){return t.option.apply(t,arguments)
});
break;
case"iframe":if(!___ajax.FrameRequest){throw new ___error("jindo.$Ajax.FrameRequest"+___except.REQUIRE_AJAX,"$Ajax")
}this._request=new ___ajax.FrameRequest(function(name,value){return t.option.apply(t,arguments)
})
}};
jindo.$Ajax._setProperties=function(option,context){option=option||{};
var type;
type=option.type=option.type||"xhr";
option.onload=jindo.$Fn(option.onload||function(){},context).bind();
option.method=option.method||"post";
if(type!="iframe"){option.timeout=option.timeout||0;
option.ontimeout=jindo.$Fn(option.ontimeout||function(){},context).bind();
option.onerror=jindo.$Fn(option.onerror||function(){},context).bind()
}if(type=="xhr"){option.async=option.async===undefined?true:option.async;
option.postBody=option.postBody===undefined?false:option.postBody
}else{if(type=="jsonp"){option.method="get";
option.jsonp_charset=option.jsonp_charset||"utf-8";
option.callbackid=option.callbackid||"";
option.callbackname=option.callbackname||""
}else{if(type=="flash"){option.sendheader=option.sendheader===undefined?true:option.sendheader;
option.decode=option.decode===undefined?true:option.decode
}else{if(type=="iframe"){option.proxy=option.proxy||""
}}}}return option
};
jindo.$Ajax._validationOption=function(oOption,sMethod){var ___except=jindo.$Except;
var sType=oOption.type;
if(sType==="jsonp"){if(oOption.method!=="get"){jindo.$Jindo._warn(___except.CANNOT_USE_OPTION+"\n\t"+sMethod+"-method="+oOption.method)
}}else{if(sType==="flash"){if(!(oOption.method==="get"||oOption.method==="post")){jindo.$Jindo._warn(___except.CANNOT_USE_OPTION+"\n\t"+sMethod+"-method="+oOption.method)
}}}if(oOption.postBody){if(!(sType==="xhr"&&(oOption.method!=="get"))){jindo.$Jindo._warn(___except.CANNOT_USE_OPTION+"\n\t"+oOption.method+"-postBody="+oOption.postBody)
}}var oTypeProperty={xhr:"onload|timeout|ontimeout|onerror|async|method|postBody|type",jsonp:"onload|timeout|ontimeout|onerror|jsonp_charset|callbackid|callbackname|method|type",flash:"onload|timeout|ontimeout|onerror|sendheader|decode|method|type",iframe:"onload|proxy|method|type"};
var aName=[];
var i=0;
for(aName[i++] in oOption){}var sProperty=oTypeProperty[sType];
for(var i=0,l=aName.length;
i<l;
i++){if(sProperty.indexOf(aName[i])==-1){jindo.$Jindo._warn(___except.CANNOT_USE_OPTION+"\n\t"+sType+"-"+aName[i])
}}};
jindo.$Ajax.prototype._onload=(function(isIE){var ___ajax=jindo.$Ajax;
var ___jindo=jindo.$Jindo;
if(isIE){return function(){var status=this._request.status;
var bSuccess=this._request.readyState==4&&(status==200||status==0);
var oResult;
if(this._request.readyState==4){try{if((!bSuccess)&&___jindo.isFunction(this._options.onerror)){this._options.onerror(new ___ajax.Response(this._request))
}else{if(!this._is_abort){oResult=this._options.onload(new ___ajax.Response(this._request))
}}}finally{if(___jindo.isFunction(this._oncompleted)){this._oncompleted(bSuccess,oResult)
}if(this._options.type=="xhr"){this.abort();
try{delete this._request.onload
}catch(e){this._request.onload=undefined
}}delete this._request.onreadystatechange
}}}
}else{return function(){var status=this._request.status;
var bSuccess=this._request.readyState==4&&(status==200||status==0);
var oResult;
if(this._request.readyState==4){try{if((!bSuccess)&&___jindo.isFunction(this._options.onerror)){this._options.onerror(new ___ajax.Response(this._request))
}else{oResult=this._options.onload(new ___ajax.Response(this._request))
}}finally{this._status--;
if(___jindo.isFunction(this._oncompleted)){this._oncompleted(bSuccess,oResult)
}}}}
}})(_JINDO_IS_IE);
jindo.$Ajax.prototype.request=function(oData){var ___jindo=jindo.$Jindo;
var oArgs=___jindo.checkVarType(arguments,{"4voi":[],"4obj":[___jindo._F("oData:Hash+")],"4str":["sData:String+"]},"$Ajax#request");
this._status++;
var t=this;
var req=this._request;
var opt=this._options;
var data,v,a=[],data="";
var _timer=null;
var url=this._url;
this._is_abort=false;
var sUpType=opt.type.toUpperCase();
var sUpMethod=opt.method.toUpperCase();
if(opt.postBody&&sUpType=="XHR"&&sUpMethod!="GET"){if(oArgs+""=="4str"){data=oArgs.sData
}else{if(oArgs+""=="4obj"){data=jindo.$Json(oArgs.oData).toString()
}else{data=null
}}}else{switch(oArgs+""){case"4voi":data=null;
break;
case"4obj":var oData=oArgs.oData;
for(var k in oData){if(oData.hasOwnProperty(k)){v=oData[k];
if(___jindo.isFunction(v)){v=v()
}if(___jindo.isArray(v)||(jindo.$A&&v instanceof jindo.$A)){if(v instanceof jindo.$A){v=v._array
}for(var i=0;
i<v.length;
i++){a[a.length]=k+"="+encodeURIComponent(v[i])
}}else{a[a.length]=k+"="+encodeURIComponent(v)
}}}data=a.join("&")
}}if(data&&sUpType=="XHR"&&sUpMethod=="GET"){if(url.indexOf("?")==-1){url+="?"
}else{url+="&"
}url+=data;
data=null
}if(sUpType=="XHR"&&opt.async){req.open(sUpMethod,url,opt.async)
}else{if(sUpType=="XHR"){req.open(sUpMethod,url,false)
}else{req.open(sUpMethod,url)
}}if(sUpType=="XHR"&&sUpMethod=="GET"&&_JINDO_IS_IE){req.setRequestHeader("If-Modified-Since","Thu, 1 Jan 1970 00:00:00 GMT")
}if(sUpType=="XHR"||sUpType=="IFRAME"||(sUpType=="FLASH"&&opt.sendheader)){if(!this._headers["Content-Type"]){req.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8")
}req.setRequestHeader("charset","utf-8");
if(!this._headers["X-Requested-With"]){req.setRequestHeader("X-Requested-With","XMLHttpRequest")
}for(var x in this._headers){if(this._headers.hasOwnProperty(x)){if(typeof this._headers[x]=="function"){continue
}req.setRequestHeader(x,String(this._headers[x]))
}}}if(req.addEventListener&&!_JINDO_IS_OP&&!_JINDO_IS_IE){if(this._loadFunc){req.removeEventListener("load",this._loadFunc,false)
}this._loadFunc=function(rq){clearTimeout(_timer);
_timer=undefined;
t._onload(rq)
};
req.addEventListener("load",this._loadFunc,false)
}else{if(req.onload!==undefined){req.onload=function(rq){if(req.readyState==4&&!t._is_abort){clearTimeout(_timer);
_timer=undefined;
t._onload(rq)
}}
}else{if(_j_ag.match(/(?:MSIE) ([0-9.]+)/)[1]==6&&opt.async){var onreadystatechange=function(rq){if(req.readyState==4&&!t._is_abort){if(_timer){clearTimeout(_timer);
_timer=undefined
}t._onload(rq);
clearInterval(t._interval);
t._interval=undefined
}};
this._interval=setInterval(onreadystatechange,300)
}else{req.onreadystatechange=function(rq){if(req.readyState==4){clearTimeout(_timer);
_timer=undefined;
t._onload(rq)
}}
}}}if(opt.timeout>0){if(this._timer){clearTimeout(this._timer)
}_timer=setTimeout(function(){t._is_abort=true;
if(t._interval){clearInterval(t._interval);
t._interval=undefined
}try{req.abort()
}catch(e){}opt.ontimeout(req);
if(___jindo.isFunction(t._oncompleted)){t._oncompleted(false)
}},opt.timeout*1000);
this._timer=_timer
}this._test_url=url;
req.send(data);
return this
};
jindo.$Ajax.prototype.isIdle=function(){return this._status==0
};
jindo.$Ajax.prototype.abort=function(){try{if(this._interval){clearInterval(this._interval)
}if(this._timer){clearTimeout(this._timer)
}this._interval=undefined;
this._timer=undefined;
this._is_abort=true;
this._request.abort()
}finally{this._status--
}return this
};
jindo.$Ajax.prototype.url=function(sURL){var oArgs=jindo.$Jindo.checkVarType(arguments,{g:[],s:["sURL:String+"]},"$Ajax#url");
switch(oArgs+""){case"g":return this._url;
case"s":this._url=oArgs.sURL;
return this
}};
jindo.$Ajax.prototype.option=function(name,value){var oArgs=jindo.$Jindo.checkVarType(arguments,{s4var:["sKey:String+","vValue:Variant"],s4obj:["oOption:Hash+"],g:["sKey:String+"]},"$Ajax#option");
switch(oArgs+""){case"s4var":oArgs.oOption={};
oArgs.oOption[oArgs.sKey]=oArgs.vValue;
case"s4obj":var oOption=oArgs.oOption;
try{for(var x in oOption){if(oOption.hasOwnProperty(x)){if(x==="onload"||x==="ontimeout"||x==="onerror"){this._options[x]=jindo.$Fn(oOption[x],this).bind()
}else{this._options[x]=oOption[x]
}}}}catch(e){}break;
case"g":return this._options[oArgs.sKey]
}jindo.$Ajax._validationOption(this._options,"$Ajax#option");
return this
};
jindo.$Ajax.prototype.header=function(name,value){if(this._options.type==="jsonp"){jindo.$Jindo._warn("")
}var oArgs=jindo.$Jindo.checkVarType(arguments,{s4str:["sKey:String+","sValue:String+"],s4obj:["oOption:Hash+"],g:["sKey:String+"]},"$Ajax#option");
switch(oArgs+""){case"s4str":this._headers[oArgs.sKey]=oArgs.sValue;
break;
case"s4obj":var oOption=oArgs.oOption;
try{for(var x in oOption){if(oOption.hasOwnProperty(x)){this._headers[x]=oOption[x]
}}}catch(e){}break;
case"g":return this._headers[oArgs.sKey]
}return this
};
jindo.$Ajax.Response=function(req){this._response=req;
this._regSheild=/^for\(;;\);/
};
jindo.$Ajax.Response.prototype.xml=function(){return this._response.responseXML
};
jindo.$Ajax.Response.prototype.text=function(){return this._response.responseText.replace(this._regSheild,"")
};
jindo.$Ajax.Response.prototype.status=function(){var status=this._response.status;
return status==0?200:status
};
jindo.$Ajax.Response.prototype.readyState=function(){return this._response.readyState
};
jindo.$Ajax.Response.prototype.json=function(){if(this._response.responseJSON){return this._response.responseJSON
}else{if(this._response.responseText){try{return eval("("+this.text()+")")
}catch(e){throw new jindo.$Error(jindo.$Except.PARSE_ERROR,"$Ajax#json")
}}}return{}
};
jindo.$Ajax.Response.prototype.header=function(name){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["name:String+"],"4voi":[]},"$Ajax.Response#header");
switch(oArgs+""){case"4str":return this._response.getResponseHeader(name);
case"4voi":return this._response.getAllResponseHeaders()
}};
jindo.$Ajax.RequestBase=jindo.$Class({_respHeaderString:"",callbackid:"",callbackname:"",responseXML:null,responseJSON:null,responseText:"",status:404,readyState:0,$init:function(fpOption){},onload:function(){},abort:function(){},open:function(){},send:function(){},setRequestHeader:function(sName,sValue){jindo.$Jindo.checkVarType(arguments,{"4str":["sName:String+","sValue:String+"]},"$Ajax.RequestBase#setRequestHeader");
this._headers[sName]=sValue
},getResponseHeader:function(sName){jindo.$Jindo.checkVarType(arguments,{"4str":["sName:String+"]},"$Ajax.RequestBase#getResponseHeader");
return this._respHeaders[sName]||""
},getAllResponseHeaders:function(){return this._respHeaderString
},_getCallbackInfo:function(){var id="";
if(this.option("callbackid")!=""){var idx=0;
do{id="_"+this.option("callbackid")+"_"+idx;
idx++
}while(window.__jindo2_callback[id])
}else{do{id="_"+Math.floor(Math.random()*10000)
}while(window.__jindo2_callback[id])
}if(this.option("callbackname")==""){this.option("callbackname","_callback")
}return{callbackname:this.option("callbackname"),id:id,name:"window.__jindo2_callback."+id}
}});
jindo.$Ajax.JSONPRequest=jindo.$Class({_headers:{},_respHeaders:{},_script:null,_onerror:null,$init:function(fpOption){this.option=fpOption
},_callback:function(data){if(this._onerror){clearTimeout(this._onerror);
this._onerror=null
}var self=this;
this.responseJSON=data;
this.onload(this);
setTimeout(function(){self.abort()
},10)
},abort:function(){if(this._script){try{this._script.parentNode.removeChild(this._script)
}catch(e){}}},open:function(method,url){jindo.$Jindo.checkVarType(arguments,{"4str":["method:String+","url:String+"]},"$Ajax.JSONPRequest#open");
this.responseJSON=null;
this._url=url
},send:function(data){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4voi":[],"4nul":["data:Null"],"4str":["data:String+"]},"$Ajax.JSONPRequest#send");
var t=this;
var info=this._getCallbackInfo();
var head=document.getElementsByTagName("head")[0];
this._script=document.createElement("script");
this._script.type="text/javascript";
this._script.charset=this.option("jsonp_charset");
if(head){head.appendChild(this._script)
}else{if(document.body){document.body.appendChild(this._script)
}}window.__jindo2_callback[info.id]=function(data){try{t.readyState=4;
t.status=200;
t._callback(data)
}finally{delete window.__jindo2_callback[info.id]
}};
var agent=jindo.$Agent(navigator);
var _loadCallback=function(){if(!t.responseJSON){t.readyState=4;
t.status=404;
t._onerror=setTimeout(function(){t._callback(null)
},200)
}};
if(agent.navigator().ie||agent.navigator().opera){this._script.onreadystatechange=function(){if(this.readyState=="loaded"){_loadCallback();
this.onreadystatechange=null
}}
}else{this._script.onload=this._script.onerror=function(){_loadCallback();
this.onerror=null;
this.onload=null
}
}var delimiter="&";
if(this._url.indexOf("?")==-1){delimiter="?"
}switch(oArgs+""){case"4voi":case"4nul":data="";
break;
case"4str":data="&"+data
}this._test_url=this._script.src=this._url+delimiter+info.callbackname+"="+info.name+data
}}).extend(jindo.$Ajax.RequestBase);
jindo.$Ajax.SWFRequest=jindo.$Class({$init:function(fpOption){this.option=fpOption
},_headers:{},_respHeaders:{},_getFlashObj:function(){var _tmpId=jindo.$Ajax.SWFRequest._tmpId;
var navi=jindo.$Agent(window.navigator).navigator();
var obj;
if(navi.ie&&navi.version==9){obj=jindo._getElementById(document,_tmpId)
}else{obj=window.document[_tmpId]
}return(this._getFlashObj=function(){return obj
})()
},_callback:function(status,data,headers){this.readyState=4;
if(jindo.$Jindo.isNumeric(status)){this.status=status
}else{if(status==true){this.status=200
}}if(this.status==200){if(jindo.$Jindo.isString(data)){try{this.responseText=this.option("decode")?decodeURIComponent(data):data;
if(!this.responseText||this.responseText==""){this.responseText=data
}}catch(e){if(e.name=="URIError"){this.responseText=data;
if(!this.responseText||this.responseText==""){this.responseText=data
}}}}if(jindo.$Jindo.isHash(headers)){this._respHeaders=headers
}}this.onload(this)
},open:function(method,url){jindo.$Jindo.checkVarType(arguments,{"4str":["method:String+","url:String+"]},"$Ajax.SWFRequest#open");
var re=/https?:\/\/([a-z0-9_\-\.]+)/i;
this._url=url;
this._method=method
},send:function(data){var _jjindo=jindo.$Jindo;
var oArgs=_jjindo.checkVarType(arguments,{"4voi":[],"4nul":["data:Null"],"4str":["data:String+"]},"$Ajax.SWFRequest#send");
this.responseXML=false;
this.responseText="";
var t=this;
var dat={};
var info=this._getCallbackInfo();
var swf=this._getFlashObj();
function f(arg){switch(typeof arg){case"string":return'"'+arg.replace(/\"/g,'\\"')+'"';
case"number":return arg;
case"object":var ret="",arr=[];
if(_jjindo.isArray(arg)){for(var i=0;
i<arg.length;
i++){arr[i]=f(arg[i])
}ret="["+arr.join(",")+"]"
}else{for(var x in arg){if(arg.hasOwnProperty(x)){arr[arr.length]=f(x)+":"+f(arg[x])
}}ret="{"+arr.join(",")+"}"
}return ret;
default:return'""'
}}data=(data||"").split("&");
var oEach;
for(var i=0;
i<data.length;
i++){oEach=data[i];
pos=oEach.indexOf("=");
key=oEach.substring(0,pos);
val=oEach.substring(pos+1);
dat[key]=decodeURIComponent(val)
}this._current_callback_id=info.id;
window.__jindo2_callback[info.id]=function(success,data){try{t._callback(success,data)
}finally{delete window.__jindo2_callback[info.id]
}};
var oData={url:this._url,type:this._method,data:dat,charset:"UTF-8",callback:info.name,header_json:this._headers};
swf.requestViaFlash(f(oData))
},abort:function(){if(this._current_callback_id){window.__jindo2_callback[this._current_callback_id]=function(){delete window.__jindo2_callback[info.id]
}
}}}).extend(jindo.$Ajax.RequestBase);
jindo.$Ajax.SWFRequest.write=function(swf_path){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4voi":[],"4str":["data:String+"]},"<static> $Ajax.SWFRequest#write");
switch(oArgs+""){case"4voi":swf_path="./ajax.swf"
}var ajax=jindo.$Ajax;
ajax.SWFRequest._tmpId="tmpSwf"+(new Date()).getMilliseconds()+Math.floor(Math.random()*100000);
var activeCallback="jindo.$Ajax.SWFRequest.loaded";
var protocol=(location.protocol=="https:")?"https:":"http:";
ajax._checkFlashLoad();
document.write('<div style="position:absolute;top:-1000px;left:-1000px"><object id="'+ajax.SWFRequest._tmpId+'" width="1" height="1" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="'+protocol+'//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0"><param name="movie" value="'+swf_path+'"><param name = "FlashVars" value = "activeCallback='+activeCallback+'" /><param name = "allowScriptAccess" value = "always" /><embed name="'+ajax.SWFRequest._tmpId+'" src="'+swf_path+'" type="application/x-shockwave-flash" pluginspage="'+protocol+'://www.macromedia.com/go/getflashplayer" width="1" height="1" allowScriptAccess="always" swLiveConnect="true" FlashVars="activeCallback='+activeCallback+'"></embed></object></div>')
};
jindo.$Ajax._checkFlashLoad=function(){jindo.$Ajax._checkFlashKey=setTimeout(function(){jindo.$Ajax.SWFRequest.onerror()
},5000);
jindo.$Ajax._checkFlashLoad=function(){}
};
jindo.$Ajax.SWFRequest.activeFlash=false;
jindo.$Ajax.SWFRequest.onload=function(){};
jindo.$Ajax.SWFRequest.onerror=function(){};
jindo.$Ajax.SWFRequest.loaded=function(){clearTimeout(jindo.$Ajax._checkFlashKey);
jindo.$Ajax.SWFRequest.activeFlash=true;
jindo.$Ajax.SWFRequest.onload()
};
jindo.$Ajax.FrameRequest=jindo.$Class({_headers:{},_respHeaders:{},_frame:null,_domain:"",$init:function(fpOption){this.option=fpOption
},_callback:function(id,data,header){var self=this;
this.readyState=4;
this.status=200;
this.responseText=data;
this._respHeaderString=header;
header.replace(/^([\w\-]+)\s*:\s*(.+)$/m,function($0,$1,$2){self._respHeaders[$1]=$2
});
this.onload(this);
setTimeout(function(){self.abort()
},10)
},abort:function(){if(this._frame){try{this._frame.parentNode.removeChild(this._frame)
}catch(e){}}},open:function(method,url){jindo.$Jindo.checkVarType(arguments,{"4str":["method:String+","url:String+"]},"$Ajax.FrameRequest#open");
var re=/https?:\/\/([a-z0-9_\-\.]+)/i;
var dom=document.location.toString().match(re);
this._method=method;
this._url=url;
this._remote=String(url).match(/(https?:\/\/[a-z0-9_\-\.]+)(:[0-9]+)?/i)[0];
this._frame=null;
this._domain=(dom[1]!=document.domain)?document.domain:""
},send:function(data){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4voi":[],"4nul":["data:Null"],"4str":["data:String+"]},"$Ajax.FrameRequest#send");
this.responseXML="";
this.responseText="";
var t=this;
var re=/https?:\/\/([a-z0-9_\-\.]+)/i;
var info=this._getCallbackInfo();
var url;
var _aStr=[];
_aStr.push(this._remote+"/ajax_remote_callback.html?method="+this._method);
var header=[];
window.__jindo2_callback[info.id]=function(id,data,header){try{t._callback(id,data,header)
}finally{delete window.__jindo2_callback[info.id]
}};
for(var x in this._headers){if(this._headers.hasOwnProperty(x)){header[header.length]="'"+x+"':'"+this._headers[x]+"'"
}}header="{"+header.join(",")+"}";
_aStr.push("&id="+info.id);
_aStr.push("&header="+encodeURIComponent(header));
_aStr.push("&proxy="+encodeURIComponent(this.option("proxy")));
_aStr.push("&domain="+this._domain);
_aStr.push("&url="+encodeURIComponent(this._url.replace(re,"")));
_aStr.push("#"+encodeURIComponent(data));
var fr=this._frame=document.createElement("iframe");
var style=fr.style;
style.position="absolute";
style.visibility="hidden";
style.width="1px";
style.height="1px";
var body=document.body||document.documentElement;
if(body.firstChild){body.insertBefore(fr,body.firstChild)
}else{body.appendChild(fr)
}fr.src=_aStr.join("")
}}).extend(jindo.$Ajax.RequestBase);
jindo.$Ajax.Queue=function(option){var cl=arguments.callee;
if(!(this instanceof cl)){return new cl(option||{})
}var oArgs=jindo.$Jindo.checkVarType(arguments,{"4voi":[],"4obj":["option:Hash+"]},"$Ajax.Queue");
option=oArgs.option;
this._options={async:false,useResultAsParam:false,stopOnFailure:false};
this.option(option);
this._queue=[]
};
jindo.$Ajax.Queue.prototype.option=function(name,value){var oArgs=jindo.$Jindo.checkVarType(arguments,{s4str:["sKey:String+","sValue:Variant"],s4obj:["oOption:Hash+"],g:["sKey:String+"]},"$Ajax.Queue#option");
switch(oArgs+""){case"s4str":this._options[oArgs.sKey]=oArgs.sValue;
break;
case"s4obj":var oOption=oArgs.oOption;
try{for(var x in oOption){if(oOption.hasOwnProperty(x)){this._options[x]=oOption[x]
}}}catch(e){}break;
case"g":return this._options[oArgs.sKey]
}return this
};
jindo.$Ajax.Queue.prototype.add=function(oAjax,oParam){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4obj":["oAjax:Hash+"],"4obj2":["oAjax:Hash+","oPram:Hash+"]},"$Ajax.Queue");
switch(oArgs+""){case"4obj2":oParam=oArgs.oPram
}this._queue.push({obj:oAjax,param:oParam});
return this
};
jindo.$Ajax.Queue.prototype.request=function(){this._requestAsync.apply(this,this.option("async")?[]:[0]);
return this
};
jindo.$Ajax.Queue.prototype._requestSync=function(nIdx,oParam){var t=this;
var queue=this._queue;
if(queue.length>nIdx+1){queue[nIdx].obj._oncompleted=function(bSuccess,oResult){if(!t.option("stopOnFailure")||bSuccess){t._requestSync(nIdx+1,oResult)
}}
}var _oParam=queue[nIdx].param||{};
if(this.option("useResultAsParam")&&oParam){try{for(var x in oParam){if(_oParam[x]===undefined&&oParam.hasOwnProperty(x)){_oParam[x]=oParam[x]
}}}catch(e){}}queue[nIdx].obj.request(_oParam)
};
jindo.$Ajax.Queue.prototype._requestAsync=function(){for(var i=0;
i<this._queue.length;
i++){this._queue[i].obj.request(this._queue[i].param||{})
}};
jindo.$H=function(hashObject){var cl=arguments.callee;
if(hashObject instanceof cl){return hashObject
}if(!(this instanceof cl)){try{jindo.$Jindo._maxWarn(arguments.length,1,"$H");
return new cl(hashObject||{})
}catch(e){if(e instanceof TypeError){return null
}throw e
}}var oArgs=jindo.$Jindo.checkVarType(arguments,{"4obj":["oObj:Hash+"],"4vod":[]},"$H");
this._table={};
for(var k in hashObject){if(hashObject.hasOwnProperty(k)){this._table[k]=hashObject[k]
}}};
jindo.$H.prototype.$value=function(){return this._table
};
jindo.$H.prototype.$=function(key,value){var oArgs=jindo.$Jindo.checkVarType(arguments,{s4var:[jindo.$Jindo._F("key:String+"),"value:Variant"],s4var2:["key:Numeric","value:Variant"],g4str:["key:String+"],s4obj:["oObj:Hash+"],g4num:["key:Numeric"]},"$H#$");
switch(oArgs+""){case"s4var":case"s4var2":this._table[key]=value;
return this;
case"s4obj":var obj=oArgs.oObj;
for(var i in obj){this._table[i]=obj[i]
}return this;
default:return this._table[key]
}};
jindo.$H.prototype.length=function(){var i=0;
for(var k in this._table){if(this._table.hasOwnProperty(k)){if(Object.prototype[k]!==undefined&&Object.prototype[k]===this._table[k]){continue
}i++
}}return i
};
jindo.$H.prototype.forEach=function(callback,thisObject){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4fun":["callback:Function+"],"4obj":["callback:Function+","thisObject:Variant"]},"$H#forEach");
var t=this._table;
var h=this.constructor;
for(var k in t){if(t.hasOwnProperty(k)){if(!t.propertyIsEnumerable(k)){continue
}try{callback.call(thisObject||this,t[k],k,t)
}catch(e){if(e instanceof h.Break){break
}if(e instanceof h.Continue){continue
}throw e
}}}return this
};
jindo.$H.prototype.filter=function(callback,thisObject){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4fun":["callback:Function+"],"4obj":["callback:Function+","thisObject:Variant"]},"$H#filter");
var h=jindo.$H();
var t=this._table;
var hCon=this.constructor;
for(var k in t){if(t.hasOwnProperty(k)){if(!t.propertyIsEnumerable(k)){continue
}try{if(callback.call(thisObject||this,t[k],k,t)){h.add(k,t[k])
}}catch(e){if(e instanceof hCon.Break){break
}if(e instanceof hCon.Continue){continue
}throw e
}}}return h
};
jindo.$H.prototype.map=function(callback,thisObject){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4fun":["callback:Function+"],"4obj":["callback:Function+","thisObject:Variant"]},"$H#map");
var h=jindo.$H();
var t=this._table;
var hCon=this.constructor;
for(var k in t){if(t.hasOwnProperty(k)){if(!t.propertyIsEnumerable(k)){continue
}try{h.add(k,callback.call(thisObject||this,t[k],k,t))
}catch(e){if(e instanceof hCon.Break){break
}if(e instanceof hCon.Continue){h.add(k,t[k])
}else{throw e
}}}}return h
};
jindo.$H.prototype.add=function(key,value){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["key:String+","value:Variant"],"4num":["key:Numeric","value:Variant"]},"$H#add");
this._table[key]=value;
return this
};
jindo.$H.prototype.remove=function(key){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["key:String+"],"4num":["key:Numeric"]},"$H#remove");
if(this._table[key]===undefined){return null
}var val=this._table[key];
delete this._table[key];
return val
};
jindo.$H.prototype.search=function(value){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["value:Variant"]},"$H#search");
var result=false;
var t=this._table;
for(var k in t){if(t.hasOwnProperty(k)){if(!t.propertyIsEnumerable(k)){continue
}var v=t[k];
if(v===value){result=k;
break
}}}return result
};
jindo.$H.prototype.hasKey=function(key){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["key:String+"],"4num":["key:Numeric"]},"$H#hasKey");
return this._table[key]!==undefined
};
jindo.$H.prototype.hasValue=function(value){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["value:Variant"]},"$H#hasValue");
return(this.search(value)!==false)
};
jindo.$H.prototype.sort=function(){var o=new Object;
var a=[];
for(var k in this._table){if(this._table.hasOwnProperty(k)){a[a.length]=this._table[k]
}}var k=false;
a.sort();
for(var i=0;
i<a.length;
i++){k=this.search(a[i]);
o[k]=a[i];
delete this._table[k]
}this._table=o;
return this
};
jindo.$H.prototype.ksort=function(){var o=new Object;
var a=this.keys();
a.sort();
for(var i=0;
i<a.length;
i++){o[a[i]]=this._table[a[i]]
}this._table=o;
return this
};
jindo.$H.prototype.keys=function(){var keys=new Array;
for(var k in this._table){if(this._table.hasOwnProperty(k)){keys.push(k)
}}return keys
};
jindo.$H.prototype.values=function(){var values=[];
for(var k in this._table){if(this._table.hasOwnProperty(k)){values[values.length]=this._table[k]
}}return values
};
jindo.$H.prototype.toQueryString=function(){var buf=[],val=null,idx=0;
for(var k in this._table){if(this._table.hasOwnProperty(k)){val=this._table[k];
if(jindo.$Jindo.isArray(val)){for(i=0;
i<val.length;
i++){buf[buf.length]=encodeURIComponent(k)+"[]="+encodeURIComponent(val[i]+"")
}}else{buf[buf.length]=encodeURIComponent(k)+"="+encodeURIComponent(this._table[k]+"")
}}}return buf.join("&")
};
jindo.$H.prototype.empty=function(){this._table={};
return this
};
jindo.$H.Break=jindo.$Jindo.Break;
jindo.$H.Continue=jindo.$Jindo.Continue;
jindo.$Json=function(sObject){var cl=arguments.callee;
if(sObject instanceof cl){return sObject
}if(!(this instanceof cl)){try{jindo.$Jindo._maxWarn(arguments.length,1,"$Json");
return new cl(arguments.length?sObject:{})
}catch(e){if(e instanceof TypeError){return null
}throw e
}}jindo.$Jindo.checkVarType(arguments,{"4var":["oObject:Variant"]},"$Json");
this._object=sObject
};
jindo.$Json._oldMakeJSON=function(sObject,sType){try{if(jindo.$Jindo.isString(sObject)&&/^(?:\s*)[\{\[]/.test(sObject)){sObject=eval("("+sObject+")")
}else{return sObject
}}catch(e){throw new jindo.$Error(jindo.$Except.PARSE_ERROR,sType)
}return sObject
};
jindo.$Json.fromXML=function(sXML){var ___jindo=jindo.$Jindo;
var oArgs=___jindo.checkVarType(arguments,{"4str":["sXML:String+"]},"<static> $Json#fromXML");
var o={};
var re=/\s*<(\/?[\w:\-]+)((?:\s+[\w:\-]+\s*=\s*(?:"(?:\\"|[^"])*"|'(?:\\'|[^'])*'))*)\s*((?:\/>)|(?:><\/\1>|\s*))|\s*<!\[CDATA\[([\w\W]*?)\]\]>\s*|\s*>?([^<]*)/ig;
var re2=/^[0-9]+(?:\.[0-9]+)?$/;
var ec={"&amp;":"&","&nbsp;":" ","&quot;":'"',"&lt;":"<","&gt;":">"};
var fg={tags:["/"],stack:[o]};
var es=function(s){if(___jindo.isUndefined(s)){return""
}return s.replace(/&[a-z]+;/g,function(m){return(___jindo.isString(ec[m]))?ec[m]:m
})
};
var at=function(s,c){s.replace(/([\w\:\-]+)\s*=\s*(?:"((?:\\"|[^"])*)"|'((?:\\'|[^'])*)')/g,function($0,$1,$2,$3){c[$1]=es(($2?$2.replace(/\\"/g,'"'):undefined)||($3?$3.replace(/\\'/g,"'"):undefined))
})
};
var em=function(o){for(var x in o){if(o.hasOwnProperty(x)){if(Object.prototype[x]){continue
}return false
}}return true
};
var cb=function($0,$1,$2,$3,$4,$5){var cur,cdata="";
var idx=fg.stack.length-1;
if(___jindo.isString($1)&&$1){if($1.substr(0,1)!="/"){var has_attr=(typeof $2=="string"&&$2);
var closed=(typeof $3=="string"&&$3);
var newobj=(!has_attr&&closed)?"":{};
cur=fg.stack[idx];
if(___jindo.isUndefined(cur[$1])){cur[$1]=newobj;
cur=fg.stack[idx+1]=cur[$1]
}else{if(cur[$1] instanceof Array){var len=cur[$1].length;
cur[$1][len]=newobj;
cur=fg.stack[idx+1]=cur[$1][len]
}else{cur[$1]=[cur[$1],newobj];
cur=fg.stack[idx+1]=cur[$1][1]
}}if(has_attr){at($2,cur)
}fg.tags[idx+1]=$1;
if(closed){fg.tags.length--;
fg.stack.length--
}}else{fg.tags.length--;
fg.stack.length--
}}else{if(___jindo.isString($4)&&$4){cdata=$4
}else{if(___jindo.isString($5)&&$5){cdata=es($5)
}}}if(cdata.replace(/^\s+/g,"").length>0){var par=fg.stack[idx-1];
var tag=fg.tags[idx];
if(re2.test(cdata)){cdata=parseFloat(cdata,10)
}else{if(cdata=="true"){cdata=true
}else{if(cdata=="false"){cdata=false
}}}if(___jindo.isUndefined(par)){return
}if(par[tag] instanceof Array){var o=par[tag];
if(___jindo.isHash(o[o.length-1])&&!em(o[o.length-1])){o[o.length-1].$cdata=cdata;
o[o.length-1].toString=function(){return cdata
}
}else{o[o.length-1]=cdata
}}else{if(___jindo.isHash(par[tag])&&!em(par[tag])){par[tag].$cdata=cdata;
par[tag].toString=function(){return cdata
}
}else{par[tag]=cdata
}}}};
sXML=sXML.replace(/<(\?|\!-)[^>]*>/g,"");
sXML.replace(re,cb);
return jindo.$Json(o)
};
jindo.$Json.prototype.get=function(sPath){var ___jindo=jindo.$Jindo;
var oArgs=___jindo.checkVarType(arguments,{"4str":["sPath:String+"]},"$Json#get");
var o=jindo.$Json._oldMakeJSON(this._object,"$Json#get");
if(!(___jindo.isHash(o)||___jindo.isArray(o))){throw new jindo.$Error(jindo.$Except.JSON_MUST_HAVE_ARRAY_HASH,"$Json#get")
}var p=sPath.split("/");
var re=/^([\w:\-]+)\[([0-9]+)\]$/;
var stack=[[o]],cur=stack[0];
var len=p.length,c_len,idx,buf,j,e;
for(var i=0;
i<len;
i++){if(p[i]=="."||p[i]==""){continue
}if(p[i]==".."){stack.length--
}else{buf=[];
idx=-1;
c_len=cur.length;
if(c_len==0){return[]
}if(re.test(p[i])){idx=+RegExp.$2
}for(j=0;
j<c_len;
j++){e=cur[j][p[i]];
if(___jindo.isUndefined(e)){continue
}if(___jindo.isArray(e)){if(idx>-1){if(idx<e.length){buf[buf.length]=e[idx]
}}else{buf=buf.concat(e)
}}else{if(idx==-1){buf[buf.length]=e
}}}stack[stack.length]=buf
}cur=stack[stack.length-1]
}return cur
};
jindo.$Json.prototype.toString=function(){jindo.$Json.prototype.toString=function(){return jindo.$Json._oldToString(this._object)
};
return this.toString()
};
jindo.$Json._oldToString=function(oObj){var ___jindo=jindo.$Jindo;
var func={$:function($){if(___jindo.isNull($)||$==Infinity){return"null"
}if(___jindo.isFunction($)){return undefined
}if(___jindo.isUndefined($)){return undefined
}if(___jindo.isBoolean($)){return $?"true":"false"
}if(___jindo.isString($)){return this.s($)
}if(___jindo.isNumeric($)){return $
}if(___jindo.isArray($)){return this.a($)
}if(___jindo.isHash($)){return this.o($)
}if(typeof $=="object"||___jindo.isRegExp($)){return"{}"
}if(isNaN($)){return"null"
}},s:function(s){var e={'"':'\\"',"\\":"\\\\","\n":"\\n","\r":"\\r","\t":"\\t"};
var c=function(m){return(e[m]!==undefined)?e[m]:m
};
return'"'+s.replace(/[\\"'\n\r\t]/g,c)+'"'
},a:function(a){var s="[",c="",n=a.length;
for(var i=0;
i<n;
i++){if(___jindo.isFunction(a[i])){continue
}s+=c+this.$(a[i]);
if(!c){c=","
}}return s+"]"
},o:function(o){o=jindo.$H(o).ksort().$value();
var s="{",c="";
for(var x in o){if(o.hasOwnProperty(x)){if(___jindo.isUndefined(o[x])||___jindo.isFunction(o[x])){continue
}s+=c+this.s(x)+":"+this.$(o[x]);
if(!c){c=","
}}}return s+"}"
}};
return func.$(oObj)
};
jindo.$Json.prototype.toXML=function(){var f=function($,tag){var t=function(s,at){return"<"+tag+(at||"")+">"+s+"</"+tag+">"
};
switch(typeof $){case"undefined":case"null":return t("");
case"number":return t($);
case"string":if($.indexOf("<")<0){return t($.replace(/&/g,"&amp;"))
}else{return t("<![CDATA["+$+"]]>")
}case"boolean":return t(String($));
case"object":var ret="";
if($ instanceof Array){var len=$.length;
for(var i=0;
i<len;
i++){ret+=f($[i],tag)
}}else{var at="";
for(var x in $){if($.hasOwnProperty(x)){if(x=="$cdata"||typeof $[x]=="function"){continue
}ret+=f($[x],x)
}}if(tag){ret=t(ret,at)
}}return ret
}};
return f(jindo.$Json._oldMakeJSON(this._object,"$Json#toXML"),"")
};
jindo.$Json.prototype.toObject=function(){return jindo.$Json._oldMakeJSON(this._object,"$Json#toObject")
};
jindo.$Json.prototype.compare=function(oObj){var ___jindo=jindo.$Jindo;
var oArgs=___jindo.checkVarType(arguments,{"4obj":["oData:Hash+"],"4arr":["oData:Array+"]},"$Json#compare");
function compare(vSrc,vTar){if(___jindo.isArray(vSrc)){if(vSrc.length!==vTar.length){return false
}for(var i=0,nLen=vSrc.length;
i<nLen;
i++){if(!arguments.callee(vSrc[i],vTar[i])){return false
}}return true
}else{if(___jindo.isRegExp(vSrc)||___jindo.isFunction(vSrc)||___jindo.isDate(vSrc)){return String(vSrc)===String(vTar)
}else{if(typeof vSrc==="number"&&isNaN(vSrc)){return isNaN(vTar)
}else{if(___jindo.isHash(vSrc)){var nLen=0;
for(var k in vSrc){nLen++
}for(var k in vTar){nLen--
}if(nLen!==0){return false
}for(var k in vSrc){if(k in vTar===false||!arguments.callee(vSrc[k],vTar[k])){return false
}}return true
}}}}return vSrc===vTar
}try{return compare(jindo.$Json._oldMakeJSON(this._object,"$Json#compare"),oObj)
}catch(e){return false
}};
jindo.$Json.prototype.$value=jindo.$Json.prototype.toObject;
jindo.$Cookie=function(){var cl=arguments.callee;
var cached=cl._cached;
if(cl._cached){return cl._cached
}if(!(this instanceof cl)){return new cl
}if(typeof jindo.$Jindo.isUndefined(cl._cached)){cl._cached=this
}};
jindo.$Cookie.prototype.keys=function(){var ca=document.cookie.split(";");
var re=/^\s+|\s+$/g;
var a=new Array;
for(var i=0;
i<ca.length;
i++){a[a.length]=ca[i].substr(0,ca[i].indexOf("=")).replace(re,"")
}return a
};
jindo.$Cookie.prototype.get=function(sName){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["sName:String+"]},"$Cookie#get");
var ca=document.cookie.split(/\s*;\s*/);
var re=new RegExp("^(\\s*"+sName+"\\s*=)");
for(var i=0;
i<ca.length;
i++){if(re.test(ca[i])){return unescape(ca[i].substr(RegExp.$1.length))
}}return null
};
jindo.$Cookie.prototype.set=function(sName,sValue,nDays,sDomain,sPath){var ___jindo=jindo.$Jindo;
var oArgs=___jindo.checkVarType(arguments,{"4str":["sName:String+","sValue:String+"],day_for_string:["sName:String+","sValue:String+","nDays:Numeric"],domain_for_string:["sName:String+","sValue:String+","nDays:Numeric","sDomain:String+"],path_for_string:["sName:String+","sValue:String+","nDays:Numeric","sDomain:String+","sPath:String+"]},"$Cookie#set");
var sExpire="";
nDays=parseInt(nDays,10);
if(!isNaN(nDays)&&___jindo.isNumeric(nDays)){sExpire=";expires="+(new Date((new Date()).getTime()+nDays*1000*60*60*24)).toGMTString()
}if(___jindo.isUndefined(sDomain)){sDomain=""
}if(___jindo.isUndefined(sPath)){sPath="/"
}document.cookie=sName+"="+escape(sValue)+sExpire+"; path="+sPath+(sDomain?"; domain="+sDomain:"");
return this
};
jindo.$Cookie.prototype.remove=function(sName,sDomain,sPath){var ___jindo=jindo.$Jindo;
var oArgs=___jindo.checkVarType(arguments,{"4str":["sName:String+"],domain_for_string:["sName:String+","sDomain:String+"],path_for_string:["sName:String+","sDomain:String+","sPath:String+"]},"$Cookie#remove");
var aArg=_toArray(arguments);
var aPram=[];
for(var i=0,l=aArg.length;
i<l;
i++){aPram.push(aArg[i]);
if(i==0){aPram.push("");
aPram.push(-1)
}}if(!___jindo.isNull(this.get(sName))){this.set.apply(this,aPram)
}return this
};
jindo.$Element=function(el){var cl=arguments.callee;
if(el&&el instanceof cl){return el
}if(!(this instanceof cl)){try{jindo.$Jindo._maxWarn(arguments.length,1,"$Element");
return new cl(el)
}catch(e){if(e instanceof TypeError){return null
}throw e
}}var ___jindo=jindo.$Jindo;
var oArgs=___jindo.checkVarType(arguments,{"4str":["sID:String+"],"4nod":["oEle:Node"],"4doc":["oEle:Document+"],"4win":["oEle:Window+"]},"$Element");
switch(oArgs+""){case"4str":el=jindo.$(el);
break;
default:el=oArgs.oEle
}this._element=el;
if(this._element!=null){if(this._element.__jindo__id){this._key=this._element.__jindo__id
}else{this._element.__jindo__id=this._key=_makeRandom()
}var tag=this._element.tagName;
this.tag=tag!==undefined?tag.toLowerCase():""
}else{throw new TypeError("{not_found_element}")
}};
function _makeRandom(){return"e"+new Date().getTime()+parseInt(Math.random()*100000000,10)
}jindo.$Element._eventBind=function(oEle,sEvent,fAroundFunc,bUseCapture){if(oEle.addEventListener){if(document.documentMode==9){jindo.$Element._eventBind=function(oEle,sEvent,fAroundFunc){if(/resize/.test(sEvent)){oEle.attachEvent("on"+sEvent,fAroundFunc)
}else{oEle.addEventListener(sEvent,fAroundFunc,!!bUseCapture)
}}
}else{jindo.$Element._eventBind=function(oEle,sEvent,fAroundFunc,bUseCapture){oEle.addEventListener(sEvent,fAroundFunc,!!bUseCapture)
}
}}else{jindo.$Element._eventBind=function(oEle,sEvent,fAroundFunc){oEle.attachEvent("on"+sEvent,fAroundFunc)
}
}jindo.$Element._eventBind(oEle,sEvent,fAroundFunc,bUseCapture)
};
jindo.$Element._unEventBind=function(oEle,sEvent,fAroundFunc){if(oEle.removeEventListener){if(document.documentMode==9){jindo.$Element._unEventBind=function(oEle,sEvent,fAroundFunc){if(/resize/.test(sEvent)){oEle.detachEvent("on"+sEvent,fAroundFunc)
}else{oEle.removeEventListener(sEvent,fAroundFunc,false)
}}
}else{jindo.$Element._unEventBind=function(oEle,sEvent,fAroundFunc){oEle.removeEventListener(sEvent,fAroundFunc,false)
}
}}else{jindo.$Element._unEventBind=function(oEle,sEvent,fAroundFunc){oEle.detachEvent("on"+sEvent,fAroundFunc)
}
}jindo.$Element._unEventBind(oEle,sEvent,fAroundFunc)
};
jindo.$Element.prototype.$value=function(){return this._element
};
jindo.$Element.prototype.visible=function(bVisible,sDisplay){var oArgs=jindo.$Jindo.checkVarType(arguments,{g:[],s4bln:[jindo.$Jindo._F("bVisible:Boolean")],s4str:["bVisible:Boolean","sDisplay:String+"]},"$Element#visible");
switch(oArgs+""){case"g":return(this._getCss(this._element,"display")!="none");
case"s4bln":this[bVisible?"show":"hide"]();
return this;
case"s4str":this[bVisible?"show":"hide"](sDisplay);
return this
}};
jindo.$Element.prototype.show=function(sDisplay){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4voi":[],"4str":["sDisplay:String+"]},"$Element#show");
var s=this._element.style;
var b="block";
var c={p:b,div:b,form:b,h1:b,h2:b,h3:b,h4:b,ol:b,ul:b,fieldset:b,td:"table-cell",th:"table-cell",li:"list-item",table:"table",thead:"table-header-group",tbody:"table-row-group",tfoot:"table-footer-group",tr:"table-row",col:"table-column",colgroup:"table-column-group",caption:"table-caption",dl:b,dt:b,dd:b};
try{switch(oArgs+""){case"4voi":var type=c[this.tag];
s.display=type||"inline";
break;
case"4str":s.display=sDisplay
}}catch(e){s.display="block"
}return this
};
jindo.$Element.prototype.hide=function(){this._element.style.display="none";
return this
};
jindo.$Element.prototype.toggle=function(sDisplay){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4voi":[],"4str":["sDisplay:String+"]},"$Element#toggle");
this[this._getCss(this._element,"display")=="none"?"show":"hide"].apply(this,arguments);
return this
};
jindo.$Element.prototype.opacity=function(value){var oArgs=jindo.$Jindo.checkVarType(arguments,{g:[],s:["nOpacity:Numeric"]},"$Element#opacity");
var v,e=this._element,b;
switch(oArgs+""){case"g":b=(this._getCss(e,"display")!="none");
if(typeof e.filters!="undefined"){v=typeof e.filters.alpha=="undefined"?(b?100:0):e.filters.alpha.opacity;
v=v/100
}else{v=parseFloat(e.style.opacity,10);
if(isNaN(v)){v=b?1:0
}}return v;
case"s":b=(this._getCss(e,"display")!="none");
value=oArgs.nOpacity;
e.style.zoom=1;
value=Math.max(Math.min(value,1),0);
if(typeof e.filters!="undefined"){value=Math.ceil(value*100);
if(typeof e.filters!="unknown"&&typeof e.filters.alpha!="undefined"){e.filters.alpha.opacity=value
}else{e.style.filter=(e.style.filter+" alpha(opacity="+value+")")
}}else{e.style.opacity=value
}return this
}};
jindo.$Element.prototype.css=function(sName,sValue){var oArgs=jindo.$Jindo.checkVarType(arguments,{g:["sName:String+"],s4str:[jindo.$Jindo._F("sName:String+"),jindo.$Jindo._F("vValue:String+")],s4num:["sName:String+","vValue:Numeric"],s4obj:["oObj:Hash+"]},"$Element#css");
var e=this._element;
switch(oArgs+""){case"s4str":case"s4num":var obj={};
obj[sName]=sValue;
sName=obj;
break;
case"s4obj":sName=oArgs.oObj;
break;
case"g":var _getCss=this._getCss;
if(sName=="opacity"){return this.opacity()
}if((_JINDO_IS_FF||_JINDO_IS_OP)&&(sName=="backgroundPositionX"||sName=="backgroundPositionY")){var bp=_getCss(e,"backgroundPosition").split(/\s+/);
return(sName=="backgroundPositionX")?bp[0]:bp[1]
}if(_JINDO_IS_IE&&sName=="backgroundPosition"){return _getCss(e,"backgroundPositionX")+" "+_getCss(e,"backgroundPositionY")
}if((_JINDO_IS_FF||_JINDO_IS_SF||_JINDO_IS_CH)&&(sName=="padding"||sName=="margin")){var top=_getCss(e,sName+"Top");
var right=_getCss(e,sName+"Right");
var bottom=_getCss(e,sName+"Bottom");
var left=_getCss(e,sName+"Left");
if((top==right)&&(bottom==left)){return top
}else{if(top==bottom){if(right==left){return top+" "+right
}else{return top+" "+right+" "+bottom+" "+left
}}else{return top+" "+right+" "+bottom+" "+left
}}}return _getCss(e,sName)
}var v,type;
for(var k in sName){if(sName.hasOwnProperty(k)){v=sName[k];
if(!(jindo.$Jindo.isString(v)||jindo.$Jindo.isNumeric(v))){continue
}if(k=="opacity"){this.opacity(v);
continue
}if(k=="cssFloat"&&_JINDO_IS_IE){k="styleFloat"
}if((_JINDO_IS_FF||_JINDO_IS_OP)&&(k=="backgroundPositionX"||k=="backgroundPositionY")){var bp=this.css("backgroundPosition").split(/\s+/);
v=k=="backgroundPositionX"?v+" "+bp[1]:bp[0]+" "+v;
this._setCss(e,"backgroundPosition",v)
}else{this._setCss(e,k,v)
}}}return this
};
jindo.$Element.prototype._getCss=function(e,sName){var fpGetCss;
if(e.currentStyle){fpGetCss=function(e,sName){try{if(sName=="cssFloat"){sName="styleFloat"
}var sStyle=e.style[sName];
if(sStyle){return sStyle
}else{var oCurrentStyle=e.currentStyle;
if(oCurrentStyle){return oCurrentStyle[sName]
}}return sStyle
}catch(ex){throw new jindo.$Error((e.tagName||"document")+jindo.$Except.NOT_USE_CSS,"$Element#css")
}}
}else{if(window.getComputedStyle){fpGetCss=function(e,sName){try{if(sName=="cssFloat"){sName="float"
}var d=e.ownerDocument||e.document||document;
var sVal=(e.style[sName]||d.defaultView.getComputedStyle(e,null).getPropertyValue(sName.replace(/([A-Z])/g,"-$1").toLowerCase()));
if(sName=="textDecoration"){sVal=sVal.replace(",","")
}return sVal
}catch(ex){throw new jindo.$Error((e.tagName||"document")+jindo.$Except.NOT_USE_CSS,"$Element#css")
}}
}else{fpGetCss=function(e,sName){try{if(sName=="cssFloat"&&_JINDO_IS_IE){sName="styleFloat"
}return e.style[sName]
}catch(ex){throw new jindo.$Error((e.tagName||"document")+jindo.$Except.NOT_USE_CSS,"$Element#css")
}}
}}jindo.$Element.prototype._getCss=fpGetCss;
return fpGetCss(e,sName)
};
jindo.$Element.prototype._setCss=function(e,k,v){if(("#top#left#right#bottom#").indexOf(k+"#")>0&&(typeof v=="number"||(/\d$/.test(v)))){e.style[k]=parseInt(v,10)+"px"
}else{e.style[k]=v
}};
jindo.$Element.prototype.attr=function(sName,sValue){var oArgs=jindo.$Jindo.checkVarType(arguments,{g:["sName:String+"],s4str:["sName:String+","vValue:String+"],s4num:["sName:String+","vValue:Numeric"],s4nul:["sName:String+","vValue:Null"],s4bln:["sName:String+","vValue:Boolean"],s4obj:[jindo.$Jindo._F("oObj:Hash+")]},"$Element#attr");
var e=this._element;
switch(oArgs+""){case"s4str":case"s4nul":case"s4num":case"s4bln":var obj={};
obj[sName]=sValue;
sName=obj;
break;
case"s4obj":sName=oArgs.oObj;
break;
case"g":if(sName=="class"||sName=="className"){return e.className
}else{if(sName=="style"){return e.style.cssText
}else{if(sName=="checked"||sName=="disabled"){return !!e[sName]
}else{if(sName=="value"){if(this.tag=="button"){return e.getAttributeNode("value").value
}else{return e.value
}}else{if(sName=="href"){return e.getAttribute(sName,2)
}}}}}return e.getAttribute(sName)
}for(var k in sName){if(sName.hasOwnProperty(k)){var v=sName[k];
if(jindo.$Jindo.isNull(v)){e.removeAttribute(k)
}else{if(k=="class"||k=="className"){e.className=v
}else{if(k=="style"){e.style.cssText=v
}else{if(k=="checked"||k=="disabled"){e[k]=v
}else{if(k=="value"){e.value=v
}else{e.setAttribute(k,v)
}}}}}}}return this
};
jindo.$Element.prototype.width=function(width){var oArgs=jindo.$Jindo.checkVarType(arguments,{g:[],s:["nWidth:Numeric"]},"$Element#width");
switch(oArgs+""){case"g":return this._element.offsetWidth;
case"s":width=oArgs.nWidth;
var e=this._element;
e.style.width=width+"px";
var off=e.offsetWidth;
if(off!=width&&off!==0){var w=(width*2-off);
if(w>0){e.style.width=w+"px"
}}return this
}};
jindo.$Element.prototype.height=function(height){var oArgs=jindo.$Jindo.checkVarType(arguments,{g:[],s:["nHeight:Numeric"]},"$Element#height");
switch(oArgs+""){case"g":return this._element.offsetHeight;
case"s":height=oArgs.nHeight;
var e=this._element;
e.style.height=height+"px";
var off=e.offsetHeight;
if(off!=height&&off!==0){var height=(height*2-off);
if(height>0){e.style.height=height+"px"
}}return this
}};
jindo.$Element.prototype.className=function(sClass){var oArgs=jindo.$Jindo.checkVarType(arguments,{g:[],s:[jindo.$Jindo._F("sClass:String+")]},"$Element#className");
var e=this._element;
switch(oArgs+""){case"g":return e.className;
case"s":e.className=sClass;
return this
}};
jindo.$Element.prototype.hasClass=function(sClass){var ___checkVarType=jindo.$Jindo.checkVarType;
if(this._element.classList){jindo.$Element.prototype.hasClass=function(sClass){var oArgs=___checkVarType(arguments,{"4str":["sClass:String+"]},"$Element#hasClass");
return this._element.classList.contains(sClass)
}
}else{jindo.$Element.prototype.hasClass=function(sClass){var oArgs=___checkVarType(arguments,{"4str":["sClass:String+"]},"$Element#hasClass");
return(" "+this._element.className+" ").indexOf(" "+sClass+" ")>-1
}
}return this.hasClass.apply(this,arguments)
};
jindo.$Element.prototype.addClass=function(sClass){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["sClass:String+"]},"$Element#addClass");
var e=this._element;
var sClassName=e.className;
var aClass=(sClass+"").split(" ");
var sEachClass;
for(var i=aClass.length-1;
i>=0;
i--){sEachClass=aClass[i];
if((" "+sClassName+" ").indexOf(" "+sEachClass+" ")==-1){sClassName=sClassName+" "+sEachClass
}}e.className=sClassName.replace(/\s+$/,"").replace(/^\s+/,"");
return this
};
jindo.$Element.prototype.removeClass=function(sClass){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["sClass:String+"]},"$Element#removeClass");
var e=this._element;
var sClassName=e.className;
var aClass=(sClass+"").split(" ");
var sEachClass;
for(var i=aClass.length-1;
i>=0;
i--){sClassName=(" "+sClassName+" ").replace(new RegExp("\\b"+aClass[i]+"\\s+","g")," ")
}e.className=sClassName.replace(/\s+$/,"").replace(/^\s+/,"");
return this
};
jindo.$Element.prototype.toggleClass=function(sClass,sClass2){var ___checkVarType=jindo.$Jindo.checkVarType;
if(this._element.classList){jindo.$Element.prototype.toggleClass=function(sClass,sClass2){var oArgs=___checkVarType(arguments,{"4str":["sClass:String+"],"4str2":["sClass:String+","sClass2:String+"]},"$Element#toggleClass");
switch(oArgs+""){case"4str":this._element.classList.toggle(sClass+"");
break;
case"4str2":sClass=sClass+"";
sClass2=sClass2+"";
if(this.hasClass(sClass)){this.removeClass(sClass);
this.addClass(sClass2)
}else{this.addClass(sClass);
this.removeClass(sClass2)
}}return this
}
}else{jindo.$Element.prototype.toggleClass=function(sClass,sClass2){var oArgs=___checkVarType(arguments,{"4str":["sClass:String+"],"4str2":["sClass:String+","sClass2:String+"]},"$Element#toggleClass");
sClass2=sClass2||"";
if(this.hasClass(sClass)){this.removeClass(sClass);
if(sClass2){this.addClass(sClass2)
}}else{this.addClass(sClass);
if(sClass2){this.removeClass(sClass2)
}}return this
}
}return this.toggleClass.apply(this,arguments)
};
jindo.$Element.prototype.cssClass=function(vClass,bCondition){var oArgs=jindo.$Jindo.checkVarType(arguments,{g:["sClass:String+"],s4bln:["sClass:String+","bCondition:Boolean"],s4obj:["oObj:Hash+"]},"$Element#cssClass");
switch(oArgs+""){case"g":return this.hasClass(oArgs.sClass);
case"s4bln":if(oArgs.bCondition){this.addClass(oArgs.sClass)
}else{this.removeClass(oArgs.sClass)
}return this;
case"s4obj":var e=this._element;
vClass=oArgs.oObj;
var sClassName=e.className;
for(var sEachClass in vClass){if(vClass.hasOwnProperty(sEachClass)){if(vClass[sEachClass]){if((" "+sClassName+" ").indexOf(" "+sEachClass+" ")==-1){sClassName=(sClassName+" "+sEachClass).replace(/^\s+/,"")
}}else{if((" "+sClassName+" ").indexOf(" "+sEachClass+" ")>-1){sClassName=(" "+sClassName+" ").replace(" "+sEachClass+" "," ").replace(/\s+$/,"").replace(/^\s+/,"")
}}}}e.className=sClassName;
return this
}};
jindo.$Element.prototype.text=function(sText){var oArgs=jindo.$Jindo.checkVarType(arguments,{g:[],s4str:["sText:String+"],s4num:[jindo.$Jindo._F("sText:Numeric")],s4bln:["sText:Boolean"]},"$Element#text");
var ele=this._element;
var tag=this.tag;
switch(oArgs+""){case"g":var prop=(ele.innerText!==undefined)?"innerText":"textContent";
if(tag=="textarea"||tag=="input"){prop="value"
}return ele[prop];
case"s4str":case"s4num":case"s4bln":var prop=(ele.innerText!==undefined)?"innerText":"textContent";
if(tag=="textarea"||tag=="input"){prop="value"
}sText+="";
try{if(prop!="value"){prop=(ele.textContent!==undefined)?"textContent":"innerText"
}ele[prop]=sText+""
}catch(e){return ele.innerHTML=(sText+"").replace(/&/g,"&amp;").replace(/</g,"&lt;")
}return this
}};
jindo.$Element.prototype.html=function(sHTML){var isIe=_JINDO_IS_IE;
var isFF=_JINDO_IS_FF;
var _param={g:[],s4str:[jindo.$Jindo._F("sText:String+")],s4num:["sText:Numeric"],s4bln:["sText:Boolean"]};
var ___checkVarType=jindo.$Jindo.checkVarType;
if(isIe){jindo.$Element.prototype.html=function(sHTML){var oArgs=___checkVarType(arguments,_param,"$Element#html");
switch(oArgs+""){case"g":return this._element.innerHTML;
case"s4str":case"s4num":case"s4bln":sHTML+="";
if(jindo.cssquery){jindo.cssquery.release()
}var oEl=this._element;
while(oEl.firstChild){oEl.removeChild(oEl.firstChild)
}var sId="R"+new Date().getTime()+parseInt(Math.random()*100000,10);
var oDoc=oEl.ownerDocument||oEl.document||document;
var oDummy;
var sTag=oEl.tagName.toLowerCase();
switch(sTag){case"select":case"table":oDummy=oDoc.createElement("div");
oDummy.innerHTML="<"+sTag+' class="'+sId+'">'+sHTML+"</"+sTag+">";
break;
case"tr":case"thead":case"tbody":case"colgroup":oDummy=oDoc.createElement("div");
oDummy.innerHTML="<table><"+sTag+' class="'+sId+'">'+sHTML+"</"+sTag+"></table>";
break;
default:oEl.innerHTML=sHTML
}if(oDummy){var oFound;
for(oFound=oDummy.firstChild;
oFound;
oFound=oFound.firstChild){if(oFound.className==sId){break
}}if(oFound){var notYetSelected=true;
for(var oChild;
oChild=oEl.firstChild;
){oChild.removeNode(true)
}for(var oChild=oFound.firstChild;
oChild;
oChild=oFound.firstChild){if(sTag=="select"){var cloneNode=oChild.cloneNode(true);
if(oChild.selected&&notYetSelected){notYetSelected=false;
cloneNode.selected=true
}oEl.appendChild(cloneNode);
oChild.removeNode(true)
}else{oEl.appendChild(oChild)
}}oDummy.removeNode&&oDummy.removeNode(true)
}oDummy=null
}return this
}}
}else{if(isFF){jindo.$Element.prototype.html=function(sHTML){var oArgs=___checkVarType(arguments,_param,"$Element#html");
switch(oArgs+""){case"g":return this._element.innerHTML;
case"s4str":case"s4num":case"s4bln":sHTML+="";
var oEl=this._element;
if(!oEl.parentNode){var sId="R"+new Date().getTime()+parseInt(Math.random()*100000,10);
var oDoc=oEl.ownerDocument||oEl.document||document;
var oDummy;
var sTag=oEl.tagName.toLowerCase();
switch(sTag){case"select":case"table":oDummy=oDoc.createElement("div");
oDummy.innerHTML="<"+sTag+' class="'+sId+'">'+sHTML+"</"+sTag+">";
break;
case"tr":case"thead":case"tbody":case"colgroup":oDummy=oDoc.createElement("div");
oDummy.innerHTML="<table><"+sTag+' class="'+sId+'">'+sHTML+"</"+sTag+"></table>";
break;
default:oEl.innerHTML=sHTML
}if(oDummy){var oFound;
for(oFound=oDummy.firstChild;
oFound;
oFound=oFound.firstChild){if(oFound.className==sId){break
}}if(oFound){for(var oChild;
oChild=oEl.firstChild;
){oChild.removeNode(true)
}for(var oChild=oFound.firstChild;
oChild;
oChild=oFound.firstChild){oEl.appendChild(oChild)
}oDummy.removeNode&&oDummy.removeNode(true)
}oDummy=null
}}else{oEl.innerHTML=sHTML
}return this
}}
}else{jindo.$Element.prototype.html=function(sHTML){var oArgs=___checkVarType(arguments,_param,"$Element#html");
switch(oArgs+""){case"g":return this._element.innerHTML;
case"s4str":case"s4num":case"s4bln":sHTML+="";
var oEl=this._element;
oEl.innerHTML=sHTML;
return this
}}
}}return this.html.apply(this,arguments)
};
jindo.$Element.prototype.outerHTML=function(){var e=this._element;
if(e.outerHTML!==undefined){return e.outerHTML
}var oDoc=e.ownerDocument||e.document||document;
var div=oDoc.createElement("div");
var par=e.parentNode;
if(!par){return e.innerHTML
}par.insertBefore(div,e);
div.style.display="none";
div.appendChild(e);
var s=div.innerHTML;
par.insertBefore(e,div);
par.removeChild(div);
return s
};
jindo.$Element.prototype.toString=jindo.$Element.prototype.outerHTML;
jindo.$Element.prototype.attach=function(sEvent,fpCallback){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["sEvent:String+","fpCallback:Function+"]},"$Element#attach");
return this._add("normal",sEvent.toLowerCase(),null,fpCallback)
};
jindo.$Element.prototype.detach=function(sEvent,fpCallback){var oArgs=jindo.$Jindo.checkVarType(arguments,{group_for_string:["sEvent:String+"],"4fun":["sEvent:String+","fpCallback:Function+"]},"$Element#detach");
return this._del("normal",sEvent.toLowerCase(),null,fpCallback)
};
jindo.$Element.prototype.delegate=function(sEvent,vFilter,fpCallback){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["sEvent:String+","vFilter:String+","fpCallback:Function+"],"4fun":["sEvent:String+","vFilter:Function+","fpCallback:Function+"]},"$Element#delegate");
return this._add("delegate",sEvent.toLowerCase(),vFilter,fpCallback)
};
jindo.$Element.prototype.undelegate=function(sEvent,vFilter,fpCallback){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["sEvent:String+","vFilter:String+","fpCallback:Function+"],"4fun":["sEvent:String+","vFilter:Function+","fpCallback:Function+"],group_for_string:["sEvent:String+","vFilter:String+"],group_for_function:["sEvent:String+","vFilter:Function+"]},"$Element#undelegate");
return this._del("delegate",sEvent.toLowerCase(),vFilter,fpCallback)
};
jindo.$Element.prototype._add=function(sType,sEvent,vFilter,fpCallback){var oManager=jindo.$Element.eventManager;
var oEvent=oManager.splitGroup(sEvent);
sEvent=oEvent.event;
var sGroup=oEvent.group;
if((!document.addEventListener)&&("domready"==sEvent)){if(window.top!=window){throw jindo.$Error(jindo.$Except.NOT_WORK_DOMREADY,"$Element#attach")
}jindo.$Element._domready(this._element,fpCallback);
return this
}fpCallback=oManager.revisionCallback(sType,sEvent,fpCallback);
sEvent=oManager.revisionEvent(sType,sEvent);
if(!oManager.isInit(this._key)){oManager.init(this._key,this._element)
}if(!oManager.hasEvent(this._key,sEvent)){oManager.initEvent(this,sEvent,sGroup)
}if(!oManager.hasGroup(this._key,sEvent,sGroup)){oManager.initGroup(this._key,sEvent,sGroup)
}oManager.addEventListener(this._key,sEvent,sGroup,sType,vFilter,fpCallback);
return this
};
jindo.$Element.prototype._del=function(sType,sEvent,vFilter,fpCallback){var oManager=jindo.$Element.eventManager;
var oEvent=oManager.splitGroup(sEvent);
sEvent=oEvent.event;
var sGroup=oEvent.group;
sEvent=oManager.revisionEvent(sType,sEvent);
if((!document.addEventListener)&&("domready"==sEvent)){var aNewDomReady=[];
var list=jindo.$Element._domready.list;
for(var i=0,l=list.length;
i<l;
i++){if(list[i]!=fpCallback){aNewDomReady.push(list[i])
}}jindo.$Element._domready.list=aNewDomReady;
return this
}var NONE_GROUP="_jindo_event_none";
if(sGroup===NONE_GROUP&&!jindo.$Jindo.isFunction(fpCallback)){throw new jindo.$Error(jindo.$Except.HAS_FUNCTION_FOR_GROUP,"$Element#"+(sType=="normal"?"detach":"delegate"))
}oManager.removeEventListener(this._key,sEvent,sGroup,sType,vFilter,fpCallback);
return this
};
jindo.$Element.eventManager=(function(){var eventStore={};
var NONE_GROUP="_jindo_event_none";
function bind(fpFunc,oScope,aPram){return function(){var args=_slice.call(arguments,0);
if(aPram.length){args=aPram.concat(args)
}return fpFunc.apply(oScope,args)
}
}var touch;
if(_JINDO_IS_MO){touch={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"}
}else{touch={mousedown:"mousedown",mousemove:"mousemove",mouseup:"mouseup"}
}return{revisionCallback:function(sType,sEvent,fpCallback){if((document.addEventListener!==undefined&&(sEvent=="mouseenter"||sEvent=="mouseleave"))||(_JINDO_IS_IE&&(sType=="delegate")&&(sEvent=="mouseenter"||sEvent=="mouseleave"))){var fpWrapCallback=jindo.$Element.eventManager._fireWhenElementBoundary(sType,fpCallback);
fpWrapCallback._origin_=fpCallback;
fpCallback=fpWrapCallback
}return fpCallback
},_fireWhenElementBoundary:function(sType,fpCallback){return function(oEvent){var woRelatedElement=oEvent.relatedElement?jindo.$Element(oEvent.relatedElement):null;
var eElement=oEvent.currentElement;
if(sType=="delegate"){eElement=oEvent.element
}if(woRelatedElement&&(woRelatedElement.isEqual(eElement)||woRelatedElement.isChildOf(eElement))){return
}fpCallback(oEvent)
}
},revisionEvent:function(sType,sEvent){if(document.addEventListener!==undefined){this.revisionEvent=function(sType,sEvent){sEvent=sEvent.toLowerCase();
if(sEvent=="domready"){sEvent="DOMContentLoaded"
}else{if(sEvent=="mousewheel"&&!_JINDO_IS_WK&&!_JINDO_IS_OP&&!_JINDO_IS_IE){sEvent="DOMMouseScroll"
}else{if(sEvent=="mouseenter"&&(!_JINDO_IS_IE||sType=="delegate")){sEvent="mouseover"
}else{if(sEvent=="mouseleave"&&(!_JINDO_IS_IE||sType=="delegate")){sEvent="mouseout"
}else{if(sEvent=="transitionend"||sEvent=="transitionstart"){var sPrefix,sPostfix=sEvent.replace("transition","");
sPostfix=sPostfix.substr(0,1).toUpperCase()+sPostfix.substr(1);
if(document.body.style.WebkitTransition!==undefined){sPrefix="webkit"
}else{if(document.body.style.OTransition!==undefined){sPrefix="o"
}else{if(document.body.style.MsTransition!==undefined){sPrefix="ms"
}}}sEvent=(sPrefix?sPrefix+"Transition":"transition")+sPostfix
}else{if(sEvent=="animationstart"||sEvent=="animationend"||sEvent=="animationiteration"){var sPrefix,sPostfix=sEvent.replace("animation","");
sPostfix=sPostfix.substr(0,1).toUpperCase()+sPostfix.substr(1);
if(document.body.style.WebkitAnimationName!==undefined){sPrefix="webkit"
}else{if(document.body.style.OAnimationName!==undefined){sPrefix="o"
}else{if(document.body.style.MsTransitionName!==undefined){sPrefix="ms"
}}}sEvent=(sPrefix?sPrefix+"Animation":"animation")+sPostfix
}else{if("mousedown|mousemove|mouseup".indexOf(sEvent)>-1){sEvent=touch[sEvent]
}}}}}}}return sEvent
}
}else{this.revisionEvent=function(sType,sEvent){if(sType=="delegate"&&sEvent=="mouseenter"){sEvent="mouseover"
}else{if(sType=="delegate"&&sEvent=="mouseleave"){sEvent="mouseout"
}else{if("mousedown|mousemove|mouseup".indexOf(sEvent)>-1){sEvent=touch[sEvent]
}}}return sEvent
}
}return this.revisionEvent(sType,sEvent)
},test:function(){return eventStore
},isInit:function(sKey){return !!eventStore[sKey]
},init:function(sKey,eEle){eventStore[sKey]={ele:eEle,event:{}}
},getEventConfig:function(sKey){return eventStore[sKey]
},hasEvent:function(sKey,sEvent){try{return !!eventStore[sKey]["event"][sEvent]
}catch(e){return false
}},hasGroup:function(sKey,sEvent,sGroup){return !!eventStore[sKey]["event"][sEvent]["type"][sGroup]
},initEvent:function(oThis,sEvent,sGroup){var sKey=oThis._key;
var oEvent=eventStore[sKey]["event"];
var fAroundFunc=bind(function(sEvent,wEvent){wEvent=wEvent||window.event;
if(wEvent.currentTarget===undefined){wEvent.currentTarget=this._element
}var weEvent=jindo.$Event(wEvent);
if(!weEvent.currentElement){weEvent.currentElement=this._element
}var oEle=weEvent.element;
var oManager=jindo.$Element.eventManager;
var oConfig=oManager.getEventConfig(weEvent.currentElement.__jindo__id);
var oType=oConfig.event[sEvent].type;
for(var i in oType){if(oType.hasOwnProperty(i)){var aNormal=oType[i].normal;
for(var j=0,l=aNormal.length;
j<l;
j++){aNormal[j].call(this,weEvent)
}var oDelegate=oType[i].delegate;
var aResultFilter;
var afpFilterCallback;
for(var k in oDelegate){if(oDelegate.hasOwnProperty(k)){aResultFilter=oDelegate[k].checker(oEle);
if(aResultFilter[0]){afpFilterCallback=oDelegate[k].callback;
weEvent.element=aResultFilter[1];
for(var m=0,leng=afpFilterCallback.length;
m<leng;
m++){afpFilterCallback[m].call(this,weEvent)
}}}}}}},oThis,[sEvent]);
oEvent[sEvent]={listener:fAroundFunc,type:{}};
jindo.$Element._eventBind(oThis._element,sEvent,fAroundFunc,false)
},initGroup:function(sKey,sEvent,sGroup){var oType=eventStore[sKey]["event"][sEvent]["type"];
oType[sGroup]={normal:[],delegate:{}}
},addEventListener:function(sKey,sEvent,sGroup,sType,vFilter,fpCallback){var oEventInfo=eventStore[sKey]["event"][sEvent]["type"][sGroup];
if(sType==="normal"){oEventInfo.normal.push(fpCallback)
}else{if(sType==="delegate"){if(!this.hasDelegate(oEventInfo,vFilter)){this.initDelegate(eventStore[sKey].ele,oEventInfo,vFilter)
}this.addDelegate(oEventInfo,vFilter,fpCallback)
}}},hasDelegate:function(oEventInfo,vFilter){return !!oEventInfo.delegate[vFilter]
},initDelegate:function(eOwnEle,oEventInfo,vFilter){var fpCheck;
if(jindo.$Jindo.isString(vFilter)){fpCheck=bind(function(eOwnEle,sCssquery,oEle){var eIncludeEle=oEle;
var ___query=jindo.cssquery;
var isIncludeEle=___query.test(oEle,sCssquery);
if(!isIncludeEle){var aPropagationElements=this._getParent(eOwnEle,oEle);
for(var i=0,leng=aPropagationElements.length;
i<leng;
i++){eIncludeEle=aPropagationElements[i];
if(___query.test(eIncludeEle,sCssquery)){isIncludeEle=true;
break
}}}return[isIncludeEle,eIncludeEle]
},this,[eOwnEle,vFilter])
}else{fpCheck=bind(function(eOwnEle,fpFilter,oEle){var eIncludeEle=oEle;
var isIncludeEle=fpFilter(eOwnEle,oEle);
if(!isIncludeEle){var aPropagationElements=this._getParent(eOwnEle,oEle);
for(var i=0,leng=aPropagationElements.length;
i<leng;
i++){eIncludeEle=aPropagationElements[i];
if(fpFilter(eOwnEle,eIncludeEle)){isIncludeEle=true;
break
}}}return[isIncludeEle,eIncludeEle]
},this,[eOwnEle,vFilter])
}oEventInfo.delegate[vFilter]={checker:fpCheck,callback:[]}
},addDelegate:function(oEventInfo,vFilter,fpCallback){oEventInfo.delegate[vFilter].callback.push(fpCallback)
},removeEventListener:function(sKey,sEvent,sGroup,sType,vFilter,fpCallback){var oEventInfo;
try{oEventInfo=eventStore[sKey]["event"][sEvent]["type"][sGroup]
}catch(e){return
}var aNewCallback=[];
var aOldCallback;
if(sType==="normal"){aOldCallback=oEventInfo.normal
}else{aOldCallback=oEventInfo.delegate[vFilter].callback
}if(sEvent==NONE_GROUP||jindo.$Jindo.isFunction(fpCallback)){for(var i=0,l=aOldCallback.length;
i<l;
i++){if((aOldCallback[i]._origin_||aOldCallback[i])!=fpCallback){aNewCallback.push(aOldCallback[i])
}}}if(sType==="normal"){delete oEventInfo.normal;
oEventInfo.normal=aNewCallback
}else{if(sType==="delegate"){delete oEventInfo.delegate[vFilter].callback;
oEventInfo.delegate[vFilter].callback=aNewCallback
}}this.cleanUp(sKey,sEvent)
},cleanUpAll:function(){var oEvent;
for(var sKey in eventStore){if(eventStore.hasOwnProperty(sKey)){this.cleanUpUsingKey(sKey,true)
}}},cleanUpUsingKey:function(sKey,bForce){var oEvent;
try{oEvent=eventStore[sKey].event
}catch(e){return
}for(var sEvent in oEvent){if(oEvent.hasOwnProperty(sEvent)){this.cleanUp(sKey,sEvent,bForce)
}}},cleanUp:function(sKey,sEvent,bForce){var oTypeInfo;
try{oTypeInfo=eventStore[sKey]["event"][sEvent]["type"]
}catch(e){return
}var oEventInfo;
var bHasEvent=false;
if(!bForce){for(var i in oTypeInfo){if(oTypeInfo.hasOwnProperty(i)){oEventInfo=oTypeInfo[i];
if(oEventInfo.normal.length){bHasEvent=true;
break
}var oDele=oEventInfo.delegate;
for(var j in oDele){if(oDele.hasOwnProperty(j)){if(oDele[j].callback.length){bHasEvent=true;
break
}}}if(bHasEvent){break
}}}}if(!bHasEvent){jindo.$Element._unEventBind(eventStore[sKey].ele,sEvent,eventStore[sKey]["event"][sEvent]["listener"]);
delete eventStore[sKey]["event"][sEvent];
var bAllDetach=true;
var oEvent=eventStore[sKey]["event"];
for(var k in oEvent){if(oEvent.hasOwnProperty(k)){bAllDetach=false;
break
}}if(bAllDetach){delete eventStore[sKey]
}}},splitGroup:function(sEvent){var aMatch=/\s*(.+?)\s*\(\s*(.*?)\s*\)/.exec(sEvent);
if(aMatch){return{event:aMatch[1].toLowerCase(),group:aMatch[2].toLowerCase()}
}else{return{event:sEvent.toLowerCase(),group:NONE_GROUP}
}},_getParent:function(oOwnEle,oEle){var e=oOwnEle;
var a=[],p=null;
var oDoc=oEle.ownerDocument||oEle.document||document;
while(oEle.parentNode&&p!=e){p=oEle.parentNode;
if(p==oDoc.documentElement){break
}a[a.length]=p;
oEle=p
}return a
}}
})();
jindo.$Element._domready=function(doc,func){if(jindo.$Element._domready.list===undefined){var f=null,l=jindo.$Element._domready.list=[func];
var done=false,execFuncs=function(){if(!done){done=true;
var evt={type:"domready",target:doc,currentTarget:doc};
while(f=l.shift()){f(evt)
}}};
(function(){try{doc.documentElement.doScroll("left")
}catch(e){setTimeout(arguments.callee,50);
return
}execFuncs()
})();
doc.onreadystatechange=function(){if(doc.readyState=="complete"){doc.onreadystatechange=null;
execFuncs()
}}
}else{jindo.$Element._domready.list.push(func)
}};
if(!jindo.$Jindo.isUndefined(window)&&!(_j_ag.indexOf("IEMobile")==-1&&_j_ag.indexOf("Mobile")>-1&&_JINDO_IS_SP)){(new jindo.$Element(window)).attach("unload",function(e){jindo.$Element.eventManager.cleanUpAll()
})
}jindo.$Element._getTransition=function(){var hasTransition=false,sTransitionName="";
if(document.body.style.trasition){hasTransition=true;
sTransitionName="trasition"
}else{if(document.body.style.webkitTransition!==undefined){hasTransition=true;
sTransitionName="webkitTransition"
}else{if(document.body.style.OTransition!==undefined){hasTransition=true;
sTransitionName="OTransition"
}}}return(jindo.$Element._getTransition=function(){return{hasTransition:hasTransition,name:sTransitionName}
})()
};
jindo.$Element.prototype.appear=function(duration,callback){var oTransition=jindo.$Element._getTransition();
function appear(){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4voi":[],"4num":["nDuration:Numeric"],"4fun":["nDuration:Numeric","fpCallback:Function+"]},"$Element#appear");
switch(oArgs+""){case"4voi":duration=0.3;
callback=function(){};
break;
case"4num":duration=oArgs.nDuration;
callback=function(){};
break;
case"4fun":duration=oArgs.nDuration;
callback=oArgs.fpCallback
}return[duration,callback]
}if(oTransition.hasTransition){jindo.$Element.prototype.appear=function(duration,callback){var aOption=appear.apply(this,_toArray(arguments));
duration=aOption[0];
callback=aOption[1];
var self=this;
var ele=this._element;
var name=oTransition.name;
var bindFunc=function(){self.show();
ele.style[name+"Property"]="";
ele.style[name+"Duration"]="";
ele.style[name+"TimingFunction"]="";
ele.style.opacity="";
callback.call(self,self);
ele.removeEventListener(name+"End",arguments.callee,false)
};
if(!this.visible()){ele.style.opacity=ele.style.opacity||0;
self.show()
}ele.addEventListener(name+"End",bindFunc,false);
ele.style[name+"Property"]="opacity";
ele.style[name+"Duration"]=duration+"s";
ele.style[name+"TimingFunction"]="linear";
setTimeout(function(){ele.style.opacity="1"
},1);
return this
}
}else{jindo.$Element.prototype.appear=function(duration,callback){var aOption=appear.apply(this,_toArray(arguments));
duration=aOption[0];
callback=aOption[1];
var self=this;
var op=this.opacity();
if(this._getCss(this._element,"display")=="none"){op=0
}if(op==1){return this
}try{clearTimeout(this._fade_timer)
}catch(e){}var step=(1-op)/((duration||0.3)*100);
var func=function(){op+=step;
self.opacity(op);
if(op>=1){self._element.style.filter="";
callback.call(self,self)
}else{self._fade_timer=setTimeout(func,10)
}};
this.show();
func();
return this
}
}return this.appear.apply(this,arguments)
};
jindo.$Element.prototype.disappear=function(duration,callback){var oTransition=jindo.$Element._getTransition();
function disappear(){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4voi":[],"4num":["nDuration:Numeric"],"4fun":["nDuration:Numeric","fpCallback:Function+"]},"$Element#disappear");
switch(oArgs+""){case"4voi":duration=0.3;
callback=function(){};
break;
case"4num":duration=oArgs.nDuration;
callback=function(){};
break;
case"4fun":duration=oArgs.nDuration;
callback=oArgs.fpCallback
}return[duration,callback]
}if(oTransition.hasTransition){jindo.$Element.prototype.disappear=function(duration,callback){var aOption=disappear.apply(this,_toArray(arguments));
duration=aOption[0];
callback=aOption[1];
var self=this;
var name=oTransition.name;
var bindFunc=function(){self.hide();
ele.style[name+"Property"]="";
ele.style[name+"Duration"]="";
ele.style[name+"TimingFunction"]="";
ele.style.opacity="";
callback.call(self,self);
this.removeEventListener(name+"End",arguments.callee,false)
};
var ele=this._element;
ele.addEventListener(name+"End",bindFunc,false);
ele.style[name+"Property"]="opacity";
ele.style[name+"Duration"]=duration+"s";
ele.style[name+"TimingFunction"]="linear";
setTimeout(function(){ele.style.opacity="0"
},1);
return this
}
}else{jindo.$Element.prototype.disappear=function(duration,callback){var aOption=disappear.apply(this,_toArray(arguments));
duration=aOption[0];
callback=aOption[1];
var self=this;
var op=this.opacity();
if(op==0){return this
}try{clearTimeout(this._fade_timer)
}catch(e){}var step=op/((duration||0.3)*100);
var func=function(){op-=step;
self.opacity(op);
if(op<=0){self._element.style.display="none";
self.opacity(1);
callback.call(self,self)
}else{self._fade_timer=setTimeout(func,10)
}};
func();
return this
}
}return this.disappear.apply(this,arguments)
};
jindo.$Element.prototype.offset=function(nTop,nLeft){var oArgs=jindo.$Jindo.checkVarType(arguments,{g:[],s:["nTop:Numeric","nLeft:Numeric"]},"$Element#offset");
switch(oArgs+""){case"g":return this.offset_get();
case"s":return this.offset_set(oArgs.nTop,oArgs.nLeft)
}};
jindo.$Element.prototype.offset_set=function(nTop,nLeft){var oEl=this._element;
var oPhantom=null;
if(isNaN(parseFloat(this._getCss(oEl,"top"),10))){oEl.style.top="0px"
}if(isNaN(parseFloat(this._getCss(oEl,"left"),10))){oEl.style.left="0px"
}var oPos=this.offset_get();
var oGap={top:nTop-oPos.top,left:nLeft-oPos.left};
oEl.style.top=parseFloat(this._getCss(oEl,"top"),10)+oGap.top+"px";
oEl.style.left=parseFloat(this._getCss(oEl,"left"),10)+oGap.left+"px";
return this
};
jindo.$Element.prototype.offset_get=function(nTop,nLeft){var oEl=this._element;
var oPhantom=null;
var bSafari=_JINDO_IS_SP;
var bIE=_JINDO_IS_IE;
var nVer=0;
if(bIE){if(document.documentMode){nVer=document.documentMode
}else{nVer=navigator.userAgent.match(/(?:MSIE) ([0-9.]+)/)[1]
}}var fpSafari=function(oEl){var oPos={left:0,top:0};
for(var oParent=oEl,oOffsetParent=oParent.offsetParent;
oParent=oParent.parentNode;
){if(oParent.offsetParent){oPos.left-=oParent.scrollLeft;
oPos.top-=oParent.scrollTop
}if(oParent==oOffsetParent){oPos.left+=oEl.offsetLeft+oParent.clientLeft;
oPos.top+=oEl.offsetTop+oParent.clientTop;
if(!oParent.offsetParent){oPos.left+=oParent.offsetLeft;
oPos.top+=oParent.offsetTop
}oOffsetParent=oParent.offsetParent;
oEl=oParent
}}return oPos
};
var fpOthers=function(oEl){var oPos={left:0,top:0};
var oDoc=oEl.ownerDocument||oEl.document||document;
var oHtml=oDoc.documentElement;
var oBody=oDoc.body;
if(oEl.getBoundingClientRect){if(!oPhantom){var bHasFrameBorder=(window==top);
if(!bHasFrameBorder){try{bHasFrameBorder=(window.frameElement&&window.frameElement.frameBorder==1)
}catch(e){}}if((bIE&&nVer<8&&window.external)&&bHasFrameBorder){oPhantom={left:2,top:2};
oBase=null
}else{oPhantom={left:0,top:0}
}}var box=oEl.getBoundingClientRect();
if(oEl!==oHtml&&oEl!==oBody){oPos.left=box.left-oPhantom.left;
oPos.top=box.top-oPhantom.top;
oPos.left+=oHtml.scrollLeft||oBody.scrollLeft;
oPos.top+=oHtml.scrollTop||oBody.scrollTop
}}else{if(oDoc.getBoxObjectFor){var box=oDoc.getBoxObjectFor(oEl);
var vpBox=oDoc.getBoxObjectFor(oHtml||oBody);
oPos.left=box.screenX-vpBox.screenX;
oPos.top=box.screenY-vpBox.screenY
}else{for(var o=oEl;
o;
o=o.offsetParent){oPos.left+=o.offsetLeft;
oPos.top+=o.offsetTop
}for(var o=oEl.parentNode;
o;
o=o.parentNode){if(o.tagName=="BODY"){break
}if(o.tagName=="TR"){oPos.top+=2
}oPos.left-=o.scrollLeft;
oPos.top-=o.scrollTop
}}}return oPos
};
return(bSafari?fpSafari:fpOthers)(oEl)
};
jindo.$Element.prototype.evalScripts=function(sHTML){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["sHTML:String+"]},"$Element#evalScripts");
var aJS=[];
sHTML=sHTML.replace(new RegExp("<script(\\s[^>]+)*>(.*?)<\/script>","gi"),function(_1,_2,sPart){aJS.push(sPart);
return""
});
eval(aJS.join("\n"));
return this
};
jindo.$Element._common=function(oElement,sMethod){try{return jindo.$Element(oElement)._element
}catch(e){throw TypeError(e.message.replace(/\$Element/g,"$Element#"+sMethod).replace(/Element\.html/g,"Element.html#"+sMethod))
}};
jindo.$Element._prepend=function(oParent,oChild){var nodes=oParent.childNodes;
if(nodes.length>0){oParent.insertBefore(oChild,nodes[0])
}else{oParent.appendChild(oChild)
}};
jindo.$Element.prototype.append=function(oElement){this._element.appendChild(jindo.$Element._common(oElement,"append"));
return this
};
jindo.$Element.prototype.prepend=function(oElement){jindo.$Element._prepend(this._element,jindo.$Element._common(oElement,"prepend"));
return this
};
jindo.$Element.prototype.replace=function(oElement){oElement=jindo.$Element._common(oElement,"replace");
if(jindo.cssquery){jindo.cssquery.release()
}var e=this._element;
var oParentNode=e.parentNode;
if(oParentNode&&oParentNode.replaceChild){oParentNode.replaceChild(oElement,e);
return this
}var _o=oElement;
oParentNode.insertBefore(_o,e);
oParentNode.removeChild(e);
return this
};
jindo.$Element.prototype.appendTo=function(oElement){jindo.$Element._common(oElement,"appendTo").appendChild(this._element);
return this
};
jindo.$Element.prototype.prependTo=function(oElement){jindo.$Element._prepend(jindo.$Element._common(oElement,"prependTo"),this._element);
return this
};
jindo.$Element.prototype.before=function(oElement){var o=jindo.$Element._common(oElement,"before");
this._element.parentNode.insertBefore(o,this._element);
return this
};
jindo.$Element.prototype.after=function(oElement){oElement=jindo.$Element._common(oElement,"after");
this.before(oElement);
jindo.$Element(oElement).before(this);
return this
};
jindo.$Element.prototype.parent=function(pFunc,limit){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4voi":[],"4fun":["fpFunc:Function+"],"4nul":["fpFunc:Null"],for_function_number:["fpFunc:Function+","nLimit:Numeric"],for_null_number:["fpFunc:Null","nLimit:Numeric"]},"$Element#parent");
var e=this._element;
switch(oArgs+""){case"4voi":return e.parentNode?jindo.$Element(e.parentNode):null;
case"4fun":case"4nul":limit=-1;
break;
case"for_function_number":case"for_null_number":if(oArgs.nLimit==0){limit=-1
}}var a=[],p=null;
while(e.parentNode&&limit--!=0){try{p=jindo.$Element(e.parentNode)
}catch(e){p=null
}if(e.parentNode==document.documentElement){break
}if(!pFunc||(pFunc&&pFunc.call(this,p))){a[a.length]=p
}e=e.parentNode
}return a
};
jindo.$Element.prototype.child=function(pFunc,limit){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4voi":[],"4fun":["fpFunc:Function+"],"4nul":["fpFunc:Null"],for_function_number:["fpFunc:Function+","nLimit:Numeric"],for_null_number:["fpFunc:Null","nLimit:Numeric"]},"$Element#child");
var e=this._element;
var a=[],c=null,f=null;
switch(oArgs+""){case"4voi":var child=e.childNodes;
var filtered=[];
for(var i=0,l=child.length;
i<l;
i++){if(child[i].nodeType==1){try{filtered.push(jindo.$Element(child[i]))
}catch(e){filtered.push(null)
}}}return filtered;
case"4fun":case"4nul":limit=-1;
break;
case"for_function_number":case"for_null_number":if(oArgs.nLimit==0){limit=-1
}}(f=function(el,lim,context){var ch=null,o=null;
for(var i=0;
i<el.childNodes.length;
i++){ch=el.childNodes[i];
if(ch.nodeType!=1){continue
}try{o=jindo.$Element(el.childNodes[i])
}catch(e){o=null
}if(!pFunc||(pFunc&&pFunc.call(context,o))){a[a.length]=o
}if(lim!=0){f(el.childNodes[i],lim-1)
}}})(e,limit-1,this);
return a
};
jindo.$Element.prototype.prev=function(pFunc){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4voi":[],"4fun":["fpFunc:Function+"],"4nul":["fpFunc:Null"]},"$Element#prev");
var e=this._element;
var a=[];
switch(oArgs+""){case"4voi":if(!e){return null
}do{e=e.previousSibling;
if(!e||e.nodeType!=1){continue
}try{if(e==null){return null
}return jindo.$Element(e)
}catch(e){return null
}}while(e);
try{if(e==null){return null
}return jindo.$Element(e)
}catch(e){return null
}case"4fun":case"4nul":if(!e){return a
}do{e=e.previousSibling;
if(!e||e.nodeType!=1){continue
}if(!pFunc||pFunc.call(this,e)){try{if(e==null){a[a.length]=null
}else{a[a.length]=jindo.$Element(e)
}}catch(e){a[a.length]=null
}}}while(e);
try{return a
}catch(e){return null
}}};
jindo.$Element.prototype.next=function(pFunc){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4voi":[],"4fun":["fpFunc:Function+"],"4nul":["fpFunc:Null"]},"$Element#next");
var e=this._element;
var a=[];
switch(oArgs+""){case"4voi":if(!e){return null
}do{e=e.nextSibling;
if(!e||e.nodeType!=1){continue
}try{if(e==null){return null
}return jindo.$Element(e)
}catch(e){return null
}}while(e);
try{if(e==null){return null
}return jindo.$Element(e)
}catch(e){return null
}case"4fun":case"4nul":if(!e){return a
}do{e=e.nextSibling;
if(!e||e.nodeType!=1){continue
}if(!pFunc||pFunc.call(this,e)){try{if(e==null){a[a.length]=null
}else{a[a.length]=jindo.$Element(e)
}}catch(e){a[a.length]=null
}}}while(e);
try{return a
}catch(e){return null
}}};
jindo.$Element.prototype.first=function(){var el=this._element.firstElementChild||this._element.firstChild;
if(!el){return null
}while(el&&el.nodeType!=1){el=el.nextSibling
}try{return el?jindo.$Element(el):null
}catch(e){return null
}};
jindo.$Element.prototype.last=function(){var el=this._element.lastElementChild||this._element.lastChild;
if(!el){return null
}while(el&&el.nodeType!=1){el=el.previousSibling
}try{return el?jindo.$Element(el):null
}catch(e){return null
}};
jindo.$Element._contain=function(eParent,eChild){if(document.compareDocumentPosition){return !!(eParent.compareDocumentPosition(eChild)&16)
}else{if(eParent.contains){return(eParent!==eChild)&&(eParent.contains?eParent.contains(eChild):true)
}else{if(document.body.contains){if(eParent===(eChild.ownerDocument||eChild.document)&&eChild.tagName&&eChild.tagName.toUpperCase()==="BODY"){return true
}if(eParent.nodeType===9&&eParent!==eChild){eParent=eParent.body
}try{return(eParent!==eChild)&&(eParent.contains?eParent.contains(eChild):true)
}catch(e){return false
}}else{var e=eParent;
var el=eChild;
while(e&&e.parentNode){e=e.parentNode;
if(e==el){return true
}}return false
}}}};
jindo.$Element.prototype.isChildOf=function(element){try{return jindo.$Element._contain(jindo.$Element(element)._element,this._element)
}catch(e){return false
}};
jindo.$Element.prototype.isParentOf=function(element){try{return jindo.$Element._contain(this._element,jindo.$Element(element)._element)
}catch(e){return false
}};
jindo.$Element.prototype.isEqual=function(element){try{return(this._element===jindo.$Element(element)._element)
}catch(e){return false
}};
jindo.$Element.prototype.fireEvent=function(sEvent,oProps){var _oParam={"4str":[jindo.$Jindo._F("sEvent:String+")],"4obj":["sEvent:String+","oProps:Hash+"]};
function IE(sEvent,oProps){var oArgs=jindo.$Jindo.checkVarType(arguments,_oParam,"$Element#fireEvent");
sEvent=(sEvent+"").toLowerCase();
var oEvent=document.createEventObject();
switch(oArgs+""){case"4obj":oProps=oArgs.oProps;
for(k in oProps){if(oProps.hasOwnProperty(k)){oEvent[k]=oProps[k]
}}oEvent.button=(oProps.left?1:0)+(oProps.middle?4:0)+(oProps.right?2:0);
oEvent.relatedTarget=oProps.relatedElement||null
}var ele=this._element;
if(this.tag=="input"&&sEvent=="click"){if(ele.type=="checkbox"){ele.checked=(!ele.checked)
}else{if(ele.type=="radio"){ele.checked=true
}}}this._element.fireEvent("on"+sEvent,oEvent);
return this
}function DOM2(sEvent,oProps){var oArgs=jindo.$Jindo.checkVarType(arguments,_oParam,"$Element#fireEvent");
var sType="HTMLEvents";
sEvent=(sEvent+"").toLowerCase();
if(sEvent=="click"||sEvent.indexOf("mouse")==0){sType="MouseEvent";
if(sEvent=="mousewheel"){sEvent="dommousescroll"
}}else{if(sEvent.indexOf("key")==0){sType="KeyboardEvent"
}}var evt;
switch(oArgs+""){case"4obj":oProps=oArgs.oProps;
oProps.button=0+(oProps.middle?1:0)+(oProps.right?2:0);
oProps.ctrl=oProps.ctrl||false;
oProps.alt=oProps.alt||false;
oProps.shift=oProps.shift||false;
oProps.meta=oProps.meta||false;
switch(sType){case"MouseEvent":evt=document.createEvent(sType);
evt.initMouseEvent(sEvent,true,true,null,oProps.detail||0,oProps.screenX||0,oProps.screenY||0,oProps.clientX||0,oProps.clientY||0,oProps.ctrl,oProps.alt,oProps.shift,oProps.meta,oProps.button,oProps.relatedElement||null);
break;
case"KeyboardEvent":if(window.KeyEvent){evt=document.createEvent("KeyEvents");
evt.initKeyEvent(sEvent,true,true,window,oProps.ctrl,oProps.alt,oProps.shift,oProps.meta,oProps.keyCode,oProps.keyCode)
}else{try{evt=document.createEvent("Events")
}catch(e){evt=document.createEvent("UIEvents")
}finally{evt.initEvent(sEvent,true,true);
evt.ctrlKey=oProps.ctrl;
evt.altKey=oProps.alt;
evt.shiftKey=oProps.shift;
evt.metaKey=oProps.meta;
evt.keyCode=oProps.keyCode;
evt.which=oProps.keyCode
}}break;
default:evt=document.createEvent(sType);
evt.initEvent(sEvent,true,true)
}break;
case"4str":evt=document.createEvent(sType);
evt.initEvent(sEvent,true,true)
}this._element.dispatchEvent(evt);
return this
}jindo.$Element.prototype.fireEvent=(document.dispatchEvent!==undefined)?DOM2:IE;
return this.fireEvent.apply(this,_toArray(arguments))
};
jindo.$Element.prototype.empty=function(){if(jindo.cssquery){jindo.cssquery.release()
}this.html("");
return this
};
jindo.$Element.prototype.remove=function(oChild){if(jindo.cssquery){jindo.cssquery.release()
}var ___element=jindo.$Element;
___element(___element._common(oChild,"remove")).leave();
return this
};
jindo.$Element.prototype.leave=function(){var e=this._element;
if(e.parentNode){if(jindo.cssquery){jindo.cssquery.release()
}e.parentNode.removeChild(e)
}if(this._element.__jindo__id){jindo.$Element.eventManager.cleanUpUsingKey(this._element.__jindo__id,true)
}return this
};
jindo.$Element.prototype.wrap=function(wrapper){var e=this._element;
wrapper=jindo.$Element._common(wrapper,"wrap");
if(e.parentNode){e.parentNode.insertBefore(wrapper,e)
}wrapper.appendChild(e);
return this
};
jindo.$Element.prototype.ellipsis=function(stringTail){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4voi":[],"4str":["stringTail:String+"]},"$Element#ellipsis");
stringTail=stringTail||"...";
var txt=this.text();
var len=txt.length;
var padding=parseInt(this._getCss(this._element,"paddingTop"),10)+parseInt(this._getCss(this._element,"paddingBottom"),10);
var cur_h=this._element.offsetHeight-padding;
var i=0;
var h=this.text("A")._element.offsetHeight-padding;
if(cur_h<h*1.5){this.text(txt);
return this
}cur_h=h;
while(cur_h<h*1.5){i+=Math.max(Math.ceil((len-i)/2),1);
cur_h=this.text(txt.substring(0,i)+stringTail)._element.offsetHeight-padding
}while(cur_h>h*1.5){i--;
cur_h=this.text(txt.substring(0,i)+stringTail)._element.offsetHeight-padding
}return this
};
jindo.$Element.prototype.indexOf=function(element){try{var e=jindo.$Element(element)._element;
var n=this._element.childNodes;
var c=0;
var l=n.length;
for(var i=0;
i<l;
i++){if(n[i].nodeType!=1){continue
}if(n[i]===e){return c
}c++
}}catch(e){}return -1
};
jindo.$Element.prototype.queryAll=function(sSelector){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["sSelector:String+"]},"$Element#queryAll");
var arrEle=jindo.cssquery(sSelector,this._element);
var returnArr=[];
for(var i=0,l=arrEle.length;
i<l;
i++){returnArr.push(jindo.$Element(arrEle[i]))
}return returnArr
};
jindo.$Element.prototype.query=function(sSelector){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["sSelector:String+"]},"$Element#query");
var ele=jindo.cssquery.getSingle(sSelector,this._element);
return ele===null?ele:jindo.$Element(ele)
};
jindo.$Element.prototype.test=function(sSelector){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["sSelector:String+"]},"$Element#test");
return jindo.cssquery.test(this._element,sSelector)
};
jindo.$Element.prototype.xpathAll=function(sXPath){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["sXPath:String+"]},"$Element#xpathAll");
var arrEle=jindo.cssquery.xpath(sXPath,this._element);
var returnArr=[];
for(var i=0,l=arrEle.length;
i<l;
i++){returnArr.push(jindo.$Element(arrEle[i]))
}return returnArr
};
jindo.$Element.insertAdjacentHTML=function(ins,html,insertType,type,fn,sType){var aArg=[html];
aArg.callee=arguments.callee;
var oArgs=jindo.$Jindo.checkVarType(aArg,{"4str":["sHTML:String+"]},"$Element#"+sType);
var _ele=ins._element;
html=html+"";
if(_ele.insertAdjacentHTML&&!(/^<(option|tr|td|th|col)(?:.*?)>/.test(html.replace(/^(\s|　)+|(\s|　)+$/g,"").toLowerCase()))){_ele.insertAdjacentHTML(insertType,html)
}else{var oDoc=_ele.ownerDocument||_ele.document||document;
var fragment=oDoc.createDocumentFragment();
var defaultElement;
var sTag=html.replace(/^(\s|　)+|(\s|　)+$/g,"");
var oParentTag={option:"select",tr:"tbody",thead:"table",tbody:"table",col:"table",td:"tr",th:"tr",div:"div"};
var aMatch=/^\<(option|tr|thead|tbody|td|th|col)(?:.*?)\>/i.exec(sTag);
var sChild=aMatch===null?"div":aMatch[1].toLowerCase();
var sParent=oParentTag[sChild];
defaultElement=jindo._createEle(sParent,sTag,oDoc,true);
var scripts=defaultElement.getElementsByTagName("script");
for(var i=0,l=scripts.length;
i<l;
i++){scripts[i].parentNode.removeChild(scripts[i])
}while(defaultElement[type]){fragment.appendChild(defaultElement[type])
}fn(fragment.cloneNode(true))
}return ins
};
jindo.$Element.prototype.appendHTML=function(sHTML){return jindo.$Element.insertAdjacentHTML(this,sHTML,"beforeEnd","firstChild",jindo.$Fn(function(oEle){var ele=this._element;
if(ele.tagName.toLowerCase()==="table"){var nodes=ele.childNodes;
for(var i=0,l=nodes.length;
i<l;
i++){if(nodes[i].nodeType==1){ele=nodes[i];
break
}}}ele.appendChild(oEle)
},this).bind(),"appendHTML")
};
jindo.$Element.prototype.prependHTML=function(sHTML){var ___element=jindo.$Element;
return ___element.insertAdjacentHTML(this,sHTML,"afterBegin","firstChild",jindo.$Fn(function(oEle){var ele=this._element;
if(ele.tagName.toLowerCase()==="table"){var nodes=ele.childNodes;
for(var i=0,l=nodes.length;
i<l;
i++){if(nodes[i].nodeType==1){ele=nodes[i];
break
}}}___element._prepend(ele,oEle)
},this).bind(),"prependHTML")
};
jindo.$Element.prototype.beforeHTML=function(sHTML){return jindo.$Element.insertAdjacentHTML(this,sHTML,"beforeBegin","firstChild",jindo.$Fn(function(oEle){this._element.parentNode.insertBefore(oEle,this._element)
},this).bind(),"beforeHTML")
};
jindo.$Element.prototype.afterHTML=function(sHTML){return jindo.$Element.insertAdjacentHTML(this,sHTML,"afterEnd","firstChild",jindo.$Fn(function(oEle){this._element.parentNode.insertBefore(oEle,this._element.nextSibling)
},this).bind(),"afterHTML")
};
jindo.$Element.prototype.hasEventListener=function(sEvent){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["sEvent:String+"]},"$Element#hasEventListener");
if(this._key){return !!jindo.$Element.eventManager.hasEvent(this._key,oArgs.sEvent)
}return false
};
jindo.$Element.prototype.preventTapHighlight=function(bFlag){if(_JINDO_IS_MO){var sClassName="no_tap_highlight"+new Date().getTime();
var elStyleTag=document.createElement("style");
var elHTML=document.getElementsByTagName("html")[0];
elStyleTag.type="text/css";
elHTML.insertBefore(elStyleTag,elHTML.firstChild);
var oSheet=elStyleTag.sheet||elStyleTag.styleSheet;
oSheet.insertRule("."+sClassName+" { -webkit-tap-highlight-color: rgba(0,0,0,0); }",0);
oSheet.insertRule("."+sClassName+" * { -webkit-tap-highlight-color: rgba(0,0,0,.25); }",0);
jindo.$Element.prototype.preventTapHighlight=function(bFlag){return this[bFlag?"addClass":"removeClass"](sClassName)
}
}else{jindo.$Element.prototype.preventTapHighlight=function(bFlag){return this
}
}return this.preventTapHighlight.apply(this,_toArray(arguments))
};
jindo.$Element.prototype.data=function(sKey,vValue){var oType={g:["sKey:String+"],s4var:["sKey:String+","vValue:Variant"],s4obj:["oObj:Hash+"]};
if(document.body.dataset){jindo.$Element.prototype.data=function(sKey,vValue){var sToStr,oArgs=jindo.$Jindo.checkVarType(arguments,oType,"$Element#data");
var isNull=jindo.$Jindo.isNull;
switch(oArgs+""){case"g":var sDateSet=this._element.dataset[sKey];
return sDateSet?window.JSON.parse(sDateSet):null;
case"s4var":var oData;
if(isNull(vValue)){delete this._element.dataset[sKey];
return this
}else{oData={};
oData[sKey]=vValue;
sKey=oData
}case"s4obj":for(var i in sKey){if(isNull(sKey[i])){delete this._element.dataset[i]
}else{sToStr=jindo.$Json._oldToString(sKey[i]);
if(sToStr){this._element.dataset[i]=sToStr
}}}return this
}}
}else{jindo.$Element.prototype.data=function(sKey,vValue){var sToStr,oArgs=jindo.$Jindo.checkVarType(arguments,oType,"$Element#data");
var isNull=jindo.$Jindo.isNull;
switch(oArgs+""){case"g":var sVal=this._element.getAttribute("data-"+sKey);
return sVal?eval("("+this._element.getAttribute("data-"+sKey)+")"):null;
case"s4var":var oData;
if(isNull(vValue)){this._element.removeAttribute("data-"+sKey);
return this
}else{oData={};
oData[sKey]=vValue;
sKey=oData
}case"s4obj":for(var i in sKey){if(isNull(sKey[i])){this._element.removeAttribute("data-"+sKey)
}else{sToStr=jindo.$Json._oldToString(sKey[i]);
if(sToStr){this._element.setAttribute("data-"+i,sToStr)
}}}return this
}}
}return this.data.apply(this,_toArray(arguments))
};
jindo.$Fn=function(func,thisObject){var cl=arguments.callee;
if(func instanceof cl){return func
}if(!(this instanceof cl)){try{jindo.$Jindo._maxWarn(arguments.length,2,"$Fn");
return new cl(func,thisObject)
}catch(e){if(e instanceof TypeError){return null
}throw e
}}var oArgs=jindo.$Jindo.checkVarType(arguments,{"4fun":["func:Function+"],"4fun2":["func:Function+","thisObject:Variant"],"4str":["func:String+","thisObject:String+"]},"$Fn");
this._tmpElm=null;
this._key=null;
switch(oArgs+""){case"4str":this._func=eval("false||function("+func+"){"+thisObject+"}");
break;
case"4fun":case"4fun2":this._func=func;
this._this=thisObject
}};
jindo.$Fn._commonPram=function(oPram,sMethod){return jindo.$Jindo.checkVarType(oPram,{"4ele":["eElement:Element+","sEvent:String+"],"4ele2":["eElement:Element+","sEvent:String+","bUseCapture:Boolean"],"4str":["eElement:String+","sEvent:String+"],"4str2":["eElement:String+","sEvent:String+","bUseCapture:Boolean"],"4arr":["aElement:Array+","sEvent:String+"],"4arr2":["aElement:Array+","sEvent:String+","bUseCapture:Boolean"],"4doc":["eElement:Document+","sEvent:String+"],"4win":["eElement:Window+","sEvent:String+"],"4doc2":["eElement:Document+","sEvent:String+","bUseCapture:Boolean"],"4win2":["eElement:Window+","sEvent:String+","bUseCapture:Boolean"]},sMethod)
};
jindo.$Fn.prototype.$value=function(){return this._func
};
jindo.$Fn.prototype.bind=function(){var a=_slice.call(arguments,0);
var f=this._func;
var t=this._this||this;
var b=function(){var args=_slice.call(arguments,0);
if(a.length){args=a.concat(args)
}return f.apply(t,args)
};
return b
};
jindo.$Fn.prototype.attach=function(oElement,sEvent,bUseCapture){var oArgs=jindo.$Fn._commonPram(arguments,"$Fn#attach");
var fn=null,l,ev=sEvent,el=oElement,ua=_j_ag;
if(bUseCapture!==true){bUseCapture=false
}this._bUseCapture=bUseCapture;
switch(oArgs+""){case"4arr":case"4arr2":var el=oArgs.aElement;
var ev=oArgs.sEvent;
for(var i=0,l=el.length;
i<l;
i++){this.attach(el[i],ev,!!bUseCapture)
}return this
}fn=this._bind=this._bind?this._bind:this.bind();
jindo.$Element(el).attach(ev,fn);
return this
};
jindo.$Fn.prototype.detach=function(oElement,sEvent,bUseCapture){var oArgs=jindo.$Fn._commonPram(arguments,"$Fn#detach");
var fn=null,l,el=oElement,ev=sEvent,ua=_j_ag;
switch(oArgs+""){case"4arr":case"4arr2":var el=oArgs.aElement;
var ev=oArgs.sEvent;
for(var i=0,l=el.length;
i<l;
i++){this.detach(el[i],ev,!!bUseCapture)
}return this
}fn=this._bind=this._bind?this._bind:this.bind();
jindo.$Element(oArgs.eElement).detach(oArgs.sEvent,fn);
return this
};
jindo.$Fn.prototype.delay=function(nSec,args){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4num":["nSec:Numeric"],"4arr":["nSec:Numeric","args:Array+"]},"$Fn#delay");
switch(oArgs+""){case"4num":args=args||[];
break;
case"4arr":args=oArgs.args
}this._delayKey=setTimeout(this.bind.apply(this,args),nSec*1000);
return this
};
jindo.$Fn.prototype.setInterval=function(nSec,args){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4num":["nSec:Numeric"],"4arr":["nSec:Numeric","args:Array+"]},"$Fn#setInterval");
switch(oArgs+""){case"4num":args=args||[];
break;
case"4arr":args=oArgs.args
}this._repeatKey=setInterval(this.bind.apply(this,args),nSec*1000);
return this
};
jindo.$Fn.prototype.repeat=jindo.$Fn.prototype.setInterval;
jindo.$Fn.prototype.stopDelay=function(){if(this._delayKey!==undefined){window.clearTimeout(this._delayKey);
delete this._delayKey
}return this
};
jindo.$Fn.prototype.stopRepeat=function(){if(this._repeatKey!==undefined){window.clearInterval(this._repeatKey);
delete this._repeatKey
}return this
};
jindo.$Event=(function(isMobile){if(isMobile){return function(e){var cl=arguments.callee;
if(e instanceof cl){return e
}if(!(this instanceof cl)){return new cl(e)
}this._event=this._posEvent=e;
this._globalEvent=window.event;
this.type=e.type.toLowerCase();
if(this.type=="dommousescroll"){this.type="mousewheel"
}else{if(this.type=="domcontentloaded"){this.type="domready"
}}this.isTouch=false;
if(this.type.indexOf("touch")>-1){this._posEvent=e.changedTouches[0];
this.isTouch=true
}this.canceled=false;
this.element=e.target||e.srcElement;
this.currentElement=e.currentTarget;
this.relatedElement=null;
if(!jindo.$Jindo.isUndefined(e.relatedTarget)){this.relatedElement=e.relatedTarget
}else{if(e.fromElement&&e.toElement){this.relatedElement=e[(this.type=="mouseout")?"toElement":"fromElement"]
}}}
}else{return function(e){var cl=arguments.callee;
if(e instanceof cl){return e
}if(!(this instanceof cl)){return new cl(e)
}if(e===undefined){e=window.event
}if(e===window.event&&document.createEventObject){e=document.createEventObject(e)
}this.isTouch=false;
this._event=this._posEvent=e;
this._globalEvent=window.event;
this.type=e.type.toLowerCase();
if(this.type=="dommousescroll"){this.type="mousewheel"
}else{if(this.type=="domcontentloaded"){this.type="domready"
}}this.canceled=false;
this.element=e.target||e.srcElement;
this.currentElement=e.currentTarget;
this.relatedElement=null;
if(e.relatedTarget!==undefined){this.relatedElement=e.relatedTarget
}else{if(e.fromElement&&e.toElement){this.relatedElement=e[(this.type=="mouseout")?"toElement":"fromElement"]
}}}
}})(_JINDO_IS_MO);
jindo.$Event.prototype.mouse=function(bIsScrollbar){jindo.$Jindo.checkVarType(arguments,{voi:[],bol:["bIsScrollbar:Boolean"]});
var e=this._event;
var ele=this.element;
var delta=0;
var left=false,mid=false,right=false;
var left=e.which?e.button==0:!!(e.button&1);
var mid=e.which?e.button==1:!!(e.button&4);
var right=e.which?e.button==2:!!(e.button&2);
var ret={};
if(e.wheelDelta){delta=e.wheelDelta/120
}else{if(e.detail){delta=-e.detail/3
}}var scrollbar;
if(bIsScrollbar){scrollbar=_event_isScroll(ele,e)
}ret={delta:delta,left:left,middle:mid,right:right,scrollbar:scrollbar};
this.mouse=function(bIsScrollbar){if(bIsScrollbar){ret.scrollbar=_event_isScroll(this.element,this._event);
this.mouse=function(){return ret
}
}return ret
};
return ret
};
function _event_getScrollbarSize(){var oScrollbarSize={x:0,y:0};
var elDummy=jindo.$(['<div style="',["overflow:scroll","width:100px","height:100px","position:absolute","left:-1000px","border:0","margin:0","padding:0"].join(" !important;"),' !important;">'].join(""));
document.body.insertBefore(elDummy,document.body.firstChild);
oScrollbarSize={x:elDummy.offsetWidth-elDummy.scrollWidth,y:elDummy.offsetHeight-elDummy.scrollHeight};
document.body.removeChild(elDummy);
elDummy=null;
_event_getScrollbarSize=function(){return oScrollbarSize
};
return oScrollbarSize
}function _event_isScroll(ele,e){if(ele.componentFromPoint){return/(scrollbar|outside)/.test(ele.componentFromPoint(e.clientX,e.clientY))
}if(_JINDO_IS_FF){try{var name=e.originalTarget.localName;
return(name==="thumb"||name==="slider"||name==="scrollcorner"||name==="scrollbarbutton")
}catch(ex){return true
}}var sDisplay=jindo.$Element(ele).css("display");
if(sDisplay==="inline"){return false
}var oPos={x:e.offsetX||e.layerX||0,y:e.offsetY||e.layerY||0};
if(_JINDO_IS_WK){oPos.x-=ele.clientLeft;
oPos.y-=ele.clientTop
}var oScrollbarSize=_event_getScrollbarSize();
var oScrollPos={x:[ele.clientWidth,ele.clientWidth+oScrollbarSize.x],y:[ele.clientHeight,ele.clientHeight+oScrollbarSize.y]};
return((oScrollPos.x[0]<=oPos.x&&oPos.x<=oScrollPos.x[1])||(oScrollPos.y[0]<=oPos.y&&oPos.y<=oScrollPos.y[1]))
}jindo.$Event.prototype.key=function(){var e=this._event;
var k=e.keyCode||e.charCode;
var ret={keyCode:k,alt:e.altKey,ctrl:e.ctrlKey,meta:e.metaKey,shift:e.shiftKey,up:(k==38),down:(k==40),left:(k==37),right:(k==39),enter:(k==13),esc:(k==27)};
this.key=function(){return ret
};
return ret
};
jindo.$Event.prototype.pos=function(bGetOffset){jindo.$Jindo.checkVarType(arguments,{voi:[],bol:["bGetOffset:Boolean"]});
var e=this._posEvent;
var doc=(this.element.ownerDocument||document);
var b=doc.body;
var de=doc.documentElement;
var pos=[b.scrollLeft||de.scrollLeft,b.scrollTop||de.scrollTop];
var ret={clientX:e.clientX,clientY:e.clientY,pageX:"pageX" in e?e.pageX:e.clientX+pos[0]-b.clientLeft,pageY:"pageY" in e?e.pageY:e.clientY+pos[1]-b.clientTop,layerX:"offsetX" in e?e.offsetX:e.layerX-1,layerY:"offsetY" in e?e.offsetY:e.layerY-1};
if(bGetOffset&&jindo.$Element){var offset=jindo.$Element(this.element).offset();
ret.offsetX=ret.pageX-offset.left;
ret.offsetY=ret.pageY-offset.top
}return ret
};
jindo.$Event.prototype.stop=function(nCancel){jindo.$Jindo.checkVarType(arguments,{voi:[],num:["nCancel:Numeric"]});
nCancel=nCancel||jindo.$Event.CANCEL_ALL;
var e=(window.event&&window.event==this._globalEvent)?this._globalEvent:this._event;
var b=!!(nCancel&jindo.$Event.CANCEL_BUBBLE);
var d=!!(nCancel&jindo.$Event.CANCEL_DEFAULT);
this.canceled=true;
if(e.preventDefault!==undefined&&d){e.preventDefault()
}if(e.stopPropagation!==undefined&&b){e.stopPropagation()
}if(d){e.returnValue=false
}if(b){e.cancelBubble=true
}return this
};
jindo.$Event.prototype.stopDefault=function(){return this.stop(jindo.$Event.CANCEL_DEFAULT)
};
jindo.$Event.prototype.stopBubble=function(){return this.stop(jindo.$Event.CANCEL_BUBBLE)
};
jindo.$Event.CANCEL_BUBBLE=1;
jindo.$Event.CANCEL_DEFAULT=2;
jindo.$Event.CANCEL_ALL=3;
jindo.$Event.prototype.$value=function(){return this._event
};
(function(aType){var sTouches="Touch";
for(var i=0,l=aType.length;
i<l;
i++){jindo.$Event.prototype[aType[i]+sTouches]=(function(sType){return function(nIndex){if(this.isTouch){var oRet=[];
var ev=this._event[sType+"es"];
var l=ev.length;
var e;
for(var i=0;
i<l;
i++){e=ev[i];
oRet.push({id:e.identifier,event:this,element:e.target,_posEvent:e,pos:jindo.$Event.prototype.pos})
}this[sType]=function(nIndex){var oArgs=jindo.$Jindo.checkVarType(arguments,{"void":[],"4num":["nIndex:Numeric"]},"$Event#"+sType);
if(oArgs+""=="void"){return oRet
}return oRet[nIndex]
}
}else{this[sType]=function(nIndex){throw new jindo.$Error(jindo.$Except.NOT_SUPPORT_METHOD,"$Event#"+sType)
}
}return this[sType].apply(this,_toArray(arguments))
}
})(aType[0]+sTouches)
}})(["changed","target"]);
jindo.$ElementList=function(els){var cl=arguments.callee;
if(els instanceof cl){return els
}if(!(this instanceof cl)){try{return new cl(els)
}catch(e){if(e instanceof TypeError){return null
}throw e
}}var oArgs=jindo.$Jindo.checkVarType(arguments,{"4arr":["aEle:Array+"],"4str":["sCssQuery:String+"],"4nul":["oEle:Null"],"4und":["oEle:Undefined"]},"$ElementList");
switch(oArgs+""){case"4arr":els=oArgs.aEle;
break;
case"4str":els=jindo.cssquery(oArgs.sCssQuery);
break;
case"4nul":case"4und":els=[]
}this._elements=[];
for(var i=0,l=els.length;
i<l;
i++){this._elements.push(jindo.$Element(els[i]))
}};
(function(proto){var setters=["show","hide","toggle","addClass","removeClass","toggleClass","fireEvent","leave","empty","className","width","height","text","html","css","attr"];
for(var i=0,l=setters.length;
i<l;
i++){var name=setters[i];
if(jindo.$Element.prototype[name]){proto[setters[i]]=(function(name){return function(){try{var args=[];
for(var j=0,m=arguments.length;
j<m;
j++){args.push(arguments[j])
}for(var k=0,n=this._elements.length;
k<n;
k++){this._elements[k][name].apply(this._elements[k],args)
}return this
}catch(e){throw TypeError(e.message.replace(/\$Element/g,"$Elementlist#"+name).replace(/Element\.html/g,"Elementlist.html#"+name))
}}
})(setters[i])
}}var setters2=["appear","disappear"];
for(var i=0,l=setters2.length;
i<l;
i++){if(jindo.$Element.prototype[name]){proto[setters2[i]]=(function(name){return function(duration,callback){try{var self=this;
for(var j=0,m=this._elements.length;
j<m;
j++){if(j==m-1){this._elements[j][name](duration,function(){callback(self)
})
}else{this._elements[j][name](duration)
}}return this
}catch(e){throw TypeError(e.message.replace(/\$Element/g,"$Elementlist#"+name).replace(/Element\.html/g,"Elementlist.html#"+name))
}}
})(setters2[i])
}}})(jindo.$ElementList.prototype);
jindo.$ElementList.prototype.get=function(idx){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4num":["nIdx:Numeric"]},"$ElementList#get");
return this._elements[idx]
};
jindo.$ElementList.prototype.getFirst=function(){return this._elements[0]
};
jindo.$ElementList.prototype.getLast=function(){return this._elements[Math.max(this._elements.length-1,0)]
};
jindo.$ElementList.prototype.length=function(nLen,oValue){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4voi":[],"4num":[jindo.$Jindo._F("nLen:Numeric")],"4var":["nLen:Numeric","oValue:Variant"]},"$ElementList#length");
var waEle=jindo.$A(this._elements);
try{return waEle.length.apply(waEle,_toArray(arguments))
}catch(e){throw TypeError(e.message.replace(/\$A/g,"$Elementlist#length").replace(/A\.html/g,"Elementlist.html#length"))
}};
jindo.$ElementList.prototype.$value=function(){return this._elements
};
jindo.$S=function(str){var cl=arguments.callee;
if(str instanceof cl){return str
}if(!(this instanceof cl)){try{jindo.$Jindo._maxWarn(arguments.length,1,"$Json");
return new cl(str||"")
}catch(e){if(e instanceof TypeError){return null
}throw e
}}var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["str:String+"]},"$S");
this._str=str+""
};
jindo.$S.prototype.$value=function(){return this._str
};
jindo.$S.prototype.toString=jindo.$S.prototype.$value;
jindo.$S.prototype.trim=function(){if("".trim){jindo.$S.prototype.trim=function(){return jindo.$S(this._str.trim())
}
}else{jindo.$S.prototype.trim=function(){return jindo.$S(this._str.replace(/^(\s|　)+/g,"").replace(/(\s|　)+$/g,""))
}
}return jindo.$S(this.trim())
};
jindo.$S.prototype.escapeHTML=function(){var entities={'"':"quot","&":"amp","<":"lt",">":"gt","'":"#39"};
var s=this._str.replace(/[<>&"']/g,function(m0){return entities[m0]?"&"+entities[m0]+";":m0
});
return jindo.$S(s)
};
jindo.$S.prototype.stripTags=function(){return jindo.$S(this._str.replace(/<\/?(?:h[1-5]|[a-z]+(?:\:[a-z]+)?)[^>]*>/ig,""))
};
jindo.$S.prototype.times=function(nTimes){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["nTimes:Numeric"]},"$S#times");
if(!oArgs){return this
}return jindo.$S(Array(oArgs.nTimes+1).join(this._str))
};
jindo.$S.prototype.unescapeHTML=function(){var entities={quot:'"',amp:"&",lt:"<",gt:">","#39":"'"};
var s=this._str.replace(/&([a-z]+|#[0-9]+);/g,function(m0,m1){return entities[m1]?entities[m1]:m0
});
return jindo.$S(s)
};
jindo.$S.prototype.escape=function(){var s=this._str.replace(/([\u0080-\uFFFF]+)|[\n\r\t"'\\]/g,function(m0,m1,_){if(m1){return escape(m1).replace(/%/g,"\\")
}return(_={"\n":"\\n","\r":"\\r","\t":"\\t"})[m0]?_[m0]:"\\"+m0
});
return jindo.$S(s)
};
jindo.$S.prototype.bytes=function(vConfig){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4voi":[],"4num":["nConfig:Numeric"],"4obj":["nConfig:Hash+"]},"$S#bytes");
var code=0,bytes=0,i=0,len=this._str.length;
var charset=((document.charset||document.characterSet||document.defaultCharset)+"");
var cut,nBytes;
switch(oArgs+""){case"4voi":cut=false;
break;
case"4num":cut=true;
nBytes=vConfig;
break;
case"4obj":charset=vConfig.charset||charset;
nBytes=vConfig.size||false;
cut=!!nBytes;
break
}if(charset.toLowerCase()=="utf-8"){for(i=0;
i<len;
i++){code=this._str.charCodeAt(i);
if(code<128){bytes+=1
}else{if(code<2048){bytes+=2
}else{if(code<65536){bytes+=3
}else{bytes+=4
}}}if(cut&&bytes>nBytes){this._str=this._str.substr(0,i);
break
}}}else{for(i=0;
i<len;
i++){bytes+=(this._str.charCodeAt(i)>128)?2:1;
if(cut&&bytes>nBytes){this._str=this._str.substr(0,i);
break
}}}return cut?this:bytes
};
jindo.$S.prototype.parseString=function(){if(this._str==""){return{}
}var str=this._str.split(/&/g),pos,key,val,buf={},isescape=false;
for(var i=0;
i<str.length;
i++){key=str[i].substring(0,pos=str[i].indexOf("=")),isescape=false;
try{val=decodeURIComponent(str[i].substring(pos+1))
}catch(e){isescape=true;
val=decodeURIComponent(unescape(str[i].substring(pos+1)))
}if(key.substr(key.length-2,2)=="[]"){key=key.substring(0,key.length-2);
if(jindo.$Jindo.isUndefined(buf[key])){buf[key]=[]
}buf[key][buf[key].length]=isescape?escape(val):val
}else{buf[key]=isescape?escape(val):val
}}return buf
};
jindo.$S.prototype.escapeRegex=function(){var s=this._str;
var r=/([\?\.\*\+\-\/\(\)\{\}\[\]\:\!\^\$\\\|])/g;
return jindo.$S(s.replace(r,"\\$1"))
};
jindo.$S.prototype.format=function(){var args=arguments;
var idx=0;
var s=this._str.replace(/%([ 0])?(-)?([1-9][0-9]*)?([bcdsoxX])/g,function(m0,m1,m2,m3,m4){var a=args[idx++];
var ret="",pad="";
m3=m3?+m3:0;
if(m4=="s"){ret=a+""
}else{if(" bcdoxX".indexOf(m4)>0){if(!jindo.$Jindo.isNumeric(a)){return""
}ret=(m4=="c")?String.fromCharCode(a):a.toString(({b:2,d:10,o:8,x:16,X:16})[m4]);
if(" X".indexOf(m4)>0){ret=ret.toUpperCase()
}}}if(ret.length<m3){pad=jindo.$S(m1||" ").times(m3-ret.length)._str
}(m2=="-")?(ret+=pad):(ret=pad+ret);
return ret
});
return jindo.$S(s)
};
jindo.$Document=function(el){var cl=arguments.callee;
if(el instanceof cl){return el
}if(!(this instanceof cl)){try{jindo.$Jindo._maxWarn(arguments.length,1,"$Document");
return new cl(el||document)
}catch(e){if(e instanceof TypeError){return null
}throw e
}}var oArgs=jindo.$Jindo.checkVarType(arguments,{"4doc":["oDocument:Document+"]},"$Document");
if(oArgs==null){this._doc=document
}else{this._doc=el
}this._docKey=this.renderingMode()=="Standards"?"documentElement":"body"
};
(function(){var qu=jindo.cssquery;
var type={query:qu.getSingle,queryAll:qu,xpathAll:qu.xpath};
for(var i in type){jindo.$Document.prototype[i]=(function(sMethod,fp){return function(sQuery){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["sQuery:String+"]},"$Document#"+sMethod);
return fp(sQuery,this._doc)
}
})(i,type[i])
}})();
jindo.$Document.prototype.$value=function(){return this._doc
};
jindo.$Document.prototype.scrollSize=function(){var oDoc=this._doc[_JINDO_IS_WK?"body":this._docKey];
return{width:Math.max(oDoc.scrollWidth,oDoc.clientWidth),height:Math.max(oDoc.scrollHeight,oDoc.clientHeight)}
};
jindo.$Document.prototype.scrollPosition=function(){var oDoc=this._doc[_JINDO_IS_WK?"body":this._docKey];
return{left:oDoc.scrollLeft||window.pageXOffset||window.scrollX||0,top:oDoc.scrollTop||window.pageYOffset||window.scrollY||0}
};
jindo.$Document.prototype.clientSize=function(){var oDoc=this._doc[this._docKey];
var isSafari=_JINDO_IS_SP&&!_JINDO_IS_CH;
return(isSafari)?{width:window.innerWidth,height:window.innerHeight}:{width:oDoc.clientWidth,height:oDoc.clientHeight}
};
jindo.$Document.prototype.renderingMode=function(){var agent=navigator.userAgent;
var isIe=_JINDO_IS_IE;
var isSafari=(_JINDO_IS_WK&&!_JINDO_IS_CH&&navigator.vendor.indexOf("Apple")>-1);
var sRet;
if("compatMode" in this._doc){sRet=this._doc.compatMode=="CSS1Compat"?"Standards":(isIe?"Quirks":"Almost")
}else{sRet=isSafari?"Standards":"Quirks"
}return sRet
};
jindo.$Form=function(el){var cl=arguments.callee;
if(el instanceof cl){return el
}if(!(this instanceof cl)){try{jindo.$Jindo._maxWarn(arguments.length,1,"$Form");
return new cl(el)
}catch(e){if(e instanceof TypeError){return null
}throw e
}}var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["oForm:String+"],"4ele":["oForm:Element+"]},"$Form");
switch(oArgs+""){case"4str":el=jindo.$(el);
break
}if(!(el.tagName&&el.tagName.toUpperCase()=="FORM")){throw TypeError("only form")
}this._form=el
};
jindo.$Form.prototype.$value=function(){return this._form
};
jindo.$Form.prototype.serialize=function(){var self=this;
var oRet={};
var nLen=arguments.length;
var fpInsert=function(eEle,sKey){if(!eEle.disabled){var sVal=self.value(sKey);
if(sVal!==undefined){oRet[sKey]=sVal
}}};
if(nLen==0){var len=this._form.elements.length;
for(var i=0;
i<len;
i++){var o=this._form.elements[i];
if(o.name){fpInsert(o,o.name)
}}}else{for(var i=0;
i<nLen;
i++){fpInsert(this.element(arguments[i]),arguments[i])
}}return jindo.$H(oRet).toQueryString()
};
jindo.$Form.prototype.element=function(sKey){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4voi":[],"4str":[jindo.$Jindo._F("sKey:String+")]},"$Form#element");
switch(oArgs+""){case"4voi":return _toArray(this._form.elements);
case"4str":return this._form.elements[sKey+""]
}};
jindo.$Form.prototype.enable=function(sKey){var oArgs=jindo.$Jindo.checkVarType(arguments,{s4bln:["sName:String+","bEnable:Boolean"],s4obj:["oObj:Hash+"],g:[jindo.$Jindo._F("sName:String+")]},"$Form#enable");
switch(oArgs+""){case"s4bln":var aEls=this._form[sKey];
if(!aEls){return this
}aEls=aEls.nodeType==1?[aEls]:aEls;
var sFlag=oArgs.bEnable;
for(var i=0;
i<aEls.length;
i++){aEls[i].disabled=!sFlag
}return this;
case"s4obj":sKey=oArgs.oObj;
var self=this;
for(var k in sKey){if(sKey.hasOwnProperty(k)){self.enable(k,sKey[k])
}}return this;
case"g":var aEls=this._form[sKey];
if(!aEls){return this
}aEls=aEls.nodeType==1?[aEls]:aEls;
var bEnabled=true;
for(var i=0;
i<aEls.length;
i++){if(aEls[i].disabled){bEnabled=false;
break
}}return bEnabled
}};
jindo.$Form.prototype.value=function(sKey){var oArgs=jindo.$Jindo.checkVarType(arguments,{s4str:["sKey:String+","vValue:Variant"],s4obj:[jindo.$Jindo._F("oObj:Hash+")],g:["sKey:String+"]},"$Form#value");
if(oArgs+""=="s4obj"){var self=this;
sKey=oArgs.oObj;
for(var k in sKey){if(sKey.hasOwnProperty(k)){self.value(k,sKey[k])
}}return this
}var aEls=this._form[sKey];
if(!aEls){throw new jindo.$Error(sKey+jindo.$Except.NONE_ELEMENT,"$Form#value")
}aEls=aEls.nodeType==1?[aEls]:aEls;
switch(oArgs+""){case"s4str":var sVal=oArgs.vValue;
var nLen=aEls.length;
for(var i=0;
i<nLen;
i++){var o=aEls[i];
switch(o.type){case"radio":o.checked=(o.value==sVal);
break;
case"checkbox":if(sVal.constructor==Array){o.checked=jindo.$A(sVal).has(o.value)
}else{o.checked=(o.value==sVal)
}break;
case"select-one":var nIndex=-1;
for(var i=0,len=o.options.length;
i<len;
i++){if(o.options[i].value==sVal){nIndex=i
}}o.selectedIndex=nIndex;
break;
case"select-multiple":var nIndex=-1;
if(sVal.constructor==Array){var waVal=jindo.$A(sVal);
for(var i=0,len=o.options.length;
i<len;
i++){o.options[i].selected=waVal.has(o.options[i].value)
}}else{for(var i=0,len=o.options.length;
i<len;
i++){if(o.options[i].value==sVal){nIndex=i
}}o.selectedIndex=nIndex
}break;
default:o.value=sVal
}}return this;
case"g":var aRet=[];
var nLen=aEls.length;
for(var i=0;
i<nLen;
i++){var o=aEls[i];
switch(o.type){case"radio":case"checkbox":if(o.checked){aRet.push(o.value)
}break;
case"select-one":if(o.selectedIndex!=-1){aRet.push(o.options[o.selectedIndex].value)
}break;
case"select-multiple":if(o.selectedIndex!=-1){for(var i=0,len=o.options.length;
i<len;
i++){if(o.options[i].selected){aRet.push(o.options[i].value)
}}}break;
default:aRet.push(o.value)
}}return aRet.length>1?aRet:aRet[0]
}};
jindo.$Form.prototype.submit=function(sTargetName,fValidation){var oArgs=jindo.$Jindo.checkVarType(arguments,{voi:[],"4str":["sTargetName:String+"],"4fun":["fValidation:Function+"],"4fun2":["sTargetName:String+","fValidation:Function+"]},"$Form#submit");
var sOrgTarget=null;
switch(oArgs+""){case"4str":sOrgTarget=this._form.target;
this._form.target=oArgs.sTargetName;
break;
case"4fun":case"4fun2":if(!oArgs.fValidation.call(this,this._form)){return this
}if(oArgs+""=="4fun2"){sOrgTarget=this._form.target;
this._form.target=oArgs.sTargetName
}}this._form.submit();
if(!jindo.$Jindo.isNull(sOrgTarget)){this._form.target=sOrgTarget
}return this
};
jindo.$Form.prototype.reset=function(fValidation){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4voi":[],"4fun":["fValidation:Function+"]},"$Form#reset");
if(oArgs+""=="4fun"){if(!fValidation.call(this,this._form)){return this
}}this._form.reset();
return this
};
jindo.$Template=function(str){var obj=null,tag="";
var cl=arguments.callee;
if(str instanceof cl){return str
}if(!(this instanceof cl)){try{jindo.$Jindo._maxWarn(arguments.length,1,"$Template");
return new cl(str||"")
}catch(e){if(e instanceof TypeError){return null
}throw e
}}jindo.$Jindo.checkVarType(arguments,{"4str":["str:String+"],"4ele":["ele:Element+"]},"$Template");
if((obj=jindo._getElementById(document,str)||str)&&obj.tagName&&(tag=obj.tagName.toUpperCase())&&(tag=="TEXTAREA"||(tag=="SCRIPT"&&obj.getAttribute("type")=="text/template"))){str=(obj.value||obj.innerHTML).replace(/^\s+|\s+$/g,"")
}this._str=str+""
};
jindo.$Template.splitter=/(?!\\)[\{\}]/g;
jindo.$Template.pattern=/^(?:if (.+)|elseif (.+)|for (?:(.+)\:)?(.+) in (.+)|(else)|\/(if|for)|=(.+)|js (.+)|set (.+)|gset (.+))$/;
jindo.$Template.prototype.process=function(data){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4obj":["data:Hash+"],"4voi":[]},"$Template#process");
var key="\x01";
var leftBrace="\x02";
var rightBrace="\x03";
var tpl=(" "+this._str+" ").replace(/\\{/g,leftBrace).replace(/\\}/g,rightBrace).replace(/(?!\\)\}\{/g,"}"+key+"{").split(jindo.$Template.splitter),i=tpl.length;
var map={'"':'\\"',"\\":"\\\\","\n":"\\n","\r":"\\r","\t":"\\t","\f":"\\f"};
var reg=[/(["'](?:(?:\\.)+|[^\\["']+)*["']|[a-zA-Z_](?:[\w\.]|\[(?:.*?)\])*)/g,/[\n\r\t\f"\\]/g,/^\s+/,/\s+$/,/#/g];
var cb=[function(m){return(m.substring(0,1)=='"'||m.substring(0,1)=="'"||m=="null"||m=="false"||m=="true")?m:"d."+m
},function(m){return map[m]||m
},"",""];
var stm=[];
var lev=0;
tpl[0]=tpl[0].substr(1);
tpl[i-1]=tpl[i-1].substr(0,tpl[i-1].length-1);
if(i<2){return tpl[0]
}tpl=tpl.reverse();
var delete_info;
while(i--){if(i%2){tpl[i]=tpl[i].replace(jindo.$Template.pattern,function(){var m=arguments;
if(m[11]){return m[11].replace(/(\w+)(?:\s*)=(?:\s*)(?:([a-zA-Z0-9_]+)|(.+))$/g,function(){var mm=arguments;
var str="var "+mm[1]+"=";
if(mm[2]){str+=mm[2]
}else{str+=mm[3].replace(/(=(?:[a-zA-Z_][\w\.]*)+)/g,function(m){return(m.substring(0,1)=="=")?"d."+m.replace("=",""):m
})
}return str
})+";"
}if(m[10]){var a=m[10].replace(/(\w+)(?:\s*)=(?:\s*)(?:([a-zA-Z0-9_]+)|(.+))$/g,function(){var mm=arguments;
var str="d."+mm[1]+"=";
if(mm[2]){str+="d."+mm[2]
}else{str+=mm[3].replace(/((?:[a-zA-Z_](?:[\w\.]|\[(?:.*?)\])*)+)/g,function(m){return"d."+m
})
}return str
})+";";
return a
}if(m[9]){return"s[i++]="+m[9].replace(/(=(?:[a-zA-Z_][\w\.]*)+)/g,function(m){return(m.substring(0,1)=="=")?"d."+m.replace("=",""):m
})+";"
}if(m[8]){return"s[i++]= d."+m[8]+";"
}if(m[1]){return"if("+m[1].replace(reg[0],cb[0]).replace(/d\.(typeof) /,"$1 ").replace(/ d\.(instanceof) d\./," $1 ")+"){"
}if(m[2]){return"}else if("+m[2].replace(reg[0],cb[0]).replace(/d\.(typeof) /,"$1 ").replace(/ d\.(instanceof) d\./," $1 ")+"){"
}if(m[5]){delete_info=m[4];
var _aStr=[];
_aStr.push("var t#=d."+m[5]+"||{},p#=jindo.$Jindo.isArray(t#),i#=0;");
_aStr.push("for(var x# in t#){");
_aStr.push("if(!t#.hasOwnProperty(x#)){continue;}");
_aStr.push("	if( (p# && isNaN(i#=parseInt(x#,10))) || (!p# && !t#.propertyIsEnumerable(x#)) ) continue;");
_aStr.push("	d."+m[4]+"=t#[x#];");
_aStr.push(m[3]?"d."+m[3]+"=p#?i#:x#;":"");
return _aStr.join("").replace(reg[4],lev++)
}if(m[6]){return"}else{"
}if(m[7]){if(m[7]=="for"){return"delete d."+delete_info+"; };"
}else{return"};"
}}return m[0]
})
}else{if(tpl[i]==key){tpl[i]=""
}else{if(tpl[i]){tpl[i]='s[i++]="'+tpl[i].replace(reg[1],cb[1])+'";'
}}}}tpl=tpl.reverse().join("").replace(new RegExp(leftBrace,"g"),"{").replace(new RegExp(rightBrace,"g"),"}");
var _aStr=[];
_aStr.push("d = d||{};");
_aStr.push("var s=[],i=0;");
_aStr.push(tpl);
_aStr.push('return s.join("");');
tpl=new Function("d",""+_aStr.join(""));
tpl=tpl(oArgs+""=="for_void"?"":oArgs.data);
return tpl
};
jindo.$Date=function(src){var a=arguments,t="";
var cl=arguments.callee;
if(src&&src instanceof cl){return src
}if(!(this instanceof cl)){var str="";
for(var i=0,l=a.length;
i<l;
i++){str+="a["+i+"],"
}var init=new Function("cl","a","return new cl("+str.replace(/,$/,"")+");");
try{jindo.$Jindo._maxWarn(arguments.length,7,"$Date");
return init(cl,a)
}catch(e){if(e instanceof TypeError){return null
}throw e
}}var oArgs=jindo.$Jindo.checkVarType(arguments,{"4voi":[],"4str":["src:String+"],"4num":["src:Numeric"],"4dat":["src:Date+"],"4num2":["src:Numeric","src:Numeric"],"4num3":["src:Numeric","src:Numeric","src:Numeric"],"4num4":["src:Numeric","src:Numeric","src:Numeric","src:Numeric"],"4num5":["src:Numeric","src:Numeric","src:Numeric","src:Numeric","src:Numeric"],"4num6":["src:Numeric","src:Numeric","src:Numeric","src:Numeric","src:Numeric","src:Numeric"],"4num7":["src:Numeric","src:Numeric","src:Numeric","src:Numeric","src:Numeric","src:Numeric","src:Numeric"]},"$Date");
switch(oArgs+""){case"4voi":this._date=new Date;
break;
case"4num":this._date=new Date(src*1);
break;
case"4str":if(/(\d\d\d\d)(?:-?(\d\d)(?:-?(\d\d)))/.test(src)){this._date=jindo.$Date._makeISO(src)
}else{this._date=cl.parse(src)
}break;
case"4dat":(this._date=new Date).setTime(src.getTime());
this._date.setMilliseconds(src.getMilliseconds());
break;
case"4num2":case"4num3":case"4num4":case"4num5":case"4num6":case"4num7":for(var i=0;
i<7;
i++){if(!jindo.$Jindo.isNumeric(a[i])){a[i]=1
}}this._date=new Date(a[0],a[1],a[2],a[3],a[4],a[5],a[6])
}this._names={};
for(var i in jindo.$Date.names){if(jindo.$Date.names.hasOwnProperty(i)){this._names[i]=jindo.$Date.names[i]
}}};
jindo.$Date._makeISO=function(src){var match=src.match(/(\d\d\d\d)(?:-?(\d\d)(?:-?(\d\d)(?:[T ](\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|(?:([-+])(\d\d)(?::?(\d\d))?)?)?)?)?)?/);
var hour=parseInt(match[4]||0,10);
var min=parseInt(match[5]||0,10);
if(match[8]=="Z"){hour+=jindo.$Date.utc
}else{if(match[9]=="+"||match[9]=="-"){hour+=(jindo.$Date.utc-parseInt(match[9]+match[10],10));
min+=parseInt(match[9]+match[11],10)
}}return new Date(match[1]||0,parseInt(match[2]||0,10)-1,match[3]||0,hour,min,match[6]||0,match[7]||0)
};
jindo.$Date._paramCheck=function(aPram,sType){return jindo.$Jindo.checkVarType(aPram,{s:["nParm:Numeric"],g:[]},"$Date#"+sType)
};
jindo.$Date.names={month:["January","Febrary","March","April","May","June","July","August","September","October","Novermber","December"],s_month:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],day:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],s_day:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],ampm:["AM","PM"]};
jindo.$Date.utc=9;
jindo.$Date.now=function(){if(Date.now){this.now=function(){return Date.now()
}
}else{this.now=function(){return +new Date()
}
}return this.now()
};
jindo.$Date.prototype.name=function(vName,aValue){var oArgs=jindo.$Jindo.checkVarType(arguments,{s4str:["sKey:String+","aValue:Array+"],s4obj:["oObject:Hash+"],g:["sKey:String+"]},"$Date#name");
switch(oArgs+""){case"s4str":this._names[vName]=aValue;
break;
case"s4obj":vName=oArgs.oObject;
for(var i in vName){if(vName.hasOwnProperty(i)){this._names[i]=vName[i]
}}break;
case"g":return this._names[vName]
}return this
};
jindo.$Date.parse=function(strDate){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["sKey:String+"]},"$Date#parse");
var date=new Date(Date.parse(strDate));
if(isNaN(date)||date=="Invalid Date"){throw new jindo.$Error(jindo.$Except.INVALID_DATE,"$Date#parse")
}return date
};
jindo.$Date.prototype.$value=function(){return this._date
};
jindo.$Date.prototype.format=function(strFormat){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["sFormat:String+"]},"$Date#format");
strFormat=oArgs.sFormat;
var o={};
var d=this._date;
var name=this._names;
var self=this;
return(strFormat||"").replace(/[a-z]/ig,function callback(m){if(o[m]!==undefined){return o[m]
}switch(m){case"d":case"j":o.j=d.getDate();
o.d=(o.j>9?"":"0")+o.j;
return o[m];
case"l":case"D":case"w":case"N":o.w=d.getDay();
o.N=o.w?o.w:7;
o.D=name.s_day[o.w];
o.l=name.day[o.w];
return o[m];
case"S":return(!!(o.S=["st","nd","rd"][d.getDate()]))?o.S:(o.S="th");
case"z":o.z=Math.floor((d.getTime()-(new Date(d.getFullYear(),0,1)).getTime())/(3600*24*1000));
return o.z;
case"m":case"n":o.n=d.getMonth()+1;
o.m=(o.n>9?"":"0")+o.n;
return o[m];
case"L":o.L=self.isLeapYear();
return o.L;
case"o":case"Y":case"y":o.o=o.Y=d.getFullYear();
o.y=(o.o+"").substr(2);
return o[m];
case"a":case"A":case"g":case"G":case"h":case"H":o.G=d.getHours();
o.g=(o.g=o.G%12)?o.g:12;
o.A=o.G<12?name.ampm[0]:name.ampm[1];
o.a=o.A.toLowerCase();
o.H=(o.G>9?"":"0")+o.G;
o.h=(o.g>9?"":"0")+o.g;
return o[m];
case"i":o.i=(((o.i=d.getMinutes())>9)?"":"0")+o.i;
return o.i;
case"s":o.s=(((o.s=d.getSeconds())>9)?"":"0")+o.s;
return o.s;
case"u":o.u=d.getMilliseconds();
return o.u;
case"U":o.U=self.time();
return o.U;
default:return m
}})
};
jindo.$Date.prototype.time=function(nTime){var oArgs=jindo.$Date._paramCheck(arguments,"time");
nTime=oArgs.nParm;
switch(oArgs+""){case"s":this._date.setTime(nTime);
return this;
case"g":return this._date.getTime()
}};
jindo.$Date.prototype.year=function(nYear){var oArgs=jindo.$Date._paramCheck(arguments,"year");
nYear=oArgs.nParm;
switch(oArgs+""){case"s":this._date.setFullYear(nYear);
return this;
case"g":return this._date.getFullYear()
}};
jindo.$Date.prototype.month=function(nMon){var oArgs=jindo.$Date._paramCheck(arguments,"month");
nMon=oArgs.nParm;
switch(oArgs+""){case"s":this._date.setMonth(nMon);
return this;
case"g":return this._date.getMonth()
}};
jindo.$Date.prototype.date=function(nDate){var oArgs=jindo.$Date._paramCheck(arguments,"date");
nDate=oArgs.nParm;
switch(oArgs+""){case"s":this._date.setDate(nDate);
return this;
case"g":return this._date.getDate()
}};
jindo.$Date.prototype.day=function(){return this._date.getDay()
};
jindo.$Date.prototype.hours=function(nHour){var oArgs=jindo.$Date._paramCheck(arguments,"hours");
nHour=oArgs.nParm;
switch(oArgs+""){case"s":this._date.setHours(nHour);
return this;
case"g":return this._date.getHours()
}};
jindo.$Date.prototype.minutes=function(nMin){var oArgs=jindo.$Date._paramCheck(arguments,"minutes");
nMin=oArgs.nParm;
switch(oArgs+""){case"s":this._date.setMinutes(nMin);
return this;
case"g":return this._date.getMinutes()
}};
jindo.$Date.prototype.seconds=function(nSec){var oArgs=jindo.$Date._paramCheck(arguments,"seconds");
nSec=oArgs.nParm;
switch(oArgs+""){case"s":this._date.setSeconds(nSec);
return this;
case"g":return this._date.getSeconds()
}};
jindo.$Date.prototype.isLeapYear=function(){var y=this._date.getFullYear();
return !(y%4)&&!!(y%100)||!(y%400)
};
jindo.$Date.prototype.compare=function(oDate,sType){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4dat":["oDate:Date+"],"4str":["oDate:Date+","sType:String+"]},"$Date#compare");
oDate=oArgs.oDate;
sType=oArgs.sType;
if(!sType){return oDate-this._date
}else{if(sType==="s"){return Math.floor(oDate/1000)-Math.floor(this._date/1000)
}else{if(sType==="i"){return Math.floor(Math.floor(oDate/1000)/60)-Math.floor(Math.floor(this._date/1000)/60)
}else{if(sType==="h"){return Math.floor(Math.floor(Math.floor(oDate/1000)/60)/60)-Math.floor(Math.floor(Math.floor(this._date/1000)/60)/60)
}else{if(sType==="d"){return Math.floor(Math.floor(Math.floor(Math.floor(oDate/1000)/60)/60)/24)-Math.floor(Math.floor(Math.floor(Math.floor(this._date/1000)/60)/60)/24)
}else{if(sType==="m"){return oDate.getMonth()-this._date.getMonth()
}else{if(sType==="y"){return oDate.getFullYear()-this._date.getFullYear()
}}}}}}}};
jindo.$Window=function(el){var cl=arguments.callee;
if(el instanceof cl){return el
}if(!(this instanceof cl)){try{jindo.$Jindo._maxWarn(arguments.length,1,"$Window");
return new cl(el||window)
}catch(e){if(e instanceof TypeError){return null
}throw e
}}var oArgs=jindo.$Jindo.checkVarType(arguments,{"4win":["el:Window+"]},"$Window");
this._win=el
};
jindo.$Window.prototype.$value=function(){return this._win
};
jindo.$Window.prototype.resizeTo=function(nWidth,nHeight){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4num":["nWidth:Numeric","nHeight:Numeric"]},"$Window#resizeTo");
this._win.resizeTo(nWidth,nHeight);
return this
};
jindo.$Window.prototype.resizeBy=function(nWidth,nHeight){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4num":["nWidth:Numeric","nHeight:Numeric"]},"$Window#resizeBy");
this._win.resizeBy(nWidth,nHeight);
return this
};
jindo.$Window.prototype.moveTo=function(nLeft,nTop){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4num":["nLeft:Numeric","nTop:Numeric"]},"$Window#moveTo");
this._win.moveTo(nLeft,nTop);
return this
};
jindo.$Window.prototype.moveBy=function(nLeft,nTop){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4num":["nLeft:Numeric","nTop:Numeric"]},"$Window#moveBy");
this._win.moveBy(nLeft,nTop);
return this
};
jindo.$Window.prototype.sizeToContent=function(nWidth,nHeight){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4num":["nWidth:Numeric","nHeight:Numeric"]},"$Window#sizeToContent");
if(this._win.sizeToContent){this._win.sizeToContent()
}else{if(arguments.length!=2){var innerX,innerY;
var self=this._win;
var doc=this._win.document;
if(self.innerHeight){innerX=self.innerWidth;
innerY=self.innerHeight
}else{if(doc.documentElement&&doc.documentElement.clientHeight){innerX=doc.documentElement.clientWidth;
innerY=doc.documentElement.clientHeight
}else{if(doc.body){innerX=doc.body.clientWidth;
innerY=doc.body.clientHeight
}}}var pageX,pageY;
var test1=doc.body.scrollHeight;
var test2=doc.body.offsetHeight;
if(test1>test2){pageX=doc.body.scrollWidth;
pageY=doc.body.scrollHeight
}else{pageX=doc.body.offsetWidth;
pageY=doc.body.offsetHeight
}nWidth=pageX-innerX;
nHeight=pageY-innerY
}this._win.resizeBy(nWidth,nHeight)
}return this
};jindo.Component=jindo.$Class({_htEventHandler:null,_htOption:null,$init:function(){var aInstance=this.constructor.getInstance();
aInstance.push(this);
this._htEventHandler={};
this._htOption={};
this._htOption._htSetter={}
},option:function(sName,vValue){switch(typeof sName){case"undefined":return this._htOption;
case"string":if(typeof vValue!="undefined"){if(sName=="htCustomEventHandler"){if(typeof this._htOption[sName]=="undefined"){this.attach(vValue)
}else{return this
}}this._htOption[sName]=vValue;
if(typeof this._htOption._htSetter[sName]=="function"){this._htOption._htSetter[sName](vValue)
}}else{return this._htOption[sName]
}break;
case"object":for(var sKey in sName){if(sKey=="htCustomEventHandler"){if(typeof this._htOption[sKey]=="undefined"){this.attach(sName[sKey])
}else{continue
}}this._htOption[sKey]=sName[sKey];
if(typeof this._htOption._htSetter[sKey]=="function"){this._htOption._htSetter[sKey](sName[sKey])
}}break
}return this
},optionSetter:function(sName,fSetter){switch(typeof sName){case"undefined":return this._htOption._htSetter;
case"string":if(typeof fSetter!="undefined"){this._htOption._htSetter[sName]=jindo.$Fn(fSetter,this).bind()
}else{return this._htOption._htSetter[sName]
}break;
case"object":for(var sKey in sName){this._htOption._htSetter[sKey]=jindo.$Fn(sName[sKey],this).bind()
}break
}return this
},fireEvent:function(sEvent,oEvent){oEvent=oEvent||{};
var fInlineHandler=this["on"+sEvent],aHandlerList=this._htEventHandler[sEvent]||[],bHasInlineHandler=typeof fInlineHandler=="function",bHasHandlerList=aHandlerList.length>0;
if(!bHasInlineHandler&&!bHasHandlerList){return true
}aHandlerList=aHandlerList.concat();
oEvent.sType=sEvent;
if(typeof oEvent._aExtend=="undefined"){oEvent._aExtend=[];
oEvent.stop=function(){if(oEvent._aExtend.length>0){oEvent._aExtend[oEvent._aExtend.length-1].bCanceled=true
}}
}oEvent._aExtend.push({sType:sEvent,bCanceled:false});
var aArg=[oEvent],i,nLen;
for(i=2,nLen=arguments.length;
i<nLen;
i++){aArg.push(arguments[i])
}if(bHasInlineHandler){fInlineHandler.apply(this,aArg)
}if(bHasHandlerList){var fHandler;
for(i=0,fHandler;
(fHandler=aHandlerList[i]);
i++){fHandler.apply(this,aArg)
}}return !oEvent._aExtend.pop().bCanceled
},attach:function(sEvent,fHandlerToAttach){if(arguments.length==1){jindo.$H(arguments[0]).forEach(jindo.$Fn(function(fHandler,sEvent){this.attach(sEvent,fHandler)
},this).bind());
return this
}var aHandler=this._htEventHandler[sEvent];
if(typeof aHandler=="undefined"){aHandler=this._htEventHandler[sEvent]=[]
}aHandler.push(fHandlerToAttach);
return this
},detach:function(sEvent,fHandlerToDetach){if(arguments.length==1){jindo.$H(arguments[0]).forEach(jindo.$Fn(function(fHandler,sEvent){this.detach(sEvent,fHandler)
},this).bind());
return this
}var aHandler=this._htEventHandler[sEvent];
if(aHandler){for(var i=0,fHandler;
(fHandler=aHandler[i]);
i++){if(fHandler===fHandlerToDetach){aHandler=aHandler.splice(i,1);
break
}}}return this
},detachAll:function(sEvent){var aHandler=this._htEventHandler;
if(arguments.length){if(typeof aHandler[sEvent]=="undefined"){return this
}delete aHandler[sEvent];
return this
}for(var o in aHandler){delete aHandler[o]
}return this
}});
jindo.Component.factory=function(aObject,htOption){var aReturn=[],oInstance;
if(typeof htOption=="undefined"){htOption={}
}for(var i=0,el;
(el=aObject[i]);
i++){oInstance=new this(el,htOption);
aReturn[aReturn.length]=oInstance
}return aReturn
};
jindo.Component.getInstance=function(){if(typeof this._aInstance=="undefined"){this._aInstance=[]
}return this._aInstance
};
if(typeof jindo.m=="undefined"&&typeof Node!="undefined"){var ___Old__addEventListener___=Node.prototype.addEventListener;
Node.prototype.addEventListener=function(type,listener,useCapture){var callee=arguments.callee;
if(callee&&type==="click"&&this.tagName==="A"){(this.___listeners___||(this.___listeners___=[])).push({listener:listener,useCapture:useCapture})
}return ___Old__addEventListener___.apply(this,arguments)
};
var ___Old__removeEventListener___=Node.prototype.removeEventListener;
Node.prototype.removeEventListener=function(type,listener,useCapture){var callee=arguments.callee;
if(callee&&type==="click"&&this.tagName==="A"){if(this.___listeners___){this.___listeners___.pop()
}}return ___Old__removeEventListener___.apply(this,arguments)
}
}jindo.m=(function(){var __M__=jindo.$Class({$init:function(){this._initVar();
this._initDeviceInfo();
this._attachEvent()
},_initVar:function(){this.MOVETYPE={0:"hScroll",1:"vScroll",2:"dScroll",3:"tap",4:"longTap",5:"doubleTap",6:"pinch",7:"rotate",8:"pinch-rotate"};
this.sVersion="1.3.1";
this._isVertical=null;
this._nPreWidth=-1;
this._nRotateTimer=null;
this._htHandler={};
this._htDeviceInfo={}
},_getOrientationChangeEvt:function(){var bEvtName="onorientationchange" in window?"orientationchange":"resize";
var htInfo=this.getDeviceInfo();
if((htInfo.android&&htInfo.version==="2.1")){bEvtName="resize"
}return bEvtName
},_getVertical:function(){var bVertical=null,sEventType=this._getOrientationChangeEvt();
if(sEventType==="resize"){var screenWidth=document.documentElement.clientWidth;
if(screenWidth<this._nPreWidth){bVertical=true
}else{if(screenWidth==this._nPreWidth){bVertical=this._isVertical
}else{bVertical=false
}}this._nPreWidth=screenWidth
}else{var windowOrientation=window.orientation;
if(windowOrientation===0||windowOrientation==180){bVertical=true
}else{if(windowOrientation==90||windowOrientation==-90){bVertical=false
}}}return bVertical
},_attachEvent:function(){this._rotateEvent=jindo.$Fn(this._onOrientationChange,this).attach(window,this._getOrientationChangeEvt()).attach(window,"load");
this._pageShowEvent=jindo.$Fn(this._onPageshow,this).attach(window,"pageshow")
},_initDeviceInfo:function(){var sName=navigator.userAgent;
var ar=null;
function f(s,h){return((h||"").indexOf(s)>-1)
}this._htDeviceInfo.iphone=f("iPhone",sName);
this._htDeviceInfo.ipad=f("iPad",sName);
this._htDeviceInfo.android=f("Android",sName);
this._htDeviceInfo.galaxyTab=f("SHW-M180",sName);
this._htDeviceInfo.galaxyTab2=f("SHW-M380",sName);
this._htDeviceInfo.galaxyK=f("SHW-M130K",sName);
this._htDeviceInfo.galaxyU=f("SHW-M130L",sName);
this._htDeviceInfo.galaxyS=f("SHW-M110",sName);
this._htDeviceInfo.galaxyS2=f("SHW-M250",sName);
this._htDeviceInfo.galaxyS2LTE=f("SHV-E110",sName);
this._htDeviceInfo.galaxyS3=f("SHV-E210",sName);
this._htDeviceInfo.galaxyNote=f("SHV-E160",sName);
this._htDeviceInfo.galaxyNexus=f("Galaxy Nexus",sName);
this._htDeviceInfo.version="";
this._htDeviceInfo.bChrome=this._htDeviceInfo.android&&(f("CrMo",sName)||f("Chrome",sName));
this._htDeviceInfo.bInapp=false;
if(this._htDeviceInfo.iphone||this._htDeviceInfo.ipad){ar=sName.match(/OS\s([\d|\_]+\s)/i);
if(ar!==null&&ar.length>1){this._htDeviceInfo.version=ar[1]
}}else{if(this._htDeviceInfo.android){ar=sName.match(/Android\s([^\;]*)/i);
if(ar!==null&&ar.length>1){this._htDeviceInfo.version=ar[1]
}}}this._htDeviceInfo.version=this._htDeviceInfo.version.replace(/\_/g,".");
for(var x in this._htDeviceInfo){if(typeof this._htDeviceInfo[x]=="boolean"&&this._htDeviceInfo[x]&&this._htDeviceInfo.hasOwnProperty(x)){this._htDeviceInfo.name=x
}}if(this._htDeviceInfo.iphone||this._htDeviceInfo.ipad){if(!f("Safari",sName)){this._htDeviceInfo.bInapp=true
}}else{if(this._htDeviceInfo.android){sName=sName.toLowerCase();
if(f("inapp",sName)||f("app",sName.replace("applewebkit",""))){this._htDeviceInfo.bInapp=true
}}}},_onOrientationChange:function(we){var self=this;
if(we.type==="load"){this._nPreWidth=document.documentElement.clientWidth;
if(!this._htDeviceInfo.bInapp&&(this._htDeviceInfo.iphone||this._htDeviceInfo.ipad||this._getOrientationChangeEvt()!=="resize")){this._isVertical=this._getVertical()
}else{if(this._nPreWidth>document.documentElement.clientHeight){this._isVertical=false
}else{this._isVertical=true
}}return
}if(this._getOrientationChangeEvt()==="resize"){setTimeout(function(){self._orientationChange(we)
},0)
}else{var nTime=200;
if(this.getDeviceInfo().android){nTime=500
}clearTimeout(this._nRotateTimer);
this._nRotateTimer=setTimeout(function(){self._orientationChange(we)
},nTime)
}},_orientationChange:function(we){var nPreVertical=this._isVertical;
this._isVertical=this._getVertical();
if(jindo.$Agent().navigator().mobile||jindo.$Agent().os().ipad){if(nPreVertical!==this._isVertical){this.fireEvent("mobilerotate",{isVertical:this._isVertical})
}}else{this.fireEvent("mobilerotate",{isVertical:this._isVertical})
}},bindRotate:function(fHandlerToBind){var aHandler=this._htHandler.mobilerotate;
if(typeof aHandler=="undefined"){aHandler=this._htHandler.mobilerotate=[]
}aHandler.push(fHandlerToBind);
this.attach("mobilerotate",fHandlerToBind)
},unbindRotate:function(fHandlerToUnbind){var aHandler=this._htHandler.mobilerotate;
if(aHandler){for(var i=0,fHandler;
(fHandler=aHandler[i]);
i++){if(fHandler===fHandlerToUnbind){aHandler.splice(i,1);
this.detach("mobilerotate",fHandlerToUnbind);
break
}}}},_onPageshow:function(we){this._isVertical=this._getVertical();
var self=this;
setTimeout(function(){self.fireEvent("mobilePageshow",{})
},300)
},bindPageshow:function(fHandlerToBind){var aHandler=this._htHandler.mobilePageshow;
if(typeof aHandler=="undefined"){aHandler=this._htHandler.mobilePageshow=[]
}aHandler.push(fHandlerToBind);
this.attach("mobilePageshow",fHandlerToBind)
},unbindPageshow:function(fHandlerToUnbind){var aHandler=this._htHandler.mobilePageshow;
if(aHandler){for(var i=0,fHandler;
(fHandler=aHandler[i]);
i++){if(fHandler===fHandlerToUnbind){aHandler.splice(i,1);
this.detach("mobilePageshow",fHandlerToUnbind);
break
}}}},getDeviceInfo:function(){return this._htDeviceInfo
},isVertical:function(){if(this._isVertical===null){return this._getVertical()
}else{return this._isVertical
}},getNodeElement:function(el){while(el.nodeType!=1){el=el.parentNode
}return el
},getCssOffset:function(element){var htOffset;
if(jindo.m.getDeviceInfo().android&&parseInt(jindo.m.getDeviceInfo().version,10)===3){htOffset=jindo.m._getCssOffsetFromStyle(element)
}else{if("WebKitCSSMatrix" in window&&"m11" in new WebKitCSSMatrix()){htOffset=jindo.m._getCssOffsetFromCSSMatrix(element)
}else{htOffset=jindo.m._getCssOffsetFromStyle(element)
}}return htOffset
},_getCssOffsetFromStyle:function(element){var nTop=nLeft=0,s=element.style[jindo.m.getCssPrefix()+"Transform"];
if(!!s&&s.length>0){aTemp=s.match(/translate.{0,2}\((.*)\)/);
if(!!aTemp&&aTemp.length>1){var a=aTemp[1].split(",");
if(!!a&&a.length>1){nTop=parseInt(a[1],10);
nLeft=parseInt(a[0],10)
}}}return{top:nTop,left:nLeft}
},_getCssOffsetFromCSSMatrix:function(element){var curTransform=new WebKitCSSMatrix(window.getComputedStyle(element).webkitTransform);
return{top:curTransform.m42,left:curTransform.m41}
},attachTransitionEnd:function(element,fHandlerToBind){var nVersion=+jindo.$Jindo().version.replace(/[a-z.]/gi,"");
if(nVersion>=151){element._jindo_fn_=jindo.$Fn(fHandlerToBind,this).attach(element,"transitionend")
}else{element.addEventListener("webkitTransitionEnd",fHandlerToBind,false)
}},detachTransitionEnd:function(element,fHandlerToUnbind){var nVersion=+jindo.$Jindo().version.replace(/[a-z.]/gi,"");
if(nVersion>=151){if(element._jindo_fn_){element._jindo_fn_.detach(element,"transitionend");
delete element._jindo_fn_
}}else{element.removeEventListener("webkitTransitionEnd",fHandlerToUnbind,false)
}},getCssPrefix:function(){var sCssPrefix="";
if(typeof document.body.style.MozTransition!=="undefined"){sCssPrefix="Moz"
}else{if(typeof document.body.style.webkitTransition!=="undefined"){sCssPrefix="webkit"
}else{if(typeof document.body.style.OTransition!=="undefined"){sCssPrefix="O"
}}}return sCssPrefix
},getClosest:function(sSelector,elBaseElement){var elClosest;
var welBaseElement=jindo.$Element(elBaseElement);
var reg=/<\/?(?:h[1-5]|[a-z]+(?:\:[a-z]+)?)[^>]*>/ig;
if(reg.test(sSelector)){if("<"+elBaseElement.tagName.toUpperCase()+">"==sSelector.toUpperCase()){elClosest=elBaseElement
}else{elClosest=welBaseElement.parent(function(v){if("<"+v.$value().tagName.toUpperCase()+">"==sSelector.toUpperCase()){return v
}});
elClosest=elClosest.length?elClosest[0].$value():false
}}else{if(sSelector.indexOf(".")==0){sSelector=sSelector.substring(1,sSelector.length)
}if(welBaseElement.hasClass(sSelector)){elClosest=elBaseElement
}else{elClosest=welBaseElement.parent(function(v){if(v.hasClass(sSelector)){return v
}});
elClosest=elClosest.length?elClosest[0].$value():false
}}return elClosest
},_isUseCss3d:function(){var bRet=false;
if(this._htDeviceInfo.iphone||this._htDeviceInfo.ipad){bRet=true
}else{if(this._htDeviceInfo.android){var s=navigator.userAgent.match(/\(.*\)/)[0];
function f(s,h){return((h||"").indexOf(s)>-1)
}var isSamsung=f("SHW-",s)||f("SHV-",s)||f("GT-",s)||f("SCH-",s)||f("SGH-",s)||f("SPH-",s);
var isLg=f("LG-F160")||f("LG-F100");
var isEtc=f("SHW-M250",s)||f("SHW-M420")||f("SHW-M200",s)||f("SHV-E110",s)||f("SHV-E160",s);
if(this._htDeviceInfo.version>="4.0.3"&&(isSamsung||isLg)&&!isEtc){bRet=true
}}}return bRet
},_isUseFixed:function(){var isFixed=false;
if(this._htDeviceInfo.bChrome||(this._htDeviceInfo.android&&parseInt(this._htDeviceInfo.version,10)>=3)||((this._htDeviceInfo.iphone||this._htDeviceInfo.ipad)&&(parseInt(this._htDeviceInfo.version,10)>=5))){isFixed=true
}return isFixed
},_isUseTimingFunction:function(){var bUse=this._isUseCss3d();
if(this._htDeviceInfo.android){bUse=false
}return bUse
},_clientSize:function(){var oSize={};
var oRet=jindo.$Document().clientSize();
var nVersion=parseInt(this._htDeviceInfo.version,10);
if((this._htDeviceInfo.ipad||this._htDeviceInfo.iphone)||this._htDeviceInfo.bChrome){return oRet
}switch(this._htDeviceInfo.name){case"galaxyTab":oSize={portrait:400,landscape:683};
oSize.landscape-=92;
oSize.portrait-=66;
break;
case"galaxyTab2":oSize={portrait:1280,landscape:800};
oSize.landscape-=152;
oSize.portrait-=152;
break;
case"galaxyS":oSize={portrait:320,landscape:533};
oSize.landscape-=81;
oSize.portrait-=81;
break;
case"galaxyS2LTE":case"galaxyS2":oSize={portrait:320,landscape:533};
if(nVersion==4){oSize.landscape-=77;
oSize.portrait-=77
}else{oSize.landscape-=83;
oSize.portrait-=83
}break;
case"galaxyS3":oSize={portrait:360,landscape:640};
oSize.landscape-=73;
oSize.portrait-=73;
break;
case"galaxyNote":oSize={portrait:400,landscape:640};
if(nVersion==4){oSize.landscape-=77;
oSize.portrait-=77
}else{oSize.landscape-=103;
oSize.portrait-=103
}break;
case"galaxyNexus":oSize={portrait:360,landscape:598};
oSize.landscape-=83;
oSize.portrait-=83;
break
}if(this.isVertical()){if(oSize.landscape&&oSize.landscape>oRet.height){oRet.height=oSize.landscape
}}else{if(oSize.portrait&&oSize.portrait>oRet.height){oRet.height=oSize.portrait
}}return oRet
}}).extend(jindo.Component);
return new __M__()
})();
jindo.UIComponent=jindo.$Class({$init:function(){this._bIsActivating=false
},isActivating:function(){return this._bIsActivating
},activate:function(){if(this.isActivating()){return this
}this._bIsActivating=true;
if(arguments.length>0){this._onActivate.apply(this,arguments)
}else{this._onActivate()
}return this
},deactivate:function(){if(!this.isActivating()){return this
}this._bIsActivating=false;
if(arguments.length>0){this._onDeactivate.apply(this,arguments)
}else{this._onDeactivate()
}return this
}}).extend(jindo.Component);
jindo.m.Touch=jindo.$Class({$init:function(sId,htUserOption){this._el=jindo.$(sId);
var htDefaultOption={nMomentumDuration:350,nMoveThreshold:7,nSlopeThreshold:25,nLongTapDuration:1000,nDoubleTapDuration:400,nTapThreshold:6,nPinchThreshold:0.1,nRotateThreshold:5,bActivateOnload:true};
this.option(htDefaultOption);
this.option(htUserOption||{});
this._initVariable();
this._setSlope();
if(this.option("bActivateOnload")){this.activate()
}},_initVariable:function(){this._hasTouchEvent="ontouchstart" in window;
this._radianToDegree=180/Math.PI;
this._htMoveInfo={nStartX:0,nStartY:0,nBeforeX:0,nBeforeY:0,nStartTime:0,nBeforeTime:0,nStartDistance:0,nBeforeDistance:0,nStartAngle:0,nLastAngle:0};
this.bStart=false;
this.bMove=false;
this.nMoveType=-1;
this.htEndInfo={};
this._nVSlope=0;
this._nHSlope=0;
this.bSetSlope=false
},_attachEvents:function(){this._htEvent={};
var bTouch=this._hasTouchEvent;
this._htEvent[bTouch?"touchstart":"mousedown"]={ref:jindo.$Fn(this._onStart,this).attach(this._el,(bTouch?"touchstart":"mousedown")),el:this._el};
this._htEvent[bTouch?"touchmove":"mousemove"]={ref:jindo.$Fn(this._onMove,this).attach(this._el,(bTouch?"touchmove":"mousemove")),el:this._el};
this._htEvent[bTouch?"touchend":"mouseup"]={ref:jindo.$Fn(this._onEnd,this).attach(this._el,(bTouch?"touchend":"mouseup")),el:this._el};
this._htEvent.rotate=jindo.$Fn(this._onResize,this).bind();
jindo.m.bindRotate(this._htEvent.rotate);
if(bTouch){this._htEvent.touchcancel={ref:jindo.$Fn(this._onCancel,this).attach(this._el,"touchcancel"),el:this._el}
}},_detachEvents:function(){for(var p in this._htEvent){var htTargetEvent=this._htEvent[p];
if(htTargetEvent.ref){htTargetEvent.ref.detach(htTargetEvent.el,p)
}}jindo.m.unbindRotate(this._htEvent.rotate);
this._htEvent=null
},_onCancel:function(oEvent){this._onEnd(oEvent)
},_onStart:function(oEvent){this._resetTouchInfo();
var htInfo=this._getTouchInfo(oEvent);
var htParam={element:htInfo[0].el,nX:htInfo[0].nX,nY:htInfo[0].nY,oEvent:oEvent};
if(!this._fireCustomEvent("touchStart",htParam)){return
}this.bStart=true;
this._htMoveInfo.nStartX=htInfo[0].nX;
this._htMoveInfo.nBeforeX=htInfo[0].nX;
this._htMoveInfo.nStartY=htInfo[0].nY;
this._htMoveInfo.nBeforeY=htInfo[0].nY;
this._htMoveInfo.nStartTime=htInfo[0].nTime;
this._htMoveInfo.aStartInfo=htInfo;
this._startLongTapTimer(htInfo,oEvent)
},_onMove:function(oEvent){if(!this.bStart){return
}this.bMove=true;
var htInfo=this._getTouchInfo(oEvent);
var htParam=this._getCustomEventParam(htInfo,false);
if(htInfo.length===1){if(this.nMoveType<0||this.nMoveType==3||this.nMoveType==4){this.nMoveType=this._getMoveType(htInfo)
}}else{if(this.nMoveType!==8){this.nMoveType=this._getMoveType(htInfo)
}}htParam=this._getCustomEventParam(htInfo,false);
if((typeof this._nLongTapTimer!="undefined")&&this.nMoveType!=3){this._deleteLongTapTimer()
}htParam.oEvent=oEvent;
var nDis=0;
if(this.nMoveType==0){nDis=Math.abs(htParam.nVectorX)
}else{if(this.nMoveType==1){nDis=Math.abs(htParam.nVectorY)
}else{nDis=Math.abs(htParam.nVectorX)+Math.abs(htParam.nVectorY)
}}if(nDis<this.option("nMoveThreshold")){return
}if(!this.fireEvent("touchMove",htParam)){this.bStart=false;
return
}this._htMoveInfo.nBeforeX=htInfo[0].nX;
this._htMoveInfo.nBeforeY=htInfo[0].nY;
this._htMoveInfo.nBeforeTime=htInfo[0].nTime
},_onEnd:function(oEvent){if(!this.bStart){return
}this._deleteLongTapTimer();
if(!this.bMove&&(this.nMoveType!=4)){this.nMoveType=3
}if(this.nMoveType<0){return
}var htInfo=this._getTouchInfo(oEvent);
if(this._isDblTap(htInfo[0].nX,htInfo[0].nY,htInfo[0].nTime)){clearTimeout(this._nTapTimer);
delete this._nTapTimer;
this.nMoveType=5
}var htParam=this._getCustomEventParam(htInfo,true);
htParam.oEvent=oEvent;
var sMoveType=htParam.sMoveType;
if((typeof this._htEventHandler[jindo.m.MOVETYPE[5]]!="undefined"&&(this._htEventHandler[jindo.m.MOVETYPE[5]].length>0))&&(this.nMoveType==3)){var self=this;
this._nTapTimer=setTimeout(function(){self.fireEvent("touchEnd",htParam);
self._fireCustomEvent(sMoveType,htParam);
delete self._nTapTimer
},this.option("nDoubleTapDuration"))
}else{this.fireEvent("touchEnd",htParam);
if(this.nMoveType!=4){if(this.nMoveType===8){htParam.sMoveType=jindo.m.MOVETYPE[6];
this._fireCustomEvent(jindo.m.MOVETYPE[6],htParam);
htParam.sMoveType=jindo.m.MOVETYPE[7];
this._fireCustomEvent(jindo.m.MOVETYPE[7],htParam)
}else{this._fireCustomEvent(sMoveType,htParam)
}}}this._updateTouchEndInfo(htInfo);
this._resetTouchInfo()
},_fireCustomEvent:function(sEvent,htOption){return this.fireEvent(sEvent,htOption)
},_getCustomEventParam:function(htTouchInfo,bTouchEnd){var sMoveType=jindo.m.MOVETYPE[this.nMoveType];
var nDuration=htTouchInfo[0].nTime-this._htMoveInfo.nStartTime;
var nVectorX=nVectorY=nMomentumX=nMomentumY=nSpeedX=nSpeedY=nDisX=nDisY=0;
nDisX=(this.nMoveType===1)?0:htTouchInfo[0].nX-this._htMoveInfo.nStartX;
nDisY=(this.nMoveType===0)?0:htTouchInfo[0].nY-this._htMoveInfo.nStartY;
nVectorX=htTouchInfo[0].nX-this._htMoveInfo.nBeforeX;
nVectorY=htTouchInfo[0].nY-this._htMoveInfo.nBeforeY;
if(bTouchEnd&&(this.nMoveType==0||this.nMoveType==1||this.nMoveType==2)){if(nDuration<=this.option("nMomentumDuration")){nSpeedX=Math.abs(nDisX)/nDuration;
nMomentumX=(nSpeedX*nSpeedX)/2;
nSpeedY=Math.abs(nDisY)/nDuration;
nMomentumY=(nSpeedY*nSpeedY)/2
}}var htParam={element:htTouchInfo[0].el,nX:htTouchInfo[0].nX,nY:htTouchInfo[0].nY,nVectorX:nVectorX,nVectorY:nVectorY,nDistanceX:nDisX,nDistanceY:nDisY,sMoveType:sMoveType,nStartX:this._htMoveInfo.nStartX,nStartY:this._htMoveInfo.nStartY,nStartTimeStamp:this._htMoveInfo.nStartTime};
if((htTouchInfo.length)>1||(this.nMoveType>=6)){htParam.nScale=this._getScale(htTouchInfo);
htParam.nRotation=this._getRotation(htTouchInfo);
if(htParam.nScale===null){htParam.nScale=this._htMoveInfo.nBeforeScale
}if(htParam.nRotation===null){htParam.nRotation=this._htMoveInfo.nBeforeRotation
}}if(htTouchInfo.length>=1){var aX=[];
var aY=[];
var aElement=[];
for(var i=0,nLen=htTouchInfo.length;
i<nLen;
i++){aX.push(htTouchInfo[i].nX);
aY.push(htTouchInfo[i].nY);
aElement.push(htTouchInfo[i].el)
}htParam.aX=aX;
htParam.aY=aY;
htParam.aElement=aElement
}if(bTouchEnd){htParam.nMomentumX=nMomentumX;
htParam.nMomentumY=nMomentumY;
htParam.nSpeedX=nSpeedX;
htParam.nSpeedY=nSpeedY;
htParam.nDuration=nDuration
}return htParam
},_updateTouchEndInfo:function(htInfo){this.htEndInfo={element:htInfo[0].el,time:htInfo[0].nTime,movetype:this.nMoveType,nX:htInfo[0].nX,nY:htInfo[0].nY}
},_deleteLongTapTimer:function(){if(typeof this._nLongTapTimer!="undefined"){clearTimeout(this._nLongTapTimer);
delete this._nLongTapTimer
}},_startLongTapTimer:function(htInfo,oEvent){var self=this;
if((typeof this._htEventHandler[jindo.m.MOVETYPE[4]]!="undefined")&&(this._htEventHandler[jindo.m.MOVETYPE[4]].length>0)){self._nLongTapTimer=setTimeout(function(){self.fireEvent("longTap",{element:htInfo[0].el,oEvent:oEvent,nX:htInfo[0].nX,nY:htInfo[0].nY});
delete self._nLongTapTimer;
self.nMoveType=4
},self.option("nLongTapDuration"))
}},_onResize:function(){this._setSlope()
},_isDblTap:function(nX,nY,nTime){if((typeof this._nTapTimer!="undefined")&&this.nMoveType==3){var nGap=this.option("nTapThreshold");
if((Math.abs(this.htEndInfo.nX-nX)<=nGap)&&(Math.abs(this.htEndInfo.nY-nY)<=nGap)){return true
}}return false
},_setSlope:function(){if(!this.bSetSlope){this._nHSlope=((window.innerHeight/2)/window.innerWidth).toFixed(2)*1;
this._nVSlope=(window.innerHeight/(window.innerWidth/2)).toFixed(2)*1
}},setSlope:function(nVSlope,nHSlope){this._nHSlope=nHSlope;
this._nVSlope=nVSlope;
this.bSetSlope=true
},getSlope:function(){return{nVSlope:this._nVSlope,nHSlope:this._nHSlope}
},_resetTouchInfo:function(){for(var x in this._htMoveInfo){this._htMoveInfo[x]=0
}this._deleteLongTapTimer();
this.bStart=false;
this.bMove=false;
this.nMoveType=-1
},_getMoveTypeBySingle:function(x,y){var nType=this.nMoveType;
var nX=Math.abs(this._htMoveInfo.nStartX-x);
var nY=Math.abs(this._htMoveInfo.nStartY-y);
var nDis=nX+nY;
var nGap=this.option("nTapThreshold");
if((nX<=nGap)&&(nY<=nGap)){nType=3
}else{nType=-1
}if(this.option("nSlopeThreshold")<=nDis){var nSlope=parseFloat((nY/nX).toFixed(2),10);
if((this._nHSlope===-1)&&(this._nVSlope===-1)){nType=2
}else{if(nSlope<=this._nHSlope){nType=0
}else{if(nSlope>=this._nVSlope){nType=1
}else{nType=2
}}}}return nType
},_getMoveTypeByMulti:function(aPos){var nType=-1;
if((this.nMoveType===6)||Math.abs(1-this._htMoveInfo.nBeforeScale)>=this.option("nPinchThreshold")){nType=6
}if((this.nMoveType===7)||Math.abs(0-this._htMoveInfo.nBeforeRotation)>=this.option("nRotateThreshold")){if(nType===6){nType=8
}else{nType=7
}}if(nType===-1){return this.nMoveType
}return nType
},_getScale:function(aPos){var nScale=-1;
var nDistance=this._getDistance(aPos);
if(nDistance<=0){return null
}if(this._htMoveInfo.nStartDistance===0){nScale=1;
this._htMoveInfo.nStartDistance=nDistance
}else{nScale=nDistance/this._htMoveInfo.nStartDistance
}this._htMoveInfo.nBeforeScale=nScale;
return nScale
},_getRotation:function(aPos){var nRotation=-1;
var nAngle=this._getAngle(aPos);
if(nAngle===null){return null
}if(this._htMoveInfo.nStartAngle===0){this._htMoveInfo.nStartAngle=nAngle;
nRotation=0
}else{nRotation=nAngle-this._htMoveInfo.nStartAngle
}this._htMoveInfo.nLastAngle=nAngle;
this._htMoveInfo.nBeforeRotation=nRotation;
return nRotation
},_getMoveType:function(aPos){var nType=this.nMoveType;
if(aPos.length===1){nType=this._getMoveTypeBySingle(aPos[0].nX,aPos[0].nY)
}else{if(aPos.length===2){nType=this._getMoveTypeByMulti(aPos)
}}return nType
},_getDistance:function(aPos){if(aPos.length===1){return -1
}return Math.sqrt(Math.pow(Math.abs(aPos[0].nX-aPos[1].nX),2)+Math.pow(Math.abs(aPos[0].nY-aPos[1].nY),2))
},_getAngle:function(aPos){if(aPos.length===1){return null
}var deltaX=aPos[0].nX-aPos[1].nX,deltaY=aPos[0].nY-aPos[1].nY;
var nAngle=Math.atan2(deltaY,deltaX)*this._radianToDegree;
if(this._htMoveInfo.nLastAngle!==null){var nDiff=Math.abs(this._htMoveInfo.nLastAngle-nAngle);
var nNext=nAngle+360;
var nPrev=nAngle-360;
if(Math.abs(nNext-this._htMoveInfo.nLastAngle)<nDiff){nAngle=nNext
}else{if(Math.abs(nPrev-this._htMoveInfo.nLastAngle)<nDiff){nAngle=nPrev
}}}return nAngle
},_getTouchInfo:function(oEvent){var aReturn=[];
var nTime=oEvent.$value().timeStamp;
if(this._hasTouchEvent){var oTouch=oEvent.$value().changedTouches;
for(var i=0,nLen=oTouch.length;
i<nLen;
i++){aReturn.push({el:jindo.m.getNodeElement(oTouch[i].target),nX:oTouch[i].pageX,nY:oTouch[i].pageY,nTime:nTime})
}}else{aReturn.push({el:oEvent.element,nX:oEvent.pos().pageX,nY:oEvent.pos().pageY,nTime:nTime})
}return aReturn
},getBaseElement:function(el){return this._el
},_onDeactivate:function(){this._detachEvents()
},_onActivate:function(){this._attachEvents()
},destroy:function(){this.deactivate();
this._el=null;
for(var p in this._htMoveInfo){this._htMoveInfo[p]=null
}this._htMoveInfo=null;
for(var p in this.htEndInfo){this.htEndInfo[p]=null
}this.htEndInfo=null;
this.bStart=null;
this.bMove=null;
this.nMoveType=null;
this._nVSlope=null;
this._nHSlope=null;
this.bSetSlope=null
}}).extend(jindo.UIComponent);
jindo.m.CircularFlicking=jindo.$Class({$init:function(sId,htUserOption){this.option({bHorizontal:true,sClassPrefix:"flick-",nFlickThreshold:40,nDuration:100,nTotalContents:3,nBounceDuration:100,bActivateOnload:true,bUseCss3d:jindo.m._isUseCss3d(),bUseTimingFunction:jindo.m._isUseTimingFunction(),bUseTranslate:true});
this.option(htUserOption||{});
this._initVar();
this._setWrapperElement(sId);
this._setElementSize();
this._updatePanelPosition();
this._initTouch();
if(this.option("bActivateOnload")){this.activate()
}},_initVar:function(){this._oTouch=null;
this._bFlickLeft=null;
this._elTransition=null;
this._htIndexInfo={nPanelIndex:0,nContentIndex:0,nNextPanelIndex:0,nNextContentIndex:0};
var htInfo=jindo.m.getDeviceInfo();
this.sTransformStart="translate(";
this.sTransformEnd=")";
this._bAndroid=htInfo.android&&(!htInfo.bChrome);
this._nVersion=htInfo.version;
this._isIos=(htInfo.iphone||htInfo.ipad);
this._bUseCss3=this.option("bUseCss3d");
if(this._bUseCss3){this.sTransformStart="translate3d(";
this.sTransformEnd=",0px)"
}this._sCssPrefix=jindo.m.getCssPrefix();
this._wfTransitionEnd=jindo.$Fn(this._onTransitionEnd,this).bind();
this._aAnchor=null;
this._fnDummyFnc=function(){return false
};
this._bBlocked=false;
this._isFlicking=false;
this._bTouchStart=false
},_initTouch:function(){this._oTouch=new jindo.m.Touch(this._htWElement.base.$value(),{nSlopeThreshold:4,nMoveThreshold:0,bActivateOnload:false})
},_setWrapperElement:function(el){this._htWElement={};
el=jindo.$(el);
var sClass="."+this.option("sClassPrefix");
this._htWElement.base=jindo.$Element(el);
this._htWElement.container=jindo.$Element(jindo.$$.getSingle(sClass+"container",el));
this._htWElement.container.css("position","relative").css("width","100%").css("height","100%");
var aPanel=jindo.$$(sClass+"panel",el);
this._htWElement.aPanel=jindo.$A(aPanel).forEach(function(value,index,array){var wel=jindo.$Element(value);
array[index]=wel;
wel.css("position","absolute").css("width","100%").css("height","100%")
}).$value();
if(this._isAndroid&&(this._nVersion<"3")){this._htWElement.aDummyTag=[];
for(var i=0,nLen=this._htWElement.aPanel.length;
i<nLen;
i++){var wel=this._htWElement.aPanel[i];
var elDummyTag=jindo.$$.getSingle("._cflick_dummy_atag_",wel.$value());
if(!elDummyTag){elDummyTag=jindo.$("<a href='javascript:void(0);' class='_cflick_dummy_atag_'></a>");
elDummyTag.style.position="absolute";
elDummyTag.style.left="-1000px";
elDummyTag.style.top="-1000px";
elDummyTag.style.width=0;
elDummyTag.style.height=0;
wel.append(elDummyTag)
}this._htWElement.aDummyTag.push(elDummyTag)
}}},_prepareTransition:function(){var sTransfrom=this.option("bUseTranslate")?"-webkit-transform":(this.option("bUseTranslate")?"left":"top");
for(var i=0,nLen=this._htWElement.aPanel.length;
i<nLen;
i++){this._htWElement.aPanel[i].css(this._sCssPrefix+"Transform",this.sTransformStart+"0px,0px"+this.sTransformEnd);
this._htWElement.aPanel[i].css(this._sCssPrefix+"TransitionProperty",sTransfrom)
}},_setElementSize:function(){if(this.option("bHorizontal")){this._htWElement.container.height(this._htWElement.base.height())
}else{this._htWElement.container.width(this._htWElement.base.width())
}},_setAnchorElement:function(el){if(this._isIos){this._aAnchor=jindo.$$("A",this._htWElement.container.$value())
}},_updatePanelPosition:function(){this._aCtPosition=[];
var el=this._htWElement.base.$value();
var nW=this.option("bHorizontal")?el.clientWidth:el.clientHeight;
this._htPositionInfo={left:0,center:100,right:200};
this._htContainerInfo={left:nW*-1,center:0,right:nW};
this._nDefaultSize=nW
},_onResize:function(){this._isFlicking=false;
this.refresh(this.getPanelIndex(),true)
},getPanelIndex:function(){return this._htIndexInfo.nPanelIndex
},getPanelElement:function(){return this._htWElement.aPanel[this.getPanelIndex()]
},getRightPanelIndex:function(){var n=this.getPanelIndex()+1;
n=(n>2)?0:n;
return n
},getRightPanelElement:function(){return this._htWElement.aPanel[this.getRightPanelIndex()]
},getLeftPanelIndex:function(){var n=this.getPanelIndex()-1;
n=(n<0)?2:n;
return n
},getLeftPanelElement:function(){return this._htWElement.aPanel[this.getLeftPanelIndex()]
},setContentIndex:function(n,bRefresh){if(!this.isActivating()){return
}if(typeof bRefresh==="undefined"){bRefresh=true
}n=parseInt(n,10);
if(n<0||n>(this.option("nTotalContents")-1)){return
}if(bRefresh){if(!this._fireCustomEvent("beforeMove",{nPanelIndex:this.getPanelIndex(),nContentIndex:this.getContentIndex(),nNextPanelIndex:n%3,nNextContentIndex:n})){return
}}this._htIndexInfo.nContentIndex=n;
this._htIndexInfo.nPanelIndex=n%3;
this._htIndexInfo.nNextContentIndex=n;
this._htIndexInfo.nNextPanelIndex=n%3;
if(bRefresh){this.refresh(this._htIndexInfo.nPanelIndex,false,true)
}},getContentIndex:function(){return this._htIndexInfo.nContentIndex
},getRightContentIndex:function(){var n=this.getContentIndex()+1;
n=((n+1)>this.option("nTotalContents"))?0:n;
return n
},getLeftContentIndex:function(){var n=this.getContentIndex()-1;
n=(n<0)?(this.option("nTotalContents")-1):n;
return n
},_attachTouchEvt:function(){this._oTouch.attach({touchMove:this._htEvent.touchMove,touchEnd:this._htEvent.touchEnd,longTap:this._htEvent.longTap})
},_detachTouchEvt:function(){this._oTouch.detach({touchMove:this._htEvent.touchMove,touchEnd:this._htEvent.touchEnd,longTap:this._htEvent.longTap})
},_onStart:function(oCustomEvt){this._detachTouchEvt();
if(this._isFlicking){return
}if(!this.fireEvent("touchStart",oCustomEvt)){return
}this._bTouchStart=true;
this._clearAnchor();
this._attachTouchEvt()
},_onMove:function(oCustomEvt){var bH=this.option("bHorizontal");
var weParent=oCustomEvt.oEvent;
if(oCustomEvt.sMoveType===jindo.m.MOVETYPE[0]){if(bH){weParent.stop(jindo.$Event.CANCEL_ALL)
}else{return
}}else{if(oCustomEvt.sMoveType===jindo.m.MOVETYPE[1]){if(!bH){weParent.stop(jindo.$Event.CANCEL_ALL)
}else{return
}}else{if(oCustomEvt.sMoveType===jindo.m.MOVETYPE[2]){weParent.stop(jindo.$Event.CANCEL_ALL)
}}}if(this._isFlicking){return
}if(!this._bTouchStart){return
}this.fireEvent("touchMove",oCustomEvt);
var nDis=bH?oCustomEvt.nDistanceX:oCustomEvt.nDistanceY;
this._movePanels(nDis,nDis)
},_onEnd:function(oCustomEvt,nTime){this._detachTouchEvt();
if(this._isFlicking){return
}if(!this._bTouchStart){return
}this._isFlicking=true;
var htInfo=this._getSnap(oCustomEvt.nDistanceX,oCustomEvt.nDistanceY,nTime);
if(oCustomEvt.sMoveType===jindo.m.MOVETYPE[0]||oCustomEvt.sMoveType===jindo.m.MOVETYPE[1]||oCustomEvt.sMoveType===jindo.m.MOVETYPE[2]){oCustomEvt.oEvent.stop(jindo.$Event.CANCEL_ALL)
}if(oCustomEvt.sMoveType===jindo.m.MOVETYPE[3]||oCustomEvt.sMoveType===jindo.m.MOVETYPE[4]){this._restoreAnchor()
}var nPanelIndex=this.getPanelIndex();
var nPos=this.option("bHorizontal")?htInfo.nX:htInfo.nY;
var nDis=this.option("bHorizontal")?oCustomEvt.nDistanceX:oCustomEvt.nDistanceY;
if(nPanelIndex==htInfo.nPanelIndex){if(nPos===0){this._onTransitionEnd()
}else{this._movePanels(nPos,nDis,this.option("nBounceDuration"),false)
}return
}var htParam={nPanelIndex:nPanelIndex,nContentIndex:this.getContentIndex(),nNextPanelIndex:htInfo.nPanelIndex,nNextContentIndex:htInfo.nContentIndex};
if(this._bFlickLeft!==null){if(this.option("bHorizontal")){htParam.bLeft=this._bFlickLeft
}else{htParam.bTop=this._bFlickLeft
}}if(!this._fireCustomEvent("beforeFlicking",htParam)){return
}this._htIndexInfo.nNextPanelIndex=htInfo.nPanelIndex;
this._htIndexInfo.nNextContentIndex=htInfo.nContentIndex;
if(htInfo.nTime>0){this._movePanels(nPos,nDis,htInfo.nTime,false)
}else{this._onTransitionEnd()
}this.fireEvent("touchEnd",oCustomEvt)
},_movePanels:function(nPos,nDis,nTime,bMove){var self=this;
if(typeof nTime==="undefined"){nTime=0
}if(typeof bMove==="undefined"){bMove=true
}var welWrapper=this._htWElement.container;
if(bMove||(this._htOption.bUseTimingFunction)||(nTime===0)){this._setPosition(welWrapper,nPos,nTime,!bMove)
}else{var nDuration=nTime;
var startTime=(new Date()).getTime(),nStartDis=nDis,nTotalDis=this._nDefaultSize;
if(nPos<0){nTotalDis=nTotalDis*-1
}(function animate(){var now=(new Date()).getTime(),nEaseOut;
if(now>=startTime+nDuration){clearTimeout(self._nTimerAnimate);
delete self._nTimerAnimate;
setTimeout(function(){self._onTransitionEnd()
},10);
return
}now=(now-startTime)/nDuration-1;
nEaseOut=Math.sqrt(1-Math.pow(now,2));
var nDis=(nTotalDis-nStartDis)*nEaseOut+nStartDis;
self._setPosition(welWrapper,nDis,0,false);
self._nTimerAnimate=setTimeout(animate,1)
})()
}},_focusFixedBug:function(){if(typeof this._htWElement.aDummyTag==="undefined"){return
}for(var i=0,nLen=this._htWElement.aDummyTag.length;
i<nLen;
i++){this._htWElement.aDummyTag[i].focus()
}},_getSnap:function(nDistanceX,nDistanceY,nDuration){var nFinalDis=this.option("bHorizontal")?nDistanceX:nDistanceY;
var nNewPos=this._htContainerInfo.center;
var nTime=(typeof nDuration!="undefined")?nDuration:this.option("nDuration");
var nPanelIndex=this.getPanelIndex();
var nContentIndex=this.getContentIndex();
if(Math.abs(nFinalDis)>this.option("nFlickThreshold")){if(nFinalDis<0){nNewPos=this.option("bUseTranslate")?this._htContainerInfo.left:-200;
nPanelIndex=this.getRightPanelIndex();
nContentIndex=this.getRightContentIndex();
this._bFlickLeft=true
}else{nNewPos=this.option("bUseTranslate")?this._htContainerInfo.right:0;
nPanelIndex=this.getLeftPanelIndex();
nContentIndex=this.getLeftContentIndex();
this._bFlickLeft=false
}}return{nX:nNewPos,nY:nNewPos,nTime:nTime,nPanelIndex:nPanelIndex,nContentIndex:nContentIndex}
},_setPosition:function(wel,nDis,nDuration,bEnd){if(typeof nDuration==="undefined"){nDuration=0
}if(!this._htOption.bUseTranslate){this._setPositionForStyle(wel,nDis,nDuration,bEnd)
}else{this._setPositionTransform(wel,nDis,nDuration,bEnd)
}},_setPositionTransform:function(wel,nDis,nDuration,bEnd){var bH=this.option("bHorizontal");
var nX=bH?nDis:0;
var nY=bH?0:nDis;
var htCss={};
htCss[this._sCssPrefix+"TransitionDuration"]=(nDuration===0)?"0":nDuration+"ms";
htCss[this._sCssPrefix+"Transform"]=this.sTransformStart+nX+"px,"+nY+"px"+this.sTransformEnd;
if(bEnd){var htCssOffset=jindo.m.getCssOffset(wel.$value());
if((htCssOffset.left===nX)&&(htCssOffset.top===nY)){nDuration=0
}this._attachTransitionEnd(wel.$value(),nDuration)
}wel.css(htCss)
},_setPositionForStyle:function(wel,nDis,nDuration,bEnd){var sName=this.option("bHorizontal")?"left":"top";
var n=((nDis/this._nDefaultSize)*100)-100;
var nPos=bEnd?nDis:n;
var htCss={};
htCss[this._sCssPrefix+"TransitionDuration"]=(nDuration===0)?"0":nDuration+"ms";
htCss[sName]=nPos+"%";
if(bEnd){if(nPos===parseFloat(wel.css(sName).replace("px",""),10)){nDuration=0
}this._attachTransitionEnd(wel.$value(),nDuration)
}wel.css(htCss)
},_clearAnchor:function(){if(this._aAnchor&&!this._bBlocked){var aClickAddEvent=null;
for(var i=0,nILength=this._aAnchor.length;
i<nILength;
i++){if(this._fnDummyFnc!==this._aAnchor[i].onclick){this._aAnchor[i]._onclick=this._aAnchor[i].onclick
}this._aAnchor[i].onclick=this._fnDummyFnc;
aClickAddEvent=this._aAnchor[i].___listeners___||[];
for(var j=0,nJLength=aClickAddEvent.length;
j<nJLength;
j++){___Old__removeEventListener___.call(this._aAnchor[i],"click",aClickAddEvent[j].listener,aClickAddEvent[j].useCapture)
}}this._bBlocked=true
}},_restoreAnchor:function(){if(this._aAnchor&&this._bBlocked){var aClickAddEvent=null;
for(var i=0,nILength=this._aAnchor.length;
i<nILength;
i++){if(this._fnDummyFnc!==this._aAnchor[i]._onclick){this._aAnchor[i].onclick=this._aAnchor[i]._onclick
}else{this._aAnchor[i].onclick=null
}aClickAddEvent=this._aAnchor[i].___listeners___||[];
for(var j=0,nJLength=aClickAddEvent.length;
j<nJLength;
j++){___Old__addEventListener___.call(this._aAnchor[i],"click",aClickAddEvent[j].listener,aClickAddEvent[j].useCapture)
}}this._bBlocked=false
}},moveNext:function(nDuration){if(!this.isActivating()){return
}this._bTouchStart=true;
var n=this.option("nFlickThreshold")*-1;
this._onEnd({nDistanceX:n-10,nDistanceY:n-10},nDuration)
},movePrev:function(nDuration){if(!this.isActivating()){return
}var n=this.option("nFlickThreshold");
this._bTouchStart=true;
this._onEnd({nDistanceX:n+10,nDistanceY:n+10},nDuration)
},refresh:function(n,bResize,bFireEvent){if(!this.isActivating()){return
}if(typeof bResize==="undefined"){bResize=false
}if(typeof bFireEvent==="undefined"){bFireEvent=false
}if(bResize){this._setElementSize();
this._updatePanelPosition()
}if(typeof n==="undefined"){n=this.getPanelIndex()
}if(this._htIndexInfo.nPanelIndex!=n){this._htIndexInfo.nPanelIndex=n
}var nCenter=this.getPanelIndex();
var nLeft=this.getLeftPanelIndex();
var nRight=this.getRightPanelIndex();
var sPosition=this.option("bHorizontal")?"left":"top";
this._htWElement.aPanel[nCenter].css(sPosition,this._htPositionInfo.center+"%").css("zIndex",10);
this._htWElement.aPanel[nLeft].css(sPosition,this._htPositionInfo.left+"%").css("zIndex",1);
this._htWElement.aPanel[nRight].css(sPosition,this._htPositionInfo.right+"%").css("zIndex",1);
this._htWElement.container.css(this._sCssPrefix+"TransitionDuration","0ms");
if(this.option("bUseTranslate")){this._htWElement.container.css(this._sCssPrefix+"Transform",this.sTransformStart+"0,0px"+this.sTransformEnd)
}this._htWElement.container.css(sPosition,"-100%");
this._restoreAnchor();
this._setAnchorElement();
if(bFireEvent){this._fireCustomEvent("move")
}},_onTransitionEnd:function(evt){this._detachTransitionEnd();
var bFireEvent=false;
if(this._htIndexInfo.nPanelIndex!=this._htIndexInfo.nNextPanelIndex){bFireEvent=true
}this._htIndexInfo.nContentIndex=this._htIndexInfo.nNextContentIndex;
this.refresh(this._htIndexInfo.nNextPanelIndex);
this._focusFixedBug();
if(bFireEvent){this._fireCustomEvent("afterFlicking")
}this._bFlickLeft=null;
this._isFlicking=false;
this._bTouchStart=false
},_fireCustomEvent:function(sEventName,htParam){if(typeof htParam==="undefined"){htParam={nPanelIndex:this.getPanelIndex(),nContentIndex:this.getContentIndex(),nContentLeftIndex:this.getLeftContentIndex(),nContentRightIndex:this.getRightContentIndex(),nPanelLeftIndex:this.getLeftPanelIndex(),nPanelRightIndex:this.getRightPanelIndex()};
if(this.option("bHorizontal")){htParam.bLeft=this._bFlickLeft
}else{htParam.bTop=this._bFlickLeft
}}return this.fireEvent(sEventName,htParam)
},_attachTransitionEnd:function(el,nDuration){if(el===this._htWElement.container.$value()){this._elTransition=el;
if(nDuration===0){var self=this;
setTimeout(function(){self._onTransitionEnd()
},10)
}else{jindo.m.attachTransitionEnd(this._elTransition,this._wfTransitionEnd)
}}},_detachTransitionEnd:function(){if(this._elTransition){jindo.m.detachTransitionEnd(this._elTransition,this._wfTransitionEnd)
}},_onActivate:function(){this._attachEvent();
this._oTouch.activate();
this._prepareTransition();
this.refresh()
},_onDeactivate:function(){this._detachEvent();
this._oTouch.deactivate()
},_attachEvent:function(){this._htEvent={};
this._htEvent.rotate=jindo.$Fn(this._onResize,this).bind();
jindo.m.bindRotate(this._htEvent.rotate);
this._htEvent.touchMove=jindo.$Fn(this._onMove,this).bind();
this._htEvent.touchEnd=jindo.$Fn(this._onEnd,this).bind();
this._htEvent.touchStart=jindo.$Fn(this._onStart,this).bind();
this._oTouch.attach("touchStart",this._htEvent.touchStart);
this._htEvent.pageshow=jindo.$Fn(this._onPageShow,this).bind();
jindo.m.bindPageshow(this._htEvent.pageshow)
},_onPageShow:function(){this._onResize()
},_detachEvent:function(){jindo.m.unbindRotate(this._htEvent.rotate);
jindo.m.unbindPageshow(this._htEvent.pageshow);
this._oTouch.detachAll();
this._htEvent=null
},destroy:function(){this.deactivate();
for(var p in this._htWElement){this._htWElement[p]=null
}for(p in this._htIndexInfo){this._htIndexInfo[p]=null
}this._oTouch.destroy();
this._elTransition=null;
this._oTouch=null;
this._bFlickLeft=null;
this._isAndroid=null;
this._aCurrentPosition=null;
this.sTransformStart=null;
this.sTransformEnd=null;
this._isIos=null;
this._bUseCss3=null;
this._aAnchor=null;
this._fnDummyFnc=null;
this._sCssPrefix=null;
this._bBlocked=null;
this._isFlicking=null;
this._bTouchStart=null;
for(p in this._htAnimationStep){this._htAnimationStep[p]=null
}this._htAnimationStep=null
}}).extend(jindo.UIComponent);jindo.Component=jindo.$Class({_htEventHandler:null,_htOption:null,$init:function(){var aInstance=this.constructor.getInstance();
aInstance.push(this);
this._htEventHandler={};
this._htOption={};
this._htOption._htSetter={}
},option:function(sName,vValue){switch(typeof sName){case"undefined":return this._htOption;
case"string":if(typeof vValue!="undefined"){if(sName=="htCustomEventHandler"){if(typeof this._htOption[sName]=="undefined"){this.attach(vValue)
}else{return this
}}this._htOption[sName]=vValue;
if(typeof this._htOption._htSetter[sName]=="function"){this._htOption._htSetter[sName](vValue)
}}else{return this._htOption[sName]
}break;
case"object":for(var sKey in sName){if(sKey=="htCustomEventHandler"){if(typeof this._htOption[sKey]=="undefined"){this.attach(sName[sKey])
}else{continue
}}this._htOption[sKey]=sName[sKey];
if(typeof this._htOption._htSetter[sKey]=="function"){this._htOption._htSetter[sKey](sName[sKey])
}}break
}return this
},optionSetter:function(sName,fSetter){switch(typeof sName){case"undefined":return this._htOption._htSetter;
case"string":if(typeof fSetter!="undefined"){this._htOption._htSetter[sName]=jindo.$Fn(fSetter,this).bind()
}else{return this._htOption._htSetter[sName]
}break;
case"object":for(var sKey in sName){this._htOption._htSetter[sKey]=jindo.$Fn(sName[sKey],this).bind()
}break
}return this
},fireEvent:function(sEvent,oEvent){oEvent=oEvent||{};
var fInlineHandler=this["on"+sEvent],aHandlerList=this._htEventHandler[sEvent]||[],bHasInlineHandler=typeof fInlineHandler=="function",bHasHandlerList=aHandlerList.length>0;
if(!bHasInlineHandler&&!bHasHandlerList){return true
}aHandlerList=aHandlerList.concat();
oEvent.sType=sEvent;
if(typeof oEvent._aExtend=="undefined"){oEvent._aExtend=[];
oEvent.stop=function(){if(oEvent._aExtend.length>0){oEvent._aExtend[oEvent._aExtend.length-1].bCanceled=true
}}
}oEvent._aExtend.push({sType:sEvent,bCanceled:false});
var aArg=[oEvent],i,nLen;
for(i=2,nLen=arguments.length;
i<nLen;
i++){aArg.push(arguments[i])
}if(bHasInlineHandler){fInlineHandler.apply(this,aArg)
}if(bHasHandlerList){var fHandler;
for(i=0,fHandler;
(fHandler=aHandlerList[i]);
i++){fHandler.apply(this,aArg)
}}return !oEvent._aExtend.pop().bCanceled
},attach:function(sEvent,fHandlerToAttach){if(arguments.length==1){jindo.$H(arguments[0]).forEach(jindo.$Fn(function(fHandler,sEvent){this.attach(sEvent,fHandler)
},this).bind());
return this
}var aHandler=this._htEventHandler[sEvent];
if(typeof aHandler=="undefined"){aHandler=this._htEventHandler[sEvent]=[]
}aHandler.push(fHandlerToAttach);
return this
},detach:function(sEvent,fHandlerToDetach){if(arguments.length==1){jindo.$H(arguments[0]).forEach(jindo.$Fn(function(fHandler,sEvent){this.detach(sEvent,fHandler)
},this).bind());
return this
}var aHandler=this._htEventHandler[sEvent];
if(aHandler){for(var i=0,fHandler;
(fHandler=aHandler[i]);
i++){if(fHandler===fHandlerToDetach){aHandler=aHandler.splice(i,1);
break
}}}return this
},detachAll:function(sEvent){var aHandler=this._htEventHandler;
if(arguments.length){if(typeof aHandler[sEvent]=="undefined"){return this
}delete aHandler[sEvent];
return this
}for(var o in aHandler){delete aHandler[o]
}return this
}});
jindo.Component.factory=function(aObject,htOption){var aReturn=[],oInstance;
if(typeof htOption=="undefined"){htOption={}
}for(var i=0,el;
(el=aObject[i]);
i++){oInstance=new this(el,htOption);
aReturn[aReturn.length]=oInstance
}return aReturn
};
jindo.Component.getInstance=function(){if(typeof this._aInstance=="undefined"){this._aInstance=[]
}return this._aInstance
};
jindo.UIComponent=jindo.$Class({$init:function(){this._bIsActivating=false
},isActivating:function(){return this._bIsActivating
},activate:function(){if(this.isActivating()){return this
}this._bIsActivating=true;
if(arguments.length>0){this._onActivate.apply(this,arguments)
}else{this._onActivate()
}return this
},deactivate:function(){if(!this.isActivating()){return this
}this._bIsActivating=false;
if(arguments.length>0){this._onDeactivate.apply(this,arguments)
}else{this._onDeactivate()
}return this
}}).extend(jindo.Component);
jindo.ScrollBar=new jindo.$Class({_bMouseEnter:false,_bIsEventAttachedForCommon:false,_bIsEventAttachedForVertical:false,_bIsEventAttachedForHorizontal:false,$init:function(el,oOption){this.option({sClassPrefix:"scrollbar-",nDelta:16,sClassNameForRollover:"rollover",bActivateOnload:true});
this.option(oOption||{});
this._el=jindo.$(el);
this._oTimer=new jindo.Timer();
this._oTransition=new jindo.Transition().fps(30);
this._wfOnMouseEnter=jindo.$Fn(this._onMouseEnter,this);
this._wfOnMouseLeave=jindo.$Fn(this._onMouseLeave,this);
this._wfOnWheel=jindo.$Fn(this._onWheel,this);
this._wfOnMouseUp=jindo.$Fn(this._onMouseUp,this);
this._assignHTMLElements();
this._initialize4Tablet();
if(this.option("bActivateOnload")){this.activate()
}},_assignHTMLElements:function(){var el=this._el,sClassPrefix=this.option("sClassPrefix");
this._elBox=jindo.$$.getSingle("."+sClassPrefix+"box",el);
this._elContent=jindo.$$.getSingle("."+sClassPrefix+"content",el);
var welBox=jindo.$Element(this._elBox),welContent=jindo.$Element(this._elContent);
this._oBoxSize={nWidth:welBox.width(),nHeight:welBox.height()};
this._oContentSize={nWidth:welContent.width(),nHeight:welContent.height()};
this._oHorizontal={elScrollBar:jindo.$$.getSingle("."+sClassPrefix+"h",el)};
var oH=this._oHorizontal;
if(oH.elScrollBar){oH.elTrack=jindo.$$.getSingle("."+sClassPrefix+"track",oH.elScrollBar);
oH.elThumb=jindo.$$.getSingle("."+sClassPrefix+"thumb",oH.elTrack);
oH.elThumbHead=jindo.$$.getSingle("."+sClassPrefix+"thumb-head",oH.elThumb);
oH.elThumbBody=jindo.$$.getSingle("."+sClassPrefix+"thumb-body",oH.elThumb);
oH.elThumbFoot=jindo.$$.getSingle("."+sClassPrefix+"thumb-foot",oH.elThumb);
oH.elButtonLeft=jindo.$$.getSingle("."+sClassPrefix+"button-left",oH.elScrollBar);
oH.elButtonRight=jindo.$$.getSingle("."+sClassPrefix+"button-right",oH.elScrollBar)
}this._oVertical={elScrollBar:jindo.$$.getSingle("."+sClassPrefix+"v",el)};
var oV=this._oVertical;
if(oV.elScrollBar){oV.elTrack=jindo.$$.getSingle("."+sClassPrefix+"track",oV.elScrollBar);
oV.elThumb=jindo.$$.getSingle("."+sClassPrefix+"thumb",oV.elTrack);
oV.elThumbHead=jindo.$$.getSingle("."+sClassPrefix+"thumb-head",oV.elThumb);
oV.elThumbBody=jindo.$$.getSingle("."+sClassPrefix+"thumb-body",oV.elThumb);
oV.elThumbFoot=jindo.$$.getSingle("."+sClassPrefix+"thumb-foot",oV.elThumb);
oV.elButtonUp=jindo.$$.getSingle("."+sClassPrefix+"button-up",oV.elScrollBar);
oV.elButtonDown=jindo.$$.getSingle("."+sClassPrefix+"button-down",oV.elScrollBar)
}},getBox:function(){return this._elBox
},getContent:function(){return this._elContent
},getDefaultBoxSize:function(){return this._oBoxSize
},getDefaultContentSize:function(){return this._oContentSize
},getScrollBarHorizontal:function(){return this._oHorizontal
},getScrollBarVertical:function(){return this._oVertical
},getSliderHorizontal:function(){return this._oSliderHorizontal||null
},getSliderVertical:function(){return this._oSliderVertical||null
},getRolloverArea:function(){return this._oRolloverArea
},_attachEvent:function(sDirection){var sClassPrefix=this.option("sClassPrefix"),self=this,oH=this.getScrollBarHorizontal(),oV=this.getScrollBarVertical();
function attach(o){if(o.elScrollBar){var sClassNameForRollover=self.option("sClassNameForRollover");
jindo.$Element(o.elTrack).addClass(sClassNameForRollover);
jindo.$Element(o.elThumb).addClass(sClassNameForRollover);
if(o.elButtonLeft){jindo.$Element(o.elButtonLeft).addClass(sClassNameForRollover)
}if(o.elButtonRight){jindo.$Element(o.elButtonRight).addClass(sClassNameForRollover)
}if(o.elButtonUp){jindo.$Element(o.elButtonUp).addClass(sClassNameForRollover)
}if(o.elButtonDown){jindo.$Element(o.elButtonDown).addClass(sClassNameForRollover)
}}}function attachH(){if(!self._bIsEventAttachedForHorizontal){attach(oH)
}self._bIsEventAttachedForHorizontal=true
}function attachV(){if(!self._bIsEventAttachedForVertical){attach(oV)
}self._bIsEventAttachedForVertical=true
}if(!this._bIsEventAttachedForCommon){this._initSliders();
this._initRolloverArea();
this._wfOnMouseEnter.attach(this._el,"mouseenter");
this._wfOnMouseLeave.attach(this._el,"mouseleave");
this._wfOnWheel.attach(document,"mousewheel");
this._wfOnMouseUp.attach(document,"mouseup");
this._bIsEventAttachedForCommon=true;
jindo.$Element(this._el).removeClass(sClassPrefix+"noscript")
}if(!sDirection){attachH();
attachV()
}if(sDirection=="horizontal"){attachH()
}if(sDirection=="vertical"){attachV()
}},_detachEvent:function(sDirection){var sClassPrefix=this.option("sClassPrefix"),self=this,oH=this.getScrollBarHorizontal(),oV=this.getScrollBarVertical();
function detach(o){if(o.elScrollBar){var sClassNameForRollover=self.option("sClassNameForRollover");
jindo.$Element(o.elTrack).removeClass(sClassNameForRollover);
jindo.$Element(o.elThumb).removeClass(sClassNameForRollover);
if(o.elButtonLeft){jindo.$Element(o.elButtonLeft).removeClass(sClassNameForRollover)
}if(o.elButtonRight){jindo.$Element(o.elButtonRight).removeClass(sClassNameForRollover)
}if(o.elButtonUp){jindo.$Element(o.elButtonUp).removeClass(sClassNameForRollover)
}if(o.elButtonDown){jindo.$Element(o.elButtonDown).removeClass(sClassNameForRollover)
}}}function detachH(){if(self._bIsEventAttachedForHorizontal){detach(oH)
}self._bIsEventAttachedForHorizontal=false
}function detachV(){if(self._bIsEventAttachedForVertical){detach(oV)
}self._bIsEventAttachedForVertical=false
}if(!sDirection){detachH();
detachV()
}else{if(sDirection=="horizontal"){detachH()
}else{if(sDirection=="vertical"){detachV()
}}}if(this._bIsEventAttachedForCommon&&!this._bIsEventAttachedForHorizontal&&!this._bIsEventAttachedForVertical){this._wfOnMouseEnter.detach(this._el,"mouseenter");
this._wfOnMouseLeave.detach(this._el,"mouseleave");
this._wfOnWheel.detach(document,"mousewheel");
this._wfOnMouseUp.detach(document,"mouseup");
this._bMouseEnter=false;
this._bIsEventAttachedForCommon=false;
this.getRolloverArea().deactivate();
jindo.$Element(this._el).addClass(sClassPrefix+"noscript")
}},_activateH:function(){var oSliderH=this.getSliderHorizontal();
if(oSliderH){oSliderH.activate();
this.getBox().scrollLeft=0;
this.setScrollLeft(0)
}},_activateV:function(){var oSliderV=this.getSliderVertical();
if(oSliderV){oSliderV.activate();
this.getBox().scrollTop=0;
this.setScrollTop(0)
}},_onActivate:function(sDirection){this._attachEvent(sDirection||null);
this._activate4Tablet();
if(!sDirection){this._activateH();
this._activateV();
jindo.$Element(this._el).removeClass(this.option("sClassPrefix")+"noscript");
return
}if(sDirection=="horizontal"){this._activateH();
return
}if(sDirection=="vertical"){this._activateV();
return
}},_deactivateH:function(){var oSliderH=this.getSliderHorizontal();
if(oSliderH){oSliderH.deactivate();
this.getContent().style.left="0px";
this.getBox().scrollLeft=0
}},_deactivateV:function(){var oSliderV=this.getSliderVertical();
if(oSliderV){oSliderV.deactivate();
this.getContent().style.top="0px";
this.getBox().scrollTop=0
}},_onDeactivate:function(sDirection){this._detachEvent(sDirection||null);
this._deactivate4Tablet();
if(!sDirection){this._deactivateH();
this._deactivateV();
jindo.$Element(this._el).addClass(this.option("sClassPrefix")+"noscript");
return
}if(sDirection=="horizontal"){this._deactivateH();
return
}if(sDirection=="vertical"){this._deactivateV();
return
}},_initSliders:function(){var self=this,sClassPrefix=this.option("sClassPrefix"),oH=this.getScrollBarHorizontal(),oV=this.getScrollBarVertical();
if(oH.elScrollBar){this._nScrollWidth=jindo.$Element(this._elContent).width()-jindo.$Element(this._elBox).width();
this._oSliderHorizontal=new jindo.Slider(oH.elTrack,{sClassPrefix:sClassPrefix,bVertical:false,nMinValue:0,nMaxValue:this._nScrollWidth});
this._oSliderHorizontal._oTransition=new jindo.Transition().fps(30);
this._oSliderHorizontal.attach({beforeChange:function(oCustomEvent){var nTrackWidth=jindo.$Element(this.getTrack()).width(),nThumbWidth=jindo.$Element(this.getThumb(oCustomEvent.nIndex)).width(),nAvailWidth=nTrackWidth-nThumbWidth;
oCustomEvent.nPos=Math.min(oCustomEvent.nPos,nAvailWidth);
oCustomEvent.nPos=Math.max(oCustomEvent.nPos,0);
if(oCustomEvent.bJump){oCustomEvent.stop();
this._oTransition.abort().start(200,this.getThumb(oCustomEvent.nIndex),{"@left":jindo.Effect.easeOut(oCustomEvent.nPos+"px")}).attach({playing:function(oCustomEvent2){self.setScrollLeft(self._oSliderHorizontal._getValue(0,parseInt(oCustomEvent2.sValue,10)))
}})
}else{self.setScrollLeft(this._getValue(0,oCustomEvent.nPos))
}}})
}if(oV.elScrollBar){this._nScrollHeight=jindo.$Element(this._elContent).height()-jindo.$Element(this._elBox).height();
this._oSliderVertical=new jindo.Slider(oV.elTrack,{sClassPrefix:sClassPrefix,bVertical:true,nMinValue:0,nMaxValue:this._nScrollHeight});
this._oSliderVertical._oTransition=new jindo.Transition().fps(30);
this._oSliderVertical.attach({beforeChange:function(oCustomEvent){var nTrackHeight=jindo.$Element(this.getTrack()).height(),nThumbHeight=jindo.$Element(this.getThumb(oCustomEvent.nIndex)).height(),nAvailHeight=nTrackHeight-nThumbHeight;
oCustomEvent.nPos=Math.min(oCustomEvent.nPos,nAvailHeight);
oCustomEvent.nPos=Math.max(oCustomEvent.nPos,0);
if(oCustomEvent.bJump){oCustomEvent.stop();
this._oTransition.abort().start(200,this.getThumb(oCustomEvent.nIndex),{"@top":jindo.Effect.easeOut(oCustomEvent.nPos+"px")}).attach({playing:function(oCustomEvent2){self.setScrollTop(self._oSliderVertical.values(0))
}})
}else{self.setScrollTop(this._getValue(0,oCustomEvent.nPos))
}}})
}},_initRolloverArea:function(){var self=this,sClassPrefix=this.option("sClassPrefix"),sClassNameForRollover=this.option("sClassNameForRollover");
this._oRolloverArea=new jindo.RolloverArea(this._el,{sClassName:sClassNameForRollover,sClassPrefix:sClassPrefix}).attach({over:function(oCustomEvent){oCustomEvent.stop();
self._onRollover("over",oCustomEvent.element)
},down:function(oCustomEvent){oCustomEvent.stop();
self._onMouseDown(oCustomEvent.element);
self._onRollover("down",oCustomEvent.element)
},up:function(oCustomEvent){oCustomEvent.stop();
self._onMouseUp(oCustomEvent.element);
self._onRollover("up",oCustomEvent.element)
},out:function(oCustomEvent){oCustomEvent.stop();
self._onRollover("out",oCustomEvent.element)
}})
},reset:function(){var oSliderH=this.getSliderHorizontal(),oSliderV=this.getSliderVertical();
if(oSliderH){this._nScrollWidth=jindo.$Element(this._elContent).width()-jindo.$Element(this._elBox).width();
oSliderH.option("nMaxValue",this._nScrollWidth);
this.setScrollLeft(0)
}if(oSliderV){this._nScrollHeight=jindo.$Element(this._elContent).height()-jindo.$Element(this._elBox).height();
oSliderV.option("nMaxValue",this._nScrollHeight);
this.setScrollTop(0)
}this._elBox.scrollLeft=0;
this._elBox.scrollTop=0
},hasScrollBarHorizontal:function(){var sClassPrefix=this.option("sClassPrefix"),o=this.getScrollBarHorizontal();
if(o.elScrollBar){var welScrollBar=jindo.$Element(o.elScrollBar);
return welScrollBar.visible()||welScrollBar.hasClass(sClassPrefix+"show")
}return false
},hasScrollBarVertical:function(){var sClassPrefix=this.option("sClassPrefix"),o=this.getScrollBarVertical();
if(o.elScrollBar){var welScrollBar=jindo.$Element(o.elScrollBar);
return welScrollBar.visible()||welScrollBar.hasClass(sClassPrefix+"show")
}return false
},setScrollTop:function(n){n=Math.min(n,this._nScrollHeight);
n=Math.max(n,0);
n=Math.round(n);
var htParam={sDirection:"top",nPosition:n};
jindo.$Element(this._elContent).css("top",(htParam.nPosition*-1)+"px");
var oSliderV=this.getSliderVertical();
if(oSliderV){oSliderV.values(0,htParam.nPosition,false)
}this._fireScrollEvent(htParam)
},setScrollLeft:function(n){n=Math.min(n,this._nScrollWidth);
n=Math.max(n,0);
n=Math.round(n);
var htParam={sDirection:"left",nPosition:n};
jindo.$Element(this._elContent).css("left",(htParam.nPosition*-1)+"px");
var oSliderH=this.getSliderHorizontal();
if(oSliderH){oSliderH.values(0,htParam.nPosition,false)
}this._fireScrollEvent(htParam)
},setScrollTopBy:function(n){this.setScrollTop(this.getScrollTop()+n)
},setScrollLeftBy:function(n){this.setScrollLeft(this.getScrollLeft()+n)
},getScrollTop:function(n){return parseInt(jindo.$Element(this._elContent).css("top"),10)*-1
},getScrollLeft:function(n){return parseInt(jindo.$Element(this._elContent).css("left"),10)*-1
},_getElementType:function(wel){var sClassPrefix=this.option("sClassPrefix");
if(wel.hasClass(sClassPrefix+"track")){return"track"
}else{if(wel.hasClass(sClassPrefix+"thumb")){return"thumb"
}else{if(wel.hasClass(sClassPrefix+"button-up")){return"button-up"
}else{if(wel.hasClass(sClassPrefix+"button-up")){return"button-up"
}else{if(wel.hasClass(sClassPrefix+"button-down")){return"button-down"
}else{if(wel.hasClass(sClassPrefix+"button-left")){return"button-left"
}else{if(wel.hasClass(sClassPrefix+"button-right")){return"button-right"
}else{return false
}}}}}}}},_fireScrollEvent:function(htParam){this.fireEvent("scroll",htParam)
},_onWheel:function(we){if(!this._bMouseEnter){return
}we.stop(jindo.$Event.CANCEL_DEFAULT);
var nDelta=we.mouse().delta,nDirection=nDelta/Math.abs(nDelta)*-1,n=Math.ceil(Math.abs(nDelta))*nDirection*this.option("nDelta"),bH=this.hasScrollBarHorizontal(),bV=this.hasScrollBarVertical();
if(!bH&&!bV){return
}if(this.hasScrollBarVertical()&&this._bIsEventAttachedForVertical){this.setScrollTop(this.getScrollTop()+n);
return
}this.setScrollLeft(this.getScrollLeft()+n)
},_onMouseDown:function(el){var wel=jindo.$Element(el),self=this,setScrollBy,sElementType=this._getElementType(wel);
switch(sElementType){case"button-up":setScrollBy=function(n){self.setScrollTopBy(~~(n*-1))
};
break;
case"button-down":setScrollBy=function(n){self.setScrollTopBy(n)
};
break;
case"button-left":setScrollBy=function(n){self.setScrollLeftBy(~~(n*-1))
};
break;
case"button-right":setScrollBy=function(n){self.setScrollLeftBy(n)
};
break;
default:return
}this._oTimer.start(function(){setScrollBy(16);
return true
},100)
},_onMouseUp:function(el){this._oTimer.abort()
},_onMouseEnter:function(we){this._bMouseEnter=true
},_onMouseLeave:function(we){this._bMouseEnter=false
},_onRollover:function(sType,el){var wel=jindo.$Element(el),sClassPrefix=this.option("sClassPrefix"),sElementType=this._getElementType(wel);
switch(sType){case"over":wel.addClass(sClassPrefix+sElementType+"-over");
break;
case"down":wel.addClass(sClassPrefix+sElementType+"-hold");
break;
case"up":wel.removeClass(sClassPrefix+sElementType+"-hold");
break;
case"out":wel.removeClass(sClassPrefix+sElementType+"-over");
break
}},_initialize4Tablet:function(){this._fpOnTouchDragStart=jindo.$Fn(function(oEvent){this._oPos4Tablet=oEvent.pos()
},this);
this._fpOnTouchDragMove=jindo.$Fn(function(oEvent){if(!this._oPos4Tablet){return
}var oOldPos=this._oPos4Tablet;
var oNewPos=oEvent.pos();
this.setScrollLeftBy(oOldPos.pageX-oNewPos.pageX);
this.setScrollTopBy(oOldPos.pageY-oNewPos.pageY);
this._oPos4Tablet=oNewPos;
oEvent.stopDefault()
},this);
this._fpOnTouchDragEnd=jindo.$Fn(function(oEvent){this._oPos4Tablet=null
},this)
},_activate4Tablet:function(){var elEl=this._elContent;
jindo.$Element.prototype.preventTapHighlight&&jindo.$Element(this._el).preventTapHighlight(true);
this._fpOnTouchDragStart.attach(elEl,"touchstart");
this._fpOnTouchDragMove.attach(elEl,"touchmove");
this._fpOnTouchDragEnd.attach(elEl,"touchend")
},_deactivate4Tablet:function(){var elEl=this._elContent;
jindo.$Element.prototype.preventTapHighlight&&jindo.$Element(this._el).preventTapHighlight(false);
this._fpOnTouchDragStart.detach(elEl,"touchstart");
this._fpOnTouchDragMove.detach(elEl,"touchmove");
this._fpOnTouchDragEnd.detach(elEl,"touchend")
}}).extend(jindo.UIComponent);
jindo.Effect=function(fEffect){if(this instanceof arguments.callee){throw new Error("You can't create a instance of this")
}var rxNumber=/^(\-?[0-9\.]+)(%|px|pt|em)?$/,rxRGB=/^rgb\(([0-9]+)\s?,\s?([0-9]+)\s?,\s?([0-9]+)\)$/i,rxHex=/^#([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})$/i,rx3to6=/^#([0-9A-F])([0-9A-F])([0-9A-F])$/i;
var getUnitAndValue=function(v){var nValue=v,sUnit;
if(rxNumber.test(v)){nValue=parseFloat(v);
sUnit=RegExp.$2||""
}else{if(rxRGB.test(v)){nValue=[parseInt(RegExp.$1,10),parseInt(RegExp.$2,10),parseInt(RegExp.$3,10)];
sUnit="color"
}else{if(rxHex.test(v=v.replace(rx3to6,"#$1$1$2$2$3$3"))){nValue=[parseInt(RegExp.$1,16),parseInt(RegExp.$2,16),parseInt(RegExp.$3,16)];
sUnit="color"
}}}return{nValue:nValue,sUnit:sUnit}
};
return function(nStart,nEnd){var sUnit;
if(arguments.length>1){nStart=getUnitAndValue(nStart);
nEnd=getUnitAndValue(nEnd);
sUnit=nEnd.sUnit
}else{nEnd=getUnitAndValue(nStart);
nStart=null;
sUnit=nEnd.sUnit
}if(nStart&&nEnd&&nStart.sUnit!=nEnd.sUnit){throw new Error("unit error")
}nStart=nStart&&nStart.nValue;
nEnd=nEnd&&nEnd.nValue;
var fReturn=function(p){var nValue=fEffect(p),getResult=function(s,d){return(d-s)*nValue+s+sUnit
};
if(sUnit=="color"){var r=Math.max(0,Math.min(255,parseInt(getResult(nStart[0],nEnd[0]),10)))<<16;
r|=Math.max(0,Math.min(255,parseInt(getResult(nStart[1],nEnd[1]),10)))<<8;
r|=Math.max(0,Math.min(255,parseInt(getResult(nStart[2],nEnd[2]),10)));
r=r.toString(16).toUpperCase();
for(var i=0;
6-r.length;
i++){r="0"+r
}return"#"+r
}return getResult(nStart,nEnd)
};
if(nStart===null){fReturn.setStart=function(s){s=getUnitAndValue(s);
if(s.sUnit!=sUnit){throw new Error("unit eror")
}nStart=s.nValue
}
}return fReturn
}
};
jindo.Effect.linear=jindo.Effect(function(s){return s
});
jindo.Effect.easeInSine=jindo.Effect(function(s){return(s==1)?1:-Math.cos(s*(Math.PI/2))+1
});
jindo.Effect.easeOutSine=jindo.Effect(function(s){return Math.sin(s*(Math.PI/2))
});
jindo.Effect.easeInOutSine=jindo.Effect(function(s){return(s<0.5)?jindo.Effect.easeInSine(0,1)(2*s)*0.5:jindo.Effect.easeOutSine(0,1)((2*s)-1)*0.5+0.5
});
jindo.Effect.easeOutInSine=jindo.Effect(function(s){return(s<0.5)?jindo.Effect.easeOutSine(0,1)(2*s)*0.5:jindo.Effect.easeInSine(0,1)((2*s)-1)*0.5+0.5
});
jindo.Effect.easeInQuad=jindo.Effect(function(s){return s*s
});
jindo.Effect.easeOutQuad=jindo.Effect(function(s){return -(s*(s-2))
});
jindo.Effect.easeInOutQuad=jindo.Effect(function(s){return(s<0.5)?jindo.Effect.easeInQuad(0,1)(2*s)*0.5:jindo.Effect.easeOutQuad(0,1)((2*s)-1)*0.5+0.5
});
jindo.Effect.easeOutInQuad=jindo.Effect(function(s){return(s<0.5)?jindo.Effect.easeOutQuad(0,1)(2*s)*0.5:jindo.Effect.easeInQuad(0,1)((2*s)-1)*0.5+0.5
});
jindo.Effect.easeInCubic=jindo.Effect(function(s){return Math.pow(s,3)
});
jindo.Effect.easeOutCubic=jindo.Effect(function(s){return Math.pow((s-1),3)+1
});
jindo.Effect.easeInOutCubic=jindo.Effect(function(s){return(s<0.5)?jindo.Effect.easeIn(0,1)(2*s)*0.5:jindo.Effect.easeOut(0,1)((2*s)-1)*0.5+0.5
});
jindo.Effect.easeOutInCubic=jindo.Effect(function(s){return(s<0.5)?jindo.Effect.easeOut(0,1)(2*s)*0.5:jindo.Effect.easeIn(0,1)((2*s)-1)*0.5+0.5
});
jindo.Effect.easeInQuart=jindo.Effect(function(s){return Math.pow(s,4)
});
jindo.Effect.easeOutQuart=jindo.Effect(function(s){return -(Math.pow(s-1,4)-1)
});
jindo.Effect.easeInOutQuart=jindo.Effect(function(s){return(s<0.5)?jindo.Effect.easeInQuart(0,1)(2*s)*0.5:jindo.Effect.easeOutQuart(0,1)((2*s)-1)*0.5+0.5
});
jindo.Effect.easeOutInQuart=jindo.Effect(function(s){return(s<0.5)?jindo.Effect.easeOutQuart(0,1)(2*s)*0.5:jindo.Effect.easeInQuart(0,1)((2*s)-1)*0.5+0.5
});
jindo.Effect.easeInQuint=jindo.Effect(function(s){return Math.pow(s,5)
});
jindo.Effect.easeOutQuint=jindo.Effect(function(s){return Math.pow(s-1,5)+1
});
jindo.Effect.easeInOutQuint=jindo.Effect(function(s){return(s<0.5)?jindo.Effect.easeInQuint(0,1)(2*s)*0.5:jindo.Effect.easeOutQuint(0,1)((2*s)-1)*0.5+0.5
});
jindo.Effect.easeOutInQuint=jindo.Effect(function(s){return(s<0.5)?jindo.Effect.easeOutQuint(0,1)(2*s)*0.5:jindo.Effect.easeInQuint(0,1)((2*s)-1)*0.5+0.5
});
jindo.Effect.easeInCircle=jindo.Effect(function(s){return -(Math.sqrt(1-(s*s))-1)
});
jindo.Effect.easeOutCircle=jindo.Effect(function(s){return Math.sqrt(1-(s-1)*(s-1))
});
jindo.Effect.easeInOutCircle=jindo.Effect(function(s){return(s<0.5)?jindo.Effect.easeInCircle(0,1)(2*s)*0.5:jindo.Effect.easeOutCircle(0,1)((2*s)-1)*0.5+0.5
});
jindo.Effect.easeOutInCircle=jindo.Effect(function(s){return(s<0.5)?jindo.Effect.easeOutCircle(0,1)(2*s)*0.5:jindo.Effect.easeInCircle(0,1)((2*s)-1)*0.5+0.5
});
jindo.Effect.easeInBack=jindo.Effect(function(s){var n=1.70158;
return(s==1)?1:(s/1)*(s/1)*((1+n)*s-n)
});
jindo.Effect.easeOutBack=jindo.Effect(function(s){var n=1.70158;
return(s===0)?0:(s=s/1-1)*s*((n+1)*s+n)+1
});
jindo.Effect.easeInOutBack=jindo.Effect(function(s){return(s<0.5)?jindo.Effect.easeInBack(0,1)(2*s)*0.5:jindo.Effect.easeOutBack(0,1)((2*s)-1)*0.5+0.5
});
jindo.Effect.easeInElastic=jindo.Effect(function(s){var p=0,a=0,n;
if(s===0){return 0
}if((s/=1)==1){return 1
}if(!p){p=0.3
}if(!a||a<1){a=1;
n=p/4
}else{n=p/(2*Math.PI)*Math.asin(1/a)
}return -(a*Math.pow(2,10*(s-=1))*Math.sin((s-1)*(2*Math.PI)/p))
});
jindo.Effect.easeOutElastic=jindo.Effect(function(s){var p=0,a=0,n;
if(s===0){return 0
}if((s/=1)==1){return 1
}if(!p){p=0.3
}if(!a||a<1){a=1;
n=p/4
}else{n=p/(2*Math.PI)*Math.asin(1/a)
}return(a*Math.pow(2,-10*s)*Math.sin((s-n)*(2*Math.PI)/p)+1)
});
jindo.Effect.easeInOutElastic=jindo.Effect(function(s){var p=0,a=0,n;
if(s===0){return 0
}if((s/=1/2)==2){return 1
}if(!p){p=(0.3*1.5)
}if(!a||a<1){a=1;
n=p/4
}else{n=p/(2*Math.PI)*Math.asin(1/a)
}if(s<1){return -0.5*(a*Math.pow(2,10*(s-=1))*Math.sin((s-n)*(2*Math.PI)/p))
}return a*Math.pow(2,-10*(s-=1))*Math.sin((s-n)*(2*Math.PI)/p)*0.5+1
});
jindo.Effect.easeOutBounce=jindo.Effect(function(s){if(s<(1/2.75)){return(7.5625*s*s)
}else{if(s<(2/2.75)){return(7.5625*(s-=(1.5/2.75))*s+0.75)
}else{if(s<(2.5/2.75)){return(7.5625*(s-=(2.25/2.75))*s+0.9375)
}else{return(7.5625*(s-=(2.625/2.75))*s+0.984375)
}}}});
jindo.Effect.easeInBounce=jindo.Effect(function(s){return 1-jindo.Effect.easeOutBounce(0,1)(1-s)
});
jindo.Effect.easeInOutBounce=jindo.Effect(function(s){return(s<0.5)?jindo.Effect.easeInBounce(0,1)(2*s)*0.5:jindo.Effect.easeOutBounce(0,1)((2*s)-1)*0.5+0.5
});
jindo.Effect.easeInExpo=jindo.Effect(function(s){return(s===0)?0:Math.pow(2,10*(s-1))
});
jindo.Effect.easeOutExpo=jindo.Effect(function(s){return(s==1)?1:-Math.pow(2,-10*s/1)+1
});
jindo.Effect.easeInOutExpo=jindo.Effect(function(s){return(s<0.5)?jindo.Effect.easeInExpo(0,1)(2*s)*0.5:jindo.Effect.easeOutExpo(0,1)((2*s)-1)*0.5+0.5
});
jindo.Effect.easeOutInExpo=jindo.Effect(function(s){return(s<0.5)?jindo.Effect.easeOutExpo(0,1)(2*s)*0.5:jindo.Effect.easeInExpo(0,1)((2*s)-1)*0.5+0.5
});
jindo.Effect._cubicBezier=function(x1,y1,x2,y2){return function(t){var cx=3*x1,bx=3*(x2-x1)-cx,ax=1-cx-bx,cy=3*y1,by=3*(y2-y1)-cy,ay=1-cy-by;
function sampleCurveX(t){return((ax*t+bx)*t+cx)*t
}function sampleCurveY(t){return((ay*t+by)*t+cy)*t
}function sampleCurveDerivativeX(t){return(3*ax*t+2*bx)*t+cx
}function solveCurveX(x,epsilon){var t0,t1,t2,x2,d2,i;
for(t2=x,i=0;
i<8;
i++){x2=sampleCurveX(t2)-x;
if(Math.abs(x2)<epsilon){return t2
}d2=sampleCurveDerivativeX(t2);
if(Math.abs(d2)<0.000001){break
}t2=t2-x2/d2
}t0=0;
t1=1;
t2=x;
if(t2<t0){return t0
}if(t2>t1){return t1
}while(t0<t1){x2=sampleCurveX(t2);
if(Math.abs(x2-x)<epsilon){return t2
}if(x>x2){t0=t2
}else{t1=t2
}t2=(t1-t0)*0.5+t0
}return t2
}return sampleCurveY(solveCurveX(t,1/200))
}
};
jindo.Effect.cubicBezier=function(x1,y1,x2,y2){return jindo.Effect(jindo.Effect._cubicBezier(x1,y1,x2,y2))
};
jindo.Effect.cubicEase=jindo.Effect.cubicBezier(0.25,0.1,0.25,1);
jindo.Effect.cubicEaseIn=jindo.Effect.cubicBezier(0.42,0,1,1);
jindo.Effect.cubicEaseOut=jindo.Effect.cubicBezier(0,0,0.58,1);
jindo.Effect.cubicEaseInOut=jindo.Effect.cubicBezier(0.42,0,0.58,1);
jindo.Effect.cubicEaseOutIn=jindo.Effect.cubicBezier(0,0.42,1,0.58);
jindo.Effect.overphase=jindo.Effect(function(s){s/=0.652785;
return(Math.sqrt((2-s)*s)+(0.1*s)).toFixed(5)
});
jindo.Effect.sinusoidal=jindo.Effect(function(s){return(-Math.cos(s*Math.PI)/2)+0.5
});
jindo.Effect.mirror=jindo.Effect(function(s){return(s<0.5)?jindo.Effect.sinusoidal(0,1)(s*2):jindo.Effect.sinusoidal(0,1)(1-(s-0.5)*2)
});
jindo.Effect.pulse=function(nPulse){return jindo.Effect(function(s){return(-Math.cos((s*(nPulse-0.5)*2)*Math.PI)/2)+0.5
})
};
jindo.Effect.wave=function(nPeriod,nHeight){return jindo.Effect(function(s){return(nHeight||1)*(Math.sin(nPeriod*(s*360)*Math.PI/180)).toFixed(5)
})
};
jindo.Effect.easeIn=jindo.Effect.easeInCubic;
jindo.Effect.easeOut=jindo.Effect.easeOutCubic;
jindo.Effect.easeInOut=jindo.Effect.easeInOutCubic;
jindo.Effect.easeOutIn=jindo.Effect.easeOutInCubic;
jindo.Effect.bounce=jindo.Effect.easeOutBounce;
jindo.Effect.elastic=jindo.Effect.easeInElastic;
jindo.Timer=jindo.$Class({$init:function(){this._nTimer=null;
this._nLatest=null;
this._nRemained=0;
this._nDelay=null;
this._fRun=null;
this._bIsRunning=false
},start:function(fRun,nDelay){this.abort();
this._nRemained=0;
this._nDelay=nDelay;
this._fRun=fRun;
this._bIsRunning=true;
this._nLatest=this._getTime();
this.fireEvent("wait");
this._excute(this._nDelay,false);
return true
},isRunning:function(){return this._bIsRunning
},_getTime:function(){return new Date().getTime()
},_clearTimer:function(){var bFlag=false;
if(this._nTimer){clearInterval(this._nTimer);
this._bIsRunning=false;
bFlag=true
}this._nTimer=null;
return bFlag
},abort:function(){var bReturn=this._clearTimer();
if(bReturn){this.fireEvent("abort");
this._fRun=null
}return bReturn
},pause:function(){var nPassed=this._getTime()-this._nLatest;
this._nRemained=Math.max(this._nDelay-nPassed,0);
return this._clearTimer()
},_excute:function(nDelay,bResetDelay){var self=this;
this._clearTimer();
this._bIsRunning=true;
this._nTimer=setInterval(function(){if(self._nTimer){self.fireEvent("run");
var r=self._fRun();
self._nLatest=self._getTime();
if(!r){clearInterval(self._nTimer);
self._nTimer=null;
self._bIsRunning=false;
self.fireEvent("end");
return
}self.fireEvent("wait");
if(bResetDelay){self._excute(self._nDelay,false)
}}},nDelay)
},resume:function(){if(!this._fRun||this.isRunning()){return false
}this._bIsRunning=true;
this.fireEvent("wait");
this._excute(this._nRemained,true);
this._nRemained=0;
return true
}}).extend(jindo.Component);
jindo.Transition=jindo.$Class({_nFPS:30,_aTaskQueue:null,_oTimer:null,_bIsWaiting:true,_bIsPlaying:false,$init:function(htOption){this._aTaskQueue=[];
this._oTimer=new jindo.Timer();
this._oSleepTimer=new jindo.Timer();
this.option({fEffect:jindo.Effect.linear,bCorrection:false});
this.option(htOption||{})
},fps:function(nFPS){if(arguments.length>0){this._nFPS=nFPS;
return this
}return this._nFPS
},isPlaying:function(){return this._bIsPlaying
},abort:function(){this._aTaskQueue=[];
this._oTimer.abort();
this._oSleepTimer.abort();
if(this._bIsPlaying){this.fireEvent("abort")
}this._bIsWaiting=true;
this._bIsPlaying=false;
this._htTaskToDo=null;
return this
},start:function(nDuration,elTarget,htInfo){if(arguments.length>0){this.queue.apply(this,arguments)
}this._prepareNextTask();
return this
},queue:function(nDuration,aCommand){var htTask;
if(typeof arguments[0]=="function"){htTask={sType:"function",fTask:arguments[0]}
}else{var a=[];
if(arguments[1] instanceof Array){a=arguments[1]
}else{var aInner=[];
jindo.$A(arguments).forEach(function(v,i){if(i>0){aInner.push(v);
if(i%2===0){a.push(aInner.concat());
aInner=[]
}}})
}htTask={sType:"task",nDuration:nDuration,aList:[]};
for(var i=0,nLen=a.length;
i<nLen;
i++){var aValue=[],htArg=a[i][1],sEnd;
for(var sKey in htArg){sEnd=htArg[sKey];
if(/^(@|style\.)(\w+)/i.test(sKey)){aValue.push(["style",RegExp.$2,sEnd])
}else{aValue.push(["attr",sKey,sEnd])
}}htTask.aList.push({elTarget:a[i][0],aValue:aValue})
}}this._queueTask(htTask);
return this
},pause:function(){if(this._oTimer.abort()){this.fireEvent("pause")
}return this
},resume:function(){if(this._htTaskToDo){if(this._bIsWaiting===false&&this._bIsPlaying===true){this.fireEvent("resume")
}this._doTask();
this._bIsWaiting=false;
this._bIsPlaying=true;
var self=this;
this._oTimer.start(function(){var bEnd=!self._doTask();
if(bEnd){self._bIsWaiting=true;
setTimeout(function(){self._prepareNextTask()
},0)
}return !bEnd
},this._htTaskToDo.nInterval)
}return this
},precede:function(nDuration,elTarget,htInfo){this.start.apply(this,arguments);
return this
},sleep:function(nDuration,fCallback){if(typeof fCallback=="undefined"){fCallback=function(){}
}this._queueTask({sType:"sleep",nDuration:nDuration,fCallback:fCallback});
this._prepareNextTask();
return this
},_queueTask:function(v){this._aTaskQueue.push(v)
},_dequeueTask:function(){var htTask=this._aTaskQueue.shift();
if(htTask){if(htTask.sType=="task"){var aList=htTask.aList;
for(var i=0,nLength=aList.length;
i<nLength;
i++){var elTarget=aList[i].elTarget,welTarget=null;
for(var j=0,aValue=aList[i].aValue,nJLen=aValue.length;
j<nJLen;
j++){var sType=aValue[j][0],sKey=aValue[j][1],fFunc=aValue[j][2];
if(typeof fFunc!="function"){var fEffect=this.option("fEffect");
if(fFunc instanceof Array){fFunc=fEffect(fFunc[0],fFunc[1])
}else{fFunc=fEffect(fFunc)
}aValue[j][2]=fFunc
}if(fFunc.setStart){if(this._isHTMLElement(elTarget)){welTarget=welTarget||jindo.$Element(elTarget);
switch(sType){case"style":fFunc.setStart(welTarget.css(sKey));
break;
case"attr":fFunc.setStart(welTarget.$value()[sKey]);
break
}}else{fFunc.setStart(elTarget.getter(sKey))
}}}}}return htTask
}else{return null
}},_prepareNextTask:function(){if(this._bIsWaiting){var htTask=this._dequeueTask();
if(htTask){switch(htTask.sType){case"task":if(!this._bIsPlaying){this.fireEvent("start")
}var nInterval=1000/this._nFPS,nGap=nInterval/htTask.nDuration;
this._htTaskToDo={aList:htTask.aList,nRatio:0,nInterval:nInterval,nGap:nGap,nStep:0,nTotalStep:Math.ceil(htTask.nDuration/nInterval)};
this.resume();
break;
case"function":if(!this._bIsPlaying){this.fireEvent("start")
}htTask.fTask();
this._prepareNextTask();
break;
case"sleep":if(this._bIsPlaying){this.fireEvent("sleep",{nDuration:htTask.nDuration});
htTask.fCallback()
}var self=this;
this._oSleepTimer.start(function(){self.fireEvent("awake");
self._prepareNextTask()
},htTask.nDuration);
break
}}else{if(this._bIsPlaying){this._bIsPlaying=false;
this.abort();
this.fireEvent("end")
}}}},_isHTMLElement:function(el){return("tagName" in el)
},_doTask:function(){var htTaskToDo=this._htTaskToDo,nRatio=parseFloat(htTaskToDo.nRatio.toFixed(5),1),nStep=htTaskToDo.nStep,nTotalStep=htTaskToDo.nTotalStep,aList=htTaskToDo.aList,htCorrection={},bCorrection=this.option("bCorrection");
for(var i=0,nLength=aList.length;
i<nLength;
i++){var elTarget=aList[i].elTarget,welTarget=null;
for(var j=0,aValue=aList[i].aValue,nJLen=aValue.length;
j<nJLen;
j++){var sType=aValue[j][0],sKey=aValue[j][1],sValue=aValue[j][2](nRatio);
if(this._isHTMLElement(elTarget)){if(bCorrection){var sUnit=/^\-?[0-9\.]+(%|px|pt|em)?$/.test(sValue)&&RegExp.$1||"";
if(sUnit){var nValue=parseFloat(sValue);
nValue+=htCorrection[sKey]||0;
nValue=parseFloat(nValue.toFixed(5));
if(i==nLength-1){sValue=Math.round(nValue)+sUnit
}else{htCorrection[sKey]=nValue-Math.floor(nValue);
sValue=parseInt(nValue,10)+sUnit
}}}welTarget=welTarget||jindo.$Element(elTarget);
switch(sType){case"style":welTarget.css(sKey,sValue);
break;
case"attr":welTarget.$value()[sKey]=sValue;
break
}}else{elTarget.setter(sKey,sValue)
}if(this._bIsPlaying){this.fireEvent("playing",{element:elTarget,sKey:sKey,sValue:sValue,nStep:nStep,nTotalStep:nTotalStep})
}}}htTaskToDo.nRatio=Math.min(htTaskToDo.nRatio+htTaskToDo.nGap,1);
htTaskToDo.nStep+=1;
return nRatio!=1
}}).extend(jindo.Component);
(function(){var b=jindo.$Element.prototype.css;
jindo.$Element.prototype.css=function(k,v){if(k=="opacity"){return typeof v!="undefined"?this.opacity(parseFloat(v)):this.opacity()
}else{return typeof v!="undefined"?b.call(this,k,v):b.call(this,k)
}}
})();
jindo.Slider=jindo.$Class({_elTrack:null,_aThumbs:null,_aPoses:null,_htSwap:null,$init:function(el,oOptions){this.option({sClassPrefix:"slider-",bVertical:false,bJump:true,bDragOnTrack:true,fAdjustValue:null,nMinValue:0,nMaxValue:1,bActivateOnload:true});
this.option(oOptions||{});
if(!this.option("bVertical")){this._htSwap={y:"nY",x:"nX",clientX:"clientX",pageX:"pageX",offsetWidth:"offsetWidth",left:"left"}
}else{this._htSwap={y:"nX",x:"nY",clientX:"clientY",pageX:"pageY",offsetWidth:"offsetHeight",left:"top"}
}this._elTrack=jindo.$(el);
this._aThumbs=jindo.$$("."+this.option("sClassPrefix")+"thumb",this._elTrack);
this._sRand="S"+parseInt(Math.random()*100000000,10);
jindo.$ElementList(this._aThumbs).addClass(this._sRand);
this._aPoses=this.positions();
this._onTrackMouseDownFn=jindo.$Fn(this._onTrackMouseDown,this);
this._initDragArea();
if(this.option("bActivateOnload")){this.activate()
}},getTrack:function(){return this._elTrack
},getThumb:function(nIndex){return this._aThumbs[nIndex]
},_initDragArea:function(){var self=this;
var htSwap=this._htSwap;
this._oDragArea=new jindo.DragArea(this._elTrack,{sClassName:this._sRand,bFlowOut:false}).attach({beforeDrag:function(oCustomEvent){var nIndex=self._getThumbIndex(oCustomEvent.elHandle);
var htParam={nIndex:nIndex,nPos:oCustomEvent[htSwap.x],bJump:false};
if(!self.fireEvent("beforeChange",htParam)){oCustomEvent.stop();
return false
}oCustomEvent[htSwap.x]=self._getAdjustedPos(nIndex,htParam.nPos);
oCustomEvent[htSwap.y]=null
},drag:function(oCustomEvent){var nIndex=self._getThumbIndex(oCustomEvent.elHandle);
var nPos=oCustomEvent[htSwap.x];
if(nPos!=self._aPoses[nIndex]){self._aPoses[nIndex]=nPos;
self._fireChangeEvent(nIndex)
}}})
},getDragArea:function(){return this._oDragArea
},_fireChangeEvent:function(nIndex){var nPos=this._getPosition(nIndex);
this.fireEvent("change",{nIndex:nIndex,nPos:nPos,nValue:this._getValue(nIndex,nPos)})
},_onActivate:function(){this.getDragArea().activate();
jindo.$Element.prototype.preventTapHighlight&&jindo.$Element(this._elTrack).preventTapHighlight(true);
this._onTrackMouseDownFn.attach(this._elTrack,"mousedown")
},_onDeactivate:function(){this.getDragArea().deactivate();
jindo.$Element.prototype.preventTapHighlight&&jindo.$Element(this._elTrack).preventTapHighlight(false);
this._onTrackMouseDownFn.detach(this._elTrack,"mousedown")
},_onTrackMouseDown:function(we){if(!this.option("bJump")){return
}we.stop(jindo.$Event.CANCEL_DEFAULT);
var nIndex=0;
var htSwap=this._htSwap;
var el=we.element;
var sClass="."+this.option("sClassPrefix")+"thumb";
var bThumb=jindo.$$.test(el,sClass)||jindo.$$.getSingle("! "+sClass,el);
if(bThumb){return
}var nPos=we.pos()[htSwap.pageX];
nPos-=jindo.$Element(this._elTrack).offset()[htSwap.left];
var nMaxDistance=9999999;
for(var i=0,oThumb;
(oThumb=this._aThumbs[i]);
i++){var nThumbPos=parseInt(jindo.$Element(oThumb).css(htSwap.left),10)||0;
nThumbPos+=parseInt(oThumb[htSwap.offsetWidth]/2,10);
var nDistance=Math.abs(nPos-nThumbPos);
if(nDistance<nMaxDistance){nMaxDistance=nDistance;
nIndex=i
}}nPos-=parseInt(this._aThumbs[nIndex][htSwap.offsetWidth]/2,10);
this.positions(nIndex,nPos);
if(this.option("bDragOnTrack")){this.getDragArea().startDragging(this._aThumbs[nIndex])
}},_getTrackInfo:function(nIndex){var htSwap=this._htSwap;
var oThumb=this._aThumbs[nIndex];
var nThumbSize=oThumb[htSwap.offsetWidth];
var nTrackSize=this._elTrack[htSwap.offsetWidth];
var nMaxPos=nTrackSize-nThumbSize;
var nMax=this.option("nMaxValue");
var nMin=this.option("nMinValue");
return{maxPos:nMaxPos,max:nMax,min:nMin}
},_getValue:function(nIndex,nPos){if(typeof nPos=="undefined"){nPos=this._getPosition(nIndex)
}var oInfo=this._getTrackInfo(nIndex);
var nValue=Math.min(Math.max(nPos*(oInfo.max-oInfo.min)/oInfo.maxPos+oInfo.min,oInfo.min),oInfo.max);
var fAdjust=this.option("fAdjustValue");
if(fAdjust){nValue=fAdjust.call(this,nValue)
}return nValue
},_getAdjustedPos:function(nIndex,nPos){var nAdjustedPos=nPos;
var oInfo=this._getTrackInfo(nIndex);
var fAdjust=this.option("fAdjustValue");
if(fAdjust){var nValue=Math.min(Math.max(nAdjustedPos*(oInfo.max-oInfo.min)/oInfo.maxPos+oInfo.min,oInfo.min),oInfo.max);
var nAfterValue=fAdjust.call(this,nValue);
if(nValue!=nAfterValue){nAdjustedPos=oInfo.maxPos*(nAfterValue-oInfo.min)/(oInfo.max-oInfo.min)
}}nAdjustedPos=Math.max(nAdjustedPos,0);
nAdjustedPos=Math.min(nAdjustedPos,oInfo.maxPos);
return nAdjustedPos
},_getThumbIndex:function(oThumb){for(var i=0,len=this._aThumbs.length;
i<len;
i++){if(this._aThumbs[i]==oThumb){return i
}}return -1
},_getPosition:function(nIndex){var sPos=jindo.$Element(this._aThumbs[nIndex]).css(this._htSwap.left);
return(sPos=="auto")?0:parseInt(sPos,10)
},_setPosition:function(nIndex,nPos){this._aPoses[nIndex]=nPos;
jindo.$Element(this._aThumbs[nIndex]).css(this._htSwap.left,nPos+"px")
},positions:function(nIndex,nPos,bFireEvent){if(typeof bFireEvent=="undefined"){bFireEvent=true
}switch(arguments.length){case 0:var aPoses=[];
jindo.$A(this._aThumbs).forEach(function(el,i){aPoses[i]=this._getPosition(i)
},this);
return aPoses;
case 1:return this._getPosition(nIndex);
default:if(bFireEvent){var htParam={nIndex:nIndex,nPos:nPos,bJump:true};
if(this.fireEvent("beforeChange",htParam)){var nAfterPos=this._getAdjustedPos(nIndex,htParam.nPos);
var bChanged=(nAfterPos!=this._aPoses[nIndex]);
this._setPosition(nIndex,nAfterPos);
if(bChanged){this._fireChangeEvent(nIndex)
}}return this
}this._setPosition(nIndex,this._getAdjustedPos(nIndex,nPos));
return this
}},values:function(nIndex,nValue,bFireEvent){if(typeof bFireEvent=="undefined"){bFireEvent=true
}switch(arguments.length){case 0:var aValues=[];
for(var i=0,len=this._aThumbs.length;
i<len;
i++){aValues[i]=this._getValue(i)
}return aValues;
case 1:return this._getValue(nIndex,this.positions(nIndex));
default:var oInfo=this._getTrackInfo(nIndex);
this.positions(nIndex,((nValue-oInfo.min)*oInfo.maxPos/(oInfo.max-oInfo.min))||0,bFireEvent);
return this
}}}).extend(jindo.UIComponent);
jindo.RolloverArea=jindo.$Class({$init:function(el,htOption){this.option({sClassName:"rollover",sClassPrefix:"rollover-",bCheckMouseDown:true,bActivateOnload:true,htStatus:{sOver:"over",sDown:"down"}});
this.option(htOption||{});
this._elArea=jindo.$(el);
this._aOveredElements=[];
this._aDownedElements=[];
this._wfMouseOver=jindo.$Fn(this._onMouseOver,this);
this._wfMouseOut=jindo.$Fn(this._onMouseOut,this);
this._wfMouseDown=jindo.$Fn(this._onMouseDown,this);
this._wfMouseUp=jindo.$Fn(this._onMouseUp,this);
if(this.option("bActivateOnload")){this.activate()
}},_addOvered:function(el){this._aOveredElements.push(el)
},_removeOvered:function(el){this._aOveredElements.splice(jindo.$A(this._aOveredElements).indexOf(el),1)
},_addStatus:function(el,sStatus){jindo.$Element(el).addClass(this.option("sClassPrefix")+sStatus)
},_removeStatus:function(el,sStatus){jindo.$Element(el).removeClass(this.option("sClassPrefix")+sStatus)
},_isInnerElement:function(elParent,elChild){return elParent===elChild?true:jindo.$Element(elParent).isParentOf(elChild)
},_onActivate:function(){jindo.$Element.prototype.preventTapHighlight&&jindo.$Element(this._elArea).preventTapHighlight(true);
this._wfMouseOver.attach(this._elArea,"mouseover");
this._wfMouseOut.attach(this._elArea,"mouseout");
if(this.option("bCheckMouseDown")){this._wfMouseDown.attach(this._elArea,"mousedown");
this._wfMouseUp.attach(document,"mouseup")
}},_onDeactivate:function(){jindo.$Element.prototype.preventTapHighlight&&jindo.$Element(this._elArea).preventTapHighlight(false);
this._wfMouseOver.detach(this._elArea,"mouseover");
this._wfMouseOut.detach(this._elArea,"mouseout");
this._wfMouseDown.detach(this._elArea,"mousedown");
this._wfMouseUp.detach(document,"mouseup");
this._aOveredElements.length=0;
this._aDownedElements.length=0
},_findRollover:function(el){var sClassName=this.option("sClassName");
return jindo.$$.test(el,"."+sClassName)?el:jindo.$$.getSingle("! ."+sClassName,el)
},_onMouseOver:function(we){var el=we.element,elRelated=we.relatedElement,htParam;
for(;
(el=this._findRollover(el));
el=el.parentNode){if(elRelated&&this._isInnerElement(el,elRelated)){continue
}this._addOvered(el);
htParam={element:el,htStatus:this.option("htStatus"),weEvent:we};
if(this.fireEvent("over",htParam)){this._addStatus(htParam.element,htParam.htStatus.sOver)
}}},_onMouseOut:function(we){var el=we.element,elRelated=we.relatedElement,htParam;
for(;
(el=this._findRollover(el));
el=el.parentNode){if(elRelated&&this._isInnerElement(el,elRelated)){continue
}this._removeOvered(el);
htParam={element:el,htStatus:this.option("htStatus"),weEvent:we};
if(this.fireEvent("out",htParam)){this._removeStatus(htParam.element,htParam.htStatus.sOver)
}}},_onMouseDown:function(we){var el=we.element,htParam;
while((el=this._findRollover(el))){htParam={element:el,htStatus:this.option("htStatus"),weEvent:we};
this._aDownedElements.push(el);
if(this.fireEvent("down",htParam)){this._addStatus(htParam.element,htParam.htStatus.sDown)
}el=el.parentNode
}},_onMouseUp:function(we){var el=we.element,aTargetElementDatas=[],aDownedElements=this._aDownedElements,htParam,elMouseDown,i;
for(i=0;
(elMouseDown=aDownedElements[i]);
i++){aTargetElementDatas.push({element:elMouseDown,htStatus:this.option("htStatus"),weEvent:we})
}for(;
(el=this._findRollover(el));
el=el.parentNode){if(jindo.$A(aDownedElements).indexOf(el)>-1){continue
}aTargetElementDatas.push({element:el,htStatus:this.option("htStatus"),weEvent:we})
}for(i=0;
(htParam=aTargetElementDatas[i]);
i++){if(this.fireEvent("up",htParam)){this._removeStatus(htParam.element,htParam.htStatus.sDown)
}}this._aDownedElements=[]
}}).extend(jindo.UIComponent);
jindo.DragArea=jindo.$Class({$init:function(el,htOption){this.option({sClassName:"draggable",bFlowOut:true,bSetCapture:true,nThreshold:0});
this.option(htOption||{});
this._el=el;
this._bIE=jindo.$Agent().navigator().ie;
this._htDragInfo={bIsDragging:false,bPrepared:false,bHandleDown:false,bForceDrag:false};
this._wfOnMouseDown=jindo.$Fn(this._onMouseDown,this);
this._wfOnMouseMove=jindo.$Fn(this._onMouseMove,this);
this._wfOnMouseUp=jindo.$Fn(this._onMouseUp,this);
this._wfOnDragStart=jindo.$Fn(this._onDragStart,this);
this._wfOnSelectStart=jindo.$Fn(this._onSelectStart,this);
this.activate()
},_findDraggableElement:function(el){if(el.nodeType===1&&jindo.$$.test(el,"input[type=text], textarea, select")){return null
}var self=this;
var sClass="."+this.option("sClassName");
var isChildOfDragArea=function(el){if(el===null){return false
}if(self._el===document||self._el===el){return true
}return jindo.$Element(self._el).isParentOf(el)
};
var elReturn=jindo.$$.test(el,sClass)?el:jindo.$$.getSingle("! "+sClass,el);
if(!isChildOfDragArea(elReturn)){elReturn=null
}return elReturn
},isDragging:function(){var htDragInfo=this._htDragInfo;
return htDragInfo.bIsDragging&&!htDragInfo.bPrepared
},stopDragging:function(){this._stopDragging(true);
return this
},_stopDragging:function(bInterupted){this._wfOnMouseMove.detach(document,"mousemove");
this._wfOnMouseUp.detach(document,"mouseup");
if(this.isDragging()){var htDragInfo=this._htDragInfo,welDrag=jindo.$Element(htDragInfo.elDrag);
htDragInfo.bIsDragging=false;
htDragInfo.bForceDrag=false;
htDragInfo.bPrepared=false;
if(this._bIE&&this._elSetCapture){this._elSetCapture.releaseCapture();
this._elSetCapture=null
}this.fireEvent("dragEnd",{elArea:this._el,elHandle:htDragInfo.elHandle,elDrag:htDragInfo.elDrag,nX:parseInt(welDrag.css("left"),10)||0,nY:parseInt(welDrag.css("top"),10)||0,bInterupted:bInterupted})
}},_onActivate:function(){this._wfOnMouseDown.attach(this._el,"mousedown");
this._wfOnDragStart.attach(this._el,"dragstart");
this._wfOnSelectStart.attach(this._el,"selectstart")
},_onDeactivate:function(){this._wfOnMouseDown.detach(this._el,"mousedown");
this._wfOnDragStart.detach(this._el,"dragstart");
this._wfOnSelectStart.detach(this._el,"selectstart")
},attachEvent:function(){this.activate()
},detachEvent:function(){this.deactivate()
},isEventAttached:function(){return this.isActivating()
},startDragging:function(el){var elDrag=this._findDraggableElement(el);
if(elDrag){this._htDragInfo.bForceDrag=true;
this._htDragInfo.bPrepared=true;
this._htDragInfo.elHandle=elDrag;
this._htDragInfo.elDrag=elDrag;
this._wfOnMouseMove.attach(document,"mousemove");
this._wfOnMouseUp.attach(document,"mouseup");
return true
}return false
},_onMouseDown:function(we){var mouse=we.mouse(true);
if(!mouse.left||mouse.right||mouse.scrollbar){this._stopDragging(true);
return
}var el=this._findDraggableElement(we.element);
if(el){var oPos=we.pos(),htDragInfo=this._htDragInfo;
htDragInfo.bHandleDown=true;
htDragInfo.bPrepared=true;
htDragInfo.nButton=we._event.button;
htDragInfo.elHandle=el;
htDragInfo.elDrag=el;
htDragInfo.nPageX=oPos.pageX;
htDragInfo.nPageY=oPos.pageY;
if(this.fireEvent("handleDown",{elHandle:el,elDrag:el,weEvent:we})){this._wfOnMouseMove.attach(document,"mousemove")
}this._wfOnMouseUp.attach(document,"mouseup");
we.stop(jindo.$Event.CANCEL_DEFAULT)
}},_onMouseMove:function(we){var htDragInfo=this._htDragInfo,htParam,htRect,oPos=we.pos(),htGap={nX:oPos.pageX-htDragInfo.nPageX,nY:oPos.pageY-htDragInfo.nPageY};
if(htDragInfo.bPrepared){var nThreshold=this.option("nThreshold"),htDiff={};
if(!htDragInfo.bForceDrag&&nThreshold){htDiff.nPageX=oPos.pageX-htDragInfo.nPageX;
htDiff.nPageY=oPos.pageY-htDragInfo.nPageY;
var nDistance=Math.sqrt(htDiff.nPageX*htDiff.nPageX+htDiff.nPageY*htDiff.nPageY);
if(nThreshold>nDistance){return
}}if(this._bIE&&this.option("bSetCapture")){this._elSetCapture=(this._el===document)?document.body:this._findDraggableElement(we.element);
if(this._elSetCapture){this._elSetCapture.setCapture(false)
}}htParam={elArea:this._el,elHandle:htDragInfo.elHandle,elDrag:htDragInfo.elDrag,htDiff:htDiff,weEvent:we};
htDragInfo.bIsDragging=true;
htDragInfo.bPrepared=false;
if(this.fireEvent("dragStart",htParam)){var welDrag=jindo.$Element(htParam.elDrag),htOffset=welDrag.offset();
htDragInfo.elHandle=htParam.elHandle;
htDragInfo.elDrag=htParam.elDrag;
htDragInfo.nX=parseInt(welDrag.css("left"),10)||0;
htDragInfo.nY=parseInt(welDrag.css("top"),10)||0;
htDragInfo.nClientX=htOffset.left+welDrag.width()/2;
htDragInfo.nClientY=htOffset.top+welDrag.height()/2
}else{htDragInfo.bPrepared=true;
return
}}if(htDragInfo.bForceDrag){htGap.nX=oPos.clientX-htDragInfo.nClientX;
htGap.nY=oPos.clientY-htDragInfo.nClientY
}htParam={elArea:this._el,elFlowOut:htDragInfo.elDrag.parentNode,elHandle:htDragInfo.elHandle,elDrag:htDragInfo.elDrag,weEvent:we,nX:htDragInfo.nX+htGap.nX,nY:htDragInfo.nY+htGap.nY,nGapX:htGap.nX,nGapY:htGap.nY};
if(this.fireEvent("beforeDrag",htParam)){var elDrag=htDragInfo.elDrag;
if(this.option("bFlowOut")===false){var elParent=htParam.elFlowOut,aSize=[elDrag.offsetWidth,elDrag.offsetHeight],nScrollLeft=0,nScrollTop=0;
if(elParent==document.body){elParent=null
}if(elParent&&aSize[0]<=elParent.scrollWidth&&aSize[1]<=elParent.scrollHeight){htRect={nWidth:elParent.clientWidth,nHeight:elParent.clientHeight};
nScrollLeft=elParent.scrollLeft;
nScrollTop=elParent.scrollTop
}else{var htClientSize=jindo.$Document().clientSize();
htRect={nWidth:htClientSize.width,nHeight:htClientSize.height}
}if(htParam.nX!==null){htParam.nX=Math.max(htParam.nX,nScrollLeft);
htParam.nX=Math.min(htParam.nX,htRect.nWidth-aSize[0]+nScrollLeft)
}if(htParam.nY!==null){htParam.nY=Math.max(htParam.nY,nScrollTop);
htParam.nY=Math.min(htParam.nY,htRect.nHeight-aSize[1]+nScrollTop)
}}if(htParam.nX!==null){elDrag.style.left=htParam.nX+"px"
}if(htParam.nY!==null){elDrag.style.top=htParam.nY+"px"
}this.fireEvent("drag",htParam)
}else{htDragInfo.bIsDragging=false
}},_onMouseUp:function(we){this._stopDragging(false);
var htDragInfo=this._htDragInfo;
htDragInfo.bHandleDown=false;
this.fireEvent("handleUp",{weEvent:we,elHandle:htDragInfo.elHandle,elDrag:htDragInfo.elDrag})
},_onDragStart:function(we){if(this._findDraggableElement(we.element)){we.stop(jindo.$Event.CANCEL_DEFAULT)
}},_onSelectStart:function(we){if(this.isDragging()||this._findDraggableElement(we.element)){we.stop(jindo.$Event.CANCEL_DEFAULT)
}}}).extend(jindo.UIComponent);
jindo.FloatingLayer=jindo.$Class({$init:function(el,htOption){this._el=jindo.$(el);
this._wel=jindo.$Element(el);
this.option({nDelay:0,nDuration:500,fEffect:jindo.Effect.easeOut,bActivateOnload:true});
this.option(htOption||{});
this._htPos=this._getPosition();
this._oTransition=new jindo.Transition().fps(60);
this._oTimer=new jindo.Timer();
this._wfScroll=jindo.$Fn(this._onScroll,this);
if(this.option("bActivateOnload")){this.activate()
}},getTransition:function(){return this._oTransition
},getTimer:function(){return this._oTimer
},_onActivate:function(){var self=this;
setTimeout(function(){self._onScroll()
},0);
this._wfScroll.attach(window,"scroll").attach(window,"resize")
},_onDeactivate:function(){this._wfScroll.detach(window,"scroll").detach(window,"resize")
},_getPosition:function(){var el=this._el,wel=this._wel,sLeft=el.style.left,sRight=el.style.right,sTop=el.style.top,sBottom=el.style.bottom,htPos={sAlignX:sLeft?"left":(sRight?"right":null),sAlignY:sTop?"top":(sBottom?"bottom":null)},htOffset=wel.offset(),htClientSize=jindo.$Document().clientSize();
switch(htPos.sAlignX){case"left":htPos.nX=htOffset.left;
break;
case"right":htPos.nX=Math.max(htClientSize.width-htOffset.left-wel.width(),parseFloat(sRight));
break
}switch(htPos.sAlignY){case"top":htPos.nY=htOffset.top;
break;
case"bottom":htPos.nY=Math.max(htClientSize.height-htOffset.top-wel.height(),parseFloat(sBottom));
break
}return htPos
},_onScroll:function(){var self=this;
this._oTimer.start(function(){self._paint()
},this.option("nDelay"))
},_paint:function(){var oDoc=document.documentElement||document,elBody=document.body,el=this._el,wel=this._wel,htPos=this._htPos,htScrollPos={},htOffset=jindo.$Element(el).offset(),nPosX,nPosY,htParam={nX:null,nY:null};
if(htPos.sAlignX){switch(htPos.sAlignX){case"left":htScrollPos.x=oDoc.scrollLeft||elBody.scrollLeft;
nPosX=htOffset.left-htScrollPos.x;
break;
case"right":htScrollPos.x=(oDoc.scrollLeft||elBody.scrollLeft)+jindo.$Document().clientSize().width;
nPosX=htScrollPos.x-(htOffset.left+wel.width());
break
}htParam.nX=parseFloat(wel.css(htPos.sAlignX))+(htPos.nX-nPosX)
}if(htPos.sAlignY){switch(htPos.sAlignY){case"top":htScrollPos.y=oDoc.scrollTop||elBody.scrollTop;
nPosY=htOffset.top-htScrollPos.y;
break;
case"bottom":htScrollPos.y=(oDoc.scrollTop||elBody.scrollTop)+jindo.$Document().clientSize().height;
nPosY=htScrollPos.y-(htOffset.top+wel.height());
break
}htParam.nY=parseFloat(wel.css(htPos.sAlignY))+(htPos.nY-nPosY)
}if(this.fireEvent("beforeMove",htParam)){var htTransition={},fEffect=this.option("fEffect");
if(htParam.nX!==null){htTransition["@"+htPos.sAlignX]=fEffect(htParam.nX+"px")
}if(htParam.nY!==null){htTransition["@"+htPos.sAlignY]=fEffect(htParam.nY+"px")
}var self=this;
this._oTransition.abort().start(this.option("nDuration"),el,htTransition).start(function(){self.fireEvent("move")
})
}}}).extend(jindo.UIComponent);
jindo.DefaultTextValue=jindo.$Class({$init:function(el,htOption){this.option({sValue:"",bActivateOnload:true});
this.option(htOption||{});
this._elBaseTarget=jindo.$(el);
this._wfOnFocusAndBlur=jindo.$Fn(this._onFocusAndBlur,this);
if(this.option("bActivateOnload")){this.activate()
}},getBaseElement:function(){return this._elBaseTarget
},setDefault:function(){this.getBaseElement().value=this.option("sValue");
return this
},setDefaultValue:function(sValue){var sOldValue=this.option("sValue");
this.option("sValue",sValue);
if(this.getBaseElement().value==sOldValue){this.setDefault()
}return this
},getDefaultValue:function(){return this.option("sValue")
},paint:function(){return this
},_onActivate:function(){var elInput=this.getBaseElement();
if(elInput.value==""){this.setDefault()
}this._wfOnFocusAndBlur.attach(elInput,"focus").attach(elInput,"blur")
},_onDeactivate:function(){var elInput=this.getBaseElement();
this._wfOnFocusAndBlur.detach(elInput,"focus").detach(elInput,"blur")
},_onFocusAndBlur:function(we){var el=this._elBaseTarget;
var sValue=el.value;
switch(we.type){case"focus":if(sValue.replace(/\r\n/g,"\n")==this.getDefaultValue()){el.value="";
el.select()
}break;
case"blur":if(jindo.$S(sValue).trim().$value()==""){this.setDefault()
}break
}}}).extend(jindo.UIComponent);
jindo.LayerManager=jindo.$Class({_bIsActivating:false,_bIsHiding:false,_bIsShowing:false,_aLink:null,$init:function(el,htOption){this.option({sCheckEvent:"click",nCheckDelay:100,nShowDelay:0,nHideDelay:100});
this.option(htOption||{});
this.setLayer(el);
this._aLink=[];
this._oShowTimer=new jindo.Timer();
this._oHideTimer=new jindo.Timer();
this._oEventTimer=new jindo.Timer();
this._wfOnEvent=jindo.$Fn(this._onEvent,this);
this.getVisible();
this.activate()
},_onActivate:function(){this._wfOnEvent.attach(document,this.option("sCheckEvent"))
},_onDeactivate:function(){this._wfOnEvent.detach(document,this.option("sCheckEvent"))
},getVisible:function(){return this._wel.visible()
},_check:function(el){var wel=jindo.$Element(el);
for(var i=0,elLink,welLink;
(elLink=this._aLink[i]);
i++){welLink=jindo.$Element(elLink);
if(welLink){elLink=welLink.$value();
if(elLink&&(el==elLink||wel.isChildOf(elLink))){return true
}}}return false
},_find:function(el){for(var i=0,elLink;
(elLink=this._aLink[i]);
i++){if(elLink==el){return i
}}return -1
},getLayer:function(){return this._el
},setLayer:function(el){this._el=jindo.$(el);
this._wel=jindo.$Element(el);
return this
},getLinks:function(){return this._aLink
},setLinks:function(a){this._aLink=jindo.$A(a).unique().$value();
return this
},link:function(vElement){if(arguments.length>1){for(var i=0,len=arguments.length;
i<len;
i++){this.link(arguments[i])
}return this
}if(this._find(vElement)!=-1){return this
}this._aLink.push(vElement);
return this
},unlink:function(vElement){if(arguments.length>1){for(var i=0,len=arguments.length;
i<len;
i++){this.unlink(arguments[i])
}return this
}var nIndex=this._find(vElement);
if(nIndex>-1){this._aLink.splice(nIndex,1)
}return this
},_fireEventBeforeShow:function(){return this.fireEvent("beforeShow",{elLayer:this.getLayer(),aLinkedElement:this.getLinks()})
},_fireEventShow:function(){this._bIsShowing=false;
this.fireEvent("show",{elLayer:this.getLayer(),aLinkedElement:this.getLinks()})
},_fireEventBeforeHide:function(){var bRet=this.fireEvent("beforeHide",{elLayer:this.getLayer(),aLinkedElement:this.getLinks()});
if(!bRet){this._bIsHiding=false
}return bRet
},_fireEventHide:function(){this._bIsHiding=false;
this.fireEvent("hide",{elLayer:this.getLayer(),aLinkedElement:this.getLinks()})
},_show:function(fShow,nDelay){this._oEventTimer.abort();
this._bIsShowing=true;
this._bIsHiding=false;
if(nDelay>0){this._oShowTimer.start(fShow,nDelay)
}else{this._oHideTimer.abort();
fShow()
}},_hide:function(fHide,nDelay){this._bIsShowing=false;
this._bIsHiding=true;
if(nDelay>0){this._oHideTimer.start(fHide,nDelay)
}else{this._oShowTimer.abort();
fHide()
}},show:function(nDelay){if(typeof nDelay=="undefined"){nDelay=this.option("nShowDelay")
}var self=this;
this._show(function(){if(!self.getVisible()){if(self._fireEventBeforeShow()){self._wel.show();
self._fireEventShow()
}}},nDelay);
return this
},hide:function(nDelay){if(typeof nDelay=="undefined"){nDelay=this.option("nHideDelay")
}var self=this;
this._hide(function(){if(self.getVisible()){if(self._fireEventBeforeHide()){self._wel.hide();
self._fireEventHide()
}}},nDelay);
return this
},toggle:function(nDelay){if(!this.getVisible()||this._bIsHiding){this.show(nDelay||this.option("nShowDelay"))
}else{this.hide(nDelay||this.option("nHideDelay"))
}return this
},_onEvent:function(we){var el=we.element,self=this;
this._oEventTimer.start(function(){if(!self._bIsHiding&&self.getVisible()){if(self._check(el)){if(!self._bIsShowing){self.fireEvent("ignore",{sCheckEvent:self.option("sCheckEvent")});
self._oHideTimer.abort();
self._bIsHiding=false
}}else{if(typeof el.tagName!="undefined"){self.hide()
}}}},this.option("nCheckDelay"))
}}).extend(jindo.UIComponent);
jindo.ScrollBox=new jindo.$Class({$init:function(el,htOption){this.option({sClassPrefix:"scrollbar-",bActivateOnload:true,sOverflowX:"auto",sOverflowY:"auto",bAdjustThumbSize:true,nMinThumbSize:50,nDelta:16});
this.option(htOption||{});
this._el=jindo.$(el);
if(this.option("bActivateOnload")){this.activate();
this.reset()
}},reset:function(){this._autoToggleScrollBar();
var oStatusH=this.hasScrollBarHorizontal();
var oStatusV=this.hasScrollBarVertical();
this._adjustBoxSize();
this._adjustContentSize();
this._autoToggleScrollBar();
if(oStatusH!=this.hasScrollBarHorizontal()||oStatusV!=this.hasScrollBarVertical()){this._adjustBoxSize();
this._adjustContentSize()
}this._autoToggleAvailability();
this._adjustTrackSize();
this._adjustThumbSize();
this.$super.reset()
},_onActivate:function(){this.$super._onActivate();
this.reset()
},_onDeactivate:function(){this.$super._onDeactivate();
this._adjustBoxSize()
},setSize:function(nWidth,nHeight){if(nWidth){jindo.$Element(this._el).css("width",nWidth+"px")
}if(nHeight){jindo.$Element(this._el).css("height",nHeight+"px")
}this.setBoxSize(nWidth,nHeight);
this._oBoxSize={nWidth:jindo.$Element(this._elBox).width(),nHeight:jindo.$Element(this._elBox).height()};
this.reset()
},getContentSize:function(){var welContent=jindo.$Element(this._elContent);
return{nWidth:parseInt(welContent.width(),10),nHeight:parseInt(welContent.height(),10)}
},setContentSize:function(nWidth,nHeight){var welContent=jindo.$Element(this._elContent);
if(nWidth){if(nWidth==Infinity){welContent.css("width","")
}else{welContent.css("width",nWidth+"px")
}}if(nHeight){if(nHeight==Infinity){welContent.css("height","auto")
}else{welContent.css("height",nHeight+"px")
}}this.$super.reset()
},getBoxSize:function(){var welBox=jindo.$Element(this._elBox);
return{nWidth:parseInt(welBox.width(),10),nHeight:parseInt(welBox.height(),10)}
},setBoxSize:function(nWidth,nHeight){var welBox=jindo.$Element(this._elBox);
if(nWidth){welBox.css("width",nWidth+"px")
}if(nHeight){welBox.css("height",nHeight+"px")
}this.$super.reset()
},getTrackSize:function(ht){if(!ht.elScrollBar){return{nWidth:0,nHeight:0}
}var welTrack=jindo.$Element(ht.elTrack);
return{nWidth:parseInt(welTrack.width(),10),nHeight:parseInt(welTrack.height(),10)}
},setTrackSize:function(o,nWidth,nHeight){var welTrack=jindo.$Element(o.elTrack);
if(nWidth){welTrack.css("width",nWidth+"px")
}if(nHeight){welTrack.css("height",nHeight+"px")
}},isNeededScrollBarHorizontal:function(){if(this.option("sOverflowX")=="scroll"){return true
}var oContentSize=this.getContentSize();
var oBoxSize=this.getDefaultBoxSize();
if(this.getScrollBarHorizontal().elScrollBar&&this.option("sOverflowX")!="hidden"){if(this.hasScrollBarVertical()){if(oContentSize.nWidth>oBoxSize.nWidth-jindo.$Element(this.getScrollBarVertical().elScrollBar).width()){return true
}}if(oContentSize.nWidth>oBoxSize.nWidth){return true
}}return false
},isNeededScrollBarVertical:function(){if(this.option("sOverflowY")=="scroll"){return true
}var oContentSize=this.getContentSize();
var oBoxSize=this.getDefaultBoxSize();
if(this.getScrollBarVertical().elScrollBar&&this.option("sOverflowY")!="hidden"){if(this.hasScrollBarHorizontal()){if(oContentSize.nHeight>oBoxSize.nHeight-jindo.$Element(this.getScrollBarHorizontal().elScrollBar).height()){return true
}}if(oContentSize.nHeight>oBoxSize.nHeight){return true
}}return false
},_autoToggleScrollBar:function(){if(!this.isActivating()){return
}var sClassPrefix=this.option("sClassPrefix");
var oH=this.getScrollBarHorizontal();
var oV=this.getScrollBarVertical();
var welScrollBar;
var bAjustThumbSize=this.option("bAdjustThumbSize");
var bV=this.isNeededScrollBarVertical();
if(oV.elScrollBar){welScrollBar=jindo.$Element(oV.elScrollBar);
if(bV){welScrollBar.addClass(sClassPrefix+"show")
}else{welScrollBar.removeClass(sClassPrefix+"show")
}if(oV.elThumb&&bAjustThumbSize){jindo.$Element(oV.elThumb).css("height","0px")
}}var bH=this.isNeededScrollBarHorizontal();
if(oH.elScrollBar){welScrollBar=jindo.$Element(oH.elScrollBar);
if(bH){welScrollBar.addClass(sClassPrefix+"show")
}else{welScrollBar.removeClass(sClassPrefix+"show")
}if(oH.elThumb&&bAjustThumbSize){jindo.$Element(oH.elThumb).css("width","0px")
}}if(oV.elScrollBar){welScrollBar=jindo.$Element(oV.elScrollBar);
if(this.isNeededScrollBarVertical()){welScrollBar.addClass(sClassPrefix+"show")
}else{welScrollBar.removeClass(sClassPrefix+"show")
}if(oV.elThumb&&bAjustThumbSize){jindo.$Element(oV.elThumb).css("height","0px")
}}},_adjustTrackSize:function(){if(!this.isActivating()){return
}var oBoxSize=this.getDefaultBoxSize();
var oH=this.getScrollBarHorizontal();
var oV=this.getScrollBarVertical();
var bH=this.isNeededScrollBarHorizontal();
if(bH&&oH.elScrollBar){var nTrackWidth=oBoxSize.nWidth;
var wel=jindo.$Element(oH.elScrollBar);
wel.css("top",oBoxSize.nHeight-wel.height()+"px");
var nVerticalWidth=0;
if(this.hasScrollBarVertical()&&oV.elScrollBar){nVerticalWidth=parseInt(jindo.$Element(oV.elScrollBar).width(),10);
nTrackWidth-=nVerticalWidth
}wel.width(nTrackWidth);
var nButtonLeftWidth=0;
if(oH.elButtonLeft){nButtonLeftWidth=parseInt(jindo.$Element(oH.elButtonLeft).width(),10);
nTrackWidth-=nButtonLeftWidth
}if(oH.elButtonRight){nTrackWidth-=parseInt(jindo.$Element(oH.elButtonRight).width(),10)
}jindo.$Element(oH.elTrack).css("left",nButtonLeftWidth+"px");
this.setTrackSize(oH,nTrackWidth,null)
}var bV=this.isNeededScrollBarVertical();
if(bV&&oV.elScrollBar){var nTrackHeight=oBoxSize.nHeight;
var nHorizontalHeight=0;
if(this.hasScrollBarHorizontal()&&oH.elScrollBar){nHorizontalHeight=parseInt(jindo.$Element(oH.elScrollBar).height(),10);
nTrackHeight-=nHorizontalHeight
}if(oV.elButtonUp){nTrackHeight-=parseInt(jindo.$Element(oV.elButtonUp).height(),10)
}if(oV.elButtonDown){nTrackHeight-=parseInt(jindo.$Element(oV.elButtonDown).height(),10)
}this.setTrackSize(oV,null,nTrackHeight)
}},_adjustBoxSize:function(){var oBoxSize=this.getDefaultBoxSize();
var oH=this.getScrollBarHorizontal();
var oV=this.getScrollBarVertical();
var bV=this.hasScrollBarVertical();
var bH=this.hasScrollBarHorizontal();
this.setBoxSize(oBoxSize.nWidth,oBoxSize.nHeight);
if(this.isActivating()){if(bH&&oH.elScrollBar){var nHeight=oBoxSize.nHeight;
nHeight-=parseInt(jindo.$Element(oH.elScrollBar).height(),10);
this.setBoxSize(null,nHeight)
}if(bV&&oV.elScrollBar){var nWidth=oBoxSize.nWidth;
nWidth-=parseInt(jindo.$Element(oV.elScrollBar).width(),10);
this.setBoxSize(nWidth,null)
}}},_adjustContentSize:function(){if(!this.isActivating()){return
}var oBoxSize=this.getBoxSize();
var bV=this.option("sOverflowY")!="hidden";
var bH=this.option("sOverflowX")!="hidden";
var nWidth,nHeight;
if(bV&&!bH){nWidth=oBoxSize.nWidth
}if(bH&&!bV){nHeight=oBoxSize.nHeight
}this.setContentSize(nWidth||Infinity,nHeight||Infinity)
},_adjustThumbSize:function(){if(!this.isActivating()){return
}if(!this.option("bAdjustThumbSize")){return
}var nMinThumbSize=this.option("nMinThumbSize");
var oContentSize=this.getContentSize();
var oBoxSize=this.getBoxSize();
var nGap;
var oH=this.getScrollBarHorizontal();
var oV=this.getScrollBarVertical();
if(oV.elScrollBar){var oTrackSizeV=this.getTrackSize(oV);
var nThumbHeight=Math.floor(parseInt(oTrackSizeV.nHeight*oBoxSize.nHeight/oContentSize.nHeight,10));
if(nThumbHeight<nMinThumbSize){nThumbHeight=nMinThumbSize
}if(nThumbHeight>=oTrackSizeV.nHeight){nThumbHeight=oTrackSizeV.nHeight
}jindo.$Element(oV.elThumb).height(nThumbHeight);
nGap=0;
if(oV.elThumbHead){nGap+=jindo.$Element(oV.elThumbHead).height()
}if(oV.elThumbFoot){nGap+=jindo.$Element(oV.elThumbFoot).height()
}if(oV.elThumbBody){jindo.$Element(oV.elThumbBody).height(nThumbHeight-nGap)
}}if(oH.elScrollBar){var oTrackSizeH=this.getTrackSize(oH);
var nThumbWidth=Math.floor(parseInt(oTrackSizeH.nWidth*oBoxSize.nWidth/oContentSize.nWidth,10));
if(nThumbWidth<nMinThumbSize){nThumbWidth=nMinThumbSize
}if(nThumbWidth>=oTrackSizeH.nWidth){nThumbWidth=oTrackSizeH.nWidth
}jindo.$Element(oH.elThumb).width(nThumbWidth);
nGap=0;
if(oH.elThumbHead){nGap+=jindo.$Element(oH.elThumbHead).width()
}if(oH.elThumbFoot){nGap+=jindo.$Element(oH.elThumbFoot).width()
}if(oH.elThumbBody){jindo.$Element(oH.elThumbBody).width(nThumbWidth-nGap)
}}},_autoToggleAvailability:function(){var sClassPrefix=this.option("sClassPrefix");
var oContentSize=this.getContentSize();
var oBoxSize=this.getBoxSize();
var oH=this.getScrollBarHorizontal();
var oV=this.getScrollBarVertical();
if(oH.elScrollBar){if(this.option("sOverflowX")=="scroll"&&oBoxSize.nWidth>=oContentSize.nWidth){jindo.$Element(oH.elScrollBar).addClass(sClassPrefix+"disabled");
this.$super._onDeactivate("horizontal");
if(this.isActivating()){jindo.$Element(this._el).removeClass(sClassPrefix+"noscript")
}}else{jindo.$Element(oH.elScrollBar).removeClass(sClassPrefix+"disabled");
if(this.isActivating()){this.$super._onActivate("horizontal")
}}}if(oV.elScrollBar){if(this.option("sOverflowY")=="scroll"&&oBoxSize.nHeight>=oContentSize.nHeight){jindo.$Element(oV.elScrollBar).addClass(sClassPrefix+"disabled");
this.$super._onDeactivate("vertical");
if(this.isActivating()){jindo.$Element(this._el).removeClass(sClassPrefix+"noscript")
}}else{jindo.$Element(oV.elScrollBar).removeClass(sClassPrefix+"disabled");
if(this.isActivating()){this.$super._onActivate("vertical")
}}}}}).extend(jindo.ScrollBar);
jindo.Clipboard=jindo.$Class({_aElement:null,_aData:null,_elOvered:null,_bFailed:true,$init:function(sFlashURL){this._sFlashURL=sFlashURL;
var oStatic=jindo.Clipboard;
var sFlashUID=this._sUnique="S"+new Date().getTime()+parseInt(Math.random()*1000000000,10);
if(typeof oStatic._callbacks=="undefined"){oStatic._callbacks={}
}oStatic._callbacks[this._sUnique]={click:jindo.$Fn(this._onFlashClick,this).bind(),mouseover:jindo.$Fn(this._onFlashMouseOver,this).bind(),mouseout:jindo.$Fn(this._onFlashMouseOut,this).bind(),mousedown:jindo.$Fn(this._onFlashMouseDown,this).bind(),mouseup:jindo.$Fn(this._onFlashMouseUp,this).bind(),load:jindo.$Fn(this._onFlashLoad,this).bind()};
this._aElement=[];
this._aData=[];
this._initFlash();
this._wfHandler=jindo.$Fn(function(we){this._initFlash();
var el=we.element;
var htPosition=jindo.$Element(el).offset();
this._setFlashPosSize(htPosition.left,htPosition.top,el.offsetWidth,el.offsetHeight);
this._setClipboard(el,this._getData(el));
this._elOvered=el
},this)
},_initFlash:function(){if(this._elDummy){return
}var elDummy=this._elDummy=jindo.$("<div>");
var sFlashUID=this._sUnique;
elDummy.style.cssText="position:absolute !important; border:0 !important; padding:0 !important; margin:0 !important; overflow:visible !important; z-index:32000 !important;";
document.body.insertBefore(elDummy,document.body.firstChild);
var sFlashHtml=nhn.FlashObject.generateTag(this._sFlashURL,"CLIPBOARD"+sFlashUID,1,1,{flashVars:{sUniq:sFlashUID},wmode:"transparent"});
sFlashHtml=sFlashHtml.replace(/style="position:relative !important;"/gi,'style="position:absolute !important; left:0 !important; top:0 !important; border:0 !important; padding:0 !important; margin:0 !important; overflow:visible !important;"');
elDummy.innerHTML=sFlashHtml;
jindo.$Fn(this._checkFailed,this).attach(elDummy,"click")
},_getFlash:function(){return nhn.FlashObject.find("CLIPBOARD"+this._sUnique)
},_setFlashPosSize:function(nLeft,nTop,nWidth,nHeight){var elDummy=this._elDummy;
elDummy.style.left=nLeft+"px";
elDummy.style.top=nTop+"px";
var oFlash=this._getFlash();
oFlash.width=nWidth;
oFlash.height=nHeight;
oFlash.style.width=nWidth+"px";
oFlash.style.height=nHeight+"px"
},setData:function(el,sData){el=jindo.$(el);
var nIndex=jindo.$A(this._aElement).indexOf(el),bExist=nIndex!=-1;
if(bExist&&(!sData||typeof sData=="undefined")){this._wfHandler.detach(el,"mousemove");
this._aElement.splice(nIndex,1);
this._aData.splice(nIndex,1);
this._setFlashPosSize(0,0,1,1);
return
}if(!bExist){this._wfHandler.attach(el,"mousemove");
this._aElement.push(el);
this._aData.push(sData)
}else{this._aData[nIndex]=sData
}this._setClipboard(el,sData)
},_getData:function(el){var nIndex=jindo.$A(this._aElement).indexOf(el);
return this._aData[nIndex]
},_setClipboard:function(el,sData){var oFlash=this._getFlash();
var sCursor=(jindo.$Element(el).css("cursor")||"").toUpperCase();
var bHandCursor=sCursor=="POINTER"||sCursor=="HAND";
try{oFlash.setClipboardData(sData);
oFlash.setClipboardOptions({cursor:bHandCursor?"pointer":"default"});
this._sAppliedData=sData;
this._bFailed=false
}catch(e){this._bFailed=true
}},_checkFailed:function(){if(this._bFailed){this.fireEvent("failure",{element:this._elOvered,data:this._lastestData})
}},_onFlashClick:function(sData){this.fireEvent("copy",{element:this._elOvered,data:sData})
},_onFlashMouseOver:function(){this.fireEvent("over",{element:this._elOvered})
},_onFlashMouseOut:function(){this.fireEvent("out",{element:this._elOvered})
},_onFlashMouseDown:function(){this.fireEvent("down",{element:this._elOvered})
},_onFlashMouseUp:function(){this.fireEvent("up",{element:this._elOvered})
},_onFlashLoad:function(){this.fireEvent("load")
}}).extend(jindo.Component);jindo.WatchInput=jindo.$Class({_bTimerRunning:false,_bFocused:false,_sPrevValue:"",$init:function(sInputId,htOption){var htDefaultOption={nInterval:100,bUseTimerOnIE:false,sKeyEvent:"keyup",bPermanent:false,bActivateOnload:true};
this.option(htDefaultOption);
this.option(htOption||{});
this._elInput=jindo.$(sInputId);
this._oTimer=new jindo.Timer();
this._bIE=jindo.$Agent().navigator().ie;
this._wfFocus=jindo.$Fn(this._onFocus,this);
this._wfBlur=jindo.$Fn(this._onBlur,this);
this._wfKeyEvent=jindo.$Fn(this._onKeyEvent,this);
this._wfStartTimer=jindo.$Fn(this._startTimer,this);
this._wfStopTimer=jindo.$Fn(this._stopTimer,this);
if(this.option("bActivateOnload")){this.activate(true)
}},getInput:function(){return this._elInput
},setInputValue:function(s){this.getInput().value=s;
this.setCompareValue(s);
return this
},getCompareValue:function(){return this._sPrevValue
},setCompareValue:function(s){this._sPrevValue=s;
return this
},fireChangeEvent:function(){var elInput=this.getInput(),sValue=elInput.value;
this.setCompareValue(sValue);
this.fireEvent("change",{elInput:elInput,sText:sValue});
return this
},start:function(bCompareOnce){return this.activate(bCompareOnce||false)
},stop:function(){return this.deactivate()
},_onActivate:function(bCompareOnce){this.setCompareValue("");
var elInput=this.getInput();
this._wfFocus.attach(elInput,"focus");
if(this._bIE&&!this.option("bUseTimerOnIE")){this.fireEvent("start");
this._wfKeyEvent.attach(elInput,this.option("sKeyEvent"))
}else{if(this._isTimerRunning()){return
}this.fireEvent("start");
if(this.option("bPermanent")){this._startTimer()
}else{this._wfStartTimer.attach(elInput,"focus");
this._wfStopTimer.attach(elInput,"blur")
}}this._wfBlur.attach(elInput,"blur");
if(bCompareOnce||false){this.compare()
}},_onDeactivate:function(){var elInput=this.getInput();
this._wfFocus.detach(elInput,"focus");
this._wfKeyEvent.detach(elInput,this.option("sKeyEvent"));
this._stopTimer();
this._wfStartTimer.detach(elInput,"focus");
this._wfStopTimer.detach(elInput,"blur");
this._wfBlur.detach(elInput,"blur");
this.fireEvent("stop")
},getInterval:function(){return this.option("nInterval")
},setInterval:function(n){this.option("nInterval",n);
return this
},_isTimerRunning:function(){return this._bTimerRunning
},_startTimer:function(){if(this._isTimerRunning()){return
}this._bTimerRunning=true;
this.fireEvent("timerStart");
this.compare();
var self=this;
this._oTimer.start(function(){self.compare();
return true
},this.getInterval())
},_stopTimer:function(){if(this._isTimerRunning()){this._oTimer.abort();
this._bTimerRunning=false;
this.compare();
this.fireEvent("timerStop")
}},_onKeyEvent:function(){this.compare()
},_onFocus:function(){this._bFocused=true;
this.fireEvent("focus")
},_onBlur:function(){this._bFocused=false;
this.fireEvent("blur")
},compare:function(){if(this.getInput().value!=this.getCompareValue()){this.fireChangeEvent()
}return this
}}).extend(jindo.UIComponent);if(typeof nhn=="undefined"){nhn={}
}nhn.FlashObject=(function(){var FlashObject={};
var sClassPrefix="F"+new Date().getTime()+parseInt(Math.random()*1000000);
var bIE=/MSIE/i.test(navigator.userAgent);
var bFF=/FireFox/i.test(navigator.userAgent);
var bChrome=/Chrome/i.test(navigator.userAgent);
var sReservedName=" className style __flashID codebase classid class width height name src align id type object embed movie forwardInstall requireVersion ";
var bWin=(navigator.platform.toLowerCase().indexOf("win")!=-1)?true:false;
var isOpera=(navigator.userAgent.indexOf("Opera")!=-1)?true:false;
var controlVersion=function(reqMajorVer){var version,axo,e;
if(reqMajorVer==null){reqMajorVer=25
}try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
version=axo.GetVariable("$version");
if(version){return versionToObject(version)
}}catch(e){}for(var i=reqMajorVer;
i>0;
i--){try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+i);
version=axo.GetVariable("$version")
}catch(e){continue
}if(version){return versionToObject(version)
}}return -1
};
var versionToObject=function(sVersion){var versionArray=sVersion.split(" ")[1].split(",");
return{major:versionArray[0],minor:versionArray[1],revision:versionArray[2]}
};
var getSwfVer=function(reqMajorVer){var flashVer=-1;
if(navigator.plugins!=null&&navigator.plugins.length>0){if(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]){var swVer2=navigator.plugins["Shockwave Flash 2.0"]?" 2.0":"";
var flashDescription=navigator.plugins["Shockwave Flash"+swVer2].description;
var descArray=flashDescription.split(" ");
var tempArrayMajor=descArray[2].split(".");
var versionMajor=tempArrayMajor[0];
var versionMinor=tempArrayMajor[1];
var versionRevision=descArray[3];
if(versionRevision==""){versionRevision=descArray[4]
}if(versionRevision[0]=="d"){versionRevision=versionRevision.substring(1)
}else{if(versionRevision[0]=="r"){versionRevision=versionRevision.substring(1);
if(versionRevision.indexOf("d")>0){versionRevision=versionRevision.substring(0,versionRevision.indexOf("d"))
}}}flashVer={major:versionMajor,minor:versionMinor,revision:versionRevision}
}}else{if(navigator.userAgent.toLowerCase().indexOf("webtv/2.6")!=-1){flashVer=4
}else{if(navigator.userAgent.toLowerCase().indexOf("webtv/2.5")!=-1){flashVer=3
}else{if(navigator.userAgent.toLowerCase().indexOf("webtv")!=-1){flashVer=2
}else{if(bIE&&bWin&&!isOpera){flashVer=controlVersion(reqMajorVer)
}}}}}return flashVer
};
var detectFlashVer=function(reqMajorVer,reqMinorVer,reqRevision){var returnValue;
version=getSwfVer(reqMajorVer);
if(version==-1){returnValue=-1
}else{if(version!=0){returnValue=0;
if(version.major>parseFloat(reqMajorVer)){returnValue=1
}else{if(version.major==parseFloat(reqMajorVer)){if(version.minor>parseFloat(reqMinorVer)){returnValue=1
}else{if(version.minor==parseFloat(reqMinorVer)){if(version.revision>=parseFloat(reqRevision)){returnValue=1
}}}}}}}return returnValue
};
var dafaultInstall=function(){};
var bind=function(oElement,sEvent,fHandler){if(typeof oElement.attachEvent!="undefined"){oElement.attachEvent("on"+sEvent,fHandler)
}else{oElement.addEventListener(sEvent,fHandler,true)
}};
var objectToString=function(oObj,sSeparator){var s="";
var first=true;
var name="";
var value;
for(var p in oObj){if(first){first=false
}else{s+=sSeparator
}value=oObj[p];
switch(typeof(value)){case"string":s+=p+"="+encodeURIComponent(value);
break;
case"number":s+=p+"="+encodeURIComponent(value.toString());
break;
case"boolean":s+=p+"="+(value?"true":"false");
break;
default:}}return s
};
var unloadHandler=function(){obj=document.getElementsByTagName("OBJECT");
for(var i=0,theObj;
theObj=obj[i];
i++){theObj.style.display="none";
for(var prop in theObj){if(typeof(theObj[prop])=="function"){try{if(theObj.hasOwnProperty(prop)){theObj[prop]=null
}}catch(e){}}}}};
var wheelHandler=function(e){e=e||window.event;
var nDelta=e.wheelDelta/(bChrome?360:120);
if(!nDelta){nDelta=-e.detail/3
}var oEl=e.target||e.srcElement;
if(!(new RegExp("(^|\b)"+sClassPrefix+"_([a-z0-9_$]+)(\b|$)","i").test(oEl.className))){return
}var sMethod=RegExp.$2;
var nX="layerX" in e?e.layerX:e.offsetX;
var nY="layerY" in e?e.layerY:e.offsetY;
try{if(!oEl[sMethod](nDelta,nX,nY)){if(e.preventDefault){e.preventDefault()
}else{e.returnValue=false
}}}catch(err){}};
var getAbsoluteXY=function(oEl){var oPhantom=null;
var bSafari=/Safari/.test(navigator.userAgent);
var bIE=/MSIE/.test(navigator.userAgent);
var fpSafari=function(oEl){var oPos={left:0,top:0};
if(oEl.parentNode.tagName.toLowerCase()=="object"){oEl=oEl.parentNode
}for(var oParent=oEl,oOffsetParent=oParent.offsetParent;
oParent=oParent.parentNode;
){if(oParent.offsetParent){oPos.left-=oParent.scrollLeft;
oPos.top-=oParent.scrollTop
}if(oParent==oOffsetParent){oPos.left+=oEl.offsetLeft+oParent.clientLeft;
oPos.top+=oEl.offsetTop+oParent.clientTop;
if(!oParent.offsetParent){oPos.left+=oParent.offsetLeft;
oPos.top+=oParent.offsetTop
}oOffsetParent=oParent.offsetParent;
oEl=oParent
}}return oPos
};
var fpOthers=function(oEl){var oPos={left:0,top:0};
for(var o=oEl;
o;
o=o.offsetParent){oPos.left+=o.offsetLeft;
oPos.top+=o.offsetTop
}for(var o=oEl.parentNode;
o;
o=o.parentNode){if(o.tagName=="BODY"){break
}if(o.tagName=="TR"){oPos.top+=2
}oPos.left-=o.scrollLeft;
oPos.top-=o.scrollTop
}return oPos
};
return(bSafari?fpSafari:fpOthers)(oEl)
};
var getScroll=function(){var bIE=/MSIE/.test(navigator.userAgent);
if(bIE){var sX=document.documentElement.scrollLeft||document.body.scrollLeft;
var sY=document.documentElement.scrollTop||document.body.scrollTop;
return{scrollX:sX,scrollY:sY}
}else{return{scrollX:window.pageXOffset,scrollY:window.pageYOffset}
}};
var getInnerWidthHeight=function(){var bIE=/MSIE/.test(navigator.userAgent);
var obj={};
if(bIE){obj.nInnerWidth=document.documentElement.clientWidth||document.body.clientWidth;
obj.nInnerHeight=document.documentElement.clientHeight||document.body.clientHeight
}else{obj.nInnerWidth=window.innerWidth;
obj.nInnerHeight=window.innerHeight
}return obj
};
FlashObject.showAt=function(sDiv,sTag){document.getElementById(sDiv).innerHTML=sTag
};
FlashObject.show=function(sURL,sID,nWidth,nHeight,oParam,sAlign,sFPVersion){if(oParam&&oParam.requireVersion){var versions=oParam.requireVersion.split(".");
var hasRequire=detectFlashVer(versions[0],versions[1],versions[2]);
if(hasRequire<1){if(oParam.forwardInstall){oParam.forwardInstall(hasRequire)
}else{dafaultInstall(hasRequire)
}return null
}}document.write(FlashObject.generateTag(sURL,sID,nWidth,nHeight,oParam,sAlign,sFPVersion))
};
FlashObject.generateTag=function(sURL,sID,nWidth,nHeight,oParam,sAlign,sFPVersion){nWidth=nWidth||"100%";
nHeight=nHeight||"100%";
sFPVersion=sFPVersion||"9,0,0,0";
sAlign=sAlign||"middle";
var oOptions=FlashObject.getDefaultOption();
var sClsID="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000";
var sCodeBase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version="+sFPVersion;
var sStyle="position:relative !important;";
var sClassName=sClassPrefix;
if(oParam){if(oParam.flashVars){if(typeof(oParam.flashVars)=="object"){oParam.flashVars=objectToString(oParam.flashVars,"&")
}oParam.flashVars+="&"
}else{oParam.flashVars=""
}oParam.flashVars+="__flashID="+sID;
sStyle=oParam.style||sStyle;
sClassName=oParam.className||(sClassName+"_"+oParam.wheelHandler);
for(var key in oParam){if((new RegExp("\\b"+key+"\\b","i").test(sReservedName))){continue
}oOptions[key]=oParam[key]
}}var objCode=[];
var embedCode=[];
objCode.push('<object classid="'+sClsID+'" codebase="'+sCodeBase+'" class="'+sClassName+'" style="'+sStyle+'" width="'+nWidth+'" height="'+nHeight+'" id="'+sID+'" align="'+sAlign+'">');
objCode.push('<param name="movie" value="'+sURL+'" />');
embedCode.push('<embed width="'+nWidth+'" height="'+nHeight+'" name="'+sID+'" class="'+sClassName+'" style="'+sStyle+'" src="'+sURL+'" align="'+sAlign+'" ');
if(!bIE){embedCode.push('id="'+sID+'" ')
}for(var vars in oOptions){objCode.push('<param name="'+vars+'" value="'+oOptions[vars]+'" />');
embedCode.push(vars+'="'+oOptions[vars]+'" ')
}embedCode.push('type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />');
objCode.push(embedCode.join(""));
objCode.push("</object>");
if(bind){bind(window,"unload",unloadHandler);
bind(document,!bFF?"mousewheel":"DOMMouseScroll",wheelHandler);
bind=null
}return(bIE)?objCode.join(""):embedCode.join("")
};
FlashObject.getDefaultOption=function(){return{quality:"high",bgColor:"#FFFFFF",allowScriptAccess:"always",wmode:"window",menu:"false",allowFullScreen:"true"}
};
FlashObject.find=function(sID,oDoc){oDoc=oDoc||document;
try{return oDoc[sID]||oDoc.all[sID]
}catch(e){return null
}};
FlashObject.getPlayerVersion=function(){return getSwfVer()
};
FlashObject.setWidth=function(sID,value){FlashObject.find(sID).width=value
};
FlashObject.setHeight=function(sID,value){FlashObject.find(sID).height=value
};
FlashObject.setSize=function(sID,nWidth,nHeight){FlashObject.find(sID).height=nHeight;
FlashObject.find(sID).width=nWidth
};
FlashObject.getPositionObj=function(sID){var targetObj=FlashObject.find(sID);
if(targetObj==null){return null
}var absPosi=getAbsoluteXY(targetObj);
var scrollPosi=getScroll();
var obj={};
obj.absoluteX=absPosi.left;
obj.absoluteY=absPosi.top;
obj.scrolledX=obj.absoluteX-scrollPosi.scrollX;
obj.scrolledY=obj.absoluteY-scrollPosi.scrollY;
obj.browserWidth=getInnerWidthHeight().nInnerWidth;
return obj
};
FlashObject.getSSCLogParam=function(){var rv=[];
if(window.g_ssc){rv.push("ssc="+g_ssc)
}else{rv.push("ssc=decide.me")
}if(window.g_pid){rv.push("&p="+g_pid)
}if(window.g_query){rv.push("&q="+encodeURIComponent(g_query))
}if(window.g_sid){rv.push("&s="+g_sid)
}return rv.join("")
};
return FlashObject
})();var lcs_add={};
var lcs_ver="v0.4.11.l";
var lcs_count=0;
lcs_obj=[];
function lcs_do(etc){if(!lcs_SerName){var lcs_SerName="lcs.naver.com"
}var rs="";
var index;
try{var lcs_Addr=(window.location.protocol?window.location.protocol:"http:")+"//"+lcs_SerName+"/m?"
}catch(e){return
}try{rs=lcs_Addr+"u="+encodeURIComponent(document.URL)+"&e="+(document.referrer?encodeURIComponent(document.referrer):"")
}catch(e){}try{if(typeof lcs_add.i=="undefined"){lcs_add.i=""
}for(var index in lcs_add){if(typeof lcs_add[index]!="function"){rs+="&"+index+"="+encodeURIComponent(lcs_add[index])
}}for(var index in etc){if((index.length>=3&&(typeof etc[index]!="function"))||index=="qy"){rs+="&"+index+"="+encodeURIComponent(etc[index])
}}if(lcs_count>0){var timeStr=(new Date).getTime();
rs+="&ts="+timeStr
}rs+="&EOU";
if(document.images){var obj=(new Image());
lcs_obj.push(obj);
obj.src=rs
}else{document.write('<img src="'+rs+'" width="1" height="1" border="0" />')
}lcs_count++
}catch(e){return
}};if(typeof nclk=="undefined"){nclk={}
}if(typeof nclkMaxDepth=="undefined"){var nclkMaxDepth=8
}if(typeof ccsrv=="undefined"){var ccsrv="cc.naver.com"
}if(typeof nclkModule=="undefined"){var nclkModule="cc"
}if(typeof nsc=="undefined"){var nsc="decide.me"
}if(typeof g_pid=="undefined"){var g_pid=""
}if(typeof g_sid=="undefined"){var g_sid=""
}var nclkImg=[];
if(typeof nclkMaxEvtTarget=="undefined"){var nclkMaxEvtTarget=4
}if(typeof nclk_evt=="undefined"){var nclk_evt=0
}nclk.nclktagVersion="1.0.10";
nclk.addEvent=function(e,b,a){if(e.addEventListener){e.addEventListener(b,a,false)
}else{if(e.attachEvent){e["e"+b+a]=a;
e[b+a]=function(){e["e"+b+a](window.event)
};
e.attachEvent("on"+b,e[b+a])
}}};
nclk.generateCC=function(l){var r=l||window.event;
if(!r){return false
}var f=r.target||r.srcElement;
var o=f.nodeName;
var m,p;
var q;
var b="",t="",k="",g="";
var a=0,n=0;
var h,s;
var i;
var j=-1;
if(r.button==2){return
}if(f.nodeType==3){f=f.parentNode
}if(f.parentNode&&f.parentNode.nodeName=="A"){f=f.parentNode
}p=f;
while(j<=nclkMaxEvtTarget){if(j>=nclkMaxEvtTarget){if(nclk_evt==2||nclk_evt==4){h=0;
m=p;
break
}else{return
}}else{i=nclk.getTag(f);
h=i[0];
s=i[1];
if(h==0){if(f.parentNode){f=f.parentNode;
j++
}else{h=0;
m=p;
break
}}else{m=f;
break
}}}switch(h){case 0:case 1:case 2:case 3:if(nclk_evt==2||nclk_evt==4){b="ncs.blank"
}else{return
}break;
case 4:b=nclk.findArea(m,1);
if(b==undefined){b=""
}q=nclk.parseNCStr(h,s);
b=b+"."+q[0];
break;
case 5:b=nclk.findArea(m,2);
if(b==undefined){b=""
}q=nclk.parseNCStr(h,s);
break;
case 6:q=nclk.parseNCStr(h,s);
b=q[0];
break;
default:return
}if(h==4||h==5||h==6){k=q[1];
t=q[2];
g=q[3];
n=q[4]
}if(n=="2"){return
}else{a=n
}if(g){clickcr(m,b,t,k,r,a,g)
}else{clickcr(m,b,t,k,r,a)
}};
nclk.searchNextObj=function(a){var b=a.nextSibling;
if(b&&b.nodeType==3){b=b.nextSibling
}return b
};
nclk.getTag=function(g){var b=0;
if(!g){return 0
}var i;
var f;
var h;
var a="";
if(nclk_evt==1||nclk_evt==2){var e=nclk.searchNextObj(g);
if(e){if(e!=null&&e.nodeType==8&&e.data.indexOf("=")>0){a=nclk.trim(e.data)
}else{return[0,""]
}}else{return[0,""]
}}else{if(nclk_evt==3||nclk_evt==4){if(g.className){a=nclk.getClassTag(g.className);
if(!a){return[0,""]
}}else{return[0,""]
}}}a=nclk.trim(a);
i=a.split("=");
f=i[0].charAt(0);
h=i[0].substring(1);
if(f!="N"){return[0,""]
}if(h=="E"){b=1
}else{if(h=="I"){b=2
}else{if(h=="EI"||h=="IE"){b=3
}else{if(h=="IP"||h=="PI"){b=4
}else{if(h=="P"){b=5
}else{if(i[0].length==1){b=6
}else{b=0
}}}}}}return[b,a]
};
nclk.findArea=function(b,h){var j=0;
var g;
var k;
var m,f;
var e="";
var a=0;
var l;
var i;
if(!b){return
}if(h==1){a=1
}else{if(h==2){a=0
}}while(b=b.parentNode){g=b;
while(1){if(nclk_evt==1||nclk_evt==2){g=g.previousSibling;
if(g){if(g.nodeType==8){k=nclk.trim(g.data)
}else{continue
}}else{break
}}else{if(nclk_evt==3||nclk_evt==4){k=b.className;
if(k){k=nclk.getClassTag(k)
}else{break
}}}if(k.indexOf("=")>0){m=k.split("=");
if(m[0].charAt(0)!="N"){continue
}i=m[0].substring(1);
if(i=="I"&&a==0){f=m[1].split(":");
if(f[0]=="a"){if(f[1]!=""&&f[1]!=undefined){e=f[1]
}}a++;
break
}else{if(i=="E"&&a==1){if(a==1){f=m[1].split(":");
if(f[0]=="a"){if(e==""){e=f[1]
}else{e=((f[1]==undefined)?"":f[1])+"."+e
}}}a++;
break
}else{if((i=="EI"||i=="IE")&&a==0){f=m[1].split(":");
if(f[0]=="a"){e=f[1]
}a+=2;
break
}}}}if(nclk_evt==3||nclk_evt==4){break
}}j++;
if(a>=2){l=e;
break
}if(j>=nclkMaxDepth){l="";
break
}}return l
};
nclk.getServiceType=function(){var a;
if(typeof g_ssc!="undefined"&&typeof g_query!="undefined"){a=1
}else{a=0
}return a
};
nclk.parseNCStr=function(h,o){var a;
var m;
var l;
var e;
var b="",k="",p="",f="",n=0;
var g=2;
o=nclk.trim(o);
switch(h){case 4:g=4;
break;
case 5:g=3;
break;
case 6:g=2;
break;
case 1:case 2:case 3:default:return
}m=o.substring(g);
l=m.split(",");
for(var j=0;
j<l.length;
j++){e=l[j].split(":");
if(e[0]=="a"){b=e[1]
}else{if(e[0]=="r"){k=e[1]
}else{if(e[0]=="i"){p=e[1]
}else{if(e[0]=="g"){f=e[1]
}else{if(e[0]=="t"){n=e[1]
}}}}}}return[b,k,p,f,n]
};
nclk.trim=function(a){return a.replace(/^\s\s*/,"").replace(/\s\s*$/,"")
};
nclk.getClassTag=function(g){var f="";
if(typeof(g)=="string"){f=g
}else{if(g.baseVal){f=g.baseVal
}else{f=""+g
}}var b=new RegExp("N[^=]*=([^ $]*)");
var e=f.match(b);
var a="";
if(e){a=e[0]
}return a
};
function nclk_do(){if(nclk_evt==1||nclk_evt==2||nclk_evt==3||nclk_evt==4){nclk.addEvent(document,"click",nclk.generateCC)
}}nclk.getScrollBarWidth=function(){var e=document.createElement("p");
e.style.width="200px";
e.style.height="200px";
var f=document.createElement("div");
f.style.position="absolute";
f.style.top="0px";
f.style.left="0px";
f.style.visibility="hidden";
f.style.width="200px";
f.style.height="150px";
f.style.overflow="hidden";
f.appendChild(e);
document.body.appendChild(f);
var b=e.offsetWidth;
f.style.overflow="scroll";
var a=e.offsetWidth;
if(b==a){a=f.clientWidth
}document.body.removeChild(f);
return(b-a)
};
nclk.findPos=function(b){var f=curtop=0;
try{if(b.offsetParent){do{f+=b.offsetLeft;
curtop+=b.offsetTop
}while(b=b.offsetParent)
}else{if(b.x||b.y){if(b.x){f+=b.x
}if(b.y){curtop+=b.y
}}}}catch(a){}return[f,curtop]
};
nclk.windowSize=function(e){if(!e){e=window
}var a=0;
if(e.innerWidth){a=e.innerWidth;
if(typeof(e.innerWidth)=="number"){var b=nclk.getScrollBarWidth();
a=e.innerWidth-b
}}else{if(document.documentElement&&document.documentElement.clientWidth){a=document.documentElement.clientWidth
}else{if(document.body&&(document.body.clientWidth||document.body.clientHeight)){a=document.body.clientWidth
}}}return a
};
nclk.checkIframe=function(i){var f=document.URL;
var h=i.parentNode;
var a;
var b;
if(h==null||h==undefined){return false
}while(1){if(h.nodeName.toLowerCase()=="#document"){if(h.parentWindow){a=h.parentWindow
}else{a=h.defaultView
}try{if(a.frameElement!=null&&a.frameElement!=undefined){if(a.frameElement.nodeName.toLowerCase()=="iframe"){b=a.frameElement.id;
if(!b){return false
}return b
}else{return false
}}else{return false
}}catch(g){return false
}}else{h=h.parentNode;
if(h==null||h==undefined){return false
}}}};
nclk.absPath=function(a){var e=window.location;
var f=e.href;
var b=e.protocol+"//"+e.host;
if(a.charAt(0)=="/"){if(a.charAt(1)=="/"){return e.protocol+a
}else{return b+a
}}if(/^\.\//.test(a)){a=a.substring(2)
}while(/^\.\./.test(a)){if(b!=f){f=f.substring(0,f.lastIndexOf("/"))
}a=a.substring(3)
}if(b!=f){if(a.charAt(0)!="?"&&a.charAt(0)!="#"){f=f.substring(0,f.lastIndexOf("/"))
}}if(a.charAt(0)=="/"){return f+a
}else{if(a.charAt(0)=="?"){f=f.split("?")[0];
return f+a
}else{if(a.charAt(0)=="#"){f=f.split("#")[0];
return f+a
}else{return f+"/"+a
}}}};
function clickcr(g,H,u,D,E,A,P){if(arguments.length==1){if(typeof nclk.generateCC!="undefined"){nclk.generateCC(arguments[0])
}return
}var F=navigator.userAgent.toLowerCase();
var k=(F.indexOf("safari")!=-1?true:false);
var C=/msie/.test(F)&&!/opera/.test(F);
var l=(window.location.protocol=="https:")?"https:":"http:";
var a=ccsrv.substring(ccsrv.indexOf(".")+1);
var t=window.event?window.event:E;
var s=-1;
var q=-1;
var p=-1;
var n=-1;
var S,f,i;
var r,j,m;
var M,J,I,L,z,B,w;
var O;
var G=0;
if(!A){A="0"
}else{A=String(A)
}if(!P){P=""
}if(A.indexOf("n")==0){G=0
}else{if(window.g_ssc!=undefined&&window.g_query!=undefined){G=1
}else{G=0
}}try{L=nclk.windowSize(window);
i=nclk.checkIframe(g);
if(i){var v=nclk.findPos(document.getElementById(i));
if(t.clientX&&t.clientX!=undefined){S=document.body;
if(S.clientLeft&&S.clientTop){ifrSx=t.clientX-S.clientLeft;
ifrSy=t.clientY-S.clientTop
}else{ifrSx=t.clientX;
ifrSy=t.clientY
}}p=v[0]+ifrSx;
n=v[1]+ifrSy;
if(document.body&&(document.body.scrollTop||document.body.scrollLeft)){S=document.body;
s=p-S.scrollLeft;
q=n-S.scrollTop
}else{if(document.documentElement&&(document.documentElement.scrollTop||document.documentElement.scrollLeft)){f=document.documentElement;
s=p-f.scrollLeft;
q=n-f.scrollTop
}else{s=p;
q=n
}}}else{if(t.clientX&&t.clientX!=undefined){S=document.body;
if(S.clientLeft&&S.clientTop){s=t.clientX-S.clientLeft;
q=t.clientY-S.clientTop
}else{s=t.clientX;
q=t.clientY
}}if(document.body&&(document.body.scrollTop||document.body.scrollLeft)){p=document.body.scrollLeft+(s<0?0:s);
n=document.body.scrollTop+(q<0?0:q)
}else{if(document.documentElement&&(document.documentElement.scrollTop||document.documentElement.scrollLeft)){f=document.documentElement;
if(f.scrollLeft!=undefined){p=f.scrollLeft+(s<0?0:s)
}if(f.scrollTop!=undefined){n=f.scrollTop+(q<0?0:q)
}}else{p=(s<0?0:s);
n=(q<0?0:q)
}}if(t.pageX){p=t.pageX
}if(t.pageY){n=t.pageY
}}}catch(Q){}if(H==""||typeof H=="undefined"){return
}if(A.indexOf("1")!=-1){r=0
}else{if(g.href){z=g.nodeName.toLowerCase();
B=g.href.toLowerCase();
if((g.target&&g.target!="_self"&&g.target!="_top"&&g.target!="_parent")||(B.indexOf("javascript:")!=-1)||(g.getAttribute("href",2)&&g.getAttribute("href",2).charAt(0)=="#")||(B.indexOf("#")!=-1&&(B.substr(0,B.indexOf("#"))==document.URL))||z.toLowerCase()=="img"||C&&window.location.host.indexOf(a)==-1){r=0
}else{r=1
}}else{r=0
}}if(g.href&&g.href.indexOf(l+"//"+ccsrv)==0){j=g.href
}else{j=l+"//"+ccsrv+"/"+nclkModule+"?a="+H+"&r="+D+"&i="+u;
j+="&bw="+L+"&px="+p+"&py="+n+"&sx="+s+"&sy="+q+"&m="+r;
if(G==0){j+="&nsc="+nsc
}else{if(G==1){j+="&ssc="+g_ssc+"&q="+encodeURIComponent(g_query)+"&s="+g_sid+"&p="+g_pid
}}if(P){j+="&g="+encodeURIComponent(P)
}if(B&&B.indexOf(l+"//"+ccsrv)!=0&&z.toLowerCase()!="img"){var N=g.href;
if(g.outerHTML&&!window.XMLHttpRequest){N=(/\shref=\"([^\"]+)\"/i.test(g.outerHTML)&&RegExp.$1).replace(/\\/g,"\\\\").replace(/%([A-Z0-9]{2})/ig,"\\$1");
(d=document.createElement("div")).innerHTML=N;
N=d.innerText.replace(/\\([A-Z0-9]{2})/gi,"%$1").replace(/\\\\/g,"\\")
}B=N.toLowerCase();
if(B.indexOf("http:")==0||B.indexOf("https:")==0||B.indexOf("javascript:")==0){j+="&u="+encodeURIComponent(N)
}else{w=nclk.absPath(N);
j+="&u="+encodeURIComponent(w)
}}else{if(g.href){if(g.href.length>0){j+="&u="+encodeURIComponent(g.href)
}else{j+="&u=about%3Ablank"
}}else{j+="&u=about%3Ablank"
}}}if(r==1){O=g.innerHTML;
g.href=j;
if(g.innerHTML!=O){g.innerHTML=O
}}else{if(document.images){var K=new Date().getTime();
j+="&time="+K;
if(k&&!g.href){var R=c=new Date();
while((R.getTime()-c.getTime())<100){R=new Date()
}var M=new Image();
nclkImg.push(M);
M.src=j
}else{var M=new Image();
nclkImg.push(M);
M.src=j
}}}return true
};(function(glob){var version="0.3.4",has="hasOwnProperty",separator=/[\.\/]/,wildcard="*",fun=function(){},numsort=function(a,b){return a-b
},current_event,stop,events={n:{}},eve=function(name,scope){var e=events,oldstop=stop,args=Array.prototype.slice.call(arguments,2),listeners=eve.listeners(name),z=0,f=false,l,indexed=[],queue={},out=[],ce=current_event,errors=[];
current_event=name;
stop=0;
for(var i=0,ii=listeners.length;
i<ii;
i++){if("zIndex" in listeners[i]){indexed.push(listeners[i].zIndex);
if(listeners[i].zIndex<0){queue[listeners[i].zIndex]=listeners[i]
}}}indexed.sort(numsort);
while(indexed[z]<0){l=queue[indexed[z++]];
out.push(l.apply(scope,args));
if(stop){stop=oldstop;
return out
}}for(i=0;
i<ii;
i++){l=listeners[i];
if("zIndex" in l){if(l.zIndex==indexed[z]){out.push(l.apply(scope,args));
if(stop){break
}do{z++;
l=queue[indexed[z]];
l&&out.push(l.apply(scope,args));
if(stop){break
}}while(l)
}else{queue[l.zIndex]=l
}}else{out.push(l.apply(scope,args));
if(stop){break
}}}stop=oldstop;
current_event=ce;
return out.length?out:null
};
eve.listeners=function(name){var names=name.split(separator),e=events,item,items,k,i,ii,j,jj,nes,es=[e],out=[];
for(i=0,ii=names.length;
i<ii;
i++){nes=[];
for(j=0,jj=es.length;
j<jj;
j++){e=es[j].n;
items=[e[names[i]],e[wildcard]];
k=2;
while(k--){item=items[k];
if(item){nes.push(item);
out=out.concat(item.f||[])
}}}es=nes
}return out
};
eve.on=function(name,f){var names=name.split(separator),e=events;
for(var i=0,ii=names.length;
i<ii;
i++){e=e.n;
!e[names[i]]&&(e[names[i]]={n:{}});
e=e[names[i]]
}e.f=e.f||[];
for(i=0,ii=e.f.length;
i<ii;
i++){if(e.f[i]==f){return fun
}}e.f.push(f);
return function(zIndex){if(+zIndex==+zIndex){f.zIndex=+zIndex
}}
};
eve.stop=function(){stop=1
};
eve.nt=function(subname){if(subname){return new RegExp("(?:\\.|\\/|^)"+subname+"(?:\\.|\\/|$)").test(current_event)
}return current_event
};
eve.off=eve.unbind=function(name,f){var names=name.split(separator),e,key,splice,i,ii,j,jj,cur=[events];
for(i=0,ii=names.length;
i<ii;
i++){for(j=0;
j<cur.length;
j+=splice.length-2){splice=[j,1];
e=cur[j].n;
if(names[i]!=wildcard){if(e[names[i]]){splice.push(e[names[i]])
}}else{for(key in e){if(e[has](key)){splice.push(e[key])
}}}cur.splice.apply(cur,splice)
}}for(i=0,ii=cur.length;
i<ii;
i++){e=cur[i];
while(e.n){if(f){if(e.f){for(j=0,jj=e.f.length;
j<jj;
j++){if(e.f[j]==f){e.f.splice(j,1);
break
}}!e.f.length&&delete e.f
}for(key in e.n){if(e.n[has](key)&&e.n[key].f){var funcs=e.n[key].f;
for(j=0,jj=funcs.length;
j<jj;
j++){if(funcs[j]==f){funcs.splice(j,1);
break
}}!funcs.length&&delete e.n[key].f
}}}else{delete e.f;
for(key in e.n){if(e.n[has](key)&&e.n[key].f){delete e.n[key].f
}}}e=e.n
}}};
eve.once=function(name,f){var f2=function(){var res=f.apply(this,arguments);
eve.unbind(name,f2);
return res
};
return eve.on(name,f2)
};
eve.version=version;
eve.toString=function(){return"You are running Eve "+version
};
(typeof module!="undefined"&&module.exports)?(module.exports=eve):(typeof define!="undefined"?(define("eve",[],function(){return eve
})):(glob.eve=eve))
})(this);
(function(){function R(first){if(R.is(first,"function")){return loaded?first():eve.on("raphael.DOMload",first)
}else{if(R.is(first,array)){return R._engine.create[apply](R,first.splice(0,3+R.is(first[0],nu))).add(first)
}else{var args=Array.prototype.slice.call(arguments,0);
if(R.is(args[args.length-1],"function")){var f=args.pop();
return loaded?f.call(R._engine.create[apply](R,args)):eve.on("raphael.DOMload",function(){f.call(R._engine.create[apply](R,args))
})
}else{return R._engine.create[apply](R,arguments)
}}}}R.version="2.1.0";
R.eve=eve;
var loaded,separator=/[, ]+/,elements={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},formatrg=/\{(\d+)\}/g,proto="prototype",has="hasOwnProperty",g={doc:document,win:window},oldRaphael={was:Object.prototype[has].call(g.win,"Raphael"),is:g.win.Raphael},Paper=function(){this.ca=this.customAttributes={}
},paperproto,appendChild="appendChild",apply="apply",concat="concat",supportsTouch="createTouch" in g.doc,E="",S=" ",Str=String,split="split",events="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[split](S),touchMap={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},lowerCase=Str.prototype.toLowerCase,math=Math,mmax=math.max,mmin=math.min,abs=math.abs,pow=math.pow,PI=math.PI,nu="number",string="string",array="array",toString="toString",fillString="fill",objectToString=Object.prototype.toString,paper={},push="push",ISURL=R._ISURL=/^url\(['"]?([^\)]+?)['"]?\)$/i,colourRegExp=/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,isnan={"NaN":1,"Infinity":1,"-Infinity":1},bezierrg=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,round=math.round,setAttribute="setAttribute",toFloat=parseFloat,toInt=parseInt,upperCase=Str.prototype.toUpperCase,availableAttrs=R._availableAttrs={"arrow-end":"none","arrow-start":"none",blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:'10px "Arial"',"font-family":'"Arial"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/","letter-spacing":0,opacity:1,path:"M0,0",r:0,rx:0,ry:0,src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",transform:"",width:0,x:0,y:0},availableAnimAttrs=R._availableAnimAttrs={blur:nu,"clip-rect":"csv",cx:nu,cy:nu,fill:"colour","fill-opacity":nu,"font-size":nu,height:nu,opacity:nu,path:"path",r:nu,rx:nu,ry:nu,stroke:"colour","stroke-opacity":nu,"stroke-width":nu,transform:"transform",width:nu,x:nu,y:nu},whitespace=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]/g,commaSpaces=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,hsrg={hs:1,rg:1},p2s=/,?([achlmqrstvxz]),?/gi,pathCommand=/([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,tCommand=/([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,pathValues=/(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/ig,radial_gradient=R._radial_gradient=/^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,eldata={},sortByKey=function(a,b){return a.key-b.key
},sortByNumber=function(a,b){return toFloat(a)-toFloat(b)
},fun=function(){},pipe=function(x){return x
},rectPath=R._rectPath=function(x,y,w,h,r){if(r){return[["M",x+r,y],["l",w-r*2,0],["a",r,r,0,0,1,r,r],["l",0,h-r*2],["a",r,r,0,0,1,-r,r],["l",r*2-w,0],["a",r,r,0,0,1,-r,-r],["l",0,r*2-h],["a",r,r,0,0,1,r,-r],["z"]]
}return[["M",x,y],["l",w,0],["l",0,h],["l",-w,0],["z"]]
},ellipsePath=function(x,y,rx,ry){if(ry==null){ry=rx
}return[["M",x,y],["m",0,-ry],["a",rx,ry,0,1,1,0,2*ry],["a",rx,ry,0,1,1,0,-2*ry],["z"]]
},getPath=R._getPath={path:function(el){return el.attr("path")
},circle:function(el){var a=el.attrs;
return ellipsePath(a.cx,a.cy,a.r)
},ellipse:function(el){var a=el.attrs;
return ellipsePath(a.cx,a.cy,a.rx,a.ry)
},rect:function(el){var a=el.attrs;
return rectPath(a.x,a.y,a.width,a.height,a.r)
},image:function(el){var a=el.attrs;
return rectPath(a.x,a.y,a.width,a.height)
},text:function(el){var bbox=el._getBBox();
return rectPath(bbox.x,bbox.y,bbox.width,bbox.height)
}},mapPath=R.mapPath=function(path,matrix){if(!matrix){return path
}var x,y,i,j,ii,jj,pathi;
path=path2curve(path);
for(i=0,ii=path.length;
i<ii;
i++){pathi=path[i];
for(j=1,jj=pathi.length;
j<jj;
j+=2){x=matrix.x(pathi[j],pathi[j+1]);
y=matrix.y(pathi[j],pathi[j+1]);
pathi[j]=x;
pathi[j+1]=y
}}return path
};
R._g=g;
R.type=(g.win.SVGAngle||g.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML");
if(R.type=="VML"){var d=g.doc.createElement("div"),b;
d.innerHTML='<v:shape adj="1"/>';
b=d.firstChild;
b.style.behavior="url(#default#VML)";
if(!(b&&typeof b.adj=="object")){return(R.type=E)
}d=null
}R.svg=!(R.vml=R.type=="VML");
R._Paper=Paper;
R.fn=paperproto=Paper.prototype=R.prototype;
R._id=0;
R._oid=0;
R.is=function(o,type){type=lowerCase.call(type);
if(type=="finite"){return !isnan[has](+o)
}if(type=="array"){return o instanceof Array
}return(type=="null"&&o===null)||(type==typeof o&&o!==null)||(type=="object"&&o===Object(o))||(type=="array"&&Array.isArray&&Array.isArray(o))||objectToString.call(o).slice(8,-1).toLowerCase()==type
};
function clone(obj){if(Object(obj)!==obj){return obj
}var res=new obj.constructor;
for(var key in obj){if(obj[has](key)){res[key]=clone(obj[key])
}}return res
}R.angle=function(x1,y1,x2,y2,x3,y3){if(x3==null){var x=x1-x2,y=y1-y2;
if(!x&&!y){return 0
}return(180+math.atan2(-y,-x)*180/PI+360)%360
}else{return R.angle(x1,y1,x3,y3)-R.angle(x2,y2,x3,y3)
}};
R.rad=function(deg){return deg%360*PI/180
};
R.deg=function(rad){return rad*180/PI%360
};
R.snapTo=function(values,value,tolerance){tolerance=R.is(tolerance,"finite")?tolerance:10;
if(R.is(values,array)){var i=values.length;
while(i--){if(abs(values[i]-value)<=tolerance){return values[i]
}}}else{values=+values;
var rem=value%values;
if(rem<tolerance){return value-rem
}if(rem>values-tolerance){return value-rem+values
}}return value
};
var createUUID=R.createUUID=(function(uuidRegEx,uuidReplacer){return function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(uuidRegEx,uuidReplacer).toUpperCase()
}
})(/[xy]/g,function(c){var r=math.random()*16|0,v=c=="x"?r:(r&3|8);
return v.toString(16)
});
R.setWindow=function(newwin){eve("raphael.setWindow",R,g.win,newwin);
g.win=newwin;
g.doc=g.win.document;
if(R._engine.initWin){R._engine.initWin(g.win)
}};
var toHex=function(color){if(R.vml){var trim=/^\s+|\s+$/g;
var bod;
try{var docum=new ActiveXObject("htmlfile");
docum.write("<body>");
docum.close();
bod=docum.body
}catch(e){bod=createPopup().document.body
}var range=bod.createTextRange();
toHex=cacher(function(color){try{bod.style.color=Str(color).replace(trim,E);
var value=range.queryCommandValue("ForeColor");
value=((value&255)<<16)|(value&65280)|((value&16711680)>>>16);
return"#"+("000000"+value.toString(16)).slice(-6)
}catch(e){return"none"
}})
}else{var i=g.doc.createElement("i");
i.title="Rapha\xebl Colour Picker";
i.style.display="none";
g.doc.body.appendChild(i);
toHex=cacher(function(color){i.style.color=color;
return g.doc.defaultView.getComputedStyle(i,E).getPropertyValue("color")
})
}return toHex(color)
},hsbtoString=function(){return"hsb("+[this.h,this.s,this.b]+")"
},hsltoString=function(){return"hsl("+[this.h,this.s,this.l]+")"
},rgbtoString=function(){return this.hex
},prepareRGB=function(r,g,b){if(g==null&&R.is(r,"object")&&"r" in r&&"g" in r&&"b" in r){b=r.b;
g=r.g;
r=r.r
}if(g==null&&R.is(r,string)){var clr=R.getRGB(r);
r=clr.r;
g=clr.g;
b=clr.b
}if(r>1||g>1||b>1){r/=255;
g/=255;
b/=255
}return[r,g,b]
},packageRGB=function(r,g,b,o){r*=255;
g*=255;
b*=255;
var rgb={r:r,g:g,b:b,hex:R.rgb(r,g,b),toString:rgbtoString};
R.is(o,"finite")&&(rgb.opacity=o);
return rgb
};
R.color=function(clr){var rgb;
if(R.is(clr,"object")&&"h" in clr&&"s" in clr&&"b" in clr){rgb=R.hsb2rgb(clr);
clr.r=rgb.r;
clr.g=rgb.g;
clr.b=rgb.b;
clr.hex=rgb.hex
}else{if(R.is(clr,"object")&&"h" in clr&&"s" in clr&&"l" in clr){rgb=R.hsl2rgb(clr);
clr.r=rgb.r;
clr.g=rgb.g;
clr.b=rgb.b;
clr.hex=rgb.hex
}else{if(R.is(clr,"string")){clr=R.getRGB(clr)
}if(R.is(clr,"object")&&"r" in clr&&"g" in clr&&"b" in clr){rgb=R.rgb2hsl(clr);
clr.h=rgb.h;
clr.s=rgb.s;
clr.l=rgb.l;
rgb=R.rgb2hsb(clr);
clr.v=rgb.b
}else{clr={hex:"none"};
clr.r=clr.g=clr.b=clr.h=clr.s=clr.v=clr.l=-1
}}}clr.toString=rgbtoString;
return clr
};
R.hsb2rgb=function(h,s,v,o){if(this.is(h,"object")&&"h" in h&&"s" in h&&"b" in h){v=h.b;
s=h.s;
h=h.h;
o=h.o
}h*=360;
var R,G,B,X,C;
h=(h%360)/60;
C=v*s;
X=C*(1-abs(h%2-1));
R=G=B=v-C;
h=~~h;
R+=[C,X,0,0,X,C][h];
G+=[X,C,C,X,0,0][h];
B+=[0,0,X,C,C,X][h];
return packageRGB(R,G,B,o)
};
R.hsl2rgb=function(h,s,l,o){if(this.is(h,"object")&&"h" in h&&"s" in h&&"l" in h){l=h.l;
s=h.s;
h=h.h
}if(h>1||s>1||l>1){h/=360;
s/=100;
l/=100
}h*=360;
var R,G,B,X,C;
h=(h%360)/60;
C=2*s*(l<0.5?l:1-l);
X=C*(1-abs(h%2-1));
R=G=B=l-C/2;
h=~~h;
R+=[C,X,0,0,X,C][h];
G+=[X,C,C,X,0,0][h];
B+=[0,0,X,C,C,X][h];
return packageRGB(R,G,B,o)
};
R.rgb2hsb=function(r,g,b){b=prepareRGB(r,g,b);
r=b[0];
g=b[1];
b=b[2];
var H,S,V,C;
V=mmax(r,g,b);
C=V-mmin(r,g,b);
H=(C==0?null:V==r?(g-b)/C:V==g?(b-r)/C+2:(r-g)/C+4);
H=((H+360)%6)*60/360;
S=C==0?0:C/V;
return{h:H,s:S,b:V,toString:hsbtoString}
};
R.rgb2hsl=function(r,g,b){b=prepareRGB(r,g,b);
r=b[0];
g=b[1];
b=b[2];
var H,S,L,M,m,C;
M=mmax(r,g,b);
m=mmin(r,g,b);
C=M-m;
H=(C==0?null:M==r?(g-b)/C:M==g?(b-r)/C+2:(r-g)/C+4);
H=((H+360)%6)*60/360;
L=(M+m)/2;
S=(C==0?0:L<0.5?C/(2*L):C/(2-2*L));
return{h:H,s:S,l:L,toString:hsltoString}
};
R._path2string=function(){return this.join(",").replace(p2s,"$1")
};
function repush(array,item){for(var i=0,ii=array.length;
i<ii;
i++){if(array[i]===item){return array.push(array.splice(i,1)[0])
}}}function cacher(f,scope,postprocessor){function newf(){var arg=Array.prototype.slice.call(arguments,0),args=arg.join("\u2400"),cache=newf.cache=newf.cache||{},count=newf.count=newf.count||[];
if(cache[has](args)){repush(count,args);
return postprocessor?postprocessor(cache[args]):cache[args]
}count.length>=1000&&delete cache[count.shift()];
count.push(args);
cache[args]=f[apply](scope,arg);
return postprocessor?postprocessor(cache[args]):cache[args]
}return newf
}var preload=R._preload=function(src,f){var img=g.doc.createElement("img");
img.style.cssText="position:absolute;left:-9999em;top:-9999em";
img.onload=function(){f.call(this);
this.onload=null;
g.doc.body.removeChild(this)
};
img.onerror=function(){g.doc.body.removeChild(this)
};
g.doc.body.appendChild(img);
img.src=src
};
function clrToString(){return this.hex
}R.getRGB=cacher(function(colour){if(!colour||!!((colour=Str(colour)).indexOf("-")+1)){return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:clrToString}
}if(colour=="none"){return{r:-1,g:-1,b:-1,hex:"none",toString:clrToString}
}!(hsrg[has](colour.toLowerCase().substring(0,2))||colour.charAt()=="#")&&(colour=toHex(colour));
var res,red,green,blue,opacity,t,values,rgb=colour.match(colourRegExp);
if(rgb){if(rgb[2]){blue=toInt(rgb[2].substring(5),16);
green=toInt(rgb[2].substring(3,5),16);
red=toInt(rgb[2].substring(1,3),16)
}if(rgb[3]){blue=toInt((t=rgb[3].charAt(3))+t,16);
green=toInt((t=rgb[3].charAt(2))+t,16);
red=toInt((t=rgb[3].charAt(1))+t,16)
}if(rgb[4]){values=rgb[4][split](commaSpaces);
red=toFloat(values[0]);
values[0].slice(-1)=="%"&&(red*=2.55);
green=toFloat(values[1]);
values[1].slice(-1)=="%"&&(green*=2.55);
blue=toFloat(values[2]);
values[2].slice(-1)=="%"&&(blue*=2.55);
rgb[1].toLowerCase().slice(0,4)=="rgba"&&(opacity=toFloat(values[3]));
values[3]&&values[3].slice(-1)=="%"&&(opacity/=100)
}if(rgb[5]){values=rgb[5][split](commaSpaces);
red=toFloat(values[0]);
values[0].slice(-1)=="%"&&(red*=2.55);
green=toFloat(values[1]);
values[1].slice(-1)=="%"&&(green*=2.55);
blue=toFloat(values[2]);
values[2].slice(-1)=="%"&&(blue*=2.55);
(values[0].slice(-3)=="deg"||values[0].slice(-1)=="\xb0")&&(red/=360);
rgb[1].toLowerCase().slice(0,4)=="hsba"&&(opacity=toFloat(values[3]));
values[3]&&values[3].slice(-1)=="%"&&(opacity/=100);
return R.hsb2rgb(red,green,blue,opacity)
}if(rgb[6]){values=rgb[6][split](commaSpaces);
red=toFloat(values[0]);
values[0].slice(-1)=="%"&&(red*=2.55);
green=toFloat(values[1]);
values[1].slice(-1)=="%"&&(green*=2.55);
blue=toFloat(values[2]);
values[2].slice(-1)=="%"&&(blue*=2.55);
(values[0].slice(-3)=="deg"||values[0].slice(-1)=="\xb0")&&(red/=360);
rgb[1].toLowerCase().slice(0,4)=="hsla"&&(opacity=toFloat(values[3]));
values[3]&&values[3].slice(-1)=="%"&&(opacity/=100);
return R.hsl2rgb(red,green,blue,opacity)
}rgb={r:red,g:green,b:blue,toString:clrToString};
rgb.hex="#"+(16777216|blue|(green<<8)|(red<<16)).toString(16).slice(1);
R.is(opacity,"finite")&&(rgb.opacity=opacity);
return rgb
}return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:clrToString}
},R);
R.hsb=cacher(function(h,s,b){return R.hsb2rgb(h,s,b).hex
});
R.hsl=cacher(function(h,s,l){return R.hsl2rgb(h,s,l).hex
});
R.rgb=cacher(function(r,g,b){return"#"+(16777216|b|(g<<8)|(r<<16)).toString(16).slice(1)
});
R.getColor=function(value){var start=this.getColor.start=this.getColor.start||{h:0,s:1,b:value||0.75},rgb=this.hsb2rgb(start.h,start.s,start.b);
start.h+=0.075;
if(start.h>1){start.h=0;
start.s-=0.2;
start.s<=0&&(this.getColor.start={h:0,s:1,b:start.b})
}return rgb.hex
};
R.getColor.reset=function(){delete this.start
};
function catmullRom2bezier(crp,z){var d=[];
for(var i=0,iLen=crp.length;
iLen-2*!z>i;
i+=2){var p=[{x:+crp[i-2],y:+crp[i-1]},{x:+crp[i],y:+crp[i+1]},{x:+crp[i+2],y:+crp[i+3]},{x:+crp[i+4],y:+crp[i+5]}];
if(z){if(!i){p[0]={x:+crp[iLen-2],y:+crp[iLen-1]}
}else{if(iLen-4==i){p[3]={x:+crp[0],y:+crp[1]}
}else{if(iLen-2==i){p[2]={x:+crp[0],y:+crp[1]};
p[3]={x:+crp[2],y:+crp[3]}
}}}}else{if(iLen-4==i){p[3]=p[2]
}else{if(!i){p[0]={x:+crp[i],y:+crp[i+1]}
}}}d.push(["C",(-p[0].x+6*p[1].x+p[2].x)/6,(-p[0].y+6*p[1].y+p[2].y)/6,(p[1].x+6*p[2].x-p[3].x)/6,(p[1].y+6*p[2].y-p[3].y)/6,p[2].x,p[2].y])
}return d
}R.parsePathString=function(pathString){if(!pathString){return null
}var pth=paths(pathString);
if(pth.arr){return pathClone(pth.arr)
}var paramCounts={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},data=[];
if(R.is(pathString,array)&&R.is(pathString[0],array)){data=pathClone(pathString)
}if(!data.length){Str(pathString).replace(pathCommand,function(a,b,c){var params=[],name=b.toLowerCase();
c.replace(pathValues,function(a,b){b&&params.push(+b)
});
if(name=="m"&&params.length>2){data.push([b][concat](params.splice(0,2)));
name="l";
b=b=="m"?"l":"L"
}if(name=="r"){data.push([b][concat](params))
}else{while(params.length>=paramCounts[name]){data.push([b][concat](params.splice(0,paramCounts[name])));
if(!paramCounts[name]){break
}}}})
}data.toString=R._path2string;
pth.arr=pathClone(data);
return data
};
R.parseTransformString=cacher(function(TString){if(!TString){return null
}var paramCounts={r:3,s:4,t:2,m:6},data=[];
if(R.is(TString,array)&&R.is(TString[0],array)){data=pathClone(TString)
}if(!data.length){Str(TString).replace(tCommand,function(a,b,c){var params=[],name=lowerCase.call(b);
c.replace(pathValues,function(a,b){b&&params.push(+b)
});
data.push([b][concat](params))
})
}data.toString=R._path2string;
return data
});
var paths=function(ps){var p=paths.ps=paths.ps||{};
if(p[ps]){p[ps].sleep=100
}else{p[ps]={sleep:100}
}setTimeout(function(){for(var key in p){if(p[has](key)&&key!=ps){p[key].sleep--;
!p[key].sleep&&delete p[key]
}}});
return p[ps]
};
R.findDotsAtSegment=function(p1x,p1y,c1x,c1y,c2x,c2y,p2x,p2y,t){var t1=1-t,t13=pow(t1,3),t12=pow(t1,2),t2=t*t,t3=t2*t,x=t13*p1x+t12*3*t*c1x+t1*3*t*t*c2x+t3*p2x,y=t13*p1y+t12*3*t*c1y+t1*3*t*t*c2y+t3*p2y,mx=p1x+2*t*(c1x-p1x)+t2*(c2x-2*c1x+p1x),my=p1y+2*t*(c1y-p1y)+t2*(c2y-2*c1y+p1y),nx=c1x+2*t*(c2x-c1x)+t2*(p2x-2*c2x+c1x),ny=c1y+2*t*(c2y-c1y)+t2*(p2y-2*c2y+c1y),ax=t1*p1x+t*c1x,ay=t1*p1y+t*c1y,cx=t1*c2x+t*p2x,cy=t1*c2y+t*p2y,alpha=(90-math.atan2(mx-nx,my-ny)*180/PI);
(mx>nx||my<ny)&&(alpha+=180);
return{x:x,y:y,m:{x:mx,y:my},n:{x:nx,y:ny},start:{x:ax,y:ay},end:{x:cx,y:cy},alpha:alpha}
};
R.bezierBBox=function(p1x,p1y,c1x,c1y,c2x,c2y,p2x,p2y){if(!R.is(p1x,"array")){p1x=[p1x,p1y,c1x,c1y,c2x,c2y,p2x,p2y]
}var bbox=curveDim.apply(null,p1x);
return{x:bbox.min.x,y:bbox.min.y,x2:bbox.max.x,y2:bbox.max.y,width:bbox.max.x-bbox.min.x,height:bbox.max.y-bbox.min.y}
};
R.isPointInsideBBox=function(bbox,x,y){return x>=bbox.x&&x<=bbox.x2&&y>=bbox.y&&y<=bbox.y2
};
R.isBBoxIntersect=function(bbox1,bbox2){var i=R.isPointInsideBBox;
return i(bbox2,bbox1.x,bbox1.y)||i(bbox2,bbox1.x2,bbox1.y)||i(bbox2,bbox1.x,bbox1.y2)||i(bbox2,bbox1.x2,bbox1.y2)||i(bbox1,bbox2.x,bbox2.y)||i(bbox1,bbox2.x2,bbox2.y)||i(bbox1,bbox2.x,bbox2.y2)||i(bbox1,bbox2.x2,bbox2.y2)||(bbox1.x<bbox2.x2&&bbox1.x>bbox2.x||bbox2.x<bbox1.x2&&bbox2.x>bbox1.x)&&(bbox1.y<bbox2.y2&&bbox1.y>bbox2.y||bbox2.y<bbox1.y2&&bbox2.y>bbox1.y)
};
function base3(t,p1,p2,p3,p4){var t1=-3*p1+9*p2-9*p3+3*p4,t2=t*t1+6*p1-12*p2+6*p3;
return t*t2-3*p1+3*p2
}function bezlen(x1,y1,x2,y2,x3,y3,x4,y4,z){if(z==null){z=1
}z=z>1?1:z<0?0:z;
var z2=z/2,n=12,Tvalues=[-0.1252,0.1252,-0.3678,0.3678,-0.5873,0.5873,-0.7699,0.7699,-0.9041,0.9041,-0.9816,0.9816],Cvalues=[0.2491,0.2491,0.2335,0.2335,0.2032,0.2032,0.1601,0.1601,0.1069,0.1069,0.0472,0.0472],sum=0;
for(var i=0;
i<n;
i++){var ct=z2*Tvalues[i]+z2,xbase=base3(ct,x1,x2,x3,x4),ybase=base3(ct,y1,y2,y3,y4),comb=xbase*xbase+ybase*ybase;
sum+=Cvalues[i]*math.sqrt(comb)
}return z2*sum
}function getTatLen(x1,y1,x2,y2,x3,y3,x4,y4,ll){if(ll<0||bezlen(x1,y1,x2,y2,x3,y3,x4,y4)<ll){return
}var t=1,step=t/2,t2=t-step,l,e=0.01;
l=bezlen(x1,y1,x2,y2,x3,y3,x4,y4,t2);
while(abs(l-ll)>e){step/=2;
t2+=(l<ll?1:-1)*step;
l=bezlen(x1,y1,x2,y2,x3,y3,x4,y4,t2)
}return t2
}function intersect(x1,y1,x2,y2,x3,y3,x4,y4){if(mmax(x1,x2)<mmin(x3,x4)||mmin(x1,x2)>mmax(x3,x4)||mmax(y1,y2)<mmin(y3,y4)||mmin(y1,y2)>mmax(y3,y4)){return
}var nx=(x1*y2-y1*x2)*(x3-x4)-(x1-x2)*(x3*y4-y3*x4),ny=(x1*y2-y1*x2)*(y3-y4)-(y1-y2)*(x3*y4-y3*x4),denominator=(x1-x2)*(y3-y4)-(y1-y2)*(x3-x4);
if(!denominator){return
}var px=nx/denominator,py=ny/denominator,px2=+px.toFixed(2),py2=+py.toFixed(2);
if(px2<+mmin(x1,x2).toFixed(2)||px2>+mmax(x1,x2).toFixed(2)||px2<+mmin(x3,x4).toFixed(2)||px2>+mmax(x3,x4).toFixed(2)||py2<+mmin(y1,y2).toFixed(2)||py2>+mmax(y1,y2).toFixed(2)||py2<+mmin(y3,y4).toFixed(2)||py2>+mmax(y3,y4).toFixed(2)){return
}return{x:px,y:py}
}function inter(bez1,bez2){return interHelper(bez1,bez2)
}function interCount(bez1,bez2){return interHelper(bez1,bez2,1)
}function interHelper(bez1,bez2,justCount){var bbox1=R.bezierBBox(bez1),bbox2=R.bezierBBox(bez2);
if(!R.isBBoxIntersect(bbox1,bbox2)){return justCount?0:[]
}var l1=bezlen.apply(0,bez1),l2=bezlen.apply(0,bez2),n1=~~(l1/5),n2=~~(l2/5),dots1=[],dots2=[],xy={},res=justCount?0:[];
for(var i=0;
i<n1+1;
i++){var p=R.findDotsAtSegment.apply(R,bez1.concat(i/n1));
dots1.push({x:p.x,y:p.y,t:i/n1})
}for(i=0;
i<n2+1;
i++){p=R.findDotsAtSegment.apply(R,bez2.concat(i/n2));
dots2.push({x:p.x,y:p.y,t:i/n2})
}for(i=0;
i<n1;
i++){for(var j=0;
j<n2;
j++){var di=dots1[i],di1=dots1[i+1],dj=dots2[j],dj1=dots2[j+1],ci=abs(di1.x-di.x)<0.001?"y":"x",cj=abs(dj1.x-dj.x)<0.001?"y":"x",is=intersect(di.x,di.y,di1.x,di1.y,dj.x,dj.y,dj1.x,dj1.y);
if(is){if(xy[is.x.toFixed(4)]==is.y.toFixed(4)){continue
}xy[is.x.toFixed(4)]=is.y.toFixed(4);
var t1=di.t+abs((is[ci]-di[ci])/(di1[ci]-di[ci]))*(di1.t-di.t),t2=dj.t+abs((is[cj]-dj[cj])/(dj1[cj]-dj[cj]))*(dj1.t-dj.t);
if(t1>=0&&t1<=1&&t2>=0&&t2<=1){if(justCount){res++
}else{res.push({x:is.x,y:is.y,t1:t1,t2:t2})
}}}}}return res
}R.pathIntersection=function(path1,path2){return interPathHelper(path1,path2)
};
R.pathIntersectionNumber=function(path1,path2){return interPathHelper(path1,path2,1)
};
function interPathHelper(path1,path2,justCount){path1=R._path2curve(path1);
path2=R._path2curve(path2);
var x1,y1,x2,y2,x1m,y1m,x2m,y2m,bez1,bez2,res=justCount?0:[];
for(var i=0,ii=path1.length;
i<ii;
i++){var pi=path1[i];
if(pi[0]=="M"){x1=x1m=pi[1];
y1=y1m=pi[2]
}else{if(pi[0]=="C"){bez1=[x1,y1].concat(pi.slice(1));
x1=bez1[6];
y1=bez1[7]
}else{bez1=[x1,y1,x1,y1,x1m,y1m,x1m,y1m];
x1=x1m;
y1=y1m
}for(var j=0,jj=path2.length;
j<jj;
j++){var pj=path2[j];
if(pj[0]=="M"){x2=x2m=pj[1];
y2=y2m=pj[2]
}else{if(pj[0]=="C"){bez2=[x2,y2].concat(pj.slice(1));
x2=bez2[6];
y2=bez2[7]
}else{bez2=[x2,y2,x2,y2,x2m,y2m,x2m,y2m];
x2=x2m;
y2=y2m
}var intr=interHelper(bez1,bez2,justCount);
if(justCount){res+=intr
}else{for(var k=0,kk=intr.length;
k<kk;
k++){intr[k].segment1=i;
intr[k].segment2=j;
intr[k].bez1=bez1;
intr[k].bez2=bez2
}res=res.concat(intr)
}}}}}return res
}R.isPointInsidePath=function(path,x,y){var bbox=R.pathBBox(path);
return R.isPointInsideBBox(bbox,x,y)&&interPathHelper(path,[["M",x,y],["H",bbox.x2+10]],1)%2==1
};
R._removedFactory=function(methodname){return function(){eve("raphael.log",null,"Rapha\xebl: you are calling to method \u201c"+methodname+"\u201d of removed object",methodname)
}
};
var pathDimensions=R.pathBBox=function(path){var pth=paths(path);
if(pth.bbox){return pth.bbox
}if(!path){return{x:0,y:0,width:0,height:0,x2:0,y2:0}
}path=path2curve(path);
var x=0,y=0,X=[],Y=[],p;
for(var i=0,ii=path.length;
i<ii;
i++){p=path[i];
if(p[0]=="M"){x=p[1];
y=p[2];
X.push(x);
Y.push(y)
}else{var dim=curveDim(x,y,p[1],p[2],p[3],p[4],p[5],p[6]);
X=X[concat](dim.min.x,dim.max.x);
Y=Y[concat](dim.min.y,dim.max.y);
x=p[5];
y=p[6]
}}var xmin=mmin[apply](0,X),ymin=mmin[apply](0,Y),xmax=mmax[apply](0,X),ymax=mmax[apply](0,Y),bb={x:xmin,y:ymin,x2:xmax,y2:ymax,width:xmax-xmin,height:ymax-ymin};
pth.bbox=clone(bb);
return bb
},pathClone=function(pathArray){var res=clone(pathArray);
res.toString=R._path2string;
return res
},pathToRelative=R._pathToRelative=function(pathArray){var pth=paths(pathArray);
if(pth.rel){return pathClone(pth.rel)
}if(!R.is(pathArray,array)||!R.is(pathArray&&pathArray[0],array)){pathArray=R.parsePathString(pathArray)
}var res=[],x=0,y=0,mx=0,my=0,start=0;
if(pathArray[0][0]=="M"){x=pathArray[0][1];
y=pathArray[0][2];
mx=x;
my=y;
start++;
res.push(["M",x,y])
}for(var i=start,ii=pathArray.length;
i<ii;
i++){var r=res[i]=[],pa=pathArray[i];
if(pa[0]!=lowerCase.call(pa[0])){r[0]=lowerCase.call(pa[0]);
switch(r[0]){case"a":r[1]=pa[1];
r[2]=pa[2];
r[3]=pa[3];
r[4]=pa[4];
r[5]=pa[5];
r[6]=+(pa[6]-x).toFixed(3);
r[7]=+(pa[7]-y).toFixed(3);
break;
case"v":r[1]=+(pa[1]-y).toFixed(3);
break;
case"m":mx=pa[1];
my=pa[2];
default:for(var j=1,jj=pa.length;
j<jj;
j++){r[j]=+(pa[j]-((j%2)?x:y)).toFixed(3)
}}}else{r=res[i]=[];
if(pa[0]=="m"){mx=pa[1]+x;
my=pa[2]+y
}for(var k=0,kk=pa.length;
k<kk;
k++){res[i][k]=pa[k]
}}var len=res[i].length;
switch(res[i][0]){case"z":x=mx;
y=my;
break;
case"h":x+=+res[i][len-1];
break;
case"v":y+=+res[i][len-1];
break;
default:x+=+res[i][len-2];
y+=+res[i][len-1]
}}res.toString=R._path2string;
pth.rel=pathClone(res);
return res
},pathToAbsolute=R._pathToAbsolute=function(pathArray){var pth=paths(pathArray);
if(pth.abs){return pathClone(pth.abs)
}if(!R.is(pathArray,array)||!R.is(pathArray&&pathArray[0],array)){pathArray=R.parsePathString(pathArray)
}if(!pathArray||!pathArray.length){return[["M",0,0]]
}var res=[],x=0,y=0,mx=0,my=0,start=0;
if(pathArray[0][0]=="M"){x=+pathArray[0][1];
y=+pathArray[0][2];
mx=x;
my=y;
start++;
res[0]=["M",x,y]
}var crz=pathArray.length==3&&pathArray[0][0]=="M"&&pathArray[1][0].toUpperCase()=="R"&&pathArray[2][0].toUpperCase()=="Z";
for(var r,pa,i=start,ii=pathArray.length;
i<ii;
i++){res.push(r=[]);
pa=pathArray[i];
if(pa[0]!=upperCase.call(pa[0])){r[0]=upperCase.call(pa[0]);
switch(r[0]){case"A":r[1]=pa[1];
r[2]=pa[2];
r[3]=pa[3];
r[4]=pa[4];
r[5]=pa[5];
r[6]=+(pa[6]+x);
r[7]=+(pa[7]+y);
break;
case"V":r[1]=+pa[1]+y;
break;
case"H":r[1]=+pa[1]+x;
break;
case"R":var dots=[x,y][concat](pa.slice(1));
for(var j=2,jj=dots.length;
j<jj;
j++){dots[j]=+dots[j]+x;
dots[++j]=+dots[j]+y
}res.pop();
res=res[concat](catmullRom2bezier(dots,crz));
break;
case"M":mx=+pa[1]+x;
my=+pa[2]+y;
default:for(j=1,jj=pa.length;
j<jj;
j++){r[j]=+pa[j]+((j%2)?x:y)
}}}else{if(pa[0]=="R"){dots=[x,y][concat](pa.slice(1));
res.pop();
res=res[concat](catmullRom2bezier(dots,crz));
r=["R"][concat](pa.slice(-2))
}else{for(var k=0,kk=pa.length;
k<kk;
k++){r[k]=pa[k]
}}}switch(r[0]){case"Z":x=mx;
y=my;
break;
case"H":x=r[1];
break;
case"V":y=r[1];
break;
case"M":mx=r[r.length-2];
my=r[r.length-1];
default:x=r[r.length-2];
y=r[r.length-1]
}}res.toString=R._path2string;
pth.abs=pathClone(res);
return res
},l2c=function(x1,y1,x2,y2){return[x1,y1,x2,y2,x2,y2]
},q2c=function(x1,y1,ax,ay,x2,y2){var _13=1/3,_23=2/3;
return[_13*x1+_23*ax,_13*y1+_23*ay,_13*x2+_23*ax,_13*y2+_23*ay,x2,y2]
},a2c=function(x1,y1,rx,ry,angle,large_arc_flag,sweep_flag,x2,y2,recursive){var _120=PI*120/180,rad=PI/180*(+angle||0),res=[],xy,rotate=cacher(function(x,y,rad){var X=x*math.cos(rad)-y*math.sin(rad),Y=x*math.sin(rad)+y*math.cos(rad);
return{x:X,y:Y}
});
if(!recursive){xy=rotate(x1,y1,-rad);
x1=xy.x;
y1=xy.y;
xy=rotate(x2,y2,-rad);
x2=xy.x;
y2=xy.y;
var cos=math.cos(PI/180*angle),sin=math.sin(PI/180*angle),x=(x1-x2)/2,y=(y1-y2)/2;
var h=(x*x)/(rx*rx)+(y*y)/(ry*ry);
if(h>1){h=math.sqrt(h);
rx=h*rx;
ry=h*ry
}var rx2=rx*rx,ry2=ry*ry,k=(large_arc_flag==sweep_flag?-1:1)*math.sqrt(abs((rx2*ry2-rx2*y*y-ry2*x*x)/(rx2*y*y+ry2*x*x))),cx=k*rx*y/ry+(x1+x2)/2,cy=k*-ry*x/rx+(y1+y2)/2,f1=math.asin(((y1-cy)/ry).toFixed(9)),f2=math.asin(((y2-cy)/ry).toFixed(9));
f1=x1<cx?PI-f1:f1;
f2=x2<cx?PI-f2:f2;
f1<0&&(f1=PI*2+f1);
f2<0&&(f2=PI*2+f2);
if(sweep_flag&&f1>f2){f1=f1-PI*2
}if(!sweep_flag&&f2>f1){f2=f2-PI*2
}}else{f1=recursive[0];
f2=recursive[1];
cx=recursive[2];
cy=recursive[3]
}var df=f2-f1;
if(abs(df)>_120){var f2old=f2,x2old=x2,y2old=y2;
f2=f1+_120*(sweep_flag&&f2>f1?1:-1);
x2=cx+rx*math.cos(f2);
y2=cy+ry*math.sin(f2);
res=a2c(x2,y2,rx,ry,angle,0,sweep_flag,x2old,y2old,[f2,f2old,cx,cy])
}df=f2-f1;
var c1=math.cos(f1),s1=math.sin(f1),c2=math.cos(f2),s2=math.sin(f2),t=math.tan(df/4),hx=4/3*rx*t,hy=4/3*ry*t,m1=[x1,y1],m2=[x1+hx*s1,y1-hy*c1],m3=[x2+hx*s2,y2-hy*c2],m4=[x2,y2];
m2[0]=2*m1[0]-m2[0];
m2[1]=2*m1[1]-m2[1];
if(recursive){return[m2,m3,m4][concat](res)
}else{res=[m2,m3,m4][concat](res).join()[split](",");
var newres=[];
for(var i=0,ii=res.length;
i<ii;
i++){newres[i]=i%2?rotate(res[i-1],res[i],rad).y:rotate(res[i],res[i+1],rad).x
}return newres
}},findDotAtSegment=function(p1x,p1y,c1x,c1y,c2x,c2y,p2x,p2y,t){var t1=1-t;
return{x:pow(t1,3)*p1x+pow(t1,2)*3*t*c1x+t1*3*t*t*c2x+pow(t,3)*p2x,y:pow(t1,3)*p1y+pow(t1,2)*3*t*c1y+t1*3*t*t*c2y+pow(t,3)*p2y}
},curveDim=cacher(function(p1x,p1y,c1x,c1y,c2x,c2y,p2x,p2y){var a=(c2x-2*c1x+p1x)-(p2x-2*c2x+c1x),b=2*(c1x-p1x)-2*(c2x-c1x),c=p1x-c1x,t1=(-b+math.sqrt(b*b-4*a*c))/2/a,t2=(-b-math.sqrt(b*b-4*a*c))/2/a,y=[p1y,p2y],x=[p1x,p2x],dot;
abs(t1)>"1e12"&&(t1=0.5);
abs(t2)>"1e12"&&(t2=0.5);
if(t1>0&&t1<1){dot=findDotAtSegment(p1x,p1y,c1x,c1y,c2x,c2y,p2x,p2y,t1);
x.push(dot.x);
y.push(dot.y)
}if(t2>0&&t2<1){dot=findDotAtSegment(p1x,p1y,c1x,c1y,c2x,c2y,p2x,p2y,t2);
x.push(dot.x);
y.push(dot.y)
}a=(c2y-2*c1y+p1y)-(p2y-2*c2y+c1y);
b=2*(c1y-p1y)-2*(c2y-c1y);
c=p1y-c1y;
t1=(-b+math.sqrt(b*b-4*a*c))/2/a;
t2=(-b-math.sqrt(b*b-4*a*c))/2/a;
abs(t1)>"1e12"&&(t1=0.5);
abs(t2)>"1e12"&&(t2=0.5);
if(t1>0&&t1<1){dot=findDotAtSegment(p1x,p1y,c1x,c1y,c2x,c2y,p2x,p2y,t1);
x.push(dot.x);
y.push(dot.y)
}if(t2>0&&t2<1){dot=findDotAtSegment(p1x,p1y,c1x,c1y,c2x,c2y,p2x,p2y,t2);
x.push(dot.x);
y.push(dot.y)
}return{min:{x:mmin[apply](0,x),y:mmin[apply](0,y)},max:{x:mmax[apply](0,x),y:mmax[apply](0,y)}}
}),path2curve=R._path2curve=cacher(function(path,path2){var pth=!path2&&paths(path);
if(!path2&&pth.curve){return pathClone(pth.curve)
}var p=pathToAbsolute(path),p2=path2&&pathToAbsolute(path2),attrs={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},attrs2={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},processPath=function(path,d){var nx,ny;
if(!path){return["C",d.x,d.y,d.x,d.y,d.x,d.y]
}!(path[0] in {T:1,Q:1})&&(d.qx=d.qy=null);
switch(path[0]){case"M":d.X=path[1];
d.Y=path[2];
break;
case"A":path=["C"][concat](a2c[apply](0,[d.x,d.y][concat](path.slice(1))));
break;
case"S":nx=d.x+(d.x-(d.bx||d.x));
ny=d.y+(d.y-(d.by||d.y));
path=["C",nx,ny][concat](path.slice(1));
break;
case"T":d.qx=d.x+(d.x-(d.qx||d.x));
d.qy=d.y+(d.y-(d.qy||d.y));
path=["C"][concat](q2c(d.x,d.y,d.qx,d.qy,path[1],path[2]));
break;
case"Q":d.qx=path[1];
d.qy=path[2];
path=["C"][concat](q2c(d.x,d.y,path[1],path[2],path[3],path[4]));
break;
case"L":path=["C"][concat](l2c(d.x,d.y,path[1],path[2]));
break;
case"H":path=["C"][concat](l2c(d.x,d.y,path[1],d.y));
break;
case"V":path=["C"][concat](l2c(d.x,d.y,d.x,path[1]));
break;
case"Z":path=["C"][concat](l2c(d.x,d.y,d.X,d.Y));
break
}return path
},fixArc=function(pp,i){if(pp[i].length>7){pp[i].shift();
var pi=pp[i];
while(pi.length){pp.splice(i++,0,["C"][concat](pi.splice(0,6)))
}pp.splice(i,1);
ii=mmax(p.length,p2&&p2.length||0)
}},fixM=function(path1,path2,a1,a2,i){if(path1&&path2&&path1[i][0]=="M"&&path2[i][0]!="M"){path2.splice(i,0,["M",a2.x,a2.y]);
a1.bx=0;
a1.by=0;
a1.x=path1[i][1];
a1.y=path1[i][2];
ii=mmax(p.length,p2&&p2.length||0)
}};
for(var i=0,ii=mmax(p.length,p2&&p2.length||0);
i<ii;
i++){p[i]=processPath(p[i],attrs);
fixArc(p,i);
p2&&(p2[i]=processPath(p2[i],attrs2));
p2&&fixArc(p2,i);
fixM(p,p2,attrs,attrs2,i);
fixM(p2,p,attrs2,attrs,i);
var seg=p[i],seg2=p2&&p2[i],seglen=seg.length,seg2len=p2&&seg2.length;
attrs.x=seg[seglen-2];
attrs.y=seg[seglen-1];
attrs.bx=toFloat(seg[seglen-4])||attrs.x;
attrs.by=toFloat(seg[seglen-3])||attrs.y;
attrs2.bx=p2&&(toFloat(seg2[seg2len-4])||attrs2.x);
attrs2.by=p2&&(toFloat(seg2[seg2len-3])||attrs2.y);
attrs2.x=p2&&seg2[seg2len-2];
attrs2.y=p2&&seg2[seg2len-1]
}if(!p2){pth.curve=pathClone(p)
}return p2?[p,p2]:p
},null,pathClone),parseDots=R._parseDots=cacher(function(gradient){var dots=[];
for(var i=0,ii=gradient.length;
i<ii;
i++){var dot={},par=gradient[i].match(/^([^:]*):?([\d\.]*)/);
dot.color=R.getRGB(par[1]);
if(dot.color.error){return null
}dot.color=dot.color.hex;
par[2]&&(dot.offset=par[2]+"%");
dots.push(dot)
}for(i=1,ii=dots.length-1;
i<ii;
i++){if(!dots[i].offset){var start=toFloat(dots[i-1].offset||0),end=0;
for(var j=i+1;
j<ii;
j++){if(dots[j].offset){end=dots[j].offset;
break
}}if(!end){end=100;
j=ii
}end=toFloat(end);
var d=(end-start)/(j-i+1);
for(;
i<j;
i++){start+=d;
dots[i].offset=start+"%"
}}}return dots
}),tear=R._tear=function(el,paper){el==paper.top&&(paper.top=el.prev);
el==paper.bottom&&(paper.bottom=el.next);
el.next&&(el.next.prev=el.prev);
el.prev&&(el.prev.next=el.next)
},tofront=R._tofront=function(el,paper){if(paper.top===el){return
}tear(el,paper);
el.next=null;
el.prev=paper.top;
paper.top.next=el;
paper.top=el
},toback=R._toback=function(el,paper){if(paper.bottom===el){return
}tear(el,paper);
el.next=paper.bottom;
el.prev=null;
paper.bottom.prev=el;
paper.bottom=el
},insertafter=R._insertafter=function(el,el2,paper){tear(el,paper);
el2==paper.top&&(paper.top=el);
el2.next&&(el2.next.prev=el);
el.next=el2.next;
el.prev=el2;
el2.next=el
},insertbefore=R._insertbefore=function(el,el2,paper){tear(el,paper);
el2==paper.bottom&&(paper.bottom=el);
el2.prev&&(el2.prev.next=el);
el.prev=el2.prev;
el2.prev=el;
el.next=el2
},toMatrix=R.toMatrix=function(path,transform){var bb=pathDimensions(path),el={_:{transform:E},getBBox:function(){return bb
}};
extractTransform(el,transform);
return el.matrix
},transformPath=R.transformPath=function(path,transform){return mapPath(path,toMatrix(path,transform))
},extractTransform=R._extractTransform=function(el,tstr){if(tstr==null){return el._.transform
}tstr=Str(tstr).replace(/\.{3}|\u2026/g,el._.transform||E);
var tdata=R.parseTransformString(tstr),deg=0,dx=0,dy=0,sx=1,sy=1,_=el._,m=new Matrix;
_.transform=tdata||[];
if(tdata){for(var i=0,ii=tdata.length;
i<ii;
i++){var t=tdata[i],tlen=t.length,command=Str(t[0]).toLowerCase(),absolute=t[0]!=command,inver=absolute?m.invert():0,x1,y1,x2,y2,bb;
if(command=="t"&&tlen==3){if(absolute){x1=inver.x(0,0);
y1=inver.y(0,0);
x2=inver.x(t[1],t[2]);
y2=inver.y(t[1],t[2]);
m.translate(x2-x1,y2-y1)
}else{m.translate(t[1],t[2])
}}else{if(command=="r"){if(tlen==2){bb=bb||el.getBBox(1);
m.rotate(t[1],bb.x+bb.width/2,bb.y+bb.height/2);
deg+=t[1]
}else{if(tlen==4){if(absolute){x2=inver.x(t[2],t[3]);
y2=inver.y(t[2],t[3]);
m.rotate(t[1],x2,y2)
}else{m.rotate(t[1],t[2],t[3])
}deg+=t[1]
}}}else{if(command=="s"){if(tlen==2||tlen==3){bb=bb||el.getBBox(1);
m.scale(t[1],t[tlen-1],bb.x+bb.width/2,bb.y+bb.height/2);
sx*=t[1];
sy*=t[tlen-1]
}else{if(tlen==5){if(absolute){x2=inver.x(t[3],t[4]);
y2=inver.y(t[3],t[4]);
m.scale(t[1],t[2],x2,y2)
}else{m.scale(t[1],t[2],t[3],t[4])
}sx*=t[1];
sy*=t[2]
}}}else{if(command=="m"&&tlen==7){m.add(t[1],t[2],t[3],t[4],t[5],t[6])
}}}}_.dirtyT=1;
el.matrix=m
}}el.matrix=m;
_.sx=sx;
_.sy=sy;
_.deg=deg;
_.dx=dx=m.e;
_.dy=dy=m.f;
if(sx==1&&sy==1&&!deg&&_.bbox){_.bbox.x+=+dx;
_.bbox.y+=+dy
}else{_.dirtyT=1
}},getEmpty=function(item){var l=item[0];
switch(l.toLowerCase()){case"t":return[l,0,0];
case"m":return[l,1,0,0,1,0,0];
case"r":if(item.length==4){return[l,0,item[2],item[3]]
}else{return[l,0]
}case"s":if(item.length==5){return[l,1,1,item[3],item[4]]
}else{if(item.length==3){return[l,1,1]
}else{return[l,1]
}}}},equaliseTransform=R._equaliseTransform=function(t1,t2){t2=Str(t2).replace(/\.{3}|\u2026/g,t1);
t1=R.parseTransformString(t1)||[];
t2=R.parseTransformString(t2)||[];
var maxlength=mmax(t1.length,t2.length),from=[],to=[],i=0,j,jj,tt1,tt2;
for(;
i<maxlength;
i++){tt1=t1[i]||getEmpty(t2[i]);
tt2=t2[i]||getEmpty(tt1);
if((tt1[0]!=tt2[0])||(tt1[0].toLowerCase()=="r"&&(tt1[2]!=tt2[2]||tt1[3]!=tt2[3]))||(tt1[0].toLowerCase()=="s"&&(tt1[3]!=tt2[3]||tt1[4]!=tt2[4]))){return
}from[i]=[];
to[i]=[];
for(j=0,jj=mmax(tt1.length,tt2.length);
j<jj;
j++){j in tt1&&(from[i][j]=tt1[j]);
j in tt2&&(to[i][j]=tt2[j])
}}return{from:from,to:to}
};
R._getContainer=function(x,y,w,h){var container;
container=h==null&&!R.is(x,"object")?g.doc.getElementById(x):x;
if(container==null){return
}if(container.tagName){if(y==null){return{container:container,width:container.style.pixelWidth||container.offsetWidth,height:container.style.pixelHeight||container.offsetHeight}
}else{return{container:container,width:y,height:w}
}}return{container:1,x:x,y:y,width:w,height:h}
};
R.pathToRelative=pathToRelative;
R._engine={};
R.path2curve=path2curve;
R.matrix=function(a,b,c,d,e,f){return new Matrix(a,b,c,d,e,f)
};
function Matrix(a,b,c,d,e,f){if(a!=null){this.a=+a;
this.b=+b;
this.c=+c;
this.d=+d;
this.e=+e;
this.f=+f
}else{this.a=1;
this.b=0;
this.c=0;
this.d=1;
this.e=0;
this.f=0
}}(function(matrixproto){matrixproto.add=function(a,b,c,d,e,f){var out=[[],[],[]],m=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],matrix=[[a,c,e],[b,d,f],[0,0,1]],x,y,z,res;
if(a&&a instanceof Matrix){matrix=[[a.a,a.c,a.e],[a.b,a.d,a.f],[0,0,1]]
}for(x=0;
x<3;
x++){for(y=0;
y<3;
y++){res=0;
for(z=0;
z<3;
z++){res+=m[x][z]*matrix[z][y]
}out[x][y]=res
}}this.a=out[0][0];
this.b=out[1][0];
this.c=out[0][1];
this.d=out[1][1];
this.e=out[0][2];
this.f=out[1][2]
};
matrixproto.invert=function(){var me=this,x=me.a*me.d-me.b*me.c;
return new Matrix(me.d/x,-me.b/x,-me.c/x,me.a/x,(me.c*me.f-me.d*me.e)/x,(me.b*me.e-me.a*me.f)/x)
};
matrixproto.clone=function(){return new Matrix(this.a,this.b,this.c,this.d,this.e,this.f)
};
matrixproto.translate=function(x,y){this.add(1,0,0,1,x,y)
};
matrixproto.scale=function(x,y,cx,cy){y==null&&(y=x);
(cx||cy)&&this.add(1,0,0,1,cx,cy);
this.add(x,0,0,y,0,0);
(cx||cy)&&this.add(1,0,0,1,-cx,-cy)
};
matrixproto.rotate=function(a,x,y){a=R.rad(a);
x=x||0;
y=y||0;
var cos=+math.cos(a).toFixed(9),sin=+math.sin(a).toFixed(9);
this.add(cos,sin,-sin,cos,x,y);
this.add(1,0,0,1,-x,-y)
};
matrixproto.x=function(x,y){return x*this.a+y*this.c+this.e
};
matrixproto.y=function(x,y){return x*this.b+y*this.d+this.f
};
matrixproto.get=function(i){return +this[Str.fromCharCode(97+i)].toFixed(4)
};
matrixproto.toString=function(){return R.svg?"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")":[this.get(0),this.get(2),this.get(1),this.get(3),0,0].join()
};
matrixproto.toFilter=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+this.get(0)+", M12="+this.get(2)+", M21="+this.get(1)+", M22="+this.get(3)+", Dx="+this.get(4)+", Dy="+this.get(5)+", sizingmethod='auto expand')"
};
matrixproto.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]
};
function norm(a){return a[0]*a[0]+a[1]*a[1]
}function normalize(a){var mag=math.sqrt(norm(a));
a[0]&&(a[0]/=mag);
a[1]&&(a[1]/=mag)
}matrixproto.split=function(){var out={};
out.dx=this.e;
out.dy=this.f;
var row=[[this.a,this.c],[this.b,this.d]];
out.scalex=math.sqrt(norm(row[0]));
normalize(row[0]);
out.shear=row[0][0]*row[1][0]+row[0][1]*row[1][1];
row[1]=[row[1][0]-row[0][0]*out.shear,row[1][1]-row[0][1]*out.shear];
out.scaley=math.sqrt(norm(row[1]));
normalize(row[1]);
out.shear/=out.scaley;
var sin=-row[0][1],cos=row[1][1];
if(cos<0){out.rotate=R.deg(math.acos(cos));
if(sin<0){out.rotate=360-out.rotate
}}else{out.rotate=R.deg(math.asin(sin))
}out.isSimple=!+out.shear.toFixed(9)&&(out.scalex.toFixed(9)==out.scaley.toFixed(9)||!out.rotate);
out.isSuperSimple=!+out.shear.toFixed(9)&&out.scalex.toFixed(9)==out.scaley.toFixed(9)&&!out.rotate;
out.noRotation=!+out.shear.toFixed(9)&&!out.rotate;
return out
};
matrixproto.toTransformString=function(shorter){var s=shorter||this[split]();
if(s.isSimple){s.scalex=+s.scalex.toFixed(4);
s.scaley=+s.scaley.toFixed(4);
s.rotate=+s.rotate.toFixed(4);
return(s.dx||s.dy?"t"+[s.dx,s.dy]:E)+(s.scalex!=1||s.scaley!=1?"s"+[s.scalex,s.scaley,0,0]:E)+(s.rotate?"r"+[s.rotate,0,0]:E)
}else{return"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]
}}
})(Matrix.prototype);
var version=navigator.userAgent.match(/Version\/(.*?)\s/)||navigator.userAgent.match(/Chrome\/(\d+)/);
if((navigator.vendor=="Apple Computer, Inc.")&&(version&&version[1]<4||navigator.platform.slice(0,2)=="iP")||(navigator.vendor=="Google Inc."&&version&&version[1]<8)){paperproto.safari=function(){var rect=this.rect(-99,-99,this.width+99,this.height+99).attr({stroke:"none"});
setTimeout(function(){rect.remove()
})
}
}else{paperproto.safari=fun
}var preventDefault=function(){this.returnValue=false
},preventTouch=function(){return this.originalEvent.preventDefault()
},stopPropagation=function(){this.cancelBubble=true
},stopTouch=function(){return this.originalEvent.stopPropagation()
},addEvent=(function(){if(g.doc.addEventListener){return function(obj,type,fn,element){var realName=supportsTouch&&touchMap[type]?touchMap[type]:type,f=function(e){var scrollY=g.doc.documentElement.scrollTop||g.doc.body.scrollTop,scrollX=g.doc.documentElement.scrollLeft||g.doc.body.scrollLeft,x=e.clientX+scrollX,y=e.clientY+scrollY;
if(supportsTouch&&touchMap[has](type)){for(var i=0,ii=e.targetTouches&&e.targetTouches.length;
i<ii;
i++){if(e.targetTouches[i].target==obj){var olde=e;
e=e.targetTouches[i];
e.originalEvent=olde;
e.preventDefault=preventTouch;
e.stopPropagation=stopTouch;
break
}}}return fn.call(element,e,x,y)
};
obj.addEventListener(realName,f,false);
return function(){obj.removeEventListener(realName,f,false);
return true
}
}
}else{if(g.doc.attachEvent){return function(obj,type,fn,element){var f=function(e){e=e||g.win.event;
var scrollY=g.doc.documentElement.scrollTop||g.doc.body.scrollTop,scrollX=g.doc.documentElement.scrollLeft||g.doc.body.scrollLeft,x=e.clientX+scrollX,y=e.clientY+scrollY;
e.preventDefault=e.preventDefault||preventDefault;
e.stopPropagation=e.stopPropagation||stopPropagation;
return fn.call(element,e,x,y)
};
obj.attachEvent("on"+type,f);
var detacher=function(){obj.detachEvent("on"+type,f);
return true
};
return detacher
}
}}})(),drag=[],dragMove=function(e){var x=e.clientX,y=e.clientY,scrollY=g.doc.documentElement.scrollTop||g.doc.body.scrollTop,scrollX=g.doc.documentElement.scrollLeft||g.doc.body.scrollLeft,dragi,j=drag.length;
while(j--){dragi=drag[j];
if(supportsTouch){var i=e.touches.length,touch;
while(i--){touch=e.touches[i];
if(touch.identifier==dragi.el._drag.id){x=touch.clientX;
y=touch.clientY;
(e.originalEvent?e.originalEvent:e).preventDefault();
break
}}}else{e.preventDefault()
}var node=dragi.el.node,o,next=node.nextSibling,parent=node.parentNode,display=node.style.display;
g.win.opera&&parent.removeChild(node);
node.style.display="none";
o=dragi.el.paper.getElementByPoint(x,y);
node.style.display=display;
g.win.opera&&(next?parent.insertBefore(node,next):parent.appendChild(node));
o&&eve("raphael.drag.over."+dragi.el.id,dragi.el,o);
x+=scrollX;
y+=scrollY;
eve("raphael.drag.move."+dragi.el.id,dragi.move_scope||dragi.el,x-dragi.el._drag.x,y-dragi.el._drag.y,x,y,e)
}},dragUp=function(e){R.unmousemove(dragMove).unmouseup(dragUp);
var i=drag.length,dragi;
while(i--){dragi=drag[i];
dragi.el._drag={};
eve("raphael.drag.end."+dragi.el.id,dragi.end_scope||dragi.start_scope||dragi.move_scope||dragi.el,e)
}drag=[]
},elproto=R.el={};
for(var i=events.length;
i--;
){(function(eventName){R[eventName]=elproto[eventName]=function(fn,scope){if(R.is(fn,"function")){this.events=this.events||[];
this.events.push({name:eventName,f:fn,unbind:addEvent(this.shape||this.node||g.doc,eventName,fn,scope||this)})
}return this
};
R["un"+eventName]=elproto["un"+eventName]=function(fn){var events=this.events||[],l=events.length;
while(l--){if(events[l].name==eventName&&events[l].f==fn){events[l].unbind();
events.splice(l,1);
!events.length&&delete this.events;
return this
}}return this
}
})(events[i])
}elproto.data=function(key,value){var data=eldata[this.id]=eldata[this.id]||{};
if(arguments.length==1){if(R.is(key,"object")){for(var i in key){if(key[has](i)){this.data(i,key[i])
}}return this
}eve("raphael.data.get."+this.id,this,data[key],key);
return data[key]
}data[key]=value;
eve("raphael.data.set."+this.id,this,value,key);
return this
};
elproto.removeData=function(key){if(key==null){eldata[this.id]={}
}else{eldata[this.id]&&delete eldata[this.id][key]
}return this
};
elproto.hover=function(f_in,f_out,scope_in,scope_out){return this.mouseover(f_in,scope_in).mouseout(f_out,scope_out||scope_in)
};
elproto.unhover=function(f_in,f_out){return this.unmouseover(f_in).unmouseout(f_out)
};
var draggable=[];
elproto.drag=function(onmove,onstart,onend,move_scope,start_scope,end_scope){function start(e){(e.originalEvent||e).preventDefault();
var scrollY=g.doc.documentElement.scrollTop||g.doc.body.scrollTop,scrollX=g.doc.documentElement.scrollLeft||g.doc.body.scrollLeft;
this._drag.x=e.clientX+scrollX;
this._drag.y=e.clientY+scrollY;
this._drag.id=e.identifier;
!drag.length&&R.mousemove(dragMove).mouseup(dragUp);
drag.push({el:this,move_scope:move_scope,start_scope:start_scope,end_scope:end_scope});
onstart&&eve.on("raphael.drag.start."+this.id,onstart);
onmove&&eve.on("raphael.drag.move."+this.id,onmove);
onend&&eve.on("raphael.drag.end."+this.id,onend);
eve("raphael.drag.start."+this.id,start_scope||move_scope||this,e.clientX+scrollX,e.clientY+scrollY,e)
}this._drag={};
draggable.push({el:this,start:start});
this.mousedown(start);
return this
};
elproto.onDragOver=function(f){f?eve.on("raphael.drag.over."+this.id,f):eve.unbind("raphael.drag.over."+this.id)
};
elproto.undrag=function(){var i=draggable.length;
while(i--){if(draggable[i].el==this){this.unmousedown(draggable[i].start);
draggable.splice(i,1);
eve.unbind("raphael.drag.*."+this.id)
}}!draggable.length&&R.unmousemove(dragMove).unmouseup(dragUp)
};
paperproto.circle=function(x,y,r){var out=R._engine.circle(this,x||0,y||0,r||0);
this.__set__&&this.__set__.push(out);
return out
};
paperproto.rect=function(x,y,w,h,r){var out=R._engine.rect(this,x||0,y||0,w||0,h||0,r||0);
this.__set__&&this.__set__.push(out);
return out
};
paperproto.ellipse=function(x,y,rx,ry){var out=R._engine.ellipse(this,x||0,y||0,rx||0,ry||0);
this.__set__&&this.__set__.push(out);
return out
};
paperproto.path=function(pathString){pathString&&!R.is(pathString,string)&&!R.is(pathString[0],array)&&(pathString+=E);
var out=R._engine.path(R.format[apply](R,arguments),this);
this.__set__&&this.__set__.push(out);
return out
};
paperproto.image=function(src,x,y,w,h){var out=R._engine.image(this,src||"about:blank",x||0,y||0,w||0,h||0);
this.__set__&&this.__set__.push(out);
return out
};
paperproto.text=function(x,y,text){var out=R._engine.text(this,x||0,y||0,Str(text));
this.__set__&&this.__set__.push(out);
return out
};
paperproto.set=function(itemsArray){!R.is(itemsArray,"array")&&(itemsArray=Array.prototype.splice.call(arguments,0,arguments.length));
var out=new Set(itemsArray);
this.__set__&&this.__set__.push(out);
return out
};
paperproto.setStart=function(set){this.__set__=set||this.set()
};
paperproto.setFinish=function(set){var out=this.__set__;
delete this.__set__;
return out
};
paperproto.setSize=function(width,height){return R._engine.setSize.call(this,width,height)
};
paperproto.setViewBox=function(x,y,w,h,fit){return R._engine.setViewBox.call(this,x,y,w,h,fit)
};
paperproto.top=paperproto.bottom=null;
paperproto.raphael=R;
var getOffset=function(elem){var box=elem.getBoundingClientRect(),doc=elem.ownerDocument,body=doc.body,docElem=doc.documentElement,clientTop=docElem.clientTop||body.clientTop||0,clientLeft=docElem.clientLeft||body.clientLeft||0,top=box.top+(g.win.pageYOffset||docElem.scrollTop||body.scrollTop)-clientTop,left=box.left+(g.win.pageXOffset||docElem.scrollLeft||body.scrollLeft)-clientLeft;
return{y:top,x:left}
};
paperproto.getElementByPoint=function(x,y){var paper=this,svg=paper.canvas,target=g.doc.elementFromPoint(x,y);
if(g.win.opera&&target.tagName=="svg"){var so=getOffset(svg),sr=svg.createSVGRect();
sr.x=x-so.x;
sr.y=y-so.y;
sr.width=sr.height=1;
var hits=svg.getIntersectionList(sr,null);
if(hits.length){target=hits[hits.length-1]
}}if(!target){return null
}while(target.parentNode&&target!=svg.parentNode&&!target.raphael){target=target.parentNode
}target==paper.canvas.parentNode&&(target=svg);
target=target&&target.raphael?paper.getById(target.raphaelid):null;
return target
};
paperproto.getById=function(id){var bot=this.bottom;
while(bot){if(bot.id==id){return bot
}bot=bot.next
}return null
};
paperproto.forEach=function(callback,thisArg){var bot=this.bottom;
while(bot){if(callback.call(thisArg,bot)===false){return this
}bot=bot.next
}return this
};
paperproto.getElementsByPoint=function(x,y){var set=this.set();
this.forEach(function(el){if(el.isPointInside(x,y)){set.push(el)
}});
return set
};
function x_y(){return this.x+S+this.y
}function x_y_w_h(){return this.x+S+this.y+S+this.width+" \xd7 "+this.height
}elproto.isPointInside=function(x,y){var rp=this.realPath=this.realPath||getPath[this.type](this);
return R.isPointInsidePath(rp,x,y)
};
elproto.getBBox=function(isWithoutTransform){if(this.removed){return{}
}var _=this._;
if(isWithoutTransform){if(_.dirty||!_.bboxwt){this.realPath=getPath[this.type](this);
_.bboxwt=pathDimensions(this.realPath);
_.bboxwt.toString=x_y_w_h;
_.dirty=0
}return _.bboxwt
}if(_.dirty||_.dirtyT||!_.bbox){if(_.dirty||!this.realPath){_.bboxwt=0;
this.realPath=getPath[this.type](this)
}_.bbox=pathDimensions(mapPath(this.realPath,this.matrix));
_.bbox.toString=x_y_w_h;
_.dirty=_.dirtyT=0
}return _.bbox
};
elproto.clone=function(){if(this.removed){return null
}var out=this.paper[this.type]().attr(this.attr());
this.__set__&&this.__set__.push(out);
return out
};
elproto.glow=function(glow){if(this.type=="text"){return null
}glow=glow||{};
var s={width:(glow.width||10)+(+this.attr("stroke-width")||1),fill:glow.fill||false,opacity:glow.opacity||0.5,offsetx:glow.offsetx||0,offsety:glow.offsety||0,color:glow.color||"#000"},c=s.width/2,r=this.paper,out=r.set(),path=this.realPath||getPath[this.type](this);
path=this.matrix?mapPath(path,this.matrix):path;
for(var i=1;
i<c+1;
i++){out.push(r.path(path).attr({stroke:s.color,fill:s.fill?s.color:"none","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":+(s.width/c*i).toFixed(3),opacity:+(s.opacity/c).toFixed(3)}))
}return out.insertBefore(this).translate(s.offsetx,s.offsety)
};
var curveslengths={},getPointAtSegmentLength=function(p1x,p1y,c1x,c1y,c2x,c2y,p2x,p2y,length){if(length==null){return bezlen(p1x,p1y,c1x,c1y,c2x,c2y,p2x,p2y)
}else{return R.findDotsAtSegment(p1x,p1y,c1x,c1y,c2x,c2y,p2x,p2y,getTatLen(p1x,p1y,c1x,c1y,c2x,c2y,p2x,p2y,length))
}},getLengthFactory=function(istotal,subpath){return function(path,length,onlystart){path=path2curve(path);
var x,y,p,l,sp="",subpaths={},point,len=0;
for(var i=0,ii=path.length;
i<ii;
i++){p=path[i];
if(p[0]=="M"){x=+p[1];
y=+p[2]
}else{l=getPointAtSegmentLength(x,y,p[1],p[2],p[3],p[4],p[5],p[6]);
if(len+l>length){if(subpath&&!subpaths.start){point=getPointAtSegmentLength(x,y,p[1],p[2],p[3],p[4],p[5],p[6],length-len);
sp+=["C"+point.start.x,point.start.y,point.m.x,point.m.y,point.x,point.y];
if(onlystart){return sp
}subpaths.start=sp;
sp=["M"+point.x,point.y+"C"+point.n.x,point.n.y,point.end.x,point.end.y,p[5],p[6]].join();
len+=l;
x=+p[5];
y=+p[6];
continue
}if(!istotal&&!subpath){point=getPointAtSegmentLength(x,y,p[1],p[2],p[3],p[4],p[5],p[6],length-len);
return{x:point.x,y:point.y,alpha:point.alpha}
}}len+=l;
x=+p[5];
y=+p[6]
}sp+=p.shift()+p
}subpaths.end=sp;
point=istotal?len:subpath?subpaths:R.findDotsAtSegment(x,y,p[0],p[1],p[2],p[3],p[4],p[5],1);
point.alpha&&(point={x:point.x,y:point.y,alpha:point.alpha});
return point
}
};
var getTotalLength=getLengthFactory(1),getPointAtLength=getLengthFactory(),getSubpathsAtLength=getLengthFactory(0,1);
R.getTotalLength=getTotalLength;
R.getPointAtLength=getPointAtLength;
R.getSubpath=function(path,from,to){if(this.getTotalLength(path)-to<0.000001){return getSubpathsAtLength(path,from).end
}var a=getSubpathsAtLength(path,to,1);
return from?getSubpathsAtLength(a,from).end:a
};
elproto.getTotalLength=function(){if(this.type!="path"){return
}if(this.node.getTotalLength){return this.node.getTotalLength()
}return getTotalLength(this.attrs.path)
};
elproto.getPointAtLength=function(length){if(this.type!="path"){return
}return getPointAtLength(this.attrs.path,length)
};
elproto.getSubpath=function(from,to){if(this.type!="path"){return
}return R.getSubpath(this.attrs.path,from,to)
};
var ef=R.easing_formulas={linear:function(n){return n
},"<":function(n){return pow(n,1.7)
},">":function(n){return pow(n,0.48)
},"<>":function(n){var q=0.48-n/1.04,Q=math.sqrt(0.1734+q*q),x=Q-q,X=pow(abs(x),1/3)*(x<0?-1:1),y=-Q-q,Y=pow(abs(y),1/3)*(y<0?-1:1),t=X+Y+0.5;
return(1-t)*3*t*t+t*t*t
},backIn:function(n){var s=1.70158;
return n*n*((s+1)*n-s)
},backOut:function(n){n=n-1;
var s=1.70158;
return n*n*((s+1)*n+s)+1
},elastic:function(n){if(n==!!n){return n
}return pow(2,-10*n)*math.sin((n-0.075)*(2*PI)/0.3)+1
},bounce:function(n){var s=7.5625,p=2.75,l;
if(n<(1/p)){l=s*n*n
}else{if(n<(2/p)){n-=(1.5/p);
l=s*n*n+0.75
}else{if(n<(2.5/p)){n-=(2.25/p);
l=s*n*n+0.9375
}else{n-=(2.625/p);
l=s*n*n+0.984375
}}}return l
}};
ef.easeIn=ef["ease-in"]=ef["<"];
ef.easeOut=ef["ease-out"]=ef[">"];
ef.easeInOut=ef["ease-in-out"]=ef["<>"];
ef["back-in"]=ef.backIn;
ef["back-out"]=ef.backOut;
var animationElements=[],requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){setTimeout(callback,16)
},animation=function(){var Now=+new Date,l=0;
for(;
l<animationElements.length;
l++){var e=animationElements[l];
if(e.el.removed||e.paused){continue
}var time=Now-e.start,ms=e.ms,easing=e.easing,from=e.from,diff=e.diff,to=e.to,t=e.t,that=e.el,set={},now,init={},key;
if(e.initstatus){time=(e.initstatus*e.anim.top-e.prev)/(e.percent-e.prev)*ms;
e.status=e.initstatus;
delete e.initstatus;
e.stop&&animationElements.splice(l--,1)
}else{e.status=(e.prev+(e.percent-e.prev)*(time/ms))/e.anim.top
}if(time<0){continue
}if(time<ms){var pos=easing(time/ms);
for(var attr in from){if(from[has](attr)){switch(availableAnimAttrs[attr]){case nu:now=+from[attr]+pos*ms*diff[attr];
break;
case"colour":now="rgb("+[upto255(round(from[attr].r+pos*ms*diff[attr].r)),upto255(round(from[attr].g+pos*ms*diff[attr].g)),upto255(round(from[attr].b+pos*ms*diff[attr].b))].join(",")+")";
break;
case"path":now=[];
for(var i=0,ii=from[attr].length;
i<ii;
i++){now[i]=[from[attr][i][0]];
for(var j=1,jj=from[attr][i].length;
j<jj;
j++){now[i][j]=+from[attr][i][j]+pos*ms*diff[attr][i][j]
}now[i]=now[i].join(S)
}now=now.join(S);
break;
case"transform":if(diff[attr].real){now=[];
for(i=0,ii=from[attr].length;
i<ii;
i++){now[i]=[from[attr][i][0]];
for(j=1,jj=from[attr][i].length;
j<jj;
j++){now[i][j]=from[attr][i][j]+pos*ms*diff[attr][i][j]
}}}else{var get=function(i){return +from[attr][i]+pos*ms*diff[attr][i]
};
now=[["m",get(0),get(1),get(2),get(3),get(4),get(5)]]
}break;
case"csv":if(attr=="clip-rect"){now=[];
i=4;
while(i--){now[i]=+from[attr][i]+pos*ms*diff[attr][i]
}}break;
default:var from2=[][concat](from[attr]);
now=[];
i=that.paper.customAttributes[attr].length;
while(i--){now[i]=+from2[i]+pos*ms*diff[attr][i]
}break
}set[attr]=now
}}that.attr(set);
(function(id,that,anim){setTimeout(function(){eve("raphael.anim.frame."+id,that,anim)
})
})(that.id,that,e.anim)
}else{(function(f,el,a){setTimeout(function(){eve("raphael.anim.frame."+el.id,el,a);
eve("raphael.anim.finish."+el.id,el,a);
R.is(f,"function")&&f.call(el)
})
})(e.callback,that,e.anim);
that.attr(to);
animationElements.splice(l--,1);
if(e.repeat>1&&!e.next){for(key in to){if(to[has](key)){init[key]=e.totalOrigin[key]
}}e.el.attr(init);
runAnimation(e.anim,e.el,e.anim.percents[0],null,e.totalOrigin,e.repeat-1)
}if(e.next&&!e.stop){runAnimation(e.anim,e.el,e.next,null,e.totalOrigin,e.repeat)
}}}R.svg&&that&&that.paper&&that.paper.safari();
animationElements.length&&requestAnimFrame(animation)
},upto255=function(color){return color>255?255:color<0?0:color
};
elproto.animateWith=function(el,anim,params,ms,easing,callback){var element=this;
if(element.removed){callback&&callback.call(element);
return element
}var a=params instanceof Animation?params:R.animation(params,ms,easing,callback),x,y;
runAnimation(a,element,a.percents[0],null,element.attr());
for(var i=0,ii=animationElements.length;
i<ii;
i++){if(animationElements[i].anim==anim&&animationElements[i].el==el){animationElements[ii-1].start=animationElements[i].start;
break
}}return element
};
function CubicBezierAtTime(t,p1x,p1y,p2x,p2y,duration){var cx=3*p1x,bx=3*(p2x-p1x)-cx,ax=1-cx-bx,cy=3*p1y,by=3*(p2y-p1y)-cy,ay=1-cy-by;
function sampleCurveX(t){return((ax*t+bx)*t+cx)*t
}function solve(x,epsilon){var t=solveCurveX(x,epsilon);
return((ay*t+by)*t+cy)*t
}function solveCurveX(x,epsilon){var t0,t1,t2,x2,d2,i;
for(t2=x,i=0;
i<8;
i++){x2=sampleCurveX(t2)-x;
if(abs(x2)<epsilon){return t2
}d2=(3*ax*t2+2*bx)*t2+cx;
if(abs(d2)<0.000001){break
}t2=t2-x2/d2
}t0=0;
t1=1;
t2=x;
if(t2<t0){return t0
}if(t2>t1){return t1
}while(t0<t1){x2=sampleCurveX(t2);
if(abs(x2-x)<epsilon){return t2
}if(x>x2){t0=t2
}else{t1=t2
}t2=(t1-t0)/2+t0
}return t2
}return solve(t,1/(200*duration))
}elproto.onAnimation=function(f){f?eve.on("raphael.anim.frame."+this.id,f):eve.unbind("raphael.anim.frame."+this.id);
return this
};
function Animation(anim,ms){var percents=[],newAnim={};
this.ms=ms;
this.times=1;
if(anim){for(var attr in anim){if(anim[has](attr)){newAnim[toFloat(attr)]=anim[attr];
percents.push(toFloat(attr))
}}percents.sort(sortByNumber)
}this.anim=newAnim;
this.top=percents[percents.length-1];
this.percents=percents
}Animation.prototype.delay=function(delay){var a=new Animation(this.anim,this.ms);
a.times=this.times;
a.del=+delay||0;
return a
};
Animation.prototype.repeat=function(times){var a=new Animation(this.anim,this.ms);
a.del=this.del;
a.times=math.floor(mmax(times,0))||1;
return a
};
function runAnimation(anim,element,percent,status,totalOrigin,times){percent=toFloat(percent);
var params,isInAnim,isInAnimSet,percents=[],next,prev,timestamp,ms=anim.ms,from={},to={},diff={};
if(status){for(i=0,ii=animationElements.length;
i<ii;
i++){var e=animationElements[i];
if(e.el.id==element.id&&e.anim==anim){if(e.percent!=percent){animationElements.splice(i,1);
isInAnimSet=1
}else{isInAnim=e
}element.attr(e.totalOrigin);
break
}}}else{status=+to
}for(var i=0,ii=anim.percents.length;
i<ii;
i++){if(anim.percents[i]==percent||anim.percents[i]>status*anim.top){percent=anim.percents[i];
prev=anim.percents[i-1]||0;
ms=ms/anim.top*(percent-prev);
next=anim.percents[i+1];
params=anim.anim[percent];
break
}else{if(status){element.attr(anim.anim[anim.percents[i]])
}}}if(!params){return
}if(!isInAnim){for(var attr in params){if(params[has](attr)){if(availableAnimAttrs[has](attr)||element.paper.customAttributes[has](attr)){from[attr]=element.attr(attr);
(from[attr]==null)&&(from[attr]=availableAttrs[attr]);
to[attr]=params[attr];
switch(availableAnimAttrs[attr]){case nu:diff[attr]=(to[attr]-from[attr])/ms;
break;
case"colour":from[attr]=R.getRGB(from[attr]);
var toColour=R.getRGB(to[attr]);
diff[attr]={r:(toColour.r-from[attr].r)/ms,g:(toColour.g-from[attr].g)/ms,b:(toColour.b-from[attr].b)/ms};
break;
case"path":var pathes=path2curve(from[attr],to[attr]),toPath=pathes[1];
from[attr]=pathes[0];
diff[attr]=[];
for(i=0,ii=from[attr].length;
i<ii;
i++){diff[attr][i]=[0];
for(var j=1,jj=from[attr][i].length;
j<jj;
j++){diff[attr][i][j]=(toPath[i][j]-from[attr][i][j])/ms
}}break;
case"transform":var _=element._,eq=equaliseTransform(_[attr],to[attr]);
if(eq){from[attr]=eq.from;
to[attr]=eq.to;
diff[attr]=[];
diff[attr].real=true;
for(i=0,ii=from[attr].length;
i<ii;
i++){diff[attr][i]=[from[attr][i][0]];
for(j=1,jj=from[attr][i].length;
j<jj;
j++){diff[attr][i][j]=(to[attr][i][j]-from[attr][i][j])/ms
}}}else{var m=(element.matrix||new Matrix),to2={_:{transform:_.transform},getBBox:function(){return element.getBBox(1)
}};
from[attr]=[m.a,m.b,m.c,m.d,m.e,m.f];
extractTransform(to2,to[attr]);
to[attr]=to2._.transform;
diff[attr]=[(to2.matrix.a-m.a)/ms,(to2.matrix.b-m.b)/ms,(to2.matrix.c-m.c)/ms,(to2.matrix.d-m.d)/ms,(to2.matrix.e-m.e)/ms,(to2.matrix.f-m.f)/ms]
}break;
case"csv":var values=Str(params[attr])[split](separator),from2=Str(from[attr])[split](separator);
if(attr=="clip-rect"){from[attr]=from2;
diff[attr]=[];
i=from2.length;
while(i--){diff[attr][i]=(values[i]-from[attr][i])/ms
}}to[attr]=values;
break;
default:values=[][concat](params[attr]);
from2=[][concat](from[attr]);
diff[attr]=[];
i=element.paper.customAttributes[attr].length;
while(i--){diff[attr][i]=((values[i]||0)-(from2[i]||0))/ms
}break
}}}}var easing=params.easing,easyeasy=R.easing_formulas[easing];
if(!easyeasy){easyeasy=Str(easing).match(bezierrg);
if(easyeasy&&easyeasy.length==5){var curve=easyeasy;
easyeasy=function(t){return CubicBezierAtTime(t,+curve[1],+curve[2],+curve[3],+curve[4],ms)
}
}else{easyeasy=pipe
}}timestamp=params.start||anim.start||+new Date;
e={anim:anim,percent:percent,timestamp:timestamp,start:timestamp+(anim.del||0),status:0,initstatus:status||0,stop:false,ms:ms,easing:easyeasy,from:from,diff:diff,to:to,el:element,callback:params.callback,prev:prev,next:next,repeat:times||anim.times,origin:element.attr(),totalOrigin:totalOrigin};
animationElements.push(e);
if(status&&!isInAnim&&!isInAnimSet){e.stop=true;
e.start=new Date-ms*status;
if(animationElements.length==1){return animation()
}}if(isInAnimSet){e.start=new Date-e.ms*status
}animationElements.length==1&&requestAnimFrame(animation)
}else{isInAnim.initstatus=status;
isInAnim.start=new Date-isInAnim.ms*status
}eve("raphael.anim.start."+element.id,element,anim)
}R.animation=function(params,ms,easing,callback){if(params instanceof Animation){return params
}if(R.is(easing,"function")||!easing){callback=callback||easing||null;
easing=null
}params=Object(params);
ms=+ms||0;
var p={},json,attr;
for(attr in params){if(params[has](attr)&&toFloat(attr)!=attr&&toFloat(attr)+"%"!=attr){json=true;
p[attr]=params[attr]
}}if(!json){return new Animation(params,ms)
}else{easing&&(p.easing=easing);
callback&&(p.callback=callback);
return new Animation({100:p},ms)
}};
elproto.animate=function(params,ms,easing,callback){var element=this;
if(element.removed){callback&&callback.call(element);
return element
}var anim=params instanceof Animation?params:R.animation(params,ms,easing,callback);
runAnimation(anim,element,anim.percents[0],null,element.attr());
return element
};
elproto.setTime=function(anim,value){if(anim&&value!=null){this.status(anim,mmin(value,anim.ms)/anim.ms)
}return this
};
elproto.status=function(anim,value){var out=[],i=0,len,e;
if(value!=null){runAnimation(anim,this,-1,mmin(value,1));
return this
}else{len=animationElements.length;
for(;
i<len;
i++){e=animationElements[i];
if(e.el.id==this.id&&(!anim||e.anim==anim)){if(anim){return e.status
}out.push({anim:e.anim,status:e.status})
}}if(anim){return 0
}return out
}};
elproto.pause=function(anim){for(var i=0;
i<animationElements.length;
i++){if(animationElements[i].el.id==this.id&&(!anim||animationElements[i].anim==anim)){if(eve("raphael.anim.pause."+this.id,this,animationElements[i].anim)!==false){animationElements[i].paused=true
}}}return this
};
elproto.resume=function(anim){for(var i=0;
i<animationElements.length;
i++){if(animationElements[i].el.id==this.id&&(!anim||animationElements[i].anim==anim)){var e=animationElements[i];
if(eve("raphael.anim.resume."+this.id,this,e.anim)!==false){delete e.paused;
this.status(e.anim,e.status)
}}}return this
};
elproto.stop=function(anim){for(var i=0;
i<animationElements.length;
i++){if(animationElements[i].el.id==this.id&&(!anim||animationElements[i].anim==anim)){if(eve("raphael.anim.stop."+this.id,this,animationElements[i].anim)!==false){animationElements.splice(i--,1)
}}}return this
};
function stopAnimation(paper){for(var i=0;
i<animationElements.length;
i++){if(animationElements[i].el.paper==paper){animationElements.splice(i--,1)
}}}eve.on("raphael.remove",stopAnimation);
eve.on("raphael.clear",stopAnimation);
elproto.toString=function(){return"Rapha\xebl\u2019s object"
};
var Set=function(items){this.items=[];
this.length=0;
this.type="set";
if(items){for(var i=0,ii=items.length;
i<ii;
i++){if(items[i]&&(items[i].constructor==elproto.constructor||items[i].constructor==Set)){this[this.items.length]=this.items[this.items.length]=items[i];
this.length++
}}}},setproto=Set.prototype;
setproto.push=function(){var item,len;
for(var i=0,ii=arguments.length;
i<ii;
i++){item=arguments[i];
if(item&&(item.constructor==elproto.constructor||item.constructor==Set)){len=this.items.length;
this[len]=this.items[len]=item;
this.length++
}}return this
};
setproto.pop=function(){this.length&&delete this[this.length--];
return this.items.pop()
};
setproto.forEach=function(callback,thisArg){for(var i=0,ii=this.items.length;
i<ii;
i++){if(callback.call(thisArg,this.items[i],i)===false){return this
}}return this
};
for(var method in elproto){if(elproto[has](method)){setproto[method]=(function(methodname){return function(){var arg=arguments;
return this.forEach(function(el){el[methodname][apply](el,arg)
})
}
})(method)
}}setproto.attr=function(name,value){if(name&&R.is(name,array)&&R.is(name[0],"object")){for(var j=0,jj=name.length;
j<jj;
j++){this.items[j].attr(name[j])
}}else{for(var i=0,ii=this.items.length;
i<ii;
i++){this.items[i].attr(name,value)
}}return this
};
setproto.clear=function(){while(this.length){this.pop()
}};
setproto.splice=function(index,count,insertion){index=index<0?mmax(this.length+index,0):index;
count=mmax(0,mmin(this.length-index,count));
var tail=[],todel=[],args=[],i;
for(i=2;
i<arguments.length;
i++){args.push(arguments[i])
}for(i=0;
i<count;
i++){todel.push(this[index+i])
}for(;
i<this.length-index;
i++){tail.push(this[index+i])
}var arglen=args.length;
for(i=0;
i<arglen+tail.length;
i++){this.items[index+i]=this[index+i]=i<arglen?args[i]:tail[i-arglen]
}i=this.items.length=this.length-=count-arglen;
while(this[i]){delete this[i++]
}return new Set(todel)
};
setproto.exclude=function(el){for(var i=0,ii=this.length;
i<ii;
i++){if(this[i]==el){this.splice(i,1);
return true
}}};
setproto.animate=function(params,ms,easing,callback){(R.is(easing,"function")||!easing)&&(callback=easing||null);
var len=this.items.length,i=len,item,set=this,collector;
if(!len){return this
}callback&&(collector=function(){!--len&&callback.call(set)
});
easing=R.is(easing,string)?easing:collector;
var anim=R.animation(params,ms,easing,collector);
item=this.items[--i].animate(anim);
while(i--){this.items[i]&&!this.items[i].removed&&this.items[i].animateWith(item,anim,anim)
}return this
};
setproto.insertAfter=function(el){var i=this.items.length;
while(i--){this.items[i].insertAfter(el)
}return this
};
setproto.getBBox=function(){var x=[],y=[],x2=[],y2=[];
for(var i=this.items.length;
i--;
){if(!this.items[i].removed){var box=this.items[i].getBBox();
x.push(box.x);
y.push(box.y);
x2.push(box.x+box.width);
y2.push(box.y+box.height)
}}x=mmin[apply](0,x);
y=mmin[apply](0,y);
x2=mmax[apply](0,x2);
y2=mmax[apply](0,y2);
return{x:x,y:y,x2:x2,y2:y2,width:x2-x,height:y2-y}
};
setproto.clone=function(s){s=new Set;
for(var i=0,ii=this.items.length;
i<ii;
i++){s.push(this.items[i].clone())
}return s
};
setproto.toString=function(){return"Rapha\xebl\u2018s set"
};
R.registerFont=function(font){if(!font.face){return font
}this.fonts=this.fonts||{};
var fontcopy={w:font.w,face:{},glyphs:{}},family=font.face["font-family"];
for(var prop in font.face){if(font.face[has](prop)){fontcopy.face[prop]=font.face[prop]
}}if(this.fonts[family]){this.fonts[family].push(fontcopy)
}else{this.fonts[family]=[fontcopy]
}if(!font.svg){fontcopy.face["units-per-em"]=toInt(font.face["units-per-em"],10);
for(var glyph in font.glyphs){if(font.glyphs[has](glyph)){var path=font.glyphs[glyph];
fontcopy.glyphs[glyph]={w:path.w,k:{},d:path.d&&"M"+path.d.replace(/[mlcxtrv]/g,function(command){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[command]||"M"
})+"z"};
if(path.k){for(var k in path.k){if(path[has](k)){fontcopy.glyphs[glyph].k[k]=path.k[k]
}}}}}}return font
};
paperproto.getFont=function(family,weight,style,stretch){stretch=stretch||"normal";
style=style||"normal";
weight=+weight||{normal:400,bold:700,lighter:300,bolder:800}[weight]||400;
if(!R.fonts){return
}var font=R.fonts[family];
if(!font){var name=new RegExp("(^|\\s)"+family.replace(/[^\w\d\s+!~.:_-]/g,E)+"(\\s|$)","i");
for(var fontName in R.fonts){if(R.fonts[has](fontName)){if(name.test(fontName)){font=R.fonts[fontName];
break
}}}}var thefont;
if(font){for(var i=0,ii=font.length;
i<ii;
i++){thefont=font[i];
if(thefont.face["font-weight"]==weight&&(thefont.face["font-style"]==style||!thefont.face["font-style"])&&thefont.face["font-stretch"]==stretch){break
}}}return thefont
};
paperproto.print=function(x,y,string,font,size,origin,letter_spacing){origin=origin||"middle";
letter_spacing=mmax(mmin(letter_spacing||0,1),-1);
var letters=Str(string)[split](E),shift=0,notfirst=0,path=E,scale;
R.is(font,string)&&(font=this.getFont(font));
if(font){scale=(size||16)/font.face["units-per-em"];
var bb=font.face.bbox[split](separator),top=+bb[0],lineHeight=bb[3]-bb[1],shifty=0,height=+bb[1]+(origin=="baseline"?lineHeight+(+font.face.descent):lineHeight/2);
for(var i=0,ii=letters.length;
i<ii;
i++){if(letters[i]=="\n"){shift=0;
curr=0;
notfirst=0;
shifty+=lineHeight
}else{var prev=notfirst&&font.glyphs[letters[i-1]]||{},curr=font.glyphs[letters[i]];
shift+=notfirst?(prev.w||font.w)+(prev.k&&prev.k[letters[i]]||0)+(font.w*letter_spacing):0;
notfirst=1
}if(curr&&curr.d){path+=R.transformPath(curr.d,["t",shift*scale,shifty*scale,"s",scale,scale,top,height,"t",(x-top)/scale,(y-height)/scale])
}}}return this.path(path).attr({fill:"#000",stroke:"none"})
};
paperproto.add=function(json){if(R.is(json,"array")){var res=this.set(),i=0,ii=json.length,j;
for(;
i<ii;
i++){j=json[i]||{};
elements[has](j.type)&&res.push(this[j.type]().attr(j))
}}return res
};
R.format=function(token,params){var args=R.is(params,array)?[0][concat](params):arguments;
token&&R.is(token,string)&&args.length-1&&(token=token.replace(formatrg,function(str,i){return args[++i]==null?E:args[i]
}));
return token||E
};
R.fullfill=(function(){var tokenRegex=/\{([^\}]+)\}/g,objNotationRegex=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,replacer=function(all,key,obj){var res=obj;
key.replace(objNotationRegex,function(all,name,quote,quotedName,isFunc){name=name||quotedName;
if(res){if(name in res){res=res[name]
}typeof res=="function"&&isFunc&&(res=res())
}});
res=(res==null||res==obj?all:res)+"";
return res
};
return function(str,obj){return String(str).replace(tokenRegex,function(all,key){return replacer(all,key,obj)
})
}
})();
R.ninja=function(){oldRaphael.was?(g.win.Raphael=oldRaphael.is):delete Raphael;
return R
};
R.st=setproto;
(function(doc,loaded,f){if(doc.readyState==null&&doc.addEventListener){doc.addEventListener(loaded,f=function(){doc.removeEventListener(loaded,f,false);
doc.readyState="complete"
},false);
doc.readyState="loading"
}function isLoaded(){(/in/).test(doc.readyState)?setTimeout(isLoaded,9):R.eve("raphael.DOMload")
}isLoaded()
})(document,"DOMContentLoaded");
oldRaphael.was?(g.win.Raphael=R):(Raphael=R);
eve.on("raphael.DOMload",function(){loaded=true
})
})();
window.Raphael.svg&&function(R){var has="hasOwnProperty",Str=String,toFloat=parseFloat,toInt=parseInt,math=Math,mmax=math.max,abs=math.abs,pow=math.pow,separator=/[, ]+/,eve=R.eve,E="",S=" ";
var xlink="http://www.w3.org/1999/xlink",markers={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},markerCounter={};
R.toString=function(){return"Your browser supports SVG.\nYou are running Rapha\xebl "+this.version
};
var $=function(el,attr){if(attr){if(typeof el=="string"){el=$(el)
}for(var key in attr){if(attr[has](key)){if(key.substring(0,6)=="xlink:"){el.setAttributeNS(xlink,key.substring(6),Str(attr[key]))
}else{el.setAttribute(key,Str(attr[key]))
}}}}else{el=R._g.doc.createElementNS("http://www.w3.org/2000/svg",el);
el.style&&(el.style.webkitTapHighlightColor="rgba(0,0,0,0)")
}return el
},addGradientFill=function(element,gradient){var type="linear",id=element.id+gradient,fx=0.5,fy=0.5,o=element.node,SVG=element.paper,s=o.style,el=R._g.doc.getElementById(id);
if(!el){gradient=Str(gradient).replace(R._radial_gradient,function(all,_fx,_fy){type="radial";
if(_fx&&_fy){fx=toFloat(_fx);
fy=toFloat(_fy);
var dir=((fy>0.5)*2-1);
pow(fx-0.5,2)+pow(fy-0.5,2)>0.25&&(fy=math.sqrt(0.25-pow(fx-0.5,2))*dir+0.5)&&fy!=0.5&&(fy=fy.toFixed(5)-0.00001*dir)
}return E
});
gradient=gradient.split(/\s*\-\s*/);
if(type=="linear"){var angle=gradient.shift();
angle=-toFloat(angle);
if(isNaN(angle)){return null
}var vector=[0,0,math.cos(R.rad(angle)),math.sin(R.rad(angle))],max=1/(mmax(abs(vector[2]),abs(vector[3]))||1);
vector[2]*=max;
vector[3]*=max;
if(vector[2]<0){vector[0]=-vector[2];
vector[2]=0
}if(vector[3]<0){vector[1]=-vector[3];
vector[3]=0
}}var dots=R._parseDots(gradient);
if(!dots){return null
}id=id.replace(/[\(\)\s,\xb0#]/g,"_");
if(element.gradient&&id!=element.gradient.id){SVG.defs.removeChild(element.gradient);
delete element.gradient
}if(!element.gradient){el=$(type+"Gradient",{id:id});
element.gradient=el;
$(el,type=="radial"?{fx:fx,fy:fy}:{x1:vector[0],y1:vector[1],x2:vector[2],y2:vector[3],gradientTransform:element.matrix.invert()});
SVG.defs.appendChild(el);
for(var i=0,ii=dots.length;
i<ii;
i++){el.appendChild($("stop",{offset:dots[i].offset?dots[i].offset:i?"100%":"0%","stop-color":dots[i].color||"#fff"}))
}}}$(o,{fill:"url(#"+id+")",opacity:1,"fill-opacity":1});
s.fill=E;
s.opacity=1;
s.fillOpacity=1;
return 1
},updatePosition=function(o){var bbox=o.getBBox(1);
$(o.pattern,{patternTransform:o.matrix.invert()+" translate("+bbox.x+","+bbox.y+")"})
},addArrow=function(o,value,isEnd){if(o.type=="path"){var values=Str(value).toLowerCase().split("-"),p=o.paper,se=isEnd?"end":"start",node=o.node,attrs=o.attrs,stroke=attrs["stroke-width"],i=values.length,type="classic",from,to,dx,refX,attr,w=3,h=3,t=5;
while(i--){switch(values[i]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":type=values[i];
break;
case"wide":h=5;
break;
case"narrow":h=2;
break;
case"long":w=5;
break;
case"short":w=2;
break
}}if(type=="open"){w+=2;
h+=2;
t+=2;
dx=1;
refX=isEnd?4:1;
attr={fill:"none",stroke:attrs.stroke}
}else{refX=dx=w/2;
attr={fill:attrs.stroke,stroke:"none"}
}if(o._.arrows){if(isEnd){o._.arrows.endPath&&markerCounter[o._.arrows.endPath]--;
o._.arrows.endMarker&&markerCounter[o._.arrows.endMarker]--
}else{o._.arrows.startPath&&markerCounter[o._.arrows.startPath]--;
o._.arrows.startMarker&&markerCounter[o._.arrows.startMarker]--
}}else{o._.arrows={}
}if(type!="none"){var pathId="raphael-marker-"+type,markerId="raphael-marker-"+se+type+w+h;
if(!R._g.doc.getElementById(pathId)){p.defs.appendChild($($("path"),{"stroke-linecap":"round",d:markers[type],id:pathId}));
markerCounter[pathId]=1
}else{markerCounter[pathId]++
}var marker=R._g.doc.getElementById(markerId),use;
if(!marker){marker=$($("marker"),{id:markerId,markerHeight:h,markerWidth:w,orient:"auto",refX:refX,refY:h/2});
use=$($("use"),{"xlink:href":"#"+pathId,transform:(isEnd?"rotate(180 "+w/2+" "+h/2+") ":E)+"scale("+w/t+","+h/t+")","stroke-width":(1/((w/t+h/t)/2)).toFixed(4)});
marker.appendChild(use);
p.defs.appendChild(marker);
markerCounter[markerId]=1
}else{markerCounter[markerId]++;
use=marker.getElementsByTagName("use")[0]
}$(use,attr);
var delta=dx*(type!="diamond"&&type!="oval");
if(isEnd){from=o._.arrows.startdx*stroke||0;
to=R.getTotalLength(attrs.path)-delta*stroke
}else{from=delta*stroke;
to=R.getTotalLength(attrs.path)-(o._.arrows.enddx*stroke||0)
}attr={};
attr["marker-"+se]="url(#"+markerId+")";
if(to||from){attr.d=Raphael.getSubpath(attrs.path,from,to)
}$(node,attr);
o._.arrows[se+"Path"]=pathId;
o._.arrows[se+"Marker"]=markerId;
o._.arrows[se+"dx"]=delta;
o._.arrows[se+"Type"]=type;
o._.arrows[se+"String"]=value
}else{if(isEnd){from=o._.arrows.startdx*stroke||0;
to=R.getTotalLength(attrs.path)-from
}else{from=0;
to=R.getTotalLength(attrs.path)-(o._.arrows.enddx*stroke||0)
}o._.arrows[se+"Path"]&&$(node,{d:Raphael.getSubpath(attrs.path,from,to)});
delete o._.arrows[se+"Path"];
delete o._.arrows[se+"Marker"];
delete o._.arrows[se+"dx"];
delete o._.arrows[se+"Type"];
delete o._.arrows[se+"String"]
}for(attr in markerCounter){if(markerCounter[has](attr)&&!markerCounter[attr]){var item=R._g.doc.getElementById(attr);
item&&item.parentNode.removeChild(item)
}}}},dasharray={"":[0],none:[0],"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},addDashes=function(o,value,params){value=dasharray[Str(value).toLowerCase()];
if(value){var width=o.attrs["stroke-width"]||"1",butt={round:width,square:width,butt:0}[o.attrs["stroke-linecap"]||params["stroke-linecap"]]||0,dashes=[],i=value.length;
while(i--){dashes[i]=value[i]*width+((i%2)?1:-1)*butt
}$(o.node,{"stroke-dasharray":dashes.join(",")})
}},setFillAndStroke=function(o,params){var node=o.node,attrs=o.attrs,vis=node.style.visibility;
node.style.visibility="hidden";
for(var att in params){if(params[has](att)){if(!R._availableAttrs[has](att)){continue
}var value=params[att];
attrs[att]=value;
switch(att){case"blur":o.blur(value);
break;
case"href":case"title":case"target":var pn=node.parentNode;
if(pn.tagName.toLowerCase()!="a"){var hl=$("a");
pn.insertBefore(hl,node);
hl.appendChild(node);
pn=hl
}if(att=="target"){pn.setAttributeNS(xlink,"show",value=="blank"?"new":value)
}else{pn.setAttributeNS(xlink,att,value)
}break;
case"cursor":node.style.cursor=value;
break;
case"transform":o.transform(value);
break;
case"arrow-start":addArrow(o,value);
break;
case"arrow-end":addArrow(o,value,1);
break;
case"clip-rect":var rect=Str(value).split(separator);
if(rect.length==4){o.clip&&o.clip.parentNode.parentNode.removeChild(o.clip.parentNode);
var el=$("clipPath"),rc=$("rect");
el.id=R.createUUID();
$(rc,{x:rect[0],y:rect[1],width:rect[2],height:rect[3]});
el.appendChild(rc);
o.paper.defs.appendChild(el);
$(node,{"clip-path":"url(#"+el.id+")"});
o.clip=rc
}if(!value){var path=node.getAttribute("clip-path");
if(path){var clip=R._g.doc.getElementById(path.replace(/(^url\(#|\)$)/g,E));
clip&&clip.parentNode.removeChild(clip);
$(node,{"clip-path":E});
delete o.clip
}}break;
case"path":if(o.type=="path"){$(node,{d:value?attrs.path=R._pathToAbsolute(value):"M0,0"});
o._.dirty=1;
if(o._.arrows){"startString" in o._.arrows&&addArrow(o,o._.arrows.startString);
"endString" in o._.arrows&&addArrow(o,o._.arrows.endString,1)
}}break;
case"width":node.setAttribute(att,value);
o._.dirty=1;
if(attrs.fx){att="x";
value=attrs.x
}else{break
}case"x":if(attrs.fx){value=-attrs.x-(attrs.width||0)
}case"rx":if(att=="rx"&&o.type=="rect"){break
}case"cx":node.setAttribute(att,value);
o.pattern&&updatePosition(o);
o._.dirty=1;
break;
case"height":node.setAttribute(att,value);
o._.dirty=1;
if(attrs.fy){att="y";
value=attrs.y
}else{break
}case"y":if(attrs.fy){value=-attrs.y-(attrs.height||0)
}case"ry":if(att=="ry"&&o.type=="rect"){break
}case"cy":node.setAttribute(att,value);
o.pattern&&updatePosition(o);
o._.dirty=1;
break;
case"r":if(o.type=="rect"){$(node,{rx:value,ry:value})
}else{node.setAttribute(att,value)
}o._.dirty=1;
break;
case"src":if(o.type=="image"){node.setAttributeNS(xlink,"href",value)
}break;
case"stroke-width":if(o._.sx!=1||o._.sy!=1){value/=mmax(abs(o._.sx),abs(o._.sy))||1
}if(o.paper._vbSize){value*=o.paper._vbSize
}node.setAttribute(att,value);
if(attrs["stroke-dasharray"]){addDashes(o,attrs["stroke-dasharray"],params)
}if(o._.arrows){"startString" in o._.arrows&&addArrow(o,o._.arrows.startString);
"endString" in o._.arrows&&addArrow(o,o._.arrows.endString,1)
}break;
case"stroke-dasharray":addDashes(o,value,params);
break;
case"fill":var isURL=Str(value).match(R._ISURL);
if(isURL){el=$("pattern");
var ig=$("image");
el.id=R.createUUID();
$(el,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1});
$(ig,{x:0,y:0,"xlink:href":isURL[1]});
el.appendChild(ig);
(function(el){R._preload(isURL[1],function(){var w=this.offsetWidth,h=this.offsetHeight;
$(el,{width:w,height:h});
$(ig,{width:w,height:h});
o.paper.safari()
})
})(el);
o.paper.defs.appendChild(el);
$(node,{fill:"url(#"+el.id+")"});
o.pattern=el;
o.pattern&&updatePosition(o);
break
}var clr=R.getRGB(value);
if(!clr.error){delete params.gradient;
delete attrs.gradient;
!R.is(attrs.opacity,"undefined")&&R.is(params.opacity,"undefined")&&$(node,{opacity:attrs.opacity});
!R.is(attrs["fill-opacity"],"undefined")&&R.is(params["fill-opacity"],"undefined")&&$(node,{"fill-opacity":attrs["fill-opacity"]})
}else{if((o.type=="circle"||o.type=="ellipse"||Str(value).charAt()!="r")&&addGradientFill(o,value)){if("opacity" in attrs||"fill-opacity" in attrs){var gradient=R._g.doc.getElementById(node.getAttribute("fill").replace(/^url\(#|\)$/g,E));
if(gradient){var stops=gradient.getElementsByTagName("stop");
$(stops[stops.length-1],{"stop-opacity":("opacity" in attrs?attrs.opacity:1)*("fill-opacity" in attrs?attrs["fill-opacity"]:1)})
}}attrs.gradient=value;
attrs.fill="none";
break
}}clr[has]("opacity")&&$(node,{"fill-opacity":clr.opacity>1?clr.opacity/100:clr.opacity});
case"stroke":clr=R.getRGB(value);
node.setAttribute(att,clr.hex);
att=="stroke"&&clr[has]("opacity")&&$(node,{"stroke-opacity":clr.opacity>1?clr.opacity/100:clr.opacity});
if(att=="stroke"&&o._.arrows){"startString" in o._.arrows&&addArrow(o,o._.arrows.startString);
"endString" in o._.arrows&&addArrow(o,o._.arrows.endString,1)
}break;
case"gradient":(o.type=="circle"||o.type=="ellipse"||Str(value).charAt()!="r")&&addGradientFill(o,value);
break;
case"opacity":if(attrs.gradient&&!attrs[has]("stroke-opacity")){$(node,{"stroke-opacity":value>1?value/100:value})
}case"fill-opacity":if(attrs.gradient){gradient=R._g.doc.getElementById(node.getAttribute("fill").replace(/^url\(#|\)$/g,E));
if(gradient){stops=gradient.getElementsByTagName("stop");
$(stops[stops.length-1],{"stop-opacity":value})
}break
}default:att=="font-size"&&(value=toInt(value,10)+"px");
var cssrule=att.replace(/(\-.)/g,function(w){return w.substring(1).toUpperCase()
});
node.style[cssrule]=value;
o._.dirty=1;
node.setAttribute(att,value);
break
}}}tuneText(o,params);
node.style.visibility=vis
},leading=1.2,tuneText=function(el,params){if(el.type!="text"||!(params[has]("text")||params[has]("font")||params[has]("font-size")||params[has]("x")||params[has]("y"))){return
}var a=el.attrs,node=el.node,fontSize=node.firstChild?toInt(R._g.doc.defaultView.getComputedStyle(node.firstChild,E).getPropertyValue("font-size"),10):10;
if(params[has]("text")){a.text=params.text;
while(node.firstChild){node.removeChild(node.firstChild)
}var texts=Str(params.text).split("\n"),tspans=[],tspan;
for(var i=0,ii=texts.length;
i<ii;
i++){tspan=$("tspan");
i&&$(tspan,{dy:fontSize*leading,x:a.x});
tspan.appendChild(R._g.doc.createTextNode(texts[i]));
node.appendChild(tspan);
tspans[i]=tspan
}}else{tspans=node.getElementsByTagName("tspan");
for(i=0,ii=tspans.length;
i<ii;
i++){if(i){$(tspans[i],{dy:fontSize*leading,x:a.x})
}else{$(tspans[0],{dy:0})
}}}$(node,{x:a.x,y:a.y});
el._.dirty=1;
var bb=el._getBBox(),dif=a.y-(bb.y+bb.height/2);
dif&&R.is(dif,"finite")&&$(tspans[0],{dy:dif})
},Element=function(node,svg){var X=0,Y=0;
this[0]=this.node=node;
node.raphael=true;
this.id=R._oid++;
node.raphaelid=this.id;
this.matrix=R.matrix();
this.realPath=null;
this.paper=svg;
this.attrs=this.attrs||{};
this._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1};
!svg.bottom&&(svg.bottom=this);
this.prev=svg.top;
svg.top&&(svg.top.next=this);
svg.top=this;
this.next=null
},elproto=R.el;
Element.prototype=elproto;
elproto.constructor=Element;
R._engine.path=function(pathString,SVG){var el=$("path");
SVG.canvas&&SVG.canvas.appendChild(el);
var p=new Element(el,SVG);
p.type="path";
setFillAndStroke(p,{fill:"none",stroke:"#000",path:pathString});
return p
};
elproto.rotate=function(deg,cx,cy){if(this.removed){return this
}deg=Str(deg).split(separator);
if(deg.length-1){cx=toFloat(deg[1]);
cy=toFloat(deg[2])
}deg=toFloat(deg[0]);
(cy==null)&&(cx=cy);
if(cx==null||cy==null){var bbox=this.getBBox(1);
cx=bbox.x+bbox.width/2;
cy=bbox.y+bbox.height/2
}this.transform(this._.transform.concat([["r",deg,cx,cy]]));
return this
};
elproto.scale=function(sx,sy,cx,cy){if(this.removed){return this
}sx=Str(sx).split(separator);
if(sx.length-1){sy=toFloat(sx[1]);
cx=toFloat(sx[2]);
cy=toFloat(sx[3])
}sx=toFloat(sx[0]);
(sy==null)&&(sy=sx);
(cy==null)&&(cx=cy);
if(cx==null||cy==null){var bbox=this.getBBox(1)
}cx=cx==null?bbox.x+bbox.width/2:cx;
cy=cy==null?bbox.y+bbox.height/2:cy;
this.transform(this._.transform.concat([["s",sx,sy,cx,cy]]));
return this
};
elproto.translate=function(dx,dy){if(this.removed){return this
}dx=Str(dx).split(separator);
if(dx.length-1){dy=toFloat(dx[1])
}dx=toFloat(dx[0])||0;
dy=+dy||0;
this.transform(this._.transform.concat([["t",dx,dy]]));
return this
};
elproto.transform=function(tstr){var _=this._;
if(tstr==null){return _.transform
}R._extractTransform(this,tstr);
this.clip&&$(this.clip,{transform:this.matrix.invert()});
this.pattern&&updatePosition(this);
this.node&&$(this.node,{transform:this.matrix});
if(_.sx!=1||_.sy!=1){var sw=this.attrs[has]("stroke-width")?this.attrs["stroke-width"]:1;
this.attr({"stroke-width":sw})
}return this
};
elproto.hide=function(){!this.removed&&this.paper.safari(this.node.style.display="none");
return this
};
elproto.show=function(){!this.removed&&this.paper.safari(this.node.style.display="");
return this
};
elproto.remove=function(){if(this.removed||!this.node.parentNode){return
}var paper=this.paper;
paper.__set__&&paper.__set__.exclude(this);
eve.unbind("raphael.*.*."+this.id);
if(this.gradient){paper.defs.removeChild(this.gradient)
}R._tear(this,paper);
if(this.node.parentNode.tagName.toLowerCase()=="a"){this.node.parentNode.parentNode.removeChild(this.node.parentNode)
}else{this.node.parentNode.removeChild(this.node)
}for(var i in this){this[i]=typeof this[i]=="function"?R._removedFactory(i):null
}this.removed=true
};
elproto._getBBox=function(){if(this.node.style.display=="none"){this.show();
var hide=true
}var bbox={};
try{bbox=this.node.getBBox()
}catch(e){}finally{bbox=bbox||{}
}hide&&this.hide();
return bbox
};
elproto.attr=function(name,value){if(this.removed){return this
}if(name==null){var res={};
for(var a in this.attrs){if(this.attrs[has](a)){res[a]=this.attrs[a]
}}res.gradient&&res.fill=="none"&&(res.fill=res.gradient)&&delete res.gradient;
res.transform=this._.transform;
return res
}if(value==null&&R.is(name,"string")){if(name=="fill"&&this.attrs.fill=="none"&&this.attrs.gradient){return this.attrs.gradient
}if(name=="transform"){return this._.transform
}var names=name.split(separator),out={};
for(var i=0,ii=names.length;
i<ii;
i++){name=names[i];
if(name in this.attrs){out[name]=this.attrs[name]
}else{if(R.is(this.paper.customAttributes[name],"function")){out[name]=this.paper.customAttributes[name].def
}else{out[name]=R._availableAttrs[name]
}}}return ii-1?out:out[names[0]]
}if(value==null&&R.is(name,"array")){out={};
for(i=0,ii=name.length;
i<ii;
i++){out[name[i]]=this.attr(name[i])
}return out
}if(value!=null){var params={};
params[name]=value
}else{if(name!=null&&R.is(name,"object")){params=name
}}for(var key in params){eve("raphael.attr."+key+"."+this.id,this,params[key])
}for(key in this.paper.customAttributes){if(this.paper.customAttributes[has](key)&&params[has](key)&&R.is(this.paper.customAttributes[key],"function")){var par=this.paper.customAttributes[key].apply(this,[].concat(params[key]));
this.attrs[key]=params[key];
for(var subkey in par){if(par[has](subkey)){params[subkey]=par[subkey]
}}}}setFillAndStroke(this,params);
return this
};
elproto.toFront=function(){if(this.removed){return this
}if(this.node.parentNode.tagName.toLowerCase()=="a"){this.node.parentNode.parentNode.appendChild(this.node.parentNode)
}else{this.node.parentNode.appendChild(this.node)
}var svg=this.paper;
svg.top!=this&&R._tofront(this,svg);
return this
};
elproto.toBack=function(){if(this.removed){return this
}var parent=this.node.parentNode;
if(parent.tagName.toLowerCase()=="a"){parent.parentNode.insertBefore(this.node.parentNode,this.node.parentNode.parentNode.firstChild)
}else{if(parent.firstChild!=this.node){parent.insertBefore(this.node,this.node.parentNode.firstChild)
}}R._toback(this,this.paper);
var svg=this.paper;
return this
};
elproto.insertAfter=function(element){if(this.removed){return this
}var node=element.node||element[element.length-1].node;
if(node.nextSibling){node.parentNode.insertBefore(this.node,node.nextSibling)
}else{node.parentNode.appendChild(this.node)
}R._insertafter(this,element,this.paper);
return this
};
elproto.insertBefore=function(element){if(this.removed){return this
}var node=element.node||element[0].node;
node.parentNode.insertBefore(this.node,node);
R._insertbefore(this,element,this.paper);
return this
};
elproto.blur=function(size){var t=this;
if(+size!==0){var fltr=$("filter"),blur=$("feGaussianBlur");
t.attrs.blur=size;
fltr.id=R.createUUID();
$(blur,{stdDeviation:+size||1.5});
fltr.appendChild(blur);
t.paper.defs.appendChild(fltr);
t._blur=fltr;
$(t.node,{filter:"url(#"+fltr.id+")"})
}else{if(t._blur){t._blur.parentNode.removeChild(t._blur);
delete t._blur;
delete t.attrs.blur
}t.node.removeAttribute("filter")
}};
R._engine.circle=function(svg,x,y,r){var el=$("circle");
svg.canvas&&svg.canvas.appendChild(el);
var res=new Element(el,svg);
res.attrs={cx:x,cy:y,r:r,fill:"none",stroke:"#000"};
res.type="circle";
$(el,res.attrs);
return res
};
R._engine.rect=function(svg,x,y,w,h,r){var el=$("rect");
svg.canvas&&svg.canvas.appendChild(el);
var res=new Element(el,svg);
res.attrs={x:x,y:y,width:w,height:h,r:r||0,rx:r||0,ry:r||0,fill:"none",stroke:"#000"};
res.type="rect";
$(el,res.attrs);
return res
};
R._engine.ellipse=function(svg,x,y,rx,ry){var el=$("ellipse");
svg.canvas&&svg.canvas.appendChild(el);
var res=new Element(el,svg);
res.attrs={cx:x,cy:y,rx:rx,ry:ry,fill:"none",stroke:"#000"};
res.type="ellipse";
$(el,res.attrs);
return res
};
R._engine.image=function(svg,src,x,y,w,h){var el=$("image");
$(el,{x:x,y:y,width:w,height:h,preserveAspectRatio:"none"});
el.setAttributeNS(xlink,"href",src);
svg.canvas&&svg.canvas.appendChild(el);
var res=new Element(el,svg);
res.attrs={x:x,y:y,width:w,height:h,src:src};
res.type="image";
return res
};
R._engine.text=function(svg,x,y,text){var el=$("text");
svg.canvas&&svg.canvas.appendChild(el);
var res=new Element(el,svg);
res.attrs={x:x,y:y,"text-anchor":"middle",text:text,font:R._availableAttrs.font,stroke:"none",fill:"#000"};
res.type="text";
setFillAndStroke(res,res.attrs);
return res
};
R._engine.setSize=function(width,height){this.width=width||this.width;
this.height=height||this.height;
this.canvas.setAttribute("width",this.width);
this.canvas.setAttribute("height",this.height);
if(this._viewBox){this.setViewBox.apply(this,this._viewBox)
}return this
};
R._engine.create=function(){var con=R._getContainer.apply(0,arguments),container=con&&con.container,x=con.x,y=con.y,width=con.width,height=con.height;
if(!container){throw new Error("SVG container not found.")
}var cnvs=$("svg"),css="overflow:hidden;",isFloating;
x=x||0;
y=y||0;
width=width||512;
height=height||342;
$(cnvs,{height:height,version:1.1,width:width,xmlns:"http://www.w3.org/2000/svg"});
if(container==1){cnvs.style.cssText=css+"position:absolute;left:"+x+"px;top:"+y+"px";
R._g.doc.body.appendChild(cnvs);
isFloating=1
}else{cnvs.style.cssText=css+"position:relative";
if(container.firstChild){container.insertBefore(cnvs,container.firstChild)
}else{container.appendChild(cnvs)
}}container=new R._Paper;
container.width=width;
container.height=height;
container.canvas=cnvs;
container.clear();
container._left=container._top=0;
isFloating&&(container.renderfix=function(){});
container.renderfix();
return container
};
R._engine.setViewBox=function(x,y,w,h,fit){eve("raphael.setViewBox",this,this._viewBox,[x,y,w,h,fit]);
var size=mmax(w/this.width,h/this.height),top=this.top,aspectRatio=fit?"meet":"xMinYMin",vb,sw;
if(x==null){if(this._vbSize){size=1
}delete this._vbSize;
vb="0 0 "+this.width+S+this.height
}else{this._vbSize=size;
vb=x+S+y+S+w+S+h
}$(this.canvas,{viewBox:vb,preserveAspectRatio:aspectRatio});
while(size&&top){sw="stroke-width" in top.attrs?top.attrs["stroke-width"]:1;
top.attr({"stroke-width":sw});
top._.dirty=1;
top._.dirtyT=1;
top=top.prev
}this._viewBox=[x,y,w,h,!!fit];
return this
};
R.prototype.renderfix=function(){var cnvs=this.canvas,s=cnvs.style,pos;
try{pos=cnvs.getScreenCTM()||cnvs.createSVGMatrix()
}catch(e){pos=cnvs.createSVGMatrix()
}var left=-pos.e%1,top=-pos.f%1;
if(left||top){if(left){this._left=(this._left+left)%1;
s.left=this._left+"px"
}if(top){this._top=(this._top+top)%1;
s.top=this._top+"px"
}}};
R.prototype.clear=function(){R.eve("raphael.clear",this);
var c=this.canvas;
while(c.firstChild){c.removeChild(c.firstChild)
}this.bottom=this.top=null;
(this.desc=$("desc")).appendChild(R._g.doc.createTextNode("Created with Rapha\xebl "+R.version));
c.appendChild(this.desc);
c.appendChild(this.defs=$("defs"))
};
R.prototype.remove=function(){eve("raphael.remove",this);
this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);
for(var i in this){this[i]=typeof this[i]=="function"?R._removedFactory(i):null
}};
var setproto=R.st;
for(var method in elproto){if(elproto[has](method)&&!setproto[has](method)){setproto[method]=(function(methodname){return function(){var arg=arguments;
return this.forEach(function(el){el[methodname].apply(el,arg)
})
}
})(method)
}}}(window.Raphael);
window.Raphael.vml&&function(R){var has="hasOwnProperty",Str=String,toFloat=parseFloat,math=Math,round=math.round,mmax=math.max,mmin=math.min,abs=math.abs,fillString="fill",separator=/[, ]+/,eve=R.eve,ms=" progid:DXImageTransform.Microsoft",S=" ",E="",map={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},bites=/([clmz]),?([^clmz]*)/gi,blurregexp=/ progid:\S+Blur\([^\)]+\)/g,val=/-?[^,\s-]+/g,cssDot="position:absolute;left:0;top:0;width:1px;height:1px",zoom=21600,pathTypes={path:1,rect:1,image:1},ovalTypes={circle:1,ellipse:1},path2vml=function(path){var total=/[ahqstv]/ig,command=R._pathToAbsolute;
Str(path).match(total)&&(command=R._path2curve);
total=/[clmz]/g;
if(command==R._pathToAbsolute&&!Str(path).match(total)){var res=Str(path).replace(bites,function(all,command,args){var vals=[],isMove=command.toLowerCase()=="m",res=map[command];
args.replace(val,function(value){if(isMove&&vals.length==2){res+=vals+map[command=="m"?"l":"L"];
vals=[]
}vals.push(round(value*zoom))
});
return res+vals
});
return res
}var pa=command(path),p,r;
res=[];
for(var i=0,ii=pa.length;
i<ii;
i++){p=pa[i];
r=pa[i][0].toLowerCase();
r=="z"&&(r="x");
for(var j=1,jj=p.length;
j<jj;
j++){r+=round(p[j]*zoom)+(j!=jj-1?",":E)
}res.push(r)
}return res.join(S)
},compensation=function(deg,dx,dy){var m=R.matrix();
m.rotate(-deg,0.5,0.5);
return{dx:m.x(dx,dy),dy:m.y(dx,dy)}
},setCoords=function(p,sx,sy,dx,dy,deg){var _=p._,m=p.matrix,fillpos=_.fillpos,o=p.node,s=o.style,y=1,flip="",dxdy,kx=zoom/sx,ky=zoom/sy;
s.visibility="hidden";
if(!sx||!sy){return
}o.coordsize=abs(kx)+S+abs(ky);
s.rotation=deg*(sx*sy<0?-1:1);
if(deg){var c=compensation(deg,dx,dy);
dx=c.dx;
dy=c.dy
}sx<0&&(flip+="x");
sy<0&&(flip+=" y")&&(y=-1);
s.flip=flip;
o.coordorigin=(dx*-kx)+S+(dy*-ky);
if(fillpos||_.fillsize){var fill=o.getElementsByTagName(fillString);
fill=fill&&fill[0];
o.removeChild(fill);
if(fillpos){c=compensation(deg,m.x(fillpos[0],fillpos[1]),m.y(fillpos[0],fillpos[1]));
fill.position=c.dx*y+S+c.dy*y
}if(_.fillsize){fill.size=_.fillsize[0]*abs(sx)+S+_.fillsize[1]*abs(sy)
}o.appendChild(fill)
}s.visibility="visible"
};
R.toString=function(){return"Your browser doesn\u2019t support SVG. Falling down to VML.\nYou are running Rapha\xebl "+this.version
};
var addArrow=function(o,value,isEnd){var values=Str(value).toLowerCase().split("-"),se=isEnd?"end":"start",i=values.length,type="classic",w="medium",h="medium";
while(i--){switch(values[i]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":type=values[i];
break;
case"wide":case"narrow":h=values[i];
break;
case"long":case"short":w=values[i];
break
}}var stroke=o.node.getElementsByTagName("stroke")[0];
stroke[se+"arrow"]=type;
stroke[se+"arrowlength"]=w;
stroke[se+"arrowwidth"]=h
},setFillAndStroke=function(o,params){o.attrs=o.attrs||{};
var node=o.node,a=o.attrs,s=node.style,xy,newpath=pathTypes[o.type]&&(params.x!=a.x||params.y!=a.y||params.width!=a.width||params.height!=a.height||params.cx!=a.cx||params.cy!=a.cy||params.rx!=a.rx||params.ry!=a.ry||params.r!=a.r),isOval=ovalTypes[o.type]&&(a.cx!=params.cx||a.cy!=params.cy||a.r!=params.r||a.rx!=params.rx||a.ry!=params.ry),res=o;
for(var par in params){if(params[has](par)){a[par]=params[par]
}}if(newpath){a.path=R._getPath[o.type](o);
o._.dirty=1
}params.href&&(node.href=params.href);
params.title&&(node.title=params.title);
params.target&&(node.target=params.target);
params.cursor&&(s.cursor=params.cursor);
"blur" in params&&o.blur(params.blur);
if(params.path&&o.type=="path"||newpath){node.path=path2vml(~Str(a.path).toLowerCase().indexOf("r")?R._pathToAbsolute(a.path):a.path);
if(o.type=="image"){o._.fillpos=[a.x,a.y];
o._.fillsize=[a.width,a.height];
setCoords(o,1,1,0,0,0)
}}"transform" in params&&o.transform(params.transform);
if(isOval){var cx=+a.cx,cy=+a.cy,rx=+a.rx||+a.r||0,ry=+a.ry||+a.r||0;
node.path=R.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x",round((cx-rx)*zoom),round((cy-ry)*zoom),round((cx+rx)*zoom),round((cy+ry)*zoom),round(cx*zoom))
}if("clip-rect" in params){var rect=Str(params["clip-rect"]).split(separator);
if(rect.length==4){rect[2]=+rect[2]+(+rect[0]);
rect[3]=+rect[3]+(+rect[1]);
var div=node.clipRect||R._g.doc.createElement("div"),dstyle=div.style;
dstyle.clip=R.format("rect({1}px {2}px {3}px {0}px)",rect);
if(!node.clipRect){dstyle.position="absolute";
dstyle.top=0;
dstyle.left=0;
dstyle.width=o.paper.width+"px";
dstyle.height=o.paper.height+"px";
node.parentNode.insertBefore(div,node);
div.appendChild(node);
node.clipRect=div
}}if(!params["clip-rect"]){node.clipRect&&(node.clipRect.style.clip="auto")
}}if(o.textpath){var textpathStyle=o.textpath.style;
params.font&&(textpathStyle.font=params.font);
params["font-family"]&&(textpathStyle.fontFamily='"'+params["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g,E)+'"');
params["font-size"]&&(textpathStyle.fontSize=params["font-size"]);
params["font-weight"]&&(textpathStyle.fontWeight=params["font-weight"]);
params["font-style"]&&(textpathStyle.fontStyle=params["font-style"])
}if("arrow-start" in params){addArrow(res,params["arrow-start"])
}if("arrow-end" in params){addArrow(res,params["arrow-end"],1)
}if(params.opacity!=null||params["stroke-width"]!=null||params.fill!=null||params.src!=null||params.stroke!=null||params["stroke-width"]!=null||params["stroke-opacity"]!=null||params["fill-opacity"]!=null||params["stroke-dasharray"]!=null||params["stroke-miterlimit"]!=null||params["stroke-linejoin"]!=null||params["stroke-linecap"]!=null){var fill=node.getElementsByTagName(fillString),newfill=false;
fill=fill&&fill[0];
!fill&&(newfill=fill=createNode(fillString));
if(o.type=="image"&&params.src){fill.src=params.src
}params.fill&&(fill.on=true);
if(fill.on==null||params.fill=="none"||params.fill===null){fill.on=false
}if(fill.on&&params.fill){var isURL=Str(params.fill).match(R._ISURL);
if(isURL){fill.parentNode==node&&node.removeChild(fill);
fill.rotate=true;
fill.src=isURL[1];
fill.type="tile";
var bbox=o.getBBox(1);
fill.position=bbox.x+S+bbox.y;
o._.fillpos=[bbox.x,bbox.y];
R._preload(isURL[1],function(){o._.fillsize=[this.offsetWidth,this.offsetHeight]
})
}else{fill.color=R.getRGB(params.fill).hex;
fill.src=E;
fill.type="solid";
if(R.getRGB(params.fill).error&&(res.type in {circle:1,ellipse:1}||Str(params.fill).charAt()!="r")&&addGradientFill(res,params.fill,fill)){a.fill="none";
a.gradient=params.fill;
fill.rotate=false
}}}if("fill-opacity" in params||"opacity" in params){var opacity=((+a["fill-opacity"]+1||2)-1)*((+a.opacity+1||2)-1)*((+R.getRGB(params.fill).o+1||2)-1);
opacity=mmin(mmax(opacity,0),1);
fill.opacity=opacity;
if(fill.src){fill.color="none"
}}node.appendChild(fill);
var stroke=(node.getElementsByTagName("stroke")&&node.getElementsByTagName("stroke")[0]),newstroke=false;
!stroke&&(newstroke=stroke=createNode("stroke"));
if((params.stroke&&params.stroke!="none")||params["stroke-width"]||params["stroke-opacity"]!=null||params["stroke-dasharray"]||params["stroke-miterlimit"]||params["stroke-linejoin"]||params["stroke-linecap"]){stroke.on=true
}(params.stroke=="none"||params.stroke===null||stroke.on==null||params.stroke==0||params["stroke-width"]==0)&&(stroke.on=false);
var strokeColor=R.getRGB(params.stroke);
stroke.on&&params.stroke&&(stroke.color=strokeColor.hex);
opacity=((+a["stroke-opacity"]+1||2)-1)*((+a.opacity+1||2)-1)*((+strokeColor.o+1||2)-1);
var width=(toFloat(params["stroke-width"])||1)*0.75;
opacity=mmin(mmax(opacity,0),1);
params["stroke-width"]==null&&(width=a["stroke-width"]);
params["stroke-width"]&&(stroke.weight=width);
width&&width<1&&(opacity*=width)&&(stroke.weight=1);
stroke.opacity=opacity;
params["stroke-linejoin"]&&(stroke.joinstyle=params["stroke-linejoin"]||"miter");
stroke.miterlimit=params["stroke-miterlimit"]||8;
params["stroke-linecap"]&&(stroke.endcap=params["stroke-linecap"]=="butt"?"flat":params["stroke-linecap"]=="square"?"square":"round");
if(params["stroke-dasharray"]){var dasharray={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};
stroke.dashstyle=dasharray[has](params["stroke-dasharray"])?dasharray[params["stroke-dasharray"]]:E
}newstroke&&node.appendChild(stroke)
}if(res.type=="text"){res.paper.canvas.style.display=E;
var span=res.paper.span,m=100,fontSize=a.font&&a.font.match(/\d+(?:\.\d*)?(?=px)/);
s=span.style;
a.font&&(s.font=a.font);
a["font-family"]&&(s.fontFamily=a["font-family"]);
a["font-weight"]&&(s.fontWeight=a["font-weight"]);
a["font-style"]&&(s.fontStyle=a["font-style"]);
fontSize=toFloat(a["font-size"]||fontSize&&fontSize[0])||10;
s.fontSize=fontSize*m+"px";
res.textpath.string&&(span.innerHTML=Str(res.textpath.string).replace(/</g,"&#60;").replace(/&/g,"&#38;").replace(/\n/g,"<br>"));
var brect=span.getBoundingClientRect();
res.W=a.w=(brect.right-brect.left)/m;
res.H=a.h=(brect.bottom-brect.top)/m;
res.X=a.x;
res.Y=a.y+res.H/2;
("x" in params||"y" in params)&&(res.path.v=R.format("m{0},{1}l{2},{1}",round(a.x*zoom),round(a.y*zoom),round(a.x*zoom)+1));
var dirtyattrs=["x","y","text","font","font-family","font-weight","font-style","font-size"];
for(var d=0,dd=dirtyattrs.length;
d<dd;
d++){if(dirtyattrs[d] in params){res._.dirty=1;
break
}}switch(a["text-anchor"]){case"start":res.textpath.style["v-text-align"]="left";
res.bbx=res.W/2;
break;
case"end":res.textpath.style["v-text-align"]="right";
res.bbx=-res.W/2;
break;
default:res.textpath.style["v-text-align"]="center";
res.bbx=0;
break
}res.textpath.style["v-text-kern"]=true
}},addGradientFill=function(o,gradient,fill){o.attrs=o.attrs||{};
var attrs=o.attrs,pow=Math.pow,opacity,oindex,type="linear",fxfy=".5 .5";
o.attrs.gradient=gradient;
gradient=Str(gradient).replace(R._radial_gradient,function(all,fx,fy){type="radial";
if(fx&&fy){fx=toFloat(fx);
fy=toFloat(fy);
pow(fx-0.5,2)+pow(fy-0.5,2)>0.25&&(fy=math.sqrt(0.25-pow(fx-0.5,2))*((fy>0.5)*2-1)+0.5);
fxfy=fx+S+fy
}return E
});
gradient=gradient.split(/\s*\-\s*/);
if(type=="linear"){var angle=gradient.shift();
angle=-toFloat(angle);
if(isNaN(angle)){return null
}}var dots=R._parseDots(gradient);
if(!dots){return null
}o=o.shape||o.node;
if(dots.length){o.removeChild(fill);
fill.on=true;
fill.method="none";
fill.color=dots[0].color;
fill.color2=dots[dots.length-1].color;
var clrs=[];
for(var i=0,ii=dots.length;
i<ii;
i++){dots[i].offset&&clrs.push(dots[i].offset+S+dots[i].color)
}fill.colors=clrs.length?clrs.join():"0% "+fill.color;
if(type=="radial"){fill.type="gradientTitle";
fill.focus="100%";
fill.focussize="0 0";
fill.focusposition=fxfy;
fill.angle=0
}else{fill.type="gradient";
fill.angle=(270-angle)%360
}o.appendChild(fill)
}return 1
},Element=function(node,vml){this[0]=this.node=node;
node.raphael=true;
this.id=R._oid++;
node.raphaelid=this.id;
this.X=0;
this.Y=0;
this.attrs={};
this.paper=vml;
this.matrix=R.matrix();
this._={transform:[],sx:1,sy:1,dx:0,dy:0,deg:0,dirty:1,dirtyT:1};
!vml.bottom&&(vml.bottom=this);
this.prev=vml.top;
vml.top&&(vml.top.next=this);
vml.top=this;
this.next=null
};
var elproto=R.el;
Element.prototype=elproto;
elproto.constructor=Element;
elproto.transform=function(tstr){if(tstr==null){return this._.transform
}var vbs=this.paper._viewBoxShift,vbt=vbs?"s"+[vbs.scale,vbs.scale]+"-1-1t"+[vbs.dx,vbs.dy]:E,oldt;
if(vbs){oldt=tstr=Str(tstr).replace(/\.{3}|\u2026/g,this._.transform||E)
}R._extractTransform(this,vbt+tstr);
var matrix=this.matrix.clone(),skew=this.skew,o=this.node,split,isGrad=~Str(this.attrs.fill).indexOf("-"),isPatt=!Str(this.attrs.fill).indexOf("url(");
matrix.translate(-0.5,-0.5);
if(isPatt||isGrad||this.type=="image"){skew.matrix="1 0 0 1";
skew.offset="0 0";
split=matrix.split();
if((isGrad&&split.noRotation)||!split.isSimple){o.style.filter=matrix.toFilter();
var bb=this.getBBox(),bbt=this.getBBox(1),dx=bb.x-bbt.x,dy=bb.y-bbt.y;
o.coordorigin=(dx*-zoom)+S+(dy*-zoom);
setCoords(this,1,1,dx,dy,0)
}else{o.style.filter=E;
setCoords(this,split.scalex,split.scaley,split.dx,split.dy,split.rotate)
}}else{o.style.filter=E;
skew.matrix=Str(matrix);
skew.offset=matrix.offset()
}oldt&&(this._.transform=oldt);
return this
};
elproto.rotate=function(deg,cx,cy){if(this.removed){return this
}if(deg==null){return
}deg=Str(deg).split(separator);
if(deg.length-1){cx=toFloat(deg[1]);
cy=toFloat(deg[2])
}deg=toFloat(deg[0]);
(cy==null)&&(cx=cy);
if(cx==null||cy==null){var bbox=this.getBBox(1);
cx=bbox.x+bbox.width/2;
cy=bbox.y+bbox.height/2
}this._.dirtyT=1;
this.transform(this._.transform.concat([["r",deg,cx,cy]]));
return this
};
elproto.translate=function(dx,dy){if(this.removed){return this
}dx=Str(dx).split(separator);
if(dx.length-1){dy=toFloat(dx[1])
}dx=toFloat(dx[0])||0;
dy=+dy||0;
if(this._.bbox){this._.bbox.x+=dx;
this._.bbox.y+=dy
}this.transform(this._.transform.concat([["t",dx,dy]]));
return this
};
elproto.scale=function(sx,sy,cx,cy){if(this.removed){return this
}sx=Str(sx).split(separator);
if(sx.length-1){sy=toFloat(sx[1]);
cx=toFloat(sx[2]);
cy=toFloat(sx[3]);
isNaN(cx)&&(cx=null);
isNaN(cy)&&(cy=null)
}sx=toFloat(sx[0]);
(sy==null)&&(sy=sx);
(cy==null)&&(cx=cy);
if(cx==null||cy==null){var bbox=this.getBBox(1)
}cx=cx==null?bbox.x+bbox.width/2:cx;
cy=cy==null?bbox.y+bbox.height/2:cy;
this.transform(this._.transform.concat([["s",sx,sy,cx,cy]]));
this._.dirtyT=1;
return this
};
elproto.hide=function(){!this.removed&&(this.node.style.display="none");
return this
};
elproto.show=function(){!this.removed&&(this.node.style.display=E);
return this
};
elproto._getBBox=function(){if(this.removed){return{}
}return{x:this.X+(this.bbx||0)-this.W/2,y:this.Y-this.H,width:this.W,height:this.H}
};
elproto.remove=function(){if(this.removed||!this.node.parentNode){return
}this.paper.__set__&&this.paper.__set__.exclude(this);
R.eve.unbind("raphael.*.*."+this.id);
R._tear(this,this.paper);
this.node.parentNode.removeChild(this.node);
this.shape&&this.shape.parentNode.removeChild(this.shape);
for(var i in this){this[i]=typeof this[i]=="function"?R._removedFactory(i):null
}this.removed=true
};
elproto.attr=function(name,value){if(this.removed){return this
}if(name==null){var res={};
for(var a in this.attrs){if(this.attrs[has](a)){res[a]=this.attrs[a]
}}res.gradient&&res.fill=="none"&&(res.fill=res.gradient)&&delete res.gradient;
res.transform=this._.transform;
return res
}if(value==null&&R.is(name,"string")){if(name==fillString&&this.attrs.fill=="none"&&this.attrs.gradient){return this.attrs.gradient
}var names=name.split(separator),out={};
for(var i=0,ii=names.length;
i<ii;
i++){name=names[i];
if(name in this.attrs){out[name]=this.attrs[name]
}else{if(R.is(this.paper.customAttributes[name],"function")){out[name]=this.paper.customAttributes[name].def
}else{out[name]=R._availableAttrs[name]
}}}return ii-1?out:out[names[0]]
}if(this.attrs&&value==null&&R.is(name,"array")){out={};
for(i=0,ii=name.length;
i<ii;
i++){out[name[i]]=this.attr(name[i])
}return out
}var params;
if(value!=null){params={};
params[name]=value
}value==null&&R.is(name,"object")&&(params=name);
for(var key in params){eve("raphael.attr."+key+"."+this.id,this,params[key])
}if(params){for(key in this.paper.customAttributes){if(this.paper.customAttributes[has](key)&&params[has](key)&&R.is(this.paper.customAttributes[key],"function")){var par=this.paper.customAttributes[key].apply(this,[].concat(params[key]));
this.attrs[key]=params[key];
for(var subkey in par){if(par[has](subkey)){params[subkey]=par[subkey]
}}}}if(params.text&&this.type=="text"){this.textpath.string=params.text
}setFillAndStroke(this,params)
}return this
};
elproto.toFront=function(){!this.removed&&this.node.parentNode.appendChild(this.node);
this.paper&&this.paper.top!=this&&R._tofront(this,this.paper);
return this
};
elproto.toBack=function(){if(this.removed){return this
}if(this.node.parentNode.firstChild!=this.node){this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild);
R._toback(this,this.paper)
}return this
};
elproto.insertAfter=function(element){if(this.removed){return this
}if(element.constructor==R.st.constructor){element=element[element.length-1]
}if(element.node.nextSibling){element.node.parentNode.insertBefore(this.node,element.node.nextSibling)
}else{element.node.parentNode.appendChild(this.node)
}R._insertafter(this,element,this.paper);
return this
};
elproto.insertBefore=function(element){if(this.removed){return this
}if(element.constructor==R.st.constructor){element=element[0]
}element.node.parentNode.insertBefore(this.node,element.node);
R._insertbefore(this,element,this.paper);
return this
};
elproto.blur=function(size){var s=this.node.runtimeStyle,f=s.filter;
f=f.replace(blurregexp,E);
if(+size!==0){this.attrs.blur=size;
s.filter=f+S+ms+".Blur(pixelradius="+(+size||1.5)+")";
s.margin=R.format("-{0}px 0 0 -{0}px",round(+size||1.5))
}else{s.filter=f;
s.margin=0;
delete this.attrs.blur
}};
R._engine.path=function(pathString,vml){var el=createNode("shape");
el.style.cssText=cssDot;
el.coordsize=zoom+S+zoom;
el.coordorigin=vml.coordorigin;
var p=new Element(el,vml),attr={fill:"none",stroke:"#000"};
pathString&&(attr.path=pathString);
p.type="path";
p.path=[];
p.Path=E;
setFillAndStroke(p,attr);
vml.canvas.appendChild(el);
var skew=createNode("skew");
skew.on=true;
el.appendChild(skew);
p.skew=skew;
p.transform(E);
return p
};
R._engine.rect=function(vml,x,y,w,h,r){var path=R._rectPath(x,y,w,h,r),res=vml.path(path),a=res.attrs;
res.X=a.x=x;
res.Y=a.y=y;
res.W=a.width=w;
res.H=a.height=h;
a.r=r;
a.path=path;
res.type="rect";
return res
};
R._engine.ellipse=function(vml,x,y,rx,ry){var res=vml.path(),a=res.attrs;
res.X=x-rx;
res.Y=y-ry;
res.W=rx*2;
res.H=ry*2;
res.type="ellipse";
setFillAndStroke(res,{cx:x,cy:y,rx:rx,ry:ry});
return res
};
R._engine.circle=function(vml,x,y,r){var res=vml.path(),a=res.attrs;
res.X=x-r;
res.Y=y-r;
res.W=res.H=r*2;
res.type="circle";
setFillAndStroke(res,{cx:x,cy:y,r:r});
return res
};
R._engine.image=function(vml,src,x,y,w,h){var path=R._rectPath(x,y,w,h),res=vml.path(path).attr({stroke:"none"}),a=res.attrs,node=res.node,fill=node.getElementsByTagName(fillString)[0];
a.src=src;
res.X=a.x=x;
res.Y=a.y=y;
res.W=a.width=w;
res.H=a.height=h;
a.path=path;
res.type="image";
fill.parentNode==node&&node.removeChild(fill);
fill.rotate=true;
fill.src=src;
fill.type="tile";
res._.fillpos=[x,y];
res._.fillsize=[w,h];
node.appendChild(fill);
setCoords(res,1,1,0,0,0);
return res
};
R._engine.text=function(vml,x,y,text){var el=createNode("shape"),path=createNode("path"),o=createNode("textpath");
x=x||0;
y=y||0;
text=text||"";
path.v=R.format("m{0},{1}l{2},{1}",round(x*zoom),round(y*zoom),round(x*zoom)+1);
path.textpathok=true;
o.string=Str(text);
o.on=true;
el.style.cssText=cssDot;
el.coordsize=zoom+S+zoom;
el.coordorigin="0 0";
var p=new Element(el,vml),attr={fill:"#000",stroke:"none",font:R._availableAttrs.font,text:text};
p.shape=el;
p.path=path;
p.textpath=o;
p.type="text";
p.attrs.text=Str(text);
p.attrs.x=x;
p.attrs.y=y;
p.attrs.w=1;
p.attrs.h=1;
setFillAndStroke(p,attr);
el.appendChild(o);
el.appendChild(path);
vml.canvas.appendChild(el);
var skew=createNode("skew");
skew.on=true;
el.appendChild(skew);
p.skew=skew;
p.transform(E);
return p
};
R._engine.setSize=function(width,height){var cs=this.canvas.style;
this.width=width;
this.height=height;
width==+width&&(width+="px");
height==+height&&(height+="px");
cs.width=width;
cs.height=height;
cs.clip="rect(0 "+width+" "+height+" 0)";
if(this._viewBox){R._engine.setViewBox.apply(this,this._viewBox)
}return this
};
R._engine.setViewBox=function(x,y,w,h,fit){R.eve("raphael.setViewBox",this,this._viewBox,[x,y,w,h,fit]);
var width=this.width,height=this.height,size=1/mmax(w/width,h/height),H,W;
if(fit){H=height/h;
W=width/w;
if(w*H<width){x-=(width-w*H)/2/H
}if(h*W<height){y-=(height-h*W)/2/W
}}this._viewBox=[x,y,w,h,!!fit];
this._viewBoxShift={dx:-x,dy:-y,scale:size};
this.forEach(function(el){el.transform("...")
});
return this
};
var createNode;
R._engine.initWin=function(win){var doc=win.document;
doc.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");
try{!doc.namespaces.rvml&&doc.namespaces.add("rvml","urn:schemas-microsoft-com:vml");
createNode=function(tagName){return doc.createElement("<rvml:"+tagName+' class="rvml">')
}
}catch(e){createNode=function(tagName){return doc.createElement("<"+tagName+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
}
}};
R._engine.initWin(R._g.win);
R._engine.create=function(){var con=R._getContainer.apply(0,arguments),container=con.container,height=con.height,s,width=con.width,x=con.x,y=con.y;
if(!container){throw new Error("VML container not found.")
}var res=new R._Paper,c=res.canvas=R._g.doc.createElement("div"),cs=c.style;
x=x||0;
y=y||0;
width=width||512;
height=height||342;
res.width=width;
res.height=height;
width==+width&&(width+="px");
height==+height&&(height+="px");
res.coordsize=zoom*1000+S+zoom*1000;
res.coordorigin="0 0";
res.span=R._g.doc.createElement("span");
res.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;";
c.appendChild(res.span);
cs.cssText=R.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",width,height);
if(container==1){R._g.doc.body.appendChild(c);
cs.left=x+"px";
cs.top=y+"px";
cs.position="absolute"
}else{if(container.firstChild){container.insertBefore(c,container.firstChild)
}else{container.appendChild(c)
}}res.renderfix=function(){};
return res
};
R.prototype.clear=function(){R.eve("raphael.clear",this);
this.canvas.innerHTML=E;
this.span=R._g.doc.createElement("span");
this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;";
this.canvas.appendChild(this.span);
this.bottom=this.top=null
};
R.prototype.remove=function(){R.eve("raphael.remove",this);
this.canvas.parentNode.removeChild(this.canvas);
for(var i in this){this[i]=typeof this[i]=="function"?R._removedFactory(i):null
}return true
};
var setproto=R.st;
for(var method in elproto){if(elproto[has](method)&&!setproto[has](method)){setproto[method]=(function(methodname){return function(){var arg=arguments;
return this.forEach(function(el){el[methodname].apply(el,arg)
})
}
})(method)
}}}(window.Raphael);jindo.masonry=jindo.$Class({_htMasonryData:new Object,_htOptions:null,_nRowCnt:0,_fCallBack:function(){},$init:function(sSelector,htOptions,fCallback){this._htMasonryData=this._setProps();
this._masonry(sSelector,htOptions,fCallback)
},append:function(sSelector,htOptions){this._masonry(sSelector,htOptions)
},resize:function(){this._masonryResize(this._resize$wall,this._resizehtOpts,this._resizehtProps)
},_masonry:function(sSelector,htOptions,fCallback){var $wall=jindo.$$.getSingle(sSelector);
if(!$wall){return
}var masoned=(this._htOptions==null)?false:true;
var _htProps=this._extend(new Object,this._htMasonryData);
_htProps.masoned=(this._htOptions==null)?false:true;
var _htPreviousOptions=_htProps.masoned?this._htOptions.options:new Object;
var _htOpts=this._extend({},_htProps.defaults,_htPreviousOptions,htOptions);
_htProps.options=_htOpts.saveOptions?_htOpts:_htPreviousOptions;
this._callback=fCallback||function(){};
_htOpts.$brickParent=(_htProps.masoned&&_htOpts.appendedContent!=undefined)?_htOpts.appendedContent:$wall;
if(_htOpts.$brickParent.childNodes.length>0){var _bResult=this._masonrySetUp($wall,_htOpts,_htProps);
if(!_bResult){return
}this._masonryArrange($wall,_htOpts,_htProps);
var _bResizeOn=_htPreviousOptions.resizeable;
if(!_bResizeOn&&_htOpts.resizeable&&!masoned){this._resize$wall=$wall;
this._resizehtOpts=_htOpts;
this._resizehtProps=_htProps;
var _oResize=jindo.$Fn(function(){if(this.timerId){clearTimeout(this.timerId)
}var obj=this;
this.timerId=setTimeout(function(){obj._masonryResize($wall,_htOpts,_htProps)
},50)
},this).attach(window,"resize");
var u=navigator.userAgent;
function f(s,h){return((h||"").indexOf(s)>-1)
}var opera=(typeof window.opera!="undefined")||f("Opera",u);
var ie=!opera&&f("MSIE",u);
if(ie){var self=this;
setInterval(function(){self._masonryResize($wall,_htOpts,_htProps)
},200)
}}if(_bResizeOn&&!_htOpts.resizeable){jindo.$Fn(_oResize).detach(window,"resize")
}}else{return
}},_masonrySetUp:function($wall,htOpts,htProps){var _elWall=jindo.$Element($wall);
htProps.$bricks=(htOpts.itemSelector==undefined)?htOpts.$brickParent.childNodes:jindo.$Element(htOpts.$brickParent).queryAll(htOpts.itemSelector);
if(!htProps.$bricks||htProps.$bricks.length===0){return false
}if(!htProps.masoned){$wall.style.position="relative"
}if(htOpts.columnWidth==undefined){htProps.colW=htProps.masoned?this._htOptions.colW:0;
if(htProps.colW==0){var _nChildLength=htProps.$bricks.length;
for(var i=0;
i<_nChildLength;
i++){var _elElm=htProps.$bricks[i].$value();
if(_elElm.nodeType!=1){continue
}var _nWidth=this._outerWidth(htProps.$bricks[i],true);
if(_nWidth){htProps.colW=_nWidth;
break
}}}if(htProps.colW==0){return false
}}else{htProps.colW=htOpts.columnWidth
}var _nWallWidth=_elWall.width();
if(htOpts.lastWidth){_nWallWidth+=htOpts.lastWidth
}if(htOpts.minWindowWidth&&_nWallWidth<htOpts.minWindowWidth){_nWallWidth=htOpts.minWindowWidth
}htProps.colCount=Math.floor((parseInt(_nWallWidth)/parseInt(htProps.colW)));
htProps.colCount=htProps.colCount<1?1:htProps.colCount;
return true
},_masonryArrange:function($wall,htOpts,htProps){var _elCursor=jindo.$("<div>");
jindo.$Element($wall).prepend(_elCursor);
var posInfo=this._position(_elCursor);
htProps.posTop=Math.round(posInfo.top);
htProps.posLeft=Math.round(posInfo.left);
jindo.$Element(_elCursor).leave();
if(htProps.masoned&&htOpts.appendedContent!=undefined){htProps.colY=this._htOptions.colY;
for(i=this._htOptions.colCount;
i<=htProps.colCount;
i++){htProps.colY[i]=htProps.posTop
}}else{htProps.colY=[];
var maxlen=htProps.colCount;
for(i=0;
i<maxlen;
i++){htProps.colY[i]=htProps.posTop
}}if(htOpts.singleMode){var _nChildLength=htProps.$bricks.length;
for(var i=0;
i<_nChildLength;
i++){var $brick=jindo.$(htProps.$bricks[i]);
if($brick.nodeType!=1){continue
}if(!htProps.masoned||htOpts.appendedContent!=undefined){$brick.style.position="absolute"
}if(htOpts.oneline){$brick.style.display="block"
}if(htOpts.oneline&&htProps.colCount<=i){$brick.style.display="none";
continue
}this._placeBrick($brick,htProps.colCount,htProps.colY,1,htProps)
}}else{var _oMasonry=this;
var _nChildLength=htProps.$bricks.length;
for(var i=0;
i<_nChildLength;
i++){$brick=htProps.$bricks[i].$value();
if($brick.nodeType!=1){continue
}if(!htProps.masoned||htOpts.appendedContent!=undefined){$brick.style.position="absolute"
}if(htOpts.oneline){$brick.style.display="block"
}if(htOpts.oneline&&htProps.colCount<=i){$brick.style.display="none";
return
}var _nBrickWidth=htOpts.columnWidth?htOpts.columnWidth:_oMasonry._outerWidth($brick,true);
var _nColSpan=Math.ceil(_nBrickWidth/htProps.colW);
_nColSpan=_nColSpan>htProps.colCount?htProps.colCount:_nColSpan;
if(_nColSpan==1){_oMasonry._placeBrick($brick,htProps.colCount,htProps.colY,1,htProps)
}else{var _nGroupCount=htProps.colCount+1-_nColSpan;
var _aGroupY=[0];
for(i=0;
i<_nGroupCount;
i++){_aGroupY[i]=0;
for(j=0;
j<_nColSpan;
j++){_aGroupY[i]=_aGroupY[i]>htProps.colY[i+j]?_aGroupY[i]:htProps.colY[i+j]
}}_oMasonry._placeBrick($brick,_nGroupCount,_aGroupY,_nColSpan,htProps)
}}}htProps.wallH=0;
for(i=0;
i<htProps.colCount;
i++){htProps.wallH=htProps.wallH>htProps.colY[i]?parseInt(htProps.wallH):parseInt(htProps.colY[i])
}if(htProps.options.setHeight){$wall.style.height=parseInt(htProps.wallH-htProps.posTop)+"px"
}this._callback.call(htProps.$bricks);
this._htOptions=htProps
},_placeBrick:function($brick,nSetCount,aSetY,nSetSpan,htProps){var _nShortCol=0;
for(i=0;
i<nSetCount;
i++){_nShortCol=aSetY[i]<aSetY[_nShortCol]?i:_nShortCol
}$brick.style.top=aSetY[_nShortCol]+"px";
$brick.style.left=htProps.colW*_nShortCol+htProps.posLeft+"px";
var image=htProps.options.marginHeight?jindo.$Element($brick).query("img"):null;
if(image){var height=parseInt(jindo.$Element(image).attr("height"),10);
var marginHeight=!isNaN(height)?(height+parseInt(htProps.options.marginHeight,10)):0
}var _nBrickHeight=htProps.options.columnHeight?parseInt(htProps.options.columnHeight):(marginHeight?marginHeight:this._outerHeight($brick,true));
for(i=0;
i<nSetSpan;
i++){htProps.colY[_nShortCol+i]=parseInt(aSetY[_nShortCol]+_nBrickHeight)
}},_masonryResize:function($wall,htOpts,htProps){var _nPrevColCount=this._htOptions.colCount;
this._masonrySetUp($wall,htOpts,htProps);
if(htProps.colCount!=_nPrevColCount){this._masonryArrange($wall,htOpts,htProps)
}if(this.timerId){clearTimeout(this.timerId)
}},_setProps:function(){var _oOptions={defaults:{singleMode:false,columnWidth:undefined,columnHeight:undefined,itemSelector:undefined,appendedContent:undefined,saveOptions:true,resizeable:true,oneline:false,setHeight:true,minYSort:false,minWindowWidth:undefined,marginHeight:undefined,lastWidth:undefined},colW:undefined,colCount:undefined,colY:undefined,wallH:undefined,masoned:undefined,posTop:0,posLeft:0,options:undefined,$bricks:undefined,$brickParent:undefined};
return _oOptions
},_outerWidth:function(elElement,bMargin){return elElement?this._css(elElement,"width",false,bMargin?"margin":"border"):null
},_outerHeight:function(elElement,bMargin){var _nAttrHeight=parseInt(jindo.$Element(elElement).attr("height"));
if(_nAttrHeight){return _nAttrHeight
}return elElement?this._css(elElement,"height",false,bMargin?"margin":"border"):null
},_css:function(elElement,sName,bForce,sExtra){elElement=(elElement.$value)?elElement.$value():elElement;
var elTempElement=jindo.$Element(elElement);
var bDispChange=false;
if(elTempElement.css("display")=="none"){elTempElement.css("display","block");
bDispChange=true
}if(sName==="width"||sName==="height"){var _sVal;
var _aWhich=sName==="width"?["Left","Right"]:["Top","Bottom"];
var offsetWidth=elElement.offsetWidth;
if(offsetWidth!==0){_sVal=sName==="width"?offsetWidth:elElement.offsetHeight;
if(sExtra==="margin"){_sVal+=parseFloat(elTempElement.css("margin"+_aWhich[0]))||0;
_sVal+=parseFloat(elTempElement.css("margin"+_aWhich[1]))||0
}}if(bDispChange){elTempElement.css("display","none")
}var ret=(0>Math.round(_sVal))?0:Math.round(_sVal);
return(isNaN(ret))?0:ret
}},_position:function(elElement){if(!elElement){return null
}var _oOffsetParent=this._offsetParent(elElement);
var _htOffset=jindo.$Element(elElement).offset();
_htOffset.top=_htOffset.top-elElement.offsetTop;
var _htParentOffset=/^body|html$/i.test(_oOffsetParent.nodeName)?{top:0,left:0}:jindo.$Element(_oOffsetParent).offset();
_htOffset.top-=parseFloat(jindo.$Element(elElement).css("marginTop"))||0;
_htOffset.left-=parseFloat(jindo.$Element(elElement).css("marginLeft"))||0;
_htParentOffset.top+=parseFloat(jindo.$Element(_oOffsetParent).css("borderTopWidth"))||0;
_htParentOffset.left+=parseFloat(jindo.$Element(_oOffsetParent).css("borderLeftWidth"))||0;
return{top:_htOffset.top-_htParentOffset.top,left:_htOffset.left-_htParentOffset.left}
},_offsetParent:function(elElement){var _elOffsetParent=elElement.offsetParent||document.body;
while(_elOffsetParent&&(!/^body|html$/i.test(_elOffsetParent.nodeName)&&jindo.$Element(_elOffsetParent).css("position")==="static")){_elOffsetParent=_elOffsetParent.offsetParent
}return _elOffsetParent
},_extend:function(){var _oTarget=arguments[0]||new Object;
var i=1;
var _nLength=arguments.length;
var _oOptions;
var _sName;
var _oSrc;
var _oCopy;
for(;
i<_nLength;
i++){if((_oOptions=arguments[i])!=null){for(_sName in _oOptions){_oSrc=_oTarget[_sName];
_oCopy=_oOptions[_sName];
if(_oTarget===_oCopy){continue
}if(_oCopy!==undefined){_oTarget[_sName]=_oCopy
}}}}return _oTarget
}});var PwmManager;
PwmManager=jindo.$Class({_type:"",_idxFilterProc:0,_lenFilterText:0,_oFuncOrForm:null,_aMsgPrefix:{},_aFilterText:{},_isProcessing:false,startFilter:function(type,oFuncOrForm,aMsgPrefix,aFilterText){if(this._isProcessing){return
}this._type=type;
this._idxFilterProc=0;
this._lenFilterText=aFilterText.length;
this._oFuncOrForm=oFuncOrForm;
this._aMsgPrefix=aMsgPrefix;
this._aFilterText=aFilterText;
this._requestFilter();
this._isProcessing=true
},_requestFilter:function(){var content=this._aFilterText[this._idxFilterProc];
var callback=jindo.$Fn(this._callbackFilter,this).bind();
var oAjaxOption={type:this._type,content:encodeURIComponent(content)};
var ajax=jindo.$Ajax("/movie/cmon/filter.nhn",{method:"post",onload:callback,onerror:callback,timeout:2});
ajax.request(oAjaxOption)
},_callbackFilter:function(res){if(res!=null&&res.json!=null){var filterWordList=res.json().jsonList;
if(this._checkFilterWord(filterWordList)){this._isProcessing=false;
return
}}if(this._idxFilterProc+1>=this._lenFilterText){this._doneRequestFilter();
this._isProcessing=false;
return
}this._nextFilter()
},_nextFilter:function(){this._idxFilterProc++;
this._requestFilter()
},_checkFilterWord:function(filterWordList){if(filterWordList==null||filterWordList.length==0){return false
}var aFilerWords=new Array();
var isAdult=false;
var isAbusing=false;
for(var i=0;
i<filterWordList.length;
i++){var oFilter=filterWordList[i];
if(oFilter.pwReason.indexOf("음란성")!=-1||oFilter.pwReason.indexOf("욕설")!=-1||oFilter.pwReason.indexOf("기타")!=-1){aFilerWords.push(oFilter.name);
isAdult=true
}else{if(oFilter.pwReason.indexOf("검색어뷰징")!=-1||oFilter.pwReason.indexOf("도배")!=-1){aFilerWords.push(oFilter.name);
isAbusing=true
}}}if(isAdult){var msgPrefix=this._aMsgPrefix[this._idxFilterProc];
var filterWords=aFilerWords.join(", ");
this._showCautionLayer("/movie/bi/mi/pwmAdultResultLayer.nhn?title="+msgPrefix+"&pwmWords="+filterWords+"&domain="+document.domain,418,385);
return true
}else{if(isAbusing){this._showCautionLayer("/movie/bi/mi/pwmAbusingResultLayer.nhn&domain="+document.domain,418,483);
return true
}}return false
},_doneRequestFilter:function(){if("function"==typeof this._oFuncOrForm){this._oFuncOrForm()
}else{if(this._oFuncOrForm.tagName!=null&&"FORM"==this._oFuncOrForm.tagName.toUpperCase()){this._oFuncOrForm.submit()
}}},_showCautionLayer:function(url,width,height){var oEl=null;
if(jindo.$("_pwmIframe")==null){oEl=document.createElement("div");
oEl.id="_pwmIframe";
oEl.className="ly_limit";
oEl.style.position="absolute";
oEl.style.width=width+"px";
oEl.style.height=height+"px";
oEl.style.zIndex="99999999";
oEl.style.display="none"
}else{oEl=jindo.$("_pwmIframe")
}oEl.innerHTML='<iframe src="'+url+'" width="'+width+'" height="'+height+'" scrolling="no" frameborder="0">';
oEl.style.display="";
oEl.style.left=parent.document.body.clientWidth/2-parseInt(oEl.style.width)/2;
oEl.style.top=parent.document.body.clientHeight/2-(parseInt(oEl.style.height)/2)+document.body.scrollTop;
jindo.$Element(document.body).append(oEl)
}});nhn.movie=nhn.movie||{};
nhn.movie.end=nhn.movie.end||{};
nhn.movie.end.movie=nhn.movie.end.movie||{};
nhn.movie.end.people=nhn.movie.end.people||{};
nhn.movie.Core={};(function(jindo){var htDefaultOptions={sMenuScrollBoxId:"scrollbar",sHeaderId:"header",nMinWidthForHorizontalMiddle:1280};
var oNavigator=jindo.$Agent().navigator();
nhn.movie.LNB=jindo.$Class({$init:function(htOptions){this.option(htDefaultOptions);
this.option(htOptions||{});
this._oDocument=jindo.$Document();
this._welMenuScrollBox=jindo.$Element(this.option("sMenuScrollBoxId"));
try{if(!oNavigator.ie||(oNavigator.ie&&oNavigator.version>7&&this._oDocument.clientSize().width>1095)){this._oMenuScrollBox=new jindo.ScrollBox(this._welMenuScrollBox.$value(),{nDelta:32,sOverflowX:"hidden",sOverflowY:"auto"})
}else{jindo.$Element(this.option("sHeaderId")).css("position","absolute")
}}catch(e){this._oMenuScrollBox=undefined
}this._nMenuWidth=this._welMenuScrollBox.$value().offsetWidth;
this._nMenuOffsetTop=47;
this._wfWindowResize=jindo.$Fn(this._onWindowResize,this);
this._wfWindowScroll=jindo.$Fn(this._onWindowScroll,this);
this.update();
this._wfWindowResize.attach(window,"resize");
this._wfWindowScroll.attach(window,"scroll")
},_onWindowResize:function(we){this._nResizeTimer&&clearTimeout(this._nResizeTimer);
this._nResizeTimer=setTimeout(jindo.$Fn(function(){this.update()
},this).bind(),100)
},_onWindowScroll:function(we){clearTimeout(this._nTimer);
this._nTimer=null;
this._nTimer=setTimeout(jindo.$Fn(function(){},this).bind(),0)
},update:function(){if(this._oMenuScrollBox!=undefined){var htDocSize=this._oDocument.clientSize(),oBoxSize=this._oMenuScrollBox.getBoxSize(),oSize={nWidth:this._nMenuWidth,nHeight:htDocSize.height-this._nMenuOffsetTop};
if(oBoxSize.nWidth!=oSize.nWidth||oBoxSize.nHeight!=oSize.nHeight){this._nPrevMenuScrollTop=this._oMenuScrollBox.getScrollTop();
this._oMenuScrollBox.setSize(oSize.nWidth,oSize.nHeight);
this._oMenuScrollBox.setScrollTop(this._nPrevMenuScrollTop)
}}jindo.$Element("header").attr({style:"bottom: 0;"})
}}).extend(jindo.Component)
})(jindo);var searchDefaultImage=function(source,type){var sDefaultImage="";
switch(type){case 0:sDefaultImage="https://ssl.pstatic.net/static/movie/2012/06/dft_img30x43.png";
break;
case 1:sDefaultImage="https://ssl.pstatic.net/static/movie/2012/06/dft_img30x48.png";
break
}source.src=sDefaultImage
};
(function(jindo){var options=null;
var elAuto=null;
var bDirectClick=false;
var bOpenAuto=false;
var oFlag={bMovie:false,bPeople:false};
var template={area:'<div id="jAutoComplate" class="auto_tx_area"><div class="auto_tx_foorer"><a href="#" class="all_result">전체 검색 결과보기</a><p class="auto_tx_etc"><a href="http://help.naver.com/ops/step1/faq.nhn" target="_blank" class="helper">도움말</a><a href="#" class="clse">기능끄기</a></p><img src="https://ssl.pstatic.net/sstatic/search/images11/img_atcmp15.gif" alt="" width="218" height="23" class="help" id="help_tooltip2" style="position:absolute;bottom: 37px; right: 1px; display: none; "></div></div>',auto_mv:'<div id="jAutoMV" class="auto_mv"><strong class="h_auto_mv">영화</strong><ul></ul></div>',auto_mv_contents:'<li data-title="{{title}}"><a href="{{link}}"><p class="auto_thumb"><img src="{{thumbnail}}" width="30" height="43" alt="{{title}}" onerror="searchDefaultImage(this,0);"/></p><div class="thumb_spec"><p class="auto_tx_tit">{{title_match}} <span class="auto_since">{{time}}</span></p><p class="etc_spec">{{people}}</p></div></a><!-- N=a:GNB.sug --></li>',auto_people:'<div id="jAutoPP" class="auto_people"><strong class="h_auto_people">영화인</strong><ul></ul></div>',auto_people_contents:'<li data-title="{{title}}"><a href="{{link}}"><p class="auto_thumb"><img src="{{thumbnail}}" width="30" height="38" alt="{{title}}" onerror="searchDefaultImage(this,1);"/></p><div class="thumb_spec"><p class="auto_tx_tit">{{title_match}} <span class="auto_since">{{time}}</span></p><dl>{{movie}}</dl></div></a><!-- N=a:GNB.sug --></li>'};
nhn.movie.Search=jindo.$Class({options:{},$init:function(oOptions){var _self=this;
this.options=oOptions;
options=this.options;
var elArea=jindo.$Element(options.area);
var bAutoClose=true;
this._oCookie=jindo.$Cookie();
this._auto=this._oCookie.get("NM_AUTOCOMPLETE")||"ON";
try{jindo.$Element("jSearchArea").remove("jAutoComplate");
elAuto=null;
oFlag={bMovie:false,bPeople:false};
jindo.$Element("ipt_tx_srch").$value().value=""
}catch(e){}if(elArea){var closeSearch=function(event){var parent=jindo.$Element(event.element).parent(function(v){return v.hasClass("_view")
});
if(parent.length>0){return
}if(event.type=="mousemove"&&bAutoClose==false){return
}if(bDirectClick){bDirectClick=false;
return
}try{jindo.$Element("jAutoComplate").hide()
}catch(e){}if(jindo.$Element("ipt_tx_srch").$value().value==""){jindo.$Element(jindo.$Element("jSearchArea").query(".ipt_srch label")).show()
}if(elArea.query(".auto_tx img")){if(_self._auto=="ON"){_self.autoBtn("hide")
}}bAutoClose=true;
jindo.$Fn(closeSearch,this).detach(document,"mousedown")
};
jindo.$Fn(function(event){jindo.$Fn(closeSearch,this).attach(document,"mousedown");
var parent=jindo.$Element(event.element).parent(function(v){return v.hasClass("auto_tx_area")
});
if(parent.length>0){bDirectClick=true;
return
}},this).attach(elArea,"mousedown");
jindo.$Fn(function(event){try{if(_self._auto=="ON"){if(jindo.$Element("ipt_tx_srch").$value().value!=""){if(bOpenAuto&&jindo.$Element("jAutoComplate")&&jindo.$Element("jAutoComplate").css("display")=="none"){bOpenAuto=false
}else{if(!bOpenAuto&&jindo.$Element("jAutoComplate")&&jindo.$Element("jAutoComplate").css("display")!="none"){bOpenAuto=true
}}if(bOpenAuto==false){_self.autoBtn("show");
jindo.$Element("jAutoComplate").show();
bOpenAuto=true
}else{_self.autoBtn("hide");
jindo.$Element("jAutoComplate").hide();
bOpenAuto=false
}}}}catch(e){}bDirectClick=false;
jindo.$Element(jindo.$Element("jSearchArea").query(".ipt_srch label")).hide()
},this).attach(jindo.$("ipt_tx_srch"),"click");
jindo.$Fn(function(event){if(jindo.$Element("ipt_tx_srch").$value().value.length<=0){return
}var elSearchForm=jindo.$Form("jSearchForm");
if(elSearchForm){elSearchForm.value("query",(sTemp!="")?sTemp:jindo.$Element("ipt_tx_srch").$value().value);
elSearchForm.submit()
}},this).attach(jindo.$Element(elArea.query(".btn_srch")),"click");
jindo.$Fn(function(event){if(_self._auto=="ON"){if(elAuto==null){_self.autoBtn("show");
makeAuto(null)
}else{if(elAuto.css("display")!="none"){elAuto.hide();
_self.autoBtn("hide")
}else{_self.autoBtn("show");
elAuto.show();
if(jindo.$Element("ipt_tx_srch").$value().value!=""){oWatchInput.fireChangeEvent()
}}}}else{_self._setCookie("NM_AUTOCOMPLETE","ON");
_self._auto="ON";
if(elAuto==null){makeAuto(null)
}else{elAuto.show()
}if(jindo.$Element("ipt_tx_srch").$value().value!=""){oWatchInput.fireChangeEvent()
}}},this).attach(jindo.$(elArea.query(".auto_tx")),"click")
}var oWatchInput=new jindo.WatchInput(jindo.$("ipt_tx_srch"));
elAuto=null;
var bSelecting=false;
var _self=this;
var makeAuto=function(response){try{elArea.remove(jindo.$Element(elArea.query(".auto_tx_area")))
}catch(e){}jindo.$Element(elArea.query("._view")).append(jindo.$(_self.makeTemplate()));
setTimeout(function(){try{_self.autoBtn("show")
}catch(e){}elAuto=jindo.$Element("jAutoComplate");
try{elAuto.show();
jindo.$Fn(function(event){var elSearchForm=jindo.$Form("jSearchForm");
if(elSearchForm){elSearchForm.value("query",(sTemp!="")?sTemp:jindo.$Element("ipt_tx_srch").$value().value);
elSearchForm.submit()
}},this).attach(jindo.$(elAuto.query(".all_result")),"click");
jindo.$Fn(function(event){try{jindo.$Element(jindo.$Element("jAutoComplate").query("#help_tooltip2")).show()
}catch(e){}},this).attach(jindo.$(elAuto.query(".clse")),"mouseover");
jindo.$Fn(function(event){try{jindo.$Element(jindo.$Element("jAutoComplate").query("#help_tooltip2")).hide()
}catch(e){}},this).attach(jindo.$(elAuto.query(".clse")),"mouseout");
if(_self._auto=="ON"){jindo.$Fn(function(event){_self._setCookie("NM_AUTOCOMPLETE","OFF");
_self._auto="OFF";
try{_self.autoBtn("off");
elArea.remove("jAutoComplate");
elAuto=null;
oFlag={bMovie:false,bPeople:false}
}catch(e){}},this).attach(jindo.$(elAuto.query(".clse")),"click")
}else{jindo.$Fn(function(event){_self._setCookie("NM_AUTOCOMPLETE","ON");
_self._auto="ON"
},this).attach(jindo.$(elAuto.query(".clse")),"click")
}if(response!=null){try{jindo.$Element("jAutoComplate").remove("jInfomation")
}catch(e){}_self.makeContents(response,oFlag)
}else{jindo.$Element("jAutoComplate").prepend(jindo.$('<p id="jInfomation" class="at_alert">자동완성 기능이 활성화되었습니다.</p>'))
}}catch(e){}},0)
};
oWatchInput.attach("change",function(oCustomEvent){if(_self._auto!="ON"){return
}if(bSelecting){return
}var query=oCustomEvent.sText.replace(/\#/g,"%23");
if(query.length>0){var oAjax=new jindo.$Ajax(options.autosearch+encodeURI(query),{type:"jsonp",onload:function(res){var response=res.json();
if(elAuto==null){makeAuto(response)
}else{_self.makeContents(response,oFlag)
}}});
oAjax.request()
}else{if(elArea&&jindo.$("jAutoComplate")){try{elArea.remove("jAutoComplate");
_self.autoBtn("hide");
jindo.$Element("ipt_tx_srch").$value().value=""
}catch(e){}}elAuto=null;
oFlag={bMovie:false,bPeople:false}
}});
var aSelectingList=[];
var iIndex=0;
var sTemp="";
var elTempBefore=null;
jindo.$Fn(function(event){switch(event._event.keyCode){case 38:bSelecting=true;
if(iIndex>0){iIndex--
}break;
case 40:if(bSelecting&&iIndex<aSelectingList.length){iIndex++
}bSelecting=true;
break;
case 13:if(bSelecting){event.stop(jindo.$Event.CANCEL_ALL);
document.location.href=jindo.$Element(jindo.$Element(aSelectingList[iIndex]).query("a")).attr("href")
}else{var elSearchForm=jindo.$Form("jSearchForm");
if(elSearchForm){elSearchForm.value("query",jindo.$Element("ipt_tx_srch").$value().value);
elSearchForm.submit()
}event.stopDefault()
}break;
default:bSelecting=false;
break
}if(bSelecting){if(aSelectingList.length==0){aSelectingList=elArea.queryAll("li");
sTemp=jindo.$Element(event.element).$value().value
}if(elTempBefore!=null){jindo.$Element(elTempBefore.query("a")).removeClass("m_over");
jindo.$Element(elTempBefore.query("a")).removeClass("p_over")
}if(iIndex==aSelectingList.length){iIndex=0;
jindo.$Element(event.element).$value().value=sTemp;
setTimeout(function(){bSelecting=false
},600);
elTempBefore=null
}else{jindo.$Element(event.element).$value().value=jindo.$Element(aSelectingList[iIndex]).attr("data-title");
jindo.$Element(jindo.$Element(aSelectingList[iIndex]).query("a")).addClass("m_over");
elTempBefore=jindo.$Element(aSelectingList[iIndex])
}}else{aSelectingList=[];
iIndex=0;
sTemp=""
}},this).attach(jindo.$("ipt_tx_srch"),"keydown")
},makeAutoText:function(query,value){var sTempValue=value.replace(/\s/g,"");
var sQuery=new RegExp("("+jindo.$S(query).escapeRegex()+")+","gi");
var aMatch=sTempValue.match(sQuery);
if(aMatch!=null){var tempMatch=value.match(/\s/g);
var iEIndex=0;
var iSIndex=0;
var iLastIndex=value.lastIndexOf(" ");
var iLength=value.length;
var iSpaceCount=0;
var rSpacePosition=[];
var sTempValueMatch="";
if(tempMatch!=null){for(var i=0;
i<=tempMatch.length;
i++){if(iEIndex==iLastIndex){iEIndex=iLength
}else{iEIndex=value.indexOf(" ",iSIndex)
}iSpaceCount++;
rSpacePosition.push(iEIndex);
iSIndex=iEIndex+1
}sTempResult="";
jindo.$A(aMatch).forEach(function(v,i,a){if(i==0){sTempResult=sTempValue.replace(v,"<em>"+v+"</em>")
}});
var sFinalResult="";
if(iSIndex>0){var iTempStart=0;
var iSpacePositionLen=rSpacePosition.length;
var iPlusTag=0;
var iOldV=0;
jindo.$A(rSpacePosition).forEach(function(v,i,a){var iFindTag=sTempResult.indexOf("<",iTempStart);
var iTagEnd=(v+iPlusTag-i);
if(iFindTag>=0&&iFindTag<=iTagEnd){iPlusTag+=sTempResult.indexOf(">",iTempStart)-sTempResult.indexOf("<",iTempStart)+1;
var iTempNextTag=sTempResult.indexOf("</",iTagEnd);
if(iTempNextTag>-1&&iTempNextTag<v+iPlusTag-i){var iCloseTagEnd=sTempResult.indexOf(">",iTempNextTag);
sFinalResult+=sTempResult.slice(iTempStart,iCloseTagEnd+1);
iTempStart=iCloseTagEnd+1;
if(iCloseTagEnd+1==v+iPlusTag-i){sFinalResult+=" "
}else{iPlusTag+=iCloseTagEnd-iTempNextTag+1;
sFinalResult+=sTempResult.slice(iTempStart,v+iPlusTag-i)+" ";
iTempStart=v+iPlusTag-i
}}else{sFinalResult+=sTempResult.slice(iTempStart,v+iPlusTag-i)+" ";
iTempStart=v+iPlusTag-i
}}else{sFinalResult+=sTempResult.slice(iTempStart,v+iPlusTag-i)+" ";
iTempStart=v+iPlusTag-i
}});
return sFinalResult
}else{return value.replace(sQuery,"<em>$1</em>")
}}else{return value.replace(new RegExp("("+jindo.$S(query).escapeRegex()+")","i"),"<em>$1</em>")
}}else{return value
}},makeLists:function(value,query){var self=this;
var sHTML="";
switch(value[6][0]){case"movie":sHTML=template.auto_mv_contents.replace(/{{title}}/g,value[0][0]).replace("{{title_match}}",self.makeAutoText(query,value[0][0])).replace("{{time}}",value[1][0].slice(0,4)).replace("{{people}}",value[2][0]).replace("{{thumbnail}}",(value[3][0])?value[3][0].replace("http://movie.phinf.naver.net","https://movie-phinf.pstatic.net")+"?type=n30_43_2":"https://ssl.pstatic.net/static/movie/2012/06/dft_img30x43.png").replace("{{link}}",options.movelink+value[5][0]);
break;
case"people":var escapedImageSrc=encodeURIComponent(value[3][0]);
sHTML=template.auto_people_contents.replace(/{{title}}/g,value[0][0]).replace("{{title_match}}",self.makeAutoText(query,value[0][0])).replace("{{time}}",(value[1][0]!=0)?value[1][0]:"").replace("{{movie}}",(value[2][0])?"<dd>"+value[2][0]+"</dd>":"").replace("{{thumbnail}}",(value[3][0])?"https://search.pstatic.net/common/?src="+escapedImageSrc+"&type=u120_150&quality=95":"https://ssl.pstatic.net/static/movie/2012/06/dft_img30x48.png").replace("{{link}}",options.peoplelink+value[5][0]);
break
}return sHTML
},makeContents:function(aItems,oFlag){var bPeople=false;
var bMoive=false;
var _self=this;
elAuto=jindo.$Element("jAutoComplate");
try{jindo.$Element("jAutoComplate").remove("jInfomation")
}catch(e){}try{jindo.$Element(jindo.$Element("jAutoPP").query("ul")).html("")
}catch(e){}try{jindo.$Element(jindo.$Element("jAutoMV").query("ul")).html("")
}catch(e){}if(aItems.items.length>0){if(aItems.items[0].length>0){try{jindo.$Element("jAutoComplate").show();
elAuto.show()
}catch(e){}}jindo.$A(aItems.items[0]).forEach(function(v,i,a){if(typeof v[6]=="undefined"){return
}switch(v[6][0]){case"movie":bMoive=true;
if(!oFlag.bMovie){if(oFlag.bPeople){try{jindo.$Element("jAutoPP").before(jindo.$(template.auto_mv))
}catch(e){}}else{try{elAuto.prepend(jindo.$(template.auto_mv))
}catch(e){}}oFlag.bMovie=true;
try{jindo.$Element(jindo.$Element("jAutoMV").query("ul")).html(_self.makeLists(v,aItems.query[0]))
}catch(e){}}else{try{jindo.$Element(jindo.$Element("jAutoMV").query("ul")).append(jindo.$(_self.makeLists(v,aItems.query[0])))
}catch(e){}}break;
case"people":bPeople=true;
if(!oFlag.bPeople){if(oFlag.bMovie){try{jindo.$Element("jAutoMV").after(jindo.$(template.auto_people))
}catch(e){}}else{try{elAuto.prepend(jindo.$(template.auto_people))
}catch(e){}}oFlag.bPeople=true;
try{jindo.$Element(jindo.$Element("jAutoPP").query("ul")).html(_self.makeLists(v,aItems.query[0]))
}catch(e){}}else{try{jindo.$Element(jindo.$Element("jAutoPP").query("ul")).append(jindo.$(_self.makeLists(v,aItems.query[0])))
}catch(e){}}break
}});
if(!bPeople){try{elAuto.remove("jAutoPP")
}catch(e){}oFlag.bPeople=false
}if(!bMoive){try{elAuto.remove("jAutoMV")
}catch(e){}oFlag.bMovie=false
}if(!bPeople&&!bMoive){try{elAuto.hide()
}catch(e){}}else{try{elAuto.show()
}catch(e){}}}else{jindo.$Element(options.area).remove(jindo.$Element("jAutoComplate"));
elAuto=null;
oFlag={bMovie:false,bPeople:false}
}},makeTemplate:function(){return template.area
},autoBtn:function(sStat){var options=this.options;
var img="";
var title="";
switch(sStat){case"show":img="https://ssl.pstatic.net/static/movie/2012/06/srch_arrow_up.gif";
title="자동완성 접기";
break;
case"hide":img="https://ssl.pstatic.net/static/movie/2012/06/srch_arrow_down.gif";
title="자동완성 펼치기";
break;
case"off":img="https://ssl.pstatic.net/static/movie/2012/06/srch_arrow_down2.gif";
title="자동완성 켜기";
break
}jindo.$Element(jindo.$Element(options.area).query(".auto_tx img")).attr("src",img).attr("title",title).attr("alt",title);
jindo.$Element(jindo.$Element(options.area).query(".auto_tx a")).attr("title",title)
},_setCookie:function(sName,sValue){document.cookie=sName+"="+sValue+"; path=/; domain=.movie.naver.com"
}}).extend(jindo.Component)
})(jindo);(function(jindo){var options=null;
var current=null;
var elCurrentThumb=null;
var elPhotoArea=null;
var elImageArea=null;
var elListArea=null;
var aSlideList=[];
var iListLength=aSlideList.length;
var iIndex=0;
var iTotal=0;
var iLastCallMovieCode=0;
var oNavigator=jindo.$Agent().navigator();
var photoCommentTicketId="mov1";
var template='<li class="_list" id="{{image.imageNid}}" data-json=\'{"nid":{{image.nid}}, "imageNid":{{image.imageNid}},"movieCode":{{image.movieCode}},"title":"{{image.title}}","imageDesc":"{{image.imageDesc}}","width":{{image.width}},"height":{{image.height}},"gdid":"{{image.gdid}}","adult":"{{image.adult}}","fullImageUrl74px":"{{image.fullImageUrl74px}}","fullImageUrl665px":"{{image.fullImageUrl665px}}","fullImageUrl886px":"{{image.fullImageUrl886px}}","viewCount":{{image.viewCount}}, "koreanMovieTitle":"{{image.koreanMovieTitle}}", "movieYear":{{image.movieYear}}, "castName":"{{image.castName}}", "koreanPeopleName":"{{image.koreanPeopleName}}","imageType":"{{image.imageType}}","typeSequence":{{image.typeSequence}},"addDate":"{{image.addDate}}" }\'><a href="#" title=""><img src="{{image.fullImageUrl74px}}" width="74" height="74" alt="{{image.imageType}}" /></a><!-- N=a:pvi.img --></li>';
var template2='<li class="_list" id="{{image.imageNid}}" data-json=\'{"imageNid":{{image.imageNid}},"movieCode":{{image.movieCode}},"title":"{{image.title}}", "subtitle":"{{image.subtitle}}","gdid":"{{image.gdid}}","adult":"{{image.adult}}","imageType":"{{image.imageType}}","viewCount":{{image.viewCount}} }\'><span class="mask"></span><a href="#" title=""><img src="{{image.fullImageUrl74px}}" width="74" height="74" alt="{{image.imageType}}" /></a><!-- N=a:vpl.img --></li>';
nhn.movie.PhotoVideo=jindo.$Class({options:{},$init:function(oOptions){var _self=this;
this.options=oOptions;
options=this.options;
var cookie=jindo.$Cookie();
if(options.oViewMode){if(options.oViewMode.is("basic")){options.nm_vtype="basic"
}else{options.nm_vtype="wide"
}}switch(options.pageType){case"photowall":if(document.location.hash.match("#tab")!=null){var elTab=(jindo.$Element("movieEndTabMenu"))?jindo.$Element("movieEndTabMenu"):jindo.$Element("tab");
if(elTab){window.scrollTo(0,elTab.offset().top)
}}var oMansory=new jindo.masonry("#"+options._elContainer,{singleMode:false,itemSelector:"._brick",appendedContent:"",saveOptions:true,resizeable:true,oneline:false,setHeight:true,minYSort:false,minWindowWidth:665,marginHeight:0,lastWidth:0});
jindo.$Element("sort").attach("click",function(event){_self._toggleSortLayer(event)
});
jindo.$Element(window).attach("click",function(event){_self.closeSortLayer(event)
});
if(options.bImageInfo){jindo.$Element("gallery_group").delegate("mouseover","li",function(event){jindo.$Element(event.element).query("."+options.bImageInfo).show()
}).delegate("mouseout","li",function(event){jindo.$Element(event.element).query("."+options.bImageInfo).hide()
})
}break;
case"slide":elPhotoArea=jindo.$Element("photo_area");
elImageArea=elPhotoArea.query("._img_area");
elListArea=elPhotoArea.query("._list_area");
options.current=parseInt(options.current);
iTotal=options.total=parseInt(options.total);
options.currentPage=parseInt((options.current-1)/options.navigatorSize);
var changePhoto=function(nDirection){if(nDirection!=0){_self.thumbnailControl(false,nDirection)
}else{_self.setPhoto(iIndex)
}};
elPhotoArea.query("._photo_next").attach("click",function(event){if(iTotal==options.current){event.stop(jindo.$Event.CANCEL_DEFAULT);
return
}var bChanged=false;
var nDirection=0;
options.current++;
if(iIndex<iListLength){iIndex++;
bChanged=true
}else{iIndex=1;
nDirection=1;
bChanged=true
}if(bChanged){changePhoto(nDirection)
}event.stop(jindo.$Event.CANCEL_DEFAULT)
});
elPhotoArea.query("._photo_prev").attach("click",function(event){if(options.current<=1){event.stop(jindo.$Event.CANCEL_DEFAULT);
return
}var bChanged=false;
var nDirection=0;
options.current--;
if(iIndex>1){iIndex--;
bChanged=true
}else{iIndex=options.navigatorSize-1;
bChanged=true;
nDirection=-1
}if(bChanged){changePhoto(nDirection)
}if(options.currentPage<0){options.currentPage=0
}event.stop(jindo.$Event.CANCEL_DEFAULT)
});
if(oNavigator.ie&&oNavigator.version<=7){jindo.$A(elPhotoArea.queryAll("._NoOutline")).forEach(function(welTarget,i){welTarget.attach("focus",jindo.$Fn(function(we){we.element.hideFocus=true
},this).bind())
})
}jindo.$Element(document).attach("keydown",function(event){if(jindo.$Element(event.element).tag!="input"&&jindo.$Element(event.element).tag!="textarea"){switch(event._event.keyCode){case 39:elPhotoArea.query("._photo_next").fireEvent("click");
break;
case 37:elPhotoArea.query("._photo_prev").fireEvent("click");
break
}}});
_self.thumbnailControl(true,elPhotoArea);
jindo.$A(jindo.$ElementList(jindo.$$("#photoTypeGroup li")).$value()).forEach(function(v,i,a){v.attach("click",function(event){_self.imageTypeControl(v.attr("photoIndex"),event)
})
});
if(jindo.$Element("peopleTabUl")){jindo.$Element("peopleTabUl").delegate("click","._peopleTab",function(event){var peopleCode=jindo.$Element(event.element).attr("data-peoplecode");
var peopleName=jindo.$Element(event.element).attr("data-poeplename");
_self.receivePeoplePhotoList({peopleCode:peopleCode,peopleName:peopleName});
event.stop(jindo.$Event.CANCEL_DEFAULT)
})
}this.receivePeoplePhotoList({peopleCode:options.elPeopleCode,peopleName:options.elPeopleName});
jindo.$Element("viewOriginalImage").attach("click",function(event){_self._openOriginalImagePopup(event);
event.stop(jindo.$Event.CANCEL_DEFAULT)
});
break;
case"movieEnd":elPhotoArea=jindo.$Element("jPlayerArea");
elListArea=jindo.$Element("jVideoList");
aSlideList=elListArea.queryAll("li._list");
iIndex=parseInt(options.current%options.navigatorSize);
if(iIndex==0&&options.current==options.navigatorSize){iIndex=options.navigatorSize
}options.currentPage=parseInt(options.current/options.navigatorSize);
if(options.current==options.navigatorSize){options.currentPage=0
}iTotal=parseInt(options.total);
options.total=iTotal;
iListLength=aSlideList.length;
if(options.oViewMode.is("wide")){options.nm_vtype="wide";
this.getImageList((typeof nDirection!="undefined")?nDirection:0,function(res){listCallback(res)
})
}if(options.oViewMode.is("basic")){options.nm_vtype="basic";
this.getImageList((typeof nDirection!="undefined")?nDirection:0,function(res){listCallback(res)
})
}if(iListLength>0&&iIndex!=0){elCurrentThumb=aSlideList[(iIndex-1)];
var oJsonValue=(elCurrentThumb.attr("data-json"))?elCurrentThumb.attr("data-json").replace(/%27/g,"'"):null;
current=jindo.$Json(oJsonValue).toObject()
}else{current={}
}var sTemplate=template2;
elListArea.delegate("click","li",function(event){var nSelectId=jindo.$Element(event.element).attr("id");
var oAjax=new jindo.$Ajax(options.movieInfoAPI+nSelectId,{type:"xhr",method:"get",onload:function(res){var result=jindo.$Json(res.text()).toObject();
var videoURL=options.moviePlayerUrl.replace("{{multimediaId}}",nSelectId).replace("{{videoId}}",result.videoId).replace("{{coverImage}}",(result.coverImage)?result.coverImage:"").replace("{{videoInKey}}",(result.videoInKey)?result.videoInKey:"");
jindo.$Element("jPlayerArea").query("._video_area > iframe").attr("src",videoURL);
jindo.$A(elListArea.queryAll("._list a")).forEach(function(v,i,a){v.removeClass("on")
});
elCurrentThumb=jindo.$Element(event.element);
iIndex=elListArea.query("ul").indexOf(elCurrentThumb)+1;
var oJsonValue=(elCurrentThumb.attr("data-json"))?elCurrentThumb.attr("data-json").replace(/%27/g,"'"):null;
current=jindo.$Json(oJsonValue).toObject();
elCurrentThumb.query("a").addClass("on");
options.current=((parseInt(options.currentPage))*parseInt(options.navigatorSize))+iIndex;
jindo.$Element("content").query(".title_area .count em").text(options.current);
switch(options.endPageType){case"movie":jindo.$Element("jPlayerArea").query("._subtitle").html(current.subtitle);
jindo.$Element("jPlayerArea").query("._viewcount").html("조회수 "+_self.addCommas(current.viewCount));
var code=options.movieCode;
var mid=current.imageNid;
break;
case"people":var sMovieTitle='<a href="/movie/bi/mi/basic.nhn?code='+current.movieCode+'">'+current.title+"</a>";
if(current.subtitle!=""){sMovieTitle+="<em>"+current.subtitle+"</em>"
}jindo.$Element("jPlayerArea").query("._movietitle").html(sMovieTitle);
jindo.$Element("jPlayerArea").query("._viewcount").html("조회수 "+_self.addCommas(current.viewCount));
var code=options.peopleCode;
var mid=current.imageNid;
break
}var copyURL=jindo.$Element("copy_url_layer").query(".copy_url > a").attr("href");
copyURL=copyURL.replace(/\?code=[0-9]{1,}/,"?code="+code);
if(copyURL&&copyURL.match("mid")){copyURL=copyURL.replace(/\&mid=[0-9]{1,}/,"&mid="+mid)
}else{copyURL=copyURL+"&mid="+mid
}jindo.$Element("copy_url_layer").query(".copy_url > a").attr("href",copyURL).text(copyURL);
if(oClipboard){oClipboard.setData(jindo.$("permalink"),copyURL)
}try{lcs_do()
}catch(e){}},timeout:3,ontimeout:function(){}});
oAjax.request();
event.stop(jindo.$Event.CANCEL_DEFAULT)
});
var listCallback=function(res){var sResult="";
var result=jindo.$Json(res.text()).toObject();
var aResult=[];
if(result.videoList&&result.videoList.length>0){aResult=result.videoList
}else{return
}jindo.$A(aResult).forEach(function(v,i,a){sResult+=sTemplate.replace(/{{image.imageNid}}/g,v.multimediaId).replace("{{image.movieCode}}",v.movieCode).replace("{{image.title}}",jindo.$S(v.movieTitle).escapeHTML()).replace("{{image.subtitle}}",jindo.$S(v.subCategoryTitle).escapeHTML()).replace("{{image.gdid}}",v.gdid).replace("{{image.adult}}",v.adult).replace("{{image.viewCount}}",v.viewCount).replace("{{image.fullImageUrl74px}}","https://ssl.pstatic.net/imgmovie"+v.image)
});
elListArea.query("ul").html(sResult);
setTimeout(function(){iIndex=parseInt(options.current%options.navigatorSize);
if(iIndex==0&&options.current==options.navigatorSize){iIndex=options.navigatorSize
}aSlideList=elListArea.queryAll("li._list");
if(aSlideList.length==0){return
}aSlideList[(iIndex-1)].query("a").addClass("on");
elCurrentThumb=aSlideList[0];
iListLength=aSlideList.length
},30)
};
elListArea.query("._list_next").attach("click",function(event){var nTempCurrent=(options.currentPage+1)*options.navigatorSize;
if(nTempCurrent>iTotal){return
}else{options.current=nTempCurrent+1
}_self.getImageList(1,function(res,offset){listCallback(res,offset)
});
event.stop(jindo.$Event.CANCEL_DEFAULT)
});
elListArea.query("._list_prev").attach("click",function(event){var nTempCurrent=(options.currentPage-1)*options.navigatorSize;
if(options.currentPage==0){return
}else{if(nTempCurrent==0){nTempCurrent=1
}options.current=nTempCurrent+1
}_self.getImageList(-1,function(res,offset){listCallback(res,offset)
});
event.stop(jindo.$Event.CANCEL_DEFAULT)
});
break
}},setPhoto:function(iIndex){var _self=this;
if(elCurrentThumb){elCurrentThumb.query("a").removeClass("on");
elCurrentThumb=aSlideList[iIndex-1];
if(elCurrentThumb){elCurrentThumb.query("a").addClass("on");
var oJsonValue=aSlideList[iIndex-1].attr("data-json").replace(/%27/g,"'");
current=jindo.$Json(oJsonValue).toObject();
htInitDataPhoto.url=htInitDataPhoto.url.replace(/imageNid=[0-9]+/g,"imageNid="+current.imageNid);
htInitDataPhoto.mail.srvurl=htInitDataPhoto.mail.srvurl.replace(/imageNid%3D[0-9]+/g,"imageNid%3D"+current.imageNid);
window.__splugin.update(document.getElementById("spiLayerPhoto"),htInitDataPhoto);
if(setComment!=null&&setComment!="undefined"){setComment(current.imageNid,photoCommentTicketId)
}var copyURL=jindo.$Element("copy_url_layer").query(".copy_url > a").attr("href");
if(copyURL&&copyURL.match("imageNid")){copyURL=copyURL.replace(/&imageNid=[0-9]{1,}/,"&imageNid="+current.imageNid)
}else{copyURL=copyURL+"&imageNid="+current.imageNid
}jindo.$Element("copy_url_layer").query(".copy_url > a").attr("href",copyURL).text(copyURL);
if(oClipboard){oClipboard.setData(jindo.$("permalink"),copyURL)
}_self.options._elImageNid=current.imageNid;
var sImageUrl="";
switch(options.nm_vtype){case"basic":sImageUrl=current.fullImageUrl665px;
break;
case"wide":sImageUrl=current.fullImageUrl886px;
break;
default:sImageUrl=current.fullImageUrl665px;
break
}if(options.current==1){elImageArea.query("._photo_prev").addClass("none")
}else{elImageArea.query("._photo_prev").removeClass("none")
}if(options.current==options.total){elImageArea.query("._photo_next").addClass("none")
}else{elImageArea.query("._photo_next").removeClass("none")
}elImageArea.query("img").attr("src",sImageUrl);
elImageArea.query("img").attr("alt",current.imageType);
jindo.$Element("photo_area").query(".count em").text(options.current);
var sImageDesc="";
var sMovieTitleNCastName="";
var imageTypeName="";
switch(options.endPageType){case"movie":jindo.$A(jindo.$ElementList(jindo.$$("#photoTypeGroup li")).$value()).forEach(function(v,i,a){if(v.attr("imageType")==current.imageType){v.className("on");
imageTypeName=v.attr("imageTypeName")
}else{v.className("")
}});
if(current.imageType=="DIARY"){var photoDate=jindo.$Date(parseInt(current.addDate));
jindo.$Element("photoTitle").html(current.title+" "+imageTypeName);
jindo.$Element("photoDate").html(jindo.$S("%4d.%02d.%02d").format(photoDate.year(),photoDate.month()+1,photoDate.date()))
}else{jindo.$Element("photoTitle").html(imageTypeName);
jindo.$Element("photoDate").html("")
}jindo.$Element("photoDesc").html(current.imageDesc);
var imageCountUrl=options.imageCountUrl+current.imageNid;
break;
case"people":if(current.imageDesc){sImageDesc=current.imageDesc
}if(current.koreanMovieTitle){sMovieTitleNCastName+="<a href='/movie/bi/mi/basic.nhn?code="+current.movieCode+"' class='tit_movie'>"+current.koreanMovieTitle
}if(current.movieYear>0){sMovieTitleNCastName+="("+current.movieYear+")"
}sMovieTitleNCastName+="<em></em></a>";
if(current.castName&&current.castName!=""){sMovieTitleNCastName+="<span class='tit_cast'>"+current.koreanPeopleName+"("+current.castName+" 역) </span>"
}jindo.$Element("imageMovieTitleNCastName").html(sMovieTitleNCastName);
if(sImageDesc!=""){jindo.$Element("photoDesc").addClass("title")
}else{jindo.$Element("photoDesc").removeClass("title")
}jindo.$Element("photoDesc").html(sImageDesc);
var imageCountUrl=options.imageCountUrl+current.nid;
_self.counterPeoplePhotoList({movieCode:current.movieCode});
break
}new jindo.$Ajax(imageCountUrl,{type:"xhr",method:"get",onload:function(res){}}).request();
try{lcs_do();
_self.changePage(copyURL)
}catch(e){}}}},getImageList:function(nDirection,callback){switch(options.nm_vtype){case"wide":options.navigatorSize=16;
break;
case"basic":options.navigatorSize=8;
break
}if(!options.totalPage){options.totalPage=Math.ceil(parseInt(options.total)/options.navigatorSize)
}options.currentPage=parseInt((options.current-1)/options.navigatorSize);
if(options.current==options.navigatorSize){options.currentPage=0
}var offset=0;
offset=((options.currentPage)*options.navigatorSize);
if(options.current==options.navigatorSize){offset=0
}if(offset<0||offset>options.total){return
}var url=options.imageListUrl+"&size="+options.navigatorSize+"&offset="+offset;
var oAjax=new jindo.$Ajax(url,{type:"xhr",method:"get",onload:function(res){callback(res,offset)
},timeout:3,ontimeout:function(){}});
oAjax.request()
},imageTypeControl:function(iPhotoIndex,event){options.current=iPhotoIndex;
options.currentPage=parseInt((options.current-1)/options.navigatorSize);
this.thumbnailControl(false);
event.stop(jindo.$Event.CANCEL_DEFAULT)
},thumbnailControl:function(bLoad,nDirection){var sTemplate=template;
var _self=this;
iIndex=parseInt((options.current-1)%options.navigatorSize)+1;
if(iIndex==0&&(options.current==options.navigatorSize)){iIndex=options.current
}if(elListArea==null){return
}aSlideList=elListArea.queryAll("li._list");
iListLength=aSlideList.length;
if(options.oViewMode.is("wide")&&iListLength!=16){options.nm_vtype="wide";
this.getImageList((typeof nDirection!="undefined")?nDirection:0,function(res){listCallback(res)
})
}if(options.oViewMode.is("basic")&&iListLength!=8){options.nm_vtype="basic";
this.getImageList((typeof nDirection!="undefined")?nDirection:0,function(res){listCallback(res)
})
}if(iListLength>0&&iIndex!=0){setTimeout(function(){elCurrentThumb=aSlideList[(iIndex-1)];
var oJsonValue=(elCurrentThumb.attr("data-json"))?elCurrentThumb.attr("data-json").replace(/'/g,"%27"):null;
current=jindo.$Json(oJsonValue).toObject()
},300)
}else{current={}
}var listCallback=function(res,offset){var sResult="";
var result=jindo.$Json(res.text()).toObject();
var aResult=[];
if(result.lists){aResult=result.lists
}else{aResult=result
}jindo.$A(aResult).forEach(function(v,i,a){sResult+=sTemplate.replace(/{{image.imageNid}}/g,v.imageNid).replace("{{image.nid}}",v.nid).replace("{{image.movieCode}}",v.movieCode).replace("{{image.title}}",jindo.$S(v.title).escape()).replace("{{image.imageDesc}}",jindo.$S(v.imageDesc).escape()).replace("{{image.width}}",v.width).replace("{{image.height}}",v.height).replace("{{image.gdid}}",v.gdid).replace("{{image.adult}}",v.adult).replace(/{{image.fullImageUrl74px}}/g,v.fullImageUrl74px).replace("{{image.fullImageUrl665px}}",v.fullImageUrl665px).replace("{{image.fullImageUrl886px}}",v.fullImageUrl886px).replace("{{image.viewCount}}",v.viewCount).replace("{{image.koreanMovieTitle}}",(v.koreanMovieTitle)?(v.koreanMovieTitle).replace(/'/g,"%27"):"").replace("{{image.movieYear}}",v.movieYear).replace("{{image.castName}}",(v.castName)?(v.castName).replace(/'/g,"%27"):"").replace("{{image.koreanPeopleName}}",(v.koreanPeopleName)?v.koreanPeopleName:"").replace(/{{image.imageType}}/g,v.imageType).replace("{{image.typeSequence}}",v.typeSequence).replace("{{image.addDate}}",v.addDate)
});
sResult=sResult.replace(/\\'/g,"%27");
elListArea.query("ul").html(sResult);
setTimeout(function(){options.current=(typeof offset!="undefined")?(offset+1):options.current;
iIndex=parseInt(options.current%options.navigatorSize);
if(iIndex==0){iIndex=options.navigatorSize
}aSlideList=elListArea.queryAll("li._list");
if(aSlideList.length==0){return
}aSlideList[(iIndex-1)].query("a").addClass("on");
elCurrentThumb=aSlideList[(iIndex-1)];
iListLength=aSlideList.length;
_self.setPhoto(iIndex)
},30)
};
if(!bLoad){this.getImageList((typeof nDirection!="undefined")?nDirection:0,function(res){listCallback(res)
});
return
}elPhotoArea.delegate("click","li._list",function(event){var currentPage;
if(elCurrentThumb){elCurrentThumb.query("a").removeClass("on")
}else{elListArea.query("a.on").removeClass("on")
}elCurrentThumb=jindo.$Element(event.element);
iIndex=elListArea.query("ul").indexOf(elCurrentThumb)+1;
currentPage=options.currentPage;
if(options.currentPage<0){currentPage=0
}options.current=currentPage*options.navigatorSize+iIndex;
_self.setPhoto(iIndex);
event.stop(jindo.$Event.CANCEL_DEFAULT)
});
elPhotoArea.query("._list_next").attach("click",function(event){var nTempCurrent=(options.currentPage+1)*options.navigatorSize;
if(nTempCurrent>=iTotal){return
}else{options.current=nTempCurrent+1
}_self.getImageList(1,function(res,offset){listCallback(res,offset)
});
event.stop(jindo.$Event.CANCEL_DEFAULT)
});
elPhotoArea.query("._list_prev").attach("click",function(event){var nTempCurrent=(options.currentPage-1)*options.navigatorSize;
if(options.currentPage<=0){return
}else{if(nTempCurrent==0){nTempCurrent=1
}options.current=nTempCurrent+1
}_self.getImageList(-1,function(res,offset){listCallback(res,offset)
});
event.stop(jindo.$Event.CANCEL_DEFAULT)
})
},setWide:function(sTypeName,nType){options.nm_vtype=sTypeName;
var self=this;
if(nType&&nType==1){var elListArea=jindo.$Element("jVideoList")
}else{self.thumbnailControl(false);
return
}aSlideList=elListArea.queryAll("li._list");
iListLength=aSlideList.length;
var sTemplate=template2;
var listCallback=function(res){var sResult="";
var result=jindo.$Json(res.text()).toObject();
var aResult=[];
if(nType&&nType==1){if(result.videoList&&result.videoList.length>0){aResult=result.videoList
}else{return
}jindo.$A(aResult).forEach(function(v,i,a){sResult+=sTemplate.replace(/{{image.imageNid}}/g,v.multimediaId).replace("{{image.movieCode}}",v.movieCode).replace("{{image.title}}",jindo.$S(v.movieTitle).escape()).replace("{{image.subtitle}}",jindo.$S(v.subCategoryTitle).escape()).replace("{{image.gdid}}",v.gdid).replace("{{image.adult}}",v.adult).replace("{{image.viewCount}}",v.viewCount).replace("{{image.fullImageUrl74px}}","https://ssl.pstatic.net/imgmovie"+v.image)
})
}sResult=sResult.replace(/\\'/g,"%27");
elListArea.query("ul").html(sResult);
setTimeout(function(){iIndex=parseInt(options.current%options.navigatorSize);
aSlideList=elListArea.queryAll("li._list");
if(aSlideList.length==0){return
}aSlideList[(iIndex-1)].query("a").addClass("on");
elCurrentThumb=aSlideList[0];
iListLength=aSlideList.length
},30)
};
this.getImageList(0,function(res){listCallback(res)
})
},_toggleSortLayer:function(e){e.stop(jindo.$Event.CANCEL_DEFAULT);
jindo.$Element("sortLayer").toggle();
jindo.$Element("sortDirection").toggleClass("on")
},closeSortLayer:function(e){if(jindo.$Element(e._event.target).attr("id")=="sort"){return
}if(jindo.$Element(e._event.target).attr("id")=="sortDirection"){return
}jindo.$Element("sortLayer").hide();
jindo.$Element("sortDirection").removeClass("on")
},_openOriginalImagePopup:function(e){e.stop(jindo.$Event.CANCEL_DEFAULT);
if(this._elIsAdultImage&&!this._elIsAdultLogin){window.location=this._elAdultLoginUrl+"&url=http%3A%2F%2F"+document.location.host+"%2Fmovie%2Fbi%2Fmi%2FphotoView.nhn%3Fcode%3D"+this.options.imageNid
}else{var win=window.open("/movie/bi/mi/photoViewPopup.nhn?imageNid="+this.options._elImageNid,"photoViewPopup","status=no, toolbar=no, left=0, top=0, resizable=yes, scrollbars=yes, width=800, height=600");
win.focus()
}},receivePeoplePhotoList:function(oPoeple,movieCode){var _self=this;
if(movieCode){options.movieCode=movieCode
}var oAjax=new jindo.$Ajax(options.peoplePhotoListUrl.replace("{{movieCode}}",options.movieCode)+oPoeple.peopleCode,{type:"xhr",method:"get",onload:function(res){_self.renderingPeoplePhotoList(res.json(),oPoeple.peopleCode,oPoeple.peopleName)
},timeout:3,async:true});
if(oPoeple.peopleCode!=""){if(options._elPeoplePhotoListMap.hasKey(oPoeple.peopleCode)){options.renderingPeoplePhotoList(options._elPeoplePhotoListMap.$(oPoeple.peopleCode),oPoeple.peopleCode,oPoeple.peopleName)
}else{oAjax.request()
}}},renderingPeoplePhotoList:function(photoList,peopleCode,peopleName){var listHtml="";
for(var i=0;
i<photoList.length;
i++){if(i==4){listHtml+='<li class="expand">'
}else{listHtml+="<li>"
}listHtml+='<div class="thumb_obj"><span>';
listHtml+='<a href="/movie/bi/pi/photoView.nhn?code='+peopleCode+"&imageNid="+photoList[i].imageNid+'#tab" title="'+jindo.$S(photoList[i].koreanMovieTitle)+'"><em class="blank"></em><img src="'+photoList[i].fullImageUrl90px+'" alt="'+jindo.$S(photoList[i].koreanMovieTitle)+'" /></a><!-- N=a:pre.img -->';
listHtml+="</span></div>";
if(options.endPageType=="movie"){listHtml+='<p><a href="/movie/bi/mi/photoView.nhn?code='+photoList[i].movieCode+'#tab">'+photoList[i].koreanMovieTitle+"</a><!-- N=a:pre.title --></p>"
}listHtml+="</li>"
}jindo.$Element("peoplePhotoList").html(listHtml);
jindo.$ElementList(jindo.$Element("peopleTabUl").queryAll("li")).removeClass("on");
jindo.$Element("peopleTab_"+peopleCode).addClass("on");
if(jindo.$Element("moreImageLink")){jindo.$Element("moreImageLink").attr("href","/movie/bi/pi/photoView.nhn?code="+peopleCode+"#tab")
}if(jindo.$Element("moreImagePeopleName")){jindo.$Element("moreImagePeopleName").html(peopleName)
}},counterPeoplePhotoList:function(oOptions){var _self=this;
var elArea=jindo.$Element("jRelativePhoto");
var oAjax=new jindo.$Ajax(options.photoCountPerPeopleUrl+oOptions.movieCode,{type:"xhr",method:"get",onload:function(res){var aPoeples=res.json();
if(aPoeples.length>0){if(elArea.css("display")=="none"){elArea.show()
}var sTitle="";
if(current.koreanMovieTitle){sTitle+=current.koreanMovieTitle
}if(current.movieYear>0){sTitle+="("+current.movieYear+")"
}if(sTitle!=""){jindo.$Element(jindo.$$(".link_photo2 .h_link_mv")[0]).html(jindo.$Element(jindo.$("<a>")).attr("href","/movie/bi/mi/basic.nhn?code="+current.movieCode).html(sTitle).toString())
}var peopleTabHTML="";
var sLinkExpand="";
jindo.$A(aPoeples).forEach(function(v,i,a){if(i==3){sLinkExpand="link_expand"
}else{sLinkExpand=""
}if(i<8){peopleTabHTML+='<li id="peopleTab_'+v.peopleCode+'" class="_peopleTab '+sLinkExpand+'" data-peoplecode="'+v.peopleCode+'" data-poeplename="'+v.koreanPeopleName+'"><a href="#" title="'+v.koreanPeopleName+'">'+v.koreanPeopleName+"("+v.imageCount+")</a><!-- N=a:pre.tab --></li>"
}});
jindo.$Element("peopleTabUl").html(peopleTabHTML);
_self.receivePeoplePhotoList({peopleCode:aPoeples[0].peopleCode,peopleName:aPoeples[0].koreanPeopleName},oOptions.movieCode)
}else{elArea.hide()
}},timeout:3,async:true});
if(oOptions.movieCode!=iLastCallMovieCode){iLastCallMovieCode=oOptions.movieCode;
oAjax.request()
}},addCommas:function(nStr){nStr+="";
x=nStr.split(".");
x1=x[0];
x2=x.length>1?"."+x[1]:"";
var rgx=/(\d+)(\d{3})/;
while(rgx.test(x1)){x1=x1.replace(rgx,"$1,$2")
}return x1+x2
},changePage:function(sUrl){var oDate=new Date();
var sRnd=oDate.getTime();
var sb=[];
sb.push('<iframe height="0" frameborder="0" width="0" scrolling="no" src="');
sb.push("/movie/bi/mi/photoViewCountDummy.nhn?rnd=");
sb.push(sUrl);
sb.push("&_timestamp="+sRnd);
sb.push('"></iframe>');
var sHtml=sb.join("");
var elContent=jindo.$Element("footer");
elContent.appendHTML(sHtml);
oDate=sRnd=sHtml=null
}}).extend(jindo.Component)
})(jindo);(function(jindo){var htDefaultOptions={sWrapId:"wrap",sOptionAreaId:"viewmode-option-area",nMaxWidthForBasic:1872};
nhn.movie.end.ViewMode=jindo.$Class({$init:function(htOptions){this.option(htDefaultOptions);
this.option(htOptions||{});
this._oCookie=jindo.$Cookie();
this._oDocument=jindo.$Document();
this._welWrap=jindo.$Element(this.option("sWrapId"));
this._welOptionArea=jindo.$Element(this.option("sOptionAreaId"));
this.serverSstyle=this._welWrap.className();
this._initOptionArea();
this.update();
jindo.$Element(window).attach("resize",jindo.$Fn(this._onWindowResize,this).bind())
},_switchBetweenOptionBtns:function(sFrom,sTo){var sFromClassPrefix=(sFrom=="basic")?"normal":"wide";
var sToClassPrefix=(sTo=="basic")?"normal":"wide";
if(!this._htwelOptionBtns){return
}this._htwelOptionBtns[sFrom].addClass(sFromClassPrefix+"_off").removeClass(sFromClassPrefix+"_disabled").removeClass(sFromClassPrefix+"_on");
this._htwelOptionBtns[sTo].addClass(sToClassPrefix+"_on").removeClass(sToClassPrefix+"_disabled").removeClass(sToClassPrefix+"_off")
},_disableOptionBtns:function(){if(!this._htwelOptionBtns){return
}this._htwelOptionBtns.basic.addClass("normal_disabled").removeClass("normal_on").removeClass("normal_off");
this._htwelOptionBtns.wide.addClass("wide_disabled").removeClass("wide_on").removeClass("wide_off")
},_initOptionArea:function(){this._htwelOptionBtns={};
this._htwelOptionBtns.basic=this._welOptionArea.query("._basic-btn").attach("click",jindo.$Fn(function(we){we.stopDefault();
if(!jindo.$Element(we.currentElement).hasClass("normal_disabled")){this.changeTo("basic");
this._switchBetweenOptionBtns("wide","basic");
this._setCookie("NM_VIEWMODE_USER","basic")
}},this).bind());
this._htwelOptionBtns.wide=this._welOptionArea.query("._wide-btn").attach("click",jindo.$Fn(function(we){we.stopDefault();
if(!jindo.$Element(we.currentElement).hasClass("wide_disabled")){this.changeTo("wide");
this._switchBetweenOptionBtns("basic","wide");
this._unsetCookie("NM_VIEWMODE_USER");
this._setCookie("NM_VIEWMODE_AUTO","wide")
}},this).bind());
this._welOptionInfoAnchor=this._welOptionArea.query("._info-anchor");
this._welOptionInfoLayer=jindo.$Element("_viewmode-option-info-layer");
var _self=this;
viewmodeOptionInfoToggle=function(){setTimeout(function(){if(document.activeElement!=null){var focusedEl=jindo.$Element(document.activeElement);
if(focusedEl!=null){if(!focusedEl.hasClass("_viewmodeOptionInfo")){_self._welOptionInfoLayer.hide()
}}}},100)
};
this._oOptionInfoLayerManager=new jindo.LayerManager("_viewmode-option-info-layer",{sCheckEvent:"click",nHideDelay:100}).link(_self._welOptionInfoLayer,_self._welOptionInfoAnchor);
this._welOptionInfoAnchor.attach("click",jindo.$Fn(function(we){we.stopDefault();
this._oOptionInfoLayerManager.toggle()
},this).bind());
var waelViewmodeOptionInfo=jindo.$ElementList("._viewmodeOptionInfo");
jindo.$A(waelViewmodeOptionInfo.$value()).forEach(function(value,index,array){jindo.$Fn(viewmodeOptionInfoToggle,this).attach(value,"blur")
})
},_onWindowResize:function(we){clearTimeout(this._nTimer);
this._nTimer=null;
this._nTimer=setTimeout(jindo.$Fn(function(){this.update()
},this).bind(),0)
},update:function(){this._htDocSize=this._oDocument.clientSize();
if(this._htDocSize.width<this.option("nMaxWidthForBasic")){this._disableOptionBtns();
if(!this.is("basic")){this.changeTo("basic");
this._setCookie("NM_VIEWMODE_AUTO","basic")
}}else{if(!this._oCookie.get("NM_VIEWMODE_USER")){this.changeTo("wide");
this._setCookie("NM_VIEWMODE_AUTO","wide")
}else{this.changeTo(this._oCookie.get("NM_VIEWMODE_USER"))
}if(this.is("basic")){this._switchBetweenOptionBtns("wide","basic")
}else{this._switchBetweenOptionBtns("basic","wide")
}}},changeTo:function(sStyle){if(this.is(sStyle)){return
}this._welWrap.cssClass({basic:sStyle==="basic",wide:sStyle==="wide"});
this.fireEvent("change",{sStyle:sStyle})
},is:function(sStyle){return this._welWrap.hasClass(sStyle)
},_setCookie:function(sName,sValue){document.cookie=sName+"="+sValue+"; path=/; domain=.movie.naver.com"
},_unsetCookie:function(sName){this._oCookie.remove("NM_VIEWMODE_USER",".movie.naver.com","/")
}}).extend(jindo.Component)
})(jindo);(function(jindo){var ITEM_SELECTOR="li";
var ITEM_EXPANDER_CLS="_item-expander";
var ITEM_EXPANDER_TPL_ID="_TopAreaThumbnailExpander_tpl";
var TITLE_MAX_LENGTH_BYTES=28;
nhn.movie.end.TopAreaThumbnailExpander=jindo.$Class({$init:function(elContainer){this._welContainer=jindo.$Element(elContainer);
this._welItemExpander;
this._oItemExpanderTpl=jindo.$Template(ITEM_EXPANDER_TPL_ID);
this._bItemHover=false;
this._bItemExpanderOpen=false;
this._fOnItemMouseover=jindo.$Fn(this._onItemMouseover,this).bind();
this._attachEvents()
},_attachEvents:function(){var oSelf=this;
this._welContainer.delegate("mouseover",ITEM_SELECTOR,this._fOnItemMouseover);
this._welContainer.delegate("click","a",function(we){oSelf.fireEvent("click",{element:we.element})
});
this._welContainer.delegate("mousedown",ITEM_SELECTOR,function(we){jindo.$Element(we.element).query("a").fireEvent("click");
we.stop()
});
this._welContainer.delegate("mouseover","."+ITEM_EXPANDER_CLS,function(we){if(oSelf._bItemExpanderOpen){return
}oSelf._bItemHover=false
});
this._welContainer.delegate("mouseout","."+ITEM_EXPANDER_CLS,function(we){if(oSelf._bItemExpanderOpen){return
}oSelf._welItemExpander.hide();
oSelf._bItemExpanderOpen=false
});
jindo.$Element(document).attach("mousemove",function(we){var bMouseInContainer=(jindo.$Element(we.element).parent(function(wel){return wel.isEqual(oSelf._welContainer)
}).length>0);
if(bMouseInContainer){return
}if(oSelf._bItemHover&&oSelf._bItemExpanderOpen&&oSelf._welItemExpander){oSelf._welItemExpander.hide();
oSelf._bItemExpanderOpen=false;
oSelf._bItemHover=false
}});
this._nInWin=0;
jindo.$Element(document).attach("mouseout",function(we){oSelf._nInWin--;
setTimeout(function(){if(!oSelf._nInWin){if(oSelf._welItemExpander){oSelf._welItemExpander.hide();
oSelf._bItemExpanderOpen=false;
oSelf._bItemHover=false
}}},1)
});
jindo.$Element(document).attach("mouseover",function(we){if(oSelf._nInWin<0){oSelf._nInWin=0
}oSelf._nInWin++
})
},_onItemMouseover:function(we){var welItem=jindo.$Element(we.element),oSelf=this;
clearTimeout(this._nTimer);
this._nTimer=null;
this._nTimer=setTimeout(function(){var htData=oSelf._fetchItemData(welItem);
oSelf._bItemHover=true;
if(!oSelf._welItemExpander){oSelf._welItemExpander=oSelf._createItemExpanderElement(htData).appendTo(oSelf._welContainer)
}else{oSelf._updateItemExpanderElement(htData)
}oSelf._welItemExpander.show();
oSelf._bItemExpanderOpen=true
},1)
},_fetchItemData:function(welItem){var htData={sImgSrc:welItem.query("img").attr("src"),nLeft:welItem.$value().offsetLeft-21,sUrl:welItem.query("a").attr("href"),sTitle:welItem.attr("data-title")};
var wsTitle=jindo.$S(htData.sTitle),nTitleBytes=wsTitle.bytes();
if(nTitleBytes>TITLE_MAX_LENGTH_BYTES){htData.sTitle=wsTitle.bytes(TITLE_MAX_LENGTH_BYTES)+"..."
}return htData
},_createItemExpanderElement:function(htData){var wel=jindo.$Element(this._oItemExpanderTpl.process(htData)).css("display","none").addClass(ITEM_EXPANDER_CLS);
return wel
},_updateItemExpanderElement:function(htData){var welItemExpander=this._welItemExpander;
welItemExpander.query("img").attr("src",htData.sImgSrc);
welItemExpander.css("left",htData.nLeft);
welItemExpander.query("a").attr("href",htData.sUrl);
welItemExpander.query(".img_mask p").html(htData.sTitle);
return welItemExpander
}}).extend(jindo.Component)
})(jindo);(function(jindo){var oNavigator=jindo.$Agent().navigator();
nhn.movie.end.MainPhotoArea=jindo.$Class({$init:function(el,sListApiUrl,htFirstList){this._wel=jindo.$Element(el);
if(!this._wel){return this
}this._sListApiUrl=sListApiUrl;
this._aList=htFirstList.lists;
this._nListOffset=0;
this._nListSize=8;
this._nIndex=0;
this._oAjax=new jindo.$Ajax(this._sListApiUrl,{method:"get"});
this._assignElements();
this._attachEvents()
},_assignElements:function(){this._welImg=this._wel.query("._Img");
this._welMoreBtn=this._wel.query("._MoreBtn");
this._oawelPrevBtns=jindo.$ElementList(this._wel.queryAll("._PrevBtn"));
this._oawelNextBtns=jindo.$ElementList(this._wel.queryAll("._NextBtn"))
},_attachEvents:function(){this._wel.delegate("click","._PrevBtn",jindo.$Fn(this._onPrevBtnClick,this).bind());
this._wel.delegate("click","._NextBtn",jindo.$Fn(this._onNextBtnClick,this).bind());
if(oNavigator.ie&&oNavigator.version<=7){jindo.$A(this._wel.queryAll("._NoOutline")).forEach(function(welTarget,i){welTarget.attach("focus",jindo.$Fn(function(we){we.element.hideFocus=true
},this).bind())
})
}},_onPrevBtnClick:function(we){if(this._hasPrevItem()&&!jindo.$Element(we.element).hasClass("none")){this._nIndex--;
this._update()
}we.stopDefault()
},_onNextBtnClick:function(we){if(this._hasNextItem()&&!jindo.$Element(we.element).hasClass("none")){this._nIndex++;
this._update()
}we.stopDefault()
},_update:function(){var htItem=this._aList[this._nIndex];
this._welImg.$value().src=htItem.fullImageUrl427px;
this._welImg.$value().alt=htItem.imageType;
this._welMoreBtn.attr("href",this._welMoreBtn.attr("href").replace(/imageNid=[0-9]+/,"imageNid="+htItem.imageNid));
if(this._hasPrevItem()){this._oawelPrevBtns.removeClass("none")
}else{this._oawelPrevBtns.addClass("none")
}if(this._hasNextItem()){this._oawelNextBtns.removeClass("none")
}else{this._oawelNextBtns.addClass("none");
this._loadNextList(jindo.$Fn(function(aNextList){if(aNextList.length>0){this._aList=this._aList.concat(aNextList);
this._oawelNextBtns.removeClass("none")
}},this).bind())
}var eventNIndex=this._nIndex;
this.fireEvent("updated",{nid:htItem.nid,imageNid:htItem.imageNid,nIndex:eventNIndex})
},_loadNextList:function(fOnLoad){this._nListOffset+=this._nListSize;
this._oAjax.option("onload",function(oResponse){var vResult=oResponse.json(),aList=vResult.lists;
if(Object.prototype.toString.call(vResult)==="[object Array]"){aList=vResult
}fOnLoad.call(this,aList)
}).request({size:this._nListSize,offset:this._nListOffset})
},_hasItem:function(nIndex){return !(this._aList[nIndex]===undefined)
},_hasNextItem:function(){return this._hasItem(this._nIndex+1)
},_hasPrevItem:function(){return this._hasItem(this._nIndex-1)
}}).extend(jindo.Component)
})(jindo);(function(jindo){var LIST_LOAD_SIZE=8;
var videoCommentTicketId="mov2";
nhn.movie.end.MediaView=jindo.$Class({$init:function(el,htOptions){this._wel=jindo.$Element(el);
this.option({nListDisplaySize:4});
this.option(htOptions||{});
if(!this._wel){return this
}this._assignElements();
this._htList={};
this._nItemIndex=parseInt(this._welOrderNum.html(),10)-1;
this._nTotalCount=parseInt(this._wel.query("._totalCount").html(),10);
this._oListAjax=new jindo.$Ajax(this.option("sListApiUrl"),{method:"get"});
this._oVideoInfoAjax=new jindo.$Ajax(this.option("sVideoInfoApiUrl"),{method:"get"});
this._oItemTemplate=jindo.$Template("_MediaView_itemTemplate");
this._oVideoUrlTemplate=jindo.$Template(this.option("sVideoUrlTpl"));
this._attachEvents();
this.update()
},update:function(){this._displayList()
},_assignElements:function(){this._welOrderNum=this._wel.query("._orderNum");
this._welAdultMsg=this._wel.query("._adultMsg");
this._welMovieLink=this._wel.query("._movieLink");
this._welTitle=this._wel.query("._title");
this._welViewCount=this._wel.query("._viewCount");
this._welVideoPlayer=this._wel.query("._videoPlayer");
this._welList=this._wel.query("._list");
this._welPrevItemBtn=this._wel.query("._prevItemBtn");
this._welNextItemBtn=this._wel.query("._nextItemBtn")
},_attachEvents:function(){this._welList.delegate("click","._item",jindo.$Fn(function(we){var welItem=jindo.$Element(we.element);
we.stopDefault();
if(welItem.hasClass("_selected")){return
}this._showItem(parseInt(welItem.attr("data-index"),10))
},this).bind());
this._wel.delegate("click","._prevItemBtn",jindo.$Fn(function(we){we.stopDefault();
if(jindo.$Element(we.element).hasClass("none")){return
}this._showItem(this._nItemIndex-1)
},this).bind()).delegate("click","._nextItemBtn",jindo.$Fn(function(we){we.stopDefault();
if(jindo.$Element(we.element).hasClass("none")){return
}this._showItem(this._nItemIndex+1)
},this).bind()).delegate("click","._prevListBtn",jindo.$Fn(function(we){var nCurOffset=parseInt(this._welList.query("._item").attr("data-index"),10);
var nPrevOffset=nCurOffset-this.option("nListDisplaySize");
if(nPrevOffset>=0){this._displayList({nOffset:nPrevOffset})
}we.stopDefault()
},this).bind()).delegate("click","._nextListBtn",jindo.$Fn(function(we){var nCurOffset=parseInt(this._welList.query("._item").attr("data-index"),10);
var nNextOffset=nCurOffset+this.option("nListDisplaySize");
if(nNextOffset<=(this._nTotalCount-1)){this._displayList({nOffset:nNextOffset})
}we.stopDefault()
},this).bind())
},_displayList:function(htArgs){var nDisplaySize=this.option("nListDisplaySize"),i,len,htItem;
htArgs=htArgs||{};
if(htArgs.nOffset===undefined){htArgs.nOffset=parseInt(this._nItemIndex/nDisplaySize,10)*nDisplaySize
}htArgs.fCallback=htArgs.fCallback||function(){};
if(!this._htList[htArgs.nOffset]){this._loadList({nOffset:htArgs.nOffset,fCallback:jindo.$Fn(function(){this._displayList(htArgs)
},this).bind()})
}else{this._welList.empty();
i=htArgs.nOffset;
len=htArgs.nOffset+nDisplaySize;
for(;
i<len;
i++){htItem=this._htList[i];
if(!htItem){break
}htItem.xIndex=i;
if(i===this._nItemIndex){htItem.xSelectedClass="_selected";
htItem.xOnClass="on"
}else{htItem.xSelectedClass="";
htItem.xOnClass=""
}htItem.registeredDate=htItem.registeredDate.replace(/\-/g,".");
this._welList.appendHTML(this._oItemTemplate.process(htItem))
}htArgs.fCallback()
}},_loadList:function(htArgs){htArgs=htArgs||{};
htArgs.fCallback=htArgs.fCallback||function(){};
this._oListAjax.option("onload",jindo.$Fn(function(oRes){var aList=oRes.json().videoList;
if(aList.length>0){jindo.$A(aList).forEach(jindo.$Fn(function(htItem,i){this._htList[htArgs.nOffset+i]=htItem
},this).bind());
htArgs.fCallback()
}},this).bind()).request({size:LIST_LOAD_SIZE,offset:htArgs.nOffset})
},_showItem:function(nIndex){var htItem=this._htList[nIndex],welItem=jindo.$Element(jindo.$("_MediaView_listItem-"+nIndex));
if(nIndex<0||nIndex>=this._nTotalCount){return
}if(htItem!=undefined&&htItem.multimediaId!=undefined){if(setComment!=null&&setComment!="undefined"){setComment(htItem.multimediaId,videoCommentTicketId)
}htInitDataVideo.url=htInitDataVideo.url.replace(/mid=[0-9]+/g,"mid="+htItem.multimediaId);
htInitDataVideo.mail.srvurl=htInitDataVideo.mail.srvurl.replace(/mid%3D[0-9]+/g,"mid%3D"+htItem.multimediaId);
window.__splugin.update(document.getElementById("spiLayerVideo"),htInitDataVideo)
}this._nItemIndex=nIndex;
this._welOrderNum.html(this._nItemIndex+1);
this._welPrevItemBtn.removeClass("none");
this._welNextItemBtn.removeClass("none");
if(this._nItemIndex===0){this._welPrevItemBtn.addClass("none")
}else{if(this._nItemIndex===(this._nTotalCount-1)){this._welNextItemBtn.addClass("none")
}}if(!welItem){this._displayList({fCallback:jindo.$Fn(function(){this._showItem(nIndex)
},this).bind()})
}else{jindo.$ElementList(this._welList.queryAll("._item")).removeClass("_selected");
welItem.addClass("_selected");
jindo.$ElementList(this._welList.queryAll("a")).removeClass("on");
welItem.query("a").addClass("on");
if(htItem.adult==="Y"){this._welAdultMsg.show()
}else{this._welAdultMsg.hide()
}if(this._welMovieLink){this._welMovieLink.html(htItem.movieTitle).attr("href","/movie/bi/mi/basic.nhn?code="+htItem.movieCode)
}this._welTitle.html(htItem.subCategoryTitle);
this._welViewCount.html(this._toNumberFormat(htItem.viewCount));
this._oVideoInfoAjax.option("onload",jindo.$Fn(function(oRes){var htData=oRes.json();
htData.multimediaId=htItem.multimediaId;
this._welVideoPlayer.attr("src",this._oVideoUrlTemplate.process(htData));
var copyURL=jindo.$Element("copy_url_layer").query(".copy_url > a").attr("href");
if(copyURL&&copyURL.match("mid")){copyURL=copyURL.replace(/\&mid=[0-9]{1,}/,"&mid="+htItem.multimediaId)
}else{copyURL=copyURL+"&mid="+htItem.multimediaId
}jindo.$Element("copy_url_layer").query(".copy_url > a").attr("href",copyURL).text(copyURL);
if(oClipboard){oClipboard.setData(jindo.$("permalink"),copyURL)
}},this).bind()).request({mid:htItem.multimediaId});
this.fireEvent("itemshow")
}},_toNumberFormat:function(vNumber){var sNumber=vNumber+"";
var rPattern=/(-?[0-9]+)([0-9]{3})/;
while(rPattern.test(sNumber)){sNumber=sNumber.replace(rPattern,"$1,$2")
}return sNumber
}}).extend(jindo.Component)
})(jindo);(function(jindo){nhn.movie.end.movie.TopAreaManager=jindo.$Class({$init:function(elContainer){this._welContainer=jindo.$Element(elContainer);
this._welWrap=jindo.$Element("wrap");
this._aelDefaultLists=this._welContainer.queryAll("._mv_default_list");
this._welFirstDefaultList=this._aelDefaultLists[0];
this._welSecondDefaultList=this._aelDefaultLists[1];
this._welFirstListLink=jindo.$Element("first_mv_list_link");
this._welSecondListLink=jindo.$Element("second_mv_list_link");
this._welExpansionWrap=this._welContainer.query("._expansion-wrap");
this._oaelPrevBtns=jindo.$ElementList(this._welContainer.queryAll("._prev-btn"));
this._oaelNextBtns=jindo.$ElementList(this._welContainer.queryAll("._next-btn"));
this._welExpandBtn=this._welContainer.query("._expand-btn");
this._welExpandButtonName=jindo.$Element("expandButtonName");
this._bFirstDefaultListVisible=true;
this._bExpanded=false;
this._fOnExpandBtnClick=jindo.$Fn(this._onExpandBtnClick,this).bind();
this._attachEvents()
},_attachEvents:function(){this._welExpandBtn.attach("click",this._fOnExpandBtnClick);
this._welFirstDefaultList.delegate("click",".thumb_prev",jindo.$Fn(function(){this._welFirstDefaultList.hide();
this._welSecondDefaultList.show("inline-block");
this._bFirstDefaultListVisible=false;
this._welSecondListLink.$value().focus()
},this).bind());
this._welFirstDefaultList.delegate("click",".thumb_next",jindo.$Fn(function(){this._welFirstDefaultList.hide();
this._welSecondDefaultList.show("inline-block");
this._bFirstDefaultListVisible=false;
this._welSecondListLink.$value().focus()
},this).bind());
this._welSecondDefaultList.delegate("click",".thumb_prev",jindo.$Fn(function(){this._welSecondDefaultList.hide();
this._welFirstDefaultList.show("inline-block");
this._bFirstDefaultListVisible=true;
this._welFirstListLink.$value().focus()
},this).bind());
this._welSecondDefaultList.delegate("click",".thumb_next",jindo.$Fn(function(){this._welSecondDefaultList.hide();
this._welFirstDefaultList.show("inline-block");
this._bFirstDefaultListVisible=true;
this._welFirstListLink.$value().focus()
},this).bind())
},_onExpandBtnClick:function(we){we.stopDefault();
if(this._welExpandBtn.hasClass("open_lst")){this._bExpanded=true;
this._welExpandBtn.removeClass("open_lst").addClass("clse_lst");
this._welExpandButtonName.html("상영예매순위, 예정작 개봉일순 닫기");
this._welFirstDefaultList.hide();
this._welSecondDefaultList.hide();
this._welExpansionWrap.show()
}else{this._bExpanded=false;
this._welExpandBtn.removeClass("clse_lst").addClass("open_lst");
this._welExpandButtonName.html("상영예매순위, 예정작 개봉일순 더보기");
this._welExpansionWrap.hide();
this._welFirstDefaultList.css("display","");
this._welSecondDefaultList.css("display","")
}},onViewModeChange:function(oEvent){if(this._welFirstDefaultList.hasClass("_swap_on_view_mode_chage")){this.swapDefaultAndExpansionList()
}if(oEvent.sStyle=="basic"){this.enableNavigationBtns()
}else{if(oEvent.sStyle=="wide"){if(!this._welExpansionWrap.visible()){this._welFirstDefaultList.css("display","");
this._welSecondDefaultList.css("display","")
}this.disableNavigationBtns()
}}},enableNavigationBtns:function(){jindo.$ElementList(this._welContainer.queryAll("._prev-btn")).removeClass("thumb_prev_off").addClass("thumb_prev");
jindo.$ElementList(this._welContainer.queryAll("._next-btn")).removeClass("thumb_next_off").addClass("thumb_next")
},disableNavigationBtns:function(){jindo.$ElementList(this._welContainer.queryAll("._prev-btn")).removeClass("thumb_prev").addClass("thumb_prev_off");
jindo.$ElementList(this._welContainer.queryAll("._next-btn")).removeClass("thumb_next").addClass("thumb_next_off")
},swapDefaultAndExpansionList:function(){tempHtml=this._welFirstDefaultList.html();
this._welFirstDefaultList.html(this._welSecondDefaultList.html());
this._welSecondDefaultList.html(tempHtml);
if(this._welFirstDefaultList.hasClass("expected_mv_list")){this._welFirstDefaultList.removeClass("expected_mv_list").addClass("current_mv_list")
}else{this._welFirstDefaultList.removeClass("current_mv_list").addClass("expected_mv_list")
}tempElement=this._welExpansionWrap.child()[0].leave();
this._welExpansionWrap.append(tempElement)
}}).extend(jindo.Component)
})(jindo);(function(jindo){nhn.movie.end.movie.PointStarRating=jindo.$Class({$init:function(el,htOption){var htDefaultOption={nMaxValue:10,nDefaultValue:0,bActivateOnload:true};
this.option(htDefaultOption);
this.option(htOption||{});
this._wel=jindo.$Element(el);
this._assignHTMLElements();
this._wfMouseMove=jindo.$Fn(this._onMouseMove,this);
this._wfMouseLeave=jindo.$Fn(this._onMouseLeave,this);
this._wfClick=jindo.$Fn(this._onClick,this);
if(this.option("bActivateOnload")){this.activate()
}},_assignHTMLElements:function(){this._welBackStar=this._wel.query(".st_off");
this._welFrontStar=this._wel.query(".st_on");
this._welPoint=this._wel.query(".star_count em")
},_onActivate:function(){this._wfMouseMove.attach(this._welBackStar,"mousemove");
this._wfMouseLeave.attach(this._welBackStar,"mouseleave");
this._wfClick.attach(this._welBackStar,"click");
this._nBackStarWidth=this._welBackStar.width();
this.reset()
},_onDeactivate:function(){var el=this.getBaseElement();
this._wfMouseMove.detach(el,"mousemove");
this._wfMouseLeave.detach(el,"mouseleave");
this._wfClick.detach(el,"click")
},reset:function(){var nValue=this.option("nDefaultValue")||0;
this.setValue(nValue,false);
return this
},getValue:function(){return this._nValue
},setValue:function(nValue,bFireEvent){if(typeof bFireEvent=="undefined"){bFireEvent=true
}var nMaxValue=this.option("nMaxValue");
if(nValue>nMaxValue){nValue=nMaxValue
}var nWidthPx=Math.round(this._nBackStarWidth*(nValue/nMaxValue));
this._welFrontStar.css("width",nWidthPx+"px");
this._welPoint.html(nValue);
this._nValue=nValue;
if(bFireEvent){this.fireEvent("set",{nValue:this._nValue})
}if(jindo.$Agent().navigator().ie==true&&jindo.$Agent().navigator().version==7){if(jindo.$("pointSection")!=null){elementShowForIE7()
}}return this
},_onMouseMove:function(we){var htPos=we.pos();
var nFrontStarWidthPercent=(htPos.layerX/this._nBackStarWidth)*100;
var nMaxValue=this.option("nMaxValue");
this._nCurrentValue=Math.round(nFrontStarWidthPercent/10);
if(this._nCurrentValue>nMaxValue){this._nCurrentValue=nMaxValue
}this._welFrontStar.css("width",Math.round(htPos.layerX)+"px");
this._welPoint.html(this._nCurrentValue);
if(jindo.$Agent().navigator().ie==true&&jindo.$Agent().navigator().version==7){if(jindo.$("pointSection")!=null){elementShowForIE7()
}}},_onMouseLeave:function(we){this.setValue(this._nValue,false)
},_onClick:function(we){this.setValue(this._nCurrentValue)
}}).extend(jindo.UIComponent)
})(jindo);var GenderPointGraphForRaphael=jindo.$Class({$init:function(elContainer,aData,htOption){this._welContainer=jindo.$Element(elContainer);
this._aData=aData;
this._aGraphData=null;
this.option({nRadian:Math.PI/180,nMinValue:15,nInnerRadius:24,nOuterRadius:56,aColors:["#59A8E8","#FD6D7C"],oCenterImageSrc:"https://ssl.pstatic.net/static/movie/2014/04/title_participation.png",nCenterImageWidth:36,nCenterImageHeight:15});
this.option(htOption||{});
this._oPaper=Raphael(this._welContainer.$value());
this.update();
jindo.m.bindRotate(jindo.$Fn(this._onResize,this).bind())
},update:function(){this._initPaper();
this._drawCircle()
},_onResize:function(){if(!this._welContainer.visible()){return
}this.update()
},_initPaper:function(){this._aGraphData=jindo.$Json(jindo.$Json(this._aData).toString()).toObject();
this._oPaper.clear();
this.nCenterX=this._getWidth()/2;
this.nCenterY=this._getHeight()/2
},_getSumOfValues:function(){var i,len,nSum=0;
for(i=0,len=this._aData.length;
i<len;
i++){if(this._aData[i]){nSum+=this._aData[i].iPer
}}return nSum
},_getWidth:function(){return this._welContainer.width()
},_getHeight:function(){return this._welContainer.height()
},_drawCircle:function(){var oPaper=this._oPaper;
var nDataCount=this._aData.length;
var nValuesSum=this._getSumOfValues();
var nMinValue=this.option("nMinValue");
var nRadian=this.option("nRadian");
var oCenterImageSrc=this.option("oCenterImageSrc");
var nCenterImageWidth=this.option("nCenterImageWidth");
var nCenterImageHeight=this.option("nCenterImageHeight");
var nInnerRadius=this.option("nInnerRadius");
var nOuterRadius=this.option("nOuterRadius");
var nStartAngle=90,nEndAngle;
var nMiddleAngle,nMiddleX,nMiddleY;
var nCorrectTotalSum=0;
var nCorrectZeroCount=0;
var i,len,oSector,oTextPer;
this._oSectorsSet=oPaper.set();
for(i=0,len=nDataCount;
i<len;
i++){if(this._aGraphData[i].iPer==0){nCorrectZeroCount++
}else{if(this._aGraphData[i].iPer<nMinValue){nCorrectTotalSum+=nMinValue-this._aGraphData[i].iPer;
this._aGraphData[i].iPer=nMinValue
}}}for(i=0,len=nDataCount;
i<len;
i++){if(this._aGraphData[i].iPer!=0){this._aGraphData[i].iPer-=Math.abs(Math.floor(nCorrectTotalSum/(nDataCount-nCorrectZeroCount)))
}}for(i=0,len=nDataCount;
i<len;
i++){if(this._aGraphData[i].iPer>0){nEndAngle=(nStartAngle+(this._aGraphData[i].iPer/nValuesSum*360));
if(nEndAngle-nStartAngle===360){oSector=this._oPaper.circle(this.nCenterX,this.nCenterY,nOuterRadius)
}else{if(i==nDataCount-1){nEndAngle=450
}oSector=this._createSector(this.nCenterX,this.nCenterY,nOuterRadius,nStartAngle,nEndAngle,nRadian)
}oSector.attr({"stroke-width":0,stroke:null,fill:this.option("aColors")[i]});
nMiddleAngle=(nStartAngle+((nEndAngle-nStartAngle)/2))%360;
nMiddleX=this.nCenterX+(nOuterRadius*0.7)*Math.cos(-nMiddleAngle*nRadian);
nMiddleY=this.nCenterY+(nOuterRadius*0.7)*Math.sin(-nMiddleAngle*nRadian);
oTextPer=this._oPaper.text(nMiddleX,nMiddleY,this._aData[i].sPer+"%").attr({"font-family":"tahoma","font-size":11,"font-weight":"bold",fill:"#FFFFFF"});
this._oSectorsSet.push(oSector,oTextPer);
nStartAngle=nEndAngle
}}var oBorder,oBackground;
this._oInnerSet=oPaper.set();
oBorder=this._oPaper.circle(this.nCenterX,this.nCenterY,0).attr({r:nInnerRadius+1,"stroke-width":1,stroke:"#000000",fill:null,opacity:0.08});
oBackground=this._oPaper.circle(this.nCenterX,this.nCenterY,0).attr({r:nInnerRadius,"stroke-width":0,stroke:null,fill:"#FFFFFF"});
this._oInnerSet.push(oBorder,oBackground)
},_createSector:function(nCenterX,nCenterY,nRadius,nStartAngle,nEndAngle,nRadian){var aPath=[];
var nX1=nCenterX+nRadius*Math.cos((-nStartAngle)*nRadian);
var nY1=nCenterY+nRadius*Math.sin((-nStartAngle)*nRadian);
var nX2=nCenterX+nRadius*Math.cos((-nEndAngle)*nRadian);
var nY2=nCenterY+nRadius*Math.sin((-nEndAngle)*nRadian);
aPath.push("M"+nCenterX+","+nCenterY);
aPath.push("L"+nX1+","+nY1);
aPath.push("A"+[nRadius,nRadius,0,+(Math.abs(nEndAngle-nStartAngle)>180),0,nX2,nY2].join(","));
aPath.push("z");
return this._oPaper.path(aPath.join(" "))
}}).extend(jindo.Component);var AgePointGraphForRaphael=jindo.$Class({$init:function(elContainer,aData,htOption){this._welContainer=jindo.$Element(elContainer);
this._aData=aData;
this._aGraphData=null;
this.option({nRadian:Math.PI/180,nMinValue:15,nInnerRadius:24,nOuterRadius:56,aColors:["#00BEB3","#7A76BF","#E7679D","#8DC655"],oCenterImageSrc:"https://ssl.pstatic.net/static/movie/2014/04/title_participation.png",nCenterImageWidth:36,nCenterImageHeight:15});
this.option(htOption||{});
this._oPaper=Raphael(this._welContainer.$value());
this.update();
jindo.m.bindRotate(jindo.$Fn(this._onResize,this).bind())
},update:function(){this._initPaper();
this._drawCircle()
},_onResize:function(){if(!this._welContainer.visible()){return
}this.update()
},_initPaper:function(){this._aGraphData=jindo.$Json(jindo.$Json(this._aData).toString()).toObject();
this._oPaper.clear();
this.nCenterX=this._getWidth()/2;
this.nCenterY=this._getHeight()/2
},_getSumOfValues:function(){var i,len,nSum=0;
for(i=0,len=this._aData.length;
i<len;
i++){if(this._aData[i]){nSum+=this._aData[i].iPer
}}return nSum
},_getWidth:function(){return this._welContainer.width()
},_getHeight:function(){return this._welContainer.height()
},_drawCircle:function(){var oPaper=this._oPaper;
var nDataCount=this._aData.length;
var nValuesSum=this._getSumOfValues();
var nMinValue=this.option("nMinValue");
var nRadian=this.option("nRadian");
var oCenterImageSrc=this.option("oCenterImageSrc");
var nCenterImageWidth=this.option("nCenterImageWidth");
var nCenterImageHeight=this.option("nCenterImageHeight");
var nInnerRadius=this.option("nInnerRadius");
var nOuterRadius=this.option("nOuterRadius");
var nStartAngle=90,nEndAngle;
var nMiddleAngle,nMiddleX,nMiddleY;
var nCorrectTotalSum=0;
var nCorrectZeroCount=0;
var i,len,oSector,oTextPer;
this._oSectorsSet=oPaper.set();
for(i=0,len=nDataCount;
i<len;
i++){if(this._aGraphData[i].iPer==0){nCorrectZeroCount++
}else{if(this._aGraphData[i].iPer<nMinValue){nCorrectTotalSum+=nMinValue-this._aGraphData[i].iPer;
this._aGraphData[i].iPer=nMinValue
}}}for(i=0,len=nDataCount;
i<len;
i++){if(this._aGraphData[i].iPer!=0){this._aGraphData[i].iPer-=Math.abs(Math.floor(nCorrectTotalSum/(nDataCount-nCorrectZeroCount)))
}}for(i=0,len=nDataCount;
i<len;
i++){if(this._aGraphData[i].iPer>0){nEndAngle=(nStartAngle+(this._aGraphData[i].iPer/nValuesSum*360));
if(nEndAngle-nStartAngle===360){oSector=this._oPaper.circle(this.nCenterX,this.nCenterY,nOuterRadius)
}else{if(i==nDataCount-1){nEndAngle=450
}oSector=this._createSector(this.nCenterX,this.nCenterY,nOuterRadius,nStartAngle,nEndAngle,nRadian)
}oSector.attr({"stroke-width":0,stroke:null,fill:this.option("aColors")[i]});
nMiddleAngle=(nStartAngle+((nEndAngle-nStartAngle)/2))%360;
nMiddleX=this.nCenterX+(nOuterRadius*0.7)*Math.cos(-nMiddleAngle*nRadian);
nMiddleY=this.nCenterY+(nOuterRadius*0.7)*Math.sin(-nMiddleAngle*nRadian);
oTextPer=this._oPaper.text(nMiddleX,nMiddleY,this._aData[i].sPer+"%").attr({"font-family":"tahoma","font-size":11,"font-weight":"bold",fill:"#FFFFFF"});
this._oSectorsSet.push(oSector,oTextPer);
nStartAngle=nEndAngle
}}var oBorder,oBackground;
this._oInnerSet=oPaper.set();
oBorder=this._oPaper.circle(this.nCenterX,this.nCenterY,0).attr({r:nInnerRadius+1,"stroke-width":1,stroke:"#000000",fill:null,opacity:0.08});
oBackground=this._oPaper.circle(this.nCenterX,this.nCenterY,0).attr({r:nInnerRadius,"stroke-width":0,stroke:null,fill:"#FFFFFF"});
this._oInnerSet.push(oBorder,oBackground)
},_createSector:function(nCenterX,nCenterY,nRadius,nStartAngle,nEndAngle,nRadian){var aPath=[];
var nX1=nCenterX+nRadius*Math.cos((-nStartAngle)*nRadian);
var nY1=nCenterY+nRadius*Math.sin((-nStartAngle)*nRadian);
var nX2=nCenterX+nRadius*Math.cos((-nEndAngle)*nRadian);
var nY2=nCenterY+nRadius*Math.sin((-nEndAngle)*nRadian);
aPath.push("M"+nCenterX+","+nCenterY);
aPath.push("L"+nX1+","+nY1);
aPath.push("A"+[nRadius,nRadius,0,+(Math.abs(nEndAngle-nStartAngle)>180),0,nX2,nY2].join(","));
aPath.push("z");
return this._oPaper.path(aPath.join(" "))
}}).extend(jindo.Component);(function(jindo){nhn.movie.end.people.TopAreaManager=jindo.$Class({$init:function(elContainer){this._welContainer=jindo.$Element(elContainer);
this._welDefaultList=this._welContainer.query(".people_list");
this._welExpansionList=this._welContainer.query(".open_people_list");
this._welExpandBtn=this._welContainer.query("._expand-btn");
this._welPrevBtn=this._welDefaultList.query("._prev-btn");
this._welNextBtn=this._welDefaultList.query("._next-btn");
this._oawelDefaultItems=jindo.$ElementList(this._welDefaultList.queryAll(".top_thumb_lst li"));
this._oawelFirstDefaultItems=jindo.$ElementList(this._oawelDefaultItems.$value().slice(0,13));
this._oawelSecondDefaultItems=jindo.$ElementList(this._oawelDefaultItems.$value().slice(13,26));
this._bFirstDefaultItemsVisible=true;
this._fOnExpandBtnClick=jindo.$Fn(this._onExpandBtnClick,this).bind();
this._attachEvents()
},_attachEvents:function(){this._welExpandBtn.attach("click",this._fOnExpandBtnClick);
this._welDefaultList.delegate("mousedown",".thumb_prev, .thumb_next",jindo.$Fn(function(we){if(this._bFirstDefaultItemsVisible){this.showSecondDefaultItems();
this._bFirstDefaultItemsVisible=false
}else{this.showFirstDefaultItems();
this._bFirstDefaultItemsVisible=true
}},this).bind())
},_onExpandBtnClick:function(we){we.stopDefault();
if(this._welExpandBtn.hasClass("open_lst")){this._welExpandBtn.removeClass("open_lst").addClass("clse_lst");
this._welDefaultList.hide();
this._welExpansionList.show()
}else{this._welExpandBtn.removeClass("clse_lst").addClass("open_lst");
this._welExpansionList.hide();
this._welDefaultList.show()
}},showFirstDefaultItems:function(){this._oawelDefaultItems.hide();
this._oawelFirstDefaultItems.show()
},showSecondDefaultItems:function(){this._oawelDefaultItems.hide();
this._oawelSecondDefaultItems.show()
},showFullDefaultItems:function(){this._oawelDefaultItems.show()
},enableNavigationBtns:function(){this._welPrevBtn.removeClass("thumb_prev_off").addClass("thumb_prev");
this._welNextBtn.removeClass("thumb_next_off").addClass("thumb_next")
},disableNavigationBtns:function(){this._welPrevBtn.removeClass("thumb_prev").addClass("thumb_prev_off");
this._welNextBtn.removeClass("thumb_next").addClass("thumb_next_off")
},onViewModeChange:function(oEvent){if(oEvent.sStyle=="basic"){this.showFirstDefaultItems();
this.enableNavigationBtns()
}else{if(oEvent.sStyle=="wide"){this.showFullDefaultItems();
this.disableNavigationBtns()
}}}}).extend(jindo.Component)
})(jindo);(function(jindo){var oNavigator=jindo.$Agent().navigator();
var YEAR_AREA_CHAR_TO_CLASS_TABLE={"~":"to","년":"year","0":"num0","1":"num1","2":"num2","3":"num3","4":"num4","5":"num5","6":"num6","7":"num7","8":"num8","9":"num9"};
nhn.movie.end.people.FilmographyChart=jindo.$Class({$init:function(elContainer,aData,htOptions){var htDefaultOptions={nBarsCount:10,sItemYearTplId:"_filmography-chart_item-year-tpl"};
this.option(htDefaultOptions);
this.option(htOptions||{});
this._welContainer=jindo.$Element(elContainer);
this._welYearArea=this._welContainer.query("._year-area");
this._welChartArea=this._welContainer.query("._chart-area");
this._welChartAreaInner=this._welChartArea.query("._inner");
this._welRaphaelArea=this._welContainer.query("._raphael-area");
this._welResetBtn=this._welContainer.query("._reset-btn");
this._welPrevBtn=this._welContainer.query("._prev-btn");
this._welNextBtn=this._welContainer.query("._next-btn");
this._welTooltip=this._welContainer.query("._tooltip");
this._welTooltipContent=this._welTooltip.query("._content");
this._oItemYearTpl=jindo.$Template(this.option("sItemYearTplId"));
this._nStartYear=jindo.$H(aData[0]).keys()[0];
this._nEndYear=jindo.$H(aData[aData.length-1]).keys()[0];
this._initData(aData);
this._attachEvents();
this._reset()
},_attachEvents:function(){var self=this;
this._welContainer.delegate("click","._reset-btn",function(we){we.stopDefault();
self._reset()
});
this._welPrevBtn.attach("click",function(we){we.stopDefault();
if(jindo.$Element(we.currentElement).hasClass("chart_prev_on")){self._previous()
}});
this._welNextBtn.attach("click",function(we){we.stopDefault();
if(jindo.$Element(we.currentElement).hasClass("chart_next_on")){self._next()
}})
},_initData:function(aData){var htData={},i,iLen,j,jLen,ohtYear,ohtMission,sYear,aMissions,aValues=[];
for(i=0,iLen=aData.length;
i<iLen;
i++){ohtYear=jindo.$H(aData[i]);
sYear=ohtYear.keys()[0];
aMissions=ohtYear.values()[0];
htData[sYear]={nYear:parseInt(sYear,10),aNames:[],aCounts:[],nValue:0};
for(j=0,jLen=aMissions.length;
j<jLen;
j++){ohtMission=jindo.$H(aMissions[j]);
if(j<=4){htData[sYear].aNames.push(ohtMission.keys()[0]);
htData[sYear].aCounts.push(ohtMission.values()[0])
}else{if(j==5){htData[sYear].aNames.push("기타");
htData[sYear].aCounts.push(0);
htData[sYear].aCounts[5]+=ohtMission.values()[0]
}else{htData[sYear].aCounts[5]+=ohtMission.values()[0]
}}htData[sYear].nValue+=ohtMission.values()[0]
}aValues.push(htData[sYear].nValue)
}this._htData=htData;
this._nMaxValue=aValues.sort(function(a,b){return b-a
})[0]
},_reset:function(){this._nBoxWidth=this.option("nBoxWidth");
this._nBoxHeight=72;
this._nMaxValueHeight=47;
this._nChartAreaInnerWidth=this._welChartArea.width()-(42*2)+1;
this._welChartAreaInner.css({left:"42px",width:this._nChartAreaInnerWidth+"px"});
this._welRaphaelArea.css({position:"relative",top:"-1px",height:"72px",width:this._nChartAreaInnerWidth+"px"});
this._updateYearArea(this._nStartYear+"~"+this._nEndYear+"년");
this._nRightmostYear=this._nEndYear;
this._nSelectedYear=undefined;
this._drawBars(this._nRightmostYear,this.option("nBarsCount"));
this.fireEvent("reset")
},_drawBars:function(nRightmostYear,nCountToLeftmost){var i,nYear,nX,welRaphaelCanvas,nCorrection=-1.5;
jindo.$ElementList(this._welChartAreaInner.queryAll("._year")).leave();
this._htoBars={};
if(this._oRaphaelPaper){this._oRaphaelPaper.clear();
this._oRaphaelPaper=null;
if(this._welRaphaelArea.query("svg")){this._welRaphaelArea.query("svg").leave()
}}this._oRaphaelPaper=Raphael(this._welRaphaelArea.$value());
welRaphaelCanvas=jindo.$Element(this._oRaphaelPaper.canvas);
if(welRaphaelCanvas.css("top").indexOf("px")>=0){welRaphaelCanvas.css("top","")
}if(welRaphaelCanvas.css("left").indexOf("px")>=0){welRaphaelCanvas.css("left","")
}if(oNavigator.ie&&oNavigator.version===9){nCorrection+=0.5
}for(i=0;
i<nCountToLeftmost;
i++){nYear=nRightmostYear-i;
if(oNavigator.ie&&oNavigator.version===9&&i===nCountToLeftmost-1&&this._nBoxWidth===59){this._bLeftmostBoxWidthCorrectionForWide=true
}nX=(this._nChartAreaInnerWidth-this._nBoxWidth+nCorrection)-(this._nBoxWidth*i);
if(!this._htData[nYear]){this._htData[nYear]={nYear:nYear,aNames:[],aCounts:[],nValue:0}
}this._htoBars[nYear]=this._createBar(nYear,nX,0.5,this._htData[nYear]);
if(i<nCountToLeftmost){this._oRaphaelPaper.path("M"+nX+",1 v70").attr({stroke:"#e2e2e2"})
}}if(this._nSelectedYear&&this._htoBars[this._nSelectedYear]){this._highlightBar(this._nSelectedYear)
}if(nYear>this._nStartYear){this._welPrevBtn.removeClass("chart_prev").removeClass("_prev-btn").addClass("chart_prev_on").addClass("_prev-btn")
}else{this._welPrevBtn.removeClass("chart_prev_on").removeClass("_prev-btn").addClass("chart_prev").addClass("_prev-btn")
}if(this._nEndYear>nRightmostYear){this._welNextBtn.removeClass("chart_next").removeClass("_next-btn").addClass("chart_next_on").addClass("_next-btn")
}else{this._welNextBtn.removeClass("chart_next_on").removeClass("_next-btn").addClass("chart_next").addClass("_next-btn")
}},_createBar:function(nYear,nX,nY,htYearData){var self=this,oSet=this._oRaphaelPaper.set(),nValueHeight=Math.round(this._nMaxValueHeight*(htYearData.nValue/this._nMaxValue)),aYear=(nYear+"").split(""),nBoxWidth=this._nBoxWidth,nBoxHeight=this._nBoxHeight,oBox;
if(nValueHeight!==0){nValueHeight-=0.5
}if(nX<0){nBoxWidth-=(-nX);
nX=0
}if(this._bLeftmostBoxWidthCorrectionForWide){nBoxWidth-=0.5;
nX=0.5
}this._bLeftmostBoxWidthCorrectionForWide=false;
oSet.push(this._oRaphaelPaper.rect(nX,this._nBoxHeight-nValueHeight,nBoxWidth,nValueHeight).attr({fill:"#9ec5df",stroke:"#8dafc7","stroke-width":1}));
oBox=this._oRaphaelPaper.rect(nX,nY,nBoxWidth,this._nBoxHeight).attr({opacity:0,fill:"#000",stroke:"#000","stroke-width":1}).data(htYearData).hover(function(){if(this.data("nValue")===0){return
}self._highlightBar(this.data("nYear"));
self._showTooltip({nX:this.attrs.x+this.attrs.width,nY:this.attrs.y-(oSet[0].attrs.height/2),aNames:this.data("aNames"),aCounts:this.data("aCounts"),nValue:this.data("nValue")})
},function(){self._hideTooltip();
if(self._nSelectedYear!==this.data("nYear")){self._unhighlightBar(this.data("nYear"))
}}).click(function(){if(this.data("nValue")===0){return
}if(self._nSelectedYear&&self._htoBars[self._nSelectedYear]){self._unhighlightBar(self._nSelectedYear)
}self._nSelectedYear=this.data("nYear");
self._highlightBar(self._nSelectedYear);
self._updateYearArea(self._nSelectedYear+"년");
self.fireEvent("select",{nYear:self._nSelectedYear})
});
oBox.__welYear=jindo.$Element(this._oItemYearTpl.process({year:nYear,year0:aYear[0],year1:aYear[1],year2:aYear[2],year3:aYear[3]})).appendTo(this._welChartAreaInner);
oBox.__welYear.css({left:(nX+(nBoxWidth/2)-(oBox.__welYear.width()/2))+"px",top:(nY+6)+"px"});
oSet.push(oBox);
oSet.push(this._oRaphaelPaper.rect(nX,nY,nBoxWidth,this._nBoxHeight).attr({opacity:0,stroke:"#000","stroke-width":1}));
return oSet
},_updateYearArea:function(sText){var aSplited=sText.split(""),i,len,aHtml=[],sChar;
for(i=0,len=aSplited.length;
i<len;
i++){sChar=aSplited[i];
aHtml.push('<span class="'+YEAR_AREA_CHAR_TO_CLASS_TABLE[sChar]+'"><em>'+sChar+"</em></span>")
}this._welYearArea.html(aHtml.join(""))
},_highlightBar:function(nYear){var oBar=this._htoBars[nYear];
oBar[0].attr({fill:"#fe5756",stroke:"#da302f"});
oBar[1].attr({cursor:"pointer"});
jindo.$ElementList(oBar[1].__welYear.queryAll("span")).addClass("on");
oBar[2].attr({opacity:1,stroke:"#da302f"}).toFront();
return oBar
},_unhighlightBar:function(nYear){var oBar=this._htoBars[nYear];
oBar[0].attr({fill:"#9ec5df",stroke:"#8dafc7"});
oBar[1].attr({cursor:""});
jindo.$ElementList(oBar[1].__welYear.queryAll("span")).removeClass("on");
oBar[2].attr({opacity:0,stroke:"#000"});
return oBar
},_showTooltip:function(htArgs){var i,len,aHtml=[];
for(i=0,len=htArgs.aNames.length;
i<len;
i++){if(i!==0&&(i%2)===0){aHtml.push('<dt class="clear">')
}else{aHtml.push("<dt>")
}aHtml.push(htArgs.aNames[i]);
aHtml.push("</dt>");
if((i%2)===1||i===len-1){aHtml.push('<dd class="no_bg">')
}else{aHtml.push("<dd>")
}aHtml.push(htArgs.aCounts[i]);
aHtml.push("</dd>")
}this._welTooltipContent.html(aHtml.join(""));
if(oNavigator.ie&&oNavigator.version<=7){this._welTooltip.show("inline")
}else{this._welTooltip.show("inline-block")
}this._welTooltip.css({left:(htArgs.nX+7)+"px",top:htArgs.nY-((this._welTooltip.height()/2)+1.5)+"px"})
},_hideTooltip:function(){this._welTooltip.hide()
},_previous:function(){this._nRightmostYear-=this.option("nBarsCount");
this._drawBars(this._nRightmostYear,this.option("nBarsCount"))
},_next:function(){this._nRightmostYear+=this.option("nBarsCount");
this._drawBars(this._nRightmostYear,this.option("nBarsCount"))
},onViewModeChange:function(oEvent){if(oEvent.sStyle=="basic"){this.option("nBarsCount",10);
this.option("nBoxWidth",58)
}else{if(oEvent.sStyle=="wide"){this.option("nBarsCount",23);
this.option("nBoxWidth",59)
}}this._reset()
}}).extend(jindo.Component)
})(jindo);(function(jindo){Sympathy=jindo.$Class({$init:function(nMovieCode,sTarget){_selfSympathy=this;
this.nTimeout=5;
this.sResultCodeSuccess="success";
this.sResultCodeLogin="login";
this.sResultCodeError="error";
this.sSympathyTypeSympathy="sympathy";
this.sSympathyTypeNotSympathy="notSympathy";
this.sResultCodeReadOnlyService="readOnlyService";
this.sResultCodeCanNotSympathyToMyPoint="canNotSympathyToMyPoint";
this.sResultCodeAlreadyExistSympathy="alreadyExistSympathy";
this.sResultCodeAlreadyExistNotSympathy="alreadyExistNotSympathy";
this.sResultCodeAlreadyExistAbusedSympathyByNdi="alreadyExistAbusedSympathyByNdi";
this.sResultCodeAlreadyExistAbusedNotSympathyByNdi="alreadyExistAbusedNotSympathyByNdi";
this.sResultCodeAlreadyExistAbusedSympathyByNnb="alreadyExistAbusedSympathyByNnb";
this.sResultCodeAlreadyExistAbusedNotSympathyByNnb="alreadyExistAbusedNotSympathyByNnb";
this.sReadOnlyService="서비스 점검 중입니다.";
this.sCanNotSympathyToMyPoint="내가 쓴 평점에는 공감/비공감이 불가합니다.";
this.sAlreadyExistSympathy="이미 공감 하셨습니다.";
this.sAlreadyExistNotSympathy="이미 비공감 하셨습니다.";
this._nMovieCode=nMovieCode;
this._sTarget=sTarget;
this._sSympathyType=null;
this._nPointNid=null;
this._welSympathyCount=null;
this._welNotSympathyCount=null;
this._assignElements();
this._attachEvents()
},_assignElements:function(){this._welSympathyButton=jindo.$ElementList("._sympathyButton");
this._welNotSympathyButton=jindo.$ElementList("._notSympathyButton")
},_attachEvents:function(){jindo.$A(this._welSympathyButton.$value()).forEach(function(value,index,array){jindo.$Fn(_selfSympathy._setOptions,_selfSympathy).attach(value,"click")
});
jindo.$A(this._welNotSympathyButton.$value()).forEach(function(value,index,array){jindo.$Fn(_selfSympathy._setOptions,_selfSympathy).attach(value,"click")
})
},_setOptions:function(e){if(e!=undefined){e.stop(jindo.$Event.CANCEL_DEFAULT)
}var aTempVal=jindo.$Element(e.currentElement).next().last().attr("class").split(" ");
var aVal=aTempVal[0].split("_");
_selfSympathy._sSympathyType=aVal[0];
_selfSympathy._nPointNid=aVal[1];
_selfSympathy._welSympathyCount=jindo.$ElementList(".sympathy_"+_selfSympathy._nPointNid);
_selfSympathy._welNotSympathyCount=jindo.$ElementList(".notSympathy_"+_selfSympathy._nPointNid);
this._registerSympathy(e)
},_registerSympathy:function(e){var oAjax=new jindo.$Ajax("/movie/bi/mi/sympathyRegisterJson.nhn",{onload:function(oRes){if(oRes.json().resultCode==_selfSympathy.sResultCodeError){alert(CONSTANTS.sErrorMessage)
}else{if(oRes.json().resultCode==_selfSympathy.sResultCodeReadOnlyService){alert(_selfSympathy.sReadOnlyService)
}else{if(oRes.json().resultCode==_selfSympathy.sResultCodeLogin){if(confirm(CONSTANTS.sLoginMessage)){parent.location.href=CONSTANTS.sLoginUrl+encodeURIComponent(parent.location)
}}else{if(oRes.json().resultCode==_selfSympathy.sResultCodeCanNotSympathyToMyPoint){alert(_selfSympathy.sCanNotSympathyToMyPoint)
}else{if(oRes.json().resultCode==_selfSympathy.sResultCodeAlreadyExistSympathy){alert(_selfSympathy.sAlreadyExistSympathy)
}else{if(oRes.json().resultCode==_selfSympathy.sResultCodeAlreadyExistNotSympathy){alert(_selfSympathy.sAlreadyExistNotSympathy)
}else{if(oRes.json().resultCode==_selfSympathy.sResultCodeAlreadyExistAbusedSympathyByNdi){alert("ID "+oRes.json().userId+"으로 "+_selfSympathy.sAlreadyExistSympathy)
}else{if(oRes.json().resultCode==_selfSympathy.sResultCodeAlreadyExistAbusedNotSympathyByNdi){alert("ID "+oRes.json().userId+"으로 "+_selfSympathy.sAlreadyExistNotSympathy)
}else{if(oRes.json().resultCode==_selfSympathy.sResultCodeAlreadyExistAbusedSympathyByNnb){alert("같은 브라우저에서 "+_selfSympathy.sAlreadyExistSympathy)
}else{if(oRes.json().resultCode==_selfSympathy.sResultCodeAlreadyExistAbusedNotSympathyByNnb){alert("같은 브라우저에서 "+_selfSympathy.sAlreadyExistNotSympathy)
}else{if(oRes.json().sympathyType==_selfSympathy.sSympathyTypeSympathy){jindo.$A(_selfSympathy._welSympathyCount.$value()).forEach(function(value,index,array){value.html(oRes.json().sympathyCount)
})
}else{jindo.$A(_selfSympathy._welNotSympathyCount.$value()).forEach(function(value,index,array){value.html(oRes.json().notSympathyCount)
})
}}}}}}}}}}}},timeout:_selfSympathy.nTimeout,onerror:function(oRes){alert(CONSTANTS.sErrorMessage)
},ontimeout:function(oRes){alert(CONSTANTS.sTimeoutMessage)
}});
oAjax.request({pointNid:this._nPointNid,target:this._sTarget,sympathyType:this._sSympathyType,csrfToken:jindo.$Cookie().get("csrf_token")})
}})
})(jindo);
