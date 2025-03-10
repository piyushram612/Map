// Initialize the map
var map = L.map('map').setView([20.5937, 78.9629], 5); // Default view (India)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Fetch locations from JSON file and add them to the map
fetch("locations.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(location => {
            var marker = L.marker(location.coordinates).addTo(map)
                .bindPopup(`<b>${location.place}</b>`);
            
            marker.on("click", function() {
                document.getElementById("display-image").src = location.image;
                document.getElementById("image-description").innerText = location.description;
            });
        });
    });
