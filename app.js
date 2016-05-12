'use strict';

var app = angular.module('myApp', []);


app.controller('mainCtrl', function($scope, $http, $timeout) {

    $scope.analysis = {
        "Description": {
            "type": 0,
            "captions": [{
                "text": "a person crosses a road",
                "confidence": 0.5787910274379539
            }]
        },
        "Tags": [{
            "name": "outdoor",
            "confidence": 0.8904572129249573
        }, {
            "name": "car",
            "confidence": 0.2654281258583069
        }, {
            "name": "road",
            "confidence": 0.48821866512298584
        }, {
            "name": "person",
            "confidence": 0.41702839732170105
        }, {
            "name": "road",
            "confidence": 0.63079562783241272
        }],
        "Image Format": "jpeg",
        "Image Dimensions": "640 x 360"
    }


    // console.log('mainCtrl loaded');
    $scope.getDevices = () => {
        $scope.loading = true;
        $scope.images = null;

        $timeout(function() {
            $http({
                    url: "https://ie-public-safety.run.aws-usw02-pr.ice.predix.io/v1/assets/search?bbox=32.715675:-117.161230,32.708498:-117.151681",
                    method: "GET",
                    headers: {
                        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiIzY2I1MzI3MS1hYTJkLTRlOTctOWRjOS01OTFmMzc1M2I3MGEiLCJzdWIiOiJpZXNfaW90aGFjayIsInNjb3BlIjpbImllLXRyYWZmaWMuem9uZXMuZmRlMjljODMtZDI3Yi00ZjhjLWI0YzgtMWM3Yjc3MjE3MGViLnVzZXIiLCJ1YWEucmVzb3VyY2UiLCJpZS1wZWRlc3RyaWFuLnpvbmVzLmU4ZTU5N2JlLWZiODMtNGI3ZS04ZmY0LTNhMGMxNGEyYjY4MC51c2VyIiwiaWUtcHVibGljLXNhZmV0eS56b25lcy5kYzQ4MjlhOS0zMDg3LTQxNGEtOWFiMi00ZGJmNmYyNjQyNjMudXNlciIsImllLXBhcmtpbmcuem9uZXMuZjlhMWE2MzItOWUxZS00ZGZlLWE2NjItNTNiMzk2ZTEwMGFiLnVzZXIiXSwiY2xpZW50X2lkIjoiaWVzX2lvdGhhY2siLCJjaWQiOiJpZXNfaW90aGFjayIsImF6cCI6Imllc19pb3RoYWNrIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzMWE2ZmQ3ZiIsImlhdCI6MTQ2MzA3OTIxNSwiZXhwIjoxNDYzMTY1NjE1LCJpc3MiOiJodHRwczovLzliZjhkMDk0LTcxYTItNDkxMi05YzU2LWZjZGJhZGEyZmM0ZS5wcmVkaXgtdWFhLnJ1bi5hd3MtdXN3MDItcHIuaWNlLnByZWRpeC5pby9vYXV0aC90b2tlbiIsInppZCI6IjliZjhkMDk0LTcxYTItNDkxMi05YzU2LWZjZGJhZGEyZmM0ZSIsImF1ZCI6WyJpZXNfaW90aGFjayIsImllLXRyYWZmaWMuem9uZXMuZmRlMjljODMtZDI3Yi00ZjhjLWI0YzgtMWM3Yjc3MjE3MGViIiwidWFhIiwiaWUtcGVkZXN0cmlhbi56b25lcy5lOGU1OTdiZS1mYjgzLTRiN2UtOGZmNC0zYTBjMTRhMmI2ODAiLCJpZS1wdWJsaWMtc2FmZXR5LnpvbmVzLmRjNDgyOWE5LTMwODctNDE0YS05YWIyLTRkYmY2ZjI2NDI2MyIsImllLXBhcmtpbmcuem9uZXMuZjlhMWE2MzItOWUxZS00ZGZlLWE2NjItNTNiMzk2ZTEwMGFiIl19.VX5kZGM28B_goYbNg-5e21lWWZb9WZLi4LdoKWT2D2mAkE9vMItruinxk5WiT454WdbKnoezaTq9ZGmXtMcXsvNv1o6C5Phv99_94Bt9HH72PahC4rlgKE9WJgWf9RdxNSkLS2kDfwV6DxJOUOLrCgfpO273Me7-MwO4UMWz2XMYZl7x5lIfetH7I3uNxVsu7eWBabzTgwYdULDHabuOTu_DQjrBageu_YdyvoRw8qi6rcj7vLS0S9cN012nQ_rXR3QD8VuUivhtkdISodKwGGKamCDT9fD4mWAzcEYPmLmIyw0F4wYTE1vmwKqBkBQpNwI4QTvYatZZEWXVHaJ63Q',
                        'Predix-Zone-Id': 'dc4829a9-3087-414a-9ab2-4dbf6f264263'
                    }
                })
                .then(res => {
                    $scope.loading = false;
                    // console.log('res: ', res);
                    console.log('res11: ', res.data._embedded);
                    $scope.devices = res.data._embedded.assets;
                })
                .catch(err => {
                    console.log('err: ', err);
                })
        }, Math.random() * 1000 + 800)
    }
    $scope.getPhotos = (deviceIndex) => {
            $scope.loading = true;
            // $scope.images = null;

            $timeout(function() {
                $http({
                        url: `https://ie-public-safety.run.aws-usw02-pr.ice.predix.io/v1/assets/${deviceIndex}/media?media-types=IMAGE&start-ts=1453832741281&end-ts=1462996283887&size=30&page=1`,
                        method: "GET",
                        headers: {
                            'Authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiIzY2I1MzI3MS1hYTJkLTRlOTctOWRjOS01OTFmMzc1M2I3MGEiLCJzdWIiOiJpZXNfaW90aGFjayIsInNjb3BlIjpbImllLXRyYWZmaWMuem9uZXMuZmRlMjljODMtZDI3Yi00ZjhjLWI0YzgtMWM3Yjc3MjE3MGViLnVzZXIiLCJ1YWEucmVzb3VyY2UiLCJpZS1wZWRlc3RyaWFuLnpvbmVzLmU4ZTU5N2JlLWZiODMtNGI3ZS04ZmY0LTNhMGMxNGEyYjY4MC51c2VyIiwiaWUtcHVibGljLXNhZmV0eS56b25lcy5kYzQ4MjlhOS0zMDg3LTQxNGEtOWFiMi00ZGJmNmYyNjQyNjMudXNlciIsImllLXBhcmtpbmcuem9uZXMuZjlhMWE2MzItOWUxZS00ZGZlLWE2NjItNTNiMzk2ZTEwMGFiLnVzZXIiXSwiY2xpZW50X2lkIjoiaWVzX2lvdGhhY2siLCJjaWQiOiJpZXNfaW90aGFjayIsImF6cCI6Imllc19pb3RoYWNrIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzMWE2ZmQ3ZiIsImlhdCI6MTQ2MzA3OTIxNSwiZXhwIjoxNDYzMTY1NjE1LCJpc3MiOiJodHRwczovLzliZjhkMDk0LTcxYTItNDkxMi05YzU2LWZjZGJhZGEyZmM0ZS5wcmVkaXgtdWFhLnJ1bi5hd3MtdXN3MDItcHIuaWNlLnByZWRpeC5pby9vYXV0aC90b2tlbiIsInppZCI6IjliZjhkMDk0LTcxYTItNDkxMi05YzU2LWZjZGJhZGEyZmM0ZSIsImF1ZCI6WyJpZXNfaW90aGFjayIsImllLXRyYWZmaWMuem9uZXMuZmRlMjljODMtZDI3Yi00ZjhjLWI0YzgtMWM3Yjc3MjE3MGViIiwidWFhIiwiaWUtcGVkZXN0cmlhbi56b25lcy5lOGU1OTdiZS1mYjgzLTRiN2UtOGZmNC0zYTBjMTRhMmI2ODAiLCJpZS1wdWJsaWMtc2FmZXR5LnpvbmVzLmRjNDgyOWE5LTMwODctNDE0YS05YWIyLTRkYmY2ZjI2NDI2MyIsImllLXBhcmtpbmcuem9uZXMuZjlhMWE2MzItOWUxZS00ZGZlLWE2NjItNTNiMzk2ZTEwMGFiIl19.VX5kZGM28B_goYbNg-5e21lWWZb9WZLi4LdoKWT2D2mAkE9vMItruinxk5WiT454WdbKnoezaTq9ZGmXtMcXsvNv1o6C5Phv99_94Bt9HH72PahC4rlgKE9WJgWf9RdxNSkLS2kDfwV6DxJOUOLrCgfpO273Me7-MwO4UMWz2XMYZl7x5lIfetH7I3uNxVsu7eWBabzTgwYdULDHabuOTu_DQjrBageu_YdyvoRw8qi6rcj7vLS0S9cN012nQ_rXR3QD8VuUivhtkdISodKwGGKamCDT9fD4mWAzcEYPmLmIyw0F4wYTE1vmwKqBkBQpNwI4QTvYatZZEWXVHaJ63Q',
                            'Predix-Zone-Id': 'dc4829a9-3087-414a-9ab2-4dbf6f264263'
                        }
                    })
                    .then(res => {
                        $scope.loading = false;
                        console.log('res: ', res);
                        console.log('res11: ', res.data._embedded.medias);
                        $scope.images = res.data._embedded.medias;
                    })
                    .catch(err => {
                        console.log('err: ', err);
                    })
            }, Math.random() * 300 + 500)
        }
        // $scope.getParking = () => {
        //     $scope.loading = true;
        //     $scope.images = null;
        //
        //     $timeout(function() {
        //         $http({
        //                 url: "https://ie-public-safety.run.aws-usw02-pr.ice.predix.io/v1/assets/1000000018/media?media-types=IMAGE&start-ts=1453832741281&end-ts=1462996283887&size=30&page=1",
        //                 method: "GET",
        //                 headers: {
        //                     'Authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiI2NWM1N2MxNy00Y2VkLTQwNmItYjIyYy1mODA0NDlmNzhjMGQiLCJzdWIiOiJpZXNfaW90aGFjayIsInNjb3BlIjpbImllLXRyYWZmaWMuem9uZXMuZmRlMjljODMtZDI3Yi00ZjhjLWI0YzgtMWM3Yjc3MjE3MGViLnVzZXIiLCJ1YWEucmVzb3VyY2UiLCJpZS1wZWRlc3RyaWFuLnpvbmVzLmU4ZTU5N2JlLWZiODMtNGI3ZS04ZmY0LTNhMGMxNGEyYjY4MC51c2VyIiwiaWUtcHVibGljLXNhZmV0eS56b25lcy5kYzQ4MjlhOS0zMDg3LTQxNGEtOWFiMi00ZGJmNmYyNjQyNjMudXNlciIsImllLXBhcmtpbmcuem9uZXMuZjlhMWE2MzItOWUxZS00ZGZlLWE2NjItNTNiMzk2ZTEwMGFiLnVzZXIiXSwiY2xpZW50X2lkIjoiaWVzX2lvdGhhY2siLCJjaWQiOiJpZXNfaW90aGFjayIsImF6cCI6Imllc19pb3RoYWNrIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzMWE2ZmQ3ZiIsImlhdCI6MTQ2Mjk5MjQ5NywiZXhwIjoxNDYzMDc4ODk3LCJpc3MiOiJodHRwczovLzliZjhkMDk0LTcxYTItNDkxMi05YzU2LWZjZGJhZGEyZmM0ZS5wcmVkaXgtdWFhLnJ1bi5hd3MtdXN3MDItcHIuaWNlLnByZWRpeC5pby9vYXV0aC90b2tlbiIsInppZCI6IjliZjhkMDk0LTcxYTItNDkxMi05YzU2LWZjZGJhZGEyZmM0ZSIsImF1ZCI6WyJpZXNfaW90aGFjayIsImllLXRyYWZmaWMuem9uZXMuZmRlMjljODMtZDI3Yi00ZjhjLWI0YzgtMWM3Yjc3MjE3MGViIiwidWFhIiwiaWUtcGVkZXN0cmlhbi56b25lcy5lOGU1OTdiZS1mYjgzLTRiN2UtOGZmNC0zYTBjMTRhMmI2ODAiLCJpZS1wdWJsaWMtc2FmZXR5LnpvbmVzLmRjNDgyOWE5LTMwODctNDE0YS05YWIyLTRkYmY2ZjI2NDI2MyIsImllLXBhcmtpbmcuem9uZXMuZjlhMWE2MzItOWUxZS00ZGZlLWE2NjItNTNiMzk2ZTEwMGFiIl19.VlUqRBMqYwEPc8wEKcp4L0gy3m8aY-v0x0nCHD0oONjkDvcqXWQiANq0KL1x-LFMJhvXApmYtKvrlJSKZSEhRHUWqxJDfJVVYaibjwLScuBUctCvh6v8_9kBobQ5AIAszaJkSe210EPdNbTp0k5BGbN4UwvRUU-280rWZ6eJyXpQKVwz6EETNly7nmXmCk9eN8ImYaQ_gMqPJ-a2IlEBBAkq0TJcFYcdb9gHoKSPV2-rz8EOgUbVO3tO7s-so1gBkiej0Nxl0_-JE43izF2OMThRCCBCFvGlUpsrd3xhvWUWoWgvNtydNEUYYKMzmNF-52IHOQedzBj-9qBZ_uotDw',
        //                     'Predix-Zone-Id': 'dc4829a9-3087-414a-9ab2-4dbf6f264263'
        //                 }
        //             })
        //             .then(res => {
        //                 $scope.loading = false;
        //                 console.log('res: ', res);
        //                 console.log('res11: ', res.data._embedded.medias);
        //                 $scope.images = res.data._embedded.medias;
        //             })
        //             .catch(err => {
        //                 console.log('err: ', err);
        //             })
        //     }, Math.random() * 1000 + 800)
        // }

    $scope.getPhoto = (photoIndex) => {
        $scope.loading = true;
        $scope.image = null;
        $http({
                url: `https://ie-media-service.run.aws-usw02-pr.ice.predix.io/media/file/${photoIndex}`,
                method: "GET",
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiIzY2I1MzI3MS1hYTJkLTRlOTctOWRjOS01OTFmMzc1M2I3MGEiLCJzdWIiOiJpZXNfaW90aGFjayIsInNjb3BlIjpbImllLXRyYWZmaWMuem9uZXMuZmRlMjljODMtZDI3Yi00ZjhjLWI0YzgtMWM3Yjc3MjE3MGViLnVzZXIiLCJ1YWEucmVzb3VyY2UiLCJpZS1wZWRlc3RyaWFuLnpvbmVzLmU4ZTU5N2JlLWZiODMtNGI3ZS04ZmY0LTNhMGMxNGEyYjY4MC51c2VyIiwiaWUtcHVibGljLXNhZmV0eS56b25lcy5kYzQ4MjlhOS0zMDg3LTQxNGEtOWFiMi00ZGJmNmYyNjQyNjMudXNlciIsImllLXBhcmtpbmcuem9uZXMuZjlhMWE2MzItOWUxZS00ZGZlLWE2NjItNTNiMzk2ZTEwMGFiLnVzZXIiXSwiY2xpZW50X2lkIjoiaWVzX2lvdGhhY2siLCJjaWQiOiJpZXNfaW90aGFjayIsImF6cCI6Imllc19pb3RoYWNrIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzMWE2ZmQ3ZiIsImlhdCI6MTQ2MzA3OTIxNSwiZXhwIjoxNDYzMTY1NjE1LCJpc3MiOiJodHRwczovLzliZjhkMDk0LTcxYTItNDkxMi05YzU2LWZjZGJhZGEyZmM0ZS5wcmVkaXgtdWFhLnJ1bi5hd3MtdXN3MDItcHIuaWNlLnByZWRpeC5pby9vYXV0aC90b2tlbiIsInppZCI6IjliZjhkMDk0LTcxYTItNDkxMi05YzU2LWZjZGJhZGEyZmM0ZSIsImF1ZCI6WyJpZXNfaW90aGFjayIsImllLXRyYWZmaWMuem9uZXMuZmRlMjljODMtZDI3Yi00ZjhjLWI0YzgtMWM3Yjc3MjE3MGViIiwidWFhIiwiaWUtcGVkZXN0cmlhbi56b25lcy5lOGU1OTdiZS1mYjgzLTRiN2UtOGZmNC0zYTBjMTRhMmI2ODAiLCJpZS1wdWJsaWMtc2FmZXR5LnpvbmVzLmRjNDgyOWE5LTMwODctNDE0YS05YWIyLTRkYmY2ZjI2NDI2MyIsImllLXBhcmtpbmcuem9uZXMuZjlhMWE2MzItOWUxZS00ZGZlLWE2NjItNTNiMzk2ZTEwMGFiIl19.VX5kZGM28B_goYbNg-5e21lWWZb9WZLi4LdoKWT2D2mAkE9vMItruinxk5WiT454WdbKnoezaTq9ZGmXtMcXsvNv1o6C5Phv99_94Bt9HH72PahC4rlgKE9WJgWf9RdxNSkLS2kDfwV6DxJOUOLrCgfpO273Me7-MwO4UMWz2XMYZl7x5lIfetH7I3uNxVsu7eWBabzTgwYdULDHabuOTu_DQjrBageu_YdyvoRw8qi6rcj7vLS0S9cN012nQ_rXR3QD8VuUivhtkdISodKwGGKamCDT9fD4mWAzcEYPmLmIyw0F4wYTE1vmwKqBkBQpNwI4QTvYatZZEWXVHaJ63Q',
                    'Predix-Zone-Id': 'dc4829a9-3087-414a-9ab2-4dbf6f264263'
                }
            })
            .then(res => {
                $scope.loading = false;
                console.log('res: ', res);
                $scope.image = res.data;
            })
            .catch(err => {
                console.log('err: ', err);
            })
    }

    function getQuote(){
        var params = {
            // Request parameters
            "visualFeatures": "Categories",
            "details": "{string}",
        };
        var imageUri = "1000000023_1462485428003_IMAGE";
        $.ajax({
            url: "https://api.projectoxford.ai/vision/v1.0/analyze?" + $.param(params),
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Content-Type","application/json");
                xhrObj.setRequestHeader("09beba7c6d274a52b739511bf20d93bb","{3e099bec5b48469799b9dfb1a6a5a313}");
            },
            type: "POST",
            // Request body
            data: "{https://ie-media-service.run.aws-usw02-pr.ice.predix.io/media/file/${imageUri}}",
        })
        .done(function(data) {
            alert("success");
        })
        .fail(function() {
            // alert("error");
        });
    }


});
