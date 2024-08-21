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