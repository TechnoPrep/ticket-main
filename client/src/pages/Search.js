//search api function copied from https://www.freecodecamp.org/news/build-a-search-filter-using-react-and-react-hooks/
//this is just a boilerplate, we may use it, we may not. Just thought it would be nice to have for now


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Input } from 'semantic-ui-react'
export default function Search() {
    const [APIData, setAPIData] = useState([])
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)  //api url goes here
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])


    //change variable names to match api response
    return (
        <div style={{ padding: 20 }}>
            <Input icon='search'
                placeholder='Search...'
            />
            <Card.Group itemsPerRow={3} style={{ marginTop: 20 }}>
                {APIData.map((item) => {
                    return (
                        <Card>
                            <Card.Content>
                                <Card.Header>{item.name}</Card.Header>
                                <Card.Description>
                                    {item.email}
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    )
                })}
            </Card.Group>
        </div>
    )
}