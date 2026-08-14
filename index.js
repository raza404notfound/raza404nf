const express = require('express');
const app = express();

app.get('/v1/assets/get', (req, res) => {
    // Ambil ID gambar dan opsi thumbnail dari URL
    const imageId = req.query.id;
    const isThumbnail = req.query.thumbnail || 'false';

    // Arahkan langsung ke serverApp Engine PDC Gudang yang asli
    const targetUrl = `https://pdcgudang.et.r.appspot.com/v1/assets/get?id=${imageId}&thumbnail=${isThumbnail}`;

    // Lakukan redirect (302)
    res.redirect(targetUrl);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server aktif`));
