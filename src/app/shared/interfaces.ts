export interface ISignIn {
    email: string;
    password: string;
}

export interface ISignUp extends ISignIn {
    name: string;
    lastName: string;
    username: string;
}

export interface IUser extends ISignUp {
    id: number;
    admin: boolean;
    reports?: ICarReport
}

export interface IApprove {
    approve: boolean;
}

export interface ICar {
    make: string;
    model: string;
    year: number;
    mileage: number;
    lng: number;
    lat: number;
}

export interface ICarReport extends ICar {
    price: number;
}

export interface ISidenavItem {
    name: string;
    route: string;
    icon: string;
}
