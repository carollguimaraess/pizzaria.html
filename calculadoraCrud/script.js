//Armazenamento
const caixaDeBombom = [];

//Função principal
function brigadeiro(){
    //ingredientes para o caulculo
    const chocolate = parseInt(document.getElementById('numero1').value) || 0;
    const leiteCondensado =  parseInt(document.getElementById('numero2').value) || 0;
    const beijinho = chocolate + leiteCondensado;
    
    //decorando o resultado
    document.getElementById('resultado').textContent = 
    `${chocolate} + ${leiteCondensado} = ${beijinho}`;

    //Guardando o resultado na caixa de doces
    caixaDeBombom.push({
        chocolate,
        leiteCondensado,
        beijinho,
        horaDoForno: new Date()
    });

    //limpando a mesa
    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';

    //Mostrando a bandeija de doces
    pudim();
}

//Função de doces para imprimir os doces prontos
function pudim() {
    const formaParaBolo = document.getElementById('historico-lista');
    formaParaBolo.innerHTML = caixaDeBombom.map(doce =>
        `<li>${doce.chocolate} + ${doce.leiteCondensado} = ${doce.beijinho}<span class="data-hora"> ${doce.horaDoForno.toLocaleTimeString()}</span></li>`
    ).join('');
}

//Preparando a cozinha
document.getElementById('botao-calcular').addEventListener('click',brigadeiro);
document.getElementById('numero1').addEventListener('keypress', e => e.key ==='Enter' && brigadeiro());
document.getElementById('numero2').addEventListener('keypress', e => e.key === 'Enter' && brigadeiro());

