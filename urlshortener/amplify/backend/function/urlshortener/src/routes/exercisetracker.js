const express = require('express');
const get = require('lodash/get');

const { request } = require('/opt/appsyncRequest');
const { createUser, createExercise } = require('/opt/graphql/mutations');
const { listUsers } = require('/opt/graphql/queries');

const getUserWithLogs = /* GraphQL */ `
  query GetUser(
  $id: ID!, 
  $limit: Int,
  $filter: ModelExerciseFilterInput,
  ) {
    getUser(id: $id) {
      id
      username
      logs(limit: $limit, filter: $filter) {
        items {
            description
            date
            duration
        }
      }
    }
  }
`;

const appsyncUrl = process.env.API_URLSHORTENER_GRAPHQLAPIENDPOINTOUTPUT;
const apiKey = process.env.API_URLSHORTENER_GRAPHQLAPIKEYOUTPUT;

const runQuery = async(query, queryName, input) => {
    const params = { query };
    if (input) {
        params.variables = { ...input };
    }
    const result = await request(params, appsyncUrl, apiKey);
    console.log(result);
    return get(result, `data.${queryName}`, null);
};

const insertUser = (username) => runQuery(createUser, 'createUser', { input: { username } });
const insertExercise = (input) => runQuery(createExercise, 'createExercise', { input });
const getUsers = () => runQuery(listUsers, 'listUsers');
const getLogs = (userId, limit, fromDate, toDate) => {
    let filter = null;
    //{ date: { ge: "1989-12-31", le: "1990-01-02" } }
    if (fromDate || toDate) {
        filter = {};
        filter.date = {};
    }
    if (fromDate) {
        filter.date.ge = fromDate;
    }
    if (toDate) {
        filter.date.le = toDate;
    }
    return runQuery(getUserWithLogs, 'getUser', { id: userId, limit: limit || null, filter: filter });

};

const getAWSDate = () => {
    const now = (new Date()).toISOString();
    return now.split('T')[0];
}

const getUTCDate = (date) => {
    //const newDate = (new Date(date)).toUTCString();
    //return newDate.split(' 00:')[0];
    return (new Date(date)).toDateString();
}

const router = express.Router();
router.get('/', function(req, res) {
    res.sendFile(process.cwd() + '/views/exercisetracker.html');
});

router.post('/api/users', async function(req, res) {
    const username = req.body.username;
    const data = await insertUser(username);
    res.json({ 'username': data.username, '_id': data.id })
});


router.post('/api/users/:id/exercises', async function(req, res) {
    const userId = req.params.id;
    const description = req.body.description;
    const duration = req.body.duration;
    const date = req.body.date || getAWSDate();
    const data = await insertExercise({ description, duration, date, userLogsId: userId });
    res.json({
        '_id': data.user.id,
        username: data.user.username,
        date: getUTCDate(data.date),
        duration: data.duration,
        description: data.description
    });

});

router.get('/api/users', async function(req, res) {
    const data = await getUsers();
    const users = data.items.map((u) => ({ '_id': u.id, username: u.username }));
    res.json(users);
});

router.get('/api/users/:id/logs', async function(req, res) {
    const userId = req.params.id;
    const limit = req.query.limit;
    const fromDate = req.query.from;
    const toDate = req.query.to;
    const data = await getLogs(userId, limit, fromDate, toDate);
    const logs = {};
    logs._id = data.id;
    logs.username = data.username;
    logs.count = data.logs.items.length;
    logs.log = data.logs.items.map(l => ({ description: l.description, duration: l.duration, date: getUTCDate(l.date) }));
    res.json(logs);
});


module.exports = router;
