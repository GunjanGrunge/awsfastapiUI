const config = {
    AWS_REGION: 'ap-south-1',
    AWS_ACCESS_KEY_ID: '@@AWS_ACCESS_KEY_ID@@', // Will be replaced during deployment
    AWS_SECRET_ACCESS_KEY: '@@AWS_SECRET_ACCESS_KEY@@', // Will be replaced during deployment
    AWS_BUCKET_NAME: 'awsmusicbackupbucket',
    FIREBASE_CONFIG: {
        apiKey: '@@FIREBASE_API_KEY@@', // Will be replaced during deployment
        authDomain: 'backupapp-bbf71.firebaseapp.com',
        projectId: 'backupapp-bbf71',
        storageBucket: 'backupapp-bbf71.firebasestorage.app',
        messagingSenderId: '346645540196',
        appId: '1:346645540196:web:683bf8c0ca942c2e295e71'
    }
};

export default config;
