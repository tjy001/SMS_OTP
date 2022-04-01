# A simple server to generate and verify OTPs

### Setting up the project:
```
npm install
npm start
```

### Endpoints:
- `POST /otp/generate` : generates a 6-digit OTP for a given phone number 
       - expects a `phone_no:string` in the request body
- `POST /otp/verify` : verifies OTP against generated OTP for a given phone number 
       - expects a `otp:string` and a `phone_no:string` in the request body
       - sends `verified!` if `otp` matches `otp` generated for `phone_no` otherwise `not verified!`



