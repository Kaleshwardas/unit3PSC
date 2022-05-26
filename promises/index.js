function makeOrder(){
    document.getElementById("order").innerHTML=null;
    document.getElementById("order2").innerHTML=null;
    

    let el=document.getElementsByClassName("item")
     console.log(el)
    let items=[];
    console.log(items)
    for(let i=0;el[i];i++){
        if(el[i].checked){
            // items.push(item[i].value)
            items.push(el[i].value)
        }
    }
    function status(){
        if(items.length!==0){
            return true;
        }
        else{
            return false;
        }
    }
    let myPromise=new Promise(function (resolve,reject){
        let status_value =status()
        // console.log(status)
        let time =Math.floor(Math.random()*7000)
        if(status_value){
            setTimeout(function(){
                resolve();
            },time)
        }
        else{
           reject("Please Make Order You haven't ordered any Item")
        }
    })
    myPromise.then(function(){
        let box=document.getElementById("order")
        for(let i=0;i<items.length;i++){
            // console.log(items[i])
            if(items[i]=="id1"){
                let img=document.createElement("img")
                img.src="https://b.zmtcdn.com/data/pictures/7/19649707/8fb35024f65ed90f2f5b6b8d3892324e.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
                box.append(img)
                // console.log(items[i])
            }
            if(items[i]=="id2"){
                let img=document.createElement("img")
                img.src="https://b.zmtcdn.com/data/pictures/3/19178683/ec3e97d96924fc04c5b28f21ad2cfc22.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
                box.append(img)
                // console.log(items[i])
            }
            if(items[i]=="id3"){
                let img=document.createElement("img")
                img.src="https://i.pinimg.com/236x/a5/a9/68/a5a968aca6096479f33b161d6f3c4067.jpg"
                box.append(img)
                // console.log(items[i])
            }
      
            if(items[i]=="id5"){
                let img=document.createElement("img")
                img.src="https://b.zmtcdn.com/data/pictures/8/19658398/683aa6d2feea6d6ac9e9530c5ed95946.jpg?fit=around|300:273&crop=300:273;*,*"
                box.append(img)
                // console.log(items[i])
            }
        }
        let orderid =Math.floor(Math.random()*10000000)
       let p= document.createElement("p")
       p.innerHTML="Your Order id is:"+"  "+orderid;
        document.getElementById("order2").append(p)
    })
    myPromise.catch(function(value){
        alert(value)
    })
}