import { useState } from "react";
import "../AddDataCommon.css";
import { useNavigate } from "react-router-dom";
import AddSubCategoryApi from "../../../Api/SubCategoryApi";
export default function AddSubCategory(){
    const [data,SetData]=useState({})
    const naviget=useNavigate()
    const handlechange=(event)=>{
        SetData({...data,[event.target.name]:event.target.value})
    }

    const FormSubmit=async (reload)=>{
        reload.preventDefault();
        console.log(data)
        const dd=await AddSubCategoryApi(data)
        if(dd.status=="success"){
            window.alert("update subcategory successfully")
            naviget('/subCategory')
        }
    }

    return(
        <>
            <div className="middle">
                <button type="button" id="backbtn" onClick={()=>naviget('/subCategory')}>Back</button>
                <form onSubmit={FormSubmit}>
                    <h1>Add SubCategory</h1>
                    <label>Category Name</label>
                    <p><input type="text" placeholder="category name" name="category_name"  onChange={handlechange}></input></p>
                    <label>Sub Category Name</label>
                    <p><input type="text" placeholder="sub category" name="sub_category_name" onChange={handlechange}></input></p>
                    <p><button type="sumbit">sumbit</button></p>
                </form>
             </div>
        </>
    )
}