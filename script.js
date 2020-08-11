let objectMenu = [
    {
        id: 1,
        gambar: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/5/10/0/FNM_060117-Shake-Shack-Style-Burgers-Recipe_s4x3.jpg.rend.hgtvcom.826.620.suffix/1494459385949.jpeg",
        nama_menu: "Burger Biasa",
        deskripsi: "ini adalah burger biasa dengan ukuran normal",
        harga: 10000,
    },
    {
        id: 2,
        gambar: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/5/10/0/FNM_060117-Shake-Shack-Style-Burgers-Recipe_s4x3.jpg.rend.hgtvcom.826.620.suffix/1494459385949.jpeg",
        nama_menu: "Burger Biasa Kecil",
        deskripsi: "ini adalah burger biasa dengan ukuran kecil",
        harga: 8000,
    },
    {
        id: 1,
        gambar: "https://i.ytimg.com/vi/qVdXlldPdGA/hqdefault.jpg",
        nama_menu: "Burger Besar",
        deskripsi: "ini adalah burger dengan ukuran besar",
        harga: 15000,
    },
    {
        id: 1,
        gambar: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/5/10/0/FNM_060117-Shake-Shack-Style-Burgers-Recipe_s4x3.jpg.rend.hgtvcom.826.620.suffix/1494459385949.jpeg",
        nama_menu: "Burger Hot",
        deskripsi: "ini adalah burger dengan citarasa pedas",
        harga: 20000,
    },
    {
        id: 1,
        gambar: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/5/10/0/FNM_060117-Shake-Shack-Style-Burgers-Recipe_s4x3.jpg.rend.hgtvcom.826.620.suffix/1494459385949.jpeg",
        nama_menu: "burger Biasa",
        deskripsi: "ini adalah burger biasa",
        harga: 10000,
    },
    {
        id: 1,
        gambar: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/5/10/0/FNM_060117-Shake-Shack-Style-Burgers-Recipe_s4x3.jpg.rend.hgtvcom.826.620.suffix/1494459385949.jpeg",
        nama_menu: "burger Biasa",
        deskripsi: "ini adalah burger biasa",
        harga: 10000,
    },
    {
        id: 1,
        gambar: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/5/10/0/FNM_060117-Shake-Shack-Style-Burgers-Recipe_s4x3.jpg.rend.hgtvcom.826.620.suffix/1494459385949.jpeg",
        nama_menu: "burger Biasa",
        deskripsi: "ini adalah burger biasa",
        harga: 10000,
    },
    {
        id: 1,
        gambar: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/5/10/0/FNM_060117-Shake-Shack-Style-Burgers-Recipe_s4x3.jpg.rend.hgtvcom.826.620.suffix/1494459385949.jpeg",
        nama_menu: "burger Biasa",
        deskripsi: "ini adalah burger biasa",
        harga: 10000,
    },
    {
        id: 1,
        gambar: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/5/10/0/FNM_060117-Shake-Shack-Style-Burgers-Recipe_s4x3.jpg.rend.hgtvcom.826.620.suffix/1494459385949.jpeg",
        nama_menu: "burger Biasa",
        deskripsi: "ini adalah burger biasa",
        harga: 10000,
    },
    {
        id: 1,
        gambar: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/5/10/0/FNM_060117-Shake-Shack-Style-Burgers-Recipe_s4x3.jpg.rend.hgtvcom.826.620.suffix/1494459385949.jpeg",
        nama_menu: "burger Biasa",
        deskripsi: "ini adalah burger biasa",
        harga: 10000,
    },
];

const menu = document.querySelector(".container");

for(let data of objectMenu) {
    menu.innerHTML += `<div class="box-makanan">
                            <img src="${data.gambar}">
                            <h5>${data.nama_menu}</h5>
                            <p>${data.deskripsi}<br>Rp${data.harga}</p>
                            <a href="#">Pesan</a>
                        </div>`
    }