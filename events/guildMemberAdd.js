module.exports = member => {
    let username = member.user.username;
    member.sendMessage('Hoş geldin **' + username + '**!');
    member.sendMessage('Hergün yaptığım twitch canlı yayınlarımı kaçırmamak için takip etmeyi unutma! https://www.twitch.tv/volkangunay');
};