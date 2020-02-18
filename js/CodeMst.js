var CodeMst = {
	// 権限
	"role": [
		{"code":"USER","codeNm":"一般ユーザ","dispOrder":""},
		{"code":"ADMINISTRATOR","codeNm":"システム管理者","dispOrder":""},
		{"code":"SUBPREVISORENGINEER","codeNm":"Subprevisorエンジニア","dispOrder":""},
		{"code":"ENGINEER","codeNm":"エンジニア","dispOrder":""}
	],
	// 操作コマンド
	"command": [
		{"code":"INIT","codeNm":"初期化","dispOrder":""},
		{"code":"RESET","codeNm":"リセット(エラー解除)","dispOrder":""},
		{"code":"RUN","codeNm":"ONする","dispOrder":""},
		{"code":"STOP","codeNm":"OFFする","dispOrder":""}
	],
	// 操作種別
	"operating": [
		{"code":"RUNNING","codeNm":"稼働","dispOrder":""},
		{"code":"WAITING","codeNm":"待機","dispOrder":""},
		{"code":"STOPPED","codeNm":"停止","dispOrder":""},
		{"code":"ALERT","codeNm":"異常","dispOrder":""}
	],
	// 運転モード
	"drivingMode": [
		{"code":"AUTO","codeNm":"気象連動","dispOrder":""},
		{"code":"SCHEDULE","codeNm":"スケジュール","dispOrder":""},
		{"code":"MANUAL","codeNm":"手動","dispOrder":""}
	],
	// 運転強度
	"drivingStrength": [
	    {"code":"-","codeNm":" ","dispOrder":""},
		{"code":"H","codeNm":"強","dispOrder":""},
		{"code":"M","codeNm":"中","dispOrder":""},
		{"code":"L","codeNm":"弱","dispOrder":""},
		{"code":"A","codeNm":"気象連動","dispOrder":""}
	],
	// 気象計設定 デフォルト値
	"defaultValue": [
		{"code":"HIGH","codeNm":"32","dispOrder":""},
		{"code":"MID","codeNm":"28","dispOrder":""},
		{"code":"LOW","codeNm":"25","dispOrder":""},
		{"code":"TEMPERATURE","codeNm":"25","dispOrder":""},
		{"code":"HUMIDITY","codeNm":"80","dispOrder":""},
		{"code":"WINDSPEED","codeNm":"5","dispOrder":""}
	],
    // 対応
    "isDone": [
        {"code":"1","codeNm":"対応済"},
        {"code":"0","codeNm":"未対応"}
    ],
    // 故障
    "levelForServer": [
        {"code":"ERR","codeNm":"重故障"},
        {"code":"ALT","codeNm":"中故障"},
        {"code":"ARM","codeNm":"軽故障"},
        {"code":"INF","codeNm":"情報"}
    ],
    // 故障
    "levelForClient": [
        {"code":"ERR","codeNm":"重"},
        {"code":"ALT","codeNm":"中"},
        {"code":"ARM","codeNm":"軽"},
        {"code":"INF","codeNm":"情"}
    ],
    // 点検
    "toCheck": [
        {"code":"1","codeNm":"要"},
        {"code":"0","codeNm":""}
    ],
    // ロック
    "hasLocked": [
        {"code":"1","codeNm":"有"},
        {"code":"0","codeNm":""}
    ]
};

CodeMst.getCode = function (typeCd, code) {
	var typeCd = typeCd;
	var code = code;
	var ret = new Object({});
	var typeCdStr = 'this.' + typeCd;
	console.log("typeCdStr:"+typeCdStr);
	var typeCdObj = eval(typeCdStr);
		// 指定された種別コードが存在するかをチェック
	if (typeCdObj === undefined) {
		console.log('typeCd undefined');
		return ret;
	}
	
	// 一覧取得の場合
	if (code == "" || code == undefined) {
		// 指定された種別コードに該当するコード一覧を返す
		return typeCdObj;
	} else {
		// 単一コード取得の場合
		for (var i = 0; i < typeCdObj.length; i++){
			var codeStr = 'this.' + typeCd + '[' + i + '].code';
			if (eval(codeStr) == code) {
				var obj = eval('this.' + typeCd + '[' + i + ']');
				return obj;
				break;
			}
		}
		// 該当なしの場合
		return ret;
	}
}