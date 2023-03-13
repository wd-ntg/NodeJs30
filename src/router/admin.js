import express from 'express'
//import { adminPage } from '../controller/adminController'
import adminController from '../controller/adminController'

const router = express.Router()

const initAdminPage = (app) => {
    app.get('/admin', adminController.adminPage)
    app.get('/roomTH', adminController.roomTHPage)
    app.get('/roomTN', adminController.roomTNPage)
    app.get('/calendar', adminController.calendarPage)
    app.get('/history', adminController.historyPage)
    app.get('/manage-student', adminController.manageStudentPage)
    return app.use('/', router)
}

export default initAdminPage