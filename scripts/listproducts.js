import { inventario } from "./products.js";

export const listproducts = () => {


    //const table = document.getElementById("inventario-tabla")
    const cleanTable = document.getElementById("clear-table")

    inventario.forEach(item => {

        const row = cleanTable.insertRow()

        const cell1 = row.insertCell(0)
        const cell2 = row.insertCell(1)
        const cell3 = row.insertCell(2)
        const cell4 = row.insertCell(3)

        cell1.innerHTML = item.nombre
        cell2.innerHTML = item.cantidad
        cell3.innerHTML = item.precio

        

     const deleteButton = document.createElement("button")
       deleteButton.innerText = "BORRAR";
       deleteButton.addEventListener("click", () => {
       const confirmed = window.confirm("¿Quieres borrar este producto?")
    if (confirmed) {
        row.remove()
    }
});   

        cell4.appendChild(deleteButton)

        const editButton = document.createElement("button")
        editButton.innerText = "EDITAR"
        editButton.addEventListener("click", () => {

            const cantidadInput = document.createElement("input");
            cantidadInput.value = item.cantidad;

            const precioInput = document.createElement("input");
            precioInput.value = item.precio;

            // Reemplazar el contenido de las celdas con los campos de entrada
            cell2.innerHTML = '';
            cell2.appendChild(cantidadInput);

            cell3.innerHTML = '';
            cell3.appendChild(precioInput);

            // Agregar un botón de confirmar edición
            const confirmButton = document.createElement("button");
            confirmButton.innerText = "CONFIRMAR";
            cell4.appendChild(confirmButton);
            

            confirmButton.addEventListener("click", () => {
                // Actualizar los valores de cantidad y precio con los nuevos valores de los campos de entrada
                item.cantidad = cantidadInput.value;
                item.precio = precioInput.value;

                // Actualizar el contenido de las celdas
                cell2.innerHTML = item.cantidad;
                cell3.innerHTML = item.precio;

                // Eliminar el botón de confirmar edición
                cell4.removeChild(confirmButton);

            
            })

        }) 

        cell4.appendChild(editButton) 
        
    });

}

    

    
    

  


