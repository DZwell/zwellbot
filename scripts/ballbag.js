







module.exports = (robot) => {
    robot.hear(/hey there/, (msg) => {
        console.log(msg);
        msg.reply('Hey is for horses');
    });
};