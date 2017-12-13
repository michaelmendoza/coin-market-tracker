
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

	setInterval() { 
		setInterval( function(){ this.get(); }.bind(this), 10000);
	}

	get() {
		var url = "https://api.coinmarketcap.com/v1/ticker/?limit=10"; // Updates every 5 minutes
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

	getColor(value) {
		var value = parseFloat(value)
		return value > 0 ? 'green' : 'red';
	}
}

export default new MarketCap();
