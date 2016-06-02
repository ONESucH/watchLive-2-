var date = new Date();
var allTask = {
    secondPointer: {
        date: date.getSeconds(),
        id: $('#secondPointer'),
        duration: 1
    },
    minutesPointer: {
        date: date.getMinutes(),
        id: $('#minutesPointer'),
        duration: 0.060000
    },
    hoursPointer: {
        date: date.getHours(),
        id: $('#hoursPointer'),
        duration: 0.006000
    }
};

console.log('В данный момент - ' , allTask.secondPointer.date, ' секунд(-ы)');

setInterval( function () {
    allTask.secondPointer.date += allTask.secondPointer.duration;
    allTask.minutesPointer.date += allTask.minutesPointer.duration;
    allTask.hoursPointer.date += allTask.hoursPointer.duration;
    allTask.secondPointer.id.rotate ({
        angle: allTask.secondPointer.date,
        center: ['0', 'center', '0']
    });
    allTask.minutesPointer.id.rotate ({
        angle: allTask.minutesPointer.date,
        center: ['right', 'center', '0']
    });
    allTask.hoursPointer.id.rotate ({
        angle: allTask.hoursPointer.date,
        center: ['right', 'center', '0']
    });
}, 1000);