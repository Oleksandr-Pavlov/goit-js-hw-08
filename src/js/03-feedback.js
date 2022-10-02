import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  emailInput: document.querySelector('input'),
  messageText: document.querySelector('textarea'),
};

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

refs.form.addEventListener('input', throttle(onSettingData, 500));
refs.form.addEventListener('submit', onFormSubmit);

fillFormData();

function onSettingData(evt) {
  formData[evt.target.name] = evt.target.value;
  console.log(formData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();

  if (refs.emailInput.value === '' || refs.messageText.value === '') {
    alert('Не заповнені всі поля');
    return;
  }

  console.log('Отправляем форму');
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function fillFormData() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedData) {
    refs.emailInput.value = savedData.email;
    refs.messageText.value = savedData.message;
  }
}
