/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
console.log("----Esercizio 1----");
const concatena = (string1, string2) => {
  let string3 = string1.substring(0, 2);
  const app = string2.substring(string2.length - 3);
  string3 += app;
  return string3;
};
const x = "Pippo",
  y = "Topolino";
const ris = concatena(x, y);
console.log(`La prima parola è: ${x}
La seconda parola è: ${y}
La risultante è: ${ris.toUpperCase()}`);
/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
console.log("----Esercizio 2----");
const arrayRandom = () => {
  let x = [];
  for (let i = 0; i < 10; i++) {
    x[i] = Math.floor(Math.random() * 101);
  }
  return x;
};

const arr = arrayRandom();
console.log(`Array random di dieci elementi tra zero e cento inclusi è:
${arr}`);
/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/
console.log("----Esercizio 3----");
const arrNum = [3, 6, 5, 3, 76, 77, 98, 2];

console.log(`Array iniziale: ${arrNum}`);
console.log(`Array di numeri pari: ${arrNum.filter((x) => x % 2 === 0)}`);
/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
console.log("----Esercizio 4----");
let somma = 0;
arrNum.forEach((x) => (somma += x));
console.log(`La somma dell'array è: ${somma}`);
/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
console.log("----Esercizio 5----");
const sum = arrNum.reduce((somma, x) => somma + x);
console.log(`La somma dell'Array con reduce è: ${sum}`);
/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/
console.log("----Esercizio 6----");
const n = 1;
const arrMap = arrNum.map((x) => x + n);
console.log(`Array iniziale: ${arrNum}`);
console.log(`Array dopo Map: ${arrMap}`);
/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
console.log("----Esercizio 7----");
const stringhe = ["Pippo", "Spiderman", "Topolino", "batman"];
const lungStr = stringhe.map((x) => x.length);
console.log(`Array iniziale: ${stringhe}`);
console.log(`Array dopo Map con lunghezza stringhe: ${lungStr}`);
/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
console.log("----Esercizio 8----");
const numDispari = () => {
  const dispari = [];
  for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
      dispari.push(i);
    }
  }
  return dispari;
};
console.log(`Array di numeri dispari da 1 a 99:
${numDispari()}`);
/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
console.log("----Esercizio 9----");

const oldMovie = (x) => {
  let older = {};
  x.forEach((y, i) => {
    if (i === 1 || older.Year > y.Year) older = { ...y };
  });
  return older;
};
const older = oldMovie(movies);
console.log(`Il film più vecchio è: ${older.Title}`);
/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
console.log("----Esercizio 10----");
console.log(`Numero di film contenuti nell'Array: ${movies.length}`);
const NumeroMovies = (x) => {
  let cont = 0;
  while (x[cont] !== undefined) {
    cont++;
  }
  return cont;
};
const numMovies = NumeroMovies(movies);
console.log(`Numero film contenuti nell'Array(senza usare length): ${numMovies}`);
/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
console.log("----Esercizio 11----");
const soloTitoli = movies.map((x) => x.Title);
console.log(`Array di soli titoli: 
${soloTitoli}`);
/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
console.log("----Esercizio 12----");
const millenio = movies.filter((x) => x.Year >= 2000);
console.log(`Film usciti nel millenio corrente: `);
millenio.forEach((x) => console.log(`${x.Title}`));
/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
console.log("----Esercizio 13----");

/*let appoggio = [];
for (let i = 0; i < movies.length; i++) {
  appoggio.push(parseInt(movies[i].Year));
}
const sommaAnni = appoggio.reduce((tot, elem) => (tot += elem));*/
const sommaAnni = movies.reduce((tot, elem) => {
  tot += parseInt(elem.Year);
  return tot;
}, 0);
console.log(`La somma degli anni dei film è: ${sommaAnni}`);

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/
console.log("----Esercizio 14----");

const imdb = "tt1731697";

const film = movies.find((x) => x.imdbID === imdb);
console.log(`Il film selezionato è: ${film.Title}`);
/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/
console.log("----Esercizio 15----");
let annoUscita = 2005;
annoUscita = annoUscita.toString();
const pos = movies.findIndex((elem) => elem.Year === annoUscita);
console.log(`Il primo film uscito nel ${annoUscita} è: ${movies[pos].Title} a indice ${pos}`);
