define([
    'base/js/namespace',
    'base/js/events'
    ], function(Jupyter, events) {

        // Adds a tinkucell above current cell (will be top if no cells)
        var add_cell = function() {
        Jupyter.notebook.
        insert_cell_above('code').
        // Define tinku cell here
        set_text(`# Standard data science libraries
<h1 style="color:red;"> Hey Jupyter Notebook this is Manoj extension</h1>
import pandas as pd
import numpy as np
`);
Jupyter.notebook.select_prev();
Jupyter.notebook.execute_cell_and_select_below();
      };
      // Button to add tinku cell
      var tinkuCellButton = function () {
          Jupyter.toolbar.add_buttons_group([
              Jupyter.keyboard_manager.actions.register ({
                  'help': 'Add tinku cell',
                  'icon' : 'far fa-check-circle',
                  'handler': add_cell
              }, 'add-tinku-cell', 'Tinku cell')
          ])
      }
    // Run on start
    function load_ipython_extension() {
        // Add a tinku cell if there are no cells
        if (Jupyter.notebook.get_cells().length===1){
            add_cell();
        }
        tinkuCellButton();
    }
    return {
        load_ipython_extension: load_ipython_extension
    };
});
