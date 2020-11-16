#!/bin/bash

curl -H "Content-Type: application/json" -X POST 'http://localhost:3000/configuration/etablissement/acte' \
    -d '{
    "etablissement": {
        "oid": "Oid",
        "platform": "Platform",
        "cml": "Cml"
    },
    "autorisations": [
        {
            "acte": "ActeH1100",
            "entraineFinalisation": true
        },
        {
            "acte": "ActeH1101",
            "entraineFinalisation": false
        }
    ]
}'