document
  .getElementById('formulario')
  .addEventListener('submit', function (event) {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;
    var hojaVida = document.getElementById('hoja_vida').files[0];
    console.log('Nombre:', nombre);
    console.log('Correo Electrónico:', email);
    console.log('Teléfono:', telefono);
    console.log('Hoja de Vida:', hojaVida);
  });

//Tener en cuenta que me falta todo el front del formulario, :()
