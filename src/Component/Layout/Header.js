import { useNavigate } from "react-router-dom";
import { PublicImgUrl } from "../Consant/Url";
import "./Header.css";
export default function Header(){
    const naviget=useNavigate()
    return(
        <>
        <div className="containe">
           <div className="middleContainer">
                <div className="innerDiv">
                   {/* <img src={`${PublicImgUrl}admin.png`} width={140} height={60}></img> */}
                   {/* <h3 style={{textAlign:"center"}}>Admin</h3> */}
                </div>
                <div className="innerDiv2">
                    <div className="heading">
                    <h3> Welcome to Admin page</h3>
                    </div>
                </div>
                <div className="innerDiv3">
                <div className="innerDiv4">
                       <h4>Hii</h4> 
                      

                </div>
                <button className="btnlogout" onClick={()=>naviget('/')}>Log out</button>
                </div>
                
           </div>

        </div>
        </>
    )
}