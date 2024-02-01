import { useState } from "react"
import { UpdateProductApi } from "../../../Api/ProductApi"
import { useNavigate, useParams } from "react-router-dom"

export default function UpdateProduct(){
    const [data,setData]=useState({})
    const {id}=useParams()
    const naviget=useNavigate()

    const handlechange=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }

    const FormSubmit=async (reload)=>{
        reload.preventDefault();
        console.log(data)
        const rr=await UpdateProductApi(data,id)
        if(rr.status=="success"){
            window.alert("update product successfully")
            naviget('/product')
            console.log(rr)
        }
    }
    return(
        <>
         <div className="contain">
            <button type="button" id="backbtn" onClick={()=>naviget('/product')}>Back</button>
            <form onSubmit={FormSubmit}>
                    <h1>Update Product</h1>
                    <label>Brand Name</label>
                    <p><input type="text" placeholder="brand_name" name="brand_name" onChange={handlechange}></input></p>
                    <label>Model Number</label>
                    <p><input type="text" placeholder="model_number" name="model_number"  onChange={handlechange}></input></p>
                    <label>Operation Version</label>
                    <p><input type="text" placeholder="operation_version" name="operation_version"  onChange={handlechange}></input></p>
                    <label>Cellular Technology</label>
                    <p><input type="text" placeholder="cellular_technology" name="cellular_technology"  onChange={handlechange}></input></p>
                    <label>Product Price</label>
                    <p><input type="text" placeholder="product_price" name="product_price"  onChange={handlechange}></input></p>
                    <label>Product Color</label>
                    <p><input type="text" placeholder="product_color" name="product_color"  onChange={handlechange}></input></p>
                    <label>Product Higtlight</label>
                    <p><input type="text" placeholder="highlight" name="product_highlight"  onChange={handlechange}></input></p>
                    <label>Product Description</label>
                    <p><input type="text" placeholder="description" name="product_description"  onChange={handlechange}></input></p>
                    <label>Product Rating</label>
                    <p><input type="text" placeholder="rating" name="product_rating"  onChange={handlechange}></input></p>
                    <label>SubCategory Name</label>
                    <p><input type="text" placeholder="subctegory_name" name="sub_category_name"  onChange={handlechange}></input></p>
                    <label>Product Name</label>
                    <p><input type="text" placeholder="product_name" name="product_name"  onChange={handlechange}></input></p>
                    <label>Product Image</label>
                    <p><input type="file" placeholder="uploadimg" name="product_img"  onChange={handlechange}></input></p>
                    <p><button type="sumbit">sumbit</button></p>
                </form>
             </div>
        
        </>
    )
}