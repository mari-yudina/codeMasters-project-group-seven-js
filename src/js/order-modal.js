import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const modal = document.getElementById('orderModal');
const overlay = modal.querySelector('.order-modal__overlay');
const closeBtn = modal.querySelector('.order-modal__close');
const form = modal.querySelector('.order-modal__form');

let currentModelId = null;
let currentColor = null;

export function openOrderModal(modelId, color) {
  currentModelId = modelId;
  currentColor = color;

  modal.classList.remove('is-hidden');
  document.body.classList.add('modal-open');
}

function closeOrderModal() {
  modal.classList.add('is-hidden');
  document.body.classList.remove('modal-open');
  form.reset();
}

closeBtn.addEventListener('click', closeOrderModal);
overlay.addEventListener('click', closeOrderModal);
window.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeOrderModal();
});

form.addEventListener('submit', async e => {
  e.preventDefault();

  const email = form.email.value.trim();
  const phone = form.phone.value.trim();
  const comment = form.comment.value.trim();

  if (!email || !phone) {
    iziToast.error({
      title: 'Помилка',
      message: 'Будь ласка, заповніть обов’язкові поля: пошта і телефон.',
    });
    return;
  }

  const data = {
    email,
    phone,
    comment,
    modelId: currentModelId,
    color: currentColor,
  };

  try {
    const response = await fetch(
      'https://furniture-store.b.goit.study/api/orders',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      iziToast.error({
        title: 'Помилка',
        message: error.message || 'Сталася помилка при надсиланні заявки.',
      });
      return;
    }

    iziToast.success({
      title: 'Успішно',
      message: 'Заявку надіслано!',
    });

    closeOrderModal();
  } catch (err) {
    iziToast.error({
      title: 'Помилка',
      message: 'Не вдалося надіслати заявку. Спробуйте пізніше.',
    });
  }
});

window.openOrderModal = openOrderModal;
