const ngrok = require('ngrok');
(async function() {
  const url = await ngrok.connect(5000);
  console.log(url);
})();
