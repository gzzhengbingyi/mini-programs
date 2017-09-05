App({
	onLaunch: function(){
		wx.login({
			success: function(res){
				if(res.code){
					wx.request({
						url: "https://www.easy-mock.com/mock/59ad16c0e0dc6633419badf2/example/login",
						method: "POST",
						data: {
							code: res.code
						}
					})
				} else{
					console.log("获取失败")
				}
			}
		});
		
		wx.getUserInfo({
			lang: "zh-CN",
			success: res => {
				var userInfo = res.userInfo;
			    this.data.userInfo = userInfo;
			    if(this.userInfoReadyCallback){
			    	this.userInfoReadyCallback(res)
			    }
			}
		})
	},
	onShow: function(){

	},
	onHide: function(){

	},
	onError: function(){

	},
	data: {
		userInfo: null
	}
})