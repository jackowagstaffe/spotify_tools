import React from 'react';
import { connect } from 'react-redux';
import createNotification from '../../actions/CreateNotification';

class Notification extends React.Component {
  constructor(props) {
    super(props);

    this.close = this.close.bind(this);
  }
  close() {
    this.props.createNotification('', 'notification-none');
  }
  render() {
    // Make room at top of page for notification
    if (this.props.message !== '') {
      document.body.className += 'notification-space';
    } else {
      document.body.classList.remove('notification-space');
    }

    return <div className={`notification ${this.props.className}`}>
      {this.props.message}
      <div onClick={this.close} className="close-button">
        <i className="fa fa-times" aria-hidden="true"></i>
        <span className="sr-only">close</span>
        </div>
    </div>;
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

const mapDispatchToProps = (dispatch) => ({
  createNotification: (message, className) => dispatch(createNotification(message, className)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
