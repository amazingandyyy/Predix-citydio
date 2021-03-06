'use strict'
$(document).ready(init);

function init() {
    // photoAnalyze();
}

function photoAnalyze() {


    var params = {
        // Specify your subscription key
        'subscription-key': '',
        // Specify values for optional parameters, as needed
        visualFeatures: "All",
    };

    $.ajax({
            url: 'https://api.projectoxford.ai/vision/v1/analyses?' + $.param(params),
            type: 'POST',
            contentType: 'application/json',
            data: '{ "Url": "http://images.takungpao.com/2012/1115/20121115073901672.jpg" }',
        })
        .done(function(data) {
            alert("success");
        })
        .fail(function() {
            alert("error");
        });
}


function getPhoto() {
    console.log('clicked');
    $.ajax({
        url: "https://ie-public-safety.run.aws-usw02-pr.ice.predix.io/v1/assets/1000000018/media?media-types=IMAGE&start-ts=1453832741281&end-ts=1462996283887&size=1&page=1",
        type: "GET",
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiI2NWM1N2MxNy00Y2VkLTQwNmItYjIyYy1mODA0NDlmNzhjMGQiLCJzdWIiOiJpZXNfaW90aGFjayIsInNjb3BlIjpbImllLXRyYWZmaWMuem9uZXMuZmRlMjljODMtZDI3Yi00ZjhjLWI0YzgtMWM3Yjc3MjE3MGViLnVzZXIiLCJ1YWEucmVzb3VyY2UiLCJpZS1wZWRlc3RyaWFuLnpvbmVzLmU4ZTU5N2JlLWZiODMtNGI3ZS04ZmY0LTNhMGMxNGEyYjY4MC51c2VyIiwiaWUtcHVibGljLXNhZmV0eS56b25lcy5kYzQ4MjlhOS0zMDg3LTQxNGEtOWFiMi00ZGJmNmYyNjQyNjMudXNlciIsImllLXBhcmtpbmcuem9uZXMuZjlhMWE2MzItOWUxZS00ZGZlLWE2NjItNTNiMzk2ZTEwMGFiLnVzZXIiXSwiY2xpZW50X2lkIjoiaWVzX2lvdGhhY2siLCJjaWQiOiJpZXNfaW90aGFjayIsImF6cCI6Imllc19pb3RoYWNrIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzMWE2ZmQ3ZiIsImlhdCI6MTQ2Mjk5MjQ5NywiZXhwIjoxNDYzMDc4ODk3LCJpc3MiOiJodHRwczovLzliZjhkMDk0LTcxYTItNDkxMi05YzU2LWZjZGJhZGEyZmM0ZS5wcmVkaXgtdWFhLnJ1bi5hd3MtdXN3MDItcHIuaWNlLnByZWRpeC5pby9vYXV0aC90b2tlbiIsInppZCI6IjliZjhkMDk0LTcxYTItNDkxMi05YzU2LWZjZGJhZGEyZmM0ZSIsImF1ZCI6WyJpZXNfaW90aGFjayIsImllLXRyYWZmaWMuem9uZXMuZmRlMjljODMtZDI3Yi00ZjhjLWI0YzgtMWM3Yjc3MjE3MGViIiwidWFhIiwiaWUtcGVkZXN0cmlhbi56b25lcy5lOGU1OTdiZS1mYjgzLTRiN2UtOGZmNC0zYTBjMTRhMmI2ODAiLCJpZS1wdWJsaWMtc2FmZXR5LnpvbmVzLmRjNDgyOWE5LTMwODctNDE0YS05YWIyLTRkYmY2ZjI2NDI2MyIsImllLXBhcmtpbmcuem9uZXMuZjlhMWE2MzItOWUxZS00ZGZlLWE2NjItNTNiMzk2ZTEwMGFiIl19.VlUqRBMqYwEPc8wEKcp4L0gy3m8aY-v0x0nCHD0oONjkDvcqXWQiANq0KL1x-LFMJhvXApmYtKvrlJSKZSEhRHUWqxJDfJVVYaibjwLScuBUctCvh6v8_9kBobQ5AIAszaJkSe210EPdNbTp0k5BGbN4UwvRUU-280rWZ6eJyXpQKVwz6EETNly7nmXmCk9eN8ImYaQ_gMqPJ-a2IlEBBAkq0TJcFYcdb9gHoKSPV2-rz8EOgUbVO3tO7s-so1gBkiej0Nxl0_-JE43izF2OMThRCCBCFvGlUpsrd3xhvWUWoWgvNtydNEUYYKMzmNF-52IHOQedzBj-9qBZ_uotDw',
            'Predix-Zone-Id': 'dc4829a9-3087-414a-9ab2-4dbf6f264263'
        },
        success: function(res) {
            console.log('res: ', res);
            console.log();
        },
        error: function(err) {
            console.log('err: ', err);
        }
    });
}
