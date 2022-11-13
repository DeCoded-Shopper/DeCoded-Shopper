export const initialState = {
  wishList: [],
};

export const WishListTotalPrice = (wishList) =>
  wishList.length > 0
    ? wishList.reduce((amount, item) => item.price + amount, 0)
    : 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishList: [...state.wishList, action.item],
      };

    case "REMOVE_FROM_WISHLIST":
      const index = state.wishList.findIndex(
        (wishListItem) => wishListItem.id === action.id
      );
      let newWishList = [...state.wishList];
      if (index >= 0) {
        newWishList.splice(index, 1);
      }
      // else {
      //   console.warn(
      //     `can not remove id ${action.id} since it is not in the wishlist`
      //   );
      // }
      return { ...state, wishList: newWishList };
    default:
      return state;
  }
};

export default reducer;
