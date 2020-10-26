function play(link) {
    this.audio = new Audio(link);
    this.promise = this.audio.play();
}