import { AgGridReact } from "ag-grid-react";
import "./styles.css";
import dataItems from "./data";
import { ColDef } from "ag-grid-community";
import React, { createRef, useEffect } from "react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const columnDefs = () => [
  {
    headerName: "Item",
    field: "item",
    width: 100, // the width here is crucial to reset the position of the header
    minWidth: 100,
    resizable: true,
    /** Any function in ColumnDefs is why the Header refreshed
      only happens after 25.3.0 onwards
      try to 
      1. comment out this function
      2. or change to v 24.*
      the header won't be refreshed.

      The problem is on how ag-grid deal with columnDef changes in v25 onwards
     */
    radomnFn: ()=>{}
  },
  {
    headerName: "Item",
    field: "item",
    resizable: true
  },
  {
    headerName: "Next",
    resizable: true,
    field: "next"
  },
  {
    headerName: "Item",
    resizable: true,
    field: "item"
  },
  {
    headerName: "next",
    resizable: true,
    field: "next"
  },
  {
    headerName: "Item",
    resizable: true,
    field: "item"
  },
  {
    headerName: "Item",
    resizable: true,
    field: "item"
  },
  {
    headerName: "next",
    resizable: true,
    field: "next"
  },
  {
    headerName: "Last",
    resizable: true,
    field: "last"
  }
];
let previousPageSize = 0;
const getFn = ()=>()=>{};
const getGridOptions = () => {
  return { defaultColDef: { resizable: false, onCellClicked: getFn(), onColumnResized:()=>{console.log('resize')}} };
};

class App extends React.Component {
  state={
    index:1
  }
  render(){

    console.log('rendered');
    return (
      <div className="ag-theme-alpine">
        <AgGridReact
          domLayout="autoHeight"
          columnDefs={columnDefs()}
          rowData={dataItems}
          gridOptions={{...getGridOptions()}}
          paginationPageSize={40}
          pagination
          onColumnResized={()=>{console.log('resize')}}
          onPaginationChanged={(e) => {
            const pageSize = e.api.paginationGetPageSize();
            console.log(e.newPage);
            if (e.newPage || pageSize !== previousPageSize) {
              previousPageSize = pageSize;
              // Set new state to trigger ag-grid to rerender
              this.setState({index:this.state.index+1});
            }
          }}
        />
      </div>
    );
  }
}

export default App
