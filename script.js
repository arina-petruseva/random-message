let temp = Math.floor(Math.random()*30);
let weather = ['sunny','rainy','windy','thunderstorm','overcast'];
let music = ['Pink Floyd','Iron Maiden','Lady Gaga','Prodigy','Joss Stone'];
let yourMood
if (temp === 1 || temp === 21) {
    yourMood = `It's ${temp} degree outside and it's ${weather[Math.floor(Math.random()*5)]}. I should listen to ${music[Math.floor(Math.random()*3)]}.`
} else {
    yourMood = `It's ${temp} degrees outside and it's ${weather[Math.floor(Math.random()*5)]}. I should listen to ${music[Math.floor(Math.random()*3)]}.`
}
console.log(yourMood)