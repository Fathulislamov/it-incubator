import { Provider } from 'react-redux';
import './App.css';
import { PostsPages } from './pages/PostsPages';

function App(props: { store: any }) {
	return (
		<Provider store={props.store}>
			< div className="App" >
				<PostsPages />
			</div >
		</Provider>
	);
}

export default App;
