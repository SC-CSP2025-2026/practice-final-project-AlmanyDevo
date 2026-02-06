const button2022 = document.querySelector("#btn-2022");
const button2023 = document.querySelector("#btn-2023");
const button2024 = document.querySelector("#btn-2024");
const button2025 = document.querySelector("#btn-2025");
const button2026 = document.querySelector("#btn-2026");
const standingsList = document.querySelector(".standings-list");

const loadStandings = async (year) => {
  if (!year) {
    alert("Standings  not set properly");
    return;
  }

  const url = `https://student-api-proxy.onrender.com/api/nba-api-free-data.p.rapidapi.com/nba-league-standings?year=${year}`;

  const options = {
    method: "GET",
    headers: {
      "X-API-Key":
        "125ee9cb610bb697918d09eedb93fe83c72ed2244b4d22ffae6333d3fb8a413c",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json(); //getLeagueStandings();
  const entries = result.data.response.standings.entries;

  standingsList.innerHTML = "";
  count = 1;
  entries.forEach((entry) => {
    name = count + ". " + entry.team.displayName;
    const listItem = `
    <li class="list-group-item">
      ${name}
    </li>
  `;
    count++;
    standingsList.insertAdjacentHTML("beforeend", listItem);
  });
};

button2022.addEventListener("click", (event) => {
  event.preventDefault();
  loadStandings("2022");
});

button2023.addEventListener("click", (event) => {
  event.preventDefault();
  loadStandings("2023");
});

button2024.addEventListener("click", (event) => {
  event.preventDefault();
  loadStandings("2024");
});

button2025.addEventListener("click", (event) => {
  event.preventDefault();
  loadStandings("2025");
});

button2026.addEventListener("click", (event) => {
  event.preventDefault();
  loadStandings("2026");
});
