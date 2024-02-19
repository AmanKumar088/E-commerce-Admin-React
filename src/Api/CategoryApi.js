import { ApiUrlCategory } from "../Component/Consant/Url";
import { Route } from "../Component/Route/Route";

export default async function AddCategoryApi(fromdata){
    console.log(fromdata)
    const response=await fetch(`${ApiUrlCategory}${Route.categoryAdd}`,{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(fromdata)
    })
    return await response.json()
}


export async function GetAllCategoryApi(){
    const response=await fetch(`${ApiUrlCategory}${Route.categoryGet}`,{
        method:"get",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify()
    })

    return await response.json()
}


export async function UpdateCategoryApi(fromdata,id){
    const response=await fetch(`${ApiUrlCategory}${Route.categoryUpdate}${id}`,{
        method:"put",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(fromdata)
    })

    return await response.json()

}


export async function SingleCategoryApi(id){
    const response=await fetch(`${ApiUrlCategory}${Route.categorySingle}${id}`,{
        method:"get",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify()
    })
    console.log(response)
    return await response.json()
}

export async function DeleteCategoryApi(id){
    const response=await fetch(`${ApiUrlCategory}${Route.categoryDelete}${id}`,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify()

    })
    return await response.json()

}