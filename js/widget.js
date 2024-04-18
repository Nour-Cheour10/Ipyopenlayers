import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import 'ol/ol.css';

function render({ model, el }) {
  el.style.height = '400px';
  console.log(el.style.height);
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

   /*console.log(map.getAllLayers());*/
}

export default { model, el };