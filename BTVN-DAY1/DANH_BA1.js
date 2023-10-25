var data = [];
function add(){
    var item_name = document.getElementById("name").value;
    var item_phone = document.getElementById("phone").value;
    console.log(item_name);

    var obj = {
        Name: item_name,
        Phone: item_phone
    }

    data.push(obj);

    remder();

    item_name = '';
    item_phone = '';
}

function remder(){
    //li = `<li></li>`
    for(let i = 0; i < data.length; i++){
        let li = ` ${data[i].Name }       ${data[i].Phone}`;
        // document.getElementById("remder").innerHTML = li;
        let rem = document.getElementById("remder");
        rem.appendChild(li);
    }
    
}