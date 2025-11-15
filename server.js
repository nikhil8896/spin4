
import express from "express";
const app = express();

// Block Googlebot from /page
app.use("/page", (req, res, next) => {
  const ua = req.headers["user-agent"] || "";
  if (ua.includes("Googlebot")) return res.status(403).send("Forbidden");
  next();
});

// Hidden redirects
app.get("/go/lap", (req, res) => res.redirect("https://google.com"));
app.get("/go/tab", (req, res) => res.redirect("https://google.com"));
app.get("/go/mob", (req, res) => res.redirect("https://google.com"));

app.use(express.static("public"));

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running...");
});
