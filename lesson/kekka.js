/****************
 * 診断結果ページで使うJavaScript
 ****************/

/**
 * 診断結果ページで最初に呼ばれる処理
 */
let kaisi = () => {
	//今までの回答から、診断結果を取得
	let kekka = ars.toruKekka();

	// 診断結果を表示する
	miseruKekka(kekka);
};


/**
 * 診断結果を表示する処理
 * @param kekka 診断結果
 */

let miseruKekka = (kekka) => {
	// 診断結果の見出し
	let midasi = '';

	// 診断結果の画像
	let gazo = '';

	// 診断結果の説明文
	let setumei = '';

	//結果が1だった場合
	if(kekka == 1){
		midasi = 'あなたのタイプは副都心線です';
		gazo = 'img/f.jpg';
		setumei = '副都心線はfライナーで東急東横線は神奈川も止まるけど副都心線は千川や東京の方しか止まらないけど各駅停車が急行になることがあるからみんなも乗っみてね';

	}
	//結果が2だった場合
	else if(kekka == 2){
		midasi = 'あなたのタイプは京浜東北線です';
		gazo = 'img/k.jpg';
		setumei = '京浜東北線では山手線と同じルートを通ったり大森とか川口とかの埼玉の方も通って東京も通るから東京から埼玉に行きたいときは京浜東北線にのって見てねー';
	}
	//結果が3だった場合
	else if(kekka == 3){
		midasi = 'あなたのタイプは中央線です';
		gazo = 'img/t.jpg';
		setumei ='中野駅から新宿駅や四ツ谷駅に早く行きたいときあるいは急いでいるときはこの中央線に乗ると1.2駅で行けます';
	}
	//結果が4だった場合
	else if(kekka == 4){
		midasi = 'あなたのタイプは埼京線です';
		gazo = 'img/s.jpg';
		setumei = '埼京線は中央線と同じように３駅くらいのを１駅でいけたりします。渋谷駅や赤羽駅や十条駅の方も止まります';
	}

	//結果を画面に表示する

	// 診断結果の見出しを表示
	ars.miseruMidasi(midasi);

	// 診断結果の画像を表示
	ars.miseruGazo(gazo);

	// 診断結果の詳細を表示
	ars.miseruSetumei(setumei);j

};