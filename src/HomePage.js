import React, { Component } from 'react';
import './HomePage.css';
import {
	Grid,
	Header,
	//Button,
	Icon,
	Segment } from 'semantic-ui-react';
import logo from './logo.svg';


export default class HomePage extends Component {
	render() {

		return (
			<div>
				<Grid centered={true}>
					<Grid.Row >
						<Header as={'h1'}>Welcome to My Incomplete React Web App</Header>
					</Grid.Row>

					<Grid.Row>
						<img src={logo} className="App-logo" alt="logo"/>
					</Grid.Row>

					<Grid.Row>
						<p>
							If you want to see my shameful wix website that I built freshmen year,
							peep it <a href={"http://jwang636.wixsite.com/site"}>here</a>.
						</p>
					</Grid.Row>

					<Grid.Row>
						<Icon className={"Down-arrow"}
									name={"angle double down"} />
					</Grid.Row>

					<Grid.Row>
						<Segment>
							<img src='https://semantic-ui.com/images/wireframe/paragraph.png' alt={"Oops"}/>
						</Segment>
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}