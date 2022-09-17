import { useSelector } from "react-redux"
import { RootState } from "../Services/store"

export const Cart = (props: any) => {
    const shoppingCart = useSelector((state: RootState) => state.userList.user.shoppingCart);
    
    return (
    <>
    {props.modal ? (
        <div className=" fixed z-10 bg-white mt-5 w-[300px] top-10 right-32 shadow-2xl" >
        <div className="border-b">
            <p className="text-left p-3 text-sm font-semibold">Cart</p>
        </div>
        <div>
            {shoppingCart?.map(el => {
                var quan: any = el.quantity
                var price: any = el.price
                var total: Number = quan * price
                return (<div className="w-[350px] flex">
                    <div className="w-[50px] h-[50px] overflow-hidden m-5">
                        <img src={el.image} className="w-[50px]"/>
                    </div>
                    <div className="text-left text-sm mt-5 w-[200px]">
                        <p className="text-gray-400">{el.title}</p>
                        <p className="text-gray-400"><>${el.price} x {el.quantity}</> <span className="font-semibold text-black">$<>{total}</></span></p>
                    </div>
                </div>)
            })}
            <div className="flex justify-around">
            <button className="bg-orange-500 hover:bg-orange-400 w-full h-10 rounded-lg font-semibold text-sm text-white m-5">Checkout</button>
            </div>
        </div>
    </div>
    ) : null}
    
    </>)
}