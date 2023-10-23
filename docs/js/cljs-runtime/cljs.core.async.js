goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__44469 = arguments.length;
switch (G__44469) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44471 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44471 = (function (f,blockable,meta44472){
this.f = f;
this.blockable = blockable;
this.meta44472 = meta44472;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44473,meta44472__$1){
var self__ = this;
var _44473__$1 = this;
return (new cljs.core.async.t_cljs$core$async44471(self__.f,self__.blockable,meta44472__$1));
}));

(cljs.core.async.t_cljs$core$async44471.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44473){
var self__ = this;
var _44473__$1 = this;
return self__.meta44472;
}));

(cljs.core.async.t_cljs$core$async44471.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44471.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44471.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async44471.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async44471.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta44472","meta44472",-2018941350,null)], null);
}));

(cljs.core.async.t_cljs$core$async44471.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44471.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44471");

(cljs.core.async.t_cljs$core$async44471.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async44471");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44471.
 */
cljs.core.async.__GT_t_cljs$core$async44471 = (function cljs$core$async$__GT_t_cljs$core$async44471(f__$1,blockable__$1,meta44472){
return (new cljs.core.async.t_cljs$core$async44471(f__$1,blockable__$1,meta44472));
});

}

return (new cljs.core.async.t_cljs$core$async44471(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__44504 = arguments.length;
switch (G__44504) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__44528 = arguments.length;
switch (G__44528) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__44550 = arguments.length;
switch (G__44550) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_47378 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47378) : fn1.call(null,val_47378));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47378) : fn1.call(null,val_47378));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__44570 = arguments.length;
switch (G__44570) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___47385 = n;
var x_47386 = (0);
while(true){
if((x_47386 < n__4741__auto___47385)){
(a[x_47386] = x_47386);

var G__47387 = (x_47386 + (1));
x_47386 = G__47387;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44587 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44587 = (function (flag,meta44588){
this.flag = flag;
this.meta44588 = meta44588;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44587.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44589,meta44588__$1){
var self__ = this;
var _44589__$1 = this;
return (new cljs.core.async.t_cljs$core$async44587(self__.flag,meta44588__$1));
}));

(cljs.core.async.t_cljs$core$async44587.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44589){
var self__ = this;
var _44589__$1 = this;
return self__.meta44588;
}));

(cljs.core.async.t_cljs$core$async44587.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44587.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async44587.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44587.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async44587.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta44588","meta44588",870850009,null)], null);
}));

(cljs.core.async.t_cljs$core$async44587.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44587.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44587");

(cljs.core.async.t_cljs$core$async44587.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async44587");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44587.
 */
cljs.core.async.__GT_t_cljs$core$async44587 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async44587(flag__$1,meta44588){
return (new cljs.core.async.t_cljs$core$async44587(flag__$1,meta44588));
});

}

return (new cljs.core.async.t_cljs$core$async44587(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44592 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44592 = (function (flag,cb,meta44593){
this.flag = flag;
this.cb = cb;
this.meta44593 = meta44593;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44592.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44594,meta44593__$1){
var self__ = this;
var _44594__$1 = this;
return (new cljs.core.async.t_cljs$core$async44592(self__.flag,self__.cb,meta44593__$1));
}));

(cljs.core.async.t_cljs$core$async44592.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44594){
var self__ = this;
var _44594__$1 = this;
return self__.meta44593;
}));

(cljs.core.async.t_cljs$core$async44592.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44592.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async44592.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44592.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async44592.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta44593","meta44593",152717445,null)], null);
}));

(cljs.core.async.t_cljs$core$async44592.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44592.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44592");

(cljs.core.async.t_cljs$core$async44592.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async44592");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44592.
 */
cljs.core.async.__GT_t_cljs$core$async44592 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async44592(flag__$1,cb__$1,meta44593){
return (new cljs.core.async.t_cljs$core$async44592(flag__$1,cb__$1,meta44593));
});

}

return (new cljs.core.async.t_cljs$core$async44592(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44616_SHARP_){
var G__44638 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44616_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__44638) : fret.call(null,G__44638));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44620_SHARP_){
var G__44643 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44620_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__44643) : fret.call(null,G__44643));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__47394 = (i + (1));
i = G__47394;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47395 = arguments.length;
var i__4865__auto___47396 = (0);
while(true){
if((i__4865__auto___47396 < len__4864__auto___47395)){
args__4870__auto__.push((arguments[i__4865__auto___47396]));

var G__47397 = (i__4865__auto___47396 + (1));
i__4865__auto___47396 = G__47397;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__44679){
var map__44681 = p__44679;
var map__44681__$1 = cljs.core.__destructure_map(map__44681);
var opts = map__44681__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq44661){
var G__44663 = cljs.core.first(seq44661);
var seq44661__$1 = cljs.core.next(seq44661);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44663,seq44661__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__44685 = arguments.length;
switch (G__44685) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__44375__auto___47403 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44376__auto__ = (function (){var switch__44166__auto__ = (function (state_44719){
var state_val_44722 = (state_44719[(1)]);
if((state_val_44722 === (7))){
var inst_44713 = (state_44719[(2)]);
var state_44719__$1 = state_44719;
var statearr_44731_47404 = state_44719__$1;
(statearr_44731_47404[(2)] = inst_44713);

(statearr_44731_47404[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44722 === (1))){
var state_44719__$1 = state_44719;
var statearr_44732_47405 = state_44719__$1;
(statearr_44732_47405[(2)] = null);

(statearr_44732_47405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44722 === (4))){
var inst_44696 = (state_44719[(7)]);
var inst_44696__$1 = (state_44719[(2)]);
var inst_44697 = (inst_44696__$1 == null);
var state_44719__$1 = (function (){var statearr_44743 = state_44719;
(statearr_44743[(7)] = inst_44696__$1);

return statearr_44743;
})();
if(cljs.core.truth_(inst_44697)){
var statearr_44746_47406 = state_44719__$1;
(statearr_44746_47406[(1)] = (5));

} else {
var statearr_44747_47407 = state_44719__$1;
(statearr_44747_47407[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44722 === (13))){
var state_44719__$1 = state_44719;
var statearr_44751_47408 = state_44719__$1;
(statearr_44751_47408[(2)] = null);

(statearr_44751_47408[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44722 === (6))){
var inst_44696 = (state_44719[(7)]);
var state_44719__$1 = state_44719;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44719__$1,(11),to,inst_44696);
} else {
if((state_val_44722 === (3))){
var inst_44715 = (state_44719[(2)]);
var state_44719__$1 = state_44719;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44719__$1,inst_44715);
} else {
if((state_val_44722 === (12))){
var state_44719__$1 = state_44719;
var statearr_44756_47409 = state_44719__$1;
(statearr_44756_47409[(2)] = null);

(statearr_44756_47409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44722 === (2))){
var state_44719__$1 = state_44719;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44719__$1,(4),from);
} else {
if((state_val_44722 === (11))){
var inst_44706 = (state_44719[(2)]);
var state_44719__$1 = state_44719;
if(cljs.core.truth_(inst_44706)){
var statearr_44758_47410 = state_44719__$1;
(statearr_44758_47410[(1)] = (12));

} else {
var statearr_44759_47411 = state_44719__$1;
(statearr_44759_47411[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44722 === (9))){
var state_44719__$1 = state_44719;
var statearr_44760_47412 = state_44719__$1;
(statearr_44760_47412[(2)] = null);

(statearr_44760_47412[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44722 === (5))){
var state_44719__$1 = state_44719;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44761_47413 = state_44719__$1;
(statearr_44761_47413[(1)] = (8));

} else {
var statearr_44762_47414 = state_44719__$1;
(statearr_44762_47414[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44722 === (14))){
var inst_44711 = (state_44719[(2)]);
var state_44719__$1 = state_44719;
var statearr_44763_47415 = state_44719__$1;
(statearr_44763_47415[(2)] = inst_44711);

(statearr_44763_47415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44722 === (10))){
var inst_44703 = (state_44719[(2)]);
var state_44719__$1 = state_44719;
var statearr_44765_47417 = state_44719__$1;
(statearr_44765_47417[(2)] = inst_44703);

(statearr_44765_47417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44722 === (8))){
var inst_44700 = cljs.core.async.close_BANG_(to);
var state_44719__$1 = state_44719;
var statearr_44766_47418 = state_44719__$1;
(statearr_44766_47418[(2)] = inst_44700);

(statearr_44766_47418[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44167__auto__ = null;
var cljs$core$async$state_machine__44167__auto____0 = (function (){
var statearr_44768 = [null,null,null,null,null,null,null,null];
(statearr_44768[(0)] = cljs$core$async$state_machine__44167__auto__);

(statearr_44768[(1)] = (1));

return statearr_44768;
});
var cljs$core$async$state_machine__44167__auto____1 = (function (state_44719){
while(true){
var ret_value__44168__auto__ = (function (){try{while(true){
var result__44169__auto__ = switch__44166__auto__(state_44719);
if(cljs.core.keyword_identical_QMARK_(result__44169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44169__auto__;
}
break;
}
}catch (e44769){var ex__44170__auto__ = e44769;
var statearr_44770_47419 = state_44719;
(statearr_44770_47419[(2)] = ex__44170__auto__);


if(cljs.core.seq((state_44719[(4)]))){
var statearr_44771_47420 = state_44719;
(statearr_44771_47420[(1)] = cljs.core.first((state_44719[(4)])));

} else {
throw ex__44170__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47421 = state_44719;
state_44719 = G__47421;
continue;
} else {
return ret_value__44168__auto__;
}
break;
}
});
cljs$core$async$state_machine__44167__auto__ = function(state_44719){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44167__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44167__auto____1.call(this,state_44719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44167__auto____0;
cljs$core$async$state_machine__44167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44167__auto____1;
return cljs$core$async$state_machine__44167__auto__;
})()
})();
var state__44377__auto__ = (function (){var statearr_44779 = f__44376__auto__();
(statearr_44779[(6)] = c__44375__auto___47403);

return statearr_44779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44377__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__44797){
var vec__44798 = p__44797;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44798,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44798,(1),null);
var job = vec__44798;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__44375__auto___47423 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44376__auto__ = (function (){var switch__44166__auto__ = (function (state_44805){
var state_val_44806 = (state_44805[(1)]);
if((state_val_44806 === (1))){
var state_44805__$1 = state_44805;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44805__$1,(2),res,v);
} else {
if((state_val_44806 === (2))){
var inst_44802 = (state_44805[(2)]);
var inst_44803 = cljs.core.async.close_BANG_(res);
var state_44805__$1 = (function (){var statearr_44811 = state_44805;
(statearr_44811[(7)] = inst_44802);

return statearr_44811;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44805__$1,inst_44803);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44167__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44167__auto____0 = (function (){
var statearr_44812 = [null,null,null,null,null,null,null,null];
(statearr_44812[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44167__auto__);

(statearr_44812[(1)] = (1));

return statearr_44812;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44167__auto____1 = (function (state_44805){
while(true){
var ret_value__44168__auto__ = (function (){try{while(true){
var result__44169__auto__ = switch__44166__auto__(state_44805);
if(cljs.core.keyword_identical_QMARK_(result__44169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44169__auto__;
}
break;
}
}catch (e44813){var ex__44170__auto__ = e44813;
var statearr_44814_47427 = state_44805;
(statearr_44814_47427[(2)] = ex__44170__auto__);


if(cljs.core.seq((state_44805[(4)]))){
var statearr_44816_47428 = state_44805;
(statearr_44816_47428[(1)] = cljs.core.first((state_44805[(4)])));

} else {
throw ex__44170__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47431 = state_44805;
state_44805 = G__47431;
continue;
} else {
return ret_value__44168__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44167__auto__ = function(state_44805){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44167__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44167__auto____1.call(this,state_44805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44167__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44167__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44167__auto__;
})()
})();
var state__44377__auto__ = (function (){var statearr_44819 = f__44376__auto__();
(statearr_44819[(6)] = c__44375__auto___47423);

return statearr_44819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44377__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__44822){
var vec__44825 = p__44822;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44825,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44825,(1),null);
var job = vec__44825;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___47435 = n;
var __47436 = (0);
while(true){
if((__47436 < n__4741__auto___47435)){
var G__44829_47437 = type;
var G__44829_47438__$1 = (((G__44829_47437 instanceof cljs.core.Keyword))?G__44829_47437.fqn:null);
switch (G__44829_47438__$1) {
case "compute":
var c__44375__auto___47440 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47436,c__44375__auto___47440,G__44829_47437,G__44829_47438__$1,n__4741__auto___47435,jobs,results,process,async){
return (function (){
var f__44376__auto__ = (function (){var switch__44166__auto__ = ((function (__47436,c__44375__auto___47440,G__44829_47437,G__44829_47438__$1,n__4741__auto___47435,jobs,results,process,async){
return (function (state_44842){
var state_val_44843 = (state_44842[(1)]);
if((state_val_44843 === (1))){
var state_44842__$1 = state_44842;
var statearr_44844_47445 = state_44842__$1;
(statearr_44844_47445[(2)] = null);

(statearr_44844_47445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44843 === (2))){
var state_44842__$1 = state_44842;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44842__$1,(4),jobs);
} else {
if((state_val_44843 === (3))){
var inst_44840 = (state_44842[(2)]);
var state_44842__$1 = state_44842;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44842__$1,inst_44840);
} else {
if((state_val_44843 === (4))){
var inst_44832 = (state_44842[(2)]);
var inst_44833 = process(inst_44832);
var state_44842__$1 = state_44842;
if(cljs.core.truth_(inst_44833)){
var statearr_44846_47459 = state_44842__$1;
(statearr_44846_47459[(1)] = (5));

} else {
var statearr_44850_47460 = state_44842__$1;
(statearr_44850_47460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44843 === (5))){
var state_44842__$1 = state_44842;
var statearr_44852_47463 = state_44842__$1;
(statearr_44852_47463[(2)] = null);

(statearr_44852_47463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44843 === (6))){
var state_44842__$1 = state_44842;
var statearr_44854_47464 = state_44842__$1;
(statearr_44854_47464[(2)] = null);

(statearr_44854_47464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44843 === (7))){
var inst_44838 = (state_44842[(2)]);
var state_44842__$1 = state_44842;
var statearr_44855_47467 = state_44842__$1;
(statearr_44855_47467[(2)] = inst_44838);

(statearr_44855_47467[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__47436,c__44375__auto___47440,G__44829_47437,G__44829_47438__$1,n__4741__auto___47435,jobs,results,process,async))
;
return ((function (__47436,switch__44166__auto__,c__44375__auto___47440,G__44829_47437,G__44829_47438__$1,n__4741__auto___47435,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44167__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44167__auto____0 = (function (){
var statearr_44858 = [null,null,null,null,null,null,null];
(statearr_44858[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44167__auto__);

(statearr_44858[(1)] = (1));

return statearr_44858;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44167__auto____1 = (function (state_44842){
while(true){
var ret_value__44168__auto__ = (function (){try{while(true){
var result__44169__auto__ = switch__44166__auto__(state_44842);
if(cljs.core.keyword_identical_QMARK_(result__44169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44169__auto__;
}
break;
}
}catch (e44859){var ex__44170__auto__ = e44859;
var statearr_44861_47471 = state_44842;
(statearr_44861_47471[(2)] = ex__44170__auto__);


if(cljs.core.seq((state_44842[(4)]))){
var statearr_44863_47473 = state_44842;
(statearr_44863_47473[(1)] = cljs.core.first((state_44842[(4)])));

} else {
throw ex__44170__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47474 = state_44842;
state_44842 = G__47474;
continue;
} else {
return ret_value__44168__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44167__auto__ = function(state_44842){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44167__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44167__auto____1.call(this,state_44842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44167__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44167__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44167__auto__;
})()
;})(__47436,switch__44166__auto__,c__44375__auto___47440,G__44829_47437,G__44829_47438__$1,n__4741__auto___47435,jobs,results,process,async))
})();
var state__44377__auto__ = (function (){var statearr_44865 = f__44376__auto__();
(statearr_44865[(6)] = c__44375__auto___47440);

return statearr_44865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44377__auto__);
});})(__47436,c__44375__auto___47440,G__44829_47437,G__44829_47438__$1,n__4741__auto___47435,jobs,results,process,async))
);


break;
case "async":
var c__44375__auto___47478 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47436,c__44375__auto___47478,G__44829_47437,G__44829_47438__$1,n__4741__auto___47435,jobs,results,process,async){
return (function (){
var f__44376__auto__ = (function (){var switch__44166__auto__ = ((function (__47436,c__44375__auto___47478,G__44829_47437,G__44829_47438__$1,n__4741__auto___47435,jobs,results,process,async){
return (function (state_44878){
var state_val_44879 = (state_44878[(1)]);
if((state_val_44879 === (1))){
var state_44878__$1 = state_44878;
var statearr_44882_47479 = state_44878__$1;
(statearr_44882_47479[(2)] = null);

(statearr_44882_47479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44879 === (2))){
var state_44878__$1 = state_44878;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44878__$1,(4),jobs);
} else {
if((state_val_44879 === (3))){
var inst_44876 = (state_44878[(2)]);
var state_44878__$1 = state_44878;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44878__$1,inst_44876);
} else {
if((state_val_44879 === (4))){
var inst_44868 = (state_44878[(2)]);
var inst_44869 = async(inst_44868);
var state_44878__$1 = state_44878;
if(cljs.core.truth_(inst_44869)){
var statearr_44884_47484 = state_44878__$1;
(statearr_44884_47484[(1)] = (5));

} else {
var statearr_44885_47486 = state_44878__$1;
(statearr_44885_47486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44879 === (5))){
var state_44878__$1 = state_44878;
var statearr_44886_47488 = state_44878__$1;
(statearr_44886_47488[(2)] = null);

(statearr_44886_47488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44879 === (6))){
var state_44878__$1 = state_44878;
var statearr_44887_47489 = state_44878__$1;
(statearr_44887_47489[(2)] = null);

(statearr_44887_47489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44879 === (7))){
var inst_44874 = (state_44878[(2)]);
var state_44878__$1 = state_44878;
var statearr_44892_47491 = state_44878__$1;
(statearr_44892_47491[(2)] = inst_44874);

(statearr_44892_47491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__47436,c__44375__auto___47478,G__44829_47437,G__44829_47438__$1,n__4741__auto___47435,jobs,results,process,async))
;
return ((function (__47436,switch__44166__auto__,c__44375__auto___47478,G__44829_47437,G__44829_47438__$1,n__4741__auto___47435,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44167__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44167__auto____0 = (function (){
var statearr_44897 = [null,null,null,null,null,null,null];
(statearr_44897[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44167__auto__);

(statearr_44897[(1)] = (1));

return statearr_44897;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44167__auto____1 = (function (state_44878){
while(true){
var ret_value__44168__auto__ = (function (){try{while(true){
var result__44169__auto__ = switch__44166__auto__(state_44878);
if(cljs.core.keyword_identical_QMARK_(result__44169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44169__auto__;
}
break;
}
}catch (e44898){var ex__44170__auto__ = e44898;
var statearr_44899_47504 = state_44878;
(statearr_44899_47504[(2)] = ex__44170__auto__);


if(cljs.core.seq((state_44878[(4)]))){
var statearr_44900_47505 = state_44878;
(statearr_44900_47505[(1)] = cljs.core.first((state_44878[(4)])));

} else {
throw ex__44170__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47512 = state_44878;
state_44878 = G__47512;
continue;
} else {
return ret_value__44168__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44167__auto__ = function(state_44878){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44167__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44167__auto____1.call(this,state_44878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44167__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44167__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44167__auto__;
})()
;})(__47436,switch__44166__auto__,c__44375__auto___47478,G__44829_47437,G__44829_47438__$1,n__4741__auto___47435,jobs,results,process,async))
})();
var state__44377__auto__ = (function (){var statearr_44902 = f__44376__auto__();
(statearr_44902[(6)] = c__44375__auto___47478);

return statearr_44902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44377__auto__);
});})(__47436,c__44375__auto___47478,G__44829_47437,G__44829_47438__$1,n__4741__auto___47435,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44829_47438__$1)].join('')));

}

var G__47513 = (__47436 + (1));
__47436 = G__47513;
continue;
} else {
}
break;
}

var c__44375__auto___47514 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44376__auto__ = (function (){var switch__44166__auto__ = (function (state_44927){
var state_val_44928 = (state_44927[(1)]);
if((state_val_44928 === (7))){
var inst_44921 = (state_44927[(2)]);
var state_44927__$1 = state_44927;
var statearr_44931_47515 = state_44927__$1;
(statearr_44931_47515[(2)] = inst_44921);

(statearr_44931_47515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44928 === (1))){
var state_44927__$1 = state_44927;
var statearr_44935_47516 = state_44927__$1;
(statearr_44935_47516[(2)] = null);

(statearr_44935_47516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44928 === (4))){
var inst_44906 = (state_44927[(7)]);
var inst_44906__$1 = (state_44927[(2)]);
var inst_44907 = (inst_44906__$1 == null);
var state_44927__$1 = (function (){var statearr_44936 = state_44927;
(statearr_44936[(7)] = inst_44906__$1);

return statearr_44936;
})();
if(cljs.core.truth_(inst_44907)){
var statearr_44940_47522 = state_44927__$1;
(statearr_44940_47522[(1)] = (5));

} else {
var statearr_44942_47523 = state_44927__$1;
(statearr_44942_47523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44928 === (6))){
var inst_44906 = (state_44927[(7)]);
var inst_44911 = (state_44927[(8)]);
var inst_44911__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_44912 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44913 = [inst_44906,inst_44911__$1];
var inst_44914 = (new cljs.core.PersistentVector(null,2,(5),inst_44912,inst_44913,null));
var state_44927__$1 = (function (){var statearr_44947 = state_44927;
(statearr_44947[(8)] = inst_44911__$1);

return statearr_44947;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44927__$1,(8),jobs,inst_44914);
} else {
if((state_val_44928 === (3))){
var inst_44924 = (state_44927[(2)]);
var state_44927__$1 = state_44927;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44927__$1,inst_44924);
} else {
if((state_val_44928 === (2))){
var state_44927__$1 = state_44927;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44927__$1,(4),from);
} else {
if((state_val_44928 === (9))){
var inst_44918 = (state_44927[(2)]);
var state_44927__$1 = (function (){var statearr_44957 = state_44927;
(statearr_44957[(9)] = inst_44918);

return statearr_44957;
})();
var statearr_44961_47524 = state_44927__$1;
(statearr_44961_47524[(2)] = null);

(statearr_44961_47524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44928 === (5))){
var inst_44909 = cljs.core.async.close_BANG_(jobs);
var state_44927__$1 = state_44927;
var statearr_44965_47525 = state_44927__$1;
(statearr_44965_47525[(2)] = inst_44909);

(statearr_44965_47525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44928 === (8))){
var inst_44911 = (state_44927[(8)]);
var inst_44916 = (state_44927[(2)]);
var state_44927__$1 = (function (){var statearr_44971 = state_44927;
(statearr_44971[(10)] = inst_44916);

return statearr_44971;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44927__$1,(9),results,inst_44911);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44167__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44167__auto____0 = (function (){
var statearr_44972 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44972[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44167__auto__);

(statearr_44972[(1)] = (1));

return statearr_44972;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44167__auto____1 = (function (state_44927){
while(true){
var ret_value__44168__auto__ = (function (){try{while(true){
var result__44169__auto__ = switch__44166__auto__(state_44927);
if(cljs.core.keyword_identical_QMARK_(result__44169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44169__auto__;
}
break;
}
}catch (e44980){var ex__44170__auto__ = e44980;
var statearr_44981_47530 = state_44927;
(statearr_44981_47530[(2)] = ex__44170__auto__);


if(cljs.core.seq((state_44927[(4)]))){
var statearr_44982_47531 = state_44927;
(statearr_44982_47531[(1)] = cljs.core.first((state_44927[(4)])));

} else {
throw ex__44170__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47534 = state_44927;
state_44927 = G__47534;
continue;
} else {
return ret_value__44168__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44167__auto__ = function(state_44927){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44167__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44167__auto____1.call(this,state_44927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44167__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44167__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44167__auto__;
})()
})();
var state__44377__auto__ = (function (){var statearr_44984 = f__44376__auto__();
(statearr_44984[(6)] = c__44375__auto___47514);

return statearr_44984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44377__auto__);
}));


var c__44375__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44376__auto__ = (function (){var switch__44166__auto__ = (function (state_45026){
var state_val_45027 = (state_45026[(1)]);
if((state_val_45027 === (7))){
var inst_45018 = (state_45026[(2)]);
var state_45026__$1 = state_45026;
var statearr_45036_47538 = state_45026__$1;
(statearr_45036_47538[(2)] = inst_45018);

(statearr_45036_47538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45027 === (20))){
var state_45026__$1 = state_45026;
var statearr_45037_47539 = state_45026__$1;
(statearr_45037_47539[(2)] = null);

(statearr_45037_47539[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45027 === (1))){
var state_45026__$1 = state_45026;
var statearr_45043_47540 = state_45026__$1;
(statearr_45043_47540[(2)] = null);

(statearr_45043_47540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45027 === (4))){
var inst_44987 = (state_45026[(7)]);
var inst_44987__$1 = (state_45026[(2)]);
var inst_44988 = (inst_44987__$1 == null);
var state_45026__$1 = (function (){var statearr_45044 = state_45026;
(statearr_45044[(7)] = inst_44987__$1);

return statearr_45044;
})();
if(cljs.core.truth_(inst_44988)){
var statearr_45045_47541 = state_45026__$1;
(statearr_45045_47541[(1)] = (5));

} else {
var statearr_45046_47542 = state_45026__$1;
(statearr_45046_47542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45027 === (15))){
var inst_45000 = (state_45026[(8)]);
var state_45026__$1 = state_45026;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45026__$1,(18),to,inst_45000);
} else {
if((state_val_45027 === (21))){
var inst_45013 = (state_45026[(2)]);
var state_45026__$1 = state_45026;
var statearr_45047_47546 = state_45026__$1;
(statearr_45047_47546[(2)] = inst_45013);

(statearr_45047_47546[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45027 === (13))){
var inst_45015 = (state_45026[(2)]);
var state_45026__$1 = (function (){var statearr_45048 = state_45026;
(statearr_45048[(9)] = inst_45015);

return statearr_45048;
})();
var statearr_45049_47554 = state_45026__$1;
(statearr_45049_47554[(2)] = null);

(statearr_45049_47554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45027 === (6))){
var inst_44987 = (state_45026[(7)]);
var state_45026__$1 = state_45026;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45026__$1,(11),inst_44987);
} else {
if((state_val_45027 === (17))){
var inst_45008 = (state_45026[(2)]);
var state_45026__$1 = state_45026;
if(cljs.core.truth_(inst_45008)){
var statearr_45050_47556 = state_45026__$1;
(statearr_45050_47556[(1)] = (19));

} else {
var statearr_45051_47557 = state_45026__$1;
(statearr_45051_47557[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45027 === (3))){
var inst_45020 = (state_45026[(2)]);
var state_45026__$1 = state_45026;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45026__$1,inst_45020);
} else {
if((state_val_45027 === (12))){
var inst_44997 = (state_45026[(10)]);
var state_45026__$1 = state_45026;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45026__$1,(14),inst_44997);
} else {
if((state_val_45027 === (2))){
var state_45026__$1 = state_45026;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45026__$1,(4),results);
} else {
if((state_val_45027 === (19))){
var state_45026__$1 = state_45026;
var statearr_45052_47566 = state_45026__$1;
(statearr_45052_47566[(2)] = null);

(statearr_45052_47566[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45027 === (11))){
var inst_44997 = (state_45026[(2)]);
var state_45026__$1 = (function (){var statearr_45053 = state_45026;
(statearr_45053[(10)] = inst_44997);

return statearr_45053;
})();
var statearr_45054_47567 = state_45026__$1;
(statearr_45054_47567[(2)] = null);

(statearr_45054_47567[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45027 === (9))){
var state_45026__$1 = state_45026;
var statearr_45059_47572 = state_45026__$1;
(statearr_45059_47572[(2)] = null);

(statearr_45059_47572[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45027 === (5))){
var state_45026__$1 = state_45026;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45061_47573 = state_45026__$1;
(statearr_45061_47573[(1)] = (8));

} else {
var statearr_45062_47574 = state_45026__$1;
(statearr_45062_47574[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45027 === (14))){
var inst_45000 = (state_45026[(8)]);
var inst_45002 = (state_45026[(11)]);
var inst_45000__$1 = (state_45026[(2)]);
var inst_45001 = (inst_45000__$1 == null);
var inst_45002__$1 = cljs.core.not(inst_45001);
var state_45026__$1 = (function (){var statearr_45065 = state_45026;
(statearr_45065[(8)] = inst_45000__$1);

(statearr_45065[(11)] = inst_45002__$1);

return statearr_45065;
})();
if(inst_45002__$1){
var statearr_45066_47583 = state_45026__$1;
(statearr_45066_47583[(1)] = (15));

} else {
var statearr_45068_47584 = state_45026__$1;
(statearr_45068_47584[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45027 === (16))){
var inst_45002 = (state_45026[(11)]);
var state_45026__$1 = state_45026;
var statearr_45069_47585 = state_45026__$1;
(statearr_45069_47585[(2)] = inst_45002);

(statearr_45069_47585[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45027 === (10))){
var inst_44994 = (state_45026[(2)]);
var state_45026__$1 = state_45026;
var statearr_45071_47589 = state_45026__$1;
(statearr_45071_47589[(2)] = inst_44994);

(statearr_45071_47589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45027 === (18))){
var inst_45005 = (state_45026[(2)]);
var state_45026__$1 = state_45026;
var statearr_45072_47593 = state_45026__$1;
(statearr_45072_47593[(2)] = inst_45005);

(statearr_45072_47593[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45027 === (8))){
var inst_44991 = cljs.core.async.close_BANG_(to);
var state_45026__$1 = state_45026;
var statearr_45074_47598 = state_45026__$1;
(statearr_45074_47598[(2)] = inst_44991);

(statearr_45074_47598[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44167__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44167__auto____0 = (function (){
var statearr_45081 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45081[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44167__auto__);

(statearr_45081[(1)] = (1));

return statearr_45081;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44167__auto____1 = (function (state_45026){
while(true){
var ret_value__44168__auto__ = (function (){try{while(true){
var result__44169__auto__ = switch__44166__auto__(state_45026);
if(cljs.core.keyword_identical_QMARK_(result__44169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44169__auto__;
}
break;
}
}catch (e45082){var ex__44170__auto__ = e45082;
var statearr_45084_47602 = state_45026;
(statearr_45084_47602[(2)] = ex__44170__auto__);


if(cljs.core.seq((state_45026[(4)]))){
var statearr_45085_47603 = state_45026;
(statearr_45085_47603[(1)] = cljs.core.first((state_45026[(4)])));

} else {
throw ex__44170__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47604 = state_45026;
state_45026 = G__47604;
continue;
} else {
return ret_value__44168__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44167__auto__ = function(state_45026){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44167__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44167__auto____1.call(this,state_45026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44167__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44167__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44167__auto__;
})()
})();
var state__44377__auto__ = (function (){var statearr_45087 = f__44376__auto__();
(statearr_45087[(6)] = c__44375__auto__);

return statearr_45087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44377__auto__);
}));

return c__44375__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__45091 = arguments.length;
switch (G__45091) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__45108 = arguments.length;
switch (G__45108) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__45117 = arguments.length;
switch (G__45117) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__44375__auto___47622 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44376__auto__ = (function (){var switch__44166__auto__ = (function (state_45158){
var state_val_45159 = (state_45158[(1)]);
if((state_val_45159 === (7))){
var inst_45151 = (state_45158[(2)]);
var state_45158__$1 = state_45158;
var statearr_45164_47624 = state_45158__$1;
(statearr_45164_47624[(2)] = inst_45151);

(statearr_45164_47624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45159 === (1))){
var state_45158__$1 = state_45158;
var statearr_45165_47625 = state_45158__$1;
(statearr_45165_47625[(2)] = null);

(statearr_45165_47625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45159 === (4))){
var inst_45128 = (state_45158[(7)]);
var inst_45128__$1 = (state_45158[(2)]);
var inst_45129 = (inst_45128__$1 == null);
var state_45158__$1 = (function (){var statearr_45169 = state_45158;
(statearr_45169[(7)] = inst_45128__$1);

return statearr_45169;
})();
if(cljs.core.truth_(inst_45129)){
var statearr_45170_47629 = state_45158__$1;
(statearr_45170_47629[(1)] = (5));

} else {
var statearr_45171_47630 = state_45158__$1;
(statearr_45171_47630[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45159 === (13))){
var state_45158__$1 = state_45158;
var statearr_45172_47631 = state_45158__$1;
(statearr_45172_47631[(2)] = null);

(statearr_45172_47631[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45159 === (6))){
var inst_45128 = (state_45158[(7)]);
var inst_45134 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_45128) : p.call(null,inst_45128));
var state_45158__$1 = state_45158;
if(cljs.core.truth_(inst_45134)){
var statearr_45176_47633 = state_45158__$1;
(statearr_45176_47633[(1)] = (9));

} else {
var statearr_45177_47634 = state_45158__$1;
(statearr_45177_47634[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45159 === (3))){
var inst_45153 = (state_45158[(2)]);
var state_45158__$1 = state_45158;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45158__$1,inst_45153);
} else {
if((state_val_45159 === (12))){
var state_45158__$1 = state_45158;
var statearr_45178_47638 = state_45158__$1;
(statearr_45178_47638[(2)] = null);

(statearr_45178_47638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45159 === (2))){
var state_45158__$1 = state_45158;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45158__$1,(4),ch);
} else {
if((state_val_45159 === (11))){
var inst_45128 = (state_45158[(7)]);
var inst_45142 = (state_45158[(2)]);
var state_45158__$1 = state_45158;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45158__$1,(8),inst_45142,inst_45128);
} else {
if((state_val_45159 === (9))){
var state_45158__$1 = state_45158;
var statearr_45179_47640 = state_45158__$1;
(statearr_45179_47640[(2)] = tc);

(statearr_45179_47640[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45159 === (5))){
var inst_45131 = cljs.core.async.close_BANG_(tc);
var inst_45132 = cljs.core.async.close_BANG_(fc);
var state_45158__$1 = (function (){var statearr_45180 = state_45158;
(statearr_45180[(8)] = inst_45131);

return statearr_45180;
})();
var statearr_45181_47641 = state_45158__$1;
(statearr_45181_47641[(2)] = inst_45132);

(statearr_45181_47641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45159 === (14))){
var inst_45149 = (state_45158[(2)]);
var state_45158__$1 = state_45158;
var statearr_45183_47645 = state_45158__$1;
(statearr_45183_47645[(2)] = inst_45149);

(statearr_45183_47645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45159 === (10))){
var state_45158__$1 = state_45158;
var statearr_45185_47647 = state_45158__$1;
(statearr_45185_47647[(2)] = fc);

(statearr_45185_47647[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45159 === (8))){
var inst_45144 = (state_45158[(2)]);
var state_45158__$1 = state_45158;
if(cljs.core.truth_(inst_45144)){
var statearr_45187_47649 = state_45158__$1;
(statearr_45187_47649[(1)] = (12));

} else {
var statearr_45188_47651 = state_45158__$1;
(statearr_45188_47651[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44167__auto__ = null;
var cljs$core$async$state_machine__44167__auto____0 = (function (){
var statearr_45190 = [null,null,null,null,null,null,null,null,null];
(statearr_45190[(0)] = cljs$core$async$state_machine__44167__auto__);

(statearr_45190[(1)] = (1));

return statearr_45190;
});
var cljs$core$async$state_machine__44167__auto____1 = (function (state_45158){
while(true){
var ret_value__44168__auto__ = (function (){try{while(true){
var result__44169__auto__ = switch__44166__auto__(state_45158);
if(cljs.core.keyword_identical_QMARK_(result__44169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44169__auto__;
}
break;
}
}catch (e45192){var ex__44170__auto__ = e45192;
var statearr_45193_47654 = state_45158;
(statearr_45193_47654[(2)] = ex__44170__auto__);


if(cljs.core.seq((state_45158[(4)]))){
var statearr_45197_47656 = state_45158;
(statearr_45197_47656[(1)] = cljs.core.first((state_45158[(4)])));

} else {
throw ex__44170__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47657 = state_45158;
state_45158 = G__47657;
continue;
} else {
return ret_value__44168__auto__;
}
break;
}
});
cljs$core$async$state_machine__44167__auto__ = function(state_45158){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44167__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44167__auto____1.call(this,state_45158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44167__auto____0;
cljs$core$async$state_machine__44167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44167__auto____1;
return cljs$core$async$state_machine__44167__auto__;
})()
})();
var state__44377__auto__ = (function (){var statearr_45199 = f__44376__auto__();
(statearr_45199[(6)] = c__44375__auto___47622);

return statearr_45199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44377__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__44375__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44376__auto__ = (function (){var switch__44166__auto__ = (function (state_45222){
var state_val_45224 = (state_45222[(1)]);
if((state_val_45224 === (7))){
var inst_45217 = (state_45222[(2)]);
var state_45222__$1 = state_45222;
var statearr_45229_47667 = state_45222__$1;
(statearr_45229_47667[(2)] = inst_45217);

(statearr_45229_47667[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45224 === (1))){
var inst_45200 = init;
var inst_45201 = inst_45200;
var state_45222__$1 = (function (){var statearr_45230 = state_45222;
(statearr_45230[(7)] = inst_45201);

return statearr_45230;
})();
var statearr_45231_47672 = state_45222__$1;
(statearr_45231_47672[(2)] = null);

(statearr_45231_47672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45224 === (4))){
var inst_45204 = (state_45222[(8)]);
var inst_45204__$1 = (state_45222[(2)]);
var inst_45205 = (inst_45204__$1 == null);
var state_45222__$1 = (function (){var statearr_45232 = state_45222;
(statearr_45232[(8)] = inst_45204__$1);

return statearr_45232;
})();
if(cljs.core.truth_(inst_45205)){
var statearr_45236_47677 = state_45222__$1;
(statearr_45236_47677[(1)] = (5));

} else {
var statearr_45238_47681 = state_45222__$1;
(statearr_45238_47681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45224 === (6))){
var inst_45201 = (state_45222[(7)]);
var inst_45204 = (state_45222[(8)]);
var inst_45208 = (state_45222[(9)]);
var inst_45208__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_45201,inst_45204) : f.call(null,inst_45201,inst_45204));
var inst_45209 = cljs.core.reduced_QMARK_(inst_45208__$1);
var state_45222__$1 = (function (){var statearr_45253 = state_45222;
(statearr_45253[(9)] = inst_45208__$1);

return statearr_45253;
})();
if(inst_45209){
var statearr_45256_47691 = state_45222__$1;
(statearr_45256_47691[(1)] = (8));

} else {
var statearr_45257_47695 = state_45222__$1;
(statearr_45257_47695[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45224 === (3))){
var inst_45219 = (state_45222[(2)]);
var state_45222__$1 = state_45222;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45222__$1,inst_45219);
} else {
if((state_val_45224 === (2))){
var state_45222__$1 = state_45222;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45222__$1,(4),ch);
} else {
if((state_val_45224 === (9))){
var inst_45208 = (state_45222[(9)]);
var inst_45201 = inst_45208;
var state_45222__$1 = (function (){var statearr_45262 = state_45222;
(statearr_45262[(7)] = inst_45201);

return statearr_45262;
})();
var statearr_45263_47716 = state_45222__$1;
(statearr_45263_47716[(2)] = null);

(statearr_45263_47716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45224 === (5))){
var inst_45201 = (state_45222[(7)]);
var state_45222__$1 = state_45222;
var statearr_45264_47724 = state_45222__$1;
(statearr_45264_47724[(2)] = inst_45201);

(statearr_45264_47724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45224 === (10))){
var inst_45215 = (state_45222[(2)]);
var state_45222__$1 = state_45222;
var statearr_45265_47734 = state_45222__$1;
(statearr_45265_47734[(2)] = inst_45215);

(statearr_45265_47734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45224 === (8))){
var inst_45208 = (state_45222[(9)]);
var inst_45211 = cljs.core.deref(inst_45208);
var state_45222__$1 = state_45222;
var statearr_45266_47735 = state_45222__$1;
(statearr_45266_47735[(2)] = inst_45211);

(statearr_45266_47735[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__44167__auto__ = null;
var cljs$core$async$reduce_$_state_machine__44167__auto____0 = (function (){
var statearr_45267 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45267[(0)] = cljs$core$async$reduce_$_state_machine__44167__auto__);

(statearr_45267[(1)] = (1));

return statearr_45267;
});
var cljs$core$async$reduce_$_state_machine__44167__auto____1 = (function (state_45222){
while(true){
var ret_value__44168__auto__ = (function (){try{while(true){
var result__44169__auto__ = switch__44166__auto__(state_45222);
if(cljs.core.keyword_identical_QMARK_(result__44169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44169__auto__;
}
break;
}
}catch (e45268){var ex__44170__auto__ = e45268;
var statearr_45269_47743 = state_45222;
(statearr_45269_47743[(2)] = ex__44170__auto__);


if(cljs.core.seq((state_45222[(4)]))){
var statearr_45270_47745 = state_45222;
(statearr_45270_47745[(1)] = cljs.core.first((state_45222[(4)])));

} else {
throw ex__44170__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47749 = state_45222;
state_45222 = G__47749;
continue;
} else {
return ret_value__44168__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__44167__auto__ = function(state_45222){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__44167__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__44167__auto____1.call(this,state_45222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__44167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__44167__auto____0;
cljs$core$async$reduce_$_state_machine__44167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__44167__auto____1;
return cljs$core$async$reduce_$_state_machine__44167__auto__;
})()
})();
var state__44377__auto__ = (function (){var statearr_45271 = f__44376__auto__();
(statearr_45271[(6)] = c__44375__auto__);

return statearr_45271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44377__auto__);
}));

return c__44375__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__44375__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44376__auto__ = (function (){var switch__44166__auto__ = (function (state_45280){
var state_val_45281 = (state_45280[(1)]);
if((state_val_45281 === (1))){
var inst_45275 = cljs.core.async.reduce(f__$1,init,ch);
var state_45280__$1 = state_45280;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45280__$1,(2),inst_45275);
} else {
if((state_val_45281 === (2))){
var inst_45277 = (state_45280[(2)]);
var inst_45278 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_45277) : f__$1.call(null,inst_45277));
var state_45280__$1 = state_45280;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45280__$1,inst_45278);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__44167__auto__ = null;
var cljs$core$async$transduce_$_state_machine__44167__auto____0 = (function (){
var statearr_45283 = [null,null,null,null,null,null,null];
(statearr_45283[(0)] = cljs$core$async$transduce_$_state_machine__44167__auto__);

(statearr_45283[(1)] = (1));

return statearr_45283;
});
var cljs$core$async$transduce_$_state_machine__44167__auto____1 = (function (state_45280){
while(true){
var ret_value__44168__auto__ = (function (){try{while(true){
var result__44169__auto__ = switch__44166__auto__(state_45280);
if(cljs.core.keyword_identical_QMARK_(result__44169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44169__auto__;
}
break;
}
}catch (e45285){var ex__44170__auto__ = e45285;
var statearr_45286_47762 = state_45280;
(statearr_45286_47762[(2)] = ex__44170__auto__);


if(cljs.core.seq((state_45280[(4)]))){
var statearr_45287_47764 = state_45280;
(statearr_45287_47764[(1)] = cljs.core.first((state_45280[(4)])));

} else {
throw ex__44170__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47767 = state_45280;
state_45280 = G__47767;
continue;
} else {
return ret_value__44168__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__44167__auto__ = function(state_45280){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__44167__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__44167__auto____1.call(this,state_45280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__44167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__44167__auto____0;
cljs$core$async$transduce_$_state_machine__44167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__44167__auto____1;
return cljs$core$async$transduce_$_state_machine__44167__auto__;
})()
})();
var state__44377__auto__ = (function (){var statearr_45288 = f__44376__auto__();
(statearr_45288[(6)] = c__44375__auto__);

return statearr_45288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44377__auto__);
}));

return c__44375__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__45292 = arguments.length;
switch (G__45292) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__44375__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44376__auto__ = (function (){var switch__44166__auto__ = (function (state_45334){
var state_val_45335 = (state_45334[(1)]);
if((state_val_45335 === (7))){
var inst_45315 = (state_45334[(2)]);
var state_45334__$1 = state_45334;
var statearr_45340_47779 = state_45334__$1;
(statearr_45340_47779[(2)] = inst_45315);

(statearr_45340_47779[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45335 === (1))){
var inst_45302 = cljs.core.seq(coll);
var inst_45303 = inst_45302;
var state_45334__$1 = (function (){var statearr_45341 = state_45334;
(statearr_45341[(7)] = inst_45303);

return statearr_45341;
})();
var statearr_45342_47784 = state_45334__$1;
(statearr_45342_47784[(2)] = null);

(statearr_45342_47784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45335 === (4))){
var inst_45303 = (state_45334[(7)]);
var inst_45309 = cljs.core.first(inst_45303);
var state_45334__$1 = state_45334;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45334__$1,(7),ch,inst_45309);
} else {
if((state_val_45335 === (13))){
var inst_45328 = (state_45334[(2)]);
var state_45334__$1 = state_45334;
var statearr_45343_47786 = state_45334__$1;
(statearr_45343_47786[(2)] = inst_45328);

(statearr_45343_47786[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45335 === (6))){
var inst_45318 = (state_45334[(2)]);
var state_45334__$1 = state_45334;
if(cljs.core.truth_(inst_45318)){
var statearr_45344_47792 = state_45334__$1;
(statearr_45344_47792[(1)] = (8));

} else {
var statearr_45345_47793 = state_45334__$1;
(statearr_45345_47793[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45335 === (3))){
var inst_45332 = (state_45334[(2)]);
var state_45334__$1 = state_45334;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45334__$1,inst_45332);
} else {
if((state_val_45335 === (12))){
var state_45334__$1 = state_45334;
var statearr_45346_47799 = state_45334__$1;
(statearr_45346_47799[(2)] = null);

(statearr_45346_47799[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45335 === (2))){
var inst_45303 = (state_45334[(7)]);
var state_45334__$1 = state_45334;
if(cljs.core.truth_(inst_45303)){
var statearr_45351_47803 = state_45334__$1;
(statearr_45351_47803[(1)] = (4));

} else {
var statearr_45353_47805 = state_45334__$1;
(statearr_45353_47805[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45335 === (11))){
var inst_45325 = cljs.core.async.close_BANG_(ch);
var state_45334__$1 = state_45334;
var statearr_45359_47811 = state_45334__$1;
(statearr_45359_47811[(2)] = inst_45325);

(statearr_45359_47811[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45335 === (9))){
var state_45334__$1 = state_45334;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45362_47813 = state_45334__$1;
(statearr_45362_47813[(1)] = (11));

} else {
var statearr_45364_47815 = state_45334__$1;
(statearr_45364_47815[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45335 === (5))){
var inst_45303 = (state_45334[(7)]);
var state_45334__$1 = state_45334;
var statearr_45370_47822 = state_45334__$1;
(statearr_45370_47822[(2)] = inst_45303);

(statearr_45370_47822[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45335 === (10))){
var inst_45330 = (state_45334[(2)]);
var state_45334__$1 = state_45334;
var statearr_45376_47826 = state_45334__$1;
(statearr_45376_47826[(2)] = inst_45330);

(statearr_45376_47826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45335 === (8))){
var inst_45303 = (state_45334[(7)]);
var inst_45320 = cljs.core.next(inst_45303);
var inst_45303__$1 = inst_45320;
var state_45334__$1 = (function (){var statearr_45377 = state_45334;
(statearr_45377[(7)] = inst_45303__$1);

return statearr_45377;
})();
var statearr_45378_47828 = state_45334__$1;
(statearr_45378_47828[(2)] = null);

(statearr_45378_47828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44167__auto__ = null;
var cljs$core$async$state_machine__44167__auto____0 = (function (){
var statearr_45379 = [null,null,null,null,null,null,null,null];
(statearr_45379[(0)] = cljs$core$async$state_machine__44167__auto__);

(statearr_45379[(1)] = (1));

return statearr_45379;
});
var cljs$core$async$state_machine__44167__auto____1 = (function (state_45334){
while(true){
var ret_value__44168__auto__ = (function (){try{while(true){
var result__44169__auto__ = switch__44166__auto__(state_45334);
if(cljs.core.keyword_identical_QMARK_(result__44169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44169__auto__;
}
break;
}
}catch (e45380){var ex__44170__auto__ = e45380;
var statearr_45381_47831 = state_45334;
(statearr_45381_47831[(2)] = ex__44170__auto__);


if(cljs.core.seq((state_45334[(4)]))){
var statearr_45386_47832 = state_45334;
(statearr_45386_47832[(1)] = cljs.core.first((state_45334[(4)])));

} else {
throw ex__44170__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47833 = state_45334;
state_45334 = G__47833;
continue;
} else {
return ret_value__44168__auto__;
}
break;
}
});
cljs$core$async$state_machine__44167__auto__ = function(state_45334){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44167__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44167__auto____1.call(this,state_45334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44167__auto____0;
cljs$core$async$state_machine__44167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44167__auto____1;
return cljs$core$async$state_machine__44167__auto__;
})()
})();
var state__44377__auto__ = (function (){var statearr_45391 = f__44376__auto__();
(statearr_45391[(6)] = c__44375__auto__);

return statearr_45391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44377__auto__);
}));

return c__44375__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__45399 = arguments.length;
switch (G__45399) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_47843 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_47843(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_47855 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_47855(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_47863 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_47863(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_47871 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_47871(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45436 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45436 = (function (ch,cs,meta45437){
this.ch = ch;
this.cs = cs;
this.meta45437 = meta45437;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45438,meta45437__$1){
var self__ = this;
var _45438__$1 = this;
return (new cljs.core.async.t_cljs$core$async45436(self__.ch,self__.cs,meta45437__$1));
}));

(cljs.core.async.t_cljs$core$async45436.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45438){
var self__ = this;
var _45438__$1 = this;
return self__.meta45437;
}));

(cljs.core.async.t_cljs$core$async45436.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45436.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async45436.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45436.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async45436.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async45436.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async45436.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta45437","meta45437",889476399,null)], null);
}));

(cljs.core.async.t_cljs$core$async45436.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45436.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45436");

(cljs.core.async.t_cljs$core$async45436.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async45436");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45436.
 */
cljs.core.async.__GT_t_cljs$core$async45436 = (function cljs$core$async$mult_$___GT_t_cljs$core$async45436(ch__$1,cs__$1,meta45437){
return (new cljs.core.async.t_cljs$core$async45436(ch__$1,cs__$1,meta45437));
});

}

return (new cljs.core.async.t_cljs$core$async45436(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__44375__auto___47911 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44376__auto__ = (function (){var switch__44166__auto__ = (function (state_45661){
var state_val_45662 = (state_45661[(1)]);
if((state_val_45662 === (7))){
var inst_45655 = (state_45661[(2)]);
var state_45661__$1 = state_45661;
var statearr_45663_47915 = state_45661__$1;
(statearr_45663_47915[(2)] = inst_45655);

(statearr_45663_47915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45662 === (20))){
var inst_45551 = (state_45661[(7)]);
var inst_45566 = cljs.core.first(inst_45551);
var inst_45567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45566,(0),null);
var inst_45568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45566,(1),null);
var state_45661__$1 = (function (){var statearr_45665 = state_45661;
(statearr_45665[(8)] = inst_45567);

return statearr_45665;
})();
if(cljs.core.truth_(inst_45568)){
var statearr_45666_47917 = state_45661__$1;
(statearr_45666_47917[(1)] = (22));

} else {
var statearr_45667_47918 = state_45661__$1;
(statearr_45667_47918[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45662 === (27))){
var inst_45507 = (state_45661[(9)]);
var inst_45598 = (state_45661[(10)]);
var inst_45606 = (state_45661[(11)]);
var inst_45600 = (state_45661[(12)]);
var inst_45606__$1 = cljs.core._nth(inst_45598,inst_45600);
var inst_45607 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45606__$1,inst_45507,done);
var state_45661__$1 = (function (){var statearr_45669 = state_45661;
(statearr_45669[(11)] = inst_45606__$1);

return statearr_45669;
})();
if(cljs.core.truth_(inst_45607)){
var statearr_45670_47922 = state_45661__$1;
(statearr_45670_47922[(1)] = (30));

} else {
var statearr_45671_47923 = state_45661__$1;
(statearr_45671_47923[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45662 === (1))){
var state_45661__$1 = state_45661;
var statearr_45672_47924 = state_45661__$1;
(statearr_45672_47924[(2)] = null);

(statearr_45672_47924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45662 === (24))){
var inst_45551 = (state_45661[(7)]);
var inst_45573 = (state_45661[(2)]);
var inst_45574 = cljs.core.next(inst_45551);
var inst_45523 = inst_45574;
var inst_45524 = null;
var inst_45525 = (0);
var inst_45526 = (0);
var state_45661__$1 = (function (){var statearr_45675 = state_45661;
(statearr_45675[(13)] = inst_45573);

(statearr_45675[(14)] = inst_45524);

(statearr_45675[(15)] = inst_45525);

(statearr_45675[(16)] = inst_45523);

(statearr_45675[(17)] = inst_45526);

return statearr_45675;
})();
var statearr_45679_47929 = state_45661__$1;
(statearr_45679_47929[(2)] = null);

(statearr_45679_47929[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45662 === (39))){
var state_45661__$1 = state_45661;
var statearr_45689_47933 = state_45661__$1;
(statearr_45689_47933[(2)] = null);

(statearr_45689_47933[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45662 === (4))){
var inst_45507 = (state_45661[(9)]);
var inst_45507__$1 = (state_45661[(2)]);
var inst_45508 = (inst_45507__$1 == null);
var state_45661__$1 = (function (){var statearr_45694 = state_45661;
(statearr_45694[(9)] = inst_45507__$1);

return statearr_45694;
})();
if(cljs.core.truth_(inst_45508)){
var statearr_45696_47935 = state_45661__$1;
(statearr_45696_47935[(1)] = (5));

} else {
var statearr_45697_47937 = state_45661__$1;
(statearr_45697_47937[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45662 === (15))){
var inst_45524 = (state_45661[(14)]);
var inst_45525 = (state_45661[(15)]);
var inst_45523 = (state_45661[(16)]);
var inst_45526 = (state_45661[(17)]);
var inst_45545 = (state_45661[(2)]);
var inst_45548 = (inst_45526 + (1));
var tmp45684 = inst_45524;
var tmp45685 = inst_45525;
var tmp45686 = inst_45523;
var inst_45523__$1 = tmp45686;
var inst_45524__$1 = tmp45684;
var inst_45525__$1 = tmp45685;
var inst_45526__$1 = inst_45548;
var state_45661__$1 = (function (){var statearr_45700 = state_45661;
(statearr_45700[(18)] = inst_45545);

(statearr_45700[(14)] = inst_45524__$1);

(statearr_45700[(15)] = inst_45525__$1);

(statearr_45700[(16)] = inst_45523__$1);

(statearr_45700[(17)] = inst_45526__$1);

return statearr_45700;
})();
var statearr_45701_47941 = state_45661__$1;
(statearr_45701_47941[(2)] = null);

(statearr_45701_47941[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45662 === (21))){
var inst_45577 = (state_45661[(2)]);
var state_45661__$1 = state_45661;
var statearr_45705_47942 = state_45661__$1;
(statearr_45705_47942[(2)] = inst_45577);

(statearr_45705_47942[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45662 === (31))){
var inst_45606 = (state_45661[(11)]);
var inst_45610 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45606);
var state_45661__$1 = state_45661;
var statearr_45706_47944 = state_45661__$1;
(statearr_45706_47944[(2)] = inst_45610);

(statearr_45706_47944[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45662 === (32))){
var inst_45597 = (state_45661[(19)]);
var inst_45599 = (state_45661[(20)]);
var inst_45598 = (state_45661[(10)]);
var inst_45600 = (state_45661[(12)]);
var inst_45612 = (state_45661[(2)]);
var inst_45613 = (inst_45600 + (1));
var tmp45702 = inst_45597;
var tmp45703 = inst_45599;
var tmp45704 = inst_45598;
var inst_45597__$1 = tmp45702;
var inst_45598__$1 = tmp45704;
var inst_45599__$1 = tmp45703;
var inst_45600__$1 = inst_45613;
var state_45661__$1 = (function (){var statearr_45708 = state_45661;
(statearr_45708[(21)] = inst_45612);

(statearr_45708[(19)] = inst_45597__$1);

(statearr_45708[(20)] = inst_45599__$1);

(statearr_45708[(10)] = inst_45598__$1);

(statearr_45708[(12)] = inst_45600__$1);

return statearr_45708;
})();
var statearr_45709_47949 = state_45661__$1;
(statearr_45709_47949[(2)] = null);

(statearr_45709_47949[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45662 === (40))){
var inst_45627 = (state_45661[(22)]);
var inst_45631 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45627);
var state_45661__$1 = state_45661;
var statearr_45710_47955 = state_45661__$1;
(statearr_45710_47955[(2)] = inst_45631);

(statearr_45710_47955[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45662 === (33))){
var inst_45616 = (state_45661[(23)]);
var inst_45619 = cljs.core.chunked_seq_QMARK_(inst_45616);
var state_45661__$1 = state_45661;
if(inst_45619){
var statearr_45711_47956 = state_45661__$1;
(statearr_45711_47956[(1)] = (36));

} else {
var statearr_45713_47961 = state_45661__$1;
(statearr_45713_47961[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45662 === (13))){
var inst_45539 = (state_45661[(24)]);
var inst_45542 = cljs.core.async.close_BANG_(inst_45539);
var state_45661__$1 = state_45661;
var statearr_45714_47964 = state_45661__$1;
(statearr_45714_47964[(2)] = inst_45542);

(statearr_45714_47964[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45662 === (22))){
var inst_45567 = (state_45661[(8)]);
var inst_45570 = cljs.core.async.close_BANG_(inst_45567);
var state_45661__$1 = state_45661;
var statearr_45715_47965 = state_45661__$1;
(statearr_45715_47965[(2)] = inst_45570);

(statearr_45715_47965[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45662 === (36))){
var inst_45616 = (state_45661[(23)]);
var inst_45621 = cljs.core.chunk_first(inst_45616);
var inst_45622 = cljs.core.chunk_rest(inst_45616);
var inst_45623 = cljs.core.count(inst_45621);
var inst_45597 = inst_45622;
var inst_45598 = inst_45621;
var inst_45599 = inst_45623;
var inst_45600 = (0);
var state_45661__$1 = (function (){var statearr_45717 = state_45661;
(statearr_45717[(19)] = inst_45597);

(statearr_45717[(20)] = inst_45599);

(statearr_45717[(10)] = inst_45598);

(statearr_45717[(12)] = inst_45600);

return statearr_45717;
})();
var statearr_45718_47970 = state_45661__$1;
(statearr_45718_47970[(2)] = null);

(statearr_45718_47970[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45662 === (41))){
var inst_45616 = (state_45661[(23)]);
var inst_45633 = (state_45661[(2)]);
var inst_45634 = cljs.core.next(inst_45616);
var inst_45597 = inst_45634;
var inst_45598 = null;
var inst_45599 = (0);
var inst_45600 = (0);
var state_45661__$1 = (function (){var statearr_45719 = state_45661;
(statearr_45719[(19)] = inst_45597);

(statearr_45719[(20)] = inst_45599);

(statearr_45719[(10)] = inst_45598);

(statearr_45719[(25)] = inst_45633);

(statearr_45719[(12)] = inst_45600);

return statearr_45719;
})();
var statearr_45720_47973 = state_45661__$1;
(statearr_45720_47973[(2)] = null);

(statearr_45720_47973[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45662 === (43))){
var state_45661__$1 = state_45661;
var statearr_45721_47974 = state_45661__$1;
(statearr_45721_47974[(2)] = null);

(statearr_45721_47974[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45662 === (29))){
var inst_45642 = (state_45661[(2)]);
var state_45661__$1 = state_45661;
var statearr_45725_47976 = state_45661__$1;
(statearr_45725_47976[(2)] = inst_45642);

(statearr_45725_47976[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45662 === (44))){
var inst_45652 = (state_45661[(2)]);
var state_45661__$1 = (function (){var statearr_45726 = state_45661;
(statearr_45726[(26)] = inst_45652);

return statearr_45726;
})();
var statearr_45727_47980 = state_45661__$1;
(statearr_45727_47980[(2)] = null);

(statearr_45727_47980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45662 === (6))){
var inst_45589 = (state_45661[(27)]);
var inst_45588 = cljs.core.deref(cs);
var inst_45589__$1 = cljs.core.keys(inst_45588);
var inst_45590 = cljs.core.count(inst_45589__$1);
var inst_45591 = cljs.core.reset_BANG_(dctr,inst_45590);
var inst_45596 = cljs.core.seq(inst_45589__$1);
var inst_45597 = inst_45596;
var inst_45598 = null;
var inst_45599 = (0);
var inst_45600 = (0);
var state_45661__$1 = (function (){var statearr_45728 = state_45661;
(statearr_45728[(28)] = inst_45591);

(statearr_45728[(19)] = inst_45597);

(statearr_45728[(27)] = inst_45589__$1);

(statearr_45728[(20)] = inst_45599);

(statearr_45728[(10)] = inst_45598);

(statearr_45728[(12)] = inst_45600);

return statearr_45728;
})();
var statearr_45731_47985 = state_45661__$1;
(statearr_45731_47985[(2)] = null);

(statearr_45731_47985[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45662 === (28))){
var inst_45597 = (state_45661[(19)]);
var inst_45616 = (state_45661[(23)]);
var inst_45616__$1 = cljs.core.seq(inst_45597);
var state_45661__$1 = (function (){var statearr_45733 = state_45661;
(statearr_45733[(23)] = inst_45616__$1);

return statearr_45733;
})();
if(inst_45616__$1){
var statearr_45734_47986 = state_45661__$1;
(statearr_45734_47986[(1)] = (33));

} else {
var statearr_45735_47987 = state_45661__$1;
(statearr_45735_47987[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45662 === (25))){
var inst_45599 = (state_45661[(20)]);
var inst_45600 = (state_45661[(12)]);
var inst_45603 = (inst_45600 < inst_45599);
var inst_45604 = inst_45603;
var state_45661__$1 = state_45661;
if(cljs.core.truth_(inst_45604)){
var statearr_45736_47990 = state_45661__$1;
(statearr_45736_47990[(1)] = (27));

} else {
var statearr_45737_47991 = state_45661__$1;
(statearr_45737_47991[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45662 === (34))){
var state_45661__$1 = state_45661;
var statearr_45738_47992 = state_45661__$1;
(statearr_45738_47992[(2)] = null);

(statearr_45738_47992[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45662 === (17))){
var state_45661__$1 = state_45661;
var statearr_45739_47993 = state_45661__$1;
(statearr_45739_47993[(2)] = null);

(statearr_45739_47993[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45662 === (3))){
var inst_45657 = (state_45661[(2)]);
var state_45661__$1 = state_45661;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45661__$1,inst_45657);
} else {
if((state_val_45662 === (12))){
var inst_45582 = (state_45661[(2)]);
var state_45661__$1 = state_45661;
var statearr_45743_47994 = state_45661__$1;
(statearr_45743_47994[(2)] = inst_45582);

(statearr_45743_47994[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45662 === (2))){
var state_45661__$1 = state_45661;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45661__$1,(4),ch);
} else {
if((state_val_45662 === (23))){
var state_45661__$1 = state_45661;
var statearr_45744_47995 = state_45661__$1;
(statearr_45744_47995[(2)] = null);

(statearr_45744_47995[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45662 === (35))){
var inst_45640 = (state_45661[(2)]);
var state_45661__$1 = state_45661;
var statearr_45745_48000 = state_45661__$1;
(statearr_45745_48000[(2)] = inst_45640);

(statearr_45745_48000[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45662 === (19))){
var inst_45551 = (state_45661[(7)]);
var inst_45555 = cljs.core.chunk_first(inst_45551);
var inst_45558 = cljs.core.chunk_rest(inst_45551);
var inst_45559 = cljs.core.count(inst_45555);
var inst_45523 = inst_45558;
var inst_45524 = inst_45555;
var inst_45525 = inst_45559;
var inst_45526 = (0);
var state_45661__$1 = (function (){var statearr_45746 = state_45661;
(statearr_45746[(14)] = inst_45524);

(statearr_45746[(15)] = inst_45525);

(statearr_45746[(16)] = inst_45523);

(statearr_45746[(17)] = inst_45526);

return statearr_45746;
})();
var statearr_45747_48001 = state_45661__$1;
(statearr_45747_48001[(2)] = null);

(statearr_45747_48001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45662 === (11))){
var inst_45551 = (state_45661[(7)]);
var inst_45523 = (state_45661[(16)]);
var inst_45551__$1 = cljs.core.seq(inst_45523);
var state_45661__$1 = (function (){var statearr_45748 = state_45661;
(statearr_45748[(7)] = inst_45551__$1);

return statearr_45748;
})();
if(inst_45551__$1){
var statearr_45749_48004 = state_45661__$1;
(statearr_45749_48004[(1)] = (16));

} else {
var statearr_45750_48005 = state_45661__$1;
(statearr_45750_48005[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45662 === (9))){
var inst_45584 = (state_45661[(2)]);
var state_45661__$1 = state_45661;
var statearr_45755_48006 = state_45661__$1;
(statearr_45755_48006[(2)] = inst_45584);

(statearr_45755_48006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45662 === (5))){
var inst_45516 = cljs.core.deref(cs);
var inst_45517 = cljs.core.seq(inst_45516);
var inst_45523 = inst_45517;
var inst_45524 = null;
var inst_45525 = (0);
var inst_45526 = (0);
var state_45661__$1 = (function (){var statearr_45760 = state_45661;
(statearr_45760[(14)] = inst_45524);

(statearr_45760[(15)] = inst_45525);

(statearr_45760[(16)] = inst_45523);

(statearr_45760[(17)] = inst_45526);

return statearr_45760;
})();
var statearr_45761_48008 = state_45661__$1;
(statearr_45761_48008[(2)] = null);

(statearr_45761_48008[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45662 === (14))){
var state_45661__$1 = state_45661;
var statearr_45766_48009 = state_45661__$1;
(statearr_45766_48009[(2)] = null);

(statearr_45766_48009[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45662 === (45))){
var inst_45649 = (state_45661[(2)]);
var state_45661__$1 = state_45661;
var statearr_45767_48010 = state_45661__$1;
(statearr_45767_48010[(2)] = inst_45649);

(statearr_45767_48010[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45662 === (26))){
var inst_45589 = (state_45661[(27)]);
var inst_45644 = (state_45661[(2)]);
var inst_45646 = cljs.core.seq(inst_45589);
var state_45661__$1 = (function (){var statearr_45768 = state_45661;
(statearr_45768[(29)] = inst_45644);

return statearr_45768;
})();
if(inst_45646){
var statearr_45769_48011 = state_45661__$1;
(statearr_45769_48011[(1)] = (42));

} else {
var statearr_45770_48012 = state_45661__$1;
(statearr_45770_48012[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45662 === (16))){
var inst_45551 = (state_45661[(7)]);
var inst_45553 = cljs.core.chunked_seq_QMARK_(inst_45551);
var state_45661__$1 = state_45661;
if(inst_45553){
var statearr_45771_48013 = state_45661__$1;
(statearr_45771_48013[(1)] = (19));

} else {
var statearr_45772_48015 = state_45661__$1;
(statearr_45772_48015[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45662 === (38))){
var inst_45637 = (state_45661[(2)]);
var state_45661__$1 = state_45661;
var statearr_45773_48016 = state_45661__$1;
(statearr_45773_48016[(2)] = inst_45637);

(statearr_45773_48016[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45662 === (30))){
var state_45661__$1 = state_45661;
var statearr_45774_48018 = state_45661__$1;
(statearr_45774_48018[(2)] = null);

(statearr_45774_48018[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45662 === (10))){
var inst_45524 = (state_45661[(14)]);
var inst_45526 = (state_45661[(17)]);
var inst_45537 = cljs.core._nth(inst_45524,inst_45526);
var inst_45539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45537,(0),null);
var inst_45540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45537,(1),null);
var state_45661__$1 = (function (){var statearr_45775 = state_45661;
(statearr_45775[(24)] = inst_45539);

return statearr_45775;
})();
if(cljs.core.truth_(inst_45540)){
var statearr_45776_48019 = state_45661__$1;
(statearr_45776_48019[(1)] = (13));

} else {
var statearr_45777_48020 = state_45661__$1;
(statearr_45777_48020[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45662 === (18))){
var inst_45580 = (state_45661[(2)]);
var state_45661__$1 = state_45661;
var statearr_45778_48021 = state_45661__$1;
(statearr_45778_48021[(2)] = inst_45580);

(statearr_45778_48021[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45662 === (42))){
var state_45661__$1 = state_45661;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45661__$1,(45),dchan);
} else {
if((state_val_45662 === (37))){
var inst_45507 = (state_45661[(9)]);
var inst_45627 = (state_45661[(22)]);
var inst_45616 = (state_45661[(23)]);
var inst_45627__$1 = cljs.core.first(inst_45616);
var inst_45628 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45627__$1,inst_45507,done);
var state_45661__$1 = (function (){var statearr_45780 = state_45661;
(statearr_45780[(22)] = inst_45627__$1);

return statearr_45780;
})();
if(cljs.core.truth_(inst_45628)){
var statearr_45781_48022 = state_45661__$1;
(statearr_45781_48022[(1)] = (39));

} else {
var statearr_45782_48023 = state_45661__$1;
(statearr_45782_48023[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45662 === (8))){
var inst_45525 = (state_45661[(15)]);
var inst_45526 = (state_45661[(17)]);
var inst_45529 = (inst_45526 < inst_45525);
var inst_45530 = inst_45529;
var state_45661__$1 = state_45661;
if(cljs.core.truth_(inst_45530)){
var statearr_45783_48024 = state_45661__$1;
(statearr_45783_48024[(1)] = (10));

} else {
var statearr_45784_48025 = state_45661__$1;
(statearr_45784_48025[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__44167__auto__ = null;
var cljs$core$async$mult_$_state_machine__44167__auto____0 = (function (){
var statearr_45793 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45793[(0)] = cljs$core$async$mult_$_state_machine__44167__auto__);

(statearr_45793[(1)] = (1));

return statearr_45793;
});
var cljs$core$async$mult_$_state_machine__44167__auto____1 = (function (state_45661){
while(true){
var ret_value__44168__auto__ = (function (){try{while(true){
var result__44169__auto__ = switch__44166__auto__(state_45661);
if(cljs.core.keyword_identical_QMARK_(result__44169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44169__auto__;
}
break;
}
}catch (e45796){var ex__44170__auto__ = e45796;
var statearr_45797_48026 = state_45661;
(statearr_45797_48026[(2)] = ex__44170__auto__);


if(cljs.core.seq((state_45661[(4)]))){
var statearr_45798_48027 = state_45661;
(statearr_45798_48027[(1)] = cljs.core.first((state_45661[(4)])));

} else {
throw ex__44170__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48028 = state_45661;
state_45661 = G__48028;
continue;
} else {
return ret_value__44168__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__44167__auto__ = function(state_45661){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__44167__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__44167__auto____1.call(this,state_45661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__44167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__44167__auto____0;
cljs$core$async$mult_$_state_machine__44167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__44167__auto____1;
return cljs$core$async$mult_$_state_machine__44167__auto__;
})()
})();
var state__44377__auto__ = (function (){var statearr_45802 = f__44376__auto__();
(statearr_45802[(6)] = c__44375__auto___47911);

return statearr_45802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44377__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__45807 = arguments.length;
switch (G__45807) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_48030 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_48030(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_48031 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_48031(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_48033 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_48033(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_48034 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_48034(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_48039 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_48039(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___48040 = arguments.length;
var i__4865__auto___48041 = (0);
while(true){
if((i__4865__auto___48041 < len__4864__auto___48040)){
args__4870__auto__.push((arguments[i__4865__auto___48041]));

var G__48042 = (i__4865__auto___48041 + (1));
i__4865__auto___48041 = G__48042;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__45860){
var map__45861 = p__45860;
var map__45861__$1 = cljs.core.__destructure_map(map__45861);
var opts = map__45861__$1;
var statearr_45862_48043 = state;
(statearr_45862_48043[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_45866_48044 = state;
(statearr_45866_48044[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_45867_48045 = state;
(statearr_45867_48045[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq45850){
var G__45851 = cljs.core.first(seq45850);
var seq45850__$1 = cljs.core.next(seq45850);
var G__45852 = cljs.core.first(seq45850__$1);
var seq45850__$2 = cljs.core.next(seq45850__$1);
var G__45853 = cljs.core.first(seq45850__$2);
var seq45850__$3 = cljs.core.next(seq45850__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45851,G__45852,G__45853,seq45850__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45877 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45877 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta45878){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta45878 = meta45878;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45877.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45879,meta45878__$1){
var self__ = this;
var _45879__$1 = this;
return (new cljs.core.async.t_cljs$core$async45877(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta45878__$1));
}));

(cljs.core.async.t_cljs$core$async45877.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45879){
var self__ = this;
var _45879__$1 = this;
return self__.meta45878;
}));

(cljs.core.async.t_cljs$core$async45877.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45877.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async45877.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45877.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45877.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45877.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45877.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45877.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45877.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta45878","meta45878",1409537659,null)], null);
}));

(cljs.core.async.t_cljs$core$async45877.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45877.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45877");

(cljs.core.async.t_cljs$core$async45877.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async45877");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45877.
 */
cljs.core.async.__GT_t_cljs$core$async45877 = (function cljs$core$async$mix_$___GT_t_cljs$core$async45877(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45878){
return (new cljs.core.async.t_cljs$core$async45877(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45878));
});

}

return (new cljs.core.async.t_cljs$core$async45877(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44375__auto___48064 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44376__auto__ = (function (){var switch__44166__auto__ = (function (state_46002){
var state_val_46003 = (state_46002[(1)]);
if((state_val_46003 === (7))){
var inst_45960 = (state_46002[(2)]);
var state_46002__$1 = state_46002;
if(cljs.core.truth_(inst_45960)){
var statearr_46005_48065 = state_46002__$1;
(statearr_46005_48065[(1)] = (8));

} else {
var statearr_46006_48066 = state_46002__$1;
(statearr_46006_48066[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46003 === (20))){
var inst_45948 = (state_46002[(7)]);
var state_46002__$1 = state_46002;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46002__$1,(23),out,inst_45948);
} else {
if((state_val_46003 === (1))){
var inst_45931 = calc_state();
var inst_45932 = cljs.core.__destructure_map(inst_45931);
var inst_45933 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45932,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45934 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45932,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45935 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45932,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_45936 = inst_45931;
var state_46002__$1 = (function (){var statearr_46007 = state_46002;
(statearr_46007[(8)] = inst_45933);

(statearr_46007[(9)] = inst_45935);

(statearr_46007[(10)] = inst_45936);

(statearr_46007[(11)] = inst_45934);

return statearr_46007;
})();
var statearr_46009_48067 = state_46002__$1;
(statearr_46009_48067[(2)] = null);

(statearr_46009_48067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46003 === (24))){
var inst_45939 = (state_46002[(12)]);
var inst_45936 = inst_45939;
var state_46002__$1 = (function (){var statearr_46011 = state_46002;
(statearr_46011[(10)] = inst_45936);

return statearr_46011;
})();
var statearr_46012_48070 = state_46002__$1;
(statearr_46012_48070[(2)] = null);

(statearr_46012_48070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46003 === (4))){
var inst_45948 = (state_46002[(7)]);
var inst_45955 = (state_46002[(13)]);
var inst_45947 = (state_46002[(2)]);
var inst_45948__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45947,(0),null);
var inst_45949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45947,(1),null);
var inst_45955__$1 = (inst_45948__$1 == null);
var state_46002__$1 = (function (){var statearr_46013 = state_46002;
(statearr_46013[(7)] = inst_45948__$1);

(statearr_46013[(13)] = inst_45955__$1);

(statearr_46013[(14)] = inst_45949);

return statearr_46013;
})();
if(cljs.core.truth_(inst_45955__$1)){
var statearr_46014_48075 = state_46002__$1;
(statearr_46014_48075[(1)] = (5));

} else {
var statearr_46015_48076 = state_46002__$1;
(statearr_46015_48076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46003 === (15))){
var inst_45974 = (state_46002[(15)]);
var inst_45940 = (state_46002[(16)]);
var inst_45974__$1 = cljs.core.empty_QMARK_(inst_45940);
var state_46002__$1 = (function (){var statearr_46016 = state_46002;
(statearr_46016[(15)] = inst_45974__$1);

return statearr_46016;
})();
if(inst_45974__$1){
var statearr_46017_48077 = state_46002__$1;
(statearr_46017_48077[(1)] = (17));

} else {
var statearr_46018_48078 = state_46002__$1;
(statearr_46018_48078[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46003 === (21))){
var inst_45939 = (state_46002[(12)]);
var inst_45936 = inst_45939;
var state_46002__$1 = (function (){var statearr_46020 = state_46002;
(statearr_46020[(10)] = inst_45936);

return statearr_46020;
})();
var statearr_46021_48079 = state_46002__$1;
(statearr_46021_48079[(2)] = null);

(statearr_46021_48079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46003 === (13))){
var inst_45967 = (state_46002[(2)]);
var inst_45968 = calc_state();
var inst_45936 = inst_45968;
var state_46002__$1 = (function (){var statearr_46022 = state_46002;
(statearr_46022[(17)] = inst_45967);

(statearr_46022[(10)] = inst_45936);

return statearr_46022;
})();
var statearr_46023_48080 = state_46002__$1;
(statearr_46023_48080[(2)] = null);

(statearr_46023_48080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46003 === (22))){
var inst_45994 = (state_46002[(2)]);
var state_46002__$1 = state_46002;
var statearr_46024_48082 = state_46002__$1;
(statearr_46024_48082[(2)] = inst_45994);

(statearr_46024_48082[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46003 === (6))){
var inst_45949 = (state_46002[(14)]);
var inst_45958 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45949,change);
var state_46002__$1 = state_46002;
var statearr_46025_48084 = state_46002__$1;
(statearr_46025_48084[(2)] = inst_45958);

(statearr_46025_48084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46003 === (25))){
var state_46002__$1 = state_46002;
var statearr_46026_48085 = state_46002__$1;
(statearr_46026_48085[(2)] = null);

(statearr_46026_48085[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46003 === (17))){
var inst_45941 = (state_46002[(18)]);
var inst_45949 = (state_46002[(14)]);
var inst_45976 = (inst_45941.cljs$core$IFn$_invoke$arity$1 ? inst_45941.cljs$core$IFn$_invoke$arity$1(inst_45949) : inst_45941.call(null,inst_45949));
var inst_45977 = cljs.core.not(inst_45976);
var state_46002__$1 = state_46002;
var statearr_46028_48086 = state_46002__$1;
(statearr_46028_48086[(2)] = inst_45977);

(statearr_46028_48086[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46003 === (3))){
var inst_45998 = (state_46002[(2)]);
var state_46002__$1 = state_46002;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46002__$1,inst_45998);
} else {
if((state_val_46003 === (12))){
var state_46002__$1 = state_46002;
var statearr_46029_48087 = state_46002__$1;
(statearr_46029_48087[(2)] = null);

(statearr_46029_48087[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46003 === (2))){
var inst_45939 = (state_46002[(12)]);
var inst_45936 = (state_46002[(10)]);
var inst_45939__$1 = cljs.core.__destructure_map(inst_45936);
var inst_45940 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45939__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45941 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45939__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45942 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45939__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_46002__$1 = (function (){var statearr_46033 = state_46002;
(statearr_46033[(18)] = inst_45941);

(statearr_46033[(12)] = inst_45939__$1);

(statearr_46033[(16)] = inst_45940);

return statearr_46033;
})();
return cljs.core.async.ioc_alts_BANG_(state_46002__$1,(4),inst_45942);
} else {
if((state_val_46003 === (23))){
var inst_45985 = (state_46002[(2)]);
var state_46002__$1 = state_46002;
if(cljs.core.truth_(inst_45985)){
var statearr_46034_48088 = state_46002__$1;
(statearr_46034_48088[(1)] = (24));

} else {
var statearr_46035_48089 = state_46002__$1;
(statearr_46035_48089[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46003 === (19))){
var inst_45980 = (state_46002[(2)]);
var state_46002__$1 = state_46002;
var statearr_46036_48090 = state_46002__$1;
(statearr_46036_48090[(2)] = inst_45980);

(statearr_46036_48090[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46003 === (11))){
var inst_45949 = (state_46002[(14)]);
var inst_45964 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_45949);
var state_46002__$1 = state_46002;
var statearr_46037_48091 = state_46002__$1;
(statearr_46037_48091[(2)] = inst_45964);

(statearr_46037_48091[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46003 === (9))){
var inst_45971 = (state_46002[(19)]);
var inst_45949 = (state_46002[(14)]);
var inst_45940 = (state_46002[(16)]);
var inst_45971__$1 = (inst_45940.cljs$core$IFn$_invoke$arity$1 ? inst_45940.cljs$core$IFn$_invoke$arity$1(inst_45949) : inst_45940.call(null,inst_45949));
var state_46002__$1 = (function (){var statearr_46040 = state_46002;
(statearr_46040[(19)] = inst_45971__$1);

return statearr_46040;
})();
if(cljs.core.truth_(inst_45971__$1)){
var statearr_46041_48092 = state_46002__$1;
(statearr_46041_48092[(1)] = (14));

} else {
var statearr_46042_48093 = state_46002__$1;
(statearr_46042_48093[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46003 === (5))){
var inst_45955 = (state_46002[(13)]);
var state_46002__$1 = state_46002;
var statearr_46043_48094 = state_46002__$1;
(statearr_46043_48094[(2)] = inst_45955);

(statearr_46043_48094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46003 === (14))){
var inst_45971 = (state_46002[(19)]);
var state_46002__$1 = state_46002;
var statearr_46044_48095 = state_46002__$1;
(statearr_46044_48095[(2)] = inst_45971);

(statearr_46044_48095[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46003 === (26))){
var inst_45990 = (state_46002[(2)]);
var state_46002__$1 = state_46002;
var statearr_46045_48096 = state_46002__$1;
(statearr_46045_48096[(2)] = inst_45990);

(statearr_46045_48096[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46003 === (16))){
var inst_45982 = (state_46002[(2)]);
var state_46002__$1 = state_46002;
if(cljs.core.truth_(inst_45982)){
var statearr_46049_48097 = state_46002__$1;
(statearr_46049_48097[(1)] = (20));

} else {
var statearr_46050_48098 = state_46002__$1;
(statearr_46050_48098[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46003 === (10))){
var inst_45996 = (state_46002[(2)]);
var state_46002__$1 = state_46002;
var statearr_46051_48099 = state_46002__$1;
(statearr_46051_48099[(2)] = inst_45996);

(statearr_46051_48099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46003 === (18))){
var inst_45974 = (state_46002[(15)]);
var state_46002__$1 = state_46002;
var statearr_46053_48100 = state_46002__$1;
(statearr_46053_48100[(2)] = inst_45974);

(statearr_46053_48100[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46003 === (8))){
var inst_45948 = (state_46002[(7)]);
var inst_45962 = (inst_45948 == null);
var state_46002__$1 = state_46002;
if(cljs.core.truth_(inst_45962)){
var statearr_46056_48102 = state_46002__$1;
(statearr_46056_48102[(1)] = (11));

} else {
var statearr_46058_48104 = state_46002__$1;
(statearr_46058_48104[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__44167__auto__ = null;
var cljs$core$async$mix_$_state_machine__44167__auto____0 = (function (){
var statearr_46059 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46059[(0)] = cljs$core$async$mix_$_state_machine__44167__auto__);

(statearr_46059[(1)] = (1));

return statearr_46059;
});
var cljs$core$async$mix_$_state_machine__44167__auto____1 = (function (state_46002){
while(true){
var ret_value__44168__auto__ = (function (){try{while(true){
var result__44169__auto__ = switch__44166__auto__(state_46002);
if(cljs.core.keyword_identical_QMARK_(result__44169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44169__auto__;
}
break;
}
}catch (e46063){var ex__44170__auto__ = e46063;
var statearr_46064_48105 = state_46002;
(statearr_46064_48105[(2)] = ex__44170__auto__);


if(cljs.core.seq((state_46002[(4)]))){
var statearr_46065_48106 = state_46002;
(statearr_46065_48106[(1)] = cljs.core.first((state_46002[(4)])));

} else {
throw ex__44170__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48107 = state_46002;
state_46002 = G__48107;
continue;
} else {
return ret_value__44168__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__44167__auto__ = function(state_46002){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__44167__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__44167__auto____1.call(this,state_46002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__44167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__44167__auto____0;
cljs$core$async$mix_$_state_machine__44167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__44167__auto____1;
return cljs$core$async$mix_$_state_machine__44167__auto__;
})()
})();
var state__44377__auto__ = (function (){var statearr_46066 = f__44376__auto__();
(statearr_46066[(6)] = c__44375__auto___48064);

return statearr_46066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44377__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_48114 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_48114(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_48116 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_48116(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_48118 = (function() {
var G__48119 = null;
var G__48119__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__48119__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__48119 = function(p,v){
switch(arguments.length){
case 1:
return G__48119__1.call(this,p);
case 2:
return G__48119__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__48119.cljs$core$IFn$_invoke$arity$1 = G__48119__1;
G__48119.cljs$core$IFn$_invoke$arity$2 = G__48119__2;
return G__48119;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__46081 = arguments.length;
switch (G__46081) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_48118(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_48118(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__46087 = arguments.length;
switch (G__46087) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__46084_SHARP_){
if(cljs.core.truth_((p1__46084_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__46084_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__46084_SHARP_.call(null,topic)))){
return p1__46084_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__46084_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46090 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46090 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta46091){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta46091 = meta46091;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46090.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46092,meta46091__$1){
var self__ = this;
var _46092__$1 = this;
return (new cljs.core.async.t_cljs$core$async46090(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta46091__$1));
}));

(cljs.core.async.t_cljs$core$async46090.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46092){
var self__ = this;
var _46092__$1 = this;
return self__.meta46091;
}));

(cljs.core.async.t_cljs$core$async46090.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46090.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46090.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46090.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async46090.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async46090.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async46090.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async46090.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta46091","meta46091",1025560464,null)], null);
}));

(cljs.core.async.t_cljs$core$async46090.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46090.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46090");

(cljs.core.async.t_cljs$core$async46090.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async46090");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46090.
 */
cljs.core.async.__GT_t_cljs$core$async46090 = (function cljs$core$async$__GT_t_cljs$core$async46090(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46091){
return (new cljs.core.async.t_cljs$core$async46090(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46091));
});

}

return (new cljs.core.async.t_cljs$core$async46090(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44375__auto___48132 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44376__auto__ = (function (){var switch__44166__auto__ = (function (state_46167){
var state_val_46168 = (state_46167[(1)]);
if((state_val_46168 === (7))){
var inst_46163 = (state_46167[(2)]);
var state_46167__$1 = state_46167;
var statearr_46174_48146 = state_46167__$1;
(statearr_46174_48146[(2)] = inst_46163);

(statearr_46174_48146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46168 === (20))){
var state_46167__$1 = state_46167;
var statearr_46180_48147 = state_46167__$1;
(statearr_46180_48147[(2)] = null);

(statearr_46180_48147[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46168 === (1))){
var state_46167__$1 = state_46167;
var statearr_46184_48148 = state_46167__$1;
(statearr_46184_48148[(2)] = null);

(statearr_46184_48148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46168 === (24))){
var inst_46146 = (state_46167[(7)]);
var inst_46155 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_46146);
var state_46167__$1 = state_46167;
var statearr_46186_48155 = state_46167__$1;
(statearr_46186_48155[(2)] = inst_46155);

(statearr_46186_48155[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46168 === (4))){
var inst_46096 = (state_46167[(8)]);
var inst_46096__$1 = (state_46167[(2)]);
var inst_46097 = (inst_46096__$1 == null);
var state_46167__$1 = (function (){var statearr_46187 = state_46167;
(statearr_46187[(8)] = inst_46096__$1);

return statearr_46187;
})();
if(cljs.core.truth_(inst_46097)){
var statearr_46188_48156 = state_46167__$1;
(statearr_46188_48156[(1)] = (5));

} else {
var statearr_46189_48157 = state_46167__$1;
(statearr_46189_48157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46168 === (15))){
var inst_46140 = (state_46167[(2)]);
var state_46167__$1 = state_46167;
var statearr_46191_48158 = state_46167__$1;
(statearr_46191_48158[(2)] = inst_46140);

(statearr_46191_48158[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46168 === (21))){
var inst_46160 = (state_46167[(2)]);
var state_46167__$1 = (function (){var statearr_46193 = state_46167;
(statearr_46193[(9)] = inst_46160);

return statearr_46193;
})();
var statearr_46198_48159 = state_46167__$1;
(statearr_46198_48159[(2)] = null);

(statearr_46198_48159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46168 === (13))){
var inst_46121 = (state_46167[(10)]);
var inst_46124 = cljs.core.chunked_seq_QMARK_(inst_46121);
var state_46167__$1 = state_46167;
if(inst_46124){
var statearr_46199_48164 = state_46167__$1;
(statearr_46199_48164[(1)] = (16));

} else {
var statearr_46200_48165 = state_46167__$1;
(statearr_46200_48165[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46168 === (22))){
var inst_46152 = (state_46167[(2)]);
var state_46167__$1 = state_46167;
if(cljs.core.truth_(inst_46152)){
var statearr_46202_48169 = state_46167__$1;
(statearr_46202_48169[(1)] = (23));

} else {
var statearr_46204_48170 = state_46167__$1;
(statearr_46204_48170[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46168 === (6))){
var inst_46148 = (state_46167[(11)]);
var inst_46096 = (state_46167[(8)]);
var inst_46146 = (state_46167[(7)]);
var inst_46146__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_46096) : topic_fn.call(null,inst_46096));
var inst_46147 = cljs.core.deref(mults);
var inst_46148__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46147,inst_46146__$1);
var state_46167__$1 = (function (){var statearr_46205 = state_46167;
(statearr_46205[(11)] = inst_46148__$1);

(statearr_46205[(7)] = inst_46146__$1);

return statearr_46205;
})();
if(cljs.core.truth_(inst_46148__$1)){
var statearr_46206_48174 = state_46167__$1;
(statearr_46206_48174[(1)] = (19));

} else {
var statearr_46207_48175 = state_46167__$1;
(statearr_46207_48175[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46168 === (25))){
var inst_46157 = (state_46167[(2)]);
var state_46167__$1 = state_46167;
var statearr_46211_48178 = state_46167__$1;
(statearr_46211_48178[(2)] = inst_46157);

(statearr_46211_48178[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46168 === (17))){
var inst_46121 = (state_46167[(10)]);
var inst_46131 = cljs.core.first(inst_46121);
var inst_46132 = cljs.core.async.muxch_STAR_(inst_46131);
var inst_46133 = cljs.core.async.close_BANG_(inst_46132);
var inst_46134 = cljs.core.next(inst_46121);
var inst_46106 = inst_46134;
var inst_46107 = null;
var inst_46108 = (0);
var inst_46109 = (0);
var state_46167__$1 = (function (){var statearr_46213 = state_46167;
(statearr_46213[(12)] = inst_46107);

(statearr_46213[(13)] = inst_46106);

(statearr_46213[(14)] = inst_46108);

(statearr_46213[(15)] = inst_46133);

(statearr_46213[(16)] = inst_46109);

return statearr_46213;
})();
var statearr_46214_48184 = state_46167__$1;
(statearr_46214_48184[(2)] = null);

(statearr_46214_48184[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46168 === (3))){
var inst_46165 = (state_46167[(2)]);
var state_46167__$1 = state_46167;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46167__$1,inst_46165);
} else {
if((state_val_46168 === (12))){
var inst_46142 = (state_46167[(2)]);
var state_46167__$1 = state_46167;
var statearr_46220_48185 = state_46167__$1;
(statearr_46220_48185[(2)] = inst_46142);

(statearr_46220_48185[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46168 === (2))){
var state_46167__$1 = state_46167;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46167__$1,(4),ch);
} else {
if((state_val_46168 === (23))){
var state_46167__$1 = state_46167;
var statearr_46226_48186 = state_46167__$1;
(statearr_46226_48186[(2)] = null);

(statearr_46226_48186[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46168 === (19))){
var inst_46148 = (state_46167[(11)]);
var inst_46096 = (state_46167[(8)]);
var inst_46150 = cljs.core.async.muxch_STAR_(inst_46148);
var state_46167__$1 = state_46167;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46167__$1,(22),inst_46150,inst_46096);
} else {
if((state_val_46168 === (11))){
var inst_46121 = (state_46167[(10)]);
var inst_46106 = (state_46167[(13)]);
var inst_46121__$1 = cljs.core.seq(inst_46106);
var state_46167__$1 = (function (){var statearr_46227 = state_46167;
(statearr_46227[(10)] = inst_46121__$1);

return statearr_46227;
})();
if(inst_46121__$1){
var statearr_46228_48187 = state_46167__$1;
(statearr_46228_48187[(1)] = (13));

} else {
var statearr_46229_48188 = state_46167__$1;
(statearr_46229_48188[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46168 === (9))){
var inst_46144 = (state_46167[(2)]);
var state_46167__$1 = state_46167;
var statearr_46231_48189 = state_46167__$1;
(statearr_46231_48189[(2)] = inst_46144);

(statearr_46231_48189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46168 === (5))){
var inst_46103 = cljs.core.deref(mults);
var inst_46104 = cljs.core.vals(inst_46103);
var inst_46105 = cljs.core.seq(inst_46104);
var inst_46106 = inst_46105;
var inst_46107 = null;
var inst_46108 = (0);
var inst_46109 = (0);
var state_46167__$1 = (function (){var statearr_46235 = state_46167;
(statearr_46235[(12)] = inst_46107);

(statearr_46235[(13)] = inst_46106);

(statearr_46235[(14)] = inst_46108);

(statearr_46235[(16)] = inst_46109);

return statearr_46235;
})();
var statearr_46236_48195 = state_46167__$1;
(statearr_46236_48195[(2)] = null);

(statearr_46236_48195[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46168 === (14))){
var state_46167__$1 = state_46167;
var statearr_46241_48196 = state_46167__$1;
(statearr_46241_48196[(2)] = null);

(statearr_46241_48196[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46168 === (16))){
var inst_46121 = (state_46167[(10)]);
var inst_46126 = cljs.core.chunk_first(inst_46121);
var inst_46127 = cljs.core.chunk_rest(inst_46121);
var inst_46128 = cljs.core.count(inst_46126);
var inst_46106 = inst_46127;
var inst_46107 = inst_46126;
var inst_46108 = inst_46128;
var inst_46109 = (0);
var state_46167__$1 = (function (){var statearr_46242 = state_46167;
(statearr_46242[(12)] = inst_46107);

(statearr_46242[(13)] = inst_46106);

(statearr_46242[(14)] = inst_46108);

(statearr_46242[(16)] = inst_46109);

return statearr_46242;
})();
var statearr_46243_48197 = state_46167__$1;
(statearr_46243_48197[(2)] = null);

(statearr_46243_48197[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46168 === (10))){
var inst_46107 = (state_46167[(12)]);
var inst_46106 = (state_46167[(13)]);
var inst_46108 = (state_46167[(14)]);
var inst_46109 = (state_46167[(16)]);
var inst_46115 = cljs.core._nth(inst_46107,inst_46109);
var inst_46116 = cljs.core.async.muxch_STAR_(inst_46115);
var inst_46117 = cljs.core.async.close_BANG_(inst_46116);
var inst_46118 = (inst_46109 + (1));
var tmp46238 = inst_46107;
var tmp46239 = inst_46106;
var tmp46240 = inst_46108;
var inst_46106__$1 = tmp46239;
var inst_46107__$1 = tmp46238;
var inst_46108__$1 = tmp46240;
var inst_46109__$1 = inst_46118;
var state_46167__$1 = (function (){var statearr_46246 = state_46167;
(statearr_46246[(12)] = inst_46107__$1);

(statearr_46246[(13)] = inst_46106__$1);

(statearr_46246[(14)] = inst_46108__$1);

(statearr_46246[(16)] = inst_46109__$1);

(statearr_46246[(17)] = inst_46117);

return statearr_46246;
})();
var statearr_46251_48198 = state_46167__$1;
(statearr_46251_48198[(2)] = null);

(statearr_46251_48198[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46168 === (18))){
var inst_46137 = (state_46167[(2)]);
var state_46167__$1 = state_46167;
var statearr_46253_48199 = state_46167__$1;
(statearr_46253_48199[(2)] = inst_46137);

(statearr_46253_48199[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46168 === (8))){
var inst_46108 = (state_46167[(14)]);
var inst_46109 = (state_46167[(16)]);
var inst_46112 = (inst_46109 < inst_46108);
var inst_46113 = inst_46112;
var state_46167__$1 = state_46167;
if(cljs.core.truth_(inst_46113)){
var statearr_46257_48200 = state_46167__$1;
(statearr_46257_48200[(1)] = (10));

} else {
var statearr_46258_48201 = state_46167__$1;
(statearr_46258_48201[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44167__auto__ = null;
var cljs$core$async$state_machine__44167__auto____0 = (function (){
var statearr_46260 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46260[(0)] = cljs$core$async$state_machine__44167__auto__);

(statearr_46260[(1)] = (1));

return statearr_46260;
});
var cljs$core$async$state_machine__44167__auto____1 = (function (state_46167){
while(true){
var ret_value__44168__auto__ = (function (){try{while(true){
var result__44169__auto__ = switch__44166__auto__(state_46167);
if(cljs.core.keyword_identical_QMARK_(result__44169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44169__auto__;
}
break;
}
}catch (e46264){var ex__44170__auto__ = e46264;
var statearr_46265_48202 = state_46167;
(statearr_46265_48202[(2)] = ex__44170__auto__);


if(cljs.core.seq((state_46167[(4)]))){
var statearr_46266_48204 = state_46167;
(statearr_46266_48204[(1)] = cljs.core.first((state_46167[(4)])));

} else {
throw ex__44170__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48208 = state_46167;
state_46167 = G__48208;
continue;
} else {
return ret_value__44168__auto__;
}
break;
}
});
cljs$core$async$state_machine__44167__auto__ = function(state_46167){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44167__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44167__auto____1.call(this,state_46167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44167__auto____0;
cljs$core$async$state_machine__44167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44167__auto____1;
return cljs$core$async$state_machine__44167__auto__;
})()
})();
var state__44377__auto__ = (function (){var statearr_46269 = f__44376__auto__();
(statearr_46269[(6)] = c__44375__auto___48132);

return statearr_46269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44377__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__46274 = arguments.length;
switch (G__46274) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__46286 = arguments.length;
switch (G__46286) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__46307 = arguments.length;
switch (G__46307) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__44375__auto___48216 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44376__auto__ = (function (){var switch__44166__auto__ = (function (state_46379){
var state_val_46380 = (state_46379[(1)]);
if((state_val_46380 === (7))){
var state_46379__$1 = state_46379;
var statearr_46381_48217 = state_46379__$1;
(statearr_46381_48217[(2)] = null);

(statearr_46381_48217[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46380 === (1))){
var state_46379__$1 = state_46379;
var statearr_46382_48218 = state_46379__$1;
(statearr_46382_48218[(2)] = null);

(statearr_46382_48218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46380 === (4))){
var inst_46321 = (state_46379[(7)]);
var inst_46318 = (state_46379[(8)]);
var inst_46323 = (inst_46321 < inst_46318);
var state_46379__$1 = state_46379;
if(cljs.core.truth_(inst_46323)){
var statearr_46383_48219 = state_46379__$1;
(statearr_46383_48219[(1)] = (6));

} else {
var statearr_46384_48220 = state_46379__$1;
(statearr_46384_48220[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46380 === (15))){
var inst_46355 = (state_46379[(9)]);
var inst_46360 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_46355);
var state_46379__$1 = state_46379;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46379__$1,(17),out,inst_46360);
} else {
if((state_val_46380 === (13))){
var inst_46355 = (state_46379[(9)]);
var inst_46355__$1 = (state_46379[(2)]);
var inst_46356 = cljs.core.some(cljs.core.nil_QMARK_,inst_46355__$1);
var state_46379__$1 = (function (){var statearr_46391 = state_46379;
(statearr_46391[(9)] = inst_46355__$1);

return statearr_46391;
})();
if(cljs.core.truth_(inst_46356)){
var statearr_46392_48221 = state_46379__$1;
(statearr_46392_48221[(1)] = (14));

} else {
var statearr_46393_48222 = state_46379__$1;
(statearr_46393_48222[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46380 === (6))){
var state_46379__$1 = state_46379;
var statearr_46394_48223 = state_46379__$1;
(statearr_46394_48223[(2)] = null);

(statearr_46394_48223[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46380 === (17))){
var inst_46362 = (state_46379[(2)]);
var state_46379__$1 = (function (){var statearr_46408 = state_46379;
(statearr_46408[(10)] = inst_46362);

return statearr_46408;
})();
var statearr_46409_48224 = state_46379__$1;
(statearr_46409_48224[(2)] = null);

(statearr_46409_48224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46380 === (3))){
var inst_46367 = (state_46379[(2)]);
var state_46379__$1 = state_46379;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46379__$1,inst_46367);
} else {
if((state_val_46380 === (12))){
var _ = (function (){var statearr_46425 = state_46379;
(statearr_46425[(4)] = cljs.core.rest((state_46379[(4)])));

return statearr_46425;
})();
var state_46379__$1 = state_46379;
var ex46405 = (state_46379__$1[(2)]);
var statearr_46427_48226 = state_46379__$1;
(statearr_46427_48226[(5)] = ex46405);


if((ex46405 instanceof Object)){
var statearr_46437_48227 = state_46379__$1;
(statearr_46437_48227[(1)] = (11));

(statearr_46437_48227[(5)] = null);

} else {
throw ex46405;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46380 === (2))){
var inst_46317 = cljs.core.reset_BANG_(dctr,cnt);
var inst_46318 = cnt;
var inst_46321 = (0);
var state_46379__$1 = (function (){var statearr_46451 = state_46379;
(statearr_46451[(7)] = inst_46321);

(statearr_46451[(11)] = inst_46317);

(statearr_46451[(8)] = inst_46318);

return statearr_46451;
})();
var statearr_46452_48230 = state_46379__$1;
(statearr_46452_48230[(2)] = null);

(statearr_46452_48230[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46380 === (11))){
var inst_46331 = (state_46379[(2)]);
var inst_46334 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_46379__$1 = (function (){var statearr_46453 = state_46379;
(statearr_46453[(12)] = inst_46331);

return statearr_46453;
})();
var statearr_46454_48231 = state_46379__$1;
(statearr_46454_48231[(2)] = inst_46334);

(statearr_46454_48231[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46380 === (9))){
var inst_46321 = (state_46379[(7)]);
var _ = (function (){var statearr_46455 = state_46379;
(statearr_46455[(4)] = cljs.core.cons((12),(state_46379[(4)])));

return statearr_46455;
})();
var inst_46340 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_46321) : chs__$1.call(null,inst_46321));
var inst_46341 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_46321) : done.call(null,inst_46321));
var inst_46342 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_46340,inst_46341);
var ___$1 = (function (){var statearr_46460 = state_46379;
(statearr_46460[(4)] = cljs.core.rest((state_46379[(4)])));

return statearr_46460;
})();
var state_46379__$1 = state_46379;
var statearr_46461_48232 = state_46379__$1;
(statearr_46461_48232[(2)] = inst_46342);

(statearr_46461_48232[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46380 === (5))){
var inst_46353 = (state_46379[(2)]);
var state_46379__$1 = (function (){var statearr_46465 = state_46379;
(statearr_46465[(13)] = inst_46353);

return statearr_46465;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46379__$1,(13),dchan);
} else {
if((state_val_46380 === (14))){
var inst_46358 = cljs.core.async.close_BANG_(out);
var state_46379__$1 = state_46379;
var statearr_46466_48238 = state_46379__$1;
(statearr_46466_48238[(2)] = inst_46358);

(statearr_46466_48238[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46380 === (16))){
var inst_46365 = (state_46379[(2)]);
var state_46379__$1 = state_46379;
var statearr_46467_48240 = state_46379__$1;
(statearr_46467_48240[(2)] = inst_46365);

(statearr_46467_48240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46380 === (10))){
var inst_46321 = (state_46379[(7)]);
var inst_46345 = (state_46379[(2)]);
var inst_46346 = (inst_46321 + (1));
var inst_46321__$1 = inst_46346;
var state_46379__$1 = (function (){var statearr_46468 = state_46379;
(statearr_46468[(7)] = inst_46321__$1);

(statearr_46468[(14)] = inst_46345);

return statearr_46468;
})();
var statearr_46470_48244 = state_46379__$1;
(statearr_46470_48244[(2)] = null);

(statearr_46470_48244[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46380 === (8))){
var inst_46351 = (state_46379[(2)]);
var state_46379__$1 = state_46379;
var statearr_46474_48245 = state_46379__$1;
(statearr_46474_48245[(2)] = inst_46351);

(statearr_46474_48245[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44167__auto__ = null;
var cljs$core$async$state_machine__44167__auto____0 = (function (){
var statearr_46475 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46475[(0)] = cljs$core$async$state_machine__44167__auto__);

(statearr_46475[(1)] = (1));

return statearr_46475;
});
var cljs$core$async$state_machine__44167__auto____1 = (function (state_46379){
while(true){
var ret_value__44168__auto__ = (function (){try{while(true){
var result__44169__auto__ = switch__44166__auto__(state_46379);
if(cljs.core.keyword_identical_QMARK_(result__44169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44169__auto__;
}
break;
}
}catch (e46476){var ex__44170__auto__ = e46476;
var statearr_46477_48246 = state_46379;
(statearr_46477_48246[(2)] = ex__44170__auto__);


if(cljs.core.seq((state_46379[(4)]))){
var statearr_46478_48247 = state_46379;
(statearr_46478_48247[(1)] = cljs.core.first((state_46379[(4)])));

} else {
throw ex__44170__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48248 = state_46379;
state_46379 = G__48248;
continue;
} else {
return ret_value__44168__auto__;
}
break;
}
});
cljs$core$async$state_machine__44167__auto__ = function(state_46379){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44167__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44167__auto____1.call(this,state_46379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44167__auto____0;
cljs$core$async$state_machine__44167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44167__auto____1;
return cljs$core$async$state_machine__44167__auto__;
})()
})();
var state__44377__auto__ = (function (){var statearr_46479 = f__44376__auto__();
(statearr_46479[(6)] = c__44375__auto___48216);

return statearr_46479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44377__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__46483 = arguments.length;
switch (G__46483) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44375__auto___48250 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44376__auto__ = (function (){var switch__44166__auto__ = (function (state_46516){
var state_val_46517 = (state_46516[(1)]);
if((state_val_46517 === (7))){
var inst_46496 = (state_46516[(7)]);
var inst_46495 = (state_46516[(8)]);
var inst_46495__$1 = (state_46516[(2)]);
var inst_46496__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46495__$1,(0),null);
var inst_46497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46495__$1,(1),null);
var inst_46498 = (inst_46496__$1 == null);
var state_46516__$1 = (function (){var statearr_46526 = state_46516;
(statearr_46526[(7)] = inst_46496__$1);

(statearr_46526[(8)] = inst_46495__$1);

(statearr_46526[(9)] = inst_46497);

return statearr_46526;
})();
if(cljs.core.truth_(inst_46498)){
var statearr_46531_48260 = state_46516__$1;
(statearr_46531_48260[(1)] = (8));

} else {
var statearr_46532_48263 = state_46516__$1;
(statearr_46532_48263[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46517 === (1))){
var inst_46485 = cljs.core.vec(chs);
var inst_46486 = inst_46485;
var state_46516__$1 = (function (){var statearr_46541 = state_46516;
(statearr_46541[(10)] = inst_46486);

return statearr_46541;
})();
var statearr_46542_48265 = state_46516__$1;
(statearr_46542_48265[(2)] = null);

(statearr_46542_48265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46517 === (4))){
var inst_46486 = (state_46516[(10)]);
var state_46516__$1 = state_46516;
return cljs.core.async.ioc_alts_BANG_(state_46516__$1,(7),inst_46486);
} else {
if((state_val_46517 === (6))){
var inst_46512 = (state_46516[(2)]);
var state_46516__$1 = state_46516;
var statearr_46547_48271 = state_46516__$1;
(statearr_46547_48271[(2)] = inst_46512);

(statearr_46547_48271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46517 === (3))){
var inst_46514 = (state_46516[(2)]);
var state_46516__$1 = state_46516;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46516__$1,inst_46514);
} else {
if((state_val_46517 === (2))){
var inst_46486 = (state_46516[(10)]);
var inst_46488 = cljs.core.count(inst_46486);
var inst_46489 = (inst_46488 > (0));
var state_46516__$1 = state_46516;
if(cljs.core.truth_(inst_46489)){
var statearr_46558_48272 = state_46516__$1;
(statearr_46558_48272[(1)] = (4));

} else {
var statearr_46559_48273 = state_46516__$1;
(statearr_46559_48273[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46517 === (11))){
var inst_46486 = (state_46516[(10)]);
var inst_46505 = (state_46516[(2)]);
var tmp46548 = inst_46486;
var inst_46486__$1 = tmp46548;
var state_46516__$1 = (function (){var statearr_46560 = state_46516;
(statearr_46560[(10)] = inst_46486__$1);

(statearr_46560[(11)] = inst_46505);

return statearr_46560;
})();
var statearr_46563_48284 = state_46516__$1;
(statearr_46563_48284[(2)] = null);

(statearr_46563_48284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46517 === (9))){
var inst_46496 = (state_46516[(7)]);
var state_46516__$1 = state_46516;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46516__$1,(11),out,inst_46496);
} else {
if((state_val_46517 === (5))){
var inst_46510 = cljs.core.async.close_BANG_(out);
var state_46516__$1 = state_46516;
var statearr_46568_48285 = state_46516__$1;
(statearr_46568_48285[(2)] = inst_46510);

(statearr_46568_48285[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46517 === (10))){
var inst_46508 = (state_46516[(2)]);
var state_46516__$1 = state_46516;
var statearr_46569_48286 = state_46516__$1;
(statearr_46569_48286[(2)] = inst_46508);

(statearr_46569_48286[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46517 === (8))){
var inst_46486 = (state_46516[(10)]);
var inst_46496 = (state_46516[(7)]);
var inst_46495 = (state_46516[(8)]);
var inst_46497 = (state_46516[(9)]);
var inst_46500 = (function (){var cs = inst_46486;
var vec__46491 = inst_46495;
var v = inst_46496;
var c = inst_46497;
return (function (p1__46481_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__46481_SHARP_);
});
})();
var inst_46501 = cljs.core.filterv(inst_46500,inst_46486);
var inst_46486__$1 = inst_46501;
var state_46516__$1 = (function (){var statearr_46573 = state_46516;
(statearr_46573[(10)] = inst_46486__$1);

return statearr_46573;
})();
var statearr_46574_48295 = state_46516__$1;
(statearr_46574_48295[(2)] = null);

(statearr_46574_48295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44167__auto__ = null;
var cljs$core$async$state_machine__44167__auto____0 = (function (){
var statearr_46575 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46575[(0)] = cljs$core$async$state_machine__44167__auto__);

(statearr_46575[(1)] = (1));

return statearr_46575;
});
var cljs$core$async$state_machine__44167__auto____1 = (function (state_46516){
while(true){
var ret_value__44168__auto__ = (function (){try{while(true){
var result__44169__auto__ = switch__44166__auto__(state_46516);
if(cljs.core.keyword_identical_QMARK_(result__44169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44169__auto__;
}
break;
}
}catch (e46578){var ex__44170__auto__ = e46578;
var statearr_46581_48296 = state_46516;
(statearr_46581_48296[(2)] = ex__44170__auto__);


if(cljs.core.seq((state_46516[(4)]))){
var statearr_46583_48297 = state_46516;
(statearr_46583_48297[(1)] = cljs.core.first((state_46516[(4)])));

} else {
throw ex__44170__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48298 = state_46516;
state_46516 = G__48298;
continue;
} else {
return ret_value__44168__auto__;
}
break;
}
});
cljs$core$async$state_machine__44167__auto__ = function(state_46516){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44167__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44167__auto____1.call(this,state_46516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44167__auto____0;
cljs$core$async$state_machine__44167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44167__auto____1;
return cljs$core$async$state_machine__44167__auto__;
})()
})();
var state__44377__auto__ = (function (){var statearr_46584 = f__44376__auto__();
(statearr_46584[(6)] = c__44375__auto___48250);

return statearr_46584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44377__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__46592 = arguments.length;
switch (G__46592) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44375__auto___48300 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44376__auto__ = (function (){var switch__44166__auto__ = (function (state_46621){
var state_val_46622 = (state_46621[(1)]);
if((state_val_46622 === (7))){
var inst_46602 = (state_46621[(7)]);
var inst_46602__$1 = (state_46621[(2)]);
var inst_46603 = (inst_46602__$1 == null);
var inst_46604 = cljs.core.not(inst_46603);
var state_46621__$1 = (function (){var statearr_46629 = state_46621;
(statearr_46629[(7)] = inst_46602__$1);

return statearr_46629;
})();
if(inst_46604){
var statearr_46630_48301 = state_46621__$1;
(statearr_46630_48301[(1)] = (8));

} else {
var statearr_46631_48302 = state_46621__$1;
(statearr_46631_48302[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46622 === (1))){
var inst_46596 = (0);
var state_46621__$1 = (function (){var statearr_46635 = state_46621;
(statearr_46635[(8)] = inst_46596);

return statearr_46635;
})();
var statearr_46636_48303 = state_46621__$1;
(statearr_46636_48303[(2)] = null);

(statearr_46636_48303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46622 === (4))){
var state_46621__$1 = state_46621;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46621__$1,(7),ch);
} else {
if((state_val_46622 === (6))){
var inst_46616 = (state_46621[(2)]);
var state_46621__$1 = state_46621;
var statearr_46637_48304 = state_46621__$1;
(statearr_46637_48304[(2)] = inst_46616);

(statearr_46637_48304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46622 === (3))){
var inst_46618 = (state_46621[(2)]);
var inst_46619 = cljs.core.async.close_BANG_(out);
var state_46621__$1 = (function (){var statearr_46638 = state_46621;
(statearr_46638[(9)] = inst_46618);

return statearr_46638;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46621__$1,inst_46619);
} else {
if((state_val_46622 === (2))){
var inst_46596 = (state_46621[(8)]);
var inst_46598 = (inst_46596 < n);
var state_46621__$1 = state_46621;
if(cljs.core.truth_(inst_46598)){
var statearr_46639_48306 = state_46621__$1;
(statearr_46639_48306[(1)] = (4));

} else {
var statearr_46640_48308 = state_46621__$1;
(statearr_46640_48308[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46622 === (11))){
var inst_46596 = (state_46621[(8)]);
var inst_46608 = (state_46621[(2)]);
var inst_46609 = (inst_46596 + (1));
var inst_46596__$1 = inst_46609;
var state_46621__$1 = (function (){var statearr_46645 = state_46621;
(statearr_46645[(8)] = inst_46596__$1);

(statearr_46645[(10)] = inst_46608);

return statearr_46645;
})();
var statearr_46648_48309 = state_46621__$1;
(statearr_46648_48309[(2)] = null);

(statearr_46648_48309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46622 === (9))){
var state_46621__$1 = state_46621;
var statearr_46649_48311 = state_46621__$1;
(statearr_46649_48311[(2)] = null);

(statearr_46649_48311[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46622 === (5))){
var state_46621__$1 = state_46621;
var statearr_46652_48312 = state_46621__$1;
(statearr_46652_48312[(2)] = null);

(statearr_46652_48312[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46622 === (10))){
var inst_46613 = (state_46621[(2)]);
var state_46621__$1 = state_46621;
var statearr_46653_48313 = state_46621__$1;
(statearr_46653_48313[(2)] = inst_46613);

(statearr_46653_48313[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46622 === (8))){
var inst_46602 = (state_46621[(7)]);
var state_46621__$1 = state_46621;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46621__$1,(11),out,inst_46602);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44167__auto__ = null;
var cljs$core$async$state_machine__44167__auto____0 = (function (){
var statearr_46665 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46665[(0)] = cljs$core$async$state_machine__44167__auto__);

(statearr_46665[(1)] = (1));

return statearr_46665;
});
var cljs$core$async$state_machine__44167__auto____1 = (function (state_46621){
while(true){
var ret_value__44168__auto__ = (function (){try{while(true){
var result__44169__auto__ = switch__44166__auto__(state_46621);
if(cljs.core.keyword_identical_QMARK_(result__44169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44169__auto__;
}
break;
}
}catch (e46666){var ex__44170__auto__ = e46666;
var statearr_46667_48320 = state_46621;
(statearr_46667_48320[(2)] = ex__44170__auto__);


if(cljs.core.seq((state_46621[(4)]))){
var statearr_46668_48321 = state_46621;
(statearr_46668_48321[(1)] = cljs.core.first((state_46621[(4)])));

} else {
throw ex__44170__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48322 = state_46621;
state_46621 = G__48322;
continue;
} else {
return ret_value__44168__auto__;
}
break;
}
});
cljs$core$async$state_machine__44167__auto__ = function(state_46621){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44167__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44167__auto____1.call(this,state_46621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44167__auto____0;
cljs$core$async$state_machine__44167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44167__auto____1;
return cljs$core$async$state_machine__44167__auto__;
})()
})();
var state__44377__auto__ = (function (){var statearr_46675 = f__44376__auto__();
(statearr_46675[(6)] = c__44375__auto___48300);

return statearr_46675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44377__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46683 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46683 = (function (f,ch,meta46684){
this.f = f;
this.ch = ch;
this.meta46684 = meta46684;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46685,meta46684__$1){
var self__ = this;
var _46685__$1 = this;
return (new cljs.core.async.t_cljs$core$async46683(self__.f,self__.ch,meta46684__$1));
}));

(cljs.core.async.t_cljs$core$async46683.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46685){
var self__ = this;
var _46685__$1 = this;
return self__.meta46684;
}));

(cljs.core.async.t_cljs$core$async46683.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46683.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46683.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46683.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46683.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46693 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46693 = (function (f,ch,meta46684,_,fn1,meta46694){
this.f = f;
this.ch = ch;
this.meta46684 = meta46684;
this._ = _;
this.fn1 = fn1;
this.meta46694 = meta46694;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46695,meta46694__$1){
var self__ = this;
var _46695__$1 = this;
return (new cljs.core.async.t_cljs$core$async46693(self__.f,self__.ch,self__.meta46684,self__._,self__.fn1,meta46694__$1));
}));

(cljs.core.async.t_cljs$core$async46693.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46695){
var self__ = this;
var _46695__$1 = this;
return self__.meta46694;
}));

(cljs.core.async.t_cljs$core$async46693.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46693.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async46693.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46693.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__46682_SHARP_){
var G__46699 = (((p1__46682_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__46682_SHARP_) : self__.f.call(null,p1__46682_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__46699) : f1.call(null,G__46699));
});
}));

(cljs.core.async.t_cljs$core$async46693.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46684","meta46684",376512433,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async46683","cljs.core.async/t_cljs$core$async46683",-149813923,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta46694","meta46694",-1548595068,null)], null);
}));

(cljs.core.async.t_cljs$core$async46693.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46693.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46693");

(cljs.core.async.t_cljs$core$async46693.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async46693");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46693.
 */
cljs.core.async.__GT_t_cljs$core$async46693 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46693(f__$1,ch__$1,meta46684__$1,___$2,fn1__$1,meta46694){
return (new cljs.core.async.t_cljs$core$async46693(f__$1,ch__$1,meta46684__$1,___$2,fn1__$1,meta46694));
});

}

return (new cljs.core.async.t_cljs$core$async46693(self__.f,self__.ch,self__.meta46684,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__46700 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__46700) : self__.f.call(null,G__46700));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async46683.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46683.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async46683.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46684","meta46684",376512433,null)], null);
}));

(cljs.core.async.t_cljs$core$async46683.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46683.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46683");

(cljs.core.async.t_cljs$core$async46683.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async46683");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46683.
 */
cljs.core.async.__GT_t_cljs$core$async46683 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46683(f__$1,ch__$1,meta46684){
return (new cljs.core.async.t_cljs$core$async46683(f__$1,ch__$1,meta46684));
});

}

return (new cljs.core.async.t_cljs$core$async46683(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46706 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46706 = (function (f,ch,meta46707){
this.f = f;
this.ch = ch;
this.meta46707 = meta46707;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46708,meta46707__$1){
var self__ = this;
var _46708__$1 = this;
return (new cljs.core.async.t_cljs$core$async46706(self__.f,self__.ch,meta46707__$1));
}));

(cljs.core.async.t_cljs$core$async46706.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46708){
var self__ = this;
var _46708__$1 = this;
return self__.meta46707;
}));

(cljs.core.async.t_cljs$core$async46706.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46706.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46706.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46706.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46706.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46706.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async46706.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46707","meta46707",1595008496,null)], null);
}));

(cljs.core.async.t_cljs$core$async46706.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46706.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46706");

(cljs.core.async.t_cljs$core$async46706.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async46706");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46706.
 */
cljs.core.async.__GT_t_cljs$core$async46706 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async46706(f__$1,ch__$1,meta46707){
return (new cljs.core.async.t_cljs$core$async46706(f__$1,ch__$1,meta46707));
});

}

return (new cljs.core.async.t_cljs$core$async46706(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46729 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46729 = (function (p,ch,meta46730){
this.p = p;
this.ch = ch;
this.meta46730 = meta46730;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46731,meta46730__$1){
var self__ = this;
var _46731__$1 = this;
return (new cljs.core.async.t_cljs$core$async46729(self__.p,self__.ch,meta46730__$1));
}));

(cljs.core.async.t_cljs$core$async46729.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46731){
var self__ = this;
var _46731__$1 = this;
return self__.meta46730;
}));

(cljs.core.async.t_cljs$core$async46729.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46729.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46729.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46729.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46729.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46729.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46729.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async46729.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46730","meta46730",239508820,null)], null);
}));

(cljs.core.async.t_cljs$core$async46729.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46729.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46729");

(cljs.core.async.t_cljs$core$async46729.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async46729");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46729.
 */
cljs.core.async.__GT_t_cljs$core$async46729 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async46729(p__$1,ch__$1,meta46730){
return (new cljs.core.async.t_cljs$core$async46729(p__$1,ch__$1,meta46730));
});

}

return (new cljs.core.async.t_cljs$core$async46729(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__46753 = arguments.length;
switch (G__46753) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44375__auto___48335 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44376__auto__ = (function (){var switch__44166__auto__ = (function (state_46785){
var state_val_46786 = (state_46785[(1)]);
if((state_val_46786 === (7))){
var inst_46779 = (state_46785[(2)]);
var state_46785__$1 = state_46785;
var statearr_46795_48336 = state_46785__$1;
(statearr_46795_48336[(2)] = inst_46779);

(statearr_46795_48336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46786 === (1))){
var state_46785__$1 = state_46785;
var statearr_46799_48337 = state_46785__$1;
(statearr_46799_48337[(2)] = null);

(statearr_46799_48337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46786 === (4))){
var inst_46764 = (state_46785[(7)]);
var inst_46764__$1 = (state_46785[(2)]);
var inst_46765 = (inst_46764__$1 == null);
var state_46785__$1 = (function (){var statearr_46801 = state_46785;
(statearr_46801[(7)] = inst_46764__$1);

return statearr_46801;
})();
if(cljs.core.truth_(inst_46765)){
var statearr_46804_48338 = state_46785__$1;
(statearr_46804_48338[(1)] = (5));

} else {
var statearr_46805_48339 = state_46785__$1;
(statearr_46805_48339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46786 === (6))){
var inst_46764 = (state_46785[(7)]);
var inst_46769 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46764) : p.call(null,inst_46764));
var state_46785__$1 = state_46785;
if(cljs.core.truth_(inst_46769)){
var statearr_46807_48340 = state_46785__$1;
(statearr_46807_48340[(1)] = (8));

} else {
var statearr_46810_48341 = state_46785__$1;
(statearr_46810_48341[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46786 === (3))){
var inst_46781 = (state_46785[(2)]);
var state_46785__$1 = state_46785;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46785__$1,inst_46781);
} else {
if((state_val_46786 === (2))){
var state_46785__$1 = state_46785;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46785__$1,(4),ch);
} else {
if((state_val_46786 === (11))){
var inst_46772 = (state_46785[(2)]);
var state_46785__$1 = state_46785;
var statearr_46817_48342 = state_46785__$1;
(statearr_46817_48342[(2)] = inst_46772);

(statearr_46817_48342[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46786 === (9))){
var state_46785__$1 = state_46785;
var statearr_46820_48343 = state_46785__$1;
(statearr_46820_48343[(2)] = null);

(statearr_46820_48343[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46786 === (5))){
var inst_46767 = cljs.core.async.close_BANG_(out);
var state_46785__$1 = state_46785;
var statearr_46822_48344 = state_46785__$1;
(statearr_46822_48344[(2)] = inst_46767);

(statearr_46822_48344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46786 === (10))){
var inst_46775 = (state_46785[(2)]);
var state_46785__$1 = (function (){var statearr_46825 = state_46785;
(statearr_46825[(8)] = inst_46775);

return statearr_46825;
})();
var statearr_46826_48345 = state_46785__$1;
(statearr_46826_48345[(2)] = null);

(statearr_46826_48345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46786 === (8))){
var inst_46764 = (state_46785[(7)]);
var state_46785__$1 = state_46785;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46785__$1,(11),out,inst_46764);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44167__auto__ = null;
var cljs$core$async$state_machine__44167__auto____0 = (function (){
var statearr_46828 = [null,null,null,null,null,null,null,null,null];
(statearr_46828[(0)] = cljs$core$async$state_machine__44167__auto__);

(statearr_46828[(1)] = (1));

return statearr_46828;
});
var cljs$core$async$state_machine__44167__auto____1 = (function (state_46785){
while(true){
var ret_value__44168__auto__ = (function (){try{while(true){
var result__44169__auto__ = switch__44166__auto__(state_46785);
if(cljs.core.keyword_identical_QMARK_(result__44169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44169__auto__;
}
break;
}
}catch (e46833){var ex__44170__auto__ = e46833;
var statearr_46834_48346 = state_46785;
(statearr_46834_48346[(2)] = ex__44170__auto__);


if(cljs.core.seq((state_46785[(4)]))){
var statearr_46836_48347 = state_46785;
(statearr_46836_48347[(1)] = cljs.core.first((state_46785[(4)])));

} else {
throw ex__44170__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48348 = state_46785;
state_46785 = G__48348;
continue;
} else {
return ret_value__44168__auto__;
}
break;
}
});
cljs$core$async$state_machine__44167__auto__ = function(state_46785){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44167__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44167__auto____1.call(this,state_46785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44167__auto____0;
cljs$core$async$state_machine__44167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44167__auto____1;
return cljs$core$async$state_machine__44167__auto__;
})()
})();
var state__44377__auto__ = (function (){var statearr_46840 = f__44376__auto__();
(statearr_46840[(6)] = c__44375__auto___48335);

return statearr_46840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44377__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__46849 = arguments.length;
switch (G__46849) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__44375__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44376__auto__ = (function (){var switch__44166__auto__ = (function (state_46941){
var state_val_46942 = (state_46941[(1)]);
if((state_val_46942 === (7))){
var inst_46935 = (state_46941[(2)]);
var state_46941__$1 = state_46941;
var statearr_46950_48350 = state_46941__$1;
(statearr_46950_48350[(2)] = inst_46935);

(statearr_46950_48350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46942 === (20))){
var inst_46897 = (state_46941[(7)]);
var inst_46916 = (state_46941[(2)]);
var inst_46917 = cljs.core.next(inst_46897);
var inst_46878 = inst_46917;
var inst_46879 = null;
var inst_46880 = (0);
var inst_46881 = (0);
var state_46941__$1 = (function (){var statearr_46955 = state_46941;
(statearr_46955[(8)] = inst_46881);

(statearr_46955[(9)] = inst_46880);

(statearr_46955[(10)] = inst_46878);

(statearr_46955[(11)] = inst_46879);

(statearr_46955[(12)] = inst_46916);

return statearr_46955;
})();
var statearr_46960_48351 = state_46941__$1;
(statearr_46960_48351[(2)] = null);

(statearr_46960_48351[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46942 === (1))){
var state_46941__$1 = state_46941;
var statearr_46961_48352 = state_46941__$1;
(statearr_46961_48352[(2)] = null);

(statearr_46961_48352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46942 === (4))){
var inst_46867 = (state_46941[(13)]);
var inst_46867__$1 = (state_46941[(2)]);
var inst_46868 = (inst_46867__$1 == null);
var state_46941__$1 = (function (){var statearr_46964 = state_46941;
(statearr_46964[(13)] = inst_46867__$1);

return statearr_46964;
})();
if(cljs.core.truth_(inst_46868)){
var statearr_46965_48357 = state_46941__$1;
(statearr_46965_48357[(1)] = (5));

} else {
var statearr_46966_48361 = state_46941__$1;
(statearr_46966_48361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46942 === (15))){
var state_46941__$1 = state_46941;
var statearr_46974_48365 = state_46941__$1;
(statearr_46974_48365[(2)] = null);

(statearr_46974_48365[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46942 === (21))){
var state_46941__$1 = state_46941;
var statearr_46976_48366 = state_46941__$1;
(statearr_46976_48366[(2)] = null);

(statearr_46976_48366[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46942 === (13))){
var inst_46881 = (state_46941[(8)]);
var inst_46880 = (state_46941[(9)]);
var inst_46878 = (state_46941[(10)]);
var inst_46879 = (state_46941[(11)]);
var inst_46893 = (state_46941[(2)]);
var inst_46894 = (inst_46881 + (1));
var tmp46967 = inst_46880;
var tmp46968 = inst_46878;
var tmp46969 = inst_46879;
var inst_46878__$1 = tmp46968;
var inst_46879__$1 = tmp46969;
var inst_46880__$1 = tmp46967;
var inst_46881__$1 = inst_46894;
var state_46941__$1 = (function (){var statearr_46985 = state_46941;
(statearr_46985[(8)] = inst_46881__$1);

(statearr_46985[(9)] = inst_46880__$1);

(statearr_46985[(10)] = inst_46878__$1);

(statearr_46985[(14)] = inst_46893);

(statearr_46985[(11)] = inst_46879__$1);

return statearr_46985;
})();
var statearr_46990_48370 = state_46941__$1;
(statearr_46990_48370[(2)] = null);

(statearr_46990_48370[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46942 === (22))){
var state_46941__$1 = state_46941;
var statearr_46991_48371 = state_46941__$1;
(statearr_46991_48371[(2)] = null);

(statearr_46991_48371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46942 === (6))){
var inst_46867 = (state_46941[(13)]);
var inst_46876 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46867) : f.call(null,inst_46867));
var inst_46877 = cljs.core.seq(inst_46876);
var inst_46878 = inst_46877;
var inst_46879 = null;
var inst_46880 = (0);
var inst_46881 = (0);
var state_46941__$1 = (function (){var statearr_46994 = state_46941;
(statearr_46994[(8)] = inst_46881);

(statearr_46994[(9)] = inst_46880);

(statearr_46994[(10)] = inst_46878);

(statearr_46994[(11)] = inst_46879);

return statearr_46994;
})();
var statearr_46997_48375 = state_46941__$1;
(statearr_46997_48375[(2)] = null);

(statearr_46997_48375[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46942 === (17))){
var inst_46897 = (state_46941[(7)]);
var inst_46903 = cljs.core.chunk_first(inst_46897);
var inst_46905 = cljs.core.chunk_rest(inst_46897);
var inst_46907 = cljs.core.count(inst_46903);
var inst_46878 = inst_46905;
var inst_46879 = inst_46903;
var inst_46880 = inst_46907;
var inst_46881 = (0);
var state_46941__$1 = (function (){var statearr_46998 = state_46941;
(statearr_46998[(8)] = inst_46881);

(statearr_46998[(9)] = inst_46880);

(statearr_46998[(10)] = inst_46878);

(statearr_46998[(11)] = inst_46879);

return statearr_46998;
})();
var statearr_47000_48379 = state_46941__$1;
(statearr_47000_48379[(2)] = null);

(statearr_47000_48379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46942 === (3))){
var inst_46937 = (state_46941[(2)]);
var state_46941__$1 = state_46941;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46941__$1,inst_46937);
} else {
if((state_val_46942 === (12))){
var inst_46925 = (state_46941[(2)]);
var state_46941__$1 = state_46941;
var statearr_47004_48380 = state_46941__$1;
(statearr_47004_48380[(2)] = inst_46925);

(statearr_47004_48380[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46942 === (2))){
var state_46941__$1 = state_46941;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46941__$1,(4),in$);
} else {
if((state_val_46942 === (23))){
var inst_46933 = (state_46941[(2)]);
var state_46941__$1 = state_46941;
var statearr_47011_48382 = state_46941__$1;
(statearr_47011_48382[(2)] = inst_46933);

(statearr_47011_48382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46942 === (19))){
var inst_46920 = (state_46941[(2)]);
var state_46941__$1 = state_46941;
var statearr_47014_48383 = state_46941__$1;
(statearr_47014_48383[(2)] = inst_46920);

(statearr_47014_48383[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46942 === (11))){
var inst_46897 = (state_46941[(7)]);
var inst_46878 = (state_46941[(10)]);
var inst_46897__$1 = cljs.core.seq(inst_46878);
var state_46941__$1 = (function (){var statearr_47017 = state_46941;
(statearr_47017[(7)] = inst_46897__$1);

return statearr_47017;
})();
if(inst_46897__$1){
var statearr_47018_48387 = state_46941__$1;
(statearr_47018_48387[(1)] = (14));

} else {
var statearr_47019_48388 = state_46941__$1;
(statearr_47019_48388[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46942 === (9))){
var inst_46927 = (state_46941[(2)]);
var inst_46928 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_46941__$1 = (function (){var statearr_47022 = state_46941;
(statearr_47022[(15)] = inst_46927);

return statearr_47022;
})();
if(cljs.core.truth_(inst_46928)){
var statearr_47024_48395 = state_46941__$1;
(statearr_47024_48395[(1)] = (21));

} else {
var statearr_47025_48396 = state_46941__$1;
(statearr_47025_48396[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46942 === (5))){
var inst_46870 = cljs.core.async.close_BANG_(out);
var state_46941__$1 = state_46941;
var statearr_47027_48404 = state_46941__$1;
(statearr_47027_48404[(2)] = inst_46870);

(statearr_47027_48404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46942 === (14))){
var inst_46897 = (state_46941[(7)]);
var inst_46901 = cljs.core.chunked_seq_QMARK_(inst_46897);
var state_46941__$1 = state_46941;
if(inst_46901){
var statearr_47029_48405 = state_46941__$1;
(statearr_47029_48405[(1)] = (17));

} else {
var statearr_47030_48406 = state_46941__$1;
(statearr_47030_48406[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46942 === (16))){
var inst_46923 = (state_46941[(2)]);
var state_46941__$1 = state_46941;
var statearr_47031_48407 = state_46941__$1;
(statearr_47031_48407[(2)] = inst_46923);

(statearr_47031_48407[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46942 === (10))){
var inst_46881 = (state_46941[(8)]);
var inst_46879 = (state_46941[(11)]);
var inst_46891 = cljs.core._nth(inst_46879,inst_46881);
var state_46941__$1 = state_46941;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46941__$1,(13),out,inst_46891);
} else {
if((state_val_46942 === (18))){
var inst_46897 = (state_46941[(7)]);
var inst_46910 = cljs.core.first(inst_46897);
var state_46941__$1 = state_46941;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46941__$1,(20),out,inst_46910);
} else {
if((state_val_46942 === (8))){
var inst_46881 = (state_46941[(8)]);
var inst_46880 = (state_46941[(9)]);
var inst_46887 = (inst_46881 < inst_46880);
var inst_46888 = inst_46887;
var state_46941__$1 = state_46941;
if(cljs.core.truth_(inst_46888)){
var statearr_47043_48408 = state_46941__$1;
(statearr_47043_48408[(1)] = (10));

} else {
var statearr_47045_48409 = state_46941__$1;
(statearr_47045_48409[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__44167__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__44167__auto____0 = (function (){
var statearr_47056 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47056[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__44167__auto__);

(statearr_47056[(1)] = (1));

return statearr_47056;
});
var cljs$core$async$mapcat_STAR__$_state_machine__44167__auto____1 = (function (state_46941){
while(true){
var ret_value__44168__auto__ = (function (){try{while(true){
var result__44169__auto__ = switch__44166__auto__(state_46941);
if(cljs.core.keyword_identical_QMARK_(result__44169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44169__auto__;
}
break;
}
}catch (e47065){var ex__44170__auto__ = e47065;
var statearr_47066_48410 = state_46941;
(statearr_47066_48410[(2)] = ex__44170__auto__);


if(cljs.core.seq((state_46941[(4)]))){
var statearr_47068_48411 = state_46941;
(statearr_47068_48411[(1)] = cljs.core.first((state_46941[(4)])));

} else {
throw ex__44170__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48412 = state_46941;
state_46941 = G__48412;
continue;
} else {
return ret_value__44168__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__44167__auto__ = function(state_46941){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__44167__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__44167__auto____1.call(this,state_46941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__44167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__44167__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__44167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__44167__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__44167__auto__;
})()
})();
var state__44377__auto__ = (function (){var statearr_47080 = f__44376__auto__();
(statearr_47080[(6)] = c__44375__auto__);

return statearr_47080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44377__auto__);
}));

return c__44375__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__47089 = arguments.length;
switch (G__47089) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__47097 = arguments.length;
switch (G__47097) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__47100 = arguments.length;
switch (G__47100) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44375__auto___48425 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44376__auto__ = (function (){var switch__44166__auto__ = (function (state_47146){
var state_val_47147 = (state_47146[(1)]);
if((state_val_47147 === (7))){
var inst_47140 = (state_47146[(2)]);
var state_47146__$1 = state_47146;
var statearr_47149_48426 = state_47146__$1;
(statearr_47149_48426[(2)] = inst_47140);

(statearr_47149_48426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47147 === (1))){
var inst_47118 = null;
var state_47146__$1 = (function (){var statearr_47150 = state_47146;
(statearr_47150[(7)] = inst_47118);

return statearr_47150;
})();
var statearr_47151_48433 = state_47146__$1;
(statearr_47151_48433[(2)] = null);

(statearr_47151_48433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47147 === (4))){
var inst_47124 = (state_47146[(8)]);
var inst_47124__$1 = (state_47146[(2)]);
var inst_47126 = (inst_47124__$1 == null);
var inst_47127 = cljs.core.not(inst_47126);
var state_47146__$1 = (function (){var statearr_47153 = state_47146;
(statearr_47153[(8)] = inst_47124__$1);

return statearr_47153;
})();
if(inst_47127){
var statearr_47154_48434 = state_47146__$1;
(statearr_47154_48434[(1)] = (5));

} else {
var statearr_47155_48435 = state_47146__$1;
(statearr_47155_48435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47147 === (6))){
var state_47146__$1 = state_47146;
var statearr_47156_48436 = state_47146__$1;
(statearr_47156_48436[(2)] = null);

(statearr_47156_48436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47147 === (3))){
var inst_47143 = (state_47146[(2)]);
var inst_47144 = cljs.core.async.close_BANG_(out);
var state_47146__$1 = (function (){var statearr_47157 = state_47146;
(statearr_47157[(9)] = inst_47143);

return statearr_47157;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47146__$1,inst_47144);
} else {
if((state_val_47147 === (2))){
var state_47146__$1 = state_47146;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47146__$1,(4),ch);
} else {
if((state_val_47147 === (11))){
var inst_47124 = (state_47146[(8)]);
var inst_47134 = (state_47146[(2)]);
var inst_47118 = inst_47124;
var state_47146__$1 = (function (){var statearr_47158 = state_47146;
(statearr_47158[(7)] = inst_47118);

(statearr_47158[(10)] = inst_47134);

return statearr_47158;
})();
var statearr_47159_48441 = state_47146__$1;
(statearr_47159_48441[(2)] = null);

(statearr_47159_48441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47147 === (9))){
var inst_47124 = (state_47146[(8)]);
var state_47146__$1 = state_47146;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47146__$1,(11),out,inst_47124);
} else {
if((state_val_47147 === (5))){
var inst_47118 = (state_47146[(7)]);
var inst_47124 = (state_47146[(8)]);
var inst_47129 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47124,inst_47118);
var state_47146__$1 = state_47146;
if(inst_47129){
var statearr_47165_48442 = state_47146__$1;
(statearr_47165_48442[(1)] = (8));

} else {
var statearr_47166_48443 = state_47146__$1;
(statearr_47166_48443[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47147 === (10))){
var inst_47137 = (state_47146[(2)]);
var state_47146__$1 = state_47146;
var statearr_47167_48444 = state_47146__$1;
(statearr_47167_48444[(2)] = inst_47137);

(statearr_47167_48444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47147 === (8))){
var inst_47118 = (state_47146[(7)]);
var tmp47163 = inst_47118;
var inst_47118__$1 = tmp47163;
var state_47146__$1 = (function (){var statearr_47169 = state_47146;
(statearr_47169[(7)] = inst_47118__$1);

return statearr_47169;
})();
var statearr_47170_48445 = state_47146__$1;
(statearr_47170_48445[(2)] = null);

(statearr_47170_48445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44167__auto__ = null;
var cljs$core$async$state_machine__44167__auto____0 = (function (){
var statearr_47171 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47171[(0)] = cljs$core$async$state_machine__44167__auto__);

(statearr_47171[(1)] = (1));

return statearr_47171;
});
var cljs$core$async$state_machine__44167__auto____1 = (function (state_47146){
while(true){
var ret_value__44168__auto__ = (function (){try{while(true){
var result__44169__auto__ = switch__44166__auto__(state_47146);
if(cljs.core.keyword_identical_QMARK_(result__44169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44169__auto__;
}
break;
}
}catch (e47172){var ex__44170__auto__ = e47172;
var statearr_47173_48452 = state_47146;
(statearr_47173_48452[(2)] = ex__44170__auto__);


if(cljs.core.seq((state_47146[(4)]))){
var statearr_47176_48453 = state_47146;
(statearr_47176_48453[(1)] = cljs.core.first((state_47146[(4)])));

} else {
throw ex__44170__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48454 = state_47146;
state_47146 = G__48454;
continue;
} else {
return ret_value__44168__auto__;
}
break;
}
});
cljs$core$async$state_machine__44167__auto__ = function(state_47146){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44167__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44167__auto____1.call(this,state_47146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44167__auto____0;
cljs$core$async$state_machine__44167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44167__auto____1;
return cljs$core$async$state_machine__44167__auto__;
})()
})();
var state__44377__auto__ = (function (){var statearr_47179 = f__44376__auto__();
(statearr_47179[(6)] = c__44375__auto___48425);

return statearr_47179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44377__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__47182 = arguments.length;
switch (G__47182) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44375__auto___48456 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44376__auto__ = (function (){var switch__44166__auto__ = (function (state_47223){
var state_val_47224 = (state_47223[(1)]);
if((state_val_47224 === (7))){
var inst_47219 = (state_47223[(2)]);
var state_47223__$1 = state_47223;
var statearr_47225_48457 = state_47223__$1;
(statearr_47225_48457[(2)] = inst_47219);

(statearr_47225_48457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47224 === (1))){
var inst_47185 = (new Array(n));
var inst_47186 = inst_47185;
var inst_47187 = (0);
var state_47223__$1 = (function (){var statearr_47226 = state_47223;
(statearr_47226[(7)] = inst_47187);

(statearr_47226[(8)] = inst_47186);

return statearr_47226;
})();
var statearr_47228_48458 = state_47223__$1;
(statearr_47228_48458[(2)] = null);

(statearr_47228_48458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47224 === (4))){
var inst_47190 = (state_47223[(9)]);
var inst_47190__$1 = (state_47223[(2)]);
var inst_47191 = (inst_47190__$1 == null);
var inst_47192 = cljs.core.not(inst_47191);
var state_47223__$1 = (function (){var statearr_47229 = state_47223;
(statearr_47229[(9)] = inst_47190__$1);

return statearr_47229;
})();
if(inst_47192){
var statearr_47231_48459 = state_47223__$1;
(statearr_47231_48459[(1)] = (5));

} else {
var statearr_47232_48460 = state_47223__$1;
(statearr_47232_48460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47224 === (15))){
var inst_47213 = (state_47223[(2)]);
var state_47223__$1 = state_47223;
var statearr_47233_48461 = state_47223__$1;
(statearr_47233_48461[(2)] = inst_47213);

(statearr_47233_48461[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47224 === (13))){
var state_47223__$1 = state_47223;
var statearr_47234_48470 = state_47223__$1;
(statearr_47234_48470[(2)] = null);

(statearr_47234_48470[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47224 === (6))){
var inst_47187 = (state_47223[(7)]);
var inst_47209 = (inst_47187 > (0));
var state_47223__$1 = state_47223;
if(cljs.core.truth_(inst_47209)){
var statearr_47235_48477 = state_47223__$1;
(statearr_47235_48477[(1)] = (12));

} else {
var statearr_47236_48478 = state_47223__$1;
(statearr_47236_48478[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47224 === (3))){
var inst_47221 = (state_47223[(2)]);
var state_47223__$1 = state_47223;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47223__$1,inst_47221);
} else {
if((state_val_47224 === (12))){
var inst_47186 = (state_47223[(8)]);
var inst_47211 = cljs.core.vec(inst_47186);
var state_47223__$1 = state_47223;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47223__$1,(15),out,inst_47211);
} else {
if((state_val_47224 === (2))){
var state_47223__$1 = state_47223;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47223__$1,(4),ch);
} else {
if((state_val_47224 === (11))){
var inst_47203 = (state_47223[(2)]);
var inst_47204 = (new Array(n));
var inst_47186 = inst_47204;
var inst_47187 = (0);
var state_47223__$1 = (function (){var statearr_47238 = state_47223;
(statearr_47238[(7)] = inst_47187);

(statearr_47238[(10)] = inst_47203);

(statearr_47238[(8)] = inst_47186);

return statearr_47238;
})();
var statearr_47239_48487 = state_47223__$1;
(statearr_47239_48487[(2)] = null);

(statearr_47239_48487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47224 === (9))){
var inst_47186 = (state_47223[(8)]);
var inst_47201 = cljs.core.vec(inst_47186);
var state_47223__$1 = state_47223;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47223__$1,(11),out,inst_47201);
} else {
if((state_val_47224 === (5))){
var inst_47187 = (state_47223[(7)]);
var inst_47190 = (state_47223[(9)]);
var inst_47196 = (state_47223[(11)]);
var inst_47186 = (state_47223[(8)]);
var inst_47194 = (inst_47186[inst_47187] = inst_47190);
var inst_47196__$1 = (inst_47187 + (1));
var inst_47197 = (inst_47196__$1 < n);
var state_47223__$1 = (function (){var statearr_47240 = state_47223;
(statearr_47240[(12)] = inst_47194);

(statearr_47240[(11)] = inst_47196__$1);

return statearr_47240;
})();
if(cljs.core.truth_(inst_47197)){
var statearr_47241_48502 = state_47223__$1;
(statearr_47241_48502[(1)] = (8));

} else {
var statearr_47242_48503 = state_47223__$1;
(statearr_47242_48503[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47224 === (14))){
var inst_47216 = (state_47223[(2)]);
var inst_47217 = cljs.core.async.close_BANG_(out);
var state_47223__$1 = (function (){var statearr_47245 = state_47223;
(statearr_47245[(13)] = inst_47216);

return statearr_47245;
})();
var statearr_47246_48504 = state_47223__$1;
(statearr_47246_48504[(2)] = inst_47217);

(statearr_47246_48504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47224 === (10))){
var inst_47207 = (state_47223[(2)]);
var state_47223__$1 = state_47223;
var statearr_47248_48511 = state_47223__$1;
(statearr_47248_48511[(2)] = inst_47207);

(statearr_47248_48511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47224 === (8))){
var inst_47196 = (state_47223[(11)]);
var inst_47186 = (state_47223[(8)]);
var tmp47244 = inst_47186;
var inst_47186__$1 = tmp47244;
var inst_47187 = inst_47196;
var state_47223__$1 = (function (){var statearr_47250 = state_47223;
(statearr_47250[(7)] = inst_47187);

(statearr_47250[(8)] = inst_47186__$1);

return statearr_47250;
})();
var statearr_47251_48513 = state_47223__$1;
(statearr_47251_48513[(2)] = null);

(statearr_47251_48513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44167__auto__ = null;
var cljs$core$async$state_machine__44167__auto____0 = (function (){
var statearr_47252 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47252[(0)] = cljs$core$async$state_machine__44167__auto__);

(statearr_47252[(1)] = (1));

return statearr_47252;
});
var cljs$core$async$state_machine__44167__auto____1 = (function (state_47223){
while(true){
var ret_value__44168__auto__ = (function (){try{while(true){
var result__44169__auto__ = switch__44166__auto__(state_47223);
if(cljs.core.keyword_identical_QMARK_(result__44169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44169__auto__;
}
break;
}
}catch (e47253){var ex__44170__auto__ = e47253;
var statearr_47254_48517 = state_47223;
(statearr_47254_48517[(2)] = ex__44170__auto__);


if(cljs.core.seq((state_47223[(4)]))){
var statearr_47255_48518 = state_47223;
(statearr_47255_48518[(1)] = cljs.core.first((state_47223[(4)])));

} else {
throw ex__44170__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48519 = state_47223;
state_47223 = G__48519;
continue;
} else {
return ret_value__44168__auto__;
}
break;
}
});
cljs$core$async$state_machine__44167__auto__ = function(state_47223){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44167__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44167__auto____1.call(this,state_47223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44167__auto____0;
cljs$core$async$state_machine__44167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44167__auto____1;
return cljs$core$async$state_machine__44167__auto__;
})()
})();
var state__44377__auto__ = (function (){var statearr_47257 = f__44376__auto__();
(statearr_47257[(6)] = c__44375__auto___48456);

return statearr_47257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44377__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__47262 = arguments.length;
switch (G__47262) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44375__auto___48522 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44376__auto__ = (function (){var switch__44166__auto__ = (function (state_47311){
var state_val_47312 = (state_47311[(1)]);
if((state_val_47312 === (7))){
var inst_47307 = (state_47311[(2)]);
var state_47311__$1 = state_47311;
var statearr_47316_48523 = state_47311__$1;
(statearr_47316_48523[(2)] = inst_47307);

(statearr_47316_48523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47312 === (1))){
var inst_47264 = [];
var inst_47265 = inst_47264;
var inst_47266 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47311__$1 = (function (){var statearr_47317 = state_47311;
(statearr_47317[(7)] = inst_47266);

(statearr_47317[(8)] = inst_47265);

return statearr_47317;
})();
var statearr_47318_48530 = state_47311__$1;
(statearr_47318_48530[(2)] = null);

(statearr_47318_48530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47312 === (4))){
var inst_47270 = (state_47311[(9)]);
var inst_47270__$1 = (state_47311[(2)]);
var inst_47271 = (inst_47270__$1 == null);
var inst_47272 = cljs.core.not(inst_47271);
var state_47311__$1 = (function (){var statearr_47320 = state_47311;
(statearr_47320[(9)] = inst_47270__$1);

return statearr_47320;
})();
if(inst_47272){
var statearr_47321_48534 = state_47311__$1;
(statearr_47321_48534[(1)] = (5));

} else {
var statearr_47322_48535 = state_47311__$1;
(statearr_47322_48535[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47312 === (15))){
var inst_47265 = (state_47311[(8)]);
var inst_47299 = cljs.core.vec(inst_47265);
var state_47311__$1 = state_47311;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47311__$1,(18),out,inst_47299);
} else {
if((state_val_47312 === (13))){
var inst_47294 = (state_47311[(2)]);
var state_47311__$1 = state_47311;
var statearr_47324_48537 = state_47311__$1;
(statearr_47324_48537[(2)] = inst_47294);

(statearr_47324_48537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47312 === (6))){
var inst_47265 = (state_47311[(8)]);
var inst_47296 = inst_47265.length;
var inst_47297 = (inst_47296 > (0));
var state_47311__$1 = state_47311;
if(cljs.core.truth_(inst_47297)){
var statearr_47326_48539 = state_47311__$1;
(statearr_47326_48539[(1)] = (15));

} else {
var statearr_47328_48541 = state_47311__$1;
(statearr_47328_48541[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47312 === (17))){
var inst_47304 = (state_47311[(2)]);
var inst_47305 = cljs.core.async.close_BANG_(out);
var state_47311__$1 = (function (){var statearr_47329 = state_47311;
(statearr_47329[(10)] = inst_47304);

return statearr_47329;
})();
var statearr_47330_48544 = state_47311__$1;
(statearr_47330_48544[(2)] = inst_47305);

(statearr_47330_48544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47312 === (3))){
var inst_47309 = (state_47311[(2)]);
var state_47311__$1 = state_47311;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47311__$1,inst_47309);
} else {
if((state_val_47312 === (12))){
var inst_47265 = (state_47311[(8)]);
var inst_47286 = cljs.core.vec(inst_47265);
var state_47311__$1 = state_47311;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47311__$1,(14),out,inst_47286);
} else {
if((state_val_47312 === (2))){
var state_47311__$1 = state_47311;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47311__$1,(4),ch);
} else {
if((state_val_47312 === (11))){
var inst_47274 = (state_47311[(11)]);
var inst_47270 = (state_47311[(9)]);
var inst_47265 = (state_47311[(8)]);
var inst_47283 = inst_47265.push(inst_47270);
var tmp47331 = inst_47265;
var inst_47265__$1 = tmp47331;
var inst_47266 = inst_47274;
var state_47311__$1 = (function (){var statearr_47333 = state_47311;
(statearr_47333[(12)] = inst_47283);

(statearr_47333[(7)] = inst_47266);

(statearr_47333[(8)] = inst_47265__$1);

return statearr_47333;
})();
var statearr_47334_48546 = state_47311__$1;
(statearr_47334_48546[(2)] = null);

(statearr_47334_48546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47312 === (9))){
var inst_47266 = (state_47311[(7)]);
var inst_47279 = cljs.core.keyword_identical_QMARK_(inst_47266,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_47311__$1 = state_47311;
var statearr_47335_48547 = state_47311__$1;
(statearr_47335_48547[(2)] = inst_47279);

(statearr_47335_48547[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47312 === (5))){
var inst_47275 = (state_47311[(13)]);
var inst_47274 = (state_47311[(11)]);
var inst_47270 = (state_47311[(9)]);
var inst_47266 = (state_47311[(7)]);
var inst_47274__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47270) : f.call(null,inst_47270));
var inst_47275__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47274__$1,inst_47266);
var state_47311__$1 = (function (){var statearr_47336 = state_47311;
(statearr_47336[(13)] = inst_47275__$1);

(statearr_47336[(11)] = inst_47274__$1);

return statearr_47336;
})();
if(inst_47275__$1){
var statearr_47337_48548 = state_47311__$1;
(statearr_47337_48548[(1)] = (8));

} else {
var statearr_47338_48549 = state_47311__$1;
(statearr_47338_48549[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47312 === (14))){
var inst_47274 = (state_47311[(11)]);
var inst_47270 = (state_47311[(9)]);
var inst_47288 = (state_47311[(2)]);
var inst_47289 = [];
var inst_47290 = inst_47289.push(inst_47270);
var inst_47265 = inst_47289;
var inst_47266 = inst_47274;
var state_47311__$1 = (function (){var statearr_47340 = state_47311;
(statearr_47340[(14)] = inst_47290);

(statearr_47340[(7)] = inst_47266);

(statearr_47340[(15)] = inst_47288);

(statearr_47340[(8)] = inst_47265);

return statearr_47340;
})();
var statearr_47341_48550 = state_47311__$1;
(statearr_47341_48550[(2)] = null);

(statearr_47341_48550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47312 === (16))){
var state_47311__$1 = state_47311;
var statearr_47342_48551 = state_47311__$1;
(statearr_47342_48551[(2)] = null);

(statearr_47342_48551[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47312 === (10))){
var inst_47281 = (state_47311[(2)]);
var state_47311__$1 = state_47311;
if(cljs.core.truth_(inst_47281)){
var statearr_47343_48552 = state_47311__$1;
(statearr_47343_48552[(1)] = (11));

} else {
var statearr_47344_48553 = state_47311__$1;
(statearr_47344_48553[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47312 === (18))){
var inst_47301 = (state_47311[(2)]);
var state_47311__$1 = state_47311;
var statearr_47345_48554 = state_47311__$1;
(statearr_47345_48554[(2)] = inst_47301);

(statearr_47345_48554[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47312 === (8))){
var inst_47275 = (state_47311[(13)]);
var state_47311__$1 = state_47311;
var statearr_47346_48555 = state_47311__$1;
(statearr_47346_48555[(2)] = inst_47275);

(statearr_47346_48555[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44167__auto__ = null;
var cljs$core$async$state_machine__44167__auto____0 = (function (){
var statearr_47348 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47348[(0)] = cljs$core$async$state_machine__44167__auto__);

(statearr_47348[(1)] = (1));

return statearr_47348;
});
var cljs$core$async$state_machine__44167__auto____1 = (function (state_47311){
while(true){
var ret_value__44168__auto__ = (function (){try{while(true){
var result__44169__auto__ = switch__44166__auto__(state_47311);
if(cljs.core.keyword_identical_QMARK_(result__44169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44169__auto__;
}
break;
}
}catch (e47349){var ex__44170__auto__ = e47349;
var statearr_47350_48556 = state_47311;
(statearr_47350_48556[(2)] = ex__44170__auto__);


if(cljs.core.seq((state_47311[(4)]))){
var statearr_47351_48557 = state_47311;
(statearr_47351_48557[(1)] = cljs.core.first((state_47311[(4)])));

} else {
throw ex__44170__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48558 = state_47311;
state_47311 = G__48558;
continue;
} else {
return ret_value__44168__auto__;
}
break;
}
});
cljs$core$async$state_machine__44167__auto__ = function(state_47311){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44167__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44167__auto____1.call(this,state_47311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44167__auto____0;
cljs$core$async$state_machine__44167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44167__auto____1;
return cljs$core$async$state_machine__44167__auto__;
})()
})();
var state__44377__auto__ = (function (){var statearr_47352 = f__44376__auto__();
(statearr_47352[(6)] = c__44375__auto___48522);

return statearr_47352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44377__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
