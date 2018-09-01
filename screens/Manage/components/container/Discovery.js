import React, { Component } from 'react';
import {
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import { Container } from 'native-base';
import { connect } from 'react-redux';

// component
import DiscoveryCard from '../presentation/DiscoveryCard';

// Modal
import modalActions from '../../../../actions/Modal';

// library
import actions from '../../actions';
import * as colors from '../../../../styles/variables';

class Discovery extends Component {
    static propTypes = {
      postChannelListRequest: PropTypes.func.isRequired,
      closeModal: PropTypes.func.isRequired,
      openModal: PropTypes.func.isRequired,
      modal: PropTypes.object.isRequired,
    }

    state={
      errors: {},
    }

    static getDerivedStateFromProps(nextProps) {
      if (nextProps.channel.errors) {
        return {
          errors: nextProps.channel.errors,
        };
      }
    }

    componentDidMount() {
      // this.handlePostChannelList();
    }


    handlePostChannelList = (Limit = '', Offset = '0') => {
      const data = {
        Limit,
        Offset,
      };
      this.props.postChannelListRequest(data);
    }

    handleOpenModal = () => {
      this.props.openModal();
    }

    render() {
      const {
        contentContainerStyle,
        contentWrapperStyle,
      } = styles;
      const { modalOpen } = this.props.modal;

      return (
            <Container style={contentWrapperStyle}>
                <ScrollView contentContainerStyle={contentContainerStyle}>
                        <DiscoveryCard
                            isPrivate={true}
                            channelName="investor"
                            channelPercentage="0.25"
                            channelViews="14000"
                            channelLastView="2018-06-02 19:00:00"
                            channelDescription="hello test"
                            titleColor="tomato"
                            openModal={this.handleOpenModal}
                            modalOpen={modalOpen}
                            closeModal={() => this.props.closeModal()}
                        />
                        <DiscoveryCard
                            isPrivate={true}
                            channelName="Secret channel"
                            channelPercentage="0.25"
                            channelViews="14000"
                            channelLastView="2018-06-02 19:00:00"
                            titleColor = "blue"
                            openModal={this.handleOpenModal}
                            modalOpen={modalOpen}
                            closeModal={() => this.props.closeModal()}
                            channelDescription="The name test is reserved by the Internet Engineering Task Force (IETF) in RFC 2606 (June 1999) as a domain name that is not intended to be installed as a ...
                              Intended use‎: ‎In documentation or for internal t..."

                        />
                        <DiscoveryCard
                            isPrivate={false}
                            channelName="investor2"
                            channelPercentage="0.25"
                            channelViews="14000"
                            channelLastView="2018-06-02 19:00:00"
                            titleColor = "green"
                            feedPage={this.props.feedPage}
                            closeModal={() => this.props.closeModal()}
                            channelDescription="The name test is reserved by the Internet Engineering Task Force (IETF) in RFC 2606 (June 1999) as a domain name that is not intended to be installed as a ...
                              Intended use‎: ‎In documentation or for internal t..."
                        />
                        <DiscoveryCard
                            isPrivate={false}
                            channelName="investor2"
                            channelPercentage="0.25"
                            channelViews="14000"
                            channelLastView="2018-06-02 19:00:00"
                            titleColor = "green"
                            feedPage={this.props.feedPage}
                            closeModal={() => this.props.closeModal()}
                            channelDescription="The name test is reserved by the Internet Engineering Task Force (IETF) in RFC 2606 (June 1999) as a domain name that is not intended to be installed as a ...
                              Intended use‎: ‎In documentation or for internal t..."
                        />
                </ScrollView>
            </Container>
      );
    }
}

const styles = {
  contentWrapperStyle: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
  contentContainerStyle: {
    marginTop: 6,
    paddingBottom: 20,
  },
};

const mapStateToProps = state => ({
  channel: state.channel,
  modal: state.modal,
});

const mapDispatchToProps = dispatch => ({
  postChannelListRequest: data => dispatch(actions.postChannelListRequest(data)),
  closeModal: () => dispatch(modalActions.closeModal()),
  openModal: () => dispatch(modalActions.openModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Discovery);
