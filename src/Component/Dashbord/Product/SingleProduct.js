import "./SingleProduct.css"
import { LiaRupeeSignSolid } from "react-icons/lia";
import { MdLocalOffer } from "react-icons/md";
import { PublicImgUrl } from "../../Consant/Url";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { SingleProductApi } from "../../../Api/ProductApi";
export default function SingleProduct() {

    const { id } = useParams()
    const [data, SetData] = useState({})
    const Product = async function () {
        const res = await SingleProductApi(id)
        console.log(res)
        SetData(res.data)
    }

    useEffect(() => {
        Product()
    }, [])
    return (
        <>
            <div className="containte">
                <div className="ro">
                    <div className="col-6">
                        <div className="img-div">
                            <img src={data.product_img} width={450} height={500}></img>
                        </div>
                    </div>
                    <div className="product-info">
                        <h4>{data.brand_name}</h4>
                        <h5>15,000 Rating & Reviews</h5>
                        <h6 style={{ color: "green" }}>Extra <LiaRupeeSignSolid />3000 off</h6>
                        <h3>{data.product_price} <del>43,999</del> <span style={{ color: "green" }}>6% off</span></h3>
                        
                        <h5>{data.product_highlight}</h5>
                        <h5>{data.model_number}</h5>
                        <h5>{data.operation_version}</h5>
                        <h5>{data.cellular_technology}</h5>
                        <h5>{data.product_color}</h5>
                        <h5>{data.product_rating}</h5>
                        <h5>Available offers</h5>
                        <p><MdLocalOffer style={{ color: "green" }} />Bank Offer10% off on Canara Bank Credit Card Transactions, up to ₹1,000 on orders of ₹5,000 and aboveT&C</p>
                        <p><MdLocalOffer style={{ color: "green" }} /> Bank OfferFlat ₹750 off on OneCard Credit Card and Credit EMI Transactions on orders of ₹12,500 and aboveT&C</p>
                        <p><MdLocalOffer style={{ color: "green" }} /> Bank Offer8% off on Yes Bank Credit Card EMI Transactions, up to ₹1,500 on orders of ₹10,000 and aboveT&C</p>
                        <p><MdLocalOffer style={{ color: "green" }} /> FreebieSpotify Premium - 12M at ₹699T&C</p>
                        <h5>{data.product_description}</h5>
                    </div>
                </div>
            </div>
        </>
    )
}