const apiUrl = 'https://bo1511.one/wp-json/wp/v2/';
const catRecipe = 10;

let recipePosts;

initPage();

function errorMessage(msg) {
    console.log(msg);
}

//fetch content from Wordpress//
function initPage() {
    fetch(`https://bo1511.one/wp-json/wp/v2/posts`, {
        Method: 'GET',
        Headers: {
            'Content-Type': 'application/json'
}})
.then(Response => Response.json())
.then(data => {
    console.log(data);
})}

//attempt of fetching only the post needed//
fetch(`${apiUrl}posts?id=112`, {
    method: 'GET'
})
.then(Response => Response.json())
.then(jsDataObject => {
    recipePosts = jsDataObject.filter(Element => true);
    console.log('recipePost ready');
    displayData(data);
})

//attempt of displaying content on the DOM//
function displayData(data){
    document.querySelector('.pesto').innerHTML = `
    <img src="${data.acf.image}">`;
}



