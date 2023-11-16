const express = require("express");
const cors = require("cors");
const axios = require("axios");
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));



app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
        "https://api.chatengine.io/users/",
        { username: username, secret: username, first_name: username }, 
        { headers: {"private-key": "cae52314-0b54-45c7-bddb-36bb9f850785" }}
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.data);
  }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

