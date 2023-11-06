document.addEventListener("DOMContentLoaded", listproducts);

document.addEventListener("click", () => {
    const btnform = document.getElementById("productos-tabla");

    btnform.addEventListener("click", () => {
        insertProduct();
    });
});

const buscarProducto = () => {
    const input = document.getElementById('buscar-producto');
    const filter = input.value.toUpperCase();
    const table = document.getElementById('inventario-tabla');
    const rows = table.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td')[0]; // Solo la primera celda (nombre)
        const cellText = cells.innerText.toUpperCase();

        if (cellText.indexOf(filter) > -1) {
            rows[i].style.display = '';
        } else {
            rows[i].style.display = 'none';
        }
    }
};



