function setCopyright() {
    const copyright = document.getElementById('copyright');
    copyright.innerHTML = `${new Date().getFullYear()} &copy; All Rights Reserved. Desarrollado por: <a href="#">Nigth Devs</a>`;
}

setCopyright();

const form_contact = document.getElementById('form_contact');

form_contact.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const message = document.getElementsByName('message')[0].value;
    const obj = {
        email,
        message
    };
    alert("Mensaje enviado");
    form_contact.reset();
});
