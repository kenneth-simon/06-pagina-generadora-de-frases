const frase_salida = document.querySelector('#frase');
const autor_salida = document.querySelector('#autor');
const boton_salida = document.querySelector('#boton');

let frases = [
  'Los pecados escriben la historia, el bien es silencioso.',
  'La historia se repite, ese es uno de los errores de la historia.',
  'Si quieres ser feliz, sé feliz.',
  'No sé con qué armas se peleará la tercera guerra mundial, pero la cuarta será con palos y piedras.',
  'Hay dos maneras de vivir su vida: una como si nada es un milagro, la otra es como si todo es un milagro.',
  'Vence la ira con serenidad. Vence la maldad con bondad. Vence el egoísmo con generosidad. Vence la deshonestidad con verdad.',
  'La pereza viaja tan despacio que la pobreza no tarda en alcanzarla.',
  'Nunca rompas el silencio si no es para mejorarlo.',
  'Vive como si fueras a morir mañana; aprende como si el mundo fuera a durar para siempre.',
  'Incluso la gente que afirma que no podemos hacer nada para cambiar nuestro destino, mira antes de cruzar la calle.',
  'La inspiración existe, pero tiene que encontrarte trabajando.',
  'Los verdaderos líderes deben estar dispuestos a sacrificarlo todo por la libertad de su pueblo.',
  'La política es el arte de buscar problemas, encontrarlos, realizar un diagnóstico falso y aplicar después remedios equivocados.',
  'El pesimista se queja del viento; el optimista espera que cambie; el realista ajusta las velas.',
  'No permitas que ningún ser humano te haga caer tan bajo como para odiarle.',
];

let autores = [
  '-Goethe',
  '-Charles Darwin',
  '-León Tolstoi',
  '-Albert Einstein',
  '-Albert Einstein',
  '-Buda',
  '-Benjamin Franklin',
  '-Beethoven',
  '-Mahatma Gandhi',
  '-Stephen Hawking',
  '-Picasso',
  '-Nelson Mandela',
  '-Groucho Marx',
  '-William George Ward',
  '-Martin Luther King',
];

let lastNumber = 0;

function rand () {
  let rnd = Math.floor(Math.random() * frases.length);
  if (rnd != lastNumber) {
    frase_salida.innerText = `"${frases[rnd]}"`;
    autor_salida.innerText = autores[rnd];
    lastNumber = rnd;
  } else {
    rand();
  }
}

boton_salida.addEventListener('click', rand);