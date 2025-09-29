import React, { useState } from "react";

function TeamSelector({ players, onTeamsSelected }) {
  // Einzigartige Teams aus den Spielern extrahieren
  const teams = Array.from(new Set(players.map((p) => p["Club Name"])));

  // Lokaler State für Auswahl
  const [homeTeam, setHomeTeam] = useState("");
  const [awayTeam, setAwayTeam] = useState("");

  const handleHomeChange = (e) => {
    setHomeTeam(e.target.value);
    onTeamsSelected(e.target.value, awayTeam);
  };

  const handleAwayChange = (e) => {
    setAwayTeam(e.target.value);
    onTeamsSelected(homeTeam, e.target.value);
  };

  // Vereinssymbol-URLs aus Spielern herausfiltern
  const getBadgeUrl = (team) => {
    const player = players.find((p) => p["Club Name"] === team);
    return player ? player["Club Badge URL"] : "";
  };

  return (
    <div style={{ textAlign: "center", marginBottom: "10px" }}>
      <div>
        <label>
          Heimteam:
          <select value={homeTeam} onChange={handleHomeChange} style={{ marginLeft: "8px", marginRight: "15px" }}>
            <option value="">Bitte wählen</option>
            {teams.map((team) => (
              <option key={team} value={team}>
                {team}
              </option>
            ))}
          </select>
        </label>
        <label>
          Auswärtsteam:
          <select value={awayTeam} onChange={handleAwayChange} style={{ marginLeft: "8px" }}>
            <option value="">Bitte wählen</option>
            {teams.map((team) => (
              <option key={team} value={team}>
                {team}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div style={{ marginTop: "15px", display: "flex", justifyContent: "space-between", maxWidth: "820px", margin: "16px auto" }}>
        {homeTeam && (
          <img
            src={getBadgeUrl(homeTeam)}
            alt={`${homeTeam} Wappen`}
            style={{ width: "80px", height: "80px", opacity: 0.4, objectFit: "contain" }}
          />
        )}
        {awayTeam && (
          <img
            src={getBadgeUrl(awayTeam)}
            alt={`${awayTeam} Wappen`}
            style={{ width: "80px", height: "80px", opacity: 0.4, objectFit: "contain" }}
          />
        )}
      </div>
    </div>
  );
}

export default TeamSelector;
