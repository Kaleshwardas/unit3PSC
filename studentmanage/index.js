//<<<======>>>>>> Step 2 (for convert in obj form Use constraction function)
function Student(name,course,unit,image,batch){       // pass the any element 
    this.name=name;
    this.course=course;
    this.unit=unit;
    this.image=image;
     this.batch=`FT_WEB ${batch} `;
    //this.batch=batch;
    
    
    }     
    
    //>>>>Step ==> 1  <=====> then use constraction function 
    
    function storeData(event){
        event.preventDefault();
        let form=document.getElementById("students_data");
        let name=form.name.value;
        let course=form.course.value;
        let unit=form.unit.value;
        let image=form.image.value;
        let batch=form.batch.value;
    
        //console.log(name,course,unit,image,batch)     for checking output
    
     //After 2 steps take variable and put all data with new
    
     let s1= new Student(name,course,unit,image,batch);
    
     //console.log(s1);  it show your data in object form
    
     // Now create an array and get items
     let data=JSON.parse(localStorage.getItem("students")) ||[]
    
     data.push(s1)
    
     //Now We send data to local storage
    
     localStorage.setItem("students",JSON.stringify(data));
    
     }
    
     //=======>>>>>>>>[Now clacuate the batches && total of batch ]>>>>>>>>>>>>>>
    
     function calculate(){
        let data=JSON.parse(localStorage.getItem("students")) ||[]
       
       let navData=JSON.parse(localStorage.getItem("Nav")) ||[] ;
    
        let obj={}
     
        for(let i=0;i<data.length;i++)
        {
            if(obj[data[i].batch]===undefined)
            {
                obj[data[i].batch]=1
            }
            else{
                obj[data[i].batch]=obj[data[i].batch]+1
            }
        }
        navData.push(obj)
    
      
       console.log(obj)
       for(var key in obj){
       
           var div=document.createElement("div");
           var h4=document.createElement("h4");
        //    h4.innerText=key;
           var p=document.createElement("p");
        //    h4.innerText=`FT-WEB${key}--${p.innerText=obj[key]} ||`
          h4.innerText=key+"||";
           p.innerText=obj[key];
           
          div.append(h4,p)
          document.querySelector("#navbar").append(div)
          console.log(key,obj[key])
       }
    
    
        
     }
       
     calculate();
    
     //.>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    
     //  let data=JSON.parse(localStorage.getItem("students")) ||[]
    
    //  let navData=JSON.parse(localStorage.getItem("Nav")) ||{};
    
    //  displayNavsize(navData);
    
    //     function  displayNavsize(beta){
    //         var div=document.getElementById("navbar");
    //         div.innerHTML="";
    //         for(k in beta){
    //             var batch=document.createElement("div");
    //             batch.style.margin="0 10px";
    //             batch.innerText=k+" - "+beta[k];
    //             div.append(batch)
    //         }
    //     }