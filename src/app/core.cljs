(ns app.core
  (:require [reagent.core :as reagent]
            
            [reagent.dom :as dom]
            [re-frame.core :as re-frame]
            
            ;; App-related imports
            [app.subs :as sub]
            [app.events :as evt]
            [app.views :as views]))


(defn mount []
  (dom/render [views/main]
              (.getElementById js/document "app")))


(defn ^:export ^:dev/after-load -main []
  (re-frame/clear-subscription-cache!)
  (re-frame/dispatch-sync [::evt/initialize-db])
  (mount))