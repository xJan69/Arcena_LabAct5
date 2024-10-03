$(document).ready(function(){
    fetch("pokedex.json")
        .then((rawData) => rawData.json())
        .then(pokedex => {
            let linkId = 0;
            pokedex.forEach(pokemon => {
                //Declaration of Properties
                let id = (pokemon["id"] + 10000).toString().substring(1);
                let name = pokemon["name"]["english"];//["japanese"];
                let image = pokemon["image"]["hires"];
                let types = pokemon["type"];
                let typesHtml = "";
                
                types.forEach(type =>{
                    typesHtml += `<span class="${type}"> ${type}</span>`;
                });
                
                $('.pokemon-container').append(
                    `<div class="card">
                        <a href="pokemon.html?id=${linkId}">
                            <img src="${image}" alt="${name}">
                        </a>
                        <ul type="none">
                        <li class="pokemon-id">#${id}</li>
                        <li class="pokemon-name">
                            <a href="pokemon.html?id=${linkId++}">${name}</a>
                        </li>
                        <li class="pokemon-type">
                            ${typesHtml}
                        </li>
                        </ul>
                    </div>`
                );
            });
            console.log(typesHtml);
        });
});