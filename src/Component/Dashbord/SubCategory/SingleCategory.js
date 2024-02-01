import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { SingleSubCategoryApi } from "../../../Api/SubCategoryApi"

export default function SingleSubCategory(){
    const [data,setData]=useState({})
    const {id}=useParams()
    const singleData=async ()=>{
        const rr=await SingleSubCategoryApi(id)
        setData(rr.data)
       console.log( setData(rr.data))
    }

    useEffect(()=>{
        singleData()
    },[])


    return(
        <>
         <h1 style={{ textAlign: "center" }}>Single Sub Category data don't show</h1>
            <table style={{ width: "100%", height: "auto", textAlign: "center", padding: "10px 5px" }} className="table" border="2" >
                <thead>
                    <tr>
                        <th>CATEGORY NAME</th>
                        <th>SUB CATEGORY NAME</th>
                        <th>ID</th>
                    </tr>
                </thead>
                <>
                    <tbody>
                        <tr style={{ fontSize: "15px" }}>
                            <td>{data.category_name}</td>
                            <td>{data.sub_category_name}</td>
                            <td>{data._id}</td>
                        </tr>
                    </tbody>


                </>

            </table>
        </>
    )
}