document.getElementById('botao')
.addEventListener('click', function(){

    let nome = document.getElementById('nome-pokemon').value
    
    fetch('https://pokeapi.co/api/v2/pokemon/'+nome)
    .then(function(response){
        return response.json()
    }).then(function(response){

        console.log(response.abilities)

        let html_habilidades = ''
        for (const hab of response.abilities) {
            console.log(hab.ability.name)
            html_habilidades += '<li>' +hab.ability.name+'</li>'
        }

        let lista = document.getElementById('habilidades')
        lista.innerHTML = html_habilidades

        console.log(response.sprites.front_default)

        let url = response.sprites.front_default
        document.getElementById('img-card').setAttribute('src', url)

    })
})
