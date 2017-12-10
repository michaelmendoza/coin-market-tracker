import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header.jsx';
import TickerTable from './ticker-table.jsx';

class AppView extends React.Component {

	render() {
		return <section className='app-view'>  
			<Header/>
			<div className='layout-center'>
				<TickerTable/>
			</div>
		</section>
	}
}

ReactDOM.render(<AppView/>, document.getElementById('app-view'));