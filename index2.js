    navigator.vibrate(2000);// 手机震动1s

    function getQueryParams() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        return urlParams.get("from");
    }
    const fromPage = getQueryParams();
    if (fromPage === "https://joslin-1.github.io/Stars/index.html") {
    // if (fromPage === "./index.html") {
        sessionStorage.setItem('jumped', 'true')
    } else {
        document.body.classList.add('lj')
         window.location.href = 'https://joslin-1.github.io/Stars/index.html'
        // window.location.href = "./index.html"
    }
    if (sessionStorage.getItem('allowed') != 'true') {
        window.history.back()
        document.body.classList.add('lj')
    } else {
        sessionStorage.removeItem('allowed')

    }
