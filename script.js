var dataP = d3.json('https://ghibliapi.herokuapp.com/people?species=https://ghibliapi.herokuapp.com/species/603428ba-8a86-4b0b-a9f1-65df6abef3d3')

dataP.then(function(data)
{
  console.log("data", data)

  var cats = []

  var header = {name:"Name", eye_color:"Eye Color", hair_color:"Hair Color"};

  cats.push(header)
  data.forEach(function(d) {return cats.push(d);})

  console.log("cats", cats)

 var table = d3.select("body")
               .append("table")
              .attr("id", "table");


      var rows = table.selectAll("tr")
              .data(cats)
              .enter()
              .append("tr")

            rows.append("td")
            .text(function(d){return d.name;})

            rows.append("td")
                .text(function(d){return d.eye_color;})

          rows.append("td")
              .text(function(d){return d.hair_color;})


},
function(err)
{
  console.log(err)
})
