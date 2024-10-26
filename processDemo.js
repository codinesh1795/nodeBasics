console.log(process.argv);
//console.log(process.argv[3]);
// cool for cli 

// process.env

console.log(process.env.COMPUTERNAME)

// pid
console.log(process.pid)

// cwd()
console.log(process.cwd())

//titel
console.log(process.title)

//memoryUsage
console.log(process.memoryUsage())

// update()
console.log(process.uptime())

process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`)
})

// exit()
process.exit(1);
console.log('This also doesnt Logs')
process.exit(0);
console.log('Doesnt LOG');