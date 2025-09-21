const admin = require("firebase-admin");

// IMPORTANT: Replace with your service account credentials
const serviceAccount = {
  type: "service_account",
  project_id: "rakta-sewa-6de82",
  private_key_id: "c053d75e991dd1ecad23deec6a4b1508b1bf395f",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDBsVfcMA/GU9b9\nvrAid5pZk8eaNHOxctmwifiYdRc5+X8YmtqwLWHzDisMEvIBHA/4ZejaHOTdf2kT\nOXYwobxm9T1njPLqGNyLNe9kEJmBRNOh2HxXTgyAzHA33LE8BGQMUWUA/VkGxMNu\np0RKVVYyb/TI6L4zF296i0qg3vT1Pc5XQneKYKrpQjgxmQKIlOkCtDDXRUw79lWx\nT/KB6ZPeyTh4qHv3ND3XzOnAXB3Yc6lyq7Eufn5HkMz+cqRCEGTsOnJX8BW8WueI\nkMdOTdn1Xte864LzBCf+SxpehbURs2dZYm2KQslpGfYp2SGBa7ckaQK2NXfllKcd\nDuLewNIdAgMBAAECggEAC88v++sLPyyT7lcevo87wCvoLtD1X9OQjbivyT3UW3LI\nirvASx8NOog53CvYiPRIzfyKqKe71Xxj7+ngOKFXzxAzPPnFQrwe0DcK4Dc54L2N\nSLAeDqWh0gWE7wb74FylK/IXfiq0L5s2DixRF9YhogQc8NXt6MgMQjS1aV8GoOAX\nKoyU4aE38Vni06aGtj7N41+gP+xm7nfxe4/K+KyUAS4CQ++Vc+1QdZWBmFvWeNhP\nIJBmJzndqET7wZABsTsB1GKTl1Bu4n5xxRZGztGR0oBHm4+D6CYDW8MYEOCaaF4U\nmakThL+oD5dFAaTijfWs14wgCSA463qaGalbDsemIQKBgQD+33YlFOLscnY2RCrn\n+e1Met5HLdcQRGPvNT//h4XkU568JtC/lqjrYZEXjl+Md8BbygWAeqAYm12PNseK\nbfydGi6BPYA5DJ5CkKKfTh4frzhrYyX9whRdELd3DUvuKFwUWesMEZxOIKNK2snx\n2vTgpNQbR7tdKz25+9j7f9SafQKBgQDCjJ7SfEaoJduc25SeElRg40q3ipqoooN1\npwSv4olxQMACDKB33yRCiAv7l4XUG+OpF5C6wuQ4A/bjN3+VFIhx1P/yU9s+UJtU\nABytKP1YV2jvWRtjvLTRTRrx2b5xlzj9c5xFwc4KL+NnCKfMsOiae/72obLp8XPl\nYGqiP6kIIQKBgEuIMd0faXilGz9NyGFjAd4uc30oqpmZivwzDbpOkXFvDpW38xk0\nLu9CxNr0SIC6ZHlPT34Z2SQxtvJgS5ZMrhZo0etfLIa7pJMZhfgsEGVXaiL5CSNA\nxwQllhlkCWKU92TYmP3EokvNBFeEq2BPgU6pymojQfWEgRCDAHTYF0uJAoGAFwkv\nhRzSAPb6mggmANGKzC4dmr3+shkMF9I+69SXEaHpGlUEay0wze/t+0xlvEfRHSR9\nLqAFBdzyTtUzdiOIRHJEHB1xyF8jBT8+JgLEfMFc23phk920S1Ql7J0rv6d4SAp4\nZoocK3igJIMR21rXL/OerPVYifrdDjvsZGnFSgECgYEAsA+lGcIeF5DnU7h88nNB\n+AAyfC77QXMIW7YXBcZHmwT+1VJOc/p/Dc8LcMfSkA9F9dD0W4ec+ZaaCAVnXZv0\n2dkI2Tfq3LHJXjLUtr0ZPefpcFYLgoTvaepC84ElWuuFNbqGq1KKBWvxyy8EEHgv\n6LOE1j4/9GmETZQfaqHhBYg=\n-----END PRIVATE KEY-----\n",
  client_email:
    "firebase-adminsdk-fbsvc@rakta-sewa-6de82.iam.gserviceaccount.com",
  client_id: "106732304432817310909",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40rakta-sewa-6de82.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
