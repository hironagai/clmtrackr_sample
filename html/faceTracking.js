(function () {
    //video画像から顔トラッキング
    var videoInput = document.getElementById('yourVideo');
    var ctracker = new clm.tracker();
    ctracker.init(pModel);
    ctracker.start(videoInput);

    //トラッキングデータの取得
    function positionLoop() {
        requestAnimationFrame(positionLoop);
        var positionString = "";
        var positions = ctracker.getCurrentPosition();
        if (positions) {
            for (var p = 0; p < 10; p++) {
                positionString += "featurepoint " + p + " : [" + positions[p][0].toFixed(2) + "," + positions[p][1].toFixed(2) + "]<br/>";
            }
            document.getElementById('positions').innerHTML = positionString;
        }
    }
    positionLoop();


    //トラッキング状態の表示
    var canvasInput = document.getElementById('drawCanvas');
    var cc = canvasInput.getContext('2d');

    function drawLoop() {
        requestAnimationFrame(drawLoop);
        cc.clearRect(0, 0, canvasInput.width, canvasInput.height);
        ctracker.draw(canvasInput);
    }
    drawLoop();
})();
