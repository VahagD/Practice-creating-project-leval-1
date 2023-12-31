/*Դասի առաջադրանքը

1)Ստեղծեք numberOfFilms փոփոխական և նրր մեջ տեղադրեք օգտատերի հարցի պատասխանը
«Քանի՞ ֆիլմ եք տեսել»

2)ստեղծել personalMovieDB օբյեկը և նրա մեջ տեղադրել հետևյալ հատկանիշները
    - count -  այստեղ փոխանցեք առաջին հարցի պատասխանը
    - movies - այս հատկանիշի մեջ տեղադրեղ դատարկ օբյկտ
    - actors - նույնպես տեղադրեք դատարկ օբյեկտ
    - genres - այստեղ տեղադրեք դատարկ զանգված
    - private - այստեղ տեղադրեք boolean(տրամաբանական) նշանակություն false
    
3) Տվեք օգտատերին 2 անգամ հարցեր
    - 'Վերջին դիտած ֆիլմը'
    - 'Որքան կգանհատեք այն'

3) Задайте пользователю по два раза вопросы
    - 'Один из последних просмотренных фильмов'
    - 'На сколько оцените его'

Պատասխանը տեղադրեք առանձին փոփոխականի մեջ
Պատասխանը գրեք movies օբյեկտի մեջ

    movies {
        'logan' '8.1'
    }

Ստուգեք որպիս կոնսլում աշխատի առանց սխալների -

-------Ստեղծել Պռոյեկտ 2-րդ մաս---------

 Առաջադրանքը դասի համարա:
1) Ցիկլի օգնությամբ ավտոմատացրեք՝ օգտաերի հարցե ֆիլմերի մասին:

2)Այնպես արեք, որպիսի օգտատրը չկարողանա թոնել պատասխանը որպես դատարկ տող, չկարողանա չեղարկել պատասխանը 
կամ մուտքագրի ֆիլմի անվանում ավել քան՝ 50 սիմվոլ, եթե դա տեղի է ունենում ապա հարցը կրին ենք տալիս:
 (Ցանկացած տողին կարել է դիմել,  str.length - և ստանալ նրա երարությունը)
 
 3)Պայմանի միջոցով ստուգեք personalMovieDB.count և եթե այն փոքր է 10-ից դուրս բերել ծանուցում 
 "Ձեր դիտած ֆիլմերի քանաքը բավականին քիչ է!"  եթե 10-ից 30 - "Դուք դասական հանդիսատես եք", իսկ եթե շատ 
 "Դուք կինոման եք", իսկ եթե չի համապատասխանում ոչ մի տարբերակին ուրեմն գրում ենք "Սխալ է տեղի ունեցել"
 
 4) Սովորեք և նորից գրեք ցիկլը ևս երկու եղանակով
 
*/
"use strict";


const numberOfFilms = +prompt('Քանի՞ ֆիլմ եք տեսել', '');


const personalMovieDB = {
     count: numberOfFilms,//այստեղ փոխանցվում է պատասխանը առաջին հարցի
     movies: {},
     actors: {},
     genres: [],
     pivate: false
};


for(let i = 0; i < 2; i++){
    const a = prompt('Վերջին դիտած ֆիլմը', ''),//Ստեղծումենք տեխնիկական փոփոխականնր մենք իմաստալից չենք անվանում քանի որ նրանք կոդում մեկ անգամ են հանդիպելու
          b = prompt('Որքան՞ կգանհատեք այն', '')


      if(a != null && b != null && a != '' && b != '' && a.length < 50){ //Ստուգումենք արդյոք օգտատերը չի սեղմել cancel կոճակը և տողը հարցման դատարկ չի թողել և a-ի երակարությունը փոքրա 50-ից
         personalMovieDB.movies[a] = b;
         console.log('Done!');
    }else{
        console.log('Error!');
        i--;
    }
}

if(personalMovieDB.count < 10){
    console.log('Ձեր դիտած ֆիլմերի քանաքը բավականին քիչ է!');
}else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
   console.log('Դուք դասական հանդիսատես եք!');
}else if(personalMovieDB.count >= 30){
    console.log('Դուք կինոման եք!');
}else{
    console.log('Սխալ է տեղի ունեցել!');
}

console.log(personalMovieDB);

