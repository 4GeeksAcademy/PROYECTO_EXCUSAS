/*
 * app.js
 *
 * Este archivo se encarga de generar y mostrar una excusa aleatoria en la página.
 * La excusa se forma concatenando partes definidas en cuatro arreglos: "who", "action", "what" y "when".
 * Se utiliza "window.onload" para asegurarse de que el código se ejecute después de que todo el contenido
 * HTML se haya cargado, evitando errores al acceder a elementos del DOM.
 *
 * Detalles:
 * - Cada arreglo contiene una serie de opciones para formar diferentes partes de la excusa.
 * - Se utiliza "Math.random()" para generar números aleatorios y "Math.floor()" para convertirlos en índices válidos.
 * - Los template literals (cadenas delimitadas por backticks ``) permiten insertar variables directamente en la cadena.
 * - Finalmente, la excusa generada se inserta en el elemento HTML con el id "excuse".
 */

window.onload = function() {
  // ----------------------------------------------------
  // 1. Definición de los arreglos con las partes de la excusa
  // ----------------------------------------------------
  
  // Arreglo "who": Contiene sujetos que realizarán la acción.
  let who = ['El perro', 'Mi abuela', 'El cartero', 'Mi pájaro'];
  
  // Arreglo "action": Contiene verbos o acciones que se realizarán.
  let action = ['se comió', 'orinaron sobre', 'aplastó', 'rompió'];
  
  // Arreglo "what": Contiene los objetos o situaciones sobre los que actúan los sujetos.
  let what = ['mi tarea', 'mi teléfono', 'el auto'];
  
  // Arreglo "when": Contiene expresiones temporales que indican cuándo sucedió la acción.
  let when = ['antes de la clase', 'mientras dormía', 'durante el ejercicio', 'al mediodía', 'mientras rezaba'];

  // ----------------------------------------------------
  // 2. Selección aleatoria de un elemento de cada arreglo
  // ----------------------------------------------------
  
  // Selecciona al azar un elemento del arreglo "who"
  // Math.random() genera un número entre 0 (inclusive) y 1 (exclusivo)
  // Multiplicamos por who.length para obtener un número en el rango del arreglo,
  // y Math.floor() lo redondea hacia abajo para obtener un índice entero.
  let randomWho = who[Math.floor(Math.random() * who.length)];
  
  // Selecciona al azar un elemento del arreglo "action"
  let randomAction = action[Math.floor(Math.random() * action.length)];
  
  // Selecciona al azar un elemento del arreglo "what"
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  
  // Selecciona al azar un elemento del arreglo "when"
  let randomWhen = when[Math.floor(Math.random() * when.length)];

  // ----------------------------------------------------
  // 3. Construcción de la excusa utilizando template literals
  // ----------------------------------------------------
  
  // Se crea la variable "excuse" que contiene la cadena completa.
  // Los template literals (``) permiten insertar directamente las variables usando la sintaxis ${variable}.
  // Se concatenan los resultados obtenidos de cada arreglo, separados por espacios y finalizados con un punto.
  let excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;

  // ----------------------------------------------------
  // 4. Inserción de la excusa en el documento HTML
  // ----------------------------------------------------
  
  // Se obtiene el elemento HTML que tiene el id "excuse" mediante document.getElementById.
  // Luego, se asigna la cadena "excuse" a su propiedad innerHTML, lo que actualiza su contenido visible.
  document.getElementById("excuse").innerHTML = excuse;
};