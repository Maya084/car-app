import { ISidenavItem } from "./interfaces"

export const imgPathConst = './assets/img/';

export const LOCAL_STORAGE = {
    IS_LOGGED_IN: 'isLoggedIn',
    USER_INFO: 'user'
}

export const SidenavRoutes: ISidenavItem[] = [
    {
        name: 'Users',
        route: '/home/users',
        icon: 'group'
    },
    {
        name: 'Reports',
        route: '/home/reports',
        icon: 'content_paste'
    },
    {
        name: 'Create report',
        route: '/home/reports/create',
        icon: 'add_circle_outline'
    },
    {
        name: 'Get estimation',
        route: '/home/reports/lookup',
        icon: 'find_in_page'
    },
]

