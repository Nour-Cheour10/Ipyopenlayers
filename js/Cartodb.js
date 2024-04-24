import Map from 'ol/Map.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import OSM from 'ol/source/OSM.js';
import CartoDB from 'ol/source/CartoDB.js';
import 'ol/ol.css';

function render({ model, el }) {
    let value = () => model.get("value")
    const span = document.createElement("span");

    span.style.fontWeight = "bold";
    span.style.marginRight = "10px"; 
    
    const textNode = document.createTextNode('Show european countries larger than');
    
    // Append the text node to the <span> element
    span.appendChild(textNode);
    const select = document.createElement("select");
    select.classList.add("form-select");

    const options = [0, 5000, 10000, 50000, 100000];
    options.forEach(optionValue => {
        const option = document.createElement("option");
        option.value = optionValue;
        option.textContent = `${optionValue} km²`;
        select.appendChild(option);
    });

    function updateButtonContent() {
        const value = model.get("value");
        select.value = value;
    }

    select.addEventListener("change", () => {
        const selectedValue = select.value;
        model.set("value", selectedValue);
        model.save_changes();
    });

    model.on("change:value", updateButtonContent);

    el.appendChild(span);
    el.appendChild(select);

    updateButtonContent();

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
        const value = model.get("value");
        mapConfig.layers[0].options.sql =
            'select * from european_countries_e where area > ' + n;
    }

    const areaSelect = select; 
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

    console.log(map, model);
}

export default { render };
