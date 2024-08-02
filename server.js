require('dotenv').config()

require('./config/database')

const app = require('./app-server')

const PORT = 8003

app.listen(PORT, () => {
	console.log(`App is listening on ${PORT}.`)
})