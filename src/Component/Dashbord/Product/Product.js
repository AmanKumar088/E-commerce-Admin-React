import { Link, useNavigate } from "react-router-dom";
import "../Common.css";
import { RxUpdate } from "react-icons/rx";
import { MdDelete } from "react-icons/md";
import { GrView } from "react-icons/gr";
import { MdAddBusiness } from "react-icons/md";
import Accordion from 'react-bootstrap/Accordion';
import Header from "../../Layout/Header";
import { useEffect, useState } from "react";
import { AllProductApi, DeleteProductApi } from "../../../Api/ProductApi";
export default function Product() {
  const naviget = useNavigate();
  const [data, SetData] = useState([])

  const getData=async ()=>{
    const tt=await AllProductApi()
    SetData(tt.data)
  }

  const deleteProduct=async (id)=>{
    const ww=await DeleteProductApi(id)
    if(ww.status=="success"){
      window.alert("delete product successfully")
      getData()
    }
  }
  useEffect(()=>{
    getData()

  },[])

  return (
    <>
      <Header />
      <div className="accordion-div">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Category</Accordion.Header>
            <Accordion.Body>

              <Link style={{ textDecoration: "none" }} to='/dashbord'>Show Category</Link>

            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Sub-Category</Accordion.Header>
            <Accordion.Body>

              <Link style={{ textDecoration: "none" }} to='/subCategory'>Show Sub-Category</Link>

            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Product</Accordion.Header>
            <Accordion.Body>

              <Link style={{ textDecoration: "none" }} to="/product"><p>Show Product</p></Link>

            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      <div className="contai">
        <div className="addbtndiv">
          <button type="button" id="addbtn" title="add" onClick={() => naviget('/Addproduct')}><MdAddBusiness />Add</button>
        </div>
        <table id="table" style={{ width: "100%", height: "auto", textAlign: "center", padding: "10px 5px", color: "black" }} className="table" border="2" >
          <thead>
            <tr>
              <th>PRODUCT IMG</th>
              <td>SUBCATEGORY NAME</td>
              <th>PRODUCT NAME</th>
              <th>ID</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <>
            {
              data.map((value, index, array) => {
                return (
                  <>

                    <tbody>
                      <tr style={{ fontSize: "15px",verticalAlign:"middle"}}>
                        <td><img src={value.product_img} width={180} height={190}></img></td>
                        <td>{value.sub_category_name}</td>
                        <td>{value.product_name}</td>
                        <td>{value._id}</td>
                        <td>
                          <button id="btn"><Link style={{ textDecoration: "none", color: "#fff" }} title="update" to={`/updateproduct/:${value._id}`}><RxUpdate /></Link></button>
                          <button id="btn" style={{ backgroundColor: "red" }}><Link style={{ textDecoration: "none", color: "#fff" }} title="delete" onClick={()=>deleteProduct(value._id)}><MdDelete /></Link></button>
                          <button id="btn"><Link style={{ textDecoration: "none", color: "#fff" }} title="view" to={`/singleproduct/${value._id}`}><GrView /></Link></button>
                        </td>
                      </tr>

                    </tbody>
                  </>

                )
              })
            }


          </>
        </table>
      </div>
    </>
  )
}