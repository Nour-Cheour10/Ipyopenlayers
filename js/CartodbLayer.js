import Map from 'ol/Map.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import { XYZ } from 'ol/source.js';
import CartoDB from 'ol/source/CartoDB.js';


function render({ model, el }) {
    let cartodblayer = () => model.get("cartodblayer")
    console.log('test1')
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
   

    model.set('cartodblayer',cartoDBSource)
    console.log('test2')
    console.log(`le nv layer: ${cartodblayer()}`)
    model.save_changes();

}
export default { render };
