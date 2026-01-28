const url =
  "https://student-api-proxy.onrender.com/api/nba-api-free-data.p.rapidapi.com/nba-league-standings?year=2024";
const options = {
  method: "GET",
  headers: {
    "X-API-Key":
      "125ee9cb610bb697918d09eedb93fe83c72ed2244b4d22ffae6333d3fb8a413c",
  },
};

fetch(url, options)
  .then((response) =>
    response.json().then((result) => {
      console.log(result.data); // Your API data
      console.log(`Cost: $${result.meta.cost}`);
      console.log(`Remaining: $${result.meta.remaining_budget}`);
    }),
  )
  .catch((error) => {
    console.log(error);
  });
