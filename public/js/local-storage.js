$(document).ready(function () {
    const storage = JSON.parse(localStorage.getItem('UNSENT_EMAIL')) ?? [];
    let emailItemsHtml = ''; 
    storage.forEach((item) => {
        emailItemsHtml += `<div class="email-item list-group-item" data-email-id="${item.id}">
            <div class="row">
                <div class="col">ID: ${item.id}</div>
                <div class="col">Komu: ${item.to}</div>
                <div class="col">CC: ${item.cc}</div>
                <div class="col">Předmět: ${item.subject}</div>
                <div class="col">Zpráva: ${item.body}</div>
            </div>
        </div>`;
    });
    $("#emailList").append(emailItemsHtml); 
});