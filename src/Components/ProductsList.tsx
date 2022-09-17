import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../Services/store"
import { fetchProducts } from "../Services/Reducers/productsReducer"
import { ProductCard } from "./ProductCard"

export const ProductList = () =>{
     const dispatch = useDispatch<AppDispatch>();
     const productList = useSelector((state: RootState) => state.productList)
    useEffect(()=>{
        dispatch(fetchProducts());
    }, [])


    return(<div className=" w-100 h-100">
        <div className="grid grid-cols-3 gap-6">
           {productList.products.map((value:any) => {
            return(<ProductCard product={value} />)
           })}
        </div>
    </div>)
}