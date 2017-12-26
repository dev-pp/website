jQuery(function(t){function e(e){"resize"===e.type&&(t(h.BODY).removeClass(a.DROPDOWN_OPEN),t(h.BASE).removeClass(a.OPENED).find(h.TOGGLER).each(function(){t(t(this).attr("data-target")).removeClass(a.IN).add(this).attr("aria-expanded","false")}))
var r=t(this).scrollTop()
t(h.BASE).each(function(){t(this).is(h.FIXED_TOP)&&(t(this).is(h.TRANSPARENT)&&!t(this).hasClass(a.OPENED)&&(r>0?t(this).removeClass(a.BG_COLOR):t(this).addClass(a.BG_COLOR)),r>0?t(this).addClass(a.SHORT):t(this).removeClass(a.SHORT))})}var r,s="bs.navbar-dropdown",n="."+s,i=".data-api",o={SCROLL_DATA_API:"scroll"+n+i,RESIZE_DATA_API:"resize"+n+i,COLLAPSE_SHOW:"show.bs.collapse",COLLAPSE_HIDE:"hide.bs.collapse",DROPDOWN_COLLAPSE:"collapse.bs.nav-dropdown"},a={IN:"in",OPENED:"opened",BG_COLOR:"bg-color",DROPDOWN_OPEN:"navbar-dropdown-open",SHORT:"navbar-short"},h={BODY:"body",BASE:".navbar-dropdown",TOGGLER:'.navbar-toggler[aria-expanded="true"]',TRANSPARENT:".transparent",FIXED_TOP:".navbar-fixed-top"}
t(window).on(o.SCROLL_DATA_API+" "+o.RESIZE_DATA_API,function(t){clearTimeout(r),r=setTimeout(function(){e(t)},10)}).trigger(o.SCROLL_DATA_API),t(document).on(o.COLLAPSE_SHOW+" "+o.COLLAPSE_HIDE,function(e){t(e.target).closest(h.BASE).each(function(){"show"==e.type?(t(h.BODY).addClass(a.DROPDOWN_OPEN),t(this).addClass(a.OPENED).removeClass(a.SHORT).removeClass(a.BG_COLOR)):(t(h.BODY).removeClass(a.DROPDOWN_OPEN),t(this).addClass(a.BG_COLOR).removeClass(a.OPENED),t(window).trigger(o.SCROLL_DATA_API))})}).on(o.DROPDOWN_COLLAPSE,function(e){t(e.relatedTarget).closest(h.BASE).find(h.TOGGLER).trigger("click")})}),function(t){var e="navDropdown",r="bs.nav-dropdown",s="."+r,n=".data-api",i=t.fn[e],o={HIDE:"hide"+s,HIDDEN:"hidden"+s,SHOW:"show"+s,SHOWN:"shown"+s,CLICK:"click"+s,READY:"ready"+s,COLLAPSE:"collapse"+s,LOAD_DATA_API:"load"+s+n,CLICK_DATA_API:"click"+s+n,RESIZE_DATA_API:"resize"+s+n,KEYDOWN_DATA_API:"keydown"+s+n},a={ESC:27,LEFT:37,UP:38,RIGHT:39,DOWN:40},h={XS:544,SM:768,MD:992,LG:1200,XL:1/0},l={BACKDROP:"dropdown-backdrop",DISABLED:"disabled",OPEN:"open",SM:"nav-dropdown-sm"},p={BASE:".nav-dropdown",DROPDOWN:".dropdown",DROPDOWN_MENU:".dropdown-menu",BACKDROP:"."+l.BACKDROP,DATA_BUTTON:"[data-button]",DATA_TOGGLE:'[data-toggle="dropdown-submenu"]',FORM_CHILD:".dropdown form"},c=function(){function e(e,r){"length"in e||(e=[e]),this.props={},this.length=e.length,r&&(this.prevItem=r,t.extend(this.props,r.props))
for(var s=0;s<e.length;s++)this[s]=e[s]}return e.prototype.eq=function(t){return new e(this[t]?this[t]:[],this)},e.prototype.parent=function(){return new e(t(this).map(function(){var r=new e(this)
return r.is(":upper")?null:t(r.is(":toggle")?this.parentNode.parentNode:this).closest(p.DROPDOWN).find(">"+p.DATA_TOGGLE)[0]}),this)},e.prototype.parents=function(r){var s=t(this).map(function(){return new e(this).is(":toggle")?this.parentNode:this}).parentsUntil(p.BASE,p.DROPDOWN)
return":upper"===r&&(s=s.last()),s=s.find(">"+p.DATA_TOGGLE),new e(s,this)},e.prototype.children=function(r){var s=[]
return t(this).each(function(){var n,i,o=new e(this)
if(o.is(":root"))n=t(this)
else{if(!o.is(":toggle"))return
n=t(this).parent().find(">"+p.DROPDOWN_MENU)}i=r?n.find("a"):o.is(":root")?n.find(">li>a"):n.find(">a, >"+p.DROPDOWN+">a"),i.each(function(){r&&!this.offsetWidth&&!this.offsetHeight||this.disabled||t(this).is(p.DATA_BUTTON)||t(this).hasClass(l.DISABLED)||~t.inArray(this,s)||s.push(this)})}),new e(s,this)},e.prototype.root=function(){return new e(t(this).closest(p.BASE),this)},e.prototype.jump=function(r){if(r=r||"next",!this.length)return new e([],this)
var s,n=this.eq(0)
s=this.is(":flat")||n.is(":upper")?n.root().children(this.is(":flat")):n.parent().children()
var i=t.inArray(this[0],s)
if(!s.length||!~i)return new e([],this)
if("next"==r){if(i+=1,i<s.length)return new e(s[i],this)
r="first"}else if("prev"==r){if(i-=1,i>=0)return new e(s[i],this)
r="last"}return"first"==r?new e(s[0],this):"last"==r?new e(s[s.length-1],this):new e([],this)},e.prototype.next=function(){return this.jump("next")},e.prototype.prev=function(){return this.jump("prev")},e.prototype.first=function(){return this.jump("first")},e.prototype.last=function(){return this.jump("last")},e.prototype.prop=function(e,r){return arguments.length?arguments.length>1?(this.props[e]=r,this):"object"==typeof arguments[0]?(t.extend(this.props,arguments[0]),this):e in this.props?this.props[e]:null:t.extend({},this.props)},e.prototype.removeProp=function(t){return delete this.props[t],this},e.prototype.is=function(e){for(var r=t(this),s=(e||"").split(/(?=[*#.\[:\s])/);e=s.pop();)switch(e){case":root":if(!r.is(p.BASE))return!1
break
case":upper":if(!r.parent().parent().is(p.BASE))return!1
break
case":opened":case":closed":if(":opened"==e!=r.parent().hasClass(l.OPEN))return!1
case":toggle":if(!r.is(p.DATA_TOGGLE))return!1
break
default:if(!this.props[e])return!1}return!0},e.prototype.open=function(){return this.is(":closed")&&this.click(),this},e.prototype.close=function(){return this.is(":opened")&&this.click(),this},e.prototype.focus=function(){return this.length&&this[0].focus(),this},e.prototype.click=function(){return this.length&&t(this[0]).trigger("click"),this},function(t){return new e(t)}}(),d=function(e){this._element=e,t(this._element).on(o.CLICK,this.toggle)}
d.prototype.toggle=function(e){if(this.disabled||t(this).hasClass(l.DISABLED))return!1
var r=t(this.parentNode),s=r.hasClass(l.OPEN),n=d._isCollapsed(t(this).closest(p.BASE))
if(d._clearMenus(t.Event("click",{target:this,toggles:n?[this]:null})),s)return!1
if("ontouchstart"in document.documentElement&&!r.closest(p.DROPDOWN+"."+l.OPEN).length){var i=document.createElement("div")
i.className=l.BACKDROP,i.style.background="transparent",t(i).insertBefore(t(this).closest(p.BASE)),t(i).on("click",d._clearMenus)}var a={relatedTarget:this},h=t.Event(o.SHOW,a)
return r.trigger(h),h.isDefaultPrevented()?!1:(this.focus(),this.setAttribute("aria-expanded","true"),r.toggleClass(l.OPEN),r.trigger(t.Event(o.SHOWN,a)),!1)},d.prototype.dispose=function(){t.removeData(this._element,r),t(this._element).off(s),this._element=null},d._clearMenus=function(e){if(e=e||{},3!==e.which){var r
if(this===document){var s=t(e.target).closest(p.BASE)
if(s[0]||!t(e.target).is(".navbar")&&!t(e.target).parent().is(".navbar")||(s=t(e.target).find(p.BASE)),t(e.target).is("a:not([disabled], ."+l.DISABLED+", "+p.DATA_TOGGLE+")"))r=e.target
else if(d._isCollapsed(s))return void t(document).trigger(t.Event(o.COLLAPSE,{relatedTarget:s[0]}))}else if(e.target&&t(e.target).hasClass(l.BACKDROP)){var n=t(e.target).next()
n.is(p.BASE)&&d._isCollapsed(n)&&(r=n[0])}var i=function(){return!1}
if(e.target&&t(e.target).is(p.DATA_TOGGLE))i=t(e.target.parentNode).parents(p.DROPDOWN).find(">"+p.DATA_TOGGLE)
else{var a=t(p.BACKDROP)[0]
a&&a.parentNode.removeChild(a)}for(var h=e.toggles||t.makeArray(t(p.DATA_TOGGLE).not(i)),c=0;c<h.length;c++){var u=h[c].parentNode,f={relatedTarget:h[c]}
if(t(u).hasClass(l.OPEN)&&("click"!==e.type||!/input|textarea/i.test(e.target.tagName)||!t.contains(u,e.target))){var A=t.Event(o.HIDE,f)
t(u).trigger(A),A.isDefaultPrevented()||(h[c].setAttribute("aria-expanded","false"),t(u).removeClass(l.OPEN).trigger(t.Event(o.HIDDEN,f)))}}r&&t(document).trigger(t.Event(o.COLLAPSE,{relatedTarget:r}))}},d._dataApiKeydownHandler=function(e){if(!/input|textarea/i.test(e.target.tagName)){var r
for(var s in a)if(r=a[s]===e.which)break
if(r){if(e.preventDefault(),e.stopPropagation(),e.which==a.ESC){if(d._isCollapsed(this))return
var n=t(e.target).parents(p.DROPDOWN+"."+l.OPEN).last().find(">"+p.DATA_TOGGLE)
return d._clearMenus(),void n.trigger("focus")}if("A"==e.target.tagName){var i=c(e.target)
if(i.prop(":flat",d._isCollapsed(i.root())),i.is(":flat"))e.which===a.DOWN||e.which===a.UP?i[e.which===a.UP?"prev":"next"]().focus():e.which===a.LEFT?i.is(":opened")?i.close():i.parent().close().focus():e.which===a.RIGHT&&i.is(":toggle")&&i.open()
else if(i.is(":upper"))e.which===a.LEFT||e.which===a.RIGHT?(i[e.which===a.LEFT?"prev":"next"]().focus().open(),i.is(":toggle")&&i.close()):e.which!==a.DOWN&&e.which!==a.UP||!i.is(":toggle")||i.children()[e.which===a.DOWN?"first":"last"]().focus()
else if(e.which===a.LEFT){var o=i.parent()
o.is(":upper")?o.close().prev().focus().open():o.focus().close()}else if(e.which===a.RIGHT){var h=i.children()
h.length?(i.open(),h.first().focus()):i.parents(":upper").close().next().focus().open()}else(e.which===a.DOWN||e.which===a.UP)&&i[e.which===a.UP?"prev":"next"]().focus()}}}},d._isCollapsed=function(t){var e
return t.length&&(t=t[0]),t&&(e=/navbar-toggleable-(xs|sm|md|lg|xl)/.exec(t.className))&&window.innerWidth<h[e[1].toUpperCase()]},d._dataApiResizeHandler=function(){t(p.BASE).each(function(){var e=d._isCollapsed(this)
t(this).find(p.DROPDOWN).removeClass(l.OPEN),t(this).find('[aria-expanded="true"]').attr("aria-expanded","false")
var r=t(p.BACKDROP)[0]
r&&r.parentNode.removeChild(r),e!=t(this).hasClass(l.SM)&&(e?t(this).addClass(l.SM):t(this).removeClass(l.SM))})},t.fn[e]=function(e){return this.each(function(){var s=t(this).data(r)
if(s||t(this).data(r,s=new d(this)),"string"==typeof e){if(void 0===s[e])throw new Error('No method named "'+e+'"')
s[e].call(this)}})},t.fn[e].noConflict=function(){return t.fn[e]=i,this},t.fn[e].Constructor=d,t.fn[e].$$=c,t(window).on(o.RESIZE_DATA_API+" "+o.LOAD_DATA_API,d._dataApiResizeHandler),t(document).on(o.KEYDOWN_DATA_API,p.BASE,d._dataApiKeydownHandler).on(o.CLICK_DATA_API,d._clearMenus).on(o.CLICK_DATA_API,p.DATA_TOGGLE,d.prototype.toggle).on(o.CLICK_DATA_API,p.FORM_CHILD,function(t){t.stopPropagation()}),t(window).trigger(o.READY)}(jQuery)
