import { StyleSheet } from "react-native";

var colors = {
  black: "#000000",
  white: "#FFFFFF",
  textPrimary: "#23536E",
  textProfile: "#0173B1",
  textPrimaryBlack: "#2A4F62",
  textHints: "#8599A3",
  lightgray: "#D8D8D8",
  line: "#1B91C4",
  pending: "#E78D3C",
  loginBtnBackground: "#017DB8",
  fbBtn: "#39579A",
  gmailBtn: "#E05040",
  backgroundDefault: "#FBFBFB",
  buttonNew: "#FFFBE6",
  borderButtonNew: "#F8C200",
  borderColorNew: "#DAE2E5",
};
var Style = StyleSheet.create({
  view: {
    alignSelf: "center",
    marginTop: 150,
  },
  button: {
    color: colors.white,
    backgroundColor: colors.borderButtonNew,
    fontSize: 14,
    width: 300,
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 30,
    borderColor: colors.black,
    borderWidth: 2,
    padding: 10,
  },
  text: {
    fontSize: 17,
    padding: 10,
  },
});

export default Style;
