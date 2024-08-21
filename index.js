function handleSwitchingBetweenSeasonImages(){
    const changeIntervalInSeconds = 1.75;
    const imagesFileName = [
        "summer",
        "autumn",
        "winter",
    ];


    const itemContent = document.querySelector('.survive-season');
    
    
    let index = 0;
    const imagesCount = imagesFileName.length - 1;
    setInterval(()=>{
        index = index > imagesCount - 1 ? 0 : ++index;
        itemContent.querySelector('img').src = `assets/${imagesFileName[index]}.png`
    },changeIntervalInSeconds * 1000);
}
handleSwitchingBetweenSeasonImages();


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });