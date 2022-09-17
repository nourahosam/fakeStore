import { useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { useSelector } from 'react-redux'
import { RootState } from '../Services/store'
import { Cart } from './Cart'

export const Header = () => {
    const cartCount = useSelector((state:RootState) => state.userList.user.shoppingCart?.length)
    const [modal, setModal] = useState(false);
    return (
        <div className="flex mt-5 w-full h-20 border-b justify-between">
            <div className='flex w-1/2'>
                <h1 className="mr-10 text-2xl font-semibold font-mono lowercase">Sneakers</h1>
                <ul className="flex justify-between w-full h-20">
                    <li className="pb-10 hover:border-b-4 hover:border-b-orange-400">Collections</li>
                    <li className="pb-10 hover:border-b-4 hover:border-b-orange-400">Men</li>
                    <li className="pb-10 hover:border-b-4 hover:border-b-orange-400">Women</li>
                    <li className="pb-10 hover:border-b-4 hover:border-b-orange-400">About</li>
                    <li className="pb-10 hover:border-b-4 hover:border-b-orange-400">Contact</li>
                </ul>
            </div>
            <div className='flex justify-between text-3xl'>
                <div className="relative inline-block" >
                
                    <AiOutlineShoppingCart className="text-3xl text-gray-700 fill-current mr-5 cursor-pointer" onClick={()=>setModal(!modal)}/>
                    <span className="absolute top-0 right-5 inline-flex items-center justify-center px-2 py-1 text-xs font-bold cursor-pointer leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full" onClick={()=>setModal(!modal)}>{cartCount}</span>
                    <Cart modal={modal} setModal={setModal} />
                </div>
                <CgProfile />
            </div>
        </div>
    )
}