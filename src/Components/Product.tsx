import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchOneProduct } from '../Services/Reducers/productsReducer';
import { addToCart } from '../Services/Reducers/userReducer';
import { AppDispatch, RootState } from '../Services/store';
import { Header } from './Header';

export const Product = () => {
    const { id } = useParams();
    const product = useSelector((state: RootState) => state.productList.currentProduct)
    const currentUser = useSelector((state: RootState) => state.userList.user);
    const dispatch = useDispatch<AppDispatch>();
    const [counter, setCounter] = useState(0);
    const newId = product?.id;
    useEffect(() => {
        //console.log(params);
        dispatch(fetchOneProduct(id));
    }, []);

    const handleClick = (e: any) => {
        // if(currentUser.token){
        dispatch(addToCart({ id: product?.id, quantity: 50 }));
        // }
    }

    console.log(product)
    return (
        <div className='px-36'>
        <Header />
        <div className=' h-full w-full'>
            <div className='flex justify-center items-center w-full'>
                <div className='w-2/5 rounded-3xl bg-blue-500 h-[400px] overflow-hidden m-10'>
                    <img className='w-full' src={product?.image} />
                </div>
                <div className='w-1/3 m-5 text-left'>
                    <p className='text-sm pb-5 uppercase text-orange-500 font-bold tracking-widest'>{product?.category}</p>
                    <p className='text-4xl font-bold pb-5'>{product?.title}</p>
                    <p className='text-xs font-semibold pb-5 text-gray-400'>{product?.description}</p>
                    <p className='text-3xl font-bold'>$<>{product?.price}</></p>
                    <div className='mt-5 flex justify-between'>
                        <div className="flex flex-row h-10 w-2/5 rounded-lg relative bg-transparent mt-1">
                            <button onClick={() => { if (counter != 0) setCounter(counter - 1) }} data-action="decrement" className=" bg-gray-200 text-orange-500 hover:text-orange-700 hover:bg-gray-400 h-full w-20 rounded-l-lg cursor-pointer outline-none">
                                <span className="m-auto text-2xl font-extrabold">−</span>
                            </button>
                            <input className="outline-none focus:outline-none text-center w-full bg-gray-200 font-semibold text-md hover:text-black focus:text-black  md:text-base cursor-default flex items-center text-gray-700" name="custom-input-number" value={counter}></input>
                            <button onClick={() => { if (counter < 5) setCounter(counter + 1) }} data-action="increment" className="bg-gray-200 text-orange-500  hover:text-orange-700 hover:bg-gray-400 h-full w-20 rounded-r-lg cursor-pointer">
                                <span className="m-auto text-2xl font-extrabold">+</span>
                            </button>
                        </div>
                        <button onClick={handleClick} className='border w-1/2 h-10 bg-orange-500 rounded-lg mt-1 text-white'>Add to cart</button>
                        <div>

                        </div>
                    </div>
                </div>
                {/* <p><>{product?.id}</></p>
            <button onClick={handleClick} className='border'>Add to cart</button> */}
            </div>
        </div>
        </div>)
}