const searchBtn = document.getElementById("btn");
const inputContainer = document.getElementById("inputContainer");
const mvp = document.getElementById("player");
const stats = document.getElementById("stats");
const statContainer = document.getElementById("statContainer");

stats.addEventListener("click", async () => {
  mvp.innerHTML = " ";
  let allData = await fetch(`http://localhost:8080`);
  const response = await allData.json();
  console.log(response);
  response.mvps.map((stat) => {
    let mvpData = document.createElement("div");
    mvpData.setAttribute("id", "mvpData");
    mvpData.innerHTML = `<div id = "stats">  
      <div> Player: ${stat.player}</div>
      <div> Year: ${stat.year}</div>
      <div> Team: ${stat.team}</div> 
    </div>
    <div id = "img"> <img src= ${stat.img} /> </div>`;
    statContainer.appendChild(mvpData);
  });
});

searchBtn.addEventListener("click", () => {
  mvp.innerHTML = " ";
  search();
});

// // window.onload = mvps()

// async function mvps() {
//     const request = await fetch("http://localhost:8080/MVPS/")
//     const data = await request.json();
//     console.log(data)
//     return data
// }
renderInput();

async function search() {
  statContainer.innerHTML = " ";
  const inputdata = input.value;
  if (isNaN(inputdata)) {
    inputdata.toLowerCase();
    const request2 = await fetch(
      `http://localhost:8080/MVPS/player/${inputdata}`);
    const data2 = await request2.json();
    /* This code is looping through the array of MVP data returned from the API call and creating a
       new HTML `div` element for each MVP player. It then sets the inner HTML of the `div` to
       display the player's name, year, and team. Finally, it appends the `div` element to the `mvp`
       container element on the page. This effectively displays the MVP data for the searched player
       on the webpage. */
    data2.forEach((player) => {
      let mvpData = document.createElement("div");
      mvpData.setAttribute("id", "mvpData");
      // mvp.innerHTML += `<p> ${player.player} ${player.year} ${player.team} </p>`
      mvpData.innerHTML = 
      `<div id = "stats">  
        <div> Player: ${player.player}</div>
        <div> Year: ${player.year}</div>
        <div> Team: ${player.team}</div> 
      </div>
      <div> <img src= ${player.img} /> </div>
      `;
      mvp.appendChild(mvpData);
    });
    return data2;
  } else {
    const request = await fetch(`http://localhost:8080/MVPS/year/${inputdata}`);
    const data = await request.json();
    let years = document.createElement("div");
      years.setAttribute("id", "mvpData");
      years.innerHTML = 
      `<div id = "stats">  
      <div> Player: ${data.player}</div>
      <div> Year: ${data.year}</div>
      <div> Team: ${data.team}</div> 
      </div>
      <div> <img src= ${data.img} /> </div>
      `;
      mvp.appendChild(years);
   
    return data;
  }
}

function renderInput() {
  inputContainer.innerHTML = "";
  const input = document.createElement("input");
  (input.type = "text"),
    (input.id = "input"),
    inputContainer.appendChild(input);
}

// let tval = '3933'
// let nval = 'fex'
// let t = isNaN(tval)
// let n = isNaN(nval)
// console.log(t)
// console.log(n)

renderInput();

// const submit = document.getElementById
