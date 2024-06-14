class Pregunta {
    constructor (numero, pregunta, opciones, opcCorrecta) {
        this.numero = numero;
        this.pregunta = pregunta;
        this.opciones = opciones;
        this.opcCorrecta = opcCorrecta;
    }
    toString() {
        let mostrar = "";
        
        mostrar = "<h3>" + this.numero + "</h3>";
        mostrar += "<h3>" + this.pregunta + "</h3>";
        mostrar += "<fieldset><legenda>Opciones</legenda>";
        this.opciones.forEach((opcion, index) => {
             mostrar += `
            <p>
                <input type="radio" name="opciones" id="opcId${index}" value="${index}">
                <label for="opcId${index}" id="lblId${index}">${index + 1}) ${opcion}</label>
            </p>
        `;
        });
        mostrar += "</fieldset>";
        return mostrar;
    }
}