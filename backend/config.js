module.exports = {
    s3: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION,
        bucketName: process.env.S3_BUCKET_NAME
    },
    dynamodb: {
        accessKeyId: process.env.DYNAMODB_ACCESS_KEY_ID,
        secretAccessKey: process.env.DYNAMODB_SECRET_ACCESS_KEY,
        region: process.env.DYNAMODB_REGION,
        tableName: process.env.DYNAMODB_TABLE_NAME
    },
    fileUpload: {
        acceptedFileExtensions: ['.png', '.jpg', '.jpeg', '.gif'],
        maxFileSize: 5 * 1024 * 1024,  // 5 MB
        chunkSize: 1 * 1024 * 1024  // 1 MB
    }
};