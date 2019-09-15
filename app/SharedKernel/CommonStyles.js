import { StyleSheet } from "react-native";

export const ProjectColors = {
  bkgColor: "#DCDCDC",
  selectColor: "#606060",
  whiteColor: "#fff",
  borderColor: "gray",
  darkText: "gray"
};

export default CommonStyles = StyleSheet.create({
  list: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: ProjectColors.bkgColor
  },
  text: {
    fontSize: 18,
    fontWeight: "200"
  }
});
