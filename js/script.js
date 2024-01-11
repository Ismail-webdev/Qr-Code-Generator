const form = document.getElementById('generate-form');
const qr = document.getElementById('qr-code');

const onGenerateSubmit = (e) => {
    e.preventDefault();

    clearUi();

    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;
    // console.log(url, size);
    if (url === '') {
        alert('Please Enter URL');
    }
    else {
        generateQrCode(url, size);
        setTimeout(() => {
            const saveUrl = qr.querySelector('img').src;
            saveQrCode(saveUrl);
        }, 50);
    }
}
const generateQrCode = (url, size) => {
    const qrcode = new QRCode('qr-code', {
        text: url,
        width: size,
        height: size,
    });
};
const clearUi = () => {
    qr.innerHTML = '';
    const saveLink = document.getElementById('save-link');
    if (saveLink)
        saveLink.remove();
}
form.addEventListener('submit', onGenerateSubmit);

correct download qrcode
const saveQrCode = (saveUrl) => {
    const link = document.createElement('a');
    link.id = 'save-link';
    link.classList = 'SaveQr';
    link.href = saveUrl;
    link.download = 'qr-code.png';
    link.innerHTML = 'Save Image';
    document.getElementById('generated-Qr').appendChild(link);
}
