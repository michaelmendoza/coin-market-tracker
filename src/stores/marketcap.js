
import EventEmitter from 'events';
import 'whatwg-fetch';

class MarketCap extends EventEmitter {
	constructor() {
		super();
	}

	/** Subscribes to this store */
	subscribe(callback) {
		this.on('update', callback);
	}

	/** Unsubscribes to this store */
	unsubscribe(callback) {
		this.removeListener('update', callback);
	}

	get() {
		var url = "https://api.coinmarketcap.com/v1/ticker/?limit=10";
		var _this = this;

		return fetch(url)
		.catch((err) => { 
			console.log('Failed to get Orders', err); 
		})
		.then((res) => { 
			return res.json(); 
		})
		.then((json) => {
			this.tickers = json; 
			this.emit('update');
		})
	}
}

export default new MarketCap();
