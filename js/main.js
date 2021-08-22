function loadImage(id, targetId) {
  let el = document.getElementById(id);
  let targetEl = targetId ? document.getElementById(targetId) : el;
  let imageToLoad;

  if (el.dataset.image) {
    imageToLoad = el.dataset.image;
  } else if (typeof el.currentSrc === 'undefined') {
    imageToLoad = el.src;
  } else {
    imageToLoad = el.currentSrc;
  }

  if (imageToLoad) {
    let img = new Image();
    img.src = imageToLoad;
    img.onload = () => {
      targetEl.classList.add('is-loaded');
    };
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadImage('wallpaper');
  loadImage('pictureImage', 'picture');
});