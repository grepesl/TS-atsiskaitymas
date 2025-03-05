/* ------------------------------ TASK 8 ----------------------------
Parašykite TS kodą, kuris leis vartotojui įvesti ilgį metrais ir pamatyti jo pateikto ilgio konvertavimą į:
1. Centimetrus (cm) | Formulė: cm = m * 100
2. Colius (in) | Formulė: in = m * 39.37
3. Pėdas (ft) | Formulė: ft = m * 3.281
4. Mylias (mi) | Formulė: mi = m / 1609
5. Jardus (yd) | Formulė: yd = m * 1.094

Pastaba: Atvaizdavimas turi būti matomas su kiekviena įvestimi ir pateikiamas <div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const submitBtn: HTMLButtonElement | null = document.querySelector<HTMLButtonElement>('#submit-btn');
if (submitBtn !== null){
    submitBtn.addEventListener("click", () => {
        const input = document.querySelector<HTMLInputElement>("#search");
    
        if (input) {
            const value: number = Number(input.value); 
            createSpanElement(`${value * 100} (cm)`);
            createSpanElement(`${value * 39.37} (in`);
            createSpanElement(`${value * 3.281} (ft)`);
            createSpanElement(`${value / 1609} (mi)`);
            createSpanElement(`${value * 1.094} (yd)`);
        }
    });
}

function createSpanElement(textContent: string) {
    const span: HTMLSpanElement = document.createElement("span");
    span.textContent = textContent;
    span.classList.add("span-result");
    const outputDiv: HTMLDivElement | null = document.querySelector<HTMLDivElement>('#output');
    if(outputDiv !== null){
        outputDiv.appendChild(span);
    }
}