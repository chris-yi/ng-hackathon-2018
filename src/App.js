import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import firebase from './firebase/firebase';

class App extends Component {
	state = { mood: 2 };


	checkTheMood = async () => {
		return await axios.post('https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment', {}, { headers: { 'Ocp-Apim-Subscription-Key': 'a51c5282a8e949a7b783e38ce7b020b0' } });
	};

	sendText = async (e) => {
		console.log(' here is the message', this.refs.text.value);

		const itemsRef = firebase.database().ref('items');
		const item = {
			text: this.refs.text.value,
			name: 'danny',
		};
		itemsRef.push(item);
	};
	onEnter = (e) => {
		if (e.which === 13) {
			this.sendText();
		}
	};

	render() {

		const emojis = ['https://cdn.shopify.com/s/files/1/1061/1924/products/Cold_Sweat_Emoji_large.png?v=1480481051', 'https://cdn.shopify.com/s/files/1/1061/1924/products/Anguished_Face_Emoji_large.png?v=1480481051', 'https://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Face_without_Mouth_large.png?v=1480481052', 'https://cdn.shopify.com/s/files/1/1061/1924/products/Kiss_Emoji_with_Closed_Eyes_large.png?v=1480481054', 'https://cdn.shopify.com/s/files/1/1061/1924/products/Heart_Eyes_Emoji_large.png?v=1480481053'];

		return (
			<div>
				<div className="text-display-container">
				</div>
				<div className="text-input-container">
					<input type="text" className="text-input" ref="text" onKeyPress={this.onEnter}/>
					<button onClick={this.sendText}>Submit</button>
					<div className="emoji-container"><img src={emojis[this.state.mood]} className="emoji"/></div>
				</div>
			</div>
		);
	}
}

export default App;
