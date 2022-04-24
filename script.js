const $submitButton = document.getElementById('submitButton')
const $dateInput = document.getElementById('dateInput')
const $favContainer = document.getElementById('favContainer')
const $form = document.getElementById('form')
const $recent = document.getElementById('recent')
const $body = document.getElementById('body')
const $overlay = document.getElementById('overlay')
const $favourites = document.getElementById('favourites')
const $apodImg = document.getElementById('apodImg')
const $apodTitle = document.getElementById('apodTitle')
const $apodDate = document.getElementById('apodDate')
const $apotExplanation = document.getElementById('apodExplanation')

$form.addEventListener('submit', async function (e){
    e.preventDefault()

    const response = await fetch(`https://api.nasa.gov/planetary/apod?date=${$dateInput.value}&api_key=1dbv0pE5JUFsSf1oMNSsRgkSdMURCCR9YhmqdteO`)

    const json = await response.json()

    console.log(json)

    $recent.innerHTML = `<div class="card my-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${json.url}" id="apodImg" class="img-fluid p-3" style="width:100%;height:auto;" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title" id="apodTitle">${json.title}</h5>
          <p class='fst-italic' style='align-content:end;' id="apodDate">${json.date}</p>
          <p class="card-text" id="apodExplanation">${json.explanation}</p>
          <button class='btn btn-primary save'>Save to Favourites</button>
        </div>
      </div>
    </div>
  </div>`

})

$recent.addEventListener('click', async function (e) {
    if (e.target.classList.contains('save')) {

        const response = await fetch(`https://api.nasa.gov/planetary/apod?date=${$dateInput.value}&api_key=1dbv0pE5JUFsSf1oMNSsRgkSdMURCCR9YhmqdteO`)

        const json = await response.json()

        let favList = []
        
        favList.push(json)
      
        localStorage.setItem('favList', JSON.stringify(favList));

        $favourites.innerHTML = `<div class="list-group-item d-flex align-items-center p-3 mb-3"><img src='${json.url}'  style="width:25%;"><div class="me-auto">
        <p> 
        <strong>${json.title}</strong><br>
        <em>${json.date}</em>
        </p>
        </div>
        <button class="btn btn-danger">Remove</button>
        </div>
        `

        }
})


