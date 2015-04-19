navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || window.navigator.mozGetUserMedia;
window.URL = window.URL || window.webkitURL;

(function () {

    var myVideo = document.getElementById('myVideo');
    var yourVideo = document.getElementById('yourVideo');
    var myStream = null;
    //Media Stream APIを使ったカメラマイクアクセス
    navigator.getUserMedia({
            video: true,
            audio: false
        },
        function (stream) { // for success case
            yourVideo.src = window.URL.createObjectURL(stream);
            myStream = stream;
        },
        function (err) { // for error case
            console.log(err);
        }
    );

})();
