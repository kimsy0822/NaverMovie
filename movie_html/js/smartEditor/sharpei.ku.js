Editor=Class({_allowedCommand:[],_hideTargets:[],_noHide:false,_buttons:[],_originalText:"",_lastCommand:"",_agent:{},blockElement:"P|DIV|TH|TD|LI|BLOCKQUOTE|H[1-6]|FORM|PRE",__init:function(id){var t=this;
this.textArea=$(id);
this.options=JINDO.extend({editmode:"wysiwyg",baseURL:Editor.baseURL,css:"style.css",charset:"utf-8",lang:"ko",toolbox:this.textArea.parentNode,resizable:true,minHeight:1000,layoutUrl:"",layoutPreviewUrl:"",docplugins:[],defaultDoc:"./default.html",unloadWarn:true,sizeGrip:null,bFocus:true,onResize:function(){},onLoad:function(){}},arguments[1]);
var o=this.options;
this._agent=$Agent();
this.filter=new Editor.filterAgent();
this.editmode=o.editmode;
this._allowedCommand=new Array();
this.toolbox=$(o.toolbox);
this.toolbox.style.height=this.toolbox.offsetHeight+"px";
this._makeToolbar();
this.container=this.textArea.parentNode;
this.iframe=this.container.insertBefore(this._makeIframe(),this.textArea);
this._initDoc();
this.iframe.style.height=this.options.minHeight+"px";
this.textArea.style.height=this.options.minHeight+"px";
Element.setCSS(this.textArea,{border:"0px",width:"100%",height:this.options.minHeight+"px",display:"none"});
this.container.appendChild(this.textArea);
if(this.options.resizable){this._makeResize()
}this._curtain=$C("div");
this._curtain=document.body.insertBefore(this._curtain,document.body.firstChild);
this._curtain.onmousedown=Event.stopProc;
Element.setCSS(this._curtain,{display:"none",position:"fixed",backgroundColor:"black",top:"0px",left:"0px",width:"100%",height:"100%",zIndex:"1000",filter:"alpha(Opacity=5)",opacity:"0.05"});
var funcHide=function(){t._closeLastPlugin()
};
Event.register(document,"mousedown",funcHide);
Editor.instances[id]=this;
this.setUnloadWarn(this.options.unloadWarn);
this.resizeContentArea(this.options.minHeight);
try{document.execCommand("BackgroundImageCache",false,true)
}catch(err){}if(this._agent.IE){}this.base_obj=this._findNonStatic(this.toolbox)||this._findNonStatic(this.toolbox.offsetParent);
this.base_pos=(this.base_obj)?Element.realPos(this.base_obj):{top:0,left:0}
},_findNonStatic:function(oEl){if(!oEl){return oEl
}if(Element.getCSS(oEl,"position").match(/absolute|relative/i)){return oEl
}},_lockFocus:function(){if(!this._agent.IE){return
}try{$(this.focusHolder1).focus();
$(this.focusHolder2).focus()
}catch(e){setTimeout(this._lockFocus.bind(this),10)
}},lockFocus:function(){setTimeout(this._lockFocus.bind(this),10)
},_addDummyFocus:function(){var elParent=parent;
var elDoc=document;
var elPrev;
while(elParent!=elPrev&&elParent.document.domain==elDoc.domain){elDoc=elParent.document;
elPrev=elParent;
elParent=elParent.parent
}var oDummyEl=elDoc.createElement("a");
var elBody=elDoc.getElementsByTagName("body")[0];
oDummyEl.setAttribute("href","#");
elBody.insertBefore(oDummyEl,elBody.firstChild);
elParent.focus();
oDummyEl.focus();
elBody.removeChild(oDummyEl)
},_initDoc:function(){var t=this;
var o=this.options;
var txt=this.textArea.value.replace(/^\s+|\s+$/g,"");
var doc;
try{doc=this.getDocument();
if(doc==null||doc.location.href=="about:blank"){throw new Error("access denied")
}this.getWindow().editorInstance=this;
if(txt.length>0){this.setContent(txt,true)
}if(this._agent.IE||this._agent.Safari){doc.body.contentEditable=true
}else{doc.designMode="On"
}if(this.iframe.style.display!="none"){this.iframe.style.display="none";
this.iframe.style.display="block"
}this.tidyNbsp();
if(typeof o.onLoad=="function"){o.onLoad()
}if(!this.options.bFocus){setTimeout(this._addDummyFocus,0)
}}catch(e){setTimeout(this._initDoc.bind(this),100);
return
}setTimeout(function(){t._initDocumentPlugin()
},100)
},_initDocumentPlugin:function(){var t=this;
var names=this.options.docplugins;
var events=["Focus","Blur","Click","Mouseup","Mousedown","Dblclick","Keypress","Keyup","Keydown"];
var events_ie=["Activate","Beforedeactivate"];
var i,j,m,e,a=this._agent,doc=this.getDocument();
var funcHide=function(){t._closeLastPlugin()
};
Event.register(doc,a.IE?"activate":"focus",funcHide);
Event.register(doc,"keydown",function(e){if(a.IE&&doc.selection.type.toLowerCase()=="control"&&e.keyCode==8){doc.execCommand("delete",false,false);
e.keyCode=0
}if(!e.ctrlKey&&!e.altKey&&e.keyCode!=9){return true
}var c=Editor.getHotkeyCode(e.ctrlKey,e.altKey,e.shiftKey,e.keyCode);
try{if(Editor.hotkeys[c]){Editor.hotkeys[c](t,e.keyCode,{ctrl:e.ctrlKey,alt:e.altKey,shift:e.shiftKey});
Event.stop(e);
return false
}}catch(err){}return true
});
Event.register(doc,"keypress",funcHide);
Event.register(doc,"mousedown",funcHide);
for(i=0;
i<events.length;
i++){m="on"+events[i];
e=(a.IE&&events_ie[i]?events_ie[i]:events[i]).toLowerCase();
for(j=0;
j<names.length;
j++){if(typeof Editor.plugins[names[j]].editor=="undefined"){Editor.plugins[names[j]].editor=this
}if(Editor.plugins[names[j]][m]){Event.register(doc,e,Editor.plugins[names[j]][m].bindForEvent(Editor.plugins[names[j]]))
}}}if(jindo.$Agent().navigator().ie==true&&jindo.$Agent().navigator().version==7){if(jindo.$("pointSection")!=null){elementShowForIE7()
}}},tidyNbsp:function(){if(!this._agent.IE){return
}var pNodes=this.getDocument().body.getElementsByTagName("P");
for(var i=0;
i<pNodes.length;
i++){if(pNodes[i].childNodes.length==1&&pNodes[i].innerHTML=="&nbsp;"){pNodes[i].innerHTML=""
}}},_execCommand:function(sCommand,val){var a=this._agent;
var win,doc,sel,rng;
var bImageLink=false;
if(typeof val=="undefined"){val=null
}(win=this.getWindow()).focus();
doc=this.getDocument();
sel=this.getSelection();
rng=sel.getRange();
switch(sCommand.toLowerCase()){case"backcolor":if(!a.Opera&&!a.Gecko){this.getDocument().body.style.backgroundColor=val;
return
}break;
case"createlink":break;
case"hilitecolor":if(a.IE||a.Safari){sCommand="backcolor"
}break;
case"insertimage":if(a.Safari){}break;
case"inserthtml":if(val==null){val=""
}if(a.Safari||a.IE||!doc.queryCommandSupported(sCommand)){sel.setHTML(val);
return
}break;
case"strikethrough":break;
case"formatblock":if(a.IE){if(val.toLowerCase()=="blockquote"){doc.execCommand("indent");
return
}else{val=" <"+val+">"
}}break
}try{doc.execCommand(sCommand,false,val||null);
if(a.IE){var proc=function(){var unselect=(sel.type=="none");
sel.setRange(rng);
if(unselect){doc.execCommand("unselect",false,null)
}};
setTimeout(proc,10)
}}catch(e){debugg.log(sCommand+" : "+val)
}},execCommand:function(sCommand,button,argument){var plugin=Editor.plugins[sCommand];
Editor.currentEditorInstance=this;
if(this._allowedCommand.length>0&&!this._allowedCommand.has(sCommand)){return
}for(var x in Editor.plugins){try{Editor.plugins[x].onCommand(sCommand)
}catch(e){}}if(plugin){this._execCommandPlugin(plugin,button,argument)
}else{this._execCommandDefault(sCommand,button,argument)
}this._lastCommand=sCommand;
return true
},_execCommandPlugin:function(plugin,button,argument){var skin_layer=Editor.getSkin($(this.options.skin),plugin.name+"_items");
plugin.editor=this;
if(button==null&&this._buttons[plugin.name]){button=this._buttons[plugin.name]
}plugin.create(button,skin_layer);
if(this._lastCommand!=plugin.name){this._closeLastPlugin(true)
}if(this._agent.IE&&plugin.bPreserveSelection){var sel=this.getSelection();
if(sel.type=="none"&&sel.boudingHeight==0){this.getWindow().focus()
}this.preserveSelection()
}if(this._agent.IE7){this._resizeStartIframeH=this.iframe.offsetHeight;
this._resizeStartTextAreaH=this.textArea.offsetHeight;
this.iframe.parentNode.style.height=(this._resizeStartIframeH)+"px";
this.textArea.parentNode.style.height=(this._resizeStartTextAreaH)+"px"
}switch(plugin.type){case"simple":plugin.execute(button,argument);
break;
case"list":case"menu":case"dialog":var pos={top:0,left:0,right:0,bottom:0,limitLeft:0,limitRight:0};
var tb_pos=Element.realPos(this.toolbox);
this.base_obj=this._findNonStatic(this.toolbox)||this._findNonStatic(this.toolbox.offsetParent);
this.base_pos=(this.base_obj)?Element.realPos(this.base_obj):{top:0,left:0};
if(this._agent.IE7){this.base_pos.top=jindo.$Element(this.toolbox.offsetParent).offset().top-this.toolbox.offsetParent.offsetParent.offsetTop-this.toolbox.offsetParent.offsetParent.offsetParent.offsetTop;
this.base_pos.left=jindo.$Element(this.toolbox.offsetParent.offsetParent).offset().left+this.toolbox.offsetParent.offsetParent.offsetParent.offsetLeft+6
}pos.right=tb_pos.left+this.toolbox.offsetWidth-this.base_pos.left;
pos.bottom=tb_pos.top+this.toolbox.offsetHeight-this.base_pos.top;
pos.limitRight=pos.right;
if(plugin.type=="dialog"){pos.top=tb_pos.top+50-this.base_pos.top;
pos.left=tb_pos.left+Math.round(this.toolbox.offsetWidth/2)-130-this.base_pos.left
}else{var bt_pos=Element.realPos(button);
pos.top=bt_pos.top+button.offsetHeight-1-this.base_pos.top;
pos.left=bt_pos.left-this.base_pos.left;
pos.limitLeft=tb_pos.left-this.base_pos.left;
if(this._agent.Safari){pos.top=pos.top-8;
pos.left=pos.left-button.offsetLeft
}}plugin.show(pos);
break;
case"document":break
}},_execCommandDefault:function(sCommand,button,argument){this._closeLastPlugin(true);
switch(sCommand){case"html":window.focus();
if(argument){Element.hide(this.iframe);
Element.show(this.textArea);
this.textArea.value="";
this.textArea.style.witdth=this.textArea.offsetWidth+"px";
this.textArea.value=this.getContent();
this.editmode="html";
this.allowCommand("html","summary")
}else{this.editmode="wysiwyg";
this.allowCommand();
Element.show(this.iframe);
Element.hide(this.textArea);
this.setContent(this.textArea.value);
this.tidyNbsp()
}break;
case"more":var tools=$(argument);
var t=this;
var hideMore=function(){Element.hide(tools)
};
var doc=this.getDocument();
var isButtonInMore=function(button){buttons=tools.getElementsByTagName("IMG");
for(var x in buttons){if(buttons[x]==button){return true
}}return false
};
var closeMore=function(){Event.unregister(doc,"keypress",closeMore);
Event.unregister(doc,"mousedown",closeMore);
t.hearPluginEvent=function(sEvent,plugin){};
Element.hide(tools)
};
var showMore=function(){Event.register(doc,"keypress",closeMore);
Event.register(doc,"mousedown",closeMore);
t.hearPluginEvent=function(sEvent,plugin){if(sEvent=="close"&&!isButtonInMore(this._lastPushed)){closeMore()
}this._lastPushed=null
};
var toolWidth=parseInt(tools.style.width)|0;
tools.style.position="absolute";
tools.style.left=(button.offsetWidth-toolWidth)+"px";
tools.style.top=t._agent.IE?"20px":"9px";
tools.style.zIndex=100;
tools.onmousedown=Editor.stopEvent;
Element.show(tools)
};
if(Element.visible(tools)){closeMore()
}else{showMore()
}break;
default:try{if(["insertorderedlist","insertunorderedlist","outdent","indent"].has(sCommand)&&(new NodeRange(this.getWindow(),this.getDocument())).getType()=="table"){this._hideMenu();
alert(Editor._("plugin.font.notableeditor"));
return false
}this._execCommand(sCommand,argument)
}catch(err){if(debugg){debugg.log("Error : "+err)
}}}},_closeLastPlugin:function(onCommand){if(this._noHide){return
}if(typeof onCommand=="undefined"){onCommand=false
}try{if(!onCommand&&Editor.plugins[this._lastCommand].type=="dialog"){return
}Editor.plugins[this._lastCommand].close();
this._lastCommand=""
}catch(e){}},hearPluginEvent:function(sEvent,plugin){},_makeIframe:function(){var ifr=$C("iframe");
ifr.setAttribute("src",this.options.defaultDoc);
ifr.setAttribute("id","smartEditorIframe");
ifr.setAttribute("name","smartEditorIframe");
ifr.setAttribute("frameBorder",0);
ifr.setAttribute("allowTransparency",true);
ifr.setAttribute("width","100%");
ifr.setAttribute("height","100%");
ifr.style.width="100%";
ifr.style.height="100%";
return ifr
},_makeToolbar:function(){var o=this.options;
var t=this;
var btns=this.toolbox.getElementsByTagName("img");
var alt,cmd,normal_img,hover_img,down_img;
var funcExecute=function(img,cmd,arg){return function(e){t.execCommand(cmd,img,arg);
Event.stop(e||window.event)
}
};
var imgCache=function(src){(new Image).src=src.replace(Editor.imgRegex,"_over.$2");
(new Image).src=src.replace(Editor.imgRegex,"_down.$2")
};
for(var i=0;
i<btns.length;
i++){alt=btns[i].getAttribute("alt")+"";
if(alt.indexOf("command:")!=0){continue
}cmd=alt.split(":");
this._makeButton(btns[i],cmd[1],cmd[2],funcExecute);
imgCache(btns[i].src)
}},_makeButton:function(img,cmd,arg,func){img.setAttribute("title",Editor._("command."+cmd+".description"));
img.setAttribute("nhn:command",cmd);
img.setAttribute("nhn:argument",arg);
img.setAttribute("nhn:state","normal");
this._buttons[cmd]=img;
try{img.style.cursor="pointer"
}catch(e){img.style.cursor="hand"
}if(cmd=="more"&&arg&&$(arg)){img.parentNode.style.position="relative";
img.parentNode.appendChild($(arg))
}Event.register(img,"mousedown",Editor.buttonEvent.onMouseDown);
Event.register(img,"mousedown",func(img,cmd,arg));
Event.register(img,"mouseup",Editor.buttonEvent.onMouseUp);
Event.register(img,"mouseover",Editor.buttonEvent.onMouseOver);
Event.register(img,"mouseout",Editor.buttonEvent.onMouseOut);
try{Event.register(img,"dragstart",Event.stopProc)
}catch(e){}},_makeResize:function(){var t=this;
var grip=t.options.sizeGrip?$(t.options.sizeGrip):null;
this.bResizing=false;
if(grip==null){return
}this._resize_ondown=this._resizeOnDown.bindForEvent(this);
this._resize_onmove=this._resizeOnMove.bindForEvent(this);
this._resize_onup=this._resizeOnUp.bindForEvent(this);
grip.onmousedown=this._resize_ondown;
grip.onmouseup=this._resize_onup
},_resizeOnDown:function(e){if(this.bResizing){return
}this.bResizing=true;
this._resizeDiff=0;
this._resizeStartY=e.page_y;
this._resizeStartH=this.toolbox.offsetHeight;
this._resizeStartIframeH=this.iframe.offsetHeight;
this._resizeStartTextAreaH=this.textArea.offsetHeight;
if(this.editmode=="html"){this.textArea.parentNode.style.height=(this._resizeStartTextAreaH)+"px";
this.textArea.style.display="none"
}else{this.iframe.parentNode.style.height=(this._resizeStartIframeH)+"px";
this.iframe.style.display="none"
}Event.register(document,"mouseup",this._resize_onup);
Event.register(document,"mousemove",this._resize_onmove);
e.stop()
},_resizeOnMove:function(e){var nGap=this.toolbox.offsetHeight-this.iframe.parentNode.offsetHeight+1;
var diff=e.page_y-this._resizeStartY;
var iframeH=this._resizeStartIframeH+diff;
var textAreaH=this._resizeStartTextAreaH+diff;
var changedIframeH=(iframeH<0?this.options.minHeight:iframeH)+"px";
var changedTextAreaH=(textAreaH<0?this.options.minHeight:textAreaH)+"px";
if(this._resizeStartH+diff<this.options.minHeight+nGap){this.toolbox.style.height=this.options.minHeight?(this.options.minHeight)+"px":(Math.max(this.options.minHeight,this.getDocument().body.scrollHeight+nGap))+"px"
}else{if(this.editmode=="html"){this.textArea.parentNode.style.height=changedTextAreaH;
this.textArea.style.height=changedTextAreaH;
this.iframe.style.height=changedTextAreaH
}else{this.iframe.parentNode.style.height=changedIframeH;
this.iframe.style.height=changedIframeH;
this.textArea.style.height=changedIframeH
}this.toolbox.style.height=(this._resizeStartH+diff)+"px"
}this.options.onResize();
e.stop()
},_resizeOnUp:function(e){this.bResizing=false;
if(this.editmode=="html"){this.textArea.style.display=""
}else{this.iframe.style.display=""
}Event.unregister(document,"mousemove",this._resize_onmove);
Event.unregister(document,"mouseup",this._resize_onup);
e.stop()
},_refreshIE:function(){this.iframe.style.display="none";
this.iframe.style.display=""
},preserveSelection:function(){var t=this;
var rng=this.getSelection().getRange();
this._noHide=true;
setTimeout(function(){t.getSelection().setRange(rng);
t._noHide=false
},5)
},getWindow:function(){if($Agent().IE){return this.iframe.contentWindow.document.body||this.iframe
}return this.iframe.contentWindow||this.iframe
},getDocument:function(){try{return this.iframe.contentWindow.document
}catch(e){return null
}},getContent:function(forSave){var sHTML="";
forSave=forSave||false;
if(this.editmode=="wysiwyg"){sHTML=this.getDocument().body.innerHTML;
if(/^<br[ ]*\/?>$/i.test(sHTML)){sHTML=""
}if(sHTML){sHTML=this.filter.execute(sHTML,"HTML")
}}else{sHTML=this.textArea.value
}if(sHTML&&forSave){sHTML=this.filter.execute(sHTML,"Save")
}return sHTML
},setContent:function(sHTML,fromDB){fromDB=fromDB||false;
if(fromDB){sHTML=this.filter.execute(sHTML,"Load");
this._originalText=sHTML.replace(/<br\s*\/?>|\n|\r|&nbsp;/,"")
}if(this.editmode=="wysiwyg"){sHTML=this.filter.execute(sHTML,"Edit");
this.getDocument().body.innerHTML=sHTML
}else{this.textArea.value=sHTML
}},getSelection:function(){return new Editor.Selection(this)
},allowCommand:function(){var btns=$(this.options.toolbox).getElementsByTagName("img");
var args=$A(arguments);
if(args.length){this._allowedCommand.push.apply(this._allowedCommand,args)
}else{this._allowedCommand=[]
}$A(btns).each(function(v){if(v.getAttribute("alt")==null){return
}if(v.getAttribute("alt").indexOf("command:")!=0){return
}var cmd=v.getAttribute("alt").substr(8);
var enable=(!args.length||args.has(cmd));
v.setAttribute("nhn:state",enable?"normal":"disable");
Element.setCSS(v,{filter:enable?"":"Alpha(Opacity=30)",opacity:enable?"":0.3})
})
},setUnloadWarn:function(bSet,bLeaveExisting){var t=this;
bSet=bSet||false;
if(bSet){window.onbeforeunload=function(){if(t.isChanged()){return Editor._("event.onexit.message")
}}
}else{if(!bLeaveExisting){window.onbeforeunload=null
}}},isChanged:function(){var sHTML=this.getContent().replace(/<br\s*\/?>|\n|\r|&nbsp;/,"");
return(sHTML!=this._originalText)
},resizeContentArea:function(nHeight){var nGap=this.toolbox.offsetHeight-this.iframe.parentNode.offsetHeight+1;
this.toolbox.style.height=nHeight?(nHeight)+"px":(Math.max(this.options.minHeight,this.getDocument().body.scrollHeight+nGap))+"px";
this.options.onResize()
}});
Editor.Selection=Class({_range:null,_selection:null,type:"none",startNode:null,endNode:null,startContainer:null,endContainer:null,parentElement:null,startBoundary:null,endBoundary:null,__init:function(oEditor){var sel,rng,rng_start,rng_end;
this._editor=oEditor;
this._win=oEditor.getWindow();
this._doc=oEditor.getDocument();
this._ie=!(this._win.getSelection);
this.refresh()
},refresh:function(){this._selection=this.getSelection();
this._range=this.getRange();
if(this._ie){this.type=this._selection.type.toLowerCase();
if(this.type=="control"){this.startContainer=this._range.item(0);
this.endContainer=this.startNode=this.endNode=this.startContainer;
this.parentElement=this.startNode.parentNode;
return
}this.parentElement=this._range.parentElement();
rng_start=this._range.duplicate();
rng_end=this._range.duplicate()
}else{this._selection=this._win.getSelection();
this._range=this._selection.getRangeAt(0);
if(this._range.toString()==""){this.type="none";
if(this._range.startContainer.nodeType==1&&this._range.startContainer===this._range.endContainer){this.type="control";
this.startContainer=this._range.startContainer;
this.endContainer=this.startNode=this.endNode=this.startContainer;
this.parentElement=this.startNode.parentNode;
return
}}else{this.type="text"
}this.parentElement=this._range.commonAncestorContainer;
while(this.parentElement.nodeType!=1){this.parentElement=this.parentElement.parentNode
}rng_start=this.getRange().cloneRange();
rng_end=this.getRange().cloneRange()
}rng_start.collapse(true);
rng_end.collapse(false);
if(this._ie){this.startContainer=rng_start.parentElement();
this.endContainer=rng_end.parentElement();
var el,txtNode=null;
if(this.startContainer.childNodes.length==0){this.startNode=this.startContainer
}else{for(var i=0;
i<this.startContainer.childNodes.length;
i++){el=this.startContainer.childNodes[i];
if(el.nodeType==3){txtNode=el
}if(el.nodeType!=1){continue
}if(el.offsetTop>rng_start.offsetTop){break
}if(el.offsetTop==rng_start.offsetTop&&el.offsetLeft>rng_start.offsetLeft){break
}}this.startNode=txtNode?txtNode:el
}if(rng_start.isEqual(rng_end)){this.endNode=this.startNode
}else{if(this.endContainer.childNodes.length==0){this.endNode=this.endContainer
}else{txtNode=null;
for(var i=this.endContainer.childNodes.length-1;
i>=0;
i--){el=this.endContainer.childNodes[i];
if(el.nodeType==3){txtNode=el
}if(el.nodeType!=1){continue
}if(el.offsetTop<rng_end.offsetTop){break
}if(el.offsetTop==rng_end.offsetTop&&el.offsetLeft<rng_end.offsetLeft){break
}}this.endNode=txtNode?txtNode:el
}}}else{this.startNode=this._range.startContainer;
this.endNode=this._range.endContainer;
if(this.startNode.nodeType!=1){this.startContainer=this.startNode.parentNode
}if(this.endNode.nodeType!=1){this.endContainer=this.endNode.parentNode
}}},getHTML:function(){if(this._ie){return this._range.htmlText
}var div=$C("div");
div.appendChild(this._range.cloneContents());
return div.innerHTML
},setHTML:function(sHTML){if(document.selection){if(this.type=="control"){this.startNode.outerHTML=sHTML
}else{this._range.pasteHTML(sHTML)
}return
}var fcs=this.getRange();
var div=this._doc.createElement("div");
div.innerHTML=sHTML;
var end=div.lastChild;
this._range.deleteContents();
while(div.lastChild){this._range.insertNode(div.lastChild)
}fcs.setStartAfter(end);
this._selection.removeAllRanges();
this._selection.addRange(fcs);
this.refresh()
},inSelection:function(node){var range;
if(this._ie){while(node.nodeType!=1){node=node.parentNode
}range=this._doc.body.createTextRange();
range.moveToElementText(node);
return this._range.inRange(range)
}else{return this._selection.containsNode(node,false)
}},isSelected:function(){this.refresh();
if(this._ie){return(this._selection.type.toLowerCase()!="none")
}else{return(this._selection.rangeCount>0)
}},focus:function(){try{var rng,el=this._doc.body.appendChild(this._doc.createElement("span"));
if(this._win.getSelection){rng=this._doc.createRange();
rng.selectNode(el);
this.setRange(rng)
}else{if(this._doc.selection){rng=this._doc.body.createTextRange();
rng.moveToElementText(el);
rng.select()
}}el.parentNode.removeChild(el)
}catch(e){}},setStartBefore:function(node){if(this._ie){var range=this._doc.body.createTextRange();
var aNode=this._doc.createElement("a");
aNode.innerHTML="gony";
node.parentNode.insertBefore(aNode,node);
range.moveToElementText(aNode);
this._range.setEndPoint("StartToStart",range);
aNode.parentNode.removeChild(aNode)
}else{this._range.setStartBefore(node)
}},setEndAfter:function(node){if(this._ie){var range=this._doc.body.createTextRange();
var aNode=this._doc.createElement("a");
aNode.innerHTML="gony";
if(node.nextSibling){node.parentNode.insertBefore(aNode,node.nextSibling)
}else{node.parentNode.appendChild(aNode)
}range.moveToElementText(aNode);
this._range.setEndPoint("EndToEnd",range);
aNode.parentNode.removeChild(aNode)
}else{this._range.setEndAfter(node)
}},selectNode:function(startNode,endNode){if(!endNode){endNode=startNode
}this.setStartBefore(startNode);
this.setEndAfter(endNode);
if(this._ie){this._range.select()
}},getSelection:function(){if(this._win.getSelection){return this._win.getSelection()
}else{if(this._doc.selection){return this._doc.selection
}else{return null
}}},getRange:function(){var rng=null;
if(this._ie){rng=this._selection.createRange()
}else{rng=this._selection.getRangeAt(0)
}return rng
},setRange:function(oRange){if(!oRange){return
}try{if(this._ie){oRange.select()
}else{this._selection=this._win.getSelection();
this._selection.removeAllRanges();
this._selection.addRange(oRange)
}}catch(e){}this.refresh()
},getAllNode:function(){if(this.type=="control"){return[this.startNode]
}if(this.startBoundary==null||this.endBoundary==null){throw"Please run createTempBoundary before"
}if(this.startBoundary.nextSibling===this.endBoundary){return[]
}var node,nodes=new Array;
var getAllChildren=function(parentNode){if(parentNode.nodeType!=1){return
}for(var i=0;
i<parentNode.childNodes.length;
i++){nodes.push(parentNode.childNodes[i]);
getAllChildren(parentNode.childNodes[i])
}};
node=this.startBoundary;
while(true){if(!node.nextSibling){node=node.parentNode;
if(node===this.parentElement){break
}continue
}node=node.nextSibling;
if(node.nodeType==3){nodes.push(node);
continue
}if(!this.inSelection(node)){break
}nodes.push(node);
getAllChildren(node)
}node=this.endBoundary;
while(true){if(!node.previousSibling){node=node.parentNode;
if(node===this.parentElement){break
}continue
}node=node.previousSibling;
if(node.nodeType==3){nodes.push(node);
continue
}if(!this.inSelection(node)){break
}nodes.push(node);
getAllChildren(node)
}var i,k;
for(i=0;
i<nodes.length-1;
i++){for(k=i+1;
k<nodes.length;
k++){if(nodes[i]===nodes[k]){nodes.splice(k,1)
}}}return nodes
},createTempBoundary:function(){this.startBoundary=null;
this.endBoundary=null;
if(this.type=="control"){return
}var boundaryId=(new Date()).getTime();
var spanStart='<span id="tmpBoundary_'+boundaryId+'_start">[</span>';
var spanEnd='<span id="tmpBoundary_'+boundaryId+'_end">]</span>';
var rng=this.getRange();
var start=rng.cloneRange?rng.cloneRange():rng.duplicate();
var end=rng.cloneRange?rng.cloneRange():rng.duplicate();
start.collapse(true);
end.collapse(false);
if(this._ie){if(start.isEqual(end)){start.pasteHTML(spanStart+spanEnd);
return
}else{start.pasteHTML(spanStart);
end.pasteHTML(spanEnd)
}this.startBoundary=this._doc.getElementById("tmpBoundary_"+boundaryId+"_start");
this.endBoundary=this._doc.getElementById("tmpBoundary_"+boundaryId+"_end");
start.moveToElementText(this.startBoundary);
end.moveToElementText(this.endBoundary);
rng.setEndPoint("EndToStart",end);
rng.setEndPoint("StartToEnd",start);
rng.select()
}else{var div=$C("div");
div.innerHTML=spanEnd;
spanEnd=div.firstChild;
end.insertNode(spanEnd);
div.innerHTML=spanStart;
spanStart=div.firstChild;
start.insertNode(spanStart);
rng.setEndBefore(spanEnd);
rng.setStartAfter(spanStart);
this.startBoundary=spanStart;
this.endBoundary=spanEnd
}this.refresh()
},removeTempBoundary:function(){if(this.startBoundary){this.startBoundary.parentNode.removeChild(this.startBoundary)
}if(this.endBoundary){this.endBoundary.parentNode.removeChild(this.endBoundary)
}this.startBoundary=null;
this.endBoundary=null
},surround:function(sNodeName){var node=this._doc.createElement(sNodeName);
if(this._ie){var tmpId="test_"+parseInt(Math.random()*10000);
var id=node.id;
node.innerHTML=this._range.htmlText;
node.id=tmpId;
this._range.pasteHTML(node.outerHTML);
node=this._doc.getElementById(tmpId);
this.selectNode(node);
node.id=id
}else{this._range.surroundContents(node)
}return node
}});
Editor.baseURL="./";
Editor.plugins={};
Editor.loadPlugin=function(sPlugin){var pluginURL=Editor.baseURL+"plugin/"+sPlugin+"/"+sPlugin+".plugin.js";
document.write('<script type="text/javascript" src="'+pluginURL+'"><\/script>')
};
Editor.registerPlugin=function(oPlugin){Editor.plugins[oPlugin.name]=oPlugin
};
Editor.unregisterPlugin=function(oPlugin){Editor.plugins[oPlugin.name]=null
};
Editor.imgRegex=/(_(?:over|down))?\.([0-9a-z]+)$/gi;
Editor.buttonEvent={getInfo:function(e){e=e||window.event;
var el=e.target||e.srcElement;
var cmd=el.getAttribute("nhn:command");
var arg=el.getAttribute("nhn:argument");
var state=el.getAttribute("nhn:state");
if(el.tagName.toUpperCase()!="IMG"){return null
}if(state=="disable"||state=="active"){Event.stop(e)
}return{element:el,state:state,command:cmd,argument:arg}
},onMouseOver:function(e){var info=Editor.buttonEvent.getInfo(e);
if(info==null){return
}if(info.state=="disable"||info.state=="active"){return
}try{info.element.src=info.element.src.replace(Editor.imgRegex,"_over.$2")
}catch(e){}},onMouseOut:function(e){var info=Editor.buttonEvent.getInfo(e);
if(info==null){return
}if(info.state=="disable"||info.state=="active"){return
}try{info.element.src=info.element.src.replace(Editor.imgRegex,".$2")
}catch(e){}},onMouseDown:function(e){var info=Editor.buttonEvent.getInfo(e);
if(info==null){return
}if(info.state=="disable"){return
}try{info.element.src=info.element.src.replace(Editor.imgRegex,"_down.$2")
}catch(e){}},onMouseUp:function(e){var info=Editor.buttonEvent.getInfo(e);
if(info==null){return
}if(info.state=="disable"||info.state=="active"){return
}try{info.element.src=info.element.src.replace(Editor.imgRegex,".$2")
}catch(e){}}};
Editor.getSkin=function(skin_container,skin){for(var i=0;
i<skin_container.childNodes.length;
i++){if(skin_container.childNodes[i].nodeType!=1){continue
}if(Element.hasClass(skin_container.childNodes[i],skin)){var obj=skin_container.childNodes[i];
obj.style.display="none";
return obj
}}return null
};
Editor.hotkeys=new Array;
Editor.getHotkeyCode=function(ctrl,alt,shift,key){ctrl=ctrl?2:0;
alt=alt?4:0;
shift=shift?8:0;
return(ctrl+alt+shift)*1000+key
};
Editor.getHotkeyCodeFromStr=function(sShortcut){var f=function(s,ss){return(s.indexOf(ss)!=-1)
};
var s=sShortcut.replace(/\s+/g,"").toUpperCase();
var k=s.replace(/(shift|ctrl|alt|\+)/gi,"");
switch(k){case"TAB":k=9;
break;
case"BKSP":k=8;
break;
case"SPACE":k=32;
break;
case";":k=59;
break;
case"'":k=222;
break;
case",":k=188;
break;
case".":k=190;
break;
case"/":k=191;
break;
default:k=k.charCodeAt(0);
break
}return Editor.getHotkeyCode(f(s,"CTRL"),f(s,"ALT"),f(s,"SHIFT"),k)
};
Editor.registerHotkey=function(key,handler){var c=Editor.getHotkeyCodeFromStr(key);
Editor.hotkeys[c]=handler
};
Editor.unregisterHotkey=function(key){var c=Editor.getHotkeyCodeFromStr(key);
Editor.hotkeys[c]=null
};
Editor._=function(key){if(typeof Editor.lang=="undefined"){return key
}if(typeof Editor.lang[key]=="undefined"){return key
}return unescape(Editor.lang[key])
};
Editor.stopEvent=function(evt){var e=evt||window.event;
try{e.returnValue=false;
e.cancelBubble=true;
if(e.stopPropagation){e.stopPropagation()
}if(e.srcElement.tagName.toLowerCase()!="input"&&e.preventDefault){e.preventDefault()
}}catch(e){}};
Editor.Dialog={_startPos:[0,0],_startMouse:[0,0],register:function(obj,handler){var t=this;
handler.onmousedown=function(){}
},mousedown:function(e){this._startPos=[parseInt(Editor.Dialog.activeDialog.style.left),parseInt(Editor.Dialog.activeDialog.style.top)];
this._startMouse=[e.page_x,e.page_y];
Event.register(document,"mousemove",this.mousemove);
Event.register(document,"mouseup",this.mouseup);
Event.stop(e)
},mousemove:function(e){if(!Editor.Dialog.activeDialog){return
}var diff_x=this._startMouse[0]-e.page_x;
var diff_y=this._startMouse[1]-e.page_y;
Element.setCSS(Editor.Dialog.activeDialog,{left:(this._startPos[0]+diff_x),top:(this._startPos[1]+diff_y)})
},mouseup:function(){Editor.Dialog.activeDialog=null;
Event.unregister(document,"mousemove",this.mousemove);
Event.unregister(document,"mouseup",this.mouseup)
}};
Editor.Dialog.activeDialog=null;
Editor.instances={};
Editor.$=function(id){return(typeof Editor.instances[id]=="undefined")?null:Editor.instances[id]
};
Editor.filterAgent=Class({_filters:[],__init:function(){},register:function(filter){this._filters.push(filter)
},unregister:function(filter){this._filters=this._filters.reject(filter)
},execute:function(sHTML,sEvent){for(var i=0;
i<this._filters.length;
i++){if(typeof this._filters[i]["on"+sEvent]!="undefined"){try{sHTML=this._filters[i]["on"+sEvent](sHTML)
}catch(e){}}}return sHTML
}});
Editor.simplePlugin=Class({type:"simple",editor:null,bPreserveSelection:true,_button:null,onCreate:function(){},onExecute:function(){},create:function(button){if(this.__created){return true
}this._button=button;
this.onCreate();
this.__created=true
},execute:function(button,argument){this.onExecute(button,argument)
}});
Editor.basePlugin=Class({type:"",html:"",editor:null,bPreserveSelection:true,_button:null,_object:null,_agent:null,onCreate:function(){},onShow:function(){},onClose:function(){},__init:function(){this.editor=null;
this._object=null;
this._button=null;
this._agent=$Agent();
this.__created=false;
this.__bindAction={}
},_createObject:function(skin_div){if(this._object==null){this._object=$(skin_div);
var html=this._object.innerHTML;
html=html.replace(/\{act\|([a-z0-9_\-]+)(\|([^{}]+))?\}/ig,"Editor.plugins."+this.name+".executeAction(event,'$1',[$3])");
this._object.innerHTML=html;
this._object.style.position="absolute";
this._object.style.zIndex=105;
this._object.onmousedown=Editor.stopEvent;
this.editor.toolbox.parentNode.appendChild(this._object);
this.object=this._object
}},assignAction:function(act){var t=this;
var arg=$A(arguments);
arg.shift();
var a=[act,arg];
return function(e){if(a.length>2){a.shift()
}a.unshift(e);
return t.executeAction.apply(t,a)
}
},executeAction:function(e,act,arg){var t=this;
var act=act.toLowerCase();
act=act.substr(0,1).toUpperCase()+act.substr(1);
if(t["act"+act]){t["act"+act].apply(t,arg)
}return Event.stop(e||window.event)
},create:function(button,skin_div){if(this.__created){return true
}this._button=button;
this._createObject(skin_div);
this.onCreate();
this.__created=true
},show:function(pos){var button=this._button;
var object=this._object;
var left=0;
if(button.getAttribute("nhn:state")=="active"){this.close();
return
}this._object.style.top=pos.top+"px";
Element.show(object);
try{if(this.onShow(button,button.getAttribute("nhn:argument"))===false){return
}}catch(e){}this._object.style.top=pos.top+"px";
if(pos.left+object.offsetWidth>pos.right){left=pos.left+button.offsetWidth-object.offsetWidth
}else{left=pos.left
}if(pos.limitLeft>left){left=pos.limitLeft+10
}object.style.left=left+"px";
try{button.src=button.src.replace(Editor.imgRegex,"_down.$2")
}catch(e){}button.setAttribute("nhn:state","active");
this.editor.hearPluginEvent("show",this)
},close:function(){this.onClose();
Element.hide(this._object);
try{this._button.src=this._button.src.replace(Editor.imgRegex,".$2")
}catch(e){}this._button.setAttribute("nhn:state","normal");
this.editor.hearPluginEvent("close",this)
}});
Editor.menuPlugin=Class.extend(Editor.basePlugin,{type:"menu"});
Editor.dialogPlugin=Class.extend(Editor.basePlugin,{type:"dialog",modal:true,_createObject$:Editor.basePlugin.prototype._createObject,_createObject:function(skin_div){var created=true;
if(this._object==null){created=false
}this._createObject$(skin_div);
var handler=this._object.getElementsByTagName("H4")[0].parentNode;
if(!created){handler.unselectable=true;
handler.onmousedown=this.onMouseDown.bindForEvent(this);
this.onmousemove=this.onMouseMove.bindForEvent(this);
this.onmouseup=this.onMouseUp.bindForEvent(this);
this._object.onmousedown=Editor.stopEvent
}},onMouseDown:function(e){this._startPos=[parseInt(this._object.style.left),parseInt(this._object.style.top)];
this._startMouse=[e.page_x,e.page_y];
Event.register(document,"mousemove",this.onmousemove);
Event.register(document,"mouseup",this.onmouseup);
Event.stop(e)
},onMouseMove:function(e){var diff_x=e.page_x-this._startMouse[0];
var diff_y=e.page_y-this._startMouse[1];
Element.setCSS(this._object,{left:(this._startPos[0]+diff_x),top:(this._startPos[1]+diff_y)})
},onMouseUp:function(){Event.unregister(document,"mousemove",this.onmousemove);
Event.unregister(document,"mouseup",this.onmouseup)
}});
Editor.documentPlugin=Class({type:"document"});
var hotkey_indent=function(editor,key,shiftState){editor.execCommand(shiftState.shift?"outdent":"indent",null)
};
Editor.registerHotkey("Tab",hotkey_indent);
Editor.registerHotkey("Shift+Tab",hotkey_indent);
var hotkey_basic=function(editor,key,shiftState){var c=String.fromCharCode(key);
var cmd={B:"bold",I:"italic",U:"underline",Z:"undo",Y:"redo"};
if(cmd[c]){editor.execCommand(cmd[c],null)
}};
Editor.registerHotkey("Ctrl+B",hotkey_basic);
Editor.registerHotkey("Ctrl+I",hotkey_basic);
Editor.registerHotkey("Ctrl+U",hotkey_basic);
Editor.registerHotkey("Ctrl+Z",hotkey_basic);
Editor.registerHotkey("Ctrl+Y",hotkey_basic);
Editor.lang={"command.undo.description":"%uC2E4%uD589%20%uCDE8%uC18C","command.redo.description":"%uB2E4%uC2DC%20%uC2E4%uD589","command.fontsize.description":"%uAE00%uC790%uD06C%uAE30","command.fontcolor.description":"%uAE00%uC790%uC0C9%uC0C1","command.fontbackgroundcolor.description":"%uBC30%uACBD%uC0C9%uC0C1","command.strikethrough.description":"%uCDE8%uC18C%uC120","command.justifyleft.description":"%uC67C%uCABD%20%uC815%uB82C","command.justifycenter.description":"%uC911%uAC04%20%uC815%uB82C","command.justifyright.description":"%uC624%uB978%uCABD%20%uC815%uB82C","command.justifyfull.description":"%uC591%uCABD%20%uC815%uB82C","command.bold.description":"%uAD75%uAC8C%28Ctrl+B%29","command.more.description":"%uB354%uBCF4%uAE30","command.italic.description":"%uAE30%uC6B8%uAC8C%28Ctrl+I%29","command.underline.description":"%uBC11%uC904%28Ctrl+U%29","command.fontname.description":"%uAE00%uAF34","command.lineheight.description":"%uC904%uAC04%uACA9","command.emoticoninsertion.description":"%uC774%uBAA8%uD2F0%uCF58","command.hyperlink.description":"%uB9C1%uD06C","command.indent.description":"%uB4E4%uC5EC%uC4F0%uAE30","command.outdent.description":"%uB0B4%uC5B4%uC4F0%uAE30","command.image.description":"%uC774%uBBF8%uC9C0","command.quote.description":"%uC778%uC6A9%uAD6C%20%uC124%uC815/%uD574%uC81C","command.inserttable.description":"%uD45C%20%uC0BD%uC785","command.scharinsertion.description":"%uD2B9%uC218%uAE30%uD638%20%uC0BD%uC785","command.searchkeyword.description":"%uCC3E%uAE30/%uBC14%uAFB8%uAE30","command.spellcheck.description":"%uB9DE%uCDA4%uBC95%20%uAC80%uC0AC","command.insertorderedlist.description":"%uC22B%uC790%uBAA9%uB85D","command.insertunorderedlist.description":"%uAE30%uD638%uBAA9%uB85D","command.layoutmanager.description":"%uB808%uC774%uC544%uC6C3%20%uB9E4%uB2C8%uC800","event.onexit.message":"%uC774%20%uD398%uC774%uC9C0%uB97C%20%uBC97%uC5B4%uB098%uC2DC%uBA74%20%uC791%uC131%20%uC911%uC778%20%uAE00%uC774%20%uC9C0%uC6CC%uC9D1%uB2C8%uB2E4.","plugin.searchreplace.inputkeyword":"%uCC3E%uC73C%uC2E4%20%uB2E8%uC5B4%uB97C%20%uC785%uB825%uD574%20%uC8FC%uC138%uC694.","plugin.searchreplace.notfound":"%uCC3E%uC73C%uC2E4%20%uB2E8%uC5B4%uAC00%20%uC5C6%uC2B5%uB2C8%uB2E4.","plugin.searchreplace.noreplace":"%uB354%20%uC774%uC0C1%20%uBC14%uAFC0%20%uB2E8%uC5B4%uAC00%20%uC5C6%uC2B5%uB2C8%uB2E4.","plugin.searchreplace.allreplace1":"%uC77C%uCE58%uD558%uB294%20%uB0B4%uC6A9%uC774%20%uCD1D%20","plugin.searchreplace.allreplace2":"%uAC74%20%uBC14%uB00C%uC5C8%uC2B5%uB2C8%uB2E4.","plugin.searchreplace.notsupport":"%uBCF8%20%uAE30%uB2A5%uC740%20Internet%20Explorer%uC5D0%uC11C%uB9CC%20%uC774%uC6A9%uD558%uC2E4%20%uC218%20%uC788%uC2B5%uB2C8%uB2E4.\n%uC774%uC6A9%uC5D0%20%uBD88%uD3B8%uC744%20%uB4DC%uB824%20%uC8C4%uC1A1%uD569%uB2C8%uB2E4.","plugin.spellcheck.directinput":"%uC9C1%uC811%uC785%uB825","plugin.spellcheck.nosuggest":"%uCD94%uCC9C%20%uB2E8%uC5B4%uAC00<br>%20%uC5C6%uC2B5%uB2C8%uB2E4.","plugin.spellcheck.checkinfomessage":"%uB9DE%uCDA4%uBC95%uC5D0%20%uC5B4%uAE0B%uB09C%20%uB2E8%uC5B4%uAC00%20<strong>{NUMBER}%uAC1C</strong>%20%uC788%uC2B5%uB2C8%uB2E4.","plugin.spellcheck.waitmessage1":"%uAE00%uC758%20%uB0B4%uC6A9%uC774%20%uAE34%20%uACBD%uC6B0%20%uB9DE%uCDA4%uBC95%20%uAC80%uC0AC%uC5D0%20%uB9CE%uC740%20%uC2DC%uAC04%uC774%20%uC18C%uC694%uB420%20%uC218%20%uC788%uC2B5%uB2C8%uB2E4.\n%uD655%uC778%uBC84%uD2BC%uC744%20%uB204%uB978%20%uD6C4%2C%20%uAC80%uC0AC%uACB0%uACFC%uAC00%20%uB098%uC62C%20%uB54C%20%uAE4C%uC9C0%20%uC7A0%uC2DC%uB9CC%20%uAE30%uB2E4%uB824%20%uC8FC%uC138%uC694.","plugin.spellcheck.waitmessage2":"%uC8C4%uC1A1%uD569%uB2C8%uB2E4.%20%uAE00%uC758%20%uB0B4%uC6A9%uC774%20%uB108%uBB34%20%uAE38%uC5B4%20%uB9DE%uCDA4%uBC95%20%uAC80%uC0AC%uB97C%20%uC774%uC6A9%uD558%uC2E4%20%uC218%20%uC5C6%uC2B5%uB2C8%uB2E4.\n%uD5A5%uD6C4%20%uAC1C%uC120%uB420%20%uC608%uC815%uC774%uC624%uB2C8%20%uBD88%uD3B8%uD558%uC2DC%uB354%uB77C%uB3C4%20%uC591%uD574%20%uBD80%uD0C1%uB4DC%uB9BD%uB2C8%uB2E4.","plugin.font.ganadaramabasa":"%uAC00%uB098%uB2E4%uB77C%uB9C8%uBC14%uC0AC","plugin.font.ganadarama":"%uAC00%uB098%uB2E4%uB77C%uB9C8","plugin.font.ganada":"%uAC00%uB098%uB2E4","plugin.font.dotum":"%uB3CB%uC6C0","plugin.font.dotumche":"%uB3CB%uC6C0%uCCB4","plugin.font.gulim":"%uAD74%uB9BC","plugin.font.gulimche":"%uAD74%uB9BC%uCCB4","plugin.font.batang":"%uBC14%uD0D5","plugin.font.batangche":"%uBC14%uD0D5%uCCB4","plugin.font.gunseo":"%uAD81%uC11C","plugin.fontcolor.checkcolor":"%uC0C9%uC0C1%20%uCF54%uB4DC%uB97C%20%uC62C%uBC14%uB974%uAC8C%20%uC785%uB825%uD558%uC5EC%20%uC8FC%uC2DC%uAE30%20%uBC14%uB78D%uB2C8%uB2E4.\n\n%uC608%29%20%23000000%2C%20%23FF0000%2C%20%23FFFFFF%2C%20%23ffffff%2C%20ffffff","plugin.fontbackgroundcolor.checkcolor":"%uC0C9%uC0C1%20%uCF54%uB4DC%uB97C%20%uC62C%uBC14%uB974%uAC8C%20%uC785%uB825%uD558%uC5EC%20%uC8FC%uC2DC%uAE30%20%uBC14%uB78D%uB2C8%uB2E4.\n\n%uC608%29%20%23000000%2C%20%23FF0000%2C%20%23FFFFFF%2C%20%23ffffff%2C%20ffffff","plugin.table.checkcolor":"%uC0C9%uC0C1%20%uCF54%uB4DC%uB97C%20%uC62C%uBC14%uB974%uAC8C%20%uC785%uB825%uD558%uC5EC%20%uC8FC%uC2DC%uAE30%20%uBC14%uB78D%uB2C8%uB2E4.\n\n%uC608%29%20%23000000%2C%20%23FF0000%2C%20%23FFFFFF%2C%20%23ffffff%2C%20ffffff","plugin.table.checkborder":"1%uC774%uC0C1%2C%2010%20%uC774%uD558%uC758%20%uC218%20%uB9CC%20%uC785%uB825%uC774%20%uB429%uB2C8%uB2E4.","plugin.table.checksize":"1%uC774%uC0C1%2C%2020%20%uC774%uD558%uC758%20%uC218%20%uB9CC%20%uC785%uB825%uC774%20%uB429%uB2C8%uB2E4.","plugin.font.notableeditor":"%uD14C%uC774%uBE14%20%uD3B8%uC9D1%uAE30%uAC00%20%uD65C%uC131%uD654%uB41C%20%uC0C1%uD0DC%uC5D0%uC11C%uB294%20%uD574%uB2F9%20%uAE30%uB2A5%uC744%20%uC0AC%uC6A9%uD558%uC2E4%uC218%20%uC5C6%uC2B5%uB2C8%uB2E4.","plugin.tabledlist.maxemoticon":"%uC774%uBAA8%uD2F0%uCF58%uC740%20%uD3EC%uC2A4%uD2B8%uB2F9%20100%uAC1C%uAE4C%uC9C0%uB9CC%20%uC0AC%uC6A9%uD560%20%uC218%20%uC788%uC2B5%uB2C8%uB2E4.","plugin.hyperlink.invalidurl":"%uC785%uB825%uD558%uC2E0%20URL%uC774%20%uC62C%uBC14%uB974%uC9C0%20%uC54A%uC2B5%uB2C8%uB2E4.","plugin.hyperlink.nolink4storyphoto":"%uC2A4%uD1A0%uB9AC%uD3EC%uD1A0%uC5D0%uB294%20URL%20%uAC78%uAE30%uB97C%20%uD560%20%uC218%20%uC5C6%uC2B5%uB2C8%uB2E4.","plugin.layoutmanager.cancel":"%uB808%uC774%uC544%uC6C3%20%uC801%uC6A9%uC744%20%uCDE8%uC18C%uD558%uC2DC%uACA0%uC2B5%uB2C8%uAE4C%3F","plugin.layoutmanager.notinsert":"%uB808%uC774%uC544%uC6C3%20%uC548%uC5D0%20%uB2E4%uB978%20%uB808%uC774%uC544%uC6C3%uC744%20%uCD94%uAC00%uD560%20%uC218%20%uC5C6%uC2B5%uB2C8%uB2E4.%20","plugin.layoutmanager.notselect":"%uC120%uD0DD%uB41C%20%uC601%uC5ED%uC774%20%uB808%uC774%uC544%uC6C3%uC774%20%uC544%uB2C8%uAC70%uB098%20%uC62C%uBC14%uB974%uAC8C%20%uC120%uD0DD%uB41C%20%uC601%uC5ED%uC774%20%uC5C6%uC2B5%uB2C8%uB2E4.\n\n%uB808%uC774%uC544%uC6C3%20%uC601%uC5ED%uC5D0%20%uCEE4%uC11C%uB97C%20%uC704%uCE58%20%uC2DC%uD0A4%uAC70%uB098%20%uB808%uC774%uC544%uC6C3%20%uC601%uC5ED%20%uC548%uC758%20%uAC1C%uCCB4%uB97C%20%uC120%uD0DD%uD558%uC5EC%20%uC8FC%uC138%uC694%21","plugin.layoutmanager.notselect2":"%uC120%uD0DD%uB41C%20%uB808%uC774%uC544%uC6C3%uC774%20%uC5C6%uC2B5%uB2C8%uB2E4.\n\n%uB808%uC774%uC544%uC6C3%uC744%20%uBA3C%uC800%20%uC120%uD0DD%uD558%uC5EC%20%uC8FC%uC2DC%uAE30%20%uBC14%uB78D%uB2C8%uB2E4.","plugin.layoutmanager.notexistfile":"%uB808%uC774%uC544%uC6C3%20%uD15C%uD50C%uB9BF%20%uB85C%uB529%uC774%20%uC2E4%uD328%uD558%uC600%uC2B5%uB2C8%uB2E4.","plugin.layoutmanager.nowrequesting":"%uD604%uC7AC%20%uB808%uC774%uC544%uC6C3%20%uD15C%uD50C%uB9BF%20%uD30C%uC77C%uC744%20%uB85C%uB529%uC911%uC785%uB2C8%uB2E4.\n\n%uC7A0%uC2DC%uB9CC%20%uAE30%uB2E4%uB824%20%uC8FC%uC2DC%uAE30%20%uBC14%uB78D%uB2C8%uB2E4."};
var textNodes;
function checkColor(color_value){var pattern=/^#?[0-9a-fA-F]{6}$/;
return pattern.test(color_value)
}function setCursorStyle(names,values,thisRef){thisRef.nr.cloneSelectedRange();
var attributeHolder=thisRef.nr.createAndInsertNode("SPAN");
attributeHolder.innerHTML="[cursor]";
for(var i=0;
i<names.length;
i++){attributeHolder.style[names[i]]=values[i]
}if($Agent().IE){thisRef.nr.doc.body.contentEditable=false;
attributeHolder.innerHTML="";
attributeHolder.setAttribute("contentEditable",true);
attributeHolder.focus();
var blurArea=function(){thisRef.nr.doc.body.contentEditable=true;
attributeHolder.setAttribute("contentEditable","false");
attributeHolder.removeAttribute("contentEditable");
thisRef.editor.getWindow().focus()
}.bind(this);
setTimeout(blurArea,10)
}else{thisRef.nr.defineRange(attributeHolder.firstChild);
thisRef.nr.select();
attributeHolder.innerHTML="";
return
}}function updateSelectedText(name,value,thisRef){var nr=thisRef.nr;
function spanNode(node,name,value){var span;
if(node.nodeType!=3){span=node
}else{if(node.parentNode.tagName=="SPAN"&&nr.inRange(node.parentNode,false)){span=node.parentNode
}else{span=nr.doc.createElement("SPAN");
node.parentNode.insertBefore(span,node);
span.appendChild(node)
}}span.style[name]=value
}function updateTextNodes(nodes,name,value){function getContainer(node,tagName){while(node&&node.tagName!=tagName){node=node.parentNode
}return node
}function getTextNodesOf(node){var txtNodes=[];
var n=0;
function doAddTextNodes(node){if(!node){return
}if(node.nodeType==3&&node.nodeValue!=""){txtNodes[n++]=node
}if(node.firstChild){doAddTextNodes(node.firstChild)
}if(node.nextSibling){doAddTextNodes(node.nextSibling)
}}doAddTextNodes(node.firstChild);
return txtNodes
}function selectLI(node){var parentLI=getContainer(node,"LI");
if(parentLI){var tmpNodes=getTextNodesOf(parentLI);
if(!tmpNodes||tmpNodes.length==0||(nodes.has(tmpNodes[0])&&nodes.has(tmpNodes[tmpNodes.length-1]))){nodes[nodes.length]=parentLI
}}}var n=nodes.length;
for(var i=0;
i<n;
i++){selectLI(nodes[i])
}n=nodes.length;
for(var i=0;
i<n;
i++){spanNode(nodes[i],name,value)
}}nr.cloneSelectedRange();
var nodes=nr.getNodes();
var textNodes=nodes.filter(function(obj){return(obj.nodeType==3)
});
if(textNodes.length!=0){updateTextNodes(textNodes,name,value)
}return nodes
}function fontProperty(fontId,fontName,defaultSize,fontURL,fontCSSURL){this.fontId=fontId;
this.fontName=fontName;
this.defaultSize=defaultSize;
this.fontURL=fontURL;
this.fontCSSURL=fontCSSURL;
this.displayName=fontName;
this.isLoaded=true;
this.fontFamily=this.fontId;
if(this.fontCSSURL!=""){this.displayName+=""+defaultSize;
this.fontFamily+="_"+defaultSize;
this.isLoaded=false
}this.loadCSS=function(doc){if(this.isLoaded){return
}var oStyleSheet=doc.styleSheets[0];
oStyleSheet.addImport(this.fontCSSURL);
this.isLoaded=true
};
this.toStruct=function(){return{fontId:this.fontId,fontName:this.fontName,defaultSize:this.defaultSize,fontURL:this.fontURL,fontCSSURL:this.fontCSSURL}
}
}(function(){var oDummy=null;
IsInstalledFont=function(sFont){var sDefFont=sFont=="Comic Sans MS"?"Courier New":"Comic Sans MS";
if(!oDummy){oDummy=document.createElement("div")
}var sStyle="position:absolute !important; font-size:200px !important; left:-9999px !important; top:-9999px !important;";
oDummy.innerHTML="mmmmiiiii"+unescape("%uD55C%uAE00");
oDummy.style.cssText=sStyle+'font-family:"'+sDefFont+'" !important';
document.body.appendChild(oDummy);
var sOrg=oDummy.offsetWidth+"-"+oDummy.offsetHeight;
oDummy.style.cssText=sStyle+'font-family:"'+sFont+'", "Comic Sans MS" !important';
var bInstalled=sOrg!=(oDummy.offsetWidth+"-"+oDummy.offsetHeight);
document.body.removeChild(oDummy);
return bInstalled
}
})();
var fontNamePlugin=new (Class.extend(Editor.menuPlugin,{name:"fontname",range:null,_allFontList:[],_baseFontList:[],_defaultFontList:[],_tempSavedFontList:[],defaultFontList:[],getFontInUse:function(){var fontInUse=[];
for(var i=0;
i<this._allFontList.length;
i++){if(this._allFontList[i].isLoaded&&this._allFontList[i].fontCSSURL!=""){fontInUse[fontInUse.length]=this._allFontList[i].toStruct()
}}return fontInUse
},addFont:function(fontId,fontName,defaultSize,fontURL,fontCSSURL,fontType){var newFont=new fontProperty(fontId,fontName,defaultSize,fontURL,fontCSSURL);
for(var i=0;
i<this._allFontList.length;
i++){if(newFont.fontFamily==this._allFontList[i].fontFamily){return this._allFontList[i]
}}if(!fontType){this._baseFontList[this._baseFontList.length]=newFont
}else{if(fontType==1){this._defaultFontList[this._defaultFontList.length]=newFont
}else{this._tempSavedFontList[this._tempSavedFontList.length]=newFont
}}this.setAllFontList();
return newFont
},addFontInUse:function(fontId,fontName,defaultSize,fontURL,fontCSSURL,fontType){var newFont=this.addFont(fontId,fontName,defaultSize,fontURL,fontCSSURL,fontType);
newFont.loadCSS(this.editor.getDocument());
return newFont
},setMainFont:function(fontId,fontName,defaultSize,fontURL,fontCSSURL,fontType){var newFont=this.addFontInUse(fontId,fontName,defaultSize,fontURL,fontCSSURL,fontType);
with(this.editor.getDocument().body){style.fontFamily=newFont.fontFamily;
style.fontSize=defaultSize+"pt"
}return newFont
},resetTempSavedFontList:function(){this._tempSavedFontList=[];
this.setAllFontList()
},_addDefaultFonts:function(){if(this.defaultFontList.length<1){this.addFont(Editor._("plugin.font.dotum"),Editor._("plugin.font.dotum"),0,"","",1);
this.addFont(Editor._("plugin.font.dotumche"),Editor._("plugin.font.dotumche"),0,"","",1);
this.addFont(Editor._("plugin.font.gulim"),Editor._("plugin.font.gulim"),0,"","",1);
this.addFont(Editor._("plugin.font.gulimche"),Editor._("plugin.font.gulimche"),0,"","",1);
this.addFont(Editor._("plugin.font.batang"),Editor._("plugin.font.batang"),0,"","",1);
this.addFont(Editor._("plugin.font.batangche"),Editor._("plugin.font.batangche"),0,"","",1);
this.addFont(Editor._("plugin.font.gunseo"),Editor._("plugin.font.gunseo"),0,"","",1);
this.addFont("Arial","Arial",0,"","",1);
this.addFont("Tahoma","Tahoma",0,"","",1);
this.addFont("Times New Roman","Times New Roman",0,"","",1);
this.addFont("Verdana","Verdana",0,"","",1);
var nanum_godik=unescape("%uB098%uB214%uACE0%uB515");
var nanum_myungjo=unescape("%uB098%uB214%uBA85%uC870");
if(IsInstalledFont(nanum_godik)){this.addFont("-----","-----",0,"","",1);
this.addFont(nanum_godik+","+Editor._("plugin.font.dotum"),nanum_godik,0,"","",1)
}if(IsInstalledFont(nanum_myungjo)){this.addFont("-----","-----",0,"","",1);
this.addFont(nanum_myungjo+","+Editor._("plugin.font.dotum"),nanum_myungjo,0,"","",1)
}}else{for(var i=0;
i<this.defaultFontList.length;
i++){this.addFont(this.defaultFontList[i][0],this.defaultFontList[i][1],0,"","",1)
}}},addDefaultFont:function(family,label){this.defaultFontList[this.defaultFontList.length]=[family,label]
},onCreate:function(){$("fn_name_list").tabIndex=1;
this._addDefaultFonts();
this.oOptionList=$("fn_name_list");
this.drawMenu()
},setAllFontList:function(){this._allFontList=[];
var endIdx;
for(var i=0;
i<this._baseFontList.length;
i++){this._allFontList[+i]=this._baseFontList[i]
}endIdx=this._allFontList.length;
for(var i=0;
i<this._tempSavedFontList.length;
i++){this._allFontList[endIdx+i]=this._tempSavedFontList[i]
}endIdx=this._allFontList.length;
for(var i=0;
i<this._defaultFontList.length;
i++){this._allFontList[endIdx+i]=this._defaultFontList[i]
}},drawMenu:function(){removeAllChildren(this.oOptionList);
for(var i=0;
i<this._allFontList.length;
i++){li=this.oOptionList.appendChild($C("LI"));
if(this._allFontList[i].displayName=="-----"){li.className="line06";
continue
}li.style.textAlign="left";
li.innerHTML=this._allFontList[i].displayName;
li.onmousedown=this.assignAction("fontname",i);
try{li.style.cursor="pointer"
}catch(e){li.style.cursor="hand"
}li.onmouseover=function(){this.className="list_over"
};
li.onmouseout=function(){this.className=""
}
}if(this._allFontList.length>20){this.object.style.width="140px";
$("fn_name_list").style.height="390px";
$("fn_name_list").style.overflow="auto"
}else{this.object.style.width="140px"
}},setFocus:function(){try{window.focus();
$("fn_name_list").focus();
$("fn_name_list").blur()
}catch(e){this.editor.getWindow().focus();
setTimeout(this.setFocus.bind(this),10)
}},onShow:function(){this.drawMenu();
this.nr=new NodeRange(this.editor.getWindow(),this.editor.getDocument());
if(this.nr.getType()=="table"){this.object.style.display="none";
setTimeout(this.close.bind(this),100);
alert(Editor._("plugin.font.notableeditor"));
return
}if($Agent().IE){setTimeout(this.setFocus.bind(this),10)
}},onClose:function(){},actFontname:function(fontListIdx){if(!this.nr.range||this.nr.getType()=="control"||this.nr.getType()=="table"){this.close();
return
}var nodes=[];
setTimeout(function(fontObj,arrNodes){this.editor.getWindow().focus();
this.nr.select();
fontObj.loadCSS(this.editor.getDocument());
arrNodes=updateSelectedText("fontFamily",fontObj.fontFamily,this);
if(fontObj.defaultSize!=0){updateSelectedText("fontSize",fontObj.defaultSize+"pt",this)
}if(arrNodes.length==0){var names=["fontFamily"];
var values=[fontObj.fontFamily];
if(fontObj.defaultSize!=0){names.push("fontSize");
values.push(fontObj.defaultSize+"pt")
}try{setCursorStyle(names,values,this)
}catch(e){}return
}if(!$Agent().IE){this.nr.defineRange(nodes[0],nodes[nodes.length-1]);
this.nr.select()
}}.bind(this,this._allFontList[fontListIdx],nodes),100);
this.close()
}}));
fontSizePlugin=new (Class.extend(Editor.menuPlugin,{name:"fontsize",oOptionList:null,fontSizeList:[7,8,9,10,11,12,14,18,24,36],sSampleStrings:null,nr:null,range:null,onCreate:function(){$("fs_size_list").tabIndex=1;
this.oOptionList=$("fs_size_list");
this.sSampleStrings=[Editor._("plugin.font.ganadaramabasa"),Editor._("plugin.font.ganadaramabasa"),Editor._("plugin.font.ganadaramabasa"),Editor._("plugin.font.ganadaramabasa"),Editor._("plugin.font.ganadaramabasa"),Editor._("plugin.font.ganadaramabasa"),Editor._("plugin.font.ganadaramabasa"),Editor._("plugin.font.ganadaramabasa"),Editor._("plugin.font.ganadarama"),Editor._("plugin.font.ganada")];
for(var i=0;
i<this.fontSizeList.length;
i++){li=this.oOptionList.appendChild($C("LI"));
li.style.textAlign="left";
li.innerHTML=this.sSampleStrings[i]+" ("+this.fontSizeList[i]+"pt)";
li.onmousedown=this.assignAction("fontsize",this.fontSizeList[i]);
try{li.style.cursor="pointer"
}catch(e){li.style.cursor="hand"
}li.style.fontSize=this.fontSizeList[i]+"pt";
li.onmouseover=function(){this.className="list_over"
};
li.onmouseout=function(){this.className=""
}
}},setFocus:function(){try{window.focus();
$("fs_size_list").focus();
$("fs_size_list").blur()
}catch(e){setTimeout(this.setFocus.bind(this),10)
}},onShow:function(){this.nr=new NodeRange(this.editor.getWindow(),this.editor.getDocument());
if(this.nr.getType()=="table"){this.object.style.display="none";
setTimeout(this.close.bind(this),100);
alert(Editor._("plugin.font.notableeditor"));
return
}if($Agent().IE){setTimeout(this.setFocus.bind(this),10)
}},onClose:function(){},actFontsize:function(size){if(!this.nr.range||this.nr.getType()=="control"||this.nr.getType()=="table"){this.close();
return
}var nodes=[];
setTimeout(function(size,nodes){this.editor.getWindow().focus();
this.nr.select();
var nodes=updateSelectedText("fontSize",size+"pt",this);
if(nodes.length==0){try{setCursorStyle(["fontSize"],[size+"pt"],this)
}catch(e){}return
}if(!$Agent().IE){this.nr.defineRange(nodes[0],nodes[nodes.length-1]);
this.nr.select()
}}.bind(this,size,nodes),100);
this.close()
}}));
var fontColorPlugin=new (Class.extend(Editor.menuPlugin,{name:"fontcolor",author:"gunpyo",description:"change font color",range:null,cpCreated:false,init:function(){$("fc_txt_color").style.backgroundColor="#000000";
$("fc_txt_colorCode").value="#000000";
$("fc_div_cp").style.display="none"
},onCreate:function(){$("fc_color_tbl").tabIndex=1;
var colorCode;
var cpp;
$("fc_bt_cp_ok").onmousedown=this.assignAction("fontcolor","");
$("fc_bt_cp_more").onmousedown=function(){var dp_status=$("fc_div_cp").style.display;
if(dp_status=="none"){$("fc_div_cp").style.display="block";
if(this.cpCreated){this.cpp.setHSV(0,100,100)
}else{this.cpCreated=true;
this.cpp=new Ku.Colorpicker("fc_cp",{onChange:function(c){$("fc_txt_color").style.backgroundColor="#"+c;
$("fc_txt_colorCode").value="#"+c
}})
}}else{$("fc_div_cp").style.display="none"
}}.bind(this);
$("fc_bt_cp_less").onmousedown=$("fc_bt_cp_more").onmousedown;
try{$("fc_bt_cp_less").style.cursor="pointer"
}catch(e){$("fc_bt_cp_less").style.cursor="hand"
}try{$("fc_bt_cp_more").style.cursor="pointer"
}catch(e){$("fc_bt_cp_more").style.cursor="hand"
}var fc_color_tbl=new wrapperTable("fc_color_tbl");
var allCells=fc_color_tbl.getCells();
var bgColor;
for(var i=0;
i<allCells.length;
i++){cell=allCells[i];
bgColor=cell.bgColor;
if(bgColor!=""){cell.onmousedown=this.setFontColorFromList.bind(this,bgColor);
try{cell.style.cursor="pointer"
}catch(e){cell.style.cursor="hand"
}}}},setFocus:function(){try{window.focus();
$("fc_color_tbl").focus();
$("fc_color_tbl").blur()
}catch(e){setTimeout(this.setFocus.bind(this),10)
}},onShow:function(){var sel=this.editor.getSelection();
var tmpRange=sel.getRange();
if(sel.type!="control"){if(tmpRange.duplicate){this.range=tmpRange.duplicate()
}else{this.range=tmpRange.cloneRange()
}}if($Agent().IE){setTimeout(this.setFocus.bind(this),10)
}},onClose:function(){this.init()
},actFontcolor:function(){var color=$("fc_txt_colorCode").value;
if(!checkColor(color)){alert(Editor._("plugin.fontcolor.checkcolor"));
return
}var sel=this.editor.getSelection();
if(sel.type=="control"){this.close();
return
}setTimeout(function(color){this.editor.getWindow().focus();
this.editor.getSelection().setRange(this.range);
this.editor._execCommand("ForeColor",color)
}.bind(this,color),100);
this.close()
},setFontColorFromList:function(color){$("fc_txt_colorCode").value=color;
this.actFontcolor()
}}));
var fontBackgroundColorPlugin=new (Class.extend(Editor.menuPlugin,{name:"fontbackgroundcolor",author:"gunpyo",description:"change the background color",range:null,cpCreated:false,cpp:null,init:function(){$("fbgc_txt_color").style.backgroundColor="#FFFFFF";
$("fbgc_txt_colorCode").value="#FFFFFF";
$("fbgc_div_cp").style.display="none"
},onCreate:function(){$("fbgc_color_tbl").tabIndex=1;
var colorCode;
$("fbgc_bt_cp_ok").onmousedown=this.assignAction("fontbackgroundcolor","");
$("fbgc_bt_cp_more").onmousedown=function(){var dp_status=$("fbgc_div_cp").style.display;
if(dp_status=="none"){$("fbgc_div_cp").style.display="block";
if(this.cpCreated){this.cpp.setHSV(0,100,100)
}else{this.cpCreated=true;
this.cpp=new Ku.Colorpicker("fbgc_cp",{onChange:function(c){$("fbgc_txt_color").style.backgroundColor="#"+c;
$("fbgc_txt_colorCode").value="#"+c
}})
}}else{$("fbgc_div_cp").style.display="none"
}}.bind(this);
$("fbgc_bt_cp_less").onmousedown=$("fbgc_bt_cp_more").onmousedown;
try{$("fbgc_bt_cp_less").style.cursor="pointer"
}catch(e){$("fbgc_bt_cp_less").style.cursor="hand"
}try{$("fbgc_bt_cp_more").style.cursor="pointer"
}catch(e){$("fbgc_bt_cp_more").style.cursor="hand"
}var fbgc_color_tbl=new wrapperTable("fbgc_color_tbl");
var fbgc_list_tbl=new wrapperTable("fbgc_list_tbl");
var allCells=new Array();
allCells=allCells.concat([].load(fbgc_color_tbl.getCells()),[].load(fbgc_list_tbl.getCells()));
var bgColor;
for(var i=0;
i<allCells.length;
i++){cell=allCells[i];
bgColor=cell.bgColor;
fontColor=cell.style.color;
if(bgColor!=""){cell.onmousedown=this.setFontColorFromList.bind(this,bgColor,fontColor);
try{cell.style.cursor="pointer"
}catch(e){cell.style.cursor="hand"
}}}var fbgc_color_tbl=new wrapperTable("fbgc_color_tbl");
var allCells=fbgc_color_tbl.getCells();
var bgColor;
for(var i=0;
i<allCells.length;
i++){cell=allCells[i];
bgColor=cell.bgColor;
if(bgColor!=""){cell.onmousedown=this.setFontColorFromList.bind(this,bgColor);
try{cell.style.cursor="pointer"
}catch(e){cell.style.cursor="hand"
}}}},setFocus:function(){try{window.focus();
$("fbgc_color_tbl").focus();
$("fbgc_color_tbl").blur()
}catch(e){setTimeout(this.setFocus.bind(this),10)
}},onShow:function(){var sel=this.editor.getSelection();
var tmpRange=sel.getRange();
if(sel.type!="control"){if(tmpRange.duplicate){this.range=tmpRange.duplicate()
}else{this.range=tmpRange.cloneRange()
}}if($Agent().IE){setTimeout(this.setFocus.bind(this),10)
}},onClose:function(){this.init()
},actFontbackgroundcolor:function(fontColor){var color=$("fbgc_txt_colorCode").value;
if(!checkColor(color)){alert(Editor._("plugin.fontbackgroundcolor.checkcolor"));
return
}var sel=this.editor.getSelection();
if(sel.type=="control"){this.close();
return
}setTimeout(function(color,fontColor){this.editor.getWindow().focus();
this.editor.getSelection().setRange(this.range);
this.editor._execCommand("hiliteColor",color);
if(fontColor){this.editor._execCommand("ForeColor",fontColor)
}}.bind(this,color,fontColor),100);
this.close()
},setFontColorFromList:function(color,fontColor){$("fbgc_txt_colorCode").value=color;
this.actFontbackgroundcolor(fontColor)
}}));
Editor.registerPlugin(fontNamePlugin);
Editor.registerPlugin(fontSizePlugin);
Editor.registerPlugin(fontColorPlugin);
Editor.registerPlugin(fontBackgroundColorPlugin);
function removeAllChildren(nodeWithChildren){while(nodeWithChildren.childNodes.length>=1){nodeWithChildren.removeChild(nodeWithChildren.firstChild)
}}function pageLink(id,paramCurrentPage,paramTotalPages,paramFuncCustomAction){this.placeHolder=document.getElementById(id);
this.iCurrentPage=paramCurrentPage;
this.iTotalPages=paramTotalPages;
this.funcCustomAction=paramFuncCustomAction;
this.funcAction=function(i){this.iCurrentPage=i;
this.draw();
this.funcCustomAction(i)
};
this.draw=function(){removeAllChildren(this.placeHolder);
for(var i=1;
i<=this.iTotalPages;
i++){var td=document.createElement("TD");
var inTd=document.createElement("A");
var text=document.createTextNode(i);
inTd.appendChild(text);
td.appendChild(inTd);
if(i==this.iCurrentPage){td.className="paging_on"
}td.onclick=this.funcAction.bind(this,i);
try{td.style.cursor="pointer"
}catch(e){td.style.cursor="hand"
}this.placeHolder.appendChild(td)
}td.className=td.className+" pgR"
};
this.draw()
}function getType(v){var result=typeof(v);
if(result=="object"){result="@anonymous";
if(v.constructor){var sConstructor=v.constructor.toString();
var iStartIdx=sConstructor.indexOf(" ")+1;
var iEndIdx=sConstructor.indexOf("(")-iStartIdx;
result=sConstructor.substr(iStartIdx,iEndIdx);
if(iStartIdx==0||result==""){result="@anonymous"
}}}return result
}Array.prototype.subarray=function(iFrom,iTo){if(iFrom>iTo){var temp;
temp=iFrom;
iFrom=iTo;
iTo=temp
}if(!iTo||iTo>this.length){iTo=this.length
}var result=new Array();
if(iFrom>this.length||iFrom<0){return result
}for(var i=iFrom;
i<iTo;
i++){result[i-iFrom]=this[i]
}return result
};
function removeAllChildren(nodeWithChildren){while(nodeWithChildren.childNodes.length>=1){nodeWithChildren.removeChild(nodeWithChildren.firstChild)
}}function placeWrapper(obj,tagName){var oWrapee;
if(obj.tagName==tagName){oWrapee=obj
}else{oWrapee=document.createElement(tagName);
if(obj.tagName=="DIV"){obj.appendChild(oWrapee)
}else{obj.parentNode.insertBefore(oWrapee,obj);
obj.style.display="none"
}}return oWrapee
}function wrapperUL(id){var obj=document.getElementById(id);
var oUL;
oUL=placeWrapper(obj,"UL");
this.setLi=function(pmLi,pmItem){if(pmItem.tagName&&pmItem.tagName=="LI"){return pmItem
}if(getType(pmItem)=="string"){pmLi.innerHTML=pmItem
}else{removeAllChildren(pmLi);
pmLi.appendChild(pmItem)
}return pmLi
};
this.addItemNonArray=function(pmItem){var oItem;
oItem=document.createElement("LI");
oItem=this.setLi(oItem,pmItem);
oUL.appendChild(oItem);
return oItem
};
this.addItemArray=function(pmItem){var loopExit=pmItem.length;
for(var i=0;
i<loopExit;
i++){this.addItemNonArray(pmItem[i])
}return pmItem[pmItem.length-1]
};
this.setItemAt=function(iAt,pmItem){var oLi=oUL.childNodes.item(iAt);
this.setLi(oLi,pmItem)
};
this.addItem=function(pmItem){var justAdded;
if(getType(pmItem)=="Array"){justAdded=this.addItemArray(pmItem)
}else{justAdded=this.addItemNonArray(pmItem)
}return justAdded
};
this.removeItem=function(what){if(!what){return
}if(what.tagName&&what.tagName=="LI"){oUL.removeChild(what)
}else{oUL.removeChild(oUL.childNodes.item(what))
}};
this._o=oUL
}function wrapperSelect(id){var obj=document.getElementById(id);
var oSelect;
oSelect=placeWrapper(obj,"SELECT");
this.addOptionArray=function(pmOption){var oOption;
var loopExit=pmOption.length;
for(var i=0;
i<loopExit;
i++){oOption=document.createElement("OPTION");
oOption.innerHTML=pmOption[i];
oSelect.appendChild(oOption)
}};
this.addOptionNonArray=function(pmOption){var oOption=new Array;
oOption[0]=pmOption;
this.addOptionArray(oOption)
};
this.addOption=function(pmOption){if(getType(pmOption)=="Array"){this.addOptionArray(pmOption)
}else{this.addOptionNonArray(pmOption)
}};
this._o=oSelect
}function wrapperTable(id){var obj=document.getElementById(id);
var oTable;
var oTBody;
var numColumns=1;
var numRows=1;
oTable=placeWrapper(obj,"TABLE");
obj=obj.getElementsByTagName("TBODY");
if(!obj||!obj[0]){oTBody=document.createElement("TBODY");
oTable.appendChild(oTBody)
}else{oTBody=obj[0]
}this.getCells=function(){return oTable.getElementsByTagName("td")
};
this.removeCells=function(){if(oTable.hasChildNodes()){var count=oTable.childNodes.length;
for(i=count-1;
i>-1;
i--){var oChild=oTable.childNodes[i];
oTable.removeChild(oChild)
}}};
this.createCells=function(){var oRow;
var oCell;
for(var i=0;
i<numRows;
i++){oRow=document.createElement("TR");
for(var ii=0;
ii<numColumns;
ii++){oCell=document.createElement("TD");
oCell.innerHTML="&nbsp";
oRow.appendChild(oCell)
}oTBody.appendChild(oRow)
}};
this.createCellsWithColumnFilling=function(filling){if(!filling||getType(filling)!="Array"){return false
}this.setNumColumns(filling.length);
this.setNumRows(1);
this.createCells();
this.fill(filling)
};
this.createCellsWithRowFilling=function(filling){if(!filling||getType(filling)!="Array"){return false
}this.setNumColumns(1);
this.setNumRows(filling.length);
this.createCells();
this.fill(filling)
};
this.fillIn=function(cell,filling){if(getType(filling)=="string"){cell.innerHTML=filling
}else{cell.innerHTML="";
cell.appendChild(filling)
}};
this.fillArray=function(filling){var cells=this.getCells();
var loopExit=Math.min(cells.length,filling.length);
for(var i=0;
i<loopExit;
i++){this.fillIn(cells[i],filling[i])
}};
this.fillNonArray=function(filling){var cells=this.getCells();
var loopExit=cells.length;
for(var i=0;
i<loopExit;
i++){this.fillIn(cells[i],filling)
}};
this.fill=function(filling){if(getType(filling)=="Array"){this.fillArray(filling)
}else{this.fillNonArray(filling)
}};
this.setNumColumns=function(n){numColumns=n
};
this.setNumRows=function(n){numRows=n
};
this._o=oTable
}var scharinsertionPlugin=new (Class.extend(Editor.menuPlugin,{name:"scharinsertion",author:"gunpyo",modal:false,ROW_LENGTH:20,TABLE_HEIGHT:9,CurrentCharSet:0,CurrentChars:new Array(),charSet:new Array(),charSetLabel:new Array(),oTextField:Object(),__init:function(){this.charSet[0]=unescape("%uFF5B %uFF5D %u3014 %u3015 %u3008 %u3009 %u300A %u300B %u300C %u300D %u300E %u300F %u3010 %u3011 %u2018 %u2019 %u201C %u201D %u3001 %u3002 %B7 %u2025 %u2026 %A7 %u203B %u2606 %u2605 %u25CB %u25CF %u25CE %u25C7 %u25C6 %u25A1 %u25A0 %u25B3 %u25B2 %u25BD %u25BC %u25C1 %u25C0 %u25B7 %u25B6 %u2664 %u2660 %u2661 %u2665 %u2667 %u2663 %u2299 %u25C8 %u25A3 %u25D0 %u25D1 %u2592 %u25A4 %u25A5 %u25A8 %u25A7 %u25A6 %u25A9 %B1 %D7 %F7 %u2260 %u2264 %u2265 %u221E %u2234 %B0 %u2032 %u2033 %u2220 %u22A5 %u2312 %u2202 %u2261 %u2252 %u226A %u226B %u221A %u223D %u221D %u2235 %u222B %u222C %u2208 %u220B %u2286 %u2287 %u2282 %u2283 %u222A %u2229 %u2227 %u2228 %uFFE2 %u21D2 %u21D4 %u2200 %u2203 %B4 %uFF5E %u02C7 %u02D8 %u02DD %u02DA %u02D9 %B8 %u02DB %A1 %BF %u02D0 %u222E %u2211 %u220F %u266D %u2669 %u266A %u266C %u327F %u2192 %u2190 %u2191 %u2193 %u2194 %u2195 %u2197 %u2199 %u2196 %u2198 %u321C %u2116 %u33C7 %u2122 %u33C2 %u33D8 %u2121 %u2668 %u260F %u260E %u261C %u261E %B6 %u2020 %u2021 %AE %AA %BA %u2642 %u2640").split(" ");
this.charSet[1]=unescape("%BD %u2153 %u2154 %BC %BE %u215B %u215C %u215D %u215E %B9 %B2 %B3 %u2074 %u207F %u2081 %u2082 %u2083 %u2084 %u2160 %u2161 %u2162 %u2163 %u2164 %u2165 %u2166 %u2167 %u2168 %u2169 %u2170 %u2171 %u2172 %u2173 %u2174 %u2175 %u2176 %u2177 %u2178 %u2179 %uFFE6 %24 %uFFE5 %uFFE1 %u20AC %u2103 %u212B %u2109 %uFFE0 %A4 %u2030 %u3395 %u3396 %u3397 %u2113 %u3398 %u33C4 %u33A3 %u33A4 %u33A5 %u33A6 %u3399 %u339A %u339B %u339C %u339D %u339E %u339F %u33A0 %u33A1 %u33A2 %u33CA %u338D %u338E %u338F %u33CF %u3388 %u3389 %u33C8 %u33A7 %u33A8 %u33B0 %u33B1 %u33B2 %u33B3 %u33B4 %u33B5 %u33B6 %u33B7 %u33B8 %u33B9 %u3380 %u3381 %u3382 %u3383 %u3384 %u33BA %u33BB %u33BC %u33BD %u33BE %u33BF %u3390 %u3391 %u3392 %u3393 %u3394 %u2126 %u33C0 %u33C1 %u338A %u338B %u338C %u33D6 %u33C5 %u33AD %u33AE %u33AF %u33DB %u33A9 %u33AA %u33AB %u33AC %u33DD %u33D0 %u33D3 %u33C3 %u33C9 %u33DC %u33C6").split(" ");
this.charSet[2]=unescape("%u3260 %u3261 %u3262 %u3263 %u3264 %u3265 %u3266 %u3267 %u3268 %u3269 %u326A %u326B %u326C %u326D %u326E %u326F %u3270 %u3271 %u3272 %u3273 %u3274 %u3275 %u3276 %u3277 %u3278 %u3279 %u327A %u327B %u24D0 %u24D1 %u24D2 %u24D3 %u24D4 %u24D5 %u24D6 %u24D7 %u24D8 %u24D9 %u24DA %u24DB %u24DC %u24DD %u24DE %u24DF %u24E0 %u24E1 %u24E2 %u24E3 %u24E4 %u24E5 %u24E6 %u24E7 %u24E8 %u24E9 %u2460 %u2461 %u2462 %u2463 %u2464 %u2465 %u2466 %u2467 %u2468 %u2469 %u246A %u246B %u246C %u246D %u246E %u3200 %u3201 %u3202 %u3203 %u3204 %u3205 %u3206 %u3207 %u3208 %u3209 %u320A %u320B %u320C %u320D %u320E %u320F %u3210 %u3211 %u3212 %u3213 %u3214 %u3215 %u3216 %u3217 %u3218 %u3219 %u321A %u321B %u249C %u249D %u249E %u249F %u24A0 %u24A1 %u24A2 %u24A3 %u24A4 %u24A5 %u24A6 %u24A7 %u24A8 %u24A9 %u24AA %u24AB %u24AC %u24AD %u24AE %u24AF %u24B0 %u24B1 %u24B2 %u24B3 %u24B4 %u24B5 %u2474 %u2475 %u2476 %u2477 %u2478 %u2479 %u247A %u247B %u247C %u247D %u247E %u247F %u2480 %u2481 %u2482").split(" ");
this.charSet[3]=unescape("%u3131 %u3132 %u3133 %u3134 %u3135 %u3136 %u3137 %u3138 %u3139 %u313A %u313B %u313C %u313D %u313E %u313F %u3140 %u3141 %u3142 %u3143 %u3144 %u3145 %u3146 %u3147 %u3148 %u3149 %u314A %u314B %u314C %u314D %u314E %u314F %u3150 %u3151 %u3152 %u3153 %u3154 %u3155 %u3156 %u3157 %u3158 %u3159 %u315A %u315B %u315C %u315D %u315E %u315F %u3160 %u3161 %u3162 %u3163 %u3165 %u3166 %u3167 %u3168 %u3169 %u316A %u316B %u316C %u316D %u316E %u316F %u3170 %u3171 %u3172 %u3173 %u3174 %u3175 %u3176 %u3177 %u3178 %u3179 %u317A %u317B %u317C %u317D %u317E %u317F %u3180 %u3181 %u3182 %u3183 %u3184 %u3185 %u3186 %u3187 %u3188 %u3189 %u318A %u318B %u318C %u318D %u318E").split(" ");
this.charSet[4]=unescape("%u0391 %u0392 %u0393 %u0394 %u0395 %u0396 %u0397 %u0398 %u0399 %u039A %u039B %u039C %u039D %u039E %u039F %u03A0 %u03A1 %u03A3 %u03A4 %u03A5 %u03A6 %u03A7 %u03A8 %u03A9 %u03B1 %u03B2 %u03B3 %u03B4 %u03B5 %u03B6 %u03B7 %u03B8 %u03B9 %u03BA %u03BB %u03BC %u03BD %u03BE %u03BF %u03C0 %u03C1 %u03C3 %u03C4 %u03C5 %u03C6 %u03C7 %u03C8 %u03C9 %C6 %D0 %u0126 %u0132 %u013F %u0141 %D8 %u0152 %DE %u0166 %u014A %E6 %u0111 %F0 %u0127 I %u0133 %u0138 %u0140 %u0142 %u0142 %u0153 %DF %FE %u0167 %u014B %u0149 %u0411 %u0413 %u0414 %u0401 %u0416 %u0417 %u0418 %u0419 %u041B %u041F %u0426 %u0427 %u0428 %u0429 %u042A %u042B %u042C %u042D %u042E %u042F %u0431 %u0432 %u0433 %u0434 %u0451 %u0436 %u0437 %u0438 %u0439 %u043B %u043F %u0444 %u0446 %u0447 %u0448 %u0449 %u044A %u044B %u044C %u044D %u044E %u044F").split(" ");
this.charSet[5]=unescape("%u3041 %u3042 %u3043 %u3044 %u3045 %u3046 %u3047 %u3048 %u3049 %u304A %u304B %u304C %u304D %u304E %u304F %u3050 %u3051 %u3052 %u3053 %u3054 %u3055 %u3056 %u3057 %u3058 %u3059 %u305A %u305B %u305C %u305D %u305E %u305F %u3060 %u3061 %u3062 %u3063 %u3064 %u3065 %u3066 %u3067 %u3068 %u3069 %u306A %u306B %u306C %u306D %u306E %u306F %u3070 %u3071 %u3072 %u3073 %u3074 %u3075 %u3076 %u3077 %u3078 %u3079 %u307A %u307B %u307C %u307D %u307E %u307F %u3080 %u3081 %u3082 %u3083 %u3084 %u3085 %u3086 %u3087 %u3088 %u3089 %u308A %u308B %u308C %u308D %u308E %u308F %u3090 %u3091 %u3092 %u3093 %u30A1 %u30A2 %u30A3 %u30A4 %u30A5 %u30A6 %u30A7 %u30A8 %u30A9 %u30AA %u30AB %u30AC %u30AD %u30AE %u30AF %u30B0 %u30B1 %u30B2 %u30B3 %u30B4 %u30B5 %u30B6 %u30B7 %u30B8 %u30B9 %u30BA %u30BB %u30BC %u30BD %u30BE %u30BF %u30C0 %u30C1 %u30C2 %u30C3 %u30C4 %u30C5 %u30C6 %u30C7 %u30C8 %u30C9 %u30CA %u30CB %u30CC %u30CD %u30CE %u30CF %u30D0 %u30D1 %u30D2 %u30D3 %u30D4 %u30D5 %u30D6 %u30D7 %u30D8 %u30D9 %u30DA %u30DB %u30DC %u30DD %u30DE %u30DF %u30E0 %u30E1 %u30E2 %u30E3 %u30E4 %u30E5 %u30E6 %u30E7 %u30E8 %u30E9 %u30EA %u30EB %u30EC %u30ED %u30EE %u30EF %u30F0 %u30F1 %u30F2 %u30F3 %u30F4 %u30F5 %u30F6").split(" ")
},onShow:function(){var sel=this.editor.getSelection();
if(sel.type!="control"){var tmpRange=sel.getRange();
if(tmpRange.duplicate){this.range=tmpRange.duplicate()
}else{this.range=tmpRange.cloneRange()
}}$("charTable").focus()
},onClose:function(){this.oTextField.value=""
},actClose:function(){this.close()
},actInsertschar:function(){var editor=this.editor;
var sSpecialChar=this.oTextField.value;
if(sSpecialChar!=""){this.editor.getWindow().focus();
var sel=this.editor.getSelection();
this.editor.getSelection().setRange(this.range);
if(sel.type=="control"){this.nr=new NodeRange(this.editor.getWindow(),this.editor.getDocument());
this.nr.cloneSelectedRange()
}editor._execCommand("insertHTML",sSpecialChar)
}this.close()
},appendText:function(idx){this.oTextField.value+=this.CurrentChars[idx].firstChild.nodeValue;
this.oTextField.disabled=false;
this.oTextField.focus();
this.oTextField.value=this.oTextField.value;
setTimeout(function(){this.oTextField.disabled=true
}.bind(this),10)
},toTxtDiv:function(txt){var txt=document.createTextNode(txt);
var obj=document.createElement("DIV");
obj.onmouseover=function(){this.className="code_over"
};
obj.onmouseout=function(){this.className="code_off"
};
obj.appendChild(txt);
obj.align="center";
return obj
},drawCharTable:function(charTable,pmCharSetNum){var allCells,cell;
this.CurrentCharSet=pmCharSetNum;
this.CurrentChars=this.charSet[pmCharSetNum].map(this.toTxtDiv);
charTable.fill("&nbsp");
charTable.fill(this.CurrentChars);
allCells=charTable.getCells();
for(var i=0;
i<allCells.length;
i++){cell=allCells[i];
if(cell.innerHTML!="&nbsp;"){cell.onclick=this.appendText.bind(this,i);
try{cell.style.cursor="pointer"
}catch(e){cell.style.cursor="hand"
}}else{cell.onclick=null;
cell.onmouseover=null;
cell.onmouseout=null;
cell.style.cursor=""
}}for(var i=1;
i<this.charSetLabel.length+1;
i++){var oA=$("cset"+i);
oA.onclick=scharinsertionPlugin.drawCharTable.bind(this,charTable,i-1);
try{oA.style.cursor="pointer"
}catch(e){oA.style.cursor="hand"
}if((i-1)==this.CurrentCharSet){oA.className="this_on"
}else{oA.className=""
}}},onCreate:function(){var charTable=new wrapperTable("charTable");
this.oTextField=$("specialChar");
var i=1;
while(lbl=$("cset"+i)){this.charSetLabel[i++-1]=lbl.innerHTML
}charTable.setNumColumns(this.ROW_LENGTH);
charTable.setNumRows(this.TABLE_HEIGHT);
charTable.createCells();
this.drawCharTable(charTable,0);
this.oTextField.disabled=true
}}));
Editor.registerPlugin(scharinsertionPlugin);
var emoticoninsertionPlugin=new (Class.extend(Editor.menuPlugin,{name:"emoticoninsertion",author:"gunpyo",modal:false,IMG_BASE_URL:"",ROW_LENGTH:10,TABLE_HEIGHT:5,CurrentEmoticonSet:0,CurrentEmoticons:new Array(),emoticonSet:new Array(),emoticonSetLabel:new Array(),oTextField:Object(),nr:null,__init:function(){this.IMG_BASE_URL="http://blogimgs.naver.com/nblog/mylog/post/emoticon/";
this.emoticonSet[0]=("1_01.gif 1_02.gif 1_03.gif 1_04.gif 1_05.gif 1_06.gif 1_07.gif 1_08.gif 1_09.gif 1_10.gif 1_11.gif 1_12.gif 1_13.gif 1_14.gif 1_15.gif 1_16.gif 1_17.gif 1_18.gif 1_19.gif 1_20.gif 1_21.gif 1_22.gif 1_23.gif 1_24.gif 1_25.gif 1_26.gif 1_27.gif 1_28.gif 1_29.gif 1_30.gif 1_31.gif 1_32.gif 1_33.gif 1_34.gif 1_35.gif 1_36.gif 1_37.gif 1_38.gif 1_39.gif 1_40.gif 1_41.gif 1_42.gif 1_43.gif 1_44.gif 1_45.gif 1_46.gif 1_47.gif 1_48.gif 1_49.gif 1_50.gif").split(" ");
this.emoticonSet[1]=("2_01.gif 2_02.gif 2_03.gif 2_04.gif 2_05.gif 2_06.gif 2_07.gif 2_08.gif 2_09.gif 2_10.gif 2_11.gif 2_12.gif 2_13.gif 2_14.gif 2_15.gif 2_16.gif 2_17.gif 2_18.gif 2_19.gif 2_20.gif 2_21.gif 2_22.gif 2_23.gif 2_24.gif 2_25.gif 2_26.gif 2_27.gif 2_28.gif 2_29.gif 2_30.gif 2_31.gif 2_32.gif 2_33.gif 2_34.gif 2_35.gif 2_36.gif 2_37.gif 2_38.gif 2_39.gif 2_40.gif 2_41.gif 2_42.gif 2_43.gif 2_44.gif 2_45.gif 2_46.gif 2_47.gif 2_48.gif 2_49.gif 2_50.gif").split(" ");
this.emoticonSet[2]=("3_01.gif 3_02.gif 3_03.gif 3_04.gif 3_05.gif 3_06.gif 3_07.gif 3_08.gif 3_09.gif 3_10.gif 3_11.gif 3_12.gif 3_13.gif 3_14.gif 3_15.gif 3_16.gif 3_17.gif 3_18.gif 3_19.gif 3_20.gif 3_21.gif 3_22.gif 3_23.gif 3_24.gif 3_25.gif 3_26.gif 3_27.gif 3_28.gif 3_29.gif 3_30.gif 3_31.gif 3_32.gif 3_33.gif 3_34.gif 3_35.gif 3_36.gif 3_37.gif 3_38.gif 3_39.gif 3_40.gif 3_41.gif 3_42.gif 3_43.gif 3_44.gif 3_45.gif 3_46.gif 3_47.gif 3_48.gif").split(" ");
this.emoticonSet[3]=("4_01.gif 4_02.gif 4_03.gif 4_04.gif 4_05.gif 4_06.gif 4_07.gif 4_08.gif 4_09.gif 4_10.gif 4_11.gif 4_12.gif 4_13.gif 4_14.gif 4_15.gif 4_16.gif 4_17.gif 4_18.gif 4_19.gif 4_20.gif 4_21.gif 4_22.gif 4_23.gif 4_24.gif 4_25.gif 4_26.gif 4_27.gif 4_28.gif 4_29.gif 4_30.gif 4_31.gif 4_32.gif 4_33.gif 4_34.gif 4_35.gif 4_36.gif 4_37.gif 4_38.gif 4_39.gif 4_40.gif 4_41.gif 4_42.gif").split(" ");
this.emoticonSet[4]=("5_01.gif 5_02.gif 5_03.gif 5_04.gif 5_05.gif 5_06.gif 5_07.gif 5_08.gif 5_09.gif 5_10.gif 5_11.gif 5_12.gif 5_13.gif 5_14.gif 5_15.gif 5_16.gif 5_17.gif 5_18.gif 5_19.gif 5_20.gif 5_21.gif 5_22.gif 5_23.gif 5_24.gif 5_25.gif 5_26.gif 5_27.gif 5_28.gif 5_29.gif 5_30.gif 5_31.gif 5_32.gif 5_33.gif 5_34.gif 5_35.gif 5_36.gif 5_37.gif 5_38.gif 5_39.gif 5_40.gif 5_41.gif 5_42.gif 5_43.gif 5_44.gif 5_45.gif 5_46.gif 5_47.gif 5_48.gif 5_49.gif 5_50.gif").split(" ")
},onShow:function(){this.nr=new NodeRange(this.editor.getWindow(),this.editor.getDocument());
var sel=this.editor.getSelection();
if(sel.type!="control"){var tmpRange=sel.getRange();
if(tmpRange.duplicate){this.range=tmpRange.duplicate()
}else{this.range=tmpRange.cloneRange()
}}this.editor.lockFocus()
},onClose:function(){},actClose:function(){this.close()
},applyEmoticon:function(idx){setTimeout(function(idx){this.editor.getWindow().focus();
var sel=this.editor.getSelection();
var sDoc=this.editor.getContent();
var iTmp=0;
var tmpEmoRx=new RegExp(this.IMG_BASE_URL,"gi");
sDoc.replace(tmpEmoRx,function($0){iTmp++;
return $0
});
if(iTmp>=100){alert(Editor._("plugin.tabledlist.maxemoticon"));
this.close();
return 0
}if(sel.type=="control"){this.nr=new NodeRange(this.editor.getWindow(),this.editor.getDocument());
this.nr.cloneSelectedRange()
}this.editor.getSelection().setRange(this.range);
this.editor._execCommand("insertHTML","<img src="+this.CurrentEmoticons[idx].firstChild.src+">")
}.bind(this,idx),100);
this.close()
},toImgDiv:function(txt){var img=document.createElement("IMG");
img.src=emoticoninsertionPlugin.IMG_BASE_URL+txt;
img.height=19;
img.width=19;
var obj=document.createElement("DIV");
obj.onmouseover=function(){this.className="code_over"
};
obj.onmouseout=function(){this.className="code_off"
};
obj.appendChild(img);
obj.align="center";
return obj
},drawEmoticonTable:function(emoticonTable,pmEmoticonSetNum){var allCells,cell;
this.CurrentEmoticonSet=pmEmoticonSetNum;
this.CurrentEmoticons=this.emoticonSet[pmEmoticonSetNum].map(this.toImgDiv);
emoticonTable.fill("&nbsp");
emoticonTable.fill(this.CurrentEmoticons);
allCells=emoticonTable.getCells();
for(var i=0;
i<allCells.length;
i++){cell=allCells[i];
if(cell.innerHTML!="&nbsp;"){cell.onclick=this.applyEmoticon.bind(this,i);
try{cell.style.cursor="pointer"
}catch(e){cell.style.cursor="hand"
}}else{cell.onclick=null;
cell.onmouseover=null;
cell.onmouseout=null;
cell.style.cursor=""
}}for(var i=1;
i<this.emoticonSetLabel.length+1;
i++){var oA=$("eset"+i);
oA.onclick=emoticoninsertionPlugin.drawEmoticonTable.bind(this,emoticonTable,i-1);
try{oA.style.cursor="pointer"
}catch(e){oA.style.cursor="hand"
}if((i-1)==this.CurrentEmoticonSet){oA.className="this_on"
}else{oA.className=""
}}},onCreate:function(){var emoticonTable=new wrapperTable("emoTable");
var i=1;
while(lbl=$("eset"+i)){this.emoticonSetLabel[i++-1]=lbl.innerHTML
}emoticonTable.setNumColumns(this.ROW_LENGTH);
emoticonTable.setNumRows(this.TABLE_HEIGHT);
emoticonTable.createCells();
this.drawEmoticonTable(emoticonTable,0)
}}));
Editor.registerPlugin(emoticoninsertionPlugin);
var hyperlinkPlugin=new (Class.extend(Editor.menuPlugin,{name:"hyperlink",author:"gunpyo",bPreserveSelection:false,oLink:Object,oLinkSelPrefix:Object,linkExists:false,nr:null,onCreate:function(){this.oLink=$("hlnk_txt_url");
this.oLink.onkeypress=function(e){var key=e.keyCode||e.which;
var eInput=e.srcElement||e.target;
if(key==13){setTimeout(function(){this.actLink()
}.bind(this),10)
}}.bindForEvent(this)
},setFocus:function(){try{$("hlnk_txt_url").focus();
$("hlnk_txt_url").value=$("hlnk_txt_url").value
}catch(e){setTimeout(this.setFocus.bind(this),10)
}},onShow:function(){this.nr=new NodeRange(this.editor.getWindow(),this.editor.getDocument());
if(this.nr.getType()=="table"){this.object.style.display="none";
setTimeout(this.close.bind(this),10);
alert(Editor._("plugin.font.notableeditor"));
return
}var nodes=this.nr.getNodes();
for(var i=0;
i<nodes.length;
i++){try{if(nodes[i].tagName=="IMG"&&nodes[i].className=="storyphoto_layout"){this.object.style.display="none";
setTimeout(this.close.bind(this),10);
alert(Editor._("plugin.hyperlink.nolink4storyphoto"));
return
}}catch(e){}}linkExists=false;
var anchor=this.nr.findContainer("A");
var sel=this.editor.getSelection();
if(anchor){if(typeof(anchor.textContent)!="undefined"&&anchor.textContent==""&&sel.type!="control"){this.nr.range.setStartBefore(anchor);
this.nr.range.setEndBefore(anchor);
anchor.parentNode.removeChild(anchor)
}else{linkExists=true;
this.nr.defineRange(anchor);
this.nr.select();
this.oLink.value=anchor.href
}}setTimeout(this.setFocus.bind(this),10)
},onClose:function(){this.oLink.value="http://"
},actClose:function(){this.close()
},actLink:function(){var sLink=this.oLink.value;
if(!(/^(http|https|ftp|mailto):(?:\/\/)?((\w|-)+(?:[\.:@](\w|-))+)(?:\/|@)?([^"\?]*?)(?:\?([^\?"]*?))?$/.test(sLink))){alert(Editor._("plugin.hyperlink.invalidurl"));
this.oLink.focus();
this.oLink.select();
return false
}this.nr.select();
if(!linkExists&&this.nr.isCollapsed()){this.editor._execCommand("insertHTML",'<a href="'+sLink+'">'+sLink+"</a>")
}else{if(sLink==""){this.editor._execCommand("unlink")
}else{this.editor._execCommand("createlink",sLink)
}}this.close()
}}));
Editor.registerPlugin(hyperlinkPlugin);
var hotkey_hyperlink=function(editor,key,shiftState){editor.execCommand("hyperlink",null)
};
Editor.registerHotkey("Ctrl+K",hotkey_hyperlink);
function isChildOf(node,container){while(node&&node.tagName!="BODY"){if(node==container){return true
}node=node.parentNode
}return false
}var lineHeightPlugin=new (Class.extend(Editor.menuPlugin,{name:"lineheight",author:"gunpyo",oOptionList:null,heightList:[50,80,100,120,150,180,200],sel:null,nr:null,lineBreakers:{},heightBreakers:{},onCreate:function(){this.lineBreakers={DIV:true,P:true,UL:true,OL:true,LI:true,TD:true,TR:true,TH:true,BLOCKQUOTE:true,BODY:true,TABLE:true};
this.heightBreakers=this.lineBreakers;
this.sel=this.editor.getSelection();
this.oOptionList=$("lh_height_list");
for(var i=0;
i<this.heightList.length;
i++){li=this.oOptionList.appendChild($C("LI"));
li.style.textAlign="left";
li.innerHTML=this.heightList[i]+"%";
li.onmousedown=this.assignAction("lineheight",this.heightList[i]);
try{li.style.cursor="pointer"
}catch(e){li.style.cursor="hand"
}}},onShow:function(){this.nr=new NodeRange(this.editor.getWindow(),this.editor.getDocument());
if(this.nr.getType()=="table"){this.object.style.display="none";
setTimeout(this.close.bind(this),100);
alert(Editor._("plugin.font.notableeditor"));
return
}this.sel=this.editor.getSelection();
var iLineHeight=this.getLineheight()*100+"%";
for(var i=0;
i<this.oOptionList.childNodes.length;
i++){this.oOptionList.childNodes[i].className="";
this.oOptionList.childNodes[i].onmouseover=function(){this.className="list_over"
};
this.oOptionList.childNodes[i].onmouseout=function(){this.className=""
};
if(this.oOptionList.childNodes[i].innerHTML==iLineHeight){this.oOptionList.childNodes[i].className="list_select";
this.oOptionList.childNodes[i].onmouseover=function(){this.className="list_over list_select"
};
this.oOptionList.childNodes[i].onmouseout=function(){this.className="list_select"
}
}}},onClose:function(){},getLineWrapper:function(node){var lineBreakers=this.lineBreakers;
function getLineStartingNode(node){var frontEndFinal=null;
var frontEnd=node;
var lineBreaker=node;
function getLineStart(node){if(!node){return
}if(frontEndFinal){return
}if(lineBreakers[node.tagName]){lineBreaker=node;
frontEndFinal=frontEnd;
return
}getFrontEnd(node.previousSibling);
if(frontEndFinal){return
}getLineStart(node.parentNode)
}function getFrontEnd(node){if(!node){return
}if(lineBreakers[node.tagName]){lineBreaker=node;
frontEndFinal=frontEnd;
return
}if(node.hasChildNodes()&&node.tagName!="TABLE"){var curNode=node.lastChild;
while(curNode&&!frontEndFinal){getFrontEnd(curNode);
curNode=curNode.previousSibling
}}else{frontEnd=node
}if(!frontEndFinal){getFrontEnd(node.previousSibling)
}}getLineStart(node);
return[frontEndFinal,lineBreaker]
}function getLineEndingNode(node){var backEndFinal=null;
var backEnd=node;
var lineBreaker=node;
function getLineEnd(node){if(!node){return
}if(backEndFinal){return
}if(lineBreakers[node.tagName]){lineBreaker=node;
backEndFinal=backEnd;
return
}getBackEnd(node.nextSibling);
if(backEndFinal){return
}getLineEnd(node.parentNode)
}function getBackEnd(node){if(!node){return
}if(lineBreakers[node.tagName]){lineBreaker=node;
backEndFinal=backEnd;
return
}if(node.hasChildNodes()&&node.tagName!="TABLE"){var curNode=node.firstChild;
while(curNode&&!backEndFinal){getBackEnd(curNode);
curNode=curNode.nextSibling
}}else{backEnd=node
}if(!backEndFinal){getBackEnd(node.nextSibling)
}}getLineEnd(node);
return[backEndFinal,lineBreaker]
}var arA,arB;
var a,b;
var breakerA,breakerB;
var div;
arA=getLineStartingNode(node);
arB=getLineEndingNode(node);
a=arA[0];
breakerA=arA[1];
b=arB[0];
breakerB=arB[1];
this.nr.defineRange(a,b);
if(breakerA==breakerB&&(breakerA.tagName=="P"||breakerA.tagName=="DIV")){div=breakerA
}else{div=null
}return div
},actLineheight:function(height){this.nr=new NodeRange(this.editor.getWindow(),this.editor.getDocument());
thisRef=this;
function setLineheight(div,height){if(!div){try{div=thisRef.nr.surroundRangeWithNewNode("P")
}catch(e){div=thisRef.nr.surroundRangeWithNewNode("DIV")
}}div.style.lineHeight=height/100;
return div
}function isInBody(node){while(node&&node.tagName!="BODY"){node=node.parentNode
}if(!node){return false
}return true
}var nodes=this.getSelectedNodes();
if(nodes.length==0){this.close();
return
}var curWrapper,prevWrapper;
var iLength=nodes.length;
if(iLength==0){return
}prevWrapper=this.getLineWrapper(nodes[0]);
prevWrapper=setLineheight(prevWrapper,height);
var startNode=prevWrapper;
var endNode=prevWrapper;
for(var i=1;
i<iLength;
i++){try{if(!isInBody(nodes[i].parentNode)){continue
}}catch(e){continue
}if(isChildOf(nodes[i],curWrapper)){continue
}curWrapper=this.getLineWrapper(nodes[i]);
if(curWrapper==prevWrapper){continue
}curWrapper=setLineheight(curWrapper,height);
prevWrapper=curWrapper
}endNode=curWrapper;
setTimeout(function(startNode,endNode){this.nr.defineRange(startNode,endNode);
this.nr.select()
}.bind(this,startNode,endNode),100);
this.close()
},getSelectedNodes:function(){this.nr.cloneSelectedRange();
var nodes=this.nr.getTextNodes();
if(nodes.length==0){if(this.nr.getStartNode()){nodes[0]=this.nr.getStartNode()
}else{nodes=[]
}}return nodes
},getWrapperLineheight:function(div){var heightBreakers=this.heightBreakers;
var iLineHeight="";
if(div&&div.style.lineHeight){iLineHeight=div.style.lineHeight
}else{div=this.nr.getCommonAncesterContainer();
while(div&&!heightBreakers[div.tagName]){if(div&&div.style.lineHeight){iLineHeight=div.style.lineHeight;
break
}div=div.parentNode
}}return iLineHeight
},getLineheight:function(){var nodes=this.getSelectedNodes();
var curWrapper,prevWrapper;
var iCurHeight,iHeight;
if(nodes.length==0){return -1
}var iLength=nodes.length;
if(iLength==0){iHeight=-1
}else{prevWrapper=this.getLineWrapper(nodes[0]);
iHeight=this.getWrapperLineheight(prevWrapper)
}var firstNode=this.nr.getStartNode();
if(iHeight>0){for(var i=1;
i<iLength;
i++){if(isChildOf(nodes[i],curWrapper)){continue
}if(!nodes[i]){continue
}curWrapper=this.getLineWrapper(nodes[i]);
if(curWrapper==prevWrapper){continue
}curHeight=this.getWrapperLineheight(curWrapper);
if(curHeight!=iHeight){iHeight=-1;
break
}prevWrapper=curWrapper
}}curWrapper=this.getLineWrapper(nodes[iLength-1]);
var lastNode=this.nr.getEndNode();
selectText=function(firstNode,lastNode){this.nr.defineRange(firstNode,lastNode);
this.nr.select()
};
setTimeout(selectText.bind(this,firstNode,lastNode),100);
return iHeight
}}));
Editor.registerPlugin(lineHeightPlugin);
var quotePlugin=new (Class.extend(Editor.menuPlugin,{name:"quote",list:[],_selectOne:function(num){for(var i=0;
i<this.list.length;
i++){this.list[i].firstChild.className=""
}try{this.list[num].firstChild.className="last"
}catch(e){}},onCreate:function(){this.list=this.object.getElementsByTagName("li");
var actOverBind=this.actOver.bindForEvent(this);
var actQuoteBind=this.actQuote.bindForEvent(this);
for(var i=0;
i<this.list.length;
i++){this.list[i].onclick=actQuoteBind;
this.list[i].onmouseover=actOverBind
}},onShow:function(){this.nr=new NodeRange(this.editor.getWindow(),this.editor.getDocument());
if(this.nr.getType()=="table"){this.object.style.display="none";
setTimeout(this.close.bind(this),100);
alert(Editor._("plugin.font.notableeditor"));
return
}this.editor.preserveSelection();
this.editor.getWindow().focus();
this._selectOne(this.list.length-1)
},onClose:function(){},actOver:function(e){this._selectOne(-1);
e.element.parentNode.className+=" list_over"
},actQuote:function(e){if(e.element.tagName.toUpperCase()!="IMG"){return
}if(this.editor.getContent()==""){this.editor.setContent("<p>&nbsp;</p>")
}var doc=this.editor.getDocument();
var sel=this.editor.getSelection();
var oParent,oQuote,arrQuote,oList;
var sType=e.element.src.match(/([0-9]+)\.gif/i)[1];
var bLast=/(^|\s)last(\s|$)/.test(e.element.parentNode.parentNode.className);
var removeQuote=function(q){for(var i=0;
i<q.childNodes.length;
){q.parentNode.insertBefore(q.firstChild,q)
}q.parentNode.removeChild(q)
};
var avoidTable=function(fromNode){while(fromNode){if(fromNode.nodeType==1&&!/TABLE|TBODY|TFOOT|THEAD|TR/i.test(fromNode.tagName)){return fromNode
}fromNode=fromNode.parentNode
}return null
};
this.editor.getWindow().focus();
if($Agent().IE&&sel.type=="none"){if(sel.parentElement.innerHTML==""){sel.parentElement.innerHTML="&nbsp"
}sel.refresh()
}oParent=avoidTable(sel.parentElement);
oQuote=this.getBlock(oParent,"blockquote");
if(oParent===doc.documentElement){oParent=doc.body
}if(!oQuote){var getChild=function(fromNode){if(fromNode===oParent){return fromNode
}while(fromNode.parentNode){if(fromNode.parentNode===oParent){return fromNode
}fromNode=fromNode.parentNode
}return null
};
if(doc.body.childNodes.length==0){doc.body.innerHTML="<p>&nbsp;</p>"
}if(sel.startNode===doc.body){sel.startNode=doc.body.firstChild
}if(sel.endNode===doc.body){sel.endNode=doc.body.firstChild
}var startChild=getChild(sel.startNode);
var endChild=getChild(sel.endNode);
if(startChild&&startChild.nodeType==1&&startChild.tagName.toLowerCase()=="li"){startChild=startChild.parentNode
}if(endChild&&endChild.nodeType==1&&endChild.tagName.toLowerCase()=="li"){endChild=endChild.parentNode
}oQuote=doc.createElement("blockquote");
startChild.parentNode.insertBefore(oQuote,startChild);
while(oQuote.nextSibling&&oQuote.nextSibling!==endChild){oQuote.appendChild(oQuote.nextSibling)
}oQuote.appendChild(endChild)
}try{oQuote.className="quote"+sType;
arrQuote=oQuote.getElementsByTagName("blockquote");
for(var i=0;
i<arrQuote.length;
i++){removeQuote(arrQuote[i])
}}catch(err){}sel.selectNode(oQuote);
if(bLast&&oQuote){removeQuote(oQuote)
}else{var b=doc.body,p;
if(b.firstChild===oQuote){p=doc.createElement("P");
p.innerHTML="&nbsp;";
b.insertBefore(p,oQuote)
}if(b.lastChild===oQuote){p=doc.createElement("P");
p.innerHTML="&nbsp;";
b.appendChild(p)
}}this.close()
},getBlock:function(node,sTagName){var lastNode=null;
var tagNames=[];
for(var i=1;
i<arguments.length;
i++){tagNames.push(arguments[i].toLowerCase())
}while(node){try{if(tagNames.has(node.tagName.toLowerCase())){lastNode=node
}}catch(e){}node=node.parentNode;
if(!node||node.nodeType==1&&node.tagName.toLowerCase()=="body"){break
}}return lastNode
},removeParent:function(node){var par=node.parentNode;
for(var i=0;
i<par.childNodes.length;
i++){par.parentNode.insertBefore(par.firstChild,par)
}par.parentNode.removeChild(par)
}}));
Editor.registerPlugin(quotePlugin);
function escapeHTMLText(str){str=str.replace(/&/g,"&amp;");
str=str.replace(/</g,"&lt;");
str=str.replace(/>/g,"&gt;");
return str
}var Search={_keyword:new String(),_win:null,_doc:null,_range:null,iCurrent:0,_find:function(sText){var bResult=false;
this._keyword=sText;
if(this._win.find){this._findReset();
bResult=this._win.find(sText)
}else{if(this._doc.body.createTextRange){this._range=this._doc.body.createTextRange();
bResult=this._range.findText(sText);
this._range.select()
}}return bResult
},_findNext:function(){var bResult=false;
if(this._win.find){bResult=this._win.find(this._keyword)
}else{if(this._doc.body.createTextRange){this._range.collapse(false);
bResult=this._range.findText(this._keyword);
this._range.select()
}}return bResult
},_findPrev:function(){var bResult=false;
if(this._win.find){bResult=this._win.find(this._keyword)
}else{if(this._doc.body.createTextRange){this._range.pasteHTML($("replace").value);
this._range.select()
}}return bResult
},_findReset:function(){if(this._win.find){this._win.getSelection().removeAllRanges()
}else{this._range.moveStart("textedit");
this._range.select()
}},searchkey:function(editor,keyword){var sKeyword=keyword;
var bRet=false;
this._win=editor.getWindow();
this._doc=editor.getDocument();
this._win.focus();
if(document.domain!=document.location.hostname){if($Agent().IE==false){alert(Editor._("plugin.searchreplace.notsupport"));
return false
}}if(sKeyword){if(this._keyword!=sKeyword){this.iCurrent=0
}if(this.iCurrent==1){bRet=this._findNext()
}else{bRet=this._find(sKeyword)
}}else{alert(Editor._("plugin.searchreplace.inputkeyword"));
return false
}if(bRet==false){if(this.iCurrent==1){this._findReset();
if(bRet==false){this.iCurrent=0;
return false
}}else{this._findReset();
alert(Editor._("plugin.searchreplace.notfound"));
return false
}}else{this.iCurrent=1;
return false
}}};
var searchkeyPlugin=new (Class.extend(Editor.dialogPlugin,{name:"searchkeyword",author:"shgraph",modal:false,onCreate:function(){},onShow:function(){if(document.domain!=document.location.hostname){if($Agent().IE==false){alert(Editor._("plugin.searchreplace.notsupport"));
setTimeout(this.close.bind(this),10);
return true
}}$("keyword").value="";
$("keyword").focus()
},onClose:function(){},actGoreplace:function(){this.editor.execCommand("replacekeyword",this._button);
$("keyword_re").value=$("keyword").value
},actClose:function(){this.close()
},actSearch:function(){var sKeyword=$("keyword").value;
var editor=this.editor;
var bRet=Search.searchkey(editor,sKeyword)
}}));
var replacekeyPlugin=new (Class.extend(Editor.dialogPlugin,{name:"replacekeyword",author:"shgraph",modal:false,_range:null,iTemp:0,onCreate:function(){$("keyword_re").value="";
$("replace").value=""
},onShow:function(){$("replace").value="";
$("keyword_re").focus()
},onClose:function(){},actClose:function(){this.close()
},actGosearch:function(){this.editor.execCommand("searchkeyword");
$("keyword").value=$("keyword_re").value
},actSearch:function(){var sKeyword=$("keyword_re").value;
var editor=this.editor;
var bRet=Search.searchkey(editor,sKeyword);
this.iTemp=1;
return bRet
},actReplace:function(){var editor=this.editor;
editor.getWindow().focus();
var sKeyword=$("keyword_re").value;
var sRelaceword=$("replace").value;
var Selection=null;
var bRet=null;
var oAgent=$Agent();
sRelaceword=escapeHTMLText(sRelaceword);
if(this.iTemp==0){bRet=Search.searchkey(editor,sKeyword);
if(bRet){Selection=editor.getSelection()
}}if(Search.iCurrent==1){this.iTemp=1;
Selection=editor.getSelection();
if(oAgent.IE){Search._findPrev()
}else{Selection.setHTML(sRelaceword)
}bRet=Search.searchkey(editor,sKeyword);
if(!bRet){Selection=editor.getSelection()
}}if(Search.iCurrent!=1){this.iTemp=0
}return bRet
},actAllreplace:function(){var editor=this.editor;
editor.getWindow().focus();
var sKeyword=$("keyword_re").value;
var sRelaceword=$("replace").value;
var sDoc=editor.getContent();
var sFindResult=new String();
if(sKeyword){sFindResult=this.sAllReplace(sKeyword,sRelaceword,sDoc)
}else{sFindResult=false;
alert(Editor._("plugin.searchreplace.inputkeyword"))
}if(sFindResult!=false){editor.setContent(sFindResult)
}else{editor.setContent(sDoc)
}if(this.iTemp!=0){this.iTemp=0;
Search.iCurrent=0
}return true
},sAllReplace:function(sKeyword,sRelaceword,sDoc){var sFindResult=new String();
var rSaerchExp=null;
var rNotHTMLExp=/([^<]+)|<[^<>]*>/gi;
var rHTMLTags=/<[^>]*>/gi;
sKeyword=escapeHTMLText(sKeyword);
rSaerchExp=new RegExp(sKeyword,"gi");
var iTemp=0;
if(rSaerchExp.test(sDoc)){iTemp=sDoc.replace(rHTMLTags,"").match(rSaerchExp).length;
sFindResult=sDoc.replace(rNotHTMLExp,function(){var retVal=new String();
if(arguments[1]==undefined){return arguments[0]
}if(arguments[1].length){retVal=arguments[1].replace(rSaerchExp,sRelaceword)
}else{retVal=arguments[0]
}return retVal
});
alert(Editor._("plugin.searchreplace.allreplace1")+iTemp+Editor._("plugin.searchreplace.allreplace2"));
return sFindResult
}else{alert(Editor._("plugin.searchreplace.notfound"));
return false
}}}));
Editor.registerPlugin(searchkeyPlugin);
Editor.registerPlugin(replacekeyPlugin);
var spellcheckDocPlugin=new (Class.extend(Editor.documentPlugin,{name:"spellcheckdoc",_suggest:null,_reqSuggest:new String(),_curEvent:null,directInput:0,onMousedown:function(e){var oBody=document.body;
try{if(e.element.tagName==undefined){if(spellcheckDocPlugin._suggest){spellcheckDocPlugin._suggest.parentNode.removeChild(spellcheckDocPlugin._suggest);
spellcheckDocPlugin._suggest=null
}return
}if(e.element.tagName.toLowerCase()!="span"||e.element.id.toLowerCase()!="spellcheckarea"){if(spellcheckDocPlugin._suggest){spellcheckDocPlugin._suggest.parentNode.removeChild(spellcheckDocPlugin._suggest);
spellcheckDocPlugin._suggest=null
}return
}if(e.element.className.match("NHN_SPELL")!="NHN_SPELL"){if(spellcheckDocPlugin._suggest){spellcheckDocPlugin._suggest.parentNode.removeChild(spellcheckDocPlugin._suggest);
spellcheckDocPlugin._suggest=null
}return
}var tempData=e.element.className.replace(/correct NHN_SPELL\+/,"");
this._curEvent=e;
var ipos=Element.realPos(this.editor.iframe);
var pos=Element.realPos(e.element);
if(this._suggest){this._suggest.parentNode.removeChild(spellcheckDocPlugin._suggest);
this._suggest=null
}var tt=this._suggest=this.editor.toolbox.parentNode.appendChild($C("div"));
tt.style.display="none";
tt.style.width="118px";
tt.style.position="absolute";
tt.style.top=(ipos.top+pos.top+e.element.offsetHeight-this.editor.getDocument().body.scrollTop-this.editor.base_pos.top)+"px";
tt.style.left=(ipos.left+pos.left-this.editor.base_pos.left)+"px";
tt.style.background="#FFFFFF";
tt.style.zIndex="1";
sellcheckPlugin.actSearchKeyword(tempData,this.getReqData)
}catch(e){}},getReqData:function(reqData){try{var sSuggestKey=new String();
var tempReq=JINDO.xml2obj(reqData)._nodeValue;
if(tempReq==undefined){tempReq=""
}var checkData=tempReq.split("+");
var iResult=checkData.length-1;
var temp=new String();
var template=$("spellcheck_suggestionlayer").innerHTML;
if(iResult>0){for(var i=0;
i<iResult;
i++){sSuggestKey=decodeURIComponent(checkData[i]);
sSuggestKey=sSuggestKey.replace(/'/g,"");
temp+="<li style='cursor:pointer; width:100%' onMouseOut='this.className=\"\"' onMouseOver='this.className=\"list_over\"' onClick='spellcheckDocPlugin.directInput=1;spellcheckDocPlugin.changeSpell(\""+sSuggestKey+"\");return false;' >"+sSuggestKey+"</li>"
}}else{temp="<li>"+Editor._("plugin.spellcheck.nosuggest")+"</li>"
}spellcheckDocPlugin._suggest.innerHTML=template.replace(/{REPLACE}/g,temp);
spellcheckDocPlugin._suggest.style.display="inline"
}catch(e){}},changeSpell:function(chKey){if(this.directInput==1&&chKey){this.directInput=0;
this._curEvent.element.innerHTML=chKey
}this._curEvent.element.className="";
this._suggest.style.display="none"
}}));
var sellcheckPlugin=new (Class.extend(Editor.simplePlugin,{name:"spellcheck",description:"SpellCheck in document",author:"shgraph",iCheckMode:0,bEvent:null,sDoc:new String(),url:"http://gut.naver.com/spellchk/spell",_sendSpellCheck:function(method,params,actFunction){var t=this;
t.sDoc=t.editor.getContent();
t.actFunction=actFunction;
var spellReq=new Ajax(this.url,{method:method,params:params,onLoad:function(req){var reqData=req.responseText;
t.actFunction(reqData)
}})
},actCheckspell:function(reqData){var editor=this.editor;
var sDoc=this.sDoc;
var sReplaceword1='<span id="spellcheckarea" class="correct NHN_SPELL+{MATCH}">';
var sReplaceword2="</span>";
var rNotHTMLExp=/([^<]+)|<[^<>]*>/gi;
var rSaerchExp=null;
var sResult=new String();
var sSpellKey=new String();
try{var tempReq=JINDO.xml2obj(reqData)._nodeValue;
if(tempReq==undefined){tempReq=""
}var checkData=tempReq.split("+");
var tmpArray=new Array();
var iResult=checkData.length;
checkData.sort();
j=0;
tmpArray=new Array();
for(var i=0;
i<iResult;
i++){if(checkData[i].length>0){tmpArray[j]=checkData[i];
j++;
if((i>0)&&(checkData[i]==checkData[i-1])){tmpArray.pop();
j--
}}}checkData=tmpArray;
iResult=checkData.length;
for(i=0;
i<iResult;
i++){if(i!=0){sSpellKey+="|"
}sSpellKey+=decodeURIComponent(checkData[i])
}var replaceFunc=function(){};
if(iResult>0){rSaerchExp=new RegExp("("+sSpellKey+")","gi");
replaceFunc=function(str){return str.replace(rSaerchExp,function(m0,m1){if(arguments.length<2){return m0
}return sReplaceword1.replace(/\{MATCH\}/g,m1)+m1+sReplaceword2
})
};
sDoc=sDoc.replace(rNotHTMLExp,function($0,$1,$2,$3,$4){if($0.match("&lt;")){return $0
}if($0.match("&gt;")){return $0
}if($1==undefined){return $0
}if($1.length<1){return $0
}return replaceFunc($1)
})
}sResult=sDoc;
var checkNumberTPL=Editor._("plugin.spellcheck.checkinfomessage");
$("spellcheckModeText").innerHTML=checkNumberTPL.replace(/{NUMBER}/g,iResult);
$("spellcheckModeRow").style.display="";
editor.options.onResize();
editor.setContent(sResult);
editor._activeFrame=null;
var tmp=editor.getDocument().body.getElementsByTagName("span");
var iTempLoop=tmp.length;
spellcheckDocPlugin.editor=editor;
this.bEvent=spellcheckDocPlugin.onMousedown.bindForEvent(spellcheckDocPlugin);
Event.register(editor.getDocument().body,"mousedown",this.bEvent);
Event.register(editor.getDocument().body,"mousewheel",this.bEvent)
}catch(e){}},onCreate:function(){},onCommand:function(sCommand){if(sCommand=="html"){if(this.iCheckMode!=0){this.onExecute()
}}},actSearchKeyword:function(sCheckString,func){var params={id:"test",cmd:"suggest",check:sCheckString};
this._sendSpellCheck("post",params,func)
},onExecute:function(){var editor=this.editor;
var sDoc=editor.getContent();
var stripTagRegx=/<\S[^><]*>/g;
var rSaerchExp=null;
var sResult=new String();
if(this.iCheckMode==0){editor.preserveSelection();
setTimeout(function(){sDoc=sDoc.replace(/<br>/i," ").replace(stripTagRegx,"").replace(/\&nbsp;/g,"").replace(/"/g,"");
var nByte=encodeURIComponent(sDoc).length;
if(nByte>20480&&nByte<102400){if(!confirm(Editor._("plugin.spellcheck.waitmessage1"))){return
}}else{if(nByte>=102400){alert(Editor._("plugin.spellcheck.waitmessage2"));
return
}}var tempRandNO=1;
var params={id:"test"+tempRandNO,cmd:"spell",check:sDoc};
this._sendSpellCheck("post",params,this.actCheckspell);
this.iCheckMode=1
}.bind(this),500)
}else{$("spellcheckModeRow").style.display="none";
editor.options.onResize();
this.iCheckMode=0;
if($Agent().IE){rSearchExp1=new RegExp("<span [^>]* id=spellcheckarea>(.*?)</span>","gi")
}else{rSearchExp1=new RegExp('<span id="spellcheckarea"[^>]*>(.*?)</span>',"gi")
}sResult=sDoc.replace(rSearchExp1,"$1");
sResult=sResult.replace(rSearchExp1,"$1");
if($Agent().IE){rSearchExp1=new RegExp('<span class="correct NHN_SPELL[^>]*>(.*?)</span>',"gi")
}else{rSearchExp1=new RegExp('<span [^>]* class="correct NHN_SPELL[^>]*>(.*?)</span>',"gi")
}sResult=sDoc.replace(rSearchExp1,"$1");
sResult=sResult.replace(rSearchExp1,"$1");
if(spellcheckDocPlugin._suggest){spellcheckDocPlugin._suggest.parentNode.removeChild(spellcheckDocPlugin._suggest);
spellcheckDocPlugin._suggest=null
}Event.unregister(editor.getDocument().body,"mousedown",this.bEvent);
Event.unregister(editor.getDocument().body,"mousewheel",this.bEvent);
editor.setContent(sResult);
editor.preserveSelection()
}editor.getWindow().focus()
}}));
Editor.registerPlugin(sellcheckPlugin);
Editor.registerPlugin(spellcheckDocPlugin);
var ChangeTable={tbo:null,iRownum:0,iCellnum:0,_chCols:function(sValue){var iInputValue=parseInt(sValue);
var iTCellnum=this.iCellnum;
var tempSpace="\u00a0";
var newCell=null;
var i=0,j=0;
var iSepValue=iInputValue-iTCellnum;
this.iCellnum+=iSepValue;
if(iSepValue<0){iSepValue*=-1;
iFlag=0
}else{iFlag=1
}for(i=0;
i<this.iRownum;
i++){for(j=0;
j<iSepValue;
j++){if(iFlag){newCell=this.tbo.rows[i].insertCell(-1)
}else{this.tbo.rows[i].deleteCell(-1)
}}}},_delRows:function(iValue){var tbo=this.tbo;
this.iRownum-=iValue;
for(var i=0;
i<iValue;
i++){tbo.deleteRow(0)
}},_addRows:function(iValue){var tbo=this.tbo;
var iCellnum=this.iCellnum;
var newRow=null;
var newCell=null;
var tempSpace="\u00a0";
var i=0,j=0;
this.iRownum+=iValue;
for(i=0;
i<iValue;
i++){newRow=tbo.insertRow(-1);
for(j=0;
j<iCellnum;
j++){newCell=newRow.insertCell(-1)
}newRow.bgColor=tbo.rows[0].bgColor
}},_chRows:function(sValue){var iInputValue=parseInt(sValue);
var iTRows=this.iRownum;
if(iTRows>iInputValue){this._delRows(iTRows-iInputValue)
}else{if(iTRows<iInputValue){this._addRows(iInputValue-iTRows)
}}},_chBorder:function(sValue){if(sValue>=0){this.tbo.cellSpacing=sValue;
this.tbo.className=""
}else{this.tbo.cellSpacing=sValue;
this.tbo.className="noneBorder"
}},_chBoderColor:function(sValue){this.tbo.bgColor=sValue
},_chBgColor:function(sValue){for(i=0;
i<this.iRownum;
i++){this.tbo.rows[i].bgColor=sValue
}}};
var insertTablePlugin=new (Class.extend(Editor.menuPlugin,{name:"inserttable",author:"shgraph",modal:false,bPreserveSelection:false,cpCreated:false,cpp:null,selCp:0,range:null,nr:null,sel:null,elmInTable:null,DEF_BorderSize:1,DEF_BorderColor:"#B7BBB5",DEF_BGColor:"#FFFFFF",DEF_COLS:4,DEF_ROWS:4,onCreate:function(){var table_color_tbl=new wrapperTable("table_color_tbl");
var allCells=table_color_tbl.getCells();
var bgColor;
for(var i=0;
i<allCells.length;
i++){cell=allCells[i];
bgColor=cell.bgColor;
if(bgColor!=""){cell.onmousedown=this.actSelcolor.bind(this,bgColor);
try{cell.style.cursor="pointer"
}catch(e){cell.style.cursor="hand"
}}}},onShow:function(){this.nr=new NodeRange(this.editor.getWindow(),this.editor.getDocument());
this.elmInTable=this.nr.findContainer("TABLE");
if(this.elmInTable&&this.elmInTable.id){this.elmInTable=""
}if(this.elmInTable){this.DEF_BorderSize=this.elmInTable.cellSpacing;
this.DEF_BorderColor=this.elmInTable.bgColor;
this.DEF_BGColor="#FFFFFF";
var trs=this.elmInTable.getElementsByTagName("TR");
if(trs[0]){this.DEF_BGColor=trs[0].bgColor
}this.DEF_COLS=parseInt((this.elmInTable.rows.item(0))?this.elmInTable.rows.item(0).getElementsByTagName("td").length:1);
this.DEF_ROWS=parseInt(this.elmInTable.rows.length);
$("insertTable_plugin_cellrow").style.display="none"
}else{this.DEF_BorderSize=1;
this.DEF_BorderColor="#B7BBB5";
this.DEF_BGColor="#FFFFFF";
this.DEF_COLS=4;
this.DEF_ROWS=4;
$("insertTable_plugin_cellrow").style.display="block"
}this.resetTable();
this.actClosecp()
},onClose:function(){},actClose:function(){this.close()
},actInsert:function(){var editor=this.editor;
if(this.range==null){var sel=this.editor.getSelection()
}else{sel=this.sel
}this.nr.moveToBookmark();
this.nr.removeBookmark();
if(this.elmInTable){ChangeTable.tbo=this.elmInTable;
this.actChange("chBorder",$("border_val").value);
this.actChange("chBorderColor",$("borderColorCode").value);
this.actChange("chBgColor",$("backColorCode").value)
}else{var tbo=$("insertTable_plugin_pretable");
var sInsertTable=this.sMakeTable(tbo);
this.editor._execCommand("inserthtml",sInsertTable)
}this.close()
},resetTable:function(){var tempDisplay=this.object.style.display;
this.editor.getWindow().focus();
this.object.style.display=tempDisplay;
this.nr=new NodeRange(this.editor.getWindow(),this.editor.getDocument());
this.nr.bookmark();
this.range=null;
var sel=this.editor.getSelection();
var tmpRange=sel.getRange();
this.sel=sel;
if(tmpRange.cloneRange){this.range=tmpRange.cloneRange()
}else{if(tmpRange.duplicate){this.range=tmpRange.duplicate()
}}var tbo=$("insertTable_plugin_pretable");
var dBorderColor=this.DEF_BorderColor;
var dBgColor=this.DEF_BGColor;
ChangeTable.tbo=tbo;
ChangeTable.iRownum=parseInt(ChangeTable.tbo.rows.length);
ChangeTable.iCellnum=parseInt((tbo.rows.item(0))?tbo.rows.item(0).getElementsByTagName("td").length:1);
this.actChange("chRows",this.DEF_ROWS);
this.actChange("chCols",this.DEF_COLS);
this.actChange("chBorder",this.DEF_BorderSize);
$("rows_val").value=this.DEF_ROWS;
$("cols_val").value=this.DEF_COLS;
$("border_val").value=this.DEF_BorderSize;
$("borderColor").style.backgroundColor=dBorderColor;
$("borderColorCode").value=dBorderColor;
$("backColor").style.backgroundColor=dBgColor;
$("backColorCode").value=dBgColor;
this.actChange("chBorderColor",dBorderColor);
this.actChange("chBgColor",dBgColor)
},sMakeTable:function(tbo){var iRows=tbo.rows.length;
var iCols=(tbo.rows.item(0))?tbo.rows.item(0).getElementsByTagName("td").length:1;
var iBorder=tbo.cellSpacing;
var sBorderColor=tbo.bgColor;
var sBgColor=tbo.rows[0].bgColor;
var i=0,j=0;
var sTable=new String();
var sRows=new String();
var totalWidth=this.editor.getDocument().body.clientWidth-50;
var iWidth=parseInt(totalWidth/iCols);
sTable='<table border="0" width="'+totalWidth+'px" height="40" cellspacing="'+iBorder+'" cellpadding="0" bgcolor="'+sBorderColor+'">';
sRows="<tr bgcolor="+sBgColor+">";
for(j=0;
j<iCols;
j++){sRows+="<td width='"+iWidth+"px'>&nbsp;</td>"
}sRows+="</tr>";
sTable+=sRows;
for(i=1;
i<iRows;
i++){sRows="<tr bgcolor="+sBgColor+">";
for(j=0;
j<iCols;
j++){sRows+="<td>&nbsp;</td>"
}sRows+="</tr>";
sTable+=sRows
}sTable+="</table>";
return sTable
},actChange:function(sAction,sValue){if(!sValue){return
}this.editor.preserveSelection();
switch(sAction){case"chRows":if(isFinite(sValue)){if(sValue<=20&&sValue>=1){ChangeTable._chRows(sValue)
}else{alert(Editor._("plugin.table.checksize"));
ChangeTable._chRows(4);
$("rows_val").value=4
}}else{var iChResult=0;
if(sValue=="ADD"){iChResult=ChangeTable.iRownum+1;
if(iChResult>=21){break
}}else{if(sValue=="SUB"){iChResult=ChangeTable.iRownum-1;
if(iChResult<=0){break
}}else{ChangeTable._chRows(4);
$("rows_val").value=4;
iChResult=0;
break
}}if(iChResult!=0){ChangeTable._chRows(iChResult);
$("rows_val").value=iChResult
}}break;
case"chCols":if(isFinite(sValue)){if(sValue<=20&&sValue>=1){ChangeTable._chCols(sValue)
}else{alert(Editor._("plugin.table.checksize"));
ChangeTable._chCols(4);
$("cols_val").value=4
}}else{var iChResult=0;
if(sValue=="ADD"){iChResult=ChangeTable.iCellnum+1;
if(iChResult>=21){break
}}else{if(sValue=="SUB"){iChResult=ChangeTable.iCellnum-1;
if(iChResult<=0){break
}}else{ChangeTable._chCols(4);
$("cols_val").value=4;
iChResult=0;
break
}}if(iChResult!=0){ChangeTable._chCols(iChResult);
$("cols_val").value=iChResult
}}break;
case"chBorder":if(isFinite(sValue)){if(sValue<=10&&sValue>0){ChangeTable._chBorder(sValue)
}else{alert(Editor._("plugin.table.checkborder"));
$("border_val").value=1;
ChangeTable._chBorder(1)
}}else{var iChResult=0;
if(sValue=="ADD"){iChResult=parseInt(ChangeTable.tbo.cellSpacing)+1;
if(iChResult>=11){break
}}else{if(sValue=="SUB"){iChResult=parseInt(ChangeTable.tbo.cellSpacing)-1;
if(iChResult<0){break
}}else{ChangeTable._chBorder(1);
$("border_val").value=1;
iChResult=0;
break
}}if(iChResult!=0){ChangeTable._chBorder(iChResult);
$("border_val").value=iChResult
}}break;
case"chBorderColor":if(this.checkColor(sValue)){ChangeTable._chBoderColor(sValue)
}else{alert(Editor._("plugin.table.checkcolor"));
var dBorderColor="#B7BBB5";
ChangeTable._chBoderColor(dBorderColor);
$("borderColor").style.backgroundColor=dBorderColor;
$("borderColorCode").value=dBorderColor
}break;
case"chBgColor":if(this.checkColor(sValue)){ChangeTable._chBgColor(sValue)
}else{alert(Editor._("plugin.table.checkcolor"));
var dBgColor="#FFFFFF";
ChangeTable._chBgColor(dBgColor);
$("backColor").style.backgroundColor=dBgColor;
$("backColorCode").value=dBgColor
}break
}},checkColor:function(color_value){var pattern=/^#?[0-9a-fA-F]{6}$/;
if(pattern.test(color_value)){return true
}else{return false
}},actViewcolorpicker:function(sel){this.selCp=sel;
$("table_div_cp").style.margin=((this.selCp==0)?-80:-55)+"px 0 0 10px";
var dp_status=$("table_div_cp").style.display;
if(dp_status=="none"){$("table_div_cp").style.display="block";
$("table_div_cp_bottom").style.display="none"
}else{$("table_div_cp").style.display="none"
}},actViewcolorpicker_tc:function(){this.editor.preserveSelection();
var dp_status=$("table_div_cp_bottom").style.display;
$("tbg_txt_color").style.backgroundColor="#000000";
$("tbg_txt_colorCode").value="#000000";
if(dp_status=="none"){$("table_div_cp_bottom").style.display="block";
if(this.cpCreated){this.cpp.setHSV(0,100,100)
}else{this.cpCreated=true;
this.cpp=new Ku.Colorpicker("cp_table",{onChange:function(c){$("tbg_txt_color").style.backgroundColor="#"+c;
$("tbg_txt_colorCode").value="#"+c
}})
}}else{$("table_div_cp_bottom").style.display="none"
}},actSelcolor:function(bgColor){var selColor=new Object();
var selColorCode=new Object();
var selObj=new String();
this.editor.preserveSelection();
if(this.selCp==0){selColor=$("borderColor").style;
selColorCode=$("borderColorCode");
selObj="chBorderColor"
}else{selColor=$("backColor").style;
selColorCode=$("backColorCode");
selObj="chBgColor"
}var theColor=(bgColor)?bgColor:$("tbg_txt_colorCode").value;
if(this.checkColor(theColor)==false){alert(Editor._("plugin.table.checkcolor"));
this.actClosecp();
return
}selColor.backgroundColor=theColor;
selColorCode.value=theColor;
this.actClosecp();
this.actChange(selObj,selColorCode.value)
},actClosecp:function(){this.editor.preserveSelection();
$("table_div_cp").style.display="none"
},actClosecp2:function(){this.editor.preserveSelection();
$("table_div_cp_bottom").style.display="none"
}}));
Editor.registerPlugin(insertTablePlugin);
function NodeRange(paramWin,paramDoc){if(!paramWin){paramWin=window
}if(!paramDoc){paramDoc=document
}this.win=paramWin;
this.doc=paramDoc;
NodeRangeCommon.apply(this);
if(paramDoc.selection){NodeRangeIE.apply(this)
}else{NodeRangeFF.apply(this)
}}function NodeRangeCommon(){this.id_id=0;
this.getTempId=function(){var id_prefix="temp_hw713";
var id;
do{id=id_prefix+this.id_id;
this.id_id++
}while(this.doc.getElementById(id));
return id
};
this.bookmarkId=this.getTempId();
this.clone=function(){var oClone=new this.constructor(this.win,this.doc);
oClone.sel=this.sel;
oClone.range=this.cloneRange();
return oClone
};
this.findContainer=function(sTagName){var node=this.getCommonAncesterContainer();
while(node&&node.tagName!=sTagName){node=node.parentNode
}return node
};
this.getNodeAtCursor=function(rangeCursor,bBeforeCursor,bStrict){var result=null;
bBeforeCursor=bBeforeCursor?bBeforeCursor:false;
bStrict=bStrict?bStrict:false;
var cursorMarker=this.doc.createElement("SPAN");
cursorMarker=rangeCursor.insertNodeClone(cursorMarker);
var previousSibling=cursorMarker.previousSibling;
var nextSibling=cursorMarker.nextSibling;
cursorMarker.parentNode.removeChild(cursorMarker);
if((previousSibling&&previousSibling.nodeType==3)&&(nextSibling&&nextSibling.nodeType==3)){previousSibling.nodeValue=previousSibling.nodeValue+nextSibling.nodeValue;
nextSibling.parentNode.removeChild(nextSibling);
result=previousSibling
}else{if(bBeforeCursor){if(previousSibling){result=previousSibling
}else{if(!bStrict){result=nextSibling
}}}else{if(nextSibling){result=nextSibling
}else{if(!bStrict){result=previousSibling
}}}}return result
};
this.bookmark=function(){var oBookmark=this.doc.getElementById(this.bookmarkId);
if(oBookmark){this.removeBookmark()
}oBookmark=this.doc.createElement("A");
oBookmark.id=this.bookmarkId;
this.collapseToStart();
this.insertNodeClone(oBookmark)
};
this.moveToBookmark=function(){var oBookmark=this.doc.getElementById(this.bookmarkId);
if(!oBookmark){return
}this.defineRange(oBookmark);
this.select()
};
this.removeBookmark=function(){var oBookmark=this.doc.getElementById(this.bookmarkId);
if(!oBookmark){return
}oBookmark.parentNode.removeChild(oBookmark)
};
this.getStartNode=function(){try{var tmpRange=this.clone();
tmpRange.collapseToStart();
return this.getNodeAtCursor(tmpRange,false)
}catch(e){return null
}};
this.getEndNode=function(){var tmpRange=this.clone();
tmpRange.collapseToEnd();
return this.getNodeAtCursor(tmpRange,true)
};
this.createAndInsertNode=function(tagName){var newNode=this.doc.createElement(tagName);
this.insertNode(newNode);
return newNode
};
this.collapseToStart=function(){this.range.collapse(true)
};
this.collapseToEnd=function(){this.range.collapse(false)
};
this.startMarker;
this.endMarker;
this.firstNode;
this.lastNode;
this.markBothEnds=function(){this.startMarker=this.doc.createElement("SPAN");
this.startMarker.innerHTML="[S-point]";
this.endMarker=this.doc.createElement("SPAN");
this.endMarker.innerHTML="[E-point]";
var rangeStart=this.clone();
var rangeEnd=this.clone();
rangeStart.collapseToStart();
rangeEnd.collapseToEnd();
this.endMarker=rangeEnd.insertNodeClone(this.endMarker);
this.startMarker=rangeStart.insertNodeClone(this.startMarker);
this.firstNode=this.startMarker.nextSibling;
this.lastNode=this.endMarker.previousSibling;
this.defineRange(this.startMarker,this.endMarker)
};
this.unmarkBothEnds=function(){this.startMarker.parentNode.removeChild(this.startMarker);
this.endMarker.parentNode.removeChild(this.endMarker);
this.startMarker=null;
this.endMarker=null
};
this.doGetNodes=function(node,paramFuncFilter){var arrNodes=new Array();
var adding=false;
var funcFilter=paramFuncFilter;
var startMarker=this.startMarker;
var endMarker=this.endMarker;
function addNodes(node){if(node==startMarker){adding=true;
return
}if(node==endMarker){adding=false;
return
}if(adding&&funcFilter(node)){arrNodes.push(node)
}var childNodes=node.childNodes;
if(childNodes!=null){var nodeLength=childNodes.length;
for(var i=0;
i<nodeLength;
i++){addNodes(childNodes.item(i))
}}}addNodes(node);
return arrNodes
};
this.getNodes=function(funcFilter){var selectedElm=new Array();
var allElms=new Array();
if(this.isCollapsed()){return allElms
}if(!funcFilter){funcFilter=function(node){return true
}
}this.markBothEnds();
selectedElm=this.doGetNodes(this.getCommonAncesterContainer(),funcFilter);
this.defineRange(this.startMarker,this.endMarker);
this.unmarkBothEnds();
return selectedElm
};
this.getTextNodes=function(){if(this.range.text==""){return new Array()
}var txtFilter=function(node){if(node.nodeType==3&&node.nodeValue!="\n"&&node.nodeValue!=""){return true
}else{return false
}};
return this.getNodes(txtFilter)
};
this.cleanUpEmptyString=function(node){function isBlank(str){if(!str||str==""){return true
}return false
}var childNode;
for(var i=0;
i<node.childNodes.length;
i++){childNode=node.childNodes[i];
if(childNode.nodeType==3&&isBlank(childNode.nodeValue)){node.removeChild(childNode)
}}};
this.surroundRangeWithNewNode=function(str){var newNode=this.doc.createElement(str);
return this.surroundRange(newNode)
}
}function NodeRangeIE(){this.getType=function(){return this.sel.type
};
this.select=function(){this.range.select()
};
this.getCommonAncesterContainer=function(){return this.range.parentElement()
};
this.cloneRange=function(){return this.range.duplicate()
};
this.insertNodeClone=function(node){var tmpRange=this.range.duplicate();
tmpRange.collapse(true);
var realId=node.id;
var tmpId=this.getTempId();
node.id=tmpId;
this.range.pasteHTML(node.outerHTML);
node=this.doc.getElementById(tmpId);
node.id=realId;
return node
};
this.insertNode=function(node){var placeMarker=this.doc.createElement("A");
placeMarker=this.insertNodeClone(placeMarker);
placeMarker.parentNode.insertBefore(node,placeMarker);
placeMarker.parentNode.removeChild(placeMarker)
};
this.inRange=function(node,bIncludePartlySelected,bStrict){var rangeNode=this.range.duplicate();
rangeNode.moveToElementText(node);
if(!bStrict){rangeNode=this._tidyRange(rangeNode)
}return this.range.inRange(rangeNode)
};
this.isCollapsed=function(){var tempRange=this.range.duplicate();
tempRange.collapse(true);
return tempRange.isEqual(this.range)
};
this.surroundNode=function(surroundingNode,contentNode){contentNode.parentNode.insertBefore(surroundingNode,contentNode);
surroundingNode.appendChild(contentNode);
return surroundingNode
};
this.surroundRange=function(surroundingNode){var realId=surroundingNode.id;
var tmpId=this.getTempId();
surroundingNode.id=tmpId;
surroundingNode.innerHTML=this.range.text;
var tempRange=this.range.duplicate();
this.range.pasteHTML("");
tempRange.collapse(true);
this.range=tempRange;
this.range.pasteHTML(surroundingNode.outerHTML);
surroundingNode=this.doc.getElementById(tmpId);
surroundingNode.id=realId;
try{var lastElm=surroundingNode.lastChild;
var nextElm=surroundingNode.nextSibling;
var isLeftOver=true;
do{if(!lastElm||nextElm.childNodes>1||lastElm.tagName!=nextElm.tagName){isLeftOver=false;
break
}lastElm=lastElm.lastChild;
nextElm=nextElm.firstChild
}while(nextElm);
if(isLeftOver){surroundingNode.nextSibling.parentNode.removeChild(surroundingNode.nextSibling)
}}catch(e){}this.defineRange(surroundingNode);
return surroundingNode
};
this.defineRange=function(selStartNode,selEndNode){if(!selStartNode){return
}if(!selEndNode){selEndNode=selStartNode
}this.setStartBefore(selStartNode);
this.setEndAfter(selEndNode);
this.setStartBefore(selStartNode);
this.setEndAfter(selEndNode)
};
this.cloneSelectedRange=function(){var range=this.sel.createRange();
if(this.sel.type=="Control"){this.range=this.doc.body.createTextRange();
this.defineRange(range(0));
this.select()
}this.range=this.sel.createRange().duplicate()
};
this.setStartBefore=function(node){if(!node){return
}var rangeEnd=this.doc.body.createTextRange();
var selSpan=this.doc.createElement("A");
selSpan.innerHTML="[about_to_select]";
node.parentNode.insertBefore(selSpan,node);
rangeEnd.moveToElementText(selSpan);
this.range.setEndPoint("StartToEnd",rangeEnd);
selSpan.parentNode.removeChild(selSpan)
};
this.setEndAfter=function(node){if(!node){return
}var rangeEnd=this.doc.body.createTextRange();
var selSpan=this.doc.createElement("A");
selSpan.innerHTML="[about_to_select]";
node.parentNode.insertBefore(selSpan,node.nextSibling);
rangeEnd.moveToElementText(selSpan);
this.range.setEndPoint("EndToStart",rangeEnd);
selSpan.parentNode.removeChild(selSpan)
};
this.toString=function(){return this.range.text
};
this.sel=this.doc.selection;
this._tidyRange=function(range){range.moveStart("character",1);
range.moveStart("character",-1);
range.moveEnd("character",1);
range.moveEnd("character",-1);
return range
};
this.cloneSelectedRange();
var thisRef=this
}function NodeRangeFF(){this.sel=this.win.getSelection();
this.range=null;
this.getType=function(){if(this.sel.anchorNode&&this.sel.anchorNode.tagName=="TR"){return"table"
}else{return"text"
}};
this.cloneSelectedRange=function(){this.range=this.doc.createRange();
if(this.sel&&this.sel.rangeCount>0){this.range=this.sel.getRangeAt(0).cloneRange()
}};
this.cloneRange=function(){return this.range.cloneRange()
};
this.insertNodeClone=function(node){var tmpRange=this.cloneRange();
var clonedNode=node.cloneNode(true);
tmpRange.insertNode(clonedNode);
this.cleanUpEmptyString(clonedNode.parentNode);
return clonedNode
};
this.insertNode=function(node){this.range.insertNode(node);
this.cleanUpEmptyString(node.parentNode)
};
this.select=function(){this.sel.removeAllRanges();
this.sel.addRange(this.range)
};
this.getCommonAncesterContainer=function(){return this.range.commonAncestorContainer
};
this.inRange=function(node,bIncludePartlyIncluded,bStrict){var sourceRange=this.doc.createRange();
this.cleanUpEmptyString(node);
if(bStrict){sourceRange.selectNode(node)
}else{sourceRange.setStartBefore(node.firstChild);
sourceRange.setEndAfter(node.lastChild)
}var startToStart=this.range.compareBoundaryPoints(Range.START_TO_START,sourceRange);
var startToEnd=this.range.compareBoundaryPoints(Range.START_TO_END,sourceRange);
var endToStart=this.range.compareBoundaryPoints(Range.END_TO_START,sourceRange);
var endToEnd=this.range.compareBoundaryPoints(Range.END_TO_END,sourceRange);
if((startToStart==0||startToStart==-1)&&(endToEnd==0||endToEnd==1)){return true
}if(bIncludePartlyIncluded){if((startToStart==1||startToStart==0)&&startToEnd==-1){return true
}if(startToEnd==-1&&(endToEnd==0||endToEnd==1)){return true
}}return false
};
this.isCollapsed=function(){return this.range.collapsed
};
this.surroundNode=function(surroundingNode,contentNode){contentNode.parentNode.insertBefore(surroundingNode,contentNode);
surroundingNode.appendChild(contentNode);
return surroundingNode
};
this.surroundRange=function(surroundingNode){this.range.surroundContents(surroundingNode);
return surroundingNode
};
this.defineRange=function(selStartNode,selEndNode){if(!selStartNode){return
}if(!selEndNode){selEndNode=selStartNode
}this.range.setEndAfter(selEndNode);
this.range.setStartBefore(selStartNode)
};
this.toString=function(){return this.range.toString()
};
this.cloneSelectedRange()
}var layoutmanagerPlugin=new (Class.extend(Editor.menuPlugin,{name:"layoutmanager",author:"TarauS",description:"insert layout",preservedSelection:null,sSelectedID:null,bRequest:false,onCreate:function(){},onShow:function(){this.preservedSelection=this.editor.getSelection();
if(this.sSelectedID){$("elLayoutContainer_"+this.sSelectedID).className="";
this.sSelectedID=null
}var i=1;
while(previewImg=$("elPreviewButton_"+((i<10)?"0"+i:i))){previewImg.style.display="block";
this.setOpacity(previewImg,0);
i++
}},setOpacity:function(obj,opacity){obj.style.filter="alpha(opacity="+opacity+")";
obj.style.MozOpacity=opacity/100
},onClose:function(){},actMouseover:function(sTemplateID){this.setOpacity($("elPreviewButton_"+sTemplateID),100);
return false
},actMouseout:function(sTemplateID){this.setOpacity($("elPreviewButton_"+sTemplateID),0);
return false
},actPreviewlayout:function(sTemplateID){var sUrl=this.editor.options.layoutPreviewUrl+(/\?/.test(this.editor.options.layoutPreviewUrl)?"&type="+sTemplateID:"?type="+sTemplateID)+"&no_cache="+(new Date()).getTime();
window.open(sUrl,"wndPreviewLayout")
},actSelectlayout:function(sTemplateID){if(this.sSelectedID){$("elLayoutContainer_"+this.sSelectedID).className=""
}this.sSelectedID=sTemplateID;
$("elLayoutContainer_"+sTemplateID).className="on"
},actInsertlayout:function(){if(!this.sSelectedID){alert(Editor._("plugin.layoutmanager.notselect2"));
return false
}if(this.getSelectedLayout()){alert(Editor._("plugin.layoutmanager.notinsert"));
return false
}var t=this;
var oEditorObject=this.editor;
if(typeof maxImageWidth=="undefined"){maxImageWidth=743
}sUrl=oEditorObject.options.layoutUrl+(/\?/.test(oEditorObject.options.layoutUrl)?"&type="+this.sSelectedID:"?type="+this.sSelectedID)+"&width="+maxImageWidth+"&no_cache="+(new Date()).getTime();
if(this.bRequest){alert(Editor._("plugin.layoutmanager.nowrequesting"));
return false
}else{this.bRequest=true;
new Ajax(sUrl,{onLoad:function(oRequest){if(/NHN_Layout_Main/.test(oRequest.responseText)){oEditorObject.execCommand("inserthtml",null,oRequest.responseText);
t.close()
}else{alert(Editor._("plugin.layoutmanager.notexistfile"))
}t.bRequest=false
}})
}},actCancellayout:function(){var oSelectedLayout=this.getSelectedLayout();
if(oSelectedLayout!=null){if(confirm(Editor._("plugin.layoutmanager.cancel"))){oSelectedLayout.parentNode.removeChild(oSelectedLayout);
this.editor.resizeContentArea(this.editor.options.minHeight);
this.editor.getWindow().focus()
}}else{alert(Editor._("plugin.layoutmanager.notselect"))
}this.close()
},actCloselayout:function(){this.close()
},getSelectedLayout:function(){try{oSelectedLayout=this.preservedSelection.startContainer||this.preservedSelection.endContainer;
while(oSelectedLayout.tagName.toLowerCase()!="table"||oSelectedLayout.className!="NHN_Layout_Main"){if(oSelectedLayout.parentNode==null||oSelectedLayout.tagName.toLowerCase()=="body"){return null
}oSelectedLayout=oSelectedLayout.parentNode
}return oSelectedLayout
}catch(e){return null
}}}));
Editor.registerPlugin(layoutmanagerPlugin);
