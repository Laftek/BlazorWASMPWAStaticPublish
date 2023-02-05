export function playAudio(audioElementId) {
    var audioElement = document.getElementById(audioElementId);
    audioElement.play();
}
export function stopAudio(audioElementId) {
    var audioElement = document.getElementById(audioElementId);
    audioElement.pause();
    audioElement.currentTime = 0;
}