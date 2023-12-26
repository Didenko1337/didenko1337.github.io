document.getElementById('openPopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'block';
    history.pushState({ page: 'popup' }, 'Form Popup', '/form-popup');
});

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
    fullName: document.getElementById('fullName').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    organization: document.getElementById('organization').value,
    message: document.getElementById('message').value
    };

    fetch('https://formcarry.com/s/96HtVEptOQ', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(formData)
    })
    .then(response => {
    if (response.ok) {
        return response.json();
    }
    throw new Error('Ошибка при отправке данных формы');
    })
    .then(data => {
    document.getElementById('responseMessage').textContent = 'Форма отправлена успешно!';
    document.getElementById('feedbackForm').reset();
    })
    .catch(error => {
    document.getElementById('responseMessage').textContent = 'Произошла ошибка при отправке формы: ' + error.message;
    });

    localStorage.setItem('fullName', formData.fullName);
    localStorage.setItem('email', formData.email);
    localStorage.setItem('phone', formData.phone);
    localStorage.setItem('organization', formData.organization);
    localStorage.setItem('message', formData.message);
});

window.addEventListener('popstate', function(event) {
    if (event.state && event.state.page === 'popup') {
    document.getElementById('popup').style.display = 'block';
    } else {
    document.getElementById('popup').style.display = 'none';
    }
});

document.getElementById('fullName').value = localStorage.getItem('fullName') || '';
document.getElementById('email').value = localSt
orage.getItem('email') || '';
document.getElementById('phone').value = localStorage.getItem('phone') || '';
document.getElementById('organization').value = localStorage.getItem('organization') || '';
document.getElementById('message').value = localStorage.getItem('message') || '';


