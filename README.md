# Re-frame template

## Setup

1. Run `npm install` and `npm install -g npm-run-all cross-env`
2. Run `npm run dev` or `npm run release`

## Dependencies

### Clojure

````clojure
{org.clojure/clojure    {:mvn/version "1.10.3"}
 org.clojure/core.async {:mvn/version "1.5.648"}
 metosin/reitit         {:mvn/version "0.5.5"}
 datascript/datascript  {:mvn/version "1.3.10"}
````

### ClojureScript

```clojure	
{org.clojure/clojurescript {:mvn/version "1.11.4"}
 thheller/shadow-cljs      {:mvn/version "2.17.0"}
 proto-repl/proto-repl     {:mvn/version "0.3.1"}
 cider/cider-nrepl         {:mvn/version "0.26.0"}
 cider/piggieback          {:mvn/version "0.5.2"}
 reagent/reagent           {:mvn/version "1.1.0"}
 re-frame/re-frame         {:mvn/version "1.3.0-rc3"}
 day8.re-frame/http-fx     {:mvn/version "0.2.4"}}
```

## Notes

This is a reusable template for rapid frontend prototyping with `re-frame`. It's also easy to swap it for `re-posh` just by adding it as a dependency. All routing is done via `reitit` and its various sub-libraries.

The structure of the codebase follows the examples in `re-frame`'s documentation:

```
src/
├─ core.cljs
├─ events.cljs
├─ subs.cljs
├─ views.cljs
```

It is recommended to stick to this arrangement until your codebase grows significantly.