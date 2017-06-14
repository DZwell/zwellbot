const PythonShell = require('python-shell');
const pyShell = new PythonShell('./test.py');
// const python = require('child_process');

module.exports = (robot) => {
    robot.hear(/hey/, (res) => {
        const channel = res.envelope.room;
        if (channel === 'C5C68HRC6') {
            PythonShell.run('test.py' (error) => {
                if (error) {throw error;}
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