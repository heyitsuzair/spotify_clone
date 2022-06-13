$(document).ready(function () {
  let songIndex = 0;
  let masterPlay = document.getElementById("masterPlay");
  let progressBar = document.getElementById("myProgressBar");
  let songItems = document.getElementsByClassName("song-item");
  let songListPlay = document.getElementsByClassName("song-list-play-btn");
  let masterSongName = document.getElementsByClassName("master_songName");

  let audioElem = new Audio("./songs/1.mp3");

  let songs = [
    {
      songName: "salam-e-ishq1",
      filePath: "./songs/1.mp3",
      coverPath: "./img/logo.png",
    },
    {
      songName: "salam-e-ishq2",
      filePath: "./songs/2.mp3",
      coverPath: "./img/logo.png",
    },
    {
      songName: "salam-e-ishq3",
      filePath: "./songs/3.mp3",
      coverPath: "./img/logo.png",
    },
    {
      songName: "salam-e-ishq4",
      filePath: "./songs/4.mp3",
      coverPath: "./img/logo.png",
    },
    {
      songName: "salam-e-ishq5",
      filePath: "./songs/1.mp3",
      coverPath: "./img/logo.png",
    },
    {
      songName: "salam-e-ishq6",
      filePath: "./songs/2.mp3",
      coverPath: "./img/logo.png",
    },
    {
      songName: "salam-e-ishq7",
      filePath: "./songs/3.mp3",
      coverPath: "./img/logo.png",
    },
    {
      songName: "salam-e-ishq8",
      filePath: "./songs/4.mp3",
      coverPath: "./img/logo.png",
    },
    {
      songName: "salam-e-ishq9",
      filePath: "./songs/1.mp3",
      coverPath: "./img/logo.png",
    },
  ];

  const makeAllPLays = () => {
    Array.from(songListPlay).forEach((item) => {
      item.classList.remove("fa-pause-circle");
      item.classList.add("fa-play-circle");
    });
  };

  Array.from(songListPlay).forEach((item) => {
    item.addEventListener("click", function (e) {
      makeAllPLays();

      songIndex = parseInt(e.target.id);

      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElem.src = `./songs/${songIndex + 1}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElem.currentTime = 0;
      audioElem.play();
      $("#gif").css("opacity", "1");
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  });

  $(".next").click(function () {
    if (songIndex >= 9) {
      songIndex = 0;
    } else {
      songIndex += 1;
    }

    audioElem.src = `./songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElem.currentTime = 0;
    audioElem.play();
    $("#gif").css("opacity", "1");
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
  });
  $(".previous").click(function () {
    if (songIndex <= 0) {
      songIndex = 0;
    } else {
      songIndex -= 1;
    }
    audioElem.src = `./songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElem.currentTime = 0;
    audioElem.play();
    $("#gif").css("opacity", "1");
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
  });

  Array.from(songItems).forEach((elements, i) => {
    elements.getElementsByTagName("img")[0].src = songs[i].coverPath;
    elements.getElementsByTagName("span")[0].innerHTML = songs[i].songName;
  });

  // listen to events

  $(masterPlay).on("click", function () {
    // check if audio is played or not
    if (audioElem.paused || audioElem.currentTime <= 0) {
      audioElem.play();
      // change the icon to pause
      $(masterPlay).addClass("fa-pause-circle");
      $(masterPlay).removeClass("fa-play-circle");
      $("#gif").css("opacity", "1");
    } else {
      audioElem.pause();
      $(masterPlay).addClass("fa-play-circle");
      $(masterPlay).removeClass("fa-pause-circle");
      $("#gif").css("opacity", "0");
    }
  });

  $(audioElem).on("timeupdate", function () {
    // update seekbar
    progress = parseInt((audioElem.currentTime / audioElem.duration) * 100);
    progressBar.value = progress;
  });
  $(progressBar).on("change", function () {
    // update audio current time
    audioElem.currentTime = (progressBar.value * audioElem.duration) / 100;
  });
});
