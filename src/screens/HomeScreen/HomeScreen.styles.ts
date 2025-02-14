import { StyleSheet, Dimensions } from "react-native";
import { COLORS, SPACING, FONTSIZE, BORDERRADIUS } from "@/themes/theme";

const screenWidth = Dimensions.get("window").width;
const itemMargin = SPACING.space_10;
const itemWidth = (screenWidth - 3 * itemMargin) / 2.15;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryWhite,
  },
  settingsAndCartContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: SPACING.space_10,
    paddingHorizontal: SPACING.space_4,
  },
  searchContainer: {
    flex: 1,
    marginRight: SPACING.space_10,
  },
  cartIcon: {
    padding: SPACING.space_10,
    paddingLeft: 0,
  },
  categoryRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: SPACING.space_10,
    backgroundColor: COLORS.primaryWhite,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.primaryWhite,
  },
  categoryButton: {
    alignItems: "center",
    paddingHorizontal: SPACING.space_15,
    paddingVertical: SPACING.space_8,
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: COLORS.primarySecondaryWhite,
  },
  selectedCategoryButton: {
    backgroundColor: COLORS.primaryDarkGray,
  },
  categoryButtonText: {
    color: COLORS.primaryDarkGray,
    fontSize: FONTSIZE.size_14,
  },
  selectedCategoryButtonText: {
    color: COLORS.primaryWhite,
  },
  productItem: {
    width: itemWidth,
    margin: itemMargin,
    backgroundColor: COLORS.primarySecondaryWhite,
    borderRadius: BORDERRADIUS.radius_10,
    overflow: "hidden",
  },
  productImage: {
    width: "100%",
    height: itemWidth * 0.75,
    borderRadius: BORDERRADIUS.radius_10,
  },
  productInfo: {
    padding: SPACING.space_10,
  },
  productName: {
    fontSize: FONTSIZE.size_14,
    fontWeight: "bold",
    color: COLORS.primaryDarkGray,
    marginBottom: SPACING.space_4,
  },
  productPrice: {
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryDarkGray,
    marginBottom: SPACING.space_4,
  },
  productCategory: {
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryLightGray,
    marginBottom: SPACING.space_4,
  },
  productDistance: {
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryLightGray,
    marginBottom: SPACING.space_4,
  },
  productPostedAt: {
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryLightGray,
  },
  dealTypeBadge: {
    position: "absolute",
    top: SPACING.space_10,
    left: SPACING.space_10,
    backgroundColor: COLORS.primaryDarkGray,
    paddingHorizontal: SPACING.space_8,
    paddingVertical: SPACING.space_4,
    borderRadius: BORDERRADIUS.radius_10,
  },
  dealTypeText: {
    color: COLORS.primaryWhite,
    fontSize: FONTSIZE.size_12,
    fontWeight: "bold",
  },
  productList: {
    padding: SPACING.space_10,
    marginBottom: SPACING.space_36,
  },
  addToCartButton: {
    backgroundColor: COLORS.primaryDarkGray,
    paddingHorizontal: SPACING.space_12,
    paddingVertical: SPACING.space_8,
    borderRadius: BORDERRADIUS.radius_20,
    marginTop: SPACING.space_10,
    alignItems: "center",
  },
  addToCartButtonText: {
    color: COLORS.primaryWhite,
    fontSize: FONTSIZE.size_14,
    fontWeight: "bold",
  },
});
