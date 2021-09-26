// Function sederhana tanpa return
function tampilkan() {
    console.log("halo!");
  }

tampilkan()

// Function sederhana dengan return
function munculkanAngkaDua() {
    return 2
  }
   
  var tampung = munculkanAngkaDua();
  console.log(tampung)

// Function dengan parameter
function kalikanDua(angka){
    return angka*2
}
var tampung = kalikanDua(2)
console.log(tampung)

// Pengiriman parameter lebih dari satu
function tampilkanAngka(angkaPertama, angkaKedua){
    return angkaPertama+angkaKedua
}
var tampung= tampilkanAngka(2,5)
console.log(tampung)

// Inisialisasi parameter dengan nilai default
function tampilkanAngka(angka = 1) {
  return angka
}
 
console.log(tampilkanAngka(5)) // 5, sesuai dengan nilai parameter yang dikirim
console.log(tampilkanAngka()) // 1, karena default dari parameter adalah 1