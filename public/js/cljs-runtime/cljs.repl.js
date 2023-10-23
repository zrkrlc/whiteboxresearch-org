goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__49414){
var map__49415 = p__49414;
var map__49415__$1 = cljs.core.__destructure_map(map__49415);
var m = map__49415__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49415__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49415__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__49417_49582 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49418_49583 = null;
var count__49419_49584 = (0);
var i__49420_49585 = (0);
while(true){
if((i__49420_49585 < count__49419_49584)){
var f_49589 = chunk__49418_49583.cljs$core$IIndexed$_nth$arity$2(null,i__49420_49585);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_49589], 0));


var G__49590 = seq__49417_49582;
var G__49591 = chunk__49418_49583;
var G__49592 = count__49419_49584;
var G__49593 = (i__49420_49585 + (1));
seq__49417_49582 = G__49590;
chunk__49418_49583 = G__49591;
count__49419_49584 = G__49592;
i__49420_49585 = G__49593;
continue;
} else {
var temp__5753__auto___49594 = cljs.core.seq(seq__49417_49582);
if(temp__5753__auto___49594){
var seq__49417_49595__$1 = temp__5753__auto___49594;
if(cljs.core.chunked_seq_QMARK_(seq__49417_49595__$1)){
var c__4679__auto___49596 = cljs.core.chunk_first(seq__49417_49595__$1);
var G__49597 = cljs.core.chunk_rest(seq__49417_49595__$1);
var G__49598 = c__4679__auto___49596;
var G__49599 = cljs.core.count(c__4679__auto___49596);
var G__49600 = (0);
seq__49417_49582 = G__49597;
chunk__49418_49583 = G__49598;
count__49419_49584 = G__49599;
i__49420_49585 = G__49600;
continue;
} else {
var f_49601 = cljs.core.first(seq__49417_49595__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_49601], 0));


var G__49602 = cljs.core.next(seq__49417_49595__$1);
var G__49603 = null;
var G__49604 = (0);
var G__49605 = (0);
seq__49417_49582 = G__49602;
chunk__49418_49583 = G__49603;
count__49419_49584 = G__49604;
i__49420_49585 = G__49605;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_49606 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_49606], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_49606)))?cljs.core.second(arglists_49606):arglists_49606)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__49430_49608 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49431_49609 = null;
var count__49432_49610 = (0);
var i__49433_49611 = (0);
while(true){
if((i__49433_49611 < count__49432_49610)){
var vec__49447_49612 = chunk__49431_49609.cljs$core$IIndexed$_nth$arity$2(null,i__49433_49611);
var name_49613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49447_49612,(0),null);
var map__49450_49614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49447_49612,(1),null);
var map__49450_49615__$1 = cljs.core.__destructure_map(map__49450_49614);
var doc_49616 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49450_49615__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49617 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49450_49615__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_49613], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_49617], 0));

if(cljs.core.truth_(doc_49616)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_49616], 0));
} else {
}


var G__49618 = seq__49430_49608;
var G__49619 = chunk__49431_49609;
var G__49620 = count__49432_49610;
var G__49621 = (i__49433_49611 + (1));
seq__49430_49608 = G__49618;
chunk__49431_49609 = G__49619;
count__49432_49610 = G__49620;
i__49433_49611 = G__49621;
continue;
} else {
var temp__5753__auto___49623 = cljs.core.seq(seq__49430_49608);
if(temp__5753__auto___49623){
var seq__49430_49628__$1 = temp__5753__auto___49623;
if(cljs.core.chunked_seq_QMARK_(seq__49430_49628__$1)){
var c__4679__auto___49629 = cljs.core.chunk_first(seq__49430_49628__$1);
var G__49630 = cljs.core.chunk_rest(seq__49430_49628__$1);
var G__49631 = c__4679__auto___49629;
var G__49632 = cljs.core.count(c__4679__auto___49629);
var G__49633 = (0);
seq__49430_49608 = G__49630;
chunk__49431_49609 = G__49631;
count__49432_49610 = G__49632;
i__49433_49611 = G__49633;
continue;
} else {
var vec__49455_49638 = cljs.core.first(seq__49430_49628__$1);
var name_49639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49455_49638,(0),null);
var map__49458_49640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49455_49638,(1),null);
var map__49458_49641__$1 = cljs.core.__destructure_map(map__49458_49640);
var doc_49642 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49458_49641__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49643 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49458_49641__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_49639], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_49643], 0));

if(cljs.core.truth_(doc_49642)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_49642], 0));
} else {
}


var G__49653 = cljs.core.next(seq__49430_49628__$1);
var G__49654 = null;
var G__49655 = (0);
var G__49656 = (0);
seq__49430_49608 = G__49653;
chunk__49431_49609 = G__49654;
count__49432_49610 = G__49655;
i__49433_49611 = G__49656;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__49459 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__49460 = null;
var count__49461 = (0);
var i__49462 = (0);
while(true){
if((i__49462 < count__49461)){
var role = chunk__49460.cljs$core$IIndexed$_nth$arity$2(null,i__49462);
var temp__5753__auto___49664__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___49664__$1)){
var spec_49665 = temp__5753__auto___49664__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_49665)], 0));
} else {
}


var G__49671 = seq__49459;
var G__49672 = chunk__49460;
var G__49673 = count__49461;
var G__49674 = (i__49462 + (1));
seq__49459 = G__49671;
chunk__49460 = G__49672;
count__49461 = G__49673;
i__49462 = G__49674;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__49459);
if(temp__5753__auto____$1){
var seq__49459__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__49459__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__49459__$1);
var G__49678 = cljs.core.chunk_rest(seq__49459__$1);
var G__49679 = c__4679__auto__;
var G__49680 = cljs.core.count(c__4679__auto__);
var G__49681 = (0);
seq__49459 = G__49678;
chunk__49460 = G__49679;
count__49461 = G__49680;
i__49462 = G__49681;
continue;
} else {
var role = cljs.core.first(seq__49459__$1);
var temp__5753__auto___49682__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___49682__$2)){
var spec_49684 = temp__5753__auto___49682__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_49684)], 0));
} else {
}


var G__49697 = cljs.core.next(seq__49459__$1);
var G__49698 = null;
var G__49699 = (0);
var G__49700 = (0);
seq__49459 = G__49697;
chunk__49460 = G__49698;
count__49461 = G__49699;
i__49462 = G__49700;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__49741 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__49742 = cljs.core.ex_cause(t);
via = G__49741;
t = G__49742;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__49499 = datafied_throwable;
var map__49499__$1 = cljs.core.__destructure_map(map__49499);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49499__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49499__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49499__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__49500 = cljs.core.last(via);
var map__49500__$1 = cljs.core.__destructure_map(map__49500);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49500__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49500__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49500__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__49501 = data;
var map__49501__$1 = cljs.core.__destructure_map(map__49501);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49501__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49501__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49501__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__49502 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__49502__$1 = cljs.core.__destructure_map(map__49502);
var top_data = map__49502__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49502__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__49505 = phase;
var G__49505__$1 = (((G__49505 instanceof cljs.core.Keyword))?G__49505.fqn:null);
switch (G__49505__$1) {
case "read-source":
var map__49506 = data;
var map__49506__$1 = cljs.core.__destructure_map(map__49506);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49506__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49506__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__49507 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__49507__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49507,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__49507);
var G__49507__$2 = (cljs.core.truth_((function (){var fexpr__49508 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49508.cljs$core$IFn$_invoke$arity$1 ? fexpr__49508.cljs$core$IFn$_invoke$arity$1(source) : fexpr__49508.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49507__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__49507__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49507__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__49507__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__49512 = top_data;
var G__49512__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49512,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__49512);
var G__49512__$2 = (cljs.core.truth_((function (){var fexpr__49513 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49513.cljs$core$IFn$_invoke$arity$1 ? fexpr__49513.cljs$core$IFn$_invoke$arity$1(source) : fexpr__49513.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49512__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__49512__$1);
var G__49512__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49512__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__49512__$2);
var G__49512__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49512__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__49512__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49512__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__49512__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__49514 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49514,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49514,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49514,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49514,(3),null);
var G__49517 = top_data;
var G__49517__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49517,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__49517);
var G__49517__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49517__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__49517__$1);
var G__49517__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49517__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__49517__$2);
var G__49517__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49517__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__49517__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49517__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__49517__$4;
}

break;
case "execution":
var vec__49521 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49521,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49521,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49521,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49521,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__49493_SHARP_){
var or__4253__auto__ = (p1__49493_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__49524 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49524.cljs$core$IFn$_invoke$arity$1 ? fexpr__49524.cljs$core$IFn$_invoke$arity$1(p1__49493_SHARP_) : fexpr__49524.call(null,p1__49493_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__49525 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__49525__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49525,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__49525);
var G__49525__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49525__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__49525__$1);
var G__49525__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49525__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__49525__$2);
var G__49525__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49525__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__49525__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49525__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__49525__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49505__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__49530){
var map__49531 = p__49530;
var map__49531__$1 = cljs.core.__destructure_map(map__49531);
var triage_data = map__49531__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49531__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49531__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49531__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49531__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49531__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49531__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49531__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49531__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__49536 = phase;
var G__49536__$1 = (((G__49536 instanceof cljs.core.Keyword))?G__49536.fqn:null);
switch (G__49536__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__49538 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__49539 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49540 = loc;
var G__49541 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__49542_49866 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__49543_49867 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__49544_49868 = true;
var _STAR_print_fn_STAR__temp_val__49545_49869 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__49544_49868);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__49545_49869);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49526_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__49526_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__49543_49867);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__49542_49866);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__49538,G__49539,G__49540,G__49541) : format.call(null,G__49538,G__49539,G__49540,G__49541));

break;
case "macroexpansion":
var G__49547 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__49548 = cause_type;
var G__49549 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49550 = loc;
var G__49551 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49547,G__49548,G__49549,G__49550,G__49551) : format.call(null,G__49547,G__49548,G__49549,G__49550,G__49551));

break;
case "compile-syntax-check":
var G__49552 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__49553 = cause_type;
var G__49554 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49555 = loc;
var G__49556 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49552,G__49553,G__49554,G__49555,G__49556) : format.call(null,G__49552,G__49553,G__49554,G__49555,G__49556));

break;
case "compilation":
var G__49557 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__49558 = cause_type;
var G__49559 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49560 = loc;
var G__49561 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49557,G__49558,G__49559,G__49560,G__49561) : format.call(null,G__49557,G__49558,G__49559,G__49560,G__49561));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__49564 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__49565 = symbol;
var G__49566 = loc;
var G__49567 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__49568_49975 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__49569_49976 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__49570_49977 = true;
var _STAR_print_fn_STAR__temp_val__49571_49978 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__49570_49977);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__49571_49978);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49527_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__49527_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__49569_49976);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__49568_49975);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__49564,G__49565,G__49566,G__49567) : format.call(null,G__49564,G__49565,G__49566,G__49567));
} else {
var G__49576 = "Execution error%s at %s(%s).\n%s\n";
var G__49577 = cause_type;
var G__49578 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49579 = loc;
var G__49580 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49576,G__49577,G__49578,G__49579,G__49580) : format.call(null,G__49576,G__49577,G__49578,G__49579,G__49580));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49536__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
