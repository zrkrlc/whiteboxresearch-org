goog.provide('app.core');
app.core.mount = (function app$core$mount(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.main], null),document.getElementById("app"));
});
app.core._main = (function app$core$_main(){
re_frame.core.clear_subscription_cache_BANG_();

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.events","initialize-db","app.events/initialize-db",-1317819610)], null));

return app.core.mount();
});
goog.exportSymbol('app.core._main', app.core._main);

//# sourceMappingURL=app.core.js.map
