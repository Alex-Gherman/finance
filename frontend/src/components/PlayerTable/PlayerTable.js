import React ,{useState,forwardRef, useEffect}                           from 'react';
import {  useSelector }                                       from 'react-redux';
import MaterialTable, { MTableToolbar}                        from 'material-table';
import {ArrowDownward,Check,ChevronLeft,ChevronRight,Clear,
        DeleteOutline,Edit,FilterList,FirstPage ,LastPage,
        Remove,SaveAlt,Search,ViewColumn ,AddBox, CallMerge} from '@material-ui/icons';

// import data from './rowData.json'
import axios from 'axios';
import Page from "react-page-loading";
import { Helmet } from "react-helmet";
import './PlayerTable.css';


const IfRole = ({children,role}) => {
const user = useSelector( state => state.user.currentUser);
  if ( ! (  user && user.role ) ) return null;
  if ( user.role.includes(role) ) return children;
  return null;
};

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  CallMerge: forwardRef((props, ref) => <CallMerge {...props} ref={ref} />),
  };

  const PlayerTable = () =>{
  
    const [selectedRow, setSelectedRow] = useState(null);
    const [state, setState] = useState({
     columns: [
       { title: 'Date', field: 'date', type:'date',},
       { title: 'Name', field: 'name', type: 'string',},
       { title: 'Einsätze', field: 'einsaetze', type: 'string' ,
         lookup: { 'X': 'X', '-': '-', 'X/F':'X/F','E':'E','D':'D'},
         },
       { title: 'Heim/Auswärts', field: 'heimAuswaerts',type: 'string' ,
       lookup: { 'H': 'H', 'A': 'A',},
         },
       { title: 'Gegner', field: 'gegner', type: 'string',},
       { title: 'Spielort', field: 'spielort', type: 'string',},
       { title: 'Treffpunkt Halle', field: 'treffpunkHtalle', type: 'time',}, 
       { title: 'Lig', field: 'lig',type: 'numeric' ,},
       
    ],
    data:[]
});
           

const TablePageTitle = "Mars Tischtennis 2020 e.V./Tabelle";

return (
  <>
  <Page loader={"bar"} color={"white"} size={9} duration={1}>
                        <Helmet>
                              <title>{TablePageTitle}</title>
                        </Helmet>

    
     <div className="playertaple" >
     <MaterialTable 
     
       icons={tableIcons}
       title="Spielplan"
       columns={state.columns}
      //  data={state.data}
      data={
        query =>
        new Promise((resolve, reject) => {
          let url = '/playertable?'
          url += 'per_page=' + query.pageSize
          url += '&page=' + (query.page + 1)
          url += `&query=` + query.search
          fetch("/api"+url)
            .then(response => response.json())
            .then(result => {
              
              resolve({
                data: result.data,
                page: result.page - 1,
                totalCount: result.totalCount,
              })
            })
        })
      }
      localization={{
        body: {
          emptyDataSourceMessage: 'Keine Einträge',
          addTooltip: 'Hinzufügen',
          deleteTooltip: 'Löschen',
          editTooltip: 'Bearbeiten',
          filterRow: {
            filterTooltip: 'Filter'
          },
          editRow: {
            deleteText: 'Diese Zeile wirklich löschen?',
            cancelTooltip: 'Abbrechen',
            saveTooltip: 'Speichern'
          }
        },
        grouping: {
          placeholder: 'Spalten ziehen ...',
          groupedBy: 'Gruppiert nach:'
        },
        header: {
          actions: 'Aktionen'
        },
        pagination: {
          labelDisplayedRows: '{from}-{to} von {count}',
          labelRowsSelect: 'Zeilen',
          labelRowsPerPage: 'Zeilen pro Seite:',
          firstAriaLabel: 'Erste Seite',
          firstTooltip: 'Erste Seite',
          previousAriaLabel: 'Vorherige Seite',
          previousTooltip: 'Vorherige Seite',
          nextAriaLabel: 'Nächste Seite',
          nextTooltip: 'Nächste Seite',
          lastAriaLabel: 'Letzte Seite',
          lastTooltip: 'Letzte Seite'
        },
        toolbar: {
          addRemoveColumns: 'Spalten hinzufügen oder löschen',
          nRowsSelected: '{0} Zeile(n) ausgewählt',
          showColumnsTitle: 'Zeige Spalten',
          showColumnsAriaLabel: 'Zeige Spalten',
          exportTitle: 'Export',
          exportAriaLabel: 'Export',
          exportName: 'Export als CSV',
          searchTooltip: 'Suche',
          searchPlaceholder: 'Suche'
        }
      }}
 

       onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.id))}
       options={{
        search: true,
        exportButton: true,
        grouping:true,
        
        rowStyle: rowData => ({
          backgroundColor: (selectedRow === rowData.tableData.id) ? 'orange' : '#FFF'}) 
                }}
      components={{
        Toolbar: props => (
          <div 
          style={{
            backgroundColor:'orange',
            color:'black',
            fontWeight:"bolder",
            fontFamily: '"Titillium Web", sans-serif',
          }}
          >
            <MTableToolbar {...props} />
              <p style={{ fontSize: '1.25 rem', fontFamily: '"Titillium Web", sans-serif !important',fontWeight: '500',
                          lineHeight: '1.6',letterSpacing: '0.0075em',display: 'block',// marginBlockStart: '2.33em', // marginBlockEnd: '1em',
                          marginInlineStart: '80%',}}
              />
          </div>),    
                }}
       editable={{
         onRowAdd: (newData) =>
          new Promise((resolve) => {
             setTimeout(() => {
               setState((prevState) => {
                 const data = [...prevState.data];
                 axios.post("/playertable", newData);
                 data.push(newData);
                
                resolve();
                 return { ...prevState, data };
               });
               
             }, 600);
           }),
         onRowUpdate: (newData, oldData) =>
           new Promise((resolve) => {
             setTimeout(() => {
               if (oldData) {
                 setState((prevState) => {
                   const data = [...prevState.data];
                   
                   data[data.indexOf(oldData)] = newData;
                 
                   const id = newData._id
                   axios.put(`/playertable/${id}`, newData); 

                   resolve();
                   return { ...prevState, data };
                 });
               }
             }, 600);
          }),
         onRowDelete: (oldData) =>
           new Promise((resolve) => {
             setTimeout(() => {
               setState((prevState) => {
                 const data = [...prevState.data];
                 const id = oldData._id
                 data.splice(data.indexOf(oldData), 1);
                 axios.delete(`/playertable/${id}`, data);
                 resolve();
                 return { ...prevState, data };
               });
             }, 600);
           }),
       }} />
     </div>
     
     </Page>
     </>
   );
 }
 export default PlayerTable
