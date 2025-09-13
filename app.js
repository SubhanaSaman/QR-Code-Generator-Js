function generateQR(){

    const input = document.getElementById('text').value ;
    if(!input) return alert ("Please enter text or URl")

    const QrImage = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(input)}` 

document.getElementById('QrBox').innerHTML =`<img src = "${QrImage}" alt = "QR Code">`


}
