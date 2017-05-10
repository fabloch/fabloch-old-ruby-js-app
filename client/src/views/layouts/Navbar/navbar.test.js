import React from "react"
import renderer from "react-test-renderer"

import { Navbar } from "./"

describe("Navbar presentational", () => {
  it("when on homepage, not logged in", () => {
    const context = { router: { isActive: (a, b) => true } };
    const component = renderer.create(<Navbar pathname={"/account/signup"} />)
    expect(component).toMatchSnapshot()
  })
})
