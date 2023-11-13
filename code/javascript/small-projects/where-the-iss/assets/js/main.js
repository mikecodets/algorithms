function createISSMap() {
  const map = L.map("iss-map").setView([0, 0], 1);
  const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
  const tiles = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution });
  tiles.addTo(map);

  const marker = createMarker(map);

  return { map, marker };
}

function createMarker(map) {
  const issIcon = L.icon({
    iconUrl: "assets/img/iss.png",
    iconSize: [50, 32],
    iconAnchor: [25, 16],
  });

  const marker = L.marker([0, 0], { icon: issIcon }).addTo(map);
  return marker;
}

async function getISSData() {
  const apiURL = "https://api.wheretheiss.at/v1/satellites/25544";

  try {
    const response = await fetch(apiURL);
    if (!response.ok) {
      throw new Error(`Resposta da rede não foi bem-sucedida. Código do status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Erro ao buscar a localização do ISS: ${error}`);
    return null;
  }
}

function updateISSPosition(marker, data) {
  if (data) {
    const { latitude, longitude } = data;
    marker.setLatLng([latitude, longitude]).update();
  }
}
async function updateISSPositionPeriodically() {
  const { marker } = createISSMap();

  async function update() {
    const data = await getISSData();
    updateISSPosition(marker, data);
  }

  await update();
  setInterval(update, 5000);
}

updateISSPositionPeriodically();
