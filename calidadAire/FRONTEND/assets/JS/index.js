const hacerPeticion = () => {
    let myModal = new bootstrap.Modal(document.getElementById('modalAqi'))
    
    let result = document.getElementById("result");

    if (result) {
        fetch(`http://localhost:3000/aqi`,{method:"GET"})
            .then(response => response.json())
            .then(data => {
                console.log(data)
                result.innerHTML = "El indice de calidad del aire del barrio Las Ferias es de "+ parseFloat(data.aqiFromThirdPartyService) + " con base en el Material Particulado de 2.5 (PM 2.5) "
                myModal.show()
            })
    }
}