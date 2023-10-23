goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__52412 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__52413 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__52413);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___52497 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___52497)){
var new_db_52498 = temp__5753__auto___52497;
var fexpr__52420_52499 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__52420_52499.cljs$core$IFn$_invoke$arity$1 ? fexpr__52420_52499.cljs$core$IFn$_invoke$arity$1(new_db_52498) : fexpr__52420_52499.call(null,new_db_52498));
} else {
}

var seq__52434 = cljs.core.seq(effects_without_db);
var chunk__52435 = null;
var count__52436 = (0);
var i__52437 = (0);
while(true){
if((i__52437 < count__52436)){
var vec__52444 = chunk__52435.cljs$core$IIndexed$_nth$arity$2(null,i__52437);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52444,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52444,(1),null);
var temp__5751__auto___52500 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___52500)){
var effect_fn_52501 = temp__5751__auto___52500;
(effect_fn_52501.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52501.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52501.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52502 = seq__52434;
var G__52503 = chunk__52435;
var G__52504 = count__52436;
var G__52505 = (i__52437 + (1));
seq__52434 = G__52502;
chunk__52435 = G__52503;
count__52436 = G__52504;
i__52437 = G__52505;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52434);
if(temp__5753__auto__){
var seq__52434__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52434__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__52434__$1);
var G__52506 = cljs.core.chunk_rest(seq__52434__$1);
var G__52507 = c__4679__auto__;
var G__52508 = cljs.core.count(c__4679__auto__);
var G__52509 = (0);
seq__52434 = G__52506;
chunk__52435 = G__52507;
count__52436 = G__52508;
i__52437 = G__52509;
continue;
} else {
var vec__52447 = cljs.core.first(seq__52434__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52447,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52447,(1),null);
var temp__5751__auto___52510 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___52510)){
var effect_fn_52511 = temp__5751__auto___52510;
(effect_fn_52511.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52511.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52511.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52512 = cljs.core.next(seq__52434__$1);
var G__52513 = null;
var G__52514 = (0);
var G__52515 = (0);
seq__52434 = G__52512;
chunk__52435 = G__52513;
count__52436 = G__52514;
i__52437 = G__52515;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__52070__auto___52516 = re_frame.interop.now();
var duration__52071__auto___52517 = (end__52070__auto___52516 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__52071__auto___52517,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__52070__auto___52516);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__52412);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___52518 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___52518)){
var new_db_52519 = temp__5753__auto___52518;
var fexpr__52450_52520 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__52450_52520.cljs$core$IFn$_invoke$arity$1 ? fexpr__52450_52520.cljs$core$IFn$_invoke$arity$1(new_db_52519) : fexpr__52450_52520.call(null,new_db_52519));
} else {
}

var seq__52451 = cljs.core.seq(effects_without_db);
var chunk__52452 = null;
var count__52453 = (0);
var i__52454 = (0);
while(true){
if((i__52454 < count__52453)){
var vec__52461 = chunk__52452.cljs$core$IIndexed$_nth$arity$2(null,i__52454);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52461,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52461,(1),null);
var temp__5751__auto___52521 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___52521)){
var effect_fn_52522 = temp__5751__auto___52521;
(effect_fn_52522.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52522.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52522.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52523 = seq__52451;
var G__52524 = chunk__52452;
var G__52525 = count__52453;
var G__52526 = (i__52454 + (1));
seq__52451 = G__52523;
chunk__52452 = G__52524;
count__52453 = G__52525;
i__52454 = G__52526;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52451);
if(temp__5753__auto__){
var seq__52451__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52451__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__52451__$1);
var G__52527 = cljs.core.chunk_rest(seq__52451__$1);
var G__52528 = c__4679__auto__;
var G__52529 = cljs.core.count(c__4679__auto__);
var G__52530 = (0);
seq__52451 = G__52527;
chunk__52452 = G__52528;
count__52453 = G__52529;
i__52454 = G__52530;
continue;
} else {
var vec__52464 = cljs.core.first(seq__52451__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52464,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52464,(1),null);
var temp__5751__auto___52531 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___52531)){
var effect_fn_52532 = temp__5751__auto___52531;
(effect_fn_52532.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52532.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52532.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52533 = cljs.core.next(seq__52451__$1);
var G__52534 = null;
var G__52535 = (0);
var G__52536 = (0);
seq__52451 = G__52533;
chunk__52452 = G__52534;
count__52453 = G__52535;
i__52454 = G__52536;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__52467){
var map__52468 = p__52467;
var map__52468__$1 = cljs.core.__destructure_map(map__52468);
var effect = map__52468__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52468__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52468__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__52469 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52470 = null;
var count__52471 = (0);
var i__52472 = (0);
while(true){
if((i__52472 < count__52471)){
var effect = chunk__52470.cljs$core$IIndexed$_nth$arity$2(null,i__52472);
re_frame.fx.dispatch_later(effect);


var G__52537 = seq__52469;
var G__52538 = chunk__52470;
var G__52539 = count__52471;
var G__52540 = (i__52472 + (1));
seq__52469 = G__52537;
chunk__52470 = G__52538;
count__52471 = G__52539;
i__52472 = G__52540;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52469);
if(temp__5753__auto__){
var seq__52469__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52469__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__52469__$1);
var G__52541 = cljs.core.chunk_rest(seq__52469__$1);
var G__52542 = c__4679__auto__;
var G__52543 = cljs.core.count(c__4679__auto__);
var G__52544 = (0);
seq__52469 = G__52541;
chunk__52470 = G__52542;
count__52471 = G__52543;
i__52472 = G__52544;
continue;
} else {
var effect = cljs.core.first(seq__52469__$1);
re_frame.fx.dispatch_later(effect);


var G__52545 = cljs.core.next(seq__52469__$1);
var G__52546 = null;
var G__52547 = (0);
var G__52548 = (0);
seq__52469 = G__52545;
chunk__52470 = G__52546;
count__52471 = G__52547;
i__52472 = G__52548;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__52473 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__52474 = null;
var count__52475 = (0);
var i__52476 = (0);
while(true){
if((i__52476 < count__52475)){
var vec__52483 = chunk__52474.cljs$core$IIndexed$_nth$arity$2(null,i__52476);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52483,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52483,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___52549 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___52549)){
var effect_fn_52550 = temp__5751__auto___52549;
(effect_fn_52550.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52550.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52550.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__52551 = seq__52473;
var G__52552 = chunk__52474;
var G__52553 = count__52475;
var G__52554 = (i__52476 + (1));
seq__52473 = G__52551;
chunk__52474 = G__52552;
count__52475 = G__52553;
i__52476 = G__52554;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52473);
if(temp__5753__auto__){
var seq__52473__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52473__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__52473__$1);
var G__52555 = cljs.core.chunk_rest(seq__52473__$1);
var G__52556 = c__4679__auto__;
var G__52557 = cljs.core.count(c__4679__auto__);
var G__52558 = (0);
seq__52473 = G__52555;
chunk__52474 = G__52556;
count__52475 = G__52557;
i__52476 = G__52558;
continue;
} else {
var vec__52486 = cljs.core.first(seq__52473__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52486,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52486,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___52559 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___52559)){
var effect_fn_52560 = temp__5751__auto___52559;
(effect_fn_52560.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52560.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52560.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__52561 = cljs.core.next(seq__52473__$1);
var G__52562 = null;
var G__52563 = (0);
var G__52564 = (0);
seq__52473 = G__52561;
chunk__52474 = G__52562;
count__52475 = G__52563;
i__52476 = G__52564;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__52489 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52490 = null;
var count__52491 = (0);
var i__52492 = (0);
while(true){
if((i__52492 < count__52491)){
var event = chunk__52490.cljs$core$IIndexed$_nth$arity$2(null,i__52492);
re_frame.router.dispatch(event);


var G__52565 = seq__52489;
var G__52566 = chunk__52490;
var G__52567 = count__52491;
var G__52568 = (i__52492 + (1));
seq__52489 = G__52565;
chunk__52490 = G__52566;
count__52491 = G__52567;
i__52492 = G__52568;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52489);
if(temp__5753__auto__){
var seq__52489__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52489__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__52489__$1);
var G__52569 = cljs.core.chunk_rest(seq__52489__$1);
var G__52570 = c__4679__auto__;
var G__52571 = cljs.core.count(c__4679__auto__);
var G__52572 = (0);
seq__52489 = G__52569;
chunk__52490 = G__52570;
count__52491 = G__52571;
i__52492 = G__52572;
continue;
} else {
var event = cljs.core.first(seq__52489__$1);
re_frame.router.dispatch(event);


var G__52573 = cljs.core.next(seq__52489__$1);
var G__52574 = null;
var G__52575 = (0);
var G__52576 = (0);
seq__52489 = G__52573;
chunk__52490 = G__52574;
count__52491 = G__52575;
i__52492 = G__52576;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__52493 = cljs.core.seq(value);
var chunk__52494 = null;
var count__52495 = (0);
var i__52496 = (0);
while(true){
if((i__52496 < count__52495)){
var event = chunk__52494.cljs$core$IIndexed$_nth$arity$2(null,i__52496);
clear_event(event);


var G__52577 = seq__52493;
var G__52578 = chunk__52494;
var G__52579 = count__52495;
var G__52580 = (i__52496 + (1));
seq__52493 = G__52577;
chunk__52494 = G__52578;
count__52495 = G__52579;
i__52496 = G__52580;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52493);
if(temp__5753__auto__){
var seq__52493__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52493__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__52493__$1);
var G__52581 = cljs.core.chunk_rest(seq__52493__$1);
var G__52582 = c__4679__auto__;
var G__52583 = cljs.core.count(c__4679__auto__);
var G__52584 = (0);
seq__52493 = G__52581;
chunk__52494 = G__52582;
count__52495 = G__52583;
i__52496 = G__52584;
continue;
} else {
var event = cljs.core.first(seq__52493__$1);
clear_event(event);


var G__52585 = cljs.core.next(seq__52493__$1);
var G__52586 = null;
var G__52587 = (0);
var G__52588 = (0);
seq__52493 = G__52585;
chunk__52494 = G__52586;
count__52495 = G__52587;
i__52496 = G__52588;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
