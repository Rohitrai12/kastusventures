const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id:
    "AWyVmr3SPAv5XWyC_EVJCfvzghEmXCoQzoMkpr71_S5BiriFJz7yFo2nQYWBdLZASjZ5i7l4EgD48wqr",
  client_secret:
    "EATHXKaWY9QvXGAYUchl8ojl2EL9jhlZ2bt0jhaJ1prZr0UCacjnY5QGH_b2K8EZKdnaNOJv0qxRa41t",
});

module.exports = paypal;
