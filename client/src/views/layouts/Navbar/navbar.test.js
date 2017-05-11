import React from "react"
import { shallow, mount } from "enzyme"
import toJson from "enzyme-to-json"

import { Navbar } from "./"

const notLoggedIn = {
  isAuthenticated: true,
  isSigningIn: false,
  user: {},
}

const loggedIn = {
  isAuthenticated: true,
  isSigningIn: false,
  user: {
    some: "data",
  },
}

const logout = jest.fn()

describe("Navbar presentational", () => {
  describe("when not logged in", () => {
    it("homepage", () => {
      const context = { router: { isActive: (a, b) => true } }
      const wrapper = mount(
        <Navbar pathname={"/"} auth={notLoggedIn} logout={logout} />,
        { context },
      )
      expect(toJson(wrapper)).toMatchSnapshot()
    })

    it("signup page", () => {
      const context = { router: { isActive: (a, b) => true } }
      const wrapper = mount(
        <Navbar pathname={"/account/signup"} auth={notLoggedIn} logout={logout} />,
        { context },
      )
      expect(toJson(wrapper)).toMatchSnapshot()
    })

    it("login page", () => {
      const context = { router: { isActive: (a, b) => true } }
      const wrapper = mount(
        <Navbar pathname={"/account/login"} auth={notLoggedIn} logout={logout} />,
        { context },
      )
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  })

  describe("when logged in", () => {
    it("homepage", () => {
      const context = { router: { isActive: (a, b) => true } }
      const wrapper = mount(
        <Navbar pathname={"/"} auth={loggedIn} logout={logout} />,
        { context },
      )
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  })
})
