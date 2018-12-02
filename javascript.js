/**
 * Clase para almacenar los parametros get
 * @key llave del parametro
 * @value valor del parametro
 */
class parametro {
    constructor(key, value){
        this.key = key;
        this.value = value;
    }
}

/**
 * Clase que representara a los parametros GETs.
 */
class GET_PARAMETERS {
    constructor(){

        this.parametros = Array();
        this.data = window.location.search;
        this.valid = this.data.indexOf('?') == 0 ? true : false;

        if (this.valid) {
            var variables = this.data.split('?')[1].split('&');
            for (let i = 0; i < variables.length; i++) {
                const element = variables[i];
                const key = element.split('=')[0];
                const value = element.split('=')[1].split('#')[0];
                this.parametros.push(new parametro(key, value));
            }
        }
        
        this.get = function (key) {
            var source = null;
            for (let i = 0; i < this.parametros.length; i++) {
                const element = this.parametros[i];
                if(element.key == key){
                    source = element.value;
                    break;
                }
            }
            return source;
        }
        
    }

    get valided(){
        return this.valid;
    }
}

var GET = new GET_PARAMETERS();

window.onload = function () {
    datos.innerHTML = ''.concat(JSON.stringify(GET));
    form.onsubmit = function () {
        resultado.innerHTML = window.decodeURIComponent(GET.get(key.value));
        key.focus();
        return false;
    };
    key.addEventListener('keyup', function () {
        if (event.keyCode == 13) {
            form.onsubmit();
        }
    });
    nameVariable.onkeyup = function (event) {
        if (event.keyCode == 13) {
            createVariables();
        }
    };
}

function createVariables() {
    tbody = '';
    tbody += '<tr>';
    tbody += '<td class="capitalize"> <label for="' + nameVariable.value +'-p"> ' + nameVariable.value + ' </label> </td>';
    tbody += '<td>' + '<input type="text" id="' + nameVariable.value + '-p" name="' + nameVariable.value + '" placeholder="Ingresa el valor" required class="delete-border p-5" />' + '</td>';
    tbody += '</tr>';
    tbodyElement.innerHTML += tbody;
    nameVariable.value = '';
    nameVariable.focus();
}