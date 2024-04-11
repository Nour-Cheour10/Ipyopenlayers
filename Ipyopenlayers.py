import pathlib
import importlib.metadata
import anywidget
import traitlets as tt


try:
    __version__ = importlib.metadata.version("anywidget_n")
except importlib.metadata.PackageNotFoundError:
    __version__ = "unknown"

DIMS = tt.List(tt.Unicode())

class Map (anywidget.AnyWidget):

    _esm = pathlib.Path().parent /"src"/"xarray_fancy_repr"/ "static" / "widget.js"
    DIMS = tt.Unicode("").tag(sync=True)


    def __init__(self, arg1, arg2):
        # Initialize the parent class with arguments
        super().__init__(arg1, arg2)
    def set_model_id(self, model_id):
        self._model_id = model_id

    def get_model_id(self):
        return self._model_id
