export interface ICustomer {
    id:number
    name:string
    email:string
    address:IAddress
    phone:string
    website:string
    company:ICompany

}

export interface IAddress{
    street:string
    city:string
    zipcode:string
}

export interface IGeo{
    lat:string
    long:string
}

export interface ICompany{
    name:string
    catchPhrase:string
    bs:string
}
