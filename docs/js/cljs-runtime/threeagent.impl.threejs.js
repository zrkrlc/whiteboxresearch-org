goog.provide('threeagent.impl.threejs');
var module$node_modules$three$build$three=shadow.js.require("module$node_modules$three$build$three", {});
threeagent.impl.threejs.mesh_phong_material = (function threeagent$impl$threejs$mesh_phong_material(c){
return (new module$node_modules$three$build$three.MeshPhongMaterial(cljs.core.clj__GT_js(c)));
});
threeagent.impl.threejs.euler = (function threeagent$impl$threejs$euler(x,y,z){
return (new module$node_modules$three$build$three.Euler(x,y,z,"XYZ"));
});
threeagent.impl.threejs.set_position_BANG_ = (function threeagent$impl$threejs$set_position_BANG_(obj,p__41621){
var vec__41622 = p__41621;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41622,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41622,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41622,(2),null);
obj.position.set(x,y,z);

return obj;
});
threeagent.impl.threejs.set_rotation_BANG_ = (function threeagent$impl$threejs$set_rotation_BANG_(obj,p__41625){
var vec__41626 = p__41625;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41626,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41626,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41626,(2),null);
obj.setRotationFromEuler(threeagent.impl.threejs.euler(x,y,z));

return obj;
});
threeagent.impl.threejs.set_scale_BANG_ = (function threeagent$impl$threejs$set_scale_BANG_(obj,p__41629){
var vec__41630 = p__41629;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41630,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41630,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41630,(2),null);
obj.scale.set(x,y,z);

return obj;
});
threeagent.impl.threejs.set_cast_shadow_BANG_ = (function threeagent$impl$threejs$set_cast_shadow_BANG_(obj,_QMARK_true){
(obj.castShadow = _QMARK_true);

return obj;
});
threeagent.impl.threejs.set_receive_shadow_BANG_ = (function threeagent$impl$threejs$set_receive_shadow_BANG_(obj,_QMARK_true){
(obj.receiveShadow = _QMARK_true);

return obj;
});
threeagent.impl.threejs.add_child_BANG_ = (function threeagent$impl$threejs$add_child_BANG_(parent,child){
return parent.add(child);
});
threeagent.impl.threejs.remove_child_BANG_ = (function threeagent$impl$threejs$remove_child_BANG_(parent,child){
return parent.remove(child);
});
threeagent.impl.threejs.remove_all_children_BANG_ = (function threeagent$impl$threejs$remove_all_children_BANG_(parent){
var iter__4652__auto___41660 = (function threeagent$impl$threejs$remove_all_children_BANG__$_iter__41638(s__41639){
return (new cljs.core.LazySeq(null,(function (){
var s__41639__$1 = s__41639;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__41639__$1);
if(temp__5753__auto__){
var s__41639__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41639__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__41639__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__41641 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__41640 = (0);
while(true){
if((i__41640 < size__4651__auto__)){
var c = cljs.core._nth(c__4650__auto__,i__41640);
cljs.core.chunk_append(b__41641,threeagent.impl.threejs.remove_child_BANG_(parent,c));

var G__41666 = (i__41640 + (1));
i__41640 = G__41666;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41641),threeagent$impl$threejs$remove_all_children_BANG__$_iter__41638(cljs.core.chunk_rest(s__41639__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41641),null);
}
} else {
var c = cljs.core.first(s__41639__$2);
return cljs.core.cons(threeagent.impl.threejs.remove_child_BANG_(parent,c),threeagent$impl$threejs$remove_all_children_BANG__$_iter__41638(cljs.core.rest(s__41639__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
iter__4652__auto___41660(parent.children);

return parent;
});
threeagent.impl.threejs.get_in = (function threeagent$impl$threejs$get_in(parent,path){
while(true){
if(cljs.core.seq(path)){
var next = cljs.core.first(path);
if(typeof next === 'string'){
var G__41670 = parent.getObjectByName(next);
var G__41671 = cljs.core.rest(path);
parent = G__41670;
path = G__41671;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"..","..",-1941038947),next)){
var G__41672 = parent.parent;
var G__41673 = cljs.core.rest(path);
parent = G__41672;
path = G__41673;
continue;
} else {
var G__41674 = (parent.children[next]);
var G__41675 = cljs.core.rest(path);
parent = G__41674;
path = G__41675;
continue;
}
}
} else {
return parent;
}
break;
}
});

//# sourceMappingURL=threeagent.impl.threejs.js.map
