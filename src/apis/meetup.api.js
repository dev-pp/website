import axios from "axios";
import jsonpAdapter from "axios-jsonp";

const apiurl = "https://api.meetup.com/dev-pp";

const getMembers = () => {
 return axios({
  url: `${apiurl}/members`,
  adapter: jsonpAdapter
 });
};

const getEventsByStatus = (status, page = 200) => {
 return axios({
  url: `${apiurl}/events?status=${status}&page=${page}&desc=true`,
  adapter: jsonpAdapter
 });
};

export default {
 getMembers,
 getEventsByStatus
};
