const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));


// Classic Hello to see that it is working
// d3.json(url).then(function(data){
//   console.log("hello");
// });
// d3.json(url).then(spaceXResults =>
//   console.log(spaceXResults[0]));
// d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

// d3.json(url).then(spaceXResults => console.log(spaceXResults[0].location.latitude));

d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});
