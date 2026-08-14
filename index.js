const express = require('express');
const app = express();

// Endpoint API: /v1/assets/get?id=XXX&thumbnail=false
app.get('/v1/assets/get', (req, res) => {
    const imageId = req.query.id;
    const isThumbnail = req.query.thumbnail;

    // Izinkan akses dari mana saja (CORS)
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Kirim respon sementara untuk tes
    res.send(`Berhasil dipanggil! ID Gambar: ${imageId}`);
});

// Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server aktif di port ${PORT}`);
});
