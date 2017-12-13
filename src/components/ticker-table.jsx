import React from 'react';

import MarketCap from '../stores/marketcap.js';

class TickerTable extends React.Component {

	constructor() {
		super();
		this.state = { tickers: []}
		MarketCap.get();
		MarketCap.setInterval();
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
		const tickers = this.state.tickers;
		const getColor = MarketCap.getColor;
		
		return <section className='table ticker-table'>  
			<div className="table-header layout-row">  
				<span className="table-cell ticker"> Ticker </span> 
				<span className="table-cell usd"> USD </span> 
				<span className="table-cell btc"> BTC </span> 
				<span className="table-cell chg"> % Chg (1h) </span> 
				<span className="table-cell chg"> % Chg (24h) </span> 
				<span className="table-cell chg"> % Chg (7d) </span> 
			</div>

			{
				tickers.map((ticker, index) => { 
					return (<div key={index} className='table-row layout-row'>
						<span className="table-cell ticker"> {ticker.symbol} </span>
						<span className="table-cell usd"> {ticker.price_usd} </span>
						<span className="table-cell btc"> {ticker.price_btc} </span>
						<span className={"table-cell chg " + getColor(ticker.percent_change_1h)}> {ticker.percent_change_1h } % </span>
						<span className={"table-cell chg " + getColor(ticker.percent_change_24h)}> {ticker.percent_change_24h } % </span>
						<span className={"table-cell chg " + getColor(ticker.percent_change_7d)}> {ticker.percent_change_7d } % </span>
					</div>)
				})
			}

 		</section>
	}
}

export default TickerTable;
