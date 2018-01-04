### トークン取得方法

下記から

https://api.slack.com/custom-integrations/legacy-tokens

### インストール

```shell
npm install
```

### 実行方法

```shell
# チャンネル指定しない場合
SLACK_TOKEN=<slack token> npm run slack

# 言語指定
SLACK_TOKEN=<slack token> LANGUAGE=en-US npm run slack

# チャンネル指定する場合
SLACK_TOKEN=<slack token> CHANNEL_ID=<channel id> npm run slack
```

### 対応言語

https://support.google.com/googlehome/answer/7550584

言語コード  
https://support.google.com/googleplay/android-developer/table/4419860

### リンク等

- https://github.com/noelportugal/google-home-notifier#usage
- https://github.com/slackapi/node-slack-sdk#posting-a-message-with-the-real-time-messaging-api
