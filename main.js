document.getElementById('calcular').addEventListener('click', function() {
    // Obter os valores dos inputs
    const tipoPlanta = document.getElementById('tipoPlanta').value;
    const dias = parseInt(document.getElementById('dias').value);

    // Verificar se os valores são válidos
    if (!tipoPlanta || isNaN(dias)) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    // Melhor época de plantação por tipo de planta
    const epocas = {
        tomate: 'Primavera e Verão',
        alface: 'Primavera e Outono',
        cenoura: 'Primavera e Outono',
        feijao: 'Primavera',
        milho: 'Primavera e Verão'
    };

    // Obter a melhor época para a planta escolhida
    const melhorEpoca = epocas[tipoPlanta];
    
    // Resultado
    const resultado = `A planta ${tipoPlanta.charAt(0).toUpperCase() + tipoPlanta.slice(1)} levará ${dias} dias para crescer. A melhor época para plantar é: ${melhorEpoca}.`;

    // Exibir o resultado
    document.getElementById('resultado').innerText = resultado;
});