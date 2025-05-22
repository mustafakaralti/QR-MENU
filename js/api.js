// Api'dan menu verilerini alacak bir fonksiyon

const fetchMenu = async () => {
    // Api'a istek at
    const response = await fetch("../db.json");
  
    // Api'dan gelen veriyi json formatından js nesnesine çevir
    const data = await response.json();
  
    // Elde edilen data içerisindeki menu'yü fonksiyon çağırıldığında return et
    return data.menu;
  };
  
  export default fetchMenu;