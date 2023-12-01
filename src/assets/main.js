const API = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&q=asincronismo%20js&key=AIzaSyCU2eMX_vaRnYKy46oWrXCu3ZbaTGtEQec';
const content = document.getElementById('content') || null;

async function fetchData (urlApi) {
	try {
        const response = await fetch(urlApi);
	    const data = await response.json();
	    return data;
    } catch (err) {
        console.error('Ha ocurrido el siguiente error: ', err);
        throw err;
    }
}

(async () => {
	try {
		const videos = await fetchData(API);
		let view = `
		    ${videos.items.map(video => `
		    	<div class="group relative">
		    		<div class="w-full bg-gray-50 aspect-w-1 aspect-h-1 rounded-md overflow-hidden     group-hover:opacity-75 lg:aspect-none">
		    			<img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
		    		</div>
		    		<div class="mt-4 flex justify-between">
		    			<h3 class="text-sm text-gray-200">
		    				<span aria-hidden="true" class="absolute inset-0"></span>
		    				${video.snippet.title}
		    			</h3>
		    		</div>
		    	</div>
		    `).slice(0, 4).join('')}
		`;
		content.innerHTML = view;
	} catch (err) {
		console.error("He aquí el error de la llamada async del fetchData: ", err);
	}
})();

/* const API = 'https://youtube-v31.p.rapidapi.com/search?q=asincronismo%20js&part=snippet&maxResults=9&order=relevance';
const content = document.getElementById('content') || null;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '95dd735527msh1bc1d8c558bea40p13cdcajsnbc2c40813afb',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData (urlApi, options) {
	try {
        const response = await fetch(urlApi, options);
	    const data = await response.json();
	    return data;
    } catch (err) {
        console.error('Ha ocurrido el siguiente error: ', err);
        throw err;
    }
}

(async () => {
	try {
		const videos = await fetchData(API, options);
		let view = `
		    ${videos.items.map(video => `
		    	<div class="group relative">
		    		<div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden     group-hover:opacity-75 lg:aspect-none">
		    			<img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
		    		</div>
		    		<div class="mt-4 flex justify-between">
		    			<h3 class="text-sm text-gray-700">
		    				<span aria-hidden="true" class="absolute inset-0"></span>
		    				${video.snippet.title}
		    			</h3>
		    		</div>
		    	</div>
		    `).slice(0, 4).join('')}
		`;
		content.innerHTML = view;
	} catch (err) {
		console.error("He aquí el error de la llamada async del fetchData: ", err);
	}
})(); */
