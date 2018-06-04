function addHref(element) {
    if ($(element).find('a').length == 0) {

        const issueNrRegex = /\#\d{1,4}/gm;

        const self = $(element);
        const html = self[0].innerHTML;

        const issueNr = html.match(issueNrRegex);

        if (issueNr !== null){
            
            const number = issueNr[0].replace(/\#/, '');
            
            const redmineUrl = `https://redmine.3s.pl/issues/${number}`;
            const newTitle = html.replace(issueNrRegex, `<a target="_blank" href="${redmineUrl}">${issueNr}</a>`);
            
            self[0].innerHTML = newTitle;
        }
    }
}

$(function () {

    window.setInterval(function () {

        $('tbody td span[ng-bind="s.shownTitle"]').each((index, element) => {
            addHref(element);
        });

        $('.story-text').each((index, element) => {
            addHref(element);
        });

    }, 5000);

});