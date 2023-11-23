// App.js

import React from "react";
import axios from "axios";
import clsx from 'clsx';
import styles from './styles.module.css';


class App extends React.Component {
	state = { advice: "" };

	componentDidMount() {
		this.fetchAdvice();
	}

	fetchAdvice = () => {
		axios
			.get("https://api.adviceslip.com/advice")
			.then((response) => {
				const { advice } = response.data.slip;

				this.setState({ advice });
			})

			.catch((error) => {
				console.log(error);
			});
	};

	render() {
		const { advice } = this.state;

		return (
			<section className={styles.dailyQuote}>
				<div className="container">
					<h1 className={styles.dailyQuoteTitle}>DAILY QUOTE</h1>
					<div className={styles.quoteContainer}>
						<div className={styles.quoteCard}>
							<p className={styles.quoteText}>
								❝
								{advice}
								❞	
							</p>
							<button className={styles.quoteButton} onClick={this.fetchAdvice}>
								<span>Change Quote</span>
							</button>
						</div>	
					</div>
				</div>
			</section>
		);
	}
}

export default App;
