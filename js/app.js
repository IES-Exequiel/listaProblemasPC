let listaPC = [];

const procesarFormulario = (event) => {
    event.preventDefault();
    let number = document.getElementById("number").value;
    let problema = document.getElementById("problema").value;
    let objeto = {
        "Numero PC": number,
        "Problema": problema
    }
    listaPC.push(objeto);
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    listaPC.forEach((element, index) => {
        tbody.innerHTML += `<tr>
        <th scope="row">${index + 1}</th>
        <td>${element["Numero PC"]}</td>
        <td>${element["Problema"]}</td>
        <td><input type="checkbox" name="resuelto" id="resuelto${index}"></td>
        </tr>`;
    });
}
