import { useState } from "react";
import "../AddDataCommon.css";
import { useNavigate } from "react-router-dom";
import AddCategoryApi from "../../../Api/CategoryApi";
export default function AddCategory(){
    const [data,SetData]=useState({})
    const naviget=useNavigate()
    const handlechange=(event)=>{
        SetData({...data,[event.target.name]:event.target.value})
    }

    const FormSubmit=async (reload)=>{
        reload.preventDefault();
        // console.log(data)
        const rr=await AddCategoryApi(data)
        // console.log(rr)
        if(rr.status="success"){
            window.alert("add category successfully")
            naviget("/dashbord")
        }
    }

    return(
        <>
            <div className="middle">
            <button type="button" id="backbtn" onClick={()=>naviget('/dashbord')}>Back</button>
                <form onSubmit={FormSubmit}>
                    <h1>Add Category</h1>
                    <label>Title</label>
                    <p><input type="text" placeholder="title" name="title"  onChange={handlechange}></input></p>
                    <label>Category_name</label>
                    <p><input type="text" placeholder="category_name" name="category_name"  onChange={handlechange}></input></p>
                    <p><button type="sumbit">sumbit</button></p>
                </form>
             </div>
        </>
    )
}