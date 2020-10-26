function play(link) {
    let audio = new Audio(link);
    audio.load();
    audio.play();
}