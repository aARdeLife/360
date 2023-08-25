
function uploadImage360() {
    const input = document.getElementById('imageInput');
    const file = input.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const image360 = document.getElementById('image360');
            image360.setAttribute('src', e.target.result);
        };

        reader.readAsDataURL(file);
    }
}
