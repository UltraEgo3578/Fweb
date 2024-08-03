const imgchooseyou = document.querySelector('#imgpokemon')
const nomepokemon = document.querySelector('#nomepokemon')
const numpokemon = document.querySelector('#numeropokemon')
//
const tipokemon = document.querySelector('#type1')
const tipopokemon = document.querySelector('#type2')
//
const pesopokemon = document.querySelector('#weight')
const altpokemon = document.querySelector('#height')
//
const botao1 = document.querySelector('#btn1')
const botao2 = document.querySelector('#btn2')
//
const inputsrc = document.querySelector('#inputName')
const form = document.querySelector('.form-busca')
//
const audiopoke = document.querySelector('#audioPokedex')
const audiopkm = document.querySelector('#audioPokemon')
//
let idPokemon = 1; 
//
const fetchPokemon = async(pokemon) =>{
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIresponse.json();
    return data;
}
//
const showPokemon = async(pokemon) =>{
    const datapokemon = await fetchPokemon(pokemon);
    idPokemon = datapokemon.id;
    imgchooseyou.src = datapokemon.sprites.front_default;
    nomepokemon.innerHTML = datapokemon.name;
    numpokemon.innerHTML = datapokemon.id;
//    
    tipokemon.innerHTML = datapokemon.types[0].type.name;
    if(datapokemon.types.length>1){
        tipopokemon.innerHTML = datapokemon.types[1].type.name;
    } else 
    tipopokemon.innerHTML ='';
 
//
    pesopokemon.innerHTML = datapokemon.weight;
    altpokemon.innerHTML = datapokemon.height;
//
    audiopkm.src = datapokemon.cries.latest;
}

//
botao1.addEventListener("click", () => {
    if (idPokemon>1){
        idPokemon-=1;
        showPokemon(idPokemon);
    }
});
//
botao2.addEventListener("click", () => {
    idPokemon+=1;
    showPokemon(idPokemon);
});
//
inputsrc.addEventListener("input", () =>{
    idPokemon = toString(inputsrc.value);
});
//
form.addEventListener('submit', (event) =>{
    event.preventDefault();
    showPokemon(inputsrc.value.toLowerCase());
})

//
showPokemon(idPokemon);


