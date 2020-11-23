It's really a painful task when changing phone and mistakenly lost all previous MFA info in Google Authenticator.

It's really important to backup the MFA QR Code or Secret Code.

However, backup the Secret Code is easier than the QR Code Image but it's more troublesome to retype it again when recovering it.

This tool helps regenerating all the QR Code Image based on the backup secret code of MFA provider.

With all your MFA secret backuped in a file called `qrcodes.json`:

```json
[
  {
    "issuer": "Google",
    "secret": "GOOGLE-QR-CODE-SECRET",
    "account": "chengusky@gmail.com"
  },
  {
    "issuer": "AWS",
    "secret": "AWS-QR-CODE-SECRET",
    "account": "chengusky@gmail.com"
  }
]
```

Simply run `node index.js` generates all the QR Code PNG files in current directory using file name `${issuer}.png`.
