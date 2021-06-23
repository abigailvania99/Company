var index = 1; //inisialisasi index pertama itu 1
showSlides(index); //memanggil function untuk menampilkan slide ke index (slide tertentu)

function moveSlide(n) { //moveSlide untuk button prev dan next
    index = index+n
  showSlides(index);
}

function currentSlide(n) { //currentSlide untuk dots
    index = n;
  showSlides(index);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("theSlides"); 
  var dots = document.getElementsByClassName("dot");
  var totalSlide = slides.length; //jumlah image slide yang ada dengan class name theSlides
  var totalDots = dots.length; //jumlah dot yang ada dengan class name dot

  if (n > totalSlide) { //kalau n lebih dari 1 maka indexnya kembali ke 1 (gambar awal)
      index = 1
    }    
  if (n < 1) { //kalau n kurang dari 1 maka indexnya kembali total image slide (gambar terakhir)
      index = totalSlide
    }

  var i=0;
  while(i<totalSlide){ //menampilkan gambar
    slides[i].style.display = "none";
    i++;
  }

  i=0;
  while(i<totalDots){ //menampilkan dot
    dots[i].className = dots[i].className.replace(" active", "");
    i++;
  }

  slides[index-1].style.display = "block"; //menampilkan gambar dari gambar pertama 
  dots[index-1].className += " active";//menampilkan dots dengan active yang pertama
}