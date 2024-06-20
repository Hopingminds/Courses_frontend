import CryptoJS from 'crypto-js';


const encryptAES128ECB = (plaintext, key) => {
    // Ensure the key is 16 bytes for AES-128
    const paddedKey = CryptoJS.enc.Utf8.parse(key.padEnd(16, ' '));

    // Encrypt plaintext using AES-128-ECB
    const encrypted = CryptoJS.AES.encrypt(plaintext, paddedKey, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
    });

    // Return the encrypted text as a Base64 string
    return encrypted.toString();
};




export const handleGenerateUrl = async () => {
    const merchant_id = "139765"; // Your merchant ID
    const key = "1300011297605020"; // Your AES key (16 characters for AES-128)
    const ref_no = Math.floor(Math.random() * 9990) + 10; // Random number between 10 and 10000
    const sub_mer_id = "23"; // Your sub-merchant ID
    const amt = "1"; // Amount
    const return_url = "https://hopingminds.in/success"; // Your return URL
    const paymode = "9"; // Payment mode


    // Manually concatenating mandatory fields as in PHP
    const man_fields = `${ref_no}|${sub_mer_id}|${amt}|vivekr4400@gmail.com|9608945441|x|x|x|x|x|x`;
    const opt_fields = ""; // Optional fields
    console.log(man_fields)
    const e_sub_mer_id = await encryptAES128ECB(sub_mer_id, key);
    const e_ref_no = await encryptAES128ECB(ref_no.toString(), key); // Convert to string
    const e_amt = await encryptAES128ECB(amt, key);
    const e_return_url = await encryptAES128ECB(return_url, key);
    const e_paymode = await encryptAES128ECB(paymode, key);
    const e_man_fields = await encryptAES128ECB(man_fields, key);
    const e_opt_fields = await encryptAES128ECB(opt_fields, key);

    // Construct the encrypted URL
    const encryptedUrl = `https://eazypayuat.icicibank.com/EazyPG?merchantid=${merchant_id}&mandatory fields=${encodeURIComponent(e_man_fields)}&optional fields=${""}&returnurl=${encodeURIComponent(e_return_url)}&Reference No=${encodeURIComponent(e_ref_no)}&submerchantid=${encodeURIComponent(e_sub_mer_id)}&transaction amount=${encodeURIComponent(e_amt)}&paymode=${encodeURIComponent(e_paymode)}`;

    // Construct the original URL (for comparison)
    const originalUrl = `https://eazypayuat.icicibank.com/EazyPG?merchantid=${merchant_id}&mandatory fields=${encodeURIComponent(man_fields)}&optional fields=${opt_fields}&returnurl=${encodeURIComponent(return_url)}&Reference No=${encodeURIComponent(ref_no.toString())}&submerchantid=${encodeURIComponent(sub_mer_id)}&transaction amount=${encodeURIComponent(amt)}&paymode=${encodeURIComponent(paymode)}`;
    return encryptedUrl

};