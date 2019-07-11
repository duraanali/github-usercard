/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

const cards = document.querySelector('.cards')

axios.get(`https://api.github.com/users/duraanali`).then(data => {
  // 1. (see above)
  // Handles Success: here's where we get the results from server
  // console.log("About Me iNFO:", data.data);
  const myInfo = data.data

  myInfo.forEach(info => {
    // 2. (see above)
    const element = createMyCard(info)
    // 3. (see above)
    cards.appendChild(element)
  })
})
  .catch(error => {
    // Handles failure:
    console.log("The Server is currently down", error);
  });


function createMyCard(info) {
  // create the elements
  const card = document.createElement('div')
  const img = document.createElement('img')
  const cardUserName = document.createElement('h2')
  const cardInfo = document.createElement('p')

  // set the styles
  card.classList.add('card')
  img.classList.add('img')
  cardUserName.classList.add('username')
  cardInfo.classList.add('p')

  // set the content
  img.src = imageUrl
  title.textContent = `Breed: ${breed}`

  // put together
  card.appendChild(img)
  card.appendChild(cardUserName)
  card.appendChild(cardInfo)
  return card
}
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
