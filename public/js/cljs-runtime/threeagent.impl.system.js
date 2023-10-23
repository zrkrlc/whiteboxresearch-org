goog.provide('threeagent.impl.system');
threeagent.impl.system.dispatch_on_added = (function threeagent$impl$system$dispatch_on_added(context,entity_context,entity_id,entity_obj,entity_config){
var systems = context.systems;
var callbacks = [];
var seq__42068_42227 = cljs.core.seq(entity_config);
var chunk__42069_42228 = null;
var count__42070_42229 = (0);
var i__42071_42230 = (0);
while(true){
if((i__42071_42230 < count__42070_42229)){
var vec__42082_42231 = chunk__42069_42228.cljs$core$IIndexed$_nth$arity$2(null,i__42071_42230);
var k_42232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42082_42231,(0),null);
var v_42233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42082_42231,(1),null);
var temp__5753__auto___42234 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(systems,k_42232);
if(cljs.core.truth_(temp__5753__auto___42234)){
var sys_42235 = temp__5753__auto___42234;
var cb_42236 = threeagent.system.on_entity_added(sys_42235,entity_context,entity_id,entity_obj,v_42233);
if(cljs.core.fn_QMARK_(cb_42236)){
callbacks.push(cb_42236);
} else {
}
} else {
}


var G__42237 = seq__42068_42227;
var G__42238 = chunk__42069_42228;
var G__42239 = count__42070_42229;
var G__42240 = (i__42071_42230 + (1));
seq__42068_42227 = G__42237;
chunk__42069_42228 = G__42238;
count__42070_42229 = G__42239;
i__42071_42230 = G__42240;
continue;
} else {
var temp__5753__auto___42241 = cljs.core.seq(seq__42068_42227);
if(temp__5753__auto___42241){
var seq__42068_42242__$1 = temp__5753__auto___42241;
if(cljs.core.chunked_seq_QMARK_(seq__42068_42242__$1)){
var c__4679__auto___42243 = cljs.core.chunk_first(seq__42068_42242__$1);
var G__42244 = cljs.core.chunk_rest(seq__42068_42242__$1);
var G__42245 = c__4679__auto___42243;
var G__42246 = cljs.core.count(c__4679__auto___42243);
var G__42247 = (0);
seq__42068_42227 = G__42244;
chunk__42069_42228 = G__42245;
count__42070_42229 = G__42246;
i__42071_42230 = G__42247;
continue;
} else {
var vec__42085_42248 = cljs.core.first(seq__42068_42242__$1);
var k_42249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42085_42248,(0),null);
var v_42250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42085_42248,(1),null);
var temp__5753__auto___42251__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(systems,k_42249);
if(cljs.core.truth_(temp__5753__auto___42251__$1)){
var sys_42252 = temp__5753__auto___42251__$1;
var cb_42253 = threeagent.system.on_entity_added(sys_42252,entity_context,entity_id,entity_obj,v_42250);
if(cljs.core.fn_QMARK_(cb_42253)){
callbacks.push(cb_42253);
} else {
}
} else {
}


var G__42254 = cljs.core.next(seq__42068_42242__$1);
var G__42255 = null;
var G__42256 = (0);
var G__42257 = (0);
seq__42068_42227 = G__42254;
chunk__42069_42228 = G__42255;
count__42070_42229 = G__42256;
i__42071_42230 = G__42257;
continue;
}
} else {
}
}
break;
}

return callbacks;
});
threeagent.impl.system.dispatch_on_removed = (function threeagent$impl$system$dispatch_on_removed(context,entity_context,entity_id,entity_obj,entity_config){
var systems = context.systems;
var callbacks = [];
var seq__42088_42258 = cljs.core.seq(entity_config);
var chunk__42089_42259 = null;
var count__42090_42260 = (0);
var i__42091_42261 = (0);
while(true){
if((i__42091_42261 < count__42090_42260)){
var vec__42116_42262 = chunk__42089_42259.cljs$core$IIndexed$_nth$arity$2(null,i__42091_42261);
var k_42263 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42116_42262,(0),null);
var v_42264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42116_42262,(1),null);
var temp__5753__auto___42265 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(systems,k_42263);
if(cljs.core.truth_(temp__5753__auto___42265)){
var sys_42266 = temp__5753__auto___42265;
var cb_42267 = threeagent.system.on_entity_removed(sys_42266,entity_context,entity_id,entity_obj,v_42264);
if(cljs.core.fn_QMARK_(cb_42267)){
callbacks.push(cb_42267);
} else {
}
} else {
}


var G__42268 = seq__42088_42258;
var G__42269 = chunk__42089_42259;
var G__42270 = count__42090_42260;
var G__42271 = (i__42091_42261 + (1));
seq__42088_42258 = G__42268;
chunk__42089_42259 = G__42269;
count__42090_42260 = G__42270;
i__42091_42261 = G__42271;
continue;
} else {
var temp__5753__auto___42272 = cljs.core.seq(seq__42088_42258);
if(temp__5753__auto___42272){
var seq__42088_42273__$1 = temp__5753__auto___42272;
if(cljs.core.chunked_seq_QMARK_(seq__42088_42273__$1)){
var c__4679__auto___42274 = cljs.core.chunk_first(seq__42088_42273__$1);
var G__42275 = cljs.core.chunk_rest(seq__42088_42273__$1);
var G__42276 = c__4679__auto___42274;
var G__42277 = cljs.core.count(c__4679__auto___42274);
var G__42278 = (0);
seq__42088_42258 = G__42275;
chunk__42089_42259 = G__42276;
count__42090_42260 = G__42277;
i__42091_42261 = G__42278;
continue;
} else {
var vec__42124_42279 = cljs.core.first(seq__42088_42273__$1);
var k_42280 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42124_42279,(0),null);
var v_42281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42124_42279,(1),null);
var temp__5753__auto___42282__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(systems,k_42280);
if(cljs.core.truth_(temp__5753__auto___42282__$1)){
var sys_42283 = temp__5753__auto___42282__$1;
var cb_42284 = threeagent.system.on_entity_removed(sys_42283,entity_context,entity_id,entity_obj,v_42281);
if(cljs.core.fn_QMARK_(cb_42284)){
callbacks.push(cb_42284);
} else {
}
} else {
}


var G__42285 = cljs.core.next(seq__42088_42273__$1);
var G__42286 = null;
var G__42287 = (0);
var G__42288 = (0);
seq__42088_42258 = G__42285;
chunk__42089_42259 = G__42286;
count__42090_42260 = G__42287;
i__42091_42261 = G__42288;
continue;
}
} else {
}
}
break;
}

return callbacks;
});
threeagent.impl.system.dispatch_on_tick = (function threeagent$impl$system$dispatch_on_tick(context,delta_time){
var seq__42127 = cljs.core.seq(context.systems);
var chunk__42128 = null;
var count__42129 = (0);
var i__42130 = (0);
while(true){
if((i__42130 < count__42129)){
var vec__42160 = chunk__42128.cljs$core$IIndexed$_nth$arity$2(null,i__42130);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42160,(0),null);
var system = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42160,(1),null);
threeagent.system.tick(system,delta_time);


var G__42290 = seq__42127;
var G__42291 = chunk__42128;
var G__42292 = count__42129;
var G__42293 = (i__42130 + (1));
seq__42127 = G__42290;
chunk__42128 = G__42291;
count__42129 = G__42292;
i__42130 = G__42293;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__42127);
if(temp__5753__auto__){
var seq__42127__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42127__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__42127__$1);
var G__42294 = cljs.core.chunk_rest(seq__42127__$1);
var G__42295 = c__4679__auto__;
var G__42296 = cljs.core.count(c__4679__auto__);
var G__42297 = (0);
seq__42127 = G__42294;
chunk__42128 = G__42295;
count__42129 = G__42296;
i__42130 = G__42297;
continue;
} else {
var vec__42171 = cljs.core.first(seq__42127__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42171,(0),null);
var system = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42171,(1),null);
threeagent.system.tick(system,delta_time);


var G__42298 = cljs.core.next(seq__42127__$1);
var G__42299 = null;
var G__42300 = (0);
var G__42301 = (0);
seq__42127 = G__42298;
chunk__42128 = G__42299;
count__42129 = G__42300;
i__42130 = G__42301;
continue;
}
} else {
return null;
}
}
break;
}
});
threeagent.impl.system.dispatch_init = (function threeagent$impl$system$dispatch_init(systems,context){
var context__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"systems","systems",-1015374944),systems);
var callbacks = [];
var seq__42187_42302 = cljs.core.seq(systems);
var chunk__42188_42303 = null;
var count__42189_42304 = (0);
var i__42190_42305 = (0);
while(true){
if((i__42190_42305 < count__42189_42304)){
var vec__42197_42306 = chunk__42188_42303.cljs$core$IIndexed$_nth$arity$2(null,i__42190_42305);
var __42307 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42197_42306,(0),null);
var system_42308 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42197_42306,(1),null);
var cb_42309 = threeagent.system.init(system_42308,context__$1);
if(cljs.core.fn_QMARK_(cb_42309)){
callbacks.push(cb_42309);
} else {
}


var G__42310 = seq__42187_42302;
var G__42311 = chunk__42188_42303;
var G__42312 = count__42189_42304;
var G__42313 = (i__42190_42305 + (1));
seq__42187_42302 = G__42310;
chunk__42188_42303 = G__42311;
count__42189_42304 = G__42312;
i__42190_42305 = G__42313;
continue;
} else {
var temp__5753__auto___42314 = cljs.core.seq(seq__42187_42302);
if(temp__5753__auto___42314){
var seq__42187_42315__$1 = temp__5753__auto___42314;
if(cljs.core.chunked_seq_QMARK_(seq__42187_42315__$1)){
var c__4679__auto___42316 = cljs.core.chunk_first(seq__42187_42315__$1);
var G__42317 = cljs.core.chunk_rest(seq__42187_42315__$1);
var G__42318 = c__4679__auto___42316;
var G__42319 = cljs.core.count(c__4679__auto___42316);
var G__42320 = (0);
seq__42187_42302 = G__42317;
chunk__42188_42303 = G__42318;
count__42189_42304 = G__42319;
i__42190_42305 = G__42320;
continue;
} else {
var vec__42200_42321 = cljs.core.first(seq__42187_42315__$1);
var __42322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42200_42321,(0),null);
var system_42323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42200_42321,(1),null);
var cb_42324 = threeagent.system.init(system_42323,context__$1);
if(cljs.core.fn_QMARK_(cb_42324)){
callbacks.push(cb_42324);
} else {
}


var G__42325 = cljs.core.next(seq__42187_42315__$1);
var G__42326 = null;
var G__42327 = (0);
var G__42328 = (0);
seq__42187_42302 = G__42325;
chunk__42188_42303 = G__42326;
count__42189_42304 = G__42327;
i__42190_42305 = G__42328;
continue;
}
} else {
}
}
break;
}

var seq__42203 = cljs.core.seq(callbacks);
var chunk__42204 = null;
var count__42205 = (0);
var i__42206 = (0);
while(true){
if((i__42206 < count__42205)){
var cb = chunk__42204.cljs$core$IIndexed$_nth$arity$2(null,i__42206);
(cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));


var G__42329 = seq__42203;
var G__42330 = chunk__42204;
var G__42331 = count__42205;
var G__42332 = (i__42206 + (1));
seq__42203 = G__42329;
chunk__42204 = G__42330;
count__42205 = G__42331;
i__42206 = G__42332;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__42203);
if(temp__5753__auto__){
var seq__42203__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42203__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__42203__$1);
var G__42333 = cljs.core.chunk_rest(seq__42203__$1);
var G__42334 = c__4679__auto__;
var G__42335 = cljs.core.count(c__4679__auto__);
var G__42336 = (0);
seq__42203 = G__42333;
chunk__42204 = G__42334;
count__42205 = G__42335;
i__42206 = G__42336;
continue;
} else {
var cb = cljs.core.first(seq__42203__$1);
(cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));


var G__42337 = cljs.core.next(seq__42203__$1);
var G__42338 = null;
var G__42339 = (0);
var G__42340 = (0);
seq__42203 = G__42337;
chunk__42204 = G__42338;
count__42205 = G__42339;
i__42206 = G__42340;
continue;
}
} else {
return null;
}
}
break;
}
});
threeagent.impl.system.dispatch_destroy = (function threeagent$impl$system$dispatch_destroy(systems,context){
var context__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"systems","systems",-1015374944),systems);
var callbacks = [];
var seq__42207_42341 = cljs.core.seq(systems);
var chunk__42208_42342 = null;
var count__42209_42343 = (0);
var i__42210_42344 = (0);
while(true){
if((i__42210_42344 < count__42209_42343)){
var vec__42217_42345 = chunk__42208_42342.cljs$core$IIndexed$_nth$arity$2(null,i__42210_42344);
var __42346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42217_42345,(0),null);
var system_42347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42217_42345,(1),null);
var cb_42348 = threeagent.system.destroy(system_42347,context__$1);
if(cljs.core.fn_QMARK_(cb_42348)){
callbacks.push(cb_42348);
} else {
}


var G__42349 = seq__42207_42341;
var G__42350 = chunk__42208_42342;
var G__42351 = count__42209_42343;
var G__42352 = (i__42210_42344 + (1));
seq__42207_42341 = G__42349;
chunk__42208_42342 = G__42350;
count__42209_42343 = G__42351;
i__42210_42344 = G__42352;
continue;
} else {
var temp__5753__auto___42353 = cljs.core.seq(seq__42207_42341);
if(temp__5753__auto___42353){
var seq__42207_42354__$1 = temp__5753__auto___42353;
if(cljs.core.chunked_seq_QMARK_(seq__42207_42354__$1)){
var c__4679__auto___42355 = cljs.core.chunk_first(seq__42207_42354__$1);
var G__42356 = cljs.core.chunk_rest(seq__42207_42354__$1);
var G__42357 = c__4679__auto___42355;
var G__42358 = cljs.core.count(c__4679__auto___42355);
var G__42359 = (0);
seq__42207_42341 = G__42356;
chunk__42208_42342 = G__42357;
count__42209_42343 = G__42358;
i__42210_42344 = G__42359;
continue;
} else {
var vec__42220_42360 = cljs.core.first(seq__42207_42354__$1);
var __42361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42220_42360,(0),null);
var system_42362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42220_42360,(1),null);
var cb_42363 = threeagent.system.destroy(system_42362,context__$1);
if(cljs.core.fn_QMARK_(cb_42363)){
callbacks.push(cb_42363);
} else {
}


var G__42364 = cljs.core.next(seq__42207_42354__$1);
var G__42365 = null;
var G__42366 = (0);
var G__42367 = (0);
seq__42207_42341 = G__42364;
chunk__42208_42342 = G__42365;
count__42209_42343 = G__42366;
i__42210_42344 = G__42367;
continue;
}
} else {
}
}
break;
}

var seq__42223 = cljs.core.seq(callbacks);
var chunk__42224 = null;
var count__42225 = (0);
var i__42226 = (0);
while(true){
if((i__42226 < count__42225)){
var cb = chunk__42224.cljs$core$IIndexed$_nth$arity$2(null,i__42226);
(cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));


var G__42368 = seq__42223;
var G__42369 = chunk__42224;
var G__42370 = count__42225;
var G__42371 = (i__42226 + (1));
seq__42223 = G__42368;
chunk__42224 = G__42369;
count__42225 = G__42370;
i__42226 = G__42371;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__42223);
if(temp__5753__auto__){
var seq__42223__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42223__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__42223__$1);
var G__42372 = cljs.core.chunk_rest(seq__42223__$1);
var G__42373 = c__4679__auto__;
var G__42374 = cljs.core.count(c__4679__auto__);
var G__42375 = (0);
seq__42223 = G__42372;
chunk__42224 = G__42373;
count__42225 = G__42374;
i__42226 = G__42375;
continue;
} else {
var cb = cljs.core.first(seq__42223__$1);
(cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));


var G__42376 = cljs.core.next(seq__42223__$1);
var G__42377 = null;
var G__42378 = (0);
var G__42379 = (0);
seq__42223 = G__42376;
chunk__42224 = G__42377;
count__42225 = G__42378;
i__42226 = G__42379;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=threeagent.impl.system.js.map
