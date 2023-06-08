
// Define the data to be used for the chart
const data = [
  { week: 'One', confidence: 75 },
  { week: 'Two', confidence: 80 },
  { week: 'Three', confidence: 60 },
  { week: 'Four', confidence: 65 },
  { week: 'Five', confidence: 65 },
  { week: 'Six', confidence: 90 },
  { week: 'Seven', confidence: 75 },
  { week: 'Eight', confidence: 80 },
  { week: 'Nine', confidence: 85 },
  { week: 'Ten', confidence: 88 }
];

// Define variables for the chart dimensions and scales
const margin = { top: 20, right: 20, bottom: 60, left: 60 };
const width = 800 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

// Create a band scale for the x-axis
const x = d3.scaleBand()
  .domain(data.map(d => d.week))
  .range([0, width])
  .padding(0.2);


// Create a linear scale for the y-axis
const y = d3.scaleLinear()
  .domain([0, d3.max(data, d => d.confidence)])
  .range([height, 150]);

  // Create an SVG element for the chart, define its width and height, and append a group element to it
const svg = d3.select('#chart')
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom + 20)
  .append('g')
  .attr('transform', `translate(${margin.left},${margin.top})`);

// Create rectangles for each data point and add interactivity with mouseover and mouseout events

svg.selectAll('.bar')
  .data(data)
  .enter()
  .append('rect')
  .attr('class', 'bar')
  .attr('x', d => x(d.week))
  .attr('width', x.bandwidth())
  .transition()
  .duration(10000)
  .attr('y', d => y(d.confidence))  
  .attr('height', d => height - y(d.confidence))
  .attr('fill', 'steelblue')
  .on("mouseover", function (d) {
    d3.select(this).style("fill", "#5db0f5");
  })
  .on("mouseout", function (d) {
    d3.select(this).style("fill", "steelblue");
  });



  // Add x-axis labels to the chart
svg.append('g')
  .attr('transform', `translate(0,${height})`)
  .call(d3.axisBottom(x))
  .selectAll('text')
  .style('text-anchor', 'end')
  .attr('dx', '-.8em')
  .attr('dy', '.15em')
  .attr('transform', 'rotate(-65)');




// Add y-axis labels to the chart
svg.append('g')
  .call(d3.axisLeft(y));


    // Select container element and append an SVG with a height and width
/*const transitionChartElement = d3
.select('#transition-easing')
.append('svg')
.attr('width', 900)
.attr('height', 200);*/




// Create the circle
/*const transitionChartSVG = transitionChartElement
.append("circle")
.attr("cx", 100)
.attr("cy", 50)
.attr("r", 20)
.style("fill", "red")


// Animate the circle
transitionChartSVG
.transition()
.duration(10000)
.attr("cx", 800)
.style("fill", "blue")

// Add easing
.ease(d3.easeBounceOut)*/


/* CODIO SOLUTION BEGIN*/
const body = document.querySelector('body');
const modeToggle = document.getElementById('mode-toggle');
const modeStatus = document.querySelector('.mode-status');
function toggleMode() {
body.classList.toggle('dark-mode');

const modeMessage = body.classList.contains('dark-mode');
    'Dark'
     "Light"

modeStatus.innerText = " " + modeMessage;
  }

modeToggle.addEventListener('click', toggleMode);

// WRITE YOUR CODE HERE
const images = document.querySelectorAll("img");
let index = 0;
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const active = "active" 
function showImg(i){
    images.forEach(image => image.classList.remove(active))
    images[i].classList.add(active)
}
next.addEventListener("click", function(){
  index = (index + 1) % images.length
   showImg(index);
   pause();
   })
prev.addEventListener("click", function(){
   index = (index + images.length - 1) % images.length
    showImg(index);
    pause();
    })
    showImg(index);
const buffer = 2000; // 2000 = 2 seconds
// Date.now() gets the current time in miliseconds
let current = Date.now();
// the target is some time in the future, in this case 5 seconds from now
let target = current + buffer;

// Functions
function timeLoop(){
  // this loop updates the current time
  // and checks if it's after the target time
  current = Date.now();
  if(current > target){
    // if it's after the target
    // then increment the index,
    // show the image
    // and set a new future target
    index = (index + 1) % images.length
    showImg(index);
    target = current + buffer;
  }
}

function pause(){
  // update current and target
  // this is like a reset on the current timer
  current = Date.now();
  target = current + buffer;
}


// setInterval is a function that is called constantly with a delay
// in this case it will call my timeLoop function every 100 miliseconds
// this is often enough that a user won't notice the delay, but infrequent enough to not cause the application to get stuck just doing this
setInterval(timeLoop, 100);





