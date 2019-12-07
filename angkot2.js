var beroperasi = 8;
var jmlAngkot = 10;
var angkot = 1;

while (angkot <= beroperasi) {
    console.log('Angkot No. ' + angkot + 'beroperasi dengan baik');
    angkot++;
}
for (angkot = beroperasi + 1; angkot <= jmlAngkot; angkot++) {
    console.log('Angkot No. ' + angkot + 'sedang tidak beroperasi');
}