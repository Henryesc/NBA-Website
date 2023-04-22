const express = require("express");
const cors = require("cors");

const server = express();

/* The above code is setting up CORS (Cross-Origin Resource Sharing) options for a server.
Specifically, it is allowing requests from a specific origin (http://127.0.0.1:5500) to access
resources on the server. This is a security feature implemented by web browsers to prevent malicious
scripts from accessing resources on a different domain. */
const corsOptions = {
  origin: 'http://127.0.0.1:5500'
};

server.use(cors(corsOptions))

server.get("/MVPS", (req, res) => {
    // a server can only give one response at a time
    res.json({
        message:[
            {
              "year": "2022",
              "player": "Nikola Jokic",
              "team": "Denver Nuggets"
            },
            {
              "year": "2021",
              "player": "Nikola Jokic",
              "team": "Denver Nuggets"
            },
            {
              "year": "2020",
              "player": "Giannis Antetokounmpo",
              "team": "Milwaukee Bucks"
            },
            {
              "year": "2019",
              "player": "Giannis Antetokounmpo",
              "team": "Milwaukee Bucks"
            },
            {
              "year": "2018",
              "player": "James Harden",
              "team": "Houston Rockets"
            },
            {
              "year": "2017",
              "player": "Russell Westbrook",
              "team": "Oklahoma City Thunder"
            },
            {
              "year": "2016",
              "player": "Stephen Curry",
              "team": "Golden State Warriors"
            },
            {
              "year": "2015",
              "player": "Stephen Curry",
              "team": "Golden State Warriors"
            },
            {
              "year": "2014",
              "player": "Kevin Durant",
              "team": "Oklahoma City Thunder"
            },
            {
              "year": "2013",
              "player": "LeBron James",
              "team": "Miami Heat"
            },
            {
              "year": "2012",
              "player": "LeBron James",
              "team": "Miami Heat"
            },
            {
              "year": "2011",
              "player": "Derrick Rose",
              "team": "Chicago Bulls"
            },
            {
              "year": "2010",
              "player": "LeBron James",
              "team": "Cleveland Cavaliers"
            },
            {
              "year": "2009",
              "player": "LeBron James",
              "team": "Cleveland Cavaliers"
            },
            {
              "year": "2008",
              "player": "Kobe Bryant",
              "team": "Los Angeles Lakers"
            },
            {
              "year": "2007",
              "player": "Dirk Nowitzki",
              "team": "Dallas MAvericks"
            },
            {
              "year": "2006",
              "player": "Steve Nash",
              "team": "Phoenix Suns"
            },
            {
              "year": "2004",
              "player": "Kevin Garnett",
              "team": "Minnesota Timberwolves"
            },
            {
              "year": "2003",
              "player": "Tim Duncan",
              "team": "San Antonio Spurs"
            },
            {
              "year": "2002",
              "player": "Tim Duncan",
              "team": "San Antonio Spurs"
            },
            {
              "year": "2001",
              "player": "Allen Iverson",
              "team": "Philadelphia 76ers"
            },
            {
              "year": "2000",
              "player": "Shaquille O'Neal",
              "team": "Los Angeles Lakers"
            },
            {
              "year": "1999",
              "player": "Karl Malone",
              "team": "Utah Jazz"
            },
            {
              "year": "1998",
              "player": "Michael Jordan",
              "team": "Chicago Bulls"
            },
            {
              "year": "1997",
              "player": "Karl Malones",
              "team": "Utah Jazz"
            },
            {
              "year": "1996",
              "player": "Michael Jordan",
              "team": "Chicago Bulls"
            },
            {
              "year": "1995",
              "player": "David Robinson",
              "team": "San Antonio Spurs"
            },
            {
              "year": "1994",
              "player": "Hakeem Olajuwon",
              "team": "Houston Rockets"
            },
            {
              "year": "1993",
              "player": "Charles Barkley",
              "team": "Phoenix Suns"
            },
            {
              "year": "1992",
              "player": "Michael Jordan",
              "team": "Chicago Bulls"
            },
            {
              "year": "1991",
              "player": "Michael Jordan",
              "team": "Chicago Bulls"
            },
            {
              "year": "1990",
              "player": "Magic Johnson",
              "team": "Los Angeles Lakers"
            },
            {
              "year": "1989",
              "player": "Magic Johnson",
              "team": "Los Angeles Lakers"
            },
            {
              "year": "1988",
              "player": "Michael Jordan",
              "team": "Chicago Bulls"
            },
            {
              "year": "1987",
              "player": "Magic Johnson",
              "team": "Los Angeles Lakers"
            },
            {
              "year": "1986",
              "player": "Larry Bird",
              "team": "Boston Celtics"
            },
            {
              "year": "1985",
              "player": "Larry Bird",
              "team": "Boston Celtics"
            },
            {
              "year": "1984",
              "player": "Larry Bird",
              "team": "Boston Celtics"
            },
            {
              "year": "1983",
              "player": "Moses Malone",
              "team": "Philadelphia 76ers"
            },
            {
              "year": "1982",
              "player": "Moses Malone",
              "team": "Houston Rockets"
            },
            {
              "year": "1981",
              "player": "Julius Erving",
              "team": "Philadelphia 76ers"
            },
            {
              "year": "1980",
              "player": "Kareem Abdul-Jabbar",
              "team": "Los Angeles Lakers"
            },
            {
              "year": "1979",
              "player": "Moses Malone",
              "team": "Houston Rockets"
            },
            {
              "year": "1978",
              "player": "Bill Walton",
              "team": "Portland Trail Blazers"
            },
            {
              "year": "1977",
              "player": "Kareem Abdul-Jabbar",
              "team": "Los Angeles Lakers"
            },
            {
              "year": "1977",
              "player": "Kareem Abdul-Jabbar",
              "team": "Los Angeles Lakers"
            },
            {
              "year": "1976",
              "player": "Kareem Abdul-Jabbar",
              "team": "Los Angeles Lakers"
            },
            {
              "year": "1975",
              "player": "Bob McAdoo",
              "team": "Buffalo Braves"
            },
            {
              "year": "1974",
              "player": "Kareem Abdul-Jabbar",
              "team": "Milwaukee Bucks"
            },
            {
              "year": "1973",
              "player": "David Cowens",
              "team": "Boston Celtics"
            },
            {
              "year": "1972",
              "player": "Kareem Abdul-Jabbar",
              "team": "Milwaukee Bucks"
            },
            {
              "year": "1971",
              "player": "Kareem Abdul-Jabbar",
              "team": "Milwaukee Bucks"
            },
            {
              "year": "1970",
              "player": "Willis Reed",
              "team": "Los Angeles Lakers"
            },
            {
              "year": "1969",
              "player": "Westley Unseld",
              "team": "Baltimore Bullets"
            },
            {
              "year": "1968",
              "player": "Wilt Chamberlain",
              "team": "Philadelphia 76ers"
            },
            {
              "year": "1967",
              "player": "Wilt Chamberlain",
              "team": "Philadelphia 76ers"
            },
            {
              "year": "1966",
              "player": "Wilt Chamberlain",
              "team": "Philadelphia 76ers"
            },
            {
              "year": "1965",
              "player": "Bill Russell",
              "team": "Boston Celtics"
            },
            {
              "year": "1964",
              "player": "Oscar Robertson",
              "team": "Cincinatti Royals"
            },
            {
              "year": "1963",
              "player": "Bill Russell",
              "team": "Boston Celtics"
            },
            {
              "year": "1962",
              "player": "Bill Russell",
              "team": "Boston Celtics"
            },
            {
              "year": "1961",
              "player": "Bill Russell",
              "team": "Boston Celtics"
            },
            {
              "year": "1960",
              "player": "Wilt Chamberlain",
              "team": "Philadelphia Warriors"
            },
            {
              "year": "1959",
              "player": "Bob Pettit",
              "team": "St. Louis Hawks"
            },
            {
              "year": "1958",
              "player": "Bill Russell",
              "team": "Boston Celtics"
            },
            {
              "year": "1957",
              "player": "Bob Cousy",
              "team": "Boston Celtics"
            },
            {
              "year": "1956",
              "player": "Bob Pettit",
              "team": "Boston Celtics"
            }
        ]
    });

    // that is why this line returns an error
    // res.send("Hello Universe!");
});

let mvps = [
    {
      "year": "2022",
      "player": "Nikola Jokic",
      "team": "Denver Nuggets",
      "img": "https://www.gannett-cdn.com/presto/2021/06/08/USAT/d4271aa6-1198-4c07-bfe4-7a9eafd71d86-2021-06-08_Nikola_Jokic3.jpg?crop=3460,2209,x129,y112&width=592&format=pjpg&auto=webp&quality=70https://www.gannett-cdn.com/presto/2021/06/08/USAT/d4271aa6-1198-4c07-bfe4-7a9eafd71d86-2021-06-08_Nikola_Jokic3.jpg?crop=3460,2209,x129,y112&width=592&format=pjpg&auto=webp&quality=70"
    },
    {
      "year": "2021",
      "player": "Nikola Jokic",
      "team": "Denver Nuggets",
      "img": "https://www.gannett-cdn.com/presto/2021/06/08/USAT/d4271aa6-1198-4c07-bfe4-7a9eafd71d86-2021-06-08_Nikola_Jokic3.jpg?crop=3460,2209,x129,y112&width=592&format=pjpg&auto=webp&quality=70"
    },
    {
      "year": "2020",
      "player": "Giannis Antetokounmpo",
      "team": "Milwaukee Bucks",
      "img": "https://www.basketballnetwork.net/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTk1NTM0NTQyOTg2MDI4NjEz/giannis-antetokounmpo.webp"
    },
    {
      "year": "2019",
      "player": "Giannis Antetokounmpo",
      "team": "Milwaukee Bucks",
      "img": "https://www.basketballnetwork.net/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTk1NTM0NTQyOTg2MDI4NjEz/giannis-antetokounmpo.webp"
    },
    {
      "year": "2018",
      "player": "James Harden",
      "team": "Houston Rockets",
      "img": "https://www.gannett-cdn.com/presto/2019/12/17/USAT/fa61ff56-1ced-4ac6-8563-e3ff2d8d9047-USP_NBA__San_Antonio_Spurs_at_Houston_Rockets.JPG?width=660&height=499&fit=crop&format=pjpg&auto=webp"
    },
    {
      "year": "2017",
      "player": "Russell Westbrook",
      "team": "Oklahoma City Thunder",
      "img": "https://www.sportsnet.ca/wp-content/uploads/2019/03/russell-westbrook-celebrates-a-shot-against-the-brooklyn-nets.jpg"
    },
    {
      "year": "2016",
      "player": "Stephen Curry",
      "team": "Golden State Warriors",
      "img": "https://www.si.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTkzNjg3MzI3NDgxMjEwMzUy/usatsi_19400421_168388303_lowres.webp"
    },
    {
      "year": "2015",
      "player": "Stephen Curry",
      "team": "Golden State Warriors",
      "img": "https://www.si.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTkzNjg3MzI3NDgxMjEwMzUy/usatsi_19400421_168388303_lowres.webp"
    },
    {
      "year": "2014",
      "player": "Kevin Durant",
      "team": "Oklahoma City Thunder",
      "img": "https://footwearnews.com/wp-content/uploads/2016/03/kevin-durant.jpg?w=700&h=437&crop=1&resize=700%2C437"
    },
    {
      "year": "2013",
      "player": "LeBron James",
      "team": "Miami Heat",
      "img": "https://e0.365dm.com/20/09/1600x900/skysports-lebron-james-miami-heat_5113376.jpg?20200930065809"
    },
    {
      "year": "2012",
      "player": "LeBron James",
      "team": "Miami Heat",
      "img": "https://e0.365dm.com/20/09/1600x900/skysports-lebron-james-miami-heat_5113376.jpg?20200930065809"
    },
    {
      "year": "2011",
      "player": "Derrick Rose",
      "team": "Chicago Bulls",
      "img": "https://static01.nyt.com/images/2015/02/28/sports/28nba-1/28nba-1-jumbo.jpg?quality=75&auto=webp"
    },
    {
      "year": "2010",
      "player": "LeBron James",
      "team": "Cleveland Cavaliers",
      "img": "https://cavaliersnation.com/wp-content/uploads/2018/06/lebroncavs-e1528418708459.jpeg.webp"
    },
    {
      "year": "2009",
      "player": "LeBron James",
      "team": "Cleveland Cavaliers",
      "img": "https://cavaliersnation.com/wp-content/uploads/2018/06/lebroncavs-e1528418708459.jpeg.webp"
    },
    {
      "year": "2008",
      "player": "Kobe Bryant",
      "team": "Los Angeles Lakers",
      "img": "https://lh3.googleusercontent.com/cynzS9mcUnpZBEc4dzUV8eorui1zSUtf1mFjo_I9vC7I_SLC0YThGptSDB1i8dSFCubw7Gh_d427DR02yFyfsXr7EOte6aHD2TpXw3FTzg"
    },
    {
      "year": "2007",
      "player": "Dirk Nowitzki",
      "team": "Dallas MAvericks",
      "img": "https://www.gannett-cdn.com/-mm-/fe1d1337af30de09589968eee29bbb86972fb437/c=272-165-2441-3057/local/-/media/2017/03/07/USATODAY/USATODAY/636244960868675219-USATSI-9055920.jpg?width=300&height=400&fit=crop&format=pjpg&auto=webp"
    },
    {
      "year": "2006",
      "player": "Steve Nash",
      "team": "Phoenix Suns",
      "img": "https://media.gq.com/photos/55828cfd1177d66d68d53084/master/w_1280,c_limit/blogs-the-feed-steve-nash-elegy-los-angeles-lakers-basketball-nba.jpg"
    },
    {
      "year": "2004",
      "player": "Kevin Garnett",
      "team": "Minnesota Timberwolves",
      "img": "https://cdn.vox-cdn.com/thumbor/zyFDcfOqRRRIzZie8G8l1izNQvc=/674x317:3738x2905/920x613/filters:focal(1850x792:2546x1488):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/51005677/usa-today-8931791.0.jpg"
    },
    {
      "year": "2003",
      "player": "Tim Duncan",
      "team": "San Antonio Spurs",
      "img": "https://www.kron4.com/wp-content/uploads/sites/11/2016/07/tim-duncan-smile-laugh_36741250_ver1.0.jpg?w=876&h=493&crop=1"
    },
    {
      "year": "2002",
      "player": "Tim Duncan",
      "team": "San Antonio Spurs",
      "img": "https://www.kron4.com/wp-content/uploads/sites/11/2016/07/tim-duncan-smile-laugh_36741250_ver1.0.jpg?w=876&h=493&crop=1"
    },
    {
      "year": "2001",
      "player": "Allen Iverson",
      "team": "Philadelphia 76ers",
      "img": "https://cassiuslife.com/wp-content/uploads/sites/47/2023/01/16733694295905.jpg?strip=all&quality=80&w=1024&crop=0,0,100,678px"
    },
    {
      "year": "2000",
      "player": "Shaquille O'Neal",
      "team": "Los Angeles Lakers",
      "img": "https://fadeawayworld.net/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTgwMTMyNzQwNjAyNjY4Mzc2/shaquille-oneal-responds-to-claims-that-hes-not-skilled-and-still-hes-the-most-dominant-player-ever.webp"
    },
    {
      "year": "1999",
      "player": "Karl Malone",
      "team": "Utah Jazz",
      "img": "https://library.sportingnews.com/styles/crop_style_16_9_desktop_webp/s3/2021-10/karl-malone-040516-getty-ftrjpg_1w2o2iv1srikz1ilq6r4c14541.jpg.webp?itok=ahzqJ4ka"
    },
    {
      "year": "1998",
      "player": "Michael Jordan",
      "team": "Chicago Bulls",
      "img": "https://nypost.com/wp-content/uploads/sites/2/2022/09/GettyImages-1146871286-1.jpg"
    },
    {
      "year": "1997",
      "player": "Karl Malones",
      "team": "Utah Jazz",
      "img": "https://library.sportingnews.com/styles/crop_style_16_9_desktop_webp/s3/2021-10/karl-malone-040516-getty-ftrjpg_1w2o2iv1srikz1ilq6r4c14541.jpg.webp?itok=ahzqJ4ka"
    },
    {
      "year": "1996",
      "player": "Michael Jordan",
      "team": "Chicago Bulls",
      "img": "https://nypost.com/wp-content/uploads/sites/2/2022/09/GettyImages-1146871286-1.jpg"
    },
    {
      "year": "1995",
      "player": "David Robinson",
      "team": "San Antonio Spurs",
      "img": "https://www.basketballnetwork.net/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTk1OTk5OTQ0MzAwMDQ1MzM4/david-robinson.webp"
    },
    {
      "year": "1994",
      "player": "Hakeem Olajuwon",
      "team": "Houston Rockets",
      "img": "https://www.cobrockets.co.uk/wp-content/uploads/2022/07/city-of-birmingham-rockets-hakeem-abdul-olajuwon-3-1024x853.jpeg"
    },
    {
      "year": "1993",
      "player": "Charles Barkley",
      "team": "Phoenix Suns",
      "img": "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/2-charles-barkley-nba-photos.jpg"
    },
    {
      "year": "1992",
      "player": "Michael Jordan",
      "team": "Chicago Bulls",
      "img": "https://news.cgtn.com/news/3355544d3051444d334d444e3241544d3167444f31457a6333566d54/img/e353de46acbe48988f41b4358f8d0525/e353de46acbe48988f41b4358f8d0525.jpg"
    },
    {
      "year": "1991",
      "player": "Michael Jordan",
      "team": "Chicago Bulls",
      "img": "https://cdn-wp.thesportsrush.com/2022/06/cdd6aaf1-untitled-design-2022-06-22t225316.121.jpg"
    },
    {
      "year": "1990",
      "player": "Magic Johnson",
      "team": "Los Angeles Lakers",
      "img": "https://lh3.googleusercontent.com/mqOTELFx6c_4-NZldJS0zbwWUV9rPc56HnBc0WaDB-MuNON1_o_0At5kMRZLuimJepuElEraSpf4AqyGr6G50zC1LFenjPKVj3UEtRKUww"
    },
    {
      "year": "1989",
      "player": "Magic Johnson",
      "team": "Los Angeles Lakers",
      "img": "https://lh3.googleusercontent.com/FiskDEWX2tnpSufuZCBtDzIiFJH9CWhOMmON6lVx044JQCw3G5wTgN2eQjOjGSTPZQxbsw5WzaM-EoH2N9-uNG2iV7rU2lb3M47H2_At"
    },
    {
      "year": "1988",
      "player": "Michael Jordan",
      "team": "Chicago Bulls",
      "img": "https://lh3.googleusercontent.com/GNn4QLGA0JaQ-iKCMCwLhjX62XW-GB9c-9tz6pqEEMwi-VH6LFFHwjFhS73FPIS-U3aRYdDXxppfrK3O6OiJIVKVPd7lEzo5jfsjJ4rs"
    },
    {
      "year": "1987",
      "player": "Magic Johnson",
      "team": "Los Angeles Lakers",
      "img": "https://lh3.googleusercontent.com/3hxzRcYfEcm79eGcqQJ5dLPLQdEcNYN6HWYpVK7seo8Qj1E_VeHJrRaEfY28rIvZViymqzLuyHiJqL2Viqduo6lHW8EVYOPBtHybw3Y"
    },
    {
      "year": "1986",
      "player": "Larry Bird",
      "team": "Boston Celtics",
      "img": "https://lh3.googleusercontent.com/x-uV71H8fi0bf9yl3ga80rXHtGighmQ6JPOZe2C3qmJIwV5aRn2Q8LBOhuJ6VOFBN_Kdg0xdwLFqq0iVuyHndD-HBRYUASvqQci4mwk"
    },
    {
      "year": "1985",
      "player": "Larry Bird",
      "team": "Boston Celtics",
      "img": "https://lh3.googleusercontent.com/6j_u-JHYleNKPRrZTzs2DG-VphFDqd1nBZcwC9TcRFh4-E5ccpS3Fh4vz_0QREGbvanFQbTj3wIEs2qCoCi9_L65JlbCEbua8BMNhgHG"
    },
    {
      "year": "1984",
      "player": "Larry Bird",
      "team": "Boston Celtics",
      "img": "https://lh3.googleusercontent.com/OdJ7z8PTmKcooilwyyIBtb2KHEPz5vViLUQcpRT7iNYCHx9dBsVnUxoLFbDG1Ee7zwjqfGje6uv9Fo4gCsv6tSTlXIgBZmv9UR9Nwg"
    },
    {
      "year": "1983",
      "player": "Moses Malone",
      "team": "Philadelphia 76ers",
      "img": "https://lh3.googleusercontent.com/hicXAUck34pXt9rIIpTfHHOvqfdTLFeHBv_h5spH_d28LlfLA8D4rDpBgjDAXZa2Ytq9CofTVYe1qpfbSdf3dPY_QgQrJZU7jljdmHtSJA"
    },
    {
      "year": "1982",
      "player": "Moses Malone",
      "team": "Houston Rockets",
      "img": "https://lh3.googleusercontent.com/bOv5wGArFfkpMb_NDK4tSd-vVwecrZdI5vkvORumtn8JK7px_iZ0II1U0WZrYBOuFGcuZfo_t1A_AhXH_jgJBW32PUgn-M1EvynwlSUV"
    },
    {
      "year": "1981",
      "player": "Julius Erving",
      "team": "Philadelphia 76ers",
      "img": "https://lh3.googleusercontent.com/OIgMAWg4GMHBakbu7PwZ0yYuQDY0RlbKhyP4oCrnkS0N7H1-hyE8JroXaci9Paja6nqHJN5X8Vp9g3bElj3w_dqk32bjErQecdm-3A26"
    },
    {
      "year": "1980",
      "player": "Kareem Abdul-Jabbar",
      "team": "Los Angeles Lakers",
      "img": "https://lh3.googleusercontent.com/yU3-MiOKztA_ax7VXKTf9-AOF9h6Ajzu_XLO_tLcoOrllL_C-TooHJNjK5Y0c2OUvup60vrgXlEUItvqgldjOXV7P6pBNwRSD6HUt4KR"
    },
    {
      "year": "1979",
      "player": "Moses Malone",
      "team": "Houston Rockets",
      "img": "https://lh3.googleusercontent.com/6UJ-OjMCLudqD7_LPkq0gBQ1TJTXCMkTg_f9TjPabV5Y6fAb3tTEEkprLRNPMifdWnWYq5lt5ZWYml9l4xoPacqJaTchypS1IZr0_PWN"
    },
    {
      "year": "1978",
      "player": "Bill Walton",
      "team": "Portland Trail Blazers",
      "img": "https://lh3.googleusercontent.com/M8na-aLdSAD5JLAo8prUL-O4CfoIlrtlJz0-t4iXf5CqtNT9NEh9u-aAMq1GM21NGYGxzpT8ij8NJkUB62gN6NilXZveebiLV68iRLMxXg"
    },
    {
      "year": "1977",
      "player": "Kareem Abdul-Jabbar",
      "team": "Los Angeles Lakers",
      "img": "https://lh3.googleusercontent.com/yU3-MiOKztA_ax7VXKTf9-AOF9h6Ajzu_XLO_tLcoOrllL_C-TooHJNjK5Y0c2OUvup60vrgXlEUItvqgldjOXV7P6pBNwRSD6HUt4KR"
    },
    {
      "year": "1976",
      "player": "Kareem Abdul-Jabbar",
      "team": "Los Angeles Lakers",
      "img": "https://lh3.googleusercontent.com/yU3-MiOKztA_ax7VXKTf9-AOF9h6Ajzu_XLO_tLcoOrllL_C-TooHJNjK5Y0c2OUvup60vrgXlEUItvqgldjOXV7P6pBNwRSD6HUt4KR"
    },
    {
      "year": "1975",
      "player": "Bob McAdoo",
      "team": "Buffalo Braves",
      "img": "https://lh3.googleusercontent.com/rfhNiTidnSaO6_evvFl731O2JKtSNWGfw34ncaUoV7UWxUCaNCEbl6xZ3WPqfIOrNgkiw9ecGIKIGoU0iFa4OJ-Orf4TIU6bd6V7-SCk"
    },
    {
      "year": "1974",
      "player": "Kareem Abdul-Jabbar",
      "team": "Milwaukee Bucks",
      "img": "https://lh3.googleusercontent.com/T3WlP0dCtBWd87OX8O8NzPhnOzfdo2U_dwm0rMVCS6h2JCJD6fIvcYirkHOvDRCMKxEfUeyG27d8EZyfm2_C1MjEmFFNAGgME9-w1mlv"
    },
    {
      "year": "1973",
      "player": "David Cowens",
      "team": "Boston Celtics",
      "img": "https://lh3.googleusercontent.com/8RPUhFAvuKmmf8pfJ6YQszdhqv2NlOcJ-xhiWq09Nlt45WNPctQ8yV4bCmYhUXy8-lxGeHw29kjHv-BZeK3jqd9Aha_xow99fyH-UVV1GQ"
    },
    {
      "year": "1972",
      "player": "Kareem Abdul-Jabbar",
      "team": "Milwaukee Bucks",
      "img": "https://lh3.googleusercontent.com/T3WlP0dCtBWd87OX8O8NzPhnOzfdo2U_dwm0rMVCS6h2JCJD6fIvcYirkHOvDRCMKxEfUeyG27d8EZyfm2_C1MjEmFFNAGgME9-w1mlv"
    },
    {
      "year": "1971",
      "player": "Kareem Abdul-Jabbar",
      "team": "Milwaukee Bucks",
      "img": "https://lh3.googleusercontent.com/T3WlP0dCtBWd87OX8O8NzPhnOzfdo2U_dwm0rMVCS6h2JCJD6fIvcYirkHOvDRCMKxEfUeyG27d8EZyfm2_C1MjEmFFNAGgME9-w1mlv"
    },
    {
      "year": "1970",
      "player": "Willis Reed",
      "team": "Los Angeles Lakers",
      "img": "https://lh3.googleusercontent.com/TU1hgE-J12NfJjNMcCJTCkrEcM0Dmna7WoaWTI4vO7FNluTNRxuBGJU98rouJOV5VOAS4_kHHQBdcExAy3HctjUSvH5G1viqyyXEGWBt"
    },
    {
      "year": "1969",
      "player": "Westley Unseld",
      "team": "Baltimore Bullets",
      "img": "https://lh3.googleusercontent.com/Gl2wOXbQXIK_TuWfgN2jYP2t2i2FJlNevDLuRpTQflYDlLRJlzLjbUi8Ui1arUfbn89WjnIRNzck6UUjMi8vzDNFJXfubZM0dHxLhxc"
    },
    {
      "year": "1968",
      "player": "Wilt Chamberlain",
      "team": "Philadelphia 76ers",
      "img": "https://lh3.googleusercontent.com/1eXmOYH9BxtMICCwjK_BuCxgeOHy7e51dCMn1E75NWZgfcOSUo3MUteqUoUytZrarQD8aJzxCrZSjlHKToL-ptTjmQAHmnvWlP-cNwhp"
    },
    {
      "year": "1967",
      "player": "Wilt Chamberlain",
      "team": "Philadelphia 76ers",
      "img": "https://lh3.googleusercontent.com/1eXmOYH9BxtMICCwjK_BuCxgeOHy7e51dCMn1E75NWZgfcOSUo3MUteqUoUytZrarQD8aJzxCrZSjlHKToL-ptTjmQAHmnvWlP-cNwhp"
    },
    {
      "year": "1966",
      "player": "Wilt Chamberlain",
      "team": "Philadelphia 76ers",
      "img": "https://lh3.googleusercontent.com/1eXmOYH9BxtMICCwjK_BuCxgeOHy7e51dCMn1E75NWZgfcOSUo3MUteqUoUytZrarQD8aJzxCrZSjlHKToL-ptTjmQAHmnvWlP-cNwhp"
    },
    {
      "year": "1965",
      "player": "Bill Russell",
      "team": "Boston Celtics",
      "img": "https://lh3.googleusercontent.com/_Z0LdVXiOyDltLRYR85mKdQkWrw5IKpAMt2pxQusmDsQvfAfqVqrsSDql_UlKO45_7qpro4mbmhmPqH-W8VWHeVtsOZEmD-W0rpLM5g"
    },
    {
      "year": "1964",
      "player": "Oscar Robertson",
      "team": "Cincinatti Royals",
      "img": "https://lh3.googleusercontent.com/8uDOc_QTLMqn8XsiF0TcPtOvCmS_K81Gc7rwVC9_cf_dYjUU8cFx21EQJgZcg575Br6eTxb1VST6vEpMwH166q5hXKhQv_7_QaWrB6I"
    },
    {
      "year": "1963",
      "player": "Bill Russell",
      "team": "Boston Celtics",
      "img": "https://lh3.googleusercontent.com/_Z0LdVXiOyDltLRYR85mKdQkWrw5IKpAMt2pxQusmDsQvfAfqVqrsSDql_UlKO45_7qpro4mbmhmPqH-W8VWHeVtsOZEmD-W0rpLM5g"
    },
    {
      "year": "1962",
      "player": "Bill Russell",
      "team": "Boston Celtics",
      "img": "https://lh3.googleusercontent.com/_Z0LdVXiOyDltLRYR85mKdQkWrw5IKpAMt2pxQusmDsQvfAfqVqrsSDql_UlKO45_7qpro4mbmhmPqH-W8VWHeVtsOZEmD-W0rpLM5g"
    },
    {
      "year": "1961",
      "player": "Bill Russell",
      "team": "Boston Celtics",
      "img": "https://lh3.googleusercontent.com/_Z0LdVXiOyDltLRYR85mKdQkWrw5IKpAMt2pxQusmDsQvfAfqVqrsSDql_UlKO45_7qpro4mbmhmPqH-W8VWHeVtsOZEmD-W0rpLM5g"
    },
    {
      "year": "1960",
      "player": "Wilt Chamberlain",
      "team": "Philadelphia Warriors",
      "img": "https://lh3.googleusercontent.com/_1JK8QN8JjQllDWadamWujEbdl9IYuZAPaKRMUTO1zRe9xbPyQ_pB7di_epw400NIwAuaei4m0wIwuQNh89tMvptVmslT9ivutxaYgw"
    },
    {
      "year": "1959",
      "player": "Bob Pettit",
      "team": "St. Louis Hawks",
      "img": "https://lh3.googleusercontent.com/4rWNb7ZwoLdl3F4XD-blU4sJdiGrWGWT3Jc6ckITJD6YsprHAOGM1iVcmOlNKng1DBgLsKBD--w048SMP1ELrUZEAI9g5r8SaNZ-YgEgeg"
    },
    {
      "year": "1958",
      "player": "Bill Russell",
      "team": "Boston Celtics",
      "img": "https://lh3.googleusercontent.com/_Z0LdVXiOyDltLRYR85mKdQkWrw5IKpAMt2pxQusmDsQvfAfqVqrsSDql_UlKO45_7qpro4mbmhmPqH-W8VWHeVtsOZEmD-W0rpLM5g"
    },
    {
      "year": "1957",
      "player": "Bob Cousy",
      "team": "Boston Celtics",
      "img": "https://lh3.googleusercontent.com/crgb3-HsEKopZ6UeqNma4_ZueE1elvhLTIcfvRKIYLe7vKj9nREeJZkpguOkoGT4udDRi2szpKYhMBFE4_geQ-44Quq8wDCo9Am6mig"
    },
    {
      "year": "1956",
      "player": "Bob Pettit",
      "team": "Boston Celtics",
      "img": "https://lh3.googleusercontent.com/4rWNb7ZwoLdl3F4XD-blU4sJdiGrWGWT3Jc6ckITJD6YsprHAOGM1iVcmOlNKng1DBgLsKBD--w048SMP1ELrUZEAI9g5r8SaNZ-YgEgeg"
    }
]

server.get("/MVPS/year/:year", (req, res) => {
    const {year} = req.params;
    const targetYear = mvps.find(mvp => mvp.year === year);
    res.json((targetYear));
    

});

server.get("/", (req, res) => {
  res.json({mvps})
})

server.get("/MVPS/player/:player", (req, res) => {
  const {player} = req.params;
  let allPlayer = []
  mvps.map(mvp => {
    if (mvp.player.toLowerCase() === player) {
    allPlayer.push(mvp)
    }
  });
  // console.log(allPlayer)
  res.json((allPlayer));
  
});


server.get("*", (req, res) => {
    res.json({
        message:"this page blah blah blah"
    });

});

server.listen(8080, () => {
    console.log("The server is running at PORT 8080");
})

