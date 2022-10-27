// var countries =[
//     {"name":"Afghanistan","dial_code":"+93","code":"AF"},
//     {"name":"Albania","dial_code":"+355","code":"AL"},
//     {"name":"Algeria","dial_code":"+213","code":"DZ"},
//     {"name":"AmericanSamoa","dial_code":"+1 684","code":"AS"},
//     {"name":"Andorra","dial_code":"+376","code":"AD"},
//     {"name":"Angola","dial_code":"+244","code":"AO"},
//     {"name":"Anguilla","dial_code":"+1 264","code":"AI"},
//     {"name":"Antigua and Barbuda","dial_code":"+1268","code":"AG"},
//     {"name":"Argentina","dial_code":"+54","code":"AR"},
//     {"name":"Armenia","dial_code":"+374","code":"AM"},
//     {"name":"Aruba","dial_code":"+297","code":"AW"},
//     {"name":"Australia","dial_code":"+61","code":"AU"},
//     {"name":"Austria","dial_code":"+43","code":"AT"},
//     {"name":"Azerbaijan","dial_code":"+994","code":"AZ"},
//     {"name":"Bahamas","dial_code":"+1 242","code":"BS"},
//     {"name":"Bahrain","dial_code":"+973","code":"BH"},
//     {"name":"Bangladesh","dial_code":"+880","code":"BD"},
//     {"name":"Barbados","dial_code":"+1 246","code":"BB"},
//     {"name":"Belarus","dial_code":"+375","code":"BY"},
//     {"name":"Belgium","dial_code":"+32","code":"BE"},
//     {"name":"Belize","dial_code":"+501","code":"BZ"},
//     {"name":"Benin","dial_code":"+229","code":"BJ"},
//     {"name":"Bermuda","dial_code":"+1 441","code":"BM"},
//     {"name":"Bhutan","dial_code":"+975","code":"BT"},
//     {"name":"Bosnia and Herzegovina","dial_code":"+387","code":"BA"},
//     {"name":"Botswana","dial_code":"+267","code":"BW"},
//     {"name":"Brazil","dial_code":"+55","code":"BR"},
//     {"name":"British Indian Ocean Territory","dial_code":"+246","code":"IO"},
//     {"name":"Bulgaria","dial_code":"+359","code":"BG"},
//     {"name":"Burkina Faso","dial_code":"+226","code":"BF"},
//     {"name":"Burundi","dial_code":"+257","code":"BI"},
//     {"name":"Cambodia","dial_code":"+855","code":"KH"},
//     {"name":"Cameroon","dial_code":"+237","code":"CM"},
//     {"name":"Canada","dial_code":"+1","code":"CA"},
//     {"name":"Cape Verde","dial_code":"+238","code":"CV"},
//     {"name":"Cayman Islands","dial_code":"+ 345","code":"KY"},
//     {"name":"Central African Republic","dial_code":"+236","code":"CF"},
//     {"name":"Chad","dial_code":"+235","code":"TD"},
//     {"name":"Chile","dial_code":"+56","code":"CL"},
//     {"name":"China","dial_code":"+86","code":"CN"},
//     {"name":"Christmas Island","dial_code":"+61","code":"CX"},
//     {"name":"Colombia","dial_code":"+57","code":"CO"},
//     {"name":"Comoros","dial_code":"+269","code":"KM"},
//     {"name":"Congo","dial_code":"+242","code":"CG"},
//     {"name":"Cook Islands","dial_code":"+682","code":"CK"},
//     {"name":"Costa Rica","dial_code":"+506","code":"CR"},
//     {"name":"Croatia","dial_code":"+385","code":"HR"},
//     {"name":"Cuba","dial_code":"+53","code":"CU"},
//     {"name":"Cyprus","dial_code":"+537","code":"CY"},
//     {"name":"Czech Republic","dial_code":"+420","code":"CZ"},
//     {"name":"Denmark","dial_code":"+45","code":"DK"},
//     {"name":"Djibouti","dial_code":"+253","code":"DJ"},
//     {"name":"Dominica","dial_code":"+1 767","code":"DM"},
//     {"name":"Dominican Republic","dial_code":"+1 849","code":"DO"},
//     {"name":"Ecuador","dial_code":"+593","code":"EC"},
//     {"name":"Egypt","dial_code":"+20","code":"EG"},
//     {"name":"El Salvador","dial_code":"+503","code":"SV"},
//     {"name":"Equatorial Guinea","dial_code":"+240","code":"GQ"},
//     {"name":"Eritrea","dial_code":"+291","code":"ER"},
//     {"name":"Estonia","dial_code":"+372","code":"EE"},
//     {"name":"Ethiopia","dial_code":"+251","code":"ET"},
//     {"name":"Faroe Islands","dial_code":"+298","code":"FO"},
//     {"name":"Fiji","dial_code":"+679","code":"FJ"},
//     {"name":"Finland","dial_code":"+358","code":"FI"},
//     {"name":"France","dial_code":"+33","code":"FR"},
//     {"name":"French Guiana","dial_code":"+594","code":"GF"},
//     {"name":"French Polynesia","dial_code":"+689","code":"PF"},
//     {"name":"Gabon","dial_code":"+241","code":"GA"},
//     {"name":"Gambia","dial_code":"+220","code":"GM"},
//     {"name":"Georgia","dial_code":"+995","code":"GE"},
//     {"name":"Germany","dial_code":"+49","code":"DE"},
//     {"name":"Ghana","dial_code":"+233","code":"GH"},
//     {"name":"Gibraltar","dial_code":"+350","code":"GI"},
//     {"name":"Greece","dial_code":"+30","code":"GR"},
//     {"name":"Greenland","dial_code":"+299","code":"GL"},
//     {"name":"Grenada","dial_code":"+1 473","code":"GD"},
//     {"name":"Guadeloupe","dial_code":"+590","code":"GP"},
//     {"name":"Guam","dial_code":"+1 671","code":"GU"},
//     {"name":"Guatemala","dial_code":"+502","code":"GT"},
//     {"name":"Guinea","dial_code":"+224","code":"GN"},
//     {"name":"Guinea-Bissau","dial_code":"+245","code":"GW"},
//     {"name":"Guyana","dial_code":"+595","code":"GY"},
//     {"name":"Haiti","dial_code":"+509","code":"HT"},
//     {"name":"Honduras","dial_code":"+504","code":"HN"},
//     {"name":"Hungary","dial_code":"+36","code":"HU"},
//     {"name":"Iceland","dial_code":"+354","code":"IS"},
//     {"name":"India","dial_code":"+91","code":"IN"},
//     {"name":"Indonesia","dial_code":"+62","code":"ID"},
//     {"name":"Iraq","dial_code":"+964","code":"IQ"},
//     {"name":"Ireland","dial_code":"+353","code":"IE"},
//     {"name":"Israel","dial_code":"+972","code":"IL"},
//     {"name":"Italy","dial_code":"+39","code":"IT"},
//     {"name":"Jamaica","dial_code":"+1 876","code":"JM"},
//     {"name":"Japan","dial_code":"+81","code":"JP"},
//     {"name":"Jordan","dial_code":"+962","code":"JO"},
//     {"name":"Kazakhstan","dial_code":"+7 7","code":"KZ"},
//     {"name":"Kenya","dial_code":"+254","code":"KE"},
//     {"name":"Kiribati","dial_code":"+686","code":"KI"},
//     {"name":"Kuwait","dial_code":"+965","code":"KW"},
//     {"name":"Kyrgyzstan","dial_code":"+996","code":"KG"},
//     {"name":"Latvia","dial_code":"+371","code":"LV"},
//     {"name":"Lebanon","dial_code":"+961","code":"LB"},
//     {"name":"Lesotho","dial_code":"+266","code":"LS"},
//     {"name":"Liberia","dial_code":"+231","code":"LR"},
//     {"name":"Liechtenstein","dial_code":"+423","code":"LI"},
//     {"name":"Lithuania","dial_code":"+370","code":"LT"},
//     {"name":"Luxembourg","dial_code":"+352","code":"LU"},
//     {"name":"Madagascar","dial_code":"+261","code":"MG"},
//     {"name":"Malawi","dial_code":"+265","code":"MW"},
//     {"name":"Malaysia","dial_code":"+60","code":"MY"},
//     {"name":"Maldives","dial_code":"+960","code":"MV"},
//     {"name":"Mali","dial_code":"+223","code":"ML"},
//     {"name":"Malta","dial_code":"+356","code":"MT"},
//     {"name":"Marshall Islands","dial_code":"+692","code":"MH"},
//     {"name":"Martinique","dial_code":"+596","code":"MQ"},
//     {"name":"Mauritania","dial_code":"+222","code":"MR"},
//     {"name":"Mauritius","dial_code":"+230","code":"MU"},
//     {"name":"Mayotte","dial_code":"+262","code":"YT"},
//     {"name":"Mexico","dial_code":"+52","code":"MX"},
//     {"name":"Monaco","dial_code":"+377","code":"MC"},
//     {"name":"Mongolia","dial_code":"+976","code":"MN"},
//     {"name":"Montenegro","dial_code":"+382","code":"ME"},
//     {"name":"Montserrat","dial_code":"+1664","code":"MS"},
//     {"name":"Morocco","dial_code":"+212","code":"MA"},
//     {"name":"Myanmar","dial_code":"+95","code":"MM"},
//     {"name":"Namibia","dial_code":"+264","code":"NA"},
//     {"name":"Nauru","dial_code":"+674","code":"NR"},
//     {"name":"Nepal","dial_code":"+977","code":"NP"},
//     {"name":"Netherlands","dial_code":"+31","code":"NL"},
//     {"name":"Netherlands Antilles","dial_code":"+599","code":"AN"},
//     {"name":"New Caledonia","dial_code":"+687","code":"NC"},
//     {"name":"New Zealand","dial_code":"+64","code":"NZ"},
//     {"name":"Nicaragua","dial_code":"+505","code":"NI"},
//     {"name":"Niger","dial_code":"+227","code":"NE"},
//     {"name":"Nigeria","dial_code":"+234","code":"NG"},
//     {"name":"Niue","dial_code":"+683","code":"NU"},
//     {"name":"Norfolk Island","dial_code":"+672","code":"NF"},
//     {"name":"Northern Mariana Islands","dial_code":"+1 670","code":"MP"},
//     {"name":"Norway","dial_code":"+47","code":"NO"},
//     {"name":"Oman","dial_code":"+968","code":"OM"},
//     {"name":"Pakistan","dial_code":"+92","code":"PK"},
//     {"name":"Palau","dial_code":"+680","code":"PW"},
//     {"name":"Panama","dial_code":"+507","code":"PA"},
//     {"name":"Papua New Guinea","dial_code":"+675","code":"PG"},
//     {"name":"Paraguay","dial_code":"+595","code":"PY"},
//     {"name":"Peru","dial_code":"+51","code":"PE"},
//     {"name":"Philippines","dial_code":"+63","code":"PH"},
//     {"name":"Poland","dial_code":"+48","code":"PL"},
//     {"name":"Portugal","dial_code":"+351","code":"PT"},
//     {"name":"Puerto Rico","dial_code":"+1 939","code":"PR"},
//     {"name":"Qatar","dial_code":"+974","code":"QA"},
//     {"name":"Romania","dial_code":"+40","code":"RO"},
//     {"name":"Rwanda","dial_code":"+250","code":"RW"},
//     {"name":"Samoa","dial_code":"+685","code":"WS"},
//     {"name":"San Marino","dial_code":"+378","code":"SM"},
//     {"name":"Saudi Arabia","dial_code":"+966","code":"SA"},
//     {"name":"Senegal","dial_code":"+221","code":"SN"},
//     {"name":"Serbia","dial_code":"+381","code":"RS"},
//     {"name":"Seychelles","dial_code":"+248","code":"SC"},
//     {"name":"Sierra Leone","dial_code":"+232","code":"SL"},
//     {"name":"Singapore","dial_code":"+65","code":"SG"},
//     {"name":"Slovakia","dial_code":"+421","code":"SK"},
//     {"name":"Slovenia","dial_code":"+386","code":"SI"},
//     {"name":"Solomon Islands","dial_code":"+677","code":"SB"},
//     {"name":"South Africa","dial_code":"+27","code":"ZA"},
//     {"name":"South Georgia and the South Sandwich Islands","dial_code":"+500","code":"GS"},
//     {"name":"Spain","dial_code":"+34","code":"ES"},
//     {"name":"Sri Lanka","dial_code":"+94","code":"LK"},
//     {"name":"Sudan","dial_code":"+249","code":"SD"},
//     {"name":"Suriname","dial_code":"+597","code":"SR"},
//     {"name":"Swaziland","dial_code":"+268","code":"SZ"},
//     {"name":"Sweden","dial_code":"+46","code":"SE"},
//     {"name":"Switzerland","dial_code":"+41","code":"CH"},
//     {"name":"Tajikistan","dial_code":"+992","code":"TJ"},
//     {"name":"Thailand","dial_code":"+66","code":"TH"},
//     {"name":"Togo","dial_code":"+228","code":"TG"},
//     {"name":"Tokelau","dial_code":"+690","code":"TK"},
//     {"name":"Tonga","dial_code":"+676","code":"TO"},
//     {"name":"Trinidad and Tobago","dial_code":"+1 868","code":"TT"},
//     {"name":"Tunisia","dial_code":"+216","code":"TN"},
//     {"name":"Turkey","dial_code":"+90","code":"TR"},
//     {"name":"Turkmenistan","dial_code":"+993","code":"TM"},
//     {"name":"Turks and Caicos Islands","dial_code":"+1 649","code":"TC"},
//     {"name":"Tuvalu","dial_code":"+688","code":"TV"},
//     {"name":"Uganda","dial_code":"+256","code":"UG"},
//     {"name":"Ukraine","dial_code":"+380","code":"UA"},
//     {"name":"United Arab Emirates","dial_code":"+971","code":"AE"},
//     {"name":"United Kingdom","dial_code":"+44","code":"GB"},
//     {"name":"United States","dial_code":"+1","code":"US"},
//     {"name":"Uruguay","dial_code":"+598","code":"UY"},
//     {"name":"Uzbekistan","dial_code":"+998","code":"UZ"},
//     {"name":"Vanuatu","dial_code":"+678","code":"VU"},
//     {"name":"Wallis and Futuna","dial_code":"+681","code":"WF"},
//     {"name":"Yemen","dial_code":"+967","code":"YE"},
//     {"name":"Zambia","dial_code":"+260","code":"ZM"},
//     {"name":"Zimbabwe","dial_code":"+263","code":"ZW"},
//     {"name":"land Islands","dial_code":"","code":"AX"},
//     {"name":"Antarctica","dial_code":null,"code":"AQ"},
//     {"name":"Bolivia, Plurinational State of","dial_code":"+591","code":"BO"},
//     {"name":"Brunei Darussalam","dial_code":"+673","code":"BN"},
//     {"name":"Cocos (Keeling) Islands","dial_code":"+61","code":"CC"},
//     {"name":"Congo, The Democratic Republic of the","dial_code":"+243","code":"CD"},
//     {"name":"Cote d'Ivoire","dial_code":"+225","code":"CI"},
//     {"name":"Falkland Islands (Malvinas)","dial_code":"+500","code":"FK"},
//     {"name":"Guernsey","dial_code":"+44","code":"GG"},
//     {"name":"Holy See (Vatican City State)","dial_code":"+379","code":"VA"},
//     {"name":"Hong Kong","dial_code":"+852","code":"HK"},
//     {"name":"Iran, Islamic Republic of","dial_code":"+98","code":"IR"},
//     {"name":"Isle of Man","dial_code":"+44","code":"IM"},
//     {"name":"Jersey","dial_code":"+44","code":"JE"},
//     {"name":"Korea, Democratic People's Republic of","dial_code":"+850","code":"KP"},
//     {"name":"Korea, Republic of","dial_code":"+82","code":"KR"},
//     {"name":"Lao People's Democratic Republic","dial_code":"+856","code":"LA"},
//     {"name":"Libyan Arab Jamahiriya","dial_code":"+218","code":"LY"},
//     {"name":"Macao","dial_code":"+853","code":"MO"},
//     {"name":"Macedonia, The Former Yugoslav Republic of","dial_code":"+389","code":"MK"},
//     {"name":"Micronesia, Federated States of","dial_code":"+691","code":"FM"},
//     {"name":"Moldova, Republic of","dial_code":"+373","code":"MD"},
//     {"name":"Mozambique","dial_code":"+258","code":"MZ"},
//     {"name":"Palestinian Territory, Occupied","dial_code":"+970","code":"PS"},
//     {"name":"Pitcairn","dial_code":"+872","code":"PN"},
//     {"name":"Réunion","dial_code":"+262","code":"RE"},
//     {"name":"Russia","dial_code":"+7","code":"RU"},
//     {"name":"Saint Barthélemy","dial_code":"+590","code":"BL"},
//     {"name":"Saint Helena, Ascension and Tristan Da Cunha","dial_code":"+290","code":"SH"},
//     {"name":"Saint Kitts and Nevis","dial_code":"+1 869","code":"KN"},
//     {"name":"Saint Lucia","dial_code":"+1 758","code":"LC"},
//     {"name":"Saint Martin","dial_code":"+590","code":"MF"},
//     {"name":"Saint Pierre and Miquelon","dial_code":"+508","code":"PM"},
//     {"name":"Saint Vincent and the Grenadines","dial_code":"+1 784","code":"VC"},
//     {"name":"Sao Tome and Principe","dial_code":"+239","code":"ST"},
//     {"name":"Somalia","dial_code":"+252","code":"SO"},
//     {"name":"Svalbard and Jan Mayen","dial_code":"+47","code":"SJ"},
//     {"name":"Syrian Arab Republic","dial_code":"+963","code":"SY"},
//     {"name":"Taiwan, Province of China","dial_code":"+886","code":"TW"},
//     {"name":"Tanzania, United Republic of","dial_code":"+255","code":"TZ"},
//     {"name":"Timor-Leste","dial_code":"+670","code":"TL"},
//     {"name":"Venezuela, Bolivarian Republic of","dial_code":"+58","code":"VE"},
//     {"name":"Viet Nam","dial_code":"+84","code":"VN"},
//     {"name":"Virgin Islands, British","dial_code":"+1 284","code":"VG"},
//     {"name":"Virgin Islands, U.S.","dial_code":"+1 340","code":"VI"}
// ];

// var countries_flags = [{"name":"Ascension Island","code":"AC","emoji":"🇦🇨","unicode":"U+1F1E6 U+1F1E8","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AC.svg"},
// {"name":"Andorra","code":"AD","emoji":"🇦🇩","unicode":"U+1F1E6 U+1F1E9","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AD.svg"},
// {"name":"United Arab Emirates","code":"AE","emoji":"🇦🇪","unicode":"U+1F1E6 U+1F1EA","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AE.svg"},
// {"name":"Afghanistan","code":"AF","emoji":"🇦🇫","unicode":"U+1F1E6 U+1F1EB","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AF.svg"},
// {"name":"Antigua & Barbuda","code":"AG","emoji":"🇦🇬","unicode":"U+1F1E6 U+1F1EC","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AG.svg"},
// {"name":"Anguilla","code":"AI","emoji":"🇦🇮","unicode":"U+1F1E6 U+1F1EE","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AI.svg"},
// {"name":"Albania","code":"AL","emoji":"🇦🇱","unicode":"U+1F1E6 U+1F1F1","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AL.svg"},
// {"name":"Armenia","code":"AM","emoji":"🇦🇲","unicode":"U+1F1E6 U+1F1F2","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AM.svg"},
// {"name":"Angola","code":"AO","emoji":"🇦🇴","unicode":"U+1F1E6 U+1F1F4","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AO.svg"},
// {"name":"Antarctica","code":"AQ","emoji":"🇦🇶","unicode":"U+1F1E6 U+1F1F6","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AQ.svg"},
// {"name":"Argentina","code":"AR","emoji":"🇦🇷","unicode":"U+1F1E6 U+1F1F7","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AR.svg"},
// {"name":"American Samoa","code":"AS","emoji":"🇦🇸","unicode":"U+1F1E6 U+1F1F8","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AS.svg"},
// {"name":"Austria","code":"AT","emoji":"🇦🇹","unicode":"U+1F1E6 U+1F1F9","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AT.svg"},
// {"name":"Australia","code":"AU","emoji":"🇦🇺","unicode":"U+1F1E6 U+1F1FA","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AU.svg"},
// {"name":"Aruba","code":"AW","emoji":"🇦🇼","unicode":"U+1F1E6 U+1F1FC","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AW.svg"},
// {"name":"Åland Islands","code":"AX","emoji":"🇦🇽","unicode":"U+1F1E6 U+1F1FD","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AX.svg"},
// {"name":"Azerbaijan","code":"AZ","emoji":"🇦🇿","unicode":"U+1F1E6 U+1F1FF","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AZ.svg"},
// {"name":"Bosnia & Herzegovina","code":"BA","emoji":"🇧🇦","unicode":"U+1F1E7 U+1F1E6","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BA.svg"},
// {"name":"Barbados","code":"BB","emoji":"🇧🇧","unicode":"U+1F1E7 U+1F1E7","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BB.svg"},
// {"name":"Bangladesh","code":"BD","emoji":"🇧🇩","unicode":"U+1F1E7 U+1F1E9","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BD.svg"},
// {"name":"Belgium","code":"BE","emoji":"🇧🇪","unicode":"U+1F1E7 U+1F1EA","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BE.svg"},
// {"name":"Burkina Faso","code":"BF","emoji":"🇧🇫","unicode":"U+1F1E7 U+1F1EB","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BF.svg"},
// {"name":"Bulgaria","code":"BG","emoji":"🇧🇬","unicode":"U+1F1E7 U+1F1EC","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BG.svg"},
// {"name":"Bahrain","code":"BH","emoji":"🇧🇭","unicode":"U+1F1E7 U+1F1ED","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BH.svg"},
// {"name":"Burundi","code":"BI","emoji":"🇧🇮","unicode":"U+1F1E7 U+1F1EE","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BI.svg"},
// {"name":"Benin","code":"BJ","emoji":"🇧🇯","unicode":"U+1F1E7 U+1F1EF","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BJ.svg"},
// {"name":"St. Barthélemy","code":"BL","emoji":"🇧🇱","unicode":"U+1F1E7 U+1F1F1","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BL.svg"},
// {"name":"Bermuda","code":"BM","emoji":"🇧🇲","unicode":"U+1F1E7 U+1F1F2","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BM.svg"},
// {"name":"Brunei","code":"BN","emoji":"🇧🇳","unicode":"U+1F1E7 U+1F1F3","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BN.svg"},
// {"name":"Bolivia","code":"BO","emoji":"🇧🇴","unicode":"U+1F1E7 U+1F1F4","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BO.svg"},
// {"name":"Caribbean Netherlands","code":"BQ","emoji":"🇧🇶","unicode":"U+1F1E7 U+1F1F6","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BQ.svg"},
// {"name":"Brazil","code":"BR","emoji":"🇧🇷","unicode":"U+1F1E7 U+1F1F7","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BR.svg"},
// {"name":"Bahamas","code":"BS","emoji":"🇧🇸","unicode":"U+1F1E7 U+1F1F8","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BS.svg"},
// {"name":"Bhutan","code":"BT","emoji":"🇧🇹","unicode":"U+1F1E7 U+1F1F9","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BT.svg"},
// {"name":"Bouvet Island","code":"BV","emoji":"🇧🇻","unicode":"U+1F1E7 U+1F1FB","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BV.svg"},
// {"name":"Botswana","code":"BW","emoji":"🇧🇼","unicode":"U+1F1E7 U+1F1FC","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BW.svg"},
// {"name":"Belarus","code":"BY","emoji":"🇧🇾","unicode":"U+1F1E7 U+1F1FE","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BY.svg"},
// {"name":"Belize","code":"BZ","emoji":"🇧🇿","unicode":"U+1F1E7 U+1F1FF","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BZ.svg"},
// {"name":"Canada","code":"CA","emoji":"🇨🇦","unicode":"U+1F1E8 U+1F1E6","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CA.svg"},
// {"name":"Cocos (Keeling) Islands","code":"CC","emoji":"🇨🇨","unicode":"U+1F1E8 U+1F1E8","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CC.svg"},
// {"name":"Congo - Kinshasa","code":"CD","emoji":"🇨🇩","unicode":"U+1F1E8 U+1F1E9","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CD.svg"},
// {"name":"Central African Republic","code":"CF","emoji":"🇨🇫","unicode":"U+1F1E8 U+1F1EB","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CF.svg"},
// {"name":"Congo - Brazzaville","code":"CG","emoji":"🇨🇬","unicode":"U+1F1E8 U+1F1EC","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CG.svg"},
// {"name":"Switzerland","code":"CH","emoji":"🇨🇭","unicode":"U+1F1E8 U+1F1ED","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CH.svg"},
// {"name":"Côte d’Ivoire","code":"CI","emoji":"🇨🇮","unicode":"U+1F1E8 U+1F1EE","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CI.svg"},
// {"name":"Cook Islands","code":"CK","emoji":"🇨🇰","unicode":"U+1F1E8 U+1F1F0","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CK.svg"},
// {"name":"Chile","code":"CL","emoji":"🇨🇱","unicode":"U+1F1E8 U+1F1F1","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CL.svg"},
// {"name":"Cameroon","code":"CM","emoji":"🇨🇲","unicode":"U+1F1E8 U+1F1F2","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CM.svg"},
// {"name":"China","code":"CN","emoji":"🇨🇳","unicode":"U+1F1E8 U+1F1F3","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CN.svg"},
// {"name":"Colombia","code":"CO","emoji":"🇨🇴","unicode":"U+1F1E8 U+1F1F4","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CO.svg"},
// {"name":"Clipperton Island","code":"CP","emoji":"🇨🇵","unicode":"U+1F1E8 U+1F1F5","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CP.svg"},
// {"name":"Costa Rica","code":"CR","emoji":"🇨🇷","unicode":"U+1F1E8 U+1F1F7","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CR.svg"},
// {"name":"Cuba","code":"CU","emoji":"🇨🇺","unicode":"U+1F1E8 U+1F1FA","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CU.svg"},
// {"name":"Cape Verde","code":"CV","emoji":"🇨🇻","unicode":"U+1F1E8 U+1F1FB","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CV.svg"},
// {"name":"Curaçao","code":"CW","emoji":"🇨🇼","unicode":"U+1F1E8 U+1F1FC","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CW.svg"},
// {"name":"Christmas Island","code":"CX","emoji":"🇨🇽","unicode":"U+1F1E8 U+1F1FD","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CX.svg"},
// {"name":"Cyprus","code":"CY","emoji":"🇨🇾","unicode":"U+1F1E8 U+1F1FE","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CY.svg"},
// {"name":"Czechia","code":"CZ","emoji":"🇨🇿","unicode":"U+1F1E8 U+1F1FF","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CZ.svg"},
// {"name":"Germany","code":"DE","emoji":"🇩🇪","unicode":"U+1F1E9 U+1F1EA","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DE.svg"},
// {"name":"Diego Garcia","code":"DG","emoji":"🇩🇬","unicode":"U+1F1E9 U+1F1EC","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DG.svg"},
// {"name":"Djibouti","code":"DJ","emoji":"🇩🇯","unicode":"U+1F1E9 U+1F1EF","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DJ.svg"},
// {"name":"Denmark","code":"DK","emoji":"🇩🇰","unicode":"U+1F1E9 U+1F1F0","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DK.svg"},
// {"name":"Dominica","code":"DM","emoji":"🇩🇲","unicode":"U+1F1E9 U+1F1F2","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DM.svg"},
// {"name":"Dominican Republic","code":"DO","emoji":"🇩🇴","unicode":"U+1F1E9 U+1F1F4","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DO.svg"},
// {"name":"Algeria","code":"DZ","emoji":"🇩🇿","unicode":"U+1F1E9 U+1F1FF","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DZ.svg"},
// {"name":"Ceuta & Melilla","code":"EA","emoji":"🇪🇦","unicode":"U+1F1EA U+1F1E6","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EA.svg"},
// {"name":"Ecuador","code":"EC","emoji":"🇪🇨","unicode":"U+1F1EA U+1F1E8","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EC.svg"},
// {"name":"Estonia","code":"EE","emoji":"🇪🇪","unicode":"U+1F1EA U+1F1EA","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EE.svg"},
// {"name":"Egypt","code":"EG","emoji":"🇪🇬","unicode":"U+1F1EA U+1F1EC","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EG.svg"},
// {"name":"Western Sahara","code":"EH","emoji":"🇪🇭","unicode":"U+1F1EA U+1F1ED","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EH.svg"},
// {"name":"Eritrea","code":"ER","emoji":"🇪🇷","unicode":"U+1F1EA U+1F1F7","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ER.svg"},
// {"name":"Spain","code":"ES","emoji":"🇪🇸","unicode":"U+1F1EA U+1F1F8","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ES.svg"},
// {"name":"Ethiopia","code":"ET","emoji":"🇪🇹","unicode":"U+1F1EA U+1F1F9","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ET.svg"},
// {"name":"European Union","code":"EU","emoji":"🇪🇺","unicode":"U+1F1EA U+1F1FA","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EU.svg"},
// {"name":"Finland","code":"FI","emoji":"🇫🇮","unicode":"U+1F1EB U+1F1EE","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FI.svg"},
// {"name":"Fiji","code":"FJ","emoji":"🇫🇯","unicode":"U+1F1EB U+1F1EF","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FJ.svg"},
// {"name":"Falkland Islands","code":"FK","emoji":"🇫🇰","unicode":"U+1F1EB U+1F1F0","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FK.svg"},
// {"name":"Micronesia","code":"FM","emoji":"🇫🇲","unicode":"U+1F1EB U+1F1F2","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FM.svg"},
// {"name":"Faroe Islands","code":"FO","emoji":"🇫🇴","unicode":"U+1F1EB U+1F1F4","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FO.svg"},
// {"name":"France","code":"FR","emoji":"🇫🇷","unicode":"U+1F1EB U+1F1F7","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FR.svg"},
// {"name":"Gabon","code":"GA","emoji":"🇬🇦","unicode":"U+1F1EC U+1F1E6","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GA.svg"},
// {"name":"United Kingdom","code":"GB","emoji":"🇬🇧","unicode":"U+1F1EC U+1F1E7","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GB.svg"},
// {"name":"Grenada","code":"GD","emoji":"🇬🇩","unicode":"U+1F1EC U+1F1E9","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GD.svg"},
// {"name":"Georgia","code":"GE","emoji":"🇬🇪","unicode":"U+1F1EC U+1F1EA","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GE.svg"},
// {"name":"French Guiana","code":"GF","emoji":"🇬🇫","unicode":"U+1F1EC U+1F1EB","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GF.svg"},
// {"name":"Guernsey","code":"GG","emoji":"🇬🇬","unicode":"U+1F1EC U+1F1EC","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GG.svg"},
// {"name":"Ghana","code":"GH","emoji":"🇬🇭","unicode":"U+1F1EC U+1F1ED","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GH.svg"},
// {"name":"Gibraltar","code":"GI","emoji":"🇬🇮","unicode":"U+1F1EC U+1F1EE","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GI.svg"},
// {"name":"Greenland","code":"GL","emoji":"🇬🇱","unicode":"U+1F1EC U+1F1F1","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GL.svg"},
// {"name":"Gambia","code":"GM","emoji":"🇬🇲","unicode":"U+1F1EC U+1F1F2","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GM.svg"},
// {"name":"Guinea","code":"GN","emoji":"🇬🇳","unicode":"U+1F1EC U+1F1F3","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GN.svg"},
// {"name":"Guadeloupe","code":"GP","emoji":"🇬🇵","unicode":"U+1F1EC U+1F1F5","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GP.svg"},
// {"name":"Equatorial Guinea","code":"GQ","emoji":"🇬🇶","unicode":"U+1F1EC U+1F1F6","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GQ.svg"},
// {"name":"Greece","code":"GR","emoji":"🇬🇷","unicode":"U+1F1EC U+1F1F7","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GR.svg"},
// {"name":"South Georgia & South Sandwich Islands","code":"GS","emoji":"🇬🇸","unicode":"U+1F1EC U+1F1F8","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GS.svg"},
// {"name":"Guatemala","code":"GT","emoji":"🇬🇹","unicode":"U+1F1EC U+1F1F9","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GT.svg"},
// {"name":"Guam","code":"GU","emoji":"🇬🇺","unicode":"U+1F1EC U+1F1FA","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GU.svg"},
// {"name":"Guinea-Bissau","code":"GW","emoji":"🇬🇼","unicode":"U+1F1EC U+1F1FC","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GW.svg"},
// {"name":"Guyana","code":"GY","emoji":"🇬🇾","unicode":"U+1F1EC U+1F1FE","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GY.svg"},
// {"name":"Hong Kong SAR China","code":"HK","emoji":"🇭🇰","unicode":"U+1F1ED U+1F1F0","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HK.svg"},
// {"name":"Heard & McDonald Islands","code":"HM","emoji":"🇭🇲","unicode":"U+1F1ED U+1F1F2","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HM.svg"},
// {"name":"Honduras","code":"HN","emoji":"🇭🇳","unicode":"U+1F1ED U+1F1F3","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HN.svg"},
// {"name":"Croatia","code":"HR","emoji":"🇭🇷","unicode":"U+1F1ED U+1F1F7","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HR.svg"},
// {"name":"Haiti","code":"HT","emoji":"🇭🇹","unicode":"U+1F1ED U+1F1F9","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HT.svg"},
// {"name":"Hungary","code":"HU","emoji":"🇭🇺","unicode":"U+1F1ED U+1F1FA","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HU.svg"},
// {"name":"Canary Islands","code":"IC","emoji":"🇮🇨","unicode":"U+1F1EE U+1F1E8","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IC.svg"},
// {"name":"Indonesia","code":"ID","emoji":"🇮🇩","unicode":"U+1F1EE U+1F1E9","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ID.svg"},
// {"name":"Ireland","code":"IE","emoji":"🇮🇪","unicode":"U+1F1EE U+1F1EA","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IE.svg"},
// {"name":"Israel","code":"IL","emoji":"🇮🇱","unicode":"U+1F1EE U+1F1F1","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IL.svg"},
// {"name":"Isle of Man","code":"IM","emoji":"🇮🇲","unicode":"U+1F1EE U+1F1F2","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IM.svg"},
// {"name":"India","code":"IN","emoji":"🇮🇳","unicode":"U+1F1EE U+1F1F3","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IN.svg"},
// {"name":"British Indian Ocean Territory","code":"IO","emoji":"🇮🇴","unicode":"U+1F1EE U+1F1F4","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IO.svg"},
// {"name":"Iraq","code":"IQ","emoji":"🇮🇶","unicode":"U+1F1EE U+1F1F6","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IQ.svg"},
// {"name":"Iran","code":"IR","emoji":"🇮🇷","unicode":"U+1F1EE U+1F1F7","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IR.svg"},
// {"name":"Iceland","code":"IS","emoji":"🇮🇸","unicode":"U+1F1EE U+1F1F8","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IS.svg"},
// {"name":"Italy","code":"IT","emoji":"🇮🇹","unicode":"U+1F1EE U+1F1F9","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IT.svg"},
// {"name":"Jersey","code":"JE","emoji":"🇯🇪","unicode":"U+1F1EF U+1F1EA","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JE.svg"},
// {"name":"Jamaica","code":"JM","emoji":"🇯🇲","unicode":"U+1F1EF U+1F1F2","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JM.svg"},
// {"name":"Jordan","code":"JO","emoji":"🇯🇴","unicode":"U+1F1EF U+1F1F4","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JO.svg"},
// {"name":"Japan","code":"JP","emoji":"🇯🇵","unicode":"U+1F1EF U+1F1F5","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JP.svg"},
// {"name":"Kenya","code":"KE","emoji":"🇰🇪","unicode":"U+1F1F0 U+1F1EA","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KE.svg"},
// {"name":"Kyrgyzstan","code":"KG","emoji":"🇰🇬","unicode":"U+1F1F0 U+1F1EC","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KG.svg"},
// {"name":"Cambodia","code":"KH","emoji":"🇰🇭","unicode":"U+1F1F0 U+1F1ED","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KH.svg"},
// {"name":"Kiribati","code":"KI","emoji":"🇰🇮","unicode":"U+1F1F0 U+1F1EE","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KI.svg"},
// {"name":"Comoros","code":"KM","emoji":"🇰🇲","unicode":"U+1F1F0 U+1F1F2","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KM.svg"},
// {"name":"St. Kitts & Nevis","code":"KN","emoji":"🇰🇳","unicode":"U+1F1F0 U+1F1F3","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KN.svg"},
// {"name":"North Korea","code":"KP","emoji":"🇰🇵","unicode":"U+1F1F0 U+1F1F5","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KP.svg"},
// {"name":"South Korea","code":"KR","emoji":"🇰🇷","unicode":"U+1F1F0 U+1F1F7","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KR.svg"},
// {"name":"Kuwait","code":"KW","emoji":"🇰🇼","unicode":"U+1F1F0 U+1F1FC","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KW.svg"},
// {"name":"Cayman Islands","code":"KY","emoji":"🇰🇾","unicode":"U+1F1F0 U+1F1FE","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KY.svg"},
// {"name":"Kazakhstan","code":"KZ","emoji":"🇰🇿","unicode":"U+1F1F0 U+1F1FF","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KZ.svg"},
// {"name":"Laos","code":"LA","emoji":"🇱🇦","unicode":"U+1F1F1 U+1F1E6","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LA.svg"},
// {"name":"Lebanon","code":"LB","emoji":"🇱🇧","unicode":"U+1F1F1 U+1F1E7","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LB.svg"},
// {"name":"St. Lucia","code":"LC","emoji":"🇱🇨","unicode":"U+1F1F1 U+1F1E8","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LC.svg"},
// {"name":"Liechtenstein","code":"LI","emoji":"🇱🇮","unicode":"U+1F1F1 U+1F1EE","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LI.svg"},
// {"name":"Sri Lanka","code":"LK","emoji":"🇱🇰","unicode":"U+1F1F1 U+1F1F0","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LK.svg"},
// {"name":"Liberia","code":"LR","emoji":"🇱🇷","unicode":"U+1F1F1 U+1F1F7","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LR.svg"},
// {"name":"Lesotho","code":"LS","emoji":"🇱🇸","unicode":"U+1F1F1 U+1F1F8","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LS.svg"},
// {"name":"Lithuania","code":"LT","emoji":"🇱🇹","unicode":"U+1F1F1 U+1F1F9","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LT.svg"},
// {"name":"Luxembourg","code":"LU","emoji":"🇱🇺","unicode":"U+1F1F1 U+1F1FA","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LU.svg"},
// {"name":"Latvia","code":"LV","emoji":"🇱🇻","unicode":"U+1F1F1 U+1F1FB","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LV.svg"},
// {"name":"Libya","code":"LY","emoji":"🇱🇾","unicode":"U+1F1F1 U+1F1FE","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LY.svg"},
// {"name":"Morocco","code":"MA","emoji":"🇲🇦","unicode":"U+1F1F2 U+1F1E6","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MA.svg"},
// {"name":"Monaco","code":"MC","emoji":"🇲🇨","unicode":"U+1F1F2 U+1F1E8","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MC.svg"},
// {"name":"Moldova","code":"MD","emoji":"🇲🇩","unicode":"U+1F1F2 U+1F1E9","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MD.svg"},
// {"name":"Montenegro","code":"ME","emoji":"🇲🇪","unicode":"U+1F1F2 U+1F1EA","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ME.svg"},
// {"name":"St. Martin","code":"MF","emoji":"🇲🇫","unicode":"U+1F1F2 U+1F1EB","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MF.svg"},
// {"name":"Madagascar","code":"MG","emoji":"🇲🇬","unicode":"U+1F1F2 U+1F1EC","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MG.svg"},
// {"name":"Marshall Islands","code":"MH","emoji":"🇲🇭","unicode":"U+1F1F2 U+1F1ED","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MH.svg"},
// {"name":"North Macedonia","code":"MK","emoji":"🇲🇰","unicode":"U+1F1F2 U+1F1F0","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MK.svg"},
// {"name":"Mali","code":"ML","emoji":"🇲🇱","unicode":"U+1F1F2 U+1F1F1","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ML.svg"},
// {"name":"Myanmar (Burma)","code":"MM","emoji":"🇲🇲","unicode":"U+1F1F2 U+1F1F2","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MM.svg"},
// {"name":"Mongolia","code":"MN","emoji":"🇲🇳","unicode":"U+1F1F2 U+1F1F3","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MN.svg"},
// {"name":"Macao SAR China","code":"MO","emoji":"🇲🇴","unicode":"U+1F1F2 U+1F1F4","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MO.svg"},
// {"name":"Northern Mariana Islands","code":"MP","emoji":"🇲🇵","unicode":"U+1F1F2 U+1F1F5","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MP.svg"},
// {"name":"Martinique","code":"MQ","emoji":"🇲🇶","unicode":"U+1F1F2 U+1F1F6","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MQ.svg"},
// {"name":"Mauritania","code":"MR","emoji":"🇲🇷","unicode":"U+1F1F2 U+1F1F7","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MR.svg"},
// {"name":"Montserrat","code":"MS","emoji":"🇲🇸","unicode":"U+1F1F2 U+1F1F8","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MS.svg"},
// {"name":"Malta","code":"MT","emoji":"🇲🇹","unicode":"U+1F1F2 U+1F1F9","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MT.svg"},
// {"name":"Mauritius","code":"MU","emoji":"🇲🇺","unicode":"U+1F1F2 U+1F1FA","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MU.svg"},
// {"name":"Maldives","code":"MV","emoji":"🇲🇻","unicode":"U+1F1F2 U+1F1FB","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MV.svg"},
// {"name":"Malawi","code":"MW","emoji":"🇲🇼","unicode":"U+1F1F2 U+1F1FC","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MW.svg"},
// {"name":"Mexico","code":"MX","emoji":"🇲🇽","unicode":"U+1F1F2 U+1F1FD","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MX.svg"},
// {"name":"Malaysia","code":"MY","emoji":"🇲🇾","unicode":"U+1F1F2 U+1F1FE","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MY.svg"},
// {"name":"Mozambique","code":"MZ","emoji":"🇲🇿","unicode":"U+1F1F2 U+1F1FF","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MZ.svg"},
// {"name":"Namibia","code":"NA","emoji":"🇳🇦","unicode":"U+1F1F3 U+1F1E6","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NA.svg"},
// {"name":"New Caledonia","code":"NC","emoji":"🇳🇨","unicode":"U+1F1F3 U+1F1E8","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NC.svg"},
// {"name":"Niger","code":"NE","emoji":"🇳🇪","unicode":"U+1F1F3 U+1F1EA","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NE.svg"},
// {"name":"Norfolk Island","code":"NF","emoji":"🇳🇫","unicode":"U+1F1F3 U+1F1EB","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NF.svg"},
// {"name":"Nigeria","code":"NG","emoji":"🇳🇬","unicode":"U+1F1F3 U+1F1EC","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NG.svg"},
// {"name":"Nicaragua","code":"NI","emoji":"🇳🇮","unicode":"U+1F1F3 U+1F1EE","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NI.svg"},
// {"name":"Netherlands","code":"NL","emoji":"🇳🇱","unicode":"U+1F1F3 U+1F1F1","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NL.svg"},
// {"name":"Norway","code":"NO","emoji":"🇳🇴","unicode":"U+1F1F3 U+1F1F4","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NO.svg"},
// {"name":"Nepal","code":"NP","emoji":"🇳🇵","unicode":"U+1F1F3 U+1F1F5","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NP.svg"},
// {"name":"Nauru","code":"NR","emoji":"🇳🇷","unicode":"U+1F1F3 U+1F1F7","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NR.svg"},
// {"name":"Niue","code":"NU","emoji":"🇳🇺","unicode":"U+1F1F3 U+1F1FA","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NU.svg"},
// {"name":"New Zealand","code":"NZ","emoji":"🇳🇿","unicode":"U+1F1F3 U+1F1FF","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NZ.svg"},
// {"name":"Oman","code":"OM","emoji":"🇴🇲","unicode":"U+1F1F4 U+1F1F2","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/OM.svg"},
// {"name":"Panama","code":"PA","emoji":"🇵🇦","unicode":"U+1F1F5 U+1F1E6","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PA.svg"},
// {"name":"Peru","code":"PE","emoji":"🇵🇪","unicode":"U+1F1F5 U+1F1EA","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PE.svg"},
// {"name":"French Polynesia","code":"PF","emoji":"🇵🇫","unicode":"U+1F1F5 U+1F1EB","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PF.svg"},
// {"name":"Papua New Guinea","code":"PG","emoji":"🇵🇬","unicode":"U+1F1F5 U+1F1EC","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PG.svg"},
// {"name":"Philippines","code":"PH","emoji":"🇵🇭","unicode":"U+1F1F5 U+1F1ED","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PH.svg"},
// {"name":"Pakistan","code":"PK","emoji":"🇵🇰","unicode":"U+1F1F5 U+1F1F0","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PK.svg"},
// {"name":"Poland","code":"PL","emoji":"🇵🇱","unicode":"U+1F1F5 U+1F1F1","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PL.svg"},
// {"name":"St. Pierre & Miquelon","code":"PM","emoji":"🇵🇲","unicode":"U+1F1F5 U+1F1F2","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PM.svg"},
// {"name":"Pitcairn Islands","code":"PN","emoji":"🇵🇳","unicode":"U+1F1F5 U+1F1F3","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PN.svg"},
// {"name":"Puerto Rico","code":"PR","emoji":"🇵🇷","unicode":"U+1F1F5 U+1F1F7","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PR.svg"},
// {"name":"Palestinian Territories","code":"PS","emoji":"🇵🇸","unicode":"U+1F1F5 U+1F1F8","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PS.svg"},
// {"name":"Portugal","code":"PT","emoji":"🇵🇹","unicode":"U+1F1F5 U+1F1F9","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PT.svg"},
// {"name":"Palau","code":"PW","emoji":"🇵🇼","unicode":"U+1F1F5 U+1F1FC","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PW.svg"},
// {"name":"Paraguay","code":"PY","emoji":"🇵🇾","unicode":"U+1F1F5 U+1F1FE","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PY.svg"},
// {"name":"Qatar","code":"QA","emoji":"🇶🇦","unicode":"U+1F1F6 U+1F1E6","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/QA.svg"},
// {"name":"Réunion","code":"RE","emoji":"🇷🇪","unicode":"U+1F1F7 U+1F1EA","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RE.svg"},
// {"name":"Romania","code":"RO","emoji":"🇷🇴","unicode":"U+1F1F7 U+1F1F4","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RO.svg"},
// {"name":"Serbia","code":"RS","emoji":"🇷🇸","unicode":"U+1F1F7 U+1F1F8","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RS.svg"},
// {"name":"Russia","code":"RU","emoji":"🇷🇺","unicode":"U+1F1F7 U+1F1FA","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RU.svg"},
// {"name":"Rwanda","code":"RW","emoji":"🇷🇼","unicode":"U+1F1F7 U+1F1FC","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RW.svg"},
// {"name":"Saudi Arabia","code":"SA","emoji":"🇸🇦","unicode":"U+1F1F8 U+1F1E6","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SA.svg"},
// {"name":"Solomon Islands","code":"SB","emoji":"🇸🇧","unicode":"U+1F1F8 U+1F1E7","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SB.svg"},
// {"name":"Seychelles","code":"SC","emoji":"🇸🇨","unicode":"U+1F1F8 U+1F1E8","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SC.svg"},
// {"name":"Sudan","code":"SD","emoji":"🇸🇩","unicode":"U+1F1F8 U+1F1E9","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SD.svg"},
// {"name":"Sweden","code":"SE","emoji":"🇸🇪","unicode":"U+1F1F8 U+1F1EA","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SE.svg"},
// {"name":"Singapore","code":"SG","emoji":"🇸🇬","unicode":"U+1F1F8 U+1F1EC","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SG.svg"},
// {"name":"St. Helena","code":"SH","emoji":"🇸🇭","unicode":"U+1F1F8 U+1F1ED","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SH.svg"},
// {"name":"Slovenia","code":"SI","emoji":"🇸🇮","unicode":"U+1F1F8 U+1F1EE","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SI.svg"},
// {"name":"Svalbard & Jan Mayen","code":"SJ","emoji":"🇸🇯","unicode":"U+1F1F8 U+1F1EF","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SJ.svg"},
// {"name":"Slovakia","code":"SK","emoji":"🇸🇰","unicode":"U+1F1F8 U+1F1F0","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SK.svg"},
// {"name":"Sierra Leone","code":"SL","emoji":"🇸🇱","unicode":"U+1F1F8 U+1F1F1","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SL.svg"},
// {"name":"San Marino","code":"SM","emoji":"🇸🇲","unicode":"U+1F1F8 U+1F1F2","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SM.svg"},
// {"name":"Senegal","code":"SN","emoji":"🇸🇳","unicode":"U+1F1F8 U+1F1F3","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SN.svg"},
// {"name":"Somalia","code":"SO","emoji":"🇸🇴","unicode":"U+1F1F8 U+1F1F4","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SO.svg"},
// {"name":"Suriname","code":"SR","emoji":"🇸🇷","unicode":"U+1F1F8 U+1F1F7","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SR.svg"},
// {"name":"South Sudan","code":"SS","emoji":"🇸🇸","unicode":"U+1F1F8 U+1F1F8","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SS.svg"},
// {"name":"São Tomé & Príncipe","code":"ST","emoji":"🇸🇹","unicode":"U+1F1F8 U+1F1F9","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ST.svg"},
// {"name":"El Salvador","code":"SV","emoji":"🇸🇻","unicode":"U+1F1F8 U+1F1FB","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SV.svg"},
// {"name":"Sint Maarten","code":"SX","emoji":"🇸🇽","unicode":"U+1F1F8 U+1F1FD","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SX.svg"},
// {"name":"Syria","code":"SY","emoji":"🇸🇾","unicode":"U+1F1F8 U+1F1FE","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SY.svg"},
// {"name":"Eswatini","code":"SZ","emoji":"🇸🇿","unicode":"U+1F1F8 U+1F1FF","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SZ.svg"},
// {"name":"Tristan da Cunha","code":"TA","emoji":"🇹🇦","unicode":"U+1F1F9 U+1F1E6","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TA.svg"},
// {"name":"Turks & Caicos Islands","code":"TC","emoji":"🇹🇨","unicode":"U+1F1F9 U+1F1E8","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TC.svg"},
// {"name":"Chad","code":"TD","emoji":"🇹🇩","unicode":"U+1F1F9 U+1F1E9","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TD.svg"},
// {"name":"French Southern Territories","code":"TF","emoji":"🇹🇫","unicode":"U+1F1F9 U+1F1EB","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TF.svg"},
// {"name":"Togo","code":"TG","emoji":"🇹🇬","unicode":"U+1F1F9 U+1F1EC","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TG.svg"},
// {"name":"Thailand","code":"TH","emoji":"🇹🇭","unicode":"U+1F1F9 U+1F1ED","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TH.svg"},
// {"name":"Tajikistan","code":"TJ","emoji":"🇹🇯","unicode":"U+1F1F9 U+1F1EF","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TJ.svg"},
// {"name":"Tokelau","code":"TK","emoji":"🇹🇰","unicode":"U+1F1F9 U+1F1F0","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TK.svg"},
// {"name":"Timor-Leste","code":"TL","emoji":"🇹🇱","unicode":"U+1F1F9 U+1F1F1","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TL.svg"},
// {"name":"Turkmenistan","code":"TM","emoji":"🇹🇲","unicode":"U+1F1F9 U+1F1F2","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TM.svg"},
// {"name":"Tunisia","code":"TN","emoji":"🇹🇳","unicode":"U+1F1F9 U+1F1F3","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TN.svg"},
// {"name":"Tonga","code":"TO","emoji":"🇹🇴","unicode":"U+1F1F9 U+1F1F4","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TO.svg"},
// {"name":"Turkey","code":"TR","emoji":"🇹🇷","unicode":"U+1F1F9 U+1F1F7","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TR.svg"},
// {"name":"Trinidad & Tobago","code":"TT","emoji":"🇹🇹","unicode":"U+1F1F9 U+1F1F9","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TT.svg"},
// {"name":"Tuvalu","code":"TV","emoji":"🇹🇻","unicode":"U+1F1F9 U+1F1FB","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TV.svg"},
// {"name":"Taiwan","code":"TW","emoji":"🇹🇼","unicode":"U+1F1F9 U+1F1FC","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TW.svg"},
// {"name":"Tanzania","code":"TZ","emoji":"🇹🇿","unicode":"U+1F1F9 U+1F1FF","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TZ.svg"},
// {"name":"Ukraine","code":"UA","emoji":"🇺🇦","unicode":"U+1F1FA U+1F1E6","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UA.svg"},
// {"name":"Uganda","code":"UG","emoji":"🇺🇬","unicode":"U+1F1FA U+1F1EC","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UG.svg"},
// {"name":"U.S. Outlying Islands","code":"UM","emoji":"🇺🇲","unicode":"U+1F1FA U+1F1F2","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UM.svg"},
// {"name":"United Nations","code":"UN","emoji":"🇺🇳","unicode":"U+1F1FA U+1F1F3","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UN.svg"},
// {"name":"United States","code":"US","emoji":"🇺🇸","unicode":"U+1F1FA U+1F1F8","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/US.svg"},
// {"name":"Uruguay","code":"UY","emoji":"🇺🇾","unicode":"U+1F1FA U+1F1FE","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UY.svg"},
// {"name":"Uzbekistan","code":"UZ","emoji":"🇺🇿","unicode":"U+1F1FA U+1F1FF","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UZ.svg"},
// {"name":"Vatican City","code":"VA","emoji":"🇻🇦","unicode":"U+1F1FB U+1F1E6","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VA.svg"},
// {"name":"St. Vincent & Grenadines","code":"VC","emoji":"🇻🇨","unicode":"U+1F1FB U+1F1E8","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VC.svg"},
// {"name":"Venezuela","code":"VE","emoji":"🇻🇪","unicode":"U+1F1FB U+1F1EA","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VE.svg"},
// {"name":"British Virgin Islands","code":"VG","emoji":"🇻🇬","unicode":"U+1F1FB U+1F1EC","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VG.svg"},
// {"name":"U.S. Virgin Islands","code":"VI","emoji":"🇻🇮","unicode":"U+1F1FB U+1F1EE","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VI.svg"},
// {"name":"Vietnam","code":"VN","emoji":"🇻🇳","unicode":"U+1F1FB U+1F1F3","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VN.svg"},
// {"name":"Vanuatu","code":"VU","emoji":"🇻🇺","unicode":"U+1F1FB U+1F1FA","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VU.svg"},
// {"name":"Wallis & Futuna","code":"WF","emoji":"🇼🇫","unicode":"U+1F1FC U+1F1EB","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/WF.svg"},
// {"name":"Samoa","code":"WS","emoji":"🇼🇸","unicode":"U+1F1FC U+1F1F8","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/WS.svg"},
// {"name":"Kosovo","code":"XK","emoji":"🇽🇰","unicode":"U+1F1FD U+1F1F0","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/XK.svg"},
// {"name":"Yemen","code":"YE","emoji":"🇾🇪","unicode":"U+1F1FE U+1F1EA","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/YE.svg"},
// {"name":"Mayotte","code":"YT","emoji":"🇾🇹","unicode":"U+1F1FE U+1F1F9","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/YT.svg"},
// {"name":"South Africa","code":"ZA","emoji":"🇿🇦","unicode":"U+1F1FF U+1F1E6","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZA.svg"},
// {"name":"Zambia","code":"ZM","emoji":"🇿🇲","unicode":"U+1F1FF U+1F1F2","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZM.svg"},
// {"name":"Zimbabwe","code":"ZW","emoji":"🇿🇼","unicode":"U+1F1FF U+1F1FC","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZW.svg"},
// {"name":"England","code":"ENGLAND","emoji":"🏴󠁧󠁢󠁥󠁮󠁧󠁿","unicode":"U+1F3F4 U+E0067 U+E0062 U+E0065 U+E006E U+E0067 U+E007F","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ENGLAND.svg"},
// {"name":"Scotland","code":"SCOTLAND","emoji":"🏴󠁧󠁢󠁳󠁣󠁴󠁿","unicode":"U+1F3F4 U+E0067 U+E0062 U+E0073 U+E0063 U+E0074 U+E007F","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SCOTLAND.svg"},
// {"name":"Wales","code":"WALES","emoji":"🏴󠁧󠁢󠁷󠁬󠁳󠁿","unicode":"U+1F3F4 U+E0067 U+E0062 U+E0077 U+E006C U+E0073 U+E007F","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/WALES.svg"}]

var countries = [
    {
        "name": "Afghanistan",
        "dialCode": "+93",
        "isoCode": "AF",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/af.svg"
    },
    {
        "name": "Aland Islands",
        "dialCode": "+358",
        "isoCode": "AX",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ax.svg"
    },
    {
        "name": "Albania",
        "dialCode": "+355",
        "isoCode": "AL",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/al.svg"
    },
    {
        "name": "Algeria",
        "dialCode": "+213",
        "isoCode": "DZ",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/dz.svg"
    },
    {
        "name": "American Samoa",
        "dialCode": "+1684",
        "isoCode": "AS",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/as.svg"
    },
    {
        "name": "Andorra",
        "dialCode": "+376",
        "isoCode": "AD",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ad.svg"
    },
    {
        "name": "Angola",
        "dialCode": "+244",
        "isoCode": "AO",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ao.svg"
    },
    {
        "name": "Anguilla",
        "dialCode": "+1264",
        "isoCode": "AI",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ai.svg"
    },
    {
        "name": "Antarctica",
        "dialCode": "+672",
        "isoCode": "AQ",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/aq.svg"
    },
    {
        "name": "Antigua and Barbuda",
        "dialCode": "+1268",
        "isoCode": "AG",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ag.svg"
    },
    {
        "name": "Argentina",
        "dialCode": "+54",
        "isoCode": "AR",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ar.svg"
    },
    {
        "name": "Armenia",
        "dialCode": "+374",
        "isoCode": "AM",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/am.svg"
    },
    {
        "name": "Aruba",
        "dialCode": "+297",
        "isoCode": "AW",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/aw.svg"
    },
    {
        "name": "Ascension Island",
        "dialCode": "+247",
        "isoCode": "AC",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ac.svg"
    },
    {
        "name": "Australia",
        "dialCode": "+61",
        "isoCode": "AU",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/au.svg"
    },
    {
        "name": "Austria",
        "dialCode": "+43",
        "isoCode": "AT",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/at.svg"
    },
    {
        "name": "Azerbaijan",
        "dialCode": "+994",
        "isoCode": "AZ",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/az.svg"
    },
    {
        "name": "Bahamas",
        "dialCode": "+1242",
        "isoCode": "BS",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/bs.svg"
    },
    {
        "name": "Bahrain",
        "dialCode": "+973",
        "isoCode": "BH",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/bh.svg"
    },
    {
        "name": "Bangladesh",
        "dialCode": "+880",
        "isoCode": "BD",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/bd.svg"
    },
    {
        "name": "Barbados",
        "dialCode": "+1246",
        "isoCode": "BB",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/bb.svg"
    },
    {
        "name": "Belarus",
        "dialCode": "+375",
        "isoCode": "BY",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/by.svg"
    },
    {
        "name": "Belgium",
        "dialCode": "+32",
        "isoCode": "BE",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/be.svg"
    },
    {
        "name": "Belize",
        "dialCode": "+501",
        "isoCode": "BZ",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/bz.svg"
    },
    {
        "name": "Benin",
        "dialCode": "+229",
        "isoCode": "BJ",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/bj.svg"
    },
    {
        "name": "Bermuda",
        "dialCode": "+1441",
        "isoCode": "BM",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/bm.svg"
    },
    {
        "name": "Bhutan",
        "dialCode": "+975",
        "isoCode": "BT",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/bt.svg"
    },
    {
        "name": "Bolivia",
        "dialCode": "+591",
        "isoCode": "BO",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/bo.svg"
    },
    {
        "name": "Bosnia and Herzegovina",
        "dialCode": "+387",
        "isoCode": "BA",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ba.svg"
    },
    {
        "name": "Botswana",
        "dialCode": "+267",
        "isoCode": "BW",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/bw.svg"
    },
    {
        "name": "Brazil",
        "dialCode": "+55",
        "isoCode": "BR",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/br.svg"
    },
    {
        "name": "British Indian Ocean Territory",
        "dialCode": "+246",
        "isoCode": "IO",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/io.svg"
    },
    {
        "name": "Brunei Darussalam",
        "dialCode": "+673",
        "isoCode": "BN",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/bn.svg"
    },
    {
        "name": "Bulgaria",
        "dialCode": "+359",
        "isoCode": "BG",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/bg.svg"
    },
    {
        "name": "Burkina Faso",
        "dialCode": "+226",
        "isoCode": "BF",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/bf.svg"
    },
    {
        "name": "Burundi",
        "dialCode": "+257",
        "isoCode": "BI",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/bi.svg"
    },
    {
        "name": "Cambodia",
        "dialCode": "+855",
        "isoCode": "KH",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/kh.svg"
    },
    {
        "name": "Cameroon",
        "dialCode": "+237",
        "isoCode": "CM",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/cm.svg"
    },
    {
        "name": "Canada",
        "dialCode": "+1",
        "isoCode": "CA",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ca.svg"
    },
    {
        "name": "Cape Verde",
        "dialCode": "+238",
        "isoCode": "CV",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/cv.svg"
    },
    {
        "name": "Cayman Islands",
        "dialCode": "+1345",
        "isoCode": "KY",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ky.svg"
    },
    {
        "name": "Central African Republic",
        "dialCode": "+236",
        "isoCode": "CF",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/cf.svg"
    },
    {
        "name": "Chad",
        "dialCode": "+235",
        "isoCode": "TD",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/td.svg"
    },
    {
        "name": "Chile",
        "dialCode": "+56",
        "isoCode": "CL",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/cl.svg"
    },
    {
        "name": "China",
        "dialCode": "+86",
        "isoCode": "CN",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/cn.svg"
    },
    {
        "name": "Christmas Island",
        "dialCode": "+61",
        "isoCode": "CX",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/cx.svg"
    },
    {
        "name": "Cocos (Keeling) Islands",
        "dialCode": "+61",
        "isoCode": "CC",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/cc.svg"
    },
    {
        "name": "Colombia",
        "dialCode": "+57",
        "isoCode": "CO",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/co.svg"
    },
    {
        "name": "Comoros",
        "dialCode": "+269",
        "isoCode": "KM",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/km.svg"
    },
    {
        "name": "Congo",
        "dialCode": "+242",
        "isoCode": "CG",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/cg.svg"
    },
    {
        "name": "Cook Islands",
        "dialCode": "+682",
        "isoCode": "CK",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ck.svg"
    },
    {
        "name": "Costa Rica",
        "dialCode": "+506",
        "isoCode": "CR",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/cr.svg"
    },
    {
        "name": "Croatia",
        "dialCode": "+385",
        "isoCode": "HR",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/hr.svg"
    },
    {
        "name": "Cuba",
        "dialCode": "+53",
        "isoCode": "CU",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/cu.svg"
    },
    {
        "name": "Cyprus",
        "dialCode": "+357",
        "isoCode": "CY",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/cy.svg"
    },
    {
        "name": "Czech Republic",
        "dialCode": "+420",
        "isoCode": "CZ",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/cz.svg"
    },
    {
        "name": "Democratic Republic of the Congo",
        "dialCode": "+243",
        "isoCode": "CD",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/cd.svg"
    },
    {
        "name": "Denmark",
        "dialCode": "+45",
        "isoCode": "DK",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/dk.svg"
    },
    {
        "name": "Djibouti",
        "dialCode": "+253",
        "isoCode": "DJ",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/dj.svg"
    },
    {
        "name": "Dominica",
        "dialCode": "+1767",
        "isoCode": "DM",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/dm.svg"
    },
    {
        "name": "Dominican Republic",
        "dialCode": "+1849",
        "isoCode": "DO",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/do.svg"
    },
    {
        "name": "Ecuador",
        "dialCode": "+593",
        "isoCode": "EC",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ec.svg"
    },
    {
        "name": "Egypt",
        "dialCode": "+20",
        "isoCode": "EG",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/eg.svg"
    },
    {
        "name": "El Salvador",
        "dialCode": "+503",
        "isoCode": "SV",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/sv.svg"
    },
    {
        "name": "Equatorial Guinea",
        "dialCode": "+240",
        "isoCode": "GQ",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/gq.svg"
    },
    {
        "name": "Eritrea",
        "dialCode": "+291",
        "isoCode": "ER",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/er.svg"
    },
    {
        "name": "Estonia",
        "dialCode": "+372",
        "isoCode": "EE",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ee.svg"
    },
    {
        "name": "Eswatini",
        "dialCode": "+268",
        "isoCode": "SZ",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/sz.svg"
    },
    {
        "name": "Ethiopia",
        "dialCode": "+251",
        "isoCode": "ET",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/et.svg"
    },
    {
        "name": "Falkland Islands (Malvinas)",
        "dialCode": "+500",
        "isoCode": "FK",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/fk.svg"
    },
    {
        "name": "Faroe Islands",
        "dialCode": "+298",
        "isoCode": "FO",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/fo.svg"
    },
    {
        "name": "Fiji",
        "dialCode": "+679",
        "isoCode": "FJ",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/fj.svg"
    },
    {
        "name": "Finland",
        "dialCode": "+358",
        "isoCode": "FI",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/fi.svg"
    },
    {
        "name": "France",
        "dialCode": "+33",
        "isoCode": "FR",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/fr.svg"
    },
    {
        "name": "French Guiana",
        "dialCode": "+594",
        "isoCode": "GF",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/gf.svg"
    },
    {
        "name": "French Polynesia",
        "dialCode": "+689",
        "isoCode": "PF",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/pf.svg"
    },
    {
        "name": "Gabon",
        "dialCode": "+241",
        "isoCode": "GA",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ga.svg"
    },
    {
        "name": "Gambia",
        "dialCode": "+220",
        "isoCode": "GM",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/gm.svg"
    },
    {
        "name": "Georgia",
        "dialCode": "+995",
        "isoCode": "GE",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ge.svg"
    },
    {
        "name": "Germany",
        "dialCode": "+49",
        "isoCode": "DE",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/de.svg"
    },
    {
        "name": "Ghana",
        "dialCode": "+233",
        "isoCode": "GH",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/gh.svg"
    },
    {
        "name": "Gibraltar",
        "dialCode": "+350",
        "isoCode": "GI",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/gi.svg"
    },
    {
        "name": "Greece",
        "dialCode": "+30",
        "isoCode": "GR",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/gr.svg"
    },
    {
        "name": "Greenland",
        "dialCode": "+299",
        "isoCode": "GL",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/gl.svg"
    },
    {
        "name": "Grenada",
        "dialCode": "+1473",
        "isoCode": "GD",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/gd.svg"
    },
    {
        "name": "Guadeloupe",
        "dialCode": "+590",
        "isoCode": "GP",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/gp.svg"
    },
    {
        "name": "Guam",
        "dialCode": "+1671",
        "isoCode": "GU",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/gu.svg"
    },
    {
        "name": "Guatemala",
        "dialCode": "+502",
        "isoCode": "GT",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/gt.svg"
    },
    {
        "name": "Guernsey",
        "dialCode": "+44-1481",
        "isoCode": "GG",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/gg.svg"
    },
    {
        "name": "Guinea",
        "dialCode": "+224",
        "isoCode": "GN",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/gn.svg"
    },
    {
        "name": "Guinea-Bissau",
        "dialCode": "+245",
        "isoCode": "GW",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/gw.svg"
    },
    {
        "name": "Guyana",
        "dialCode": "+592",
        "isoCode": "GY",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/gy.svg"
    },
    {
        "name": "Haiti",
        "dialCode": "+509",
        "isoCode": "HT",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ht.svg"
    },
    {
        "name": "Holy See (Vatican City State)",
        "dialCode": "+379",
        "isoCode": "VA",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/va.svg"
    },
    {
        "name": "Honduras",
        "dialCode": "+504",
        "isoCode": "HN",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/hn.svg"
    },
    {
        "name": "Hong Kong",
        "dialCode": "+852",
        "isoCode": "HK",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/hk.svg"
    },
    {
        "name": "Hungary",
        "dialCode": "+36",
        "isoCode": "HU",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/hu.svg"
    },
    {
        "name": "Iceland",
        "dialCode": "+354",
        "isoCode": "IS",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/is.svg"
    },
    {
        "name": "India",
        "dialCode": "+91",
        "isoCode": "IN",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/in.svg"
    },
    {
        "name": "Indonesia",
        "dialCode": "+62",
        "isoCode": "ID",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/id.svg"
    },
    {
        "name": "Iran",
        "dialCode": "+98",
        "isoCode": "IR",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ir.svg"
    },
    {
        "name": "Iraq",
        "dialCode": "+964",
        "isoCode": "IQ",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/iq.svg"
    },
    {
        "name": "Ireland",
        "dialCode": "+353",
        "isoCode": "IE",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ie.svg"
    },
    {
        "name": "Isle of Man",
        "dialCode": "+44-1624",
        "isoCode": "IM",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/im.svg"
    },
    {
        "name": "Israel",
        "dialCode": "+972",
        "isoCode": "IL",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/il.svg"
    },
    {
        "name": "Italy",
        "dialCode": "+39",
        "isoCode": "IT",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/it.svg"
    },
    {
        "name": "Ivory Coast / Cote d'Ivoire",
        "dialCode": "+225",
        "isoCode": "CI",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ci.svg"
    },
    {
        "name": "Jamaica",
        "dialCode": "+1876",
        "isoCode": "JM",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/jm.svg"
    },
    {
        "name": "Japan",
        "dialCode": "+81",
        "isoCode": "JP",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/jp.svg"
    },
    {
        "name": "Jersey",
        "dialCode": "+44-1534",
        "isoCode": "JE",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/je.svg"
    },
    {
        "name": "Jordan",
        "dialCode": "+962",
        "isoCode": "JO",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/jo.svg"
    },
    {
        "name": "Kazakhstan",
        "dialCode": "+77",
        "isoCode": "KZ",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/kz.svg"
    },
    {
        "name": "Kenya",
        "dialCode": "+254",
        "isoCode": "KE",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ke.svg"
    },
    {
        "name": "Kiribati",
        "dialCode": "+686",
        "isoCode": "KI",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ki.svg"
    },
    {
        "name": "Korea, Democratic People's Republic of Korea",
        "dialCode": "+850",
        "isoCode": "KP",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/kp.svg"
    },
    {
        "name": "Korea, Republic of South Korea",
        "dialCode": "+82",
        "isoCode": "KR",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/kr.svg"
    },
    {
        "name": "Kosovo",
        "dialCode": "+383",
        "isoCode": "XK",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/xk.svg"
    },
    {
        "name": "Kuwait",
        "dialCode": "+965",
        "isoCode": "KW",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/kw.svg"
    },
    {
        "name": "Kyrgyzstan",
        "dialCode": "+996",
        "isoCode": "KG",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/kg.svg"
    },
    {
        "name": "Laos",
        "dialCode": "+856",
        "isoCode": "LA",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/la.svg"
    },
    {
        "name": "Latvia",
        "dialCode": "+371",
        "isoCode": "LV",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/lv.svg"
    },
    {
        "name": "Lebanon",
        "dialCode": "+961",
        "isoCode": "LB",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/lb.svg"
    },
    {
        "name": "Lesotho",
        "dialCode": "+266",
        "isoCode": "LS",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ls.svg"
    },
    {
        "name": "Liberia",
        "dialCode": "+231",
        "isoCode": "LR",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/lr.svg"
    },
    {
        "name": "Libya",
        "dialCode": "+218",
        "isoCode": "LY",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ly.svg"
    },
    {
        "name": "Liechtenstein",
        "dialCode": "+423",
        "isoCode": "LI",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/li.svg"
    },
    {
        "name": "Lithuania",
        "dialCode": "+370",
        "isoCode": "LT",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/lt.svg"
    },
    {
        "name": "Luxembourg",
        "dialCode": "+352",
        "isoCode": "LU",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/lu.svg"
    },
    {
        "name": "Macau",
        "dialCode": "+853",
        "isoCode": "MO",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/mo.svg"
    },
    {
        "name": "Madagascar",
        "dialCode": "+261",
        "isoCode": "MG",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/mg.svg"
    },
    {
        "name": "Malawi",
        "dialCode": "+265",
        "isoCode": "MW",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/mw.svg"
    },
    {
        "name": "Malaysia",
        "dialCode": "+60",
        "isoCode": "MY",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/my.svg"
    },
    {
        "name": "Maldives",
        "dialCode": "+960",
        "isoCode": "MV",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/mv.svg"
    },
    {
        "name": "Mali",
        "dialCode": "+223",
        "isoCode": "ML",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ml.svg"
    },
    {
        "name": "Malta",
        "dialCode": "+356",
        "isoCode": "MT",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/mt.svg"
    },
    {
        "name": "Marshall Islands",
        "dialCode": "+692",
        "isoCode": "MH",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/mh.svg"
    },
    {
        "name": "Martinique",
        "dialCode": "+596",
        "isoCode": "MQ",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/mq.svg"
    },
    {
        "name": "Mauritania",
        "dialCode": "+222",
        "isoCode": "MR",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/mr.svg"
    },
    {
        "name": "Mauritius",
        "dialCode": "+230",
        "isoCode": "MU",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/mu.svg"
    },
    {
        "name": "Mayotte",
        "dialCode": "+262",
        "isoCode": "YT",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/yt.svg"
    },
    {
        "name": "Mexico",
        "dialCode": "+52",
        "isoCode": "MX",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/mx.svg"
    },
    {
        "name": "Micronesia, Federated States of Micronesia",
        "dialCode": "+691",
        "isoCode": "FM",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/fm.svg"
    },
    {
        "name": "Moldova",
        "dialCode": "+373",
        "isoCode": "MD",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/md.svg"
    },
    {
        "name": "Monaco",
        "dialCode": "+377",
        "isoCode": "MC",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/mc.svg"
    },
    {
        "name": "Mongolia",
        "dialCode": "+976",
        "isoCode": "MN",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/mn.svg"
    },
    {
        "name": "Montenegro",
        "dialCode": "+382",
        "isoCode": "ME",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/me.svg"
    },
    {
        "name": "Montserrat",
        "dialCode": "+1664",
        "isoCode": "MS",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ms.svg"
    },
    {
        "name": "Morocco",
        "dialCode": "+212",
        "isoCode": "MA",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ma.svg"
    },
    {
        "name": "Mozambique",
        "dialCode": "+258",
        "isoCode": "MZ",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/mz.svg"
    },
    {
        "name": "Myanmar",
        "dialCode": "+95",
        "isoCode": "MM",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/mm.svg"
    },
    {
        "name": "Namibia",
        "dialCode": "+264",
        "isoCode": "NA",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/na.svg"
    },
    {
        "name": "Nauru",
        "dialCode": "+674",
        "isoCode": "NR",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/nr.svg"
    },
    {
        "name": "Nepal",
        "dialCode": "+977",
        "isoCode": "NP",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/np.svg"
    },
    {
        "name": "Netherlands",
        "dialCode": "+31",
        "isoCode": "NL",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/nl.svg"
    },
    {
        "name": "Netherlands Antilles",
        "dialCode": "+599",
        "isoCode": "AN",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/an.svg"
    },
    {
        "name": "New Caledonia",
        "dialCode": "+687",
        "isoCode": "NC",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/nc.svg"
    },
    {
        "name": "New Zealand",
        "dialCode": "+64",
        "isoCode": "NZ",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/nz.svg"
    },
    {
        "name": "Nicaragua",
        "dialCode": "+505",
        "isoCode": "NI",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ni.svg"
    },
    {
        "name": "Niger",
        "dialCode": "+227",
        "isoCode": "NE",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ne.svg"
    },
    {
        "name": "Nigeria",
        "dialCode": "+234",
        "isoCode": "NG",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ng.svg"
    },
    {
        "name": "Niue",
        "dialCode": "+683",
        "isoCode": "NU",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/nu.svg"
    },
    {
        "name": "Norfolk Island",
        "dialCode": "+672",
        "isoCode": "NF",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/nf.svg"
    },
    {
        "name": "North Macedonia",
        "dialCode": "+389",
        "isoCode": "MK",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/mk.svg"
    },
    {
        "name": "Northern Mariana Islands",
        "dialCode": "+1670",
        "isoCode": "MP",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/mp.svg"
    },
    {
        "name": "Norway",
        "dialCode": "+47",
        "isoCode": "NO",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/no.svg"
    },
    {
        "name": "Oman",
        "dialCode": "+968",
        "isoCode": "OM",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/om.svg"
    },
    {
        "name": "Pakistan",
        "dialCode": "+92",
        "isoCode": "PK",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/pk.svg"
    },
    {
        "name": "Palau",
        "dialCode": "+680",
        "isoCode": "PW",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/pw.svg"
    },
    {
        "name": "Palestine",
        "dialCode": "+970",
        "isoCode": "PS",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ps.svg"
    },
    {
        "name": "Panama",
        "dialCode": "+507",
        "isoCode": "PA",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/pa.svg"
    },
    {
        "name": "Papua New Guinea",
        "dialCode": "+675",
        "isoCode": "PG",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/pg.svg"
    },
    {
        "name": "Paraguay",
        "dialCode": "+595",
        "isoCode": "PY",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/py.svg"
    },
    {
        "name": "Peru",
        "dialCode": "+51",
        "isoCode": "PE",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/pe.svg"
    },
    {
        "name": "Philippines",
        "dialCode": "+63",
        "isoCode": "PH",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ph.svg"
    },
    {
        "name": "Pitcairn",
        "dialCode": "+872",
        "isoCode": "PN",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/pn.svg"
    },
    {
        "name": "Poland",
        "dialCode": "+48",
        "isoCode": "PL",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/pl.svg"
    },
    {
        "name": "Portugal",
        "dialCode": "+351",
        "isoCode": "PT",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/pt.svg"
    },
    {
        "name": "Puerto Rico",
        "dialCode": "+1939",
        "isoCode": "PR",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/pr.svg"
    },
    {
        "name": "Qatar",
        "dialCode": "+974",
        "isoCode": "QA",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/qa.svg"
    },
    {
        "name": "Reunion",
        "dialCode": "+262",
        "isoCode": "RE",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/re.svg"
    },
    {
        "name": "Romania",
        "dialCode": "+40",
        "isoCode": "RO",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ro.svg"
    },
    {
        "name": "Russia",
        "dialCode": "+7",
        "isoCode": "RU",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ru.svg"
    },
    {
        "name": "Rwanda",
        "dialCode": "+250",
        "isoCode": "RW",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/rw.svg"
    },
    {
        "name": "Saint Barthelemy",
        "dialCode": "+590",
        "isoCode": "BL",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/bl.svg"
    },
    {
        "name": "Saint Helena, Ascension and Tristan Da Cunha",
        "dialCode": "+290",
        "isoCode": "SH",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/sh.svg"
    },
    {
        "name": "Saint Kitts and Nevis",
        "dialCode": "+1869",
        "isoCode": "KN",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/kn.svg"
    },
    {
        "name": "Saint Lucia",
        "dialCode": "+1758",
        "isoCode": "LC",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/lc.svg"
    },
    {
        "name": "Saint Martin",
        "dialCode": "+590",
        "isoCode": "MF",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/mf.svg"
    },
    {
        "name": "Saint Pierre and Miquelon",
        "dialCode": "+508",
        "isoCode": "PM",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/pm.svg"
    },
    {
        "name": "Saint Vincent and the Grenadines",
        "dialCode": "+1784",
        "isoCode": "VC",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/vc.svg"
    },
    {
        "name": "Samoa",
        "dialCode": "+685",
        "isoCode": "WS",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ws.svg"
    },
    {
        "name": "San Marino",
        "dialCode": "+378",
        "isoCode": "SM",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/sm.svg"
    },
    {
        "name": "Sao Tome and Principe",
        "dialCode": "+239",
        "isoCode": "ST",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/st.svg"
    },
    {
        "name": "Saudi Arabia",
        "dialCode": "+966",
        "isoCode": "SA",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/sa.svg"
    },
    {
        "name": "Senegal",
        "dialCode": "+221",
        "isoCode": "SN",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/sn.svg"
    },
    {
        "name": "Serbia",
        "dialCode": "+381",
        "isoCode": "RS",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/rs.svg"
    },
    {
        "name": "Seychelles",
        "dialCode": "+248",
        "isoCode": "SC",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/sc.svg"
    },
    {
        "name": "Sierra Leone",
        "dialCode": "+232",
        "isoCode": "SL",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/sl.svg"
    },
    {
        "name": "Singapore",
        "dialCode": "+65",
        "isoCode": "SG",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/sg.svg"
    },
    {
        "name": "Sint Maarten",
        "dialCode": "+1721",
        "isoCode": "SX",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/sx.svg"
    },
    {
        "name": "Slovakia",
        "dialCode": "+421",
        "isoCode": "SK",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/sk.svg"
    },
    {
        "name": "Slovenia",
        "dialCode": "+386",
        "isoCode": "SI",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/si.svg"
    },
    {
        "name": "Solomon Islands",
        "dialCode": "+677",
        "isoCode": "SB",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/sb.svg"
    },
    {
        "name": "Somalia",
        "dialCode": "+252",
        "isoCode": "SO",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/so.svg"
    },
    {
        "name": "South Africa",
        "dialCode": "+27",
        "isoCode": "ZA",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/za.svg"
    },
    {
        "name": "South Georgia and the South Sandwich Islands",
        "dialCode": "+500",
        "isoCode": "GS",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/gs.svg"
    },
    {
        "name": "South Sudan",
        "dialCode": "+211",
        "isoCode": "SS",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ss.svg"
    },
    {
        "name": "Spain",
        "dialCode": "+34",
        "isoCode": "ES",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/es.svg"
    },
    {
        "name": "Sri Lanka",
        "dialCode": "+94",
        "isoCode": "LK",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/lk.svg"
    },
    {
        "name": "Sudan",
        "dialCode": "+249",
        "isoCode": "SD",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/sd.svg"
    },
    {
        "name": "Suriname",
        "dialCode": "+597",
        "isoCode": "SR",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/sr.svg"
    },
    {
        "name": "Svalbard and Jan Mayen",
        "dialCode": "+47",
        "isoCode": "SJ",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/sj.svg"
    },
    {
        "name": "Sweden",
        "dialCode": "+46",
        "isoCode": "SE",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/se.svg"
    },
    {
        "name": "Switzerland",
        "dialCode": "+41",
        "isoCode": "CH",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ch.svg"
    },
    {
        "name": "Syrian Arab Republic",
        "dialCode": "+963",
        "isoCode": "SY",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/sy.svg"
    },
    {
        "name": "Taiwan",
        "dialCode": "+886",
        "isoCode": "TW",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/tw.svg"
    },
    {
        "name": "Tajikistan",
        "dialCode": "+992",
        "isoCode": "TJ",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/tj.svg"
    },
    {
        "name": "Tanzania, United Republic of Tanzania",
        "dialCode": "+255",
        "isoCode": "TZ",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/tz.svg"
    },
    {
        "name": "Thailand",
        "dialCode": "+66",
        "isoCode": "TH",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/th.svg"
    },
    {
        "name": "Timor-Leste",
        "dialCode": "+670",
        "isoCode": "TL",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/tl.svg"
    },
    {
        "name": "Togo",
        "dialCode": "+228",
        "isoCode": "TG",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/tg.svg"
    },
    {
        "name": "Tokelau",
        "dialCode": "+690",
        "isoCode": "TK",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/tk.svg"
    },
    {
        "name": "Tonga",
        "dialCode": "+676",
        "isoCode": "TO",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/to.svg"
    },
    {
        "name": "Trinidad and Tobago",
        "dialCode": "+1868",
        "isoCode": "TT",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/tt.svg"
    },
    {
        "name": "Tunisia",
        "dialCode": "+216",
        "isoCode": "TN",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/tn.svg"
    },
    {
        "name": "Turkey",
        "dialCode": "+90",
        "isoCode": "TR",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/tr.svg"
    },
    {
        "name": "Turkmenistan",
        "dialCode": "+993",
        "isoCode": "TM",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/tm.svg"
    },
    {
        "name": "Turks and Caicos Islands",
        "dialCode": "+1649",
        "isoCode": "TC",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/tc.svg"
    },
    {
        "name": "Tuvalu",
        "dialCode": "+688",
        "isoCode": "TV",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/tv.svg"
    },
    {
        "name": "Uganda",
        "dialCode": "+256",
        "isoCode": "UG",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ug.svg"
    },
    {
        "name": "Ukraine",
        "dialCode": "+380",
        "isoCode": "UA",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ua.svg"
    },
    {
        "name": "United Arab Emirates",
        "dialCode": "+971",
        "isoCode": "AE",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ae.svg"
    },
    {
        "name": "United Kingdom",
        "dialCode": "+44",
        "isoCode": "GB",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/gb.svg"
    },
    {
        "name": "United States",
        "dialCode": "+1",
        "isoCode": "US",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/us.svg"
    },
    {
        "name": "United States Minor Outlying Islands",
        "dialCode": "+246",
        "isoCode": "UMI",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/umi.svg"
    },
    {
        "name": "Uruguay",
        "dialCode": "+598",
        "isoCode": "UY",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/uy.svg"
    },
    {
        "name": "Uzbekistan",
        "dialCode": "+998",
        "isoCode": "UZ",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/uz.svg"
    },
    {
        "name": "Vanuatu",
        "dialCode": "+678",
        "isoCode": "VU",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/vu.svg"
    },
    {
        "name": "Venezuela, Bolivarian Republic of Venezuela",
        "dialCode": "+58",
        "isoCode": "VE",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ve.svg"
    },
    {
        "name": "Vietnam",
        "dialCode": "+84",
        "isoCode": "VN",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/vn.svg"
    },
    {
        "name": "Virgin Islands, British",
        "dialCode": "+1284",
        "isoCode": "VG",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/vg.svg"
    },
    {
        "name": "Virgin Islands, U.S.",
        "dialCode": "+1340",
        "isoCode": "VI",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/vi.svg"
    },
    {
        "name": "Wallis and Futuna",
        "dialCode": "+681",
        "isoCode": "WF",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/wf.svg"
    },
    {
        "name": "Yemen",
        "dialCode": "+967",
        "isoCode": "YE",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ye.svg"
    },
    {
        "name": "Zambia",
        "dialCode": "+260",
        "isoCode": "ZM",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/zm.svg"
    },
    {
        "name": "Zimbabwe",
        "dialCode": "+263",
        "isoCode": "ZW",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/zw.svg"
    }
];

$(document).ready(function()
{
    for (let index = 0; index < countries.length; index++) {
        $(".countries-options").append('<option value="' + countries[index].isoCode + '"><img src="' + countries[index].flag+ '" alt="' + countries[index].isoCode+ '"/> </option>');
    }
    $(".countries-options").select2();
})

$(".countries-input").keyup(function(){
    var number = $(this).val();
    if(String(number).charAt(0) != '+' && number)
    {
        $(this).val('+' + String(number));
    }

})
$(".countries-input").change(function(){
    var number = $(this).val();
    debugger;
    while(countries[i] && countries[i].dialCode != String(number).slice(0,((countries[i].dialCode)? countries[i].dialCode.length : 0))) {
        i++;
    }
    if (countries[i]) {
        console.log(countries[i].name)
        $(".country-flag").attr("src",countries[i].flag);
        return countries_flag[i].name; // Or countries[i].code, or the whole countries[i] object
    }
})
