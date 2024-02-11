import express from "express";

const server = express();

server.use("/images", express.static("./public/images"));
server.listen(process.env.PORT || 4000);
