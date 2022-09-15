import { integerPropType } from "@mui/utils"


export interface userStateType {
    isLoading: boolean,
    error: boolean,
    user: userType,
    users : any[]
}

export interface userType {
    isLogged: boolean,
    fullName? : string,
    email?: string,
    password?: string,
    token?: string,
    shoppingCart?: cartType[]
}

export interface cartType {
    id: Number,
    quantity: Number
}

export interface productType {
    id: Number,
    title: string,
    price: Number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: Number,
        count: Number
    }
}

export interface productStateType {
    isLoading: boolean,
    currentProduct?: productType,
    products: any[]
}
