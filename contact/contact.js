const submitButton = document.querySelector('.submit-button');
const resetButton = document.querySelector('.reset-button');
const textArea = document.getElementById('user-message');

textArea.addEventListener('input', () => {
  sessionStorage.setItem('user_message', textArea.value);
});

if (sessionStorage.getItem('user_message'))
  window.onload = () => {
    textArea.value = sessionStorage.getItem('user_message');
  };

const saveUserMessage = () => {
  sessionStorage.setItem('user_message', 'napisz do nas...');
};

resetButton.addEventListener('click', () =>
  sessionStorage.setItem('user_message', 'napisz do nas...')
);
submitButton.addEventListener('click', () => saveUserMessage());
