import React, { Component } from 'react';
import './AboutPage.css';
import {
	Grid,
	Header,
	//Button,
	Icon,
	Divider,
	Segment } from 'semantic-ui-react';

export default class AboutPage extends Component {

	constructor(props) {
		super(props)
		this.state = {
			loading: false,
		}
	}

	render() {

		return (
			<div>
				<Grid centered={true}>
					<Grid.Row >
						<Header as={'h1'}>About Me</Header>
					</Grid.Row>

					<Grid.Row>
						<Icon className={"Down-arrow"}
									name={"angle double down"} />
					</Grid.Row>

					<Grid.Row>

						<Segment loading={this.state.loading}>
							<Header as={'h2'}>Education</Header>

							I am a first generation college student at the University of Southern California.

							<br/>I am currently a 4th year undergrad majoring in Computer Science.

							<br/>Fight on!
						</Segment>
					</Grid.Row>

					<Grid.Row>

						<Segment loading={this.state.loading}>
							<Header as={'h2'}>Born and raised in San Francisco</Header>

							<br/>Growing up in a dense and diverse city has helped me develop a worldly and open-minded perspective towards people and the world that we live in.
							<br/>Now that I'm living in Los Angeles, I get homesick pretty often...
							<br/>Missing the hills, <a href="https://about.me/karlthefog">Karl</a>, the food, and the views. But at least the beaches are nice in LA!
						</Segment>
					</Grid.Row>

					<Grid.Row>

						<Segment>
							<Header as={'h2'}>Cycling</Header>

							My passion for cycling started in SF, riding my '87 steel-framed Bianchi.
							<br/>Whether it was just commuting to school or doing rides like Hawk Hill, Paradise Loop, and Mountain Tam,
							<br/>it was a great way for me to stay in shape and also see the city when I didn't have access to a car.
							<br/>Since then I managed to save up enough for my Cannondale Caad10 and joined the USC Cycling team!
							<br/>When you don't see me studying, I'll most likely be riding with the team and exploring Los Angeles!
						</Segment>
					</Grid.Row>

					<Grid.Row>

						<Segment>
							<Header as={'h2'}>Passion and Motivation</Header>

							<Header as={'h3'}>Family</Header>
							My mom and my sister.
							<br/>Growing up, my mom struggled as a single parent.
							<br/>Like most first generation Chinese-American parents, she worked multiple jobs and long hours to provide for my sister and me,
							<br/>while also making sure we did well in school.
							<br/>However, the amount of work and stress left damaging effects on her health and as my career develops,
							<br/>I will do everything in my ability to take care of her and my sister.

							<Divider horizontal>And</Divider>

							<Header as={'h3'}>Educational Equity</Header>
							My educational path was unordinary.
							<br/>Because of each of these educational non-profit organizations, I was able to not only receive a private education from middle school to high school,
							<br/>but also excel in these environments due to endless their academic and financial support.
							<br/>From this experience, I learned that any student, given the right resources and support system, can excel academically and transform his/her life.
							<br/>For this reason, I want to use my software development skills to connect families to the educational programs out there
							<br/>and give students easier access to academic resources and support.
						</Segment>
					</Grid.Row>

				</Grid>
			</div>
		);
	}
}