import React from 'react'
import PostList from '../components/postList/postList'
import {Container } from 'react-bootstrap';


export default function blog(props) {

    return (
      <Container>
          <PostList></PostList>
      </Container>
    )
}
