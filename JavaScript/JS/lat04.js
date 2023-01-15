zodiac(5, 25);
function zodiac(bln, tgl) {
  let hasil = "Salah";
  if (bln > 0 && bln < 13 && tgl > 0 && tgl < 32) {
    hasil = "Zodiac belum dibuat.";
    if (bln == 1) {
      hasil = "Capricorn";
      if (tgl > 21) {
        hasil = "Aquarius";
      }
    }
    if (bln == 2) {
      hasil = "Aquarius";
      if (tgl > 21) {
        hasil = "Pisces";
      }
    }
    if (bln == 3) {
      hasil = "Pisces";
      if (tgl > 21) {
        hasil = "Aries";
      }
    }
    if (bln == 4) {
      hasil = "Aries";
      if (tgl > 21) {
        hasil = "Taurus";
      }
    }
    if (bln == 5) {
      hasil = "Taurus";
      if (tgl > 21) {
        hasil = "Gemini";
      }
    }
    if (bln == 6) {
      hasil = "Gemini";
      if (tgl > 21) {
        hasil = "Cancer";
      }
    }
    if (bln == 7) {
      hasil = "Cancer";
      if (tgl > 21) {
        hasil = "Leo";
      }
    }
    if (bln == 8) {
      hasil = "Leo";
      if (tgl > 21) {
        hasil = "Virgo";
      }
    }
    if (bln == 9) {
      hasil = "Virgo";
      if (tgl > 21) {
        hasil = "Libra";
      }
    }
    if (bln == 10) {
      hasil = "Libra";
      if (tgl > 21) {
        hasil = "Scorpio";
      }
    }
    if (bln == 11) {
      hasil = "Scorpio";
      if (tgl > 21) {
        hasil = "Sagitarius";
      }
    }
    if (bln == 12) {
      hasil = "Sagitarius";
      if (tgl > 21) {
        hasil = "Capricorn";
      }
    }
  }
  console.log(hasil);
}

lulus(95);
function lulus(nilai) {
  let hasil = "Nilai salah";
  if (nilai >= 80 && nilai <= 100) {
    hasil = "Lulus";
  }
  if (nilai >= 0 && nilai <= 79) {
    hasil = "Tidak lulus";
  }
  console.log(hasil);
}


console.log(terbilang(220))
function terbilang(angka) {
  var bilne = [
    "",
    "satu",
    "dua",
    "tiga",
    "empat",
    "lima",
    "enam",
    "tujuh",
    "delapan",
    "sembilan",
    "sepuluh",
    "sebelas",
  ];

  if (angka < 12) {
    return bilne[angka];
  } else if (angka < 20) {
    return terbilang(angka - 10) + " belas";
  } else if (angka < 100) {
    return (
      terbilang(Math.floor(parseInt(angka) / 10)) +
      " puluh " +
      terbilang(parseInt(angka) % 10)
    );
  } else if (angka < 200) {
    return "seratus " + terbilang(parseInt(angka) - 100);
  } else if (angka < 1000) {
    return (
      terbilang(Math.floor(parseInt(angka) / 100)) +
      " ratus " +
      terbilang(parseInt(angka) % 100)
    );
  } else if (angka < 2000) {
    return "seribu " + terbilang(parseInt(angka) - 1000);
  } else if (angka < 1000000) {
    return (
      terbilang(Math.floor(parseInt(angka) / 1000)) +
      " ribu " +
      terbilang(parseInt(angka) % 1000)
    );
  } else if (angka < 1000000000) {
    return (
      terbilang(Math.floor(parseInt(angka) / 1000000)) +
      " juta " +
      terbilang(parseInt(angka) % 1000000)
    );
  } else if (angka < 1000000000000) {
    return (
      terbilang(Math.floor(parseInt(angka) / 1000000000)) +
      " milyar " +
      terbilang(parseInt(angka) % 1000000000)
    );
  } else if (angka < 1000000000000000) {
    return (
      terbilang(Math.floor(parseInt(angka) / 1000000000000)) +
      " trilyun " +
      terbilang(parseInt(angka) % 1000000000000)
    );
  }
}

prima(2);
function prima(bilangan) {
  let prima = true;
  if (bilangan === 1) {
    console.log("1 bukan bilangan prima");
  } else if (bilangan > 1) {
    for (let i = 2; i < bilangan; i++) {
      if (bilangan % i == 0) {
        prima = false;
        break;
      }
    }
    if (prima) {
      console.log(`${bilangan} adalah bilangan prima`);
    } else {
      console.log(`${bilangan} bukan bilangan prima`);
    }
  } else {
    console.log("Bilangan ini bukan bilangan prima");
  }
}
