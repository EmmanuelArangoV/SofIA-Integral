require('dotenv').config();

const requiredEnvVars = [
    'DATABASE_URL',
    'ELEVENLABS_API_KEY',
    'ELEVENLABS_AGENT_ID',
    'ELEVENLABS_PHONE_NUMBER_ID'
];

for (const key of requiredEnvVars) {
    if (!process.env[key]) {
        throw new Error(`Missing required environment variable: ${key}`);
    }
}

module.exports = {
    DATABASE_URL: process.env.DATABASE_URL,
    ELEVENLABS_API_KEY: process.env.ELEVENLABS_API_KEY,
    ELEVENLABS_AGENT_ID: process.env.ELEVENLABS_AGENT_ID,
    ELEVENLABS_PHONE_NUMBER_ID: process.env.ELEVENLABS_PHONE_NUMBER_ID,
    PORT: process.env.PORT || 3000,
    ELEVENLABS_API_URL: process.env.ELEVENLABS_API_URL || 'https://api.elevenlabs.io/v1/convai/twilio/outbound-call',
};
