import './index.scss';
import './../fonts/font-awesome.min.css';
import 'bootstrap-sass-grid';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import 'jquery-mask-plugin'
import 'bourbon';
import Chart from 'chart.js';
const CHART = document.getElementById('myBarChart');
const CHART2 = document.getElementById('myBarChart2');
Chart.defaults.global.legend.display=false;
let lineChart = new Chart(CHART, {
	type: 'horizontalBar',
	data: {
		labels: ["1", "2", "3", "4", "5"],
		datasets: [{
			label: '# of Votes',
			data: [0.2, 0.7, 0.3],
			backgroundColor: [
				'#4cbd66',
				'#4cbd66',
				'#4cbd66'
			],
			borderColor: [
				'#4cbd66',
				'#4cbd66',
				'#4cbd66'
			],
			borderWidth: 1
		},{
			label: '# of blues',
			data: [-1.5, -0.5, -0.6, -0.2, 0],
			backgroundColor: [
				'#4cbd66',
				'#4cbd66',
				'#4cbd66',
				'#4cbd66',
				'#4cbd66'
			],
			borderColor: [
				'#4cbd66',
				'#4cbd66',
				'#4cbd66',
				'#4cbd66',
				'#4cbd66'
			],
			borderWidth: 1
		}]
	},
	options: {
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero:true
				}
			}]
		}
	}
});


let lineChart2 = new Chart(CHART2, {
	type: 'horizontalBar',
	data: {
		labels: ["1", "2", "3", "4", "5"],
		datasets: [{
			label: '# of Votes',
			data: [0.2, 0.7, 0.3],
			backgroundColor: [
				'#4cbd66',
				'#4cbd66',
				'#4cbd66'
			],
			borderColor: [
				'#4cbd66',
				'#4cbd66',
				'#4cbd66'
			],
			borderWidth: 1
		},{
			label: '# of blues',
			data: [-1.5, -0.5, -0.6, -0.2, 0],
			backgroundColor: [
				'#4cbd66',
				'#4cbd66',
				'#4cbd66',
				'#4cbd66',
				'#4cbd66'
			],
			borderColor: [
				'#4cbd66',
				'#4cbd66',
				'#4cbd66',
				'#4cbd66',
				'#4cbd66'
			],
			borderWidth: 1
		}]
	},
	options: {
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero:true
				},
				gridLines: {
					offsetGridLines: true
				}
			}]
		}
	}
});

/***tooltip***/
$('.table-link').mouseover(function() {
	$(this).parent().find('.table-tooltip').fadeIn();
	
});
$('.table-link').mouseleave(function() {
	$('.table-tooltip').fadeOut();
	
});
/***tooltip***/


$(document).ready(function(){
  $('#owl-carousel').owlCarousel({
	loop:false,
	margin:10,
	nav:true,
	navText: false,
	responsive:{
		0:{
			items:1
		},
		600:{
			items:1
		},
		1000:{
			items:1
		}
	}
  });
  $('#reviews').owlCarousel({
	loop:false,
	margin:10,
	nav:true,
	navText: false,
	responsive:{
		0:{
			items:1
		},
		768:{
			items:2
		},
		992:{
			items:2
		},
		1000:{
			items:2
		},
		1200:{
			items:3
		}
	}
  });
 $( ".owl-prev").html('<div class="row-image"></div>');
 $( ".owl-next").html('<div class="row-image"></div>');

 $( "#reviews .owl-nav .owl-prev").html('<div class="row-block"><div class="row-image"></div></div>');
 $( "#reviews .owl-nav .owl-next").html('<div class="row-block"><div class="row-image"></div></div>');

 $('.phone_with_ddd').mask('+7 (000) / 000 / 00 / 00', {placeholder: "_____/___/__/__"});
});
