
//Code executer à chaque chargement de page dont l'url est https://www.youtube.com/
    // document.getElementById('btn').addEventListener('click', (event) => {
        setTimeout(() => {
            let test = document.getElementsByClassName('title style-scope ytd-video-primary-info-renderer')[0].getElementsByClassName('style-scope ytd-video-primary-info-renderer')[0];
                console.log('Passed')
                const xhttp = new XMLHttpRequest();
                xhttp.open("POST", "http://127.0.0.1:8888/", true);
                xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
                xhttp.onreadystatechange = (e) => {
                    console.log('of course')
                }
                console.log(test)
                let urls = window.location.protocol + window.location.hostname + window.location.pathname + window.location.search.split('&')[0]
                xhttp.send("state="+urls+"&test="+test.innerHTML)
        }, 5000);
    // })
