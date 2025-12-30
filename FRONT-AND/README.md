# installa dipendenze
npm install

# avvia in locale
npm run dev

# build per deploy
npm run build

# anteprima build
npm run preview

# in caso si voglia cambiare il browser quando si apre il progetto, specificare il tipo di browser e poi il progetto con il comando di avvio, emepio:
BROWSER=chrome npm run dev

# per chiudere il runner di bash

Ctrl + c

------------------------------------------

dipendenze utilizzate lato Front-end:

1. React
Link Documentation: https://react.dev/learn
Installazione: npm install react react-dom
Scopo: React è una libreria JavaScript per costruire interfacce utente. Permette di creare componenti riutilizzabili e gestire lo stato in modo efficiente.

2. React Router DOM
Link Documentation: https://reactrouter.com
Installazione: npm install react-router-dom
Scopo: React Router è una libreria per il routing in applicazioni React. Permette di navigare tra diverse schermate e gestire la storia della navigazione.

3. Bootstrap
Link Documentation: getbootstrap.com/docs/
Installazione: npm install bootstrap
Scopo: Bootstrap è un framework CSS per lo sviluppo di siti web e applicazioni responsive. Fornisce stili predefiniti e componenti per rendere più semplice la creazione di interfacce utente.

4. React Bootstrap
Link Documentation: https://react-bootstrap.github.io
Installazione: npm install react-bootstrap
Scopo: React Bootstrap è una libreria che integra Bootstrap con React. Fornisce componenti Bootstrap come componenti React, facilitando l'uso di Bootstrap in applicazioni React.


-----------------------

# best practices:

{
  /*
    target="_blank": l'utente resta sul sito e la fonte si apre in una nuova scheda
    re="noopener noreffer"
    noopener: impedisce alla pagina esterna di accedere a windo.opener perevitare attacchi di tipo tabnabbing
    noreferrer: non invia informazioni sulla pagina di provenienzq e il sito esterno non sa da dove arriva l'utente cio protegge la privacy dell'utente
  */
}


# spiegazioni di alcuni attributi dei iframe

- sandbox
Applica restrizioni di sicurezza al contenuto dell’iframe.
Senza attributo, il contenuto esterno può eseguire script, cambiare pagina padre ecc.
"allow-scripts allow-same-origin" permette solo:
allow-scripts → eseguire JavaScript
allow-same-origin → trattare il contenuto come proveniente dalla stessa origine (utile per cookie e sessioni)

- allow
Definisce permessi moderni per l’iframe:
fullscreen → può andare a schermo intero
camera → accesso alla videocamera
microphone → accesso al microfono
geolocation → accesso alla posizione geografica

- allowfullscreen
Attributo booleano che permette di ingrandire l’iframe a schermo intero.
Alcuni browser richiedono sia allow="fullscreen" sia allowfullscreen.

- loading
Controlla il caricamento dell’iframe:
lazy → carica l’iframe solo quando entra in viewport, migliora performance.
eager (default) → carica subito.

- referrerpolicy
Controlla quali informazioni sulla pagina di provenienza (referrer) vengono inviate al sito esterno:
no-referrer → nessuna informazione viene inviata
Protegge privacy e sicurezza.