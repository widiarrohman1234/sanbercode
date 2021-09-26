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
join: menggabungkan seluruh element array menjadi sebuah string dan mengambil parameter sebagai simbol penyambung antar elemen
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
var unshiftMethod = [0, 1, 2, 3]
unshiftMethod.unshift(-1) 
console.log(unshiftMethod) // [-1, 0, 1, 2, 3]

// .shift() method
// Shift kebalikan dari unshift yaitu menghapus nilai pada elemen terdepan dari sebuah array. metode Shift tidak menerima parameter apapun.
var shiftMethod = [ 0, 1, 2, 3]
shiftMethod.shift()
console.log(shiftMethod) // [1, 2, 3] 

// .sort() method
// Sort adalah metode untuk mengurutkan nilai pada array.
var sortMethod = ["muhammad", "widi", "arrohman"] 
sortMethod.sort()
console.log(sortMethod) // [ 'arrohman', 'muhammad', 'widi' ]

// Mengurutkan secara Ascending
var numbersAsc = [12, 1, 3]
numbersAsc.sort(function (value1, value2) { return value1 - value2 } ) ; 
console.log(numbersAsc) // [1, 3, 12]

// Mengurutkan secara Descending
var numbersDesc = [12, 1, 3]
numbersDesc.sort(function (value1, value2) { return value2 - value1 } ) ;
console.log(numbersDesc) // [12, 3, 1] 

// .slice() method
// slice adalah metode untuk mengambil irisan dari sebuah array. 
var sliceMethod = [0, 1, 2, 3, 4, 5]
var irisan1 = sliceMethod.slice(1,3) 
console.log(irisan1) //[1, 2]
var irisan2 = sliceMethod.slice(0,2)
console.log(irisan2) //[0, 1] 
var irisan3 = sliceMethod.slice(1,5)
console.log(irisan3) //[ 1, 2, 3, 4 ]
var irisan4 = sliceMethod.slice(1)
console.log(irisan4) //[ 1, 2, 3, 4, 5]
var irisan5 = sliceMethod.slice()
console.log(irisan5) //[ 1, 2, 3, 4, 5]

// .splice() methode
/* Splice yaitu metode untuk menghapus dan/atau menambahkan nilai elemen pada array. Metode splice bisa menerima parameter sebanyak dua atau lebih parameter. Jika ingin menggunakan splice untuk menghapus elemen pada index tertentu maka digunakan 2 paramater. Jika ingin menggunakan splice untuk menambahkan elemen pada index tertentu maka digunakan tiga parameter.
syntax
array.splice([IndexMulai], [JumlahNilaiYangDihapus], [NilaiYangDitambahkan1], [NilaiYangDitambahkan2], ...);
*/

var spliceMethod = [ "banana", "orange", "grape"]
spliceMethod.splice(1, 0, "watermelon") 
console.log(spliceMethod) // [ "banana", "watermelon", "orange", "grape"]
/*Contoh di atas berarti kita mulai mengubah array spliceMethod dari indeks no 1, dan melakukan penghapusan nilai sebanyak 0 (yang berarti tidak menghapus apapun), dan menambahkan nilai “watermelon” pada indeks tersebut.*/

var spliceMethod = [ "banana", "orange", "grape"]
spliceMethod.splice(0, 2)
console.log(spliceMethod) // ["grape"]
/*Contoh di atas berarti kita mulai mengubah array fruits dari indeks ke-0 dan melakukan penghapusan data sebanyak 2 elemen.*/

// .split() method
/*Metode split yaitu memecah sebuah string sehingga menjadi sebuah array. Split menerima sebuah parameter berupa karakter yang menjadi separator untuk memecah string. */
var splitMethod = "name:Widi,Arrohman" 
var resultSplitMethod = splitMethod.split(":")
console.log(resultSplitMethod) // [ 'name', 'Widi,Arrohman' ]

// .join() method
/* Metode join yaitu kebalikan dari split yaitu mengubah sebuah array menjadi string dengan cara menggabungkan (join) seluruh elemen array menjadi satu dengan sebuah karakter pemisah yang dikirim melalui parameter. contohnya sebagai berikut: */

var joinMethod = ["nama", "awal", "saya", "adalah", "widi", "arrohman"] 
var resultJoinMethod = joinMethod.join("-")
console.log(resultJoinMethod) // "nama-awal-saya-adalah-widi-arrohman"

// Multidimensional Array
var arrayMulti = [ 
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
// Maka sebagai gambaran, indeks dari array tersebut adalah 
/*
    [
        [(0,0), (0,1), (0,2)],
        [(1,0), (1,1), (1,2)],
        [(2,0), (2,1), (2,2)]
    ] 
*/
console.log(arrayMulti[0][0]) // 1 
console.log(arrayMulti[1][0]) // 4
console.log(arrayMulti[2][1]) // 8