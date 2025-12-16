const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = contactForm.elements["name"].value.trim();
    const phone = contactForm.elements["phone"].value.trim();
    const message = contactForm.elements["message"].value.trim();

    if (!name || !phone || !message) {
      alert("Please fill all fields");
      return;
    }

    const whatsappMessage =
`New Enquiry from Website

Name: ${name}
Phone: ${phone}
Message: ${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    const whatsappNumber = "919026405964";

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");

    contactForm.reset();
  });
}
