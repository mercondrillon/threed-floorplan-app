const startApiServer = require('instant-api')
const firebaseAdmin = require('firebase-admin')
const io3d = require('3dio')
const configs = require('./configs.js')

// init firebase
firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(configs.firebase.serviceAccount),
  databaseURL: configs.firebase.databaseUrl
})

// init 3dio
io3d.config({ secretApiKey: configs.secretApiKey })

// start server
startApiServer({
  // methods
  'FloorPlan.convertToBasic3dModel': require('./api/convert-floor-plan-to-3d.js'),
  'FloorPlan.onConversionStatusUpdate': require('./api/on-conversion-status-update.js')
}, {
  // server configs
  port: configs.port,
  apiPath: 'api/v2',
  staticDir: configs.staticDir,
  corsAllowedDomains: configs.corsAllowedDomains
})
