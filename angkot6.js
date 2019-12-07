var beroperasi = 6;
var jmlAngkot = 10;


// for (var angkot = 1; angkot <= jmlAngkot; angkot++) {
//     if (angkot === 5 || angkot === 8 || angkot === 10) {
//         console.log('Angkot No. ' + angkot + ' Sedang lembur gayn');
//     } else if (angkot <= beroperasi) {
//         console.log('Angkot No. ' + angkot + ' Sedang beroperasi dengan baik');
//     } else {
//         console.log('Angkot No. ' + angkot + ' Sedang tidak beroperasi');
//     }
// }


for (var angkot = 1; angkot <= jmlAngkot; angkot++) {

    if (angkot <= 6 && angkot !== 5) {
        console.log('Angkot No. ' + angkot + ' sedang beroperasi dengan baik');
    } else if (angkot === 8 || angkot === 10 || angkot === 5) {
        console.log('Angkot No. ' + angkot + ' Sedang lembur gayn');
    } else {
        console.log('Angkot No. ' + angkot + ' sedang tidak beroperasi');
    }

}