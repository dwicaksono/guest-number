---
---

# Tebak_angka_react_native

Halo semua, ini adalah simple Apps dengan menggunakan [react native](https://reactnative.dev/) dengan menggunkan [expo](https://docs.expo.io/). Repo ini merupakan hasil dari pembelajaran online saya.

Tebak Angka game sederhana yang dimana user memasukan angka antara 1-99 dan setelah itu akan ada angka random dan kita akan menentukan apakah angka yang kita input pertama kali lebih besar atau lebih kecil dari angka acak yang di tampilkan jika lebih besar pilih (+) jika lebih kecil pilih (-). Game akan berakhir jika angka pilihan kita sama dengan angka acak atau hasil (-) atau (+) = 0, ok sudahlah ya jangan pikirkan Algo sederhananya fokus dari pembelajaran di repo ini bukan disitu.

Tujuan dari Apps mobile sederhana ini merupakan,

1. mampu menggunakan dan membuat component yang bisa di pakai barkali-kali setiap di butuhkan component tersebut. jadi ga bikin component berulang-ulang, pada repo ini contohnya tombol(mainButton), color (primary),card component dengan style drop shadow.
2. Memahami Fungsi dari bawaan react-native FlatList, View, Text, TextInput dll
3. Memahami Styling pada component baik menggunakan Stylesheet.create({}), atau memanggil constant file, maupun line style.
4. memahami alur kerja props data di setiap component.

berikut hasil tampilan dari Apps mobile "CUPU" ini.

![](https://i.imgur.com/gbUw8Uo.png)

Summary :

untuk membuat component yang efesien menurut saya tentukan terlebih dahulu component apa yang sekiranya terpakai berkali - kali dan seleksi style apa yang akan berulang terpakai pada component tersebut. Contoh tombol disni saya selalu menggunakan warna yang sama dengan padding yang sama yang membedakan hanya ukuran font nya saja.,

Atau component card yang selalu ada borderRadius dan shadow jadi yang jadi dasar component card adalah dropshadownya dan dan radiusnya untuk ukurannya bisa di tambahkan lagi di setiap component ini berada, tentu saja dengan kita menyediakan props style di component dasarnya.

untuk penggunaan scrollview atau FlatList di saran menggunakan FlatList detainya bisa baca di documentasi react native ya hehehe...

### Sekian catatan repo dari saya yang gunanya untuk mengingatkan saya dan melatih diri saya sendiri biar ga lupa, jika ada teman-teman yang terbantu dengan penjelasan ini Allhamdulillah. jika ada yang kurang ( Jelas banyak kurangnya... ) atau ada yang salah mohon di bantu pencerahannya. Sekian salam...
