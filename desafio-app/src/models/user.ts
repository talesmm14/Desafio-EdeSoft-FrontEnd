export interface User {
    id: number,
    username: string,
    password: string,
    name: {
        firstname: string,
        lastname: string
    },
    address: {
        city: string,
        street: string,
        number: string,
        zipcode: string,
        geolocation: {
            lat: string,
            long: string
        }
    },
    phone: string
}