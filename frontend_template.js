// FUNCTION TO LOAD SCRIPT

// function loadScript(src) {
// return new Promise((resolve) => {
//   const script = document.createElement('script');
//   script.src = src;
//   script.onload = () => {
// resolve(true);
//   };
//   script.onerror = () => {
// resolve(false);
//   };
//   document.body.appendChild(script);
// });
//   }


// FUNCTION TO CALL ON BUTTON CLICK

// async function displayRazorpay() {
//     const res = await loadScript(
//       'https://checkout.razorpay.com/v1/checkout.js'
//     );

//     if (!res) {
//       alert('Razorpay SDK failed to load');
//       return;
//     }

//     const data = await fetch('http://localhost:3000/razorpay, {
//       method: 'POST',
//     }).then((t) => t.json());
//     console.log(data);

//     const options = {
//       key: import.meta.env.VITE_RZP_KEY_ID,
//       amount: data.amount.toString(), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
//       currency: data.currency,
//       name: 'Laundrix',
//       description: 'Complete payment',
//       image: 'https://example.com/your_logo',
//       order_id: data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
//       // eslint-disable-next-line no-unused-vars
//       handler: function (response) {
//         // alert(response.razorpay_payment_id);
//         // alert(response.razorpay_order_id);
//         // alert(response.razorpay_signature);
//         // can be used to redirect after paymenmt completion
//         // window.location.replace(window.location.href)
//       },
//       callback_url: 'https://www.google.com/',
//       prefill: {
//         name: 'Gaurav Kumar', //your customer's name
//         email: 'gaurav.kumar@example.com',
//         contact: '9000090000', //Provide the customer's phone number for better conversion rates
//       },
//       notes: {
//         address: 'IIITDM JABALPUR',
//       },
//       theme: {
//         color: '#584BAC',
//       },
//     };
//     var paymentObject = new window.Razorpay(options);
//     paymentObject.open();
//   }
