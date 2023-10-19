const PokemonList = document.getElementById('PokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const details = document.getElementById('Pokedetails');
const maxRecords = 152
 const limit = 15
 let offset = 0   
 const url = 'https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}'
 


 

function loadPokemonItens(offset, limt) {

 


  pokeApi.getPokemons(offset, limt).then((Pokemons = []) => {
    const newHtml = Pokemons.map((Pokemon) =>  ` 
      <li class="Pokemon ${Pokemon.type}">  
          <span class="number"> #${Pokemon.number}</span>
         <span class="name">${Pokemon.name}</span>
        
          <div class="detail">
            <ol class="types">
             ${Pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join(' ')}
            </ol>
            <img src="${Pokemon.photo}"
                 alt=${Pokemon.name}">
          </div>

          </li>
          `).join(' ')
              PokemonList.innerHTML += newHtml
  })
}





    loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})
        details.addEventListener('click',()=>{
          window.location='Pokemon detail.html'
        })