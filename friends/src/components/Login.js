import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
const initialValues = {
    username: "",
    password: ""
}
function Login() {
    const { push } = useHistory();
    const [formValues, setFormvalues] = useState(initialValues)
    
const handleChanges= (e)=> {
setFormvalues({ ...formValues, [e.target.name]: e.target.value});
}
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', formValues)
    .then((res) => {window.localStorage.setItem('token',res.data.payload);
    push("/friends")
})
    .catch(err => console.log(err.message))
};
    
    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input id="username" name='username'value={formValues.username} onChange={handleChanges}/>
        <label htmlFor="password" >Password</label>
        <input id="password" name='password' value={formValues.password} onChange={handleChanges} type='password'/>
    
        <button>Log In</button>
        </form>
    )
}

export default Login