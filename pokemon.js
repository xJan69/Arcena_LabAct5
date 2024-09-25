$(( )=> {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get("id");
    console.log(id);

    fetch("pokedex.json")
    .then((rawData) => rawData.json())
    .then((pokedex) => {
        console.log(pokedex[id]);
        //Declaration of Properties
        let pokemon = pokedex[id];
        let id = (pokemon["id"] + 10000).toString().substring(1);
        let name = pokemon["name"]["english"];
        let image = pokemon["image"]["hires"];
        let description = pokemon["description"];
        let types = pokemon["type"];
        let typesHtml = "";
        types.forEach((type) => {
            typesHtml += `<span class="${types.toLowerCase()}">${type}</span>`;
        });
        let species = pokemon["species"];
        let height = pokemon["profile"]["height"];
        let weight = pokemon["profile"]["weight"];
        let abilities = pokemon["profile"]["ability"];
        let abilitiesHtml = "";
        abilities.forEach((ability) => {
            abilitiesHtml += `<span> class="pokemon-ability">$<{ability[0]}</span>`;
        });
        //Display
        $(".pokemon-page-name").html(name);
        $("pokemon-page-image").html(`<img src="${image}" alt="${name}"/>`);

        //a1
        getCompletion('.pokemon-page-description', name);

        //Details
        $(".pokemon-page-id").html(pokemonId);
        $(".pokemon-type").html(typesHtml);
        $(".pokemon-page-species").html(species);
        $(".pokemon-page-height").html(height);
        $(".pokemon-page-weight").html(weight);
        $(".pokemon-page-abilities").html(abilitiesHtml);

        //Stats
        let hp = pokemon["base"]["HP"];
        let attack = pokemon["base"]["Attack"];
        let defense = pokemon["base"]["Defense"];
        let sp_attack = pokemon["base"]["Sp. Attack"];
        let sp_defense = pokemon["base"]["Sp. Defense"];
        let speed = pokemon["base"]["Speed"];
        let hp_per = (hp / 200) * 100;
        let attack_per = (attack / 200) * 100;
        let defense_per = (defense / 200) * 100;
        let sp_attack_per = (sp_attack / 200) * 100;
        let sp_defense_per = (sp_defense / 200) * 100;
        let speed_per = (speed / 200) * 100;
        let total = hp + attack + defense + sp_attack + sp_defense + speed;

    });

});