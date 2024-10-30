async function measureRTT(url) {
    const startTime = Date.now();
    try {
        const response = await fetch(url, { method: "HEAD" }); // HEAD request med minimal data
        const endTime = Date.now();

        if (response.ok) {
            const rtt = endTime - startTime;
            console.log(`RTT til ${url}: ${rtt} ms`);
        } else {
            console.log(`Fejl ved forespørgsel: ${response.status}`);
        }
    } catch (error) {
        console.error("Netværksfejl:", error);
    }
}



// Mål RTT til CBS' hjemmeside
measureRTT("https://cbs.dk");
measureRTT("https://dr.dk");
