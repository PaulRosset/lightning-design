import Rx from "rxjs";
import axios from "axios";

//url="http://localhost:8081/graphql"
/*variable = {
    name: "Paul Rosset",
    login: "PaulRosset",
    mail: "paulrosset96@gmail.com",
    uid: "12"
  } */
class UtilityGraph {
  constructor(url) {
    this.url = url;
  }

  addUser(variables) {
    return {
      url: this.url,
      method: "post",
      data: {
        query: `mutation CreateNewUser($name: String, $login: String, $mail: String, $uid: String) { 
                addUser(name: $name, login: $login, mail: $mail, uid: $uid) {
                name
                mail
                login
                id
                uid  } }`,
        variables
      }
    };
  }

  getDataRelatedToUser(uid) {
    return {
      url: this.url,
      method: "post",
      data: {
        query: `{
            getDataRelatedUserEntry(uid: "${uid}") {
              title
              id
              content
              date
              visible
            }
          }`
      }
    };
  }

  editVisibility(variables) {
    return {
      url: this.url,
      method: "post",
      data: {
        query: `mutation EditVisibleEntry($id: String, $visible: Boolean) {
                editVisible(id: $id, visible: $visible) {
                visible
                id
                } }`,
        variables
      }
    };
  }

  getSimpleEntry(id) {
    return {
      url: this.url,
      method: "post",
      data: {
        query: `{
            getSimpleEntry(id: "${id}") {
              title
              id
              content
              date
              visible
              uid
            }
          }`
      }
    };
  }
}

export default UtilityGraph;
