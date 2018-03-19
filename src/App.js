import React, { Component } from 'react';
import './App.css';

import {
	Route,
	NavLink,
	HashRouter} from "react-router-dom";

import {
	Icon,
	Menu } from 'semantic-ui-react'

import HomePage from "./HomePage";
import AboutPage from "./AboutPage.js";

class App extends Component {

	// Selected Menu Item Selected
	state = {
		activeItem: 'home',
	}
	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	// TODO: Add a spinner
	componentDidMount() {

	}

  render() {

		const {activeItem} = this.state

    return (
    	<HashRouter>
				<div className="App">

					{/* Top Menu Bar */}
					<Menu pointing
								secondary
								icon={'labeled'}>

						<Menu.Menu postion={'left'}>
							<NavLink to={"/"}>
								<Menu.Item name={'home'}
													 active={activeItem === 'home'}
													 onClick={this.handleItemClick}>
									<Icon name={'home'}/>
									Home
								</Menu.Item>
							</NavLink>
						</Menu.Menu>

						<Menu.Menu position={'right'}>
							<NavLink to={"/about"}>
								<Menu.Item name='child'
													 active={activeItem === 'child'}
													 onClick={this.handleItemClick}>
									<Icon name='child'/>
									About
								</Menu.Item>
							</NavLink>

							{/*<NavLink to={"/"}>*/}
								{/*<Menu.Item name='video camera' active={activeItem === 'video camera'} onClick={this.handleItemClick}>*/}
									{/*<Icon name='video camera'/>*/}
									{/*Channels*/}
								{/*</Menu.Item>*/}
							{/*</NavLink>*/}

							{/*<NavLink to={"/"}>*/}
								{/*<Menu.Item name='video play' active={activeItem === 'video play'} onClick={this.handleItemClick}>*/}
									{/*<Icon name='video play'/>*/}
									{/*Videos*/}
								{/*</Menu.Item>*/}
							{/*</NavLink>*/}

						</Menu.Menu>
					</Menu>

					{/* Routing Here */}
					<Route exact path="/" component={HomePage}/>
					<Route path="/about" component={AboutPage}/>

				</div>
			</HashRouter>
    );
  }
}

export default App;
