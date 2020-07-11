//вертикальные столбики
var ctxB = document.getElementById("barChart").getContext('2d');
				var myBarChart = new Chart(ctxB, {
				type: 'bar',
				data: {
				labels: ["Категория", "Категория", "Категория", "Категория", "Категория", "Категория"],
				datasets: [{
				label: 'Столбик',
				data: [12, 19, 4, 8, 6, 3],
				backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(255, 159, 64, 0.2)'
				],
				borderColor: [
				'rgba(255,99,132,1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)'
				],
				borderWidth: 1
				}]
				},
				options: {
				scales: {
				yAxes: [{
				ticks: {
				beginAtZero: true
				}
				}]
				}
				}
				});



//горизонтальные столбики
new Chart(document.getElementById("horizontalBar"), {
	"type": "horizontalBar",
	"data": {
	"labels": ["Категория", "Категория", "Категория", "Категория", "Категория", "Категория", "Категория"],
	"datasets": [{
	"label": "горизонтальные",
	"data": [22, 33, 55, 12, 86, 23, 14],
	"fill": false,
	"backgroundColor": ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)",
	"rgba(255, 205, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(54, 162, 235, 0.2)",
	"rgba(153, 102, 255, 0.2)", "rgba(201, 203, 207, 0.2)"
	],
	"borderColor": ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)",
	"rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"
	],
	"borderWidth": 1
	}]
	},
	"options": {
	"scales": {
	"xAxes": [{
	"ticks": {
	"beginAtZero": true
	}
	}]
	}
	}
});



//круговая
var ctxP = document.getElementById("pieChart").getContext('2d');
var myPieChart = new Chart(ctxP, {
	type: 'pie',
	data: {
	labels: ["Категория", "Категория", "Категория", "Категория", "Категория"],
	datasets: [{
	data: [50, 20, 20, 5, 5],
	backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
	hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
	}]
	},
	options: {
	responsive: true
	}
});


//пузырьковая
var ctxBc = document.getElementById('bubbleChart').getContext('2d');
var bubbleChart = new Chart(ctxBc, {
type: 'bubble',
data: {
datasets: [{
label: 'Категория',
data: [{
x: 4,
y: 7,
r: 10
}],
backgroundColor: "#ff6384",
hoverBackgroundColor: "#ff6384"
}, {
label: 'Категория',
data: [{
x: 5,
y: 7,
r: 10
}],
backgroundColor: "#44e4ee",
hoverBackgroundColor: "#44e4ee"
}, {
label: 'Категория',
data: [{
x: 6,
y: 7,
r: 10
}],
backgroundColor: "#62088A",
hoverBackgroundColor: "#62088A"
}]
}
})


//график с заливкой
//line
var ctxL = document.getElementById("lineChart").getContext('2d');
var myLineChart = new Chart(ctxL, {
	type: 'line',
	data: {
	labels: ["Категория", "Категория", "Категория", "Категория", "Категория", "Категория", "Категория"],
	datasets: [{
	label: "Первая линия",
	data: [65, 59, 85, 80, 56, 55, 40],
	backgroundColor: [
	'rgba(105, 0, 132, .2)',
	],
	borderColor: [
	'rgba(200, 99, 132, .7)',
	],
	borderWidth: 2
	},
	{
	label: "Вторая линия",
	data: [28, 48, 40, 19, 86, 27, 90],
	backgroundColor: [
	'rgba(0, 137, 132, .2)',
	],
	borderColor: [
	'rgba(0, 10, 130, .7)',
	],
	borderWidth: 2
	}
	]
	},
	options: {
	responsive: true
	}
});