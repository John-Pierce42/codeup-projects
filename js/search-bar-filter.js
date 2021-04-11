(function (){
 "use strict"
var heroArray =["Batman", "Superman", "Flash", "Cyborg", "Wonder Woman", "Aqua Man", "Hulk", "Rocket", "Spider Man", "Iron Man", "Ant Man", "Captain America", "Black Widow", "Thor", "Hawk Eye", "Groot", "Black Panther", "Scarlet Witch", "Wolverine", "Cyclops", "Professor X", "Beast", "Storm", "Jubilee", "Rogue","Gambit","Cable"];


 var searchBarInput = document.getElementById("heroInput");
 var heroList = document.getElementById("heroes");

function filterHeroes(){

    var searchHero = searchBarInput.value.toLowerCase();
    var filterHeroNames = "";
    for(var i = 0; i < heroList.length; i++){
        if(heroList[i].toLowerCase().indexOf(searchHero) >= 0){
            filterHeroNames.push(heroList[i]);
        } else {
            filterHeroNames = "";
        }
    }

}


    searchBarInput.addEventListener("keyup",filterHeroes);




})();