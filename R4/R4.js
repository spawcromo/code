var tabla = document.querySelector("#tabla");

function consumir() {

    fetch('https://www.breakingbadapi.com/api/characters?limit=5&offset=1')
        .then(res => res.json())
        .then(datos => {
            console.log(datos)
            crearTabla(datos)
        })

}

function crearTabla(datos) {

    tabla.innerHTML = "";
    for (let valor of datos) {

        tabla.innerHTML += `

        <tr>

            <td>${valor.name}</td>
            <td>${valor.birthday}</td>
            <td>${valor.occupation}</td>
            <td>${valor.nickname}</td>
            <td>${valor.status}</td>
   

        </tr>`

    }
}

