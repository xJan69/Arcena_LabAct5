$(document).ready(function(){
    fetch("pokedex.json")
        .then((rawData) => rawData.json())
        .then(pokedex => {
            
            pokedex.forEach(pokemon => {
                //Declaration of Properties
                let id = pokemon["id"];
                let name = pokemon["name"];
                let image = pokemon["image"]["hires"];
                let types = pokemon["type"];
                let typesHtml = "";
                
                types.forEach(type =>{
                    typesHtml += `<span class="${type}">${type}</span>`;

                    console.log(name);
                });
            });
        })




});
