import { ApiUrl } from "../Component/Consant/Url";
import { Route } from "../Component/Route/Route";

export default async function SignupApi(fromdata){
    const res=await fetch(`${ApiUrl}${Route.signup}`,{
        method:"post",
        headers:{
            "Content-Type":"application/json",
            // "Authorization":`${localStorage.getItem("token","name")}`
        },
        body:JSON.stringify(fromdata)
    })
    return await res.json()
}


export  async function LoginApi(data){
    // console.log(data)
    const response=await fetch(`${ApiUrl}${Route.login}`,{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)

    })
    return await response.json()
}