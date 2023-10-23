goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__52094){
var map__52095 = p__52094;
var map__52095__$1 = cljs.core.__destructure_map(map__52095);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52095__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52095__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52095__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52095__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4253__auto__ = child_of;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__52097_52125 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__52098_52126 = null;
var count__52099_52127 = (0);
var i__52100_52128 = (0);
while(true){
if((i__52100_52128 < count__52099_52127)){
var vec__52112_52129 = chunk__52098_52126.cljs$core$IIndexed$_nth$arity$2(null,i__52100_52128);
var k_52130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52112_52129,(0),null);
var cb_52131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52112_52129,(1),null);
try{var G__52116_52132 = cljs.core.deref(re_frame.trace.traces);
(cb_52131.cljs$core$IFn$_invoke$arity$1 ? cb_52131.cljs$core$IFn$_invoke$arity$1(G__52116_52132) : cb_52131.call(null,G__52116_52132));
}catch (e52115){var e_52133 = e52115;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_52130,"while storing",cljs.core.deref(re_frame.trace.traces),e_52133], 0));
}

var G__52134 = seq__52097_52125;
var G__52135 = chunk__52098_52126;
var G__52136 = count__52099_52127;
var G__52137 = (i__52100_52128 + (1));
seq__52097_52125 = G__52134;
chunk__52098_52126 = G__52135;
count__52099_52127 = G__52136;
i__52100_52128 = G__52137;
continue;
} else {
var temp__5753__auto___52138 = cljs.core.seq(seq__52097_52125);
if(temp__5753__auto___52138){
var seq__52097_52139__$1 = temp__5753__auto___52138;
if(cljs.core.chunked_seq_QMARK_(seq__52097_52139__$1)){
var c__4679__auto___52140 = cljs.core.chunk_first(seq__52097_52139__$1);
var G__52141 = cljs.core.chunk_rest(seq__52097_52139__$1);
var G__52142 = c__4679__auto___52140;
var G__52143 = cljs.core.count(c__4679__auto___52140);
var G__52144 = (0);
seq__52097_52125 = G__52141;
chunk__52098_52126 = G__52142;
count__52099_52127 = G__52143;
i__52100_52128 = G__52144;
continue;
} else {
var vec__52117_52145 = cljs.core.first(seq__52097_52139__$1);
var k_52146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52117_52145,(0),null);
var cb_52147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52117_52145,(1),null);
try{var G__52121_52148 = cljs.core.deref(re_frame.trace.traces);
(cb_52147.cljs$core$IFn$_invoke$arity$1 ? cb_52147.cljs$core$IFn$_invoke$arity$1(G__52121_52148) : cb_52147.call(null,G__52121_52148));
}catch (e52120){var e_52149 = e52120;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_52146,"while storing",cljs.core.deref(re_frame.trace.traces),e_52149], 0));
}

var G__52150 = cljs.core.next(seq__52097_52139__$1);
var G__52151 = null;
var G__52152 = (0);
var G__52153 = (0);
seq__52097_52125 = G__52150;
chunk__52098_52126 = G__52151;
count__52099_52127 = G__52152;
i__52100_52128 = G__52153;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
