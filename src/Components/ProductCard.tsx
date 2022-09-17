import { useEffect } from "react"
import { Link } from "react-router-dom";

export const ProductCard = (props: any) => {

    useEffect(() => {
        
    }, [])
    return (
    <Link to={{pathname:"/product/"+props.product.id}}>
    <div className="bg-white h-96 flex flex-col justify-around items-center p-5" >
        <div className="w-[300px] overflow-hidden h-52 bg-blue">
            <img src={props.product.image} className='w-[300px]' />
        </div>
        <div className="text-left">
            <p className="text-left font-semibold">{props.product.title}</p>
            <p>{props.product.category}</p>
            <p className="text-left font-semibold">${props.product.price}</p>
        </div>
    </div>
    </Link>)
}