const adminPage = (req, res) => {
    return res.render('admin/admin.ejs')
}

const roomTHPage = (req, res) => {
    return res.render('admin/roomTH.ejs')
}

const roomTNPage = (req, res) => {
    return res.render('admin/roomTN.ejs')
}

const calendarPage = (req, res) => {
    return res.render('admin/calendar.ejs')
}

const historyPage = (req, res) => {
    return res.render('admin/history.ejs')
}

const manageStudentPage = (req, res) => {
    return res.render('admin/manageStudent.ejs')
}


const adminController = {
    adminPage: adminPage,
    roomTHPage:roomTHPage,
    roomTNPage:roomTNPage,
    calendarPage:calendarPage,
    historyPage: historyPage,
    manageStudentPage:manageStudentPage
}

export default adminController