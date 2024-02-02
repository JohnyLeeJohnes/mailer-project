async function limitedFunction() {
    let isRunning = true;
    let timeoutReached = false;

    const timer = setTimeout(() => {
        timeoutReached = true;
        if (!isRunning) {
            limitedFunction();
        }
    }, 10000);

    try {
        await getAndSendEmails();
    } catch (error) {
        console.error("Error in getAndSendEmails:", error);
    } finally {
        isRunning = false;
        if (timeoutReached) {
            clearTimeout(timer);
            limitedFunction();
        }
    }
}

async function getAndSendEmails() {
    //změnit let na const a upravit  storage = storage.filter(item => item.id !== email.id);
    let storage = JSON.parse(localStorage.getItem('UNSENT_EMAIL')) || [];
    for (const email of storage) {
        try {
            await sendEmail(email);
            storage = storage.filter(item => item.id !== email.id);
        } catch (error) {
            console.error("Error sending email:", error);
        }
    }
    localStorage.setItem('UNSENT_EMAIL', JSON.stringify(storage));
}

const sendEmail = (emailObject, index) => {
    const formData = new FormData();
    formData.set('to', emailObject.to);
    formData.set('cc', emailObject.cc);
    formData.set('subject', emailObject.subject);
    formData.set('body', emailObject.body);
    return $.ajax({
        url: "/api/sendEmail",
        data: formData,
        cache: false,
        processData: false,
        contentType: false,
        type: 'POST',
        beforeSend: function (request) {
            const apiKey = JSON.parse(localStorage.getItem("API_KEY"))
            request.setRequestHeader("Api-Key", apiKey);
        },
        success: function () {
            console.log("SUCCESS!");
        },
        error: function () {
            console.log("ERROR!");
        }
    });
}

limitedFunction();