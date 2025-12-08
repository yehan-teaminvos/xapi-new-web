const env = process.env.NEXT_PUBLIC_APP_ENV;

const configs = {
    development: {
        chatUrl: 'https://convo-deepthought-dev.whiteground-96e2f081.eastus.azurecontainerapps.io/response',
        chatKey: 'CONVOmxwjNfig2WBgTgho3CoDbiahGAubv4f3',
        signInUrl: 'https://login-dev.xapihub.io/com/xventure/auth/realms/Xventure/protocol/openid-connect/auth?response_type=code&client_id=xapi-dev',
        signUpUrl: 'https://dev.xapihub.io/signup',
        publicEditorUrl: 'https://dev-editor.xapihub.io/',
        allowManageCookies: true
    }, 
    qa: {
        chatUrl: 'https://convo-deepthought-dev.whiteground-96e2f081.eastus.azurecontainerapps.io/response',
        chatKey: 'CONVOmxwjNfig2WBgTgho3CoDbiahGAubv4f3',
        signInUrl: 'https://login-qa.xapihub.io/com/xventure/auth/realms/Xventure/protocol/openid-connect/auth?response_type=code&client_id=xapi-qa',
        signUpUrl: 'https://qa.xapihub.io/signup',
        publicEditorUrl: 'https://qa-editor.xapihub.io/',
        allowManageCookies: true
    }, 
    stage: {
        chatUrl: 'https://convo-deepthought-dev.whiteground-96e2f081.eastus.azurecontainerapps.io/response',
        chatKey: 'CONVOmxwjNfig2WBgTgho3CoDbiahGAubv4f3',
        signInUrl: 'https://login-stage.xapihub.io/com/xventure/auth/realms/Xventure/protocol/openid-connect/auth?response_type=code&client_id=xapi-stage',
        signUpUrl: 'https://stage.xapihub.io/signup',
        publicEditorUrl: 'https://stage-editor.xapihub.io/',
        allowManageCookies: true
    }, 
    production: {
        chatUrl: 'https://convo-deepthought-dev.whiteground-96e2f081.eastus.azurecontainerapps.io/response',
        chatKey: 'CONVOmxwjNfig2WBgTgho3CoDbiahGAubv4f3',
        signInUrl: 'https://login.xapihub.io/com/xventure/auth/realms/Xventure/protocol/openid-connect/auth?response_type=code&client_id=xapi-prod',
        signUpUrl: 'https://xapihub.io/signup',
        publicEditorUrl: 'https://editor.xapihub.io/',
        allowManageCookies: false
    }
}[env || 'development'];

const defaultConfigs = {
    chatUrl: 'https://convo-deepthought-dev.whiteground-96e2f081.eastus.azurecontainerapps.io/response',
    chatKey: 'CONVOmxwjNfig2WBgTgho3CoDbiahGAubv4f3',
    signInUrl: 'http://localhost:8080/com/xventure/auth/realms/Xventure/protocol/openid-connect/auth?response_type=code&client_id=xapi-local',
    signUpUrl: 'http://localhost:4200/signup',
    publicEditorUrl: 'http://localhost:4200/',
    allowManageCookies: true
}

export default configs || defaultConfigs;