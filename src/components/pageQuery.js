var url = require('url');

var pageUrl;

export default function startPageQuery(){
    pageUrl = window.location.href.split('?')[0];

    const queryObject = url.parse(window.location.href, true).query;
    console.log(queryObject);
}

export function openNewPage(arg,id){
    var currentUrl = pageUrl;
    var nextUrl = `${currentUrl}?${arg}=${id}`;
    const nextState = { additionalInformation: 'Updated the URL with JS' };

    window.history.pushState(nextState, "", nextUrl);
    
}