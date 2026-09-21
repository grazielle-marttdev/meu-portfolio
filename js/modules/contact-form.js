export function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    emailjs.init({
        publicKey: "oC_xTNAXlXnxEWL1x"
    });

    const validator = setupValidation();

    validator.onSuccess((event) => {
        event.preventDefault();

        const submitBtn = form.querySelector('.submit-btn');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando…';

        emailjs.sendForm("service_ezdr1aa", "template_va975jp", form)
            .then(() => {
                showToast('Mensagem enviada com sucesso! 🎉', 'success');
                form.reset();
            })
            .catch(error => {
                console.error(error);
                showToast('Erro ao enviar. Tente novamente.', 'error');
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = 'Enviar Mensagem <i class="fa-solid fa-paper-plane"></i>';
            });
    });
}

function setupValidation() {
    const validator = new JustValidate('#contactForm', {
        errorFieldCssClass: 'invalid-field',
        errorLabelCssClass: 'error-label'
    });

    validator
        .addField('#name', [
            {
                rule: 'required',
                errorMessage: 'Campo obrigatório',
            },
            {
                rule: 'minLength',
                value: 3,
                errorMessage: 'Mínimo de 3 caracteres',
            },
            {
                rule: 'maxLength',
                value: 100, 
                errorMessage: 'Máximo de 100 caracteres'
            },
        ])
        .addField('#email', [
            {
                rule: 'required',
                errorMessage: 'Campo obrigatório',
            },
            {
                rule: 'email',
                errorMessage: 'Formato de e-mail inválido'
            },
        ])
        .addField('#message', [
            {
                rule: 'required',
                errorMessage: 'Campo obrigatório',
            },
            {
                rule: 'minLength',
                value: 10,
                errorMessage: 'Mínimo de 10 caracteres',
            },
            {
                rule: 'maxLength',
                value: 3000,
                errorMessage: 'Máximo de 3000 caracteres',
            },
        ])

        return validator;
}

function showToast(message, type = 'success') {
    // Remove toast anterior se ainda estiver visível
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'polite');

    const icon = type === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation';
    toast.innerHTML = `
        <i class="fa-solid ${icon}"></i>
        <span>${message}</span>
    `;

    document.body.appendChild(toast);

    // Força reflow para a animação de entrada funcionar
    toast.offsetHeight;
    toast.classList.add('toast--visible');

    setTimeout(() => {
        toast.classList.remove('toast--visible');
        toast.addEventListener('transitionend', () => toast.remove(), { once: true });
    }, 4000);
}