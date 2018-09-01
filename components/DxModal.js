import React, { Children } from 'react';
import {
  Modal, View,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = {
  backDropStyle: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
};

const DxModal = ({ modalOpen, closeModal, children }) => (
      <Modal
          animationType='slide'
          transparent={true}
          visible={modalOpen}
          onRequestClose={closeModal}
      >
        <View style={styles.backDropStyle}>
          {/* Cloning all the the child componenets and passing close modal as a prop */}

          {
            Children.map(children, child => React.cloneElement(child, { closeModal: () => closeModal() }))
          }

        </View>
      </Modal>
);

DxModal.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
};

export default DxModal;
