//Play do vídeo ao clicar na imagem de capa
export default function initVideo() {
  const inactiveClass = "-inactive"

  const video = document.getElementById('video-player')
  const videoCover = document.querySelector('.video-cover');

  function startVideo() {
    videoCover.classList.add(inactiveClass)
  }

  video.addEventListener('play', startVideo)
}
