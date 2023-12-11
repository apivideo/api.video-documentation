---
title: Adding captions
meta:
  description: This page gets users started on how to add captions to their videos using the api.video Captions endpoint.
---

# Adding captions

Add captions to your videos through a single API call, and avoid having to manually embed captions for your videos.

## How to upload captions

The captions are uploaded per language. You can upload different captions for each language. You only need to include these attributes in your `POST` request to the [Captions endpoint](/reference/api/Captions):

| Field    | Type   |                                                                                            |
| :------- | :----- | :----------------------------------------------------------------------------------------- |
| videoId  | String | The unique identifier for the video you want to add a caption to.                          |
| language | String | A valid language identifier using IETF language tags. You can use primary subtags like `en` (English), extended subtags like `fr-CA` (French, Canada), or region subtags like `zh-Hans-CN` (Simplified Chinese used in the PRC).<br>- This parameter **only accepts dashes for separators**, for example `fr-CA`. If you use a different separator in your request, the API returns an error.<br>- When the value in your request does not match any covered language, the API returns an error.<br>- You can find the list of supported language tags [here](#supported-caption-language-tags). |
| file     | File   | The video text track in VTT format only.                                                   |

## Supported caption file formats

Currently only **VTT** file format is supported.

## Supported caption language tags

<details>
<summary><b>Open this list to see the supported language tags for captions.</b></summary>

| Languages | Tag | Native name |
|:---|:---:|---:|
| Afrikaans | af | Afrikaans |
| Afrikaans (Namibia) | af-NA | Afrikaans (Namibië) |
| Afrikaans (South Africa) | af-ZA | Afrikaans (Suid-Afrika) |
| Akan | ak | Akan |
| Akan (Ghana) | ak-GH | Akan (Gaana) |
| Amharic | am | አማርኛ |
| Amharic (Ethiopia) | am-ET | አማርኛ (ኢትዮጵያ) |
| Arabic | ar | العربية |
| Arabic (world) | ar-001 | العربية (العالم) |
| Arabic (United Arab Emirates) | ar-AE | العربية (الإمارات العربية المتحدة) |
| Arabic (Bahrain) | ar-BH | العربية (البحرين) |
| Arabic (Djibouti) | ar-DJ | العربية (جيبوتي) |
| Arabic (Algeria) | ar-DZ | العربية (الجزائر) |
| Arabic (Egypt) | ar-EG | العربية (مصر) |
| Arabic (Western Sahara) | ar-EH | العربية (الصحراء الغربية) |
| Arabic (Eritrea) | ar-ER | العربية (إريتريا) |
| Arabic (Israel) | ar-IL | العربية (إسرائيل) |
| Arabic (Iraq) | ar-IQ | العربية (العراق) |
| Arabic (Jordan) | ar-JO | العربية (الأردن) |
| Arabic (Comoros) | ar-KM | العربية (جزر القمر) |
| Arabic (Kuwait) | ar-KW | العربية (الكويت) |
| Arabic (Lebanon) | ar-LB | العربية (لبنان) |
| Arabic (Libya) | ar-LY | العربية (ليبيا) |
| Arabic (Morocco) | ar-MA | العربية (المغرب) |
| Arabic (Mauritania) | ar-MR | العربية (موريتانيا) |
| Arabic (Oman) | ar-OM | العربية (عُمان) |
| Arabic (Palestinian Territories) | ar-PS | العربية (الأراضي الفلسطينية) |
| Arabic (Qatar) | ar-QA | العربية (قطر) |
| Arabic (Saudi Arabia) | ar-SA | العربية (المملكة العربية السعودية) |
| Arabic (Sudan) | ar-SD | العربية (السودان) |
| Arabic (Somalia) | ar-SO | العربية (الصومال) |
| Arabic (South Sudan) | ar-SS | العربية (جنوب السودان) |
| Arabic (Syria) | ar-SY | العربية (سوريا) |
| Arabic (Chad) | ar-TD | العربية (تشاد) |
| Arabic (Tunisia) | ar-TN | العربية (تونس) |
| Arabic (Yemen) | ar-YE | العربية (اليمن) |
| Assamese | as | অসমীয়া |
| Assamese (India) | as-IN | অসমীয়া (ভাৰত) |
| Azerbaijani | az | Azərbaycan |
| Azerbaijani (Azerbaijan) | az-AZ | Azərbaycan (Azərbaycan) |
| Azerbaijani (Cyrillic) | az-Cyrl | Азәрбајҹан (Кирил) |
| Azerbaijani (Cyrillic, Azerbaijan) | az-Cyrl-AZ | Азәрбајҹан (Кирил, Азәрбајҹан) |
| Azerbaijani (Latin) | az-Latn | Azərbaycan (latın) |
| Azerbaijani (Latin, Azerbaijan) | az-Latn-AZ | Azərbaycan (latın, Azərbaycan) |
| Belarusian | be | Беларуская |
| Belarusian (Belarus) | be-BY | Беларуская (Беларусь) |
| Bulgarian | bg | Български |
| Bulgarian (Bulgaria) | bg-BG | Български (България) |
| Bambara | bm | Bamanakan |
| Bambara (Mali) | bm-ML | Bamanakan (Mali) |
| Bangla | bn | বাংলা |
| Bangla (Bangladesh) | bn-BD | বাংলা (বাংলাদেশ) |
| Bangla (India) | bn-IN | বাংলা (ভারত) |
| Tibetan | bo | བོད་སྐད་ |
| Tibetan (China) | bo-CN | བོད་སྐད་ (རྒྱ་ནག) |
| Tibetan (India) | bo-IN | བོད་སྐད་ (རྒྱ་གར་) |
| Breton | br | Brezhoneg |
| Breton (France) | br-FR | Brezhoneg (Frañs) |
| Bosnian | bs | Bosanski |
| Bosnian (Bosnia & Herzegovina) | bs-BA | Bosanski (Bosna i Hercegovina) |
| Bosnian (Cyrillic) | bs-Cyrl | Босански (ћирилица) |
| Bosnian (Cyrillic, Bosnia & Herzegovina) | bs-Cyrl-BA | Босански (ћирилица, Босна и Херцеговина) |
| Bosnian (Latin) | bs-Latn | Bosanski (latinica) |
| Bosnian (Latin, Bosnia & Herzegovina) | bs-Latn-BA | Bosanski (latinica, Bosna i Hercegovina) |
| Catalan | ca | Català |
| Catalan (Andorra) | ca-AD | Català (Andorra) |
| Catalan (Spain) | ca-ES | Català (Espanya) |
| Catalan (France) | ca-FR | Català (França) |
| Catalan (Italy) | ca-IT | Català (Itàlia) |
| Chechen | ce | Нохчийн |
| Chechen (Russia) | ce-RU | Нохчийн (Росси) |
| Czech | cs | Čeština |
| Czech (Czechia) | cs-CZ | Čeština (Česko) |
| Chuvash | cv | Чӑваш |
| Chuvash (Russia) | cv-RU | Чӑваш (Раҫҫей) |
| Welsh | cy | Cymraeg |
| Welsh (United Kingdom) | cy-GB | Cymraeg (Y Deyrnas Unedig) |
| Danish | da | Dansk |
| Danish (Denmark) | da-DK | Dansk (Danmark) |
| Danish (Greenland) | da-GL | Dansk (Grønland) |
| German | de | Deutsch |
| German (Austria) | de-AT | Deutsch (Österreich) |
| German (Belgium) | de-BE | Deutsch (Belgien) |
| German (Switzerland) | de-CH | Deutsch (Schweiz) |
| German (Germany) | de-DE | Deutsch (Deutschland) |
| German (Italy) | de-IT | Deutsch (Italien) |
| German (Liechtenstein) | de-LI | Deutsch (Liechtenstein) |
| German (Luxembourg) | de-LU | Deutsch (Luxemburg) |
| Dzongkha | dz | རྫོང་ཁ |
| Dzongkha (Bhutan) | dz-BT | རྫོང་ཁ། (འབྲུག།) |
| Ewe | ee | Eʋegbe |
| Ewe (Ghana) | ee-GH | Eʋegbe (Ghana nutome) |
| Ewe (Togo) | ee-TG | Eʋegbe (Togo nutome) |
| Greek | el | Ελληνικά |
| Greek (Cyprus) | el-CY | Ελληνικά (Κύπρος) |
| Greek (Greece) | el-GR | Ελληνικά (Ελλάδα) |
| English | en | English |
| English (world) | en-001 | English (world) |
| English (Europe) | en-150 | English (Europe) |
| English (United Arab Emirates) | en-AE | English (United Arab Emirates) |
| English (Antigua & Barbuda) | en-AG | English (Antigua & Barbuda) |
| English (Anguilla) | en-AI | English (Anguilla) |
| English (American Samoa) | en-AS | English (American Samoa) |
| English (Austria) | en-AT | English (Austria) |
| English (Australia) | en-AU | English (Australia) |
| English (Barbados) | en-BB | English (Barbados) |
| English (Belgium) | en-BE | English (Belgium) |
| English (Burundi) | en-BI | English (Burundi) |
| English (Bermuda) | en-BM | English (Bermuda) |
| English (Bahamas) | en-BS | English (Bahamas) |
| English (Botswana) | en-BW | English (Botswana) |
| English (Belize) | en-BZ | English (Belize) |
| English (Canada) | en-CA | English (Canada) |
| English (Cocos [Keeling] Islands) | en-CC | English (Cocos [Keeling] Islands) |
| English (Switzerland) | en-CH | English (Switzerland) |
| English (Cook Islands) | en-CK | English (Cook Islands) |
| English (Cameroon) | en-CM | English (Cameroon) |
| English (Christmas Island) | en-CX | English (Christmas Island) |
| English (Cyprus) | en-CY | English (Cyprus) |
| English (Germany) | en-DE | English (Germany) |
| en-DG | en-DG | en-DG |
| English (Denmark) | en-DK | English (Denmark) |
| English (Dominica) | en-DM | English (Dominica) |
| English (Eritrea) | en-ER | English (Eritrea) |
| English (Finland) | en-FI | English (Finland) |
| English (Fiji) | en-FJ | English (Fiji) |
| English (Falkland Islands) | en-FK | English (Falkland Islands) |
| English (Micronesia) | en-FM | English (Micronesia) |
| English (United Kingdom) | en-GB | English (United Kingdom) |
| English (Grenada) | en-GD | English (Grenada) |
| English (Guernsey) | en-GG | English (Guernsey) |
| English (Ghana) | en-GH | English (Ghana) |
| English (Gibraltar) | en-GI | English (Gibraltar) |
| English (Gambia) | en-GM | English (Gambia) |
| English (Guam) | en-GU | English (Guam) |
| English (Guyana) | en-GY | English (Guyana) |
| English (Hong Kong SAR China) | en-HK | English (Hong Kong SAR China) |
| English (Indonesia) | en-ID | English (Indonesia) |
| English (Ireland) | en-IE | English (Ireland) |
| English (Israel) | en-IL | English (Israel) |
| English (Isle of Man) | en-IM | English (Isle of Man) |
| English (India) | en-IN | English (India) |
| English (British Indian Ocean Territory) | en-IO | English (British Indian Ocean Territory) |
| English (Jersey) | en-JE | English (Jersey) |
| English (Jamaica) | en-JM | English (Jamaica) |
| English (Kenya) | en-KE | English (Kenya) |
| English (Kiribati) | en-KI | English (Kiribati) |
| English (St. Kitts & Nevis) | en-KN | English (St. Kitts & Nevis) |
| English (Cayman Islands) | en-KY | English (Cayman Islands) |
| English (St. Lucia) | en-LC | English (St. Lucia) |
| English (Liberia) | en-LR | English (Liberia) |
| English (Lesotho) | en-LS | English (Lesotho) |
| English (Madagascar) | en-MG | English (Madagascar) |
| English (Marshall Islands) | en-MH | English (Marshall Islands) |
| English (Macao SAR China) | en-MO | English (Macao SAR China) |
| English (Northern Mariana Islands) | en-MP | English (Northern Mariana Islands) |
| English (Montserrat) | en-MS | English (Montserrat) |
| English (Malta) | en-MT | English (Malta) |
| English (Mauritius) | en-MU | English (Mauritius) |
| English (Maldives) | en-MV | English (Maldives) |
| English (Malawi) | en-MW | English (Malawi) |
| English (Malaysia) | en-MY | English (Malaysia) |
| English (Namibia) | en-NA | English (Namibia) |
| English (Norfolk Island) | en-NF | English (Norfolk Island) |
| English (Nigeria) | en-NG | English (Nigeria) |
| en-NH | en-NH | en-NH |
| English (Netherlands) | en-NL | English (Netherlands) |
| English (Nauru) | en-NR | English (Nauru) |
| English (Niue) | en-NU | English (Niue) |
| English (New Zealand) | en-NZ | English (New Zealand) |
| English (Papua New Guinea) | en-PG | English (Papua New Guinea) |
| English (Philippines) | en-PH | English (Philippines) |
| English (Pakistan) | en-PK | English (Pakistan) |
| English (Pitcairn Islands) | en-PN | English (Pitcairn Islands) |
| English (Puerto Rico) | en-PR | English (Puerto Rico) |
| English (Palau) | en-PW | English (Palau) |
| en-RH | en-RH | en-RH |
| English (Rwanda) | en-RW | English (Rwanda) |
| English (Solomon Islands) | en-SB | English (Solomon Islands) |
| English (Seychelles) | en-SC | English (Seychelles) |
| English (Sudan) | en-SD | English (Sudan) |
| English (Sweden) | en-SE | English (Sweden) |
| English (Singapore) | en-SG | English (Singapore) |
| English (St. Helena) | en-SH | English (St. Helena) |
| English (Slovenia) | en-SI | English (Slovenia) |
| English (Sierra Leone) | en-SL | English (Sierra Leone) |
| English (South Sudan) | en-SS | English (South Sudan) |
| English (Sint Maarten) | en-SX | English (Sint Maarten) |
| English (Eswatini) | en-SZ | English (Eswatini) |
| English (Turks & Caicos Islands) | en-TC | English (Turks & Caicos Islands) |
| English (Tokelau) | en-TK | English (Tokelau) |
| English (Tonga) | en-TO | English (Tonga) |
| English (Trinidad & Tobago) | en-TT | English (Trinidad & Tobago) |
| English (Tuvalu) | en-TV | English (Tuvalu) |
| English (Tanzania) | en-TZ | English (Tanzania) |
| English (Uganda) | en-UG | English (Uganda) |
| English (U.S. Outlying Islands) | en-UM | English (U.S. Outlying Islands) |
| English (United States) | en-US | English (United States) |
| en-US-POSIX | en-US-POSIX | en-US-POSIX |
| English (St. Vincent & Grenadines) | en-VC | English (St. Vincent & Grenadines) |
| English (British Virgin Islands) | en-VG | English (British Virgin Islands) |
| English (U.S. Virgin Islands) | en-VI | English (U.S. Virgin Islands) |
| English (Vanuatu) | en-VU | English (Vanuatu) |
| English (Samoa) | en-WS | English (Samoa) |
| English (South Africa) | en-ZA | English (South Africa) |
| English (Zambia) | en-ZM | English (Zambia) |
| English (Zimbabwe) | en-ZW | English (Zimbabwe) |
| Esperanto | eo | Esperanto |
| Esperanto (world) | eo-001 | Esperanto (mondo) |
| Spanish | es | Español |
| Spanish (Latin America) | es-419 | Español (Latinoamérica) |
| Spanish (Argentina) | es-AR | Español (Argentina) |
| Spanish (Bolivia) | es-BO | Español (Bolivia) |
| Spanish (Brazil) | es-BR | Español (Brasil) |
| Spanish (Belize) | es-BZ | Español (Belice) |
| Spanish (Chile) | es-CL | Español (Chile) |
| Spanish (Colombia) | es-CO | Español (Colombia) |
| Spanish (Costa Rica) | es-CR | Español (Costa Rica) |
| Spanish (Cuba) | es-CU | Español (Cuba) |
| Spanish (Dominican Republic) | es-DO | Español (República Dominicana) |
| es-EA | es-EA | es-EA |
| Spanish (Ecuador) | es-EC | Español (Ecuador) |
| Spanish (Spain) | es-ES | Español (España) |
| Spanish (Equatorial Guinea) | es-GQ | Español (Guinea Ecuatorial) |
| Spanish (Guatemala) | es-GT | Español (Guatemala) |
| Spanish (Honduras) | es-HN | Español (Honduras) |
| es-IC | es-IC | es-IC |
| Spanish (Mexico) | es-MX | Español (México) |
| Spanish (Nicaragua) | es-NI | Español (Nicaragua) |
| Spanish (Panama) | es-PA | Español (Panamá) |
| Spanish (Peru) | es-PE | Español (Perú) |
| Spanish (Philippines) | es-PH | Español (Filipinas) |
| Spanish (Puerto Rico) | es-PR | Español (Puerto Rico) |
| Spanish (Paraguay) | es-PY | Español (Paraguay) |
| Spanish (El Salvador) | es-SV | Español (El Salvador) |
| Spanish (United States) | es-US | Español (Estados Unidos) |
| Spanish (Uruguay) | es-UY | Español (Uruguay) |
| Spanish (Venezuela) | es-VE | Español (Venezuela) |
| Estonian | et | Eesti |
| Estonian (Estonia) | et-EE | Eesti (Eesti) |
| Basque | eu | Euskara |
| Basque (Spain) | eu-ES | Euskara (Espainia) |
| Persian | fa | فارسی |
| Persian (Afghanistan) | fa-AF | فارسی (افغانستان) |
| Persian (Iran) | fa-IR | فارسی (ایران) |
| Fula | ff | Pulaar |
| Fula (Adlam) | ff-Adlm | 𞤆𞤵𞤤𞤢𞤪 (𞤀𞤁𞤂𞤢𞤃) |
| Fula (Adlam, Burkina Faso) | ff-Adlm-BF | 𞤆𞤵𞤤𞤢𞤪 (𞤀𞤁𞤂𞤢𞤃⹁ 𞤄𞤵𞤪𞤳𞤭𞤲𞤢 𞤊𞤢𞤧𞤮𞥅) |
| Fula (Adlam, Cameroon) | ff-Adlm-CM | 𞤆𞤵𞤤𞤢𞤪 (𞤀𞤁𞤂𞤢𞤃⹁ 𞤑𞤢𞤥𞤢𞤪𞤵𞥅𞤲) |
| Fula (Adlam, Ghana) | ff-Adlm-GH | 𞤆𞤵𞤤𞤢𞤪 (𞤀𞤁𞤂𞤢𞤃⹁ 𞤘𞤢𞤲𞤢) |
| Fula (Adlam, Gambia) | ff-Adlm-GM | 𞤆𞤵𞤤𞤢𞤪 (𞤀𞤁𞤂𞤢𞤃⹁ 𞤘𞤢𞤥𞤦𞤭𞤴𞤢) |
| Fula (Adlam, Guinea) | ff-Adlm-GN | 𞤆𞤵𞤤𞤢𞤪 (𞤀𞤁𞤂𞤢𞤃⹁ 𞤘𞤭𞤲𞤫) |
| Fula (Adlam, Guinea-Bissau) | ff-Adlm-GW | 𞤆𞤵𞤤𞤢𞤪 (𞤀𞤁𞤂𞤢𞤃⹁ 𞤘𞤭𞤲𞤫-𞤄𞤭𞤧𞤢𞤱𞤮𞥅) |
| Fula (Adlam, Liberia) | ff-Adlm-LR | 𞤆𞤵𞤤𞤢𞤪 (𞤀𞤁𞤂𞤢𞤃⹁ 𞤂𞤢𞤦𞤭𞤪𞤭𞤴𞤢𞥄) |
| Fula (Adlam, Mauritania) | ff-Adlm-MR | 𞤆𞤵𞤤𞤢𞤪 (𞤀𞤁𞤂𞤢𞤃⹁ 𞤃𞤮𞤪𞤼𞤢𞤲𞤭𞥅) |
| Fula (Adlam, Niger) | ff-Adlm-NE | 𞤆𞤵𞤤𞤢𞤪 (𞤀𞤁𞤂𞤢𞤃⹁ 𞤐𞤭𞥅𞤶𞤫𞤪) |
| Fula (Adlam, Nigeria) | ff-Adlm-NG | 𞤆𞤵𞤤𞤢𞤪 (𞤀𞤁𞤂𞤢𞤃⹁ 𞤐𞤢𞤶𞤫𞤪𞤭𞤴𞤢𞥄) |
| Fula (Adlam, Sierra Leone) | ff-Adlm-SL | 𞤆𞤵𞤤𞤢𞤪 (𞤀𞤁𞤂𞤢𞤃⹁ 𞤅𞤢𞤪𞤢𞤤𞤮𞤲) |
| Fula (Adlam, Senegal) | ff-Adlm-SN | 𞤆𞤵𞤤𞤢𞤪 (𞤀𞤁𞤂𞤢𞤃⹁ 𞤅𞤫𞤲𞤫𞤺𞤢𞥄𞤤) |
| Fula (Cameroon) | ff-CM | Pulaar (Kameruun) |
| Fula (Guinea) | ff-GN | Pulaar (Gine) |
| Fula (Latin) | ff-Latn | Fula (Latin) |
| Fula (Latin, Burkina Faso) | ff-Latn-BF | Fula (Latin, Burkina Faso) |
| Fula (Latin, Cameroon) | ff-Latn-CM | Fula (Latin, Cameroon) |
| Fula (Latin, Ghana) | ff-Latn-GH | Fula (Latin, Ghana) |
| Fula (Latin, Gambia) | ff-Latn-GM | Fula (Latin, Gambia) |
| Fula (Latin, Guinea) | ff-Latn-GN | Fula (Latin, Guinea) |
| Fula (Latin, Guinea-Bissau) | ff-Latn-GW | Fula (Latin, Guinea-Bissau) |
| Fula (Latin, Liberia) | ff-Latn-LR | Fula (Latin, Liberia) |
| Fula (Latin, Mauritania) | ff-Latn-MR | Fula (Latin, Mauritania) |
| Fula (Latin, Niger) | ff-Latn-NE | Fula (Latin, Niger) |
| Fula (Latin, Nigeria) | ff-Latn-NG | Fula (Latin, Nigeria) |
| Fula (Latin, Sierra Leone) | ff-Latn-SL | Fula (Latin, Sierra Leone) |
| Fula (Latin, Senegal) | ff-Latn-SN | Fula (Latin, Senegal) |
| Fula (Mauritania) | ff-MR | Pulaar (Muritani) |
| Fula (Senegal) | ff-SN | Pulaar (Senegaal) |
| Finnish | fi | Suomi |
| Finnish (Finland) | fi-FI | Suomi (Suomi) |
| Faroese | fo | Føroyskt |
| Faroese (Denmark) | fo-DK | Føroyskt (Danmark) |
| Faroese (Faroe Islands) | fo-FO | Føroyskt (Føroyar) |
| French | fr | Français |
| French (Belgium) | fr-BE | Français (Belgique) |
| French (Burkina Faso) | fr-BF | Français (Burkina Faso) |
| French (Burundi) | fr-BI | Français (Burundi) |
| French (Benin) | fr-BJ | Français (Bénin) |
| French (St. Barthélemy) | fr-BL | Français (Saint-Barthélemy) |
| French (Canada) | fr-CA | Français (Canada) |
| French (Congo - Kinshasa) | fr-CD | Français (Congo-Kinshasa) |
| French (Central African Republic) | fr-CF | Français (République centrafricaine) |
| French (Congo - Brazzaville) | fr-CG | Français (Congo-Brazzaville) |
| French (Switzerland) | fr-CH | Français (Suisse) |
| French (Côte d’Ivoire) | fr-CI | Français (Côte d’Ivoire) |
| French (Cameroon) | fr-CM | Français (Cameroun) |
| French (Djibouti) | fr-DJ | Français (Djibouti) |
| French (Algeria) | fr-DZ | Français (Algérie) |
| French (France) | fr-FR | Français (France) |
| French (Gabon) | fr-GA | Français (Gabon) |
| French (French Guiana) | fr-GF | Français (Guyane française) |
| French (Guinea) | fr-GN | Français (Guinée) |
| French (Guadeloupe) | fr-GP | Français (Guadeloupe) |
| French (Equatorial Guinea) | fr-GQ | Français (Guinée équatoriale) |
| French (Haiti) | fr-HT | Français (Haïti) |
| French (Comoros) | fr-KM | Français (Comores) |
| French (Luxembourg) | fr-LU | Français (Luxembourg) |
| French (Morocco) | fr-MA | Français (Maroc) |
| French (Monaco) | fr-MC | Français (Monaco) |
| French (St. Martin) | fr-MF | Français (Saint-Martin) |
| French (Madagascar) | fr-MG | Français (Madagascar) |
| French (Mali) | fr-ML | Français (Mali) |
| French (Martinique) | fr-MQ | Français (Martinique) |
| French (Mauritania) | fr-MR | Français (Mauritanie) |
| French (Mauritius) | fr-MU | Français (Maurice) |
| French (New Caledonia) | fr-NC | Français (Nouvelle-Calédonie) |
| French (Niger) | fr-NE | Français (Niger) |
| French (French Polynesia) | fr-PF | Français (Polynésie française) |
| French (St. Pierre & Miquelon) | fr-PM | Français (Saint-Pierre-et-Miquelon) |
| French (Réunion) | fr-RE | Français (La Réunion) |
| French (Rwanda) | fr-RW | Français (Rwanda) |
| French (Seychelles) | fr-SC | Français (Seychelles) |
| French (Senegal) | fr-SN | Français (Sénégal) |
| French (Syria) | fr-SY | Français (Syrie) |
| French (Chad) | fr-TD | Français (Tchad) |
| French (Togo) | fr-TG | Français (Togo) |
| French (Tunisia) | fr-TN | Français (Tunisie) |
| French (Vanuatu) | fr-VU | Français (Vanuatu) |
| French (Wallis & Futuna) | fr-WF | Français (Wallis-et-Futuna) |
| French (Mayotte) | fr-YT | Français (Mayotte) |
| Western Frisian | fy | Frysk |
| Western Frisian (Netherlands) | fy-NL | Frysk (Nederlân) |
| Irish | ga | Gaeilge |
| Irish (United Kingdom) | ga-GB | Gaeilge (an Ríocht Aontaithe) |
| Irish (Ireland) | ga-IE | Gaeilge (Éire) |
| Scottish Gaelic | gd | Gàidhlig |
| Scottish Gaelic (United Kingdom) | gd-GB | Gàidhlig (An Rìoghachd Aonaichte) |
| Galician | gl | Galego |
| Galician (Spain) | gl-ES | Galego (España) |
| Gujarati | gu | ગુજરાતી |
| Gujarati (India) | gu-IN | ગુજરાતી (ભારત) |
| Manx | gv | Gaelg |
| Manx (Isle of Man) | gv-IM | Gaelg (Ellan Vannin) |
| Hausa | ha | Hausa |
| Hausa (Ghana) | ha-GH | Hausa (Gana) |
| Hausa (Niger) | ha-NE | Hausa (Nijar) |
| Hausa (Nigeria) | ha-NG | Hausa (Nijeriya) |
| Hebrew | he | עברית |
| Hebrew (Israel) | he-IL | עברית (ישראל) |
| Hindi | hi | हिन्दी |
| Hindi (India) | hi-IN | हिन्दी (भारत) |
| Hindi (Latin) | hi-Latn | हिन्दी (लैटिन) |
| Hindi (Latin, India) | hi-Latn-IN | हिन्दी (लैटिन, भारत) |
| Croatian | hr | Hrvatski |
| Croatian (Bosnia & Herzegovina) | hr-BA | Hrvatski (Bosna i Hercegovina) |
| Croatian (Croatia) | hr-HR | Hrvatski (Hrvatska) |
| Hungarian | hu | Magyar |
| Hungarian (Hungary) | hu-HU | Magyar (Magyarország) |
| Armenian | hy | Հայերեն |
| Armenian (Armenia) | hy-AM | Հայերեն (Հայաստան) |
| Interlingua | ia | Interlingua |
| Interlingua (world) | ia-001 | Interlingua (Mundo) |
| Indonesian | id | Indonesia |
| Indonesian (Indonesia) | id-ID | Indonesia (Indonesia) |
| Interlingue | ie | Interlingue |
| Interlingue (Estonia) | ie-EE | Interlingue (Estonia) |
| Igbo | ig | Igbo |
| Igbo (Nigeria) | ig-NG | Igbo (Naịjịrịa) |
| Sichuan Yi | ii | ꆈꌠꉙ |
| Sichuan Yi (China) | ii-CN | ꆈꌠꉙ (ꍏꇩ) |
| in | in | in |
| in-ID | in-ID | in-ID |
| Icelandic | is | Íslenska |
| Icelandic (Iceland) | is-IS | Íslenska (Ísland) |
| Italian | it | Italiano |
| Italian (Switzerland) | it-CH | Italiano (Svizzera) |
| Italian (Italy) | it-IT | Italiano (Italia) |
| Italian (San Marino) | it-SM | Italiano (San Marino) |
| Italian (Vatican City) | it-VA | Italiano (Città del Vaticano) |
| iw | iw | iw |
| iw-IL | iw-IL | iw-IL |
| Japanese | ja | 日本語 |
| Japanese (Japan) | ja-JP | 日本語 (日本) |
| ja-JP-TRADITIONAL | ja-JP-TRADITIONAL | ja-JP-TRADITIONAL |
| Javanese | jv | Jawa |
| Javanese (Indonesia) | jv-ID | Jawa (Indonésia) |
| Georgian | ka | ქართული |
| Georgian (Georgia) | ka-GE | ქართული (საქართველო) |
| Kikuyu | ki | Gikuyu |
| Kikuyu (Kenya) | ki-KE | Gikuyu (Kenya) |
| Kazakh | kk | Қазақ тілі |
| Kazakh (Kazakhstan) | kk-KZ | Қазақ тілі (Қазақстан) |
| Kalaallisut | kl | Kalaallisut |
| Kalaallisut (Greenland) | kl-GL | Kalaallisut (Kalaallit Nunaat) |
| Khmer | km | ខ្មែរ |
| Khmer (Cambodia) | km-KH | ខ្មែរ (កម្ពុជា) |
| Kannada | kn | ಕನ್ನಡ |
| Kannada (India) | kn-IN | ಕನ್ನಡ (ಭಾರತ) |
| Korean | ko | 한국어 |
| Korean (China) | ko-CN | 한국어(중국) |
| Korean (North Korea) | ko-KP | 한국어(조선민주주의인민공화국) |
| Korean (South Korea) | ko-KR | 한국어(대한민국) |
| Kashmiri | ks | کٲشُر |
| Kashmiri (Arabic) | ks-Arab | کٲشُر (عربی) |
| Kashmiri (Arabic, India) | ks-Arab-IN | کٲشُر (عربی, ہِندوستان) |
| Kashmiri (Devanagari) | ks-Deva | कॉशुर (देवनागरी) |
| Kashmiri (Devanagari, India) | ks-Deva-IN | कॉशुर (देवनागरी, हिंदोस्तान) |
| Kashmiri (India) | ks-IN | کٲشُر (ہِندوستان) |
| Kurdish | ku | Kurdî [kurmancî] |
| Kurdish (Türkiye) | ku-TR | Kurdî [kurmancî] (Tirkiye) |
| Cornish | kw | Kernewek |
| Cornish (United Kingdom) | kw-GB | Kernewek (Rywvaneth Unys) |
| Kyrgyz | ky | Кыргызча |
| Kyrgyz (Kyrgyzstan) | ky-KG | Кыргызча (Кыргызстан) |
| Luxembourgish | lb | Lëtzebuergesch |
| Luxembourgish (Luxembourg) | lb-LU | Lëtzebuergesch (Lëtzebuerg) |
| Ganda | lg | Luganda |
| Ganda (Uganda) | lg-UG | Luganda (Yuganda) |
| Lingala | ln | Lingála |
| Lingala (Angola) | ln-AO | Lingála (Angóla) |
| Lingala (Congo - Kinshasa) | ln-CD | Lingála (Republíki ya Kongó Demokratíki) |
| Lingala (Central African Republic) | ln-CF | Lingála (Repibiki ya Afríka ya Káti) |
| Lingala (Congo - Brazzaville) | ln-CG | Lingála (Kongo) |
| Lao | lo | ລາວ |
| Lao (Laos) | lo-LA | ລາວ (ລາວ) |
| Lithuanian | lt | Lietuvių |
| Lithuanian (Lithuania) | lt-LT | Lietuvių (Lietuva) |
| Luba-Katanga | lu | Tshiluba |
| Luba-Katanga (Congo - Kinshasa) | lu-CD | Tshiluba (Ditunga wa Kongu) |
| Latvian | lv | Latviešu |
| Latvian (Latvia) | lv-LV | Latviešu (Latvija) |
| Malagasy | mg | Malagasy |
| Malagasy (Madagascar) | mg-MG | Malagasy (Madagasikara) |
| Māori | mi | Māori |
| Māori (New Zealand) | mi-NZ | Māori (Aotearoa) |
| Macedonian | mk | Македонски |
| Macedonian (North Macedonia) | mk-MK | Македонски (Северна Македонија) |
| Malayalam | ml | മലയാളം |
| Malayalam (India) | ml-IN | മലയാളം (ഇന്ത്യ) |
| Mongolian | mn | Монгол |
| Mongolian (Mongolia) | mn-MN | Монгол (Монгол) |
| mo | mo | mo |
| Marathi | mr | मराठी |
| Marathi (India) | mr-IN | मराठी (भारत) |
| Malay | ms | Melayu |
| Malay (Brunei) | ms-BN | Melayu (Brunei) |
| Malay (Indonesia) | ms-ID | Melayu (Indonesia) |
| Malay (Malaysia) | ms-MY | Melayu (Malaysia) |
| Malay (Singapore) | ms-SG | Melayu (Singapura) |
| Maltese | mt | Malti |
| Maltese (Malta) | mt-MT | Malti (Malta) |
| Burmese | my | မြန်မာ |
| Burmese (Myanmar [Burma]) | my-MM | မြန်မာ (မြန်မာ) |
| Norwegian Bokmål | nb | Norwegian Bokmål |
| Norwegian Bokmål (Norway) | nb-NO | Norwegian Bokmål (Norway) |
| Norwegian Bokmål (Svalbard & Jan Mayen) | nb-SJ | Norwegian Bokmål (Svalbard & Jan Mayen) |
| North Ndebele | nd | IsiNdebele |
| North Ndebele (Zimbabwe) | nd-ZW | IsiNdebele (Zimbabwe) |
| Nepali | ne | नेपाली |
| Nepali (India) | ne-IN | नेपाली (भारत) |
| Nepali (Nepal) | ne-NP | नेपाली (नेपाल) |
| Dutch | nl | Nederlands |
| Dutch (Aruba) | nl-AW | Nederlands (Aruba) |
| Dutch (Belgium) | nl-BE | Nederlands (België) |
| Dutch (Caribbean Netherlands) | nl-BQ | Nederlands (Caribisch Nederland) |
| Dutch (Curaçao) | nl-CW | Nederlands (Curaçao) |
| Dutch (Netherlands) | nl-NL | Nederlands (Nederland) |
| Dutch (Suriname) | nl-SR | Nederlands (Suriname) |
| Dutch (Sint Maarten) | nl-SX | Nederlands (Sint-Maarten) |
| Norwegian Nynorsk | nn | Norwegian Nynorsk |
| Norwegian Nynorsk (Norway) | nn-NO | Norwegian Nynorsk (Norway) |
| Norwegian | no | Norsk |
| Norwegian (Norway) | no-NO | Norsk (Norge) |
| no-NO-NY | no-NO-NY | no-NO-NY |
| Occitan | oc | Occitan |
| Occitan (Spain) | oc-ES | Occitan (Espanha) |
| Occitan (France) | oc-FR | Occitan (França) |
| Oromo | om | Oromoo |
| Oromo (Ethiopia) | om-ET | Oromoo (Itoophiyaa) |
| Oromo (Kenya) | om-KE | Oromoo (Keeniyaa) |
| Odia | or | ଓଡ଼ିଆ |
| Odia (India) | or-IN | ଓଡ଼ିଆ (ଭାରତ) |
| Ossetic | os | Ирон |
| Ossetic (Georgia) | os-GE | Ирон (Гуырдзыстон) |
| Ossetic (Russia) | os-RU | Ирон (Уӕрӕсе) |
| Punjabi | pa | ਪੰਜਾਬੀ |
| Punjabi (Arabic) | pa-Arab | پنجابی (عربی) |
| Punjabi (Arabic, Pakistan) | pa-Arab-PK | پنجابی (عربی, پاکستان) |
| Punjabi (Gurmukhi) | pa-Guru | ਪੰਜਾਬੀ (ਗੁਰਮੁਖੀ) |
| Punjabi (Gurmukhi, India) | pa-Guru-IN | ਪੰਜਾਬੀ (ਗੁਰਮੁਖੀ, ਭਾਰਤ) |
| Punjabi (India) | pa-IN | ਪੰਜਾਬੀ (ਭਾਰਤ) |
| Punjabi (Pakistan) | pa-PK | پنجابی (پاکستان) |
| Polish | pl | Polski |
| Polish (Poland) | pl-PL | Polski (Polska) |
| Pashto | ps | پښتو |
| Pashto (Afghanistan) | ps-AF | پښتو (افغانستان) |
| Pashto (Pakistan) | ps-PK | پښتو (پاکستان) |
| Portuguese | pt | Português |
| Portuguese (Angola) | pt-AO | Português (Angola) |
| Portuguese (Brazil) | pt-BR | Português (Brasil) |
| Portuguese (Switzerland) | pt-CH | Português (Suíça) |
| Portuguese (Cape Verde) | pt-CV | Português (Cabo Verde) |
| Portuguese (Equatorial Guinea) | pt-GQ | Português (Guiné Equatorial) |
| Portuguese (Guinea-Bissau) | pt-GW | Português (Guiné-Bissau) |
| Portuguese (Luxembourg) | pt-LU | Português (Luxemburgo) |
| Portuguese (Macao SAR China) | pt-MO | Português (Macau, RAE da China) |
| Portuguese (Mozambique) | pt-MZ | Português (Moçambique) |
| Portuguese (Portugal) | pt-PT | Português (Portugal) |
| Portuguese (São Tomé & Príncipe) | pt-ST | Português (São Tomé e Príncipe) |
| Portuguese (Timor-Leste) | pt-TL | Português (Timor-Leste) |
| Quechua | qu | Runasimi |
| Quechua (Bolivia) | qu-BO | Runasimi (Bolivia) |
| Quechua (Ecuador) | qu-EC | Runasimi (Ecuador) |
| Quechua (Peru) | qu-PE | Runasimi (Perú) |
| Romansh | rm | Rumantsch |
| Romansh (Switzerland) | rm-CH | Rumantsch (Svizra) |
| Rundi | rn | Ikirundi |
| Rundi (Burundi) | rn-BI | Ikirundi (Uburundi) |
| Romanian | ro | Română |
| Romanian (Moldova) | ro-MD | Română (Republica Moldova) |
| Romanian (Romania) | ro-RO | Română (România) |
| Russian | ru | Русский |
| Russian (Belarus) | ru-BY | Русский (Беларусь) |
| Russian (Kyrgyzstan) | ru-KG | Русский (Киргизия) |
| Russian (Kazakhstan) | ru-KZ | Русский (Казахстан) |
| Russian (Moldova) | ru-MD | Русский (Молдова) |
| Russian (Russia) | ru-RU | Русский (Россия) |
| Russian (Ukraine) | ru-UA | Русский (Украина) |
| Kinyarwanda | rw | Kinyarwanda |
| Kinyarwanda (Rwanda) | rw-RW | Kinyarwanda (U Rwanda) |
| Sanskrit | sa | संस्कृत भाषा |
| Sanskrit (India) | sa-IN | संस्कृत भाषा (भारतः) |
| Sardinian | sc | Sardu |
| Sardinian (Italy) | sc-IT | Sardu (Itàlia) |
| Sindhi | sd | سنڌي |
| Sindhi (Arabic) | sd-Arab | سنڌي (عربي) |
| Sindhi (Arabic, Pakistan) | sd-Arab-PK | سنڌي (عربي, پاڪستان) |
| Sindhi (Devanagari) | sd-Deva | सिन्धी (देवनागिरी) |
| Sindhi (Devanagari, India) | sd-Deva-IN | सिन्धी (देवनागिरी, भारत) |
| Sindhi (India) | sd-IN | सिन्धी (भारत) |
| Sindhi (Pakistan) | sd-PK | سنڌي (پاڪستان) |
| Northern Sami | se | Davvisámegiella |
| Northern Sami (Finland) | se-FI | Davvisámegiella (Suopma) |
| Northern Sami (Norway) | se-NO | Davvisámegiella (Norga) |
| Northern Sami (Sweden) | se-SE | Davvisámegiella (Ruoŧŧa) |
| Sango | sg | Sängö |
| Sango (Central African Republic) | sg-CF | Sängö (Ködörösêse tî Bêafrîka) |
| Serbo-Croatian | sh | Srpskohrvatski |
| Serbo-Croatian (Bosnia & Herzegovina) | sh-BA | Srpskohrvatski (Bosna i Hercegovina) |
| sh-CS | sh-CS | sh-CS |
| sh-YU | sh-YU | sh-YU |
| Sinhala | si | සිංහල |
| Sinhala (Sri Lanka) | si-LK | සිංහල (ශ්‍රී ලංකාව) |
| Slovak | sk | Slovenčina |
| Slovak (Slovakia) | sk-SK | Slovenčina (Slovensko) |
| Slovenian | sl | Slovenščina |
| Slovenian (Slovenia) | sl-SI | Slovenščina (Slovenija) |
| Shona | sn | ChiShona |
| Shona (Zimbabwe) | sn-ZW | ChiShona (Zimbabwe) |
| Somali | so | Soomaali |
| Somali (Djibouti) | so-DJ | Soomaali (Jabuuti) |
| Somali (Ethiopia) | so-ET | Soomaali (Itoobiya) |
| Somali (Kenya) | so-KE | Soomaali (Kenya) |
| Somali (Somalia) | so-SO | Soomaali (Soomaaliya) |
| Albanian | sq | Shqip |
| Albanian (Albania) | sq-AL | Shqip (Shqipëri) |
| Albanian (North Macedonia) | sq-MK | Shqip (Maqedonia e Veriut) |
| sq-XK | sq-XK | sq-XK |
| Serbian | sr | Српски |
| Serbian (Bosnia & Herzegovina) | sr-BA | Српски (Босна и Херцеговина) |
| sr-CS | sr-CS | sr-CS |
| Serbian (Cyrillic) | sr-Cyrl | Српски (ћирилица) |
| Serbian (Cyrillic, Bosnia & Herzegovina) | sr-Cyrl-BA | Српски (ћирилица, Босна и Херцеговина) |
| sr-Cyrl-CS | sr-Cyrl-CS | sr-Cyrl-CS |
| Serbian (Cyrillic, Montenegro) | sr-Cyrl-ME | Српски (ћирилица, Црна Гора) |
| Serbian (Cyrillic, Serbia) | sr-Cyrl-RS | Српски (ћирилица, Србија) |
| sr-Cyrl-XK | sr-Cyrl-XK | sr-Cyrl-XK |
| sr-Cyrl-YU | sr-Cyrl-YU | sr-Cyrl-YU |
| Serbian (Latin) | sr-Latn | Srpski (latinica) |
| Serbian (Latin, Bosnia & Herzegovina) | sr-Latn-BA | Srpski (latinica, Bosna i Hercegovina) |
| sr-Latn-CS | sr-Latn-CS | sr-Latn-CS |
| Serbian (Latin, Montenegro) | sr-Latn-ME | Srpski (latinica, Crna Gora) |
| Serbian (Latin, Serbia) | sr-Latn-RS | Srpski (latinica, Srbija) |
| sr-Latn-XK | sr-Latn-XK | sr-Latn-XK |
| sr-Latn-YU | sr-Latn-YU | sr-Latn-YU |
| Serbian (Montenegro) | sr-ME | Srpski (Crna Gora) |
| Serbian (Serbia) | sr-RS | Српски (Србија) |
| sr-XK | sr-XK | sr-XK |
| sr-YU | sr-YU | sr-YU |
| Sundanese | su | Basa Sunda |
| Sundanese (Indonesia) | su-ID | Basa Sunda (Indonesia) |
| Sundanese (Latin) | su-Latn | Basa Sunda (Latin) |
| Sundanese (Latin, Indonesia) | su-Latn-ID | Basa Sunda (Latin, Indonesia) |
| Swedish | sv | Svenska |
| Swedish (Åland Islands) | sv-AX | Svenska (Åland) |
| Swedish (Finland) | sv-FI | Svenska (Finland) |
| Swedish (Sweden) | sv-SE | Svenska (Sverige) |
| Swahili | sw | Kiswahili |
| Swahili (Congo - Kinshasa) | sw-CD | Kiswahili (Jamhuri ya Kidemokrasia ya Kongo) |
| Swahili (Kenya) | sw-KE | Kiswahili (Kenya) |
| Swahili (Tanzania) | sw-TZ | Kiswahili (Tanzania) |
| Swahili (Uganda) | sw-UG | Kiswahili (Uganda) |
| Tamil | ta | தமிழ் |
| Tamil (India) | ta-IN | தமிழ் (இந்தியா) |
| Tamil (Sri Lanka) | ta-LK | தமிழ் (இலங்கை) |
| Tamil (Malaysia) | ta-MY | தமிழ் (மலேசியா) |
| Tamil (Singapore) | ta-SG | தமிழ் (சிங்கப்பூர்) |
| Telugu | te | తెలుగు |
| Telugu (India) | te-IN | తెలుగు (భారతదేశం) |
| Tajik | tg | Тоҷикӣ |
| Tajik (Tajikistan) | tg-TJ | Тоҷикӣ (Тоҷикистон) |
| Thai | th | ไทย |
| Thai (Thailand) | th-TH | ไทย (ไทย) |
| th-TH-TRADITIONAL | th-TH-TRADITIONAL | th-TH-TRADITIONAL |
| Tigrinya | ti | ትግርኛ |
| Tigrinya (Eritrea) | ti-ER | ትግርኛ (ኤርትራ) |
| Tigrinya (Ethiopia) | ti-ET | ትግርኛ (ኢትዮጵያ) |
| Turkmen | tk | Türkmen dili |
| Turkmen (Turkmenistan) | tk-TM | Türkmen dili (Türkmenistan) |
| Tagalog | tl | Tagalog |
| Tagalog (Philippines) | tl-PH | Tagalog (Philippines) |
| Tongan | to | Lea fakatonga |
| Tongan (Tonga) | to-TO | Lea fakatonga (Tonga) |
| Turkish | tr | Türkçe |
| Turkish (Cyprus) | tr-CY | Türkçe (Kıbrıs) |
| Turkish (Türkiye) | tr-TR | Türkçe (Türkiye) |
| Tatar | tt | Татар |
| Tatar (Russia) | tt-RU | Татар (Россия) |
| Uyghur | ug | ئۇيغۇرچە |
| Uyghur (China) | ug-CN | ئۇيغۇرچە (جۇڭگو) |
| Ukrainian | uk | Українська |
| Ukrainian (Ukraine) | uk-UA | Українська (Україна) |
| Urdu | ur | اردو |
| Urdu (India) | ur-IN | اردو (بھارت) |
| Urdu (Pakistan) | ur-PK | اردو (پاکستان) |
| Uzbek | uz | O‘zbek |
| Uzbek (Afghanistan) | uz-AF | اوزبیک (افغانستان) |
| Uzbek (Arabic) | uz-Arab | اوزبیک (عربی) |
| Uzbek (Arabic, Afghanistan) | uz-Arab-AF | اوزبیک (عربی, افغانستان) |
| Uzbek (Cyrillic) | uz-Cyrl | Ўзбекча (Кирил) |
| Uzbek (Cyrillic, Uzbekistan) | uz-Cyrl-UZ | Ўзбекча (Кирил, Ўзбекистон) |
| Uzbek (Latin) | uz-Latn | O‘zbek (lotin) |
| Uzbek (Latin, Uzbekistan) | uz-Latn-UZ | O‘zbek (lotin, Oʻzbekiston) |
| Uzbek (Uzbekistan) | uz-UZ | O‘zbek (Oʻzbekiston) |
| Vietnamese | vi | Tiếng Việt |
| Vietnamese (Vietnam) | vi-VN | Tiếng Việt (Việt Nam) |
| Wolof | wo | Wolof |
| Wolof (Senegal) | wo-SN | Wolof (Senegaal) |
| Xhosa | xh | IsiXhosa |
| Xhosa (South Africa) | xh-ZA | IsiXhosa (EMzantsi Afrika) |
| Yiddish | yi | ייִדיש |
| Yiddish (Ukraine) | yi-UA | ייִדיש (אוקראַינע) |
| Yoruba | yo | Èdè Yorùbá |
| Yoruba (Benin) | yo-BJ | Èdè Yorùbá (Bɛ̀nɛ̀) |
| Yoruba (Nigeria) | yo-NG | Èdè Yorùbá (Nàìjíríà) |
| Zhuang | za | Vahcuengh |
| Zhuang (China) | za-CN | Vahcuengh (Cunghgoz) |
| Chinese | zh | 中文 |
| Chinese (China) | zh-CN | 中文（中国） |
| Chinese (Hong Kong SAR China) | zh-HK | 中文（中國香港特別行政區） |
| Chinese (Simplified) | zh-Hans | 中文（简体） |
| Chinese (Simplified, China) | zh-Hans-CN | 中文（简体，中国） |
| Chinese (Simplified, Hong Kong SAR China) | zh-Hans-HK | 中文（简体，中国香港特别行政区） |
| Chinese (Simplified, Macao SAR China) | zh-Hans-MO | 中文（简体，中国澳门特别行政区） |
| Chinese (Simplified, Singapore) | zh-Hans-SG | 中文（简体，新加坡） |
| Chinese (Traditional) | zh-Hant | 中文（繁體） |
| Chinese (Traditional, Hong Kong SAR China) | zh-Hant-HK | 中文（繁體字，中國香港特別行政區） |
| Chinese (Traditional, Macao SAR China) | zh-Hant-MO | 中文（繁體，中國澳門特別行政區） |
| Chinese (Traditional, Taiwan) | zh-Hant-TW | 中文（繁體，台灣） |
| Chinese (Macao SAR China) | zh-MO | 中文（中國澳門特別行政區） |
| Chinese (Singapore) | zh-SG | 中文（新加坡） |
| Chinese (Taiwan) | zh-TW | 中文（台灣） |
| Zulu | zu | IsiZulu |
| Zulu (South Africa) | zu-ZA | IsiZulu (iNingizimu Afrika) |

</details>


## WebVTT file formatting

WebVTT is a format for displaying timed text tracks for captions or chapters. It is a text based format, which must be encoded using UTF-8. Check out the [Mozilla developer guide](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API) for more information about WebVTT.

To ensure that you use the correct formatting in your VTT file, api.video recommends using a parser to check for errors before you upload the file. [Click here](https://w3c.github.io/webvtt.js/parser.html) for a free online VTT parser.

{% capture content %}
Incorrect VTT file formatting

The api.video API does not return an error for incorrectly formatted VTT files. The response from the API will be `200`, however, the captions will not be displayed.
{% endcapture %}
{% include "_partials/callout.html" kind: "info", content: content %}

The VTT file has an extension `.vtt` and the format is as in the example below:

```text
WEBVTT

00:01.000 --> 00:04.000
- Adding captions is easy.

00:05.000 --> 00:09.000
- You only need a single API request.
- And a properly formatted VTT file.
```

## Tutorials & Resources

- [How to programmatically add captions to your video](https://api.video/blog/tutorials/how-to-add-captions-to-your-videos/)
- [Free online VTT creator](https://www.vtt-creator.com/)