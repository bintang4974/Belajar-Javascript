var beroperasi = 6;
var jmlAngkot = 10;

// for (var angkot = 1; angkot <= jmlAngkot; angkot++) {

//     if (angkot <= 6) {
//         console.log('Angkot No. ' + angkot + ' Beroperasi dengan baik');
//     } else if (angkot == 8) {
//         console.log('Angkot No. ' + angkot + ' Sedang lembur Gayn!');
//     } else {
//         console.log('Angkot No. ' + angkot + ' Tidak beroperasi');
//     }

// }

for (var angkot = 1; angkot <= jmlAngkot; angkot++) {
    if (angkot <= 6) {
        console.log('Angkot No. ' + angkot + ' sedang beroperasi dengan baik');
    } else if (angkot == 8) {
        console.log('Angkot No. ' + angkot + ' Sedang lembur gayn');
    } else {
        console.log('Angkot No. ' + angkot + ' sedang tidak beroperasi');
    }
}
