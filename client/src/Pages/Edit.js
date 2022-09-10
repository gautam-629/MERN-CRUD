import React,{useState,useEffect} from 'react'
import {useNavigate,useParams} from 'react-router-dom';
import { singleUser } from '../http';
import { editUser } from '../http';
const Edit = () => {

    
  const navigate=useNavigate();
  const initial={
      name:"",
      age:"",
      address:""
  }

    const [formValue,setFormValue]=useState(initial);
    const{name,age,address}=formValue;
    const [formError,setFormErrors]=useState({});
    const [isSubmit, setisSubmit] = useState(false);
    const {_id}=useParams();

useEffect(()=>{
    loadUserDetails();
},[])

const loadUserDetails = async() => {
    console.log(_id);
    const {data} = await singleUser(_id);
    setFormValue(data);
   
}

    function handleChange(e){
      const {name,value}=e.target;
      setFormValue({...formValue,[name]:value})
    }
    function handleSubmit(e){
      e.preventDefault();
       setFormErrors(validation(formValue));
       setisSubmit(true);
    }
    useEffect(()=>{
        if(Object.keys(formError).length === 0 && isSubmit){
            editUserDetail();
        }
    },[formError]);
    function validation(value){
       let error={};
       if(!value.name){
         error.name="name is reqired";
       }
       if(!value.age){
         error.age="age is required";
       }
       if(!value.address){
         error.address="Address is required";
       }
       return error;
    }
   async function editUserDetail(){
           await editUser(_id,{name,age,address});
           navigate("/");
    }
  return (
    <div className="formWrapper">
        <form action="" onSubmit={handleSubmit}>
         <div>
            <label htmlFor="">Name</label> <br />
            <input type="text" name='name' value={name} onChange={handleChange}/>
            <p>{formError.name}</p>
         </div>
         <div>
            <label htmlFor="">Age</label> <br />
            <input type="number" name='age' value={age} onChange={handleChange}/>
            <p>{formError.age}</p>
         </div>
         <div>
            <label htmlFor="">Address</label> <br />
            <input type="text" name='address' value={address} onChange={handleChange}/>
            <p>{formError.address}</p>
         </div>
         <dir><button onClick={editUserDetail}>update</button></dir>
        </form>
    </div>
  )
}

export default Edit;