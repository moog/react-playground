import React from 'react'

const UserInfo = React.createClass({
    render: function() {
        const html = this.props.user ? (
            <div>
                <img
                    className="img-circle"
                    src={this.props.user.avatar_url}
                    alt="avatar"
                    width="140"
                    height="140"
                />
                <h2>{this.props.user.login}</h2>
                <p>{this.props.user.name}</p>
                <p>
                    Followers: {this.props.user.followers} /
                    Following: {this.props.user.following}
                </p>
                <p>
                    <a
                        className="btn btn-default"
                        href={this.props.user.html_url}
                        role="button">
                        View details
                    </a>
                </p>
            </div>
        ) : null

        return html;
    }
})

UserInfo.propTypes = {
    user: React.PropTypes.object
}

export default UserInfo
