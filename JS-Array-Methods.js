//MAP
function doubleValues(arr){
    return arr.map(function(val){
        return val * 2;
    });
 }

function valTimesIndex(arr){
    return arr.map(function(val,index){
       return val * index; 
    });
}

function extractKey(arr, key){
    return arr.map(function(val){
        return val[key];
    })
}

function extractFullName(arr){
    return arr.map(function(val){
        return val['first']+" "+val['last'];
    });
}

//FILTER
function filterByValue(arr, key){
    return arr.filter(function(val){
        return val[key] === true;
    });
}

function find(arr, searchValue){
    return arr.filter(function(val){
        return val === searchValue;
    })[0];
}

function findInObj(arr, key, searchValue){
    return arr.filter(function(val){
        return val[key] === searchValue;
    })[0];
}

function removeVowels(str){
    var vowels = "aeiou";
    return str.toLowerCase().split("").filter(function(val){
        return vowels.indexOf(val) === -1;
    }).join('');
}



function doubleOddNumbers(arr){
    return arr.filter(function(val){
        return val % 2 !== 0;
    }).map(function(val){
        return val * 2;
    });
}


//SOME
function hasOddNumber(arr){
    return arr.some(function(val){
        return val % 2 === 1;    
    });
}

function hasAZero(num){
    return num.toString().split('').some(function(val){
        return val === '0';
    });
}


//EVERY
function hasNoDuplicates(arr){
    return arr.every(function(val){
        return arr.indexOf(val) === arr.lastIndexOf(val);
    });
}
function hasOnlyOddNumbers(arr){
    return arr.every(function(val){
        return val %2 === 1;
    });
}

function hasCertainKey(arr, key){
    return arr.every(function(val){
        return key in val; 
    });
}

function hasCertainValue(arr, key, searchValue){
    return arr.every(function(val){
        return val[key] === searchValue; 
    });
}

//REDUCE
function extractValue(arr, key){
    return arr.reduce(function(acc, next){
        acc.push(next[key]);
        return acc;
    }, []);
}

function vowelCount(str){
    var vowels = "aeiou";
    return str.toLowerCase().split('').reduce(function(acc,next){
        if(vowels.indexOf(next) !== -1){
            if(acc[next]){
                acc[next]++;
            }else{
                acc[next] = 1;
            }
        }
        return acc;
    },{});
}

function addKeyAndValue(arr, key, value){
    return arr.reduce(function(acc,next, index){
        acc[index][key] = value;
        return acc;
    },arr);
}

function partition(arr, callback){
return arr.reduce(function(acc, next, index){
    if(callback(next)){
       acc[0].push(next);
    }else{
       acc[1].push(next);
    }
    return acc;
}, [[],[]]);

}

 //----------------------------------------------
 //                 RUN MAP
 //----------------------------------------------
 
 console.log("-------MAP--------");

 console.log(">>doubleValues:");
 console.log(doubleValues([1,2,3])); 

console.log(">>valTimesIndex:");
console.log(valTimesIndex([-11,2,3]));

console.log(">>ExtractKey:");
console.log(extractKey([{name: 'Konstantinos'}, {name: 'George'}, {name: 'Spyros'}, {name: 'Antonis'}], 'name')); 
// ['Konstantinos', 'George', 'Spyros', 'Antonis']

console.log(">>extractFullName:");
console.log(extractFullName([{first: 'Konstantinos', last:"Koukakis"}, {first: 'Tim', last:"Papadopoulos"}, {first: 'George', last:"Georgiou"}, {first: 'Panagiotis', last:"Andreou"}])); 
// ['Konstantinos Koukakis', 'Tim Papadopoulos', 'George Georgiou', 'Panagiotis Andreou']

console.log("----------FILTER---------");
//----------------------------------------------
//                 RUN FILTER
//----------------------------------------------

console.log(">>filterByValue:");
console.log(filterByValue([{first: 'Konstantinos', last:"Koukakis"}, {first: 'Tim', last:"Papadopoulos", isCatOwner: true}, {first: 'George', last:"Andreou"}, {first: 'Takis', last:"Tasou", isCatOwner: true}], 'isCatOwner'));
// [{first: 'Tim', last:"Papadopoulos", isCatOwner: true}, {first: 'Takis', last:"Tasou", isCatOwner: true}]

console.log(">>find:");
console.log(find([1,2,3,4,5], 3)); // 3
console.log(find([1,2,3,4,5], 10)); // undefined

console.log(">>findInObj");
console.log(findInObj([{first: 'Konstantinos', last:"Koukakis"}, {first: 'Maria', last:"Anastasiou", isCatOwner: true}, {first: 'Xristos', last:"Papadopoulos"}, {first: 'Panagiotis', last:"Andreou", isCatOwner: true}], 'isCatOwner',true));
// {first: 'Maria', last:"Anastasiou", isCatOwner: true}

console.log(">>d>>oubleOddNumbers:");
console.log(doubleOddNumbers([1,2,3,4,5])); // [2,6,10]
console.log(doubleOddNumbers([4,4,4,4,4])); // []
console.log("----------SOME-------------");
//----------------------------------------------
//                 RUN SOME
//-----------------------------------------------

console.log(">>hasOddNumber:");
console.log(hasOddNumber([1,2,2,2,2,2,4])); // true
console.log(hasOddNumber([2,2,2,2,2,4])); // false

console.log(">>hasAZero:");
console.log(hasAZero(3332123213101232321)); // true
console.log(hasAZero(1212121) );// false

console.log("---------EVERY-----------");
//----------------------------------------------
//                 RUN EVERY
//----------------------------------------------

console.log(">>hasNoDuplicates:");
console.log(hasNoDuplicates([1,2,3,1])); // false
console.log(hasNoDuplicates([1,2,3]) );// true

console.log(">>hasOnlyOddNumbers:");
console.log(hasOnlyOddNumbers([1,3,5,7])); // true
console.log(hasOnlyOddNumbers([1,2,3,5,7]) );// false

console.log(">>hasCertainKey:");
var arr1 = [
    {title: "Instructor", first: 'A', last:"1"}, 
    {title: "Instructor", first: 'B', last:"2", isCatOwner: true}, 
    {title: "Instructor", first: 'C', last:"3"}, 
    {title: "Instructor", first: 'D', last:"4", isCatOwner: true}
];
console.log(hasCertainKey(arr1,'first') );// true
console.log(hasCertainKey(arr1,'isCatOwner')); // false

console.log(">>hasCertainValue:");
console.log(hasCertainValue(arr1,'title','Instructor')); // true
console.log(hasCertainValue(arr1,'first','E')); // false

console.log("---------REDUCE----------");
//----------------------------------------------
//                 RUN REDUCE
//----------------------------------------------

console.log(">>extractValue:");
var arr2 = [{name: 'A'}, {name: 'B'}, {name: 'C'}, {name: 'D'}];
console.log(extractValue(arr2,'name')); // ['A', 'B', 'C', 'D']

console.log(">>vowelCount:");
console.log(vowelCount('Elie')); // {e:2,i:1};
console.log(vowelCount('Tim')); // {i:1};
console.log(vowelCount('Matt')); // {a:1})
console.log(vowelCount('hmmm')); // {};
console.log(vowelCount('I Am awesome and so are you')); // {i: 1, a: 4, e: 3, o: 3, u: 1};

console.log(">>addKeyAndValue:");
console.log(addKeyAndValue(arr2, 'title', 'Instructor'));
// [
//     {title: 'Instructor', name: 'A'}, 
//     {title: 'Instructor', name: 'B'}, 
//     {title: 'Instructor', name: 'C'}, 
//     {title: 'Instructor', name: 'D'}
//    ]
// */

console.log(">>partition:");
function isEven(val){
    return val % 2 === 0;
}

var arr = [1,2,3,4,5,6,7,8];

console.log(partition(arr, isEven)); // [[2,4,6,8], [1,3,5,7]];

function isLongerThanThreeCharacters(val){
    return val.length > 3;
}

var names = ['AAAAA', 'BBBB', 'CCCCC', 'D'];

console.log(partition(names, isLongerThanThreeCharacters)); // [['AAAAA', 'BBBB', 'CCCCC'], ['D']]

