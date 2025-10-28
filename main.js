const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
	authStrategy: new LocalAuth({
        dataPath: 'sessiondata'
    }),
	puppeteer: {
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    }});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.initialize();

// Listening to all incoming messages
client.on('message_create', message => {
	console.log(message.body);
});


client.on('message_create', message => {
	if (message.body === '!ping') {
		// send back "pong" to the chat the message was sent in
		client.sendMessage(message.from, 'pong');
	}
});


