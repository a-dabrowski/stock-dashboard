import React from "react";
import { render } from "@testing-library/react";
import RiskSlider from "./";
import * as reduxSlice from "components/UserPanel/userSlice";

jest.mock("react-redux", () => ({
	useSelector: jest.fn(fn => fn),
	useDispatch: () => jest.fn()
}));

const setup = () => {
	jest.spyOn(reduxSlice, "selectRiskValue").mockReturnValue(20);
	jest.spyOn(reduxSlice, "selectSavedRiskValue").mockReturnValue(0);
};

describe("RiskSlider", () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	afterAll(() => {
		jest.restoreAllMocks();
	});

	it("should have averse text", () => {
		const { getByText } = render(<RiskSlider />);
		const linkElement = getByText(/Averse/i);
		expect(linkElement).toBeInTheDocument();
	});

	it("should have save text when saved risk is different than actal risk", () => {
		setup();
		const { getByText } = render(<RiskSlider />);
		expect(getByText(/Save/i)).toBeInTheDocument();
	});
});
