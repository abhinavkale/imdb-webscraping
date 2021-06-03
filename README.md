# imdb webscraping with nodejs

## Here I used simple link of imdb movie and extract the information and put that information in **CSV(Comma Separate Value)** file just by firing the request.

## [IMDB](https://www.imdb.com/)

## Packages used:

### cheerio 
  `npm install cheerio`
  
  Fast, flexible & lean implementation of core jQuery designed specifically for the server. Cheerio implements a subset of core jQuery. Cheerio removes all the DOM   inconsistencies and browser cruft from the jQuery library, revealing its truly gorgeous API.

### request-promise
  `npm install --save request
   npm install --save request-promise`
   
  request-promise wraps around request everything that works with request also works with request-promise
  
### json2csv
  `npm install json2csv --save`
  
  Converts json into csv with column titles and proper line endings.
  Can be used as a module and from the command line.
  
   To do web-scraping for the particular application, the headers option is important. If we not use accurate header(it's be like scripting) or might be **block your IP address**. It should be like the request is made from browser. **Be cautious**
   
   Here I used `selector` to grab _title, rating, summary, time, releaseDate_.
   
   In network tab of browser we can see the **response headers** of an application and the content-encoding might be in **UTF-8, JSON encoder or gzip(used to make application)** runs faster.
   
   
   
  
  
