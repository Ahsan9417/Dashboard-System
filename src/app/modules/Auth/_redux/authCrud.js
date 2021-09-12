import axios from "axios";

const BASE_URL = process.env.REACT_APP_URL;
export const LOGIN_URL = `${BASE_URL}member/login`;
export const CHECK_EMAIL_URL = `${BASE_URL}member/is-email-exist`;
export const REGISTER_URL = `${BASE_URL}member/simplesignup`;
export const CREATE_PASSWORD_URL = `${BASE_URL}member/search-member-key`;
export const UPDATE_PASSWORD_URL = `${BASE_URL}member/updatepassword`;
export const REQUEST_PASSWORD_URL = `${BASE_URL}member/reset-password`;
export const GET_USER_URL = `${BASE_URL}member/member-get`;

const header = { headers: { "Content-Type": "application/json" } };

export function login(email, password) {
  return axios.post(LOGIN_URL, { "user-name": email, "password": password }, header);
}

export function register(email, contactNo) {
  return axios.post(REGISTER_URL, { "email-id": email, "contact-no": contactNo }, header);
}

export function emailExists(email) {
  return axios.post(CHECK_EMAIL_URL, { "email-id": email }, header);
}

export function createPassword(key) {
  return axios.post(CREATE_PASSWORD_URL, { "encrypted-key": key }, header);
}

export function updatePassword(email, pass, cpass) {
  return axios.post(UPDATE_PASSWORD_URL, { "email-id": email, "password": pass, "confirm-password": cpass }, header);
}

export function requestPassword(email) {
  return axios.post(REQUEST_PASSWORD_URL, { "email-id": email }, header);
}

export function getUser(email, headerBody) {
  return axios.post(GET_USER_URL, { "email-id": email }, { headers: headerBody });
}

export function getUserByToken(key) { }
