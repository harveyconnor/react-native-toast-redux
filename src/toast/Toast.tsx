import React from 'react';

import { Animated, Text, View } from 'react-native';

import styles from './styles';

import { actionCreators as toastActions } from '../actions';

interface ReduxAction {
  type: string;
  payload: any;
}

export interface ToastProps {
  message: string | React.ReactNode;
  rootStyle: StyleSheet | object;
  containerStyle: StyleSheet | object;
  messageStyle: StyleSheet | object;
  duration: number;
  dispatch: (action: ReduxAction) => void;
}

interface ToastState {
  fadeAnimation: Animated.Value;
  shadowOpacity: Animated.Value;
  present: boolean;
  message: string | React.ReactNode;
  dismissTimeout: number | null;
}

export default class Toast extends React.Component<ToastProps, ToastState> {
  
  state = {
    fadeAnimation: new Animated.Value(0),
    shadowOpacity: new Animated.Value(0),
    present: false,
    message: '',
    dismissTimeout: null
  };

  componentWillReceiveProps(props: { message: string | React.ReactNode, duration: number }) {
    const { message, duration } = props;
    if (message) {
      const dismissTimeout = setTimeout(() => {
        this.props.dispatch(toastActions.hide());
      }, duration);
      clearTimeout(this.state.dismissTimeout || 0);
      this.show(message, dismissTimeout);
    } else {
      this.hide();
    }
  }

  show(message: string | React.ReactNode, dismissTimeout: number) {
    this.setState(
      {
        present: true,
        fadeAnimation: new Animated.Value(0),
        shadowOpacity: new Animated.Value(0),
        message,
        dismissTimeout
      },
      () => {
        Animated.timing(this.state.fadeAnimation, { toValue: 1 }).start();
        Animated.timing(this.state.shadowOpacity, { toValue: 0.5 }).start();
      }
    );
  }

  hide() {
    Animated.timing(this.state.shadowOpacity, { toValue: 0 }).start();
    Animated.timing(this.state.fadeAnimation, { toValue: 0 }).start(() => {
      this.setState({ present: false, message: null, dismissTimeout: null });
    });
  }

  render() {

    const { present, message } = this.state;

    if (!present) {
      return null;
    }

    return (
      <Animated.View
        style={[
          styles.shadow,
          styles.container,
          this.props.rootStyle,
          { opacity: this.state.fadeAnimation, shadowOpacity: this.state.shadowOpacity }
        ]}
      >
        <View style={[styles.messageContainer, this.props.containerStyle]}>
          { typeof message === 'string' ? <Text>{message}</Text> : message }
        </View>
      </Animated.View>
    );
  }
}