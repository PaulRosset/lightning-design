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
            getSimpleEntry(id: "${id}") {
              title
              id
              content
              date
              visible
              uid
              login
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
        query: `mutation CreateNewEntry($title: String, $content: String, $date: String, $uid: String, $login: String, $visible: Boolean) {
                newSimpleEntry(title: $title, content: $content, date: $date, uid: $uid, login: $login, visible: $visible) {
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
        query: `mutation UpdateNewEntry($id: String, $title: String, $content: String, $uid: String, $login: String) {
          updateEntry(id: $id, title: $title, content: $content, uid: $uid, login: $login) {
            title
            id
            title
            content
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
}

export default UtilityGraph;
