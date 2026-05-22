# WebDev Agency Website - Group Project

Sito web statico realizzato come progetto di gruppo per presentare una piccola agenzia digitale, i suoi servizi e il team di sviluppo.

Il progetto e composto da piu pagine HTML collegate tra loro tramite una navigazione comune con menu responsive. La grafica usa CSS personalizzati, card, gradienti, immagini, avatar dei membri del team, icone SVG locali e pagine profilo con link a CV, social e progetti personali.

## Pagine principali

- `index.html`: pagina iniziale con introduzione al portfolio aziendale.
- `pages/info.html`: pagina contatti con form, informazioni e immagine illustrativa.
- `pages/prodotti.html`: catalogo dei prodotti/servizi offerti dall'agenzia.
- `pages/developer.html`: elenco dei membri del team con link alle pagine personali.
- `pages/riccardo_pastori.html`, `pages/davide_donnarumma.html`, `pages/marianna_masala.html`, `pages/davide_braghi.html`: pagine profilo dei developer.

## Struttura

- `assets/styles/`: fogli di stile generali e specifici per pagina.
- `pages/`: pagine interne del sito.
- `assets/images/`: immagini e avatar usati nelle pagine, rinominati in modo descrittivo.
- `assets/icons/`: icone SVG per social, contatti e illustrazioni.
- `assets/pdf/`: CV dei membri del team in formato `snake_case`.
- `assets/scripts/`: script JavaScript per footer e form contatti.

## Convenzioni

- I nomi di pagine, immagini, icone e PDF usano `snake_case`.
- La homepage e `index.html` nella root del progetto.
- Le pagine interne sono nella cartella `pages/`.
- Le risorse statiche sono raccolte dentro `assets/`.

## Come aprire il sito

Aprire `index.html` nel browser e navigare tra le pagine usando il menu in alto.

## TODO e sviluppi futuri

- [ ] Uniformare lingua, titoli e testi delle pagine.
- [ ] Completare competenze e progetti reali nelle pagine profilo.
- [ ] Aggiungere una sezione introduttiva o hero alle pagine `info.html`, `prodotti.html` e `developer.html`.
- [ ] Aggiungere contenuti piu specifici per ogni prodotto/servizio.
- [ ] Migliorare il form contatti con validazione completa e messaggi di conferma piu chiari.
- [ ] Aggiungere stato attivo ai link del menu in base alla pagina corrente.
- [ ] Verificare accessibilita con tastiera, contrasto colori e screen reader.
- [ ] Rifinire dettagli visuali di spaziature, hover e card tra tutte le pagine.
- [ ] Aggiungere una sezione con mission, valori e metodo di lavoro dell'agenzia.
- [ ] Pubblicare il sito online.
