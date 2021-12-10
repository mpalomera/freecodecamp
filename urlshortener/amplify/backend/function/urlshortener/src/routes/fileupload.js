const express = require('express');
const AWS = require('aws-sdk');
const fileUpload = require('express-fileupload');

const s3 = new AWS.S3();
const bucketName = process.env.STORAGE_FILES_BUCKETNAME;


const s3UploadPromise = (params) => new Promise((resolve, reject) => {
    s3.upload(params, (err, data) => {
        if (err) {
            reject(err);
        }
        else {
            resolve(data);
        }
    });
});

const uploadFileS3 = async (fileName, fileContent) => {
    // Setting up S3 upload parameters
    const params = {
        Bucket: bucketName,
        Key: fileName, // File name you want to save as in S3
        Body: fileContent,
    };
    return s3UploadPromise(params);
};

const router = express.Router();
router.get('/', function(req, res) {
    res.sendFile(process.cwd() + '/views/fileupload.html');
});

router.post('/api/uploadfile', async function(req, res) {
    const fileName = req.body.name;
    const fileSize = req.body.size;
    const fileMimeType = req.body.mimetype;
    const fileContent = Buffer.from(req.body.data, 'base64');
    await uploadFileS3(fileName, fileContent);
    res.json({ name: fileName, type: fileMimeType, size: fileSize })
});


module.exports = router;
