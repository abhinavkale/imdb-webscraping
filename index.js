const request = require("request-promise");
const cheerio = require("cheerio");
const json2csv = require("json2csv").Parser;
const fs = require("fs");

const movies = [
  "https://www.imdb.com/title/tt0120737/",
  "https://www.imdb.com/title/tt0367110/",
  "https://www.imdb.com/title/tt0323013/",
  "https://www.imdb.com/title/tt1562872/",
];

(async () => {
  let imdbData = [];

  for (let movie of movies) {
    const response = await request({
      uri: movie,
      headers: {
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
      },
      gzip: true,
    });

    let $ = cheerio.load(response);
    let title = $('div[class="title_wrapper"]>h1').text().trim();
    let rating = $('div[class="ratingValue"]>strong>span').text().trim();
    let summary = $('div[class="summary_text"]').text().trim();
    let time = $('div[class="title_wrapper"]>div>time').text().trim();
    let releaseDate = $('a[title="See more release dates"]').text().trim();

    imdbData.push({
      title,
      rating,
      summary,
      time,
      releaseDate,
    });
  }

  const j2cp = new json2csv();
  const csv = j2cp.parse(imdbData);

  fs.writeFileSync("./imdb.csv", csv, "utf-8");
})();
