import { StyleSheet } from "react-native";
import { COLORS, SPACING, FONTSIZE, BORDERRADIUS } from "@/themes/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: SPACING.space_36 * 2,
    paddingBottom: SPACING.space_20 * 4,
    paddingHorizontal: SPACING.space_16,
    backgroundColor: COLORS.primaryWhite,
  },
  cartItem: {
    flexDirection: "row",
    marginTop: SPACING.space_16,
    padding: SPACING.space_8,
    borderRadius: BORDERRADIUS.radius_8,
    backgroundColor: COLORS.primarySecondaryWhite,
  },
  cartItemImage: {
    width: 80,
    height: 80,
    borderRadius: BORDERRADIUS.radius_8,
  },
  cartItemInfo: {
    flex: 1,
    marginLeft: SPACING.space_16,
  },
  cartItemName: {
    fontSize: FONTSIZE.size_16,
    fontWeight: "bold",
    color: COLORS.primaryDarkGray,
  },
  cartItemPrice: {
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDarkGray,
    marginTop: SPACING.space_8,
    fontWeight: "600",
  },
  cartItemQuantity: {
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryDarkGray,
  },
  removeButton: {
    marginTop: SPACING.space_8,
    backgroundColor: COLORS.primaryRed,
    paddingHorizontal: SPACING.space_8,
    paddingVertical: SPACING.space_4,
    borderRadius: BORDERRADIUS.radius_20,
    alignSelf: "flex-start",
  },
  emptyCartText: {
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDarkGray,
    textAlign: "center",
    marginTop: SPACING.space_20,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: SPACING.space_10,
  },
  totalPriceText: {
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDarkGray,
    fontWeight: "bold",
  },
  checkoutButton: {
    backgroundColor: COLORS.primaryBlack,
    padding: SPACING.space_12,
    borderRadius: BORDERRADIUS.radius_8,
  },
  checkoutButtonText: {
    color: COLORS.primaryWhite,
    fontSize: FONTSIZE.size_16,
    fontWeight: "bold",
  },
  emptyCartAnimation: {
    width: 200,
    height: 200,
    alignSelf: "center",
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primaryWhite,
  },
  closeButton: {
    alignSelf: "flex-end",
    marginBottom: SPACING.space_16,
  },
  closeButtonText: {
    color: COLORS.primaryDarkGray,
    fontSize: FONTSIZE.size_16,
    fontWeight: "bold",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: SPACING.space_8,
  },
  quantityButton: {
    backgroundColor: COLORS.primaryBlue,
    padding: SPACING.space_4,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  quantityText: {
    marginHorizontal: SPACING.space_10,
    fontSize: FONTSIZE.size_16,
    fontWeight: "bold",
  },
  deleteButton: {
    marginTop: SPACING.space_18,
    backgroundColor: COLORS.primaryRed,
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: "80%",
    borderBottomRightRadius: BORDERRADIUS.radius_10,
    borderTopRightRadius: BORDERRADIUS.radius_10,
  },
});
