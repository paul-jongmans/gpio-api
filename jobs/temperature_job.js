const ora = require('ora');
const os = require('os');

if (os.platform() == 'linux') {
    const Gpio = require('onoff').Gpio;
    ora().succeed('[Jobs] Started Temperature job');

    //const warmup_1 = new Gpio(4, 'out');
    //const warmup_2 = new Gpio(5, 'out');
    //const warmup_3 = new Gpio(6, 'out');

    setInterval(() => {
        //warmup_1.writeSync(1);
        //warmup_2.writeSync(0);
        //warmup_3.writeSync(1);
        //
        //check sensor value
        //check if temperature should go down or up
        //control temperature
    }, 2000); // Runs every 2 seconds asynchronly
} else ora().warn('[Jobs] Temperature job is only available on Linux');
