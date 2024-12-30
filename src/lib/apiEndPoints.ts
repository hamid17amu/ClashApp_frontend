import Env from "./env"

export const BASE_URL = `${Env.SERVER}/api`
export const REGISTER_URL = `${BASE_URL}/auth/register`
export const LOGIN_URL = `${BASE_URL}/auth/login`
export const CHECK_CRED_URL = `${BASE_URL}/auth/check/credentials`