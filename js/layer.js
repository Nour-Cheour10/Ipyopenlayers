import Tile from 'ol/layer/Tile.js';
import XYZ from 'ol/source/XYZ.js'

function render({ model, el }) {

    new_layer = Tile(
        source=XYZ(
            url='https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        )
)
}
export default { render };

