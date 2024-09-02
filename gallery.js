function upDate(previewPic){
    let imgSource = previewPic.src;
    let imgAlt = previewPic.alt;
    
    let imageDiv = document.getElementById('image');
    
    imageDiv.style.backgroundImage = 'url(' + imgSource + ')';
    imageDiv.innerHTML = imgAlt;
}
function unDo() {

    let originalColor = "#8e68ff";
    let originalAlt = "Hover over an image below to display here.";

    let originalDiv = document.getElementById('image');

    originalDiv.style.backgroundImage = 'url(' + originalColor + ')';

    originalDiv.innerHTML = originalAlt;
}