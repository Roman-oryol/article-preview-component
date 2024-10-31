const cardContent = document.getElementById('cardContent');
const shareButton = cardContent.querySelector('#shareButton');
const sharePopup = cardContent.querySelector('#sharePopup');

const onShareClick = () => {
  cardContent.classList.toggle('active');
  sharePopup.classList.toggle('active');
};

shareButton.addEventListener('click', onShareClick);
