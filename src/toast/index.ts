import React from 'react'
import { connect } from 'react-redux';
import Toast from './Toast';

const mapStateToProps = (store: any) => store.toast;

/**
 * Use component to display toast messages
 *
 * ### Example
 *
 * ```
 * <Provider store={store}>     
 *   <Toast />
 * </Provider>
 * ```
 */
export default connect(mapStateToProps)(Toast);
