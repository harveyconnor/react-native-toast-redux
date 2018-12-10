import React from 'react'
import { connect } from 'react-redux';
import Toast from './Toast';

const mapStateToProps = (store: any) => store.toast;

export default connect(mapStateToProps)(Toast);
