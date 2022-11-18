const form = document.getElementById('form');

form.addEventListener('submit', e => {
    e.preventDefault();

        const nomeForm = form['nome-form'].value;
        const numeroForm = form['numero-form'].value;
        const mesForm = form['mes-form'].value;
        const anoForm = form['ano-form'].value;
        const cvcForm = form['cvc-form'].value;

    if (nomeForm === ''){ 
        const small = form['nome-form'].parentNode.querySelector('small');
        small.innerText = 'Can`t be blank';
    } 
    else{
        const small = form['nome-form'].parentNode.querySelector('small');
        small.innerText = '';}

    if (numeroForm === ''){ 
        const small = form['numero-form'].parentNode.querySelector('small');
        small.innerText = 'Can`t be blank';
    }
    else{
        const small = form['numero-form'].parentNode.querySelector('small');
        small.innerText = '';
    }

    if (mesForm === '' || anoForm === ''){ 
        const small = form['mes-form'].parentNode.parentNode.querySelector('small');
        small.innerText = 'Can`t be blank';
    }
    else{
        const small = form['mes-form'].parentNode.parentNode.querySelector('small');
        small.innerText = '';
    }

    if (cvcForm === ''){ 
        const small = form['cvc-form'].parentNode.querySelector('small');
        small.innerText = 'Can`t be blank';
    }
    else{
        const small = form['cvc-form'].parentNode.querySelector('small');
        small.innerText = '';
    }
});





form['nome-form'].addEventListener("keyup", e => {
    e.preventDefault();

    var nomeAlterado = document.querySelector(".nome-cartao");
    nomeAlterado.textContent = form['nome-form'].value;

});

form['numero-form'].addEventListener("keyup", e => {
    e.preventDefault();

    var numeroAlterado = document.querySelector(".numero-cartao");
    numeroAlterado.textContent = form['numero-form'].value;

    if(form['numero-form'].value.length > form['numero-form'].maxLength) {
        form['numero-form'].value=form['numero-form'].value.slice(0, form['numero-form'].maxLength);
    }
});

form['mes-form'].addEventListener("keyup", e => {
    e.preventDefault();

    var mesAlterado = document.querySelector(".mes-cartao");
    mesAlterado.textContent = form['mes-form'].value;

    if(form['mes-form'].value.length > form['mes-form'].maxLength) {
        form['mes-form'].value=form['mes-form'].value.slice(0, form['mes-form'].maxLength);
    }
});

form['ano-form'].addEventListener("keyup", e => {
    e.preventDefault();

    var anoAlterado = document.querySelector(".ano-cartao");
    anoAlterado.textContent = "/" + form['ano-form'].value;

    if(form['ano-form'].value.length > form['ano-form'].maxLength) {
        form['ano-form'].value=form['ano-form'].value.slice(0, form['ano-form'].maxLength);
    }
});

form['cvc-form'].addEventListener("keyup", e => {
    e.preventDefault();

    var cvcAlterado = document.querySelector(".cvc-cartao");
    cvcAlterado.textContent = form['cvc-form'].value;

    if(form['cvc-form'].value.length > form['cvc-form'].maxLength) {
        form['cvc-form'].value=form['cvc-form'].value.slice(0, form['cvc-form'].maxLength);
    }
});



