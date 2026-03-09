import { StyleSheet } from "react-native";
import colors from "./colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.back,
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: 40
  },
  title: {
    fontSize: 24,
    color: colors.light,
    textAlign: "center"
  },
  subtitle: {
    fontSize: 18,
    color: colors.primary,
    textAlign: "center",
    marginTop: 18
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    width: "100%",
    marginBottom: 10,
    paddingVertical: 10
  },
  footer: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: colors.primary,
    paddingTop: 20,
    paddingBottom: 40
  },
  footerText: {
    color: colors.light,
    textAlign: "center",
    marginBottom: 10
  },
  menu: {
    width: "96%",
    flex: 5,
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 10
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: 500,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'black',
    paddingVertical: 4,
    marginBottom: 10
  },
  description: {
    fontSize: 12,
    fontStyle: 'italic'
  },
  pizzaContainer: {
    display: 'flex',
    width: "96%",
    maxHeight: 120,
    marginVertical: 5,
    flexDirection: 'row',
    gap: 10,
    padding: 10
  },
  pizzaTitle: {
    fontSize: 18,
    fontWeight: 500,
    color: colors.primary
  },
  image: {
    flex: 2,
    width: 90,
    height: 90,
    borderRadius: 12
  },
  details: {
    flex: 3,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  info: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  infoText: {
    fontSize: 18,
    color: colors.primary,
    textAlign: "center",
    marginTop: 18
  },
  menuList: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 10,
    width: '100%',
    maxHeight: '80%',
    gap: 20
  }
});

export default styles;