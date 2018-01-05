const googlehome = require('google-home-notifier');
const parseMessage = require('./parse-message');

const message = '[en]Happy New Year!';

const { lang, text } = parseMessage(message);

googlehome.device('Google Home', lang); // Change to your Google Home name

googlehome.notify(text, (res) => {
  console.log(res);
});
