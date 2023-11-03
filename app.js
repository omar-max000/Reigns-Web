const cardData=[
    {
        imageSrc: 'Images/joker-reigns-card.png',
        text: 'Your Majesty You Need To Swallow These Nuts!',
        description: 'Omar' ,
        firstChoiceText: 'Die',
        secondChoiceText: 'Maybe...'
    },
    {
        imageSrc: 'Images/goblin-reigns-card.png',
        text: 'Your Money, Or Your Life!',
        description: 'lolar' ,
        firstChoiceText: 'My money...I guess .',
        secondChoiceText: 'Kill Him!'
    },
    {
        imageSrc: 'Images/knight-reigns-card.png',
        text: 'The Nearby Country Wants To Attack Us...',
        description: 'momo' ,
        firstChoiceText: 'Protect The King!',
        secondChoiceText: 'Protect The Civilians'
    }
]

let money=50, people=50, church=50, army=50, year=0, index=0;
const mainContainer = document.getElementById('main-container');
const eventment = document.getElementById('eventment');
const description = document.getElementById('card-text');
const yearCount = document.getElementById('year-number');
const cardImage = document.getElementById('card-image');
const secondContainer = document.getElementById('secondary-container');
const card = cardData[index];
eventment.textContent = card.text;
const firstChoiceButton = document.getElementById('first-choice');
const secondChoiceButton = document.getElementById('second-choice');
description.textContent = card.description;
yearCount.textContent = `${year} years in power`;

const moneyStat = document.getElementById("money");
const peopleStat = document.getElementById("people");
const churchStat = document.getElementById("church");
const armyStat = document.getElementById("army");


moneyStat.style.width = "50%"; 
moneyStat.style.backgroundColor = "red";
peopleStat.style.width = "50%";
peopleStat.style.backgroundColor = "red";
churchStat.style.width = "50%";
churchStat.style.backgroundColor = "red";
armyStat.style.width = "50%";
armyStat.style.backgroundColor = "red";


function losing(){
    if(money===0){
        mainContainer.innerHTML='';
        mainContainer.textContent='You lose';
    }
    
}
firstChoiceButton.addEventListener('click', () => {
    year++;
    index++;
    cardImage.src=`${cardData[index].imageSrc}`;
    eventment.textContent = `${cardData[index].text}`;
    yearCount.textContent = `${year} years in power`;
    description.textContent = `${cardData[index].description}`;
    firstChoiceButton.textContent = `${cardData[index].firstChoiceText}`;
    secondChoiceButton.textContent= `${cardData[index].secondChoiceText}`;
    money-=25;
    moneyStat.style.width = "25%";
    losing();
})

secondChoiceButton.addEventListener('click', () => {
    year++;
    index++;
    cardImage.src=`${cardData[index].imageSrc}`;
    yearCount.textContent = `${year} years in power`;
    description.textContent = `${cardData[index].description}`;
    firstChoiceButton.textContent = `${cardData[index].firstChoiceText}`;
    secondChoiceButton.textContent= `${cardData[index].secondChoiceText}`;
})

