document.addEventListener("DOMContentLoaded", () => {
  // ---------- Booking Page Logic ----------
  if (document.getElementById("bookingForm")) {
    const params = new URLSearchParams(window.location.search);
    const place = params.get("place");

    const imageMap = {
      Delhi: "img/delhi.jpg",
      QutubMinar: "img/qutubminar.jpg",
      RedFort: "img/redfort.jpg",
      IndiaGate: "img/indiagate.jpg",
      Mumbai: "img/mumbai.jpg",
      Gateway: "img/gateway.jpg",
      MarineDrive: "img/marinedrive.jpg",
      ElephantaCaves: "img/elephantacaves.jpg",
      Karnataka: "img/karnataka.jpg",
      Hampi: "img/hampi.jpg",
      Coorg: "img/coorg.jpg",
      Mysore: "img/mysore.jpg"
    };

    const baseCostMap = {
      Delhi: 50000,
      QutubMinar: 55000,
      RedFort: 45000,
      IndiaGate: 40000,
      Mumbai: 55000,
      Gateway: 60000,
      MarineDrive: 50000,
      ElephantaCaves: 65000,
      Karnataka: 48000,
      Hampi: 52000,
      Coorg: 50000,
      Mysore: 53000
    };

    const planMultipliers = {
      Basic: 1,
      Premium: 1.25,
      Luxury: 1.5
    };

    const imageEl = document.getElementById("placeImage");
    const destinationEl = document.getElementById("destination");
    const costEl = document.getElementById("cost");
    const totalCostEl = document.getElementById("totalCost");
    const travelersEl = document.getElementById("travelers");
    const planEl = document.getElementById("plan");

    const baseCost = baseCostMap[place] || 50000;
    const destination = place || "Unknown";

    if (imageEl) imageEl.src = imageMap[place] || "img/default.jpg";
    if (destinationEl) destinationEl.value = destination;

    function updateCosts() {
      const plan = planEl.value;
      const travelers = parseInt(travelersEl.value) || 1;
      const multiplier = planMultipliers[plan] || 1;
      const costPerPerson = baseCost * multiplier;
      const totalCost = costPerPerson * travelers;

      costEl.value = `₹${Math.round(costPerPerson).toLocaleString()}`;
      totalCostEl.value = `₹${Math.round(totalCost).toLocaleString()}`;
    }

    planEl.addEventListener("change", updateCosts);
    travelersEl.addEventListener("input", updateCosts);

    planEl.value = "Basic";
    travelersEl.value = 1;
    updateCosts();

    document.getElementById("bookingForm").addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const date = document.getElementById("date").value;
      const time = document.getElementById("time").value;
      const notes = document.getElementById("notes").value;

      alert(`🎉 Booking Confirmed!
Name: ${name}
Email: ${email}
Phone: ${phone}
Travelers: ${travelersEl.value}
Plan: ${planEl.value}
Date: ${date} (${time})
Destination: ${destination}
Total Cost: ${totalCostEl.value}
Notes: ${notes || "N/A"}

Our team will contact you soon.`);
    });
  }

  // ---------- Contact Page Logic ----------
  if (document.getElementById("contactForm")) {
    document.getElementById("contactForm").addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;

      alert(`📨 Message Sent!
Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}

We'll get back to you soon.`);

      this.reset();
    });
  }
});
