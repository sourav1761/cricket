// Test file to verify Razorpay integration
// Run this in browser console to test API endpoints

const testRazorpayIntegration = async () => {
  const API_URL = 'https://api.acplsports.in';
  
  try {
    console.log('🧪 Testing Razorpay Integration...');
    
    // Test 1: Create Order
    console.log('📝 Step 1: Creating Razorpay order...');
    const orderResponse = await fetch(`${API_URL}/api/razorpay/create-order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: 749,
        currency: 'INR',
        receipt: `test_${Date.now()}`
      })
    });
    
    const orderData = await orderResponse.json();
    console.log('✅ Order created:', orderData);
    
    if (!orderData.id) {
      throw new Error('Order creation failed');
    }
    
    // Test 2: Simulate payment verification (with dummy data)
    console.log('🔐 Step 2: Testing payment verification...');
    const verifyResponse = await fetch(`${API_URL}/api/razorpay/verify-order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        razorpay_order_id: orderData.id,
        razorpay_payment_id: 'pay_test_123456789',
        razorpay_signature: 'dummy_signature_for_test',
        name: 'Test Player',
        email: 'test@example.com',
        phone: '9876543210',
        amount: 749
      })
    });
    
    const verifyData = await verifyResponse.json();
    console.log('🔍 Verification response:', verifyData);
    
    console.log('🎉 Integration test completed!');
    
  } catch (error) {
    console.error('❌ Test failed:', error);
  }
};

// Uncomment the line below to run the test
// testRazorpayIntegration();