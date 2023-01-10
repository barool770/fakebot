const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const loaders = document.getElementById("loaders")
const container = document.getElementsByClassName("container")

let init = 0

const botSay = (data) => {
    return [
        "Halo perkenalkan saya adalah bot sederhana, siapa nama kamu?",
        `Halo ${data?.nama}, berapa usia kamu? `,
        `oohh ${data?.usia}, hobi kamu apa ya`,
        `waahhh sama dong kayak tuanku, dia juga hobi ${data?.hobi}. btw punya pacar gak`,
        `oooh ${data?.pacar} yaudah kalo gitu. udahan ya.`

    ]
}

pertanyaan.innerHTML = botSay()[0]

let usersData = []

function botStart() {
    if(jawaban.value.length < 1) return alert ("silahkan isi jawaban terlebih dahulu")
    init++
    loaders.style.display = "block"
    if (init === 1) {
        botDelay({ nama: jawaban.value })
    } else if (init === 2) {
        botDelay({ usia: jawaban.value })
    } else if (init === 3) {
        botDelay({ hobi: jawaban.value })
    } else if (init === 4) {
        botDelay({ pacar: jawaban.value })
    } else if (init === 5) {
        finishing()
    } else {
        botEnd()
    }
}

function botDelay(jawabanUser) {
    loaders.style.display = "block"
    container[0].style.filter = "blur(4px)"
    setTimeout(() => {
        loaders.style.display = "none"
        container[0].style.filter = "none"
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
    }, [1000])
    usersData.push(jawaban.value)
    jawaban.value = ""
}

function finishing() {
    loaders.style.display = "block"
    container[0].style.filter = "blur(4px)"
    setTimeout(() => {
        loaders.style.display = "none"
        container[0].style.filter = "none"
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
    }, [1000])
    pertanyaan.innerHTML = `Thank you ya ${usersData[0]} udah jawab pertanyaanku.`
    jawaban.value = "oke, thanks juga!"
}

function botEnd() {
    loaders.style.display = "block"
    container[0].style.filter = "blur(4px)"
    setTimeout(() => {
        loaders.style.display = "none"
        container[0].style.filter = "none"
    }, [1000])
    alert(`terimaksih ${usersData[0]} sudah berkunjung`)
        window.location.reload()
}