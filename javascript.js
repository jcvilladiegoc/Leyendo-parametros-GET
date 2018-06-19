/**
 * Clase para almacenar los parametros get
 * @key llave del parametro
 * @value valor del parametro
 */
class parametro {
    constructor(key, value){
        this.value = value;
        this.key = key;
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
}

var GET = new GET_PARAMETERS();