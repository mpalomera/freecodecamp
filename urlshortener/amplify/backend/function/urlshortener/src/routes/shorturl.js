const { v4: uuidv4 } = require('uuid');
const get = require('lodash/get');
const URL = require("url").URL;
const express = require('express');

const { request } = require('/opt/appsyncRequest');
const { createShorturl } = require('/opt/graphql/mutations');
const { listShorturls } = require('/opt/graphql/queries');

const appsyncUrl = process.env.API_URLSHORTENER_GRAPHQLAPIENDPOINTOUTPUT;
const apiKey = process.env.API_URLSHORTENER_GRAPHQLAPIKEYOUTPUT;

const isValidHttpUrl = (string) => {
    let url;

    try {
        url = new URL(string);
    }
    catch (_) {
        return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
};

const createShortUrl = (originalurl) => {
    const id = uuidv4();
    const shorturl = id.substring(0, 6);

    return request({
            query: createShorturl,
            variables: {
                input: { id, shorturl, originalurl }
            },
        },
        appsyncUrl,
        apiKey
    );
};

const getOrinalUrl = async(shortUrl) => {
    return request({
            query: listShorturls,
            variables: {
                filter: { shorturl: { eq: shortUrl } },
            },
        },
        appsyncUrl,
        apiKey
    );
};


const router = express.Router();
router.get('/', function(req, res) {
    res.sendFile(process.cwd() + '/views/shorturl.html');
});

router.post('/api/shorturl', async function(req, res) {
    const originalUrl = req.body.url;
    if (isValidHttpUrl(originalUrl)) {
        const result = await createShortUrl(originalUrl);
        const shorturl = get(result, 'data.createShorturl.shorturl', null);
        const response = { original_url: originalUrl, short_url: shorturl };
        return res.json(response);
    }
    res.json({ error: 'invalid url' });
});

router.get('/api/shorturl/:shorturl', async function(req, res) {
    const shorturl = req.params.shorturl;
    const result = await getOrinalUrl(shorturl);
    const originalUrl = get(result, 'data.listShorturls.items[0].originalurl', null);
    if (originalUrl) {
        return res.redirect(originalUrl);
    }
    res.json({ shorturl, result, params: req.params, originalUrl });
});


module.exports = router;
