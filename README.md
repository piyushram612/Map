# 📍 Our Journey Together – Memory Map

Welcome to **Our Journey Together**, a heartfelt interactive map that beautifully captures and pins memories from different locations we've visited. Click on the pins to relive the moments through pictures and descriptions!


---

## 🌍 Features

- 🗺️ **Interactive Map** with Leaflet.js
- 📌 **Location Pins** marking special places
- 🖼️ **Images and Descriptions** of memories for each location
- 🎨 **Responsive and Aesthetic Design** with custom styling
- 💖 **Personal Touch** to celebrate shared experiences

---

## 📁 Project Structure
project-root/
├── index.html # Main HTML file
├── style.css # Custom styling
├── script.js # Map logic and interaction
├── locations.json # List of all memories (places, coordinates, images, descriptions)
└── images/ # Image folder with memory photos

---

## 🛠️ Technologies Used

- [Leaflet.js](https://leafletjs.com/) – for the map rendering
- [OpenStreetMap](https://www.openstreetmap.org/) – tile provider
- HTML, CSS, JavaScript – standard frontend stack

---

## 🚀 How to Use

1. Clone or download the repository.
2. Open `index.html` in your browser.
3. Click on any map pin to view the corresponding memory.

> 📌 Make sure all image paths and filenames are **correct, lowercase**, and **contain no spaces** (e.g., `images/bbq-holic.jpg`).

---

## 💡 Customizing

Want to create your own memory map?

- Replace entries in `locations.json` with your own:
  ```json
  {
      "place": "My Special Spot",
      "coordinates": [LATITUDE, LONGITUDE],
      "image": "images/my-photo.jpg",
      "description": "A lovely day I'll never forget"
  }
Add your images to the images/ folder with the right filename.

Edit the map’s center and zoom in script.js.

💌 Credits
Built with love by Piyush Ram Kimidi
To remember, relive, and cherish the moments that matter most ❤️
---

##🔗 Live Link

👉 View the website here : https://piyushram612.github.io/Map/
