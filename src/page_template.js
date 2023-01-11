const pageTemplate = userInput => {  
    // or should it be const generateHTML = ({name, id, email }) => ??
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>'Team Profile Generator'</title>
        
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
    <body>
        <div class="mx-5">
        <ul class="list-group">
            <li class="container-fluid">Name: ${userInput.name}</li>
            <li class="list-group">Employee ID: ${userInput.id}</li>
            <li class="list-group">Email: ${userInput.email}</li>
            
        </ul>
        </div>
    </body>
    </html>
    `
}

//${javascript to be imported} = template literal/string - pulls the information inside of the curly brackets

module.exports = page_template;

//add back in later??
// <li class="list-group">LinkedIn URL: ${userInput["LinkedIn URL"]}</li>
            // <li class="list-group">GitHub URL: ${userInput["GitHub URL"]}</li>