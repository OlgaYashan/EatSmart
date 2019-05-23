import moment from 'moment';

function myIndexOf2 (arr, o){  
    console.log(arr.length); 
    for (var i = 0; i < arr.length; i++) {
      
        if (arr[i].product.name == o.name) {
            return i;
        }
    }
    return -1;
}

function myIndexOf1 (arr, o){  
    console.log(arr.length); 
    for (var i = 0; i < arr.length; i++) {
      
        if (arr[i].name == o.name) {
            return i;
        }
    }
    return -1;
}

function myIndexOf3 (arr, name){  
    console.log(arr.length); 
    for (var i = 0; i < arr.length; i++) {
      
        if (arr[i].name == name) {
            return i;
        }
    }
    return -1;
}

export function mostOftenEatenProduct(productsList){
    var array=[];
    for (var i=0; i<productsList.length;i++){
        if(myIndexOf2(array,productsList[i])==-1){
            var item = {product:productsList[i], count: 0};
            array.unshift(item);
        }
        else{
            var k = myIndexOf2(array,productsList[i]);
            array[k].count++;
        }
    }
    var maxCount=0;
    for(var y=0; y<array.length;y++){
        if(array[y].count>maxCount){
            maxCount=array[y].count;
        }
    }
    var resultProductsArray=[];
    for(var p=0;p<array.length;p++){
        if(array[p].count==maxCount){
            resultProductsArray.unshift(array[p].product)
        }
    }
    return resultProductsArray;
}

export function eatenProductsWithForbidenComponents(productsList, FCList){
    var resultArr=[];
    for(var j=0; j<productsList.length;j++){
        for(var i =0; i< FCList.length;i++){
            if(myIndexOf1(productsList[j].components,FCList[i])!=-1){
                    if(myIndexOf1(resultArr,productsList[j])==-1){
                        resultArr.unshift(productsList[j]);
                    }
                    
            }
        }
        
    }
    return resultArr;
}

export function SugarRatio(productsList){
  if(productsList.length>0){
    var firstTime =moment( productsList[productsList.length-1].date);
    var secondTime = moment( productsList[0].date);
    var Days = secondTime.diff(firstTime,'days')+1;
    var productSugarCount=0;
    for(var i=0; i< productsList.length;i++){
        if( myIndexOf3( productsList[i].components,'Цукор')!=-1){
            productSugarCount++;
        }
    }
    var result = Math.ceil(productSugarCount/Days);
    return result;
    }
    else{
        return 0;
    }
}

