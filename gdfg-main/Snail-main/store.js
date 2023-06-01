
var kosar = [];

var storedKosar = localStorage.getItem('kosar');
if (storedKosar) {
  kosar = JSON.parse(storedKosar);
}


function kosarFrissitese() {
  var kosarElem = document.getElementById('kosar');
  kosarElem.innerHTML = '';

  if (kosar.length === 0) {
    kosarElem.innerHTML = '<p>A kosár üres.</p>';
    szamolOsszerteket();
    return;
  }

  var kosarTabla = document.createElement('table');
  kosarTabla.innerHTML = '<tr><th>Termék neve</th>    <th>Ár</th>      <th>Mennyiség</th></tr>';

  for (var i = 0; i < kosar.length; i++) {
    var termek = kosar[i];
    var sor = document.createElement('tr');
    sor.innerHTML = '<td>' + termek.nev + '</td><td>' + termek.ar + '</td>Ft<td>' + termek.mennyiseg + '</td>';
    kosarTabla.appendChild(sor);
  }

  kosarElem.appendChild(kosarTabla);

  szamolOsszerteket();
}


function termekHozzaadasa(id, nev, ar) {
  var megtalaltTermek = false;
  for (var i = 0; i < kosar.length; i++) {
    if (kosar[i].id === id) {
      megtalaltTermek = true;
      kosar[i].mennyiseg++;
      break;
    }
  }

  if (!megtalaltTermek) {
    var ujTermek = {
      id: id,
      nev: nev,
      ar: ar,
      mennyiseg: 1
    };
    kosar.push(ujTermek);
  }

  kosarFrissitese();


  localStorage.setItem('kosar', JSON.stringify(kosar));
}


function kosarUrites() {
  kosar = [];
  kosarFrissitese();

  
  localStorage.removeItem('kosar');
}


function szamolOsszerteket() {
  var osszertek = 0;
  for (var i = 0; i < kosar.length; i++) {
    var termek = kosar[i];
    osszertek += termek.ar * termek.mennyiseg;
  }

  var osszertekElem = document.getElementById('osszertek');
  osszertekElem.textContent = osszertek.toFixed(0) + 'Ft'; 

 
  if (kosar.length === 0) {
    osszertekElem.textContent = '0 Ft';
  }
}

function Loser() {
  var element = document.getElementById('Loser');
  var value = element.innerHTML;

  ++value;

  console.log(value)
  document.getElementById('Loser').innerHTML = value;

  }
