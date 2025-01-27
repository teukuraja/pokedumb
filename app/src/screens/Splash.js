import React, { Component } from 'react';
import { Alert, AsyncStorage, StatusBar, Image } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Thumbnail, View, Left, Right, Button, Icon, Text, Footer } from 'native-base';
import { connect } from 'react-redux';

import { putToken } from '../publics/redux/actions/auth'
import { getPokemons } from '../publics/redux/actions/pokemon';
// import { getSongs } from '../publics/redux/actions/songs'
// import { getProfile } from '../publics/redux/actions/user'
// import { getLists } from '../publics/redux/actions/playlist'


class Splash extends Component {

	static navigationOptions = ({ navigation }) => ({
		header: null,
	})

	async fetchData(){
		try {
			const token = await AsyncStorage.getItem('token')
			const refToken = await AsyncStorage.getItem('refToken')
			const email = await AsyncStorage.getItem('email')

			await this.props.dispatch(putToken(token, refToken, email))
			await this.props.dispatch(getPokemons());
			// await this.props.dispatch(getProfile())
			// await this.props.dispatch(getLists())


			setTimeout(()=> this.props.navigation.navigate('home'), 1600)
		}
		catch {
			this.props.navigation.navigate('home')
		}
	}

	componentWillMount(){
		this.fetchData()
	}

	render() {
		return (
			<Container>
			<StatusBar hidden={true} backgroundColor='#282828'/>
				<Content style={{backgroundColor: '#282828'}}>
					<View style={{alignItems: 'center', alignContent: 'center', paddingTop: 260, flexDirection: 'column' }}>
						<Image style={{borderRadius: 60, height: 120, width: 120}} source={require('../assets/img/logo.png')}/>
						<Text style={{color: '#999', paddingTop: 20, fontFamily: '', fontSize: 30 }}>P O K E DUMB</Text>
					</View>
				</Content>
				<Footer style={{backgroundColor: '#282828'}}>
					<Text style={{color: '#969696', fontSize: 12}}>Copyright {'\u00A9'} 2019  by teramuza.xyz </Text>
				</Footer>
			</Container>
		);
	}
	
}


const mapStateToProps = (state) => {
	return {
		auth: state.auth
	}
}

export default connect(mapStateToProps)(Splash)