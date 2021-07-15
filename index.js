const color = require('cli-color')
const { email, password } = require('./config.json')
const sandi = password

/*/ini adalah waktu/*/
const time = new Date();
 jam = time.getHours();
 menit = time.getMinutes();
 detik = time.getSeconds();
    waktu = `${jam}-${menit}-${detik}`
/*/end/*/   

/*/inti/*/
console.log(color.yellow("Email:"))
console.log(color.red(email))
console.log(color.yellow("password:"));
console.log(color.red(sandi))
console.log('\n')
console.log(color.green("waktu:"))
console.log(color.yellow(waktu));
console
/*/end/*/