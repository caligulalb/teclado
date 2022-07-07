const teclas = document.querySelectorAll(".oitava > div")

teclas.forEach(tecla => {
    tecla.addEventListener('click', () => playNote(tecla))
})

function playNote(tecla) {
    const noteAudio = document.getElementById(tecla.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play()
    tecla.classList.add('active')
    noteAudio.addEventListener('ended', () => {
        tecla.classList.remove('active')
    })
}


