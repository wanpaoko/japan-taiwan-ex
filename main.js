(function () {
	'use strict';

	var JP_KEYS = [
		'富山', '神奈川', '茨城', '千葉', '東京', '静岡', '京都', '和歌山', '鳥取', '山口',
		'広島', '島根', '愛知', '三重', '兵庫', '石川', '山梨', '大阪', '愛媛', '高知',
		'徳島', '埼玉', '栃木', '岡山', '大分', '福岡', '長崎', '香川', '福井', '沖縄',
		'宮崎', '熊本', '佐賀', '鹿児島', '奈良', '滋賀', '群馬', '長野', '岐阜', '福島',
		'新潟', '宮城', '山形', '岩手', '秋田', '青森', '北海道'
	];

	var TW_KEYS = [
		'基隆市', '台北市', '新北市', '桃園市', '新竹市', '新竹縣',
		'苗栗縣', '台中市', '彰化縣', '南投縣', '雲林縣', '嘉義市',
		'嘉義縣', '台南市', '高雄市', '屏東縣', '宜蘭縣', '花蓮縣',
		'台東縣', '澎湖縣', '金門縣', '連江縣'
	];

	var ALL_KEYS = JP_KEYS.concat(TW_KEYS);

	var LEVEL_COLOR_NAME = { 3: 'red', 2: 'yellow', 1: 'blue', 0: 'white' };
	var COLORS = {
		red: '#e84c3d',
		yellow: '#f3c218',
		blue: '#3598db',
		white: '#ffffff'
	};

	var LOCALE = {
		zh: {
			ui: {
				page_title: '日台旅跑等級 Run Japan & Taiwan Level',
				site_title: '日台旅跑等級',
				level_prefix: '等級：',
				tw_short: '台灣',
				jp_short: '日本',
				tw_heading: '台灣 TAIWAN',
				jp_heading: '日本 JAPAN',
				search: '搜尋：',
				search_jp: '日本 %s 馬拉松',
				search_tw: '台灣 %s 馬拉松',
				description: '旅跑日本與台灣，點擊縣市記錄並分享您的跑步地圖！'
			},
			form: [
				{ level: 3, color: 'red', description: '全馬（42.195公里）' },
				{ level: 2, color: 'yellow', description: '半馬（21公里）' },
				{ level: 1, color: 'blue', description: '休閒跑（10公里以下）' },
				{ level: 0, color: 'white', description: '沒跑過' }
			],
			button: {
				input_name: '請輸入您想要顯示的名字：',
				set_name: '設定名字',
				reset: '重設',
				reset_confirm: '確定要清除日本與台灣的所有旅跑紀錄嗎？',
				copy_link: '複製連結',
				copied: '已複製！',
				download: '儲存圖片'
			},
			areas: {
				'富山': '富山', '神奈川': '神奈川', '茨城': '茨城', '千葉': '千葉', '東京': '東京',
				'静岡': '靜岡', '京都': '京都', '和歌山': '和歌山', '鳥取': '鳥取', '山口': '山口',
				'広島': '廣島', '島根': '島根', '愛知': '愛知', '三重': '三重', '兵庫': '兵庫',
				'石川': '石川', '山梨': '山梨', '大阪': '大阪', '愛媛': '愛媛', '高知': '高知',
				'徳島': '德島', '埼玉': '埼玉', '栃木': '栃木', '岡山': '岡山', '大分': '大分',
				'福岡': '福岡', '長崎': '長崎', '香川': '香川', '福井': '福井', '沖縄': '沖繩',
				'宮崎': '宮崎', '熊本': '熊本', '佐賀': '佐賀', '鹿児島': '鹿兒島', '奈良': '奈良',
				'滋賀': '滋賀', '群馬': '群馬', '長野': '長野', '岐阜': '岐阜', '福島': '福島',
				'新潟': '新潟', '宮城': '宮城', '山形': '山形', '岩手': '岩手', '秋田': '秋田',
				'青森': '青森', '北海道': '北海道',
				'基隆市': '基隆市', '台北市': '台北市', '新北市': '新北市', '桃園市': '桃園市',
				'新竹市': '新竹市', '新竹縣': '新竹縣', '苗栗縣': '苗栗縣', '台中市': '台中市',
				'彰化縣': '彰化縣', '南投縣': '南投縣', '雲林縣': '雲林縣', '嘉義市': '嘉義市',
				'嘉義縣': '嘉義縣', '台南市': '台南市', '高雄市': '高雄市', '屏東縣': '屏東縣',
				'宜蘭縣': '宜蘭縣', '花蓮縣': '花蓮縣', '台東縣': '台東縣', '澎湖縣': '澎湖縣',
				'金門縣': '金門縣', '連江縣': '連江縣'
			}
		},
		jp: {
			ui: {
				page_title: '日台旅ランレベル Run Japan & Taiwan Level',
				site_title: '日台旅ランレベル',
				level_prefix: 'レベル：',
				tw_short: '台湾',
				jp_short: '日本',
				tw_heading: '台湾 TAIWAN',
				jp_heading: '日本 JAPAN',
				search: '検索：',
				search_jp: '日本 %s マラソン',
				search_tw: '台湾 %s マラソン',
				description: '日本と台湾を走って制覇しよう！エリアをクリックして記録できます。'
			},
			form: [
				{ level: 3, color: 'red', description: 'フルマラソン（42.195km）' },
				{ level: 2, color: 'yellow', description: 'ハーフマラソン（21km）' },
				{ level: 1, color: 'blue', description: 'レクリエーション走（10km以下）' },
				{ level: 0, color: 'white', description: '未走（走ったことない）' }
			],
			button: {
				input_name: '表示する名前を入力してください：',
				set_name: '名前を設定',
				reset: 'リセット',
				reset_confirm: '日本と台湾の記録をすべてリセットしますか？',
				copy_link: 'URLコピー',
				copied: 'コピー完了',
				download: '画像を保存'
			},
			areas: {
				'富山': '富山', '神奈川': '神奈川', '茨城': '茨城', '千葉': '千葉', '東京': '東京',
				'静岡': '静岡', '京都': '京都', '和歌山': '和歌山', '鳥取': '鳥取', '山口': '山口',
				'広島': '広島', '島根': '島根', '愛知': '愛知', '三重': '三重', '兵庫': '兵庫',
				'石川': '石川', '山梨': '山梨', '大阪': '大阪', '愛媛': '愛媛', '高知': '高知',
				'徳島': '徳島', '埼玉': '埼玉', '栃木': '栃木', '岡山': '岡山', '大分': '大分',
				'福岡': '福岡', '長崎': '長崎', '香川': '香川', '福井': '福井', '沖縄': '沖縄',
				'宮崎': '宮崎', '熊本': '熊本', '佐賀': '佐賀', '鹿児島': '鹿児島', '奈良': '奈良',
				'滋賀': '滋賀', '群馬': '群馬', '長野': '長野', '岐阜': '岐阜', '福島': '福島',
				'新潟': '新潟', '宮城': '宮城', '山形': '山形', '岩手': '岩手', '秋田': '秋田',
				'青森': '青森', '北海道': '北海道',
				'基隆市': '基隆市', '台北市': '台北市', '新北市': '新北市', '桃園市': '桃園市',
				'新竹市': '新竹市', '新竹縣': '新竹県', '苗栗縣': '苗栗県', '台中市': '台中市',
				'彰化縣': '彰化県', '南投縣': '南投県', '雲林縣': '雲林県', '嘉義市': '嘉義市',
				'嘉義縣': '嘉義県', '台南市': '台南市', '高雄市': '高雄市', '屏東縣': '屏東県',
				'宜蘭縣': '宜蘭県', '花蓮縣': '花蓮県', '台東縣': '台東県', '澎湖縣': '澎湖県',
				'金門縣': '金門県', '連江縣': '連江県'
			}
		},
		en: {
			ui: {
				page_title: 'Run Japan & Taiwan Level',
				site_title: 'Run JP & TW Level',
				level_prefix: 'Lv.',
				tw_short: 'TW',
				jp_short: 'JP',
				tw_heading: 'TAIWAN',
				jp_heading: 'JAPAN',
				search: 'Search: ',
				search_jp: 'japan %s marathon',
				search_tw: 'taiwan %s marathon',
				description: 'Track and share your marathon journey across Japan & Taiwan!'
			},
			form: [
				{ level: 3, color: 'red', description: 'Full Marathon (42.195km)' },
				{ level: 2, color: 'yellow', description: 'Half Marathon (21km)' },
				{ level: 1, color: 'blue', description: 'Fun Run (Under 10km)' },
				{ level: 0, color: 'white', description: 'Never run there' }
			],
			button: {
				input_name: 'Please enter the name you want to show:',
				set_name: 'Set Name',
				reset: 'Reset',
				reset_confirm: 'Reset all Japan & Taiwan running records?',
				copy_link: 'Copy Link',
				copied: 'Copied!',
				download: 'Save PNG'
			},
			areas: {
				'富山': 'Toyama', '神奈川': 'Kanagawa', '茨城': 'Ibaraki', '千葉': 'Chiba', '東京': 'Tokyo',
				'静岡': 'Shizuoka', '京都': 'Kyoto', '和歌山': 'Wakayama', '鳥取': 'Tottori', '山口': 'Yamaguchi',
				'広島': 'Hiroshima', '島根': 'Shimane', '愛知': 'Aichi', '三重': 'Mie', '兵庫': 'Hyogo',
				'石川': 'Ishikawa', '山梨': 'Yamanashi', '大阪': 'Osaka', '愛媛': 'Ehime', '高知': 'Kochi',
				'徳島': 'Tokushima', '埼玉': 'Saitama', '栃木': 'Tochigi', '岡山': 'Okayama', '大分': 'Oita',
				'福岡': 'Fukuoka', '長崎': 'Nagasaki', '香川': 'Kagawa', '福井': 'Fukui', '沖縄': 'Okinawa',
				'宮崎': 'Miyazaki', '熊本': 'Kumamoto', '佐賀': 'Saga', '鹿児島': 'Kagoshima', '奈良': 'Nara',
				'滋賀': 'Shiga', '群馬': 'Gunma', '長野': 'Nagano', '岐阜': 'Gifu', '福島': 'Fukushima',
				'新潟': 'Niigata', '宮城': 'Miyagi', '山形': 'Yamagata', '岩手': 'Iwate', '秋田': 'Akita',
				'青森': 'Aomori', '北海道': 'Hokkaido',
				'基隆市': 'Keelung', '台北市': 'Taipei', '新北市': 'New Taipei', '桃園市': 'Taoyuan',
				'新竹市': 'Hsinchu City', '新竹縣': 'Hsinchu County', '苗栗縣': 'Miaoli', '台中市': 'Taichung',
				'彰化縣': 'Changhua', '南投縣': 'Nantou', '雲林縣': 'Yunlin', '嘉義市': 'Chiayi City',
				'嘉義縣': 'Chiayi County', '台南市': 'Tainan', '高雄市': 'Kaohsiung', '屏東縣': 'Pingtung',
				'宜蘭縣': 'Yilan', '花蓮縣': 'Hualien', '台東縣': 'Taitung', '澎湖縣': 'Penghu',
				'金門縣': 'Kinmen', '連江縣': 'Lienchiang (Matsu)'
			}
		}
	};

	var state = {
		lang: detectLanguage(),
		levels: {},
		author: '',
		activeId: null,
		hoverId: null
	};

	ALL_KEYS.forEach(function (k) {
		state.levels[k] = 0;
	});

	var dom = {};

	function detectLanguage() {
		var raw = (navigator.language || 'zh').toLowerCase();
		if (raw.indexOf('ja') === 0 || raw.indexOf('jp') === 0) return 'jp';
		if (raw.indexOf('zh') === 0) return 'zh';
		return 'en';
	}

	function isTaiwan(id) {
		return TW_KEYS.indexOf(id) !== -1;
	}

	function getColorName(level) {
		return LEVEL_COLOR_NAME[level] || 'white';
	}

	function getAreaElement(id) {
		return document.getElementById(id);
	}

	function setAreaLevel(id, level) {
		var lv = parseInt(level, 10);
		if (isNaN(lv) || lv < 0 || lv > 3) lv = 0;
		state.levels[id] = lv;
		var elem = getAreaElement(id);
		if (!elem) return;
		var fill = COLORS[getColorName(lv)];
		elem.setAttribute('data-level', String(lv));
		elem.setAttribute('fill', fill);
		var children = elem.querySelectorAll('polygon, rect, path, circle');
		for (var i = 0; i < children.length; i++) {
			children[i].setAttribute('fill', fill);
		}
	}

	function computeScores() {
		var jpScore = 0;
		var twScore = 0;
		var hash = '';
		JP_KEYS.forEach(function (k) {
			var lv = state.levels[k] || 0;
			jpScore += lv;
			hash += lv;
		});
		TW_KEYS.forEach(function (k) {
			var lv = state.levels[k] || 0;
			twScore += lv;
			hash += lv;
		});
		return { jp: jpScore, tw: twScore, total: jpScore + twScore, hash: hash };
	}

	function updateScoresAndUrl() {
		var scores = computeScores();
		var t = LOCALE[state.lang];

		dom.svgLevel.textContent = String(scores.total);
		dom.svgSubLevel.textContent = t.ui.tw_short + ' ' + scores.tw + '  ·  ' + t.ui.jp_short + ' ' + scores.jp;

		var titleText = scores.total > 0
			? t.ui.page_title + ' - ' + t.ui.level_prefix + scores.total
			: t.ui.page_title;
		document.title = titleText;

		var search = state.author ? ('?t=' + encodeURIComponent(state.author)) : '';
		var nextUrl = window.location.pathname + search + '#' + scores.hash;
		history.replaceState(null, titleText, nextUrl);
		return scores;
	}

	function renderLocale() {
		var t = LOCALE[state.lang];
		document.body.setAttribute('lang', state.lang);
		dom.langSelect.value = state.lang;
		dom.description.textContent = t.ui.description;

		dom.svgTitle.textContent = t.ui.site_title;
		dom.twHeading.textContent = t.ui.tw_heading;
		dom.jpHeading.textContent = t.ui.jp_heading;

		// Adjust title font size slightly for English so it fits cleanly
		dom.svgTitle.setAttribute('font-size', state.lang === 'en' ? '50' : '64');
		dom.svgLevel.setAttribute('font-size', state.lang === 'en' ? '50' : '64');

		for (var i = 0; i < 4; i++) {
			var item = t.form[i];
			document.getElementById('legend-desc-' + i).textContent = item.description;
			document.getElementById('legend-lv-' + i).textContent = t.ui.level_prefix + item.level;
		}

		dom.btnName.textContent = t.button.set_name;
		dom.btnReset.textContent = t.button.reset;
		dom.btnCopy.textContent = t.button.copy_link;
		dom.btnDownload.textContent = t.button.download;

		// Rebuild form level buttons
		dom.formLevels.innerHTML = '';
		t.form.forEach(function (lvItem) {
			var div = document.createElement('div');
			div.className = 'label ' + lvItem.color;
			div.setAttribute('data-value', String(lvItem.level));
			div.textContent = lvItem.description;
			dom.formLevels.appendChild(div);
		});

		if (state.activeId && dom.form.classList.contains('show')) {
			updateFormHeader(state.activeId);
			highlightSelectedLevel(state.levels[state.activeId] || 0);
		}

		updateScoresAndUrl();
	}

	function updateFormHeader(id) {
		var t = LOCALE[state.lang];
		var localizedName = t.areas[id] || id;
		dom.formCity.textContent = localizedName;

		var template = isTaiwan(id) ? t.ui.search_tw : t.ui.search_jp;
		var query = template.replace('%s', localizedName);
		dom.formSearch.href = 'https://www.google.com/search?q=' + encodeURIComponent(query);
		dom.formSearch.title = t.ui.search + query;
	}

	function highlightSelectedLevel(level) {
		var rows = dom.formLevels.querySelectorAll('.label');
		for (var i = 0; i < rows.length; i++) {
			var v = parseInt(rows[i].getAttribute('data-value'), 10);
			rows[i].classList.toggle('selected', v === level);
		}
	}

	function openForm(id, clientX, clientY) {
		hideHint();
		state.activeId = id;
		updateFormHeader(id);
		highlightSelectedLevel(state.levels[id] || 0);

		dom.form.classList.add('show');

		var rect = dom.form.getBoundingClientRect();
		var pad = 12;
		var left = clientX + 8;
		var top = clientY + 8;

		if (left + rect.width > window.innerWidth - pad) {
			left = window.innerWidth - rect.width - pad;
		}
		if (top + rect.height > window.innerHeight - pad) {
			top = window.innerHeight - rect.height - pad;
		}
		if (left < pad) left = pad;
		if (top < pad) top = pad;

		dom.form.style.left = left + 'px';
		dom.form.style.top = top + 'px';
	}

	function closeForm() {
		state.activeId = null;
		dom.form.classList.remove('show');
	}

	function showHint(id, clientX, clientY) {
		var t = LOCALE[state.lang];
		var name = t.areas[id] || id;
		var lv = state.levels[id] || 0;
		var lvObj = t.form.filter(function (f) { return f.level === lv; })[0];
		var desc = lvObj ? lvObj.description.split('（')[0].split(' (')[0] : '';

		dom.hint.textContent = name + ' · ' + desc;
		dom.hint.style.display = 'block';

		var rect = dom.hint.getBoundingClientRect();
		var left = clientX + 14;
		var top = clientY - rect.height - 10;
		if (left + rect.width > window.innerWidth - 10) {
			left = clientX - rect.width - 14;
		}
		if (top < 10) {
			top = clientY + 18;
		}
		dom.hint.style.left = left + 'px';
		dom.hint.style.top = top + 'px';
	}

	function hideHint() {
		dom.hint.style.display = 'none';
	}

	function setHover(id) {
		if (state.hoverId && state.hoverId !== id) {
			var prev = getAreaElement(state.hoverId);
			if (prev) prev.classList.remove('is-hover');
		}
		state.hoverId = id;
		if (id) {
			var el = getAreaElement(id);
			if (el) el.classList.add('is-hover');
		}
	}

	function resolveTargetPlace(target) {
		if (!target) return null;
		var areaNode = target.closest('#area > *, #tw-area > *');
		if (areaNode && areaNode.id) return areaNode.id;

		var labelNode = target.closest('#label g[data-place], #tw-label g[data-place]');
		if (labelNode) return labelNode.getAttribute('data-place');

		return null;
	}

	function setAuthorPrompt() {
		var t = LOCALE[state.lang];
		var answer = window.prompt(t.button.input_name, state.author || '');
		if (answer !== null) {
			state.author = answer.trim();
			dom.svgAuthor.textContent = state.author;
			updateScoresAndUrl();
		}
	}

	function resetAll() {
		var scores = computeScores();
		var t = LOCALE[state.lang];
		if (scores.total > 0 && !window.confirm(t.button.reset_confirm)) {
			return;
		}
		ALL_KEYS.forEach(function (k) {
			setAreaLevel(k, 0);
		});
		closeForm();
		updateScoresAndUrl();
	}

	function copyShareUrl() {
		var url = window.location.href;
		var t = LOCALE[state.lang];
		var onDone = function () {
			dom.btnCopy.textContent = t.button.copied;
			window.setTimeout(function () {
				dom.btnCopy.textContent = LOCALE[state.lang].button.copy_link;
			}, 1600);
		};

		if (navigator.clipboard && navigator.clipboard.writeText) {
			navigator.clipboard.writeText(url).then(onDone).catch(function () {
				window.prompt('URL:', url);
			});
		} else {
			window.prompt('URL:', url);
		}
	}

	function saveAsImage() {
		var svgEl = dom.svg;
		var clone = svgEl.cloneNode(true);
		clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
		clone.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
		clone.setAttribute('width', '1885.5');
		clone.setAttribute('height', '1147.5');

		var svgString = new XMLSerializer().serializeToString(clone);
		var blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
		var blobUrl = URL.createObjectURL(blob);

		var img = new Image();
		img.onload = function () {
			var outWidth = 2200;
			var outHeight = Math.round(outWidth * (1147.5 / 1885.5));
			var canvas = document.createElement('canvas');
			canvas.width = outWidth;
			canvas.height = outHeight;
			var ctx = canvas.getContext('2d');
			ctx.fillStyle = '#9dc3fb';
			ctx.fillRect(0, 0, outWidth, outHeight);
			ctx.drawImage(img, 0, 0, outWidth, outHeight);
			URL.revokeObjectURL(blobUrl);

			var pngUrl = canvas.toDataURL('image/png');
			var a = document.createElement('a');
			a.href = pngUrl;
			a.download = 'japan-taiwan-ex.png';
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
		};
		img.onerror = function () {
			URL.revokeObjectURL(blobUrl);
		};
		img.src = blobUrl;
	}

	function hydrateFromUrl() {
		var params = new URLSearchParams(window.location.search);
		var authorParam = params.get('t');
		if (authorParam) {
			state.author = authorParam;
			dom.svgAuthor.textContent = state.author;
		}

		var hash = window.location.hash ? window.location.hash.substring(1) : '';
		if (hash) {
			for (var i = 0; i < ALL_KEYS.length && i < hash.length; i++) {
				var digit = parseInt(hash[i], 10);
				if (!isNaN(digit) && digit >= 0 && digit <= 3) {
					setAreaLevel(ALL_KEYS[i], digit);
				}
			}
		} else {
			ALL_KEYS.forEach(function (k) {
				setAreaLevel(k, 0);
			});
		}
	}

	function init() {
		dom.svg = document.getElementById('svg');
		dom.svgTitle = document.getElementById('svg-title');
		dom.svgLevel = document.getElementById('level');
		dom.svgSubLevel = document.getElementById('sub-level');
		dom.svgAuthor = document.getElementById('author');
		dom.twHeading = document.getElementById('tw-heading');
		dom.jpHeading = document.getElementById('jp-heading');
		dom.description = document.getElementById('description');
		dom.hint = document.getElementById('hint');
		dom.form = document.getElementById('form');
		dom.formCity = document.getElementById('form-city');
		dom.formSearch = document.getElementById('form-search');
		dom.formLevels = document.getElementById('form-levels');
		dom.langSelect = document.getElementById('lang-select');
		dom.btnName = document.getElementById('btn-name');
		dom.btnReset = document.getElementById('btn-reset');
		dom.btnCopy = document.getElementById('btn-copy');
		dom.btnDownload = document.getElementById('saveAsImage');

		hydrateFromUrl();
		renderLocale();

		dom.langSelect.addEventListener('change', function () {
			state.lang = dom.langSelect.value;
			renderLocale();
		});

		dom.btnName.addEventListener('click', setAuthorPrompt);
		dom.svgAuthor.addEventListener('click', setAuthorPrompt);
		dom.btnReset.addEventListener('click', resetAll);
		dom.btnCopy.addEventListener('click', copyShareUrl);
		dom.btnDownload.addEventListener('click', saveAsImage);
		document.getElementById('close').addEventListener('click', closeForm);

		dom.formLevels.addEventListener('click', function (e) {
			var row = e.target.closest('.label');
			if (!row || !state.activeId) return;
			var lv = parseInt(row.getAttribute('data-value'), 10);
			setAreaLevel(state.activeId, lv);
			updateScoresAndUrl();
			closeForm();
		});

		dom.svg.addEventListener('mousemove', function (e) {
			var id = resolveTargetPlace(e.target);
			if (id) {
				setHover(id);
				if (!dom.form.classList.contains('show')) {
					showHint(id, e.clientX, e.clientY);
				}
			} else {
				setHover(null);
				hideHint();
			}
		});

		dom.svg.addEventListener('mouseleave', function () {
			setHover(null);
			hideHint();
		});

		document.addEventListener('click', function (e) {
			if (e.target.closest('#form')) return;
			var id = resolveTargetPlace(e.target);
			if (id) {
				openForm(id, e.clientX, e.clientY);
				return;
			}
			if (e.target.id !== 'author') {
				closeForm();
			}
		});

		document.addEventListener('keydown', function (e) {
			if (e.key === 'Escape') {
				closeForm();
			}
		});
	}

	window.addEventListener('DOMContentLoaded', init);
})();
