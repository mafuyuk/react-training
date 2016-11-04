import React from 'react';
import ReactDOM from 'react-dom';
import CommentList from './components/CommentList.js';
import CommentForm from './components/CommentForm.js';

class CommentBox extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        return(
            <div className='commentBox'>
            <h2>Comments</h2>
                <CommentList />
                <CommentForm />
            </div>
        );
    }
}

ReactDOM.render(
    <CommentBox />,
    document.getElementById('content')
);
