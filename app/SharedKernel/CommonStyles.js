import { StyleSheet } from "react-native";

export const ProjectColors = {
  bkgColor: "#F5DEB3", //  Wheat
  MenuBgColor: "#D2B48C", // Tan
  selectColor: "#606060",
  whiteColor: "#FFEFD5", // PapayaWhip
  borderColor: "#8B4513", // SaddleBrown
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
    backgroundColor: ProjectColors.bkgColor,
    flexDirection: "column"
  },
  shadowBox: {
    borderWidth: 0,
    borderRadius: 2,
    borderColor: ProjectColors.borderColor,
    borderBottomWidth: 4,
    borderRightWidth: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    borderRadius: 10
  }
});
