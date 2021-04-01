import PropTypes from "prop-types";
import React from 'react';

class MessageField extends React.Component {
    static propTypes = {
        message: PropTypes.shape({
            author: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
        }),
    }

    render() {
        const {
            message: { value, author },
        } = this.props

        return (
            <div>
                <h3>{value}</h3>
                <p>{author}</p>
            </div>
        )
    }
}

export default MessageField;