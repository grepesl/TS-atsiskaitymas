"use strict";
class Potion {
    constructor(color, volume) {
        this.color = color;
        this.volume = volume;
    }
    mix(potion) {
        const totalVolume = potion.volume + this.volume;
        const colors = [];
        for (let i = 0; i < this.color.length; i++) {
            const newColor = (this.color[i] * this.volume + potion.color[i] * potion.volume) / totalVolume;
            colors.push(newColor);
        }
        return new Potion(colors, totalVolume);
    }
}
