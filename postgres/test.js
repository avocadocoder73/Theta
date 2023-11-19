const axios = require('axios');

const request_body = {
    files: [
        {
            file_id: "yeet",  // Replace with the actual file ID
            name: "blank.json",  // Replace with the actual file name
            location: "fs"
        }
    ],
    instructions: "YEET",
    display: {
        name: "TweetlyGPT",
        description: "Tweetera"
    }
};

const headers = {
    // Add your headers here, e.g., Authorization: 'Bearer YOUR_TOKEN'
    "Authorization": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiJoYXJvdW5vbWVrM0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZX0sImh0dHBzOi8vYXBpLm9wZW5haS5jb20vYXV0aCI6eyJwb2lkIjoib3JnLUdSUzgyRVhNNFNSRk91R21SUmNYbDBCQyIsInVzZXJfaWQiOiJ1c2VyLWlidVhnOEU5cWVXbHBpUmE4TjNyVWtzQiJ9LCJpc3MiOiJodHRwczovL2F1dGgwLm9wZW5haS5jb20vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMDI2NTAwMTQwNzA4NTM2MTQ1MjAiLCJhdWQiOlsiaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS92MSIsImh0dHBzOi8vb3BlbmFpLm9wZW5haS5hdXRoMGFwcC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjk5NjgzNTQ1LCJleHAiOjE3MDA1NDc1NDUsImF6cCI6IlRkSkljYmUxNldvVEh0Tjk1bnl5d2g1RTR5T282SXRHIiwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSBtb2RlbC5yZWFkIG1vZGVsLnJlcXVlc3Qgb3JnYW5pemF0aW9uLnJlYWQgb3JnYW5pemF0aW9uLndyaXRlIG9mZmxpbmVfYWNjZXNzIn0.T8kfpMcRkt1HJvcQn_0_-IhAjvseaiqHcGh6gWqRebp5ytH4xXf6BsSPo5DOAx9EGxAuNlSdS7jVGKek77FLLC-7wD4NKeLbBMBUxikUlke4CE2Zn7Jo89hQHiL0kUV-G6Sxd92bKeuk4X-TQY8I_EOEeL2LJMI1_qgZj_rxUM9wdbmlyRhCYUhRwSLJjirnyYpoXnrdypsqJzXsVbHgKjh__pP_QXVfb0qJ8rUqhH2GXqYJQX7VmTX2eRQiAiYIPyeRNTjc19okjsyo9WxFPKL-tQxkmGL-Mlb8Kd8hTKlGiMPEUmVxjSMlmba5Mdbd1SsY_ElA1zvSiyQpwpZpoA"
};

axios.post('https://chat.openai.com/backend-api/gizmos?gizmo_id=g-R6R9c9NGL', request_body, { headers: headers })
    .then(response => {
        console.log(`Status Code: ${response.status}`);
        console.log(`Response Body: ${response.data}`);
    })
    .catch(error => {
        console.error(`Error: ${error}`);
    });