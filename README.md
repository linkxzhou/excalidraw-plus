### 功能

- [x] 中文手写体
- [x] 多画布功能
- [x] 多模板文件

### Local Installation

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

#### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/getting-started/install) (v1 or v2.4.2+)
- [Git](https://git-scm.com/downloads)

#### Clone the repo

```bash
git clone https://github.com/linkxzhou/excalidraw-plus.git
```

#### Install the dependencies

```bash
yarn
```

#### Start the server

```bash
yarn start
```

Now you can open [http://localhost:3000](http://localhost:3000) and start coding in your favorite code editor.

#### Collaboration

For collaboration, you will need to set up [collab server](https://github.com/excalidraw/excalidraw-room) in local.

#### Commands

##### Install the dependencies

```
yarn
```

##### Run the project

```
yarn start
```

##### Reformat all files with Prettier

```
yarn fix
```

##### Run tests

```
yarn test
```

##### Update test snapshots

```
yarn test:update
```

##### Test for formatting with Prettier

```
yarn test:code
```

#### Docker Compose

You can use docker-compose to work on Excalidraw locally if you don't want to setup a Node.js env.

```sh
docker-compose up --build -d
```

## Reference

https://github.com/korbinzhao/excalidraw-cn
