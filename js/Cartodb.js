import Map from 'ol/Map.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import OSM from 'ol/source/OSM.js';
import CartoDB from 'ol/source/CartoDB.js';
import 'ol/ol.css';
function render({ model, el }) {
    const mapConfig = {
      'layers': [
        {
          'type': 'cartodb',
          'options': {
            'cartocss_version': '2.1.1',
            'cartocss': '#layer { polygon-fill: #F00; }',
          },
        },
      ],
    };
      const cartoDBSource = new CartoDB({
        account: 'documentation',
        config: mapConfig,
    });
   
    function setArea(n) {
      mapConfig.layers[0].options.sql =
        'select * from european_countries_e where area > ' + n;
    }

    const areaSelect = document.getElementById('country-area');
    setArea(areaSelect.value);
    
    areaSelect.addEventListener('change', function () {
      setArea(this.value);
      cartoDBSource.setConfig(mapConfig);
    });

  el.style.height = '600px';

  const map = new Map({
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
      new TileLayer({
          source: cartoDBSource,
      }),
    ],
    target: el,
    view: new View({
      center: [8500000, 8500000],
        zoom: 2,
    }),
  });

    console.log(map,model)
}
export default { render };
