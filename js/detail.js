// Çok sayfalı uygulamalarda profile,detail,... gibi sayfalar bir çok eleman için dinamik şekilde renderlanır.Bunu ise url'e geçilen parametreye göre yaparız.

import fetchMenu from "./api.js";
import { renderDetailPage, uiElements } from "./ui.js";

// Javascript'de URLSearchParams classı sayesinde url'deki arama parametrelerine erişip kullanabiliriz.

// URLSearchParams classını kullanarak url'deki arama parametrelerini al
const params = new URLSearchParams(window.location.search);

// Alınan parametreler içerisinden id parametresini al ve bu id parametresinin karşılığını number'a çevir
const id = +params.get("id");

document.addEventListener("DOMContentLoaded", async () => {
  // Api'dan menü elemanlarını al
  const data = await fetchMenu();

  // Detay sayfasında renderlanacak ürünü bul
  const detailProduct = data.find((item) => item.id === id);

  // Bulunan ürün verisine göre detay sayfasını renderla
  renderDetailPage(detailProduct, uiElements.wrapper);
});