const os = require('os');

console.log('Platform:', os.platform());
console.log('CPU Architecture:', os.arch());
console.log('Total Memory (in GB):', os.totalmem() / (1024 ** 3));
