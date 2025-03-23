import axios from "axios";
import { skipSliceActions } from "../store/Slice/SkipSizeSlice";

export function getSkipSize() {
  return async (dispatch) => {
    try {
      const res = await axios.get("https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft");
      if (res.status === 200) {
        dispatch(skipSliceActions.setData(res.data));
      }
      return res;
    } catch (error) {
      new Error(error);
    }
  }
}
