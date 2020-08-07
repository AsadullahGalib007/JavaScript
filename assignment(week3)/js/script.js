
function upDate(previewPic){
    x = document.getElementById('image');
    x.style.backgroundImage = "url(' "+previewPic.src+" ' )";
    x.style.backgroundColor = 'gray';
    x.innerHTML = previewPic.alt;
}

function unDo(){
    x = document.getElementById('image');
    x.style.backgroundImage = "url(' ')";
    x.style.backgroundColor = "#8e68ff";
    x.innerHTML = 'Hover over an image below to display here';
}