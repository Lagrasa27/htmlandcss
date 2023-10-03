// timesstamps


const before = new Date('February 2 2018 7:30:50');
const now = new Date();

console.log(now.getTime(), before.getTime());


const diff = now.getTime() - before.getTime();
console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);


console.log(mins, hours, days);

console.log(`the blog was written ${days} ago`);

//converting timesstamps into date objects

const timestamp = 1675938474990;
console.log(new Date(timestamp));