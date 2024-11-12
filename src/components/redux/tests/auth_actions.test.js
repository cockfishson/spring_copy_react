import configureMockStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import axios from "axios";
import { loginCheck } from "../auth/auth_actions";

jest.mock("axios");

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

global.alert = jest.fn();

describe("loginCheck thunk", () => {
  let store;

  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore();
    axios.post.mockRestore();
  });

  beforeEach(() => {
    store = mockStore({});
    axios.post.mockClear();
    global.alert.mockClear();
  });

  it("dispatches LOGIN action on successful login", async () => {
    const mockResponse = { data: { success: true } };
    axios.post.mockResolvedValueOnce(mockResponse);

    await store.dispatch(loginCheck("admin", "1234"));
    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: "LOGIN" });
  });

  it("dispatches LOGOUT action on network error", async () => {
    axios.post.mockRejectedValueOnce(new Error("Network error"));

    await store.dispatch(loginCheck("testUser", "testPassword"));
    const actions = store.getActions();

    expect(actions).toEqual([]);
    expect(global.alert).toHaveBeenCalledWith(
      "A server connection error occurred. Please try again later."
    );
  });
});
