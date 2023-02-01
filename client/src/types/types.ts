export interface IUsers {
    fullName:string
    tel: string
    email: string
    location:string
    pic:string
}

export interface IUser {
    email?:string
    token?: string
}

export interface IContext extends IUser {
    authenticate: (email:string, password:string)=> Promise<void>
    register: (fullName:string, email:string, password:string, tel:string, location:string, pic:string)=> Promise<void>
    logout: ()=>void
}



export interface IAuthProvider{
    children: JSX.Element
}

export interface AnimateProps {
    children: React.ReactNode;
    layout?: boolean;
    className?: string;
    direction?: 'left' | 'right' | 'up' | 'down' | 'none';
    distance?: number;
    durationIn?: number;
    durationOut?: number;
  }

export interface RegisterValues {
    fullName: string;
    email: string;
    tel: string;
    location: string;
    password: string;
    pic: string;
  }
export interface LoginValues {
    email:string,
    password:string
}