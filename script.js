
    require([
      "esri/WebScene",
      "esri/views/SceneView",
      "esri/Camera",
      "esri/widgets/Home",
      "dojo/domReady!"
    ], function(WebScene, SceneView, Camera, Home) {

    
      /*var map = new Map({
        basemap: "streets",
        ground: "world-elevation"
      });*/
      var scene = new WebScene({
        portalItem:{
         id:"8046207c1c214b5587230f5e5f8efc77" 
        }
      });
      
      var camera = new Camera({
        position: [
          -71.05867189917124,
          42.3638791204699,
          5500// elevation in meters
          //home button
        ],
        tilt:0,
        heading: 0
      })
      
      var camera2 = new Camera({
        position: {
          x: -71.06064603825402,
          y: 42.37695160791253,
          z: 1000
          //monument
        },
        tilt: 0,
        heading: 0
      });

           var camera3 = new Camera({
        position: {
          x: -71.05510264201277,
          y: 42.360647470417376,
          z: 1000
          //marketplace
        },
        tilt: 0,
        heading: 0
      });
      
       var camera4 = new Camera({
        position: {
          x: -70.98923161637532,
          y: 42.34790267301484,
          z: 5000
          //downtown from ocean
        },
        tilt: 35,
        heading: 270
      });
      
      var view = new SceneView({
        container: "viewDiv",
        map: scene,
        viewingMode:"global",
        camera: camera,
        environment: {
            lighting: {
              date: new Date(),
              directShadowsEnabled: true,
              // don't update the view time when user pans.
              // The clock widget drives the time
              cameraTrackingEnabled: false
            }
        },
    });
    
    var homeBtn = new Home({
        view: view
      });

      // Add the home button to the top left corner of the view
    view.ui.add(homeBtn, "top-left");
    
    [mkt, bkr, dtn].forEach(function(button) {
      button.style.display = 'flex';
      view.ui.add(button, 'top-right');
    });
    
    bkr.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera2
      });
    });
    
    mkt.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera3
      });
    });
      
          dtn.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera4
      });
    });


    });
