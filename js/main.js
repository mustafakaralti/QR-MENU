import fetchMenu from "./api.js";
import { renderCard, uiElements } from "./ui.js";

// Sayfa yüklendiğinde
document.addEventListener("DOMContentLoaded", async () => {
  // Api'dan menu verisini al
  const menuData = await fetchMenu();

  // Alınan menu verisine göre arayüzü renderla
  renderCard(menuData);

  // UI Elements içerisindeki inputlara bir olay izleyicisi ekle.Inputlar bir nodeList olduğundan önce bu nodeList içerisindeki elemanlara teker teker erişip bu erişilen elemanlara  olay izleyicisi eklememiz gerekir.
  uiElements.inputs.forEach((input) => {
    // Herbir input'un değişimini izle
    input.addEventListener("change", () => {
      // Seçili input'un id'sine eriş
      const selectedCategory = input.id;

      // ! Eğer selectedCategory all ise tüm ürünleri renderla değilse seçili kategoriye sahip elemanları renderla
      if (selectedCategory === "all") {
        renderCard(menuData);
      } else {
        // menuData içerisinden selectedCategory'e sahip olan menu elemanlarını filtrele
        const filtredMenuItems = menuData.filter(
          (item) => item.category == selectedCategory
        );

        // Filtrelenen menu elemanlarına göre arayüzü renderla
        renderCard(filtredMenuItems);
      }
    });
  });
});