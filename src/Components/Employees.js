import axios from "axios";
import {useState, useEffect} from 'react';
import List from "./List";



function Employee(){
    const [listData, setListData] = useState([]);
    const [selectedListing, setSelectedListing] = useState(null);
    useEffect(listing, [] );
    function listing(){
        axios.get('https://statenweb.mockable.io/employees').then(function(response){
           setListData(response.data);
        });
    }

    function getListById(id){
         setSelectedListing(id);
    }
    if(listData.length === 0){
        return <p className="spinner-border text-warning position-absolute top-50 start-50 translate-middle" role="status" >Currently Loading...</p>
        
    }
    if(selectedListing){

       return <div>
        <List selectedListing= {selectedListing}/>
        <button className="btn btn-primary btn-lg position-absolute bottom-0 start-50 translate-middle-x" onClick={() => setSelectedListing(null)}>Return</button>
        </div>
    }
    return <div className="position-absolute top-50 start-50 translate-middle">
       
        {listData.map((list)=> <p key= {list.id}><button className="btn btn-dark"onClick={()=>getListById(list.id)}>{list.name} - {list.department}</button></p>)}
    </div>
}


export default Employee;