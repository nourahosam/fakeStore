import { integerPropType } from "@mui/utils"


export interface userStateType {
    isLoading: boolean,
    error: boolean,
    user: userType,
    users : any[]
}

export interface userType {
    isLogged: boolean,
    id?: string | Number,
    fullName? : string,
    username? :string,
    email?: string,
    password?: string,
    token?: string,
    shoppingCart?: productType[]
}

export interface cartType {
    id?: Number,
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
    },
    quantity? : Number | string
}

export interface productStateType {
    isLoading: boolean,
    currentProduct?: productType,
    products: any[]
}
