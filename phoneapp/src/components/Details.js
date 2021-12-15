import React, { Component } from 'react'
import {useParams} from 'react-router-dom';

export default function Details (){
    let {id} = useParams();
    return <h1> Details of {id} </h1>
}