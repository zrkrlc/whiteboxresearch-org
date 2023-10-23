goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__46181,res){
var map__46182 = p__46181;
var map__46182__$1 = cljs.core.__destructure_map(map__46182);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46182__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46182__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__46185 = res;
var G__46185__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46185,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__46185);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46185__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__46185__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__46192 = arguments.length;
switch (G__46192) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__46201,msg,handlers,timeout_after_ms){
var map__46203 = p__46201;
var map__46203__$1 = cljs.core.__destructure_map(map__46203);
var runtime = map__46203__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46203__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___46400 = arguments.length;
var i__4865__auto___46401 = (0);
while(true){
if((i__4865__auto___46401 < len__4864__auto___46400)){
args__4870__auto__.push((arguments[i__4865__auto___46401]));

var G__46402 = (i__4865__auto___46401 + (1));
i__4865__auto___46401 = G__46402;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__46215,ev,args){
var map__46216 = p__46215;
var map__46216__$1 = cljs.core.__destructure_map(map__46216);
var runtime = map__46216__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46216__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__46217 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__46221 = null;
var count__46222 = (0);
var i__46223 = (0);
while(true){
if((i__46223 < count__46222)){
var ext = chunk__46221.cljs$core$IIndexed$_nth$arity$2(null,i__46223);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__46413 = seq__46217;
var G__46414 = chunk__46221;
var G__46415 = count__46222;
var G__46416 = (i__46223 + (1));
seq__46217 = G__46413;
chunk__46221 = G__46414;
count__46222 = G__46415;
i__46223 = G__46416;
continue;
} else {
var G__46421 = seq__46217;
var G__46422 = chunk__46221;
var G__46423 = count__46222;
var G__46424 = (i__46223 + (1));
seq__46217 = G__46421;
chunk__46221 = G__46422;
count__46222 = G__46423;
i__46223 = G__46424;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46217);
if(temp__5753__auto__){
var seq__46217__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46217__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__46217__$1);
var G__46429 = cljs.core.chunk_rest(seq__46217__$1);
var G__46430 = c__4679__auto__;
var G__46431 = cljs.core.count(c__4679__auto__);
var G__46432 = (0);
seq__46217 = G__46429;
chunk__46221 = G__46430;
count__46222 = G__46431;
i__46223 = G__46432;
continue;
} else {
var ext = cljs.core.first(seq__46217__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__46443 = cljs.core.next(seq__46217__$1);
var G__46444 = null;
var G__46445 = (0);
var G__46446 = (0);
seq__46217 = G__46443;
chunk__46221 = G__46444;
count__46222 = G__46445;
i__46223 = G__46446;
continue;
} else {
var G__46447 = cljs.core.next(seq__46217__$1);
var G__46448 = null;
var G__46449 = (0);
var G__46450 = (0);
seq__46217 = G__46447;
chunk__46221 = G__46448;
count__46222 = G__46449;
i__46223 = G__46450;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq46208){
var G__46209 = cljs.core.first(seq46208);
var seq46208__$1 = cljs.core.next(seq46208);
var G__46210 = cljs.core.first(seq46208__$1);
var seq46208__$2 = cljs.core.next(seq46208__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46209,G__46210,seq46208__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__46248,p__46249){
var map__46250 = p__46248;
var map__46250__$1 = cljs.core.__destructure_map(map__46250);
var runtime = map__46250__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46250__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__46252 = p__46249;
var map__46252__$1 = cljs.core.__destructure_map(map__46252);
var msg = map__46252__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46252__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__46254 = cljs.core.deref(state_ref);
var map__46254__$1 = cljs.core.__destructure_map(map__46254);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46254__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46254__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__46261){
var map__46263 = p__46261;
var map__46263__$1 = cljs.core.__destructure_map(map__46263);
var runtime = map__46263__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46263__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__46267,msg){
var map__46268 = p__46267;
var map__46268__$1 = cljs.core.__destructure_map(map__46268);
var runtime = map__46268__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46268__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__46278,key,p__46279){
var map__46280 = p__46278;
var map__46280__$1 = cljs.core.__destructure_map(map__46280);
var state = map__46280__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46280__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__46281 = p__46279;
var map__46281__$1 = cljs.core.__destructure_map(map__46281);
var spec = map__46281__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46281__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__46288,key,spec){
var map__46290 = p__46288;
var map__46290__$1 = cljs.core.__destructure_map(map__46290);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46290__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__46294_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__46294_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__46295_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__46295_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__46296_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__46296_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__46297_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__46297_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__46298_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__46298_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__46309,key){
var map__46310 = p__46309;
var map__46310__$1 = cljs.core.__destructure_map(map__46310);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46310__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__46314,msg){
var map__46315 = p__46314;
var map__46315__$1 = cljs.core.__destructure_map(map__46315);
var runtime = map__46315__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46315__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__46326,p__46327){
var map__46328 = p__46326;
var map__46328__$1 = cljs.core.__destructure_map(map__46328);
var runtime = map__46328__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46328__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__46329 = p__46327;
var map__46329__$1 = cljs.core.__destructure_map(map__46329);
var msg = map__46329__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46329__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46329__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__46369 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__46371 = null;
var count__46372 = (0);
var i__46373 = (0);
while(true){
if((i__46373 < count__46372)){
var map__46377 = chunk__46371.cljs$core$IIndexed$_nth$arity$2(null,i__46373);
var map__46377__$1 = cljs.core.__destructure_map(map__46377);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46377__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__46533 = seq__46369;
var G__46534 = chunk__46371;
var G__46535 = count__46372;
var G__46536 = (i__46373 + (1));
seq__46369 = G__46533;
chunk__46371 = G__46534;
count__46372 = G__46535;
i__46373 = G__46536;
continue;
} else {
var G__46537 = seq__46369;
var G__46538 = chunk__46371;
var G__46539 = count__46372;
var G__46540 = (i__46373 + (1));
seq__46369 = G__46537;
chunk__46371 = G__46538;
count__46372 = G__46539;
i__46373 = G__46540;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46369);
if(temp__5753__auto__){
var seq__46369__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46369__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__46369__$1);
var G__46543 = cljs.core.chunk_rest(seq__46369__$1);
var G__46544 = c__4679__auto__;
var G__46545 = cljs.core.count(c__4679__auto__);
var G__46546 = (0);
seq__46369 = G__46543;
chunk__46371 = G__46544;
count__46372 = G__46545;
i__46373 = G__46546;
continue;
} else {
var map__46378 = cljs.core.first(seq__46369__$1);
var map__46378__$1 = cljs.core.__destructure_map(map__46378);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46378__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__46549 = cljs.core.next(seq__46369__$1);
var G__46550 = null;
var G__46551 = (0);
var G__46552 = (0);
seq__46369 = G__46549;
chunk__46371 = G__46550;
count__46372 = G__46551;
i__46373 = G__46552;
continue;
} else {
var G__46553 = cljs.core.next(seq__46369__$1);
var G__46554 = null;
var G__46555 = (0);
var G__46556 = (0);
seq__46369 = G__46553;
chunk__46371 = G__46554;
count__46372 = G__46555;
i__46373 = G__46556;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
