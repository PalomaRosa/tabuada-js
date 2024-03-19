// Seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");
const multiplicationTable = document.querySelector("#multiplication-operations");

// Funções

const createTable = (number, multiplicatorNumber) => {

    if (!number || !multiplicatorNumber) {
        multiplicationTable.innerHTML = ""
        multiplicationTable.innerHTML += `<p id="txt-table">Informe um número para calcular a tabuada...</p>`;
        throw new Error("Argumentos inválidos, algum dos dados não foi preenchido!")
    } else {
        multiplicationTable.innerHTML = "";
        for(let i = 1; i <= multiplicatorNumber; i++) {
            const result = number * i;

            const templateTable = 
                `<div class="row">
                    <div class="operation">${number} x ${i} = </div>
                    <div class="result">${result}</div>
                </div>`

            multiplicationTable.innerHTML += templateTable;  
        }


    }
}

function campoVazio(n) {

    let nomeCampo = "";
    if(!n) {
        nomeCampo = "Campo para tabuada"
    } else {
        nomeCampo = "Campo para multiplicar"
    }

    const templateErro = 
        `<p class= "alert-erro">${nomeCampo} não preenchido.</p>`
    multiplicationForm.insertAdjacentHTML('beforeend', templateErro);
};


// Eventos
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberInput.value; //+ é para que retorne um inteiro
    const multiplicatorNumber = +multiplicationInput.value;

    try {
        createTable(multiplicationNumber, multiplicatorNumber);
    } catch(err) {
        campoVazio(multiplicationNumber, multiplicatorNumber);
    }

});

// Remover mensagem de erro quando campo é preenchido
numberInput.addEventListener('input', () => {
    const errorParagraph = multiplicationForm.querySelector('.alert-erro');
    if (errorParagraph) {
        errorParagraph.remove();
    }
});

multiplicationInput.addEventListener('input', () => {
    const errorParagraph = multiplicationForm.querySelector('.alert-erro');
    if (errorParagraph) {
        errorParagraph.remove();
    }
}); 