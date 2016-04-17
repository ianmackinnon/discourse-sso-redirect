export default {
  name: 'sso_redirect',
  initialize() {
    console.log("pathname", window.location.pathname);
    if (!(window.location.pathname == "/login" ||
          window.location.pathname == "/")) {
      return;
    }
    const ssoPayload = $.cookie("sso_payload");
    console.log("sso_payload", ssoPayload);
    if (!ssoPayload) {
      return;
    }
    var interval = setInterval(function () {
      var login = $(".login-button").length;
      console.log("login", login);
      if (login) {
        return;
      }
      clearInterval(interval);
      $.cookie("ssoPayload", "", {expire: -1});
      window.location.assign(
        "/session/sso_provider?" + ssoPayload);
    }, 500);
  }
};
