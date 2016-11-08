import React from 'react'
import UserInfo from './UserInfo'
import UserRepos from './UserRepos'

const UserProfile = React.createClass({
    render: function() {
        return (
            <div className="row">
                <div className="col-lg-4">
                    <UserInfo user={this.props.user} />
                </div>
                <div className="col-lg-8">
                    <UserRepos repos={this.props.repos} />
                </div>
            </div>
        )
    }
})

UserProfile.propTypes = {
    user: React.PropTypes.object,
    repos: React.PropTypes.array
}

export default UserProfile
