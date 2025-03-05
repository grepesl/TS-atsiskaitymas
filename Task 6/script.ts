/* ------------------------------ TASK 6 ---------------------------------------------------------------
Sukurkite klasę "Potion", kuri sukuria objektus su 2 savybėm ir 1 metodu:

Savybės:
  color(masyvas tryjų spalvų 0-255), volume
Metodas: 
  mix(potion) - Pateikiamas kitas eliksyras ir jiedu sumaišomi į vieną naują eliksyrą, kuris yra grąžinamas kaip naujas Klasės objektas.

Pvz.: 
  felix_felicis     =  Potion([255, 255, 255],  7)
  polyjuice         =  Potion([ 51, 102,  51], 12)
  new_potion        =  felix_felicis.mix(polyjuice)

  new_potion.color  =  [127, 159, 127]
  new_potion.volume =  19
------------------------------------------------------------------------------------------------------ */

class Potion {
  color: number[];
  volume: number;
 
  constructor(color: number[], volume: number) {
    this.color = color;
    this.volume = volume;
  }
 
  mix(potion: Potion) {
    const totalVolume: number = potion.volume + this.volume;
    const colors: number[] = [];
    for(let i = 0; i < this.color.length; i++ ){
      const newColor: number = (this.color[i] * this.volume + potion.color[i] * potion.volume) / totalVolume;
      colors.push(newColor);
    }

    return new Potion(colors, totalVolume)
  }
}