import axios from "axios";

const BASE_URL = process.env.REACT_APP_URL;
export const GET_MEMBER_URL = `${BASE_URL}member/member-get`;
export const UPDATE_MEMBER_URL = `${BASE_URL}member/editmemberbysignup`;
export const UPDATE_PASSWORD_URL = `${BASE_URL}member/change-password`;
export const GET_COUNTRY_URL = `${BASE_URL}country/get`;
export const GET_CITY_URL = `${BASE_URL}city/get-by-country-key`;
export const GET_PROVINCE_URL = `${BASE_URL}province/get-by-country-key`;

export function getMember(email, req_header) {
  return axios.post(GET_MEMBER_URL, { "email-id": email }, { headers: req_header });
}

export function updateMember(body, req_header) {
  return axios.post(UPDATE_MEMBER_URL, body, { headers: req_header });
}

export function updatePassword(body, req_header) {
  return axios.post(UPDATE_PASSWORD_URL, body, { headers: req_header });
}

export function getCountry(body, req_header) {
  return axios.post(GET_COUNTRY_URL, body, { headers: req_header });
}

export function getCityByCountry(body, req_header) {
  return axios.post(GET_CITY_URL, body, { headers: req_header });
}

export function getProvinceByCountry(body, req_header) {
  return axios.post(GET_PROVINCE_URL, body, { headers: req_header });
}