const btnOk = document.querySelector('.video__btn');
const wrapperVideo = document.getElementById('video');
btnOk.addEventListener('click', function() {
    wrapperVideo.play();
});