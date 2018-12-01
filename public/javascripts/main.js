tarjeta();

function tarjeta() {
    fetch('/tarjeta',
    {
        method: 'GET'
    }).then(res => res.json())
    .then(data => {
        var tbody = document.querySelector('.filas');
        var lista = '';
        /*lista = lista + `
            <tr>
                <td>${data.id}</td>
                <td>${data.fecha}</td>
                <td>${data.codigo}</td>
            </tr>`*/
        for (let i = 0; i < data.length; i++){
            lista = lista + `
            <tr>
                <td>${data[i].id}</td>
                <td>${data[i].fecha}</td>
                <td>${data[i].codigo}</td>
            </tr>
            `
        }
        tbody.appendChild(lista);
    })
}