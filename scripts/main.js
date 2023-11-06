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
        const cells = rows[i].getElementsByTagName('td');
        let found = false;

        for (let j = 0; j < cells.length; j++) {
            if (cells[j]) {
                const cellText = cells[j].innerText.toUpperCase();
                if (cellText.indexOf(filter) > -1) {
                    found = true;
                    break;
                }
            }
        }

        if (found) {
            rows[i].style.display = '';
        } else {
            rows[i].style.display = 'none';
        }
    }
};



