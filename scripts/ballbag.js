const PythonShell = require('python-shell');
const pyShell = new PythonShell('spreadsheet.py', { 
    scriptPath: '/Users/ZweliD/Documents/zwellbot/pysheets/',
    mode: 'text',
});

module.exports = (robot) => {
    robot.hear(/.*/, (res) => {
        const channel = res.envelope.room;
        const slackMessage = res.message.text;
        if (channel === 'C5C68HRC6') {
            pyShell.send(slackMessage);
            pyShell.on('message', (message, err) => {
                if (err) {
                    throw err;
                }
                console.log(slackMessage)
                console.log(message);
            });

            // pyShell.end((err) => {
            //     if (err) {
            //         throw err;
            //     } else {
            //         console.log('done');
            //     }
            // });
        }
    });
};






            //         python.spawn('python', ['test.py']);
            // let output;
            // python.stdout.on('data', (data) => {
            //     output += data;
            // });

            // python.on('close', () => {
            //     console.log(output);
            // });