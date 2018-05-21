//  get download url from DOM Element
downloadURL = $('div.searchDiv>p:nth-child(4)>a:nth-child(2)').attr('href');
window.open(downloadURL);   //  open new tab
window.close();             //  close tab