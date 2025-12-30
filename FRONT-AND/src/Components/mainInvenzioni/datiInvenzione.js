export const invenzioni = [
  {
    id: 1,
    title: 'Paleolitico',
    invenzioni: [
      {
        id: 1,
        title: 'Strumenti in Pietra',
        testo: 'I primi strumenti in pietra scheggiata permisero all’uomo di cacciare e lavorare materiali.',
        link: 'https://it.wikipedia.org/wiki/Industria_litica',
        derivaDa: []
      },
      {
        id: 2,
        title: 'Controllo del Fuoco',
        testo: 'Il controllo del fuoco permise la cottura dei cibi, il riscaldamento e la protezione.',
        link: 'https://it.wikipedia.org/wiki/Dominio_del_fuoco',
        derivaDa: [1]
      },
      {
        id: 3,
        title: 'Abitazioni Primitive',
        testo: 'Le prime forme di rifugi naturali e artificiali migliorarono la sopravvivenza.',
        link: 'https://it.wikipedia.org/wiki/Capanna',
        derivaDa: [1]
      }
    ]
  },

  {
    id: 2,
    title: 'Mesolitico',
    invenzioni: [
      {
        id: 1,
        title: 'Arco e Frecce',
        testo: 'L’arco e le frecce migliorarono l’efficacia della caccia a distanza.',
        link: 'https://it.wikipedia.org/wiki/Arco_(arma)',
        derivaDa: [1]
      },
      {
        id: 2,
        title: 'Canoe e Zattere',
        testo: 'L’uso di imbarcazioni primitive facilitò pesca e spostamenti.',
        link: 'https://it.wikipedia.org/wiki/Canoa',
        derivaDa: [1]
      }
    ]
  },

  {
    id: 3,
    title: 'Neolitico',
    invenzioni: [
      {
        id: 1,
        title: 'Agricoltura',
        testo: 'L’agricoltura permise la coltivazione sistematica delle piante.',
        link: 'https://it.wikipedia.org/wiki/Rivoluzione_neolitica',
        derivaDa: [2]
      },
      {
        id: 2,
        title: 'Allevamento',
        testo: 'L’addomesticamento degli animali fornì una fonte stabile di cibo.',
        link: 'https://it.wikipedia.org/wiki/Addomesticamento',
        derivaDa: [4]
      },
      {
        id: 3,
        title: 'Ceramica',
        testo: 'La ceramica consentì di conservare e cucinare cibo.',
        link: 'https://it.wikipedia.org/wiki/Ceramica',
        derivaDa: [2, 4]
      },
      {
        id: 4,
        title: 'Tessitura',
        testo: 'La tessitura permise la produzione di abiti e tessuti.',
        link: 'https://it.wikipedia.org/wiki/Tessitura',
        derivaDa: [5]
      }
    ]
  },

  {
    id: 4,
    title: 'Età del Rame',
    invenzioni: [
      {
        id: 1,
        title: 'Metallurgia del Rame',
        testo: 'La lavorazione del rame segnò il passaggio ai metalli.',
        link: 'https://it.wikipedia.org/wiki/Età_del_rame',
        derivaDa: [1]
      },
      {
        id: 2,
        title: 'Utensili Metallici',
        testo: 'Gli utensili in rame migliorarono efficienza e durata.',
        link: 'https://it.wikipedia.org/wiki/Metallurgia',
        derivaDa: [7]
      }
    ]
  },

  {
    id: 5,
    title: 'Età del Bronzo',
    invenzioni: [
      {
        id: 1,
        title: 'Ruota',
        testo: 'La ruota rivoluzionò trasporto e agricoltura.',
        link: 'https://it.wikipedia.org/wiki/Ruota',
        derivaDa: [4, 6]
      },
      {
        id: 2,
        title: 'Carro',
        testo: 'Il carro rese più efficienti commercio e guerra.',
        link: 'https://it.wikipedia.org/wiki/Carro',
        derivaDa: [8]
      }
    ]
  },

  {
    id: 6,
    title: 'Antichità Classica',
    invenzioni: [
      {
        id: 1,
        title: 'Scrittura',
        testo: 'La scrittura permise la registrazione delle conoscenze.',
        link: 'https://it.wikipedia.org/wiki/Scrittura',
        derivaDa: [4]
      },
      {
        id: 2,
        title: 'Carta',
        testo: 'La carta facilitò la diffusione del sapere.',
        link: 'https://it.wikipedia.org/wiki/Carta',
        derivaDa: [9]
      },
      {
        id: 3,
        title: 'Acquedotti',
        testo: 'Gli acquedotti permisero la distribuzione dell’acqua.',
        link: 'https://it.wikipedia.org/wiki/Acquedotto',
        derivaDa: [9]
      }
    ]
  },

  {
    id: 7,
    title: 'Rinascimento',
    invenzioni: [
      {
        id: 1,
        title: 'Stampa a Caratteri Mobili',
        testo: 'La stampa di Gutenberg rese i libri accessibili.',
        link: 'https://it.wikipedia.org/wiki/Stampa',
        derivaDa: [9, 10]
      },
      {
        id: 2,
        title: 'Metodo Scientifico',
        testo: 'Il metodo scientifico introdusse l’osservazione sistematica.',
        link: 'https://it.wikipedia.org/wiki/Metodo_scientifico',
        derivaDa: [11]
      }
    ]
  },

  {
    id: 8,
    title: 'Rivoluzione Industriale',
    invenzioni: [
      {
        id: 1,
        title: 'Macchina a Vapore',
        testo: 'La macchina a vapore fornì energia alle fabbriche.',
        link: 'https://it.wikipedia.org/wiki/Macchina_a_vapore',
        derivaDa: [7, 8]
      },
      {
        id: 2,
        title: 'Telaio Meccanico',
        testo: 'Automatizzò la produzione tessile.',
        link: 'https://it.wikipedia.org/wiki/Telaio',
        derivaDa: [12]
      }
    ]
  },

  {
    id: 9,
    title: 'Età Contemporanea',
    invenzioni: [
      {
        id: 1,
        title: 'Elettricità',
        testo: 'L’elettricità trasformò la vita quotidiana.',
        link: 'https://it.wikipedia.org/wiki/Elettricità',
        derivaDa: [12]
      },
      {
        id: 2,
        title: 'Computer',
        testo: 'I computer permettono l’elaborazione rapida dei dati.',
        link: 'https://it.wikipedia.org/wiki/Computer',
        derivaDa: [13]
      },
      {
        id: 3,
        title: 'Internet',
        testo: 'Internet ha connesso persone e informazioni.',
        link: 'https://it.wikipedia.org/wiki/Internet',
        derivaDa: [14]
      },
      {
        id: 4,
        title: 'Intelligenza Artificiale',
        testo: 'L’IA consente alle macchine di apprendere e prendere decisioni.',
        link: 'https://it.wikipedia.org/wiki/Intelligenza_artificiale',
        derivaDa: [14, 15]
      }
    ]
  }
];
