goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___50926 = arguments.length;
var i__4865__auto___50927 = (0);
while(true){
if((i__4865__auto___50927 < len__4864__auto___50926)){
args__4870__auto__.push((arguments[i__4865__auto___50927]));

var G__50929 = (i__4865__auto___50927 + (1));
i__4865__auto___50927 = G__50929;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq50536){
var G__50537 = cljs.core.first(seq50536);
var seq50536__$1 = cljs.core.next(seq50536);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50537,seq50536__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__50538 = cljs.core.seq(sources);
var chunk__50539 = null;
var count__50540 = (0);
var i__50541 = (0);
while(true){
if((i__50541 < count__50540)){
var map__50547 = chunk__50539.cljs$core$IIndexed$_nth$arity$2(null,i__50541);
var map__50547__$1 = cljs.core.__destructure_map(map__50547);
var src = map__50547__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50547__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50547__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50547__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50547__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e50548){var e_50930 = e50548;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_50930);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_50930.message)].join('')));
}

var G__50931 = seq__50538;
var G__50932 = chunk__50539;
var G__50933 = count__50540;
var G__50934 = (i__50541 + (1));
seq__50538 = G__50931;
chunk__50539 = G__50932;
count__50540 = G__50933;
i__50541 = G__50934;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50538);
if(temp__5753__auto__){
var seq__50538__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50538__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__50538__$1);
var G__50935 = cljs.core.chunk_rest(seq__50538__$1);
var G__50936 = c__4679__auto__;
var G__50937 = cljs.core.count(c__4679__auto__);
var G__50938 = (0);
seq__50538 = G__50935;
chunk__50539 = G__50936;
count__50540 = G__50937;
i__50541 = G__50938;
continue;
} else {
var map__50550 = cljs.core.first(seq__50538__$1);
var map__50550__$1 = cljs.core.__destructure_map(map__50550);
var src = map__50550__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50550__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50550__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50550__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50550__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e50551){var e_50940 = e50551;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_50940);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_50940.message)].join('')));
}

var G__50941 = cljs.core.next(seq__50538__$1);
var G__50942 = null;
var G__50943 = (0);
var G__50944 = (0);
seq__50538 = G__50941;
chunk__50539 = G__50942;
count__50540 = G__50943;
i__50541 = G__50944;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__50554 = cljs.core.seq(js_requires);
var chunk__50555 = null;
var count__50556 = (0);
var i__50557 = (0);
while(true){
if((i__50557 < count__50556)){
var js_ns = chunk__50555.cljs$core$IIndexed$_nth$arity$2(null,i__50557);
var require_str_50945 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_50945);


var G__50946 = seq__50554;
var G__50947 = chunk__50555;
var G__50948 = count__50556;
var G__50949 = (i__50557 + (1));
seq__50554 = G__50946;
chunk__50555 = G__50947;
count__50556 = G__50948;
i__50557 = G__50949;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50554);
if(temp__5753__auto__){
var seq__50554__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50554__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__50554__$1);
var G__50950 = cljs.core.chunk_rest(seq__50554__$1);
var G__50951 = c__4679__auto__;
var G__50952 = cljs.core.count(c__4679__auto__);
var G__50953 = (0);
seq__50554 = G__50950;
chunk__50555 = G__50951;
count__50556 = G__50952;
i__50557 = G__50953;
continue;
} else {
var js_ns = cljs.core.first(seq__50554__$1);
var require_str_50954 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_50954);


var G__50955 = cljs.core.next(seq__50554__$1);
var G__50956 = null;
var G__50957 = (0);
var G__50958 = (0);
seq__50554 = G__50955;
chunk__50555 = G__50956;
count__50556 = G__50957;
i__50557 = G__50958;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__50560){
var map__50561 = p__50560;
var map__50561__$1 = cljs.core.__destructure_map(map__50561);
var msg = map__50561__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50561__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50561__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50562(s__50563){
return (new cljs.core.LazySeq(null,(function (){
var s__50563__$1 = s__50563;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__50563__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__50568 = cljs.core.first(xs__6308__auto__);
var map__50568__$1 = cljs.core.__destructure_map(map__50568);
var src = map__50568__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50568__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50568__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__50563__$1,map__50568,map__50568__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__50561,map__50561__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50562_$_iter__50564(s__50565){
return (new cljs.core.LazySeq(null,((function (s__50563__$1,map__50568,map__50568__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__50561,map__50561__$1,msg,info,reload_info){
return (function (){
var s__50565__$1 = s__50565;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__50565__$1);
if(temp__5753__auto____$1){
var s__50565__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50565__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__50565__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__50567 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__50566 = (0);
while(true){
if((i__50566 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__50566);
cljs.core.chunk_append(b__50567,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__50959 = (i__50566 + (1));
i__50566 = G__50959;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50567),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50562_$_iter__50564(cljs.core.chunk_rest(s__50565__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50567),null);
}
} else {
var warning = cljs.core.first(s__50565__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50562_$_iter__50564(cljs.core.rest(s__50565__$2)));
}
} else {
return null;
}
break;
}
});})(s__50563__$1,map__50568,map__50568__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__50561,map__50561__$1,msg,info,reload_info))
,null,null));
});})(s__50563__$1,map__50568,map__50568__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__50561,map__50561__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50562(cljs.core.rest(s__50563__$1)));
} else {
var G__50960 = cljs.core.rest(s__50563__$1);
s__50563__$1 = G__50960;
continue;
}
} else {
var G__50961 = cljs.core.rest(s__50563__$1);
s__50563__$1 = G__50961;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__50569_50962 = cljs.core.seq(warnings);
var chunk__50570_50963 = null;
var count__50571_50964 = (0);
var i__50572_50965 = (0);
while(true){
if((i__50572_50965 < count__50571_50964)){
var map__50577_50966 = chunk__50570_50963.cljs$core$IIndexed$_nth$arity$2(null,i__50572_50965);
var map__50577_50967__$1 = cljs.core.__destructure_map(map__50577_50966);
var w_50968 = map__50577_50967__$1;
var msg_50969__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50577_50967__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_50970 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50577_50967__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_50971 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50577_50967__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_50972 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50577_50967__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_50972)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_50970),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_50971),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_50969__$1)].join(''));


var G__50973 = seq__50569_50962;
var G__50974 = chunk__50570_50963;
var G__50975 = count__50571_50964;
var G__50976 = (i__50572_50965 + (1));
seq__50569_50962 = G__50973;
chunk__50570_50963 = G__50974;
count__50571_50964 = G__50975;
i__50572_50965 = G__50976;
continue;
} else {
var temp__5753__auto___50977 = cljs.core.seq(seq__50569_50962);
if(temp__5753__auto___50977){
var seq__50569_50978__$1 = temp__5753__auto___50977;
if(cljs.core.chunked_seq_QMARK_(seq__50569_50978__$1)){
var c__4679__auto___50979 = cljs.core.chunk_first(seq__50569_50978__$1);
var G__50980 = cljs.core.chunk_rest(seq__50569_50978__$1);
var G__50981 = c__4679__auto___50979;
var G__50982 = cljs.core.count(c__4679__auto___50979);
var G__50983 = (0);
seq__50569_50962 = G__50980;
chunk__50570_50963 = G__50981;
count__50571_50964 = G__50982;
i__50572_50965 = G__50983;
continue;
} else {
var map__50580_50984 = cljs.core.first(seq__50569_50978__$1);
var map__50580_50985__$1 = cljs.core.__destructure_map(map__50580_50984);
var w_50986 = map__50580_50985__$1;
var msg_50987__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50580_50985__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_50988 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50580_50985__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_50989 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50580_50985__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_50990 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50580_50985__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_50990)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_50988),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_50989),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_50987__$1)].join(''));


var G__50991 = cljs.core.next(seq__50569_50978__$1);
var G__50992 = null;
var G__50993 = (0);
var G__50994 = (0);
seq__50569_50962 = G__50991;
chunk__50570_50963 = G__50992;
count__50571_50964 = G__50993;
i__50572_50965 = G__50994;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__50559_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__50559_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__50581){
var map__50582 = p__50581;
var map__50582__$1 = cljs.core.__destructure_map(map__50582);
var msg = map__50582__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50582__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50582__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__50583 = cljs.core.seq(updates);
var chunk__50585 = null;
var count__50586 = (0);
var i__50587 = (0);
while(true){
if((i__50587 < count__50586)){
var path = chunk__50585.cljs$core$IIndexed$_nth$arity$2(null,i__50587);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50767_50995 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50771_50996 = null;
var count__50772_50997 = (0);
var i__50773_50998 = (0);
while(true){
if((i__50773_50998 < count__50772_50997)){
var node_50999 = chunk__50771_50996.cljs$core$IIndexed$_nth$arity$2(null,i__50773_50998);
if(cljs.core.not(node_50999.shadow$old)){
var path_match_51000 = shadow.cljs.devtools.client.browser.match_paths(node_50999.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51000)){
var new_link_51001 = (function (){var G__50803 = node_50999.cloneNode(true);
G__50803.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51000),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50803;
})();
(node_50999.shadow$old = true);

(new_link_51001.onload = ((function (seq__50767_50995,chunk__50771_50996,count__50772_50997,i__50773_50998,seq__50583,chunk__50585,count__50586,i__50587,new_link_51001,path_match_51000,node_50999,path,map__50582,map__50582__$1,msg,updates,reload_info){
return (function (e){
var seq__50804_51002 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__50806_51003 = null;
var count__50807_51004 = (0);
var i__50808_51005 = (0);
while(true){
if((i__50808_51005 < count__50807_51004)){
var map__50812_51006 = chunk__50806_51003.cljs$core$IIndexed$_nth$arity$2(null,i__50808_51005);
var map__50812_51007__$1 = cljs.core.__destructure_map(map__50812_51006);
var task_51008 = map__50812_51007__$1;
var fn_str_51009 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50812_51007__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51010 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50812_51007__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51011 = goog.getObjectByName(fn_str_51009,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51010)].join(''));

(fn_obj_51011.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51011.cljs$core$IFn$_invoke$arity$2(path,new_link_51001) : fn_obj_51011.call(null,path,new_link_51001));


var G__51012 = seq__50804_51002;
var G__51013 = chunk__50806_51003;
var G__51014 = count__50807_51004;
var G__51015 = (i__50808_51005 + (1));
seq__50804_51002 = G__51012;
chunk__50806_51003 = G__51013;
count__50807_51004 = G__51014;
i__50808_51005 = G__51015;
continue;
} else {
var temp__5753__auto___51016 = cljs.core.seq(seq__50804_51002);
if(temp__5753__auto___51016){
var seq__50804_51017__$1 = temp__5753__auto___51016;
if(cljs.core.chunked_seq_QMARK_(seq__50804_51017__$1)){
var c__4679__auto___51018 = cljs.core.chunk_first(seq__50804_51017__$1);
var G__51019 = cljs.core.chunk_rest(seq__50804_51017__$1);
var G__51020 = c__4679__auto___51018;
var G__51021 = cljs.core.count(c__4679__auto___51018);
var G__51022 = (0);
seq__50804_51002 = G__51019;
chunk__50806_51003 = G__51020;
count__50807_51004 = G__51021;
i__50808_51005 = G__51022;
continue;
} else {
var map__50815_51023 = cljs.core.first(seq__50804_51017__$1);
var map__50815_51024__$1 = cljs.core.__destructure_map(map__50815_51023);
var task_51025 = map__50815_51024__$1;
var fn_str_51026 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50815_51024__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51027 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50815_51024__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51028 = goog.getObjectByName(fn_str_51026,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51027)].join(''));

(fn_obj_51028.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51028.cljs$core$IFn$_invoke$arity$2(path,new_link_51001) : fn_obj_51028.call(null,path,new_link_51001));


var G__51029 = cljs.core.next(seq__50804_51017__$1);
var G__51030 = null;
var G__51031 = (0);
var G__51032 = (0);
seq__50804_51002 = G__51029;
chunk__50806_51003 = G__51030;
count__50807_51004 = G__51031;
i__50808_51005 = G__51032;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_50999);
});})(seq__50767_50995,chunk__50771_50996,count__50772_50997,i__50773_50998,seq__50583,chunk__50585,count__50586,i__50587,new_link_51001,path_match_51000,node_50999,path,map__50582,map__50582__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51000], 0));

goog.dom.insertSiblingAfter(new_link_51001,node_50999);


var G__51033 = seq__50767_50995;
var G__51034 = chunk__50771_50996;
var G__51035 = count__50772_50997;
var G__51036 = (i__50773_50998 + (1));
seq__50767_50995 = G__51033;
chunk__50771_50996 = G__51034;
count__50772_50997 = G__51035;
i__50773_50998 = G__51036;
continue;
} else {
var G__51037 = seq__50767_50995;
var G__51038 = chunk__50771_50996;
var G__51039 = count__50772_50997;
var G__51040 = (i__50773_50998 + (1));
seq__50767_50995 = G__51037;
chunk__50771_50996 = G__51038;
count__50772_50997 = G__51039;
i__50773_50998 = G__51040;
continue;
}
} else {
var G__51041 = seq__50767_50995;
var G__51042 = chunk__50771_50996;
var G__51043 = count__50772_50997;
var G__51044 = (i__50773_50998 + (1));
seq__50767_50995 = G__51041;
chunk__50771_50996 = G__51042;
count__50772_50997 = G__51043;
i__50773_50998 = G__51044;
continue;
}
} else {
var temp__5753__auto___51045 = cljs.core.seq(seq__50767_50995);
if(temp__5753__auto___51045){
var seq__50767_51046__$1 = temp__5753__auto___51045;
if(cljs.core.chunked_seq_QMARK_(seq__50767_51046__$1)){
var c__4679__auto___51047 = cljs.core.chunk_first(seq__50767_51046__$1);
var G__51048 = cljs.core.chunk_rest(seq__50767_51046__$1);
var G__51049 = c__4679__auto___51047;
var G__51050 = cljs.core.count(c__4679__auto___51047);
var G__51051 = (0);
seq__50767_50995 = G__51048;
chunk__50771_50996 = G__51049;
count__50772_50997 = G__51050;
i__50773_50998 = G__51051;
continue;
} else {
var node_51052 = cljs.core.first(seq__50767_51046__$1);
if(cljs.core.not(node_51052.shadow$old)){
var path_match_51053 = shadow.cljs.devtools.client.browser.match_paths(node_51052.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51053)){
var new_link_51054 = (function (){var G__50816 = node_51052.cloneNode(true);
G__50816.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51053),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50816;
})();
(node_51052.shadow$old = true);

(new_link_51054.onload = ((function (seq__50767_50995,chunk__50771_50996,count__50772_50997,i__50773_50998,seq__50583,chunk__50585,count__50586,i__50587,new_link_51054,path_match_51053,node_51052,seq__50767_51046__$1,temp__5753__auto___51045,path,map__50582,map__50582__$1,msg,updates,reload_info){
return (function (e){
var seq__50817_51055 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__50819_51056 = null;
var count__50820_51057 = (0);
var i__50821_51058 = (0);
while(true){
if((i__50821_51058 < count__50820_51057)){
var map__50825_51059 = chunk__50819_51056.cljs$core$IIndexed$_nth$arity$2(null,i__50821_51058);
var map__50825_51060__$1 = cljs.core.__destructure_map(map__50825_51059);
var task_51061 = map__50825_51060__$1;
var fn_str_51062 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50825_51060__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51063 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50825_51060__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51064 = goog.getObjectByName(fn_str_51062,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51063)].join(''));

(fn_obj_51064.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51064.cljs$core$IFn$_invoke$arity$2(path,new_link_51054) : fn_obj_51064.call(null,path,new_link_51054));


var G__51065 = seq__50817_51055;
var G__51066 = chunk__50819_51056;
var G__51067 = count__50820_51057;
var G__51068 = (i__50821_51058 + (1));
seq__50817_51055 = G__51065;
chunk__50819_51056 = G__51066;
count__50820_51057 = G__51067;
i__50821_51058 = G__51068;
continue;
} else {
var temp__5753__auto___51071__$1 = cljs.core.seq(seq__50817_51055);
if(temp__5753__auto___51071__$1){
var seq__50817_51072__$1 = temp__5753__auto___51071__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50817_51072__$1)){
var c__4679__auto___51073 = cljs.core.chunk_first(seq__50817_51072__$1);
var G__51074 = cljs.core.chunk_rest(seq__50817_51072__$1);
var G__51075 = c__4679__auto___51073;
var G__51076 = cljs.core.count(c__4679__auto___51073);
var G__51077 = (0);
seq__50817_51055 = G__51074;
chunk__50819_51056 = G__51075;
count__50820_51057 = G__51076;
i__50821_51058 = G__51077;
continue;
} else {
var map__50826_51078 = cljs.core.first(seq__50817_51072__$1);
var map__50826_51079__$1 = cljs.core.__destructure_map(map__50826_51078);
var task_51080 = map__50826_51079__$1;
var fn_str_51081 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50826_51079__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51082 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50826_51079__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51083 = goog.getObjectByName(fn_str_51081,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51082)].join(''));

(fn_obj_51083.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51083.cljs$core$IFn$_invoke$arity$2(path,new_link_51054) : fn_obj_51083.call(null,path,new_link_51054));


var G__51084 = cljs.core.next(seq__50817_51072__$1);
var G__51085 = null;
var G__51086 = (0);
var G__51087 = (0);
seq__50817_51055 = G__51084;
chunk__50819_51056 = G__51085;
count__50820_51057 = G__51086;
i__50821_51058 = G__51087;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_51052);
});})(seq__50767_50995,chunk__50771_50996,count__50772_50997,i__50773_50998,seq__50583,chunk__50585,count__50586,i__50587,new_link_51054,path_match_51053,node_51052,seq__50767_51046__$1,temp__5753__auto___51045,path,map__50582,map__50582__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51053], 0));

goog.dom.insertSiblingAfter(new_link_51054,node_51052);


var G__51088 = cljs.core.next(seq__50767_51046__$1);
var G__51089 = null;
var G__51090 = (0);
var G__51091 = (0);
seq__50767_50995 = G__51088;
chunk__50771_50996 = G__51089;
count__50772_50997 = G__51090;
i__50773_50998 = G__51091;
continue;
} else {
var G__51092 = cljs.core.next(seq__50767_51046__$1);
var G__51093 = null;
var G__51094 = (0);
var G__51095 = (0);
seq__50767_50995 = G__51092;
chunk__50771_50996 = G__51093;
count__50772_50997 = G__51094;
i__50773_50998 = G__51095;
continue;
}
} else {
var G__51096 = cljs.core.next(seq__50767_51046__$1);
var G__51097 = null;
var G__51098 = (0);
var G__51099 = (0);
seq__50767_50995 = G__51096;
chunk__50771_50996 = G__51097;
count__50772_50997 = G__51098;
i__50773_50998 = G__51099;
continue;
}
}
} else {
}
}
break;
}


var G__51100 = seq__50583;
var G__51101 = chunk__50585;
var G__51102 = count__50586;
var G__51103 = (i__50587 + (1));
seq__50583 = G__51100;
chunk__50585 = G__51101;
count__50586 = G__51102;
i__50587 = G__51103;
continue;
} else {
var G__51104 = seq__50583;
var G__51105 = chunk__50585;
var G__51106 = count__50586;
var G__51107 = (i__50587 + (1));
seq__50583 = G__51104;
chunk__50585 = G__51105;
count__50586 = G__51106;
i__50587 = G__51107;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50583);
if(temp__5753__auto__){
var seq__50583__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50583__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__50583__$1);
var G__51112 = cljs.core.chunk_rest(seq__50583__$1);
var G__51113 = c__4679__auto__;
var G__51114 = cljs.core.count(c__4679__auto__);
var G__51115 = (0);
seq__50583 = G__51112;
chunk__50585 = G__51113;
count__50586 = G__51114;
i__50587 = G__51115;
continue;
} else {
var path = cljs.core.first(seq__50583__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50827_51116 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50831_51117 = null;
var count__50832_51118 = (0);
var i__50833_51119 = (0);
while(true){
if((i__50833_51119 < count__50832_51118)){
var node_51120 = chunk__50831_51117.cljs$core$IIndexed$_nth$arity$2(null,i__50833_51119);
if(cljs.core.not(node_51120.shadow$old)){
var path_match_51121 = shadow.cljs.devtools.client.browser.match_paths(node_51120.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51121)){
var new_link_51122 = (function (){var G__50859 = node_51120.cloneNode(true);
G__50859.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51121),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50859;
})();
(node_51120.shadow$old = true);

(new_link_51122.onload = ((function (seq__50827_51116,chunk__50831_51117,count__50832_51118,i__50833_51119,seq__50583,chunk__50585,count__50586,i__50587,new_link_51122,path_match_51121,node_51120,path,seq__50583__$1,temp__5753__auto__,map__50582,map__50582__$1,msg,updates,reload_info){
return (function (e){
var seq__50860_51123 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__50862_51124 = null;
var count__50863_51125 = (0);
var i__50864_51126 = (0);
while(true){
if((i__50864_51126 < count__50863_51125)){
var map__50872_51127 = chunk__50862_51124.cljs$core$IIndexed$_nth$arity$2(null,i__50864_51126);
var map__50872_51128__$1 = cljs.core.__destructure_map(map__50872_51127);
var task_51129 = map__50872_51128__$1;
var fn_str_51130 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50872_51128__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51131 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50872_51128__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51132 = goog.getObjectByName(fn_str_51130,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51131)].join(''));

(fn_obj_51132.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51132.cljs$core$IFn$_invoke$arity$2(path,new_link_51122) : fn_obj_51132.call(null,path,new_link_51122));


var G__51133 = seq__50860_51123;
var G__51134 = chunk__50862_51124;
var G__51135 = count__50863_51125;
var G__51136 = (i__50864_51126 + (1));
seq__50860_51123 = G__51133;
chunk__50862_51124 = G__51134;
count__50863_51125 = G__51135;
i__50864_51126 = G__51136;
continue;
} else {
var temp__5753__auto___51137__$1 = cljs.core.seq(seq__50860_51123);
if(temp__5753__auto___51137__$1){
var seq__50860_51138__$1 = temp__5753__auto___51137__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50860_51138__$1)){
var c__4679__auto___51139 = cljs.core.chunk_first(seq__50860_51138__$1);
var G__51140 = cljs.core.chunk_rest(seq__50860_51138__$1);
var G__51141 = c__4679__auto___51139;
var G__51142 = cljs.core.count(c__4679__auto___51139);
var G__51143 = (0);
seq__50860_51123 = G__51140;
chunk__50862_51124 = G__51141;
count__50863_51125 = G__51142;
i__50864_51126 = G__51143;
continue;
} else {
var map__50873_51144 = cljs.core.first(seq__50860_51138__$1);
var map__50873_51145__$1 = cljs.core.__destructure_map(map__50873_51144);
var task_51146 = map__50873_51145__$1;
var fn_str_51147 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50873_51145__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51148 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50873_51145__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51149 = goog.getObjectByName(fn_str_51147,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51148)].join(''));

(fn_obj_51149.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51149.cljs$core$IFn$_invoke$arity$2(path,new_link_51122) : fn_obj_51149.call(null,path,new_link_51122));


var G__51154 = cljs.core.next(seq__50860_51138__$1);
var G__51155 = null;
var G__51156 = (0);
var G__51157 = (0);
seq__50860_51123 = G__51154;
chunk__50862_51124 = G__51155;
count__50863_51125 = G__51156;
i__50864_51126 = G__51157;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_51120);
});})(seq__50827_51116,chunk__50831_51117,count__50832_51118,i__50833_51119,seq__50583,chunk__50585,count__50586,i__50587,new_link_51122,path_match_51121,node_51120,path,seq__50583__$1,temp__5753__auto__,map__50582,map__50582__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51121], 0));

goog.dom.insertSiblingAfter(new_link_51122,node_51120);


var G__51158 = seq__50827_51116;
var G__51159 = chunk__50831_51117;
var G__51160 = count__50832_51118;
var G__51161 = (i__50833_51119 + (1));
seq__50827_51116 = G__51158;
chunk__50831_51117 = G__51159;
count__50832_51118 = G__51160;
i__50833_51119 = G__51161;
continue;
} else {
var G__51162 = seq__50827_51116;
var G__51163 = chunk__50831_51117;
var G__51164 = count__50832_51118;
var G__51165 = (i__50833_51119 + (1));
seq__50827_51116 = G__51162;
chunk__50831_51117 = G__51163;
count__50832_51118 = G__51164;
i__50833_51119 = G__51165;
continue;
}
} else {
var G__51166 = seq__50827_51116;
var G__51167 = chunk__50831_51117;
var G__51168 = count__50832_51118;
var G__51169 = (i__50833_51119 + (1));
seq__50827_51116 = G__51166;
chunk__50831_51117 = G__51167;
count__50832_51118 = G__51168;
i__50833_51119 = G__51169;
continue;
}
} else {
var temp__5753__auto___51170__$1 = cljs.core.seq(seq__50827_51116);
if(temp__5753__auto___51170__$1){
var seq__50827_51171__$1 = temp__5753__auto___51170__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50827_51171__$1)){
var c__4679__auto___51172 = cljs.core.chunk_first(seq__50827_51171__$1);
var G__51173 = cljs.core.chunk_rest(seq__50827_51171__$1);
var G__51174 = c__4679__auto___51172;
var G__51175 = cljs.core.count(c__4679__auto___51172);
var G__51176 = (0);
seq__50827_51116 = G__51173;
chunk__50831_51117 = G__51174;
count__50832_51118 = G__51175;
i__50833_51119 = G__51176;
continue;
} else {
var node_51177 = cljs.core.first(seq__50827_51171__$1);
if(cljs.core.not(node_51177.shadow$old)){
var path_match_51178 = shadow.cljs.devtools.client.browser.match_paths(node_51177.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51178)){
var new_link_51179 = (function (){var G__50874 = node_51177.cloneNode(true);
G__50874.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51178),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50874;
})();
(node_51177.shadow$old = true);

(new_link_51179.onload = ((function (seq__50827_51116,chunk__50831_51117,count__50832_51118,i__50833_51119,seq__50583,chunk__50585,count__50586,i__50587,new_link_51179,path_match_51178,node_51177,seq__50827_51171__$1,temp__5753__auto___51170__$1,path,seq__50583__$1,temp__5753__auto__,map__50582,map__50582__$1,msg,updates,reload_info){
return (function (e){
var seq__50875_51180 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__50877_51181 = null;
var count__50878_51182 = (0);
var i__50879_51183 = (0);
while(true){
if((i__50879_51183 < count__50878_51182)){
var map__50885_51184 = chunk__50877_51181.cljs$core$IIndexed$_nth$arity$2(null,i__50879_51183);
var map__50885_51185__$1 = cljs.core.__destructure_map(map__50885_51184);
var task_51186 = map__50885_51185__$1;
var fn_str_51187 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50885_51185__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51188 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50885_51185__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51189 = goog.getObjectByName(fn_str_51187,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51188)].join(''));

(fn_obj_51189.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51189.cljs$core$IFn$_invoke$arity$2(path,new_link_51179) : fn_obj_51189.call(null,path,new_link_51179));


var G__51190 = seq__50875_51180;
var G__51191 = chunk__50877_51181;
var G__51192 = count__50878_51182;
var G__51193 = (i__50879_51183 + (1));
seq__50875_51180 = G__51190;
chunk__50877_51181 = G__51191;
count__50878_51182 = G__51192;
i__50879_51183 = G__51193;
continue;
} else {
var temp__5753__auto___51194__$2 = cljs.core.seq(seq__50875_51180);
if(temp__5753__auto___51194__$2){
var seq__50875_51195__$1 = temp__5753__auto___51194__$2;
if(cljs.core.chunked_seq_QMARK_(seq__50875_51195__$1)){
var c__4679__auto___51196 = cljs.core.chunk_first(seq__50875_51195__$1);
var G__51197 = cljs.core.chunk_rest(seq__50875_51195__$1);
var G__51198 = c__4679__auto___51196;
var G__51199 = cljs.core.count(c__4679__auto___51196);
var G__51200 = (0);
seq__50875_51180 = G__51197;
chunk__50877_51181 = G__51198;
count__50878_51182 = G__51199;
i__50879_51183 = G__51200;
continue;
} else {
var map__50886_51201 = cljs.core.first(seq__50875_51195__$1);
var map__50886_51202__$1 = cljs.core.__destructure_map(map__50886_51201);
var task_51203 = map__50886_51202__$1;
var fn_str_51204 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50886_51202__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51205 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50886_51202__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51206 = goog.getObjectByName(fn_str_51204,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51205)].join(''));

(fn_obj_51206.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51206.cljs$core$IFn$_invoke$arity$2(path,new_link_51179) : fn_obj_51206.call(null,path,new_link_51179));


var G__51208 = cljs.core.next(seq__50875_51195__$1);
var G__51209 = null;
var G__51210 = (0);
var G__51211 = (0);
seq__50875_51180 = G__51208;
chunk__50877_51181 = G__51209;
count__50878_51182 = G__51210;
i__50879_51183 = G__51211;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_51177);
});})(seq__50827_51116,chunk__50831_51117,count__50832_51118,i__50833_51119,seq__50583,chunk__50585,count__50586,i__50587,new_link_51179,path_match_51178,node_51177,seq__50827_51171__$1,temp__5753__auto___51170__$1,path,seq__50583__$1,temp__5753__auto__,map__50582,map__50582__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51178], 0));

goog.dom.insertSiblingAfter(new_link_51179,node_51177);


var G__51212 = cljs.core.next(seq__50827_51171__$1);
var G__51213 = null;
var G__51214 = (0);
var G__51215 = (0);
seq__50827_51116 = G__51212;
chunk__50831_51117 = G__51213;
count__50832_51118 = G__51214;
i__50833_51119 = G__51215;
continue;
} else {
var G__51216 = cljs.core.next(seq__50827_51171__$1);
var G__51217 = null;
var G__51218 = (0);
var G__51219 = (0);
seq__50827_51116 = G__51216;
chunk__50831_51117 = G__51217;
count__50832_51118 = G__51218;
i__50833_51119 = G__51219;
continue;
}
} else {
var G__51220 = cljs.core.next(seq__50827_51171__$1);
var G__51221 = null;
var G__51222 = (0);
var G__51223 = (0);
seq__50827_51116 = G__51220;
chunk__50831_51117 = G__51221;
count__50832_51118 = G__51222;
i__50833_51119 = G__51223;
continue;
}
}
} else {
}
}
break;
}


var G__51224 = cljs.core.next(seq__50583__$1);
var G__51225 = null;
var G__51226 = (0);
var G__51227 = (0);
seq__50583 = G__51224;
chunk__50585 = G__51225;
count__50586 = G__51226;
i__50587 = G__51227;
continue;
} else {
var G__51228 = cljs.core.next(seq__50583__$1);
var G__51229 = null;
var G__51230 = (0);
var G__51231 = (0);
seq__50583 = G__51228;
chunk__50585 = G__51229;
count__50586 = G__51230;
i__50587 = G__51231;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__50890){
var map__50891 = p__50890;
var map__50891__$1 = cljs.core.__destructure_map(map__50891);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50891__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__50897){
var map__50898 = p__50897;
var map__50898__$1 = cljs.core.__destructure_map(map__50898);
var _ = map__50898__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50898__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__50899,done,error){
var map__50900 = p__50899;
var map__50900__$1 = cljs.core.__destructure_map(map__50900);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50900__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__50903,done,error){
var map__50904 = p__50903;
var map__50904__$1 = cljs.core.__destructure_map(map__50904);
var msg = map__50904__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50904__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50904__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50904__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__50905){
var map__50906 = p__50905;
var map__50906__$1 = cljs.core.__destructure_map(map__50906);
var src = map__50906__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50906__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__50907 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__50907) : done.call(null,G__50907));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__50908){
var map__50909 = p__50908;
var map__50909__$1 = cljs.core.__destructure_map(map__50909);
var msg__$1 = map__50909__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50909__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e50910){var ex = e50910;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__50911){
var map__50912 = p__50911;
var map__50912__$1 = cljs.core.__destructure_map(map__50912);
var env = map__50912__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50912__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__50915){
var map__50916 = p__50915;
var map__50916__$1 = cljs.core.__destructure_map(map__50916);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50916__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50916__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__50918){
var map__50919 = p__50918;
var map__50919__$1 = cljs.core.__destructure_map(map__50919);
var svc = map__50919__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50919__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
