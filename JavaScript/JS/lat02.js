// document.querySelector("#paragraf").innerHTML="Saya belajar JavaScript"

// document.querySelector("#content").innerHTML ="<h1> ganti isi </h1>"

let tanggal = 25;
let bulan = 5;
let hasil = "Salah";
if (tanggal > 0 && tanggal < 32 && bulan > 0 && bulan < 13) {
  hasil = "zodiac belum dibuat";
  if (bulan == 1) {
    hasil = "Capricorn";
    if (tanggal > 22) {
      hasil = "Aquarius";
    }
  }
  if (bulan == 2) {
    hasil = "Aquarius";
    if (tanggal > 22) {
      hasil = "Pisces";
    }
  }
  if (bulan == 3) {
    hasil = "Pisces";
    if (tanggal > 22) {
      hasil = "Aries";
    }
  }
  if (bulan == 4) {
    hasil = "Aries";
    if (tanggal > 22) {
      hasil = "Taurus";
    }
  }
  if (bulan == 5) {
    hasil = "Taurus";
    if (tanggal > 22) {
      hasil = "Gemini";
    }
  }
  if (bulan == 6) {
    hasil = "Gemini";
    if (tanggal > 22) {
      hasil = "Cancer";
    }
  }
  if (bulan == 7) {
    hasil = "Cancer";
    if (tanggal > 22) {
      hasil = "Leo";
      }
  }
  if (bulan == 8) {
    hasil = "Leo";
    if (tanggal > 22) {
      hasil = "Virgo";
    }
  }
  if (bulan == 9) {
    hasil = "Virgo";
    if (tanggal > 22) {
      hasil = "Libra";
    }
  }
  if (bulan == 10) {
    hasil = "Libra";
    if (tanggal > 22) {
      hasil = "Scorpio";
    }
  }
  if (bulan == 11) {
    hasil = "Scorpio";
    if (tanggal > 22) {
      hasil = "Sagitarus";
    }
  }
  if (bulan == 12) {
    hasil = "Sagitarius";
    if (tanggal > 22) {
      hasil = "Capricorn";
    }
  }
}
console.log(hasil);
// document.querySelector("#paragraf").innerHTML = "hasil";
