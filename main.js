//opdr1
const pers = {
    firstname: 'yannick',
    lastname: 'daantje',
    leeftijd: 22,
    score: 6,
    course: 'MBO4',
};
console.log('first name is:', pers.firstname);
console.log('last name is:', pers.lastname);
console.log('leeftijd  is:', pers.leeftijd);
console.log('score is:', pers.score);
console.log('course is:', pers.course);


console.log('');

//opdr2
const facebookpost = {
    username: 'user',
    titel: 'page',
    date: 2023,
    views: 200,
};
console.log('first name is:', facebookpost.username);
console.log('last name is:', facebookpost.titel);
console.log('leeftijd  is:', facebookpost.date);
console.log('score is:', facebookpost.views);

//opdr3
const foods = [
    {
        titel: 'pizza',
        description: 'pizza me kip kaas',
        healthy: false,
    },

    {
        titel: 'shoarma',
        description: 'patat met kaas en kip',
        healthy: false,
    },


    {
        titel: 'icecream',
        description: 'met chocolate',
        healthy: false,
    },
]


const meal = foods[0];
const meal1 = foods[1];
const meal2 = foods[2];
console.log(meal.titel);
console.log(meal1.titel);
console.log(meal2.titel);