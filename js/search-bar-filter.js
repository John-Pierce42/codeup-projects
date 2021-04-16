(function () {
    "use strict"
    var heroArray = [
        {name: "Batman"},
        {name: "Superman"},
        {name: "Flash"},
        {name: "Cyborg"},
        {name: "Wonder Woman"},
        {name: "Aqua Man"},
        {name: "Hulk"},
        {name: "Rocket"},
        {name: "Spider Man"},
        {name: "Iron Man"},
        {name: "Ant Man"},
        {name: "Captain America"},
        {name: "Black Widow"},
        {name: "Thor"},
        {name: "Hawk Eye"},
        {name: "Groot"},
        {name: "Black Panther"},
        {name: "Scarlet Witch"},
        {name: "Wolverine"},
        {name: "Cyclops"},
        {name: "Professor X"},
        {name: "Beast"},
        {name: "Storm"},
        {name: "Jubilee"},
        {name: "Rogue"},
        {name: "Gambit"},
        {name: "Cable"}
    ];


    function renderHero(hero) {
        var html = "<div class='container'>"
        html += "<div class='row justify-content-center mt-5'>"
        html += "<ul>";
        html += "<li>" + hero.name + "</li>";
        html += "</ul>"
        html += "</div>"
        html += "</div>"

        return html;
    }

    function renderHeroes(heroes) {
        var html = "";
        for (var i = 0; i < heroes.length; i++) {
            html += renderHero(heroes[i]);
        }
        return html;
    }


    var searchBar = document.getElementById("search");
    var submitBtn = document.getElementById("submit");

    function filterHeroes() {

        var searchHero = searchBarInput.value.toLowerCase();
        var filterHeroNames = "";
        console.log(heroList);
        for (var i = 0; i < heroList.length; i++) {
            if (heroList[i].toLowerCase().indexOf(searchHero) >= 0) {
                filterHeroNames.push(heroList[i]);
            } else {
                filterHeroNames = "";
            }
        }

    }


    searchBarInput.addEventListener("keyup", filterHeroes);


})();