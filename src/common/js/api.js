// var webUrl = 'http://39.108.211.20:8888'
var webUrl = 'http://112.74.43.113:10101'
var request = function (url, data) {
	return new Promise(function (resolve, reject) {
		$.ajax({
            url: url,
            type: 'GET',
            dataType: 'json',
            data: data,
            success: function(data) {
                resolve(data);
            },
            fail: function(error) {
            	reject(error);
            }
        })
	});
};

//新闻查询
function inquire(data) {
	return request(webUrl + '/getZlArticle', data)
}

//新闻详细
function detail(data) {
    return request(webUrl + '/getZlArticleById', data)
}