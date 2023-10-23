(ns app.views
  (:require [reagent.core :as reagent]
            [threeagent.core :as threeagent]
            [re-frame.core :as re-frame :refer [subscribe dispatch]]
            
            ;; App-related imports
            [app.subs :as sub]
            [app.events :as evt]))

;;; --------------------------------
;;; Utilities
;;; --------------------------------

(defn text
  [s]
  [:span
   {:class ["text-white"]}
   (str s)])


(defn scroll-into-view 
  "Custom implementation of `scrollIntoView` for elements inside a container `<div>`"
  [container-id element-id]
  (let [container (. js/document getElementById container-id)
        element (. js/document getElementById element-id)]
    (when (and container element)
      (let [container-top (.-offsetTop container)
            container-height (.-clientHeight container)
            element-top (.-offsetTop element)
            element-height (.-clientHeight element)]

        (if (< element-top container-top)
          (set! (.-scrollTop container) (- element-top container-top))
          (when (> (+ element-top element-height) 
                   (+ container-top container-height))
            (set! (.-scrollTop container) 
                  (- (- element-top container-top) 
                     (- container-height element-height)))))))))


(comment
  (scroll-into-view "sections" "section-about")
  (scroll-into-view "sections" "criteria-target")
  (scroll-into-view "sections" "team-target")
  (scroll-into-view "sections" "action-target"))


;;; --------------------------------
;;; Animation
;;; --------------------------------

;; Set up animation ticks
(defonce *state (threeagent/atom {:ticks 0}))
(when (= 0 (:ticks @*state))
  (.setInterval js/window #(swap! *state update :ticks inc) 16))


(defn color-box 
  [color size]
  [:box {:dims [size size size]
         :material {:color color
                    :wireframe true}}])


(defn animation-root 
  []
  (let [t (* (/ 1 100) (:ticks @*state))]
    [:object {:position [0 0 -1.6]
              :rotation [0
                         (.sin js/Math t)
                         (.cos js/Math t)]} ; Rotate on Y axis based on :ticks
     [:ambient-light {:intensity 0.8}]
     [color-box "white" 8]]))


#_(defonce scene (threeagent/render animation-root (.-body js/document)))

;; Set up three.js scene
#_(let [threejs-scene (:threejs-scene scene)
      threejs-renderer (:threejs-renderer scene)
      threejs-canvas (:canvas scene)]
  
  ;; Turn on antialiasing
  (set! (.-antialias threejs-renderer) true)

  ;; Make the background transparent
  (set! (.-background threejs-scene) nil)
  (set! (.-alpha threejs-renderer) true)
  (.setClearColor threejs-renderer 0 0)
  
  (let [rect (.. threejs-canvas -parentNode getBoundingClientRect)]
    (set! (.-style threejs-canvas) nil)
    (set! (.-width threejs-canvas) #_400 (.-width rect))
    (set! (.-height threejs-canvas) #_400 (.-height rect))))



;;; --------------------------------
;;; Layout
;;; --------------------------------

(defn split-screen
  []
  [:div.split-screen
   {:class ["flex" "[&>*]:flex-1" "[&>div]:h-[100vh]"
            "text-white"]}

   [:div.split-screen-left
    {:class ["pl-8" "pt-12"]}]

   
   [:div#sections.split-screen-right
    {:class ["pl-8" "pr-12" "pt-12" "overflow-y-scroll"
             "snap-y" "snap-mandatory" "pb-[50vh]"]}

    
    [:section#section-about.target
     {:class ["flex" "flex-col" "gap-8"
              "pt-20" "text-right"
              "snap-start"]}
     
     [:div {:class ["text-lg" "w-1/2" "self-end"]}
      [:p "We are gathering out-of-distribution thinkers and tinkerers to demystify what goes on inside neural networks."]
      [:br]
      [:p "Maybe you are one of them?"]]

     [:div {:class ["text-8xl"]}
      "Discover the world of neurons"]]
    
    
    [:section#section-criteria
     {:class ["flex" "flex-col" "gap-8"
              "pt-[50vh]" "text-left"]}
     
     [:div {:class ["text-lg" "w-1/2" "self-start"]}
      [:p#criteria-target.target {:class ["snap-start" "pt-20"]} "If you're:"]
      [:div.mt-2]
      [:p "... ambitious,"]
      [:div.mt-2]
      [:p "... (pathologically) curious,"]
      [:div.mt-2]
      [:p "... someone who gets riled up when they don't understand something,"]]

     [:div {:class ["text-8xl"]}
      "Then we're looking for you"]]
    

    [:section#section-team
     {:class ["flex" "flex-col" "gap-8"
              "pt-[50vh]" "text-left" "text-lg"]}

     [:div {:class ["w-1/2" "self-end" "text-right"]}
      [:p#team-target.target {:class ["snap-start" "pt-20"]} "We are a fledgling alignment shop in Southeast Asia (Manila)."]
      [:div.mt-2]
      [:p "Humanity's future is at risk if we don't figure out what's going on with machine learning models."]
      [:div.mt-2]]
     

     [:div {:class ["w-2/3" "self-start"]}
      [:p "So we gathered:"]
      [:div.mt-2]
      [:p "... a " [:span {:title "Brian Tan"
                           :class ["hover:blur-sm" "border"]} "🛡PALADIN🛡"] " who co-founded Effective Altruism Philippines,"]
      [:div.mt-2]
      [:p "... a " [:span {:title "Clark Urzo"
                           :class ["hover:blur-sm" "border"]} "👺MAVERICK👺"] " who honed his craft remotely under John Wentworth's SERI MATS program, and"]
      [:div.mt-2]
      [:p "... a " [:span {:title "Kriz Tahimic"
                           :class ["hover:blur-sm" "border"]} "🧙‍♂️WIZARD🧙‍♂️"] " who has mastered the art of " [:code "≪superposition≫"]]
      [:div.mt-8]]

     [:div {:class ["w-2/3" "self-end" "text-right"]}
      [:p "to guide to 2" [:sup "4"] " scholars through the eight-week-long journey to master the Art of Divining Transformers, so that we may soon slay the mystery of giant, inscrutable matrices." ]]]
    

    [:section#section-action
     {:class ["flex" "flex-col" "gap-8"
              "pt-[50vh]" "text-left"]}

     [:div#action-target.target {:class ["text-8xl" "snap-start"]}
      "Waver no more. Heed the call."]

     [:div {:class ["text-8xl" "mt-16" "self-end"]}
      [:button
         [:a {:href  "https://forms.gle/Gq9haz6cUAUcBCXx7"
              :class ["z-50"]}
          "Join us >"]]]]]])


(comment
  (-> (. js/document getElementById "section-action")
      (. scrollIntoView {:smooth true})))


(defn main
  []
  (let [section-about-fn    (fn [] (.getElementById js/document "section-about"))
        section-criteria-fn (fn [] (.getElementById js/document "section-criteria"))
        section-team-fn     (fn [] (.getElementById js/document "section-team"))
        section-action-fn   (fn [] (.getElementById js/document "section-action"))]
    [:div.main
     {:class ["text-white"]}

     [:header
      {:class ["top-0" "sticky" ""
               "flex" "justify-between"
               "px-8" "py-12"
               "[&>*]:text-xl"
               "bg-black"
               "z-10"]}

      [:div.header-left
       {:class ["flex-1" "shrink-0"]}

       [:a
        {:href  "/"
         :class ["flex" "flex-nowrap" "gap-4" "hover:appearance-none"]}

        [:img {:src   "img/whitebox-logo.png"
               :class ["w-8" "h-auto"]}]

        [:p "Whitebox Research"]]]

      [:div.header-right
       {:class ["flex-1" "flex" "justify-end" "gap-16"
                "[&>button]:text-white"]}

       [:button [:a {:href "#section-about"} "About"]]
       [:button [:a {:href "#criteria-target"} "What we look for"]]
       [:button [:a {:href "#team-target"} "Who we are"]]
       [:button [:a {:href "#action-target"} "Join us"]]]]

     [:main
      {:class ["mt-8"]}
      
      [:div.container
       {:class ["absolute" "top-0" "bottom-0" "w-1/2" 
                "flex" "flex-col" "justify-center" "items-center"
                "pl-8"]}

       [:div#whitebox-container
        {:class ["w-fit" "border" "border-white"]}
        [:img
         {:src   "img/whitebox-image.png"
          :class ["opacity-90" "w-[500px]" "h-auto"]}]]]

      [split-screen]]

     [:footer]]))