//dates and time

const now = new Date();

console.log(now);
console.log(typeof now)

//year, motnhs, day, times

console.log('getFullyear:', now.getFullYear());
console.log('getMoth:', now.getMonth());
console.log('getDate:', now.getDate());
console.log('getDay:', now.getDay());
console.log('getHours:', now.getHours());
console.log('getMinutes:', now.getMinutes());
console.log('getSeconds:', now.getSeconds());


// timestamps

console.log('timestamp', now.getTime());

// date strings

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());