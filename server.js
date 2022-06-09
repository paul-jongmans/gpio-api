const ora = require('ora');
const { Worker } = require('worker_threads');
const app = require('./app');
const config = require('./config');

const gracefulShutdown = (msg) => {
    ora().info('Shutdown initiated: ' + msg);
    ora().info('Shutting down...');

    process.exit();
};

app.listen(config.port, () => {
    process.on('SIGTERM', gracefulShutdown); // Handle kill commands
    process.on('SIGINT', gracefulShutdown); // Handle interrupts
    process.on('uncaughtException', gracefulShutdown); // Prevent dirty exit on uncaught exceptions
    process.on('unhandledRejection', gracefulShutdown); // Prevent dirty exit on unhandled promise rejection

    ora().succeed('Backend started on port ' + config.port);

    console.log(' ');

    new Worker('./jobs/temperature_job.js');
}).on('error', (error) => {
    ora().fail('Backend failed to start (' + error.message + ')');
    process.exit();
});
