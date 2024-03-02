import "./css/base.css";
import { sayHello } from "./js/utils";
console.log(sayHello("Hello"));


// Estos son los nodos de todos nuestro esqueleto html

let header_input = document.querySelector('.new-todo')
let supreme_button = document.querySelector('.destroy')

// Nodos De la rama Main

let hero_main = document.querySelector('.main')
let task_completed = document.querySelector('.completed')
let todoList = document.querySelector('.todo-list');

// Nodos De la rama footera 

let hero_footer = document.querySelector('.footer')



// ACCIONES BASICAS
todoList.addEventListener('click', function(event) {
    // Verifica si el objetivo del evento es un botón "destroy"
    if (event.target.classList.contains('destroy')) {
        // Obtén el elemento li padre del botón "destroy"
        if (event){
            console.log(event.target)
        }
        let taskItem = event.target.closest('li');

        // Elimina el elemento de la lista
        todoList.removeChild(taskItem);

        // Llama a la función para ocultar la sección main y el footer
    }
});

// input agregar Task
// Agrega un evento de escucha al input
header_input.addEventListener('keydown', function(event) {
    // Verifica si se presionó la tecla Enter (código 13)
    if (event.key === 'Enter') {
        // Captura el valor del input
        let newTaskText = header_input.value.trim();

        // Verifica si el valor no está vacío
        if (newTaskText !== '') {
            // Crea un nuevo elemento de lista (li)
            let newTaskItem = document.createElement('li');
            newTaskItem.innerHTML = `
                <div class="view">
                    <input class="toggle" type="checkbox" />
                    <label>${newTaskText}</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="${newTaskText}" />
            `;

            // Agrega el nuevo elemento a la lista
            todoList.appendChild(newTaskItem);

            // Limpia el valor del input después de agregar la tarea
            header_input.value = '';

            // Llama a la función para ocultar la sección main y el footer
            ocultarMainYFooter();
        }
    }
});




// funciones para ocultar

function ocultarMainYFooter() {
    var listaTareas = document.querySelectorAll('.todo-list li');

    // Verificar si la lista de tareas está vacía
    if (listaTareas.length === 0) {
        hero_main.style.display = 'none';
        hero_footer.style.display = 'none';
    } else {
        hero_main.style.display = 'block';
        hero_footer.style.display = 'block';
    }
}

  // Llama a la función para ocultar la sección main y el footer al cargar la página
    ocultarMainYFooter();