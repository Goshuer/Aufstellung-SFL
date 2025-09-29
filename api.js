const API_URL = "https://api.jsonbin.io/v3/b";
const BIN_ID = "68da90f2ae596e708ffff57d"; // Ersetze durch deine Bin-ID
const API_KEY = "$2a$10$8/OpQiA7dpuLBEQNqsWtaehuwJPTZ7jIVAEf32LDroovJatwrCRla"; // Ersetze durch deinen API-Key

// Daten aus JSONBin laden
export async function loadData() {
  try {
    const response = await fetch(`${API_URL}/${BIN_ID}`, {
      headers: { "X-Master-Key": API_KEY },
    });
    if (!response.ok) throw new Error("Fehler beim Laden der Daten");
    const json = await response.json();
    return json.record || [];
  } catch (error) {
    console.error("API loadData Fehler:", error);
    return null;
  }
}

// Daten in JSONBin speichern (PUT)
export async function saveData(data) {
  try {
    const response = await fetch(`${API_URL}/${BIN_ID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": API_KEY,
      },
      body: JSON.stringify({ record: data }),
    });
    if (!response.ok) throw new Error("Fehler beim Speichern der Daten");
    const json = await response.json();
    return json;
  } catch (error) {
    console.error("API saveData Fehler:", error);
    return null;
  }
}
