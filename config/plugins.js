module.exports = ({ env }) => ({
    // إعدادات أخرى
    'users-permissions': {
        config: {
            jwtSecret: env('JWT_SECRET', 'B9VzNnpSrksJD9Sq8MfX8g==')
        }
    }
});
