var tanya = true;
while (tanya) {
    // Menentukan pilihan player
    var p = prompt('Pilih : gajah, orang, semut');

    // menangkap pilihan komputer
    // membangkitkan bilangan random
    var comp = Math.random();

    if (comp < 0.34) {
        comp = 'gajah';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }

    // menentukan rules
    var hasil = '';

    if (p == comp) {
        hasil = 'SERI!';
    } else if (p == 'gajah') {
        // if (comp == 'orang') {
        //     hasil = 'MENANG!';
        // } else {
        //     hasil = 'KALAH!';
        // }
        hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    } else if (p == 'orang') {
        // if (comp == 'semut') {
        //     hasil = 'MENANG!';
        // } else {
        //     hasil = 'KALAH!';
        // }
        hasil = (comp == 'semut') ? 'MENANG!' : 'KALAH!';
    } else if (p == 'semut') {
        // if (comp == 'gajah') {
        //     hasil = 'MENANG!';
        // } else {
        //     hasil = 'KALAH!';
        // }
        hasil = (comp == 'gajah') ? 'MENANG!' : 'KALAH!';
    } else {
        hasil = 'Pilihan yang anda masukkan tidak sesuai!';
    }

    // tammpilkan hasilnya
    alert('Kamu memilih : ' + p + ' Dang komputer memilih : ' + comp + '\n Maka hasilnya kamu : ' + hasil);

    tanya = confirm('Lagi?');
}

alert('Terima Kasih Budah Bermain :)')