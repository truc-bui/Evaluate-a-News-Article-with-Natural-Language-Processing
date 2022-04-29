import { handleSubmit } from './js/formHandler'

function init() {
  const form = document.getElementsByTagName('form')[0];
  form.addEventListener('submit', handleSubmit);

  const submitButton = form.querySelector('[type=submit]');
  submitButton.addEventListener('submit', handleSubmit);
  submitButton.addEventListener('click', handleSubmit);
}
 window.onload = init;