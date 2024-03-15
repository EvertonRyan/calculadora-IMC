function calcular() {
    const p = document.getElementById('peso');
    const a = document.getElementById('altura');
    const parag = document.getElementById('informeDados');

    if (p.value.length == 0 || a.value.length == 0) {
        parag.innerHTML = 'Por favor, informe seus dados';
    } else {
        let peso = Number(p.value);
        let altura = Number(a.value);
        let imc = peso/(altura**2);

        if (imc < 18.5) {
            parag.innerHTML = `Abaixo do peso! <br> IMC (${imc.toFixed(2).replace('.' , ',')})`;
        } else if (imc >= 18.5 && imc < 25) {
            parag.innerHTML = `Parabéns! <br> Peso ideal (IMC ${imc.toFixed(2).replace('.' , ',')})`;
        } else if (imc >= 25 && imc < 30) {
            parag.innerHTML = `Sobrepeso! <br> IMC ${imc.toFixed(2).replace('.' , ',')}`;
        } else if (imc >= 30 && imc < 35) {
            parag.innerHTML = `Obesidade elevada! <br> IMC ${imc.toFixed(2).replace('.' , ',')}`;
        } else if (imc >= 35 && imc < 40) {
            parag.innerHTML = `Obesidade severa! <br> IMC ${imc.toFixed(2).replace('.' , ',')}`;
        } else if (imc >= 40) {
            parag.innerHTML = `Obesidade mórbida! <br> IMC ${imc.toFixed(2).replace('.' , ',')}`;
        }
    }
}