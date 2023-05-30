//(1) definisi module/middleware
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')

//(6) middlewer body-parser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// (7) import routes
const mahasiswaRoutes = require('./routes/mahasiswa')
const dosenRoutes = require('./routes/dosen')

// (8) app.use (mendaftarkan middleware baru ke Express)
app.use('/mahasiswa', mahasiswaRoutes)
app.use('/dosen', dosenRoutes)


// (3) koneksi ke database mongodb
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
const db = mongoose.connection
//handel error
db.on('error', console.error.bind(console,
    'Koneksi ke mongooDB error'))
    
// handle success : user/password mongoodb benar
db.once('open', () => {
     console.log('Terhubung ke Database MongoDB')
 })
    
//(2) listen port
app.listen(process.env.PORT, () => {
     console.log(`Server berjalan pada port ${process.env.PORT}`);
})