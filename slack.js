const googlehome = require('google-home-notifier');
const parseMessage = require('./parse-message');

const { RtmClient, CLIENT_EVENTS } = require('@slack/client');

const SLACK_TOKEN = process.env.SLACK_TOKEN;
const CHANNEL_ID = process.env.CHANNEL_ID;

// Cache of data
const appData = {};

// Initialize the RTM client with the recommended settings. Using the defaults for these
// settings is deprecated.
const rtm = new RtmClient(SLACK_TOKEN, {
  dataStore: false,
  useRtmConnect: true,
});

// The client will emit an RTM.AUTHENTICATED event on when the connection data is avaiable
// (before the connection is open)
rtm.on(CLIENT_EVENTS.RTM.AUTHENTICATED, (connectData) => {
  // Cache the data necessary for this app in memory
  appData.selfId = connectData.self.id;
  console.log(`Logged in as ${appData.selfId} of team ${connectData.team.id}`);
});

// The client will emit an RTM.RTM_CONNECTION_OPEN the connection is ready for
// sending and recieving messages
rtm.on(CLIENT_EVENTS.RTM.RTM_CONNECTION_OPEN, () => {
  console.log(`Ready`);
});

rtm.on(CLIENT_EVENTS.RTM.RAW_MESSAGE, (message) => {
  const { type, text, channel } = JSON.parse(message);
  if (type !== 'message') {
    return;
  }
  if (CHANNEL_ID && CHANNEL_ID !== channel) {
    return;
  }
  console.log(`message from slack "${text}".(channel_id: ${channel})`);
  const { lang, text: msg } = parseMessage(text);
  googlehome.device('Google Home', lang);
  googlehome.notify(msg, (res) => {
    console.log(res);
  });
});

// Start the connecting process
rtm.start();
