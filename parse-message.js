const language = process.env.LANGUAGE || 'ja';
module.exports = (message) => {
  return { lang: language, text: message };
};
