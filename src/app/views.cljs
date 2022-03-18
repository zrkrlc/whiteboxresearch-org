(ns app.views
  (:require [reagent.core :as reagent]
            [re-frame.core :as re-frame :refer [subscribe dispatch]]
            
            ;; App-related imports
            [app.subs :as sub]
            [app.events :as evt]))


(defn main
  []
  [:div.main
   [:h1 "Hello, world!"]])