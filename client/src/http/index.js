import axios from 'axios';

const api=axios.create({
    baseURL:process.env.REACT_APP_API_URL,
    withCredentials:true,
    headers:{
        'content-type':'application/json',
        'Accept':'application/json'
    },
});

export const sendFormData=(data)=>{
    return api.post('/api/create',data);    
}
export const getAllUser=()=>{
    return api.get('/api/getAll');
}
export const deleteUser=(id)=>{
    return api.delete(`/api/delete/${id}`);
}

export const singleUser=(id)=>{
       return api.get(`/api/getsingle/${id}`)
}
export const editUser=(id,user)=>{
    return api.put(`/update/${id}`,user);
}
export default api;