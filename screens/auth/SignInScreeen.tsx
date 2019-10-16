import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import PropTypes from "prop-types";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import $t from "../../config/i18n";
// import ErrorText from '../shared/Text/ErrorText';

const styles = StyleSheet.create({
  // buttonText: {
  //   borderColor: Colors.charcoal,
  //   color: Colors.snow,
  //   fontFamily: Fonts.type.bold,
  //   fontSize: Fonts.size.medium,
  //   margin: 18,
  //   textAlign: 'right'
  // },
  container: {
    backgroundColor: "white",
    flex: 1
  }
});

interface Props {
  theme: any;
}

export const SignInScreen: React.FC<Props> = observer(({ theme }) => {
  onsubmit = signInData => {
    this.props.login(signInData);
  };

  const goToSignUp = () => {
    this.props.navigation.navigate("SignUp");
  };

  const goToForgotPassword = () => {
    this.props.navigation.navigate("ForgotPassword");
  };
  const { signInError } = this.props;

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.primary }]}
    >
      <KeyboardAwareScrollView enableOnAndroid>
        {/* <SignInForm onSubmit={this.onSubmit} signInError={signInError} /> */}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
});

export default withTheme(SignInScreen);
