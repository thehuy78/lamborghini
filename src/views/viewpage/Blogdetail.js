import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class Blogdetail extends Component {
    state = {
        user: {},
    }
    async componentDidMount() {



    }
    render() {

        let user = this.state.user;
        let isEmptyObj = Object.keys(user).length === 0;
        return (
            <div className='blog_detail'>
                hello wword
                {this.props.match.params.id}
                {isEmptyObj === false &&
                    <>
                        <p>{user.title}</p>
                        <p>{user.discriber}</p>
                        <p>{user.date}</p>

                    </>
                }
            </div>
        )
    }
}
export default withRouter(Blogdetail);
