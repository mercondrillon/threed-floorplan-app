const url = require('url')
const io3d = require('3dio')
const firebaseAdmin = require('firebase-admin')
const nodemailer = require('nodemailer')
const sendGridTransport = require('nodemailer-sendgrid-transport')
const configs = require('../configs.js')
const handleError = require('./utils/handle-error.js')

// internals

const db = firebaseAdmin.database()
const mailer = nodemailer.createTransport(sendGridTransport(configs.nodemailer.sendGrid))

// main

module.exports = function convertFloorPlanTo3d (rpc) {

  // params from conversion API request
  const floorPlan = rpc.params.floorPlan
  const email = rpc.params.email
  const address = rpc.params.address || '' // optional

  // validate params
  if (!isEmail(email)) return rpc.sendParamsError('Please provide a valid email.')
  if (!floorPlan || floorPlan === '') return rpc.sendParamsError('Missing floorPlan param.')

  console.log(`Accepted API request "FloorPlan.convertFloorPlanTo3d accepted" with params:`, rpc.params)

  // internals
  // this will be stored in database referenced by converionId which we will obtain from 3dio
  const conversionData = {
    status: 'IN_PROGRESS',
    floorPlan: floorPlan,
    address: address || '',
    customer: {
      email: email
      // add aditional customer data here to use it later when conversion is done
    }
  }

  // request floor plan conversion from 3d.io
  sendConversionRequestTo3dio(rpc, floorPlan, address).then(conversionId => {
    // stora info to datbase
    return writeToDatabase(rpc, conversionId, conversionData).then(() => {
      // send notification to customer that
      return sendEmailToCustomer(rpc, conversionId, conversionData)
    }).then(() => {
      console.log(`Floor plan conversion in progress. conversionId: ${conversionId}`)
      // close API call
      rpc.sendResult({conversionId: conversionId})
    })
  }).catch(error => {
    rpc.sendError(error)
  })

}

// private methods

function sendConversionRequestTo3dio (rpc, floorPlan, address) {
  return io3d.floorPlan.convertToBasic3dModel({
    floorPlan: floorPlan,
    address: address,
    callback: configs.url
  }).then(conversionId => {
    console.log(`3d.io API has accepted floor plan conversion request`)
    return conversionId
  }).catch(error => {
    return handleError('Error in calling 3d.io API.', error, rpc)
  })
}

function writeToDatabase (rpc, conversionId, conversionData) {
  return db.ref('conversions/' + conversionId).set(conversionData).then(result => {
    console.log(`Stored conversion data to database`)
    return result
  }).catch(error => {
    return handleError('Error writing to database.', error, rpc)
  })
}

function sendEmailToCustomer (rpc, conversionId, conversionData) {
  return mailer.sendMail({
    to: [conversionData.customer.email],
    from: configs.fromEmail,
    subject: `Your floor plan is being converted into a 3D model`,
    text: `Your conversionId is: ${conversionId}`,
    html: `Your conversionId is: ${conversionId}`
  }).then(result => {
    console.log(`Sent email to customer informing him that floor plan is being processed`)
    return result
  }).catch(error => {
    return handleError('Error sending email.', error, rpc)
  })
}

// helpers

function isEmail (email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}