import { useState } from "react"
import { useNavigate } from "react-router-dom"
import SignupApi from "../../Api/AdminApi";
import SetStorage from "../Consant/Storage";

export default function AuthSignup(){
    const[data,SetData]=useState({})
    const naviget=useNavigate();

    const FormChange=(event)=>{
        SetData({...data,[event.target.name]:event.target.value})
    }

    const FormSubmit=async (reload)=>{
        reload.preventDefault();
        console.log(data)
        const res=await SignupApi(data)
        console.log(res)
        if(res.status=="success"){
            window.alert("singup successfully")
            // localStorage.setItem("token",res.token)
            // SetStorage(res)
            setTimeout(()=>{
                naviget('/dashbord')
            },2000)
        }
    }

    return(
        <>
        <div className="outer">
            <div className="inner">
            <div className="middle_div">
                
                <form onSubmit={FormSubmit}>
                    <h1>Create New Account</h1>
                    <label>Enter_Your_name</label>
                    <p><input type="text" placeholder="Enter_Your_name" name="name" onChange={FormChange}></input></p>
                    
                    <label>Enter_Your_Email</label>
                    <p><input type="email" placeholder="Enter_Your_Email" name="email" onChange={FormChange} ></input></p>
                    <label>Enter_Your_Moblie</label>
                    <p><input type="text" placeholder="Enter_Your_mobile" name="phone" onChange={FormChange}></input></p>
                    <label>Create_Your_Password</label>
                    <p><input type="password"  placeholder="Enter_Your_create_Password" name="password" onChange={FormChange}></input></p>
                    <p><button type="sumbit">Signup</button></p>
                    <p><button type="sumbit" onClick={()=>naviget('/')} >Login</button></p>
                </form>
             </div>
            </div>
        </div>
        </>
    )
}