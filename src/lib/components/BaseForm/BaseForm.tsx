import { Provider } from "react-redux";
import { store } from "../../app/store";
import { SigninForm } from "../SigninForm";
import { SignupForm } from "../SignupForm";

export const SigninComponent = () => {
  return (
    <Provider store={store}>
      <SigninForm></SigninForm>
    </Provider>
  );
};

export const SignupComponent = () => {
  return (
    <Provider store={store}>
      <SignupForm></SignupForm>
    </Provider>
  );
};
