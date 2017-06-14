const PythonShell = require('python-shell');
// const pyShell = new PythonShell('test.py');
// const python = require('child_process');

module.exports = (robot) => {
    robot.hear(/hey/, (res) => {
        const channel = res.envelope.room;
        const options = {
            scriptPath: `/danielzwelling/Documents/coding_stuff/hubot/pysheets`,
        }
        if (channel === 'C5C68HRC6') {
            PythonShell.run('test.py', (error, results) => {
                if (error) {
                    throw error;
                }
                console.log(results);
                console.log('done');
            });
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