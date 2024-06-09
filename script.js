let currentIndex = 0;

function moveSlide(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    // Remove active class from all items
    items.forEach(item => item.classList.remove('active'));

    // Update current index
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    // Add active class to the new current item
    items[currentIndex].classList.add('active');
}

// Initialize the first item as active
document.querySelectorAll('.carousel-item')[0].classList.add('active');






console.log("hola");
var input_nombre = document.getElementById("nombre");
var input_mail = document.getElementById("mail");
var input_submit = document.getElementById("submit");
var botoncruz = document.getElementById("atras");

console.log(input_nombre);
console.log(input_mail);
console.log(input_submit);

//-----------------------//
botoncruz.addEventListener("click", iratras);
function iratras(event){
    elementoFeedback.classList.add("oculto");
    elementoformulario.classList.remove("oculto");
}
//-----------------------//

input_submit.addEventListener("click", enviarFormulario);
function enviarFormulario(event){
    event.preventDefault();
    console.log("hemos hecho click");
    console.log("...");

var valorNombre = input_nombre.value;
var valorMail = input_mail.value;
console.log(valorNombre);
console.log(valorMail);

var feedbackNombre = document.getElementById("nombrefeedback");
var feedbackMail = document.getElementById("mailfeedback");

feedbackNombre.innerHTML = valorNombre;
feedbackMail.innerHTML = valorMail;


//-----------------------//

elementoFeedback = document.getElementById("feedbackk");
elementoFeedback.classList.remove("oculto");

elementoformulario = document.getElementById("formularioid");
elementoformulario.classList.add("oculto");
}






