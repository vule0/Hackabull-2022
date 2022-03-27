var Atoms = [['H', 'C', 1], ['Li', 'C', 1], ['Na', 'C', 1], ['K', 'C', 1], ['Rb', 'C', 1], ['Cs', 'C', 1], ['Fr', 'C', 1], ['Be', 'C', 2], ['Mg', 'C', 2], ['Ca', 'C', 2], ['Sr', 'C', 2], ['Ba', 'C', 2], ['Ra', 'C', 2], ['Sc', 'C', 3], ['Y', 'C', 3], ['La', 'C', 3], ['Ac', 'C', 3], ['Ti', 'C', 4], ['Zr', 'C', 4], ['Hf', 'C', 4], ['Rf', 'C', 4], ['Ce', 'C', 3], ['Th', 'C', 4], ['V', 'C', 5], ['Nb', 'C', 5], ['Ta', 'C', 5], ['Db', 'C', 5], ['Pr', 'C', 3], ['Pa', 'C', 5], ['Cr', 'C', 3], ['Mo', 'C', 4], ['W', 'C', 4], ['Sg', 'C', 6], ['Nd', 'C', 3], ['U', 'C', 6], ['Mn', 'C', 2], ['Tc', 'C', 4], ['Re', 'C', 4], ['Bh', 'C', 7], ['Pm', 'C', 3], ['Np', 'C', 5], ['Fe', 'C', 3], ['Ru', 'C', 4], ['Os', 'C', 4], ['Hs', 'C', 8], ['Sm', 'C', 3], ['Pu', 'C', 4], ['Co', 'C', 2], ['Rh', 'C', 3], ['Ir', 'C', 4], ['Mt', 'C', 911], ['Eu', 'C', 2], ['Am', 'C', 3], ['Ni', 'C', 2], ['Pd', 'C', 4], ['Pt', 'C', 4], ['Ds', 'C', 911], ['Gd', 'C', 3], ['Cm', 'C', 3], ['Cu', 'C', 2], ['Ag', 'C', 1], ['Au', 'C', 3], ['Rg', 'C', 911], ['Tb', 'C', 3], ['Bk', 'C', 3], ['Zn', 'C', 2], ['Cd', 'C', 2], ['Hg', 'C', 1], ['Cn', 'C', 2], ['Dy', 'C', 3], ['Cf', 'C', 3], ['B', 'C', 3], ['Al', 'C', 3], ['Ga', 'C', 3], ['In', 'C', 3], ['Tl', 'C', 1], ['Nh', 'C', 911], ['Ho', 'C', 3], ['Es', 'C', 3], ['C', 'C', 4], ['Si', 'A', 4], ['Ge', 'C', 4], ['Sn', 'C', 2], ['Pb', 'C', 4], ['Fl', 'C', 911], ['Er', 'C', 3], ['Fm', 'C', 3], ['N', 'A', 3], ['P', 'A', 3], ['As', 'C', 5], ['Sb', 'C', 5], ['Bi', 'C', 3], ['Mc', 'C', 911], ['Tm', 'C', 3], ['Md', 'C', 3], ['O', 'A', 2], ['S', 'A', 2], ['Se', 'A', 2], ['Te', 'C', 4], ['Po', 'C', 2], ['Lv', 'C', 911], ['Yb', 'C', 3], ['No', 'C', 2], ['F', 'A', 1], ['Cl', 'A', 1], ['Br', 'A', 1], ['I', 'A', 1], ['At', 'A', 1], ['Ts', 'A', 911], ['Lu', 'C', 3], ['Lr', 'C', 3], ['He', 'A', 0], ['Ne', 'A', 0], ['Ar', 'A', 0], ['Kr', 'A', 0], ['Xe', 'A', 0], ['Rn', 'A', 0], ['Og', 'A', 911]];


function simple_balancing(charge_1, charge_2){
  for (var i = 0; i < Atoms.length; i++){
    if (Atoms[i][0] == charge_1){
      var c1 = Atoms[i][2];
    }
    else if (Atoms[i][0] == charge_2){
      var c2 = Atoms[i][2];
    }
  }
  var n = gcd(c1, c2), temp = c1;
  const a = [];
  c1 = Math.abs(c2 /= n);
  c2 = Math.abs(temp /= n);
  a[0] = c2;
  a[1] = c1;
  if (c1 > 1 && c2 > 1){
    document.getElementById('reaction').innerHTML = charge_1+   String(c1).sub() + ' ' + charge_2 + String(c2).sub();
  }
  else if (c1 == 1 && c2 == 1){
document.getElementById('reaction').innerHTML = charge_1 + ' ' + charge_2;
  }
  else if (c1 == 1){
    document.getElementById('reaction').innerHTML = charge_1 +  ' ' + charge_2 + String(c2).sub();
  }
  else if (c2 == 1) {
        document.getElementById('reaction').innerHTML = charge_1 +  String(c1).sub() + ' ' + charge_2;
  }
}

function messages(elem1, elem2){
  console.log(elem1 + elem2);
  var unstable = ['Mt', 'Ds', 'Rg', 'Nh', 'Fl', 'Mc', 'Lv', 'Ts', 'Og'];
  var nobles = ['He', 'Ne', 'Ar', 'Kr', 'Xe', 'Rn'];
  var rare_earth = ['La', 'Ac', 'Ce', 'Th', 'Pr', 'Pa', 'Nd', 'U', 'Pm', 'Np', 'Sm', 'Pu', 'Eu', 'Am', 'Gd', 'Cm', 'Tb', 'Bk', 'Dy', 'Cf', 'Ho', 'Es', 'Er', 'Fm', 'Tm', 'Md', 'Yb', 'No', 'Lu', 'Lr'];
  var non_metals = ['C', 'N', 'P', 'O', 'S', 'Se'];
  var metalloid = ['B', 'Si', 'Ge', 'As', 'Sb', 'Te', 'Po'];
  var akali = ['Li', 'Na', 'K', 'Rb', 'Cs', 'Fr'];
  var akali_earth = ['Be', 'Mg', 'Ca', 'Sr', 'Ba', 'Ra'];
  var halogens = ['F', 'Cl', 'Br', 'I', 'At'];
  if (unstable.includes(elem1) || unstable.includes(elem2)){
    document.getElementById('result').innerHTML = '<br/>Unknown! The charge of this cation has only been predicted in theory. These tend to be very unstable.<br/>';
  }
  else if (nobles.includes(elem1) || nobles.includes(elem2)){
  document.getElementById('result').innerHTML = 'Your highness! You have selected a noble gas. These have 8 electrons in their outer electron shell, which is the number that all atoms would want ideally, so they don\'t want to react with other atoms--and won\'t form a salt.<br/><br/>';
  }
  else if (rare_earth.includes(elem1) || rare_earth.includes(elem2)){
  document.getElementById('result').innerHTML = 'You\'re a gem! You have selected a rare earth metal. But watch out--they\'re radioactive!<br/><br/>';
  }
  else if (non_metals.includes(elem1) || non_metals.includes(elem2)){
  document.getElementById('result').innerHTML = 'Who passed gas? You have selected a non-metal! These often occur in nature as gases. The charges of these (other than oxygen) can vary, so they don\'t tend to form salts on their own. You might see them in polyatomic ions--charged groups of multiple atoms--like nitrates and phosphates, which CAN react with metals to form salts.<br/><br/>';
  }
  else if (mettaloid.includes(elem1) || mettaloid.includes(elem2)){
  document.getElementById('result').innerHTML = 'Feeling indecisive? You have selected a metalloid! Their properties, though not set in stone, tend to be somewhere in-between the properties of metals and non-metals.<br/><br/>';
  }
  else if (akali.includes(elem1) || akali.includes(elem2)){
  document.getElementById('result').innerHTML = 'Why so salty? You\'ve selected an alkali metal--these are great cations to form salts.<br/><br/>';
  }
  else if (akali_earth.includes(elem1) || akali_earth.includes(elem2)){
  document.getElementById('result').innerHTML = 'So salty! You\'ve selected an alkali earth metal--these work really well as cations to form salts.<br/><br/>';
  }
  else if (halogens.includes(elem1) || halogens.includes(elem2)){
  document.getElementById('result').innerHTML = 'Whoah there! You\'ve selected a halogen. These only have 7 electrons on their outer shell, but atoms really want 8, so they\'re highly reactive in their search for one more electron! As a result, they successfully react with metals to form salts. Be careful, though, because most are slightly toxic.<br/><br/>';
  }
  
}


const elem1 = 'Ca', elem2 = 'Cl';
simple_balancing(elem1, elem2);

// function complex_balancing(){
//   var lcm = 1, n = charges.length;
//   for (var i = 0; i < n; i++){
//     lcm *= (charges[i] * charges[i - 1]) / gcd(charges[i], charges[i-1]);
//   }
// }

function gcd(a, b){
  if (a % b == 0){
    return b;
  }
  return gcd(b, a % b);
}

function handleDragStart(ev) {
	this.style.opacity = '0.4';

	dragSrc = this;

	ev.dataTransfer.effectAllowed = 'move';
	ev.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragEnd(ev) {
	this.style.opacity = '1';

	items.forEach(function (item) {
		item.classList.remove('over')
	})
}

function handleDragOver(e) {
	if (e.preventDefault) {
		e.preventDefault();
	}
	return false;
}

function handleDragEnter(e) {
	this.classList.add('over');
}

function handleDragLeave(e) {
	this.classList.remove('over');
}

function handleDrop(e) {
	e.stopPropagation();
	
	if (dragSrc !== this){
		dragSrc.innerHTML = this.innerHTML;
		this.innerHTML = e.dataTransfer.getData("text");
	}
	return false;
}

let items = document.querySelectorAll('.box');
items.forEach(function (items) {
	items.addEventListener('dragstart', handleDragStart);
	items.addEventListener('dragend', handleDragEnd);
	items.addEventListener('dragover', handleDragOver);
	items.addEventListener('dragenter', handleDragEnter);
	items.addEventListener('dragleave', handleDragLeave);
	items.addEventListener('drop', handleDrop);
});

// Code that runs when reaction is requested
// var cationIndex = document.getElementById("cation").selectedIndex;
// var cationName = document.getElementById("cation").options[cationIndex].text;
// var anionIndex = document.getElementById("anion").selectedIndex;
// var anionName = document.getElementById("anion").options[cationIndex].text;

function allowDrop(ev) {
  ev.preventDefault();
}

function dragStart(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  console.log(ev.target.id);
  console.log(typeof(ev.target.id));
  console.log('HELLO');
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  // console.log('HELLO');
  // console.log((data));
  ev.currentTarget.appendChild(document.getElementById(data));
	ev.currentTarget.style.visibility = "hiddem";
}

function refresh() {
	window.location.reload("Refresh");
}


function runRxn(){
    var cation = document.getElementById('cation').innerText;
    var anion = document.getElementById('anion').innerText;
    simple_balancing(cation, anion);
    messages(cation, anion);
}

// Sets up periodic table with elements
function startUpPeriodicTable(){
var Atom = [
['Li', 'C', 1], ['Na', 'C', 1], ['K', 'C', 1], ['Rb', 'C', 1], ['Cs', 'C', 1], ['Fr', 'C', 1],
['Be', 'C', 2], ['Mg', 'C', 2], ['Ca', 'C', 2], ['Sr', 'C', 2], ['Ba', 'C', 2], ['Ra', 'C', 2],
['Sc', 'C', 3], ['Y', 'C', 3], ['La', 'C', 3], ['Ac', 'C', 3],
['Ti', 'C', 4], ['Zr', 'C', 4], ['Hf', 'C', 4], ['Rf', 'C', 4],
['Ce', 'C', 3], ['Th', 'C', 4],
['V', 'C', 5], ['Nb', 'C', 5], ['Ta', 'C', 5], ['Db', 'C', 5],
['Pr', 'C', 3], ['Pa', 'C', 5],
['Cr', 'C', 3], ['Mo', 'C', 4], ['W', 'C', 4], ['Sg', 'C', 6],
['Nd', 'C', 3], ['U', 'C', 6],
['Mn', 'C', 2], ['Tc', 'C', 4], ['Re', 'C', 4], ['Bh', 'C', 7],
['Pm', 'C', 3], ['Np', 'C', 5],
['Fe', 'C', 3], ['Ru', 'C', 4], ['Os', 'C', 4], ['Hs', 'C', 8],
['Sm', 'C', 3], ['Pu', 'C', 4],
['Co', 'C', 2], ['Rh', 'C', 3], ['Ir', 'C', 4], ['Mt', 'C', 911],
['Eu', 'C', 2], ['Am', 'C', 3],
['Ni', 'C', 2], ['Pd', 'C', 4], ['Pt', 'C', 4], ['Ds', 'C', 911],
['Gd', 'C', 3], ['Cm', 'C', 3],
['Cu', 'C', 2], ['Ag', 'C', 1], ['Au', 'C', 3], ['Rg', 'C', 911],
['Tb', 'C', 3], ['Bk', 'C', 3],
['Zn', 'C', 2], ['Cd', 'C', 2], ['Hg', 'C', 1], ['Cn', 'C', 2],
['Dy', 'C', 3], ['Cf', 'C', 3],
['B', 'C', 3], ['Al', 'C', 3], ['Ga', 'C', 3], ['In', 'C', 3], ['Tl', 'C', 1], ['Nh', 'C', 911],
['Ho', 'C', 3], ['Es', 'C', 3],
['C', 'C', 4], ['Si', 'A', 4], ['Ge', 'C', 4], ['Sn', 'C', 2], ['Pb', 'C', 4], ['Fl', 'C', 911],
['Er', 'C', 3], ['Fm', 'C', 3],
['N', 'A', 3], ['P', 'A', 3], ['As', 'C', 5], ['Sb', 'C', 5], ['Bi', 'C', 3], ['Mc', 'C', 911],
['Tm', 'C', 3], ['Md', 'C', 3],
['O', 'A', 2], ['S', 'A', 2], ['Se', 'A', 2], ['Te', 'C', 4], ['Po', 'C', 2], ['Lv', 'C', 911],
['Yb', 'C', 3], ['No', 'C', 2],
['F', 'A', 1], ['Cl', 'A', 1], ['Br', 'A', 1], ['I', 'A', 1], ['At', 'A', 1], ['Ts', 'A', 911],
['Lu', 'C', 3], ['Lr', 'C', 3],
['He', 'A', 0], ['Ne', 'A', 0], ['Ar', 'A', 0], ['Kr', 'A', 0], ['Xe', 'A', 0], ['Rn', 'A', 0], ['Og', 'A', 911]];

var loc = setLocations();
var elemStyle = '';
var x = '0';
var y = '0';
var elementCharge = 0;
var elementName = '';
for(var i=0; i<Atom.length;i++){
    // create div element for atom
    newDiv = document.createElement("div");
    // changing style for periodic element
    elemStyle = 'height:35px;width:30px;';
    // Select color for div based on atom type
    if(Atom[i][1] == 'C'){
        elemStyle = elemStyle + 'background:orange;'
    } else {
        elemStyle = elemStyle + 'background:#7B68EE;'
    }
    newDiv.style = elemStyle;
    newDiv.id = Atom[i][0];
    // Add charge to atom element
    // Makes charge negative for anions
    if(Atom[i][1] == 'C'){
        elementCharge = Atom[i][2];
    } else {
        elementCharge = Atom[i][2] * -1;
    }
    // Add atom name to div element 
    elementName = Atom[i][0];
    // Make the elements draggable
    newDiv.draggable = 'true';
    newDiv.innerHTML = "<p><b>"+elementName+"<sup>"+elementCharge+"</sup></b></p>";
    document.getElementById('box').appendChild(newDiv);
    document.getElementById(elementName).onclick = function(){sendID(this.id);};
}
// change the location of the atoms to periodic spaces
for(var i=0; i<loc.length;i++){
    var elem = document.getElementById(loc[i][0]);
    elem.style = 'height:35px;width:30px;' + 'position: absolute; left: '+loc[i][1]+'px; top: '+loc[i][2]+'px; background: '+elem.style.background;
}
}


function sendID(id){
    for(var i=0; i<Atoms.length; i++){
        if(Atoms[i][0] == id){
            var CorA = Atoms[i][1];
        }
    }
    console.log(CorA);
    if(CorA == 'C'){
        document.getElementById('cation').innerHTML = id;
    } else {
        document.getElementById('anion').innerHTML = id;
    }
}


// Sets locations for elements on periodic table
function setLocations(){
    var temp = [
        [['Li', '19', '95'],['Na', '19', '138'],['K', '19', '181'],['Rb', '19', '224'], ['Cs', '19', '267'], ['Fr', '19', '310']],
        [['Be', '56', '95'], ['Mg', '56', '138'], ['Ca', '56', '181'], ['Sr', '56', '224'], ['Ba', '56', '267'], ['Ra', '56', '310']],
        [['Sc', '93', '181'], ['Y', '93', '224'], ['La', '93', '267'], ['Ac', '93', '310']],
        [['Ti', 'C', 4], ['Zr', 'C', 4], ['Hf', 'C', 4], ['Rf', 'C', 4]],
        [['V', 'C', 5], ['Nb', 'C', 5], ['Ta', 'C', 5], ['Db', 'C', 5]],
        [['Cr', 'C', 3], ['Mo', 'C', 4], ['W', 'C', 4], ['Sg', 'C', 6]],
        [['Mn', 'C', 2], ['Tc', 'C', 4], ['Re', 'C', 4], ['Bh', 'C', 7]],
        [['Fe', 'C', 3], ['Ru', 'C', 4], ['Os', 'C', 4], ['Hs', 'C', 8]],
        [['Co', 'C', 2], ['Rh', 'C', 3], ['Ir', 'C', 4], ['Mt', 'C', 911]],
        [['Ni', 'C', 2], ['Pd', 'C', 4], ['Pt', 'C', 4], ['Ds', 'C', 911]],
        [['Cu', 'C', 2], ['Ag', 'C', 1], ['Au', 'C', 3], ['Rg', 'C', 911]],
        [['Zn', 'C', 2], ['Cd', 'C', 2], ['Hg', 'C', 1], ['Cn', 'C', 2]],
        [['B', '465', '95'], ['Al', '465', '138'], ['Ga', '465', '181'], ['In', '465', '224'], ['Tl', '465', '267'], ['Nh', '465', '310']],
        [['C', 'C', 4], ['Si', 'A', 4], ['Ge', 'C', 4], ['Sn', 'C', 2], ['Pb', 'C', 4], ['Fl', 'C', 911]],
        [['N', 'A', 3], ['P', 'A', 3], ['As', 'C', 5], ['Sb', 'C', 5], ['Bi', 'C', 3], ['Mc', 'C', 911]],
        [['O', 'A', 2], ['S', 'A', 2], ['Se', 'A', 2], ['Te', 'C', 4], ['Po', 'C', 2], ['Lv', 'C', 911]],
        [['F', 'A', 1], ['Cl', 'A', 1], ['Br', 'A', 1], ['I', 'A', 1], ['At', 'A', 1], ['Ts', 'A', 911]],
        [['He', '650', '52'], ['Ne', '650', '95'], ['Ar', '650', '138'], ['Kr', '650', '181'], ['Xe', '650', '224'], ['Rn', '650', '267'], ['Og', '650', '310']],
        [['Ce', '110', '370'], ['Th', '110', '412']],
        [['Pr', 'C', 3], ['Pa', 'C', 5]],
        [['Nd', 'C', 3], ['U', 'C', 6]],
        [['Pm', 'C', 3], ['Np', 'C', 5]],
        [['Sm', 'C', 3], ['Pu', 'C', 4]],
        [['Eu', 'C', 2], ['Am', 'C', 3]],
        [['Gd', 'C', 3], ['Cm', 'C', 3]],
        [['Tb', 'C', 3], ['Bk', 'C', 3]],
        [['Dy', 'C', 3], ['Cf', 'C', 3]],
        [['Ho', 'C', 3], ['Es', 'C', 3]],
        [['Er', 'C', 3], ['Fm', 'C', 3]],
        [['Tm', 'C', 3], ['Md', 'C', 3]],
        [['Yb', 'C', 3], ['No', 'C', 2]],
        [['Lu', 'C', 3], ['Lr', 'C', 3]]
        ];
    var IX = 0;
    var IY = 0;
    var FX = 0;
    var FY = 0;
    for(var i=0; i<temp.length-1; i++){
        if(temp[i].length == temp[i+1].length){
            for(var j=0; j<temp[i].length; j++){
                IX = parseInt(temp[i][j][1]);
                IY = parseInt(temp[i][j][2]);
                FX = IX + 37;
                FY = IY;
                temp[i+1][j][1] = FX.toString();
                temp[i+1][j][2] = FY.toString();
            }
        }
    }
    var text = '[';
    for(var i=0; i<temp.length; i++){
        for(var j=0; j<temp[i].length; j++){
            text = text+'[\"'+temp[i][j][0]+'\",'+'\"'+temp[i][j][1]+'\",'+'\"'+temp[i][j][2]+'\"],';
        }
    }
    text = text + '];';
    // console.log(text)
    var location = [];
    for(var i=0; i<temp.length; i++){
        for(var j=0; j<temp[i].length; j++){
            location.push(temp[i][j]);
        }
    }
    return location;
}