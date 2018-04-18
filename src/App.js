import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import firebase from './firebase/firebase';

class App extends Component {
	state = {
		mood: 2,
		emojis: ['https://cdn.shopify.com/s/files/1/1061/1924/products/Cold_Sweat_Emoji_large.png?v=1480481051', 'https://cdn.shopify.com/s/files/1/1061/1924/products/Anguished_Face_Emoji_large.png?v=1480481051', 'https://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Face_without_Mouth_large.png?v=1480481052', 'https://cdn.shopify.com/s/files/1/1061/1924/products/Kiss_Emoji_with_Closed_Eyes_large.png?v=1480481054', 'https://cdn.shopify.com/s/files/1/1061/1924/products/Heart_Eyes_Emoji_large.png?v=1480481053'],
		textMessages: [{ name: 'Kris', text: 'Hey Babe <3' }, {
			name: 'Jessica',
			text: ' Ugh, I\'m really dissapointed in you a*******!',
		}],
	};
	sendText = () => {
		const itemsRef = firebase.database().ref('items');
		const item = {
			text: this.refs.text.value,
			name: 'danny',
		};
		itemsRef.push(item);
		this.refs.text.value = ''
	};

	onEnter = (e) => {
		if (e.which === 13) {
			this.sendText();
		}
	};

	componentDidMount() {
		const itemsRef = firebase.database().ref('items');
		itemsRef.on('value', (snapshot) => {
			let items = snapshot.val();
			let newState = [];
			for (let item in items) {
				newState.push({
					id: item,
					text: items[item].text,
					name: items[item].name
				});
			}
			this.setState({
				textMessages: newState
			});
		});
	}

	render() {
		console.log('textMessages', this.state.textMessages);
		const message = this.state.textMessages.map((message) => {
			return (
				<div className="message-container">
					<p className="name">{message.name} - </p>
					<p className="text">{message.text}</p>
				</div>
			);
		});

		return (
			<div>
				<h1>Sentimentaly</h1>
				<div className="text-display-container">
					{message}
				</div>
				<div className="text-input-container">
					<input type="text" className="text-input" ref="text" onKeyPress={this.onEnter}/>
					<button onClick={this.sendText}>Submit</button>
					<div className="emoji-container"><img src={this.state.emojis[this.state.mood]} className="emoji"/></div>
				</div>
			</div>
		);
	}
}

export default App;
