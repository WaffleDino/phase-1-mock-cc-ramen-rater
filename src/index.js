// write your code here
const ramens = 'http://localhost:3000/ramens'
const rateAndComment = document.getElementById('rate-comment')
const ramenMenuContainer = document.getElementById('ramen-menu')
const ramenDetailContainer = document.getElementById('ramen-detail')
const ramenForm = document.getElementById('new-ramen')
const ramenRating = document.getElementById('rating-display')
const ramenComment = document.getElementById('comment-display')
const newRamenName = document.getElementById('new-name')
const newRamenRestaurant = document.getElementById('new-restaurant')
const newRamenImage = document.getElementById('new-image')
const newRamnenRating = document.getElementById('new-rating')
const newRamenComment = document.getElementById('new-comment')


let fetchRamen = (url) => {
    return fetch(url)
    .then(repsonse => repsonse.json())
    .then(json => renderRamenFactory(json))
}

fetchRamen(ramens)

let renderRamenFactory = (jsonData) => {
    jsonData.map(ramen => renderRamen(ramen))

}

let renderRamen = (ramen) => {
    console.log(ramen.image)
    let ramenImg = document.createElement('img')
    ramenImg.src = ramen.image
    ramenImg.id = `ramen-${ramen.id}`
    ramenImg.addEventListener('click', () => handleRamenClick(ramen))
    ramenMenuContainer.appendChild(ramenImg)
    // ramenImg.addEventListener('click', replaceInfo)
}



let handleRamenClick = (ramen) => {
    ramenDetailContainer.childNodes[1].src = ramen.image
    ramenDetailContainer.childNodes[3].innerText = ramen.name
    ramenDetailContainer.childNodes[5].innerText = ramen.restaurant
    ramenRating.innerText = ramen.rating
    ramenComment.innerText = ramen.comment
}

let captureFormData = (event) => {
    event.preventDefault();
     let name = newRamenName.value
     let rest = newRamenRestaurant.value
     let img = newRamenImage.value
     let rating = newRamnenRating.value
     let comment = newRamenComment.value
     let newRamen = {
         "id": "sandbox",
         "name": name,
         "restaurant": rest,
         "image": img,
         "rating": rating,
         "comment": comment,
     }
     renderRamen(newRamen)
     newRamenName.value = ""
     newRamenRestaurant.value = ""
     newRamenImage.value = ""
     newRamnenRating.value = ""
     newRamenComment.value = ""
     
}

ramenForm.addEventListener('submit', captureFormData)






// As a user, I can:

// - See all ramen images in the `div` with the id of `ramen-menu`. When the page
//   loads, request the data from the server to get all the ramen objects. Then,
//   display the image for each of the ramen using an `img` tag inside the
//   `#ramen-menu` div.
// - Click on an image from the `#ramen-menu` div and see all the info about that
//   ramen displayed inside the `#ramen-detail` div and where it says
//   `insert comment here` and `insert rating here`.
// - Create a new ramen after submitting the `new-ramen` form. The new ramen should
//   be added to the`#ramen-menu` div. The new ramen does not need to persist; in
//   other words, if you refresh the page, it's okay that the new ramen is no
//   longer on the page.