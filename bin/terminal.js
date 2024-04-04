import axios from "axios";
import * as cheerio from "cheerio";
import fs from "node:fs";
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

if (!fs.existsSync("cache")) {
  fs.mkdirSync("cache");
}

let url = "http://superosity.keenspot.com/d/20240403.html";

for (let i = 0; i < 10; i++) {
  let data;
  let cacheFile = `cache/${
    url.split("http://superosity.keenspot.com/d/")[1]
  }.json`;

  if (!fs.existsSync(cacheFile)) {
    await sleep(2500);
    let res = await axios.get(url);
    data = res.data;
    fs.writeFileSync(cacheFile, JSON.stringify(data));
    console.log("LIVE REQUEST!!!!");
  } else {
    data = JSON.parse(fs.readFileSync(cacheFile));
  }
  //console.log(res.data);
  //console.log(data);
  const $ = cheerio.load(data);
  let img = $(`p>img.ksc`);
  let src = img.attr("src");
  let aprev = $(`img#previous_day1<a`);
  let prevUrl = aprev.attr("href");
  let anext = $(`img#next_day1<a`);
  let nextUrl = anext.attr("href");

  console.log({
    url: url,
    cacheFile: cacheFile,
    imgSrc: src,
    prevUrl: prevUrl,
    nextUrl: nextUrl,
  });

  url = prevUrl;
}
