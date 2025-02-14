import { StyleSheet } from "react-native";
import { COLORS, SPACING, BORDERRADIUS, FONTSIZE } from "@/themes/theme";

export const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "90%",
    backgroundColor: COLORS.primaryWhite,
    borderRadius: BORDERRADIUS.radius_10,
    padding: SPACING.space_20,
    alignItems: "center",
  },
  modalImage: {
    marginTop: SPACING.space_12,
    width: "100%",
    height: 200,
    borderRadius: BORDERRADIUS.radius_10,
    marginBottom: SPACING.space_15,
  },
  modalName: {
    fontSize: FONTSIZE.size_18,
    fontWeight: "bold",
    color: COLORS.primaryDarkGray,
    marginBottom: SPACING.space_4,
  },
  modalPrice: {
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDarkGray,
    marginBottom: SPACING.space_4,
  },
  modalCategory: {
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryLightGray,
    marginBottom: SPACING.space_4,
  },
  modalDistance: {
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryLightGray,
    marginBottom: SPACING.space_4,
  },
  modalPostedAt: {
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryLightGray,
    marginBottom: SPACING.space_15,
  },
  closeButton: {
    position: "absolute",
    right: 2,
    top: 3,
    padding: SPACING.space_4,
  },
  dealTypeBadge: {
    position: "absolute",
    top: SPACING.space_10 * 4,
    left: SPACING.space_30,
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
  addToCartButton: {
    backgroundColor: COLORS.primaryDarkGray,
    paddingHorizontal: SPACING.space_20,
    paddingVertical: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_20,
    marginBottom: SPACING.space_10,
  },
  addToCartButtonText: {
    color: COLORS.primaryWhite,
    fontSize: FONTSIZE.size_16,
    fontWeight: "bold",
  },
});
