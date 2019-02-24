var h1Elt = document.querySelector("h1");

h1Elt.innerHTML = "Ce que j'ai appris à THP";

var subTitle = document.querySelector("main").getElementsByTagName("p")[0];

subTitle.innerHTML = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !"


function call(){

	let callToAction = document.querySelector("main").querySelectorAll("a")[0]

	callToAction.innerHTML = "Ok je veux tester !"
	
	callToAction.href = "https://www.thehackingproject.org/dashboard/weeks/7/days/5?locale=fr"

	let callToAction1 = document.querySelector("main").querySelectorAll("a")[1]

	callToAction1.innerHTML = "Non merci"
	
	callToAction1.href = "https://www.youtube.com/watch?v=YlXBpLjSSMc";
}

function changeLogoName(){
	let name = document.querySelector("header").querySelector("strong")
	name.innerHTML = "The THP Experience"

	name.style.fontSize = "2em" 
}


function populateImages(){
	let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
	for(var i = 0; i < 9; i++){
		let cards = document.querySelectorAll("div > .col-md-4")[i].childNodes[1].childNodes[1]

		cards.src = imagesArray[i]
	}
}

function deleteLastCards(){
	for(var i = 6; i < 10 ; i++ ){
		let delCards = document.querySelectorAll("div > .col-md-4")[i]

		delCards.style.visibility = "hidden"
	}
}

console.log(call())
console.log(changeLogoName())
console.log(populateImages())
console.log(deleteLastCards())
