const className = "email-signup";

function callEmailOctopusAPI(email_adr) {
    const url = 'https://vngbonykadkkniwthqcg.supabase.co/functions/v1/hello-world';
    const publicKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZuZ2JvbnlrYWRra25pd3RocWNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQwMTMwODUsImV4cCI6MjAzOTU4OTA4NX0.GMTGCMZs_97HPGqlLplOfeR76CT_KM28_oaMayFaMqU';
    const data = {
        "email_adr": email_adr,
    };
    return fetch(url, {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${publicKey}`,
            "Content-Type": "application/json",
            "apikey": publicKey,
        },
        body: JSON.stringify(data),
    });
}

document.querySelector("." + className).addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.querySelector("." + className + " input[type=email]").value;
    if (email) {
        callEmailOctopusAPI(email)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (data.response === true) {
                    document.querySelector("." + className + " input[type=email]").style.display = "none";
                    document.querySelector("." + className + " button").style.display = "none";
                    document.querySelector(".success-message").style.display = "block";
                } else {
                    document.querySelector(".error-message").style.display = "block";
                }
            })
            .catch(error => {
                console.error('Error:', error);
                document.querySelector(".error-message").style.display = "block";
            });
    } else {
        alert("Please enter a valid email address.");
    }
});
