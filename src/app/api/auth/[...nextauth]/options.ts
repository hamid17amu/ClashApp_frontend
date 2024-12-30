import { LOGIN_URL } from "@/lib/apiEndPoints"
import axios from "axios"
import { AuthOptions, ISODateString } from "next-auth"
import { JWT } from "next-auth/jwt"
import CredentialsProvider from "next-auth/providers/credentials"

export type customSession={
    user?: customUser,
    expires:ISODateString
}

export type customUser={
    id?:string|null,
    name?:string|null,
    email?:string|null,
    token?:string|null
}

export const authOptions:AuthOptions = {
    pages:{
        signIn:"/login"
    },
    callbacks: {
        async session({ session, user, token }:{session:customSession, user:customUser, token:JWT}) {
            session.user=token.user as customUser;
          return session
        },
        async jwt({ token, user }:{token:JWT, user:customUser| null}) {
            if(user){
                token.user=user;
            }
          return token
        }
    },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      
      credentials: {
        email: {},
        password: {}
      },
      async authorize(credentials, req) {
        const { data } = await axios.post(LOGIN_URL, credentials);
        const user=data?.data;
        if (user) {
          
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null
  
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    })
  ]
}