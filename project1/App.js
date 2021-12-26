import React from 'react';
import { Button, Text, View, StyleSheet, TouchableOpacityBase, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { vibrate } from './utils';
import GradientButton from 'react-native-gradient-buttons';

function n(n) {
	return n > 9 ? '' + n : '0' + n;
}

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			mins: 25,
			secs: 0,
			disablePlay: false,
			isStudyBlock: true,
		};
	}

	resetTimer = () => {
		this.setState((prevState) => {
			if (this.state.isStudyBlock)
				return {
					mins: 25,
					secs: 0,
					disablePlay: prevState.disablePlay,
				};
			else
				return {
					mins: 5,
					secs: 0,
					disablePlay: prevState.disablePlay,
				};
		});
	};

	playTimer = () => {
		if (this.state.disablePlay) return;
		this.interval = setInterval(this.decreaseSec, 1000);
		this.setState({ disablePlay: true });
	};

	pauseTimer = () => {
		clearInterval(this.interval);
		this.setState({ disablePlay: false });
	};

	decreaseSec = () => {
		this.setState((prevState) => {
			if (prevState.secs === 0 && prevState.mins === 0) {
				vibrate();
				clearInterval(this.interval);
				return { disablePlay: true };
			} else if (prevState.secs === 0 && prevState.mins !== 0)
				return {
					mins: prevState.mins - 1,
					secs: 59,
				};
			else
				return {
					mins: prevState.mins,
					secs: prevState.secs - 1,
				};
		});
	};

	setStudyBlock = () => {
		this.setState((prevState) => ({
			mins: 25,
			secs: 0,
			disablePlay: prevState.disablePlay,
			isStudyBlock: true,
		}));
	};

	setBreak = () => {
		this.setState((prevState) => ({
			mins: 5,
			secs: 0,
			disablePlay: prevState.disablePlay,
			isStudyBlock: false,
		}));
	};

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>Pomodoro Timer</Text>
				<View style={styles.timerContainer}>
					<Text style={styles.timer}>
						{n(this.state.mins)}:{n(this.state.secs)}
					</Text>
				</View>
				<Text></Text>
				<GradientButton
					text="Study"
					onPressAction={this.setStudyBlock}
					width="90%"
					violetPink
					impact
				/>
				<Text></Text>
				<Text></Text>
				<GradientButton
					text="Break"
					onPressAction={this.setBreak}
					width="90%"
					violetPink
					impact
				/>
				<Text></Text>
				<Text></Text>
				<View style={{ flexDirection: 'row' }}>
					<Button title="Reset" onPress={this.resetTimer} />
					<Button title="Play" onPress={this.playTimer} />
					<Button title="Pause" onPress={this.pauseTimer} />
				</View>
				<Text style={styles.bottomText}>@tomgermanycuber</Text>
			</View>
			// <TouchableOpacity style={{ fontSize: 24, height: 100, marginTop: 10 }}>
			//   <Text>My button</Text>
			// </TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#e6e6e6',
		alignItems: 'center',
		//justifyContent: 'center',
		paddingTop: 50,
	},
	timerContainer: {
		borderColor: 'black',
		backgroundColor: '#ffffff',
		borderWidth: 3,
		borderRadius: 20,
	},
	title: {
		fontSize: 36,
		paddingBottom: 20,
	},
	timer: {
		fontSize: 72,
	},
	bottomText: {
		position: 'absolute',
		bottom: 5,
	},
});
