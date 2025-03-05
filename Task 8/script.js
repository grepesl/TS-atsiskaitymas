"use strict";
const submitBtn = document.querySelector('#submit-btn');
if (submitBtn !== null) {
    submitBtn.addEventListener("click", () => {
        const input = document.querySelector("#search");
        if (input) {
            const value = Number(input.value);
            createSpanElement(`${value * 100} (cm)`);
            createSpanElement(`${value * 39.37} (in`);
            createSpanElement(`${value * 3.281} (ft)`);
            createSpanElement(`${value / 1609} (mi)`);
            createSpanElement(`${value * 1.094} (yd)`);
        }
    });
}
function createSpanElement(textContent) {
    const span = document.createElement("span");
    span.textContent = textContent;
    span.classList.add("span-result");
    const outputDiv = document.querySelector('#output');
    if (outputDiv !== null) {
        outputDiv.appendChild(span);
    }
}
