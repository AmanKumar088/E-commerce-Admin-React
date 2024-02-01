import { ApiUrlProduct } from "../Component/Consant/Url"
import { ProductRoute } from "../Component/Route/Route"


export default async function AddProductApi(fromdata){
    const response=await fetch(`${ApiUrlProduct}${ProductRoute.productAdd}`,{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(fromdata)
    })
    return await response.json()
}

export async function AllProductApi(){
    const response=await fetch(`${ApiUrlProduct}${ProductRoute.productGetAll}`,{
        method:"get",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify()
    })
    return await response.json()

}

export async function SingleSubCategoryApi(id){
   
    const response=await fetch(`${ApiUrlProduct}${ProductRoute.productSingle}${id}`,{
        method:"get",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify()
    })
    return await response.json()
}


export async function DeleteProductApi(id){
    const response=await fetch(`${ApiUrlProduct}${ProductRoute.productDelete}${id}`,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify()
    })
    return await response.json()
}

export async function UpdateProductApi(fromdata,id){
    const response=await fetch(`${ApiUrlProduct}${ProductRoute.productUpdate}${id}`,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(fromdata)
    })
    return await response.json()
}