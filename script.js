let temp = Math.floor(Math.random()*50-20);
let weather = ['sunny','rainy','windy','thunderstorm','overcast'];
let music = ['Pink Floyd','Iron Maiden','Lady Gaga','Prodigy','Joss Stone'];
let yourMood;
if (temp === 1 || temp === 21) {
    yourMood = `It's ${temp} degree outside and it's ${weather[Math.floor(Math.random()*5)]}. I should listen ${music[Math.floor(Math.random()*5)]}.`
} else {
    yourMood = `It's ${temp} degrees outside and it's ${weather[Math.floor(Math.random()*5)]}. I should listen ${music[Math.floor(Math.random()*5)]}.`
}
console.log(yourMood)
