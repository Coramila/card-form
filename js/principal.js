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

    var nomeAlterado = document.querySelector(".numero-cartao");
    nomeAlterado.textContent = form['numero-form'].value;
});

form['mes-form'].addEventListener("keyup", e => {
    e.preventDefault();

    var nomeAlterado = document.querySelector(".mes-cartao");
    nomeAlterado.textContent = form['mes-form'].value;
});

form['ano-form'].addEventListener("keyup", e => {
    e.preventDefault();

    var nomeAlterado = document.querySelector(".ano-cartao");
    nomeAlterado.textContent = "/" + form['ano-form'].value;
});

form['cvc-form'].addEventListener("keyup", e => {
    e.preventDefault();

    var nomeAlterado = document.querySelector(".cvc-cartao");
    nomeAlterado.textContent = form['cvc-form'].value;
});




