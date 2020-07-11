//сложный график

$(function () {
	 $("#chart").shieldChart({
	 theme: "light",
	 primaryHeader: {
	 text: "График2"
	 },
	 exportOptions: {
	 image: false,
	 print: false
	 },
	 axisY: [{
	 min: 1,
	 max: 60,
	 title: {
	 text: 'Вертикаль',
	 style: {
	 color: '#4DB0F5'
	 }
	 },
	 axisTickText: {
	 style: {
	 color: '#4DB0F5'
	 }
	 }
	 }, {
	 min: 1,
	 max: 5,
	 title: {
	 text: 'Вертикаль',
	 style: {
	 color: '#FFC500'
	 }
	 },
	 swapLocation: true,
	 axisTickText: {
	 style: {
	 color: '#FFC500'
	 }
	 }
	 }, {
	 min: 1,
	 max: 40,
	 title: {
	 text: 'Вертикаль',
	 style: {
	 color: '#FF1800'
	 }
	 },
	 swapLocation: true,
	 axisTickText: {
	 style: {
	 color: '#FF1800'
	 }
	 }
	 }],
	 dataSeries: [{
	 seriesType: 'line',
	 axis: 0,
	 collectionAlias: "Категория1",
	 data: [42.7, 52.8, 63.1, 23.5, 53, 55.8, 57.7]
	 }, {
	 seriesType: 'line',
	 axisY: 1,
	 collectionAlias: "Категория2",
	 data: [2.75, 2.80, 2, 2.55, 2.60, 2.90, 3.05]
	 }, {
	 seriesType: 'line',
	 axisY: 2,
	 collectionAlias: "Категория3",
	 data: [20, 22.9, 32.1, 31, 22.8, 22.4, 32.10]
	 }]
	 });
});