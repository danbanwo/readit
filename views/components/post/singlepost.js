import React from 'react';
import $ from 'jquery';
import Commentform from '../comment/commentform';
import Vote from '../vote/vote';

const Singlepost = React.createClass({
  getInitialState() {
    return {post: null}
  },
  componentDidMount() {
    let that = this;
    $.ajax({
      url: "/api/post/" + that.props.params.id,
      success: function(data) {
        that.setState({post:data})
        console.log(data)
      }
    })
  },
  render() {
    if(!this.state.post) {
      return (<div>Loading...</div>)
    } else {
      let post = this.state.post
      return (
        <div>
          <h1>{post.title}</h1>
          <div>{post.body}</div>
          <Commentform />
          <Vote id={this.props.params.id}/>
        </div>
      )
    }
  }
})

export default Singlepost;
