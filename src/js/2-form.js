const formData = {
    email: "",
    message: "",
}

const formEl = document.querySelector('.feedback-form');
const textareaEl = document.querySelector('textarea');

formEl.addEventListener ('input', ()=> {
    const formData = new FormData(formEl);
    const email = formData.get('email');
    const message = formData.get('message');
    const data = {email, message}

    saveToLS('email', email)
saveToLS('message', message)
saveToLS('feedback-form-state', data)
})



formEl.addEventListener("submit", e => {
    e.preventDefault();

    const formData = new FormData(formEl);
    const email = formData.get('email');
    const message = formData.get('message');
    const data = {email, message}

    if (!email || !message) {
        alert('Fill please all fields');
        return;
    }
    console.log(data);
    
    localStorage.removeItem('email');
    localStorage.removeItem('message');
    localStorage.removeItem('feedback-form-state');
    
    formData.email = "";
    formData.message = "";
    
    formEl.reset();
});

function saveToLS (key, value) {
    const jsonData = JSON.stringify(value);
    localStorage.setItem(key, jsonData)
}

function loadFromLS(key) {
    const json = localStorage.getItem(key);
    try {
        const data = JSON.parse(json);
        return data;
    } catch {
        return json
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const email = loadFromLS('email');
    const message = loadFromLS ('message')

    if (email) {
        formData.email = email;
        formEl.querySelector('input[name="email"]').value = email;
    }
    
    if (message) {
        formData.message = message;
        formEl.querySelector('textarea[name="message"]').value = message;
    }
});


