import { loadPage, deletePage, downloadZIP, importJSON, createAlert } from './functions.js';
import { getComponent } from './get-component.js';
const categories = [
    "Headers", 
    "Hero Sections", 
    "Features-General", 
    "Features-Stats", 
    "Features-Step", 
    "Features-Navs",
    "Icons Block", 
    "Cards-Grid", 
    "Cards-List", 
    "Testimonials", 
    "Pricing", 
    "Team Sections", 
    "Call-to-Action", 
    "Gallery", 
    "Clients", 
    "FAQ", 
    "Comments", 
    "User Profile", 
    "Sidebar Examples", 
    "Content Sections", 
    "Authentication", 
    "Feedback", 
    "Filters", 
    "Search", 
    "Subscribe", 
    "Contact Sections", 
    "Footer"
];

const select = document.getElementById("category");

// Agrega las categorias al SELECT
categories.forEach(category => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    select.appendChild(option);
});

const form = document.getElementById("add-component-form");
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que se recargue la página

    const nameValue = document.getElementById("name").value;
    const categoryValue = document.getElementById("category").value;
    let iconSelectValue = document.getElementById("icon-select").value;
    let contentValue = document.getElementById("content").value;

    contentValue = contentValue.replace(/"/g, '\"'); // Reemplazar comillas dobles
    contentValue = contentValue.replace(/[\n\r]/g, ''); // Quitar saltos de línea y retornos de carro

    const newComponent = {
        label: nameValue,
        category: categoryValue,
        attributes: { class: (iconSelectValue != null && iconSelectValue != "") ? iconSelectValue : "fa fa-puzzle-piece" },
        content: contentValue
    };

    fetch("/add-component", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newComponent)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data.message);
            
            createAlert("success", data.message);

            form.reset();
            getComponent();
        })
        .catch(err => {
            console.error("Error al guardar:", err);
            createAlert("danger", err);
        });
});