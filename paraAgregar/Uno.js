//CALLBACK
/*
let sumar = (n1,n2) => n1+n2;

let restar = (n1,n2) => n1-n2;

//tiene que tener definido previamente sumar y restar

let calculadora = (n1, n2, operacionArealizar) => operacionArealizar (n1, n2);

console.log (calculadora (10, 11, sumar));
*/
/*
//ejemplo sin funcion flecha, NORMAL FUNCTION
function nombre (nombre , apellido){
    return nombre + " "+ apellido;
}

function saludarNombre (nombre, apellido, callback){
    return " hola" + " " + callback (nombre , apellido);
}

console.log ( saludarNombre ("Sergio", "Glant", nombre));

*/
//mexcla de string y array callback
/*
function agregarHttp(url) {
    let urlCompleta = "http://"+url;
    return urlCompleta;
}

function procesar(url, callback){
    let urlProcesado = [];
  
    for (let i=0; i<url.length; i++){
        urlProcesado.push(callback(url[i]));
    }
    return urlProcesado;
}

console.log (procesar (["www.google.com","www.yahoo.com"], agregarHttp));
*/
/*
// MAP (DEVUELVE UN ARRAY)
 let notas = [10, 6, 7, 9,2,5,8];

let nuevasNotas = notas.map (function (numero) { //puede recibir una fc flecha tambien (numero => numero * 100);
    return numero * 100;
});

//console.log (nuevasNotas);

//FILTER (DEVUELVE UN ARRAY)
let aprobados = notas.filter(numero => numero > 7);

//console.log (aprobados);

// REDUCE (DEVUELVE UN NUMERO), estado es un acumulador

let reducidos = notas.reduce ((estado, numero) => estado + numero)

//console.log (reducidos);

//FOR EACH (si lo quiero guardar en un variable me da undefined)
/*
const array1 = ['a', 'b', 'c'];

array1.forEach((element, indice) => console.log("indice "+indice+" "+"valor "+element));

let listaDeSuperMercado = 
[
    'Bife de chorizo', 
    'Coca Cola', 
    'Bananas', 
    'Lechuga', 
    'Chimichurri', 
    'Lata de tomates', 
    'Arvejas', 
    'Cereales', 
    'Pechuga de pollo', 
    'Leche'
];

listaDeSuperMercado.forEach (element => console.log ("compras de hoy"+ " " + element));


let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]

let aprobados = estudiantes.filter (elemento => elemento.aprobado == false);

console.log (aprobados);
*/

/*
// OBJETO DATE

let miCumpleanos = new Date (1967, 11, 28); //SE LE PASA UN MES MENOS CUENTA DE 0 A 11// si no se le pasa fecha o parametro es la del dia

let anio = miCumpleanos.getFullYear();
let mes = miCumpleanos.getMonth();
let dia = miCumpleanos.getDate();

meses = [1, 2, 3 ,4,5,6,7,8,9, 10,"noviembre", "DICIEMBRE"];

console.log ("hoy es" + " " + dia + " de" + " "+ meses[mes] + " de" + " " + anio);
*/
/*

//DESTRUCTURING
//Array//

let destinosDelMundo = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia']
let [ ,bariloche, , china] = destinosDelMundo

//Object//
let auto  = {marca: 'Ferrari', kilometros: 31, color: "Rojo"};
let {marca,  color} = auto;

//SPRED OPERATOR
//se puede combinar dos array
let destinosDelMundo = ['Marruecos', 'Bariloche'];
let destinosEuropa = ['Barcelona', 'China', 'Grecia'];
//se puede tambien poner datos de una array dentro de otro
let mezcla = ['Marruecos',...destinosEuropa, 'Bariloche'];

let destinosgenerales = [...destinosDelMundo, ...destinosEuropa]

//SOBRE OBJETOS
let auto  = 
{
    usado: true, 
    cantidadDeDuenos: 6,
};

let autoUno  = 
{
    marca: 'Ferrari', 
    ...auto,
    kilometros: 31, 
    color: "Rojo",
    
};

//EN UNA FUNCION

//let parcialesMarzo = [10, 9, 1];

function notas(...parcialesMarzo){
    console.log (parcialesMarzo);
}

notas (10, 9, 1,10);

*/

let pepe = [{numero:1,m: 2,n: 3}]

pepe.hijo = 2;


console.log (pepe.hijo)










