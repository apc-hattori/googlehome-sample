const googlehome = require('google-home-notifier');
const language = 'ja'; // if not set 'us' language will be used

googlehome.device('Google Home', language); // Change to your Google Home name

const message = 'あけまして、おめでとうございます';

googlehome.notify(message, (res) => {
  console.log(res);
});
