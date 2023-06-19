import React from 'react'

function NameList() {
    const names = ['JK', 'RM', 'Jin', 'KT']
    const nameList = names.map((name, index) => <h3 key={index}> {name} </h3>)

    return(<div> {nameList} </div>)
}

export default NameList
