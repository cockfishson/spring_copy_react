import configureMockStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import { loginCheck } from "../auth/auth_actions";
import { login, logout } from "../auth/auth_action_types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

global.fetch = jest.fn();
global.alert = jest.fn();

describe("loginCheck thunk", () => {
  let store;

  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore();
    fetch.mockRestore();
  });

  beforeEach(() => {
    store = mockStore({});
    fetch.mockClear();
    global.alert.mockClear();
  });

  it("dispatches LOGIN action on successful login", async () => {
    const mockResponse = { success: true };
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    await store.dispatch(loginCheck("admin", "1234"));
    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: "LOGIN", payload: { success: true } });
  });

  it("dispatches LOGOUT action on failed login", async () => {
    const mockResponse = { success: false, message: "Invalid credentials" };
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    await store.dispatch(loginCheck("wrongUser", "wrongPassword"));
    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: "LOGOUT", payload: { success: false } });
    expect(global.alert).toHaveBeenCalledWith("Invalid credentials");
  });

  it("dispatches LOGOUT action on network error", async () => {
    fetch.mockRejectedValueOnce(new Error("Network error"));

    await store.dispatch(loginCheck("testUser", "testPassword"));
    const actions = store.getActions();

    expect(actions[0]).toEqual({ type: "LOGOUT", payload: { success: false } });
    expect(global.alert).not.toHaveBeenCalled();
  });
});
