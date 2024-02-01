import { Link, useNavigate, useParams } from "react-router-dom";
import "../Common.css";
import { RxUpdate } from "react-icons/rx";
import { MdDelete } from "react-icons/md";
import { GrView } from "react-icons/gr";
import { MdAddBusiness } from "react-icons/md";
import Accordion from 'react-bootstrap/Accordion';
import { useEffect, useState } from "react";
import { DeleteCategoryApi, GetAllCategoryApi, SingleCategoryApi } from "../../../Api/CategoryApi";
export default function Main() {
  const naviget = useNavigate()
  const [data, setData] = useState([])

  const GetData = async () => {
    const tt = await GetAllCategoryApi()
    setData(tt.data)
  }

  const Detelecategory=async (id)=>{
    const ww=await DeleteCategoryApi(id)
    if(ww.status=="success"){
      window.alert("delete category successfully")
      GetData()
    }
  }

  useEffect(() => {
    GetData()
  }, [])



  return (
    <>
      <div className="accordion-div">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Category</Accordion.Header>
            <Accordion.Body>

              <Link style={{ textDecoration: "none" }} to='/dashbord'><p>Show Category</p></Link>

            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Sub-Category</Accordion.Header>
            <Accordion.Body>

              <Link style={{ textDecoration: "none" }} to="/subCategory"><p>Show Sub-Category</p></Link>

            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Product</Accordion.Header>
            <Accordion.Body>

              <Link style={{ textDecoration: "none" }} to='/product'><p>Show Product</p></Link>

            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      <div className="contai">
        <div className="addbtndiv">
          <h1></h1>
          <button type="button" id="addbtn" title="add" onClick={() => naviget('/AddCategory')}><MdAddBusiness />Add</button>
        </div>
        <table id="table" style={{ width: "100%", height: "auto", textAlign: "center", padding: "10px 5px" }} className="table" border="2" >
          <thead>
            <tr>
              <th>Title</th>
              <th>CATEGORY NAME</th>
              <th>ID</th>
              <th>ACTION</th>
            </tr>
          </thead>

          
            {
              data.map((value, index, array) => {
                return (
                  <>

                    <tbody key={index}>
                      <tr style={{ fontSize: "15px" }}>
                        <td>{value.title}</td>
                        <td>{value.category_name}</td>
                        <td>{value._id}</td>
                        <td>
                          <button id="btn"><Link style={{ textDecoration: "none", color: "#fff" }} title="update" to={`/update/${value._id}`}><RxUpdate /></Link></button>
                          <button id="btn" style={{ backgroundColor: "red" }}><Link style={{ textDecoration: "none", color: "#fff" }} title="delete" onClick={()=>Detelecategory(value._id)}><MdDelete /></Link></button>
                          <button id="btn"><Link style={{ textDecoration: "none", color: "#fff" }} title="view" to={`/single/${value._id}`}><GrView /></Link></button>
                        </td>
                      </tr>

                    </tbody>
                  </>
                )

              })
            }


         
        </table>
      </div>
    </>
  )
}