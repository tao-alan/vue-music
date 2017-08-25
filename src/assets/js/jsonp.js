import originJsonp from 'jsonp'
//用Promise封装jsonp请求函数
export default function jsonp(url, data, option) {
	url += (url.indexOf('?') < 0 ? '?' : '&') + param(data);
	return new Promise((resolve, reject) => {
		originJsonp(url, option, (err, data) => {
			if (!err) {
				resolve(data);
			} else {
				reject(err);
			}
		})
	})
}
//拼接url参数
function param(data) {
	let url = '';
	for (let k in data) {
		let val = data[k] !== undefined ? data[k] : '';
		url += '&' + k + '=' + encodeURIComponent(val);
	}
	return url ? url.substring(1) : '';
}
