// (4) Buat Schema Mahasiswa
const mongoose = require('mongoose')

const DosenSchema = mongoose.Schema({
    // Buat Schema data
    nidn: {
        type: String,
        require: true
    },
    nama: {
        type: String,
        required: true
    },
    jenis_kelamin:{
        type: String,
        required: true
    },
    alamat: {
        type: String,
        required: true
    },
    umur: {
        type: Number, 
        required: false,
        default: null
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Dosen', DosenSchema)