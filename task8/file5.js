document.getElementById('fullName').addEventListener('input', function() {
    localStorage.setItem('fullName', this.value);
  });
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('fullName').value = localStorage.getItem('fullName');
  });
  document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    fetch('https://formcarry.com', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if(response.ok) {
        console.log('Форма успешно отправлена');
        // очистка данных формы
        this.reset();
        localStorage.clear();
      } else {
        console.error('Произошла ошибка');
      }
    })
    .catch(error => {
      console.error('Произошла ошибка');
    });
  });