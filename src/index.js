import ReactDOM from 'react-dom';

import '../node_modules/normalize.css/normalize.css';
import './styles/styles.css';

import routes from './router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();