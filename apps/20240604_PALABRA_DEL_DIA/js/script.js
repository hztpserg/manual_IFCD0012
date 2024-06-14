document.addEventListener('DOMContentLoaded', function() {
    let secreta = palabras[Math.floor(Math.random()*palabras.length)];

    console.log(secreta);

    const maximoIntentos = 6;
    const maxLetras = 6;
    const alfabeto = 'QWERTYUIOPASDFGHJKLÑZXCVBNM';

    let intentoActual = 0;
    let posicionActual = 0;

    // PINTAMOS INTENTOS
    const intentosDiv = document.getElementById('idIntentos');
    for (i = 0; i < maximoIntentos; i++) {
        // CREAMOS INTENTO COMO UNA FILA <DIV> DE CLASS 'fila-intento' 
        const fila = document.createElement('div');
        fila.classList.add('fila-intento');
        fila.setAttribute('data-fila', i);
        for (j = 0; j < maxLetras; j++) {
            // RELLENAMOS INTENTO CON LOS BOTONES de CLASS 'letra'
            // Y ASIGNAMOS LOS ATRIBUTOS PARA IDENTIFICAR EL INTENTO Y PSICION
            const letraButton = document.createElement('button');
            letraButton.classList.add('letra');
            letraButton.setAttribute('data-fila', i);
            letraButton.setAttribute('data-columna', j);
            fila.appendChild(letraButton);
        }
        intentosDiv.appendChild(fila);
    }

    // PINTAMOS EL ALFABETO
    const alfabetoDiv = document.getElementById('idAlfabeto');
    for (i = 0; i < alfabeto.length; i++) {
        if (i == 0 || i == 10 || i == 20) {
            //CREAMOS UN NUEVO <DIV>
            fila = document.createElement('div');
            fila.classList.add('fila-alfabeto');
        }
        if (i == 20) {
            // CREAMOS BOTON DE 'Enviar'
            letraButton = document.createElement('button');
            letraButton.classList.add('boton-enviar-borrar');
            letraButton.textContent = 'Enviar';
            letraButton.setAttribute('data-letra', 'Enviar');
            letraButton.addEventListener('click', function() {
                enviarPalabra();
            });
            fila.appendChild(letraButton);
        }
        // RELLENAMOS LA FILA CON LOS BOTONOS DE ALFABETO DE CLASS 'boton-letra'
        // Y ASIGNAMOS ATRIBUT 'data-letra' PARA IDENTIFICARLA y METODO 'click' PARA LA FUNCION 'pintarLetra'
        letraButton = document.createElement('button');
        letraButton.classList.add('boton-letra');
        letraButton.textContent = alfabeto[i];
        letraButton.setAttribute('data-letra', alfabeto[i]);
        letraButton.addEventListener('click', function() {
            pintarLetras(this.getAttribute('data-letra'));
        });
        fila.appendChild(letraButton);
        if (i == alfabeto.length - 1) {
            // CREAMOS BOTON DE 'Borrar'
            letraButton = document.createElement('button');
            letraButton.classList.add('boton-enviar-borrar');
            letraButton.textContent = 'Borrar';
            letraButton.setAttribute('data-letra', 'Borrar');
            letraButton.addEventListener('click', function() {
                borrarLetra();
            });
            fila.appendChild(letraButton);
        }
        alfabetoDiv.appendChild(fila);
    }

    function enviarPalabra() {
        if (posicionActual != maxLetras) {
            alert('Debes que rellenar la palabra completa');
            return;
        }
        revisarPalabra();
        if (intentoActual != maximoIntentos - 1) {
            intentoActual++;
            posicionActual = 0;
        }
    }

    function pintarLetras(letra) {
        if (intentoActual < maximoIntentos && posicionActual < maxLetras) {
            letraButton = document.querySelector(`button[data-fila='${intentoActual}'][data-columna='${posicionActual}']`)
            letraButton.textContent = letra;
            posicionActual++;
        }
    }

    function borrarLetra() {
        if (posicionActual != 0) {
            posicionActual--;
            letraButton = document.querySelector(`button[data-fila='${intentoActual}'][data-columna='${posicionActual}']`)
            letraButton.textContent = '';
        }
    }

    function revisarPalabra() {
        // LA PALABRA DE INTENTO ACTUAL
        palabraIntento = obtenerPalabraIntento();
        // CONVERTIMOS LAS CADENAS 'secreta' y 'palabraIntento' EN LAS ARRAYS
        letrasSecreto = secreta.split('');
        lertasIntento = palabraIntento.split('');
        // ACCEDEMOS AL CONTENIDO DE LA FILA
        const filaIntento = document.querySelectorAll(`.fila-intento[data-fila='${intentoActual}'] button`)
        for (i = 0; i < maxLetras; i++) {
            const boton = filaIntento[i];
            const letra = lertasIntento[i];
            //VERIFIVAMOS LAS LETRAS
            if (letrasSecreto[i] === letra) {
                // LETRA EN LA POSICION CORRECTA (verde)
                boton.style.backgroundColor = 'green';
                actualizarBotonAlfabeto(letra, 'green');
            } else if (letrasSecreto.includes(letra)) {
                // LETRA ESTA EN LA PALABRA PERO EN UNA POSICION DIFERENTE (amarillo)
                boton.style.backgroundColor = 'yellow';
                actualizarBotonAlfabeto(letra, 'ywllow');
            } else {
                // LETRA NO ESTA EN LA PALABRA
                boton.style.backgroundColor = 'gray';
                actualizarBotonAlfabeto(letra, 'gray');
            }
        }
        //
        if (palabraIntento === secreta) {
            alert("Felisidades! Has ganado!");
        } else {
            if (intentoActual === maximoIntentos) {
                alert("Has perdido! Intentalo otra vez");
            }
        }
    }

    function obtenerPalabraIntento() {
        // ACCEDEMOS A LA PALABRA DEL INTENTO ATRAVEZ DE LA FILA DE INTENTO ACTUAL
        let palabra = '';
        const botonesIntento = document.querySelectorAll(`.fila-intento[data-fila='${intentoActual}'] button`);
        for (const boton of botonesIntento) {
            palabra += boton.textContent;
        }
        return palabra;
    }

    function actualizarBotonAlfabeto(letra, color) {
        // ACCEDEMOS AL BOTON DEL ALFABETO
        const botonAlfabeto = document.querySelector(`.boton-letra[data-letra='${letra}']`);
        if (botonAlfabeto && color === 'gray') {
            botonAlfabeto.style.backgroundColor = color;
        }
    }
});