type clashForm ={
    title?: string;
    description?: string;
    expire_at?: Date;
}

type clashFormError ={
    title?: string;
    description?: string;
    expire_at?: string;
    image?: string;
}

type clashData ={
    id:number;
    title:string;
    description:string;
    expire_at:Date;
    image:string;
    user_id:number;
}