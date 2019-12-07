var item = prompt('Masukkan nama makanan/minuman : \n (cth : daging, susu, hamburger, softdrink)');

switch (item) {
    case 'daging':
        alert('Makanan/minuman SEHAT!');
        break;
    case 'susu':
        alert('Makanan/minuman SEHAT!');
        break;
    case 'hamburger':
        alert('Makanan/minuman TIDAK SEHAT!');
        break;
    case 'softdrink':
        alert('Makanan/minuman TIDAK SEHAT!');
        break;
    default:
        alert('Makanan/minuman yang anda masukkan salah!');
        break;
}