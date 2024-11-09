function sendToWhatsApp() {
    // Get form field values
    const name = document.getElementById("name").value;
    const mobile = document.getElementById("mobile").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;
    const message = document.getElementById("message").value;
    

    // Format the WhatsApp message
    const whatsappMessage = `Hello, here are the details:\n\nName: ${name}\nMobile: ${mobile}\nEmail:${email}\nAddress:${address}\nCity:${city}\nState:${state}\nCountry:${country}\nMessage: ${message}`;
    
    // Encode the message and create the WhatsApp URL
    const whatsappURL = `https://wa.me/7505195491?text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");
  }