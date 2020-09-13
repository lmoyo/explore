import React from 'react';

const apiKey =
	'IAVbvC_Zpu6Oz33KPTReqvMN0qLxQ8scNaeByKuOxC430pDSdItt4tKVY-ISK2CwyB-O9_QSxJeFhWxt_hNUWjnBhhg9N697RO-48GCM4P6OEArp9BGpc-8GxcZdX3Yx';

const Yelp = {
	search(term, location, sortBy) {
		return fetch(
			`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}&limit=21`,
			{
				headers: {
					Authorization: `Bearer ${apiKey}`,
				},
			}
		)
			.then((response) => {
				return response.json();
			})
			.then((jsonResponse) => {
				if (jsonResponse.businesses) {
					return jsonResponse.businesses.map((business) => ({
						id: business.id,
						imageSrc: business.image_url,
						name: business.name,
						address: business.location.address1,
						city: business.location.city,
						state: business.location.state,
						zipCode: business.location.zip_code,
						category: business.categories[0].title,
						rating: business.rating,
						reviewCount: business.review_count,
						url: business.url,
						lat: business.coordinates.latitude,
						long: business.coordinates.longitude,
					}));
				}
			});
	},
};

export default Yelp;
