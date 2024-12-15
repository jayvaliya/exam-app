import { S3Client, PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid'; // Import UUID library

const s3Client = new S3Client({
    region: process.env.R2_REGION || "auto",
    endpoint: process.env.R2_ENDPOINT,
    credentials: {
        accessKeyId: process.env.R2_ACCESS_KEY_ID || "",
        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || "",
    },
});

/**
 * Uploads a file to the R2 bucket.
 * 
 * @param {File} file - The file to upload.
 * @returns {Promise<string>} - The URL of the uploaded file.
 */

export async function uploadFile(file) {
    if (!file || !(file instanceof File)) {
        throw new Error('Invalid file provided');
    }

    const uniqueKey = `${uuidv4()}-${file.name}`;
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const command = new PutObjectCommand({
        Bucket: process.env.R2_BUCKET_NAME || "",
        Key: uniqueKey,
        Body: buffer,
        ContentType: file.type,
    });

    try {
        await s3Client.send(command);
        return `https://${process.env.R2_BUCKET_NAME}.r2.cloudflarestorage.com/${uniqueKey}`;
    } catch (error) {
        console.error('Error uploading file:', error);
        throw new Error('Failed to upload file');
    }
}

/**
 * Reads an image from the R2 bucket.
 * 
 * @param {string} key - The key of the file to read.
 * @returns {Promise<string>} - The URL of the image.
 */
export async function readFile(key) {
    if (!key) {
        throw new Error('Invalid key provided');
    }

    const command = new GetObjectCommand({
        Bucket: process.env.R2_BUCKET_NAME || "", // Avoid non-null assertion (!), provide default
        Key: key,
    });

    try {
        return `https://${process.env.R2_BUCKET_NAME}.r2.cloudflarestorage.com/${key}`;
    } catch (error) {
        console.error('Error reading file:', error);
        throw new Error('Failed to read file');
    }
}
