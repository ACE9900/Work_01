const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp();
const db = admin.firestore()

const nodemailer = require('nodemailer')

const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors({ origin: true }));

// login
app.post('/login', async (req,res) => {
    let username = req.body.username
    let password = req.body.password
    let data 
    if (username.substring(0, 2) === 'ST') {
        await db.collection('Staff').where('staff_username', '==', username).where('staff_password', '==', password).get()
        .then(snapshot => {
            if (snapshot.empty) {
                res.status(201).json( { msg: 'Access denied', loggedIn: false } )
            } else {
                snapshot.forEach(docs => {
                    data = { username: docs.data().staff_username, firstname: docs.data().staff_firstname, lastname: docs.data().staff_lastname, loggedIn: true, type: 'staff' }
                    res.status(200).json( { msg: 'Login success', loggedIn: true, data: data } )
                })
            }
            return
        })
        .catch(err => {
            res.status(201).json( { msg: 'Access denied', loggedIn: false, data: err } )
        })
    } else {
        await db.collection('Company').where('comp_username', '==', username).where('comp_password', '==', password).get()
        .then(snapshot => {
            if (snapshot.empty) {
                res.status(201).json( { msg: 'Access denied', loggedIn: false } )
            } else {
                snapshot.forEach(docs => {
                    data = { username: docs.data().comp_username, company_name: docs.data().comp_name, loggedIn: true, type: 'company' }
                    res.status(200).json( { msg: 'Login success', loggedIn: true, data: data } )
                })
            }
            return
        })
        .catch(err => {
            res.status(201).json( { msg: 'Access denied', loggedIn: false, data: err } )
        })
    }
})

// Get address 
app.get('/getAddress', async (req, res) => {
    let country = await getCountry()
    let province = await getProvince()
    let district = await getDistrict()
    let data = [country, province, district]
    res.send(data)
})

// Add company && company_register
app.post('/register', async (req, res) => {
    let data = req.body
    let id = await getCurrentID()
    await updateCurrentID('comp_id')
    await updateCurrentID('comp_regi_id')
    // add data to collection Company 
    let comp_id = id.comp_id + 1
    let comp_detail = {
        comp_id: comp_id,
        comp_contact_name: data.comp_contact_name,
        comp_contact_tel: data.comp_contact_tel,
        comp_username: '',
        comp_password: data.comp_password,
        comp_name: data.comp_name,
        comp_code: comp_id,
        comp_taxnumber: data.comp_taxnumber,
        comp_country: data.comp_country,
        comp_province: data.comp_province,
        comp_district: data.comp_district,
        comp_village: data.comp_village,
        comp_tel: data.comp_tel,
        comp_fax: data.comp_fax,
        comp_email: data.comp_email
    }
    let add_to_company = await db.collection('Company').add(comp_detail)
    .then(res => {
        return 'success'
    })
    .catch (err => {
        res.status(201).json( { msg: 'Register fail', data: err } )
    })
    
    if (add_to_company === 'success') {
        // get number of data in collection Company_register
        // add data to collection Company_register
        let com_regi_id = id.comp_regi_id + 1
        let add_to_company_register = await db.collection('Company_register').add({
            com_regi_id: com_regi_id,
            com_regi_status_id: 0,
            com_regi_note: '',
            staff_id: '',
            comp_id: comp_id
        })
        .then(res => {
            return 'success'
        }).catch(err => {
            return err
        })
         if (add_to_company_register === 'success') {
            res.status(200).json( { msg: 'Register success', success: true } )
         } else {
            res.status(201).json( { msg: 'Add to company_register fail', success: false } )
         }
    } else {
        res.status(201).json( { msg: 'Register fail', success: false } )
    }
})

// Get register
app.get('/getCompanyregister', async (req,res) => {
    let data = []
    await db.collection('Company_register').where('com_regi_status_id', '==', 0).get()
    .then(snapshot => {
        snapshot.forEach(docs => {
            data.push(docs.data())
        })
        return res.status(200).json( { msg: 'company register data', data : data } )
    })
    .catch(err => {
        res.status(201).json( { msg: 'get company register fail', data: err } )
    })
})

app.get('/getCompanyregister/:comp_id', async (req,res) => {
    const params = req.params.comp_id
    const status_data = await getRegisterStatus()

    let checkStatus = await db.collection('Company_register').where('comp_id', '==', Number(params)).where('com_regi_status_id', '==', 0).get()
    .then(docs => {
        if (docs.size === 0) {
            return res.send('fail')
        } else {
            return true
        }
    })
    .catch(err => {
        return err
    })
    if (checkStatus) {
        let comp_data = await db.collection('Company').where('comp_id', '==', Number(params)).get()
        .then(snapshot => {
            let data = {}
            snapshot.forEach(docs => {
                // data.push(docs.data())
                data = docs.data()
            })
            return data
        })
        .catch(err => {
            res.status(201).json( { msg: 'get company register fail', data: err } )
        })
        let data = {
            comp_data,
            status_data
        }
        res.send(data)
    } else {
        res.status(201).json( { msg: 'get company register fail' } )
    }
})

app.post('/updateCompany', async (req,res) => {
    let params = req.body
    let id = await getCurrentID()
    let username = id.comp_username + 1
    await updateCurrentID('comp_username')

    if (username < 10) {
        username = 'CM00' + username
    } else if (username > 9 && username < 100) {
        username = 'CM0' + username
    } else {
        username = 'CM' + username
    }
    await db.collection('Company').where('comp_id', '==', Number(params.comp_id)).get()
    .then(snapshot => {
        snapshot.forEach(async docs => {
            await db.collection('Company').doc(docs.id).update({
                comp_username: username
            })
            let data = docs.data()
            await updateComregister(params.comp_id, params.note, params.staff)
            let sendMail = await sendEmail(data.comp_email, username)
            if (sendMail) {
                res.send('Update success')
            } else {
                res.send('Update fail')
            }
        })
        return
    })
    .catch(err => {
        return res.send(err)
    })
})
// Update Conpany_register when update username on Company collection
function updateComregister (comp_id, note, staff) {
    db.collection('Company_register').where('comp_id', '==', Number(comp_id)).get()
    .then(snapshot => {
        snapshot.forEach(async docs => {
            await db.collection('Company_register').doc(docs.id).update({
                com_regi_status_id: 1,
                com_regi_note: note,
                staff_id: staff
            })
        })
        return
    })
    .catch(err => {
        return err
    })
}
// send email
function sendEmail (email, username) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: '59160586@go.buu.ac.th',
            pass: '0882166712Aa!'
        }
    })
    
    const mailOptions = {
        from: '<Pongsiri>',
        to: email,
        subject: 'Your register were accepted',
        html: `<b>Your usename is ${username}</b>`
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if(err)
            return false
        else
            return true
    })
}

app.get('/staff/licence', async (req,res) => {
    let status_data = await getAppStatus()
    let licence_data = await db.collection('Application_form').where('app_status_id', '==', 0).orderBy('app_id').get()
    .then(snapshot => {
        let licence_list = []
        snapshot.forEach(docs => {
            licence_list.push(docs.data())
        })
        return licence_list
    })
    .catch(err => {
        res.send(err)
    })
    let data = {licence_data, status_data}
    res.send(data)
})

app.get('/staff/licence/:id', async (req,res) => {
    const id = req.params.id
    let taxoffice_data = await getTaxoffice()
    let ministry_data = await getMinistry()
    let department_data = await getDepartment()
    let status_data = await getAppStatus()
    let app_data = await getAppData(id)
    let item_data = await getItemData(id)
    let doc_data = await getDocument(id)
    let doc_type_data = await getDocType()

    const comp_id = app_data.comp_id
    let comp_data = await db.collection('Company').where('comp_id', '==', Number(comp_id)).get()
    .then(snapshot => {
        snapshot.forEach(docs => {
            comp = {
                comp_id: docs.data().comp_id,
                comp_taxnumber: docs.data().comp_taxnumber,
                comp_country: docs.data().comp_country,
                comp_province: docs.data().comp_province,
                comp_district: docs.data().comp_district,
                comp_village: docs.data().comp_village,
                comp_email: docs.data().comp_email,
                comp_tel: docs.data().comp_tel,
                comp_fax: docs.data().comp_fax
            }
        })
        return comp
    })
    .catch(err => {
        res.send(err)
    })
    let data = {taxoffice_data, ministry_data, department_data, app_data, item_data, comp_data, status_data,
        doc_data, doc_type_data}
    res.send(data)
})

app.post('/staff/licence', async (req,res) => {
    let data = req.body
    const staff_fname = await db.collection('Staff').where('staff_username', '==', data.staff).get()
    .then(snapshot => {
        snapshot.forEach(docs => {
            fname = docs.data().staff_firstname
        })
        return fname
    })
    .catch(err => {
        return err
    })
    data.app_detail_data.app_staff_fname = staff_fname
    const id = await getCurrentID()
    if (data.app_data.app_detail_id === null) {
        data.app_data.app_detail_id = id.app_detail_id + 1
        data.app_detail_data.app_detail_id = id.app_detail_id + 1
        await db.collection('Application_form_detail').add(data.app_detail_data)
        await updateCurrentID('app_detail_id')
        await db.collection('Application_form').where('app_id', '==', Number(data.app_id)).get()
        .then(snapshot => {
            snapshot.forEach(async docs => {
                await db.collection('Application_form').doc(docs.id).update(data.app_data)
            })
            return res.send('save success')
        }).catch(err => {
            return res.send(err)
        })
    } else {
        data.app_data.app_detail_id = Number(data.app_data.app_detail_id)
        data.app_detail_data.app_detail_id = Number(data.app_detail_data.app_detail_id)
        await db.collection('Application_form').where('app_id', '==', Number(data.app_id)).get()
        .then(snapshot => {
            snapshot.forEach(async docs => {
                await db.collection('Application_form').doc(docs.id).update(data.app_data)
            })
            return
        }).catch(err => {
            return res.send(err)
        })
        await db.collection('Application_form_detail').where('app_detail_id', '==', Number(data.app_data.app_detail_id)).get()
        .then(snapshot => {
            snapshot.forEach(async docs => {
                await db.collection('Application_form_detail').doc(docs.id).update(data.app_detail_data)
            })
            return
        }).catch(err => {
            return res.send(err)
        })
        res.send('save success')
    }
})

// -------------------------- User --------------------------
app.get('/user/licence/register/:username', async (req,res) => {
    let username = req.params.username
    let comp_data = await db.collection('Company').where('comp_username', '==', username).get()
    .then(snapshot => {
        snapshot.forEach(docs => {
            comp = {
                comp_id: docs.data().comp_id,
                comp_taxnumber: docs.data().comp_taxnumber,
                comp_country: docs.data().comp_country,
                comp_province: docs.data().comp_province,
                comp_district: docs.data().comp_district,
                comp_village: docs.data().comp_village,
                comp_email: docs.data().comp_email,
                comp_tel: docs.data().comp_tel,
                comp_fax: docs.data().comp_fax
            }
        })
        return comp
    })
    .catch(err => {
        res.send(err)
    })
    let app_type_data = await getAppType()
    let app_licence_type_data = await getAppLicenceType()
    let taxoffice_data = await getTaxoffice()
    let ministry_data = await getMinistry()
    let department_data = await getDepartment()
    let purpose_data = await getPurpose()
    let car_type_data = await getCarType()
    let standard_data = await getStandardTechnique()
    let gas_data = await getCarGas()
    let color_data = await getCarColor()
    let steering_data = await getCarSteering()
    let doc_type_data = await getDocType()
    let data = {
        app_id: await getCurrentAppID(),
        comp_data,
        app_type_data,
        app_licence_type_data,
        taxoffice_data,
        ministry_data,
        department_data,
        purpose_data,
        car_type_data,
        standard_data,
        gas_data,
        color_data,
        steering_data,
        doc_type_data
    }
    res.send(data)
})

app.post('/user/licence/register', async (req,res) => {
    let data = req.body
    let id = await getCurrentID()
    await updateCurrentID('item_det_id')
    data.item_data.item_det_id = id.item_det_id + 1
    await db.collection('Application_form').add(data.app_data)
    await db.collection('Item_detail').add(data.item_data)
    res.send('save success')
})

app.get('/user/licence/:username', async (req,res) => {
    let username = req.params.username
    let comp_id = await db.collection('Company').where('comp_username', '==', username).get()
    .then(snapshot => {
        snapshot.forEach(docs => {
            id =  docs.data().comp_id
        })
        return id
    })
    .catch(err => {
        res.send(err)
    })
    let licence_data = await db.collection('Application_form').where('comp_id', '==', comp_id).orderBy('app_id').get()
    .then(snapshot => {
        let data = []
        snapshot.forEach(docs => {
            data.push(docs.data())
        })
        return data
    })
    .catch(err => {
        res.send(err)
    })
    let status_data = await getAppStatus()
    let data = {licence_data, status_data}
    res.send(data)
})

app.get('/user/licence/detail/:username/:app_id', async (req,res) => {
    let username = req.params.username
    let app_id = Number(req.params.app_id)
    let comp_data = await db.collection('Company').where('comp_username', '==', username).get()
    .then(snapshot => {
        snapshot.forEach(docs => {
            comp = {
                comp_id: docs.data().comp_id,
                comp_taxnumber: docs.data().comp_taxnumber,
                comp_country: docs.data().comp_country,
                comp_province: docs.data().comp_province,
                comp_district: docs.data().comp_district,
                comp_village: docs.data().comp_village,
                comp_email: docs.data().comp_email,
                comp_tel: docs.data().comp_tel,
                comp_fax: docs.data().comp_fax
            }
        })
        return comp
    })
    .catch(err => {
        res.send(err)
    })
    let app_detail_data = 'no data'
    let app_data = await getAppData(app_id)
    let item_data = await getItemData(app_id)
    let doc_data = await getDocument(app_id)
    if (app_data.app_detail_id !== null) {
        app_detail_data = await getAppDetailData(app_data.app_detail_id)
    }
    let app_type_data = await getAppType()
    let app_licence_type_data = await getAppLicenceType()
    let taxoffice_data = await getTaxoffice()
    let ministry_data = await getMinistry()
    let department_data = await getDepartment()
    let purpose_data = await getPurpose()
    let car_type_data = await getCarType()
    let standard_data = await getStandardTechnique()
    let gas_data = await getCarGas()
    let color_data = await getCarColor()
    let steering_data = await getCarSteering()
    let doc_type_data = await getDocType()
    let data = {
        app_data,
        item_data,
        doc_data,
        app_detail_data,
        comp_data,
        app_type_data,
        app_licence_type_data,
        taxoffice_data,
        ministry_data,
        department_data,
        purpose_data,
        car_type_data,
        standard_data,
        gas_data,
        color_data,
        steering_data,
        doc_type_data
    }
    res.send(data)
})

app.post('/user/licence/update/:app_id', async (req,res) => {
    const app_id = req.params.app_id
    const data = req.body
    await db.collection('Application_form').where('app_id', '==', Number(app_id)).get()
    .then(snapshot => {
        snapshot.forEach(async docs => {
            db.collection('Application_form').doc(docs.id).update(data.app_data)
        })
        return
    })
    .catch(err => {
        res.send(err)
    })
    await db.collection('Item_detail').where('app_id', '==', Number(app_id)).get()
    .then(snapshot => {
        snapshot.forEach(async docs => {
            db.collection('Item_detail').doc(docs.id).update(data.item_data)
        })
        return
    })
    .catch(err => {
        res.send(err)
    })
    res.send('Update success')
})

app.post('/user/licence/delete/:app_id', async (req,res) => {
    const app_id = Number(req.params.app_id)
    await db.collection('Application_form').where('app_id', '==', app_id).get()
    .then(snapshot => {
        snapshot.forEach(async docs => {
            await db.collection('Application_form').doc(docs.id).delete()
        })
        return
    })
    .catch(err => {
        res.send(err)
    })
    await db.collection('Item_detail').where('app_id', '==', app_id).get()
    .then(snapshot => {
        snapshot.forEach(async docs => {
            await db.collection('Item_detail').doc(docs.id).delete()
        })
        return
    })
    .catch(err => {
        res.send(err)
    })
    await db.collection('Application_document').where('app_id', '==', app_id).get()
    .then(snapshot => {
        let data = []
        snapshot.forEach(async docs => {
            db.collection('Application_document').doc(docs.id).delete()
        })
        return data
    })
    .catch(err => {
        res.send(err)
    })
    res.send('Delete complete')
})

// Function
async function getCurrentID () {
    let data = await db.collection('Current_ID').doc('doc_1').get()
    return data.data()
}

async function updateCurrentID (field) {
    await db.collection('Current_ID').doc('doc_1').update({
        [field]: admin.firestore.FieldValue.increment(1)
    })
}

async function getCurrentAppID () {
    let data = await db.collection('Current_ID').doc('doc_1').get()
    await updateAppID()
    return data.data().app_id + 1
}

async function updateAppID () {
    await db.collection('Current_ID').doc('doc_1').update({
        app_id: admin.firestore.FieldValue.increment(1)
    })
}

async function getCountry () {
    let country = []
    await db.collection('Country').orderBy('co_id').get()
    .then(snapshot => {
        snapshot.forEach(docs => {
            country.push(docs.data())
        })
        return
    }).catch(err => {
        return err
    })
    return country
}

async function getProvince () {
    let province = []
    await db.collection('Province').orderBy('po_id').get()
    .then(snapshot => {
        snapshot.forEach(docs => {
            province.push(docs.data())
        })
        return
    }).catch(err => {
        return err
    })
    return province
}

async function getDistrict () {
    let district = []
    await db.collection('District').orderBy('po_id').get().then(snapshot => {
        snapshot.forEach(docs => {
            district.push(docs.data())
        })
        return
    }).catch(err => {
        return err
    })
    return district
}

async function getTaxoffice () {
    let taxoffice_data = []
    await db.collection('Taxoffice').orderBy('taxoffice_id').get()
    .then(snapshot => {
        snapshot.forEach(docs => {
            taxoffice_data.push(docs.data())
        })
        return
    })
    .catch(err => {
        res.send(err)
    })
    return taxoffice_data
}

async function getMinistry () {
    let ministry_data = []
    await db.collection('Ministry').orderBy('ministry_id').get()
    .then(snapshot => {
        snapshot.forEach(docs => {
            ministry_data.push(docs.data())
        })
        return
    })
    .catch(err => {
        res.send(err)
    })
    return ministry_data
}

async function getDepartment () {
    let department_data = []
    await db.collection('Department').orderBy('department_id').get()
    .then(snapshot => {
        snapshot.forEach(docs => {
            department_data.push(docs.data())
        })
        return
    })
    .catch(err => {
        res.send(err)
    })
    return department_data
}

async function getAppStatus () {
    let status_data = []
    await db.collection('Application_status').orderBy('app_status_id').get()
    .then(snapshot => {
        snapshot.forEach(docs => {
            status_data.push(docs.data())
        })
        return
    })
    .catch(err => {
        res.send(err)
    })
    return status_data
}

async function getRegisterStatus () {
    let status_data = []
    await db.collection('Company_register_status').orderBy('com_regi_status_id').get()
    .then(snapshot => {
        snapshot.forEach(docs => {
            status_data.push(docs.data())
        })
        return
    })
    .catch(err => {
        res.send(err)
    })
    return status_data
}

async function getAppType () {
    let app_type_data = []
    await db.collection('App_type').orderBy('app_type_id').get()
    .then(snapshot => {
        snapshot.forEach(docs => {
            app_type_data.push(docs.data())
        })
        return
    })
    .catch(err => {
        res.send(err)
    })
    return app_type_data
}

async function getAppLicenceType () {
    let app_licence_type_data = []
    await db.collection('App_licence_type').orderBy('app_licence_id').get()
    .then(snapshot => {
        snapshot.forEach(docs => {
            app_licence_type_data.push(docs.data())
        })
        return
    })
    .catch(err => {
        res.send(err)
    })
    return app_licence_type_data
}

async function getPurpose () {
    let purpose_data = []
    await db.collection('Purpose').orderBy('purpose_id').get()
    .then(snapshot => {
        snapshot.forEach(docs => {
            purpose_data.push(docs.data())
        })
        return
    })
    .catch(err => {
        res.send(err)
    })
    return purpose_data
}

async function getCarType () {
    let car_type_data = []
    await db.collection('Car_type').orderBy('car_type_id').get()
    .then(snapshot => {
        snapshot.forEach(docs => {
            car_type_data.push(docs.data())
        })
        return
    })
    .catch(err => {
        res.send(err)
    })
    return car_type_data
}

async function getStandardTechnique () {
    let standard_data = []
    await db.collection('Standard').orderBy('standard_id').get()
    .then(snapshot => {
        snapshot.forEach(docs => {
            standard_data.push(docs.data())
        })
        return
    })
    .catch(err => {
        res.send(err)
    })
    return standard_data
}

async function getCarGas () {
    let gas_data = []
    await db.collection('Gas').orderBy('gas_id').get()
    .then(snapshot => {
        snapshot.forEach(docs => {
            gas_data.push(docs.data())
        })
        return
    })
    .catch(err => {
        res.send(err)
    })
    return gas_data
}

async function getCarColor () {
    let color_data = []
    await db.collection('Color').orderBy('color_id').get()
    .then(snapshot => {
        snapshot.forEach(docs => {
            color_data.push(docs.data())
        })
        return
    })
    .catch(err => {
        res.send(err)
    })
    return color_data
}

async function getCarSteering () {
    let steering_data = []
    await db.collection('Steering').orderBy('steering_id').get()
    .then(snapshot => {
        snapshot.forEach(docs => {
            steering_data.push(docs.data())
        })
        return
    })
    .catch(err => {
        res.send(err)
    })
    return steering_data
}

async function getDocType () {
    let doc_type_data = []
    await db.collection('Application_document_type').orderBy('app_doc_type_id').get()
    .then(snapshot => {
        snapshot.forEach(docs => {
            doc_type_data.push(docs.data())
        })
        return
    })
    .catch(err => {
        res.send(err)
    })
    return doc_type_data
}

async function getAppData (id) {
    let app_data = await db.collection('Application_form').where('app_id', '==', Number(id)).get()
    .then(snapshot => {
        snapshot.forEach(docs => {
            data = docs.data()
        })
        return data
    })
    .catch(err => {
        return err
    })
    return app_data
}

async function getAppDetailData (id) {
    let app_detail_data = await db.collection('Application_form_detail').where('app_detail_id', '==', Number(id)).get()
    .then(snapshot => {
        snapshot.forEach(docs => {
            data = docs.data()
        })
        return data
    })
    .catch(err => {
        return err
    })
    return app_detail_data
}

async function getItemData (id) {
    let item_data = await db.collection('Item_detail').where('app_id', '==', Number(id)).get()
    .then(snapshot => {
        snapshot.forEach(docs => {
            data = docs.data()
        })
        return data
    })
    .catch(err => {
        res.send(err)
    })
    return item_data
}

async function getDocument (id) {
    let doc_data = await db.collection('Application_document').where('app_id', '==', Number(id)).get()
    .then(snapshot => {
        let data = []
        snapshot.forEach(docs => {
            data.push(docs.data())
        })
        return data
    })
    .catch(err => {
        return err
    })
    return doc_data
}

app.post('/test', async (req,res) => {
    const data = req.body
    let res_data = []
    for(let index = 0; index < data.length; index++) {
        db.collection('Test').add(data[index])
        res_data.push(index)
    }
    res.send(res_data)
})

exports.function = functions.https.onRequest(app);
