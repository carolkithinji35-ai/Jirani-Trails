const BASE_URL = "https://api.trailsplits.com";

export const searchTrails = async (query) => {
    const response = await fetch(
        `${BASE_URL}/trails/v1/search?q=${encodeURIComponent(query)}&limit=10&type=hiking`,
    );

    if (!response.ok) {
        throw new Error("Failed to fetch hiking trails.");
    }

    const data = await response.json();

    return data.features.map((trail) => ({
        id: trail.properties.osm_relation_id,
        name: trail.properties.name || "Unnamed hiking trail",
        distance: trail.properties.distance_km,
        latitude: trail.geometry.coordinates[1],
        longitude: trail.geometry.coordinates[0],
        type: trail.properties.route_type,
        network: trail.properties.network,
    }));
};

export const getTrailById = async (id) => {
    const response = await fetch(`${BASE_URL}/trails/v1/relation/${id}`);

    if (!response.ok) {
        throw new Error("Failed to fetch trail details.");
    }

    const data = await response.json();
    console.log("Trail details API response:", data); // Log the entire response for debugging
    return data;
};