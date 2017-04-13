'use strict';

import qs from 'qs';

class Api {

	constructor() {
		this.BASE_URL = 'https://jsonplaceholder.typicode.com';
	}

	async _fetch(opts) {
		opts = {
			method: 'GET',
			url: null,
			body: null,
			callback: null,
			...opts,
		};

		const reqOpts = {
			method: opts.method,
			headers: {
			},
		};

		const token = '';
		if (token) {
			reqOpts.headers['Authorization'] = 'Bearer ' + token;
		}

		if (opts.method != 'GET') {
			reqOpts.headers['Accept'] = 'application/json';
			reqOpts.headers['Content-Type'] = 'application/json';
		}

		let url = this.BASE_URL + '/' + opts.url;
		if (opts.body) {
			if (Object.keys(opts.body).length > 0 && opts.body.constructor === Object) {
				if (opts.method === 'GET') {
					url += `?${qs.stringify(opts.body)}`;
				} else {
					reqOpts.body = JSON.stringify(opts.body);
				}
			}
		}
		console.log('REQUEST URL:', url);
		console.log('REQUEST OPTIONS:', reqOpts);
		const res = await fetch(url, reqOpts);
		return res.json()
			.then(
			function (json) {
				console.log('RESPONSE:', json);
				if (res.status >= 200 && res.status < 400) {
					return json;
				} else {
					throw json;
				}
			}
			);
	}

	async getAlbums() {
		return this._fetch({
			url: 'albums',
			method: 'GET'
		});
	}

}

// The singleton variable
const api = new Api();
export default api;