import { useState } from "react";
import "../Auth/Account.css";
import { useNavigate } from "react-router-dom";
import { LoginApi } from "../../Api/AdminApi";
import SetStorage from "../Consant/Storage";
export default function AuthLogin(){
    const [data,SetData]=useState({})
    const naviget=useNavigate()
    const FormChange= (event)=>{
        
        SetData({...data,[event.target.name]:event.target.value})
    }

    const FormSubmit=async (reload)=>{
        reload.preventDefault();
        console.log(data)
        const res=await LoginApi(data)
        console.log(res)
        if(res.status=="success"){
            window.alert("Login Successfully")
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
                            <h1>Log in page</h1>
                            <label>Enter_Your_Email</label>
                            <p><input type="email" name="email" placeholder="Enter-Your-Email" onChange={FormChange} ></input></p>

                            <label>Enter_Your_Password</label>
                            <p><input type="password" name="password" placeholder="Password" onChange={FormChange}></input></p>
                            <p><button type="sumbit" >Login</button></p>
                            <p><button type="sumbit" onClick={() => naviget('/signup')}>Signup</button></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
