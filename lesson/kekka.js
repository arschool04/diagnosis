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
		midasi = '副都心線';
		gazo = 'img/f.jpg';
		setumei = 'あなたのタイプは副都心線です';

	}
	//結果が2だった場合
	else if(kekka == 2){
		midasi = '京浜東北線';
		gazo = 'img/k.jpg';
		setumei = 'あなたのタイプは京浜東北線です';
	}
	//結果が3だった場合
	else if(kekka == 3){
		midasi = '中央線';
		gazo = 'img/t.jpg';
		setumei = 'あなたのタイプは中央線です';
	}
	//結果が4だった場合
	else if(kekka == 4){
		midasi = '埼京線です';
		gazo = 'img/s.jpg';
		setumei = '';
	}

	//結果を画面に表示する

	// 診断結果の見出しを表示
	ars.miseruMidasi(midasi);

	// 診断結果の画像を表示
	ars.miseruGazo(gazo);

	// 診断結果の詳細を表示
	ars.miseruSetumei(setumei);j

};