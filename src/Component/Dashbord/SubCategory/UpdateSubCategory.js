import { useState } from "react";
import "./UpdateSubCategory.css";
import { UpdateSubCategoryApi } from "../../../Api/SubCategoryApi";
import { useNavigate, useParams } from "react-router-dom";
export default function UpdateSubCategory(){
    const [data,setData]=useState({})
    const {id}=useParams()
    const naviget=useNavigate()

    const handlechange=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const Updatefrom=async (reload)=>{
        reload.preventDefault();
        console.log(data)
        const ww=await UpdateSubCategoryApi(data,id)
        if(ww.status=="success"){
            window.alert("update sub category sucessfully")
            naviget("/subCategory")
        }
    }
    return(
        <>
         <div className="contain">
            <button type="button" id="backbtn" onClick={()=>naviget('/dashbord')}>Back</button>
                <form onSubmit={Updatefrom}>
                    <h1>Update sub category</h1>
                    <label>category_name</label>
                    <p><input type="text"  placeholder="category_name" name="category_name"  onChange={handlechange}></input></p>
                    <label>sub_category_name</label>
                    <p><input type="text"  placeholder="sub_category_name" name="sub_category_name"  onChange={handlechange} ></input></p>
                    <p><button type="sumbit">Submit</button></p>
                </form>
             </div>
        </>
    )
}