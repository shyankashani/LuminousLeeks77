import React from 'react';

import { QueueClosed } from '../customerViews/QueueClosed.jsx';
import { QueueInfo } from '../customerViews/QueueInfo.jsx';
import { PartyInfo } from '../customerViews/PartyInfo.jsx';

class Customer extends React.Component {

  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        { this.props.redux.store.queue.is_open === false
        ? <QueueClosed redux={this.props.redux} />
        : this.props.redux.store.party.id === undefined
        ? <QueueInfo redux={this.props.redux} />
        : <PartyInfo redux={this.props.redux}/> }
      </div>
    );
  };

  componentDidMount() {
    this.props.redux.dispatch.getQueueInfoCustomer(1);
    this.props.redux.dispatch.getPartyInfoCustomerOnMount(this.props.redux.store.user.profile_id);
  };
};

export default Customer;
