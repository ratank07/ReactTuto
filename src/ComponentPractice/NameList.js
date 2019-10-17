import React from 'react'
import Person from './Person';

export default function NameList() {
    const names = ['Ratan', 'Dinesh', 'DInanath']
    const Personnames = [ {
        id:0,
        name:'Ratan',
        age: 25,
        skill: React
        },
        {
            id:1,
        name:'Dinesh',
        age: 25,
        skill: 'angular'
        },
        {
            id:2,
        name:'Dina',
        age: 25,
        skill: 'Vue'
        }]
  
    const nameList =  names.map((name, index)=> <h2 key = {index}> {index} {name}</h2>)
    const PersonList = Personnames.map(person => <Person key={person.id} person={person.toString()} />) 
  return <div>{nameList}</div>
}

