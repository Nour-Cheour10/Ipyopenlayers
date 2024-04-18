import pathlib
import importlib.metadata
import anywidget
import traitlets as tt
from IPython.display import display, HTML
import json


try:
    __version__ = importlib.metadata.version("anywidget_n")
except importlib.metadata.PackageNotFoundError:
    __version__ = "unknown"

class Maps (anywidget.AnyWidget):  
    _esm = pathlib.Path("src/IpyOpenLayer_repr/static/widget.js")
    _css = pathlib.Path("src/IpyOpenLayer_repr/static/widget.css")
    DIMS = tt.Unicode().tag(sync=True)

    def __init__(self):
        super().__init__()
    
    def set_model_id(self, model_id):
        self._model_id = model_id

    def get_model_id(self):
        return self._model_id
      
    def add_layer(self, layer):
        layer_json = json.dumps(layer)
        display(Javascript(f"""
            var layer = JSON.parse('{layer_json}');
            m.addLayer(layer);
        """))   
         
    '''def get_all_layers():
        return super().getAllLayers()
'''
        
class MapTile (anywidget.AnyWidget):

    _esm = pathlib.Path().joinpath("src","IpyOpenLayer_repr","static","CanvasTiles.js")
    value = tt.Unicode().tag(sync=True)
    
class Cartodb (anywidget.AnyWidget):
    _esm = pathlib.Path().joinpath("src","IpyOpenLayer_repr","static","Cartodb.js")
    value = tt.Unicode().tag(sync=True)
