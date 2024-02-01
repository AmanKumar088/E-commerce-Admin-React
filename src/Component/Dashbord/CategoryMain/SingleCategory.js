import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { SingleCategoryApi } from "../../../Api/CategoryApi"

export default function SingleCategory() {
    const [data, setData] = useState({})
    const {id} = useParams()

    const SingleCategory = async () => {
        const res = await SingleCategoryApi(id)
        console.log(res)
        setData(res.data)
    }

    useEffect(() => {
        SingleCategory()
    }, [])

    return (
        <>
        
            <h1 style={{ textAlign: "center" }}>Single category</h1>
            <table style={{ width: "100%", height: "auto", textAlign: "center", padding: "10px 5px" }} className="table" border="2" >
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>CATEGORY NAME</th>
                        <th>ID</th>
                    </tr>
                </thead>
                <>
                    <tbody>
                        <tr style={{ fontSize: "15px" }}>
                            <td>{data.title}</td>
                            <td>{data.category_name}</td>
                            <td>{data._id}</td>
                        </tr>
                    </tbody>


                </>

            </table>
        </>
    )
}