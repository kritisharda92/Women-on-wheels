var mongoose = require('mongoose');
var dburl = 'mongodb://localhost:27017/DB_WOW';

mongoose.connect(dburl);

mongoose.connection.on('connected',function () {
    console.log("Mongoose connected to " + dburl);
});

mongoose.connection.on('disconnected',function () {
    console.log("Mongoose cannot connect! ");
});

mongoose.connection.on('error',function (err) {
    console.log("Mongoose throws error " + err);
});

process.on('SIGINT',function () {
    mongoose.connection.close(function () {
        console.log("Terminating the application!");
        process.exit(0);
    })
});

process.on('SIGTERM',function () {
    mongoose.connection.close(function () {
        console.log("Terminating the application(SIGTERM)");
        process.exit(0);
    })
});

process.once('SIGUSR2',function () {
    mongoose.connection.close(function () {
        console.log("Terminating the application(SIGUSR2)");
        process.kill(process.pid,'SIGUSR2');
    })
});

require('./userModels');