goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_48559 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_48559(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_48560 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_48560(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__47401 = coll;
var G__47402 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__47401,G__47402) : shadow.dom.lazy_native_coll_seq.call(null,G__47401,G__47402));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__47425 = arguments.length;
switch (G__47425) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__47434 = arguments.length;
switch (G__47434) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__47444 = arguments.length;
switch (G__47444) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__47453 = arguments.length;
switch (G__47453) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__47472 = arguments.length;
switch (G__47472) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__47487 = arguments.length;
switch (G__47487) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e47506){if((e47506 instanceof Object)){
var e = e47506;
return console.log("didnt support attachEvent",el,e);
} else {
throw e47506;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__47518 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__47519 = null;
var count__47520 = (0);
var i__47521 = (0);
while(true){
if((i__47521 < count__47520)){
var el = chunk__47519.cljs$core$IIndexed$_nth$arity$2(null,i__47521);
var handler_48579__$1 = ((function (seq__47518,chunk__47519,count__47520,i__47521,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47518,chunk__47519,count__47520,i__47521,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_48579__$1);


var G__48581 = seq__47518;
var G__48582 = chunk__47519;
var G__48583 = count__47520;
var G__48584 = (i__47521 + (1));
seq__47518 = G__48581;
chunk__47519 = G__48582;
count__47520 = G__48583;
i__47521 = G__48584;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47518);
if(temp__5753__auto__){
var seq__47518__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47518__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__47518__$1);
var G__48585 = cljs.core.chunk_rest(seq__47518__$1);
var G__48586 = c__4679__auto__;
var G__48587 = cljs.core.count(c__4679__auto__);
var G__48588 = (0);
seq__47518 = G__48585;
chunk__47519 = G__48586;
count__47520 = G__48587;
i__47521 = G__48588;
continue;
} else {
var el = cljs.core.first(seq__47518__$1);
var handler_48589__$1 = ((function (seq__47518,chunk__47519,count__47520,i__47521,el,seq__47518__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47518,chunk__47519,count__47520,i__47521,el,seq__47518__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_48589__$1);


var G__48590 = cljs.core.next(seq__47518__$1);
var G__48591 = null;
var G__48592 = (0);
var G__48593 = (0);
seq__47518 = G__48590;
chunk__47519 = G__48591;
count__47520 = G__48592;
i__47521 = G__48593;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__47536 = arguments.length;
switch (G__47536) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__47547 = cljs.core.seq(events);
var chunk__47548 = null;
var count__47549 = (0);
var i__47550 = (0);
while(true){
if((i__47550 < count__47549)){
var vec__47562 = chunk__47548.cljs$core$IIndexed$_nth$arity$2(null,i__47550);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47562,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47562,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48599 = seq__47547;
var G__48600 = chunk__47548;
var G__48601 = count__47549;
var G__48602 = (i__47550 + (1));
seq__47547 = G__48599;
chunk__47548 = G__48600;
count__47549 = G__48601;
i__47550 = G__48602;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47547);
if(temp__5753__auto__){
var seq__47547__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47547__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__47547__$1);
var G__48605 = cljs.core.chunk_rest(seq__47547__$1);
var G__48606 = c__4679__auto__;
var G__48607 = cljs.core.count(c__4679__auto__);
var G__48608 = (0);
seq__47547 = G__48605;
chunk__47548 = G__48606;
count__47549 = G__48607;
i__47550 = G__48608;
continue;
} else {
var vec__47569 = cljs.core.first(seq__47547__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47569,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47569,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48609 = cljs.core.next(seq__47547__$1);
var G__48610 = null;
var G__48611 = (0);
var G__48612 = (0);
seq__47547 = G__48609;
chunk__47548 = G__48610;
count__47549 = G__48611;
i__47550 = G__48612;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__47575 = cljs.core.seq(styles);
var chunk__47576 = null;
var count__47577 = (0);
var i__47578 = (0);
while(true){
if((i__47578 < count__47577)){
var vec__47594 = chunk__47576.cljs$core$IIndexed$_nth$arity$2(null,i__47578);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47594,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47594,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__48613 = seq__47575;
var G__48614 = chunk__47576;
var G__48615 = count__47577;
var G__48616 = (i__47578 + (1));
seq__47575 = G__48613;
chunk__47576 = G__48614;
count__47577 = G__48615;
i__47578 = G__48616;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47575);
if(temp__5753__auto__){
var seq__47575__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47575__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__47575__$1);
var G__48617 = cljs.core.chunk_rest(seq__47575__$1);
var G__48618 = c__4679__auto__;
var G__48619 = cljs.core.count(c__4679__auto__);
var G__48620 = (0);
seq__47575 = G__48617;
chunk__47576 = G__48618;
count__47577 = G__48619;
i__47578 = G__48620;
continue;
} else {
var vec__47599 = cljs.core.first(seq__47575__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47599,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47599,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__48621 = cljs.core.next(seq__47575__$1);
var G__48622 = null;
var G__48623 = (0);
var G__48624 = (0);
seq__47575 = G__48621;
chunk__47576 = G__48622;
count__47577 = G__48623;
i__47578 = G__48624;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__47610_48625 = key;
var G__47610_48626__$1 = (((G__47610_48625 instanceof cljs.core.Keyword))?G__47610_48625.fqn:null);
switch (G__47610_48626__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_48630 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_48630,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_48630,"aria-");
}
})())){
el.setAttribute(ks_48630,value);
} else {
(el[ks_48630] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__47688){
var map__47689 = p__47688;
var map__47689__$1 = cljs.core.__destructure_map(map__47689);
var props = map__47689__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47689__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__47692 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47692,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47692,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47692,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__47699 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__47699,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__47699;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__47706 = arguments.length;
switch (G__47706) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__47728){
var vec__47731 = p__47728;
var seq__47732 = cljs.core.seq(vec__47731);
var first__47733 = cljs.core.first(seq__47732);
var seq__47732__$1 = cljs.core.next(seq__47732);
var nn = first__47733;
var first__47733__$1 = cljs.core.first(seq__47732__$1);
var seq__47732__$2 = cljs.core.next(seq__47732__$1);
var np = first__47733__$1;
var nc = seq__47732__$2;
var node = vec__47731;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47759 = nn;
var G__47760 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47759,G__47760) : create_fn.call(null,G__47759,G__47760));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47768 = nn;
var G__47769 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47768,G__47769) : create_fn.call(null,G__47768,G__47769));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__47796 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47796,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47796,(1),null);
var seq__47806_48664 = cljs.core.seq(node_children);
var chunk__47807_48665 = null;
var count__47808_48666 = (0);
var i__47809_48667 = (0);
while(true){
if((i__47809_48667 < count__47808_48666)){
var child_struct_48668 = chunk__47807_48665.cljs$core$IIndexed$_nth$arity$2(null,i__47809_48667);
var children_48673 = shadow.dom.dom_node(child_struct_48668);
if(cljs.core.seq_QMARK_(children_48673)){
var seq__47873_48677 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48673));
var chunk__47875_48678 = null;
var count__47876_48679 = (0);
var i__47877_48680 = (0);
while(true){
if((i__47877_48680 < count__47876_48679)){
var child_48682 = chunk__47875_48678.cljs$core$IIndexed$_nth$arity$2(null,i__47877_48680);
if(cljs.core.truth_(child_48682)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48682);


var G__48686 = seq__47873_48677;
var G__48687 = chunk__47875_48678;
var G__48688 = count__47876_48679;
var G__48689 = (i__47877_48680 + (1));
seq__47873_48677 = G__48686;
chunk__47875_48678 = G__48687;
count__47876_48679 = G__48688;
i__47877_48680 = G__48689;
continue;
} else {
var G__48690 = seq__47873_48677;
var G__48691 = chunk__47875_48678;
var G__48692 = count__47876_48679;
var G__48693 = (i__47877_48680 + (1));
seq__47873_48677 = G__48690;
chunk__47875_48678 = G__48691;
count__47876_48679 = G__48692;
i__47877_48680 = G__48693;
continue;
}
} else {
var temp__5753__auto___48698 = cljs.core.seq(seq__47873_48677);
if(temp__5753__auto___48698){
var seq__47873_48699__$1 = temp__5753__auto___48698;
if(cljs.core.chunked_seq_QMARK_(seq__47873_48699__$1)){
var c__4679__auto___48700 = cljs.core.chunk_first(seq__47873_48699__$1);
var G__48701 = cljs.core.chunk_rest(seq__47873_48699__$1);
var G__48702 = c__4679__auto___48700;
var G__48703 = cljs.core.count(c__4679__auto___48700);
var G__48704 = (0);
seq__47873_48677 = G__48701;
chunk__47875_48678 = G__48702;
count__47876_48679 = G__48703;
i__47877_48680 = G__48704;
continue;
} else {
var child_48706 = cljs.core.first(seq__47873_48699__$1);
if(cljs.core.truth_(child_48706)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48706);


var G__48707 = cljs.core.next(seq__47873_48699__$1);
var G__48708 = null;
var G__48709 = (0);
var G__48710 = (0);
seq__47873_48677 = G__48707;
chunk__47875_48678 = G__48708;
count__47876_48679 = G__48709;
i__47877_48680 = G__48710;
continue;
} else {
var G__48712 = cljs.core.next(seq__47873_48699__$1);
var G__48713 = null;
var G__48714 = (0);
var G__48715 = (0);
seq__47873_48677 = G__48712;
chunk__47875_48678 = G__48713;
count__47876_48679 = G__48714;
i__47877_48680 = G__48715;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48673);
}


var G__48716 = seq__47806_48664;
var G__48717 = chunk__47807_48665;
var G__48718 = count__47808_48666;
var G__48719 = (i__47809_48667 + (1));
seq__47806_48664 = G__48716;
chunk__47807_48665 = G__48717;
count__47808_48666 = G__48718;
i__47809_48667 = G__48719;
continue;
} else {
var temp__5753__auto___48722 = cljs.core.seq(seq__47806_48664);
if(temp__5753__auto___48722){
var seq__47806_48723__$1 = temp__5753__auto___48722;
if(cljs.core.chunked_seq_QMARK_(seq__47806_48723__$1)){
var c__4679__auto___48724 = cljs.core.chunk_first(seq__47806_48723__$1);
var G__48725 = cljs.core.chunk_rest(seq__47806_48723__$1);
var G__48726 = c__4679__auto___48724;
var G__48727 = cljs.core.count(c__4679__auto___48724);
var G__48728 = (0);
seq__47806_48664 = G__48725;
chunk__47807_48665 = G__48726;
count__47808_48666 = G__48727;
i__47809_48667 = G__48728;
continue;
} else {
var child_struct_48729 = cljs.core.first(seq__47806_48723__$1);
var children_48730 = shadow.dom.dom_node(child_struct_48729);
if(cljs.core.seq_QMARK_(children_48730)){
var seq__47900_48731 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48730));
var chunk__47902_48732 = null;
var count__47903_48733 = (0);
var i__47904_48734 = (0);
while(true){
if((i__47904_48734 < count__47903_48733)){
var child_48736 = chunk__47902_48732.cljs$core$IIndexed$_nth$arity$2(null,i__47904_48734);
if(cljs.core.truth_(child_48736)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48736);


var G__48737 = seq__47900_48731;
var G__48738 = chunk__47902_48732;
var G__48739 = count__47903_48733;
var G__48740 = (i__47904_48734 + (1));
seq__47900_48731 = G__48737;
chunk__47902_48732 = G__48738;
count__47903_48733 = G__48739;
i__47904_48734 = G__48740;
continue;
} else {
var G__48741 = seq__47900_48731;
var G__48742 = chunk__47902_48732;
var G__48743 = count__47903_48733;
var G__48744 = (i__47904_48734 + (1));
seq__47900_48731 = G__48741;
chunk__47902_48732 = G__48742;
count__47903_48733 = G__48743;
i__47904_48734 = G__48744;
continue;
}
} else {
var temp__5753__auto___48745__$1 = cljs.core.seq(seq__47900_48731);
if(temp__5753__auto___48745__$1){
var seq__47900_48746__$1 = temp__5753__auto___48745__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47900_48746__$1)){
var c__4679__auto___48747 = cljs.core.chunk_first(seq__47900_48746__$1);
var G__48748 = cljs.core.chunk_rest(seq__47900_48746__$1);
var G__48749 = c__4679__auto___48747;
var G__48750 = cljs.core.count(c__4679__auto___48747);
var G__48751 = (0);
seq__47900_48731 = G__48748;
chunk__47902_48732 = G__48749;
count__47903_48733 = G__48750;
i__47904_48734 = G__48751;
continue;
} else {
var child_48752 = cljs.core.first(seq__47900_48746__$1);
if(cljs.core.truth_(child_48752)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48752);


var G__48753 = cljs.core.next(seq__47900_48746__$1);
var G__48754 = null;
var G__48755 = (0);
var G__48756 = (0);
seq__47900_48731 = G__48753;
chunk__47902_48732 = G__48754;
count__47903_48733 = G__48755;
i__47904_48734 = G__48756;
continue;
} else {
var G__48759 = cljs.core.next(seq__47900_48746__$1);
var G__48760 = null;
var G__48761 = (0);
var G__48762 = (0);
seq__47900_48731 = G__48759;
chunk__47902_48732 = G__48760;
count__47903_48733 = G__48761;
i__47904_48734 = G__48762;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48730);
}


var G__48763 = cljs.core.next(seq__47806_48723__$1);
var G__48764 = null;
var G__48765 = (0);
var G__48766 = (0);
seq__47806_48664 = G__48763;
chunk__47807_48665 = G__48764;
count__47808_48666 = G__48765;
i__47809_48667 = G__48766;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__47950 = cljs.core.seq(node);
var chunk__47951 = null;
var count__47952 = (0);
var i__47953 = (0);
while(true){
if((i__47953 < count__47952)){
var n = chunk__47951.cljs$core$IIndexed$_nth$arity$2(null,i__47953);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48770 = seq__47950;
var G__48771 = chunk__47951;
var G__48772 = count__47952;
var G__48773 = (i__47953 + (1));
seq__47950 = G__48770;
chunk__47951 = G__48771;
count__47952 = G__48772;
i__47953 = G__48773;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47950);
if(temp__5753__auto__){
var seq__47950__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47950__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__47950__$1);
var G__48774 = cljs.core.chunk_rest(seq__47950__$1);
var G__48775 = c__4679__auto__;
var G__48776 = cljs.core.count(c__4679__auto__);
var G__48777 = (0);
seq__47950 = G__48774;
chunk__47951 = G__48775;
count__47952 = G__48776;
i__47953 = G__48777;
continue;
} else {
var n = cljs.core.first(seq__47950__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48778 = cljs.core.next(seq__47950__$1);
var G__48779 = null;
var G__48780 = (0);
var G__48781 = (0);
seq__47950 = G__48778;
chunk__47951 = G__48779;
count__47952 = G__48780;
i__47953 = G__48781;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__47981 = arguments.length;
switch (G__47981) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__47989 = arguments.length;
switch (G__47989) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__48007 = arguments.length;
switch (G__48007) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___48793 = arguments.length;
var i__4865__auto___48795 = (0);
while(true){
if((i__4865__auto___48795 < len__4864__auto___48793)){
args__4870__auto__.push((arguments[i__4865__auto___48795]));

var G__48796 = (i__4865__auto___48795 + (1));
i__4865__auto___48795 = G__48796;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__48035_48797 = cljs.core.seq(nodes);
var chunk__48036_48798 = null;
var count__48037_48799 = (0);
var i__48038_48800 = (0);
while(true){
if((i__48038_48800 < count__48037_48799)){
var node_48801 = chunk__48036_48798.cljs$core$IIndexed$_nth$arity$2(null,i__48038_48800);
fragment.appendChild(shadow.dom._to_dom(node_48801));


var G__48802 = seq__48035_48797;
var G__48803 = chunk__48036_48798;
var G__48804 = count__48037_48799;
var G__48805 = (i__48038_48800 + (1));
seq__48035_48797 = G__48802;
chunk__48036_48798 = G__48803;
count__48037_48799 = G__48804;
i__48038_48800 = G__48805;
continue;
} else {
var temp__5753__auto___48806 = cljs.core.seq(seq__48035_48797);
if(temp__5753__auto___48806){
var seq__48035_48807__$1 = temp__5753__auto___48806;
if(cljs.core.chunked_seq_QMARK_(seq__48035_48807__$1)){
var c__4679__auto___48808 = cljs.core.chunk_first(seq__48035_48807__$1);
var G__48809 = cljs.core.chunk_rest(seq__48035_48807__$1);
var G__48810 = c__4679__auto___48808;
var G__48811 = cljs.core.count(c__4679__auto___48808);
var G__48812 = (0);
seq__48035_48797 = G__48809;
chunk__48036_48798 = G__48810;
count__48037_48799 = G__48811;
i__48038_48800 = G__48812;
continue;
} else {
var node_48813 = cljs.core.first(seq__48035_48807__$1);
fragment.appendChild(shadow.dom._to_dom(node_48813));


var G__48814 = cljs.core.next(seq__48035_48807__$1);
var G__48815 = null;
var G__48816 = (0);
var G__48817 = (0);
seq__48035_48797 = G__48814;
chunk__48036_48798 = G__48815;
count__48037_48799 = G__48816;
i__48038_48800 = G__48817;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq48032){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48032));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__48046_48819 = cljs.core.seq(scripts);
var chunk__48047_48820 = null;
var count__48048_48821 = (0);
var i__48049_48822 = (0);
while(true){
if((i__48049_48822 < count__48048_48821)){
var vec__48056_48837 = chunk__48047_48820.cljs$core$IIndexed$_nth$arity$2(null,i__48049_48822);
var script_tag_48838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48056_48837,(0),null);
var script_body_48839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48056_48837,(1),null);
eval(script_body_48839);


var G__48840 = seq__48046_48819;
var G__48841 = chunk__48047_48820;
var G__48842 = count__48048_48821;
var G__48843 = (i__48049_48822 + (1));
seq__48046_48819 = G__48840;
chunk__48047_48820 = G__48841;
count__48048_48821 = G__48842;
i__48049_48822 = G__48843;
continue;
} else {
var temp__5753__auto___48844 = cljs.core.seq(seq__48046_48819);
if(temp__5753__auto___48844){
var seq__48046_48845__$1 = temp__5753__auto___48844;
if(cljs.core.chunked_seq_QMARK_(seq__48046_48845__$1)){
var c__4679__auto___48846 = cljs.core.chunk_first(seq__48046_48845__$1);
var G__48847 = cljs.core.chunk_rest(seq__48046_48845__$1);
var G__48848 = c__4679__auto___48846;
var G__48849 = cljs.core.count(c__4679__auto___48846);
var G__48850 = (0);
seq__48046_48819 = G__48847;
chunk__48047_48820 = G__48848;
count__48048_48821 = G__48849;
i__48049_48822 = G__48850;
continue;
} else {
var vec__48061_48851 = cljs.core.first(seq__48046_48845__$1);
var script_tag_48852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48061_48851,(0),null);
var script_body_48853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48061_48851,(1),null);
eval(script_body_48853);


var G__48854 = cljs.core.next(seq__48046_48845__$1);
var G__48855 = null;
var G__48856 = (0);
var G__48857 = (0);
seq__48046_48819 = G__48854;
chunk__48047_48820 = G__48855;
count__48048_48821 = G__48856;
i__48049_48822 = G__48857;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__48069){
var vec__48072 = p__48069;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48072,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48072,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__48113 = arguments.length;
switch (G__48113) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__48128 = cljs.core.seq(style_keys);
var chunk__48129 = null;
var count__48130 = (0);
var i__48131 = (0);
while(true){
if((i__48131 < count__48130)){
var it = chunk__48129.cljs$core$IIndexed$_nth$arity$2(null,i__48131);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48864 = seq__48128;
var G__48865 = chunk__48129;
var G__48866 = count__48130;
var G__48867 = (i__48131 + (1));
seq__48128 = G__48864;
chunk__48129 = G__48865;
count__48130 = G__48866;
i__48131 = G__48867;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48128);
if(temp__5753__auto__){
var seq__48128__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48128__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__48128__$1);
var G__48868 = cljs.core.chunk_rest(seq__48128__$1);
var G__48869 = c__4679__auto__;
var G__48870 = cljs.core.count(c__4679__auto__);
var G__48871 = (0);
seq__48128 = G__48868;
chunk__48129 = G__48869;
count__48130 = G__48870;
i__48131 = G__48871;
continue;
} else {
var it = cljs.core.first(seq__48128__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48872 = cljs.core.next(seq__48128__$1);
var G__48873 = null;
var G__48874 = (0);
var G__48875 = (0);
seq__48128 = G__48872;
chunk__48129 = G__48873;
count__48130 = G__48874;
i__48131 = G__48875;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k48177,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__48228 = k48177;
var G__48228__$1 = (((G__48228 instanceof cljs.core.Keyword))?G__48228.fqn:null);
switch (G__48228__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48177,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__48233){
var vec__48235 = p__48233;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48235,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48235,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48176){
var self__ = this;
var G__48176__$1 = this;
return (new cljs.core.RecordIter((0),G__48176__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48179,other48180){
var self__ = this;
var this48179__$1 = this;
return (((!((other48180 == null)))) && ((((this48179__$1.constructor === other48180.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48179__$1.x,other48180.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48179__$1.y,other48180.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48179__$1.__extmap,other48180.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k48177){
var self__ = this;
var this__4509__auto____$1 = this;
var G__48251 = k48177;
var G__48251__$1 = (((G__48251 instanceof cljs.core.Keyword))?G__48251.fqn:null);
switch (G__48251__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k48177);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__48176){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__48256 = cljs.core.keyword_identical_QMARK_;
var expr__48257 = k__4511__auto__;
if(cljs.core.truth_((pred__48256.cljs$core$IFn$_invoke$arity$2 ? pred__48256.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__48257) : pred__48256.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__48257)))){
return (new shadow.dom.Coordinate(G__48176,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48256.cljs$core$IFn$_invoke$arity$2 ? pred__48256.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__48257) : pred__48256.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__48257)))){
return (new shadow.dom.Coordinate(self__.x,G__48176,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__48176),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__48176){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__48176,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__48191){
var extmap__4542__auto__ = (function (){var G__48270 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48191,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__48191)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48270);
} else {
return G__48270;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__48191),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__48191),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k48275,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__48283 = k48275;
var G__48283__$1 = (((G__48283 instanceof cljs.core.Keyword))?G__48283.fqn:null);
switch (G__48283__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48275,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__48288){
var vec__48292 = p__48288;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48292,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48292,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48274){
var self__ = this;
var G__48274__$1 = this;
return (new cljs.core.RecordIter((0),G__48274__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48276,other48277){
var self__ = this;
var this48276__$1 = this;
return (((!((other48277 == null)))) && ((((this48276__$1.constructor === other48277.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48276__$1.w,other48277.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48276__$1.h,other48277.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48276__$1.__extmap,other48277.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k48275){
var self__ = this;
var this__4509__auto____$1 = this;
var G__48310 = k48275;
var G__48310__$1 = (((G__48310 instanceof cljs.core.Keyword))?G__48310.fqn:null);
switch (G__48310__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k48275);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__48274){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__48314 = cljs.core.keyword_identical_QMARK_;
var expr__48315 = k__4511__auto__;
if(cljs.core.truth_((pred__48314.cljs$core$IFn$_invoke$arity$2 ? pred__48314.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__48315) : pred__48314.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__48315)))){
return (new shadow.dom.Size(G__48274,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48314.cljs$core$IFn$_invoke$arity$2 ? pred__48314.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__48315) : pred__48314.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__48315)))){
return (new shadow.dom.Size(self__.w,G__48274,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__48274),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__48274){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__48274,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__48278){
var extmap__4542__auto__ = (function (){var G__48323 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48278,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__48278)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48323);
} else {
return G__48323;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__48278),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__48278),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__48913 = (i + (1));
var G__48914 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__48913;
ret = G__48914;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48328){
var vec__48329 = p__48328;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48329,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48329,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__48334 = arguments.length;
switch (G__48334) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__48923 = ps;
var G__48924 = (i + (1));
el__$1 = G__48923;
i = G__48924;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__48353 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48353,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48353,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48353,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__48356_48928 = cljs.core.seq(props);
var chunk__48358_48929 = null;
var count__48359_48930 = (0);
var i__48360_48931 = (0);
while(true){
if((i__48360_48931 < count__48359_48930)){
var vec__48372_48932 = chunk__48358_48929.cljs$core$IIndexed$_nth$arity$2(null,i__48360_48931);
var k_48933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48372_48932,(0),null);
var v_48934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48372_48932,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_48933);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48933),v_48934);


var G__48943 = seq__48356_48928;
var G__48944 = chunk__48358_48929;
var G__48945 = count__48359_48930;
var G__48946 = (i__48360_48931 + (1));
seq__48356_48928 = G__48943;
chunk__48358_48929 = G__48944;
count__48359_48930 = G__48945;
i__48360_48931 = G__48946;
continue;
} else {
var temp__5753__auto___48947 = cljs.core.seq(seq__48356_48928);
if(temp__5753__auto___48947){
var seq__48356_48951__$1 = temp__5753__auto___48947;
if(cljs.core.chunked_seq_QMARK_(seq__48356_48951__$1)){
var c__4679__auto___48952 = cljs.core.chunk_first(seq__48356_48951__$1);
var G__48953 = cljs.core.chunk_rest(seq__48356_48951__$1);
var G__48954 = c__4679__auto___48952;
var G__48955 = cljs.core.count(c__4679__auto___48952);
var G__48956 = (0);
seq__48356_48928 = G__48953;
chunk__48358_48929 = G__48954;
count__48359_48930 = G__48955;
i__48360_48931 = G__48956;
continue;
} else {
var vec__48376_48957 = cljs.core.first(seq__48356_48951__$1);
var k_48958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48376_48957,(0),null);
var v_48959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48376_48957,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_48958);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48958),v_48959);


var G__48961 = cljs.core.next(seq__48356_48951__$1);
var G__48962 = null;
var G__48963 = (0);
var G__48964 = (0);
seq__48356_48928 = G__48961;
chunk__48358_48929 = G__48962;
count__48359_48930 = G__48963;
i__48360_48931 = G__48964;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__48384 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48384,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48384,(1),null);
var seq__48389_48974 = cljs.core.seq(node_children);
var chunk__48391_48975 = null;
var count__48392_48976 = (0);
var i__48393_48977 = (0);
while(true){
if((i__48393_48977 < count__48392_48976)){
var child_struct_48978 = chunk__48391_48975.cljs$core$IIndexed$_nth$arity$2(null,i__48393_48977);
if((!((child_struct_48978 == null)))){
if(typeof child_struct_48978 === 'string'){
var text_48979 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48979),child_struct_48978].join(''));
} else {
var children_48980 = shadow.dom.svg_node(child_struct_48978);
if(cljs.core.seq_QMARK_(children_48980)){
var seq__48427_48981 = cljs.core.seq(children_48980);
var chunk__48429_48982 = null;
var count__48430_48983 = (0);
var i__48431_48984 = (0);
while(true){
if((i__48431_48984 < count__48430_48983)){
var child_48985 = chunk__48429_48982.cljs$core$IIndexed$_nth$arity$2(null,i__48431_48984);
if(cljs.core.truth_(child_48985)){
node.appendChild(child_48985);


var G__48987 = seq__48427_48981;
var G__48988 = chunk__48429_48982;
var G__48989 = count__48430_48983;
var G__48990 = (i__48431_48984 + (1));
seq__48427_48981 = G__48987;
chunk__48429_48982 = G__48988;
count__48430_48983 = G__48989;
i__48431_48984 = G__48990;
continue;
} else {
var G__48994 = seq__48427_48981;
var G__48995 = chunk__48429_48982;
var G__48996 = count__48430_48983;
var G__48997 = (i__48431_48984 + (1));
seq__48427_48981 = G__48994;
chunk__48429_48982 = G__48995;
count__48430_48983 = G__48996;
i__48431_48984 = G__48997;
continue;
}
} else {
var temp__5753__auto___48998 = cljs.core.seq(seq__48427_48981);
if(temp__5753__auto___48998){
var seq__48427_48999__$1 = temp__5753__auto___48998;
if(cljs.core.chunked_seq_QMARK_(seq__48427_48999__$1)){
var c__4679__auto___49000 = cljs.core.chunk_first(seq__48427_48999__$1);
var G__49001 = cljs.core.chunk_rest(seq__48427_48999__$1);
var G__49002 = c__4679__auto___49000;
var G__49003 = cljs.core.count(c__4679__auto___49000);
var G__49004 = (0);
seq__48427_48981 = G__49001;
chunk__48429_48982 = G__49002;
count__48430_48983 = G__49003;
i__48431_48984 = G__49004;
continue;
} else {
var child_49005 = cljs.core.first(seq__48427_48999__$1);
if(cljs.core.truth_(child_49005)){
node.appendChild(child_49005);


var G__49006 = cljs.core.next(seq__48427_48999__$1);
var G__49007 = null;
var G__49008 = (0);
var G__49009 = (0);
seq__48427_48981 = G__49006;
chunk__48429_48982 = G__49007;
count__48430_48983 = G__49008;
i__48431_48984 = G__49009;
continue;
} else {
var G__49017 = cljs.core.next(seq__48427_48999__$1);
var G__49018 = null;
var G__49019 = (0);
var G__49020 = (0);
seq__48427_48981 = G__49017;
chunk__48429_48982 = G__49018;
count__48430_48983 = G__49019;
i__48431_48984 = G__49020;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48980);
}
}


var G__49021 = seq__48389_48974;
var G__49022 = chunk__48391_48975;
var G__49023 = count__48392_48976;
var G__49024 = (i__48393_48977 + (1));
seq__48389_48974 = G__49021;
chunk__48391_48975 = G__49022;
count__48392_48976 = G__49023;
i__48393_48977 = G__49024;
continue;
} else {
var G__49025 = seq__48389_48974;
var G__49026 = chunk__48391_48975;
var G__49027 = count__48392_48976;
var G__49028 = (i__48393_48977 + (1));
seq__48389_48974 = G__49025;
chunk__48391_48975 = G__49026;
count__48392_48976 = G__49027;
i__48393_48977 = G__49028;
continue;
}
} else {
var temp__5753__auto___49029 = cljs.core.seq(seq__48389_48974);
if(temp__5753__auto___49029){
var seq__48389_49030__$1 = temp__5753__auto___49029;
if(cljs.core.chunked_seq_QMARK_(seq__48389_49030__$1)){
var c__4679__auto___49031 = cljs.core.chunk_first(seq__48389_49030__$1);
var G__49032 = cljs.core.chunk_rest(seq__48389_49030__$1);
var G__49033 = c__4679__auto___49031;
var G__49034 = cljs.core.count(c__4679__auto___49031);
var G__49035 = (0);
seq__48389_48974 = G__49032;
chunk__48391_48975 = G__49033;
count__48392_48976 = G__49034;
i__48393_48977 = G__49035;
continue;
} else {
var child_struct_49036 = cljs.core.first(seq__48389_49030__$1);
if((!((child_struct_49036 == null)))){
if(typeof child_struct_49036 === 'string'){
var text_49038 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49038),child_struct_49036].join(''));
} else {
var children_49040 = shadow.dom.svg_node(child_struct_49036);
if(cljs.core.seq_QMARK_(children_49040)){
var seq__48446_49042 = cljs.core.seq(children_49040);
var chunk__48448_49043 = null;
var count__48449_49044 = (0);
var i__48450_49045 = (0);
while(true){
if((i__48450_49045 < count__48449_49044)){
var child_49046 = chunk__48448_49043.cljs$core$IIndexed$_nth$arity$2(null,i__48450_49045);
if(cljs.core.truth_(child_49046)){
node.appendChild(child_49046);


var G__49047 = seq__48446_49042;
var G__49048 = chunk__48448_49043;
var G__49049 = count__48449_49044;
var G__49050 = (i__48450_49045 + (1));
seq__48446_49042 = G__49047;
chunk__48448_49043 = G__49048;
count__48449_49044 = G__49049;
i__48450_49045 = G__49050;
continue;
} else {
var G__49051 = seq__48446_49042;
var G__49052 = chunk__48448_49043;
var G__49053 = count__48449_49044;
var G__49054 = (i__48450_49045 + (1));
seq__48446_49042 = G__49051;
chunk__48448_49043 = G__49052;
count__48449_49044 = G__49053;
i__48450_49045 = G__49054;
continue;
}
} else {
var temp__5753__auto___49055__$1 = cljs.core.seq(seq__48446_49042);
if(temp__5753__auto___49055__$1){
var seq__48446_49056__$1 = temp__5753__auto___49055__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48446_49056__$1)){
var c__4679__auto___49057 = cljs.core.chunk_first(seq__48446_49056__$1);
var G__49058 = cljs.core.chunk_rest(seq__48446_49056__$1);
var G__49059 = c__4679__auto___49057;
var G__49060 = cljs.core.count(c__4679__auto___49057);
var G__49061 = (0);
seq__48446_49042 = G__49058;
chunk__48448_49043 = G__49059;
count__48449_49044 = G__49060;
i__48450_49045 = G__49061;
continue;
} else {
var child_49064 = cljs.core.first(seq__48446_49056__$1);
if(cljs.core.truth_(child_49064)){
node.appendChild(child_49064);


var G__49065 = cljs.core.next(seq__48446_49056__$1);
var G__49066 = null;
var G__49067 = (0);
var G__49068 = (0);
seq__48446_49042 = G__49065;
chunk__48448_49043 = G__49066;
count__48449_49044 = G__49067;
i__48450_49045 = G__49068;
continue;
} else {
var G__49069 = cljs.core.next(seq__48446_49056__$1);
var G__49070 = null;
var G__49071 = (0);
var G__49072 = (0);
seq__48446_49042 = G__49069;
chunk__48448_49043 = G__49070;
count__48449_49044 = G__49071;
i__48450_49045 = G__49072;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49040);
}
}


var G__49076 = cljs.core.next(seq__48389_49030__$1);
var G__49077 = null;
var G__49078 = (0);
var G__49079 = (0);
seq__48389_48974 = G__49076;
chunk__48391_48975 = G__49077;
count__48392_48976 = G__49078;
i__48393_48977 = G__49079;
continue;
} else {
var G__49080 = cljs.core.next(seq__48389_49030__$1);
var G__49081 = null;
var G__49082 = (0);
var G__49083 = (0);
seq__48389_48974 = G__49080;
chunk__48391_48975 = G__49081;
count__48392_48976 = G__49082;
i__48393_48977 = G__49083;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___49087 = arguments.length;
var i__4865__auto___49089 = (0);
while(true){
if((i__4865__auto___49089 < len__4864__auto___49087)){
args__4870__auto__.push((arguments[i__4865__auto___49089]));

var G__49090 = (i__4865__auto___49089 + (1));
i__4865__auto___49089 = G__49090;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq48485){
var G__48486 = cljs.core.first(seq48485);
var seq48485__$1 = cljs.core.next(seq48485);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48486,seq48485__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__48514 = arguments.length;
switch (G__48514) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__44375__auto___49098 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44376__auto__ = (function (){var switch__44166__auto__ = (function (state_48528){
var state_val_48529 = (state_48528[(1)]);
if((state_val_48529 === (1))){
var state_48528__$1 = state_48528;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48528__$1,(2),once_or_cleanup);
} else {
if((state_val_48529 === (2))){
var inst_48525 = (state_48528[(2)]);
var inst_48526 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_48528__$1 = (function (){var statearr_48536 = state_48528;
(statearr_48536[(7)] = inst_48525);

return statearr_48536;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48528__$1,inst_48526);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__44167__auto__ = null;
var shadow$dom$state_machine__44167__auto____0 = (function (){
var statearr_48538 = [null,null,null,null,null,null,null,null];
(statearr_48538[(0)] = shadow$dom$state_machine__44167__auto__);

(statearr_48538[(1)] = (1));

return statearr_48538;
});
var shadow$dom$state_machine__44167__auto____1 = (function (state_48528){
while(true){
var ret_value__44168__auto__ = (function (){try{while(true){
var result__44169__auto__ = switch__44166__auto__(state_48528);
if(cljs.core.keyword_identical_QMARK_(result__44169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44169__auto__;
}
break;
}
}catch (e48540){var ex__44170__auto__ = e48540;
var statearr_48542_49107 = state_48528;
(statearr_48542_49107[(2)] = ex__44170__auto__);


if(cljs.core.seq((state_48528[(4)]))){
var statearr_48543_49108 = state_48528;
(statearr_48543_49108[(1)] = cljs.core.first((state_48528[(4)])));

} else {
throw ex__44170__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49110 = state_48528;
state_48528 = G__49110;
continue;
} else {
return ret_value__44168__auto__;
}
break;
}
});
shadow$dom$state_machine__44167__auto__ = function(state_48528){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__44167__auto____0.call(this);
case 1:
return shadow$dom$state_machine__44167__auto____1.call(this,state_48528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__44167__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__44167__auto____0;
shadow$dom$state_machine__44167__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__44167__auto____1;
return shadow$dom$state_machine__44167__auto__;
})()
})();
var state__44377__auto__ = (function (){var statearr_48545 = f__44376__auto__();
(statearr_48545[(6)] = c__44375__auto___49098);

return statearr_48545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44377__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
