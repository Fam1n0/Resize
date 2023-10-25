function resizeImage() {
    const imageInput = document.getElementById('imageInput');
    const widthInput = document.getElementById('widthInput');
    const heightInput = document.getElementById('heightInput');
    const canvas = document.getElementById('canvas');
    
    const desiredWidth = parseInt(widthInput.value);
    const desiredHeight = parseInt(heightInput.value);

    if (imageInput.files && imageInput.files[0]) {
        let reader = new FileReader();
        reader.onload = function (event) {
            let img = new Image();
            img.onload = function () {
                canvas.width = desiredWidth;
                canvas.height = desiredHeight;
                let ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, desiredWidth, desiredHeight);
                
                // For demonstration purposes, we'll show the image as a new link
                let resizedImageURL = canvas.toDataURL("image/png");
                let link = document.createElement('a');
                link.href = resizedImageURL;
                link.download = 'resized-image.png';
                link.innerHTML = 'Download Resized Image';
                document.body.appendChild(link);
            }
            img.src = event.target.result;
        }
        reader.readAsDataURL(imageInput.files[0]);
    } else {
        alert('Please select an image.');
    }
}
