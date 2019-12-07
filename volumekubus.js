// function jumlahvolumekubus(a, b) {
//     var total;
//     var volumeA;
//     var volumeB;

//     volumeA = a * a * a;
//     volumeB = b * b * b;
//     total = volumeA + volumeB;

//     return total;
// }

// console.log(jumlahvolumekubus(8, 3));


// function tambah(a, b) {
//     return a + b;
// }

// function kali(a, b) {
//     return a * b;
// }

// var hasil = kali(tambah(1, 2), tambah(3, 4));
// console.log(hasil);


function tambah() {
    var hasil = 0;

    for (var i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }
    return hasil;
}

var coba = tambah(1, 2, 3, 4, 5);
console.log(coba);