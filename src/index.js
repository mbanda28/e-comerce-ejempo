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
    ocultarMainYFooter()
});


// Evento de edición para el input
todoList.addEventListener('keydown', function (event) {
    // Verificar si la tecla presionada es Enter y si la tarea está en modo de edición
    if (event.key === 'Enter' && event.target.classList.contains('edit')) {
        // Obtener el elemento padre li de la tarea editada
        let editedTaskItem = event.target.closest('li');

        // Marcar la tarea como completada agregando la clase 'completed'
        editedTaskItem.classList.add('view');

        // Desactivar el modo de edición
        editedTaskItem.classList.remove('editing');
    }
    ocultarMainYFooter()
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


// Agrega un evento de doble clic para la etiqueta de la tarea
todoList.addEventListener('dblclick', function (event) {
    if (event.target.tagName === 'LABEL') {
        // Obtén el elemento li padre de la etiqueta
        let taskItem = event.target.closest('li');

        // Activa el modo de edición
        taskItem.classList.add('editing');

        // Obtén el elemento de edición
        let editInput = taskItem.querySelector('.edit');

        // Coloca el foco en el campo de edición
        editInput.focus();
    }
});


// Evento de clic para los checkboxes
todoList.addEventListener('click', function (event) {
    if (event.target.classList.contains('toggle')) {
        // Obtén el elemento li padre del checkbox
        let taskItem = event.target.closest('li');

        // Cambia la clase 'completed' del elemento li
        taskItem.classList.toggle('completed');
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
