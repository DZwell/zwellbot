
module.exports = (robot) => {
    robot.hear(/hey/, (msg) => {
        const user = msg.message.user.name;
        // console.log(msg.message.user);
        if (user === 'mike') {
            msg.reply(`${user} is a ballbag`);
        } else {
            msg.reply(`${user} is the greatest ever`);
        }
    });
};