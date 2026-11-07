const express = require("express");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/project", (req, res) => {
    res.render("project");
});

app.get("/mobile", (req, res) => {
    res.render("mobile");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.get("/homework", (req, res) => {
    res.render("homework");
});

app.post("/contact", (req, res) => {

    const {
        name,
        email,
        subject,
        message
    } = req.body;

    console.log("===== CONTACT FORM SUBMISSION =====");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);

    res.render("thanks", {
        name,
        email,
        subject,
        message
    });

});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});