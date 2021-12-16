import axios from 'axios';
import {useEffect, useState} from 'react';

function List({selectedListing}){
    const [selectedListingData, setSelectedListData] = useState(null);
    useEffect(() => {
      axios.get(`https://statenweb.mockable.io/employee/${selectedListing}`).then((r) => setSelectedListData(r.data))
    }, [selectedListing]);
    if(!selectedListingData){
        return <p className="spinner-border text-warning position-absolute top-50 start-50 translate-middle" role="status"> Currently Loading...</p>;
    }
    const {
      name,
      startDate,
      role,
      department,
      photo

    } = selectedListingData
    return <div  className="card container-fluid  d-flex justify-content-center align-items-center p-md-3">
        <img style={{maxHeight: '500px', maxWidth: "500px"}} src={photo} alt={name}/>
        <p>Name: {name}</p>
        <p>Start Date: {startDate}</p>
        <p>Role: {role}</p>
        <p>Department: {department}</p>
    </div>
}
export default List;