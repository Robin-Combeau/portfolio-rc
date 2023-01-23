let contact_button_click = 0;
const contact_button = document.getElementById("contact_button");
const contact_block = document.getElementById("contact_informations");
const copy_message = document.getElementById("copy_to_clipboard_message");

function show_contact() {
    if (contact_button_click == 0) {    
        contact_button.style.color = '#707070';
        contact_block.style.visibility = 'visible';
        contact_block.style.opacity = '1';
        contact_button_click = 1;
    }
    else {
        contact_button.style.color = '#BBBBBB';
        contact_block.style.opacity = '0';
        setTimeout(() => {
            contact_block.style.visibility = 'hidden';
        }, 500)
        contact_button_click = 0;
    }
}

function copy_contact() {
    navigator.clipboard.writeText(email_adress.innerHTML);
    copy_message.style.visibility = 'visible';
    copy_message.style.opacity = '1';
    setTimeout(() => {
        copy_message.style.opacity = '0';
        setTimeout(() => {
            copy_message.style.opacity = '0';
            copy_message.style.visibility = 'hidden';
        }, 200)
    }, 5000)
}