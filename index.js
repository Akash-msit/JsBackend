require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubData = {
    "login": "Akash-msit",
    "id": 83662743,
    "node_id": "MDQ6VXNlcjgzNjYyNzQz",
    "avatar_url": "https://avatars.githubusercontent.com/u/83662743?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Akash-msit",
    "html_url": "https://github.com/Akash-msit",
    "followers_url": "https://api.github.com/users/Akash-msit/followers",
    "following_url": "https://api.github.com/users/Akash-msit/following{/other_user}",
    "gists_url": "https://api.github.com/users/Akash-msit/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Akash-msit/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Akash-msit/subscriptions",
    "organizations_url": "https://api.github.com/users/Akash-msit/orgs",
    "repos_url": "https://api.github.com/users/Akash-msit/repos",
    "events_url": "https://api.github.com/users/Akash-msit/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Akash-msit/received_events",
    "type": "User",
    "site_admin": false,
    "name": "AKASH DEY",
    "company": null,
    "blog": "",
    "location": "Kharagpur",
    "email": null,
    "hireable": null,
    "bio": "Hello Everyone my Name is Akash Dey.",
    "twitter_username": null,
    "public_repos": 22,
    "public_gists": 0,
    "followers": 0,
    "following": 4,
    "created_at": "2021-05-04T16:31:19Z",
    "updated_at": "2023-11-30T04:24:44Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res)=>{
    res.send('Akash Dey')
})
app.get('/login',(req, res)=>{
    res.send('<h1>Please login at chai aur code</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('<h2>Chai aur code</h2>')
})

app.get('/github',(req, res)=>{
    res.json(githubData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})