// Test backend connectivity
// Run this in browser console or as a separate script

const testBackendConnection = async () => {
  try {
    console.log('🔍 Testing backend connection...');
    
    // Test basic connection
    const response = await fetch('https://api.acplsports.in/api/razorpay/create-order', {
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
    
    if (response.ok) {
      const data = await response.json();
      console.log('✅ Backend connected successfully:', data);
    } else {
      console.error('❌ Backend responded with error:', response.status, response.statusText);
    }
    
  } catch (error) {
    console.error('❌ Cannot connect to backend:', error.message);
    console.log('💡 Make sure:');
    console.log('1. Backend is running on https://api.acplsports.in');
    console.log('2. CORS is configured properly');
    console.log('3. Routes are set up correctly');
  }
};

// Run the test
testBackendConnection();