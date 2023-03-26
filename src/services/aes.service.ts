import { Injectable, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';
declare var require: any

@Injectable({
  providedIn: 'root'
})

export class AesService implements OnInit{
  four: any;
  salt: any;
  _keySize: any;
  _iterationCount: any;
  passphrase: any;
  _ivSize:any;
  secretKey:any;
  uiPrivateKey:any;
  publicKeyHex:any;
  bkPublicKey:any;
  constructor() {
    this._keySize = 256;
    this._ivSize = 128;
    this._iterationCount = 65536;
    this.passphrase = "Tk93sO0GqQTWU1Vp5xyPtDvk5YT/cpej/sxi3ZlFWRa/XUmk2DrIeA+rO2/Wp3xZYSHEFQAiFxuPXa4md8PWEQ==";

  }
  ngOnInit() {
  }
  
  aesInit(keySize: any, iterationCount: any) {
    this._keySize = 256;
    this._ivSize = 128;
    this._iterationCount = 65536;
    this.passphrase = "Tk93sO0GqQTWU1Vp5xyPtDvk5YT/cpej/sxi3ZlFWRa/XUmk2DrIeA+rO2/Wp3xZYSHEFQAiFxuPXa4md8PWEQ==";
}

generateKey(salt:any, passPhrase:any) {
  return CryptoJS.PBKDF2(passPhrase, CryptoJS.enc.Hex.parse(salt), {
      keySize: this._keySize / 32,
      iterations: this._iterationCount
  });
}

encryptWithIvSalt(salt:any, iv:any, passPhrase:any, plainText:any) {
  let key = this.generateKey(salt, passPhrase);
  let encrypted = CryptoJS.AES.encrypt(plainText, key, {iv: CryptoJS.enc.Hex.parse(iv)});
  return encrypted.ciphertext.toString(CryptoJS.enc.Base64);
}

decryptWithIvSalt(salt:any, iv:any, passPhrase:any, cipherText:any) {
  let key = this.generateKey(salt, passPhrase);
  let cipherParams = CryptoJS.lib.CipherParams.create({
      ciphertext: CryptoJS.enc.Base64.parse(cipherText)
  });
  let decrypted = CryptoJS.AES.decrypt(cipherParams, key, {iv: CryptoJS.enc.Hex.parse(iv)});
  console.log(decrypted);
  return decrypted.toString(CryptoJS.enc.Utf8);
}

encrypt(passPhrase:any, plainText:any) {
  let iv = CryptoJS.lib.WordArray.random(this._ivSize / 8).toString(CryptoJS.enc.Hex);
  let salt = CryptoJS.lib.WordArray.random(this._keySize / 8).toString(CryptoJS.enc.Hex);
  let cipherText = this.encryptWithIvSalt(salt, iv, passPhrase, plainText);
  return salt + iv + cipherText;
}

decrypt(passPhrase:any, cipherText:any) {
  let ivLength = this._ivSize / 8;
  let saltLength = this._keySize / 8;
  let salt = cipherText.substr(0, saltLength);
  let iv = cipherText.substr(saltLength, ivLength);
  let encrypted = cipherText.substring(ivLength + saltLength);
  let decrypted = this.decryptWithIvSalt(salt, iv, passPhrase, encrypted);
  return decrypted;
}

decryptCipher(cipherText:any){
  let start = new Date();

        let cipherTextHex = CryptoJS.enc.Base64.parse(cipherText).toString(CryptoJS.enc.Hex);

        let salt = CryptoJS.enc.Hex.parse(cipherTextHex.substring(0, 32)).toString(CryptoJS.enc.Hex);
        let iv = CryptoJS.enc.Hex.parse(cipherTextHex.substring(32, 64)).toString(CryptoJS.enc.Hex);
        let cipher = CryptoJS.enc.Hex.parse(cipherTextHex.substring(64)).toString(CryptoJS.enc.Hex);

        let cipherBase64 = CryptoJS.enc.Hex.parse(cipher).toString(CryptoJS.enc.Base64);

        let key = this.generateKey(salt, this.passphrase);
        let cipherParams = CryptoJS.lib.CipherParams.create({
            ciphertext: CryptoJS.enc.Base64.parse(cipherBase64)
        });
        let decrypted = CryptoJS.AES.decrypt(
            cipherParams,
            key,
            {
                iv: CryptoJS.enc.Hex.parse(iv)
            });
        let dec = '';
        console.log(decrypted.toString(CryptoJS.enc.Utf8));
        if (decrypted.toString(CryptoJS.enc.Utf8)) {
            dec = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
        }
        return dec;
}
_sodium = require('libsodium-wrappers')

generateSecretKey() {
  let secret = this._sodium.crypto_box_beforenm(this._sodium.from_hex(this.bkPublicKey), this.uiPrivateKey)
  this.secretKey = secret;
}
decryptResponse(cipherText:any) {
  if (cipherText && cipherText.includes('Invalid token or expired token')) {
      // this.router.navigate(['/home']);
      return "";
  } else {
      let nounce = new Uint8Array(24);
      const decryptMsg = this._sodium.crypto_box_open_easy_afternm(this._sodium.from_hex(cipherText), nounce, this.secretKey);
      return atob(this._sodium.to_string(decryptMsg))
  }
}



async generatesharedkey() {
  await this._sodium.ready;
  const sodium = this._sodium;
  let keypair = sodium.crypto_sign_keypair()
  let upk = sodium.crypto_sign_ed25519_pk_to_curve25519(keypair.publicKey);
  let usk = sodium.crypto_sign_ed25519_sk_to_curve25519(keypair.privateKey);
  this.uiPrivateKey = usk;
  this.publicKeyHex = sodium.to_hex(upk);

}


get keySize() {
  return this._keySize;
}

set keySize(value) {
  this._keySize = value;
}

get iterationCount() {
  return this._iterationCount;
}

set iterationCount(value) {
  this._iterationCount = value;
}
}
