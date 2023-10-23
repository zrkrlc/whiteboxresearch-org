goog.provide('threeagent.impl.scene');
var module$node_modules$three$build$three=shadow.js.require("module$node_modules$three$build$three", {});
if((typeof threeagent !== 'undefined') && (typeof threeagent.impl !== 'undefined') && (typeof threeagent.impl.scene !== 'undefined') && (typeof threeagent.impl.scene.contexts !== 'undefined')){
} else {
threeagent.impl.scene.contexts = [];
}
threeagent.impl.scene.raw_context__GT_context = (function threeagent$impl$scene$raw_context__GT_context(raw_ctx){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"threejs-renderer","threejs-renderer",468746733),raw_ctx.renderer,new cljs.core.Keyword(null,"threejs-scene","threejs-scene",754266515),raw_ctx.sceneRoot,new cljs.core.Keyword(null,"threejs-default-camera","threejs-default-camera",589639313),raw_ctx.defaultCamera,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),raw_ctx.canvas], null);
});
threeagent.impl.scene.in_place_update_QMARK_ = (function threeagent$impl$scene$in_place_update_QMARK_(ctx,node){
var entity_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ctx.entityTypes,new cljs.core.Keyword(null,"component-key","component-key",1189239034).cljs$core$IFn$_invoke$arity$1(node.data));
if((!((entity_type == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === entity_type.threeagent$entity$IUpdateableEntityType$)))){
return true;
} else {
if((!entity_type.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(threeagent.entity.IUpdateableEntityType,entity_type);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(threeagent.entity.IUpdateableEntityType,entity_type);
}
});
threeagent.impl.scene.portal_QMARK_ = (function threeagent$impl$scene$portal_QMARK_(node){
return (!((node.portalPath == null)));
});
threeagent.impl.scene.on_entity_removed = (function threeagent$impl$scene$on_entity_removed(ctx,node,old_obj,old_component_config){
var temp__5753__auto___42426 = new cljs.core.Keyword(null,"on-removed","on-removed",-1308728142).cljs$core$IFn$_invoke$arity$1(node.meta);
if(cljs.core.truth_(temp__5753__auto___42426)){
var callback_42427 = temp__5753__auto___42426;
(callback_42427.cljs$core$IFn$_invoke$arity$1 ? callback_42427.cljs$core$IFn$_invoke$arity$1(old_obj) : callback_42427.call(null,old_obj));
} else {
}

var temp__5753__auto___42428 = new cljs.core.Keyword(null,"on-removed","on-removed",-1308728142).cljs$core$IFn$_invoke$arity$1(old_component_config);
if(cljs.core.truth_(temp__5753__auto___42428)){
var on_removed_42429 = temp__5753__auto___42428;
(on_removed_42429.cljs$core$IFn$_invoke$arity$1 ? on_removed_42429.cljs$core$IFn$_invoke$arity$1(old_obj) : on_removed_42429.call(null,old_obj));
} else {
}

var callbacks = threeagent.impl.system.dispatch_on_removed(ctx,node.context,node.id,old_obj,old_component_config);
if(cljs.core.truth_(old_obj.isCamera)){
if(cljs.core.truth_(old_obj.active)){
(ctx.camera = ctx.lastCamera);
} else {
}

var cams_42431 = ctx.cameras;
cams_42431.splice(cams_42431.indexOf(old_obj),(1));
} else {
}

return callbacks;
});
threeagent.impl.scene.on_entity_added = (function threeagent$impl$scene$on_entity_added(ctx,node,obj,component_config){
var temp__5753__auto___42432 = new cljs.core.Keyword(null,"on-added","on-added",-54041858).cljs$core$IFn$_invoke$arity$1(node.meta);
if(cljs.core.truth_(temp__5753__auto___42432)){
var callback_42433 = temp__5753__auto___42432;
(callback_42433.cljs$core$IFn$_invoke$arity$1 ? callback_42433.cljs$core$IFn$_invoke$arity$1(obj) : callback_42433.call(null,obj));
} else {
}

var temp__5753__auto___42435 = new cljs.core.Keyword(null,"on-added","on-added",-54041858).cljs$core$IFn$_invoke$arity$1(component_config);
if(cljs.core.truth_(temp__5753__auto___42435)){
var on_added_42436 = temp__5753__auto___42435;
(on_added_42436.cljs$core$IFn$_invoke$arity$1 ? on_added_42436.cljs$core$IFn$_invoke$arity$1(obj) : on_added_42436.call(null,obj));
} else {
}

var temp__5753__auto___42437 = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(component_config);
if(cljs.core.truth_(temp__5753__auto___42437)){
var ref_42438 = temp__5753__auto___42437;
(ref_42438.cljs$core$IFn$_invoke$arity$1 ? ref_42438.cljs$core$IFn$_invoke$arity$1(obj) : ref_42438.call(null,obj));
} else {
}

var callbacks = threeagent.impl.system.dispatch_on_added(ctx,node.context,node.id,obj,component_config);
if(cljs.core.truth_(obj.isCamera)){
if(cljs.core.truth_(obj.active)){
(ctx.lastCamera = ctx.camera);

(ctx.camera = obj);
} else {
}

ctx.cameras.push(obj);
} else {
}

return callbacks;
});
threeagent.impl.scene.create_entity_object = (function threeagent$impl$scene$create_entity_object(ctx,node){
var map__42380 = node.data;
var map__42380__$1 = cljs.core.__destructure_map(map__42380);
var component_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42380__$1,new cljs.core.Keyword(null,"component-config","component-config",2000790546));
var component_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42380__$1,new cljs.core.Keyword(null,"component-key","component-key",1189239034));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42380__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var rotation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42380__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42380__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ctx.entityTypes,component_key);
if(cljs.core.truth_(temp__5751__auto__)){
var entity_type = temp__5751__auto__;
var obj = threeagent.entity.create(entity_type,node.context,component_config);
threeagent.impl.threejs.set_position_BANG_(obj,position);

threeagent.impl.threejs.set_rotation_BANG_(obj,rotation);

threeagent.impl.threejs.set_scale_BANG_(obj,scale);

return obj;
} else {
throw (new Error(["Cannot find entity-type for keyword '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_key),"'"].join(''),node));
}
});
threeagent.impl.scene.resolve_portal_object = (function threeagent$impl$scene$resolve_portal_object(default_parent,node){
var path = node.portalPath;
var parent = threeagent.impl.threejs.get_in(default_parent,path);
if(cljs.core.truth_(parent)){
} else {
console.error(["Invalid portal path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join(''),default_parent);

throw (new Error(["Portal path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"' is invalid."].join('')));
}

return parent;
});
threeagent.impl.scene.create_entity = (function threeagent$impl$scene$create_entity(var_args){
var G__42382 = arguments.length;
switch (G__42382) {
case 3:
return threeagent.impl.scene.create_entity.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return threeagent.impl.scene.create_entity.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(threeagent.impl.scene.create_entity.cljs$core$IFn$_invoke$arity$3 = (function (ctx,parent_object,node){
return threeagent.impl.scene.create_entity.cljs$core$IFn$_invoke$arity$4(ctx,parent_object,node,threeagent.impl.scene.portal_QMARK_(node));
}));

(threeagent.impl.scene.create_entity.cljs$core$IFn$_invoke$arity$4 = (function (ctx,parent,node,portal_QMARK_){
var map__42383 = node.data;
var map__42383__$1 = cljs.core.__destructure_map(map__42383);
var component_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42383__$1,new cljs.core.Keyword(null,"component-config","component-config",2000790546));
var obj = (cljs.core.truth_(portal_QMARK_)?threeagent.impl.scene.resolve_portal_object(parent,node):threeagent.impl.scene.create_entity_object(ctx,node));
if(cljs.core.truth_(portal_QMARK_)){
} else {
parent.add(obj);
}

(node.threejs = obj);

var post_added_fns_42441 = threeagent.impl.scene.on_entity_added(ctx,node,obj,component_config);
node.for_each_child(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(threeagent.impl.scene.create_entity,ctx,obj));

var seq__42384_42442 = cljs.core.seq(post_added_fns_42441);
var chunk__42385_42443 = null;
var count__42386_42444 = (0);
var i__42387_42445 = (0);
while(true){
if((i__42387_42445 < count__42386_42444)){
var cb_42446 = chunk__42385_42443.cljs$core$IIndexed$_nth$arity$2(null,i__42387_42445);
(cb_42446.cljs$core$IFn$_invoke$arity$0 ? cb_42446.cljs$core$IFn$_invoke$arity$0() : cb_42446.call(null));


var G__42447 = seq__42384_42442;
var G__42448 = chunk__42385_42443;
var G__42449 = count__42386_42444;
var G__42450 = (i__42387_42445 + (1));
seq__42384_42442 = G__42447;
chunk__42385_42443 = G__42448;
count__42386_42444 = G__42449;
i__42387_42445 = G__42450;
continue;
} else {
var temp__5753__auto___42451 = cljs.core.seq(seq__42384_42442);
if(temp__5753__auto___42451){
var seq__42384_42452__$1 = temp__5753__auto___42451;
if(cljs.core.chunked_seq_QMARK_(seq__42384_42452__$1)){
var c__4679__auto___42453 = cljs.core.chunk_first(seq__42384_42452__$1);
var G__42454 = cljs.core.chunk_rest(seq__42384_42452__$1);
var G__42455 = c__4679__auto___42453;
var G__42456 = cljs.core.count(c__4679__auto___42453);
var G__42457 = (0);
seq__42384_42442 = G__42454;
chunk__42385_42443 = G__42455;
count__42386_42444 = G__42456;
i__42387_42445 = G__42457;
continue;
} else {
var cb_42458 = cljs.core.first(seq__42384_42452__$1);
(cb_42458.cljs$core$IFn$_invoke$arity$0 ? cb_42458.cljs$core$IFn$_invoke$arity$0() : cb_42458.call(null));


var G__42459 = cljs.core.next(seq__42384_42452__$1);
var G__42460 = null;
var G__42461 = (0);
var G__42462 = (0);
seq__42384_42442 = G__42459;
chunk__42385_42443 = G__42460;
count__42386_42444 = G__42461;
i__42387_42445 = G__42462;
continue;
}
} else {
}
}
break;
}

return obj;
}));

(threeagent.impl.scene.create_entity.cljs$lang$maxFixedArity = 4);

threeagent.impl.scene.destroy_entity = (function threeagent$impl$scene$destroy_entity(ctx,node){
if(threeagent.impl.scene.portal_QMARK_(node)){
return node.for_each_child(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(threeagent.impl.scene.destroy_entity,ctx));
} else {
var map__42388 = node.data;
var map__42388__$1 = cljs.core.__destructure_map(map__42388);
var component_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42388__$1,new cljs.core.Keyword(null,"component-key","component-key",1189239034));
var component_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42388__$1,new cljs.core.Keyword(null,"component-config","component-config",2000790546));
var entity_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ctx.entityTypes,component_key);
var obj = node.threejs;
var post_removed_fns_42463 = threeagent.impl.scene.on_entity_removed(ctx,node,obj,component_config);
node.for_each_child(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(threeagent.impl.scene.destroy_entity,ctx));

var seq__42389_42464 = cljs.core.seq(post_removed_fns_42463);
var chunk__42390_42465 = null;
var count__42391_42466 = (0);
var i__42392_42467 = (0);
while(true){
if((i__42392_42467 < count__42391_42466)){
var cb_42468 = chunk__42390_42465.cljs$core$IIndexed$_nth$arity$2(null,i__42392_42467);
(cb_42468.cljs$core$IFn$_invoke$arity$0 ? cb_42468.cljs$core$IFn$_invoke$arity$0() : cb_42468.call(null));


var G__42469 = seq__42389_42464;
var G__42470 = chunk__42390_42465;
var G__42471 = count__42391_42466;
var G__42472 = (i__42392_42467 + (1));
seq__42389_42464 = G__42469;
chunk__42390_42465 = G__42470;
count__42391_42466 = G__42471;
i__42392_42467 = G__42472;
continue;
} else {
var temp__5753__auto___42473 = cljs.core.seq(seq__42389_42464);
if(temp__5753__auto___42473){
var seq__42389_42474__$1 = temp__5753__auto___42473;
if(cljs.core.chunked_seq_QMARK_(seq__42389_42474__$1)){
var c__4679__auto___42475 = cljs.core.chunk_first(seq__42389_42474__$1);
var G__42476 = cljs.core.chunk_rest(seq__42389_42474__$1);
var G__42477 = c__4679__auto___42475;
var G__42478 = cljs.core.count(c__4679__auto___42475);
var G__42479 = (0);
seq__42389_42464 = G__42476;
chunk__42390_42465 = G__42477;
count__42391_42466 = G__42478;
i__42392_42467 = G__42479;
continue;
} else {
var cb_42480 = cljs.core.first(seq__42389_42474__$1);
(cb_42480.cljs$core$IFn$_invoke$arity$0 ? cb_42480.cljs$core$IFn$_invoke$arity$0() : cb_42480.call(null));


var G__42481 = cljs.core.next(seq__42389_42474__$1);
var G__42482 = null;
var G__42483 = (0);
var G__42484 = (0);
seq__42389_42464 = G__42481;
chunk__42390_42465 = G__42482;
count__42391_42466 = G__42483;
i__42392_42467 = G__42484;
continue;
}
} else {
}
}
break;
}

var temp__5753__auto___42485 = obj.parent;
if(cljs.core.truth_(temp__5753__auto___42485)){
var parent_42486 = temp__5753__auto___42485;
parent_42486.remove(obj);
} else {
}

return threeagent.entity.destroy_BANG_(entity_type,node.context,obj,component_config);
}
});
threeagent.impl.scene.update_entity = (function threeagent$impl$scene$update_entity(ctx,node,old_data,new_data){
var map__42393 = new_data;
var map__42393__$1 = cljs.core.__destructure_map(map__42393);
var component_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42393__$1,new cljs.core.Keyword(null,"component-config","component-config",2000790546));
var component_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42393__$1,new cljs.core.Keyword(null,"component-key","component-key",1189239034));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42393__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var rotation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42393__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42393__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var entity_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ctx.entityTypes,component_key);
var obj = node.threejs;
var seq__42394_42487 = cljs.core.seq(threeagent.impl.scene.on_entity_removed(ctx,node,obj,new cljs.core.Keyword(null,"component-config","component-config",2000790546).cljs$core$IFn$_invoke$arity$1(old_data)));
var chunk__42395_42488 = null;
var count__42396_42489 = (0);
var i__42397_42490 = (0);
while(true){
if((i__42397_42490 < count__42396_42489)){
var cb_42491 = chunk__42395_42488.cljs$core$IIndexed$_nth$arity$2(null,i__42397_42490);
(cb_42491.cljs$core$IFn$_invoke$arity$0 ? cb_42491.cljs$core$IFn$_invoke$arity$0() : cb_42491.call(null));


var G__42492 = seq__42394_42487;
var G__42493 = chunk__42395_42488;
var G__42494 = count__42396_42489;
var G__42495 = (i__42397_42490 + (1));
seq__42394_42487 = G__42492;
chunk__42395_42488 = G__42493;
count__42396_42489 = G__42494;
i__42397_42490 = G__42495;
continue;
} else {
var temp__5753__auto___42496 = cljs.core.seq(seq__42394_42487);
if(temp__5753__auto___42496){
var seq__42394_42497__$1 = temp__5753__auto___42496;
if(cljs.core.chunked_seq_QMARK_(seq__42394_42497__$1)){
var c__4679__auto___42498 = cljs.core.chunk_first(seq__42394_42497__$1);
var G__42499 = cljs.core.chunk_rest(seq__42394_42497__$1);
var G__42500 = c__4679__auto___42498;
var G__42501 = cljs.core.count(c__4679__auto___42498);
var G__42502 = (0);
seq__42394_42487 = G__42499;
chunk__42395_42488 = G__42500;
count__42396_42489 = G__42501;
i__42397_42490 = G__42502;
continue;
} else {
var cb_42503 = cljs.core.first(seq__42394_42497__$1);
(cb_42503.cljs$core$IFn$_invoke$arity$0 ? cb_42503.cljs$core$IFn$_invoke$arity$0() : cb_42503.call(null));


var G__42504 = cljs.core.next(seq__42394_42497__$1);
var G__42505 = null;
var G__42506 = (0);
var G__42507 = (0);
seq__42394_42487 = G__42504;
chunk__42395_42488 = G__42505;
count__42396_42489 = G__42506;
i__42397_42490 = G__42507;
continue;
}
} else {
}
}
break;
}

threeagent.entity.update_BANG_(entity_type,node.context,obj,component_config);

threeagent.impl.threejs.set_position_BANG_(obj,position);

threeagent.impl.threejs.set_rotation_BANG_(obj,rotation);

threeagent.impl.threejs.set_scale_BANG_(obj,scale);

var seq__42398_42508 = cljs.core.seq(threeagent.impl.scene.on_entity_added(ctx,node,obj,component_config));
var chunk__42399_42509 = null;
var count__42400_42510 = (0);
var i__42401_42511 = (0);
while(true){
if((i__42401_42511 < count__42400_42510)){
var cb_42512 = chunk__42399_42509.cljs$core$IIndexed$_nth$arity$2(null,i__42401_42511);
(cb_42512.cljs$core$IFn$_invoke$arity$0 ? cb_42512.cljs$core$IFn$_invoke$arity$0() : cb_42512.call(null));


var G__42513 = seq__42398_42508;
var G__42514 = chunk__42399_42509;
var G__42515 = count__42400_42510;
var G__42516 = (i__42401_42511 + (1));
seq__42398_42508 = G__42513;
chunk__42399_42509 = G__42514;
count__42400_42510 = G__42515;
i__42401_42511 = G__42516;
continue;
} else {
var temp__5753__auto___42517 = cljs.core.seq(seq__42398_42508);
if(temp__5753__auto___42517){
var seq__42398_42518__$1 = temp__5753__auto___42517;
if(cljs.core.chunked_seq_QMARK_(seq__42398_42518__$1)){
var c__4679__auto___42519 = cljs.core.chunk_first(seq__42398_42518__$1);
var G__42520 = cljs.core.chunk_rest(seq__42398_42518__$1);
var G__42521 = c__4679__auto___42519;
var G__42522 = cljs.core.count(c__4679__auto___42519);
var G__42523 = (0);
seq__42398_42508 = G__42520;
chunk__42399_42509 = G__42521;
count__42400_42510 = G__42522;
i__42401_42511 = G__42523;
continue;
} else {
var cb_42524 = cljs.core.first(seq__42398_42518__$1);
(cb_42524.cljs$core$IFn$_invoke$arity$0 ? cb_42524.cljs$core$IFn$_invoke$arity$0() : cb_42524.call(null));


var G__42525 = cljs.core.next(seq__42398_42518__$1);
var G__42526 = null;
var G__42527 = (0);
var G__42528 = (0);
seq__42398_42508 = G__42525;
chunk__42399_42509 = G__42526;
count__42400_42510 = G__42527;
i__42401_42511 = G__42528;
continue;
}
} else {
}
}
break;
}

return obj;
});
threeagent.impl.scene.transform_entity = (function threeagent$impl$scene$transform_entity(_ctx,node){
var map__42402 = node.data;
var map__42402__$1 = cljs.core.__destructure_map(map__42402);
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42402__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var rotation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42402__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42402__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var obj = node.threejs;
threeagent.impl.threejs.set_position_BANG_(obj,position);

threeagent.impl.threejs.set_rotation_BANG_(obj,rotation);

return threeagent.impl.threejs.set_scale_BANG_(obj,scale);
});
/**
 * Destroy and recreate an entity at a given node in the scene-graph
 */
threeagent.impl.scene.replace_entity = (function threeagent$impl$scene$replace_entity(ctx,node,old_data,new_data){
var old_obj = node.threejs;
var map__42403 = old_data;
var map__42403__$1 = cljs.core.__destructure_map(map__42403);
var old_component_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42403__$1,new cljs.core.Keyword(null,"component-key","component-key",1189239034));
var old_component_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42403__$1,new cljs.core.Keyword(null,"component-config","component-config",2000790546));
var old_entity_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ctx.entityTypes,old_component_key);
var parent_obj = old_obj.parent;
var children = old_obj.children;
threeagent.impl.scene.on_entity_removed(ctx,node,old_obj,old_component_config);

threeagent.entity.destroy_BANG_(old_entity_type,node.context,old_obj,old_component_config);

var new_obj = threeagent.impl.scene.create_entity_object(ctx,node);
(node.threejs = new_obj);

parent_obj.remove(old_obj);

parent_obj.add(new_obj);

if(cljs.core.truth_(node.terminal_QMARK_())){
} else {
var seq__42404_42529 = cljs.core.seq(cljs.core.aclone(children));
var chunk__42405_42530 = null;
var count__42406_42531 = (0);
var i__42407_42532 = (0);
while(true){
if((i__42407_42532 < count__42406_42531)){
var child_42533 = chunk__42405_42530.cljs$core$IIndexed$_nth$arity$2(null,i__42407_42532);
new_obj.add(child_42533);


var G__42534 = seq__42404_42529;
var G__42535 = chunk__42405_42530;
var G__42536 = count__42406_42531;
var G__42537 = (i__42407_42532 + (1));
seq__42404_42529 = G__42534;
chunk__42405_42530 = G__42535;
count__42406_42531 = G__42536;
i__42407_42532 = G__42537;
continue;
} else {
var temp__5753__auto___42538 = cljs.core.seq(seq__42404_42529);
if(temp__5753__auto___42538){
var seq__42404_42539__$1 = temp__5753__auto___42538;
if(cljs.core.chunked_seq_QMARK_(seq__42404_42539__$1)){
var c__4679__auto___42540 = cljs.core.chunk_first(seq__42404_42539__$1);
var G__42541 = cljs.core.chunk_rest(seq__42404_42539__$1);
var G__42542 = c__4679__auto___42540;
var G__42543 = cljs.core.count(c__4679__auto___42540);
var G__42544 = (0);
seq__42404_42529 = G__42541;
chunk__42405_42530 = G__42542;
count__42406_42531 = G__42543;
i__42407_42532 = G__42544;
continue;
} else {
var child_42545 = cljs.core.first(seq__42404_42539__$1);
new_obj.add(child_42545);


var G__42546 = cljs.core.next(seq__42404_42539__$1);
var G__42547 = null;
var G__42548 = (0);
var G__42549 = (0);
seq__42404_42529 = G__42546;
chunk__42405_42530 = G__42547;
count__42406_42531 = G__42548;
i__42407_42532 = G__42549;
continue;
}
} else {
}
}
break;
}
}

return threeagent.impl.scene.on_entity_added(ctx,node,new_obj,new cljs.core.Keyword(null,"component-config","component-config",2000790546).cljs$core$IFn$_invoke$arity$1(new_data));
});
threeagent.impl.scene.init_scene_BANG_ = (function threeagent$impl$scene$init_scene_BANG_(context,virtual_scene,scene_root){
return threeagent.impl.scene.create_entity.cljs$core$IFn$_invoke$arity$3(context,scene_root,virtual_scene.root);
});
threeagent.impl.scene.update_type = (function threeagent$impl$scene$update_type(context,node,o,n){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"component-key","component-key",1189239034).cljs$core$IFn$_invoke$arity$1(o),new cljs.core.Keyword(null,"component-key","component-key",1189239034).cljs$core$IFn$_invoke$arity$1(n))){
return new cljs.core.Keyword(null,"replace-entity","replace-entity",1298949311);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"component-config","component-config",2000790546).cljs$core$IFn$_invoke$arity$1(o),new cljs.core.Keyword(null,"component-config","component-config",2000790546).cljs$core$IFn$_invoke$arity$1(n))){
if(threeagent.impl.scene.in_place_update_QMARK_(context,node)){
return new cljs.core.Keyword(null,"update-entity","update-entity",-2127937836);
} else {
return new cljs.core.Keyword(null,"replace-entity","replace-entity",1298949311);
}
} else {
return new cljs.core.Keyword(null,"transform-entity","transform-entity",-9363241);

}
}
});
threeagent.impl.scene.apply_change_BANG_ = (function threeagent$impl$scene$apply_change_BANG_(context,p__42408){
var vec__42409 = p__42408;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42409,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42409,(1),null);
var old_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42409,(2),null);
var new_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42409,(3),null);
var G__42412 = action;
var G__42412__$1 = (((G__42412 instanceof cljs.core.Keyword))?G__42412.fqn:null);
switch (G__42412__$1) {
case "add":
return threeagent.impl.scene.create_entity.cljs$core$IFn$_invoke$arity$3(context,node.parent.threejs,node);

break;
case "remove":
return threeagent.impl.scene.destroy_entity(context,node);

break;
case "update":
var G__42413 = threeagent.impl.scene.update_type(context,node,old_data,new_data);
var G__42413__$1 = (((G__42413 instanceof cljs.core.Keyword))?G__42413.fqn:null);
switch (G__42413__$1) {
case "replace-entity":
try{return threeagent.impl.scene.replace_entity(context,node,old_data,new_data);
}catch (e42414){var ex = e42414;
return console.error("Failed to replace entity",ex,cljs.core.clj__GT_js(node.data));
}
break;
case "update-entity":
try{return threeagent.impl.scene.update_entity(context,node,old_data,new_data);
}catch (e42415){var ex = e42415;
return console.error("Failed to update entity",ex,cljs.core.clj__GT_js(node.data));
}
break;
case "transform-entity":
try{return threeagent.impl.scene.transform_entity(context,node);
}catch (e42416){var ex = e42416;
return console.error("Failed to transform entity",ex,cljs.core.clj__GT_js(node.data));
}
break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42413__$1)].join('')));

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42412__$1)].join('')));

}
});
threeagent.impl.scene.animate = (function threeagent$impl$scene$animate(context){
var stats = context.stats;
var clock = context.clock;
var virtual_scene = context.virtualScene;
var renderer = context.renderer;
var composer = context.composer;
var scene_root = context.sceneRoot;
var before_render_cb = context.beforeRenderCb;
var after_render_cb = context.afterRenderCb;
if(cljs.core.truth_(stats)){
stats.begin();
} else {
}

var delta_time_42552 = clock.getDelta();
var changelog_42553 = [];
threeagent.impl.system.dispatch_on_tick(context,delta_time_42552);

if(cljs.core.truth_(before_render_cb)){
(before_render_cb.cljs$core$IFn$_invoke$arity$1 ? before_render_cb.cljs$core$IFn$_invoke$arity$1(delta_time_42552) : before_render_cb.call(null,delta_time_42552));
} else {
}

threeagent.impl.virtual_scene.render_BANG_(virtual_scene,changelog_42553);

var seq__42417_42554 = cljs.core.seq(changelog_42553);
var chunk__42418_42555 = null;
var count__42419_42556 = (0);
var i__42420_42557 = (0);
while(true){
if((i__42420_42557 < count__42419_42556)){
var change_42558 = chunk__42418_42555.cljs$core$IIndexed$_nth$arity$2(null,i__42420_42557);
threeagent.impl.scene.apply_change_BANG_(context,change_42558);


var G__42559 = seq__42417_42554;
var G__42560 = chunk__42418_42555;
var G__42561 = count__42419_42556;
var G__42562 = (i__42420_42557 + (1));
seq__42417_42554 = G__42559;
chunk__42418_42555 = G__42560;
count__42419_42556 = G__42561;
i__42420_42557 = G__42562;
continue;
} else {
var temp__5753__auto___42563 = cljs.core.seq(seq__42417_42554);
if(temp__5753__auto___42563){
var seq__42417_42564__$1 = temp__5753__auto___42563;
if(cljs.core.chunked_seq_QMARK_(seq__42417_42564__$1)){
var c__4679__auto___42565 = cljs.core.chunk_first(seq__42417_42564__$1);
var G__42566 = cljs.core.chunk_rest(seq__42417_42564__$1);
var G__42567 = c__4679__auto___42565;
var G__42568 = cljs.core.count(c__4679__auto___42565);
var G__42569 = (0);
seq__42417_42554 = G__42566;
chunk__42418_42555 = G__42567;
count__42419_42556 = G__42568;
i__42420_42557 = G__42569;
continue;
} else {
var change_42570 = cljs.core.first(seq__42417_42564__$1);
threeagent.impl.scene.apply_change_BANG_(context,change_42570);


var G__42571 = cljs.core.next(seq__42417_42564__$1);
var G__42572 = null;
var G__42573 = (0);
var G__42574 = (0);
seq__42417_42554 = G__42571;
chunk__42418_42555 = G__42572;
count__42419_42556 = G__42573;
i__42420_42557 = G__42574;
continue;
}
} else {
}
}
break;
}

var camera_42575 = context.camera;
if(cljs.core.truth_(composer)){
composer.render(delta_time_42552);
} else {
renderer.render(scene_root,camera_42575);
}

if(cljs.core.truth_(after_render_cb)){
(after_render_cb.cljs$core$IFn$_invoke$arity$1 ? after_render_cb.cljs$core$IFn$_invoke$arity$1(delta_time_42552) : after_render_cb.call(null,delta_time_42552));
} else {
}

if(cljs.core.truth_(stats)){
return stats.end();
} else {
return null;
}
});
threeagent.impl.scene.get_canvas = (function threeagent$impl$scene$get_canvas(dom_root){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("canvas",clojure.string.lower_case(dom_root.tagName))){
return dom_root;
} else {
var c = document.createElement("canvas");
return dom_root.appendChild(c);
}
});
threeagent.impl.scene.set_shadow_map_BANG_ = (function threeagent$impl$scene$set_shadow_map_BANG_(renderer,shadow_map){
if(cljs.core.truth_(shadow_map)){
var sm = renderer.shadowMap;
(sm.enabled = new cljs.core.Keyword(null,"enabled","enabled",1195909756).cljs$core$IFn$_invoke$arity$1(shadow_map));

return (sm.type = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shadow_map);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return module$node_modules$three$build$three.PCFShadowMap;
}
})());
} else {
return null;
}
});
threeagent.impl.scene.create_context = (function threeagent$impl$scene$create_context(root_fn,dom_root,p__42421){
var map__42422 = p__42421;
var map__42422__$1 = cljs.core.__destructure_map(map__42422);
var on_before_render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42422__$1,new cljs.core.Keyword(null,"on-before-render","on-before-render",601463713));
var on_after_render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42422__$1,new cljs.core.Keyword(null,"on-after-render","on-after-render",-1318143250));
var shadow_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42422__$1,new cljs.core.Keyword(null,"shadow-map","shadow-map",1196779829));
var systems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42422__$1,new cljs.core.Keyword(null,"systems","systems",-1015374944));
var entity_types = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42422__$1,new cljs.core.Keyword(null,"entity-types","entity-types",-1594967372));
var canvas = threeagent.impl.scene.get_canvas(dom_root);
var width = canvas.offsetWidth;
var height = canvas.offsetHeight;
var renderer = (new module$node_modules$three$build$three.WebGLRenderer(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),canvas], null))));
var camera = (new module$node_modules$three$build$three.PerspectiveCamera((75),(width / height),0.1,(1000)));
var cameras = [];
var scene_root = (new module$node_modules$three$build$three.Scene());
var clock = (new module$node_modules$three$build$three.Clock());
renderer.setSize(width,height);

threeagent.impl.scene.set_shadow_map_BANG_(renderer,shadow_map);

threeagent.impl.system.dispatch_init(systems,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"threejs-renderer","threejs-renderer",468746733),renderer,new cljs.core.Keyword(null,"threejs-scene","threejs-scene",754266515),scene_root,new cljs.core.Keyword(null,"threejs-default-camera","threejs-default-camera",589639313),camera,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),canvas], null));

var virtual_scene = threeagent.impl.virtual_scene.create(root_fn);
var context = (new threeagent.impl.types.Context(virtual_scene,scene_root,dom_root,null,canvas,camera,cameras,clock,renderer,on_before_render,on_after_render,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([threeagent.impl.entities.builtin_entity_types,entity_types], 0)),systems,camera));
threeagent.impl.scene.init_scene_BANG_(context,virtual_scene,scene_root);

threeagent.impl.scene.contexts.push(context);

renderer.setAnimationLoop((function (){
return threeagent.impl.scene.animate(context);
}));

return context;
});
threeagent.impl.scene.clear_scene_BANG_ = (function threeagent$impl$scene$clear_scene_BANG_(context,vscene_root){
vscene_root.for_each_child(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(threeagent.impl.scene.destroy_entity,context));

return context.sceneRoot.clear();
});
threeagent.impl.scene.reset_context_BANG_ = (function threeagent$impl$scene$reset_context_BANG_(old_context,root_fn,p__42423){
var map__42424 = p__42423;
var map__42424__$1 = cljs.core.__destructure_map(map__42424);
var on_before_render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42424__$1,new cljs.core.Keyword(null,"on-before-render","on-before-render",601463713));
var on_after_render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42424__$1,new cljs.core.Keyword(null,"on-after-render","on-after-render",-1318143250));
var shadow_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42424__$1,new cljs.core.Keyword(null,"shadow-map","shadow-map",1196779829));
var entity_types = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42424__$1,new cljs.core.Keyword(null,"entity-types","entity-types",-1594967372));
var systems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42424__$1,new cljs.core.Keyword(null,"systems","systems",-1015374944));
var scene_root = old_context.sceneRoot;
var virtual_scene = old_context.virtualScene;
var renderer = old_context.renderer;
threeagent.impl.system.dispatch_destroy(old_context.systems,threeagent.impl.scene.raw_context__GT_context(old_context));

threeagent.impl.scene.clear_scene_BANG_(old_context,virtual_scene.root);

threeagent.impl.virtual_scene.destroy_BANG_(virtual_scene);

threeagent.impl.scene.set_shadow_map_BANG_(renderer,shadow_map);

(old_context.cameras = []);

(old_context.systems = systems);

(old_context.entityTypes = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([threeagent.impl.entities.builtin_entity_types,entity_types], 0)));

threeagent.impl.system.dispatch_init(systems,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"threejs-renderer","threejs-renderer",468746733),renderer,new cljs.core.Keyword(null,"threejs-scene","threejs-scene",754266515),scene_root,new cljs.core.Keyword(null,"threejs-default-camera","threejs-default-camera",589639313),old_context.defaultCamera,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),old_context.canvas], null));

var new_virtual_scene = threeagent.impl.virtual_scene.create(root_fn);
threeagent.impl.scene.init_scene_BANG_(old_context,new_virtual_scene,scene_root);

(old_context.virtualScene = new_virtual_scene);

(old_context.beforeRenderCb = on_before_render);

(old_context.afterRenderCb = on_after_render);

return old_context;
});
threeagent.impl.scene.find_context = (function threeagent$impl$scene$find_context(dom_root){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__42425_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__42425_SHARP_.domRoot,dom_root);
}),threeagent.impl.scene.contexts));
});
threeagent.impl.scene.create_or_reset_context = (function threeagent$impl$scene$create_or_reset_context(root_fn,dom_root,config){
var temp__5751__auto__ = threeagent.impl.scene.find_context(dom_root);
if(cljs.core.truth_(temp__5751__auto__)){
var existing_context = temp__5751__auto__;
return threeagent.impl.scene.reset_context_BANG_(existing_context,root_fn,config);
} else {
return threeagent.impl.scene.create_context(root_fn,dom_root,config);
}
});
threeagent.impl.scene.render = (function threeagent$impl$scene$render(root_fn,dom_root,config){
return threeagent.impl.scene.raw_context__GT_context(threeagent.impl.scene.create_or_reset_context(root_fn,dom_root,config));
});

//# sourceMappingURL=threeagent.impl.scene.js.map
