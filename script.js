const pokemonID = document.getElementById('pokemon-id');
const pokemonName = document.getElementById('pokemon-name');
const spriteContainer = document.getElementById('sprite-container');
const types = document.getElementById('types');
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

const getPokemon = async () => {
 try{
    const nameOrId = searchInput.value.toLowerCase();
    const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${nameOrId}`);
    const data = await response.json();
    // console.log(data)
    //pokemon data

    pokemonName.innerText = `${data.name.toUpperCase()}`
    pokemonID.innerText = `#${data.id}`
    weight.innerText = `Weigth: ${data.weight}`
    height.innerText = `Height: ${data.height}`
    types.innerHTML = data.types.map(obj => `<span class="type ${obj.type.name}">${obj.type.name.toUpperCase()}</span>`).join(" ")
    spriteContainer.innerHTML = `
      <img id="sprite" src="${data.sprites.front_default}" alt="${data.name} front default sprite">
    `
    //pokemon stats

    hp.innerText = data.stats[0].base_stat
    attack.innerText = data.stats[1].base_stat
    defense.textContent = data.stats[2].base_stat;
    specialAttack.textContent = data.stats[3].base_stat;
    specialDefense.textContent = data.stats[4].base_stat;
    speed.textContent = data.stats[5].base_stat;
 }catch (err){
    resetdisplay()
    alert("Pokémon not found")
    console.log(`Pokemon not found: ${err}`);
}
}

const resetdisplay = () => {
  searchInput.value = ""
  pokemonName.innerText = ""
    weight.innerText = ""
    height.innerText = ""
    types.innerHTML = ""
    spriteContainer.innerHTML =""
    pokemonID.innerText = ""
    //pokemon stats

    hp.innerText =""
    attack.innerText =""
    defense.textContent = ""
    specialAttack.textContent = ""
    specialDefense.textContent = ""
    speed.textContent = ""
}
searchForm.addEventListener('submit', e => {
    e.preventDefault();
    getPokemon();
  });

