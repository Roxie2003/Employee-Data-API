const app = require("express")();
const PORT = 8080;

app.get("/", (req, res) => {
  res.status(200).send("HELLO...");
});

app.listen(PORT, () => console.log(`Live on http://localhost:${PORT}`));
