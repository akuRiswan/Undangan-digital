window.onload = function () {
  document.getElementById("cover").scrollIntoView({ behavior: "smooth" });
};

document.getElementById("btn-opn").addEventListener("click", function (e) {
  e.preventDefault();
  document.body.style.overflow = "auto";
  document.getElementById("backsound").play();
  backsound.addEventListener("ended", function () {
    this.play(); // Memutar ulang backsound ketika musik selesai
  });
  document.getElementById("surah-arrum").scrollIntoView({ behavior: "smooth" });
  // document.getElementById("cover").style.display = "none";
});

// memunculkan navbar ketika discroll setelah melewati cover
document.addEventListener("scroll", function () {
  const surahHeight = document.getElementById("surah-arrum").offsetHeight;
  const navbar = document.getElementById("navbar");

  if (window.scrollY >= surahHeight) {
    navbar.style.display = "flex"; // Show the navbar
  } else {
    navbar.style.display = "none"; // Hide the navbar
  }
});

// event listener navbar - ketika diklik akan scroll ke halaman yang dituju
document.querySelector(".love").addEventListener("click", function () {
  document.getElementById("love").scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".event").addEventListener("click", function () {
  document.getElementById("event").scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".gallery").addEventListener("click", function () {
  document.getElementById("gallery").scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".rsvp").addEventListener("click", function () {
  document.getElementById("rsvp").scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".gift").addEventListener("click", function () {
  document.getElementById("gift").scrollIntoView({ behavior: "smooth" });
});

// background active
// Select all the navbar icons

// Mendapatkan referensi ke elemen navbar
const loveIcon = document.querySelector(".love");
const eventIcon = document.querySelector(".event");
const galleryIcon = document.querySelector(".gallery");
const rsvpIcon = document.querySelector(".rsvp");
const giftIcon = document.querySelector(".gift");

// Event listener untuk scroll
document.addEventListener("scroll", function () {
  // Mendapatkan tinggi masing-masing section
  const coverHeight = document.getElementById("cover").offsetHeight;
  const surahHeight = document.getElementById("surah-arrum").offsetHeight;
  const loveHeight = document.getElementById("love").offsetHeight;
  const eventHeight = document.getElementById("event").offsetHeight;
  const galleryHeight = document.getElementById("gallery").offsetHeight;
  const rsvpHeight = document.getElementById("rsvp").offsetHeight;
  const giftHeight = document.getElementById("gift").offsetHeight;

  // Mendapatkan posisi scroll saat ini
  const scrollPos = window.scrollY;

  // Ketika posisi scroll berada di surah-arrum atau di bawah cover, tidak ada navbar yang aktif
  if (scrollPos < coverHeight + surahHeight) {
    loveIcon.classList.remove("active");
    eventIcon.classList.remove("active");
    galleryIcon.classList.remove("active");
    rsvpIcon.classList.remove("active");
    giftIcon.classList.remove("active");
  }
  // Menambahkan kelas 'active' untuk section Love
  else if (scrollPos >= coverHeight + surahHeight && scrollPos < coverHeight + surahHeight + loveHeight) {
    loveIcon.classList.add("active");
    eventIcon.classList.remove("active");
    galleryIcon.classList.remove("active");
    rsvpIcon.classList.remove("active");
    giftIcon.classList.remove("active");
  }
  // Menambahkan kelas 'active' untuk section Event
  else if (scrollPos >= coverHeight + surahHeight + loveHeight && scrollPos < coverHeight + surahHeight + loveHeight + eventHeight) {
    loveIcon.classList.remove("active");
    eventIcon.classList.add("active");
    galleryIcon.classList.remove("active");
    rsvpIcon.classList.remove("active");
    giftIcon.classList.remove("active");
  }
  // Menambahkan kelas 'active' untuk section Gallery
  else if (
    scrollPos >= coverHeight + surahHeight + loveHeight + eventHeight &&
    scrollPos < coverHeight + surahHeight + loveHeight + eventHeight + galleryHeight
  ) {
    loveIcon.classList.remove("active");
    eventIcon.classList.remove("active");
    galleryIcon.classList.add("active");
    rsvpIcon.classList.remove("active");
    giftIcon.classList.remove("active");
  }
  // Menambahkan kelas 'active' untuk section RSVP
  else if (
    scrollPos >= coverHeight + surahHeight + loveHeight + eventHeight + galleryHeight &&
    scrollPos < coverHeight + surahHeight + loveHeight + eventHeight + galleryHeight + rsvpHeight
  ) {
    loveIcon.classList.remove("active");
    eventIcon.classList.remove("active");
    galleryIcon.classList.remove("active");
    rsvpIcon.classList.add("active");
    giftIcon.classList.remove("active");
  }
  // Menambahkan kelas 'active' untuk section Gift
  else if (
    scrollPos >= coverHeight + surahHeight + loveHeight + eventHeight + galleryHeight + rsvpHeight &&
    scrollPos < coverHeight + surahHeight + loveHeight + eventHeight + galleryHeight + rsvpHeight + giftHeight
  ) {
    loveIcon.classList.remove("active");
    eventIcon.classList.remove("active");
    galleryIcon.classList.remove("active");
    rsvpIcon.classList.remove("active");
    giftIcon.classList.add("active");
  }
});

// function icon Instagram
const igPria = "https://www.instagram.com/riswan.idk/";
const igWanita = "https://www.instagram.com/xavieraaputri/";

// Event listener untuk div pria
document.getElementById("ig-pria").addEventListener("click", function () {
  window.open(igPria, "_blank");
});

// Event listener untuk div wanita
document.getElementById("ig-wanita").addEventListener("click", function () {
  window.open(igWanita, "_blank");
});

// Button Kirim Ucapan - Agar tidak kerefresh saat diklik
document.querySelector(".submit-btn").addEventListener("click", function (event) {
  // Mencegah refresh halaman
  event.preventDefault();

  // Lakukan sesuatu di sini (misalnya mengirim data via AJAX atau mengupdate UI)
  console.log("Ucapan berhasil dikirim tanpa refresh!");
});

// Countdown
// Tetapkan tanggal target hitung mundur
const countDownDate = new Date("Oct 6, 2024 09:00:00").getTime();

// Perbarui hitung mundur setiap 1 detik
const x = setInterval(function () {
  // Ambil tanggal dan waktu saat ini
  const now = new Date().getTime();

  // Hitung selisih waktu antara sekarang dan tanggal hitung mundur
  const distance = countDownDate - now;

  // Perhitungan waktu untuk hari, jam, menit, dan detik
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Tampilkan hasil hitung mundur
  document.getElementById("cd-hari").innerHTML = days;
  document.getElementById("cd-jam").innerHTML = hours;
  document.getElementById("cd-menit").innerHTML = minutes;
  document.getElementById("cd-detik").innerHTML = seconds;

  // Jika hitung mundur selesai
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("cd-hari").innerHTML = "0";
    document.getElementById("cd-jam").innerHTML = "0";
    document.getElementById("cd-menit").innerHTML = "0";
    document.getElementById("cd-detik").innerHTML = "0";
  }
}, 1000);

// Slideshow - Tugas 2
let currentSlideIndex = 0; // Inisialisasi indeks slide saat ini
const slides = document.querySelectorAll(".content-gallery .img");

// Fungsi untuk menampilkan gambar berdasarkan indeks
function showSlide(index) {
  const popupImage = document.querySelector(".popup-image img");
  popupImage.src = slides[index].getAttribute("src"); // Tampilkan gambar sesuai indeks
}

// Popup gambar ketika diklik
document.querySelectorAll(".content-gallery .img").forEach((image, index) => {
  image.onclick = () => {
    currentSlideIndex = index; // Set indeks gambar saat ini
    document.querySelector(".popup-image").style.display = "block";
    showSlide(currentSlideIndex); // Tampilkan gambar sesuai indeks
  };
});

// Fungsi untuk menggeser slide
function moveSlide(direction) {
  currentSlideIndex += direction; // Tambahkan atau kurangi indeks
  // Looping jika mencapai batas
  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1; // Jika kurang dari 0, ke slide terakhir
  } else if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0; // Jika lebih dari total slide, kembali ke slide pertama
  }
  showSlide(currentSlideIndex); // Tampilkan slide sesuai indeks
}

// Menutup popup saat mengklik di luar gambar
document.querySelector(".popup-image").onclick = (e) => {
  if (e.target === e.currentTarget) {
    e.currentTarget.style.display = "none";
  }
};

// Event listener untuk tombol panah di keyboard
document.addEventListener("keydown", (event) => {
  if (document.querySelector(".popup-image").style.display === "block") {
    if (event.key === "ArrowRight") {
      moveSlide(1); // Geser ke kanan (slide selanjutnya)
    } else if (event.key === "ArrowLeft") {
      moveSlide(-1); // Geser ke kiri (slide sebelumnya)
    }
  }
});
