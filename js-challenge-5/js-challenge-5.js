class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`)
    this.name = 'HttpError'
    this.response = response
  }
}

async function loadJson(url) {
  const response = await fetch(url);
  if (response.status === 200) {
    return response.json();
  }
  throw new HttpError(response);
}

async function demoGithubUser() {
  let name = prompt("Enter a name?", "vanimar")
  if (name === null) {
    return demoGithubUser()
  }
  try {
    user = await loadJson(`https://api.github.com/users/${name}`)
    alert(`Full name: ${user.name}.`)
    return user
  } catch (error) {
    if (error instanceof HttpError && error.response.status === 404) {
      alert("No such user, please reenter.");
      return demoGithubUser();
    } else {
      throw error
    }
  }
}
demoGithubUser()