import Map from 'ol/Map.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import {OSM, TileDebug} from 'ol/source.js';
import 'ol/ol.css';


function render({ model, el }) {
    el.style.height = '600px';

    const map = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        new TileLayer({
          source: new TileDebug(),
        }),
      ],
      target: el,
      view: new View({
        center: [0, 0],
        zoom: 1,
      }),
    });
    console.log(map,model)
}
export default { render };