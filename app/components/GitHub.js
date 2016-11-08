import React from 'react'
import SearchUser from './SearchUser'
import UserProfile from './UserProfile'

const GitHub = React.createClass({
    getInitialState: function() {
        return {
            user: null,
            repos: []
        }
    },
    updateUser: function(user) {
        this.setState({user: user});
    },
    updateRepos: function(repos) {
        this.setState({repos: repos});
    },
    render: function() {
        return (
            <div className="container">
                <SearchUser
                    updateUser={this.updateUser}
                    updateRepos={this.updateRepos}
                />

                <UserProfile user={this.state.user} repos={this.state.repos} />
            </div>
        )
    }
})

export default GitHub
