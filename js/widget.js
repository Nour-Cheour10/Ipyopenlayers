import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import 'ol/ol.css';
import { useGeographic } from 'ol/proj';

useGeographic();


function render({ model, el }) { 
    
/*  let DIMS = () => model.get("DIMS")
  el.style.height=DIMS()*/
  function on_change() {   
          let DIMS = () => model.get("DIMS")
          console.log(`The 'my_value' changed to: ${model.get("DIMS")}`);
          el.style.height = DIMS();
          console.log(`height: ${el.style.height}`)
       }
     model.on("change:DIMS", on_change);
  let center = () => model.get("center")
    
  const map = new Map({
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    target: el,
    view: new View({
      center: center(),
      zoom: 2,
    }),
  });    
    console.log(el.style.height);
    console.log(center());
    
    function on_center_change() { 
    const newCenter = center();
    console.log(`The 'center' changed to: ${newCenter}`);
    map.getView().setCenter(newCenter);
    console.log(map.getView().getCenter())
  }
    
  // Ecoute des changements de centre du modèle
  model.on("change:center", on_center_change);  
}    

export default { render };

/*
import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import 'ol/ol.css';


function render({ model, el }) {
     function on_change() {   
          let DIMS = () => model.get("DIMS")
          console.log(`The 'my_value' changed to: ${model.get("DIMS")}`);
          el.style.height = model.get("DIMS");
          console.log(`height: ${el.style.height}`)
       }
     model.on("change:DIMS", on_change);

          const map = new Map({
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        target: el,
        view: new View({
          center: [0, 0],
          zoom: 2,
        }),
      });
        console.log(el.style.height);
        console.log("Hello");

       /console.log(map.getAllLayers());/
}

export default { render };
*/
