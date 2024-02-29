import React from 'react'

const showArticle = (props) => {
    console.log(props)
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl">showArticle</h1>
            <h1 className="text-3xl">{props.params.title}</h1>
        </div>
    )
}

export default showArticle