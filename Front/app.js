const getBijuUrl =  "http://localhost:5500/bijuus"

const postbiju = {
    name: "Isobu", 
    animal: "Tartaruga",
    quantcaudas: "4",
    jinchuuriki: "Yagura",
    descfisica: "Tartaruga com casco de carangueijo",
    aldeia: "Kirigakure",
    status: "Selado",
    acontecimentos: "Capturada por Deidara",
    foto: "https://recreio.uol.com.br/media/_versions/historia/kurama_capa_widelg.jpg"
}
const upbiju ={
    name: "JJJJJJJJJJJJJJJJJJJJJ", 
    animal: "Tartaruga",
    quantcaudas: "3",
    jinchuuriki: "Yagura",
    descfisica: "Tartaruga com casco de carangueijo",
    aldeia: "Kirigakure",
    status: "Selado",
    acontecimentos: "Capturada por Deidara",
    foto: "https://upload.wikimedia.org/wikipedia/pt/9/94/Isobu_%28Sanbi%29.png"

}
//Pegando informações da Api
function getBiju(){
    axios.get(getBijuUrl)
    .then(response => {
        const biju = response.data
        //results.textContent = JSON.stringify(biju)
        const bijuname = biju.map((item) => {
            return item.name
        })
        const quantcaudas = biju.map((item) => {
            return item.quantcaudas
        }
        )
        const foto = biju.map((item) => {
            return item.foto
        })
        //console.log(foto)
        //console.log(quantcaudas)
        //console.log(bijuname)
        
    })
    .catch(error => console.log(error))
}
//Enviando infomações pra Api
function postBiju(){
    axios.post(getBijuUrl, postbiju)
    .then(response => {
        alert("Biju adicionada")
    })
    .catch(error => console.log(error))
}
//Atualizando Bijuu
function putBiju(){
    axios.put(getBijuUrl+"/3", upbiju)
    .then(response => {
        alert("Biju Atualizada")
    })
    .catch(error => console.log(error))
}
//Apagando uma Bijuu
function deleteBiju(){
    axios.delete(getBijuUrl+"/4")
    .then(response => {
        alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}
//deleteBiju()
getBiju()
//postBiju()
//putBiju()
/*
function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLista(biju){
    
    lista = document.createElement("li");
    listaindex = document.createElement("li");
    listaname = document.createElement("li");
    listafoto = document.createElement("li");
    listaindex.innerHTML = biju.index
    listaname.innerHTML = biju.name
    listafoto.innerHTML = biju.foto

    lista.appendChild(listaindex);
    lista.appendChild(listaname);
    lista.appendChild(listafoto);
    console.log(lista)
    return lista;
}

function main(){
    let data = fazGet("http://localhost:5500/bijuus");
    let bijus = JSON.parse(data);
    let ul = document.getElementById("bijudex");

    bijus.forEach(element => {
        let lista = criaLista(element);
        ul.appendChild(lista);
        console.log(element)
    });

}
main()    
`
                    <li class="card ${elementstypes[0]}">
                    <img class="card-image" alt="${name}" src="https://recreio.uol.com.br/media/_versions/historia/kurama_capa_widelg.jpg"
                    <h2 class="card-title">${id}. ${name}</h2>
                    <p class="card-subtitle">${elementstypes.join(' | ')}</p>
                    </li>
                    `*/