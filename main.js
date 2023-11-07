let SpeechRecognition = window.webkitSpeechRecognition;

// Agora, criamos uma "máquina de ouvir" de verdade, usando new.


// Este é o lugar onde as palavras que ouvirmos serão mostradas na tela.
let textbox = document.getElementById("");

// Quando apertamos um botão, a "máquina de ouvir" começa a ouvir.
function start() {
    
}

// Quando a "máquina de ouvir" ouve alguma coisa, fazemos alguma coisa com isso.
recognition.onresult = function (event) {
    console.log(event); // Mostramos o que ouvimos no computador.

    // Pegamos as palavras que a "máquina de ouvir" ouviu.
    var Content = event.results[0][0].transcript;

    // Mostramos essas palavras na tela.
    Textbox.innerHTML = Content;
    console.log(Content); // Também mostramos no computador.

}


