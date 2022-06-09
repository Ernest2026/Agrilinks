# Project aim

You are required to build an express JS API web-service which captures user contributed reports and returns an aggregate report in response.

# How to use

### Firstly you're to create a report request.

**Request 1**
POST https://agri-links.herokuapp.com/api/v1/reports

{
"reportDetails": {
"userID": "user-1",
"marketID": "market-1",
"marketName": "Vashi Navi Mumbai",
"cmdtyID": "cmdty-1",
"marketType": "Mandi",
"cmdtyName": "Potato",
"priceUnit": "Pack",
"convFctr": 50,
"price": 700
}
}

**Request 2**
POST https://agri-links.herokuapp.com/api/v1/reports

{
  "reportDetails": {
  "userID": "user-2",
"marketID": "market-1",
"marketName": "Vashi Navi Mumbai",
"cmdtyID": "cmdty-1",
"cmdtyName": "Potato",
"priceUnit": "Quintal",
"convFctr": 100,
"price": 1600
}
}

### Then you get the aggregated report

GET https://agri-links.herokuapp.com/api/v1/reports?reportID=949832f8-48c7-4cb2-8dcd-98f046a9a2e3

**Note:** the response for the GET request returns **id** instead of **\_id** because mongodb takes the **\_id** as a unique value for default and also the timestamp returns the time the API was called.
