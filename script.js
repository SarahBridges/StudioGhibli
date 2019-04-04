var dataP = d3.json('https://ghibliapi.herokuapp.com/species?name=Cat')

dataP.then(function(data)
{
  console.log("data", data)

  var catLinks = []
  data[0].people.forEach(function(d) {catLinks.push(d);})



var cats = []


 catLinks.forEach(function(d) {d3.json(d).then(function(data){cats.push(data);})})

 console.log("cats", cats)

 var table = d3.select("table")

      var rows = table.selectAll("tr")
              .data(cats)
              .enter()
              .append("tr");

    rows.append("td")
       .text(function(d) {return d.name;})


},
function(err)
{
  console.log(err)
})

var addDataToArrays = function(d)
{
  cats.forEach
}
