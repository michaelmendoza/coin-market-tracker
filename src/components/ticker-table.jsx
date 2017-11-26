import React from 'react';

import MarketCap from '../stores/marketcap.js';

class TickerTable extends React.Component {

	constructor() {
		super();
		this.state = { tickers: []}
		MarketCap.get()
	}

	componentDidMount() {
		MarketCap.subscribe(this.update.bind(this));
	}

	componentWillUnmount() {
		MarketCap.unsubscribe(this.update.bind(this));
	}

	update() {
		this.setState({ tickers: MarketCap.tickers });
	}

	render() {
		var tickers = this.state.tickers;

		return <section className='ticker-table'>  
			Tickers

			{
				tickers.map((ticker, index) => { 
					return (<div key={index}>
						<span> {ticker.symbol} </span>
						<span> {ticker.price_usd} </span>
						<span> {ticker.price_btc} </span>
						<span> {ticker.percent_change_1h } </span>
						<span> {ticker.percent_change_24h } </span>
						<span> {ticker.percent_change_7d } </span>
					</div>)
				})
			}

 		</section>
	}
}

export default TickerTable;
