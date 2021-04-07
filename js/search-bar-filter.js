(function (){
 "use strict"
var heroArray =["Batman", "Superman", "Flash", "Cyborg", "Wonder Woman", "Aqua Man", "Hulk", "Rocket", "Spider Man", "Iron Man", "Ant Man", "Captain America", "Black Widow", "Thor", "Hawk Eye", "Groot", "Black Panther", "Scarlet Witch", "Wolverine", "Cyclops", "Professor X", "Beast", "Storm", "Jubilee", "Rogue","Gambit","Cable"];


  var input = document.querySelector("#heroInput");
  var heroes = document.getElementsByTagName("li");
    console.log(heroes);
    input.addEventListener("keyup",function (e){

        var heroSearch = input.value.toLowerCase();
        var filterHeroNames = [];
        for(var i = 0; i < heroes.length; i++){
            if(heroes[i].indexOf(heroSearch) >= 0){
                filterHeroNames.push(heroes[i]);
            }
        }

    })



// practicing filter--------

// var heroe = document.getElementsByClassName('hero-names')
//     heroe.addEventListener("keyup",function (e){
//
//     })
//
//  function loopHeroNames (){
//      for(var i = 0; i < heroes.length; i++){
//          heroes[i]
//      }
//  }

 // code from coffee project-----------

    // var searchBar = document.querySelector('#search');
    // function coffeeLoop (e){
    //     e.preventDefault(); // don't submit the form, we just want to update the data
    //     var coffeeSearch = searchBar.value.toLowerCase();
    //     var filteredCoffeeNames = [];
    //     for(var i = 0; i < coffees.length; i++){
    //         var coffeeName = coffees[i].name;
    //         if(coffeeName.toLowerCase().indexOf(coffeeSearch) >= 0) {
    //             filteredCoffeeNames.push(coffees[i]);
    //         }










})();