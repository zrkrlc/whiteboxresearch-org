goog.provide('threeagent.impl.entities');
goog.scope(function(){
  threeagent.impl.entities.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$three$build$three=shadow.js.require("module$node_modules$three$build$three", {});
if((typeof threeagent !== 'undefined') && (typeof threeagent.impl !== 'undefined') && (typeof threeagent.impl.entities !== 'undefined') && (typeof threeagent.impl.entities.material_cache !== 'undefined')){
} else {
threeagent.impl.entities.material_cache = cljs.core.memoize(threeagent.impl.threejs.mesh_phong_material);
}
threeagent.impl.entities.__GT_material = (function threeagent$impl$entities$__GT_material(config){
if((config instanceof module$node_modules$three$build$three.Material)){
return config;
} else {
return threeagent.impl.entities.material_cache(config);
}
});

/**
* @constructor
 * @implements {threeagent.entity.IEntityType}
 * @implements {threeagent.entity.IUpdateableEntityType}
*/
threeagent.impl.entities.MeshEntity = (function (geo_fn){
this.geo_fn = geo_fn;
});
(threeagent.impl.entities.MeshEntity.prototype.threeagent$entity$IEntityType$ = cljs.core.PROTOCOL_SENTINEL);

(threeagent.impl.entities.MeshEntity.prototype.threeagent$entity$IEntityType$create$arity$3 = (function (_,___$1,config){
var self__ = this;
var ___$2 = this;
var geo = (self__.geo_fn.cljs$core$IFn$_invoke$arity$1 ? self__.geo_fn.cljs$core$IFn$_invoke$arity$1(config) : self__.geo_fn.call(null,config));
var mat = threeagent.impl.entities.__GT_material(new cljs.core.Keyword(null,"material","material",460118677).cljs$core$IFn$_invoke$arity$1(config));
var mesh = (new module$node_modules$three$build$three.Mesh(geo,mat));
(mesh.castShadow = new cljs.core.Keyword(null,"cast-shadow","cast-shadow",-446090219).cljs$core$IFn$_invoke$arity$1(config));

(mesh.receiveShadow = new cljs.core.Keyword(null,"receive-shadow","receive-shadow",-789712390).cljs$core$IFn$_invoke$arity$1(config));

return mesh;
}));

(threeagent.impl.entities.MeshEntity.prototype.threeagent$entity$IEntityType$destroy_BANG_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
return null;
}));

(threeagent.impl.entities.MeshEntity.prototype.threeagent$entity$IUpdateableEntityType$ = cljs.core.PROTOCOL_SENTINEL);

(threeagent.impl.entities.MeshEntity.prototype.threeagent$entity$IUpdateableEntityType$update_BANG_$arity$4 = (function (_,___$1,mesh,config){
var self__ = this;
var ___$2 = this;
var geo = (self__.geo_fn.cljs$core$IFn$_invoke$arity$1 ? self__.geo_fn.cljs$core$IFn$_invoke$arity$1(config) : self__.geo_fn.call(null,config));
var mat = threeagent.impl.entities.__GT_material(new cljs.core.Keyword(null,"material","material",460118677).cljs$core$IFn$_invoke$arity$1(config));
(mesh.geometry = geo);

(mesh.material = mat);

(mesh.castShadow = new cljs.core.Keyword(null,"cast-shadow","cast-shadow",-446090219).cljs$core$IFn$_invoke$arity$1(config));

(mesh.receiveShadow = new cljs.core.Keyword(null,"receive-shadow","receive-shadow",-789712390).cljs$core$IFn$_invoke$arity$1(config));

return mesh;
}));

(threeagent.impl.entities.MeshEntity.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"geo-fn","geo-fn",1581818572,null)], null);
}));

(threeagent.impl.entities.MeshEntity.cljs$lang$type = true);

(threeagent.impl.entities.MeshEntity.cljs$lang$ctorStr = "threeagent.impl.entities/MeshEntity");

(threeagent.impl.entities.MeshEntity.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"threeagent.impl.entities/MeshEntity");
}));

/**
 * Positional factory function for threeagent.impl.entities/MeshEntity.
 */
threeagent.impl.entities.__GT_MeshEntity = (function threeagent$impl$entities$__GT_MeshEntity(geo_fn){
return (new threeagent.impl.entities.MeshEntity(geo_fn));
});

threeagent.impl.entities.default_light_shadow = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"map-size","map-size",-683564558),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(512),new cljs.core.Keyword(null,"height","height",1025178622),(512)], null),new cljs.core.Keyword(null,"focus","focus",234677911),1.0,new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"near","near",-1077668328),0.5,new cljs.core.Keyword(null,"far","far",85807546),(500),new cljs.core.Keyword(null,"left","left",-399115937),(-5),new cljs.core.Keyword(null,"right","right",-452581833),(5),new cljs.core.Keyword(null,"top","top",-1856271961),(5),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(-5)], null)], null);
threeagent.impl.entities.apply_shadow_settings_BANG_ = (function threeagent$impl$entities$apply_shadow_settings_BANG_(light,shadow_cfg){
if(cljs.core.truth_(shadow_cfg)){
var shadow_41836__$1 = light.shadow;
var camera_obj_41837 = shadow_41836__$1.camera;
var map_size_41838 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"map-size","map-size",-683564558).cljs$core$IFn$_invoke$arity$1(threeagent.impl.entities.default_light_shadow),new cljs.core.Keyword(null,"map-size","map-size",-683564558).cljs$core$IFn$_invoke$arity$1(shadow_cfg)], 0));
var camera_41839 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(threeagent.impl.entities.default_light_shadow),new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(shadow_cfg)], 0));
(shadow_41836__$1.mapSize.width = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(map_size_41838));

(shadow_41836__$1.mapSize.height = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(map_size_41838));

(camera_obj_41837.near = new cljs.core.Keyword(null,"near","near",-1077668328).cljs$core$IFn$_invoke$arity$1(camera_41839));

(camera_obj_41837.far = new cljs.core.Keyword(null,"far","far",85807546).cljs$core$IFn$_invoke$arity$1(camera_41839));

(camera_obj_41837.left = new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(camera_41839));

(camera_obj_41837.right = new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(camera_41839));

(camera_obj_41837.top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(camera_41839));

(camera_obj_41837.bottom = new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$1(camera_41839));

(shadow_41836__$1.focus = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"focus","focus",234677911).cljs$core$IFn$_invoke$arity$1(shadow_cfg);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"focus","focus",234677911).cljs$core$IFn$_invoke$arity$1(threeagent.impl.entities.default_light_shadow);
}
})());

camera_obj_41837.updateProjectionMatrix();
} else {
}

return light;
});

/**
* @constructor
 * @implements {threeagent.entity.IEntityType}
 * @implements {threeagent.entity.IUpdateableEntityType}
*/
threeagent.impl.entities.LightEntity = (function (create_fn,update_fn){
this.create_fn = create_fn;
this.update_fn = update_fn;
});
(threeagent.impl.entities.LightEntity.prototype.threeagent$entity$IEntityType$ = cljs.core.PROTOCOL_SENTINEL);

(threeagent.impl.entities.LightEntity.prototype.threeagent$entity$IEntityType$create$arity$3 = (function (_,___$1,cfg){
var self__ = this;
var ___$2 = this;
var light = (self__.create_fn.cljs$core$IFn$_invoke$arity$1 ? self__.create_fn.cljs$core$IFn$_invoke$arity$1(cfg) : self__.create_fn.call(null,cfg));
(light.castShadow = new cljs.core.Keyword(null,"cast-shadow","cast-shadow",-446090219).cljs$core$IFn$_invoke$arity$1(cfg));

(light.receiveShadow = new cljs.core.Keyword(null,"receive-shadow","receive-shadow",-789712390).cljs$core$IFn$_invoke$arity$1(cfg));

return threeagent.impl.entities.apply_shadow_settings_BANG_(light,new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(cfg));
}));

(threeagent.impl.entities.LightEntity.prototype.threeagent$entity$IEntityType$destroy_BANG_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
return null;
}));

(threeagent.impl.entities.LightEntity.prototype.threeagent$entity$IUpdateableEntityType$ = cljs.core.PROTOCOL_SENTINEL);

(threeagent.impl.entities.LightEntity.prototype.threeagent$entity$IUpdateableEntityType$update_BANG_$arity$4 = (function (_,___$1,obj,cfg){
var self__ = this;
var ___$2 = this;
(self__.update_fn.cljs$core$IFn$_invoke$arity$2 ? self__.update_fn.cljs$core$IFn$_invoke$arity$2(obj,cfg) : self__.update_fn.call(null,obj,cfg));

(obj.castShadow = new cljs.core.Keyword(null,"cast-shadow","cast-shadow",-446090219).cljs$core$IFn$_invoke$arity$1(cfg));

(obj.receiveShadow = new cljs.core.Keyword(null,"receive-shadow","receive-shadow",-789712390).cljs$core$IFn$_invoke$arity$1(cfg));

return threeagent.impl.entities.apply_shadow_settings_BANG_(obj,new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(cfg));
}));

(threeagent.impl.entities.LightEntity.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"create-fn","create-fn",44490714,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null)], null);
}));

(threeagent.impl.entities.LightEntity.cljs$lang$type = true);

(threeagent.impl.entities.LightEntity.cljs$lang$ctorStr = "threeagent.impl.entities/LightEntity");

(threeagent.impl.entities.LightEntity.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"threeagent.impl.entities/LightEntity");
}));

/**
 * Positional factory function for threeagent.impl.entities/LightEntity.
 */
threeagent.impl.entities.__GT_LightEntity = (function threeagent$impl$entities$__GT_LightEntity(create_fn,update_fn){
return (new threeagent.impl.entities.LightEntity(create_fn,update_fn));
});

threeagent.impl.entities.apply_props_clj_BANG_ = (function threeagent$impl$entities$apply_props_clj_BANG_(obj,properties){
var seq__41695_41872 = cljs.core.seq(properties);
var chunk__41696_41873 = null;
var count__41697_41874 = (0);
var i__41698_41875 = (0);
while(true){
if((i__41698_41875 < count__41697_41874)){
var vec__41710_41879 = chunk__41696_41873.cljs$core$IIndexed$_nth$arity$2(null,i__41698_41875);
var k_41880 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41710_41879,(0),null);
var v_41881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41710_41879,(1),null);
threeagent.impl.entities.goog$module$goog$object.set(obj,cljs.core.name(k_41880),v_41881);


var G__41882 = seq__41695_41872;
var G__41883 = chunk__41696_41873;
var G__41884 = count__41697_41874;
var G__41885 = (i__41698_41875 + (1));
seq__41695_41872 = G__41882;
chunk__41696_41873 = G__41883;
count__41697_41874 = G__41884;
i__41698_41875 = G__41885;
continue;
} else {
var temp__5753__auto___41886 = cljs.core.seq(seq__41695_41872);
if(temp__5753__auto___41886){
var seq__41695_41887__$1 = temp__5753__auto___41886;
if(cljs.core.chunked_seq_QMARK_(seq__41695_41887__$1)){
var c__4679__auto___41888 = cljs.core.chunk_first(seq__41695_41887__$1);
var G__41889 = cljs.core.chunk_rest(seq__41695_41887__$1);
var G__41890 = c__4679__auto___41888;
var G__41891 = cljs.core.count(c__4679__auto___41888);
var G__41892 = (0);
seq__41695_41872 = G__41889;
chunk__41696_41873 = G__41890;
count__41697_41874 = G__41891;
i__41698_41875 = G__41892;
continue;
} else {
var vec__41713_41893 = cljs.core.first(seq__41695_41887__$1);
var k_41894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41713_41893,(0),null);
var v_41895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41713_41893,(1),null);
threeagent.impl.entities.goog$module$goog$object.set(obj,cljs.core.name(k_41894),v_41895);


var G__41896 = cljs.core.next(seq__41695_41887__$1);
var G__41897 = null;
var G__41898 = (0);
var G__41899 = (0);
seq__41695_41872 = G__41896;
chunk__41696_41873 = G__41897;
count__41697_41874 = G__41898;
i__41698_41875 = G__41899;
continue;
}
} else {
}
}
break;
}

return obj;
});
threeagent.impl.entities.builtin_entity_types = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sphere","sphere",384337120),new cljs.core.Keyword(null,"point-light","point-light",669926690),new cljs.core.Keyword(null,"directional-light","directional-light",1424371138),new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"hemisphere-light","hemisphere-light",-1569111131),new cljs.core.Keyword(null,"ring","ring",-974350330),new cljs.core.Keyword(null,"instance","instance",-2121349050),new cljs.core.Keyword(null,"perspective-camera","perspective-camera",1944836071),new cljs.core.Keyword(null,"plane","plane",-223595224),new cljs.core.Keyword(null,"torus-knot","torus-knot",466642313),new cljs.core.Keyword(null,"box","box",1530920394),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"octahedron","octahedron",245466475),new cljs.core.Keyword(null,"spot-light","spot-light",2068323183),new cljs.core.Keyword(null,"rect-area-light","rect-area-light",-1419656976),new cljs.core.Keyword(null,"torus","torus",790837427),new cljs.core.Keyword(null,"ambient-light","ambient-light",1637901620),new cljs.core.Keyword(null,"cylinder","cylinder",-1762349035),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"cone","cone",-1644572970),new cljs.core.Keyword(null,"icosahedron","icosahedron",-1698316329),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"tetrahedron","tetrahedron",-902050819),new cljs.core.Keyword(null,"dodecahedron","dodecahedron",-1629151490),new cljs.core.Keyword(null,"orthographic-camera","orthographic-camera",-79663393)],[threeagent.impl.entities.__GT_MeshEntity((function (p__41718){
var map__41719 = p__41718;
var map__41719__$1 = cljs.core.__destructure_map(map__41719);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41719__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var width_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41719__$1,new cljs.core.Keyword(null,"width-segments","width-segments",25187827));
var height_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41719__$1,new cljs.core.Keyword(null,"height-segments","height-segments",1831894149));
var phi_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41719__$1,new cljs.core.Keyword(null,"phi-start","phi-start",-1129440297));
var phi_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41719__$1,new cljs.core.Keyword(null,"phi-length","phi-length",-99998879));
var theta_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41719__$1,new cljs.core.Keyword(null,"theta-start","theta-start",-1644036763));
var theta_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41719__$1,new cljs.core.Keyword(null,"theta-length","theta-length",-163292368));
return (new module$node_modules$three$build$three.SphereGeometry((function (){var or__4253__auto__ = radius;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})(),(function (){var or__4253__auto__ = width_segments;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (8);
}
})(),(function (){var or__4253__auto__ = height_segments;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (6);
}
})(),(function (){var or__4253__auto__ = phi_start;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})(),(function (){var or__4253__auto__ = phi_length;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return threeagent.impl.util.pi_times_2;
}
})(),(function (){var or__4253__auto__ = theta_start;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})(),(function (){var or__4253__auto__ = theta_length;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return threeagent.impl.util.pi;
}
})()));
})),threeagent.impl.entities.__GT_LightEntity((function (p__41725){
var map__41726 = p__41725;
var map__41726__$1 = cljs.core.__destructure_map(map__41726);
var intensity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41726__$1,new cljs.core.Keyword(null,"intensity","intensity",1142770863));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41726__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var distance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41726__$1,new cljs.core.Keyword(null,"distance","distance",-1671893894));
var decay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41726__$1,new cljs.core.Keyword(null,"decay","decay",1036712184));
return (new module$node_modules$three$build$three.PointLight((function (){var or__4253__auto__ = color;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (16777215);
}
})(),(function (){var or__4253__auto__ = intensity;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return 1.0;
}
})(),(function (){var or__4253__auto__ = distance;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})(),(function (){var or__4253__auto__ = decay;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return 1.0;
}
})()));
}),(function (o,cfg){
threeagent.impl.entities.apply_props_clj_BANG_(o,cfg);

return o;
})),threeagent.impl.entities.__GT_LightEntity((function (p__41728){
var map__41729 = p__41728;
var map__41729__$1 = cljs.core.__destructure_map(map__41729);
var intensity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41729__$1,new cljs.core.Keyword(null,"intensity","intensity",1142770863));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41729__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41729__$1,new cljs.core.Keyword(null,"target","target",253001721));
var light = (new module$node_modules$three$build$three.DirectionalLight((function (){var or__4253__auto__ = color;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (16777215);
}
})(),(function (){var or__4253__auto__ = intensity;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return 1.0;
}
})()));
(light.originalTarget = light.target);

if(cljs.core.truth_(target)){
(light.target = target);
} else {
}

return light;
}),(function (o,p__41732){
var map__41733 = p__41732;
var map__41733__$1 = cljs.core.__destructure_map(map__41733);
var cfg = map__41733__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41733__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.truth_(target)){
(o.target = target);
} else {
(o.target = o.originalTarget);
}

threeagent.impl.entities.apply_props_clj_BANG_(o,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.Keyword(null,"target","target",253001721)));

return o;
})),(function (){
if((typeof threeagent !== 'undefined') && (typeof threeagent.impl !== 'undefined') && (typeof threeagent.impl.entities !== 'undefined') && (typeof threeagent.impl.entities.t_threeagent$impl$entities41734 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {threeagent.entity.IEntityType}
 * @implements {threeagent.entity.IUpdateableEntityType}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
threeagent.impl.entities.t_threeagent$impl$entities41734 = (function (meta41735){
this.meta41735 = meta41735;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(threeagent.impl.entities.t_threeagent$impl$entities41734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41736,meta41735__$1){
var self__ = this;
var _41736__$1 = this;
return (new threeagent.impl.entities.t_threeagent$impl$entities41734(meta41735__$1));
}));

(threeagent.impl.entities.t_threeagent$impl$entities41734.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41736){
var self__ = this;
var _41736__$1 = this;
return self__.meta41735;
}));

(threeagent.impl.entities.t_threeagent$impl$entities41734.prototype.threeagent$entity$IEntityType$ = cljs.core.PROTOCOL_SENTINEL);

(threeagent.impl.entities.t_threeagent$impl$entities41734.prototype.threeagent$entity$IEntityType$create$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return (new module$node_modules$three$build$three.Group());
}));

(threeagent.impl.entities.t_threeagent$impl$entities41734.prototype.threeagent$entity$IEntityType$destroy_BANG_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
return null;
}));

(threeagent.impl.entities.t_threeagent$impl$entities41734.prototype.threeagent$entity$IUpdateableEntityType$ = cljs.core.PROTOCOL_SENTINEL);

(threeagent.impl.entities.t_threeagent$impl$entities41734.prototype.threeagent$entity$IUpdateableEntityType$update_BANG_$arity$4 = (function (_,___$1,obj,___$2){
var self__ = this;
var ___$3 = this;
return obj;
}));

(threeagent.impl.entities.t_threeagent$impl$entities41734.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta41735","meta41735",-984959804,null)], null);
}));

(threeagent.impl.entities.t_threeagent$impl$entities41734.cljs$lang$type = true);

(threeagent.impl.entities.t_threeagent$impl$entities41734.cljs$lang$ctorStr = "threeagent.impl.entities/t_threeagent$impl$entities41734");

(threeagent.impl.entities.t_threeagent$impl$entities41734.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"threeagent.impl.entities/t_threeagent$impl$entities41734");
}));

/**
 * Positional factory function for threeagent.impl.entities/t_threeagent$impl$entities41734.
 */
threeagent.impl.entities.__GT_t_threeagent$impl$entities41734 = (function threeagent$impl$entities$__GT_t_threeagent$impl$entities41734(meta41735){
return (new threeagent.impl.entities.t_threeagent$impl$entities41734(meta41735));
});

}

return (new threeagent.impl.entities.t_threeagent$impl$entities41734(cljs.core.PersistentArrayMap.EMPTY));
})()
,threeagent.impl.entities.__GT_LightEntity((function (p__41739){
var map__41740 = p__41739;
var map__41740__$1 = cljs.core.__destructure_map(map__41740);
var sky_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41740__$1,new cljs.core.Keyword(null,"sky-color","sky-color",1803548607));
var ground_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41740__$1,new cljs.core.Keyword(null,"ground-color","ground-color",-1832095873));
var intensity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41740__$1,new cljs.core.Keyword(null,"intensity","intensity",1142770863));
return (new module$node_modules$three$build$three.HemisphereLight((function (){var or__4253__auto__ = sky_color;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (16777215);
}
})(),(function (){var or__4253__auto__ = ground_color;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (16777215);
}
})(),(function (){var or__4253__auto__ = intensity;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()));
}),(function (o,cfg){
threeagent.impl.entities.apply_props_clj_BANG_(o,clojure.set.rename_keys(cfg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sky-color","sky-color",1803548607),new cljs.core.Keyword(null,"skyColor","skyColor",-1116053720),new cljs.core.Keyword(null,"ground-color","ground-color",-1832095873),new cljs.core.Keyword(null,"groundColor","groundColor",-2043012665)], null)));

return o;
})),threeagent.impl.entities.__GT_MeshEntity((function (p__41743){
var map__41744 = p__41743;
var map__41744__$1 = cljs.core.__destructure_map(map__41744);
var inner_radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41744__$1,new cljs.core.Keyword(null,"inner-radius","inner-radius",-681823510));
var outer_radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41744__$1,new cljs.core.Keyword(null,"outer-radius","outer-radius",1715267468));
var theta_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41744__$1,new cljs.core.Keyword(null,"theta-segments","theta-segments",-1631011703));
var phi_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41744__$1,new cljs.core.Keyword(null,"phi-segments","phi-segments",1443058713));
var theta_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41744__$1,new cljs.core.Keyword(null,"theta-start","theta-start",-1644036763));
var theta_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41744__$1,new cljs.core.Keyword(null,"theta-length","theta-length",-163292368));
return (new module$node_modules$three$build$three.RingGeometry((function (){var or__4253__auto__ = inner_radius;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return 0.5;
}
})(),(function (){var or__4253__auto__ = outer_radius;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return 1.0;
}
})(),(function (){var or__4253__auto__ = theta_segments;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (8);
}
})(),(function (){var or__4253__auto__ = phi_segments;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (8);
}
})(),(function (){var or__4253__auto__ = theta_start;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})(),(function (){var or__4253__auto__ = theta_length;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return threeagent.impl.util.pi_times_2;
}
})()));
})),(function (){
if((typeof threeagent !== 'undefined') && (typeof threeagent.impl !== 'undefined') && (typeof threeagent.impl.entities !== 'undefined') && (typeof threeagent.impl.entities.t_threeagent$impl$entities41747 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {threeagent.entity.IEntityType}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
threeagent.impl.entities.t_threeagent$impl$entities41747 = (function (meta41748){
this.meta41748 = meta41748;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(threeagent.impl.entities.t_threeagent$impl$entities41747.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41749,meta41748__$1){
var self__ = this;
var _41749__$1 = this;
return (new threeagent.impl.entities.t_threeagent$impl$entities41747(meta41748__$1));
}));

(threeagent.impl.entities.t_threeagent$impl$entities41747.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41749){
var self__ = this;
var _41749__$1 = this;
return self__.meta41748;
}));

(threeagent.impl.entities.t_threeagent$impl$entities41747.prototype.threeagent$entity$IEntityType$ = cljs.core.PROTOCOL_SENTINEL);

(threeagent.impl.entities.t_threeagent$impl$entities41747.prototype.threeagent$entity$IEntityType$create$arity$3 = (function (_,___$1,p__41750){
var self__ = this;
var map__41751 = p__41750;
var map__41751__$1 = cljs.core.__destructure_map(map__41751);
var object = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41751__$1,new cljs.core.Keyword(null,"object","object",1474613949));
var ___$2 = this;
return object;
}));

(threeagent.impl.entities.t_threeagent$impl$entities41747.prototype.threeagent$entity$IEntityType$destroy_BANG_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
return null;
}));

(threeagent.impl.entities.t_threeagent$impl$entities41747.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta41748","meta41748",-355395554,null)], null);
}));

(threeagent.impl.entities.t_threeagent$impl$entities41747.cljs$lang$type = true);

(threeagent.impl.entities.t_threeagent$impl$entities41747.cljs$lang$ctorStr = "threeagent.impl.entities/t_threeagent$impl$entities41747");

(threeagent.impl.entities.t_threeagent$impl$entities41747.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"threeagent.impl.entities/t_threeagent$impl$entities41747");
}));

/**
 * Positional factory function for threeagent.impl.entities/t_threeagent$impl$entities41747.
 */
threeagent.impl.entities.__GT_t_threeagent$impl$entities41747 = (function threeagent$impl$entities$__GT_t_threeagent$impl$entities41747(meta41748){
return (new threeagent.impl.entities.t_threeagent$impl$entities41747(meta41748));
});

}

return (new threeagent.impl.entities.t_threeagent$impl$entities41747(cljs.core.PersistentArrayMap.EMPTY));
})()
,(function (){
if((typeof threeagent !== 'undefined') && (typeof threeagent.impl !== 'undefined') && (typeof threeagent.impl.entities !== 'undefined') && (typeof threeagent.impl.entities.t_threeagent$impl$entities41752 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {threeagent.entity.IEntityType}
 * @implements {threeagent.entity.IUpdateableEntityType}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
threeagent.impl.entities.t_threeagent$impl$entities41752 = (function (meta41753){
this.meta41753 = meta41753;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(threeagent.impl.entities.t_threeagent$impl$entities41752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41754,meta41753__$1){
var self__ = this;
var _41754__$1 = this;
return (new threeagent.impl.entities.t_threeagent$impl$entities41752(meta41753__$1));
}));

(threeagent.impl.entities.t_threeagent$impl$entities41752.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41754){
var self__ = this;
var _41754__$1 = this;
return self__.meta41753;
}));

(threeagent.impl.entities.t_threeagent$impl$entities41752.prototype.threeagent$entity$IEntityType$ = cljs.core.PROTOCOL_SENTINEL);

(threeagent.impl.entities.t_threeagent$impl$entities41752.prototype.threeagent$entity$IEntityType$create$arity$3 = (function (_,___$1,cfg){
var self__ = this;
var ___$2 = this;
var cam = (new module$node_modules$three$build$three.PerspectiveCamera(75.0,1.0,0.1,2000.0));
(cam.active = true);

threeagent.impl.entities.apply_props_clj_BANG_(cam,cfg);

cam.updateProjectionMatrix();

return cam;
}));

(threeagent.impl.entities.t_threeagent$impl$entities41752.prototype.threeagent$entity$IEntityType$destroy_BANG_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
return null;
}));

(threeagent.impl.entities.t_threeagent$impl$entities41752.prototype.threeagent$entity$IUpdateableEntityType$ = cljs.core.PROTOCOL_SENTINEL);

(threeagent.impl.entities.t_threeagent$impl$entities41752.prototype.threeagent$entity$IUpdateableEntityType$update_BANG_$arity$4 = (function (_,___$1,o,cfg){
var self__ = this;
var ___$2 = this;
threeagent.impl.entities.apply_props_clj_BANG_(o,cfg);

o.updateProjectionMatrix();

return o;
}));

(threeagent.impl.entities.t_threeagent$impl$entities41752.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta41753","meta41753",-162779071,null)], null);
}));

(threeagent.impl.entities.t_threeagent$impl$entities41752.cljs$lang$type = true);

(threeagent.impl.entities.t_threeagent$impl$entities41752.cljs$lang$ctorStr = "threeagent.impl.entities/t_threeagent$impl$entities41752");

(threeagent.impl.entities.t_threeagent$impl$entities41752.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"threeagent.impl.entities/t_threeagent$impl$entities41752");
}));

/**
 * Positional factory function for threeagent.impl.entities/t_threeagent$impl$entities41752.
 */
threeagent.impl.entities.__GT_t_threeagent$impl$entities41752 = (function threeagent$impl$entities$__GT_t_threeagent$impl$entities41752(meta41753){
return (new threeagent.impl.entities.t_threeagent$impl$entities41752(meta41753));
});

}

return (new threeagent.impl.entities.t_threeagent$impl$entities41752(cljs.core.PersistentArrayMap.EMPTY));
})()
,threeagent.impl.entities.__GT_MeshEntity((function (p__41755){
var map__41756 = p__41755;
var map__41756__$1 = cljs.core.__destructure_map(map__41756);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41756__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41756__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41756__$1,new cljs.core.Keyword(null,"width-segments","width-segments",25187827));
var height_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41756__$1,new cljs.core.Keyword(null,"height-segments","height-segments",1831894149));
return (new module$node_modules$three$build$three.PlaneGeometry((function (){var or__4253__auto__ = width;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})(),(function (){var or__4253__auto__ = height;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})(),(function (){var or__4253__auto__ = width_segments;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})(),(function (){var or__4253__auto__ = height_segments;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()));
})),threeagent.impl.entities.__GT_MeshEntity((function (p__41758){
var map__41759 = p__41758;
var map__41759__$1 = cljs.core.__destructure_map(map__41759);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41759__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var tube = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41759__$1,new cljs.core.Keyword(null,"tube","tube",-67082178));
var tubular_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41759__$1,new cljs.core.Keyword(null,"tubular-segments","tubular-segments",1183061483));
var radial_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41759__$1,new cljs.core.Keyword(null,"radial-segments","radial-segments",-1625677103));
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41759__$1,new cljs.core.Keyword(null,"p","p",151049309));
var q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41759__$1,new cljs.core.Keyword(null,"q","q",689001697));
return (new module$node_modules$three$build$three.TorusKnotGeometry((function (){var or__4253__auto__ = radius;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})(),(function (){var or__4253__auto__ = tube;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return 0.4;
}
})(),(function (){var or__4253__auto__ = tubular_segments;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (64);
}
})(),(function (){var or__4253__auto__ = radial_segments;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (8);
}
})(),(function (){var or__4253__auto__ = p;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (2);
}
})(),(function (){var or__4253__auto__ = q;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (3);
}
})()));
})),threeagent.impl.entities.__GT_MeshEntity((function (p__41765){
var map__41766 = p__41765;
var map__41766__$1 = cljs.core.__destructure_map(map__41766);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41766__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41766__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41766__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
var width_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41766__$1,new cljs.core.Keyword(null,"width-segments","width-segments",25187827));
var height_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41766__$1,new cljs.core.Keyword(null,"height-segments","height-segments",1831894149));
var depth_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41766__$1,new cljs.core.Keyword(null,"depth-segments","depth-segments",1921571151));
return (new module$node_modules$three$build$three.BoxGeometry((function (){var or__4253__auto__ = width;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})(),(function (){var or__4253__auto__ = height;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})(),(function (){var or__4253__auto__ = depth;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})(),(function (){var or__4253__auto__ = width_segments;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})(),(function (){var or__4253__auto__ = height_segments;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})(),(function (){var or__4253__auto__ = depth_segments;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()));
})),threeagent.impl.entities.__GT_MeshEntity((function (p__41767){
var map__41768 = p__41767;
var map__41768__$1 = cljs.core.__destructure_map(map__41768);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41768__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41768__$1,new cljs.core.Keyword(null,"segments","segments",1937535949));
var theta_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41768__$1,new cljs.core.Keyword(null,"theta-start","theta-start",-1644036763));
var theta_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41768__$1,new cljs.core.Keyword(null,"theta-length","theta-length",-163292368));
return (new module$node_modules$three$build$three.CircleGeometry((function (){var or__4253__auto__ = radius;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})(),(function (){var or__4253__auto__ = segments;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (8);
}
})(),(function (){var or__4253__auto__ = theta_start;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})(),(function (){var or__4253__auto__ = theta_length;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return threeagent.impl.util.pi_times_2;
}
})()));
})),threeagent.impl.entities.__GT_MeshEntity((function (p__41769){
var map__41770 = p__41769;
var map__41770__$1 = cljs.core.__destructure_map(map__41770);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41770__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var detail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41770__$1,new cljs.core.Keyword(null,"detail","detail",-1545345025));
return (new module$node_modules$three$build$three.Octahedron((function (){var or__4253__auto__ = radius;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})(),(function (){var or__4253__auto__ = detail;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})()));
})),threeagent.impl.entities.__GT_LightEntity((function (p__41771){
var map__41772 = p__41771;
var map__41772__$1 = cljs.core.__destructure_map(map__41772);
var intensity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41772__$1,new cljs.core.Keyword(null,"intensity","intensity",1142770863));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41772__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var distance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41772__$1,new cljs.core.Keyword(null,"distance","distance",-1671893894));
var angle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41772__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var penumbra = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41772__$1,new cljs.core.Keyword(null,"penumbra","penumbra",2008278688));
var decay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41772__$1,new cljs.core.Keyword(null,"decay","decay",1036712184));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41772__$1,new cljs.core.Keyword(null,"target","target",253001721));
var light = (new module$node_modules$three$build$three.SpotLight((function (){var or__4253__auto__ = color;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (16777215);
}
})(),(function (){var or__4253__auto__ = intensity;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return 1.0;
}
})(),(function (){var or__4253__auto__ = distance;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})(),(function (){var or__4253__auto__ = angle;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return threeagent.impl.util.pi_over_2;
}
})(),(function (){var or__4253__auto__ = penumbra;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})(),(function (){var or__4253__auto__ = decay;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return 1.0;
}
})()));
(light.originalTarget = light.target);

if(cljs.core.truth_(target)){
(light.target = target);
} else {
}

return light;
}),(function (o,p__41773){
var map__41774 = p__41773;
var map__41774__$1 = cljs.core.__destructure_map(map__41774);
var cfg = map__41774__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41774__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.truth_(target)){
(o.target = target);
} else {
(o.target = o.originalTarget);
}

threeagent.impl.entities.apply_props_clj_BANG_(o,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.Keyword(null,"target","target",253001721)));

return o;
})),threeagent.impl.entities.__GT_LightEntity((function (p__41775){
var map__41776 = p__41775;
var map__41776__$1 = cljs.core.__destructure_map(map__41776);
var intensity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41776__$1,new cljs.core.Keyword(null,"intensity","intensity",1142770863));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41776__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41776__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41776__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return (new module$node_modules$three$build$three.RectAreaLight((function (){var or__4253__auto__ = color;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (16777215);
}
})(),(function (){var or__4253__auto__ = intensity;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return 1.0;
}
})(),(function (){var or__4253__auto__ = width;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (10);
}
})(),(function (){var or__4253__auto__ = height;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (10);
}
})()));
}),(function (o,cfg){
threeagent.impl.entities.apply_props_clj_BANG_(o,cfg);

return o;
})),threeagent.impl.entities.__GT_MeshEntity((function (p__41777){
var map__41778 = p__41777;
var map__41778__$1 = cljs.core.__destructure_map(map__41778);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41778__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var tube = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41778__$1,new cljs.core.Keyword(null,"tube","tube",-67082178));
var radial_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41778__$1,new cljs.core.Keyword(null,"radial-segments","radial-segments",-1625677103));
var tubular_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41778__$1,new cljs.core.Keyword(null,"tubular-segments","tubular-segments",1183061483));
var arc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41778__$1,new cljs.core.Keyword(null,"arc","arc",252411045));
return (new module$node_modules$three$build$three.TorusGeometry((function (){var or__4253__auto__ = radius;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})(),(function (){var or__4253__auto__ = tube;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return 0.4;
}
})(),(function (){var or__4253__auto__ = radial_segments;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (8);
}
})(),(function (){var or__4253__auto__ = tubular_segments;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (6);
}
})(),(function (){var or__4253__auto__ = arc;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return threeagent.impl.util.pi_times_2;
}
})()));
})),threeagent.impl.entities.__GT_LightEntity((function (p__41780){
var map__41781 = p__41780;
var map__41781__$1 = cljs.core.__destructure_map(map__41781);
var intensity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41781__$1,new cljs.core.Keyword(null,"intensity","intensity",1142770863));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41781__$1,new cljs.core.Keyword(null,"color","color",1011675173));
return (new module$node_modules$three$build$three.AmbientLight((function (){var or__4253__auto__ = color;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (16777215);
}
})(),(function (){var or__4253__auto__ = intensity;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return 1.0;
}
})()));
}),(function (o,cfg){
threeagent.impl.entities.apply_props_clj_BANG_(o,cfg);

return o;
})),threeagent.impl.entities.__GT_MeshEntity((function (p__41783){
var map__41784 = p__41783;
var map__41784__$1 = cljs.core.__destructure_map(map__41784);
var radius_top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41784__$1,new cljs.core.Keyword(null,"radius-top","radius-top",-343423468));
var radius_bottom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41784__$1,new cljs.core.Keyword(null,"radius-bottom","radius-bottom",-1077150367));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41784__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var radial_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41784__$1,new cljs.core.Keyword(null,"radial-segments","radial-segments",-1625677103));
var height_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41784__$1,new cljs.core.Keyword(null,"height-segments","height-segments",1831894149));
var open_ended_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41784__$1,new cljs.core.Keyword(null,"open-ended?","open-ended?",196876425));
var theta_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41784__$1,new cljs.core.Keyword(null,"theta-start","theta-start",-1644036763));
var theta_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41784__$1,new cljs.core.Keyword(null,"theta-length","theta-length",-163292368));
return (new module$node_modules$three$build$three.CylinderGeometry((function (){var or__4253__auto__ = radius_top;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})(),(function (){var or__4253__auto__ = radius_bottom;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})(),(function (){var or__4253__auto__ = height;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})(),(function (){var or__4253__auto__ = radial_segments;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (8);
}
})(),(function (){var or__4253__auto__ = height_segments;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})(),open_ended_QMARK_,(function (){var or__4253__auto__ = theta_start;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})(),(function (){var or__4253__auto__ = theta_length;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return threeagent.impl.util.pi_times_2;
}
})()));
})),threeagent.impl.entities.__GT_MeshEntity((function (p__41785){
var map__41786 = p__41785;
var map__41786__$1 = cljs.core.__destructure_map(map__41786);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41786__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
return (new module$node_modules$three$build$three.ShapeGeometry(shape));
})),threeagent.impl.entities.__GT_MeshEntity((function (p__41787){
var map__41788 = p__41787;
var map__41788__$1 = cljs.core.__destructure_map(map__41788);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41788__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41788__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var radial_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41788__$1,new cljs.core.Keyword(null,"radial-segments","radial-segments",-1625677103));
var height_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41788__$1,new cljs.core.Keyword(null,"height-segments","height-segments",1831894149));
var open_ended_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41788__$1,new cljs.core.Keyword(null,"open-ended?","open-ended?",196876425));
var theta_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41788__$1,new cljs.core.Keyword(null,"theta-start","theta-start",-1644036763));
var theta_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41788__$1,new cljs.core.Keyword(null,"theta-length","theta-length",-163292368));
return (new module$node_modules$three$build$three.ConeGeometry((function (){var or__4253__auto__ = radius;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})(),(function (){var or__4253__auto__ = height;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})(),(function (){var or__4253__auto__ = radial_segments;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (8);
}
})(),(function (){var or__4253__auto__ = height_segments;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})(),open_ended_QMARK_,(function (){var or__4253__auto__ = theta_start;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})(),(function (){var or__4253__auto__ = theta_length;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return threeagent.impl.util.pi_times_2;
}
})()));
})),threeagent.impl.entities.__GT_MeshEntity((function (p__41793){
var map__41794 = p__41793;
var map__41794__$1 = cljs.core.__destructure_map(map__41794);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41794__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var detail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41794__$1,new cljs.core.Keyword(null,"detail","detail",-1545345025));
return (new module$node_modules$three$build$three.Icosahedron((function (){var or__4253__auto__ = radius;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})(),(function (){var or__4253__auto__ = detail;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})()));
})),(function (){
if((typeof threeagent !== 'undefined') && (typeof threeagent.impl !== 'undefined') && (typeof threeagent.impl.entities !== 'undefined') && (typeof threeagent.impl.entities.t_threeagent$impl$entities41795 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {threeagent.entity.IEntityType}
 * @implements {threeagent.entity.IUpdateableEntityType}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
threeagent.impl.entities.t_threeagent$impl$entities41795 = (function (meta41796){
this.meta41796 = meta41796;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(threeagent.impl.entities.t_threeagent$impl$entities41795.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41797,meta41796__$1){
var self__ = this;
var _41797__$1 = this;
return (new threeagent.impl.entities.t_threeagent$impl$entities41795(meta41796__$1));
}));

(threeagent.impl.entities.t_threeagent$impl$entities41795.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41797){
var self__ = this;
var _41797__$1 = this;
return self__.meta41796;
}));

(threeagent.impl.entities.t_threeagent$impl$entities41795.prototype.threeagent$entity$IEntityType$ = cljs.core.PROTOCOL_SENTINEL);

(threeagent.impl.entities.t_threeagent$impl$entities41795.prototype.threeagent$entity$IEntityType$create$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return (new module$node_modules$three$build$three.Object3D());
}));

(threeagent.impl.entities.t_threeagent$impl$entities41795.prototype.threeagent$entity$IEntityType$destroy_BANG_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
return null;
}));

(threeagent.impl.entities.t_threeagent$impl$entities41795.prototype.threeagent$entity$IUpdateableEntityType$ = cljs.core.PROTOCOL_SENTINEL);

(threeagent.impl.entities.t_threeagent$impl$entities41795.prototype.threeagent$entity$IUpdateableEntityType$update_BANG_$arity$4 = (function (_,___$1,obj,___$2){
var self__ = this;
var ___$3 = this;
return obj;
}));

(threeagent.impl.entities.t_threeagent$impl$entities41795.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta41796","meta41796",307890235,null)], null);
}));

(threeagent.impl.entities.t_threeagent$impl$entities41795.cljs$lang$type = true);

(threeagent.impl.entities.t_threeagent$impl$entities41795.cljs$lang$ctorStr = "threeagent.impl.entities/t_threeagent$impl$entities41795");

(threeagent.impl.entities.t_threeagent$impl$entities41795.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"threeagent.impl.entities/t_threeagent$impl$entities41795");
}));

/**
 * Positional factory function for threeagent.impl.entities/t_threeagent$impl$entities41795.
 */
threeagent.impl.entities.__GT_t_threeagent$impl$entities41795 = (function threeagent$impl$entities$__GT_t_threeagent$impl$entities41795(meta41796){
return (new threeagent.impl.entities.t_threeagent$impl$entities41795(meta41796));
});

}

return (new threeagent.impl.entities.t_threeagent$impl$entities41795(cljs.core.PersistentArrayMap.EMPTY));
})()
,threeagent.impl.entities.__GT_MeshEntity((function (p__41800){
var map__41801 = p__41800;
var map__41801__$1 = cljs.core.__destructure_map(map__41801);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41801__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var detail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41801__$1,new cljs.core.Keyword(null,"detail","detail",-1545345025));
return (new module$node_modules$three$build$three.TetrahedronGeometry((function (){var or__4253__auto__ = radius;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})(),(function (){var or__4253__auto__ = detail;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})()));
})),threeagent.impl.entities.__GT_MeshEntity((function (p__41802){
var map__41803 = p__41802;
var map__41803__$1 = cljs.core.__destructure_map(map__41803);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41803__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var detail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41803__$1,new cljs.core.Keyword(null,"detail","detail",-1545345025));
return (new module$node_modules$three$build$three.DodecahedronGeometry((function (){var or__4253__auto__ = radius;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})(),(function (){var or__4253__auto__ = detail;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})()));
})),(function (){
if((typeof threeagent !== 'undefined') && (typeof threeagent.impl !== 'undefined') && (typeof threeagent.impl.entities !== 'undefined') && (typeof threeagent.impl.entities.t_threeagent$impl$entities41808 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {threeagent.entity.IEntityType}
 * @implements {threeagent.entity.IUpdateableEntityType}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
threeagent.impl.entities.t_threeagent$impl$entities41808 = (function (meta41809){
this.meta41809 = meta41809;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(threeagent.impl.entities.t_threeagent$impl$entities41808.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41810,meta41809__$1){
var self__ = this;
var _41810__$1 = this;
return (new threeagent.impl.entities.t_threeagent$impl$entities41808(meta41809__$1));
}));

(threeagent.impl.entities.t_threeagent$impl$entities41808.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41810){
var self__ = this;
var _41810__$1 = this;
return self__.meta41809;
}));

(threeagent.impl.entities.t_threeagent$impl$entities41808.prototype.threeagent$entity$IEntityType$ = cljs.core.PROTOCOL_SENTINEL);

(threeagent.impl.entities.t_threeagent$impl$entities41808.prototype.threeagent$entity$IEntityType$create$arity$3 = (function (_,___$1,cfg){
var self__ = this;
var ___$2 = this;
var cam = (new module$node_modules$three$build$three.OrthographicCamera((-1),(1),(1),(-1),0.1,2000.0));
(cam.active = true);

threeagent.impl.entities.apply_props_clj_BANG_(cam,cfg);

cam.updateProjectionMatrix();

return cam;
}));

(threeagent.impl.entities.t_threeagent$impl$entities41808.prototype.threeagent$entity$IEntityType$destroy_BANG_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
return null;
}));

(threeagent.impl.entities.t_threeagent$impl$entities41808.prototype.threeagent$entity$IUpdateableEntityType$ = cljs.core.PROTOCOL_SENTINEL);

(threeagent.impl.entities.t_threeagent$impl$entities41808.prototype.threeagent$entity$IUpdateableEntityType$update_BANG_$arity$4 = (function (_,___$1,o,cfg){
var self__ = this;
var ___$2 = this;
threeagent.impl.entities.apply_props_clj_BANG_(o,cfg);

o.updateProjectionMatrix();

return o;
}));

(threeagent.impl.entities.t_threeagent$impl$entities41808.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta41809","meta41809",-1302474721,null)], null);
}));

(threeagent.impl.entities.t_threeagent$impl$entities41808.cljs$lang$type = true);

(threeagent.impl.entities.t_threeagent$impl$entities41808.cljs$lang$ctorStr = "threeagent.impl.entities/t_threeagent$impl$entities41808");

(threeagent.impl.entities.t_threeagent$impl$entities41808.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"threeagent.impl.entities/t_threeagent$impl$entities41808");
}));

/**
 * Positional factory function for threeagent.impl.entities/t_threeagent$impl$entities41808.
 */
threeagent.impl.entities.__GT_t_threeagent$impl$entities41808 = (function threeagent$impl$entities$__GT_t_threeagent$impl$entities41808(meta41809){
return (new threeagent.impl.entities.t_threeagent$impl$entities41808(meta41809));
});

}

return (new threeagent.impl.entities.t_threeagent$impl$entities41808(cljs.core.PersistentArrayMap.EMPTY));
})()
]);

//# sourceMappingURL=threeagent.impl.entities.js.map
