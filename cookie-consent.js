window.addEventListener("load", function () {
    window.cookieconsent.initialise({
        palette: {
            popup: { background: "#000" },
            button: { background: "#f1d600" }
        },
        theme: "classic",
        position: "bottom-right",
        type: "opt-in",
        content: {
            message: "We use cookies to analyze traffic and improve your experience.",
            dismiss: "Decline",
            allow: "Allow cookies",
            link: "Learn more",
            href: "/privacy-policy.html"
        },
        onInitialise: function (status) {
            if (status === cookieconsent.status.allow) {
                enableGoogleAnalytics();
            }
        },
        onStatusChange: function (status) {
            if (status === cookieconsent.status.allow) {
                enableGoogleAnalytics();
            }
        }
    });
});

function enableGoogleAnalytics() {
    const gaScript = document.createElement('script');
    gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-2XKNN5GCHQ";
    gaScript.async = true;
    document.head.appendChild(gaScript);

    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-2XKNN5GCHQ');
}
