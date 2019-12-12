const modal = document.querySelector('.modal');
const productModal = document.querySelector('.productModal');

const displayModal = () => {
  modal.style.display = 'block';
};
document.querySelector('.add-attendant').addEventListener('click', displayModal);

const cancelModal = (event) => {
  event.preventDefault();
  modal.style.display = 'none';
  productModal.style.display = 'none';
};
document.querySelector('.cancel').addEventListener('click', cancelModal);
/* document.querySelector('.close').addEventListener('click', cancelModal); */

window.onclick = (event) => {
  if (event.target === modal || event.target === productModal) {
    modal.style.display = 'none';
    productModal.style.display = 'none';
  }
};

const displayProduct = () => {
  productModal.style.display = 'block';
};

const productName = document.querySelectorAll('.product-name');
const product = document.querySelectorAll('.product');
productName.forEach((name, index, nameArray) => {
  nameArray[index].addEventListener('click', displayProduct);
});
