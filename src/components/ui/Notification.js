import React from 'react';
import { connect } from 'react-redux';

class Notification extends React.Component {
  render() {
    return <div className={`notification {this.props.className}`}>{this.props.message}</div>;
  }
}

Notification.defaultProps = {
  className: 'notification-none',
  message: '',
};

const mapStateToProps = state => ({
  className: state.notifications.className,
  message: state.notifications.message,
});

export default connect(mapStateToProps)(Notification);
