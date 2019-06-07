(function framework7ComponentLoader(t,e){void 0===e&&(e=!0);document,window;var p=t.$,b=(t.Template7,t.utils),a=(t.device,t.support,t.Class,t.Modal,t.ConstructorMethods,t.ModalMethods,{morphOpen:function(t,e){var a=this,o=p(t),n=p(e);if(0!==n.length){n.transition(0).addClass("fab-morph-target-visible");var f={width:n[0].offsetWidth,height:n[0].offsetHeight,offset:n.offset(),borderRadius:n.css("border-radius"),zIndex:n.css("z-index")},r={width:o[0].offsetWidth,height:o[0].offsetHeight,offset:o.offset(),translateX:b.getTranslate(o[0],"x"),translateY:b.getTranslate(o[0],"y")};o[0].f7FabMorphData={$targetEl:n,target:f,fab:r};var s=r.offset.left+r.width/2-(f.offset.left+f.width/2)-r.translateX,i=r.offset.top+r.height/2-(f.offset.top+f.height/2)-r.translateY,h=f.width/r.width,l=f.height/r.height,d=Math.ceil(parseInt(f.borderRadius,10)/Math.max(h,l));0<d&&(d+=2),o[0].f7FabMorphResizeHandler=function(){o.transition(0).transform(""),n.transition(0),f.width=n[0].offsetWidth,f.height=n[0].offsetHeight,f.offset=n.offset(),r.offset=o.offset();var t=r.offset.left+r.width/2-(f.offset.left+f.width/2)-r.translateX,e=r.offset.top+r.height/2-(f.offset.top+f.height/2)-r.translateY,a=f.width/r.width,s=f.height/r.height;o.transform("translate3d("+-t+"px, "+-e+"px, 0) scale("+a+", "+s+")")},n.css("opacity",0).transform("scale("+1/h+", "+1/l+")"),o.addClass("fab-opened").css("z-index",f.zIndex-1).transform("translate3d("+-s+"px, "+-i+"px, 0)"),o.transitionEnd(function(){n.transition(""),b.nextFrame(function(){n.css("opacity",1).transform("scale(1,1)"),o.transform("translate3d("+-s+"px, "+-i+"px, 0) scale("+h+", "+l+")").css("border-radius",d+"px").css("box-shadow","none")}),a.on("resize",o[0].f7FabMorphResizeHandler),0<n.parents(".page-content").length&&n.parents(".page-content").on("scroll",o[0].f7FabMorphResizeHandler)})}},morphClose:function(t){var e=p(t),a=e[0].f7FabMorphData;if(a){var s=a.$targetEl,o=a.target,n=a.fab;if(0!==s.length){var f=n.offset.left+n.width/2-(o.offset.left+o.width/2)-n.translateX,r=n.offset.top+n.height/2-(o.offset.top+o.height/2)-n.translateY,i=o.width/n.width,h=o.height/n.height;this.off("resize",e[0].f7FabMorphResizeHandler),0<s.parents(".page-content").length&&s.parents(".page-content").off("scroll",e[0].f7FabMorphResizeHandler),s.css("opacity",0).transform("scale("+1/i+", "+1/h+")"),e.transition("").css("box-shadow","").css("border-radius","").transform("translate3d("+-f+"px, "+-r+"px, 0)"),e.transitionEnd(function(){e.css("z-index","").removeClass("fab-opened").transform(""),b.nextFrame(function(){e.transitionEnd(function(){s.removeClass("fab-morph-target-visible").css("opacity","").transform("").transition("")})})})}}},open:function(t,e){var a=this,s=p(t).eq(0),o=s.find(".fab-buttons");if(s.length&&!s.hasClass("fab-opened")&&(o.length||s.hasClass("fab-morph"))){if(a.fab.openedEl){if(a.fab.openedEl===s[0])return;a.fab.close(a.fab.openedEl)}a.fab.openedEl=s[0],s.hasClass("fab-morph")?a.fab.morphOpen(s,e||s.attr("data-morph-to")):s.addClass("fab-opened"),s.trigger("fab:open")}},close:function(t){void 0===t&&(t=".fab-opened");var e=p(t).eq(0),a=e.find(".fab-buttons");e.length&&e.hasClass("fab-opened")&&(a.length||e.hasClass("fab-morph"))&&(this.fab.openedEl=null,e.hasClass("fab-morph")?this.fab.morphClose(e):e.removeClass("fab-opened"),e.trigger("fab:close"))},toggle:function(t){p(t).hasClass("fab-opened")?this.fab.close(t):this.fab.open(t)}}),s={name:"fab",create:function(){var t=this;b.extend(t,{fab:{openedEl:null,morphOpen:a.morphOpen.bind(t),morphClose:a.morphClose.bind(t),open:a.open.bind(t),close:a.close.bind(t),toggle:a.toggle.bind(t)}})},clicks:{".fab > a":function(t){this.fab.toggle(t.parents(".fab"))},".fab-open":function(t,e){void 0===e&&(e={});this.fab.open(e.fab)},".fab-close":function(t,e){void 0===e&&(e={});this.fab.close(e.fab)}}};if(e){if(t.prototype.modules&&t.prototype.modules[s.name])return;t.use(s),t.instance&&(t.instance.useModuleParams(s,t.instance.params),t.instance.useModule(s))}return s}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))