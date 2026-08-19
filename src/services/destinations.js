const API_KEY = import.meta.env.VITE_GEOAPIFY_API_KEY;

export const getNearbyDestinations = async (latitude, longitude) => {
    const categories = "natural,leisure.park,tourism.attraction";

    const url = `https://api.geoapify.com/v2/places?categories=${categories}&filter=circle:${longitude},${latitude},10000&limit=10&apiKey=${API_KEY}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Failed to fetch destinations");
    }

    const data = await response.json();

    return data.features.map((feature) => {
        const properties = feature.properties;

        return {
            id: properties.place_id,
            name: properties.name || "Unnamed destination",
            location: properties.formatted || "Location unavailable",
            latitude: properties.lat,
            longitude: properties.lon,
            distance: properties.distance,
            categories: properties.categories || [],
        };
    });
};

export const searchDestination = async (query) => {
    const url =
        `https://api.geoapify.com/v1/geocode/search` +
        `?text=${encodeURIComponent(query)}` +
        `&limit=1` +
        `&apiKey=${API_KEY}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Failed to find location");
    }

    const data = await response.json();

    if (!data.results.length) {
        return [];
    }

    const { lat, lon } = data.results[0];

    return getNearbyDestinations(lat, lon);
};
