window.addEventListener('DOMContentLoaded', function() {
  var animatedText = document.getElementById('animated-text');
  animatedText.classList.add('animate__animated', 'animate__fadeIn');
});


function selectSlide(index, containerId) {
  const carouselItems = document.querySelectorAll(`#${containerId} .carousel-item`);
  const carouselControls = document.querySelectorAll(`#${containerId} .carousel-controls button`);

  carouselItems.forEach((item, i) => {
      if (i === index) {
          item.classList.add('active');
          carouselControls[i].classList.add('active');
      } else {
          item.classList.remove('active');
          carouselControls[i].classList.remove('active');
      }
  });
}


    // La parte del formulario

    function validarFormulario() {
        var nombre = document.getElementById('nombre').value;
        var email = document.getElementById('email').value;
        var telefono = document.getElementById('telefono').value;
        var mensaje = document.getElementById('mensaje').value;
    
        // Validar que todos los campos estén completos
        if (nombre === '' || email === '' || telefono === '' || mensaje === '') {
        alert('Por favor, complete todos los campos.');
          return false; // Evita que el formulario se envíe
        }
    
        // Validar formato de correo electrónico
        var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
        if (!email.match(emailRegex)) {
        alert('Ingrese una dirección de correo electrónico válida.');
          return false; // Evita que el formulario se envíe
        }
    
       // Validar formato de número de teléfono (10 o más dígitos)
      var telefonoRegex = /^\d{8,}$/; // Ejemplo: 12345670 (al menos 8 dígitos)
    if (!telefono.match(telefonoRegex)) {
        alert('Ingrese un número de teléfono válido (al menos 8 dígitos sin contar el codigo de area).');
        return false; // Evita que el formulario se envíe
    }
    
        // Otras validaciones y lógica de envío del formulario...
    
        return true; // Permite el envío del formulario si pasa todas las validaciones
    }


    //La parte de la API//
    function fetchData() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
          const resultsList = document.getElementById('results-list');
          resultsList.innerHTML = '';
    
          data.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = `${user.name} - ${user.email}`;
            resultsList.appendChild(listItem);
          });
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
    
    const fetchButton = document.getElementById('fetch-button');
    fetchButton.addEventListener('click', fetchData);
