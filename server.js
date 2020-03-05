const express = require('express')
const app = express()
const port = process.env.port || 3000
app.set('port', port);
app.get('/', (req, res) => {
	res.send({
		text:'Hello World'
	})
})
app.listen(port, () => {
	console.log('Start server at port 3000.')
})