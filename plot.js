console.log(cityGrowths);
var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse(); 
console.log(sortedCities)


var topFiveCities = sortedCities.slice(0,5);
console.log(topFiveCities)

var topFiveCityNames = cityGrowths.map(city => city.City).slice(0,5);
console.log(topFiveCityNames)

var topFiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016)).slice(0,5);
console.log(topFiveCityGrowths)


var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);



console.log(cityGrowths);
 var sortedpopulation = cityGrowths.sort((a,b) =>
 a.population - b.population).reverse();
 console.log(sortedpopulation)

 var Top7largestpopulations = sortedpopulation.slice(0,7);
 console.log(Top7largestpopulations)

 var Top7largestCityNames = cityGrowths.map(city =>city.City).slice(0,7);
  console.log(Top7largestCityNames)

  var Top7largestpopulations = cityGrowths.map(city => parseInt(city.population)).slice(0,7);
  console.log(Top7largestpopulations)
  

  var trace = {
    x: Top7largestCityNames,
    y: Top7largestpopulations,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: " Seven largest cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population of the the cities"}
  };
  Plotly.newPlot("bar-plot", data, layout);