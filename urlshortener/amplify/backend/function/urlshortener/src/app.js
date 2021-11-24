/* Amplify Params - DO NOT EDIT
	API_URLSHORTENER_GRAPHQLAPIENDPOINTOUTPUT
	API_URLSHORTENER_GRAPHQLAPIIDOUTPUT
	API_URLSHORTENER_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */
/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

const express = require('express');
const bodyParser = require('body-parser');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
const { v4: uuidv4 } = require('uuid');
const get = require('lodash/get');

const appsyncUrl = process.env.API_URLSHORTENER_GRAPHQLAPIENDPOINTOUTPUT;
const apiKey = process.env.API_URLSHORTENER_GRAPHQLAPIKEYOUTPUT;

const { request } = require('/opt/appsyncRequest');
const { createShorturl } = require('/opt/graphql/mutations');
const { listShorturls } = require('/opt/graphql/queries');


// declare a new express app
const app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});


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
  )
};

const getOrinalUrl = async(shortUrl) => {
  return request({
      query: listShorturls,
      operationName: 'ListShorturls',
      variables: {
        filter: { shorturl: { eq: shortUrl } },
        limit: 1
      },
    },
    appsyncUrl,
    apiKey
  );
}

app.post('/api/shorturl', async function(req, res) {
  const originalUrl = req.body.url;
  const result = await createShortUrl(originalUrl);
  res.json({ original_url: originalUrl, short_url: result.data.shorturl });
});

app.get('/api/shorturl/:shorturl', async function(req, res) {
  const shorturl = req.params.shorturl;
  const result = await getOrinalUrl(shorturl);
  const originalUrl = get(result, 'data.listShorturls.items[0].originalurl', null);
  if (originalUrl) {
    return res.redirect(originalUrl);
  }
  res.json({ shorturl, result, params: req.params, originalUrl });
});


app.listen(3000, function() {
  console.log("App started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
