import { Component } from '@angular/core';
import { Post } from './model/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {
      id:0,
      title:"Connaissez-vous l’overfitting ?",
      content: 'Dans cet article, nous vous présentons un des écueils des algorithmes d’apprentissage supervisé, le surapprentissage ou overfitting en anglais. Qu’est-ce que l’overfitting? L’overfitting est le risque pour un modèle d’apprendre…',
      loveIts:1,
      create_at: new Date("2021/01/27")
    },
    {
      id:1,
      title:"U-NET",
      content: "U-NET est un modèle de réseau de neurones dédié aux taches de Vision par Ordinateur (Computer Vision) et plus particulièrement aux problèmes de Segmentation Sémantique. Découvrez tout ce que vous…",
      loveIts:0,
      create_at:new Date("2020/02/05")
    },
    {
      id:2,
      title:"Isolation Forest",
      content: "Aujourd’hui, nous nous intéressons à l’Isolation Forest, un algorithme de Machine Learning destiné à résoudre des problèmes de classification binaires tels que la détection de fraude ou le diagnostic d’une…",
      loveIts:-1,
      create_at:new Date()
    }
  ];
}
