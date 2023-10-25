let contacts = [];

function addContact(){
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;

    let contact = {
        name: name,
        phone: phone
    };

    contacts.push(contact);
    contacts.sort((a,b) => a.name.localeCompare(b.name));

    displayContacts();
}

function searchContact(){
    let search = document.getElementById("search").value.toLowerCase();

    let filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(search) ||
        contact.phone.includes(search)
        );

        displayContacts(filteredContacts);
}

function removeDuplicateContacts(){
    let uniqueContacts = [];
    let phoneSet = {};

    for(let i = 0; i < contacts.length; i++){
        let contact = contacts[i];
        if(!phoneSet[contact.phone]){
            phoneSet[contact.phone] = 1;
            uniqueContacts.push(contact);
        }
    }

    contacts = uniqueContacts;
    displayContacts();
}

function displayContacts(contactsToDisplay){
    let contactList = document.getElementById("contact-list");
    contactList.innerHTML = "";

    let contactsToShow = contactsToDisplay || contacts;

    for(let i = 0; i< contactsToShow.length; i++){
        let contact = contactsToShow[i];
        let contactItem = document.createElement("div");
        contactItem.classList.add("contact-item", "form-control");

        let contactInfo = document.createElement("div");
        contactInfo.classList.add("row", "w-100");

        let displayName = document.createElement("div");
        displayName.classList.add("col-3");
        displayName.textContent = contact.name;

        let displayBetween = document.createElement("div");
        displayBetween.classList.add("col-6");

        let displayPhone = document.createElement("div");
        displayPhone.classList.add("col-3");
        displayPhone.textContent = contact.phone;

        contactInfo.appendChild(displayName);
        contactInfo.appendChild(displayBetween);
        contactInfo.appendChild(displayPhone);

        contactItem.appendChild(contactInfo);
        contactList.appendChild(contactItem);
    }
}

function deleteContact(contact){
    let index = contacts.indexOf(contact);
    if(index !== -1){
        contacts.splice(index, 1);
        displayContacts();
    }
}
