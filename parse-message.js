const language = process.env.LANGUAGE || 'ja';
module.exports = (message) => {
  const regex = /^\s*\[([a-zA-Z\-]*)\]([\s\S]*)$/;
  const matchTexts = regex.exec(message);
  let lang, text;
  if (matchTexts && matchTexts.length === 3) {
    lang = matchTexts[1];
    text = matchTexts[2];
  } else {
    lang = language;
    text = message;
  }
  return { lang, text };
};
