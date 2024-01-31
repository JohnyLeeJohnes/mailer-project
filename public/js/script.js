async function limitedFunction() {
    let isRunning      = true;
    let timeoutReached = false;
    setTimeout(() => {
        timeoutReached = true;
        if (!isRunning)
            limitedFunction();
    }, 60000);

    try {
        await getAndSendEmails();
        isRunning = false;
        if (timeoutReached)
            await limitedFunction();
    } catch {
        await limitedFunction();
    }
}

const getAndSendEmails = async () => {
    const storage = JSON.parse(localStorage.getItem('UNSENT_EMAIL'));
    if (storage) {
        for (const email of storage) {
            sendEmail(email, storage.indexOf(email));
        }
    } else {
        console.log("empty email queue");
    }
}
const sendEmail        = (emailObject, index) => {
    const formData = new FormData();
    formData.set('to', emailObject.to);
    formData.set('cc', emailObject.cc);
    formData.set('subject', emailObject.subject);
    formData.set('body', emailObject.body);
    return $.ajax({
        url:         "/api/sendEmail",
        data:        formData,
        cache:       false,
        processData: false,
        contentType: false,
        type:        'POST',
        beforeSend:  function (request) {
            request.setRequestHeader("Api-Key", "29d2a52d9bfb178dde9d386ad87c7297e3a2e2e757e1252195b09086dc0ab98b");
        },
        success:     function () {
            const storedFormData = JSON.parse(localStorage.getItem('UNSENT_EMAIL')) || [];
            storedFormData.splice(index, 1);
            localStorage.setItem('UNSENT_EMAIL', JSON.stringify(storedFormData));
            console.log("SUCCESS!");
        },
        error:       function () {
            console.log("ERROR!");
        }
    });
}

limitedFunction();