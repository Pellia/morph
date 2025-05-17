import express from "express";
import errorHandler from "./middlewares/errorHandler.js";
import("./models/Association.js");

// Define Server
const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(express.json());

// Routes
app.use("/", (req, res) => {
    res.status(200).json({ message: "Hello World!" });
});

//Error Handler
app.use(errorHandler);

// Start Server
app.listen(port, () => console.log(`Server is running on port http://localhost:${port}`));
