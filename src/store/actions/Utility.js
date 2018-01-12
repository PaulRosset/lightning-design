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

  getDataRelatedToUser(login) {
    return {
      url: this.url,
      method: "post",
      data: {
        query: `{
            getDataRelatedUserEntry(login: "${login}") {
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

  getUser(login) {
    return {
      url: this.url,
      method: "post",
      data: {
        query: `{
          getUser(login: "${login}") {
           id
            login
            uid
            mail
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
        query: `mutation EditVisibleEntry($id: String, $visible: Boolean, $uid: String, $login: String) {
                editVisible(id: $id, visible: $visible, uid: $uid, login: $login) {
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
          getSimpleEntryBack(id: "${id}") {
              title
              id
              content
              date
              visible
              uid
              login
              group
            }
          }`
      }
    };
  }

  addNewEntry(variables) {
    return {
      url: this.url,
      method: "post",
      data: {
        query: `mutation CreateNewEntry($title: String, $content: String, $date: String, $uid: String, $login: String, $visible: Boolean, $group: String) {
                newSimpleEntry(title: $title, content: $content, date: $date, uid: $uid, login: $login, visible: $visible, group: $group) {
                id } }`,
        variables
      }
    };
  }

  updateEntry(variables) {
    return {
      url: this.url,
      method: "post",
      data: {
        query: `mutation UpdateNewEntry($id: String, $title: String, $content: String, $uid: String, $login: String, $group: String) {
          updateEntry(id: $id, title: $title, content: $content, uid: $uid, login: $login, group: $group) {
            title
            id
            title
            content
            group
          }
        }`,
        variables
      }
    };
  }

  deleteEntry(variables) {
    return {
      url: this.url,
      method: "post",
      data: {
        query: `mutation DeleteNewEntry($id: String, $uid: String, $login: String) {
                deleteEntry(id: $id, uid: $uid, login: $login)
              }`,
        variables
      }
    };
  }

  getGroup(login) {
    return {
      url: this.url,
      method: "post",
      data: {
        query: `{
          getGroupRelatedUser(login: "${login}") {
           id
           name
            login
          }
        }`
      }
    };
  }

  createNewGroup(variables) {
    return {
      url: this.url,
      method: "post",
      data: {
        query: `mutation CreateNewGroup($name: String, $uid: String, $login: String) {
          createGroup(name: $name, uid: $uid, login: $login) {
                login
                name
                id
        } 
      }`,
        variables
      }
    };
  }

  deleteGroup(variables) {
    return {
      url: this.url,
      method: "post",
      data: {
        query: `mutation DeleteGroup($id: String, $uid: String, $login: String, $name: String) {
          deleteGroup(id: $id, name: $name, login: $login, uid: $uid)
      }`,
        variables
      }
    };
  }
}

export default UtilityGraph;
