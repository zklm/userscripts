// ==UserScript==
// @name         HI3 - VN Translation Loader
// @namespace    https://github.com/zklm/userscripts
// @description  Translation loader for Honkai VNs
// @version      0.1
// @homepage     https://github.com/zklm/userscripts
// @homepageURL  https://github.com/zklm/userscripts
// @downloadURL  https://github.com/zklm/userscripts/raw/master/hi3-vn-tl.user.js
// @updateURL    https://github.com/zklm/userscripts/raw/master/hi3-vn-tl.user.js
// @author       zklm
// @match        https://event.bh3.com/avgAntiEntropy/indexDurandal.php
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==
/* global $ */

// Usage:
// 1. Install TamperMonkey (or another userscript loader) on browser:
//   - Chrome: https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en
//   - Firefox: https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/
//   - Safari: https://apps.apple.com/us/app/tampermonkey/id1482490089
//   - Edge: https://www.microsoft.com/en-au/p/tampermonkey/9nblggh5162s
// 2. Refresh this page and install script
// 3. Open VN in browser

// Notes:
// - Check https://github.com/zklm/honkai-vns for translation progress
// - It's recommended to still use an auto-translator (Chrome, etc) to deal with untranslated text

GM_addStyle(`
.tl_configbutton {
    position: absolute;
    right: 5px;
    text-shadow: none;
    font-weight: 500;
    font-size: 24px;
    cursor: pointer;
}

#tl_config {
    position: absolute;
    width: 180px;
    height: 100%;
    right: 0;
    display: none;
    z-index: 500;
    background: white;
    text-shadow: none;
    font-size: 12px;
    opacity: 0.95;
    text-align: left;
}

#tl_config :not(span) {
    margin: 5px;
}

#tl_config * {
    font-size: inherit;
    text-shadow: inherit;
}

#tl_config label {
    width: 100%;
    display: inline-block;
}`);


const VNID = {
    NONE: 0,
    DURANDAL: 1,
    ANTIENTROPY: 2,
    SEVENSWORDS: 3
}

let VN = VNID.NONE;
if (location.href.startsWith('https://event.bh3.com/avgAntiEntropy/indexDurandal.php')) {
    VN = VNID.DURANDAL
    GM_addStyle(`
    .menu_btn_1 {
        background-image: url('https://i.imgur.com/bkZGhM0.png') !important;
    }

    .menu_btn_3 {
        background-image: url('https://i.imgur.com/u6OEmpT.png') !important;
    }

    .menu_btn_4 {
        background-image: url('https://i.imgur.com/FjkvY5E.png') !important;
    }

    .menu_btn_2 {
        background-image: url('https://i.imgur.com/exxVXIQ.png') !important;
    }`)
} else if (location.href.startsWith('http://event.bh3.com/avgAntiEntropy/indexAntiEntropy.php')) {
    VN = VNID.ANTIENTROPY
} else if (location.href.startsWith('https://webstatic.mihayo.com/bh3/event/novel-7swords/index.html')) {
    VN = VNID.SEVENSWORDS
}


const clamp = (min, max, val) => {
    return val < min ? min : (val > max ? max : val)
}

const normalize = (min, max, val) => {
    val = clamp(min, max, val)
    return (val-min)/(max-min)
}

const setTextSpeed = (textspeed) => {
    textspeed = clamp(0, 100, parseFloat(textspeed))
    textspeed = Math.round(textspeed * 100)/100

    // Text display speed, the default is 75ms per character which is horrible for English.
    // The compression/protection for the VN's JS is a bit annoying to deal with, not bothering to clean it.
    $['fn'][_0x3880('0xb3', '0nRi')] = function(_0x5397a3, _0x2cca54) {
        var _0x15a4c7 = {};
        _0x15a4c7[_0x3880('0xb4', 'G3(3')] = function(_0x4c2247, _0x187dec) {
            return _0x4c2247(_0x187dec);
        };

        _0x15a4c7[_0x3880('0xb5', '8DjE')] = '.dialog-overflow';
        _0x15a4c7[_0x3880('0xb6', 'JjY$')] = function(_0x1f70cd) {
            return _0x1f70cd();
        };

        _0x15a4c7[_0x3880('0xb7', '2]1$')] = function(_0x4f368c, _0x254d06) {
            return _0x4f368c == _0x254d06;
        };

        _0x15a4c7[_0x3880('0xb8', '2]1$')] = _0x3880('0xb9', '6MhS');
        _0x15a4c7[_0x3880('0xba', '^R6u')] = 'countinue';
        _0x15a4c7[_0x3880('0xbb', 'zIU]')] = function(_0x525fc4, _0x440fd6) {
            return _0x525fc4(_0x440fd6);
        };

        _0x15a4c7[_0x3880('0xbc', 'JjY$')] = function(_0x4d621b, _0xd2a73a) {
            return _0x4d621b(_0xd2a73a);
        };

        _0x15a4c7['BfluN'] = function(_0x3b5c5d, _0x22b246) {
            return _0x3b5c5d != _0x22b246;
        };

        _0x15a4c7[_0x3880('0xbd', '8DjE')] = _0x3880('0xbe', 'oXzP')
        _0x15a4c7[_0x3880('0xbf', ')YPW')] = function(_0x3dc7a7, _0x2b38b1) {
            return _0x3dc7a7(_0x2b38b1);
        };

        _0x15a4c7[_0x3880('0xc0', '^R6u')] = function(_0x152c48, _0x555e0d, _0x6a9c63, _0x970f4) {
            return _0x152c48(_0x555e0d, _0x6a9c63, _0x970f4);
        };

        var _0x4f9603;
        var _0xa81786;
        var _0x48bfc9 = $(this);
        _0x15a4c7[_0x3880('0xc1', 'cJIy')]($, _0x15a4c7[_0x3880('0xc2', 'o54O')])[_0x3880('0xc3', 'E9gb')](0x0);
        if (_0x15a4c7['BfluN'](autoSpeed, _0x15a4c7[_0x3880('0xc4', '^R6u')])) {
            _0x4f9603 = _0x48bfc9[_0x3880('0xc5', 'CJH[')]();
            if (_0x4f9603[_0x3880('0xc6', 'IkwT')]('<') >= 0x0) {
                return;
            }
            if (_0x15a4c7[_0x3880('0xc7', 'N)GL')](isdialogAutoplay))
                _0x15a4c7[_0x3880('0xc8', 'sz(C')](dialogAutoplayAutoStop, _0x3880('0xc9', 'cJIy'));
            _0x48bfc9[_0x3880('0xca', 'eDts')]('');
            str_index_in_autotype = 0x0;
            _0x15a4c7[_0x3880('0xcb', 'er*5')](setListens, null, null, _0x4f9603[_0x3880('0xcc', '&71q')]);

            function advance() {
                str_index_in_autotype++;
                _0x48bfc9[_0x3880('0xcd', 'G#dk')](_0x4f9603[_0x3880('0xce', 'er*5')](0x0, str_index_in_autotype));
                if (_0x15a4c7['zAsKL']($, _0x3880('0xcf', '^oNB'))[0x0][_0x3880('0xd0', 'M%]1')] > _0x15a4c7[_0x3880('0xd1', 'CJH[')]($, _0x15a4c7[_0x3880('0xd2', 'iYfI')])['height']()) {
                    _0x48bfc9[_0x3880('0xd3', '7N2Q')](_0x4f9603);
                    str_index_in_autotype = _0x4f9603[_0x3880('0xd4', 'ma*Z')];
                }
                if (_0x15a4c7[_0x3880('0xd5', '0nRi')](isdialogAutoplay)) {
                    _0x48bfc9[_0x3880('0xd6', '6Mr1')](_0x4f9603);
                    str_index_in_autotype = _0x4f9603[_0x3880('0xd7', 'jMRO')];
                }
                if (str_index_in_autotype >= _0x4f9603[_0x3880('0xd8', '^R6u')]) {
                    if (_0xa81786) {
                        clearInterval(_0xa81786)
                        _0xa81786 = null
                    }
                    if (isdialogAutoplay()) {
                        if (_0x15a4c7['MwNPZ'](autoSpeed, _0x15a4c7[_0x3880('0xd9', ')YPW')])) {
                            _0x15a4c7[_0x3880('0xda', 'S7#1')](dialogAutoplay, _0x15a4c7[_0x3880('0xdb', 'IkwT')]);
                        }
                    } else if (autoSpeed == 'typing') {
                        _0x15a4c7[_0x3880('0xdc', 'JjY$')](dialogAutoplay, _0x15a4c7[_0x3880('0xdd', 'I*#e')]);
                    } else {
                        setListens(_0x5397a3, _0x2cca54);
                    }
                    return false
                }
                return true
            }

            if (textspeed === 0) {
                while (advance()) {
                    advance()
                }
            } else {
                _0xa81786 = setInterval(advance, textspeed)
            }
        }
    }
    return textspeed
};

const setTextSize = (textsize) => {
    textsize = clamp(1, 2, parseFloat(textsize))
    $('.dialog-text').css("font-size", textsize + 'rem').css("line-height", (1+textsize) + "rem")
    return textsize
}


(function() {
    'use strict';

    const setStorage = (key, val) => {
        localStorage.setItem(key, val)
    }

    const getStorageNumber = (key, def = 0, create = true) => {
        let num = parseFloat(localStorage.getItem(key))
        if (!isNaN(num)) {
            return num
        }
        if (create) {
            setStorage(key, def)
            return def
        }
        return null
    }

    const settings = {
        textspeed: getStorageNumber('tl_settings_textspeed', 20),
        textsize: getStorageNumber('tl_settings_textsize', 1.25)
    }

    // For now we're just rewriting requests to EN-translated versions which are managed on github. This has the benefit of keeping everything
    // in one place and in the same structure as the CN version, so a full standalone version of the VN could also use these in the future.
    const xmlMaps = {
        [VNID.NONE]: [],
        [VNID.DURANDAL]: ['catalog_list', 'characterData'].concat(new Array(31).fill(null).map((n, i) => "ch"+(i+1))).map(n => n + '.xml'),
        [VNID.ANTIENTROPY]: [],
        [VNID.SEVENSWORDS]: []
    }
    const xmlUrls = {
        [VNID.NONE]: "",
        [VNID.DURANDAL]: "https://raw.githubusercontent.com/zklm/honkai-vns/master/durandal/en/xml/",
        [VNID.ANTIENTROPY]: "https://raw.githubusercontent.com/zklm/honkai-vns/master/antientropy/en/xml/",
        [VNID.SEVENSWORDS]: "https://raw.githubusercontent.com/zklm/honkai-vns/master/sevenswords/en/xml/",
    }

    $.ajaxSetup({
        beforeSend: function(xhr, settings) {
            let split = settings.url.split("/")
            let filename = split[split.length-1].split("?")[0]
            if (xmlMaps[VN].includes(filename)) {
                settings.crossDomain = true
                settings.url = xmlUrls[VN] + filename
            }
        }
    })

    // Init
    settings.textspeed = setTextSpeed(settings.textspeed)
    settings.textsize = setTextSize(settings.textsize)
    $('.frame').append(`<div id="tl_config">
        <div id="tl_configclose" class="tl_configbutton">X</div>
        <h1>Settings</h1>
        <label>Text Speed (<span id="tl_textspeed_val">${settings.textspeed}</span>ms)
            <input id="tl_textspeed" type="range" min="0" max="100" step="1" value="${settings.textspeed}">
        </label>
        <label>Text Size (<span id="tl_textsize_val">${settings.textsize}</span>rem)
            <input id="tl_textsize" type="range" min="1" max="2" step="0.05" value="${settings.textsize}">
        </label>
    </div>`)

    $('.menuscene').append('<div id="tl_configopen" class="tl_configbutton">⚙</div>')
    $('#tl_configopen').on('click', function(e) {
        e.stopPropagation()
        $('#tl_config').show()
    })
    $('#tl_configclose, .menuscene').on('click', function() {
        $('#tl_config').hide()
    })

    $('#tl_textspeed').on('input change', function() {
        settings.textspeed = setTextSpeed($(this).val())
        setStorage('tl_settings_textspeed', settings.textspeed)
        $('#' + this.id + '_val').text(settings.textspeed)
    })

    $('#tl_textsize').on('input change', function() {
        settings.textsize = setTextSize($(this).val())
        setStorage('tl_settings_textsize', settings.textsize)
        $('#' + this.id + '_val').text(settings.textsize)
    })
})();
