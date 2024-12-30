"use server"

import { REGISTER_URL } from "@/lib/apiEndPoints"
import axios, { AxiosError } from "axios"

export async function registerAction(prevState:any, formdata: FormData) {
    try {
        const {data} = await axios.post(REGISTER_URL,{
            name: formdata.get("name"),
            email:formdata.get("email"),
            password: formdata.get("password"),
            confirm_password: formdata.get("cpassword")
        });
        return {
            status:200,
            message: data?.message,
            error:{}
        }
    } catch (error) {
        if(error instanceof AxiosError){
            if(error.response?.status===422){
                return {
                    status: 422,
                    message:error.response?.data.message,
                    error:error.response?.data.errors
                }
            }
        }

        return {
            status: 500,
            message:"Oops! Something Went Wrong.",
            error:{}
        }
    }
}


export async function loginAction(prevState:any, formdata: FormData) {
    try {
        const {data} = await axios.post(REGISTER_URL,{
            email:formdata.get("email"),
            password: formdata.get("password")
        });
        return {
            status:200,
            message: data?.message,
            error:{}
        }
    } catch (error) {
        if(error instanceof AxiosError){
            if(error.response?.status===422){
                return {
                    status: 422,
                    message:error.response?.data.message,
                    error:error.response?.data.errors
                }
            }
        }

        return {
            status: 500,
            message:"Oops! Something Went Wrong.",
            error:{}
        }
    }
}