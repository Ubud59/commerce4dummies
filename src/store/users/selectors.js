export function getUserState(state) {
  return {
    user: {
      truc: "ahah",
      id: state.user.id,
      fullname: state.user.fullname,
      givenName: state.user.givenName,
      familyName: state.user.familyName,
      avatar: state.user.avatar,
      email: state.user.email
    }
  };
}
