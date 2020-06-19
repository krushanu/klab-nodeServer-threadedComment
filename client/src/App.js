import React, { Component } from 'react';

import logo from './logo.svg';

import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			response: '',
			post: '',
			responseToPost: '',
		};
	}

	componentDidMount() {
		this.callApi()
			.then((res) => this.setState({ commentTree: res.body }))
			.catch((err) => console.log(err));
	}

	callApi = async () => {
		const response = await fetch('/api/hello');
		const body = await response.json();
		if (response.status !== 200) throw Error(body.message);

		return body;
	};

	// handleSubmit = async (parentId) => {
	// 	const { blogComment } = this.state;
	// 	if (blogComment?.length) {
	// 		const response = await fetch('/api/world', {
	// 			method: 'POST',
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 			},
	// 			body: JSON.stringify({ blogComment: this.state.blogComment }),
	// 		});
	// 		const body = await response.text();

	// 		this.setState({ responseToPost: body });
	// 	}
	// };

	handleClick = async (parentId) => {
		console.log('Click happened');
		// if (blogComment?.length) {
		const response = await fetch('/api/world', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ blogComment: 'this.state.blogComment' }),
		});
		const body = await response.text();

		this.setState({ responseToPost: body });
		// }
	};

	render() {
		const { commentTree } = this.state;
		const blogContent = commentTree?.blogContent
			? commentTree.blogContent
			: '';
		const parentId = commentTree?.parentId ? commentTree.parentId : '';

		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>{blogContent}</p>
				</header>
				<p>
					<strong>Reply to Blog:</strong>
				</p>
				{/* <input
					type="text"
					value={this.state.post}
					onChange={(e) => this.setState({ post: e.target.value })}
				/> */}

				<textarea
					id="w3review"
					name="w3review"
					rows="4"
					cols="50"
					onChange={(e) =>
						this.setState({ blogComment: e.target.value })
					}
				/>

				<button onClick={this.handleClick}> Submit </button>
				<p>{this.state.blogComment}</p>
			</div>
		);
	}
}

export default App;
