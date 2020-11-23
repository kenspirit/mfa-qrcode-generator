const qrcode = require('qrcode');
const qrcodes = require('./qrcodes.json');

const options = {
  type: 'png'
};

qrcodes.forEach((code) => {
  const issuer = code.issuer;
  const path = `./${issuer}.png`;
  const dataUrl = `otpauth://totp/${issuer}:${code.account}?secret=${code.secret}&issuer=${issuer}`;
  qrcode.toFile(path, dataUrl, options);
});
