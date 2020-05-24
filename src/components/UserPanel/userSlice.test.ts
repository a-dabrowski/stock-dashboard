import userPanel, { addFavouriteTicker, changeDisplayName } from "./userSlice";

const initState = {
  id: 1,
  name: "Skrrt",
  displayName: "No custom name",
  isLoggedIn: true,
  subscriptions: ["ENERGA", "PGE"],
  savedRiskValue: 0,
  riskValue: 0
};

describe("User panel Reducer", () => {
  it("change name changes name", () => {
    const changeName = userPanel(initState, {
      type: changeDisplayName.type,
      payload: {
        newDisplayName: "New name"
      }
    });
    expect(changeName.displayName).toEqual("New name");
  });
  describe("When adding new ticker", () => {
    it("should add new ticker to favourite", () => {
      const addTicker = userPanel(initState, {
        type: addFavouriteTicker.type,
        payload: "CDPROJEKT"
      });
      expect(addTicker.subscriptions).toEqual(["ENERGA", "PGE", "CDPROJEKT"]);
    });
    it("should ignore value when adding empty ticker", () => {
      expect(userPanel(initState, {
        type: addFavouriteTicker.type,
        payload: ""
      })).toEqual(initState)
    });
  });
});
