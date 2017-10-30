// configs
var apiUrl = '/'

// get DOM element references
var floorPlanEl = document.querySelector('#floor-plan-url')
var addressEl = document.querySelector('#address')
var emailEl = document.querySelector('#email')
var buttonEl = document.querySelector('.convert-button')
var apiInfoEl = document.querySelector('#api-info')
var buttonClear = document.querySelector('#btn-clear')

// create file drop box
io3d.utils.ui.fileDrop({
  elementId: 'file-drop-box',
  upload: true,
  dragOverCssClass: 'file-drop-box-dragover',
  onInput: function (files) {
    floorPlanEl.value = files[0].url
  }
})

buttonClear.addEventListener('click', function(){
  emailEl.value='';
  addressEl.value='';
  floorPlanEl.value='';
});

// add event listener to click button
function submitHandler() {
  // start API request
  apiInfoEl.innerHTML = 'Sending API request...<br>'
  convertFloorPlanTo3d(floorPlanEl.value, addressEl.value, emailEl.value).then(function onSuccess(res) {
    apiInfoEl.innerHTML += 'Sending request success. conversionId: ' + res.result.conversionId + '<br>'
  }).catch(function onError(error) {
    apiInfoEl.innerHTML += 'Sending request failed:' + JSON.stringify(error, null, 2)
    apiInfoEl.innerHTML += '<br>Check your email for details'
  })

  return false;
}


// methods
function convertFloorPlanTo3d (floorPlanUrl, address, email) {

  // JSON
  var jsonRpc2Message = {
    jsonrpc: '2.0',
    method: 'FloorPlan.convertToBasic3dModel',
    params: {
      floorPlan: floorPlanUrl,
      address: address,
      email: email
    },
    id: Math.round(Math.random()*1e20)
  }

  return fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify( jsonRpc2Message )
  }).then(function(response){
    if (!response.ok) {
      // try to parse response anyway. it might contain a valid JSON error message
      return response.json().then(function onBodyParsed(body){
        return Promise.reject(body)
      })
    } else {
      return response.json()
    }
  })

}
