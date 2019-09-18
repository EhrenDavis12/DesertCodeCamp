import { StyleSheet } from "react-native";

export const ProjectColors = {
  bkgColor: "#D2B48C", //"#DCDCDC",
  selectColor: "#606060",
  whiteColor: "#FFEFD5", //"#fff",
  borderColor: "#8B4513", //"gray",
  darkText: "black"
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
  },
  mainContainer: {
    flex: 1,
    backgroundColor: ProjectColors.bkgColor
  }
});
