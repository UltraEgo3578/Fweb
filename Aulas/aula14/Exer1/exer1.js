let objetos='';
fetch("./exer1.json")
.then(response=>response.json())
.then(datas=>{
    for(const data in datas){
        objetos+= " "+datas[data];
    }
    document.querySelector('h1').innerHTML = objetos;
})