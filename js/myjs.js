var app = new Vue({
	el:"#weather",
	data:{
		city:'郑州',
		weatherList:[],
		dayu:'大雨',
		zhongyu:'中雨',
		yin:'阴',
		leizhenyu:'雷阵雨',
		xiaoyu:'小雨',
		duoyun:'多云',
		qing:'晴',
		xue:'雪',
		xiaoxue:'小雪'
	},
	methods:{
		searchWeather:function(){
			var that = this;
			axios.get('http://wthrcdn.etouch.cn/weather_mini?city='+this.city)
			.then(function(response){
				console.log(response.data.data);
				that.weatherList = response.data.data.forecast;
			}).catch(function(err){})
		}
	}
})