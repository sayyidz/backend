const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.json([
    {
      id: 1,
      Nama: "Sayyid",
      Provinsi: "Jawa Barat",
      Kota: "Depok",
      Kecamatan: "Beji",
      Desa: "-",
    },
    {
      id: 2,
      Nama: "Wildan",
      Provinsi: "Sumatra Barat",
      Kota: "Payakumbuh",
      Kecamatan: "-",
      Desa: "-",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
