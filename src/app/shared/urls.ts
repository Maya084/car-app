const prefix = '/api'

export const URLS = {
    // users
    WHO_AM_I: prefix + '/auth/whoami',
    SIGN_UP: prefix + '/auth/signup',
    SIGN_IN: prefix + '/auth/signin',
    SIGN_OUT: prefix + '/auth/signout',
    AUTH: prefix + '/auth',
    UPLOAD: prefix + '/auth/upload',

    //reports
    REPORTS: prefix + '/reports',
    REPORTS_USER: prefix + '/reports/user',
    GET_ESTIMATE: prefix + '/reports/estimate'
}