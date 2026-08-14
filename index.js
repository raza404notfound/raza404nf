const express = require('express');
const app = express();

app.get('/v1/assets/get', (req, res) => {
    // 1. Ambil ID dari link (misal: d9ca31b7de144ad792b8ee8ba5788f96)
    const imageId = req.query.id;

    // 2. Arahkan/Redirect ke URL server penyimpanan gambar PDC yang asli
    // (Sesuaikan URL domain tempat web PDC menyimpan gambarnya)
    const pdcImageStorageUrl = `https://warehouse.onlypdc.com/uploads/${imageId}.jpg`;

    // 3. Tampilkan/Alihkan langsung ke gambarnya
    res.redirect(pdcImageStorageUrl);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server aktif`));
