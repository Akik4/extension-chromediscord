const express = require('express')
const bodyParser = require('body-parser');
const RPC = require('discord-rpc');
var client = new RPC.Client({ transport: 'ipc' });
const clientId = '1045028748728217700'

client.on('ready', (e) => {
  console.log('connected to ' + client.user.username)

})

client.login({ clientId }).catch((e) => console.log(e))
// var change = client.RP = '1045028748728217700'


const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
const port = 8888

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  console.log(req.body)
  if (req.body.test.length >= 128) {
    return;
  }
  state = "pause"
  stateImg = "https://img.freepik.com/premium-vector/pause-button-vector-icon-black-white-video-music-pause-symbol_302321-428.jpg"
  if(req.body.videoState == "Pause (k)") 
  {
    state = "lecture";
    stateImg = "https://www.iconsdb.com/icons/preview/white/video-play-xxl.png";
  }
  client.setActivity({
    state: "Chaîne",
    details: req.body.test,
    largeImageKey: "https://img.freepik.com/vecteurs-premium/logo-youtube-rouge-logo-medias-sociaux_197792-1803.jpg",
    smallImageKey: stateImg,
    smallImageText: state,
    buttons: [{ label: "Video", url: req.body.state }]
  })
  res.send('Je suis le test')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




function setActivity() {
  client.setActivity({
    details: "test",
  })
}