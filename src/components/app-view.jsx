import React from 'react';
import ReactDOM from 'react-dom';

import TickerTable from './ticker-table.jsx';

class AppView extends React.Component {

	render() {
		return <section className='app-view'>  
			<TickerTable/>
		</section>
	}
}

ReactDOM.render(<AppView/>, document.getElementById('app-view'));