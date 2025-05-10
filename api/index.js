import express from "express";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use("/", (req, res) => {
    console.log("Hello World!");
    res.status(200).json({ message: "Hello World!" });
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
