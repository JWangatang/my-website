import React, { Component } from 'react';
import './HomePage.css';
import {
	Grid,
	Header,
	//Button,
	Icon,
	Segment,
	Reveal,
	Image } from 'semantic-ui-react';
import logo from './logo.svg';
import { _ } from 'underscore';

const columns = _.times(8, i => (
	<Grid.Column key={i} >
		<Reveal animated='move' instant >
			<Reveal.Content visible>
				<Image src='https://cdns.iconmonstr.com/wp-content/assets/preview/2018/240/iconmonstr-basketball-1.png' size='small' />
			</Reveal.Content>
			<Reveal.Content hidden>
				<Image src='https://cdns.iconmonstr.com/wp-content/assets/preview/2018/240/iconmonstr-basketball-2.png' size='small' />
			</Reveal.Content>
		</Reveal>
	</Grid.Column>
))

const rows = _.times(8, i => (
	<Grid.Row key={i}>
		{columns}
	</Grid.Row>
))

export default class HomePage extends Component {


	render() {

		return (
			<div>
				<Grid centered={true} >
					<Grid.Row >
						<Header as={'h1'}>Welcome to My Incomplete React Web App</Header>
					</Grid.Row>

					<Grid.Row>
						<img src={logo} className="App-logo" alt="logo"/>
					</Grid.Row>

					<Grid.Row>
						<Icon name={"warning sign"} color={"yellow"}/>

						<p className={"Intro-text"}>
							If you want to see my shameful wix website that I built freshmen year,
							peep it <a href={"http://jwang636.wixsite.com/site"}>here</a>.
						</p>
					</Grid.Row>

					<Grid.Row>
						<Icon name={"hourglass half"} color={"brown"}/>

						<p>Cool little animation coming soon</p>
					</Grid.Row>

					<Grid.Row>
						<Icon className={"Down-arrow"}
									name={"angle double down"} />
					</Grid.Row>

					{/*rows*/}

					<Grid.Row>
						<Segment loading>
							<img src='https://semantic-ui.com/images/wireframe/paragraph.png' alt={"Oops"}/>
						</Segment>
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}