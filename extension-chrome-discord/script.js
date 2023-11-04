
//Code executer à chaque chargement de page dont l'url est https://www.youtube.com/

setTimeout(() => {
    let youtubeTitle = "";
    let videoState = "";
    setInterval(() => {
        if(youtubeTitle == document.getElementsByClassName('title style-scope ytd-video-primary-info-renderer')[0].getElementsByClassName('style-scope ytd-video-primary-info-renderer')[0].innerHTML
         && videoState == document.getElementsByClassName('ytp-play-button ytp-button')[0].title){
            return;
        }
        youtubeTitle = document.getElementsByClassName('title style-scope ytd-video-primary-info-renderer')[0].getElementsByClassName('style-scope ytd-video-primary-info-renderer')[0].innerHTML
        videoState = document.getElementsByClassName('ytp-play-button ytp-button')[0].title;
        console.log(videoState)
        console.log(youtubeTitle)
        const xhttp = new XMLHttpRequest();
        xhttp.open("POST", "http://127.0.0.1:8888/", true);
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
        xhttp.onreadystatechange = (res) => {
            switch (xhttp.status) {
                case 404:
                    throw new Error('La connexion aux serveur n\'a pas pu être établie');
                case 200:
                    console.log('La connexion à été établie')
                    break;
                default:
                    break;
            }
        }
        let urls = window.location.protocol + window.location.hostname + window.location.pathname + window.location.search.split('&')[0]
        xhttp.send("state=" + urls + "&test=" + youtubeTitle + "&videoState=" + videoState)
    }, 10000);
}, 5000);
