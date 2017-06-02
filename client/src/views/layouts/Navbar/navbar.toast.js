import React from "react"
import { mount } from "enzyme"
import toJson from "enzyme-to-json"
import { BrowserRouter as Router } from "react-router-dom"

import { Navbar } from "./"

const notLoggedIn = {
  data: null,
  isFetching: false,
}

const loggedIn = {
  data: {
    client: "abcdef",
    uid: "ghijkl",
    token: "mnopqr",
    expiry: "123456",
  },
  isFetching: false,
}

const logout = jest.fn()

describe("Navbar presentational", () => {
  describe("when not logged in", () => {
    it("homepage", () => {
      const wrapper = mount(
        <Router>
          <Navbar
            pathname={"/"}
            session={notLoggedIn}
            logout={logout}
          />
        </Router>,
      )
      expect(toJson(wrapper)).toMatchSnapshot()
    })

    it("signup page", () => {
      const wrapper = mount(
        <Router>
          <Navbar
            pathname={"/account/signup"}
            session={notLoggedIn}
            logout={logout}
          />
        </Router>,
      )
      expect(toJson(wrapper)).toMatchSnapshot()
    })

    it("login page", () => {
      const wrapper = mount(
        <Router>
          <Navbar
            pathname={"/account/login"}
            session={notLoggedIn}
            logout={logout}
          />
        </Router>,
      )
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  })

  describe("when logged in", () => {
    it("homepage", () => {
      const wrapper = mount(
        <Router>
          <Navbar
            pathname={"/"}
            session={loggedIn}
            logout={logout}
          />
        </Router>,
      )
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  })
})
