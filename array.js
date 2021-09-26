// property .length
var hobbies = ["coding", "bersepeda", "mengaji", "belajar"] 
console.log(hobbies) // ["coding", "bersepeda", "mengaji", "belajar"] 
console.log(hobbies.length) // 4 
 
console.log(hobbies[0]) // coding
console.log(hobbies[2]) // mengaji
// Mengakses elemen terakhir dari array
console.log(hobbies[hobbies.length -1]) // belajar

/*
Metode Array 
Berikut ini adalah beberapa metode atau built-in functions yang dimiliki oleh tipe data array:
shift: menghapus 1 nilai dari array index paling depan (index 0)
join: menggabungkan seluruh element array menjadi sebuah string dan mengambil parameter sebagai simbol penyambung antar elemen
sort: mengurutkan elemen di dalam array sesuai alphabet
slice: mengambil beberapa lapis data
splice: mengubah nilai array dengan menghapus dan/atau menambah nilai baru ke array
split: memecah string dan mengembalikan array sesuai dengan separator / pemisah yang didefinisikan
*/

// .push() method
// menambah 1 nilai ke array ke index paling belakang
var feeling = ["dag", "dig"]
feeling.push("dug") // menambahkan nilai "dug" ke index paling belakang
console.log(feeling)

var pushMethod = [0, 1, 2]
pushMethod.push(3)
console.log(pushMethod) // [0, 1, 2, 3]
// Bisa juga memasukkan lebih dari satu nilai menggunakan metode push
pushMethod.push(4, 5)
console.log(pushMethod) // [0, 1, 2, 3, 4, 5] 

// .pop() method
// Pop adalah kebalikan dari push yaitu menghapus nilai elemen paling terakhir dari sebuah array.
var popMethod = ["dag", "dig"]
popMethod.pop() // menghapus nilai pada elemen terakhir array
console.log(popMethod)

// .unshift() method
// Unshift yaitu menambahkan nilai pada index ke-0 sehingga elemen-elemen sebelumnya bergeser.
var numbers = [0, 1, 2, 3]
numbers.unshift(-1) 
console.log(numbers) // [-1, 0, 1, 2, 3]