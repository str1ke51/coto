(function(t){function i(i){for(var n,s,a=i[0],h=i[1],l=i[2],u=0,g=[];u<a.length;u++)s=a[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&g.push(o[s][0]),o[s]=0;for(n in h)Object.prototype.hasOwnProperty.call(h,n)&&(t[n]=h[n]);c&&c(i);while(g.length)g.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var t,i=0;i<r.length;i++){for(var e=r[i],n=!0,a=1;a<e.length;a++){var h=e[a];0!==o[h]&&(n=!1)}n&&(r.splice(i--,1),t=s(s.s=e[0]))}return t}var n={},o={app:0},r=[];function s(i){if(n[i])return n[i].exports;var e=n[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=n,s.d=function(t,i,e){s.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,i){if(1&i&&(t=s(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var n in t)s.d(e,n,function(i){return t[i]}.bind(null,n));return e},s.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(i,"a",i),i},s.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},s.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],h=a.push.bind(a);a.push=i,a=a.slice();for(var l=0;l<a.length;l++)i(a[l]);var c=h;r.push(["1430","chunk-vendors"]),e()})({"034f":function(t,i,e){"use strict";var n=e("e2a1"),o=e.n(n);o.a},1430:function(t,i,e){"use strict";e.r(i);e("cadf"),e("551c"),e("f751"),e("097d");var n,o,r,s,a=e("2b0e"),h=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{class:{"has-mouse":t.hasMouse},attrs:{id:"app"},on:{touchstart:function(i){t.hasMouse=!1}}},[e("Ribbon",{attrs:{text:"Fork me on GitHub",url:"https://github.com/ts1/flipbook-vue"}}),e("Flipbook",{ref:"flipbook",staticClass:"flipbook",attrs:{pages:t.pages,pagesHiRes:t.pagesHiRes,startPage:t.pageNum},on:{"flip-left-start":t.onFlipLeftStart,"flip-left-end":t.onFlipLeftEnd,"flip-right-start":t.onFlipRightStart,"flip-right-end":t.onFlipRightEnd,"zoom-start":t.onZoomStart,"zoom-end":t.onZoomEnd},scopedSlots:t._u([{key:"default",fn:function(i){return[e("div",{staticClass:"action-bar"},[e("left-icon",{staticClass:"btn left",class:{disabled:!i.canFlipLeft},on:{click:i.flipLeft}}),e("plus-icon",{staticClass:"btn plus",class:{disabled:!i.canZoomIn},on:{click:i.zoomIn}}),e("span",{staticClass:"page-num"},[t._v("\n        Page "+t._s(i.page)+" of "+t._s(i.numPages)+"\n      ")]),e("minus-icon",{staticClass:"btn minus",class:{disabled:!i.canZoomOut},on:{click:i.zoomOut}}),e("right-icon",{staticClass:"btn right",class:{disabled:!i.canFlipRight},on:{click:i.flipRight}})],1)]}}])}),t._m(0)],1)},l=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("p",{staticClass:"credit"},[t._v("\n    Photos from\n    "),e("a",{attrs:{href:"https://unsplash.com/",target:"_blank"}},[t._v("Unsplash")]),t._v(".\n  ")])}],c=(e("d48d"),e("a5bc")),u=e("71f6"),g=e("ef7a"),f=e("cd27"),p=e("55fe"),d=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[t._t("default",null,null,{canFlipLeft:t.canFlipLeft,canFlipRight:t.canFlipRight,canZoomIn:t.canZoomIn,canZoomOut:t.canZoomOut,page:t.page,numPages:t.numPages,flipLeft:t.flipLeft,flipRight:t.flipRight,zoomIn:t.zoomIn,zoomOut:t.zoomOut}),e("div",{ref:"viewport",staticClass:"viewport",class:{zoom:t.zooming||t.zoom>1,"drag-to-scroll":t.dragToScroll},style:{cursor:"grabbing"==t.cursor?"grabbing":"auto"},on:{touchmove:t.onTouchMove,pointermove:t.onPointerMove,mousemove:t.onMouseMove,touchend:t.onTouchEnd,touchcancel:t.onTouchEnd,pointerup:t.onPointerUp,pointercancel:t.onPointerUp,mouseup:t.onMouseUp,wheel:t.onWheel}},[e("div",{staticClass:"container",style:{transform:"scale("+t.zoom+")"}},[e("div",{staticClass:"click-to-flip left",style:{cursor:t.canFlipLeft?"pointer":"auto"},on:{click:t.flipLeft}}),e("div",{staticClass:"click-to-flip right",style:{cursor:t.canFlipRight?"pointer":"auto"},on:{click:t.flipRight}}),e("div",{style:{transform:"translate3d("+t.centerOffsetSmoothed+"px, 0, 0)"}},[t.showLeftPage?e("img",{staticClass:"page fixed",style:{width:t.pageWidth+"px",height:t.pageHeight+"px",left:t.xMargin+"px",top:t.yMargin+"px"},attrs:{src:t.pageUrl(t.leftPage,!0)},on:{load:function(i){return t.didLoadImage(i)}}}):t._e(),t.showRightPage?e("img",{staticClass:"page fixed",style:{width:t.pageWidth+"px",height:t.pageHeight+"px",left:t.viewWidth/2+"px",top:t.yMargin+"px"},attrs:{src:t.pageUrl(t.rightPage,!0)},on:{load:function(i){return t.didLoadImage(i)}}}):t._e(),e("div",{style:{opacity:t.flip.opacity}},t._l(t.polygonArray,(function(i){var n=i[0],o=i[1],r=i[2],s=i[3],a=i[4],h=i[5];return e("div",{key:n,staticClass:"polygon",class:{blank:!o},style:{backgroundImage:o,backgroundSize:t.polygonBgSize,backgroundPosition:s,width:t.polygonWidth,height:t.polygonHeight,transform:a,zIndex:h}},[e("div",{directives:[{name:"show",rawName:"v-show",value:r.length,expression:"lighting.length"}],staticClass:"lighting",style:{backgroundImage:r}})])})),0),e("div",{staticClass:"bounding-box",style:{left:t.boundingLeft+"px",top:t.yMargin+"px",width:t.boundingRight-t.boundingLeft+"px",height:t.pageHeight+"px",cursor:t.cursor},on:{touchstart:t.onTouchStart,pointerdown:t.onPointerDown,mousedown:t.onMouseDown}})])])])],2)},m=[],v=(e("ac6a"),e("456d"),e("6b54"),e("c5f6"),e("75fc")),b=e("d225"),w=e("b0b4"),y=e("6e37"),P=function(){function t(i){Object(b["a"])(this,t),i?i.m?this.m=Object(v["a"])(i.m):this.m=Object(v["a"])(i):this.m=Object(y["a"])()}return Object(w["a"])(t,[{key:"clone",value:function(){return new t(this)}},{key:"multiply",value:function(t){return this.m=Object(y["b"])(this.m,t)}},{key:"perspective",value:function(t){return this.multiply(Object(y["c"])(t))}},{key:"transformX",value:function(t){return(t*this.m[0]+this.m[12])/(t*this.m[3]+this.m[15])}},{key:"translate",value:function(t,i){return this.multiply(Object(y["f"])(t,i))}},{key:"translate3d",value:function(t,i,e){return this.multiply(Object(y["g"])(t,i,e))}},{key:"rotateY",value:function(t){return this.multiply(Object(y["d"])(t))}},{key:"toString",value:function(){return Object(y["e"])(this.m)}}]),t}();o=function(t){return Math.pow(t,2)},s=function(t){return 1-o(1-t)},r=function(t){return t<.5?o(2*t)/2:.5+s(2*(t-.5))/2},n=/Trident/.test(navigator.userAgent);var x={props:{pages:{type:Array,required:!0},pagesHiRes:{type:Array,default:function(){return[]}},flipDuration:{type:Number,default:1e3},zoomDuration:{type:Number,default:500},zooms:{type:Array,default:function(){return[1,2,4]}},perspective:{type:Number,default:2400},nPolygons:{type:Number,default:10},ambient:{type:Number,default:.4},gloss:{type:Number,default:.6},swipeMin:{type:Number,default:3},singlePage:{type:Boolean,default:!1},forwardDirection:{validator:function(t){return"right"===t||"left"===t},default:"right"},centering:{type:Boolean,default:!0},startPage:{type:Number,default:null}},data:function(){return{viewWidth:0,viewHeight:0,imageWidth:null,imageHeight:null,displayedPages:1,nImageLoad:0,nImageLoadTrigger:0,imageLoadCallback:null,currentPage:0,firstPage:0,secondPage:1,zoomIndex:0,zoom:1,zooming:!1,touchStartX:null,touchStartY:null,maxMove:0,activeCursor:null,hasTouchEvents:!1,hasPointerEvents:!1,minX:Infinity,maxX:-Infinity,preloadedImages:{},flip:{progress:0,direction:null,frontImage:null,backImage:null,auto:!1,opacity:1},currentCenterOffset:null,animatingCenter:!1,startScrollLeft:0,startScrollTop:0,scrollLeft:0,scrollTop:0}},computed:{canFlipLeft:function(){return"left"===this.forwardDirection?this.canGoForward:this.canGoBack},canFlipRight:function(){return"right"===this.forwardDirection?this.canGoForward:this.canGoBack},canZoomIn:function(){return!this.zooming&&this.zoomIndex<this.zooms_.length-1},canZoomOut:function(){return!this.zooming&&this.zoomIndex>0},numPages:function(){return null===this.pages[0]?this.pages.length-1:this.pages.length},page:function(){return null!==this.pages[0]?this.currentPage+1:Math.max(1,this.currentPage)},zooms_:function(){return this.zooms||[1]},canGoForward:function(){return!this.flip.direction&&this.currentPage<this.pages.length-this.displayedPages},canGoBack:function(){return!this.flip.direction&&this.currentPage>=this.displayedPages&&!(1===this.displayedPages&&!this.pageUrl(this.firstPage-1))},leftPage:function(){return"right"===this.forwardDirection||1===this.displayedPages?this.firstPage:this.secondPage},rightPage:function(){return"left"===this.forwardDirection?this.firstPage:this.secondPage},showLeftPage:function(){return this.pageUrl(this.leftPage)},showRightPage:function(){return this.pageUrl(this.rightPage)&&2===this.displayedPages},cursor:function(){return this.activeCursor?this.activeCursor:n?"auto":this.canZoomIn?"zoom-in":this.canZoomOut?"zoom-out":"grab"},pageScale:function(){var t,i,e,n;return i=this.viewWidth/this.displayedPages,e=i/this.imageWidth,n=this.viewHeight/this.imageHeight,t=e<n?e:n,t<1?t:1},pageWidth:function(){return Math.round(this.imageWidth*this.pageScale)},pageHeight:function(){return Math.round(this.imageHeight*this.pageScale)},xMargin:function(){return(this.viewWidth-this.pageWidth*this.displayedPages)/2},yMargin:function(){return(this.viewHeight-this.pageHeight)/2},polygonWidth:function(){var t;return t=this.pageWidth/this.nPolygons,t=Math.ceil(t+1/this.zoom),t+"px"},polygonHeight:function(){return this.pageHeight+"px"},polygonBgSize:function(){return"".concat(this.pageWidth,"px ").concat(this.pageHeight,"px")},polygonArray:function(){return this.makePolygonArray("front").concat(this.makePolygonArray("back"))},boundingLeft:function(){var t;return 1===this.displayedPages?this.xMargin:(t=this.pageUrl(this.leftPage)?this.xMargin:this.viewWidth/2,t<this.minX?t:this.minX)},boundingRight:function(){var t;return 1===this.displayedPages?this.viewWidth-this.xMargin:(t=this.pageUrl(this.rightPage)?this.viewWidth-this.xMargin:this.viewWidth/2,t>this.maxX?t:this.maxX)},centerOffset:function(){var t;return t=this.centering?Math.round(this.viewWidth/2-(this.boundingLeft+this.boundingRight)/2):0,null===this.currentCenterOffset&&null!==this.imageWidth&&(this.currentCenterOffset=t),t},centerOffsetSmoothed:function(){return Math.round(this.currentCenterOffset)},dragToScroll:function(){return!this.hasTouchEvents},scrollLeftMin:function(){var t;return t=(this.boundingRight-this.boundingLeft)*this.zoom,t<this.viewWidth?(this.boundingLeft+this.centerOffsetSmoothed)*this.zoom-(this.viewWidth-t)/2:(this.boundingLeft+this.centerOffsetSmoothed)*this.zoom},scrollLeftMax:function(){var t;return t=(this.boundingRight-this.boundingLeft)*this.zoom,t<this.viewWidth?(this.boundingLeft+this.centerOffsetSmoothed)*this.zoom-(this.viewWidth-t)/2:(this.boundingRight+this.centerOffsetSmoothed)*this.zoom-this.viewWidth},scrollTopMin:function(){var t;return t=this.pageHeight*this.zoom,t<this.viewHeight?this.yMargin*this.zoom-(this.viewHeight-t)/2:this.yMargin*this.zoom},scrollTopMax:function(){var t;return t=this.pageHeight*this.zoom,t<this.viewHeight?this.yMargin*this.zoom-(this.viewHeight-t)/2:(this.yMargin+this.pageHeight)*this.zoom-this.viewHeight},scrollLeftLimited:function(){return Math.min(this.scrollLeftMax,Math.max(this.scrollLeftMin,this.scrollLeft))},scrollTopLimited:function(){return Math.min(this.scrollTopMax,Math.max(this.scrollTopMin,this.scrollTop))}},mounted:function(){return window.addEventListener("resize",this.onResize,{passive:!0}),this.onResize(),this.preloadImages(),this.zoom=this.zooms_[0],this.goToPage(this.startPage)},beforeDestroy:function(){return window.removeEventListener("resize",this.onResize,{passive:!0})},methods:{onResize:function(){var t;if(t=this.$refs.viewport,t)return this.viewWidth=t.clientWidth,this.viewHeight=t.clientHeight,this.displayedPages=this.viewWidth>this.viewHeight&&!this.singlePage?2:1,2===this.displayedPages&&(this.currentPage&=-2),this.fixFirstPage(),this.minX=Infinity,this.maxX=-Infinity},fixFirstPage:function(){if(1===this.displayedPages&&0===this.currentPage&&this.pages.length&&!this.pageUrl(0))return this.currentPage++},pageUrl:function(t){var i,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e&&this.zoom>1&&!this.zooming&&(i=this.pagesHiRes[t],i)?i:this.pages[t]||null},flipLeft:function(){if(this.canFlipLeft)return this.flipStart("left",!0)},flipRight:function(){if(this.canFlipRight)return this.flipStart("right",!0)},makePolygonArray:function(t){var i,e,n,o,r,s,a,h,l,c,u,g,f,p,d,m,v,b,w,y,x,M,z,k,I,L,S;if(!this.flip.direction)return[];for(m=this.flip.progress,r=this.flip.direction,1===this.displayedPages&&r!==this.forwardDirection&&(m=1-m,r=this.forwardDirection),this.flip.opacity=1===this.displayedPages&&m>.7?1-(m-.7)/.3:1,a="front"===t?this.flip.frontImage:this.flip.backImage,i=a&&"url('".concat(a,"')"),d=this.pageWidth/this.nPolygons,p=this.xMargin,u=!1,1===this.displayedPages?"right"===this.forwardDirection?"back"===t&&(u=!0,p=this.xMargin-this.pageWidth):"left"===r?"back"===t?p=this.pageWidth-this.xMargin:u=!0:"front"===t?p=this.pageWidth-this.xMargin:u=!0:"left"===r?"back"===t?p=this.viewWidth/2:u=!0:"front"===t?p=this.viewWidth/2:u=!0,g=new P,g.translate(this.viewWidth/2),g.perspective(this.perspective),g.translate(-this.viewWidth/2),g.translate(p,this.yMargin),f=0,m>.5&&(f=2*-(m-.5)*180),"left"===r&&(f=-f),"back"===t&&(f+=180),f&&(u&&g.translate(this.pageWidth),g.rotateY(f),u&&g.translate(-this.pageWidth)),z=m<.5?2*m*Math.PI:(1-2*(m-.5))*Math.PI,0===z&&(z=1e-9),w=this.pageWidth/z,b=0,n=z/this.nPolygons,M=n/2/Math.PI*180,o=n/Math.PI*180,u&&(M=-z/Math.PI*180+o/2),"back"===t&&(M=-M,o=-o),this.minX=Infinity,this.maxX=-Infinity,x=[],s=h=0,y=this.nPolygons;0<=y?h<y:h>y;s=0<=y?++h:--h)e="".concat(s/(this.nPolygons-1)*100,"% 0px"),c=g.clone(),v=u?z-b:b,k=Math.sin(v)*w,u&&(k=this.pageWidth-k),S=(1-Math.cos(v))*w,"back"===t&&(S=-S),c.translate3d(k,0,S),c.rotateY(-M),I=c.transformX(0),L=c.transformX(d),this.maxX=Math.max(Math.max(I,L),this.maxX),this.minX=Math.min(Math.min(I,L),this.minX),l=this.computeLighting(f-M,o),b+=n,M+=o,x.push([t+s,i,l,e,c.toString(),Math.abs(Math.round(S))]);return x},computeLighting:function(t,i){var e,o,r,s,a,h,l;return a=[],h=[-.5,-.25,0,.25,.5],this.ambient<1&&(r=1-this.ambient,s=h.map((function(e){return(1-Math.cos((t-i*e)/180*Math.PI))*r})),a.push("linear-gradient(to right,\n  rgba(0, 0, 0, ".concat(s[0],"),\n  rgba(0, 0, 0, ").concat(s[1],") 25%,\n  rgba(0, 0, 0, ").concat(s[2],") 50%,\n  rgba(0, 0, 0, ").concat(s[3],") 75%,\n  rgba(0, 0, 0, ").concat(s[4],"))"))),this.gloss>0&&!n&&(e=30,o=200,l=h.map((function(n){return Math.max(Math.pow(Math.cos((t+e-i*n)/180*Math.PI),o),Math.pow(Math.cos((t-e-i*n)/180*Math.PI),o))})),a.push("linear-gradient(to right,\n  rgba(255, 255, 255, ".concat(l[0]*this.gloss,"),\n  rgba(255, 255, 255, ").concat(l[1]*this.gloss,") 25%,\n  rgba(255, 255, 255, ").concat(l[2]*this.gloss,") 50%,\n  rgba(255, 255, 255, ").concat(l[3]*this.gloss,") 75%,\n  rgba(255, 255, 255, ").concat(l[4]*this.gloss,"))"))),a.join(",")},flipStart:function(t,i){var e=this;return t!==this.forwardDirection?1===this.displayedPages?(this.flip.frontImage=this.pageUrl(this.currentPage-1),this.flip.backImage=null):(this.flip.frontImage=this.pageUrl(this.firstPage),this.flip.backImage=this.pageUrl(this.currentPage-this.displayedPages+1)):1===this.displayedPages?(this.flip.frontImage=this.pageUrl(this.currentPage),this.flip.backImage=null):(this.flip.frontImage=this.pageUrl(this.secondPage),this.flip.backImage=this.pageUrl(this.currentPage+this.displayedPages)),this.flip.direction=t,this.flip.progress=0,requestAnimationFrame((function(){return requestAnimationFrame((function(){if(e.flip.direction!==e.forwardDirection?2===e.displayedPages&&(e.firstPage=e.currentPage-e.displayedPages):1===e.displayedPages?e.firstPage=e.currentPage+e.displayedPages:e.secondPage=e.currentPage+1+e.displayedPages,i)return e.flipAuto(!0)}))}))},flipAuto:function(t){var i,e,n,o,s=this;return o=Date.now(),e=this.flipDuration*(1-this.flip.progress),n=this.flip.progress,this.flip.auto=!0,this.$emit("flip-".concat(this.flip.direction,"-start"),this.page),i=function(){return requestAnimationFrame((function(){var a,h;return h=Date.now()-o,a=n+h/e,a>1&&(a=1),s.flip.progress=t?r(a):a,a<1?i():(s.flip.direction!==s.forwardDirection?s.currentPage-=s.displayedPages:s.currentPage+=s.displayedPages,s.$emit("flip-".concat(s.flip.direction,"-end"),s.page),1===s.displayedPages&&s.flip.direction===s.forwardDirection?s.flip.direction=null:s.onImageLoad(1,(function(){return s.flip.direction=null})),s.flip.auto=!1)}))},i()},flipRevert:function(){var t,i,e,n,o=this;return n=Date.now(),i=this.flipDuration*this.flip.progress,e=this.flip.progress,this.flip.auto=!0,t=function(){return requestAnimationFrame((function(){var r,s;return s=Date.now()-n,r=e-e*s/i,r<0&&(r=0),o.flip.progress=r,r>0?t():(o.firstPage=o.currentPage,o.secondPage=o.currentPage+1,1===o.displayedPages&&o.flip.direction!==o.forwardDirection?o.flip.direction=null:o.onImageLoad(1,(function(){return o.flip.direction=null})),o.flip.auto=!1)}))},t()},onImageLoad:function(t,i){return this.nImageLoad=0,this.nImageLoadTrigger=t,this.imageLoadCallback=i},didLoadImage:function(t){if(null===this.imageWidth&&(this.imageWidth=(t.target||t.path[0]).naturalWidth,this.imageHeight=(t.target||t.path[0]).naturalHeight),this.imageLoadCallback)return++this.nImageLoad>=this.nImageLoadTrigger?(this.imageLoadCallback(),this.imageLoadCallback=null):void 0},zoomIn:function(){if(this.canZoomIn)return this.zoomIndex+=1,this.zoomTo(this.zooms_[this.zoomIndex])},zoomOut:function(){if(this.canZoomOut)return this.zoomIndex-=1,this.zoomTo(this.zooms_[this.zoomIndex])},zoomTo:function(t,i,e){var o,s,a,h,l,c,u,g,f,p,d,m=this;if(u=this.zoom,h=t,d=this.$refs.viewport,g=d.scrollLeft,f=d.scrollTop,i||(i=d.clientWidth/2),e||(e=d.clientHeight/2),s=i+g,a=e+f,l=s/u*h-i,c=a/u*h-e,p=Date.now(),this.zooming=!0,this.$emit("zoom-start",t),o=function(){return requestAnimationFrame((function(){var i,e;return e=Date.now()-p,i=e/m.zoomDuration,(i>1||n)&&(i=1),i=r(i),m.zoom=u+(h-u)*i,m.scrollLeft=g+(l-g)*i,m.scrollTop=f+(c-f)*i,e<m.zoomDuration?o():(m.$emit("zoom-end",t),m.zooming=!1,m.zoom=t,m.scrollLeft=l,m.scrollTop=c)}))},o(),h>1)return this.preloadImages(!0)},zoomAt:function(t){var i,e,n;return i=this.$refs.viewport.getBoundingClientRect(),e=t.pageX-i.left,n=t.pageY-i.top,this.zoomIndex=(this.zoomIndex+1)%this.zooms_.length,this.zoomTo(this.zooms_[this.zoomIndex],e,n)},swipeStart:function(t){return this.touchStartX=t.pageX,this.touchStartY=t.pageY,this.maxMove=0,this.zoom<=1?this.activeCursor="grab":(this.startScrollLeft=this.$refs.viewport.scrollLeft,this.startScrollTop=this.$refs.viewport.scrollTop,this.activeCursor="all-scroll")},swipeMove:function(t){var i,e;if(null!=this.touchStartX)if(i=t.pageX-this.touchStartX,e=t.pageY-this.touchStartY,this.maxMove=Math.max(this.maxMove,Math.abs(i)),this.maxMove=Math.max(this.maxMove,Math.abs(e)),this.zoom>1)this.dragToScroll&&this.dragScroll(i,e);else if(!(Math.abs(e)>Math.abs(i)))return this.activeCursor="grabbing",i>0?(null===this.flip.direction&&this.canFlipLeft&&i>=this.swipeMin&&this.flipStart("left",!1),"left"===this.flip.direction&&(this.flip.progress=i/this.pageWidth,this.flip.progress>1&&(this.flip.progress=1))):(null===this.flip.direction&&this.canFlipRight&&i<=-this.swipeMin&&this.flipStart("right",!1),"right"===this.flip.direction&&(this.flip.progress=-i/this.pageWidth,this.flip.progress>1&&(this.flip.progress=1))),!0},swipeEnd:function(t){if(null!=this.touchStartX)return this.maxMove<this.swipeMin&&this.zoomAt(t),null===this.flip.direction||this.flip.auto||(this.flip.progress>.25?this.flipAuto(!1):this.flipRevert()),this.touchStartX=null,this.activeCursor=null},onTouchStart:function(t){return this.hasTouchEvents=!0,this.swipeStart(t.changedTouches[0])},onTouchMove:function(t){if(this.swipeMove(t.changedTouches[0])&&t.cancelable)return t.preventDefault()},onTouchEnd:function(t){return this.swipeEnd(t.changedTouches[0])},onPointerDown:function(t){if(this.hasPointerEvents=!0,!this.hasTouchEvents&&(!t.which||1===t.which)){this.swipeStart(t);try{return t.target.setPointerCapture(t.pointerId)}catch(i){}}},onPointerMove:function(t){if(!this.hasTouchEvents)return this.swipeMove(t)},onPointerUp:function(t){if(!this.hasTouchEvents){this.swipeEnd(t);try{return t.target.releasePointerCapture(t.pointerId)}catch(i){}}},onMouseDown:function(t){if(!this.hasTouchEvents&&!this.hasPointerEvents&&(!t.which||1===t.which))return this.swipeStart(t)},onMouseMove:function(t){if(!this.hasTouchEvents&&!this.hasPointerEvents)return this.swipeMove(t)},onMouseUp:function(t){if(!this.hasTouchEvents&&!this.hasPointerEvents)return this.swipeEnd(t)},dragScroll:function(t,i){return this.scrollLeft=this.startScrollLeft-t,this.scrollTop=this.startScrollTop-i},onWheel:function(t){if(this.zoom>1&&this.dragToScroll&&(this.scrollLeft=this.$refs.viewport.scrollLeft+t.deltaX,this.scrollTop=this.$refs.viewport.scrollTop+t.deltaY,t.cancelable))return t.preventDefault()},preloadImages:function(){var t,i,e,n,o,r,s,a,h,l=arguments.length>0&&void 0!==arguments[0]&&arguments[0];for(Object.keys(this.preloadedImages).length>=10&&(this.preloadedImages={}),t=e=o=this.currentPage-3,r=this.currentPage+3;o<=r?e<=r:e>=r;t=o<=r?++e:--e)h=this.pageUrl(t),h&&(this.preloadedImages[h]||(i=new Image,i.src=h,this.preloadedImages[h]=i));if(l)for(t=n=s=this.currentPage,a=this.currentPage+this.displayedPages;s<=a?n<a:n>a;t=s<=a?++n:--n)h=this.pagesHiRes[t],h&&(this.preloadedImages[h]||(i=new Image,i.src=h,this.preloadedImages[h]=i))},goToPage:function(t){if(null!==t&&t!==this.page)return null===this.pages[0]?2===this.displayedPages&&1===t?this.currentPage=0:this.currentPage=t:this.currentPage=t-1,this.minX=Infinity,this.maxX=-Infinity}},watch:{currentPage:function(){return this.firstPage=this.currentPage,this.secondPage=this.currentPage+1,this.preloadImages()},centerOffset:function(){var t,i=this;if(!this.animatingCenter)return t=function(){return requestAnimationFrame((function(){var e,n;return n=.1,e=i.centerOffset-i.currentCenterOffset,Math.abs(e)<.5?(i.currentCenterOffset=i.centerOffset,i.animatingCenter=!1):(i.currentCenterOffset+=e*n,t())}))},this.animatingCenter=!0,t()},scrollLeftLimited:function(t){var i=this;return n?requestAnimationFrame((function(){return i.$refs.viewport.scrollLeft=t})):this.$refs.viewport.scrollLeft=t},scrollTopLimited:function(t){var i=this;return n?requestAnimationFrame((function(){return i.$refs.viewport.scrollTop=t})):this.$refs.viewport.scrollTop=t},pages:function(t,i){if(this.fixFirstPage(),!(null!=i?i.length:void 0)&&(null!=t?t.length:void 0)&&this.startPage>1&&null===t[0])return this.currentPage++},startPage:function(t){return this.goToPage(t)}}},M=x,z=(e("2e7f"),e("2877")),k=Object(z["a"])(M,d,m,!1,null,"417c8a57",null),I=k.exports,L={name:"app",components:{Flipbook:I,LeftIcon:u["a"],RightIcon:g["a"],PlusIcon:f["a"],MinusIcon:p["a"],Ribbon:c["a"]},data:function(){return{pages:[],pagesHiRes:[],hasMouse:!0,pageNum:null}},methods:{onFlipLeftStart:function(t){return console.log("flip-left-start",t)},onFlipLeftEnd:function(t){return console.log("flip-left-end",t),window.location.hash="#"+t},onFlipRightStart:function(t){return console.log("flip-right-start",t)},onFlipRightEnd:function(t){return console.log("flip-right-end",t),window.location.hash="#"+t},onZoomStart:function(t){return console.log("zoom-start",t)},onZoomEnd:function(t){return console.log("zoom-end",t)},setPageFromHash:function(){var t;if(t=parseInt(window.location.hash.slice(1),10),isFinite(t))return this.pageNum=t}},mounted:function(){var t=this;return window.addEventListener("keydown",(function(i){var e;if(e=t.$refs.flipbook,e)return 37===i.keyCode&&e.canFlipLeft&&e.flipLeft(),39===i.keyCode&&e.canFlipRight?e.flipRight():void 0})),setTimeout((function(){return t.pages=[null,"images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg"],t.pagesHiRes=[null,"images-large/1.jpg","images-large/2.jpg","images-large/3.jpg","images-large/4.jpg","images-large/5.jpg","images-large/6.jpg"]}),1),window.addEventListener("hashchange",this.setPageFromHash),this.setPageFromHash()}},S=L,T=(e("034f"),Object(z["a"])(S,h,l,!1,null,null,null)),O=T.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(O)}}).$mount("#app")},"2cad":function(t,i,e){var n=e("6c93");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("499e").default;o("252d88f6",n,!0,{sourceMap:!1,shadowMode:!1})},"2e7f":function(t,i,e){"use strict";var n=e("2cad"),o=e.n(n);o.a},"3f8c":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,"body,html{margin:0;padding:0}#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;height:100vh;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;background-color:#333;color:#ccc;overflow:hidden}a{color:inherit}.action-bar{width:100%;height:30px;padding:10px 0;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.action-bar .btn{font-size:30px;color:#999}.action-bar .btn svg{bottom:0}.action-bar .btn:not(:first-child){margin-left:10px}.has-mouse .action-bar .btn:hover{color:#ccc;-webkit-filter:drop-shadow(1px 1px 5px #000);filter:drop-shadow(1px 1px 5px #000);cursor:pointer}.action-bar .btn:active{-webkit-filter:none!important;filter:none!important}.action-bar .btn.disabled{color:#666;pointer-events:none}.action-bar .page-num{font-size:12px;margin-left:10px}.flipbook .viewport{width:90vw;height:calc(100vh - 90px)}.flipbook .bounding-box{box-shadow:0 0 20px #000}.credit{font-size:12px;line-height:20px;margin:10px}",""])},"6c93":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".viewport[data-v-417c8a57]{-webkit-overflow-scrolling:touch;width:100%;height:100%}.viewport.zoom[data-v-417c8a57]{overflow:scroll}.viewport.zoom.drag-to-scroll[data-v-417c8a57]{overflow:hidden}.container[data-v-417c8a57]{position:relative;width:100%;-webkit-transform-origin:top left;transform-origin:top left}.click-to-flip[data-v-417c8a57],.container[data-v-417c8a57]{height:100%;-webkit-user-select:none;-ms-user-select:none;user-select:none}.click-to-flip[data-v-417c8a57]{position:absolute;width:50%;top:0}.click-to-flip.left[data-v-417c8a57]{left:0}.click-to-flip.right[data-v-417c8a57]{right:0}.bounding-box[data-v-417c8a57]{position:absolute;-webkit-user-select:none;-ms-user-select:none;user-select:none}.page[data-v-417c8a57],.polygon[data-v-417c8a57]{position:absolute;-webkit-backface-visibility:hidden;backface-visibility:hidden}.polygon[data-v-417c8a57]{top:0;left:0;background-repeat:no-repeat;-webkit-transform-origin:center left;transform-origin:center left}.polygon.blank[data-v-417c8a57]{background-color:#ddd}.polygon .lighting[data-v-417c8a57]{width:100%;height:100%}",""])},e2a1:function(t,i,e){var n=e("3f8c");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("499e").default;o("1f50beb8",n,!0,{sourceMap:!1,shadowMode:!1})}});
//# sourceMappingURL=app.8b198fd2.js.map