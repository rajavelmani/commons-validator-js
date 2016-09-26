"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj};function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i]}return arr2}else{return Array.from(arr)}}var CommonsValidator=function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:false};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.loaded=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.p="";return __webpack_require__(0)}([function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.EmailValidator=exports.DomainValidator=undefined;var _DomainValidator=__webpack_require__(1);var _EmailValidator=__webpack_require__(5);exports.DomainValidator=_DomainValidator.DomainValidator;exports.EmailValidator=_EmailValidator.EmailValidator},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.DomainValidator=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _Domains=__webpack_require__(2);var Domains=_interopRequireWildcard(_Domains);var _lodash=__webpack_require__(3);var _lodash2=_interopRequireDefault(_lodash);var _punycode=__webpack_require__(4);var punycode=_interopRequireWildcard(_punycode);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key]}}newObj.default=obj;return newObj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}var DomainValidator=exports.DomainValidator=function(){function DomainValidator(){var _ref=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];var _ref$allowLocal=_ref.allowLocal;var allowLocal=_ref$allowLocal===undefined?false:_ref$allowLocal;_classCallCheck(this,DomainValidator);var domainLabelRegex="[a-zA-Z0-9](?:[a-zA-Z0-9\\-]{0,61}[a-zA-Z0-9])?";var topLabelRegex="[a-zA-Z](?:[a-zA-Z0-9\\-]{0,61}[a-zA-Z0-9])?";var domainNameRegex="^(?:"+domainLabelRegex+"\\.)*("+topLabelRegex+")\\.?$";this._domainRegex=new RegExp(domainNameRegex)}_createClass(DomainValidator,[{key:"_chompLeadingDot",value:function _chompLeadingDot(str){if(str[0]==="."){return str.substring(1)}return str}},{key:"_unicodeToASCII",value:function _unicodeToASCII(input){return punycode.toASCII(input)}},{key:"_arrayContains",value:function _arrayContains(sortedArray,key){return(0,_lodash2.default)(sortedArray,key)}},{key:"isValidCountryCodeTld",value:function isValidCountryCodeTld(ccTld){var key=this._chompLeadingDot(this._unicodeToASCII(ccTld).toLowerCase());return this._arrayContains(Domains.countryCodeTlds,key)}},{key:"isValidGenericTld",value:function isValidGenericTld(gTld){var key=this._chompLeadingDot(this._unicodeToASCII(gTld).toLowerCase());return this._arrayContains(Domains.genericTlds,key)}},{key:"isValidInfrastructureTld",value:function isValidInfrastructureTld(iTld){var key=this._chompLeadingDot(this._unicodeToASCII(iTld).toLowerCase());return this._arrayContains(Domains.infrastructureTlds,key)}},{key:"isValidTld",value:function isValidTld(tld){tld=this._unicodeToASCII(tld);return this.isValidInfrastructureTld(tld)||this.isValidGenericTld(tld)||this.isValidCountryCodeTld(tld)}},{key:"extractTld",value:function extractTld(domain){if(!domain){return false}domain=this._unicodeToASCII(domain);if(domain.length>253){return false}var groups=domain.match(this._domainRegex);if(groups){return groups[1]}return null}},{key:"isValid",value:function isValid(domain){if(!domain){return false}domain=this._unicodeToASCII(domain);if(domain.length>253){return false}var groups=domain.match(this._domainRegex);if(groups){}if(groups&&groups.length>1){return this.isValidTld(groups[1])&&groups[0]!==groups[1]}return false}}]);return DomainValidator}()},function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var infrastructureTlds=exports.infrastructureTlds=["arpa"];var genericTlds=exports.genericTlds=["aaa","aarp","abb","abbott","abogado","academy","accenture","accountant","accountants","aco","active","actor","ads","adult","aeg","aero","afl","agency","aig","airforce","airtel","allfinanz","alsace","amica","amsterdam","android","apartments","app","apple","aquarelle","aramco","archi","army","arte","asia","associates","attorney","auction","audio","auto","autos","axa","azure","band","bank","bar","barcelona","barclaycard","barclays","bargains","bauhaus","bayern","bbc","bbva","bcn","beats","beer","bentley","berlin","best","bet","bharti","bible","bid","bike","bing","bingo","bio","biz","black","blackfriday","bloomberg","blue","bms","bmw","bnl","bnpparibas","boats","bom","bond","boo","boots","boutique","bradesco","bridgestone","broker","brother","brussels","budapest","build","builders","business","buzz","bzh","cab","cafe","cal","camera","camp","cancerresearch","canon","capetown","capital","car","caravan","cards","care","career","careers","cars","cartier","casa","cash","casino","cat","catering","cba","cbn","ceb","center","ceo","cern","cfa","cfd","chanel","channel","chat","cheap","chloe","christmas","chrome","church","cipriani","cisco","citic","city","claims","cleaning","click","clinic","clothing","cloud","club","clubmed","coach","codes","coffee","college","cologne","com","commbank","community","company","computer","condos","construction","consulting","contractors","cooking","cool","coop","corsica","country","coupons","courses","credit","creditcard","cricket","crown","crs","cruises","csc","cuisinella","cymru","cyou","dabur","dad","dance","date","dating","datsun","day","dclk","deals","degree","delivery","dell","delta","democrat","dental","dentist","desi","design","dev","diamonds","diet","digital","direct","directory","discount","dnp","docs","dog","doha","domains","doosan","download","drive","durban","dvag","earth","eat","edu","education","email","emerck","energy","engineer","engineering","enterprises","epson","equipment","erni","esq","estate","eurovision","eus","events","everbank","exchange","expert","exposed","express","fage","fail","faith","family","fan","fans","farm","fashion","feedback","ferrero","film","final","finance","financial","firmdale","fish","fishing","fit","fitness","flights","florist","flowers","flsmidth","fly","foo","football","forex","forsale","forum","foundation","frl","frogans","fund","furniture","futbol","fyi","gal","gallery","game","garden","gbiz","gdn","gea","gent","genting","ggee","gift","gifts","gives","giving","glass","gle","global","globo","gmail","gmo","gmx","gold","goldpoint","golf","goo","goog","google","gop","gov","graphics","gratis","green","gripe","group","gucci","guge","guide","guitars","guru","hamburg","hangout","haus","healthcare","help","here","hermes","hiphop","hitachi","hiv","hockey","holdings","holiday","homedepot","homes","honda","horse","host","hosting","hoteles","hotmail","house","how","hsbc","hyundai","ibm","icbc","ice","icu","ifm","iinet","immo","immobilien","industries","infiniti","info","ing","ink","institute","insure","int","international","investments","ipiranga","irish","ist","istanbul","itau","iwc","jaguar","java","jcb","jetzt","jewelry","jlc","jll","jobs","joburg","jprs","juegos","kaufen","kddi","kia","kim","kinder","kitchen","kiwi","koeln","komatsu","krd","kred","kyoto","lacaixa","lancaster","land","landrover","lasalle","lat","latrobe","law","lawyer","lds","lease","leclerc","legal","lexus","lgbt","liaison","lidl","life","lighting","limited","limo","linde","link","live","lixil","loan","loans","lol","london","lotte","lotto","love","ltd","ltda","lupin","luxe","luxury","madrid","maif","maison","man","management","mango","market","marketing","markets","marriott","mba","media","meet","melbourne","meme","memorial","men","menu","meo","miami","microsoft","mil","mini","mma","mobi","moda","moe","moi","mom","monash","money","montblanc","mormon","mortgage","moscow","motorcycles","mov","movie","movistar","mtn","mtpc","mtr","museum","mutuelle","nadex","nagoya","name","navy","nec","net","netbank","network","neustar","new","news","nexus","ngo","nhk","nico","ninja","nissan","nokia","nra","nrw","ntt","nyc","obi","office","okinawa","omega","one","ong","onl","online","ooo","oracle","orange","org","organic","osaka","otsuka","ovh","page","panerai","paris","partners","parts","party","pet","pharmacy","philips","photo","photography","photos","physio","piaget","pics","pictet","pictures","ping","pink","pizza","place","play","playstation","plumbing","plus","pohl","poker","porn","post","praxi","press","pro","prod","productions","prof","properties","property","protection","pub","qpon","quebec","racing","realtor","realty","recipes","red","redstone","rehab","reise","reisen","reit","ren","rent","rentals","repair","report","republican","rest","restaurant","review","reviews","rich","ricoh","rio","rip","rocher","rocks","rodeo","rsvp","ruhr","run","rwe","ryukyu","saarland","sakura","sale","samsung","sandvik","sandvikcoromant","sanofi","sap","sapo","sarl","saxo","sbs","sca","scb","schmidt","scholarships","school","schule","schwarz","science","scor","scot","seat","security","seek","sener","services","seven","sew","sex","sexy","shiksha","shoes","show","shriram","singles","site","ski","sky","skype","sncf","soccer","social","software","sohu","solar","solutions","sony","soy","space","spiegel","spreadbetting","srl","stada","starhub","statoil","stc","stcgroup","stockholm","studio","study","style","sucks","supplies","supply","support","surf","surgery","suzuki","swatch","swiss","sydney","systems","taipei","tatamotors","tatar","tattoo","tax","taxi","team","tech","technology","tel","telefonica","temasek","tennis","thd","theater","theatre","tickets","tienda","tips","tires","tirol","today","tokyo","tools","top","toray","toshiba","tours","town","toyota","toys","trade","trading","training","travel","trust","tui","ubs","university","uno","uol","vacations","vegas","ventures","versicherung","vet","viajes","video","villas","vin","virgin","vision","vista","vistaprint","viva","vlaanderen","vodka","vote","voting","voto","voyage","wales","walter","wang","watch","webcam","website","wed","wedding","weir","whoswho","wien","wiki","williamhill","win","windows","wine","wme","work","works","world","wtc","wtf","xbox","xerox","xin","xn--11b4c3d","xn--1qqw23a","xn--30rr7y","xn--3bst00m","xn--3ds443g","xn--3pxu8k","xn--42c2d9a","xn--45q11c","xn--4gbrim","xn--55qw42g","xn--55qx5d","xn--6frz82g","xn--6qq986b3xl","xn--80adxhks","xn--80asehdb","xn--80aswg","xn--9dbq2a","xn--9et52u","xn--b4w605ferd","xn--c1avg","xn--c2br7g","xn--cg4bki","xn--czr694b","xn--czrs0t","xn--czru2d","xn--d1acj3b","xn--efvy88h","xn--estv75g","xn--fhbei","xn--fiq228c5hs","xn--fiq64b","xn--fjq720a","xn--flw351e","xn--hxt814e","xn--i1b6b1a6a2e","xn--imr513n","xn--io0a7i","xn--j1aef","xn--kcrx77d1x4a","xn--kput3i","xn--mgba3a3ejt","xn--mgbab2bd","xn--mk1bu44c","xn--mxtq1m","xn--ngbc5azd","xn--nqv7f","xn--nqv7fs00ema","xn--nyqy26a","xn--p1acf","xn--pssy2u","xn--q9jyb4c","xn--qcka1pmc","xn--rhqv96g","xn--ses554g","xn--t60b56a","xn--tckwe","xn--unup4y","xn--vermgensberater-ctb","xn--vermgensberatung-pwb","xn--vhquv","xn--vuq861b","xn--xhq521b","xn--zfr164b","xperia","xxx","xyz","yachts","yamaxun","yandex","yodobashi","yoga","yokohama","youtube","zara","zip","zone","zuerich"];var countryCodeTlds=exports.countryCodeTlds=["ac","ad","ae","af","ag","ai","al","am","ao","aq","ar","as","at","au","aw","ax","az","ba","bb","bd","be","bf","bg","bh","bi","bj","bm","bn","bo","br","bs","bt","bv","bw","by","bz","ca","cc","cd","cf","cg","ch","ci","ck","cl","cm","cn","co","cr","cu","cv","cw","cx","cy","cz","de","dj","dk","dm","do","dz","ec","ee","eg","er","es","et","eu","fi","fj","fk","fm","fo","fr","ga","gb","gd","ge","gf","gg","gh","gi","gl","gm","gn","gp","gq","gr","gs","gt","gu","gw","gy","hk","hm","hn","hr","ht","hu","id","ie","il","im","in","io","iq","ir","is","it","je","jm","jo","jp","ke","kg","kh","ki","km","kn","kp","kr","kw","ky","kz","la","lb","lc","li","lk","lr","ls","lt","lu","lv","ly","ma","mc","md","me","mg","mh","mk","ml","mm","mn","mo","mp","mq","mr","ms","mt","mu","mv","mw","mx","my","mz","na","nc","ne","nf","ng","ni","nl","no","np","nr","nu","nz","om","pa","pe","pf","pg","ph","pk","pl","pm","pn","pr","ps","pt","pw","py","qa","re","ro","rs","ru","rw","sa","sb","sc","sd","se","sg","sh","si","sj","sk","sl","sm","sn","so","sr","st","su","sv","sx","sy","sz","tc","td","tf","tg","th","tj","tk","tl","tm","tn","to","tr","tt","tv","tw","tz","ua","ug","uk","us","uy","uz","va","vc","ve","vg","vi","vn","vu","wf","ws","xn--3e0b707e","xn--45brj9c","xn--80ao21a","xn--90a3ac","xn--90ais","xn--clchc0ea0b2g2a9gcd","xn--d1alf","xn--fiqs8s","xn--fiqz9s","xn--fpcrj9c3d","xn--fzc2c9e2c","xn--gecrj9c","xn--h2brj9c","xn--j1amh","xn--j6w193g","xn--kprw13d","xn--kpry57d","xn--l1acc","xn--lgbbat1ad8j","xn--mgb9awbf","xn--mgba3a4f16a","xn--mgbaam7a8h","xn--mgbayh7gpa","xn--mgbbh1a71e","xn--mgbc0a9azcg","xn--mgberp4a5d4ar","xn--mgbpl2fh","xn--mgbtx2b","xn--mgbx4cd0ab","xn--node","xn--o3cw4h","xn--ogbpf8fl","xn--p1ai","xn--pgbs0dh","xn--qxam","xn--s9brj9c","xn--wgbh1c","xn--wgbl6a","xn--xkc2al3hye2a","xn--xkc2dl3a5ee0h","xn--y9a3aq","xn--yfro4i67o","xn--ygbi2ammx","ye","yt","za","zm","zw"]},function(module,exports){var INFINITY=1/0,MAX_SAFE_INTEGER=9007199254740991,MAX_INTEGER=1.7976931348623157e308,NAN=0/0;var argsTag="[object Arguments]",funcTag="[object Function]",genTag="[object GeneratorFunction]",stringTag="[object String]",symbolTag="[object Symbol]";var reTrim=/^\s+|\s+$/g;var reIsBadHex=/^[-+]0x[0-9a-f]+$/i;var reIsBinary=/^0b[01]+$/i;var reIsOctal=/^0o[0-7]+$/i;var reIsUint=/^(?:0|[1-9]\d*)$/;var freeParseInt=parseInt;function arrayMap(array,iteratee){var index=-1,length=array?array.length:0,result=Array(length);while(++index<length){result[index]=iteratee(array[index],index,array)}return result}function baseFindIndex(array,predicate,fromIndex,fromRight){var length=array.length,index=fromIndex+(fromRight?1:-1);while(fromRight?index--:++index<length){if(predicate(array[index],index,array)){return index}}return-1}function baseIndexOf(array,value,fromIndex){if(value!==value){return baseFindIndex(array,baseIsNaN,fromIndex)}var index=fromIndex-1,length=array.length;while(++index<length){if(array[index]===value){return index}}return-1}function baseIsNaN(value){return value!==value}function baseTimes(n,iteratee){var index=-1,result=Array(n);while(++index<n){result[index]=iteratee(index)}return result}function baseValues(object,props){return arrayMap(props,function(key){return object[key]})}function overArg(func,transform){return function(arg){return func(transform(arg))}}var objectProto=Object.prototype;var hasOwnProperty=objectProto.hasOwnProperty;var objectToString=objectProto.toString;var propertyIsEnumerable=objectProto.propertyIsEnumerable;var nativeKeys=overArg(Object.keys,Object),nativeMax=Math.max;function arrayLikeKeys(value,inherited){var result=isArray(value)||isArguments(value)?baseTimes(value.length,String):[];var length=result.length,skipIndexes=!!length;for(var key in value){if((inherited||hasOwnProperty.call(value,key))&&!(skipIndexes&&(key=="length"||isIndex(key,length)))){result.push(key)}}return result}function baseKeys(object){if(!isPrototype(object)){return nativeKeys(object)}var result=[];for(var key in Object(object)){if(hasOwnProperty.call(object,key)&&key!="constructor"){result.push(key)}}return result}function isIndex(value,length){length=length==null?MAX_SAFE_INTEGER:length;return!!length&&(typeof value=="number"||reIsUint.test(value))&&value>-1&&value%1==0&&value<length}function isPrototype(value){var Ctor=value&&value.constructor,proto=typeof Ctor=="function"&&Ctor.prototype||objectProto;return value===proto}function includes(collection,value,fromIndex,guard){collection=isArrayLike(collection)?collection:values(collection);fromIndex=fromIndex&&!guard?toInteger(fromIndex):0;var length=collection.length;if(fromIndex<0){fromIndex=nativeMax(length+fromIndex,0)}return isString(collection)?fromIndex<=length&&collection.indexOf(value,fromIndex)>-1:!!length&&baseIndexOf(collection,value,fromIndex)>-1}function isArguments(value){return isArrayLikeObject(value)&&hasOwnProperty.call(value,"callee")&&(!propertyIsEnumerable.call(value,"callee")||objectToString.call(value)==argsTag)}var isArray=Array.isArray;function isArrayLike(value){return value!=null&&isLength(value.length)&&!isFunction(value)}function isArrayLikeObject(value){return isObjectLike(value)&&isArrayLike(value)}function isFunction(value){var tag=isObject(value)?objectToString.call(value):"";return tag==funcTag||tag==genTag}function isLength(value){return typeof value=="number"&&value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER}function isObject(value){var type=typeof value==="undefined"?"undefined":_typeof(value);return!!value&&(type=="object"||type=="function")}function isObjectLike(value){return!!value&&(typeof value==="undefined"?"undefined":_typeof(value))=="object"}function isString(value){return typeof value=="string"||!isArray(value)&&isObjectLike(value)&&objectToString.call(value)==stringTag}function isSymbol(value){return(typeof value==="undefined"?"undefined":_typeof(value))=="symbol"||isObjectLike(value)&&objectToString.call(value)==symbolTag}function toFinite(value){if(!value){return value===0?value:0}value=toNumber(value);if(value===INFINITY||value===-INFINITY){var sign=value<0?-1:1;return sign*MAX_INTEGER}return value===value?value:0}function toInteger(value){var result=toFinite(value),remainder=result%1;return result===result?remainder?result-remainder:result:0}function toNumber(value){if(typeof value=="number"){return value}if(isSymbol(value)){return NAN}if(isObject(value)){var other=typeof value.valueOf=="function"?value.valueOf():value;value=isObject(other)?other+"":other}if(typeof value!="string"){return value===0?value:+value}value=value.replace(reTrim,"");var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NAN:+value}function keys(object){return isArrayLike(object)?arrayLikeKeys(object):baseKeys(object)}function values(object){return object?baseValues(object,keys(object)):[]}module.exports=includes},function(module,exports){"use strict";var maxInt=2147483647;var base=36;var tMin=1;var tMax=26;var skew=38;var damp=700;var initialBias=72;var initialN=128;var delimiter="-";var regexPunycode=/^xn--/;var regexNonASCII=/[^\x20-\x7E]/;var regexSeparators=/[\x2E\u3002\uFF0E\uFF61]/g;var errors={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"};var baseMinusTMin=base-tMin;var floor=Math.floor;var stringFromCharCode=String.fromCharCode;function error(type){throw new RangeError(errors[type])}function map(array,fn){var result=[];var length=array.length;while(length--){result[length]=fn(array[length])}return result}function mapDomain(string,fn){var parts=string.split("@");var result="";if(parts.length>1){result=parts[0]+"@";string=parts[1]}string=string.replace(regexSeparators,".");var labels=string.split(".");var encoded=map(labels,fn).join(".");return result+encoded}function ucs2decode(string){var output=[];var counter=0;var length=string.length;while(counter<length){var value=string.charCodeAt(counter++);if(value>=55296&&value<=56319&&counter<length){var extra=string.charCodeAt(counter++);if((extra&64512)==56320){output.push(((value&1023)<<10)+(extra&1023)+65536)}else{output.push(value);counter--}}else{output.push(value)}}return output}var ucs2encode=function ucs2encode(array){return String.fromCodePoint.apply(String,_toConsumableArray(array))};var basicToDigit=function basicToDigit(codePoint){if(codePoint-48<10){return codePoint-22}if(codePoint-65<26){return codePoint-65}if(codePoint-97<26){return codePoint-97}return base};var digitToBasic=function digitToBasic(digit,flag){return digit+22+75*(digit<26)-((flag!=0)<<5)};var adapt=function adapt(delta,numPoints,firstTime){var k=0;delta=firstTime?floor(delta/damp):delta>>1;delta+=floor(delta/numPoints);for(;delta>baseMinusTMin*tMax>>1;k+=base){delta=floor(delta/baseMinusTMin)}return floor(k+(baseMinusTMin+1)*delta/(delta+skew))};var decode=function decode(input){var output=[];var inputLength=input.length;var i=0;var n=initialN;var bias=initialBias;var basic=input.lastIndexOf(delimiter);if(basic<0){basic=0}for(var j=0;j<basic;++j){if(input.charCodeAt(j)>=128){error("not-basic")}output.push(input.charCodeAt(j))}for(var index=basic>0?basic+1:0;index<inputLength;){var oldi=i;for(var w=1,k=base;;k+=base){if(index>=inputLength){error("invalid-input")}var digit=basicToDigit(input.charCodeAt(index++));if(digit>=base||digit>floor((maxInt-i)/w)){error("overflow")}i+=digit*w;var t=k<=bias?tMin:k>=bias+tMax?tMax:k-bias;if(digit<t){break}var baseMinusT=base-t;if(w>floor(maxInt/baseMinusT)){error("overflow")}w*=baseMinusT}var out=output.length+1;bias=adapt(i-oldi,out,oldi==0);if(floor(i/out)>maxInt-n){error("overflow")}n+=floor(i/out);i%=out;output.splice(i++,0,n)}return String.fromCodePoint.apply(String,output)};var encode=function encode(input){var output=[];input=ucs2decode(input);var inputLength=input.length;var n=initialN;var delta=0;var bias=initialBias;var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=input[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var _currentValue2=_step.value;if(_currentValue2<128){output.push(stringFromCharCode(_currentValue2))}}}catch(err){_didIteratorError=true;_iteratorError=err}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return()}}finally{if(_didIteratorError){throw _iteratorError}}}var basicLength=output.length;var handledCPCount=basicLength;if(basicLength){output.push(delimiter)}while(handledCPCount<inputLength){var m=maxInt;var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{for(var _iterator2=input[Symbol.iterator](),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=true){var currentValue=_step2.value;if(currentValue>=n&&currentValue<m){m=currentValue}}}catch(err){_didIteratorError2=true;_iteratorError2=err}finally{try{if(!_iteratorNormalCompletion2&&_iterator2.return){_iterator2.return()}}finally{if(_didIteratorError2){throw _iteratorError2}}}var handledCPCountPlusOne=handledCPCount+1;if(m-n>floor((maxInt-delta)/handledCPCountPlusOne)){error("overflow")}delta+=(m-n)*handledCPCountPlusOne;n=m;var _iteratorNormalCompletion3=true;var _didIteratorError3=false;var _iteratorError3=undefined;try{for(var _iterator3=input[Symbol.iterator](),_step3;!(_iteratorNormalCompletion3=(_step3=_iterator3.next()).done);_iteratorNormalCompletion3=true){var _currentValue=_step3.value;if(_currentValue<n&&++delta>maxInt){error("overflow")}if(_currentValue==n){var q=delta;for(var k=base;;k+=base){var t=k<=bias?tMin:k>=bias+tMax?tMax:k-bias;if(q<t){break}var qMinusT=q-t;var baseMinusT=base-t;output.push(stringFromCharCode(digitToBasic(t+qMinusT%baseMinusT,0)));q=floor(qMinusT/baseMinusT)}output.push(stringFromCharCode(digitToBasic(q,0)));bias=adapt(delta,handledCPCountPlusOne,handledCPCount==basicLength);delta=0;++handledCPCount}}}catch(err){_didIteratorError3=true;_iteratorError3=err}finally{try{if(!_iteratorNormalCompletion3&&_iterator3.return){_iterator3.return()}}finally{if(_didIteratorError3){throw _iteratorError3}}}++delta;++n}return output.join("")};var toUnicode=function toUnicode(input){return mapDomain(input,function(string){return regexPunycode.test(string)?decode(string.slice(4).toLowerCase()):string})};var toASCII=function toASCII(input){return mapDomain(input,function(string){return regexNonASCII.test(string)?"xn--"+encode(string):string})};var punycode={version:"2.0.0",ucs2:{decode:ucs2decode,encode:ucs2encode},decode:decode,encode:encode,toASCII:toASCII,toUnicode:toUnicode};module.exports=punycode},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.EmailValidator=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _DomainValidator=__webpack_require__(1);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}var EmailValidator=exports.EmailValidator=function(){function EmailValidator(){var _ref=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];var _ref$allowLocal=_ref.allowLocal;var allowLocal=_ref$allowLocal===undefined?false:_ref$allowLocal;var _ref$allowTld=_ref.allowTld;var allowTld=_ref$allowTld===undefined?false:_ref$allowTld;_classCallCheck(this,EmailValidator);var specialChars="\\(\\)<>@,;:'\\\\\\\"\\.\\[\\]";var validChars="(\\\\.)|[^\\s"+specialChars+"]";var quotedUser='("(\\\\"|[^"])*")';var word="(("+validChars+"|')+|"+quotedUser+")";var userRegex="^\\s*"+word+"(\\."+word+")*$";this._userPattern=new RegExp(userRegex);var emailRegex="^\\s*?(.+)@(.+?)\\s*$";this._emailPattern=new RegExp(emailRegex);this._domainValidator=new _DomainValidator.DomainValidator({allowLocal:allowLocal});this._allowTld=allowTld}_createClass(EmailValidator,[{key:"_isValidDomain",value:function _isValidDomain(domain){if(this._allowTld){return this._domainValidator.isValid(domain)||domain[0]!=="."&&this._domainValidator.isValidTld(domain)}else{return this._domainValidator.isValid(domain)}}},{key:"_isValidUser",value:function _isValidUser(user){if(!user||user.length>64){return false}return user.match(this._userPattern)}},{key:"isValid",value:function isValid(email){if(!email){return false}if(email[email.length-1]==="."){return false}var groups=email.match(this._emailPattern);if(!groups){return false}if(!this._isValidUser(groups[1])){return false}if(!this._isValidDomain(groups[2])){return false}return true}}]);return EmailValidator}()}]);