goog.provide('threeagent.impl.virtual_scene');
if((typeof threeagent !== 'undefined') && (typeof threeagent.impl !== 'undefined') && (typeof threeagent.impl.virtual_scene !== 'undefined') && (typeof threeagent.impl.virtual_scene.non_component_keys !== 'undefined')){
} else {
threeagent.impl.virtual_scene.non_component_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),null,new cljs.core.Keyword(null,"scale","scale",-230427353),null,new cljs.core.Keyword(null,"position","position",-2011731912),null], null), null);
}
threeagent.impl.virtual_scene.print_tree = (function threeagent$impl$virtual_scene$print_tree(var_args){
var G__41799 = arguments.length;
switch (G__41799) {
case 1:
return threeagent.impl.virtual_scene.print_tree.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return threeagent.impl.virtual_scene.print_tree.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(threeagent.impl.virtual_scene.print_tree.cljs$core$IFn$_invoke$arity$1 = (function (node){
return threeagent.impl.virtual_scene.print_tree.cljs$core$IFn$_invoke$arity$2(node,"");
}));

(threeagent.impl.virtual_scene.print_tree.cljs$core$IFn$_invoke$arity$2 = (function (node,p){
var is_reactive = (((!((node.reactions == null)))) && (cljs.core.seq(node.reactions)));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p,"|-",node.key,["comp:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"component-key","component-key",1189239034).cljs$core$IFn$_invoke$arity$1(node.data))].join(''),["id:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node.data))].join(''),["dirty:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(node.dirty)].join(''),["reactive:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(is_reactive)].join('')], 0));

var seq__41804 = cljs.core.seq(cljs.core.es6_iterator_seq(node.children.values()));
var chunk__41805 = null;
var count__41806 = (0);
var i__41807 = (0);
while(true){
if((i__41807 < count__41806)){
var child = chunk__41805.cljs$core$IIndexed$_nth$arity$2(null,i__41807);
threeagent.impl.virtual_scene.print_tree.cljs$core$IFn$_invoke$arity$2(child,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p),"\t"].join(''));


var G__41978 = seq__41804;
var G__41979 = chunk__41805;
var G__41980 = count__41806;
var G__41981 = (i__41807 + (1));
seq__41804 = G__41978;
chunk__41805 = G__41979;
count__41806 = G__41980;
i__41807 = G__41981;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__41804);
if(temp__5753__auto__){
var seq__41804__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41804__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__41804__$1);
var G__41982 = cljs.core.chunk_rest(seq__41804__$1);
var G__41983 = c__4679__auto__;
var G__41984 = cljs.core.count(c__4679__auto__);
var G__41985 = (0);
seq__41804 = G__41982;
chunk__41805 = G__41983;
count__41806 = G__41984;
i__41807 = G__41985;
continue;
} else {
var child = cljs.core.first(seq__41804__$1);
threeagent.impl.virtual_scene.print_tree.cljs$core$IFn$_invoke$arity$2(child,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p),"\t"].join(''));


var G__41986 = cljs.core.next(seq__41804__$1);
var G__41987 = null;
var G__41988 = (0);
var G__41989 = (0);
seq__41804 = G__41986;
chunk__41805 = G__41987;
count__41806 = G__41988;
i__41807 = G__41989;
continue;
}
} else {
return null;
}
}
break;
}
}));

(threeagent.impl.virtual_scene.print_tree.cljs$lang$maxFixedArity = 2);

threeagent.impl.virtual_scene.node__GT_path = (function threeagent$impl$virtual_scene$node__GT_path(var_args){
var G__41818 = arguments.length;
switch (G__41818) {
case 1:
return threeagent.impl.virtual_scene.node__GT_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return threeagent.impl.virtual_scene.node__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(threeagent.impl.virtual_scene.node__GT_path.cljs$core$IFn$_invoke$arity$1 = (function (node){
return threeagent.impl.virtual_scene.node__GT_path.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,node);
}));

(threeagent.impl.virtual_scene.node__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (path,node){
while(true){
if(cljs.core.truth_(node)){
var G__41991 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,node.key);
var G__41992 = node.parent;
path = G__41991;
node = G__41992;
continue;
} else {
return cljs.core.reverse(path);
}
break;
}
}));

(threeagent.impl.virtual_scene.node__GT_path.cljs$lang$maxFixedArity = 2);

threeagent.impl.virtual_scene.get_key = (function threeagent$impl$virtual_scene$get_key(key,meta){
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$2(meta,key);
});

/**
* @constructor
*/
threeagent.impl.virtual_scene.RenderQueueEntry = (function (node,renderFn,forceReplace){
this.node = node;
this.renderFn = renderFn;
this.forceReplace = forceReplace;
});

(threeagent.impl.virtual_scene.RenderQueueEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"Node","Node",446032991,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"renderFn","renderFn",2125786427,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"js","js",-886355190,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"forceReplace","forceReplace",1215005148,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"js","js",-886355190,null)], null))], null);
}));

(threeagent.impl.virtual_scene.RenderQueueEntry.cljs$lang$type = true);

(threeagent.impl.virtual_scene.RenderQueueEntry.cljs$lang$ctorStr = "threeagent.impl.virtual-scene/RenderQueueEntry");

(threeagent.impl.virtual_scene.RenderQueueEntry.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"threeagent.impl.virtual-scene/RenderQueueEntry");
}));

/**
 * Positional factory function for threeagent.impl.virtual-scene/RenderQueueEntry.
 */
threeagent.impl.virtual_scene.__GT_RenderQueueEntry = (function threeagent$impl$virtual_scene$__GT_RenderQueueEntry(node,renderFn,forceReplace){
return (new threeagent.impl.virtual_scene.RenderQueueEntry(node,renderFn,forceReplace));
});


/**
* @constructor
*/
threeagent.impl.virtual_scene.Node = (function (context,parent,depth,id,key,meta,data,dirty,render,reaction,children,portalPath){
this.context = context;
this.parent = parent;
this.depth = depth;
this.id = id;
this.key = key;
this.meta = meta;
this.data = data;
this.dirty = dirty;
this.render = render;
this.reaction = reaction;
this.children = children;
this.portalPath = portalPath;
});
(threeagent.impl.virtual_scene.Node.prototype.terminal_QMARK_ = (function (){
var self__ = this;
var _this = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),self__.children.size);
}));

(threeagent.impl.virtual_scene.Node.prototype.for_each_child = (function (f){
var self__ = this;
var _this = this;
var seq__41831 = cljs.core.seq(cljs.core.es6_iterator_seq(self__.children.values()));
var chunk__41832 = null;
var count__41833 = (0);
var i__41834 = (0);
while(true){
if((i__41834 < count__41833)){
var child = chunk__41832.cljs$core$IIndexed$_nth$arity$2(null,i__41834);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(child) : f.call(null,child));


var G__41993 = seq__41831;
var G__41994 = chunk__41832;
var G__41995 = count__41833;
var G__41996 = (i__41834 + (1));
seq__41831 = G__41993;
chunk__41832 = G__41994;
count__41833 = G__41995;
i__41834 = G__41996;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__41831);
if(temp__5753__auto__){
var seq__41831__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41831__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__41831__$1);
var G__41997 = cljs.core.chunk_rest(seq__41831__$1);
var G__41998 = c__4679__auto__;
var G__41999 = cljs.core.count(c__4679__auto__);
var G__42000 = (0);
seq__41831 = G__41997;
chunk__41832 = G__41998;
count__41833 = G__41999;
i__41834 = G__42000;
continue;
} else {
var child = cljs.core.first(seq__41831__$1);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(child) : f.call(null,child));


var G__42001 = cljs.core.next(seq__41831__$1);
var G__42002 = null;
var G__42003 = (0);
var G__42004 = (0);
seq__41831 = G__42001;
chunk__41832 = G__42002;
count__41833 = G__42003;
i__41834 = G__42004;
continue;
}
} else {
return null;
}
}
break;
}
}));

(threeagent.impl.virtual_scene.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",810340414,null),cljs.core.with_meta(new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"Node","Node",446032991,null)], null)),new cljs.core.Symbol(null,"depth","depth",-885772129,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"dirty","dirty",-1924882488,null),new cljs.core.Symbol(null,"render","render",232498073,null),new cljs.core.Symbol(null,"reaction","reaction",2131401315,null),new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"portalPath","portalPath",-1494948879,null)], null);
}));

(threeagent.impl.virtual_scene.Node.cljs$lang$type = true);

(threeagent.impl.virtual_scene.Node.cljs$lang$ctorStr = "threeagent.impl.virtual-scene/Node");

(threeagent.impl.virtual_scene.Node.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"threeagent.impl.virtual-scene/Node");
}));

/**
 * Positional factory function for threeagent.impl.virtual-scene/Node.
 */
threeagent.impl.virtual_scene.__GT_Node = (function threeagent$impl$virtual_scene$__GT_Node(context,parent,depth,id,key,meta,data,dirty,render,reaction,children,portalPath){
return (new threeagent.impl.virtual_scene.Node(context,parent,depth,id,key,meta,data,dirty,render,reaction,children,portalPath));
});


/**
* @constructor
*/
threeagent.impl.virtual_scene.Scene = (function (root,renderQueue){
this.root = root;
this.renderQueue = renderQueue;
});
(threeagent.impl.virtual_scene.Scene.prototype.enqueueForRender = (function (node,render_fn,force_replace_QMARK_){
var self__ = this;
var _ = this;
(node.dirty = true);

return self__.renderQueue.enqueue(node.depth,(new threeagent.impl.virtual_scene.RenderQueueEntry(node,render_fn,force_replace_QMARK_)));
}));

(threeagent.impl.virtual_scene.Scene.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"root","root",1191874074,null),new cljs.core.Symbol(null,"renderQueue","renderQueue",-1811767425,null)], null);
}));

(threeagent.impl.virtual_scene.Scene.cljs$lang$type = true);

(threeagent.impl.virtual_scene.Scene.cljs$lang$ctorStr = "threeagent.impl.virtual-scene/Scene");

(threeagent.impl.virtual_scene.Scene.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"threeagent.impl.virtual-scene/Scene");
}));

/**
 * Positional factory function for threeagent.impl.virtual-scene/Scene.
 */
threeagent.impl.virtual_scene.__GT_Scene = (function threeagent$impl$virtual_scene$__GT_Scene(root,renderQueue){
return (new threeagent.impl.virtual_scene.Scene(root,renderQueue));
});

threeagent.impl.virtual_scene.get_in_node = (function threeagent$impl$virtual_scene$get_in_node(node,path){
while(true){
if(cljs.core.empty_QMARK_(path)){
return node;
} else {
var G__42005 = node.children.get(cljs.core.first(path));
var G__42006 = cljs.core.rest(path);
node = G__42005;
path = G__42006;
continue;
}
break;
}
});
threeagent.impl.virtual_scene.get_in_scene = (function threeagent$impl$virtual_scene$get_in_scene(scene,path){
return threeagent.impl.virtual_scene.get_in_node(scene.root,cljs.core.rest(path));
});
threeagent.impl.virtual_scene.on_react_BANG_ = (function threeagent$impl$virtual_scene$on_react_BANG_(render_fn,ctx){
var node = ctx.node;
var scene = ctx.scene;
return scene.enqueueForRender(node,render_fn,ctx.forceReplace);
});
threeagent.impl.virtual_scene.extract_comp_config = (function threeagent$impl$virtual_scene$extract_comp_config(config){
var c = cljs.core.transient$(config);
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__41854_SHARP_,p2__41855_SHARP_){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(p1__41854_SHARP_,p2__41855_SHARP_);
}),c,threeagent.impl.virtual_scene.non_component_keys));
});
threeagent.impl.virtual_scene.node_data = (function threeagent$impl$virtual_scene$node_data(comp_key,comp_config){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$2(comp_config,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null)),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$2(comp_config,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null)),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$2(comp_config,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,1.0,1.0], null)),new cljs.core.Keyword(null,"cast-shadow","cast-shadow",-446090219),new cljs.core.Keyword(null,"cast-shadow","cast-shadow",-446090219).cljs$core$IFn$_invoke$arity$2(comp_config,false),new cljs.core.Keyword(null,"receive-shadow","receive-shadow",-789712390),new cljs.core.Keyword(null,"receive-shadow","receive-shadow",-789712390).cljs$core$IFn$_invoke$arity$2(comp_config,false),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(comp_config),new cljs.core.Keyword(null,"component-key","component-key",1189239034),comp_key,new cljs.core.Keyword(null,"component-config","component-config",2000790546),threeagent.impl.virtual_scene.extract_comp_config(comp_config)], null);
});
if((typeof threeagent !== 'undefined') && (typeof threeagent.impl !== 'undefined') && (typeof threeagent.impl.virtual_scene !== 'undefined') && (typeof threeagent.impl.virtual_scene.__GT_node !== 'undefined')){
} else {
threeagent.impl.virtual_scene.__GT_node = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__41856 = cljs.core.get_global_hierarchy;
return (fexpr__41856.cljs$core$IFn$_invoke$arity$0 ? fexpr__41856.cljs$core$IFn$_invoke$arity$0() : fexpr__41856.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("threeagent.impl.virtual-scene","->node"),(function (_scene,_context,_parent,_key,p__41857){
var vec__41858 = p__41857;
var seq__41859 = cljs.core.seq(vec__41858);
var first__41860 = cljs.core.first(seq__41859);
var seq__41859__$1 = cljs.core.next(seq__41859);
var l = first__41860;
var r = seq__41859__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,">",">",-555517146),l)){
return new cljs.core.Keyword(null,"portal","portal",2002989957);
} else {
if((l instanceof cljs.core.Keyword)){
return new cljs.core.Keyword(null,"keyword","keyword",811389747);
} else {
if(cljs.core.fn_QMARK_(l)){
return new cljs.core.Keyword(null,"fn","fn",-1175266204);
} else {
if(cljs.core.map_QMARK_(l)){
return new cljs.core.Keyword(null,"context","context",-830191113);
} else {
if(cljs.core.sequential_QMARK_(l)){
return new cljs.core.Keyword(null,"seq","seq",-1817803783);
} else {
if((((l == null)) && ((r == null)))){
return new cljs.core.Keyword(null,"empty-list","empty-list",-1865196089);
} else {
return null;

}
}
}
}
}
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
threeagent.impl.virtual_scene.__GT_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_scene,_context,_parent,_key,form){
return console.error("Invalid object form:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(form));
}));
threeagent.impl.virtual_scene.__GT_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"empty-list","empty-list",-1865196089),(function (_scene,_context,_parent,_key,_form){
return null;
}));
threeagent.impl.virtual_scene.__GT_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"portal","portal",2002989957),(function (scene,context,parent,key,p__41861){
var vec__41862 = p__41861;
var seq__41863 = cljs.core.seq(vec__41862);
var first__41864 = cljs.core.first(seq__41863);
var seq__41863__$1 = cljs.core.next(seq__41863);
var _ = first__41864;
var first__41864__$1 = cljs.core.first(seq__41863__$1);
var seq__41863__$2 = cljs.core.next(seq__41863__$1);
var path = first__41864__$1;
var children = seq__41863__$2;
var form = vec__41862;
var depth = (cljs.core.truth_(parent)?(parent.depth + (1)):(0));
var children__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,children);
var children_map = (new Map());
var node = (new threeagent.impl.virtual_scene.Node(context,parent,depth,null,key,cljs.core.meta(form),null,false,null,null,children_map,path));
if((!(((typeof key === 'string') || (typeof key === 'number'))))){
throw ["^:key must be a string or number, found: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
} else {
}

var seq__41865_42007 = cljs.core.seq(medley.core.indexed.cljs$core$IFn$_invoke$arity$1(children__$1));
var chunk__41866_42008 = null;
var count__41867_42009 = (0);
var i__41868_42010 = (0);
while(true){
if((i__41868_42010 < count__41867_42009)){
var vec__41900_42011 = chunk__41866_42008.cljs$core$IIndexed$_nth$arity$2(null,i__41868_42010);
var idx_42012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41900_42011,(0),null);
var child_42013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41900_42011,(1),null);
var temp__5753__auto___42014 = threeagent.impl.virtual_scene.__GT_node.cljs$core$IFn$_invoke$arity$5(scene,context,node,idx_42012,child_42013);
if(cljs.core.truth_(temp__5753__auto___42014)){
var child_node_42015 = temp__5753__auto___42014;
children_map.set(child_node_42015.key,child_node_42015);
} else {
}


var G__42016 = seq__41865_42007;
var G__42017 = chunk__41866_42008;
var G__42018 = count__41867_42009;
var G__42019 = (i__41868_42010 + (1));
seq__41865_42007 = G__42016;
chunk__41866_42008 = G__42017;
count__41867_42009 = G__42018;
i__41868_42010 = G__42019;
continue;
} else {
var temp__5753__auto___42020 = cljs.core.seq(seq__41865_42007);
if(temp__5753__auto___42020){
var seq__41865_42021__$1 = temp__5753__auto___42020;
if(cljs.core.chunked_seq_QMARK_(seq__41865_42021__$1)){
var c__4679__auto___42022 = cljs.core.chunk_first(seq__41865_42021__$1);
var G__42023 = cljs.core.chunk_rest(seq__41865_42021__$1);
var G__42024 = c__4679__auto___42022;
var G__42025 = cljs.core.count(c__4679__auto___42022);
var G__42026 = (0);
seq__41865_42007 = G__42023;
chunk__41866_42008 = G__42024;
count__41867_42009 = G__42025;
i__41868_42010 = G__42026;
continue;
} else {
var vec__41903_42027 = cljs.core.first(seq__41865_42021__$1);
var idx_42028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41903_42027,(0),null);
var child_42029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41903_42027,(1),null);
var temp__5753__auto___42030__$1 = threeagent.impl.virtual_scene.__GT_node.cljs$core$IFn$_invoke$arity$5(scene,context,node,idx_42028,child_42029);
if(cljs.core.truth_(temp__5753__auto___42030__$1)){
var child_node_42031 = temp__5753__auto___42030__$1;
children_map.set(child_node_42031.key,child_node_42031);
} else {
}


var G__42032 = cljs.core.next(seq__41865_42021__$1);
var G__42033 = null;
var G__42034 = (0);
var G__42035 = (0);
seq__41865_42007 = G__42032;
chunk__41866_42008 = G__42033;
count__41867_42009 = G__42034;
i__41868_42010 = G__42035;
continue;
}
} else {
}
}
break;
}

return node;
}));
threeagent.impl.virtual_scene.__GT_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"context","context",-830191113),(function (scene,context,parent,key,p__41906){
var vec__41907 = p__41906;
var seq__41908 = cljs.core.seq(vec__41907);
var first__41909 = cljs.core.first(seq__41908);
var seq__41908__$1 = cljs.core.next(seq__41908);
var subcontext = first__41909;
var rest = seq__41908__$1;
return threeagent.impl.virtual_scene.__GT_node.cljs$core$IFn$_invoke$arity$5(scene,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([context,subcontext], 0)),parent,key,rest);
}));
threeagent.impl.virtual_scene.__GT_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"seq","seq",-1817803783),(function (scene,context,parent,key,form){
return threeagent.impl.virtual_scene.__GT_node.cljs$core$IFn$_invoke$arity$5(scene,context,parent,key,cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949)], null),form),cljs.core.meta(form)));
}));
threeagent.impl.virtual_scene.__GT_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"keyword","keyword",811389747),(function (scene,context,parent,key,form){
var vec__41910 = form;
var seq__41911 = cljs.core.seq(vec__41910);
var first__41912 = cljs.core.first(seq__41911);
var seq__41911__$1 = cljs.core.next(seq__41911);
var comp_key = first__41912;
var rs = seq__41911__$1;
var first_child = cljs.core.first(rs);
var metadata = cljs.core.meta(form);
var key__$1 = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(metadata);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return key;
}
})();
var comp_config = ((cljs.core.map_QMARK_(first_child))?first_child:cljs.core.PersistentArrayMap.EMPTY);
var children = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,((cljs.core.map_QMARK_(first_child))?cljs.core.rest(rs):rs));
var children_map = (new Map());
var data = threeagent.impl.virtual_scene.node_data(comp_key,comp_config);
var depth = (cljs.core.truth_(parent)?(parent.depth + (1)):(0));
var node = (new threeagent.impl.virtual_scene.Node(context,parent,depth,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(comp_config),key__$1,metadata,data,false,null,null,children_map,null));
if((!(((typeof key__$1 === 'string') || (typeof key__$1 === 'number'))))){
throw ["^:key must be a string or number, found: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)].join('');
} else {
}

var seq__41913_42036 = cljs.core.seq(medley.core.indexed.cljs$core$IFn$_invoke$arity$1(children));
var chunk__41914_42037 = null;
var count__41915_42038 = (0);
var i__41916_42039 = (0);
while(true){
if((i__41916_42039 < count__41915_42038)){
var vec__41923_42040 = chunk__41914_42037.cljs$core$IIndexed$_nth$arity$2(null,i__41916_42039);
var idx_42041 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41923_42040,(0),null);
var child_42042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41923_42040,(1),null);
var temp__5753__auto___42043 = threeagent.impl.virtual_scene.__GT_node.cljs$core$IFn$_invoke$arity$5(scene,context,node,idx_42041,child_42042);
if(cljs.core.truth_(temp__5753__auto___42043)){
var child_node_42044 = temp__5753__auto___42043;
children_map.set(child_node_42044.key,child_node_42044);
} else {
}


var G__42045 = seq__41913_42036;
var G__42046 = chunk__41914_42037;
var G__42047 = count__41915_42038;
var G__42048 = (i__41916_42039 + (1));
seq__41913_42036 = G__42045;
chunk__41914_42037 = G__42046;
count__41915_42038 = G__42047;
i__41916_42039 = G__42048;
continue;
} else {
var temp__5753__auto___42049 = cljs.core.seq(seq__41913_42036);
if(temp__5753__auto___42049){
var seq__41913_42050__$1 = temp__5753__auto___42049;
if(cljs.core.chunked_seq_QMARK_(seq__41913_42050__$1)){
var c__4679__auto___42051 = cljs.core.chunk_first(seq__41913_42050__$1);
var G__42052 = cljs.core.chunk_rest(seq__41913_42050__$1);
var G__42053 = c__4679__auto___42051;
var G__42054 = cljs.core.count(c__4679__auto___42051);
var G__42055 = (0);
seq__41913_42036 = G__42052;
chunk__41914_42037 = G__42053;
count__41915_42038 = G__42054;
i__41916_42039 = G__42055;
continue;
} else {
var vec__41926_42056 = cljs.core.first(seq__41913_42050__$1);
var idx_42057 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41926_42056,(0),null);
var child_42058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41926_42056,(1),null);
var temp__5753__auto___42059__$1 = threeagent.impl.virtual_scene.__GT_node.cljs$core$IFn$_invoke$arity$5(scene,context,node,idx_42057,child_42058);
if(cljs.core.truth_(temp__5753__auto___42059__$1)){
var child_node_42060 = temp__5753__auto___42059__$1;
children_map.set(child_node_42060.key,child_node_42060);
} else {
}


var G__42061 = cljs.core.next(seq__41913_42050__$1);
var G__42062 = null;
var G__42063 = (0);
var G__42064 = (0);
seq__41913_42036 = G__42061;
chunk__41914_42037 = G__42062;
count__41915_42038 = G__42063;
i__41916_42039 = G__42064;
continue;
}
} else {
}
}
break;
}

return node;
}));
threeagent.impl.virtual_scene.fn__GT_render_fn = (function threeagent$impl$virtual_scene$fn__GT_render_fn(original_meta,f){
return (function() { 
var G__42065__delegate = function (args){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args)], null),original_meta);
};
var G__42065 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42066__i = 0, G__42066__a = new Array(arguments.length -  0);
while (G__42066__i < G__42066__a.length) {G__42066__a[G__42066__i] = arguments[G__42066__i + 0]; ++G__42066__i;}
  args = new cljs.core.IndexedSeq(G__42066__a,0,null);
} 
return G__42065__delegate.call(this,args);};
G__42065.cljs$lang$maxFixedArity = 0;
G__42065.cljs$lang$applyTo = (function (arglist__42067){
var args = cljs.core.seq(arglist__42067);
return G__42065__delegate(args);
});
G__42065.cljs$core$IFn$_invoke$arity$variadic = G__42065__delegate;
return G__42065;
})()
;
});
threeagent.impl.virtual_scene.__GT_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (scene,context,parent,key,form){
var key__$1 = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return key;
}
})();
var vec__41929 = form;
var seq__41930 = cljs.core.seq(vec__41929);
var first__41931 = cljs.core.first(seq__41930);
var seq__41930__$1 = cljs.core.next(seq__41930);
var f = first__41931;
var args = seq__41930__$1;
var original_meta = cljs.core.meta(form);
var outer_reaction_ctx = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"scene","scene",1523800415),null,new cljs.core.Keyword(null,"node","node",581201198),null,new cljs.core.Keyword(null,"reaction","reaction",490869788),null,new cljs.core.Keyword(null,"forceReplace","forceReplace",-425526379),false], null));
var inner_reaction_ctx = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scene","scene",1523800415),null,new cljs.core.Keyword(null,"node","node",581201198),null,new cljs.core.Keyword(null,"reaction","reaction",490869788),null], null));
var outer_render_fn = threeagent.impl.virtual_scene.fn__GT_render_fn(original_meta,f);
var outer_result = reagent.ratom.run_in_reaction((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}),outer_reaction_ctx,"reaction",cljs.core.partial.cljs$core$IFn$_invoke$arity$2(threeagent.impl.virtual_scene.on_react_BANG_,outer_render_fn),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-cache","no-cache",1588056370),true], null));
var inner_render_fn = ((cljs.core.fn_QMARK_(outer_result))?threeagent.impl.virtual_scene.fn__GT_render_fn(original_meta,outer_result):null);
var inner_result = ((cljs.core.fn_QMARK_(outer_result))?reagent.ratom.run_in_reaction((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(outer_result,args);
}),inner_reaction_ctx,"reaction",cljs.core.partial.cljs$core$IFn$_invoke$arity$2(threeagent.impl.virtual_scene.on_react_BANG_,inner_render_fn),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-cache","no-cache",1588056370),true], null)):null);
var default_render_fn = (function (){var or__4253__auto__ = inner_render_fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return outer_render_fn;
}
})();
var result = (function (){var or__4253__auto__ = inner_result;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return outer_result;
}
})();
var node = threeagent.impl.virtual_scene.__GT_node.cljs$core$IFn$_invoke$arity$5(scene,context,parent,key__$1,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),result], null),original_meta));
if(cljs.core.truth_(inner_render_fn)){
(outer_reaction_ctx.forceReplace = true);
} else {
}

(node.originalFn = f);

(node.defaultRenderFn = default_render_fn);

(node.form = form);

(node.lastForm = form);

(node.reactions = []);

var temp__5753__auto___42075 = outer_reaction_ctx.reaction;
if(cljs.core.truth_(temp__5753__auto___42075)){
var reaction_42076 = temp__5753__auto___42075;
(outer_reaction_ctx.scene = scene);

(outer_reaction_ctx.node = node);

node.reactions.push(reaction_42076);
} else {
}

var temp__5753__auto___42077 = inner_reaction_ctx.reaction;
if(cljs.core.truth_(temp__5753__auto___42077)){
var reaction_42078 = temp__5753__auto___42077;
(inner_reaction_ctx.scene = scene);

(inner_reaction_ctx.node = node);

node.reactions.push(reaction_42078);
} else {
}

return node;
}));
if((typeof threeagent !== 'undefined') && (typeof threeagent.impl !== 'undefined') && (typeof threeagent.impl.virtual_scene !== 'undefined') && (typeof threeagent.impl.virtual_scene.__GT_node_shallow !== 'undefined')){
} else {
threeagent.impl.virtual_scene.__GT_node_shallow = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__41932 = cljs.core.get_global_hierarchy;
return (fexpr__41932.cljs$core$IFn$_invoke$arity$0 ? fexpr__41932.cljs$core$IFn$_invoke$arity$0() : fexpr__41932.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("threeagent.impl.virtual-scene","->node-shallow"),(function (_key,_context,p__41933){
var vec__41934 = p__41933;
var seq__41935 = cljs.core.seq(vec__41934);
var first__41936 = cljs.core.first(seq__41935);
var seq__41935__$1 = cljs.core.next(seq__41935);
var l = first__41936;
var r = seq__41935__$1;
if(cljs.core.fn_QMARK_(l)){
return new cljs.core.Keyword(null,"fn","fn",-1175266204);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,">",">",-555517146),l)){
return new cljs.core.Keyword(null,"portal","portal",2002989957);
} else {
if((l instanceof cljs.core.Keyword)){
return new cljs.core.Keyword(null,"keyword","keyword",811389747);
} else {
if(cljs.core.map_QMARK_(l)){
return new cljs.core.Keyword(null,"context","context",-830191113);
} else {
if(cljs.core.sequential_QMARK_(l)){
return new cljs.core.Keyword(null,"seq","seq",-1817803783);
} else {
if((((l == null)) && ((r == null)))){
return new cljs.core.Keyword(null,"empty-list","empty-list",-1865196089);
} else {
return null;

}
}
}
}
}
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
threeagent.impl.virtual_scene.__GT_node_shallow.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"empty-list","empty-list",-1865196089),(function (_key,_context,_form){
return null;
}));
threeagent.impl.virtual_scene.__GT_node_shallow.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"context","context",-830191113),(function (key,context,p__41937){
var vec__41938 = p__41937;
var seq__41939 = cljs.core.seq(vec__41938);
var first__41940 = cljs.core.first(seq__41939);
var seq__41939__$1 = cljs.core.next(seq__41939);
var subcontext = first__41940;
var rest = seq__41939__$1;
return threeagent.impl.virtual_scene.__GT_node_shallow.cljs$core$IFn$_invoke$arity$3(key,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([context,subcontext], 0)),rest);
}));
threeagent.impl.virtual_scene.__GT_node_shallow.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (key,context,form){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"context","context",-830191113),context,new cljs.core.Keyword(null,"data","data",-232669377),threeagent.impl.virtual_scene.node_data(new cljs.core.Keyword(null,"object","object",1474613949),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"children-keys","children-keys",-1531120807),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),form], null)], null)], null);
}));
threeagent.impl.virtual_scene.__GT_node_shallow.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"seq","seq",-1817803783),(function (key,context,form){
if(cljs.core.empty_QMARK_(form)){
return null;
} else {
var m = cljs.core.meta(form);
return threeagent.impl.virtual_scene.__GT_node_shallow.cljs$core$IFn$_invoke$arity$3(threeagent.impl.virtual_scene.get_key(key,m),context,cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949)], null),form),m));
}
}));
threeagent.impl.virtual_scene.valid_child_QMARK_ = (function threeagent$impl$virtual_scene$valid_child_QMARK_(child){
return (((!((child == null)))) && (cljs.core.seq(child)));
});
threeagent.impl.virtual_scene.__GT_node_shallow.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"portal","portal",2002989957),(function (key,context,p__41943){
var vec__41944 = p__41943;
var seq__41945 = cljs.core.seq(vec__41944);
var first__41946 = cljs.core.first(seq__41945);
var seq__41945__$1 = cljs.core.next(seq__41945);
var _ = first__41946;
var first__41946__$1 = cljs.core.first(seq__41945__$1);
var seq__41945__$2 = cljs.core.next(seq__41945__$1);
var path = first__41946__$1;
var children = seq__41945__$2;
var form = vec__41944;
var children__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(threeagent.impl.virtual_scene.valid_child_QMARK_,children);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"context","context",-830191113),context,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"portal-path","portal-path",1722169330),path,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"children-keys","children-keys",-1531120807),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__41942_SHARP_,p2__41941_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p2__41941_SHARP_));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return p1__41942_SHARP_;
}
})(),p2__41941_SHARP_],null));
}),children__$1)], null);
}));
threeagent.impl.virtual_scene.__GT_node_shallow.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"keyword","keyword",811389747),(function (key,context,form){
var vec__41949 = form;
var seq__41950 = cljs.core.seq(vec__41949);
var first__41951 = cljs.core.first(seq__41950);
var seq__41950__$1 = cljs.core.next(seq__41950);
var comp_key = first__41951;
var rs = seq__41950__$1;
var first_child = cljs.core.first(rs);
var comp_config = ((cljs.core.map_QMARK_(first_child))?first_child:cljs.core.PersistentArrayMap.EMPTY);
var children = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(threeagent.impl.virtual_scene.valid_child_QMARK_,((cljs.core.map_QMARK_(first_child))?cljs.core.rest(rs):rs));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"context","context",-830191113),context,new cljs.core.Keyword(null,"data","data",-232669377),threeagent.impl.virtual_scene.node_data(comp_key,comp_config),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"children-keys","children-keys",-1531120807),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__41948_SHARP_,p2__41947_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p2__41947_SHARP_));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return p1__41948_SHARP_;
}
})(),p2__41947_SHARP_],null));
}),children)], null);
}));
threeagent.impl.virtual_scene.dispose_node_BANG_ = (function threeagent$impl$virtual_scene$dispose_node_BANG_(node){
(node.disposed = true);

var temp__5753__auto___42098 = node.reactions;
if(cljs.core.truth_(temp__5753__auto___42098)){
var reactions_42099 = temp__5753__auto___42098;
var seq__41952_42100 = cljs.core.seq(reactions_42099);
var chunk__41953_42101 = null;
var count__41954_42102 = (0);
var i__41955_42103 = (0);
while(true){
if((i__41955_42103 < count__41954_42102)){
var r_42104 = chunk__41953_42101.cljs$core$IIndexed$_nth$arity$2(null,i__41955_42103);
reagent.ratom.dispose_BANG_(r_42104);


var G__42105 = seq__41952_42100;
var G__42106 = chunk__41953_42101;
var G__42107 = count__41954_42102;
var G__42108 = (i__41955_42103 + (1));
seq__41952_42100 = G__42105;
chunk__41953_42101 = G__42106;
count__41954_42102 = G__42107;
i__41955_42103 = G__42108;
continue;
} else {
var temp__5753__auto___42109__$1 = cljs.core.seq(seq__41952_42100);
if(temp__5753__auto___42109__$1){
var seq__41952_42110__$1 = temp__5753__auto___42109__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41952_42110__$1)){
var c__4679__auto___42111 = cljs.core.chunk_first(seq__41952_42110__$1);
var G__42112 = cljs.core.chunk_rest(seq__41952_42110__$1);
var G__42113 = c__4679__auto___42111;
var G__42114 = cljs.core.count(c__4679__auto___42111);
var G__42115 = (0);
seq__41952_42100 = G__42112;
chunk__41953_42101 = G__42113;
count__41954_42102 = G__42114;
i__41955_42103 = G__42115;
continue;
} else {
var r_42119 = cljs.core.first(seq__41952_42110__$1);
reagent.ratom.dispose_BANG_(r_42119);


var G__42120 = cljs.core.next(seq__41952_42110__$1);
var G__42121 = null;
var G__42122 = (0);
var G__42123 = (0);
seq__41952_42100 = G__42120;
chunk__41953_42101 = G__42121;
count__41954_42102 = G__42122;
i__41955_42103 = G__42123;
continue;
}
} else {
}
}
break;
}
} else {
}

return node.for_each_child(threeagent.impl.virtual_scene.dispose_node_BANG_);
});
threeagent.impl.virtual_scene.add_node_BANG_ = (function threeagent$impl$virtual_scene$add_node_BANG_(scene,context,parent_node,key,form,changelog){
var temp__5753__auto__ = threeagent.impl.virtual_scene.__GT_node.cljs$core$IFn$_invoke$arity$5(scene,context,parent_node,key,form);
if(cljs.core.truth_(temp__5753__auto__)){
var node = temp__5753__auto__;
changelog.push(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,new cljs.core.Keyword(null,"add","add",235287739),null,node.data], null));

return node;
} else {
return null;
}
});
threeagent.impl.virtual_scene.remove_node_BANG_ = (function threeagent$impl$virtual_scene$remove_node_BANG_(node,changelog){
changelog.push(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,new cljs.core.Keyword(null,"remove","remove",-131428414),node.data,null], null));

(node.dirty = false);

return threeagent.impl.virtual_scene.dispose_node_BANG_(node);
});
threeagent.impl.virtual_scene.replace_node_BANG_ = (function threeagent$impl$virtual_scene$replace_node_BANG_(scene,node,new_form,changelog){
var parent = node.parent;
var context = (cljs.core.truth_(parent)?parent.context:cljs.core.PersistentArrayMap.EMPTY);
var key = node.key;
threeagent.impl.virtual_scene.remove_node_BANG_(node,changelog);

var new_node = threeagent.impl.virtual_scene.add_node_BANG_(scene,context,parent,key,new_form,changelog);
return parent.children.set(key,new_node);
});
threeagent.impl.virtual_scene.diff_fn_QMARK_ = (function threeagent$impl$virtual_scene$diff_fn_QMARK_(node,new_form){
var original_fn = node.originalFn;
return (((!((original_fn == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(original_fn,cljs.core.first(new_form))));
});
threeagent.impl.virtual_scene.same_args_QMARK_ = (function threeagent$impl$virtual_scene$same_args_QMARK_(node,new_form){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node.lastForm,new_form);
});
threeagent.impl.virtual_scene.update_child_node_BANG_ = (function threeagent$impl$virtual_scene$update_child_node_BANG_(scene,node,new_form,changelog){
if(threeagent.impl.virtual_scene.diff_fn_QMARK_(node,new_form)){
return threeagent.impl.virtual_scene.replace_node_BANG_(scene,node,new_form,changelog);
} else {
var render_fn = node.defaultRenderFn;
return (threeagent.impl.virtual_scene.update_node_BANG_.cljs$core$IFn$_invoke$arity$6 ? threeagent.impl.virtual_scene.update_node_BANG_.cljs$core$IFn$_invoke$arity$6(scene,node,new_form,render_fn,changelog,false) : threeagent.impl.virtual_scene.update_node_BANG_.call(null,scene,node,new_form,render_fn,changelog,false));
}
});
threeagent.impl.virtual_scene.update_node_BANG_ = (function threeagent$impl$virtual_scene$update_node_BANG_(scene,node,new_form,render_fn,changelog,force_rerender_QMARK_){
if(cljs.core.truth_((function (){var or__4253__auto__ = force_rerender_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (!(threeagent.impl.virtual_scene.same_args_QMARK_(node,new_form)));
}
})())){
var key = node.key;
var children = node.children;
var parent = node.parent;
var old_data = node.data;
var old_context = node.context;
var old_portal_path = node.portalPath;
var parent_context = (cljs.core.truth_(parent)?parent.context:cljs.core.PersistentArrayMap.EMPTY);
var current_keys = cljs.core.set(cljs.core.es6_iterator_seq(children.keys()));
var rendered_form = (cljs.core.truth_(render_fn)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn,cljs.core.rest(new_form)):new_form);
var shallow_node = threeagent.impl.virtual_scene.__GT_node_shallow.cljs$core$IFn$_invoke$arity$3(key,parent_context,rendered_form);
var map__41956 = shallow_node;
var map__41956__$1 = cljs.core.__destructure_map(map__41956);
var new_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41956__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var children_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41956__$1,new cljs.core.Keyword(null,"children-keys","children-keys",-1531120807));
var new_portal_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41956__$1,new cljs.core.Keyword(null,"portal-path","portal-path",1722169330));
var new_context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41956__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var new_keys = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,children_keys));
var dropped_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(current_keys,new_keys);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_context,old_context)){
return threeagent.impl.virtual_scene.replace_node_BANG_(scene,node,new_form,changelog);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_portal_path,old_portal_path)){
return threeagent.impl.virtual_scene.replace_node_BANG_(scene,node,new_form,changelog);
} else {
(node.data = new_data);

(node.meta = cljs.core.meta(new_form));

(node.lastForm = new_form);

changelog.push(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,new cljs.core.Keyword(null,"update","update",1045576396),old_data,new_data], null));

var seq__41957_42134 = cljs.core.seq(dropped_keys);
var chunk__41958_42135 = null;
var count__41959_42136 = (0);
var i__41960_42137 = (0);
while(true){
if((i__41960_42137 < count__41959_42136)){
var child_key_42138 = chunk__41958_42135.cljs$core$IIndexed$_nth$arity$2(null,i__41960_42137);
var child_node_42139 = children.get(child_key_42138);
threeagent.impl.virtual_scene.remove_node_BANG_(child_node_42139,changelog);

children.delete(child_key_42138);


var G__42143 = seq__41957_42134;
var G__42144 = chunk__41958_42135;
var G__42145 = count__41959_42136;
var G__42146 = (i__41960_42137 + (1));
seq__41957_42134 = G__42143;
chunk__41958_42135 = G__42144;
count__41959_42136 = G__42145;
i__41960_42137 = G__42146;
continue;
} else {
var temp__5753__auto___42147 = cljs.core.seq(seq__41957_42134);
if(temp__5753__auto___42147){
var seq__41957_42148__$1 = temp__5753__auto___42147;
if(cljs.core.chunked_seq_QMARK_(seq__41957_42148__$1)){
var c__4679__auto___42149 = cljs.core.chunk_first(seq__41957_42148__$1);
var G__42150 = cljs.core.chunk_rest(seq__41957_42148__$1);
var G__42151 = c__4679__auto___42149;
var G__42152 = cljs.core.count(c__4679__auto___42149);
var G__42153 = (0);
seq__41957_42134 = G__42150;
chunk__41958_42135 = G__42151;
count__41959_42136 = G__42152;
i__41960_42137 = G__42153;
continue;
} else {
var child_key_42154 = cljs.core.first(seq__41957_42148__$1);
var child_node_42155 = children.get(child_key_42154);
threeagent.impl.virtual_scene.remove_node_BANG_(child_node_42155,changelog);

children.delete(child_key_42154);


var G__42156 = cljs.core.next(seq__41957_42148__$1);
var G__42157 = null;
var G__42158 = (0);
var G__42159 = (0);
seq__41957_42134 = G__42156;
chunk__41958_42135 = G__42157;
count__41959_42136 = G__42158;
i__41960_42137 = G__42159;
continue;
}
} else {
}
}
break;
}

var seq__41961 = cljs.core.seq(new cljs.core.Keyword(null,"children-keys","children-keys",-1531120807).cljs$core$IFn$_invoke$arity$1(shallow_node));
var chunk__41962 = null;
var count__41963 = (0);
var i__41964 = (0);
while(true){
if((i__41964 < count__41963)){
var vec__41971 = chunk__41962.cljs$core$IIndexed$_nth$arity$2(null,i__41964);
var child_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41971,(0),null);
var child_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41971,(1),null);
var temp__5751__auto___42163 = children.get(child_key);
if(cljs.core.truth_(temp__5751__auto___42163)){
var child_42164 = temp__5751__auto___42163;
threeagent.impl.virtual_scene.update_child_node_BANG_(scene,child_42164,child_form,changelog);
} else {
var temp__5753__auto___42165 = threeagent.impl.virtual_scene.add_node_BANG_(scene,old_context,node,child_key,child_form,changelog);
if(cljs.core.truth_(temp__5753__auto___42165)){
var child_node_42166 = temp__5753__auto___42165;
children.set(child_key,child_node_42166);
} else {
}
}


var G__42167 = seq__41961;
var G__42168 = chunk__41962;
var G__42169 = count__41963;
var G__42170 = (i__41964 + (1));
seq__41961 = G__42167;
chunk__41962 = G__42168;
count__41963 = G__42169;
i__41964 = G__42170;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__41961);
if(temp__5753__auto__){
var seq__41961__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41961__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__41961__$1);
var G__42174 = cljs.core.chunk_rest(seq__41961__$1);
var G__42175 = c__4679__auto__;
var G__42176 = cljs.core.count(c__4679__auto__);
var G__42177 = (0);
seq__41961 = G__42174;
chunk__41962 = G__42175;
count__41963 = G__42176;
i__41964 = G__42177;
continue;
} else {
var vec__41974 = cljs.core.first(seq__41961__$1);
var child_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41974,(0),null);
var child_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41974,(1),null);
var temp__5751__auto___42178 = children.get(child_key);
if(cljs.core.truth_(temp__5751__auto___42178)){
var child_42179 = temp__5751__auto___42178;
threeagent.impl.virtual_scene.update_child_node_BANG_(scene,child_42179,child_form,changelog);
} else {
var temp__5753__auto___42180__$1 = threeagent.impl.virtual_scene.add_node_BANG_(scene,old_context,node,child_key,child_form,changelog);
if(cljs.core.truth_(temp__5753__auto___42180__$1)){
var child_node_42181 = temp__5753__auto___42180__$1;
children.set(child_key,child_node_42181);
} else {
}
}


var G__42182 = cljs.core.next(seq__41961__$1);
var G__42183 = null;
var G__42184 = (0);
var G__42185 = (0);
seq__41961 = G__42182;
chunk__41962 = G__42183;
count__41963 = G__42184;
i__41964 = G__42185;
continue;
}
} else {
return null;
}
}
break;
}

}
}
} else {
return null;
}
});
threeagent.impl.virtual_scene.render_node_BANG_ = (function threeagent$impl$virtual_scene$render_node_BANG_(scene,node,render_fn,force_replace_QMARK_,changelog){
var new_form = node.form;
if(cljs.core.truth_((function (){var or__4253__auto__ = force_replace_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return threeagent.impl.virtual_scene.diff_fn_QMARK_(node,new_form);
}
})())){
(node.dirty = false);

return threeagent.impl.virtual_scene.replace_node_BANG_(scene,node,new_form,changelog);
} else {
(node.dirty = false);

return threeagent.impl.virtual_scene.update_node_BANG_(scene,node,new_form,render_fn,changelog,true);
}
});
threeagent.impl.virtual_scene.render_BANG_ = (function threeagent$impl$virtual_scene$render_BANG_(scene,changelog){
reagent.core.flush();

var queue = scene.renderQueue;
var entry = queue.dequeue();
while(true){
if(cljs.core.truth_(entry)){
var temp__5753__auto__ = entry.node;
if(cljs.core.truth_(temp__5753__auto__)){
var node = temp__5753__auto__;
if(cljs.core.truth_(node.disposed)){
} else {
threeagent.impl.virtual_scene.render_node_BANG_(scene,node,entry.renderFn,entry.forceReplace,changelog);
}

var G__42186 = queue.dequeue();
entry = G__42186;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
});
threeagent.impl.virtual_scene.destroy_BANG_ = (function threeagent$impl$virtual_scene$destroy_BANG_(scene){
return threeagent.impl.virtual_scene.dispose_node_BANG_(scene.root);
});
threeagent.impl.virtual_scene.create = (function threeagent$impl$virtual_scene$create(root_fn){
var scene = (new threeagent.impl.virtual_scene.Scene(null,(new goog.structs.PriorityQueue())));
var root_node = threeagent.impl.virtual_scene.__GT_node.cljs$core$IFn$_invoke$arity$5(scene,cljs.core.PersistentArrayMap.EMPTY,null,(0),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [root_fn], null));
(scene.root = root_node);

return scene;
});

//# sourceMappingURL=threeagent.impl.virtual_scene.js.map
