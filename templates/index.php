<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <title>Email Application</title>
    <style>
        body {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        #header {
            width: 100%;
            /* Full width */
            padding: 20px;
            border-bottom: 2px solid #dee2e6;
        }

        #logo {
            display: flex;
        }


        #logo h1 {
            margin: 0 10px;
            /* Add spacing between the two h1 elements */
        }

        #welcomeSection {
            width: 100%;
            /* Full width */
            text-align: center;
            /* Center text */
            margin: 20px 0;
            font-size: 50px;
        }

        .action-buttons {
            width: 100%;
            /* Full width */
            display: flex;
            flex-direction: column;
            align-items: center;
            /* Center buttons */
            margin-top: 20px;
        }

        .action-buttons button {
            width: 50%;
            /* Adjust the width as desired */
            margin-bottom: 10px;
        }
    </style>
</head>

<body>

<div class="container">
    <div id="header">
        <div id="logo">
            <h1>LOGO</h1>
            <H1>Best email messaging app ever</H1>
        </div>
    </div>

    <div id="welcomeSection" class="p-3">
        <p>Welcome text</p>
    </div>

    <div class="action-buttons">
        <button onclick="location.href='email-send.html'" class="btn btn-primary">Create New Email</button>
        <button onclick="location.href='saved-emails.html'" class="btn btn-secondary">Emails Saved in Local
            Storage
        </button>
    </div>
</div>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
<script>
    // No need for separate functions since inline onclick handlers are being used
</script>

</body>

</html>