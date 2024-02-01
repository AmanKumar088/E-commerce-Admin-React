import { useState } from "react"
import "../CategoryMain/UpdateCategory.css";
import { useNavigate, useParams } from "react-router-dom";
import { UpdateCategoryApi } from "../../../Api/CategoryApi";
export default function UpdateCategory(){
    const [data,setData]=useState({})
    const naviget=useNavigate()
    const {id}=useParams();
    const handlechange=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }

    const Updatefrom=async (reload)=>{
        reload.preventDefault();
        console.log(data)
        const tt=await UpdateCategoryApi(data,id)
        if(tt.status=="success"){
            window.alert("update category succuessfully")
            naviget('/dashbord')
        }
    }

    return(
        <>

      
            <div className="contain">
            <button type="button" id="backbtn" onClick={()=>naviget('/dashbord')}>Back</button>
                <form onSubmit={Updatefrom}>
                    <h1>Update category</h1>
                    <label>Title</label>
                    <p><input type="text"  placeholder="title" name="title"  onChange={handlechange}></input></p>
                    <label>category_name</label>
                    <p><input type="text"  placeholder="category_name" name="category_name"  onChange={handlechange} ></input></p>
                    <p><button type="sumbit">Submit</button></p>
                </form>
             </div>
        </>
    )
}