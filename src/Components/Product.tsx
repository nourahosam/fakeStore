import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchOneProduct } from '../Services/Reducers/productsReducer';
import { addToCart } from '../Services/Reducers/userReducer';
import { AppDispatch, RootState } from '../Services/store';

export const Product = () => {
    const { id } = useParams();
    const product = useSelector((state: RootState) => state.productList.currentProduct)
    const currentUser = useSelector((state: RootState) => state.userList.user);
    const dispatch = useDispatch<AppDispatch>();
    const newId = product?.id;
    useEffect(() => {
        //console.log(params);
        dispatch(fetchOneProduct(id));
    }, []);

    const handleClick = (e: any) => {
       // if(currentUser.token){
            dispatch(addToCart({id: product?.id,quantity: 50}));
       // }
    }

    console.log(product)
    return (<div className='bg-pink-400 h-full w-full'>
        <div>
            <p><>{product?.id}</></p>
            <button onClick={handleClick} className='border'>Add to cart</button>
        </div>
        hi
    </div>)
}