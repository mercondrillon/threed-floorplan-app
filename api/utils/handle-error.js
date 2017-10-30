const configs = require('../../configs.js')
const nodemailer = require('nodemailer')
const sendGridTransport = require('nodemailer-sendgrid-transport')

// internals

const mailer = nodemailer.createTransport(sendGridTransport(configs.nodemailer.sendGrid))

// init

module.exports = function handleError (shortMessage, error, rpc) {
  // normalize error into string
  let errorDetails
  if (error instanceof Error || typeof error === 'string') {
    errorDetails = error
  } else {
    errorDetails = JSON.stringify(error, null, 2)
  }
  // detailed error message
  const adminMessage = `${shortMessage}\nDetails: "${errorDetails}"\nOriginal Request: ${JSON.stringify(rpc.requestMessage, null, 2)}`
  // log
  console.error(adminMessage)
  // notify admin
  mailer.sendMail({
    to: [configs.adminEmail],
    from: configs.adminEmail,
    subject: shortMessage,
    text: shortMessage + '\n\n' + adminMessage
  }).catch(error => {
    console.error('Error sending notification email to admin:', error)
  })
  // return user friendly error message including RPC ID for reference
  // and cancel all following promises by returning a rejected promise
  return Promise.reject(shortMessage + ' RPC ID: ' + rpc.id)
}