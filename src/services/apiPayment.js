export async function makePayment({ phoneNumber, amount, desc }) {
  try {
    /*
    Make the MPESA Payment API.
    Hosted in my subdomain -> kifaru.elarchdesigns.com
    it required [phone: String, amount: String, description: String]
    */
    var response = await fetch(
      "https://kifaru.elarchdesigns.com/api/v1/mpesa/mpesaPayment",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          phone: phoneNumber,
          amount: amount,
          description: desc,
        }),
      }
    );

    console.log(desc);

    // Check if response was successful, if not throw a new Error
    if (!response.ok) throw new Error("Unable to make payment");
  } catch (error) {
    throw Error(error?.message || "Something went wrong");
  }
}
