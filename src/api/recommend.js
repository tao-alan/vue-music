import jsonp from '@/assets/js/jsonp';
import {
	commonParams,
	options
} from '@/api/config';

//请求轮播图
export function getRecommend() {
	const url = "https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg";
	const data = Object.assign({}, commonParams, {
		platform: 'h5',
		uin: 0,
		needNewCode: 1
	})
	return jsonp(url, commonParams, options);
}
