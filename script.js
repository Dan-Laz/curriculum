function addTitolo(event) {
    event.preventDefault();

    titoliCulturali = document.getElementById("titoliCulturali");
    titolo = document.getElementById("titolo").value;
    anno = document.getElementById("anno").value;

    newDiv = document.createElement("div");
    p = document.createElement("p");
    p.innerHTML = "titolo: "+titolo +" | anno: "+ anno;
    rm = document.createElement("button");
    rm.innerHTML="-";
    rm.setAttribute("onClick","remove(this)");

    newDiv.appendChild(p);
    newDiv.appendChild(rm);
    titoliCulturali.appendChild(newDiv);

 
    document.getElementById("titolo").value = '';
    document.getElementById("anno").value = '';
}

function addEsperienza(event){
    event.preventDefault();

    formEsperienze = document.getElementById("formEsperienze");
    azienda = document.getElementById("azienda").value;
    dal = document.getElementById("dal").value;
    al = document.getElementById("al").value;

    newDiv = document.createElement("div");
    p = document.createElement("p");
    p.innerHTML = "azienda: "+azienda+" | anno: "+dal+"/"+al;
    rm = document.createElement("button");
    rm.innerHTML="-";
    rm.setAttribute("onClick","remove(this)");

    newDiv.appendChild(p);
    newDiv.appendChild(rm);
    formEsperienze.appendChild(newDiv);

    document.getElementById("azienda").value = '';
    document.getElementById("dal").value = '';
    document.getElementById("al").value = '';
}

function remove(id){
    id.parentElement.remove();
}