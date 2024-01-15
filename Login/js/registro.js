const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-Z]{4,16}$/, // Solamente Letras y más de 3 caracteres
	apellido: /^[a-zA-Z]{4,16}$/, // Solamente Letras y más de 3 caracteres
    dni: /^.[0-9]{7,7}$/, //Solo número más de 7 hasta 10
    fnac: /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/, //Solo fecha
    telefono: /^\d{7,14}$/,
    direccion:/^[a-zA-Z 0-9]{5,25}$/,
    localidad:/^[a-z\sA-Z]{4,27}$/, //regex que permite letras y espacio en blanco(\s)
    cPostal:/^.[0-9]{3,4}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	password: /^[a-zA-Z 0-9]{8,15}$/, // Al menos 8 caracteres, formados por letras y números.
	password2:/^[a-zA-Z 0-9]{8,15}$/, //Al menos 8 caracteres, formados por letras y números.
}

const campos = {
	nombre: false,
	apellido: false,
    dni:false,
    fnac:false,
    telefono:false,
    direccion:false,
    localidad:false,
    cPostal:false,
    correo: false,
	password: false,
	password2: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target,'nombre');
		break;
		case "apellido":
			validarCampo(expresiones.apellido, e.target,'apellido');
		break;
        case "dni":
			validarCampo(expresiones.dni, e.target,'dni');
		break;
        case "fnac":
			validarCampo(expresiones.fnac, e.target,'fnac');
		break;
        case "telefono":
			validarCampo(expresiones.telefono, e.target,'telefono');
		break;
        case "direccion":
			validarCampo(expresiones.direccion, e.target,'direccion');
		break;
        case "localidad":
			validarCampo(expresiones.localidad, e.target,'localidad');
		break;
        case "cPostal":
			validarCampo(expresiones.cPostal, e.target,'cPostal');
		break;
        case "correo":
			validarCampo(expresiones.correo, e.target,'correo');
		break;
        case "password":
			validarCampo(expresiones.password, e.target,'password');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.nombre && campos.apellido && campos.dni && campos.fnac && campos.telefono && campos.direccion && campos.localidad && campos.cPostal && campos.correo && campos.password && campos.password && terminos.checked ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});


/* function datos(){
	const formulario = document.querySelector('#formulario')
	formulario.addEventListener('submit', (e)=>{
    e.preventDefault()
    const apellido = document.querySelector('#apellido').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    const Users =  JSON.parse(localStorage.getItem('users')) || []
    const  IsUserRegistered = Users.find(user => user.email === email)
    if(IsUserRegistered){
        return alert('El usuario ya está registrado!!')
    }

    usuario.push({apellido: apellido, email:email,password:password})
    localStorage.setItem('users',JSON.stringify('usuario'))
    alert('Registro Exitoso')
    window.location.href ='login.html'
	});
} */