import React from "react";
import { connect } from "react-redux";
import { useHistory, Route } from "react-router-dom";
import Axios from "axios";

const defaultState = {
  verified: false,
  user: false,
  token: null,
};

export function authReducer(state = defaultState, action) {
  switch (action.type) {
    case "auth:logout":
      return {
        ...state,
        user: false,
        token: null,
        verified: false,
        remember: false,
      };
    case "auth:login:success":
      const { user, token, remember } = action;
      return { ...state, user, token, remember, verified: true };
    default:
  }
  return state;
}
export const authSideEffects = (e) => () => {
  const {
    auth: { remember, token, user },
  } = e.getState();
  if (remember)
    window.localStorage.setItem(
      "ttcsw-velbert-auth-data",
      JSON.stringify({ user, token })
    );
  else window.localStorage.removeItem("ttcsw-velbert-auth-data");
  Axios.defaults.headers.common["x-auth"] = token;
  window.AUTH_TOKEN = token;
  window.USER = user;
};
export function mapAuthStateToProps(state) {
  return { auth: state.auth };
}

export function mapAuthActionsProps(dispatch) {
  return {
    authActions: {
      success: (user, token, remember) =>
        dispatch({ type: "auth:login:success", user, token, remember }),
      logout: () => dispatch({ type: "auth:logout" }),
    },
  };
}
export const withAuth = connect(mapAuthStateToProps, mapAuthActionsProps);

// To define Admin!
export const IfAdmin = withAuth(function ({ auth, authActions, children }) {
  return auth && auth.user && auth.user.role && auth.user.role === "Admin"
    ? children
    : null;
});

export const IfAuth = withAuth(function ({ auth, children }) {
  return auth && auth.user && auth.verified ? children : null;
});

export const IfNotAuth = withAuth(function ({
  auth,
  authActions,
  children,
  group,
}) {
  return auth && auth.user && auth.verified ? null : children;
});

export const CheckAuth = withAuth(function ({ authACcions: { success } }) {
  const [loading, setLoading] = React.useState(false);
  if (!loading) {
    setLoading(true);
    const existingToken = localStorage.getItem("ttcsw-velbert-auth-data");
    if (existingToken) {
      const { user, token, verified, remember } = JSON.parse(existingToken);
      Axios.get(`/users/${user.id}`, { headers: { "x-auth": token } }).then(
        (res) => {
          if (res.status === 200) success(res.data, token, true);
          else localStorage.removeItem("ttcsw-velbert-auth-data");
        }
      );
    }
  }
  return null;
});

export const Logout = withAuth(({ authActions }) => {
  const history = useHistory();
  authActions.logout();
  history.push("/");
  return null;
});

export const AdminRoute = withAuth((props) => {
  if (!props.auth || props.auth.user.role !== "Admin") return null;
  return <Route {...props} />;
});

export const AuthRoute = withAuth((props) => {
  console.log(props.auth);
  if (!props.auth || !props.auth.verified) return null;
  return <Route {...props} />;
});

export const Activate = ({history,match:{params:{token}}}) => {
  React.useEffect( e => {
    Axios.get('/users/activate/' + token)
    .then( e => history.push('/login') )
  },[])
  return null;
}