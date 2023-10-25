//mảng lưu danh bạ
let contacts =[];

//function thêm vào danh bạ
function addContact(){
    let nameInput  = document.getElementById('name').value;
    let phoneInput = document.getElementById('phone').value;

    //kiểm tra tên và sđt đã được nhập đầy đủ hay chưa
    if(nameInput.value && phoneInput.value){
        let contact = {
            Name: nameInput,
            Phone: phoneInput
        };

        contacts.push(contact);
        refreshContactsList();

        //Reset giá trị nhập vào
        nameInput.value = '';
        phoneInput.value = '';
    }
}

//function tìm kiếm danh bạ
function searchContacts(){
    let searchInput = document.getElementById('search-input');
    let searchTerm = searchInput.value.toLowerCase();

    //tìm kiếm theo tên hoặc số điện thoại
    let searchResult = contacts.filter(
        function (contact){
            return contact.name.toLowerCase().includes(searchTerm) || contact.phone.includes(searchTerm);
        });

    refreshContactsList(searchResult);
}

//function hiển thị danh bạ
function refreshContactsList(contactsToDisplay){
    let contactsList = document.getElementById('contacts-list');
    contactsList.innerHTML = '';

    let sortedContacts = contactsToDisplay || contacts;

    //sắp xếp danh bạ theo tên
    sortedContacts.sort(
        function(a,b){
            return a.name.localeCompare(b.name);
        });

    //tạo các phần tử danh bạ
    sortedContacts.forEach(
        function (contact){
            let li = document.getElementById('li');
            li.textContent = 'tên: ' + contact.name + ', số điện thoại: ' + contact.phone;

            contactsList.appendChild(li);
        
    });
}

//sự kiện submit form
document.getElementById('contact-form').addEventListener('submit', function(event){
    event.preventDefault();   //ngăn chặn refresh trang khi submit form
    addContact();
});

//gọi hàm hiển thị danh bạ khi trang web được tải
refreshContactsList();