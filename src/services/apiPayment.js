export async function makePayment({ phoneNumber, amount, desc }) {
  try {
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

    if (!response.ok) throw new Error("Unable to make payment");
  } catch (error) {
    throw Error(error?.message || "Something went wrong");
  }
}
