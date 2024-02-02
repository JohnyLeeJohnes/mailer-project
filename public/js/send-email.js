const localStorageKey = 'UNSENT_EMAIL';
const form = document.querySelector("#emailForm");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    $.ajax({
        url: "/api/sendEmail",
        data: formData,
        cache: false,
        processData: false,
        contentType: false,
        type: 'POST',
        beforeSend: function (request) {
            const apiKey = JSON.parse(localStorage.getItem("API_KEY"))
            request.setRequestHeader("Api-Key", apiKey);
            Swal.fire({
                icon: "info",
                title: "sending...",
                showConfirmButton: false,
            });

        },
        success: function () {
            console.log("SUCCESS!");
            Swal.fire({
                icon: "success",
                title: "Email sent!",
                showConfirmButton: false,
                timer: 2500
            });
        },
        error: function (e) {
            if (e.status === 403) {
                Swal.fire({
                    icon: "error",
                    title: "Wrong API key",
                    showConfirmButton: false,
                });
            } else {
                const emailData = {
                    id: Date.now().toString(), // Jednoduché ID pomocí časového razítka
                    to: formData.get("to"),
                    cc: formData.get("cc"),
                    subject: formData.get("subject"),
                    body: formData.get("body"),
                };
                const storage = JSON.parse(localStorage.getItem(localStorageKey)) || [];
                storage.push(emailData);
                localStorage.setItem(localStorageKey, JSON.stringify(storage));
            }
        }
    });
});