function addTitolo(event) {
    event.preventDefault();

    titoliCulturali = document.getElementById("titoliCulturali");
    titoliCulturali.innerHTML += "<div><input type='text' placeholder='titolo' class='titolo'  name='titolo[]'> <input type='text' placeholder='anno' id='anno'  name='anno[]'> <button onclick='remove(this)'>-</button></br></div>";
}

function addEsperienza(event){
    event.preventDefault();

    formEsperienze = document.getElementById("formEsperienze");
    formEsperienze.innerHTML += "<div><input type='text' placeholder='azienda' class='azienda'  name='azienda[]'> <input type='text' placeholder='dal' id='dal'  name='dal[]'> <input type='text' placeholder='al' id='al'  name='al[]'> <button onclick='remove(this)'>-</button></br></div>";
}

function remove(id){
    id.parentElement.remove();
}