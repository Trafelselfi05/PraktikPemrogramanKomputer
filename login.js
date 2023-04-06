const formLogin = document.getElementById("form-login");
const formPenilaian = document.getElementById("form-penilaian");

formLogin.addEventListener("submit", function(event) {
  event.preventDefault(); // Mencegah form log in submit secara otomatis
  
  // Mendapatkan nilai dari input username dan password
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  
  // Cek apakah username dan password benar
  if (username === "admin" && password === "1234") {
    formLogin.style.display = "none"; // Sembunyikan form log in
    formPenilaian.style.display = "block"; // Tampilkan form penilaian
  } else {
    alert("Username atau password salah!"); // Tampilkan pesan kesalahan
  }
});

formPenilaian.addEventListener("submit"), function(event) {
  event.preventDefault(); // Mencegah form penilaian submit secara otomatis
}