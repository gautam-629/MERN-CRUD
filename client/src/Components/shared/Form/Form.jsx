import React,{useState,useEffect} from 'react'
import { sendFormData } from '../../../../src/http/';
import {useNavigate} from 'react-router-dom';
const Form = () => {
  const navigate=useNavigate();
    const initial={
        name:"",
        age:"",
        address:""
    }
    const [formValue,setFormValue]=useState(initial);
    const [formError,setFormErrors]=useState({});
    const{name,age,address}=formValue;
    const [isSubmit, setisSubmit] = useState(false);
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
          callAPi();
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
   async function callAPi(){
      await sendFormData({name,age,address});
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
         <dir><button>submit</button></dir>
        </form>
    </div>
  )
}

export default Form;