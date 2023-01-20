async function getdata() {
  const url = "https://api.covid19api.com/summary";
  const fetching = await fetch(url);
  const response = await fetching.json();
  // console.log(response);
  let c = response.Countries;
  c.forEach((element) => {
    return element.Country;
  });

  let count = c.length;
  Countries.innerHTML = count;
  console.log("working");
  console.log(response.Global.NewDeaths);

  // for (let index = 0; index < c.length; index++) {
  //   // console.log(index);
  //   let tc = document.getElementById("Countries");
  //   tc.innerHTML = index;
  // }

  TotalConfirmed.innerHTML = response.Global.TotalConfirmed;
  Lastupdate.innerHTML = new Date(response.Global.Date);
  NewDeath.innerHTML = response.Global.NewDeaths;

  let a = document.querySelectorAll(".ref");
  a.forEach((element) => {
    element.addEventListener("click", calFunc);
    // console.log(element);
  });
  // console.log(c);
  //   console.table(response.Countries);
}

function calFunc() {

  this.parentElement.children[1].firstElementChild.innerHTML = '<span class="spinner-border"></span>';
  // console.log(this.parentElement.children[1].firstElementChild);
console.log(this);
  setTimeout(() => {
    getdata();
  }, 1000);
}

getdata();

//totalcases
// $("#casesRefresh").on("click", function () {
//   $("#totalConfirmed").load("   #totalConfirmed");
//   console.log('aaaa');

//   getdata()
// });
//Country
// $("#countriesRefresh").on("click", function () {
//   $("#country").load("   #country");
//   console.log('bbbb');
//   getdata();
// });

//LastUpdate
// $("#lastupdatedRefresh").on("click", function () {
//   $("#Lastupdate").load("   #Lastupdate");
//   getdata();
// });

//New Death
// $("#DeathRefresh").on("click", function () {
//   $("#NewDeath").load("   #NewDeath");
//   getdata();
// });
