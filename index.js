// Intersection Observer to handle the scaling effect
const items = document.querySelectorAll('.content-item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}, {
    threshold: 0.5
});

items.forEach(item => {
    observer.observe(item);
});



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
        index = index >= imagesCount - 1 ? 0 : ++index;
        itemContent.querySelector('img').src = `assets/${imagesFileName[index]}.png`
    },changeIntervalInSeconds * 1000);
}
handleSwitchingBetweenSeasonImages();