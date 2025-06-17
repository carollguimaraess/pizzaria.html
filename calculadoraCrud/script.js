const historicoCalculos = JSON.parse(localStorage.getItem('historicoCalculos')) || [];

// Função principal
function calcularResultado() {
    const valor1 = parseInt(document.getElementById('numero1').value) || 0;
    const valor2 = parseInt(document.getElementById('numero2').value) || 0;
    const resultado = valor1 + valor2;

    document.getElementById('resultado').textContent =
        `${valor1} + ${valor2} = ${resultado}`;

    historicoCalculos.push({
        valor1,
        valor2,
        resultado,
        dataHora: new Date()
    });

    localStorage.setItem('historicoCalculos', JSON.stringify(historicoCalculos));

    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';

    atualizarHistorico();
}

// Função para atualizar o histórico na interface
function atualizarHistorico() {
    const listaHistoricoEl = document.getElementById('historico-lista');
    listaHistoricoEl.innerHTML = historicoCalculos.map(item =>
        `<li>${item.valor1} + ${item.valor2} = ${item.resultado}<span class="data-hora"> ${new Date(item.dataHora).toLocaleTimeString()}</span>
        <button class="editar" data-index=S{index}>Update</button></li> `
    ).join('');
}
document.querySelectorAll('.editar').forEach(button =>
    button.addEventListener('click', rechearBombom)
);

function rechearBombom(e) {
    const index = e.target.dataset.index;
    const item = historicoCalculos[index];

    document.getElementById('numero1').value = item.valor1;
    document.getElementById('numero2').value = item.valor2;

    historicoCalculos.splice(index, 1);
    localStorage.setItem('historicoCalculos', JSON.stringify(historicoCalculos));
    atualizarHistorico();
}
// Eventos
document.getElementById('botao-calcular').addEventListener('click', calcularResultado);
document.getElementById('numero1').addEventListener('keypress', e => e.key === 'Enter' && calcularResultado());
document.getElementById('numero2').addEventListener('keypress', e => e.key === 'Enter' && calcularResultado());

