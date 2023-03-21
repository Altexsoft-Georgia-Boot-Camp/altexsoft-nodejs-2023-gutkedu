## :beginner: Task

* Create a source (src) folder to contain your code.
* In the source directory, please create an application that accomplishes the following:
  - Use the [octokit](https://github.com/octokit/octokit.js) library to connect to the GitHub API
  - Create a page with a form for entering the name of the repo and a list of previously entered ones (feel free to use any BD you want)
  - When adding a new repo, you need to check that it exists
  - Each entry should also contain a counter with the number of transitions to that repo
  - Each repo in the list should be clickable. By clicking it user should see a page with the commits in that repo
  - The commits page must use pagination and display ten commits per page


## 🚀 Technologies

- [Nodejs](https://nodejs.org/en)
- [TypeScript](https://www.typescriptlang.org/)
- [Docker](https://www.docker.com/)
- [Express](https://expressjs.com/)
- [Tsyringe - Dependency injection](https://github.com/microsoft/tsyringe)
- [Redis](https://redis.io/)
- [Redis-om](https://github.com/redis/redis-om-node)

## :dart: How to run the project?

```bash
# clone the repository
$ git clone https://github.com/Altexsoft-Georgia-Boot-Camp/altexsoft-nodejs-2023-gutkedu.git

# access the project folder
$ cd altexsoft-nodejs-2023-gutkedu

# install the dependencies
$ npm i

# build the docker image
$ docker compose build

# start the docker container
$ docker compose up

# access the application at http://localhost:80
# access the backend at http://localhost:3333
```

## :blue_book: API Documentation in Insomnia
 <br>

  [![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=altex-soft-challenge-nodejs-2023&uri=https%3A%2F%2Fraw.githubusercontent.com%2FAltexsoft-Georgia-Boot-Camp%2Faltexsoft-nodejs-2023-gutkedu%2Fmain%2Fdocs%2Finsomnia%2Faltexsoft-challenge-api-doc.json%3Ftoken%3DGHSAT0AAAAAAB4IHFCPWEXNXL4YBGDQJDHUZAZ3UTA)