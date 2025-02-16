const requestURL = 'https://www.googleapis.com/youtube/v3/channels?part=statistics&id=xxxxxxx';


async function fetchMoviesJson() {
    const response = await fetch(requestURL);
    const youtubeStats = await response.json();
    return youtubeStats;
}


fetchMoviesJson().then(youtubeStats => {
    const youtubeSection = document.getElementById('youtubeSection');

    let youtubeViewCount = youtubeStats.items[0].statistics.viewCount;
    let youtubeSubscriberCount = youtubeStats.items[0].statistics.subscriberCount;
    let youtubevideoCount = youtubeStats.items[0].statistics.videoCount;

    youtubeSection.innerHTML += `
        <table class="table">
            <thead>
                <tr>
                    <th scope="col" class="h2">Seguidores</th>
                    <th scope="col" class="h2">Vistas</th>
                    <th scope="col" class="h2">Videos</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="text-center h2">${youtubeSubscriberCount}</td>
                    <td class="text-center h2">${youtubeViewCount}</td>
                    <td class="text-center h2">${youtubevideoCount}</td>
                </tr>
            </tbody>
        </table>
        `
})