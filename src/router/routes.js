import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import StaffRegisterList from '../views/Staff-Register-List.vue'
import StaffRegisterApprove from '../views/Staff-Register-Approve.vue'
import StaffLicenceList from '../views/Staff-License-List.vue'
import StaffLicenceApprove from '../views/Staff-License-Approve.vue'

import UserLicenseList from '../views/User-License-List.vue'
import UserLicenseRegister from '../views/User-License-Register.vue'
import UserLicenseDetail from '../views/User-License-Detail.vue'

import upload from '../views/UploadFile.vue'

export default [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/staff_register_list',
        name: 'Staff-Register-List',
        component: StaffRegisterList
    },
    {
        path: '/staff_register_approve/:id',
        name: 'Staff-Register-Approve',
        component: StaffRegisterApprove
    },
    {
        path: '/staff_license_list',
        name: 'Staff-License-List',
        component: StaffLicenceList
    },
    {
        path: '/staff-license-approve/:id',
        name: 'Staff-License-Approve',
        component: StaffLicenceApprove
    },
    {
        path: '/user_license_list',
        name: 'User-License-List',
        component: UserLicenseList
    },
    {
        path: '/license_register',
        name: 'User-License-Register',
        component: UserLicenseRegister
    },
    {
        path: '/license_detail/:id',
        name: 'User-License-Detail',
        component: UserLicenseDetail
    },
    {
        path: '/upload',
        component: upload
    }
]
