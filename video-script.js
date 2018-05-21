function createButton() {
    //  create button tags
    var btn = document.createElement("button");
    //  create title
    var title = document.createTextNode("mp3");
    //  add title
    btn.appendChild(title);
    //  adds styles
    btn.style.margin = "10px";
    btn.style.height = "35px";
    //  adds button
    $('#top-row').append(btn);

    // onClick
    btn.addEventListener('click', function () {

        //  Copy URL
        var videoURL = window.location.href;
        //  Create download URL
        var convertURL = 'http://mp3fiber.com/include2/index.php?videoURL=' + videoURL + '&ftype=mp3&quality=320'
        //  Open download link in new tab
        // convertWindow = window.open(convertURL,"_blank","width=450,height=400,top=200,left=200,replace=false,location=no,menubar=no,titlebar=no,toolbar=no,scrollbars=no,fullscreen=no");
        convertWindow = window.open(convertURL,"extension_popup","width=450,height=400,top=200,left=200,replace=false,location=no,menubar=no,titlebar=no,toolbar=no,scrollbars=no,fullscreen=no");
    });
}

//  Chceck if button is added
function addButton() {
    if ($('#top-row').length) {
        createButton();
    } else {
        addButton();
    }
}

//  Delay
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//  Chceck if div for button is alredy rendered 
async function waitToAddButton() {
    await sleep(100);
    createButton()
    if (!$('#top-row').length) {
        waitToAddButton();
    }
}

//  LES'T DO THIS!
waitToAddButton();



