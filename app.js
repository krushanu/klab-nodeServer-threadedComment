const express = require('express');
const bodyParser = require('body-parser');
var cache = require('memory-cache');
const { blogBody } = require('./util/blog');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

cache.put('chchedComments', blogBody());

app.get('/api/hello', (req, res) => {
	const bBody = cache.get('chchedComments');
	res.json({ express: 'Hello From Express', body: bBody });
});

app.post('/api/world', (req, res) => {
	console.log(req.body);
	res.send(
		`I received your POST request. This is what you sent me: ${req.body.post}`
	);
});

app.get('/api/reset', (req, res) => {
	const resetBody = cache.get('chchedComments');
	cache.put('chchedComments', resetBody);
	console.log(req.body);
	res.send(`Body is reset successful !!`);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
