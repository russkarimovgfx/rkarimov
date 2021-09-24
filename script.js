const menuIcon = document.querySelector('.ham-menu');
const navbar = document.querySelector('.navbar');
const musicContainer = document.querySelector('.music-container')
const nextBtn = document.querySelector('#forward')
const playBtn = document.querySelector('#play')
const backBtn = document.querySelector('#reverse')
const audio = document.querySelector('#audio')
const bar = document.querySelector('.bar')
const barContainer = document.querySelector('.bar-container')
const title = document.querySelector('.song-title')
const cover = document.querySelector('#cover')
console.log(title);


menuIcon.addEventListener('click', () => {
 navbar.classList.toggle('change')
})


// song titles.


const songs = ['westside-gunn', 'westside-gunn-two']


// keep track of songs

let songIndex = 1

// Initially load song info DOM

loadSong(songs[songIndex])

//Update song details

function loadSong(song) {
 title.innerText = song
 audio.src = `music/${song}.mp3`
 cover.src = `images/${song}.jpg`
}

function playSong() {
 musicContainer.classList.add('play')
 playBtn.querySelector('i.fas').classList.remove('fa-play')
 playBtn.querySelector('i.fas').classList.add('fa-pause')

 audio.play()

}


function pauseSong() {
 musicContainer.classList.remove('play')
 playBtn.querySelector('i.fas').classList.add('fa-play')
 playBtn.querySelector('i.fas').classList.remove('fa-pause')

 audio.pause()

}

function prevSong() {
 songIndex--

 if (songIndex < 0) {
  songIndex = songs.length - 1
 }

 loadSong(songs[songIndex])

 playSong()

}

function nextSong() {

 songIndex++

 if (songIndex > songs.length - 1) {
  songIndex = 0
 }

 loadSong(songs[songIndex])

 playSong()

}

function updateProgress(e) {
 const { duration, currentTime } = e.srcElement
 const progressPercent = (currentTime / duration) * 100
 bar.style.width = `${progressPercent}%`
}


//Event Listeners

playBtn.addEventListener('click', () => {
 const isPlaying = musicContainer.classList.contains('play')

 if (isPlaying) {
  pauseSong()
 } else {
  playSong()
 }
})


// Change song events
backBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)



audio.addEventListener('timeupdate', updateProgress)



