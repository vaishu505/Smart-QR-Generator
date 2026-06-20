const qrContainer = document.getElementById("qrcode");

function generateQR(){

    qrContainer.innerHTML = "";

    const text = document
        .getElementById("qrText")
        .value
        .trim();

    const size = document
        .getElementById("qrSize")
        .value;

    if(text === ""){
        alert("Please enter text or URL");
        return;
    }

    new QRCode(qrContainer,{
        text:text,
        width:Number(size),
        height:Number(size)
    });
}

function clearQR(){

    document.getElementById("qrText").value="";

    qrContainer.innerHTML="";
}

function downloadQR(){

    const img = qrContainer.querySelector("img");

    if(!img){
        alert("Generate a QR first.");
        return;
    }

    const link = document.createElement("a");

    link.href = img.src;

    link.download = "QRCode.png";

    link.click();
}

document
.getElementById("themeBtn")
.addEventListener("click",()=>{

    document.body.classList.toggle("dark");
});

document
.getElementById("qrText")
.addEventListener("keypress",(e)=>{

    if(e.key==="Enter"){
        generateQR();
    }
});