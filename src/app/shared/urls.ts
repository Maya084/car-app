import { environment } from "../../environments/environment"

// const prefix = 'http://' + environment.server + ':3000'
const prefix = '/api'

export const URLS = {
    // users
    WHO_AM_I: prefix + '/auth/whoami',
    SIGN_UP: prefix + '/auth/signup',
    SIGN_IN: prefix + '/auth/signin',
    SIGN_OUT: prefix + '/auth/singout',
    AUTH: prefix + '/auth',

    //reports
    REPORTS: prefix + '/reports'
}