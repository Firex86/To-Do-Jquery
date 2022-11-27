const kirjoitus = document.querySelector('.kirjoitusbox')
const nappi = document.querySelector('.lisaanappi')
const lista = document.querySelector('.todolista')
const poistakaikki = document.querySelector('.poistakaikki')
const valmiskaikki = document.querySelector('.valmiskaikki')

function painaNappia(e) {
    e.preventDefault()
    LisääTodo()
}

// Listätään To Do listaan
function LisääTodo() {
    const kaikkipalat = document.createElement('div')
    kaikkipalat.classList.add('kaikkipalat')

    //Luodaan elementti p joka sisältää kirjoitetun ja lisätään pala elementtiin, joka osa kaikkipalat elementtiä
    const pala = document.createElement('p')
    pala.classList.add('pala')
    pala.innerText = kirjoitus.value
    kaikkipalat.appendChild(pala)

    // Tarkistetaan onko tyhjä ja annetaan varoitus
    if (kirjoitus.value === '') {
        alert("Tekstikenttä on tyhjä! Et voi lisätä listausta.")
    } else {

    //Luodaan valmisbutton nappi
    const valmisbutton = document.createElement("button")
        valmisbutton.innerHTML = '<i class="buttontwo"></i>'
        valmisbutton.classList.add("valmis-button")
        kaikkipalat.appendChild(valmisbutton)

    //Luodaan roskabutton nappi.
    const roskabutton = document.createElement("button")
        roskabutton.innerHTML = '<i class="buttontwo"></i>'
        roskabutton.classList.add("roska-button")
        kaikkipalat.appendChild(roskabutton)

    lista.appendChild(kaikkipalat)
    kirjoitus.value = ''
    }

    //Tallennus localStorageen
    localStorage.setItem('Listani', pala.innerText);
}

// Valmis ja poista toiminnot
function merkkaa(e) {
    const pala = e.target

    // Poista
    if (pala.classList[0] === 'roska-button') {
        const todolist = pala.parentElement
        todolist.remove()
    }
    
    // Valmis
    if (pala.classList[0] === 'valmis-button') {
        const todolist = pala.parentElement
        todolist.classList.toggle('valmis')
    }
   
    
}

// Poista kaikki listaukset
    poistakaikki.onclick = () => {
        document
            .querySelectorAll(".kaikkipalat")
            .forEach((e) => e.parentNode.removeChild(e));
}

    
// Merkitse kaikki valmiiksi
    valmiskaikki.onclick = () => {
        document.querySelector(".todolista").classList.toggle('valmis');
    }

nappi.addEventListener('click', painaNappia)
lista.addEventListener('click', merkkaa)
