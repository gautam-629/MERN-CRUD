import React, { useState, useEffect } from "react";
import { getAllUser } from "../../../http";
import { deleteUser } from "../../../http";
import { Link } from "react-router-dom";
const Table = () => {
  let i=1;
  const [user, setUser] = useState([]);
  
  useEffect(() => {
    getAllusers();
  }, []);

  async function getAllusers() {
    let { data } = await getAllUser();
    setUser(data);
  }

async function deleteUsers(id){
     const {data}= await deleteUser(id);
     console.log(data);
     
     
  }

  return (
    <div>
      <div>
        <table cellSpacing={0} border="1" width={550}>
          <thead>
            <tr>
              <th>id</th>
           <th>Name</th>
           <th>Age</th>
           <th>Address</th>
           <th>Action</th>
           </tr>
          </thead>
          <tbody>
          
          {
           user.map((value)=>
                 <tr key={value._id}>
                  <td> {i++}</td>
                 <td> {value.name}</td>
                 <td>{value.age}</td> 
                  <td>{value.address}</td>
                 <button onClick={()=>deleteUsers(value._id)}>Delete</button>
                 <button><Link to={`/edit/${value._id}`}>Edit</Link></button>
                </tr>
                                  
          )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
