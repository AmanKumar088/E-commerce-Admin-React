import { useState } from "react";
import "./AddProduct.css";
import { useNavigate, useParams } from "react-router-dom";
import AddProductApi from "../../../Api/ProductApi";

export default function AddProduct(){
    const [data,SetData]=useState({})
    const naviget=useNavigate()

    const handlechange=(event)=>{
        SetData({...data,[event.target.name]:event.target.value})
    }

  const handlechangeFile =async (event)=>{
    SetData({...data,[event.target.name]:event.target.files[0]})
  }
    const FormSubmit=async (reload)=>{
        reload.preventDefault();
        const file=new FormData()
        Object.keys(data).forEach(key=>file.append(key,data[key]))
        // console.log(data)

        const ww=await AddProductApi(file)
        console.log(ww)
        if(ww.status=="success"){
            window.alert("add product successfully")
            naviget('/product')
        }
    }



    return(
        <>
            <div className="middle_div1">
            <button type="button" id="backbtn" onClick={()=>naviget('/product')}>Back</button>
                <form onSubmit={FormSubmit}>
                    <h1>Add Product</h1>
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
                    <p><input type="file" placeholder="uploadimg" name="product_img"  onChange={handlechangeFile}></input></p>
                    <p><button type="sumbit">sumbit</button></p>
                </form>
             </div>
        </>
    )
}