import { inventario } from "./products";

document.addEventListener("DOMContentLoaded", listproducts);

document.addEventListener("click", () => {
    const btnform = document.getElementById("productos-tabla");

    btnform.addEventListener("click", () => {
        insertProduct();
    });
});











