import { CLASH_URL } from "@/lib/apiEndPoints";
import { customUser } from "../api/auth/[...nextauth]/options";

export async function fetClash(token:string){
    const res = await fetch(CLASH_URL, {
        headers:{
            Authorization: token
        },
        next:{
            revalidate:60*5,
            tags:['dashboard']
        }
    });

    if(!res.ok){
        throw new Error('Failed to fetch data');
    }

    const response = await res.json();

    if(response?.data){
        return response.data;
    }

    return [];
}


