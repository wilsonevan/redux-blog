import React from 'react';
import { connect, } from 'react-redux';
import { Form, Button, } from 'semantic-ui-react';

class BlogForm extends React.Component {
  state = { title: '', content: '', };

  handleSubmit = (e) => {
		e.preventDefault();
    const { dispatch, id, } = this.props;
    const { title, content } = this.state;
    // debugger
		const blog = { title, id, content, };
		dispatch({ type: 'ADD_BLOG', blog, });
		dispatch({ type: 'INC_ID', });
    this.setState({ title: '', content: '', });
  }

  handleChange = (e) => {
    const { target: { name, value } } = e;
		this.setState( { [name]: value } );
  }

  render() {
    const { title, content } = this.state;

    return (
      <div>
        <h3>Add A Blog</h3>
        <Form>
          <Form.Field>
            <Form.Input 
              label='Blog Title'
              placeholder='Title'
              required
              name='title' 
              value={title} 
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.TextArea 
            name='content' 
            label='Content' 
            placeholder='Content goes here...' 
            value={content} 
            onChange={this.handleChange} 
          />
          <Button type='submit' onClick={this.handleSubmit}>Submit</Button>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
	// debugger
	return { id: state.nextId, };
};

export default connect(mapStateToProps)(BlogForm);