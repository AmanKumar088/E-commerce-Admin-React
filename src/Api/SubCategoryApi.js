import { ApiUrlSubCategory } from "../Component/Consant/Url";
import { subcategoryRoute } from "../Component/Route/Route";

export default async function AddSubCategoryApi(fromdata){
    const response=await fetch(`${ApiUrlSubCategory}${subcategoryRoute.subcategoryAdd}`,{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(fromdata)
    })
    return await response.json()
}

export async function AllSubCategoryApi(){
    const response=await fetch(`${ApiUrlSubCategory}${subcategoryRoute.GetAllSubCategory}`,{
        method:"get",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify()
    })
    return await response.json()

}

export async function SingleSubCategoryApi(id){
   
    const response=await fetch(`${ApiUrlSubCategory}${subcategoryRoute.SingleSubCategory}${id}`,{
        method:"get",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify()
    })
    return await response.json()
}


export async function DeleteSubCategoryApi(id){
    const response=await fetch(`${ApiUrlSubCategory}${subcategoryRoute.DeleteSubCategory}${id}`,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify()
    })
    return await response.json()
}

export async function UpdateSubCategoryApi(fromdata,id){
    const response=await fetch(`${ApiUrlSubCategory}${subcategoryRoute.UpdateSubCategory}${id}`,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(fromdata)
    })
    return await response.json()
}