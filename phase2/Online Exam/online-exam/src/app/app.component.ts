import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'online-exam';
  totalNum = 0;
  msg="";
  exam:boolean=false;
  allQuestion=[
    {question:"1. What is 5 x 7",ans1:"20",ans2:"30",ans3:"40",ans4:"35",correctAns:"35"},
    {question:"2. What is the most common internet coding language?",ans1:"HTML",ans2:"Angular",ans3:"Socket",ans4:"Python",correctAns:"HTML"},
    {question:"3. What the correct HTMl tag to write a paragraph?",ans1:"<p>",ans2:"<para>",ans3:"<paragraph>",ans4:"<param>",correctAns:"<p>"},
    {question:"4. What fole extension is used to store models?",ans1:".js",ans2:".ts",ans3:".html",ans4:".json",correctAns:".ts"},
    {question:"5. Where are the components of an angular project stored?",ans1:"app folder",ans2:"src folder",ans3:"asset folder",ans4:"enviornment folder",correctAns:"app folder"},
    {question:"6. What is 64/8?",ans1:"8",ans2:"5",ans3:"12",ans4:"10",correctAns:"8"},
    {question:"7. What is the correct way to make a new angular progject?",ans1:"npm new project-name",ans2:"ng new project-name",ans3:"node new project-name",ans4:"angular project-name",correctAns:"ng new project-name"},
    {question:"8. What is the correct way to run an angular project?",ans1:"ng server",ans2:"ng serve",ans3:"ng project-name",ans4:"ng run project-name",correctAns:"ng serve"},
    {question:"9. What is the styling language used for internet programming?",ans1:"CSS",ans2:"Python",ans3:"Javascript",ans4:"Typescript",correctAns:"CSS"},
    {question:"10. Who is the best simplilearn professor?",ans1:"Akaash",ans2:"Ajay",ans3:"Raj",ans4:"Meeta",correctAns:"Akaash"},
    

  ]

  checkAnswer(form: NgForm){
    console.log(form.value);
    let ans1 = form.value["1. What is 5 x 7"];
    let ans2 = form.value["2. What is the most common internet coding language?"];
    let ans3 = form.value["3. What the correct HTMl tag to write a paragraph?"];
    let ans4 = form.value["4. What fole extension is used to store models?"];
    let ans5 = form.value["5. Where are the components of an angular project stored?"];
    let ans6 = form.value["6. What is 64/8?"];
    let ans7 = form.value["7. What is the correct way to make a new angular progject?"];
    let ans8 = form.value["8. What is the correct way to run an angular project?"];
    let ans9 = form.value["9. What is the styling language used for internet programming?"];
    let ans10 = form.value["10. Who is the best simplilearn professor?"];
    
    if(ans1 == "35"){
      this.totalNum+=1;
    }
    if(ans2 == "HTML"){
      this.totalNum+=1;
    }
    if(ans3 == "<p>"){
      this.totalNum+=1;
    }
    if(ans4 == ".ts"){
      this.totalNum+=1;
    }
    if(ans5 == "app folder"){
      this.totalNum+=1;
    }
    if(ans6 == "8"){
      this.totalNum+=1;
    }
    if(ans7 == "ng new project-name"){
      this.totalNum+=1;
    }
    if(ans8 == "ng serve"){
      this.totalNum+=1;
    }
    if(ans9 == "CSS"){
      this.totalNum+=1;
    }
    if(ans10 == "Akaash"){
      this.totalNum+=1;
    }

    if(this.totalNum >6){
      this.msg = "You passed! " +this.totalNum+"/10"; 
      this.exam = true;
    }
    else{
      this.msg = "You failed. " +this.totalNum+"/10";
    }
  }
}
