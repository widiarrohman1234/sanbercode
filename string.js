var sentences = "Javascript" 
console.log(sentences[0]) // "J"
console.log(sentences[2]) // "v"
console.log(sentences[4]) // "v"

// String Properties 
// .length
// mengembalikan panjang atau jumlah karakter pada suatu string.

var word = "hello world, javascript"
console.log(word.length) // 23

// String Methods
// .charAt([indeks])
// Mengembalikan karakter pada indeks yang diinginkan
console.log('saya ada string'.charAt(6)); // 'd'

// .concat([string])
// Menggabungkan beberapa string dan mengembalikannya menjadi string baru.
var string1 = 'semoga';
var string2 = ' berhasil';
console.log(string1.concat(string2)); // semoga berhasil

// .indexOf([string/karakter])
// Mengembalikan indeks dari string/karakter yang dicari, yang pertama kali ditemukan, atau -1 apabila tidak ditemukan.
var textIndexOf = 'indonesia merdeka';
console.log(textIndexOf.indexOf('indonesia'));  // 0
console.log(textIndexOf.indexOf('merdeka'));     // 1
console.log(textIndexOf.indexOf('dijajah')); // -1