import React from 'react'
import { connect, } from 'react-redux';
import { Link, } from 'react-router-dom';
import { Card, Button, } from 'semantic-ui-react';
import { map } from 'rsvp';

class BlogView extends React.Component {

	componentDidMount() {
		debugger
	}
	render() {
		return (
			<div>
				<Button as={Link} to={`/`} color='blue' size='mini'>Back</Button>
				<Card fluid>
					<Card.Content>  
						<Card.Header>{ this.props.blogs[this.props.match.params.id].title }</Card.Header>
						{/* <Card.Description>{ content }</Card.Description> */}
						TestText
					</Card.Content>
				</Card>
			</div>
		)
	}
}

const mapStateToProps = (store) => {
	// debugger
  return { blogs: store.blogs, };
}

export default connect(mapStateToProps)(BlogView);