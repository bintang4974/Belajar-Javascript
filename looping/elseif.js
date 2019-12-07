var angka = prompt('Masukkan Angka :');

if (angka % 2 == 0) {
    alert(angka + ' Adalah bilangan Genap');
} else if (angka % 2 == 1) {
    alert(angka + ' Adalah bilangan ganjil');
} else {
    alert('Yang anda masukkan bukan angka!');
}