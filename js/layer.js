import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';

function render({ model, el }) {
    let layer = model.get("layer");

    let map = new Map({
        target: el,
        layers: [layer],
        view: new View({
            center: [0, 0],
            zoom: 2
        })
    });

    let newLayer = new TileLayer({
        source: new XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        })
    });
    model.set('layer', newLayer);
    model.save_changes();
    console.log('test layer');
}

export default { render };
