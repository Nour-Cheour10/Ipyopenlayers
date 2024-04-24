 layerSource={
    user_name: 'USERNAME',
    type: 'cartodb',
    sublayers: [{
       sql: 'SELECT * FROM table_name',
       cartocss: '#layer {polygon-fill: #F00;}'
    }]
  }

  map= new L.Map('map', {
    zoom:1,
    center:[0,0]
  });

  cartodb.createLayer(map, layerSource,{
    	//options
  }).addTo(map)
  .done(function(layer){
        //do stuff
  });