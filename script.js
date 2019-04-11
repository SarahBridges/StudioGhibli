var dataP = d3.json('https://ghibliapi.herokuapp.com/species?name=Cat')

dataP.then(function(data)
{
  console.log("data", data)

  var catLinks = []
  data[0].people.forEach(function(d) {catLinks.push(d);})



var cats = []


 catLinks.forEach(function(d) {d3.json(d).then(function(data){cats.push(data);})})

 console.log("cats", cats)

 var table = d3.select("body").append("table");

      var cols = table.selectAll("tr")
              .data(cats)
              .enter()
              .append("tr");

    cols.selectAll("td").data(cats).enter().append("td")
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
