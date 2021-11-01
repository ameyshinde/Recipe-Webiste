let searchButton = document.querySelector("#search")
let input = document.querySelector("#input-search")
//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", ()=>{
  console.log("button pressed")
  sendApiRequest(input.value)
 
})


//An asynchronous function to fetch data from the API.
async function sendApiRequest(query){
    let App_id="3d55dec2"
    let Api_key="17b8dcf2dd8a8c9637cb34ae6c1fffe9"
  let response = await fetch(`https://api.edamam.com/search?app_id=${App_id}&app_key=${Api_key}&q=${query}`);
  console.log(response)
  let data = await response.json()
  console.log(data)
  await useApiData(data)
}



function useApiData(element){
  let menuItem='';
  for (let i = 0;i < 10; i++) {
  menuItem=menuItem+`
      <div  class="recipe" style="width: 18rem;">
      <img src="${element.hits[i].recipe.image}" class="card-img-top" alt="...">
      <div class="card-body">
          <h5 class="card-title">${element.hits[i].recipe.label}</h5>
          <p class="card-text"> Source:${element.hits[i].recipe.source}</p>
          <a href="${element.hits[i].recipe.url}" class="btn btn-primary">View Recipe</a>
      </div>
  </div>
  `
  }
  document.querySelector("#content").innerHTML=menuItem;
  
};

const getElement = (selector) => {
  const element = document.querySelector(selector)

  if (element) return element
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  )
}

const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')

navBtnDOM.addEventListener('click', () => {
  links.classList.toggle('show-links')
})

const date = getElement('#date')
const currentYear = new Date().getFullYear()
date.textContent = currentYear
