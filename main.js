let now_playing = document.querySelector(".now-playing");
let track_art  = document.querySelector(".track-art");
let track_name  = document.querySelector(".track-name");
let track_artist  = document.querySelector(".track-artist");


let playpause_btn  = document.querySelector(".playpause-track");
let next_btn  = document.querySelector(".next-track");
let prev_btn  = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time")
let total_duration = document.querySelector(".total-duration")

let track_index = 0;
let isPlaying = false;
let updateTimer;

let curr_track = document.createElement("audio")

let track_list = [
    {
        "name" : "Bhool Bhulaiyaa 2 - Title Track",
        "artist" : "Ritika, neeraj, sachin",
        "image": "https://img.wapka.org/007aeb.jpg",
        "path" : "1.mp3",
    },
    {
        "name" : "Mere Humsafar ",
        "artist" : "Yashal Shahid",
        "image": "https://www.pagalworld.pw/GpE34Kg9Gq/113604/150000-mere-humsafar-yashal-shahid-mp3-song-300.jpg",
        "path" : "2.mp3",
    },
    {
        "name" : "Oh Isha",
        "artist" : "Armaan Malik",
        "image": "https://img.wapka.org/007ae8.jpg",
        "path" : "3.mp3",
    },

]

function random_bg_color(){
    let red = Math.floor(Math.random() * 256) + 64;
    let green = Math.floor(Math.random() * 256) + 64;
    let blue = Math.floor(Math.random() * 256) + 64;


    let bgColor = "rgb("+red + ","+green +","+blue +")";

    document.body.style.background = bgColor;
}


function loadTrack(track_index){
    clearInterval(updateTimer);
    resetValues();
    curr_track.src = track_list[track_index].path;
    curr_track.load();
    track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
    track_artist.textContent = track_list[track_index].artist
    track_name.textContent = track_list[track_index].name

}

loadTrack(track_index);

function resetValues(){
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
}