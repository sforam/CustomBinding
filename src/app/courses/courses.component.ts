import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  courses=[
    {
      "id": 101,
      "name": "React Native Essentials",
      "author": "Samantha Miller",
      "price": 0.00,
      "ratings": 4.7,
      "duration": 35,
      "type": "Free",
      "image": "assets/courses/React Native Essentials.jpg",
      "description": "Master React Native with this comprehensive course covering essential concepts and practical applications."
    },
    {
      "id": 102,
      "name": "Angular for Beginners",
      "author": "Mark Vought",
      "price": 129.00,
      "ratings": 4.5,
      "duration": 28,
      "type": "Premium",
      "image": "assets/courses/Angular for Beginners.jpg",
      "description": "Learn the fundamentals of Angular framework in this beginner-friendly course."
    },
    {
      "id": 103,
      "name": "Python Programming ",
      "author": "John Smith",
      "price": 0.00,
      "ratings": 4.8,
      "duration": 42,
      "type": "Free",
      "image": "assets/courses/Python Programming Masterclass.jpg",
      "description": "Become a proficient Python programmer with this extensive masterclass covering everything from basics to advanced topics."
    },
    {
      "id": 104,
      "name": "Machine Learning Fundamentals",
      "author": "Emily Johnson",
      "price": 0.00,
      "ratings": 4.6,
      "duration": 50,
      "type": "Free",
      "image": "assets/courses/Machine Learning Fundamentals.jpg",
      "description": "Gain a solid foundation in machine learning techniques and algorithms in this comprehensive course."
    },
    {
      "id": 105,
      "name": "iOS App Development ",
      "author": "David Brown",
      "price": 159.00,
      "ratings": 4.7,
      "duration": 30,
      "type": "Premium",
      "image": "assets/courses/iOS App Development Bootcamp.png",
      "description": "Kickstart your journey into iOS app development with this intensive bootcamp."
    },
    {
      "id": 106,
      "name": "Web Design Principles",
      "author": "Rachel Green",
      "price": 0.00,
      "ratings": 4.4,
      "duration": 25,
      "type": "Free",
      "image": "assets/courses/Web Design Principles.jfif",
      "description": "Learn the essential principles and best practices of modern web design."
    },
    {
      "id": 107,
      "name": "Java Programming Basics ",
      "author": "Michael White",
      "price": 0.00,
      "ratings": 4.5,
      "duration": 32,
      "type": "Free",
      "image": "assets/courses/Java Programming Basics.jpg",
      "description": "Begin your journey into Java programming with this beginner-friendly course."
    },
    {
      "id": 108,
      "name": "Data Science Essentials",
      "author": "Emma Clark",
      "price": 189.00,
      "ratings": 4.9,
      "duration": 45,
      "type": "Premium",
      "image": "assets/courses/Data Science Essentials.jpg",
      "description": "Master the essentials of data science and analytics in this comprehensive course."
    },
    {
      "id": 109,
      "name": "Cybersecurity Fundamentals",
      "author": "Kevin Adams",
      "price": 169.00,
      "ratings": 4.7,
      "duration": 38,
      "type": "Premium",
      "image": "assets/courses/Cybersecurity Fundamentals.jfif",
      "description": "Understand the fundamental principles of cybersecurity and protect against digital threats."
    },
    {
      "id": 110,
      "name": "Blockchain Basics",
      "author": "Sophia Lee",
      "price": 159.00,
      "ratings": 4.6,
      "duration": 36,
      "type": "Premium",
      "image": "assets/courses/Blockchain Basics.jpg",
      "description": "Explore the foundational concepts of blockchain technology and its potential applications."
    }
  ]
  
  getTotalCourses(){
    return this.courses.length;

  }
  getTotalFreeCourses(){
    return this.courses.filter(course => course.type === 'Free').length;
  }
  getTotalPremiumCourses(){
    return this.courses.filter(course => course.type === 'Premium').length;
  }

  courseCountRadioButton: string = 'All';
  searchText:string ='';

  onFilterRadioButtonChanged(data:string)
  {
    this.courseCountRadioButton = data;
    
  }
  onSearchTextEntered(searchValue:string){
    this.searchText = searchValue;
    console.log(this.searchText);
  } 

}
