console.log("Hello World!");
let resposta = document.querySelector(".resposta");
btn.onclick = function () {
    let al = altura.value;
    let pe = peso.value;
    let calculo = pe / (al * al); 
    resposta.innerText = `Seu IMC é: ${calculo.toFixed(1)}`;

    if (calculo <= 18.4) {resposta.innerText += ` Abaixo do peso`
    return;
}
    if (calculo <= 24.9) {resposta.innerText += ` Peso ideal`
    return;
}
    if (calculo <= 29.9) {resposta.innerText += ` Excesso de peso`
    return;
}
    if (calculo <= 34.9) {resposta.innerText += ` Obesidade I`
    return;
}
    if (calculo <= 39.9) {resposta.innerText += ` Obesidade II`
    return;
}
    else {resposta.innerText += ` Obesidade III`};
};