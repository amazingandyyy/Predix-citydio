`
//////////////////////////////--Get Token--//////////////////////////////////
UAA Token Issuer Url: https://9bf8d094-71a2-4912-9c56-fcdbada2fc4e.predix-uaa.run.aws-usw02-pr.ice.predix.io/oauth/token
UAA OAuth Token - curl -X POST -H "Authorization: Basic aWVzX2lvdGhhY2s6aTNzXzEwdGhAY2s=" -H "Content-Type: application/x-www-form-urlencoded" -d 'grant_type=client_credentials' "https://9bf8d094-71a2-4912-9c56-fcdbada2fc4e.predix-uaa.run.aws-usw02-pr.ice.predix.io/oauth/token"


//////////////////////////////--REQUEST--//////////////////////////////////
GET REQUEST --> URL + URI + headers
// ie-parking service:
     URL: https://ie-parking.run.aws-usw02-pr.ice.predix.io
     Predix-Zone-Id: f9a1a632-9e1e-4dfe-a662-53b396e100ab
     URI: /v1/assets/1000000018/live-events?event-types=PKIN, PKOUT
// ie-pedestrian service:
     URL: https://ie-pedestrian.run.aws-usw02-pr.ice.predix.io
     Predix-Zone-Id: e8e597be-fb83-4b7e-8ff4-3a0c14a2b680
     URI: /v1/assets/1000000027/live-events?event-types=SFIN, SFOUT
// ie-public-safety service:
     URL: https://ie-public-safety.run.aws-usw02-pr.ice.predix.io
     Predix-Zone-Id: dc4829a9-3087-414a-9ab2-4dbf6f264263
     URI: /v1/assets/1000000018/media?media-types=IMAGE&start-ts=1453832741281&end-ts=1453832741281&size=1&page=1
// ie-traffic service:
     URL: https://ie-traffic.run.aws-usw02-pr.ice.predix.io
     Predix-Zone-Id: fde29c83-d27b-4f8c-b4c8-1c7b772170eb
     URI: /v1/assets/1000000018/events?event-types=TFEVT&start-ts=1453766605577&end-ts=1453772603879&size=10&page=1

#headers
    'Authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiI2NWM1N2MxNy00Y2VkLTQwNmItYjIyYy1mODA0NDlmNzhjMGQiLCJzdWIiOiJpZXNfaW90aGFjayIsInNjb3BlIjpbImllLXRyYWZmaWMuem9uZXMuZmRlMjljODMtZDI3Yi00ZjhjLWI0YzgtMWM3Yjc3MjE3MGViLnVzZXIiLCJ1YWEucmVzb3VyY2UiLCJpZS1wZWRlc3RyaWFuLnpvbmVzLmU4ZTU5N2JlLWZiODMtNGI3ZS04ZmY0LTNhMGMxNGEyYjY4MC51c2VyIiwiaWUtcHVibGljLXNhZmV0eS56b25lcy5kYzQ4MjlhOS0zMDg3LTQxNGEtOWFiMi00ZGJmNmYyNjQyNjMudXNlciIsImllLXBhcmtpbmcuem9uZXMuZjlhMWE2MzItOWUxZS00ZGZlLWE2NjItNTNiMzk2ZTEwMGFiLnVzZXIiXSwiY2xpZW50X2lkIjoiaWVzX2lvdGhhY2siLCJjaWQiOiJpZXNfaW90aGFjayIsImF6cCI6Imllc19pb3RoYWNrIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzMWE2ZmQ3ZiIsImlhdCI6MTQ2Mjk5MjQ5NywiZXhwIjoxNDYzMDc4ODk3LCJpc3MiOiJodHRwczovLzliZjhkMDk0LTcxYTItNDkxMi05YzU2LWZjZGJhZGEyZmM0ZS5wcmVkaXgtdWFhLnJ1bi5hd3MtdXN3MDItcHIuaWNlLnByZWRpeC5pby9vYXV0aC90b2tlbiIsInppZCI6IjliZjhkMDk0LTcxYTItNDkxMi05YzU2LWZjZGJhZGEyZmM0ZSIsImF1ZCI6WyJpZXNfaW90aGFjayIsImllLXRyYWZmaWMuem9uZXMuZmRlMjljODMtZDI3Yi00ZjhjLWI0YzgtMWM3Yjc3MjE3MGViIiwidWFhIiwiaWUtcGVkZXN0cmlhbi56b25lcy5lOGU1OTdiZS1mYjgzLTRiN2UtOGZmNC0zYTBjMTRhMmI2ODAiLCJpZS1wdWJsaWMtc2FmZXR5LnpvbmVzLmRjNDgyOWE5LTMwODctNDE0YS05YWIyLTRkYmY2ZjI2NDI2MyIsImllLXBhcmtpbmcuem9uZXMuZjlhMWE2MzItOWUxZS00ZGZlLWE2NjItNTNiMzk2ZTEwMGFiIl19.VlUqRBMqYwEPc8wEKcp4L0gy3m8aY-v0x0nCHD0oONjkDvcqXWQiANq0KL1x-LFMJhvXApmYtKvrlJSKZSEhRHUWqxJDfJVVYaibjwLScuBUctCvh6v8_9kBobQ5AIAszaJkSe210EPdNbTp0k5BGbN4UwvRUU-280rWZ6eJyXpQKVwz6EETNly7nmXmCk9eN8ImYaQ_gMqPJ-a2IlEBBAkq0TJcFYcdb9gHoKSPV2-rz8EOgUbVO3tO7s-so1gBkiej0Nxl0_-JE43izF2OMThRCCBCFvGlUpsrd3xhvWUWoWgvNtydNEUYYKMzmNF-52IHOQedzBj-9qBZ_uotDw'
    'Predix-Zone-Id': 'whatever'


//////////////////////////////--Search in BBox Samples--//////////////////////////////////
https://ie-public-safety.run.aws-usw02-pr.ice.predix.io/v1/assets/search?bbox=32.715675:-117.161230,32.708498:-117.151681
https://ie-traffic.run.aws-usw02-pr.ice.predix.io/v1/assets/search?bbox=32.715675:-117.161230,32.708498:-117.151681


//////////////////////////////--Get assets Sample--//////////////////////////////////
https://ie-public-safety.run.aws-usw02-pr.ice.predix.io/v1/assets/1000000018/media?media-types=IMAGE&start-ts=1453832741281&end-ts=1462996283887&size=1&page=1
https://ie-traffic.run.aws-usw02-pr.ice.predix.io/v1/assets/1000000018/events?event-types=TFEVT&start-ts=1453832741281&end-ts=1462996283887&size=10&page=1
https://ie-parking.run.aws-usw02-pr.ice.predix.io/v1/assets/1000000018/live-events?event-types=PKIN
/v1/assets/1000000018/events?event-types=TFEVT&start-ts=1453766605577&end-ts=1453772603879&size=10&page=1


//////////////////////////////--Resource--//////////////////////////////////
http://currentbyge.github.io/GE_Current_Documentation/#c_overview_of_general_apis.html
https://github.com/parisaboyina/iot-hackathon-api-access
`
