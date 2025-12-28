# Razorpay Integration Setup Guide

## ✅ Frontend Changes Completed

### What's Been Done:
1. ✅ Commented out all Cashfree imports and code
2. ✅ Added Razorpay script loading
3. ✅ Updated payment flow to use your backend endpoints
4. ✅ Added environment variable support
5. ✅ Created proper error handling

### Files Modified:
- `src/app/registration/page.js` - Main registration component
- `package.json` - Added Razorpay dependency
- `.env.local` - Environment configuration

## 🔧 Setup Instructions

### 1. Update Environment Variables
Edit `.env.local` and add your actual Razorpay keys:

```env
# Replace with your actual Razorpay test key
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_your_actual_key_here

# Backend URL (change if different)
NEXT_PUBLIC_API_URL=https://api.acplsports.in
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Your Backend
Make sure your backend is running on `https://api.acplsports.in` with the routes:
- `POST /api/razorpay/create-order`
- `POST /api/razorpay/verify-order`

### 4. Start Frontend
```bash
npm run dev
```

## 🔄 Payment Flow

1. **User fills registration form** → Clicks "Proceed to Register"
2. **Frontend calls** → `POST /api/razorpay/create-order`
3. **Backend responds** → Razorpay order object with `id`, `amount`, `currency`
4. **Razorpay modal opens** → User completes payment
5. **On success** → Frontend calls `POST /api/razorpay/verify-order`
6. **Backend verifies** → Signature validation + amount check
7. **Success response** → User registration complete

## 📋 API Endpoints Used

### Create Order
```javascript
POST /api/razorpay/create-order
Body: {
  amount: 749,
  currency: "INR",
  receipt: "ACPL_timestamp_random"
}
```

### Verify Payment
```javascript
POST /api/razorpay/verify-order
Body: {
  razorpay_order_id: "order_xxx",
  razorpay_payment_id: "pay_xxx",
  razorpay_signature: "signature_xxx",
  name: "Player Name",
  email: "player@email.com",
  phone: "9876543210",
  amount: 749
}
```

## 🧪 Testing

1. **Test API endpoints** using the provided `test-razorpay.js` file
2. **Use Razorpay test cards** for payment testing
3. **Check browser console** for detailed logs

### Test Cards (Razorpay)
- **Success**: 4111 1111 1111 1111
- **Failure**: 4000 0000 0000 0002
- **CVV**: Any 3 digits
- **Expiry**: Any future date

## 🚨 Important Notes

- ✅ All Cashfree code is commented out (not deleted) for easy rollback
- ✅ Amount is handled correctly (₹749 = 74900 paise in backend)
- ✅ Signature verification implemented in your backend
- ✅ Environment variables used for configuration
- ✅ Error handling for all scenarios

## 🔍 Troubleshooting

### Common Issues:
1. **"Razorpay SDK not loaded"** → Check internet connection
2. **"Payment initiation failed"** → Verify backend is running
3. **"Invalid payment signature"** → Check Razorpay secret key
4. **CORS errors** → Add frontend URL to backend CORS config

### Debug Steps:
1. Open browser console
2. Check Network tab for API calls
3. Verify environment variables are loaded
4. Test backend endpoints directly

## 📞 Support
If you encounter any issues:
1. Check browser console for errors
2. Verify backend logs
3. Test with Razorpay test credentials
4. Ensure all environment variables are set correctly