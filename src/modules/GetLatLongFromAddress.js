const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6d4ac8eda5msh9b45e76cb759b23p136c80jsn7651fcc60bad',
		'X-RapidAPI-Host': 'address-from-to-latitude-longitude.p.rapidapi.com'
	}
};

// fetch('https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi?address=', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

const getLatLong = async (address) => {
    try{
        const latLongApiResponse = await fetch(`https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi?address=${address}`, options);
        const responseJson = await latLongApiResponse.json();
        const firstResult = responseJson.Results[0];
        return {"lat":firstResult.latitude, "long":firstResult.longitude};
    }catch(err){
        return err;
    }
}

export default getLatLong;