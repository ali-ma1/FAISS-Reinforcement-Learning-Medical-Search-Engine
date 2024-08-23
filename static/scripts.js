async function performSearch() {
    const query = document.getElementById('query').value;

    if (query.trim() === '') {
        alert('Please enter a search query');
        return;
    }

    try {
        const response = await fetch('/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query: query }),
        });

        if (response.ok) {
            const data = await response.json();
            sessionStorage.setItem('lastQuery', query);
            sessionStorage.setItem('lastResults', JSON.stringify(data));
            displayResults(data);
        } else {
            alert('Failed to fetch results. Status Code: ' + response.status);
        }
    } catch (error) {
        console.error('Fetch error:', error);
        alert('An error occurred: ' + error.message);
    }
}

function displayResults(results) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (results.length === 0) {
        resultsDiv.innerHTML = '<p>No results found.</p>';
        return;
    }

    results.forEach((result) => {
        const resultElement = document.createElement('div');
        resultElement.classList.add('result');

        let title = result.title || "No title available";

        resultElement.innerHTML = `
            <h3><a href="/document/${result.document_id}" onclick="saveSessionTime()">${title}</a></h3>
            <p><strong>FAISS Score:</strong> ${result.faiss_score.toFixed(2)}</p>
            <p><strong>RL Score:</strong> ${result.rl_score.toFixed(2)}</p>
            <p><strong>Combined Score:</strong> ${result.combined_score.toFixed(2)}</p>
            <p><strong>Abstract:</strong> ${result.abstract.slice(0, 100)}...</p>
        `;
        resultsDiv.appendChild(resultElement);
    });
}


function saveSessionTime() {
    const sessionTime = Date.now();
    sessionStorage.setItem('sessionTime', sessionTime.toString());
}

function loadPreviousSearch() {
    const lastQuery = sessionStorage.getItem('lastQuery');
    if (lastQuery) {
        document.getElementById('query').value = lastQuery;
        performSearch();
    }
}

function stopRLSimulation(document_id) {
    const startTime = parseInt(sessionStorage.getItem('sessionTime'), 10);
    if (!isNaN(startTime)) {
        const timeSpent = (Date.now() - startTime) / 1000;

        console.log("Document ID in stopRLSimulation:", document_id);
        console.log("Time spent on the page:", timeSpent);

        fetch(`/document/${document_id}/end`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ start_time: startTime }),
        }).then(response => {
            if (response.ok) {
                console.log("RL score updated successfully.");
                loadPreviousSearch();
            } else {
                console.log("Failed to update RL score.");
            }
        }).catch((error) => {
            console.error('Error while stopping RL simulation:', error);
        });
    } else {
        console.error("Session time was not set correctly.");
    }
}

window.onload = loadPreviousSearch;