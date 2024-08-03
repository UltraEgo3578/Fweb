//função que le o arq.json
fetch("../Exer2/exer2.json")
.then(response=>response.json())
.then(pessoas=>{
    for(const pessoa in pessoas)
    {
        //variavel que recebe um elemento paragrafo
        let newName = document.createElement("p");
        //salva o nome da pessoa na variavel
        newName.innerHTML = pessoas[pessoa].nome;
        //coloca o paragrafo <p> como novo texto em h1
        document.querySelector('h1').appendChild(newName);

        let newIdade = document.createElement("p");
        newIdade.innerHTML = pessoas[pessoa].idade;
        document.querySelector('h1').appendChild(newIdade);

        let newCpf = document.createElement("p");
        newCpf.innerHTML = pessoas[pessoa].cpf;
        document.querySelector('h1').appendChild(newCpf);

        let newTelefone = document.createElement("p");
        newTelefone.innerHTML = pessoas[pessoa].telefone;
        document.querySelector('h1').appendChild(newTelefone);
    }
}
);