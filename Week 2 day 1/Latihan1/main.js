// penulisan js
// 2. untuk disisipkan pada HTML menggunakan tag script
// 3. disisipkan di HTML via elemen tag head dan body
// 4. Js = Case sensitive, Hitung di js, Hitung di html
        // Camel case , hitungJumlah
// 5. setiap bari JS harus ditutup dengan tanda semicolon (;)


// document.getElementById("nama").innerHTML = "nama saya john doe" ;

// Variabel JS
// 1. Peulisan nama variabel bisa mengunakan Huruf, Angka, Tanda underscore dan tanda $
// 2. Penulisan nama variabel harus diawali dengan Huruf
// 3. Case Sentive
// 4. Tidak boleh mengandung spasi
// 5. Var, Let, Const

// var nama = "John Doe" ;
// let nama = "John Doe" ;
// const phi = 22/7 ; //tidak perlu tanda kutip kalau angka

function tampilkan_kelas(){
        return "RMT 004";
    }

    document.getElementById("hasil").innerHTML = tampilkan_kelas ();
