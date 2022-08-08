import { ISidenavItem } from "./interfaces"

export const LOCAL_STORAGE = {
    IS_LOGGED_IN: 'isLoggedIn',
    USER_INFO: 'user'
}

export const SidenavRoutes: ISidenavItem[] = [
    {
        name: 'Users',
        route: '/users',
        img: 'group'
    },
    {
        name: 'Reports',
        route: '/reports',
        img: 'content_paste'
    },
    {
        name: 'Create report',
        route: '/reports/create',
        img: 'add_circle_outline'
    },
    {
        name: 'Get estimation',
        route: '/reports/lookup',
        img: 'find_in_page'
    },
]

