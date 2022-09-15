import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { userType, userStateType } from "../Types";


const initialState: userStateType = {
    isLoading: false,
    error: false,
    user: {
        isLogged: false,
    },
    users: []
}

export const signupUser = createAsyncThunk('user/signup', async (values: userType) => {
    console.log("signup valu", values);
    const body = {
        email: 'John@gmail.com',
        username: 'johnd',
        password: 'm38rmF$',
        name: {
            firstname: 'John',
            lastname: 'Doe'
        },
        address: {
            city: 'kilcoole',
            street: '7835 new road',
            number: 3,
            zipcode: '12926-3874',
            geolocation: {
                lat: '-37.3159',
                long: '81.1496'
            }
        },
        phone: '1-570-236-7033'
    }
    await axios.post('https://fakestoreapi.com/users', body)
        .then(res => {
            console.log("Axios signup", res)
            console.log("axios values", values);
        })
    return values;
})



export const loginUser = createAsyncThunk('user/login', async (values: object) => {
    console.log(values);
    const ress = await axios.post('https://fakestoreapi.com/auth/login', values)
        .then((response) => {
            console.log("Axios response Login", response);
            return response.data
        })
        .catch((err) => console.log("axios error", err))
    console.log("response", ress)
    return ress;
})

// export const addToCart = createAsyncThunk('user/addtocard', (id, quantity) => {
    
// })


export const userSlicer = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user.isLogged = true;
            state.error = false;
            console.log('MABROOOOOOOOOOOOOOOOOOOOOOOOOOOOOK', action)
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = false;
            state.user.isLogged = false;
        })
        builder.addCase(signupUser.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(signupUser.fulfilled, (state, action) => {
            state.isLoading = false;
            console.log("MABROOOOK", action)
            state.users.push([action.payload]);
        })
        builder.addCase(signupUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = true;
        })
    },
    reducers: {
        // createUser: (state, action: PayloadAction<usersType>) =>{
        //     state.users.push(action.payload)
        // },
        addToCart: (state, action) =>{
                console.log("ANA HENAAAAAAAAAAAAAAAAAAAAAAAA")
            //if(state.user.isLogged){
                state.user.shoppingCart?.push(action.payload);
                console.log("ADDDDDDDDDDDDDDDDD TOOOOOOOOOOOOOO CAAAAAAAAAAAAAAART",state.user);
            // }
            // else state.error = true;
        }
    }

})


export const {addToCart} = userSlicer.actions;

export default userSlicer.reducer;


