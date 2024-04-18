/*import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import 'ol/ol.css';

function render({ model, el }) {
  let dims = () => model.get("DIMS")
  model.set("el.style.height",dims)  
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
    console.log(el.style.height)
    console.log(DIMS)
}
export default { model, el };
*/
import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import 'ol/ol.css';

function render({ model, el }) {
     let DIMS = () => model.get("DIMS")
     console.log(`The 'my_value' changed to: ${DIMS}`);
     el.style.height = DIMS;
     console.log(`height: ${el.style.height}`)
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

       /*console.log(map.getAllLayers());*/
}

export default { render };