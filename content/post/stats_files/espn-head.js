!function(newrelic){if(newrelic){var measure={errCount:0};newrelic.setErrorHandler(function(err){return measure.errCount++,!0}),espn=window.espn||{},espn.measure=measure}}(window.newrelic),window.Modernizr=function(window,document,undefined){function setCss(str){mStyle.cssText=str}function is(obj,type){return typeof obj===type}function contains(str,substr){return!!~(""+str).indexOf(substr)}function testProps(props,prefixed){for(var i in props){var prop=props[i];if(!contains(prop,"-")&&mStyle[prop]!==undefined)return"pfx"!=prefixed||prop}return!1}function testDOMProps(props,obj,elem){for(var i in props){var item=obj[props[i]];if(item!==undefined)return elem===!1?props[i]:is(item,"function")?item.bind(elem||obj):item}return!1}function testPropsAll(prop,prefixed,elem){var ucProp=prop.charAt(0).toUpperCase()+prop.slice(1),props=(prop+" "+cssomPrefixes.join(ucProp+" ")+ucProp).split(" ");return is(prefixed,"string")||is(prefixed,"undefined")?testProps(props,prefixed):(props=(prop+" "+domPrefixes.join(ucProp+" ")+ucProp).split(" "),testDOMProps(props,prefixed,elem))}function webforms(){Modernizr.input=function(props){for(var i=0,len=props.length;i<len;i++)attrs[props[i]]=!!(props[i]in inputElem);return attrs.list&&(attrs.list=!(!document.createElement("datalist")||!window.HTMLDataListElement)),attrs}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "))}var featureName,hasOwnProp,version="2.8.3",Modernizr={},enableClasses=!0,docElement=document.documentElement,mod="modernizr",modElem=document.createElement(mod),mStyle=modElem.style,inputElem=document.createElement("input"),prefixes=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),omPrefixes="Webkit Moz O ms",cssomPrefixes=omPrefixes.split(" "),domPrefixes=omPrefixes.toLowerCase().split(" "),tests={},attrs={},classes=[],slice=classes.slice,injectElementWithStyles=function(rule,callback,nodes,testnames){var style,ret,node,docOverflow,div=document.createElement("div"),body=document.body,fakeBody=body||document.createElement("body");if(parseInt(nodes,10))for(;nodes--;)node=document.createElement("div"),node.id=testnames?testnames[nodes]:mod+(nodes+1),div.appendChild(node);return style=["&#173;",'<style id="s',mod,'">',rule,"</style>"].join(""),div.id=mod,(body?div:fakeBody).innerHTML+=style,fakeBody.appendChild(div),body||(fakeBody.style.background="",fakeBody.style.overflow="hidden",docOverflow=docElement.style.overflow,docElement.style.overflow="hidden",docElement.appendChild(fakeBody)),ret=callback(div,rule),body?div.parentNode.removeChild(div):(fakeBody.parentNode.removeChild(fakeBody),docElement.style.overflow=docOverflow),!!ret},_hasOwnProperty={}.hasOwnProperty;hasOwnProp=is(_hasOwnProperty,"undefined")||is(_hasOwnProperty.call,"undefined")?function(object,property){return property in object&&is(object.constructor.prototype[property],"undefined")}:function(object,property){return _hasOwnProperty.call(object,property)},Function.prototype.bind||(Function.prototype.bind=function(that){var target=this;if("function"!=typeof target)throw new TypeError;var args=slice.call(arguments,1),bound=function(){if(this instanceof bound){var F=function(){};F.prototype=target.prototype;var self=new F,result=target.apply(self,args.concat(slice.call(arguments)));return Object(result)===result?result:self}return target.apply(that,args.concat(slice.call(arguments)))};return bound}),tests.touch=function(){var bool;return"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch?bool=!0:injectElementWithStyles(["@media (",prefixes.join("touch-enabled),("),mod,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(node){bool=9===node.offsetTop}),bool},tests.history=function(){return!(!window.history||!history.pushState)},tests.video=function(){var elem=document.createElement("video"),bool=!1;try{(bool=!!elem.canPlayType)&&(bool=new Boolean(bool),bool.ogg=elem.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),bool.h264=elem.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),bool.webm=elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(e){}return bool},tests.localstorage=function(){try{return localStorage.setItem(mod,mod),localStorage.removeItem(mod),!0}catch(e){return!1}};for(var feature in tests)hasOwnProp(tests,feature)&&(featureName=feature.toLowerCase(),Modernizr[featureName]=tests[feature](),classes.push((Modernizr[featureName]?"":"no-")+featureName));return Modernizr.input||webforms(),Modernizr.addTest=function(feature,test){if("object"==typeof feature)for(var key in feature)hasOwnProp(feature,key)&&Modernizr.addTest(key,feature[key]);else{if(feature=feature.toLowerCase(),Modernizr[feature]!==undefined)return Modernizr;test="function"==typeof test?test():test,"undefined"!=typeof enableClasses&&enableClasses&&(docElement.className+=" "+(test?"":"no-")+feature),Modernizr[feature]=test}return Modernizr},setCss(""),modElem=inputElem=null,Modernizr._version=version,Modernizr._prefixes=prefixes,Modernizr._domPrefixes=domPrefixes,Modernizr._cssomPrefixes=cssomPrefixes,Modernizr.testProp=function(prop){return testProps([prop])},Modernizr.testAllProps=testPropsAll,Modernizr.testStyles=injectElementWithStyles,Modernizr.prefixed=function(prop,obj,elem){return obj?testPropsAll(prop,obj,elem):testPropsAll(prop,"pfx")},docElement.className=docElement.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(enableClasses?" js "+classes.join(" "):""),Modernizr}(this,this.document),function(){window.espn_ui=window.espn_ui||{},window.espn_ui.device={},navigator.userAgent.match(/Chrome/)?window.espn_ui.device.isChrome=!0:navigator.userAgent.match(/Safari/)?window.espn_ui.device.isSafari=!0:navigator.userAgent.match(/Mozilla/)&&(window.espn_ui.device.isFirefox=!0),navigator.userAgent.match(/Windows/)?window.espn_ui.device.isWindows=!0:navigator.userAgent.match(/Android/)?window.espn_ui.device.isAndroid=!0:navigator.userAgent.match(/iP(ad|hone|od)/)&&(window.espn_ui.device.isIos=!0),navigator.userAgent.match(/Mobi/)?(navigator.userAgent.match(/iPad/)?window.espn_ui.device.isTablet=!0:window.espn_ui.device.isMobile=!0,navigator.userAgent.match(/Android (4|3|2)./)&&navigator.userAgent.indexOf("like Gecko")>-1&&navigator.userAgent.indexOf("Chrome")===-1&&(window.espn_ui.device.ttf=!0),navigator.userAgent.match("CriOS")&&(window.espn_ui.device.isChromeiOS=!0)):navigator.userAgent.match(/Tab/)?window.espn_ui.device.isTablet=!0:navigator.userAgent.match(/Android/)?window.espn_ui.device.isTablet=!0:navigator.userAgent.match(/Touch/)&&navigator.userAgent.match(/IE/)&&(window.espn_ui.device.isTablet=!0),window.espn_ui.device.isTouchscreen=function(){return!!window.Modernizr.touch||"maxTouchPoints"in navigator&&navigator.maxTouchPoints>0}()}(),function(){window.espn_ui.device.isMobile?document.documentElement.className+=" mobile-ua ":document.documentElement.className+=" desktop-ua "}(),window.matchMedia||(window.matchMedia=function(){"use strict";var styleMedia=window.styleMedia||window.media;if(!styleMedia){var style=document.createElement("style"),script=document.getElementsByTagName("script")[0],info=null;style.type="text/css",style.id="matchmediajs-test",script.parentNode.insertBefore(style,script),info="getComputedStyle"in window&&window.getComputedStyle(style,null)||style.currentStyle,styleMedia={matchMedium:function(media){var text="@media "+media+"{ #matchmediajs-test { width: 1px; } }";return style.styleSheet?style.styleSheet.cssText=text:style.textContent=text,"1px"===info.width}}}return function(media){return{matches:styleMedia.matchMedium(media||"all"),media:media||"all"}}}()),function(w,doc,image){"use strict";function expose(picturefill){"object"==typeof module&&"object"==typeof module.exports?module.exports=picturefill:"function"==typeof define&&define.amd&&define("picturefill",function(){return picturefill}),"object"==typeof w&&(w.picturefill=picturefill)}function picturefill(opt){var elements,element,parent,firstMatch,candidates,options=opt||{};elements=options.elements||pf.getAllElements();for(var i=0,plen=elements.length;i<plen;i++)if(element=elements[i],parent=element.parentNode,firstMatch=void 0,candidates=void 0,"IMG"===element.nodeName.toUpperCase()&&(element[pf.ns]||(element[pf.ns]={}),options.reevaluate||!element[pf.ns].evaluated)){if(parent&&"PICTURE"===parent.nodeName.toUpperCase()){if(pf.removeVideoShim(parent),firstMatch=pf.getMatch(element,parent),firstMatch===!1)continue}else firstMatch=void 0;(parent&&"PICTURE"===parent.nodeName.toUpperCase()||!pf.sizesSupported&&element.srcset&&regWDesc.test(element.srcset))&&pf.dodgeSrcset(element),firstMatch?(candidates=pf.processSourceSet(firstMatch),pf.applyBestCandidate(candidates,element)):(candidates=pf.processSourceSet(element),(void 0===element.srcset||element[pf.ns].srcset)&&pf.applyBestCandidate(candidates,element)),element[pf.ns].evaluated=!0}}function runPicturefill(){function checkResize(){clearTimeout(resizeTimer),resizeTimer=setTimeout(handleResize,60)}pf.initTypeDetects(),picturefill();var resizeTimer,intervalId=setInterval(function(){if(picturefill(),/^loaded|^i|^c/.test(doc.readyState))return void clearInterval(intervalId)},250),handleResize=function(){picturefill({reevaluate:!0})};w.addEventListener?w.addEventListener("resize",checkResize,!1):w.attachEvent&&w.attachEvent("onresize",checkResize)}if(w.HTMLPictureElement)return void expose(function(){});doc.createElement("picture");var pf=w.picturefill||{},regWDesc=/\s+\+?\d+(e\d+)?w/;pf.ns="picturefill",function(){pf.srcsetSupported="srcset"in image,pf.sizesSupported="sizes"in image,pf.curSrcSupported="currentSrc"in image}(),pf.trim=function(str){return str.trim?str.trim():str.replace(/^\s+|\s+$/g,"")},pf.makeUrl=function(){var anchor=doc.createElement("a");return function(src){return anchor.href=src,anchor.href}}(),pf.restrictsMixedContent=function(){return"https:"===w.location.protocol},pf.matchesMedia=function(media){return w.matchMedia&&w.matchMedia(media).matches},pf.getDpr=function(){return w.devicePixelRatio||1},pf.getWidthFromLength=function(length){var cssValue;if(!length||length.indexOf("%")>-1!=!1||!(parseFloat(length)>0||length.indexOf("calc(")>-1))return!1;length=length.replace("vw","%"),pf.lengthEl||(pf.lengthEl=doc.createElement("div"),pf.lengthEl.style.cssText="border:0;display:block;font-size:1em;left:0;margin:0;padding:0;position:absolute;visibility:hidden",pf.lengthEl.className="helper-from-picturefill-js"),pf.lengthEl.style.width="0px";try{pf.lengthEl.style.width=length}catch(e){}return doc.body.appendChild(pf.lengthEl),cssValue=pf.lengthEl.offsetWidth,cssValue<=0&&(cssValue=!1),doc.body.removeChild(pf.lengthEl),cssValue},pf.detectTypeSupport=function(type,typeUri){var image=new w.Image;return image.onerror=function(){pf.types[type]=!1,picturefill()},image.onload=function(){pf.types[type]=1===image.width,picturefill()},image.src=typeUri,"pending"},pf.types=pf.types||{},pf.initTypeDetects=function(){pf.types["image/jpeg"]=!0,pf.types["image/gif"]=!0,pf.types["image/png"]=!0,pf.types["image/svg+xml"]=doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),pf.types["image/webp"]=pf.detectTypeSupport("image/webp","data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=")},pf.verifyTypeSupport=function(source){var type=source.getAttribute("type");if(null===type||""===type)return!0;var pfType=pf.types[type];return"string"==typeof pfType&&"pending"!==pfType?(pf.types[type]=pf.detectTypeSupport(type,pfType),"pending"):"function"==typeof pfType?(pfType(),"pending"):pfType},pf.parseSize=function(sourceSizeStr){var match=/(\([^)]+\))?\s*(.+)/g.exec(sourceSizeStr);return{media:match&&match[1],length:match&&match[2]}},pf.findWidthFromSourceSize=function(sourceSizeListStr){for(var winningLength,sourceSizeList=pf.trim(sourceSizeListStr).split(/\s*,\s*/),i=0,len=sourceSizeList.length;i<len;i++){var sourceSize=sourceSizeList[i],parsedSize=pf.parseSize(sourceSize),length=parsedSize.length,media=parsedSize.media;if(length&&(!media||pf.matchesMedia(media))&&(winningLength=pf.getWidthFromLength(length)))break}return winningLength||Math.max(w.innerWidth||0,doc.documentElement.clientWidth)},pf.parseSrcset=function(srcset){for(var candidates=[];""!==srcset;){srcset=srcset.replace(/^\s+/g,"");var url,pos=srcset.search(/\s/g),descriptor=null;if(pos!==-1){url=srcset.slice(0,pos);var last=url.slice(-1);if(","!==last&&""!==url||(url=url.replace(/,+$/,""),descriptor=""),srcset=srcset.slice(pos+1),null===descriptor){var descpos=srcset.indexOf(",");descpos!==-1?(descriptor=srcset.slice(0,descpos),srcset=srcset.slice(descpos+1)):(descriptor=srcset,srcset="")}}else url=srcset,srcset="";(url||descriptor)&&candidates.push({url:url,descriptor:descriptor})}return candidates},pf.parseDescriptor=function(descriptor,sizesattr){var resCandidate,sizes=sizesattr||"100vw",sizeDescriptor=descriptor&&descriptor.replace(/(^\s+|\s+$)/g,""),widthInCssPixels=pf.findWidthFromSourceSize(sizes);if(sizeDescriptor)for(var splitDescriptor=sizeDescriptor.split(" "),i=splitDescriptor.length-1;i>=0;i--){var curr=splitDescriptor[i],lastchar=curr&&curr.slice(curr.length-1);if("h"!==lastchar&&"w"!==lastchar||pf.sizesSupported){if("x"===lastchar){var res=curr&&parseFloat(curr,10);resCandidate=res&&!isNaN(res)?res:1}}else resCandidate=parseFloat(parseInt(curr,10)/widthInCssPixels)}return resCandidate||1},pf.getCandidatesFromSourceSet=function(srcset,sizes){for(var candidates=pf.parseSrcset(srcset),formattedCandidates=[],i=0,len=candidates.length;i<len;i++){var candidate=candidates[i];formattedCandidates.push({url:candidate.url,resolution:pf.parseDescriptor(candidate.descriptor,sizes)})}return formattedCandidates},pf.dodgeSrcset=function(img){img.srcset&&(img[pf.ns].srcset=img.srcset,img.srcset="",img.setAttribute("data-pfsrcset",img[pf.ns].srcset))},pf.processSourceSet=function(el){var srcset=el.getAttribute("srcset"),sizes=el.getAttribute("sizes"),candidates=[];return"IMG"===el.nodeName.toUpperCase()&&el[pf.ns]&&el[pf.ns].srcset&&(srcset=el[pf.ns].srcset),srcset&&(candidates=pf.getCandidatesFromSourceSet(srcset,sizes)),candidates},pf.backfaceVisibilityFix=function(picImg){var style=picImg.style||{},WebkitBackfaceVisibility="webkitBackfaceVisibility"in style,currentZoom=style.zoom;WebkitBackfaceVisibility&&(style.zoom=".999",WebkitBackfaceVisibility=picImg.offsetWidth,style.zoom=currentZoom)},pf.setIntrinsicSize=function(){var urlCache={},setSize=function(picImg,width,res){width&&picImg.setAttribute("width",parseInt(width/res,10))};return function(picImg,bestCandidate){var img;picImg[pf.ns]&&!w.pfStopIntrinsicSize&&(void 0===picImg[pf.ns].dims&&(picImg[pf.ns].dims=picImg.getAttribute("width")||picImg.getAttribute("height")),picImg[pf.ns].dims||(bestCandidate.url in urlCache?setSize(picImg,urlCache[bestCandidate.url],bestCandidate.resolution):(img=doc.createElement("img"),img.onload=function(){if(urlCache[bestCandidate.url]=img.width,!urlCache[bestCandidate.url])try{doc.body.appendChild(img),urlCache[bestCandidate.url]=img.width||img.offsetWidth,doc.body.removeChild(img)}catch(e){}picImg.src===bestCandidate.url&&setSize(picImg,urlCache[bestCandidate.url],bestCandidate.resolution),picImg=null,img.onload=null,img=null},img.src=bestCandidate.url)))}}(),pf.applyBestCandidate=function(candidates,picImg){var candidate,length,bestCandidate;candidates.sort(pf.ascendingSort),length=candidates.length,bestCandidate=candidates[length-1];for(var i=0;i<length;i++)if(candidate=candidates[i],candidate.resolution>=pf.getDpr()){bestCandidate=candidate;break}bestCandidate&&(bestCandidate.url=pf.makeUrl(bestCandidate.url),picImg.src!==bestCandidate.url&&(pf.restrictsMixedContent()&&"http:"===bestCandidate.url.substr(0,"http:".length).toLowerCase()?void 0!==window.console:(picImg.src=bestCandidate.url,pf.curSrcSupported||(picImg.currentSrc=picImg.src),pf.backfaceVisibilityFix(picImg))),pf.setIntrinsicSize(picImg,bestCandidate))},pf.ascendingSort=function(a,b){return a.resolution-b.resolution},pf.removeVideoShim=function(picture){var videos=picture.getElementsByTagName("video");if(videos.length){for(var video=videos[0],vsources=video.getElementsByTagName("source");vsources.length;)picture.insertBefore(vsources[0],video);video.parentNode.removeChild(video)}},pf.getAllElements=function(){for(var elems=[],imgs=doc.getElementsByTagName("img"),h=0,len=imgs.length;h<len;h++){var currImg=imgs[h];("PICTURE"===currImg.parentNode.nodeName.toUpperCase()||null!==currImg.getAttribute("srcset")||currImg[pf.ns]&&null!==currImg[pf.ns].srcset)&&elems.push(currImg)}return elems},pf.getMatch=function(img,picture){for(var match,sources=picture.childNodes,j=0,slen=sources.length;j<slen;j++){var source=sources[j];if(1===source.nodeType){if(source===img)return match;if("SOURCE"===source.nodeName.toUpperCase()){null!==source.getAttribute("src")&&void 0!==typeof console;var media=source.getAttribute("media");if(source.getAttribute("srcset")&&(!media||pf.matchesMedia(media))){var typeSupported=pf.verifyTypeSupport(source);if(typeSupported===!0){match=source;break}if("pending"===typeSupported)return!1}}}}return match},runPicturefill(),picturefill._=pf,expose(picturefill)}(window,window.document,new window.Image),function(window,document){function _checkScrollbars(){if(style=html.style.overflowY,html.style.overflowY="scroll",scrollbarWidth=window.innerWidth-html.clientWidth,html.style.overflowY=style,addClass=scrollbarWidth>0,"WebkitAppearance"in html.style){var chromeVersion,chromeRX=/Chrome\/(\d*?\.\d*?\.\d*?\.\d*?)\s/g,chrome=navigator.userAgent.match(chromeRX);chrome?(chrome=chrome[0].replace(chromeRX,"$1"),chromeVersion=chrome.split("."),chromeVersion[0]=parseInt(chromeVersion[0],10),chromeVersion[2]=parseInt(chromeVersion[2],10),chromeVersion[3]=parseInt(chromeVersion[3],10),chromeVersion[0]<=29&&(29===chromeVersion[0]&&chromeVersion[2]<1548&&chromeVersion[3]<57?addClass=!1:chromeVersion[0]<29&&(addClass=!1))):addClass=!1}if(addClass===!0)return html.className=html.className+" scrollbars-"+scrollbarWidth,!0}if(window.espn_ui.device.isMobile)return!1;var scrollbarWidth,style,html=document.documentElement,addClass=!1,check=_checkScrollbars();check!==!0&&document.addEventListener("DOMContentLoaded",function(){_checkScrollbars()})}(this,this.document),function(window){var espn=window.espn||{};espn.loadType="loadEnd"}(this),espn=window.espn||{},espn.nativeBridge=function(isMobileOrTablet){var isAndroid,isWindows,debug,messageQueue=[],isProcessing=!1,processId=null,_q={},log=window.console&&window.console.log.bind(window.console);location.search.replace(/([^?=&]+)(=([^&#]*))?/g,function($0,$1,$2,$3){_q[$1]=$3}),isAndroid="android"===_q.platform,isWindows="windows"===_q.platform,debug="true"===_q.debug;var _constructMessage=function(message,params,callback){var JSONMessage={commandName:message,params:params,callBack:callback};return JSONMessage},_processQueue=function(){isProcessing||(isProcessing=!0,setTimeout(_processMessages,0))},_processMessages=function(){var message=messageQueue.shift();message&&(message=_createCallback(message),_transmitMessage(message),messageQueue.length||(isProcessing=!1),isProcessing&&isWindows&&(processId=setTimeout(_processMessages,200)))},_createCallback=function(message){var callback=message.callBack;return message.callBack&&""!==message.callBack?messageQueue.length?espn.nativeBridge.callback=function(arg){_handleCallback(callback,arg),_processMessages()}:espn.nativeBridge.callback=function(arg){_handleCallback(callback,arg),espn.nativeBridge.callback=function(){}}:messageQueue.length?espn.nativeBridge.callback=function(){isWindows&&clearTimeout(processId),_processMessages()}:espn.nativeBridge.callback=function(){},message.callBack="espn.nativeBridge.callback",message},_handleCallback=function(callback,arg){try{isWindows&&clearTimeout(processId),"function"==typeof callback?callback(arg):"string"==typeof callback&&window[callback](arg)}catch(e){log("nativeBridge callback error:",e)}},_transmitMessage=function(message){if(debug&&log("espn.nativeBridge",message,window.espn_ui.webview,isMobileOrTablet),"undefined"!=typeof message&&window.espn_ui.webview&&isMobileOrTablet)if(isAndroid)try{window.linklanguage.sendJSONMessage(JSON.stringify(message))}catch(e){log("nativeBridge send failed",message),espn.nativeBridge.callback()}else if(isWindows)try{window.external.notify(JSON.stringify(message))}catch(e){log("nativeBridge send failed",message)}else if("undefined"!=typeof window.webkit)try{window.webkit.messageHandlers.espnWebview.postMessage(message)}catch(e){log("nativeBridge send failed",message)}else window.location=JSON.stringify(message)},_sendMessage=function(message){messageQueue.push(message),_processQueue()};return{getData:function(dataName,callback){var native=espn["native"];"undefined"!=typeof native?("undefined"==typeof native[dataName]||"true"!==native[dataName]&&"false"!==native[dataName]||(native[dataName]="true"===native[dataName]),callback(native[dataName])):espn.nativeBridge.sendMessage(dataName,{},callback)},sendMessage:function(message,params,callback){_sendMessage(_constructMessage(message,params,callback))},loadMinibrowser:function(URL){if(isAndroid)try{debug&&log("espn.nativeBridge","loadMinibrowserWithURL",URL),window.linklanguage.loadMinibrowserWithURL(URL)}catch(e){log("nativeBridge send failed","loadMinibrowserWithURL")}else _sendMessage(_constructMessage("loadMinibrowserWithURL",{url:URL,link:URL}))}}}(window.espn_ui.device.isMobile||window.espn_ui.device.isTablet),function(){function updateMobileRS(acct){var agent,appId=_appMap[_qparams.appsrc]||[],id=appId[0]||null,isRollup="undefined"!=typeof appId[1]&&appId[1],agentName=appId[2]||null,findAgent=function(regexp){return!!regexp.test(navigator.userAgent)};return acct.split(",")[0].replace(/ /g,""),id&&(acct=id,isRollup===!0&&(acct+=",wdgwespma")),agentName&&(findAgent(/iPad/i)?agent="ipad":findAgent(/iP(?:hone|od)/i)?agent="iphone":findAgent(/Android/i)&&(agent="android"),agent&&(agent=[agentName,agent].join(":"),"undefined"!=typeof window._espntrack?(window._espntrack.push({prop73:agent}),window._espntrack.push({eVar73:agent})):window._espntrack=[{prop73:agent},{eVar73:agent}])),acct}window.espn=window.espn||{};var _qparams={},_appMap=(location.search.replace(/([^?=&]+)(=([^&#]*))?/g,function($0,$1,$2,$3){_qparams[$1]=$3}),{fc:["wdgwespmafcapps",!1,"ma:espn:espnfc"],sc:["wdgwespmascapps",!1,"ma:espn:scorecenter"],cbb:["wdgwespmabbapps",!1,"ma:espn:bracketbound"],cfb:["wdgwespmacollege",!1,"ma:espn:collegefootball"],fba:["wdgwespmafbaapps",!1,"ma:espn:fantasybasketball"],ffl:["wdgwespmafflapps",!1,"ma:espn:ffl"],fhl:["wdgwespmafhlapps",!1,"ma:espn:fantasyhockey"],flb:["wdgwespmaflbapps",!1,"ma:espn:fantasybaseball"],ocho:["wdgespappdesktop",!1,"espn:ocho"],test:["wdgesptest",!1,"ma:espn:test"],scfeedapp:["wdgwespmascfeed",!1,"ma:espn:scfeed"]});window.setReportSuite=function(account){var acct="wdgespcom",addglobal="undefined"==typeof window.addglobalsuite||window.addglobalsuite,gi=/^wdgesp(star|360europe|360prodigymexico|360terrabrazil|360vtrchile|australia|scrum|classiceurope|scorecenter|cricinfo|brazil|nasn|racinglive|fantasy,wdgespwc2010|footytips)$/,gi2=/^wdgespint|wdgesp(deportes|soccernet|australia|india)/,gx=/wdgespge/,g=/wdgesp(deportes|soccernet)|^wdgespfantasy,wdgespwc2010,wdgespinternational|^wdgespindia,wdgespinternational|^wdgespaustralia,wdgespinternational$/,gmx=/wdgwespma|wdgwespsoccernet|^(wdgesp(test|appdesktop)|wdgwesp(mobileweb|espnw|deportes))$/;return"undefined"!=typeof window.s_omni&&(void 0!==window._espntrack&&void 0!==window._espntrack.account?acct=window._espntrack.account:"undefined"!=typeof window.s_account?acct=window.s_account:account&&account&&(acct=account)),acct=acct.replace(/^\s+|\s+$|\s+/,""),gi.test(acct)||gi2.test(acct)?(acct+=",wdgespinternational",(!gx.test(acct)||addglobal&&g.test(acct))&&(acct+=",wdgespge")):addglobal&&!gmx.test(acct)&&(acct+=",wdgespge"),"undefined"!=typeof _qparams.appsrc&&(acct=updateMobileRS(acct)),acct}}();