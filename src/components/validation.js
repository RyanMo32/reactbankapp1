import React, { useState } from 'react'
import {omit} from 'lodash'
export const UserContext = React.createContext(null);
  

const useForm = () => {
    const [values, setValues] = React.useState({});
    const [errors, setErrors] = React.useState({});
    
    const validate = (event, name, value) => {

        switch (name) {
            case 'name':
                if(value.length <= 4){
                    setErrors({
                        ...errors,
                        name:'Username must be at least 5 characters'
                    })
                }else{
                    let newObj = omit(errors, "name");
                    setErrors(newObj);
                }
                break;
        
            case 'email':
                if(
                    !new RegExp( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)
                ){
                    setErrors({
                        ...errors,
                        email:'Enter a valid email address'
                    })
                }else{
                    let newObj = omit(errors, "email");
                    setErrors(newObj); 
                }
            break;
            
            case 'password':
                if(
                    !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
                ){
                    setErrors({
                        ...errors,
                        password:'Password minimum 8 charaters and include uppercase, lowercase and number'
                    })
                }else{
                    let newObj = omit(errors, "password");
                    setErrors(newObj);                   
                }
            break;
            
            default:
                break;
        }
    }

    const handleChange = (event) => {
        event.persist();

        let name = event.target.name;
        let val = event.target.value;
        
        validate(event,name,val);

        setValues({
            ...values,
            [name]:val,
        })
    }

    return {
        values,
        errors,
        handleChange,
    }
}

export default useForm