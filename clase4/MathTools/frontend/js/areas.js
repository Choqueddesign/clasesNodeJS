/*
const hacerPeticion = ()=>{
    let radio = document.getElementById("r").value;
    let altura = document.getElementById("h").value;

    if(radio && altura){//condicion && para que deban cumplirse las dos
        fetch(`http://localhost:8080/cilindro?r=${radio}&h=${altura}`),{mode:"no-cors"}
        .then(reponse => reponse.json())//.json convierte la respuesta a algo entendible
        .then(data => console.log(data))
    }
}*/
const hacerPeticion = () => {
    let radio = document.getElementById("r").value;
    let altura = document.getElementById("h").value;
    let myModal = new bootstrap.Modal(document.getElementById('exampleModal'))
    
    let result = document.getElementById("result");

    if (radio && altura) {
        fetch(`http://localhost:8080/cilindro?r=${radio}&h=${altura}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                result.innerHTML = parseFloat(data.area).toFixed(2)
                myModal.show()
            })
    }
}
